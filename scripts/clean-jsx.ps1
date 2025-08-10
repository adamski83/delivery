# Script PowerShell to remove {" "} from JSX/TSX files

Write-Host "Cleaning unnecessary characters in JSX/TSX files..." -ForegroundColor Green

# Find all .tsx and .jsx files (excluding node_modules)
$files = Get-ChildItem -Recurse -Include "*.tsx", "*.jsx" | Where-Object { $_.FullName -notmatch "node_modules" }

$count = 0
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Remove {" "} and replace with single space
    $content = $content -replace '\{\s*"\s+"\s*\}', ' '
    
    # Remove trailing whitespace
    $content = $content -replace '\s+$', ''
    
    # Remove multiple empty lines
    $content = $content -replace '(\r?\n){3,}', "`r`n`r`n"
    
    if ($content -ne $originalContent) {
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Cleaned: $($file.FullName)" -ForegroundColor Yellow
        $count++
    }
}

Write-Host "Cleaned $count files." -ForegroundColor Green
Write-Host "Running Prettier and ESLint..." -ForegroundColor Green

# Run Prettier and ESLint
& npm run format
& npm run lint:fix

Write-Host "Cleaning completed!" -ForegroundColor Green
