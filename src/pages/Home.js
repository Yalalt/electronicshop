import { CATEGORY, NAVIGATION } from "../utils/db/constants";
import { useState } from "react";
import { useProductContext } from "../component/ProductsContext";
import ShowcaseHero from "../../component/ShowcaseHero";
import Navbar from "../../component/subComponent/Navbar";
import Logos from "../../component/Logos";
import Footer from "../../component/Footer";
import SpecialsProducts from "../../component/SpecialsProducts";
import style from "./home.module.css";

const Home = () => {
  const { products, setProducts } = useProductContext();
  let [selected, setSelected] = useState("all");
  let [specialData, setSpecialData] = useState();
  const [error, setError] = useState();
  // let [newData, setNewData] = useState();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios
          .get("http://localhost:3008/products")
          .then((res) => {
            if (res.status === 200) {
              console.log("Successful", res);
              return res;
            } else {
              console.log("Not successful");
              setError(error);
            }
          });
        const resProducts = await response.data;
        return resProducts;
      } catch (error) {
        console.log("Products request axios Error uuslee", error);
        setError(error);
      }
    };

    fetchProducts().then((res) => {
      setProducts(res);
      console.log("response products==> ", res);
    });
  }, []);

  // function saveData() {
  //   const newSpecials = products.filter((item) => item.category === "special");
  //   console.log("Specials data==> ", newSpecials);
  //   setSpecialData(newSpecials);
  // }


  // console.log("Data products===> ", newData);

  // const getCategory = (path) => {
  //   const copyData = newData.filter((item) => {
  //     if (item.category === path || path === "all") {
  //       return item;
  //     }
  //   });
  //   setSelected(path);
  //   console.table(copyData);
  // };

  return (
    <div className={style.homeStyleMain}>
      <Header />
      <ShowcaseHero />
      <div className={style.innerContainer}>
          <Navbar
            navigationMenus={NAVIGATION}
            getCategory={getCategory}
            selected={selected}
          />
          <Products
            category={CATEGORY}
            selected={selected}
          />
          {/* <MiddleContent /> */}
          <SpecialsProducts />
        <Logos />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
