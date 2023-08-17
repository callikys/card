import Header from "../component/Header";
import '../css/Join.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/join', {
                email,
                name,
                password,
            });

            console.log(response);
            alert('회원가입에 성공했습니다!');
            navigate('/login');
        } catch (error) {
            console.log(error);
            alert('회원가입에 실패했습니다.');
        }
    }

    return (
        <div>
            <Header />
            <h1>Join</h1>
            <form onSubmit={handleSubmit}>
                <h2>이메일</h2>
                <div className='textboxStyle'>
                <input type='text' className="custom-input" placeholder='이메일을 입력하세요.' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <h2>이름</h2>
                <div className='textboxStyle'>
                <input type='text' className="custom-input" placeholder='이름을 입력하세요.' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <h2>비밀번호</h2>
                <div className='textboxStyle'>
                <input type='password' className="custom-input" placeholder='비밀번호를 입력하세요.' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <h2>비밀번호 확인</h2>
                <div className='textboxStyle'>
                <input type='password' className="custom-input" placeholder='비밀번호를 입력하세요.' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                </div>
                <button type="submit" className='checkbutton'>Join</button>
            </form>
        </div>
    )
}

export default Join;
