import Categories from "@/component/module/Categories";
import SearchBar from "@/component/module/SearchBar";
import CarsPage from "@/component/template/CarsPage";
import carsData from "@/data/carsData";
function index() {
  return (
    <>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
}

export default index;
