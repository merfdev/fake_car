import CarsCat from "@/component/template/CarsCat";
import carsData from "@/data/carsData";

function Sport() {
  const sportcars = carsData.filter((car) => car.category === "sport");
  return (
    <div>
      <CarsCat data={sportcars} />
    </div>
  );
}

export default Sport;
