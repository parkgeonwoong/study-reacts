import React,{useEffect} from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button } from "antd";
import './LandingPage.css';

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => {console.log(response)})
        
    }, []) 


    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success) {
                props.history.push("/login")
            } else {
                alert("로그아웃 하는데 실패했습니다.")
            }
        })
    }


    return (
        <div style={{display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center'
        ,width: '100%',  height: '100vh'
        }}>
            
            <div id="a">
            <h2>Node.js & React</h2>
            </div>

            <br />
            <Button  type="primary" onClick={onClickHandler}>
                로그아웃
            </Button>
   
        </div>
        
    )
}

export default withRouter(LandingPage)
