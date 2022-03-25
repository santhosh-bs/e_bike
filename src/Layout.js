import "./Layout.css";
import React from "react";
// import {useRoute} from "@react-navigation/native";
// import {useLocation} from "react-router-dom";
import QRCode from "qrcode.react";

function Layout() {
  // const route = useLocation();
  // const route = useRoute();
  return (
    <div className="App">
      <header className="App-header">
        <p>e-bike automation</p>
      </header>
      <div>
        <QRCode
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <p>scan or download to share this e-bike website</p>
      </div>
    </div>
  );
}

export default Layout;
