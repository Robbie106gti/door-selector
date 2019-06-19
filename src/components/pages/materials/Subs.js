import React, { Fragment } from 'react';
import Card from '../../fragments/card';
import Loading from '../../fragments/loading';

export default function Subs(obj) {
    let arr = Object.values(obj.section.sub) || null;
    // console.log(arr);
    return arr.length !== 0 ? (
        <div className="colorGrid">
            {arr.map(a => (<Card card={a} key={a.uid} />))}
        </div>
    ) : (
            <Fragment>
                <Loading />
            </Fragment>
        );
}
