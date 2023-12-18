import { useState, useEffect, useRef } from "react";
import HeroImage from "../assets/profil.svg";
import ProjectComponent from "../components/ProjectComponent";
import KeahlianComponent from "../components/KeahlianComponent";
const HomePages = () => {
  const array = ["Web Developer", "UI/UX Designer", "Graphic Designer"];
  const [isi, setIsi] = useState("Web Developer");
  const [index, setIndex] = useState(0);

  const link =
    "https://raw.githubusercontent.com/pimmang/portfolio/main/src/assets/";

  setTimeout(() => {
    setIndex(index + 1);
    if (index > 1) {
      setIndex(0);
    }
  }, 4000);
  useEffect(() => {
    if (isi == array[0]) {
      setIsi(array[index]);
    } else if (isi == array[1]) {
      setIsi(array[index]);
    } else if (isi == array[2]) {
      setIsi(array[index]);
    }
  }, [index]);
  return (
    <div className="home">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 info">
            <div className="container-bio">
              <div className="d-flex align-items-center animate__animated animate__fadeInLeft">
                <h4>Selamat datang yang di sana</h4>
                <p className="handShake fs-3 ">👋</p>
              </div>
              <h3 className="fw-bold ">Saya Firman</h3>
              <div className="d-flex align-items-center">
                <p className="yaya ">Seorang</p>
                <div className="container-ul">
                  <ul>
                    <li>{isi}</li>
                  </ul>
                </div>
              </div>
              <div className="d-flex gap-3 mt-2 animate__animated animate__fadeInLeft">
                <a href="https://www.instagram.com/pim.mang">
                  <i class="ph ph-instagram-logo fs-3"></i>
                </a>
                <a href="https://github.com/pimmang">
                  <i class="ph ph-github-logo fs-3"></i>
                </a>
                <a href="https://www.linkedin.com/in/firman-firman-974837200">
                  <i class="ph ph-linkedin-logo fs-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 animate__animated animate__fadeInRight">
            <p style={{ visibility: "hidden" }}>yaya</p>
            <img
              src={link + "profil2.png"}
              alt="profil"
              className="img-fluid hero"
            />
          </div>
        </div>
      </header>
      <ProjectComponent />
      <KeahlianComponent />
    </div>
  );
};

export default HomePages;
