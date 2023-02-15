import fs from "fs/promises";
import path from "path";

const Products = ({ products }: any) => {
  return (
    <div className="container p-5 m-5">
      <ul>
        {products
          ? products.map((buscat: any, index: number) => {
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
      products: data.products,
    },
  };
};

export default Products;
