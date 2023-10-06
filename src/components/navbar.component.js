import { AccountIcon, SearchIcon, SinupOrLoginIcon } from "../utils/images";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-md position-sticky top-0">
      <div className="container-fluid hstack gap-lg-5 gap-1">
        <a href="/" className="navbar-brand">
          <img src="/assets/icons/logo.svg" />
        </a>
        <div className="w-50 mx-auto justify-content-center d-lg-block d-none">
          <div className="input-group">
            <div className="input-group-prepend">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Username"
            />
          </div>
        </div>
        <button className="btn btn-secondary d-block d-lg-none">
          <SearchIcon />
        </button>
        <div className="ms-auto">
        <button className="btn btn-secondary me-3" onClick={handleLogin}>
          <SinupOrLoginIcon />
          <span>Sign up or log in</span>
        </button>
        <button className="btn btn-secondary">
          <AccountIcon />
          <span>Account</span>
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
