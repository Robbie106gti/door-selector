import React, { Fragment } from 'react';
import uuid from 'uuid';

const CarouselImg = ({img}) => {
    let b = false;
    b = img.image ? b = true : b;
    b = img.title.includes('drawing') ? b = false : b ;
    b = img.title.includes('edge or rail') ? b = false : b ;
    img.uid = uuid.v4();

  return b ? (
    <Fragment>
    <div className="carousel-item" href={'#'+img.title + img.uid}>
      <h2>{img.title}</h2>
      <img src={img.image} alt={img.title} />
    </div>
    </Fragment>
  ) : null;
}

export default CarouselImg;