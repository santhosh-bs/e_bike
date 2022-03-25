import "./Layout.css";
import React from "react";
// import {useRoute} from "@react-navigation/native";
// import {useLocation} from "react-router-dom";
import QRCode from "qrcode.react";
import "./HomePage.css";

function Layout() {
  // const route = useLocation();
  // const route = useRoute();
  return (
    <div className="App">
      <header className="header1">
        <p className="text1">E-BIKE Automation</p>
      </header>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <div className="image_container">
          <QRCode
            value="https://ebike-automate.netlify.app/"
            style={{marginRight: 50}}
          />
        </div>
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="footer1">
        <p className="text1">E-Bike Automation</p>
      </div>
    </div>
  );
}

export default Layout;
