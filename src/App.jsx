function App() {
  return (
    <div className="wrapper">
      <header className="header__main">
        <div className="d-fl-wrap">
          <div className="info-left d-flex">
            <div className="header__logo">
              <img src="/img/icon/logo.svg" alt="logo" />
            </div>
          </div>

          <div className="info-right">
            <div className="d-fl-wrap">
              <div className="info d-fl-wrap">
                <a href="#" className="phone d-flex">
                  +7 (902) 650-44-33
                </a>
                <span className="location d-flex">
                  Волгоград, бульвар 30-летия Победы, 39Ак3
                </span>
              </div>
              <div className="info d-fl-wrap">
                <a href="#" className="btn info__btn">
                  Перезвоните мне
                </a>
                <a href="#" className="btn info__btn">
                  Как проехать?
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

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
                <div className="card__photo">
                  <div className="card__photo-img">
                    <img src="/img/photo/content-photo-1.png" alt="logo" />
                  </div>
                </div>

                <div className="card__video">
                  <div className="card__video-vine">
                    <video
                      poster="/img/photo/content-photo-2.png"
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

      <footer className="footer">
        <div className="footer-top d-fl-column">
          <div className="footer__info d-fl-wrap">
            <h2>Закзать кухню от</h2>
            <div className="footer__logo">
              <img src="/img/icon/footer-logo.svg" alt="logo" />
            </div>
          </div>
          <div className="form__main">
            <form name="form" method="POST">
              <div className="footer__form d-fl-wrap">
                <div className="d-fl-column">
                  <div className="form__input">
                    <input
                      type="text"
                      name="form-name"
                      id="form-name"
                      className="input"
                      autoComplete="off"
                      placeholder=" "
                    />
                    <label className="input__label" htmlFor="form-name">
                      Ваше имя
                    </label>
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      name="form-phone"
                      id="form-phone"
                      className="input"
                      autoComplete="off"
                      placeholder=" "
                    />
                    <label className="input__label" htmlFor="form-phone">
                      Ваш телефон
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  id="form-button"
                  value="Получить консультацию"
                  className="form__submit"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="d-fl-wrap">
            <div className="footer-left d-fl-column">
              <span>Мы в социальных сетях</span>
              <ul className="society d-flex">
                <a href="#">
                  <li>
                    <img src="/img/icon/youtube.svg" alt="youtube" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <img src="/img/icon/vk.svg" alt="youtube" />
                  </li>
                </a>
                <a href="#">
                  <li>
                    <img src="/img/icon/tt.svg" alt="youtube" />
                  </li>
                </a>
              </ul>
            </div>

            <div className="info-right">
              <div className="d-fl-wrap">
                <div className="info d-fl-wrap">
                  <a href="#" className="phone d-flex">
                    +7 (902) 650-44-33
                  </a>
                  <span className="location d-flex">
                    Волгоград, бульвар 30-летия Победы, 39Ак3
                  </span>
                </div>
                <div className="info d-fl-wrap">
                  <a href="#" className="btn info__btn">
                    Перезвоните мне
                  </a>
                  <a href="#" className="btn info__btn">
                    Как проехать?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
