import { FaBell, FaUserCircle, FaCog } from "react-icons/fa";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <h2>Admin Panel</h2>
      <div className={styles.topBarIcons}>
        <FaBell className={styles.icon} />
        <FaUserCircle className={styles.icon} />
        <FaCog className={styles.icon} />
      </div>
    </div>
  );
}
