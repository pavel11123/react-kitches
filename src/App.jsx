import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPhoto from "./components/CardPhoto";
import CardVideo from "./components/CardVideo";

const arrPhoto = [
  {
    imageUrl: "/img/photo/content-photo-1.webp",
  },
  {
    imageUrl: "/img/photo/content-photo-2.webp",
  },
  {
    imageUrl: "/img/photo/content-photo-3.webp",
  },
  {
    imageUrl: "/img/photo/content-photo-4.webp",
  },
  {
    imageUrl: "/img/photo/content-photo-5.webp",
  },
  {
    imageUrl: "/img/photo/content-photo-6.webp",
  },
];

const arrVideo = [
  {
    videoWebm: "/video/video-1.webm",
    videoMp4: "/video/video-1.mp4",
  },
  {
    videoWebm: "/video/video-1.webm",
    videoMp4: "/video/video-1.mp4",
  },
  {
    videoWebm: "/video/video-1.webm",
    videoMp4: "/video/video-1.mp4",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <div className="content">
          <div className="container">
            <div className="content-top">
              <ul className="d-flex">
                <li>Вся мебель</li>
                <li>Кухни</li>
                <li>Шкафы и тумбы</li>
              </ul>
            </div>
          </div>

          <section className="content-main">
            <div className="container">
              <div className="card-grid">
                {arrPhoto.map((obj, index) => (
                  <CardPhoto key={index} imageUrl={obj.imageUrl}></CardPhoto>
                ))}
                {arrVideo.map((obj, index) => (
                  <CardVideo
                    key={index}
                    videoWebm={obj.videoWebm}
                    videoMp4={obj.videoMp4}
                  ></CardVideo>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
