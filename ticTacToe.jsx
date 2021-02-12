import React, {useReducer, useCallback} from 'react';
import Table from './table';

const initialState = {
    winner : '',
    turn : 'O',
    tableDate : [['','',''], ['','',''],['','','']]
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_WINNER' :
            //state.winner = action.winner 이리 하면 안됨. 불변성
            return {
                ...state, 
                winner : action.winner,
            };
    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //td컴퍼넌트에서 클릭정보를 올리고올리고 해서 state를 관리하기 힘들어 useReducer를 사용
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('o');
    // const [tableData, setTableDate] = useState([['','',''], ['','',''],['','','']]);
    const onClickTable = useCallback(() => {
        //dispatch안에 액션객체를 설정, 액션을 dispatch할 때마다 reducer가 실행되어 state set한다
        dispatch({ type : 'SET_WINNER', winner: 'O'});
    }, []);
    
    return(
        <>
            <Table onClick={onClickTable} />
            {state.winner && <div>{state.winner}'s WIN</div>}
        </>
    )
};

export default TicTacToe;