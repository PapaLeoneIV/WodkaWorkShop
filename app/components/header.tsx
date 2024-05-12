import styles from "@/styles/header.module.css";


function Header({ setSearchTerm }: { setSearchTerm: (term: string) => void }) {
    return (
        <header className="header">
            <div className={styles.square_button}>
                <span className={styles.text_header}>Wodka Workshop Rick and Morty</span>
            </div>
            <div className={styles.square_button}>
                <input
                    className={styles.search_bar}
                    type="text"
                    placeholder="Search..."
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
        </header>
    );
}

export default Header;