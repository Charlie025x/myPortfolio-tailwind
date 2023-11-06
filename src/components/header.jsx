import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <header
        id="header"
        className=" text-[#ffffff] fixed top-0 left-0 bottom-0 w-[300px] bg-[#040b14]"
      >
        {/* <i class="bi bi-list mobile-nav-toggle d-xl-none"></i> */}

        <FontAwesomeIcon
          icon={faBars}
          className="box-border fixed top-5 right-5 text-2xl bg-[#149ddd] aspect-square p-2 rounded-full cursor-pointer"
        />

        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              // className="img-fluid rounded-circle"
              className="rounded-full my-4 mx-auto w-[120px] border-8 border-[#2c2f3f]"
            />
            {/* <h1 className="text-light"> */}
            <h1 className="text-center text-2xl">
              <a href="#hero">Charlie Alonso</a>
            </h1>
            {/* <div className="social-links mt-3 text-center"> */}
            <div className="social-links mt-3 text-center">
              {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
              {/* <a href="#" className="facebook"><i className=""></i></a> */}
              {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
              {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="bg-[#2c2f3f] rounded-full box-border aspect-square p-2 hover:bg-[#149ddd]"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="bg-[#2c2f3f] rounded-full box-border aspect-square p-2 ml-2 hover:bg-[#149ddd]"
              />
              <a
                href="https://www.linkedin.com/in/charliealonso002/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/Charlie025x"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </div>
      </header>
    </>
  );
}
