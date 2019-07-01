import React from 'react';

import cssClasses from './PeopleDataHeader.module.css';

import { Icon } from '@blueprintjs/core';

const peopleDataHeader = props => {
    const onSortData = (header) => {
        if(!header.isSorting) {
            const a  = {
                ...header,
                isSorting: true
            }
            props.onSortData(a);
        } else {
            
            const r = {
                ...header,
                descending : !header.descending
            }
            props.onSortData(r);
        }
    }

    return (
        <thead>
            <tr>
                {props.headers.map((m, i) => <th className={cssClasses.pointerCursor} key={i} propname={m.key} onClick={() => onSortData(m)}>
                    {m.name} {m.isSorting ? (m.descending ? <Icon icon="sort-desc" /> : <Icon icon="sort-asc" />) : <Icon icon="sort" />}
                </th>)}
            </tr>
        </thead>
    );
};

export default peopleDataHeader;
