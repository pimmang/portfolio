const PendidikanComponent = () => {
  const link =
    "https://raw.githubusercontent.com/pimmang/portfolio/main/src/assets/";
  return (
    <div className="pendidikan d-flex justify-content-center mt-4">
      <div className="text-center col-6  col-xl-4 col-md-4 d-flex flex-column justify-content-between align-items-center">
        <div className="col-4 d-flex align-items-top" data-aos="fade-up">
          <img src={link + "unhas.png"} alt="unhas" className="img-fluid" />
        </div>
        <p data-aos="fade-up">
          Universitas Hasanuddin <br />
          Sistem Informasi | 3.90
        </p>
      </div>
      <div className="text-center col-6 col-xl-4 col-md-4 d-flex flex-column justify-content-between align-items-center">
        <div className="col-4 d-flex align-items-top " data-aos="fade-up">
          <img src={link + "itb.png"} alt="unhas" className="img-fluid " />
        </div>
        <p data-aos="fade-up">
          Institut Teknologi Bandung <br />
          Desain Komunikasi Visual | Exchange
        </p>
      </div>
    </div>
  );
};

export default PendidikanComponent;
