import React from "react";

const Header = () => {
  return (
    <div>
      <div className="head">
        <img src={`/unnamed.png`} alt="" className="img" />
        <h1 className="h1">Mailer</h1>
        <h1 className="h2">Daemon</h1>
        <a
          className="placementor"
          // style={{ fontSize: 15, marginLeft: 1190 }}
          target="_blank"
          href=""
        >
          Placementor
        </a>

        <a
          className="iitism"
          // style={{ fontSize: 15, marginLeft: 1320 }}
          target="_blank"
          href=""
        >
          IIT(ISM)
        </a>
      </div>
    </div>
  );
};

export default Header;
