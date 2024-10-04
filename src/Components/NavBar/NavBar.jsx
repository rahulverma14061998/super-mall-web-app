import { useState } from "react";
import styles from "./NavBar.module.css";
import { MdOutlineLocalMall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.navbar}>
      <MdOutlineLocalMall className={styles.logo} />
      SmartBuy Mall
      <ul className={styles.navList}>
        <li>Home</li>
        <li>Products</li>
        <li
          className={styles.dropdown}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={handleDropdownToggle}
        >
          Categories
          <ul
            className={`${styles.dropdownMenu} ${
              isDropdownOpen ? styles.show : ""
            }`}
          >
            <li className={styles.dropdownItem}>
              Electronics
              <ul className={styles.subDropdownMenu}>
                <li>Phones</li>
                <li>Laptops</li>
                <li>Accessories</li>
              </ul>
            </li>
            <li className={styles.dropdownItem}>
              Fashion
              <ul className={styles.subDropdownMenu}>
                <li>Men's Wear</li>
                <li>Women's Wear</li>
                <li>Accessories</li>
              </ul>
            </li>
            <li className={styles.dropdownItem}>
              Home & Kitchen
              <ul className={styles.subDropdownMenu}>
                <li>Furniture</li>
                <li>Appliances</li>
                <li>Decor</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>About</li>
      </ul>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search anything" />
        <FaSearch className={styles.searchIcon} />
      </div>
    </div>
  );
}
