import React from "react";

import "./header.css";

const Header = () => {
  return (
    <section className="resume-header">
      <h1 className="header-text">
        LESLIE <span>OWITI</span>
      </h1>
      <ul className="header-list">
        <li>
          {`(919) 949-4683`}
        </li>
        <li>{`leslieowiti@gmail.com`}</li>
        <li>{`Apex, North Carolina, United States`}</li>
        <li>
          <a href="linkedin.com/in/Leslie-owiti-0b447952">{`linkedin.com/in/Leslie-owiti-0b447952`}</a>
        </li>
      </ul>
    </section>
  );
};

export default Header;
