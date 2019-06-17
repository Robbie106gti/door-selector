import React, { Component } from 'react';
import M from 'materialize-css';
import CarouselImg from '../fragments/carousel-img';
import uuid from 'uuid';

export default class Carousel extends Component {
    images = [];
    constructor(images) {
        super(images);
        this.images = images.images; 
    }

    componentDidMount() {
        const elems = document.querySelectorAll('.carousel');
        const options = {
            fullWidth: true,
            indicators: true
        };
        M.Carousel.init(elems, options);         
    }

  render() {
    return (
      <div className="carousel carousel-slider center">
          {this.images.map(img => (<CarouselImg img={img} key={uuid.v4()} />))}
      </div>
    );
  }
}
