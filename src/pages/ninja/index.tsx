import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import StylesTable from "@/styles/Table.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  try {
    let response: any = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
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

export default function Home(props: any) {
  const router = useRouter();

  return (
    <div className={styles.mainContainer}>
      <div className="container p-5 m-5 ">
        <h1>Ninjas List </h1>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">UserName</th>
                <th scope="col">name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {props.ninjas.map((buscat: any) => {
                return (
                  <tr
                    className={StylesTable.tableBody}
                    key={buscat.id}
                    onClick={() => {
                      router.push(`ninja/${buscat.id}`);
                    }}
                  >
                    <th scope="row">{"#" + buscat.id}</th>
                    <td>{"@" + buscat.username}</td>
                    <td>{buscat.name}</td>
                    <td>{buscat.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
