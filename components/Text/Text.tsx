import { cn } from "@/lib/utils";

interface TitleProps {
	children: React.ReactNode;
	className?: string;
}
import styles from "./Text.module.css";

export const Title = ({ children, className }: TitleProps) => {
	return <h2 className={cn(styles.text, className)}>{children}</h2>;
};
