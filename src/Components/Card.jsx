import React from "react";
import "./Card.css";
const Card = ({MyNews}) => {

  return <div className="card-container">
{Array.isArray(MyNews) &&
MyNews.map((item) => {
  if(!item.image){
    return null
  }else{
    return (
      <div key={item.url} className="card">
        <img src={item.image} alt="No Image" />
        <div className="content">
  <a className="title" onClick={() => window.open(item.url, "_blank")}>{item.title}</a>
  <p>{item.description}</p>
  <button onClick={() => window.open(item.url, "_blank")}>Read More</button>
        </div>
        </div>
    )
  }
})}
  </div>
};

export default Card;
