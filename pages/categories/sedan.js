import CarsCat from "@/component/template/CarsCat";
import carsData from "@/data/carsData";

function Sedan() {
  const sedancars = carsData.filter((car) => car.category === "sedan");
  return (
    <div>
      <CarsCat data={sedancars} />
    </div>
  );
}

export default Sedan;
