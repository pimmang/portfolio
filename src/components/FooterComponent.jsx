const FooterComponent = () => {
  return (
    <div className="footer w-100 text-center mt-5">
      <h3 data-aos="fade-up" data-aos-delay="50">
        Tertarik untuk bekerja sama?
      </h3>
      <p data-aos="fade-up" data-aos-delay="100">
        Ayo buat hal yang menarik
      </p>
      <a href="https://wa.me/+6282188740479">
        <button
          className="btn btn-danger"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Hubungi Saya
        </button>
      </a>
    </div>
  );
};

export default FooterComponent;
