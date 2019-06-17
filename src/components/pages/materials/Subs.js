import React from 'react'
import Card from '../../fragments/card';

export default function Subs(subs) {
    let arr = Object.values(subs);
    return (
        <div>
            {arr.map(a => (<Card card={a} key={a.uid}/>))}
        </div>
    )
}
