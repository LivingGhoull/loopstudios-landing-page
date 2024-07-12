interface Props {
  title1: string,
  title2: string,
  src: string,
  alt: string,
}

function CreationCard(prop: Props) {
  return (
    <div className="our-creation__list__card">
      <img src={prop.src} alt={prop.alt} />
      <div className="our-creation__list__card__header">
        <h3>{prop.title1}</h3>
        <h3>{prop.title2}</h3>
      </div>
    </div>
  );
}

export default CreationCard;