import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="navbar-image">
          <img
            src="https://via.placeholder.com/50x50.png?text=H"
            alt="Cool H Symbol"
          />
        </div>
        <div style={{ color: "white", fontSize: 25 }}>Harsh Kumar Verma</div>

        <div className="icons">
          {/* <!-- Icon next to text --> */}
          <div className="icon-container">
            {/* <!-- SVG Icon --> */}
            <span style={{ color: "white" }}>Skills</span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                width="10.5"
                viewBox="0 0 448 512"
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </button>
            {/* <!-- Hidden links box --> */}
            <div className="links-box">
              <a href="#link1">Link 1</a>
              <a href="#link2">Link 2</a>
              <a href="#link3">Link 3</a>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- Icon next to text --> */}
          <div className="icon-container">
            {/* <!-- SVG Icon --> */}
            <span style={{ color: "white" }}>Education</span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                width="10.5"
                viewBox="0 0 448 512"
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
              {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" height="12" width="9"
              viewBox="0 0 384 512">
              <path
                d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg> --> */}
            </button>
            {/* <!-- Hidden links box --> */}
            <div className="links-box">
              <a href="#link1">Link 1</a>
              <a href="#link2">Link 2</a>
              <a href="#link3">Link 3</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
