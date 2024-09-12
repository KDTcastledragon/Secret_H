import './MainHomePage.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function MainHomePage() {
    const loginID = sessionStorage.getItem('loginID');
    const navigator = useNavigate();
    const [id, setId] = useState('');

    function login(enteredId) {
        const idData = { id: enteredId }

        axios
            .post('/user/login', idData)
            .then((r) => {
                navigator('/');
                alert(`로그인 성공`);
            }).catch((e) => {
                console.log(`로그인실패 ${e.messege}`);
                navigator('/');
                alert(`로그인실패 \n현재 입력한 ID : ${enteredId}`);
            })
    }

    function PlayGame() {
        navigator('/SelectGameModePage');
    }


    //========================================================================================================================
    return (
        <>
            <div className='MainHomePageContainer'>
                <div className='MainHomeTitle' onClick={() => navigator('/')}>
                    <span>SECRET H</span>
                    <span> - 파시즘과 자유주의의 전쟁 - </span>
                </div>
                <div className='box1'>

                    <div className=''>
                        <input type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)} />
                        <button onClick={() => login(id)}>로그인</button>
                        <button onClick={() => alert(`ㄱㄷㄱㄷ`)}>회원가입</button>
                    </div>

                    <div>
                        <button onClick={PlayGame}>Play Game</button>
                    </div>

                </div>



            </div>
        </>
    );
}

export default MainHomePage;