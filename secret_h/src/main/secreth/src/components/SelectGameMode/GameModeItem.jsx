import './GameModeItem.css';

import axios from 'axios';
import { useNavigate } from "react-router-dom";

function GameModeItem({ gamemodekey, totalplayer, facist, liberal, h, turncyclelength }) {
    const navigator = useNavigate();

    function startGame() {
        axios
            .get(`/game/startGame`)
            .then((r) => {
                navigator('/GamePage');
            }).catch((e) => {
                console.log(`게임시작 실패 : ${e.messege}`);
            })
    }


    return (
        <div className='GameModeItemContainer'>
            <span>5</span>
            <button onClick={() => startGame(5,)}>시작하기</button>
        </div>
    );
}

export default GameModeItem;