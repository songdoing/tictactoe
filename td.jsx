import React, { useCallback, useEffect, useRef, memo } from 'react';
import {CLICK_CELL} from './ticTacToe';

const Td = memo(({rowIndex, cellIndex, dispatch, cellData }) => {
    console.log('td rendered');

    //뭐때문에 td rendered가 계속 되는 지 알려면, useEffect, useRef를 사용
    const ref = useRef([]);
    useEffect(()=> {
        console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
        //false가 나오는게 있으면 걔땨문에 계속 render되는 거임(T, T, T, F)
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
        //각종 프롭스들을 두번째 인자에 넣어두기
    }, [rowIndex, cellIndex, dispatch, cellData]);
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
    //쉽게, props로 넣어두는 데이터는 useCallback으로 감싸주고
    //useCallback안에서 바뀔 데이터(cellData)를 맨끝 인자에다가 넣기
    return(
        <td onClick={onClickTd}>{cellData}</td>
    )
});

export default Td;