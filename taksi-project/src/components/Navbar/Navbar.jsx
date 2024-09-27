import "./Navbar.css"
const Navbar = () => {

    return (
        <div className="">
            <nav className="taksi__navbar">
                <p>TAKSI KARI TORNIKOSKI </p>

                <ul className="taksi__navbar-list">
                <li>hinnasto</li>
                <li>palvelut</li>
                <li>yhteystiedot</li>
                </ul>

                <button className="taksi__navbar-button">tilaa</button> 
                </nav>
        </div>
     )
  }
  
  export default Navbar;