const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Sam's Blog</h1>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/newblog" style={{
                    color: "White",
                    backgroundColor: "Black",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;