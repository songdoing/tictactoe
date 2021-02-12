import React from 'react';
import Tr from './tr';

const Table = ({ onClick }) => {
    return(
        <table onClick={onClick}>
            <tbody>
            <Tr>Hello</Tr>   
            </tbody>
                   
        </table>
    )
};

export default Table;