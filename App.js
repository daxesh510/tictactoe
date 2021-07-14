import React, { useState } from 'react'
import Icon from './Icon'
import { ToastContainer, toast } from 'react-toastify'; //import react-tostify
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';  //import reactstrap
import './index.css';

const tiktacArray = new Array(9).fill("A")

const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMsg, setWinMsg] = useState('')

    const playAgain = () => {
        setIsCross(true);
        setWinMsg("");
        tiktacArray.fill("");
    }

    const findWinner = () => {
        let winner = "";
        for (let i = 0; i < tiktacArray.length; i++) {
            if (tiktacArray[i] == "X" || tiktacArray[i] == "O") {
                if (winner == "") {
                    winner = tiktacArray[i];
                } else if (winner == "") {

                }
            }
        }
    }
    return (
        <>
            <div>
                <Icon choice='cross' />
            </div>
        </>
    );
}

export default App