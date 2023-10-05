import { FbIcon, InstaIcon, TwitterIcon } from "../utils/images";

const Footer = () => {
  return (
    <footer>
      <div className="container py-4 mt-4">
        <div className="row gap-3">
          <div className="col-lg col-md-auto col-wrapper">
            <h3>Discover Deliveroo</h3>
            <a href="/#">Investors</a>
            <a href="/#">About us</a>
            <a href="/#">Takeaway</a>
            <a href="/#">More</a>
            <a href="/#">Newsroom</a>
            <a href="/#">Engineering blog</a>
            <a href="/#">Design blog</a>
            <a href="/#">Gift cards</a>
            <a href="/#">Deliveroo students</a>
            <a href="/#">Careers</a>
            <a href="/#">Restaurant signup</a>
            <a href="/#">Become a rider</a>
          </div>
          <div className="col-lg col-md-auto col-wrapper">
            <h3>Legal</h3>
            <a href="/#">Terms and conditions</a>
            <a href="/#">Privacy</a>
            <a href="/#">Cookies</a>
            <a href="/#">Modern Slavery Statement</a>
            <a href="/#">Tax Strategy</a>
            <a href="/#">Section 172 Statement</a>
          </div>
          <div className="col-lg col-md-auto col-wrapper">
            <h3>Help</h3>
            <a href="/#">Contact</a>
            <a href="/#">FAQs</a>
            <a href="/#">Cuisines</a>
            <a href="/#">Brands</a>
          </div>
          <div className="col-lg col-md-auto col-wrapper">
            <h3>Take Deliveroo with you</h3>
            <a href="/#">
              <img
                className="header-img"
                src="/assets/images/appstore.png"
                alt={"Download from app store"}
              />
            </a>
            <a href="/#">
              <img
                className="header-img"
                src="/assets/images/googleplay.png"
                alt={"Get it on google play"}
              />
            </a>
          </div>
        </div>
        <div className="row my-3 align-items-center">
          <div className="col col-social">
            <div className="hstack gap-3">
              <a href="/#" className="fb-icon">
                <FbIcon />
              </a>
              <a href="/#" className="twitter-icon">
                <TwitterIcon />
              </a>
              <a href="/#" className="insta-icon">
                <InstaIcon />
              </a>
            </div>
          </div>
          <div className="col-auto d-flex ms-auto">
            <small>© 2023 Deliveroo</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;