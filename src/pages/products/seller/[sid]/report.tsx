import { useGetSellerResport } from "@/services/ninjaseller/getReport";
import { useRouter } from "next/router";

const SellerReport = () => {
  const router = useRouter();
  console.log(router.query.sid);
  let report = useGetSellerResport(router?.query?.sid as string);

  if (report.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Username: {report?.data?.data?.username}</h1>
      <h3>Volume: {report?.data?.data?.volume}</h3>
    </div>
  );
};

export default SellerReport;
