import React from "react";

function Header({}) {
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">Thomas Samuel Kading</h1>
        <p class="lead">
          This is my portfolio - now built with React. This is such a fun way to
          build and present myself!
        </p>
        <hr class="my-4" />
        <p>Nav-Links</p>
        <a class="btn btn-primary btn-lg" href="/" role="button">
          About Me
        </a>
        <a class="btn btn-primary btn-lg" href="/Work" role="button">
          Work
        </a>
        <a class="btn btn-primary btn-lg" href="/ContactMe" role="button">
          Contact Me
        </a>
        <a class="btn btn-primary btn-lg" href="/Resume" role="button">
          Resume
        </a>
      </div>

      <div class="hero">
        <p>
          If you only focus on the fence, what lies beyond will always seem out
          of focus.
        </p>
      </div>
    </>
  );
}

export default Header;
