const PengalamanComponent = () => {
  return (
    <div className="container pengalaman mt-5">
      <div className="d-flex align-items-center gap-3 ">
        <div className="list" data-aos="fade-up"></div>
        <h3 data-aos="fade-up">Pengalaman Kerja</h3>
      </div>
      <div className="d-flex py-4 w-100 flex-wrap gap-2 justify-content-center">
        <div className="card p-3" data-aos="fade-up" data-aos-delay="100">
          <h6 style={{ margin: "0" }} className="fw-bold color">
            CV Media One
          </h6>
          <p style={{ margin: "0" }} className="color">
            Karyawan Percetakan
          </p>
        </div>
        <div className="card p-3" data-aos="fade-up" data-aos-delay="150">
          <h6 style={{ margin: "0" }} className="fw-bold color">
            Akela Printis
          </h6>
          <p style={{ margin: "0" }} className="color">
            Business Owner
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3 ">
        <div className="list" data-aos="fade-up"></div>
        <h3 data-aos="fade-up">Pengalaman Organisasi</h3>
      </div>
      <div className="d-flex py-4 w-100 flex-wrap gap-2 justify-content-center">
        <div className="card p-3" data-aos="fade-up" data-aos-delay="50">
          <h6 style={{ margin: "0" }} className="fw-bold color">
            Paduan Suara Mahasiswa
          </h6>
          <p style={{ margin: "0" }} className="color">
            {" "}
            Ketua Panitia | Upgrading 2022
          </p>
        </div>
        <div className="card p-3" data-aos="fade-up" data-aos-delay="100">
          <h6 style={{ margin: "0" }} className="fw-bold color">
            Paduan Suara Mahasiswa
          </h6>
          <p style={{ margin: "0" }} className="color">
            Ketua Panitia | Choir Camp 2021
          </p>
        </div>
        <div className="card p-3" data-aos="fade-up" data-aos-delay="150">
          <h6 style={{ margin: "0" }} className="fw-bold color">
            IPPM Pangkep
          </h6>
          <p style={{ margin: "0" }} className="color">
            Departemen Media dan Informasi
          </p>
        </div>
        <div className="card p-3" data-aos="fade-up" data-aos-delay="200">
          <h6 style={{ margin: "0" }} className="fw-bold color">
            Paskibra SMAN 2 Pangkep
          </h6>
          <p style={{ margin: "0" }} className="color">
            Ketua
          </p>
        </div>
      </div>
    </div>
  );
};

export default PengalamanComponent;
