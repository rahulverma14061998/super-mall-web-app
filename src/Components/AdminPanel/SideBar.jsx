import {
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaChartLine,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <FaHome /> Dashboard
        </li>
        <li>
          <FaUsers /> Users
        </li>
        <li>
          <FaBoxOpen /> Products
        </li>
        <li>
          <FaChartLine /> Analytics
        </li>
        <li>
          <FaCogs /> Settings
        </li>
        <li>
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
}
