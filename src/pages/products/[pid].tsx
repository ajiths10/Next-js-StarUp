import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs/promises";
import path from "path";
import { product } from "@/components/types/product";

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const productId = params.pid;
  console.log("id==>", productId);
  try {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    let responseData: any = await fs.readFile(filePath);
    const data = await JSON.parse(responseData);

    const productItem = data.products.find(
      (item: product) => item.id === productId
    );

    return {
      props: {
        loadedProduct: productItem,
      },
    };
  } catch (error) {
    return {
      props: {
        loadedProduct: [],
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
};

const ProductItem = (props: { loadedProduct: product }) => {
  const { loadedProduct } = props;

  return (
    <div className="container p-5 m-5">
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
};

export default ProductItem;
