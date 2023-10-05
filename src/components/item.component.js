import React from "react";

const Item = ({ data, setData }) => {

  return (
    <div
      className="item col-lg-5 col-auto"
      data-bs-toggle="modal"
      data-bs-target="#itemModal"
      onClick={() => setData(data)}
    >
      <div className="hstack gap-3 align-items-start">
        <div className="vstack gap-1">
          <div className="title">{data.name}</div>
          <p className="desc">
            {data.description.length > 60 ? `${data.description.slice(0, 60)}...` : data.description}
          </p>
          <p className="kcal">{data.calories} kcal</p>
          <p className="price">£{data.price}</p>
        </div>
        <div className="img-wrapper">
          <img
            src={process.env.REACT_APP_BE_URL+"/images/"+ data.image || "/assets/images/img2.jpg"}
            alt={data.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
