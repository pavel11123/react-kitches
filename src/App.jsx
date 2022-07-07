import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPhoto from "./components/CardPhoto";
import CardVideo from "./components/CardVideo";

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
                <CardPhoto />

                <CardVideo />

                <div className="card__photo">
                  <div className="card__photo-img">
                    <img src="/img/photo/content-photo-3.png" alt="logo" />
                  </div>
                </div>

                <div className="card__video">
                  <div className="card__video-vine">
                    <video
                      poster="/img/photo/content-photo-4.png"
                      controls
                      preload="metadata"
                    >
                      <source type="video/webm" src="/video/video-1.webm" />
                      <source type="video/webm" src="/video/video-1.mp4" />
                    </video>
                  </div>
                </div>

                <div className="card__photo">
                  <div className="card__photo-img">
                    <img src="/img/photo/content-photo-5.png" alt="logo" />
                  </div>
                </div>

                <div className="card__photo">
                  <div className="card__photo-img">
                    <img src="/img/photo/content-photo-6.png" alt="logo" />
                  </div>
                </div>

                <div className="card__photo">
                  <div className="card__photo-img">
                    <img src="/img/photo/content-photo-7.png" alt="logo" />
                  </div>
                </div>

                <div className="card__video">
                  <div className="card__video-vine">
                    <video
                      poster="/img/photo/content-photo-8.png"
                      controls
                      preload="metadata"
                    >
                      <source type="video/webm" src="/video/video-1.webm" />
                      <source type="video/webm" src="/video/video-1.mp4" />
                    </video>
                  </div>
                </div>

                <div className="card__photo">
                  <div className="card__photo-img">
                    <img src="/img/photo/content-photo-9.png" alt="logo" />
                  </div>
                </div>
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
