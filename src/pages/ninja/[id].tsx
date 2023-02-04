import axios from "axios";

interface pathObject {
  name: string;
  id: number;
}

interface getId {
  params: {
    id: number | string;
  };
}

interface responseData {
  data: Array<object>;
}

interface propsData {
  ninjas: {
    name: string;
    id: number | string;
    email: string;
    website: string;
    username: string;
    phone: number | string;
  };
}

export const getStaticPaths = async () => {
  try {
    let response: any = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );

    let ids = response.data.map((ele: pathObject) => {
      return {
        params: { id: ele.id.toString() },
      };
    });

    return {
      paths: ids,
      fallback: false,
    };
  } catch (error) {
    return {
      params: { id: 0 },
    };
  }
};

export const getStaticProps = async (context: getId) => {
  try {
    const id: number | string = context.params.id;
    let response: responseData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return {
      props: { ninjas: response && response.data ? response.data : [] },
    };
  } catch (error) {
    return {
      props: { ninjas: [] },
    };
  }
};

const Ninja = ({ ninjas }: propsData) => {
  return (
    <div className="conatiner p-5 my-5 ">
      <h2>Ninja Details</h2>
      <div>
        <p>
          <strong>Id:</strong> {ninjas.id}
        </p>
        <p>
          <strong>Name:</strong> {ninjas.name}
        </p>
        <p>
          <strong>User name:</strong> {ninjas.username}
        </p>
        <p>
          <strong>Email id:</strong>
          {ninjas.email}
        </p>
        <p>
          <strong>Phone:</strong> {ninjas.phone}
        </p>
        <p>
          <strong>Website:</strong> {ninjas.website}
        </p>
      </div>
    </div>
  );
};

export default Ninja;
