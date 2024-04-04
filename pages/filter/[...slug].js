import CarsCat from "@/component/template/CarsCat";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const carFilter = carsData.filter(
    (car) => car.price < max && car.price > min
  );
  if (!carFilter.length) {
    return <h1>No car found</h1>;
  }
  console.log(carFilter);
  return (
    <div>
      <CarsCat data={carFilter} />
    </div>
  );
}

export default FilteredCars;
