import fs from "fs/promises";
import path from "path";

interface product {
  id: string;
  title: string;
  description: string;
}

const Products = ({ products }: { products: product[] }) => {
  return (
    <div className="container p-5 m-5">
      <ul>
        {products
          ? products?.map((buscat: product, index: number) => {
              return <li key={buscat.id}>{buscat.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  console.log("Re-Generating...");

  try {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    let responseData: any = await fs.readFile(filePath);
    const data = JSON.parse(responseData);

    if (!data || !data.products.length)
      throw new Error("No data found, Redirecting to / ...!!");

    return {
      props: {
        products: data.products as product[],
      },
      revalidate: 10, // create build in 10sec (cal 10sec with prev req, not every 10sec)
      notFound: false, // return 404 page (boolean)
      // redirect: {
      //   destination: '/no-data' // redirect object will be redirect the route to new one (as we defined)
      // }
    };
  } catch (err: any) {
    console.log("Error server side ==>", err.message);
    if (err.message === "No data found, Redirecting to / ...!!") {
      return {
        props: {},
        redirect: {
          destination: "/", // redirection
        },
      };
    }

    return {
      props: {},
      notFound: true, //404 page handle
    };
  }
};

export default Products;
