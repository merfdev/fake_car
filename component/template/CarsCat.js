import { useRouter } from "next/router";
import Back from "../icons/Back";
import Card from "../module/Card";
import styles from "./CarsCat.module.css";
function CarsCat({ data }) {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

export default CarsCat;
