import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: { slug: string };
}

const validCategories = [
  "mobiles",
  "appliances",
  "smartphones",
  "air-conditioners",
  "washing-machine",
  "kitchen-appliances",
  "gadget-accessories",
];

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { slug } = params;

  if (!validCategories.includes(slug)) {
    notFound();
  }

  const categoryTitle = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">{categoryTitle}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <p className="text-gray-600">
          Products for {categoryTitle} category will be displayed here.
        </p>
        products
      </div>
    </div>
  );
};

export default CategoryPage;
