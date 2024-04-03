import { useRouter } from "next/router";
import React from "react";
import carsData from "@/data/carsData";
import CarDetails from "@/component/template/CarDetails";

function CarDetials() {
  const router = useRouter();
  const { carId } = router.query;
  const car = carsData.find((car) => carId == car.id);

  return <CarDetails {...car} />;
}

export default CarDetials;
