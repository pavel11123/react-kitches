function CardVideo() {
  return (
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
  );
}

export default CardVideo;
