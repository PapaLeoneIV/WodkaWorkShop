import styles from './Footer.module.css';  // Assuming you are using CSS modules

function Footer() {
    return (
      <footer className="footer">
        <p>© 2023 My Website | <a href="/privacy-policy">Privacy Policy</a></p>
        <p>Follow me on GitHub <a href="https://github.com/PapaLeoneIV">PapaLeoneIV</a></p>
      </footer>
    );
  }
  

export default Footer;