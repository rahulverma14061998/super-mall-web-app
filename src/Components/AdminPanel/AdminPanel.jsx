import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import styles from "./AdminPanel.module.css";

export default function AdminPanel() {
  return (
    <div className={styles.adminPanel}>
      <TopBar />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.mainContent}>
          {/* Here you can dynamically load content */}
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
