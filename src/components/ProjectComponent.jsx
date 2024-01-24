import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { web, graphic, uiux } from "../data/data";
import { useRef, useState } from "react";

const ProjectComponent = () => {
  const overlay = new useRef(null);
  const [value, setValue] = useState(" ");
  const [valueId, setValueId] = useState(-1);
  const link =
    "https://raw.githubusercontent.com/pimmang/portfolio/main/src/assets/";

  const handleOpen = (value, valueId) => {
    setValue(value);
    setValueId(valueId);
    console.log(value, valueId);
    overlay.current.style.display = "flex";
    // document.body.classList.add("noscroling");
  };
  const handleClose = () => {
    overlay.current.style.display = "none";
    // document.body.classList.remove("noscroling");
  };
  return (
    <div className="project w-100 min-vh-100 mt-5">
      <div ref={overlay} className="overlay">
        <i className="tutup ph ph-x-circle fs-1" onClick={handleClose}></i>
        <div onClick={handleClose} className="overlay-background"></div>
        <div className="img-overlay-container d-flex gap-1 align-items-center">
          {value === "website" &&
            web.map((webs) => {
              if (webs.id === valueId) {
                return webs.gambar.map((gambar) => (
                  <img key={gambar} src={link + gambar} className="img-fluid" />
                ));
              }
              return null;
            })}
          {value === "desain" &&
            graphic.map((webs) => {
              if (webs.id === valueId) {
                return webs.gambar.map((gambar) => (
                  <img key={gambar} src={link + gambar} className="img-fluid" />
                ));
              }
              return null;
            })}
          {value === "uiux" &&
            uiux.map((webs) => {
              if (webs.id === valueId) {
                return webs.gambar.map((gambar) => (
                  <img key={gambar} src={link + gambar} className="img-fluid" />
                ));
              }
              return null;
            })}
        </div>
      </div>
      <h2
        className="text-center fs-3 fw-bold mb-3"
        style={{
          color: "black",
        }}
        data-aos="fade-up"
      >
        Project
      </h2>
      <div className="d-flex flex-wrap">
        <div className="container d-flex align-items-center gap-3 w-100 ">
          <div className="list" data-aos="fade-up"></div>
          <h3 data-aos="fade-up">Website</h3>
        </div>
        <div className="container container-project py-4 d-flex justify-content-start gap-4 flex-wrap">
          {web.map((webs) => {
            return (
              <Card
                key={webs.id}
                className="p-2 animate__animated animate__fadeIn"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <a href={webs.link}>
                  <div className="lengkap d-flex align-items-center justify-content-center">
                    <i className="ph-fill ph-arrow-bend-up-right"></i>
                  </div>
                </a>
                <div
                  className="project-container-img d-flex"
                  onClick={() => handleOpen("website", webs.id)}
                >
                  {webs.gambar.map((gambar) => {
                    return (
                      <img
                        src={link + gambar}
                        className="rounded-1 img-fluid"
                        style={{ flexShrink: "0" }}
                      />
                    );
                  })}
                </div>
                <div className="info d-flex flex-column justify-content-end">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>{webs.nama}</h6>
                    <p>{webs.tanggal}</p>
                  </div>
                  <p>{webs.deskripsi}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center ">
        <div className="container d-flex align-items-center gap-3 w-100 ">
          <div className="list" data-aos="fade-up"></div>
          <h3 data-aos="fade-up">UI/UX Design</h3>
        </div>
        <div className="container container-project py-4 d-flex justify-content-start gap-4 flex-wrap">
          {uiux.map((webs) => {
            return (
              <Card
                className="p-2 animate__animated animate__fadeIn"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <a href={webs.link}>
                  <div className="lengkap d-flex align-items-center justify-content-center">
                    <i className="ph-fill ph-arrow-bend-up-right"></i>
                  </div>
                </a>
                <div
                  className="project-container-img d-flex"
                  onClick={() => handleOpen("uiux", webs.id)}
                >
                  {webs.gambar.map((gambar) => {
                    return (
                      <img
                        src={link + gambar}
                        className="rounded-1 img-fluid"
                        style={{ flexShrink: "0" }}
                      />
                    );
                  })}
                </div>
                <div className="info d-flex flex-column justify-content-end">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>{webs.nama}</h6>
                    <p>{webs.tanggal}</p>
                  </div>
                  <p>{webs.deskripsi}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="d-flex flex-wrap">
        <div className="container d-flex align-items-center gap-3 w-100 ">
          <div className="list" data-aos="fade-up"></div>
          <h3 data-aos="fade-up">Desain</h3>
        </div>
        <div className="container container-project py-4 d-flex justify-content-start gap-4 flex-wrap">
          {graphic.map((webs) => {
            return (
              <Card
                className="p-2 animate__animated animate__fadeIn"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <a href={webs.link}>
                  <div className="lengkap d-flex align-items-center justify-content-center">
                    <i className="ph-fill ph-arrow-bend-up-right"></i>
                  </div>
                </a>
                <div
                  className="project-container-img d-flex"
                  onClick={() => handleOpen("desain", webs.id)}
                >
                  {webs.gambar.map((gambar) => {
                    return (
                      <img
                        src={link + gambar}
                        className="rounded-1 img-fluid"
                        style={{ flexShrink: "0" }}
                      />
                    );
                  })}
                </div>
                <div className="info d-flex flex-column justify-content-end">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>{webs.nama}</h6>
                    <p>{webs.tanggal}</p>
                  </div>
                  <p>{webs.deskripsi}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
