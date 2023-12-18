import PendidikanComponent from "../components/PendidikanComponent";
import PengalamanComponent from "../components/PengalamanComponent";

const TentangSayaPages = () => {
  return (
    <div className="py-5 tentangSaya w-100 min-vh-100 d-flex align-items-center flex-column justify-content-center">
      <h1 className="mt-5 animate__animated animate__fadeInDown">Terima kasih telah berkunjung</h1>
      <div className="col-md-12 col-lg-6 animate__animated animate__fadeInUp">
        <img src="src/assets/profil.svg" alt="profil" className="img-fluid" />
      </div>
      <div className=" container">
        <p className="deskripsi"   data-aos='fade-up'>
          Saya adalah mahasiswa jurusan sistem informasi di Universitas
          Hasanuddin yang memiliki bakat dan minat yang besar dalam bidang
          pemrograman web, Desain grafis, dan UI/UX. Oleh karena itu, untuk
          mendukung minat tersebut saya banyak belajar html, css, javascript,
          php, UI/UX, dan beberapa framework terkait serta software desain
          seperti Adobe Illustrator, Figma, dan Canva dari berbagai sumber dan
          mengimplementasikannya pada beberapa proyek yang telah dan sedang saya
          kerjakan. selain itu, untuk mendukung minat saya di bidang desain
          grafis, saya mengambil jurusan DKV pada saat pertukaran Mahasiswa di
          Institut Teknologi Bandung selama satu semester
        </p>
      </div>
      <PendidikanComponent />
      <PengalamanComponent />
    </div>
  );
};

export default TentangSayaPages;
