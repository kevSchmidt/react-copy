import React from "react";

import Nav from "./Nav";

const Gallery = (props) => {
  const images = props.mainData.map((item) => {
    const { id, name, img } = item;
    return <img src={img} alt={name} key={id} className="inner-img" />;
  });
  return (
    <section className="gallery-section">
      <Nav />
      <div>{images}</div>
    </section>
  );
};

export default Gallery;
