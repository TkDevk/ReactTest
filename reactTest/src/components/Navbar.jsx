import {Link} from "react-router-dom"
const Navbar = () =>{
    return (
        <>
          <article className="navbar">
             <Link to="/"> Reloj Class Component </Link>
             <Link to="/3"> Manejo Eventos </Link>
             <Link to="/5"> Comp Controlado </Link>
             <Link to="/6"> useEffect </Link>
             
          </article>
        </>
    )
}

export default Navbar