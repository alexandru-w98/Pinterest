import React from "react";
import List from "../../components/list";
import Navbar from "../../components/navbar";
import * as styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles["container"]}>
      <Navbar className={styles["navbar"]} />
      <List />
    </div>
  );
};

export default Dashboard;
