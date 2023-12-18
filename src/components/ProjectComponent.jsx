import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { web, graphic, uiux } from "../data/data";
import { useState } from "react";



const ProjectComponent = () => {
  const [none, setNone] = useState("ya");
  const [id, setId] = useState(-1);
  function tambahKeterangan(id) {
    setNone("aktif-none");
    setId(id);
  }
  function hapusKeterangan(id) {
    setNone("ya");
  }
  return (
    <div className="project w-100 min-vh-100">
      <h2
        className="text-center fs-3 fw-bold mb-3"
        style={{
          color: "var(--primary-color)",
          textShadow: "0px 0px 5px  rgba(0, 0, 0, 0.3)",
        }}
        data-aos="fade-up"
      >
        Proyek yang telah dibuat
      </h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        <div className="container d-flex align-items-center gap-3 w-100 ">
          <div className="list" data-aos="fade-up"></div>
          <h3 data-aos="fade-up">Website</h3>
        </div>
        {web.map((webs) => {
          return (
            <Card
              className="p-2 animate__animated animate__fadeIn p-lg-4"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div
                className="d-flex gambar-container"
                style={{ overflow: "auto", width: "30%" }}
              >
                {webs.gambar.map((gambar) => {
                  return (
                    <img
                      src={`../src/assets/${gambar}`}
                      className="rounded-1 img-fluid"
                      style={{ flexShrink: "0" }}
                    />
                  );
                })}
              </div>
              <div
                className="d-flex flex-column ms-4 info"
                style={{ width: "60%" }}
              >
                <div
                  style={{ height: "100%" }}
                  className="d-flex flex-column justify-content-between"
                >
                  <h4 className="card-title">{webs.nama}</h4>
                  <div className="card-text">
                    <p>{webs.deskripsi}</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between align-items-end">
                    <div className="d-flex align-items-end">
                      <p style={{ margin: "0" }} className="tanggal">
                        {webs.tanggal}
                      </p>
                    </div>
                    <a
                      href={webs.link == "none" ? `#${webs.id}` : webs.link}
                      disabled={webs.link === "none"}
                      style={{ height: "fit-content" }}
                    >
                      {webs.link && (
                        <Button
                          variant="danger"
                          onMouseLeave={hapusKeterangan}
                          onMouseEnter={
                            webs.link == "none"
                              ? () => {
                                  tambahKeterangan(webs.id);
                                }
                              : () => (window.location.href = `#${webs.link}`)
                          }
                          className={webs.id == id ? none : ""}
                        >
                          Lihat Web
                        </Button>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="d-flex flex-wrap justify-content-center py-4 gap-4">
        <div className="container d-flex align-items-center gap-3 w-100 ">
          <div className="list" data-aos="fade-up"></div>
          <h3 data-aos="fade-up">Desain</h3>
        </div>
        {graphic.map((webs) => {
          return (
            <Card
              className="p-2 animate__animated animate__fadeIn p-4"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div
                className="d-flex gambar-container"
                style={{ overflow: "auto", width: "30%" }}
              >
                {webs.gambar.map((gambar) => {
                  return (
                    <img
                      src={`/src/assets/${gambar}`}
                      className="rounded-1 img-fluid"
                      style={{ flexShrink: "0" }}
                    />
                  );
                })}
              </div>
              <div
                className="d-flex flex-column ms-4 info"
                style={{ width: "60%" }}
              >
                <div
                  style={{ height: "100%" }}
                  className="d-flex flex-column justify-content-between"
                >
                  <h4 className="card-title">{webs.nama}</h4>
                  <div className="card-text">
                    <p>{webs.deskripsi}</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between align-items-end">
                    <div className="d-flex align-items-end">
                      <p style={{ margin: "0" }}>{webs.tanggal}</p>
                    </div>
                    <a
                      href={webs.link == "none" ? `#${webs.id}` : webs.link}
                      disabled={webs.link === "none"}
                      style={{ height: "fit-content" }}
                    >
                      {webs.link && (
                        <Button
                          variant="danger"
                          onMouseLeave={hapusKeterangan}
                          onMouseEnter={
                            webs.link == "none"
                              ? () => {
                                  tambahKeterangan(webs.id);
                                }
                              : () => (window.location.href = `#${webs.link}`)
                          }
                          className={webs.id == id ? none : ""}
                        >
                          Lihat Desain
                        </Button>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="d-flex flex-wrap justify-content-center py-4 gap-4">
        <div className="container d-flex align-items-center gap-3 w-100 ">
          <div className="list" data-aos="fade-up"></div>
          <h3 data-aos="fade-up">UI/UX</h3>
        </div>
        {uiux.map((webs) => {
          return (
            <Card
              className="p-2 animate__animated animate__fadeIn p-4"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div
                className="d-flex gambar-container"
                style={{ overflow: "auto", width: "30%" }}
              >
                {webs.gambar.map((gambar) => {
                  return (
                    <img
                      src={`/src/assets/${gambar}`}
                      className="rounded-1 img-fluid"
                      style={{ flexShrink: "0" }}
                    />
                  );
                })}
              </div>
              <div
                className="d-flex flex-column ms-4 info"
                style={{ width: "60%" }}
              >
                <div
                  style={{ height: "100%" }}
                  className="d-flex flex-column justify-content-between"
                >
                  <h4 className="card-title">{webs.nama}</h4>
                  <div className="card-text">
                    <p>{webs.deskripsi}</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between align-items-end">
                    <div className="d-flex align-items-end">
                      <p style={{ margin: "0" }}>{webs.tanggal}</p>
                    </div>
                    <a
                      href={webs.link == "none" ? `#${webs.id}` : webs.link}
                      disabled={webs.link === "none"}
                      style={{ height: "fit-content" }}
                    >
                      {webs.link && (
                        <Button
                          variant="danger"
                          onMouseLeave={hapusKeterangan}
                          onMouseEnter={
                            webs.link == "none"
                              ? () => {
                                  tambahKeterangan(webs.id);
                                }
                              : () => (window.location.href = `#${webs.link}`)
                          }
                          className={webs.id == id ? none : ""}
                        >
                          Lihat UI/UX
                        </Button>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectComponent;
