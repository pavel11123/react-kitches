function CardVideo(propsVideo) {
  return (
    <div className="card__video">
      <div className="card__video-vine">
        <video
          poster="/img/photo/content-photo-2.png"
          controls
          preload="metadata"
        >
          <source type="video/webm" src={propsVideo.videoWebm} />
          <source type="video/webm" src={propsVideo.videoMp4} />
        </video>
      </div>
    </div>
  );
}

export default CardVideo;
