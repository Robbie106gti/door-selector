import React from 'react';
import Card from '../fragments/card';

export default function Home(props) {
  const params = props.location.search;
  const routes = [
    {
      title: 'Painted',
      link: 'doors/painted',
      chips: ['Paints'],
      image: ''
    },
    {
      title: 'Wood',
      link: 'doors/wood',
      chips: ['Alder', 'White Oak', 'Black Walnut'],
      image: ''
    },
    {
      title: 'Others',
      link: 'doors/other',
      chips: ['Melamine', 'Gloss', 'Metal', 'Euro Materials'],
      image: ''
    }
  ]

  return (
    <div className="grid">
      {routes.map(route => (<Card card={route} key={route.title}/>))}
    </div>
  );
}
