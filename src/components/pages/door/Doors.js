import React, { Fragment, useEffect } from 'react';
import { useStore, useActions } from 'easy-peasy';
import { Link } from 'react-router-dom';
import CardHorizontal from '../../fragments/cardHorizontal';

export default function Doors() {
  const fetchDoors = useActions(actions => actions.fetchDoors);
  const fetchMaterials = useActions(actions => actions.fetchMaterials);
  const fetchEdges = useActions(actions => actions.fetchEdges);
  const fetchStains = useActions(actions => actions.fetchStains);

  useEffect(() => {
    fetchDoors();
    fetchMaterials();
    fetchStains();
    fetchEdges();
    // eslint-disable-next-line
  }, [])

    const doors = useStore(state => state.doors);
    let array = Object.values(doors);
    array = array.sort((a, b) => compare(a, b));
    function compare( a, b ) {
      if ( a.title < b.title ) {
        return -1;
      }
      if (a.title > b.title ) {
        return 1;
      }
      return 0;
    };

    const materials = ['painted', 'wood', 'melamine', 'euro materials','metal'];
    const types = [ 'Slab' , 'Recessed', 'Raised' ];


  return (
    <Fragment>
      <div class="row grid">
      {array.map(card => (<CardHorizontal style="max-width: 100px" card={card} key={card.uid} />))}
      </div>    
    </Fragment>
  );
}