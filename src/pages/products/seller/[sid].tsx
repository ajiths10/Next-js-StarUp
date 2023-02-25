import { GetServerSideProps } from "next";
import { seller } from "@/components/products/types/seller";
const SellerUser = (props: seller) => {
  return <div>{"Seller: Nauto-" + props.id}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const sellerId = params?.sid;

  return {
    props: {
      id: "seller-id-" + sellerId,
    },
  };
};

export default SellerUser;
