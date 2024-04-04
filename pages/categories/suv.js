import CarsCat from "@/component/template/CarsCat";
import carsData from "@/data/carsData";

function Suv() {
  const suvcars = carsData.filter((car) => car.category === "suv");
  return (
    <div>
      <CarsCat data={suvcars} />
    </div>
  );
}

export default Suv;
