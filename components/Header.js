import React from "react";

const Header = () => {
  return (
    <nav class="navbar">
    <div class="content">

      <div class="logo">
      <a class="logohead" href="#"> <img src={`/unnamed.png`} alt="" className="img" /><h>MailerDaemon</h></a>
      </div>
      <div><ul class="menu-list">
        <li><a href="https://www.iitism.ac.in/iitismnew/"  target="_blank">IITISM</a></li>
        <li><a href="http://placementor-iit-dhanbad.vercel.app" target="_blank">placementor</a></li>
    
        <li><a href="#">Contact</a></li>
      </ul></div>
      <div class="icon menu-btn">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </nav>
    // <div>
    //   <div className="head">
    //     <img src={`/unnamed.png`} alt="" className="img" />
    //     <h1 className="h1">Mailer</h1>
    //     <h1 className="h2">Daemon</h1>
    //     <a
    //       className="placementor"
    //       // style={{ fontSize: 15, marginLeft: 1190 }}
    //       target="_blank"
    //       href=""
    //     >
    //       Placementor
    //     </a>

    //     <a
    //       className="iitism"
    //       // style={{ fontSize: 15, marginLeft: 1320 }}
    //       target="_blank"
    //       href=""
    //     >
    //       IIT(ISM)
    //     </a>
    //   </div>
    // </div>
  );
};

export default Header;
