import React, { useCallback } from 'react';
import {CLICK_CELL} from './ticTacToe';

const Td = ({rowIndex, cellIndex, dispatch, cellData }) => {
    console.log('td rendered');
    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        //이미 클릭한 곳은 더이상 클릭 못하게시리
        if(cellData) {
            return;
        }
        dispatch({type:CLICK_CELL, row: rowIndex, cell:cellIndex});
        //dispatch({type : CHANGE_TURN});
        //승리 검사하는 와중에 turn이 체인지되면서 오류발생, 승리검사 후에
    }, [cellData]);

    return(
        <td onClick={onClickTd}>{cellData}</td>
    )
};

export default Td;