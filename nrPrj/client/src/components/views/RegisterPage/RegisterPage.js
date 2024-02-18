import { withRouter } from 'react-router-dom';
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action';
import { Button } from 'antd';

function RegisterPage(props) {
    const dispatch = useDispatch(); 

    const [Id, setId] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")


    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // page refresh를 하면 안되므로 

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            id: Id,
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/login")
                } else {
                    alert("Failed to sign up")
                }
            }) 
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '100vh'
        }}>
            
            <form style={{display:'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>ID</label>
                <input type="id" value={Id} onChange={onIdHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br />
                <button type="primary">
                    회원 가입
                </button>

            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
