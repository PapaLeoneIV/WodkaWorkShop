import styles from '@/styles/footer.module.css';  // Assuming you are using CSS modules

function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.text_container}>
        <span className={styles.footer_text}>Follow me on GitHub <a href="https://github.com/PapaLeoneIV">PapaLeoneIV</a></span>
        </div>
      </footer>
    );
  }
  

export default Footer;