import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">Blog list</div>
            <div className="navbar-right">
                <Link href="/" className='nav-link'>Home</Link>
                <Link href="/tickets" className='nav-link'>Tickets</Link>
            </div>
        </nav>
    );
}

export default Navbar;