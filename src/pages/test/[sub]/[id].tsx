import { useRouter } from "next/router";
import { useEffect } from "react";

const Child = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("hiiiiii", router.query);
  }, [router.query]);

  return (
    <div className="container">{router.query ? router.query.id : "none"}</div>
  );
};

export default Child;
