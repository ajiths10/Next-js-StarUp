import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className="row p-3 m-2">
        <div className="col-md-2">Ninja logo</div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-1">
              <Link href="/">Home</Link>
            </div>
            <div className="col-md-1">
              <Link href="/about">About</Link>
            </div>
            <div className="col-md-1">
              <Link href="/ninja">Ninja List</Link>
            </div>
            <div className="col">
              <Link href="/products">Ninja Products</Link>
            </div>
          </div>
        </div>
        <div className={`col-md-1 ${styles.pointerChanger}`}>
          <div className="row">
            <div className="col-md-4">
              <span className="material-icons">account_circle</span>
            </div>
            <div className="col">
              <span className="material-icons">logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
