import { GetServerSideProps } from "next";
import { seller } from "@/components/products/types/seller";

const ProductSeller = (props: seller) => {
  return <div>{props.username}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req, res } = context;
  console.log(req.headers);
  return {
    props: {
      username: "Naruto",
    },
  };
};

export default ProductSeller;
