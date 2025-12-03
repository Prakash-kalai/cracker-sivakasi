import { FaFireAlt, FaShoppingCart, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <h2 className="logo">Crackers Shop</h2>

      <ul>
        <li><FaChartLine /> 
        <Link to='/'>Dashboard</Link>
        </li>
        <li><FaFireAlt /> 
        <Link to='/cracker'>Cracker</Link>
        </li>
        <li><FaShoppingCart /> 
        <Link to='/orders'>Orders</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
