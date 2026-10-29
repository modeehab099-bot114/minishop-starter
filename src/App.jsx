import Header from "./Header";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

export default function App() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      price: 15000,
    }..

    
    {
      id: 2,
      title: "Phone",
      price: 8000,
    },
    {
      id: 3,
      title: "Headphones",
      price: 1200,
    },
  ];

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
         
          <ProductCard product={product} />
        </div>
      ))}
      <Header />
      <SectionTitle title="our Product" subtitle="Discover" extra="sale" />
    </>
  );
}
