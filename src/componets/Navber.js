import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="navber container mx-auto h-20 flex items-center border-b border-sky-900 ">
      <Link to="/" className="logo text-2xl font-medium text-sky-400">
        Proxima
      </Link>
    </div>
  );
};

export default Navber;
