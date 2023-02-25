import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();
  const [sec, setSec] = useState<number>(10);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    let imer = 11;
    let myInterval = setInterval(() => {
      if (!imer) {
        clearInterval(myInterval);
        router.push("/");
      } else {
        imer -= 1;
        setSec(imer);
        setReload(!reload);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <Image
        src="/404-error-concept-illustration-free-vector.jpg"
        alt="Next.js Logo"
        width={300}
        height={200}
        priority
      />
      <h1>Ooops...</h1>
      <h2>That page cannot be found :</h2>
      <p>
        Going back to the{" "}
        <Link href="/">
          <strong>Homepage</strong>
        </Link>{" "}
        is {sec} seconds...
      </p>
      <div className="alert alert-danger" role="alert">
        404 page found !
      </div>
    </div>
  );
};

export default NotFound;
