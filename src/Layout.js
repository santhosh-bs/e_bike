import "./Layout.css";
import React, {useState} from "react";
import QRCode from "qrcode.react";
import "./HomePage.css";
import {RWebShare} from "react-web-share"; //To share website link via other apps

function Layout() {
  const downloadQRCode = () => {
    //-----Download QRCode function------//
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `eBike_qrCode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="App">
      <header className="header1">
        <p className="text1">E-BIKE Automation</p>
      </header>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          id="qr-gen"
          value="https://ebike-automate.netlify.app/"
          size={100}
          level={"H"}
          includeMargin={true}
          style={{marginRight: 50}}
        />
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
        <RWebShare
          data={{
            text: "Web Share - GfG",
            url: "https://ebike-automate.netlify.app/",
            title: "GfG",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button>Share on Web</button>
        </RWebShare>
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          id="qr-gen"
          value="https://ebike-automate.netlify.app/"
          size={100}
          level={"H"}
          includeMargin={true}
          style={{marginRight: 50}}
        />
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <div className="image_container">
          <QRCode
            id="qr-gen"
            size={100}
            level={"H"}
            includeMargin={true}
            value="https://ebike-automate.netlify.app/"
            style={{marginRight: 50}}
          />
        </div>
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          id="qr-gen"
          size={100}
          level={"H"}
          includeMargin={true}
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="App-header">
        <p>e-bike automation</p>
        <QRCode
          id="qr-gen"
          size={100}
          level={"H"}
          includeMargin={true}
          value="https://ebike-automate.netlify.app/"
          style={{marginRight: 50}}
        />
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
        <p>scan or download to share this e-bike website</p>
      </div>
      <div className="footer1">
        <p className="text1">E-Bike Automation</p>
      </div>
    </div>
  );
}

export default Layout;
