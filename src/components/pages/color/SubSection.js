import React, { Fragment } from 'react';
import Card from '../../fragments/card';
import Loading from '../../fragments/loading';

export default function SubSection(obj) {
    return obj.section.colors.length !== 0 ? (
        <div className="colorGrid">
            {obj.section.colors.map(a => (<Card card={{ ...a, link: 'colors/' + obj.section.mat + '/' + a.title + obj.section.props.location.search }} key={a.uid} />))}
        </div>
    ) : (
            <Fragment>
                <Loading />
            </Fragment>
        );
}
