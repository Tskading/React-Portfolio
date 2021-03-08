import React from "react";

function Header({}) {
  return (
    <>
      <div className="myHeader">
        <h1 className="display-4">Thomas Samuel Kading</h1>

        <hr className="my-4" />
        <p>Nav-Links</p>
        <a className="btn-lg linkBtn" href="/" role="button">
          About Me
        </a>
        <a className="btn-lg linkBtn" href="/Work" role="button">
          Work
        </a>
        <a className="btn-lg linkBtn" href="/ContactMe" role="button">
          Contact Me
        </a>
        <a className="btn-lg linkBtn" href="/Resume" role="button">
          Resume
        </a>
      </div>

      <div className="hero">
        <p>
          If you only focus on the fence, what lies beyond will always seem out
          of focus.
        </p>
      </div>
    </>
  );
}

export default Header;
