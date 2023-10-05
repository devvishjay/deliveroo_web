import { AccountIcon, SearchIcon } from "../utils.js/images";

const Navbar = () => {
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
        <button className="btn btn-secondary ms-auto">
          <AccountIcon />
          <span>Account</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
