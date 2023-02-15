import fs from "fs/promises";
import path from "path";

interface product {
  id: string;
  title: string;
  description: string;
}
[];

const Products = ({ products }: { products: product[] }) => {
  return (
    <div className="container p-5 m-5">
      <ul>
        {products
          ? products?.map((buscat: product, index: number) => {
              return <li key={buscat.id}>{buscat.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  let responseData: any = await fs.readFile(filePath);
  const data = JSON.parse(responseData);

  return {
    props: {
      products: data.products as product[],
    },
  };
};

export default Products;
