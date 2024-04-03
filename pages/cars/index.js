import Categories from "@/component/module/Categories";
import CarsPage from "@/component/template/CarsPage";
import carsData from "@/data/carsData";
function index() {
  return (
    <>
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
}

export default index;
