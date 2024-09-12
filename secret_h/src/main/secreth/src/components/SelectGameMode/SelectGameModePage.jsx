import './SelectGameModePage.css';

import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GameModeItem from './GameModeItem';

function SelectGameModePage() {
    const navigator = useNavigate();
    const [gameModeData, setGameModeData] = useState([]);

    useEffect(() => {
        axios
            .get(`/game/allGameMode`)
            .then((r) => {
                setGameModeData(r.data);
            }).catch((e) => {
                console.log(`실패~ :  ${e.messege}`)
            })
    })


    //========================================================================================================================
    return (
        <>
            <div className='SelectGameModePageContainer'>
                <div className='selectPageTitle' onClick={() => navigator('/')}>SECRET H</div>
                <div>게임모드 선택</div>
                <div className='SelectGameModePageContainer'>
                    {gameModeData.map((d, i) => (
                        <GameModeItem
                            key={i}
                            gamemodekey={d.gamemodekey}
                            totalplayer={d.totalplayer}
                            facist={d.facist}
                            liberal={d.liberal}
                            h={d.h}
                            turncyclelength={d.turncyclelength}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}

export default SelectGameModePage;