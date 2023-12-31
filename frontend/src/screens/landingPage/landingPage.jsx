import React from "react";
import Globe from "../../components/globe/globe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import atlas from "../../images/atlas.jpeg";
import techfest24 from "../../images/techfest24.png";
import F from "../../images/F.png";

//css file
import "./landingPage.css";
function LandingPage() {
  const date = new Date();

  let days = 94 - date.getDay();
  let hours = 23 - date.getHours();
  let mins = 60 - date.getMinutes();
  let sec = date.getSeconds();

  return (
    <>
      <nav className="header">
        <img
          src={techfest24}
          alt=""
          style={{ width: "250px", margin: 5, padding: 5 }}
          className="header logo"
        />
        <button className="header login">Login</button>
      </nav>

      <div className="mainbody">
        <div className="main1">
          <section className="tagline">
            <img src={F} alt="" id="F" style={{ width: "9rem" }} />
            <div className="others">
              <h2 style={{ color: "white", marginBottom: 20, marginTop: 20 }}>
                uture
              </h2>
              <div className="orges">
                <h2 className="O"></h2>
                <h2>rges</h2>
              </div>
            </div>
            <h2 id></h2>
          </section>
          <p className="landingText">
            Embrace the Future of Sustainable Development through techFEST'24.
            Step into a world where technology and innovation redefine the
            boundaries of sustainability.
          </p>
          <div className="register">
            <div className="countdown">
              <div className="time">
                <h2 style={{ fontSize: "2rem" }}>{days}</h2>
                <p
                  style={{
                    fontSize: "1rem",
                    position: "relative",
                    bottom: "10%",
                  }}
                >
                  days
                </p>
              </div>
              <div className="time">
                <h2 style={{ fontSize: "2rem" }}>{hours}</h2>
                <p
                  style={{
                    fontSize: "1rem",
                    position: "relative",
                    bottom: "10%",
                  }}
                >
                  hours
                </p>
              </div>
              <div className="time">
                <h2 style={{ fontSize: "2rem" }}>{mins}</h2>
                <p
                  style={{
                    fontSize: "1rem",
                    position: "relative",
                    bottom: "10%",
                  }}
                >
                  minutes
                </p>
              </div>
              <div className="time">
                <h2 style={{ fontSize: "2rem" }}>{sec}</h2>
                <p
                  style={{
                    fontSize: "1rem",
                    position: "relative",
                    bottom: "10%",
                  }}
                >
                  seconds
                </p>
              </div>
            </div>
            <h2 id="registerBtn">Register Now</h2>
          </div>
        </div>
        <div className="main2">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {/* <ScrollControls pages={3} damping={0.25} /> */}
            <Globe imageUrl={atlas} />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
