import React from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import StylesTable from "@/styles/Table.module.css";
import axios from "axios";
import { useRouter } from "next/router";

interface ninja {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
}

export const getStaticProps = async () => {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );

    return {
      props: {
        ninjas: response && response.data ? (response.data as ninja[]) : [],
      },
    };
  } catch (error) {
    return {
      props: { ninjas: [] as ninja[] },
    };
  }
};

export default function Home({ ninjas }: { ninjas: ninja[] }) {
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
              {ninjas.map((buscat: ninja) => {
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
