import { request } from "@/util/axios-util";
import { useQuery } from "@tanstack/react-query";

const sellerRepostReq = ({ queryKey }: any) => {
  return request({ url: `/seller_report/${queryKey[1]}.json`, method: "get" });
};

export const useGetSellerResport = (id: string) => {
  return useQuery({
    queryKey: ["get-seller-report", id],
    queryFn: sellerRepostReq,
  });
};
