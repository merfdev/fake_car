import CarsCat from "@/component/template/CarsCat";
import carsData from "@/data/carsData";

function Hatchback() {
  const hatchbackcars = carsData.filter((car) => car.category === "hatchback");
  return (
    <div>
      <CarsCat data={hatchbackcars} />
    </div>
  );
}

export default Hatchback;
