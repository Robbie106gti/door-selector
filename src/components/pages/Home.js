import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../fragments/card';

export default function Home() {
  return (
    <div className="twoColumn">
      <Card card={{ title: 'Materials', image: 'https://webquoin.com/catalog/images/Headers/Exterior-Materials/painted-hale%20navy.jpg', link: 'materials' }} key='Materials' />
      <Card card={{ title: 'Doors', image: 'https://webquoin.com/catalog/images/Doors/EastCoast-Painted-Cream-Satin-SQ-All-recessed.jpg', link: 'doors' }} key='Doors' />
    </div>
  );
}
