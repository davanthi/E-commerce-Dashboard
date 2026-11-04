import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';



function Navbar() {
 const[userData,setUserData]=React.useState(localStorage.getItem("user"))
 const navigate=useNavigate();
 useEffect(() => {
   const handleAuthChange = () => {
     setUserData(localStorage.getItem("user"));
   };

   window.addEventListener("authChange", handleAuthChange);

   return () => {
     window.removeEventListener("authChange", handleAuthChange);
   };
 }, []);
 const logout = () => {
   localStorage.removeItem("user");
   setUserData(null);
   window.dispatchEvent(new Event("authChange"));
   navigate("/login");
 };
 
  return (
    <header className="site-header">
      <Link className="brand" to={userData ? "/" : "/login"}>
        <span className="brand-mark">SK</span>
        <span className="brand-copy">
          <strong>ShopKart</strong>
          <span>Product records</span>
        </span>
      </Link>
      {userData ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products List</Link>
          </li>
          <li>
            <Link to="/add-product">Add Products</Link>
          </li>
          <li>
            <Link to="/update-product">Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul">
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar