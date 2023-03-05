import React from 'react';

import reactLogo from "./images/Adiba.png";


export default function Home() {
  return (
    <div className="logo">
      <div className='bubble'>
        <h1>Hey, I'm Adiba </h1>
        <p>
          Welcome to my react Portfolio page

        </p>
        <p>
          Powered by..
        </p>
        <p>
          <ion-icon name="logo-javascript"></ion-icon>
          <ion-icon name="logo-react"></ion-icon>
          <ion-icon name="logo-html5"></ion-icon>
          <ion-icon name="logo-css3"></ion-icon>
        </p>
      </div>

     
        <img className='img' src={reactLogo} alt="react logo" />
    

      <div className='icon'>
        <a   style={{color: 'rgb(48, 46, 46)'}}
        href="https://github.com/AdibaSjd"><ion-icon name="logo-github"></ion-icon></a>
        <a style={{color: 'rgb(48, 46, 46)'}}
        href="mailto:adibaf.sjd@gmail.com"><ion-icon name="mail-outline"></ion-icon></a>
        <a style={{color: 'rgb(48, 46, 46)'}}
        href="https://www.linkedin.com/in/adiba-sajid-8b6270261/"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a  style={{color: 'rgb(48, 46, 46)'}}
        href="https://www.instagram.com/adxbas/?hl=en-gb"><ion-icon name="logo-instagram"></ion-icon></a>
      </div>
    </div>
  );
}
