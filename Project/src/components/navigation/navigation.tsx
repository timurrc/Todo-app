import { Link, Outlet } from "react-router-dom";
import styles from "./navigation.module.scss";
import info from "../../assets/about.svg";
const navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <h2>New Day</h2>
        <img src={info} alt="" title="Автор timurrc" />
      </nav>
      <Outlet />
    </>
  );
};

export default navigation;
