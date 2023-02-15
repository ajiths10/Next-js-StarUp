const Products = ({ products }: any) => {
  console.log(products);
  return (
    <div className="container p-5 m-5">
      <ul>
        {products
          ? products.map((buscat: any, index: number) => {
              return <li key={buscat.id}>{buscat.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      products: [
        { id: "p1", title: "Product 1", description: "This is product 1" },
      ],
    },
  };
};

export default Products;
