import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/services" style={styles.link}>
            Services
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "1rem",
    backgroundColor: "#282c34",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  li: {},
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
