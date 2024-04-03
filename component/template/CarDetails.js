import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import styles from "./CarDetails.module.css";
function CarDetails(props) {
  const {
    name,
    model,
    image,
    distance,
    id,
    price,
    location,
    year,
    description,
  } = props;
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h3>
        {name} {model}
      </h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>First registration</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>Kms driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extera Information</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price:</p>
          <span>{price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default CarDetails;
