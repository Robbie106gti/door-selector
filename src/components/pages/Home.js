import React from 'react';
import Card from '../fragments/card';

export default function Home(props) {
  const params = props.location.search;
  return (
    <div className="twoColumn">
      <Card card={{ title: 'Materials', image: 'https://webquoin.com/catalog/images/Headers/Exterior-Materials/painted-hale%20navy.jpg', link: 'materials' + params }} key='Materials' />
      <Card card={{ title: 'Doors', image: 'https://webquoin.com/catalog/images/Doors/EastCoast-Painted-Cream-Satin-SQ-All-recessed.jpg', link: 'doors' + params }} key='Doors' />
    </div>
  );
}
