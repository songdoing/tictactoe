import React, {useEffect, useReducer, useCallback} from 'react';
import Table from './table';
//비동기 state로 뭘 하려면 꼭 useEffect를 사용할것

//initial state가 있고, 이벤트에서 state를 바꾸고 싶으면
//action객체를 dispatch해서 state를 바꾸는데..
//어떻게 바꿀지는 reducer안에 쓴다
const initialState = {
    winner : '',
    turn : 'O',
    tableData : [
        ['','',''], 
        ['','',''],
        ['','','']
    ]
};
//action은 보통 대문자로 하고, 작따 피하려고 변수에 담고, 다른데서 import하도록
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER :
            //state.winner = action.winner 이리 하면 안됨. 불변성
            return {
                ...state, 
                winner : action.winner,
            };
        case CLICK_CELL : {
        //불변성때문에 얕은 복사를 해줘야 하는 데, immer라는 라이브러리로 해결
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
            };
        }
        case CHANGE_TURN : {
            return {
                ...state,
                turn : state.turn === 'O' ? 'X' : 'O',
            };
        }
    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner} = state;
    //td컴퍼넌트에서 클릭정보를 올리고올리고 해서 state를 관리하기 힘들어 useReducer를 사용
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('o');
    // const [tableData, setTableDate] = useState([['','',''], ['','',''],['','','']]);
    const onClickTable = useCallback(() => {
        //dispatch안에 액션객체를 설정, 액션을 dispatch할 때마다 reducer가 실행되어 state set한다
        dispatch({ type : SET_WINNER, winner: 'O'});
    }, []);

    useEffect(() => {
        //이겼는지 검사
        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
        win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
        win = true;
        }
        console.log(win, row, cell, tableData, turn);
    }, [tableData])
    
    return(
        <>
            <Table onClick={onClickTable} tableData = {state.tableData} dispatch={dispatch}/>
            {winner && <div>{winner}'s WIN</div>}
        </>
    )
};

export default TicTacToe;