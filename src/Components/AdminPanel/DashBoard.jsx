import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h3>Dashboard Overview</h3>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h4>Total Users</h4>
          <p>345</p>
        </div>
        <div className={styles.statCard}>
          <h4>Total Sales</h4>
          <p>$24,000</p>
        </div>
        <div className={styles.statCard}>
          <h4>Total Products</h4>
          <p>78</p>
        </div>
      </div>
    </div>
  );
}
