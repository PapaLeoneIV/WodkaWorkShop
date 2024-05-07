import Link from 'next/link';

function Header() {
    return (
        <header className="header">
                    <div>
                        <a className="square_button">
                            <span className='text_header'>
                            Wodka Workshop Rick and Morty
                            </span>
                        </a>
                    </div>
                    <div>
                        <a className="square_button">
                            <span className='text_header align:right background-color:#333'>
                            Future Search Bar...
                            </span>
                        </a>
                    </div>
    </header>
    );
}


export default Header;
