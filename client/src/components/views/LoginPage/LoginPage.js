import Axios from 'axios'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

function LoginPage(props) {

    const dispatch = useDispatch(); 

    const [Id, setId] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // page refresh를 하면 안되므로 

        let body = {
            id: Id,
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => { // React 페이지 이동 
                if(response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error')
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
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <br />
                <button type="primary">
                    Login
                </button>

            </form>
        </div>
    )
}

export default withRouter(LoginPage)
