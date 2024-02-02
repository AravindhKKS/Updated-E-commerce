import "./NewsDetails.css";
import { Details } from "../../Data";

const NewsDetails = () => {
  return (
    <div className="NewsDetails">
      {Details.map((info) => (
        <div className="wrapper" key={info.id}>
          <div className="img">
            <img src={info.img} alt="" />
          </div>
          <div className="Details">
            <div className="title">{info.title}</div>
            <div className="desc">{info.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsDetails;
