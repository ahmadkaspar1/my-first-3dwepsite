import { NavLink } from "react-router-dom";

// التصدير المسمي
 const Navbar = () => {
  return (
    <header className="header">
       <NavLink to="/" className={"w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md "}>
<p className="text-blue-600">AH</p>
</NavLink>
<nav className=" flex text-lg gap-7 font-medium">
<NavLink to="/About" className={({isActive})=> isActive?
"text-blue-500":
"text-black"
}>
  <p> About</p>
    </NavLink>
    <NavLink to="/Project" className={({isActive})=> isActive?
"text-blue-500":
"text-black"
}>
  <p> project</p>
    </NavLink>
    <NavLink to="/contact" className={({isActive})=> isActive?
"text-blue-500":
"text-black"
}>
  <p> contact</p>
    </NavLink>
</nav>
       
    </header>
  );
};

// التصدير الافتراضي
export default Navbar;
