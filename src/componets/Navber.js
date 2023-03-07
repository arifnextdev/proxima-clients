import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="navber container mx-auto h-20 flex justify-between items-center border-b border-sky-900 ">
      <Link to="/" className="logo text-2xl font-medium text-sky-400">
        Proxima
      </Link>

      <nav className="navber flex gap-5">
        <Link to="/login " className="hover:text-sky-400 duration-300">
          {" "}
          Login{" "}
        </Link>
        <Link to="/signup" className="hover:text-sky-400 duration-300">
          {" "}
          Signup{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Navber;
