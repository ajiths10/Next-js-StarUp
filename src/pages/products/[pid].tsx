import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs/promises";
import path from "path";
import { product } from "@/components/types/product";

const getData = async () => {
  try {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    let responseData: any = await fs.readFile(filePath);
    const data = await JSON.parse(responseData);
    return data;
  } catch (error) {
    return error;
  }
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const productId = params.pid;
  console.log("id==>", productId);
  try {
    let data = await getData();
    const productItem = data?.products?.find(
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

export const getStaticPaths: GetStaticPaths = async () => {
  let data = await getData();

  const ids = data.products.map((product: product) => product.id);
  const pathParams = ids.map((id: Partial<product>) => ({
    params: { pid: id },
  }));

  return {
    paths: pathParams,
    // fallback: true, //we need to handle the undefined value exeption (like !loadedProduct)
    // fallback: "blocking", // Will automatically block , but little slow, no need to handle any situaton
    fallback: false, // will create all posible ids file (pre generate all)
  };
};

const ProductItem = (props: { loadedProduct: product }) => {
  const { loadedProduct } = props;

  //   if (!loadedProduct)
  //     return (
  //       <div className="container p-5 m-5">
  //         {" "}
  //         <p>Loading...</p>
  //       </div>
  //     );

  return (
    <div className="container p-5 m-5">
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
};

export default ProductItem;
