import React, { Fragment } from 'react';
import Card from '../../fragments/card';
import Loading from '../../fragments/loading';

export default function SubSection(arr) {
    return arr.section.length !== 0 ? (
        <div className="colorGrid">
            {arr.section.map(a => (<Card card={a} key={a.uid} />))}
        </div>
    ) : (
            <Fragment>
                <Loading />
            </Fragment>
        );
}
