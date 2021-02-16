import React, { useRef, useEffect} from 'react';
import Td from './td';

const Tr = ({ rowData, rowIndex, dispatch }) => {
    console.log('tr rendered');

    const ref = useRef([]);
    useEffect(() => {
        console.log(rowData === ref.current[0], dispatch === ref.current[1], rowIndex === ref.current[2]);
        ref.current = [rowData, dispatch, rowIndex];
    }, [rowData, dispatch, rowIndex]);
    return(
        <tr>
            {Array(rowData.length).fill().map((td , i) => (
                <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>
            ))}
        </tr>
    );
};

export default Tr;