import { CATEGORY, NAVIGATION } from "../../utils/data";
import { useState } from "react";
import ShowcaseHero from "../../component/ShowcaseHero";
import Navbar from "../../component/subComponent/Navbar";
import Logos from "../../component/Logos";
import Footer from "../../component/Footer";
import style from "./home.module.css";
import { ProductsContext } from "../component/ProductsContext";
import SpecialsProducts from "../../component/SpecialsProducts";

const Home = () => {
  const products = 
  let [selected, setSelected] = useState("all");
  let [newData, setNewData] = useState();
  let [specialData, setSpecialData] = useState();

  const saveData = (data) => {
    const newSpecials = data.filter((item) => item.category === "special");
    console.log("Specials data==> ", newSpecials);
    setSpecialData(newSpecials);
  }

  // useEffect(() => {
  //   axios.get("http://localhost:3008/products").then((res) => {
  //     if (res.status === 200) {
  //       const receivedData = res.data;
  //       setNewData(receivedData);
  //       console.log("Products list 0_0) ==> ", receivedData);
  //       saveData(receivedData);
  //     } else {
  //       console.log("Not successful");
  //     }
  //   });
  // }, []);

  // console.log("Data products===> ", newData);

  const getCategory = (path) => {
    const copyData = newData.filter((item) => {
      if (item.category === path || path === "all") {
        return item;
      }
    });
    setSelected(path);
    console.table(copyData);
  };

  return (
    <div className={style.homeStyleMain}>
      <ShowcaseHero />
      <div className={style.innerContainer}>
        <ProductsContext.Provider value={{newData, specialData}}>
          <Navbar
            navigationMenus={NAVIGATION}
            getCategory={getCategory}
            selected={selected}
          />
          {/* <Products
            category={CATEGORY}
            selected={selected}
          /> */}
          {/* <MiddleContent /> */}
          <SpecialsProducts />
        </ProductsContext.Provider>
        <Logos />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
