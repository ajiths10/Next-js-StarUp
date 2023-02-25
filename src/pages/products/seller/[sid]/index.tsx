import { GetServerSideProps } from "next";
import { seller } from "@/components/products/types/seller";
import Link from "next/link";

const SellerUser = (props: seller) => {
  return (
    <div>
      <h1>{"Seller: Nauto-" + props.id}</h1>
      <div>
        <Link href={`/products/seller/${props.sellerId}/report`}>Report</Link>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const sellerId = params?.sid;

  return {
    props: {
      id: "seller-id-" + sellerId,
      sellerId,
    },
  };
};

export default SellerUser;
