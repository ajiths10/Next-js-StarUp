import { GetStaticPaths, GetStaticProps } from "next";
import { product } from "@/components/products/types/product";
import { getData } from "@/components/products/common/product";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const productId = params.pid;
  console.log("id==>", productId);
  try {
    let data = await getData();
    const productItem = data?.products?.find(
      (item: product) => item.id === productId
    );

    // if (!productId) {
    //   return { notFound: true };
    // }

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
    //fallback: true, //for handling no product data with - notFound: true
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
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
      <div>
        <Link
          href={`/products/seller/${loadedProduct.seller_id}`}
          className="p-2 g-col-6"
        >
          {"--> Seller details"}
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
