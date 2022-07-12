function CardPhoto(propsPhoto) {
  return (
    <div className="card__photo">
      <div className="card__photo-img">
        <img src={propsPhoto.imageUrl} alt="logo" />
      </div>
    </div>
  );
}

export default CardPhoto;
