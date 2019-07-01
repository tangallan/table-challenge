import React from 'react';

const peopleDataRow = (props) => {
    const headerKeys = props.headers.map(m => m.key);

    return <>
        <tbody>
            {props.data.map((m, i) => <tr key={i}>
                {headerKeys.map((h, ind) => <td key={ind}>{m[h]}</td>)}
            </tr>)}
        </tbody>
    </>
};

export default peopleDataRow;