import React, {useReducer} from 'react';
import Table from './table';

const initialState = {
    winner : '',
    turn : 'O',
    tableDate : [['','',''], ['','',''],['','','']]
};

const reducer = (state, action) => {

};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //td컴퍼넌트에서 클릭정보를 올리고올리고 해서 state를 관리하기 힘들어 useReducer를 사용
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('o');
    // const [tableData, setTableDate] = useState([['','',''], ['','',''],['','','']]);
    return(
        <>
            <Table/>
            {winner && <div>{winner}'s WIN</div>}
        </>
    )
};

export default TicTacToe;