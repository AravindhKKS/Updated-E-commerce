import { CatItems } from "../../Data";
import CategorieItem from "../CategorieItem/CategorieItem";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="Categories">
      {CatItems.map((item) => (
        <CategorieItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
