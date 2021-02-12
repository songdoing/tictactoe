import React, {useReducer, useCallback} from 'react';
import Table from './table';

//initial state가 있고, 이벤트에서 state를 바꾸고 싶으면
//action객체를 dispatch해서 state를 바꾸는데..
//어떻게 바꿀지는 reducer안에 쓴다
const initialState = {
    winner : '',
    turn : 'O',
    tableData : [['','',''], ['','',''],['','','']]
};
const SET_WINNER = 'SET_WINNER'
const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER :
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
        dispatch({ type : SET_WINNER, winner: 'O'});
    }, []);
    
    return(
        <>
            <Table onClick={onClickTable} tableData = {state.tableData} />
            {state.winner && <div>{state.winner}'s WIN</div>}
        </>
    )
};

export default TicTacToe;