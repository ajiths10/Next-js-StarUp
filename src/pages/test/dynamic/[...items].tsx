import { useRouter } from "next/router";
import { useEffect } from "react";

const Dynamic = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("hiiiiii", router.query);
  }, [router.query]);

  return (
    <div className="container">
      All dynamic routes: {router.query ? router.query.items : "none"}
    </div>
  );
};

export default Dynamic;
