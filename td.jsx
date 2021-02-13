import React, { useCallback } from 'react';
import {CLICK_CELL, CHANGE_TURN} from './ticTacToe';

const Td = ({rowIndex, cellIndex, dispatch, cellData }) => {
    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        //이미 클릭한 곳은 더이상 클릭 못하게시리
        if(cellData) {
            return;
        }
        dispatch({type:CLICK_CELL, row: rowIndex, cell:cellIndex});
        dispatch({type : CHANGE_TURN});
    }, [cellData]);

    return(
        <td onClick={onClickTd}>{cellData}</td>
    )
};

export default Td;