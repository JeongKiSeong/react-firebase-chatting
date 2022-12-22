import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import loginImg from '../img/temp_img.png';
import linkImg from '../img/link.png';


const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <>
            <div className="formContainer">
                <div className="loginForm">
                    <span className="logo">Hansung</span>
                    <span className="title">로그인</span>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="email" />
                        <input type="password" placeholder="password" />
                        <button>Sign in</button>
                        {err && <span>이메일 혹은 비밀번호를 다시 입력하세요</span>}
                    </form>
                    <p><Link to="/register">회원가입</Link></p>
                </div>
                <div className="imgForm">
                    <img src={loginImg} alt="" />
                </div>
                <div className="linkForm">
                    <div className='left'>
                        <a href='http://learn.hansung.ac.kr/'>
                            <img src={linkImg} alt="" />
                        </a>
                    </div>
                    <div className='right'>
                        <a href='https://info.hansung.ac.kr/'>
                            <img src={linkImg} alt="" />
                        </a>
                    </div>
                    <div className='left'>
                        <a href='https://hansung.ac.kr/'>
                            <img src={linkImg} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;