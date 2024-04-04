import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";
function SearchBar() {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
      setMin("");
      setMax("");
    } else {
      alert("please input min and max price");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="inter min-price"
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="inter max-price"
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
