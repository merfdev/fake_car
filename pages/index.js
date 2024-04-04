import AllButton from "@/component/module/AllButton";
import Categories from "@/component/module/Categories";
import SearchBar from "@/component/module/SearchBar";
import CarsPage from "@/component/template/CarsPage";
import carsData from "@/data/carsData";

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </>
  );
}
