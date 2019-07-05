import React from 'react';
import CardHome from '../fragments/cardHome';
import { useStoreActions } from 'easy-peasy'

export default function Home(props) {
  const matChoice = [
    {
      title: 'Painted',
      link: 'painted',
      chips: ['Paints'],
      image: 'https://webquoin.com/catalog/build/assets/samples/quite%20time.jpg'
    },
    {
      title: 'Wood',
      link: 'wood',
      chips: ['Alder', 'White Oak', 'Black Walnut'],
      image: 'https://webquoin.com/catalog/doorstyler/images/Material/walnut.jpg'
    },
    {
      title: 'Others',
      link: 'other',
      chips: ['Melamine', 'Gloss', 'Metal', 'Euro Materials'],
      image: 'https://firebasestorage.googleapis.com/v0/b/modcon-2b3c7.appspot.com/o/uploads%2Fmaterials%2FTM-01.jpg?alt=media&token=cffb2dc4-b621-4406-b172-b03f4e46839a'
    }
  ];
  const dstyleChoice = [
    {
      title: 'Slab Face Doors',
      link: 'slab',
      chips: ['Slab'],
      mats: ['painted', 'wood', 'other'],
      image: 'https://webquoin.com/catalog/images/Doors/Webquoin/Alpha.gif'
    },
    {
      title: 'Recessed Panel Doors',
      link: 'recessed',
      chips: ['Alder', 'White Oak', 'Black Walnut'],
      mats: ['painted', 'wood', 'other'],
      image: 'https://webquoin.com/catalog/images/doors/vista.jpg'
    },
    {
      title: 'Raised Panel Doors',
      link: 'raised',
      chips: ['Melamine', 'Gloss', 'Metal', 'Euro Materials'],
      mats: ['painted', 'wood'],
      image: 'https://webquoin.com/catalog/images/Doors/Webquoin/Cambridge.png'
    }
  ];
  let array = [];
  props.match.params.mat ? dstyleChoice.forEach(route => route.mats.includes(props.match.params.mat) ? array.push({...route, props}) : null) : array = matChoice;
  
  if(props.match.params.mat){
    console.log(props)
    useStoreActions(state => state.clickedMainMaterial(props.match.params.mat));
  }

  return (
    <div className="grid">
      { array.map(route => (
          <CardHome card={route} key={route.title} />
          ))
      }
    </div>
  );
}
