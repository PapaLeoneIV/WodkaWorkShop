function Header({ setSearchTerm }: { setSearchTerm: (term: string) => void }) {
    return (
        <header className="header">
            <div className="square_button">
                <span className='text_header'>Wodka Workshop Rick and Morty</span>
            </div>
            <div className="square_button">
                <input
                    className='search_bar align:right'
                    type="text"
                    placeholder="Search..."
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
        </header>
    );
}

export default Header;