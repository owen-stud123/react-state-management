import { DARK_THEME, LIGHT_THEME } from "../constants/theme";
import { useTheme } from "../context/ThemeContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
  const themeClass = theme === DARK_THEME ? styles.darkTheme : styles.lightTheme;

  return (
    <nav className={`${styles.navbar} ${themeClass}`}>
      <h1 className={styles.title}>React App</h1>
      <button className={styles.toggleButton} type="button" onClick={toggleTheme}>
        Switch to {nextTheme} Mode
      </button>
    </nav>
  );
}