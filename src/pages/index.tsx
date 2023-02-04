import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.mainConatiner}>
      <div className="container p-5 my-5 ">
        <h1>Hello </h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
      </div>
    </div>
  );
}
