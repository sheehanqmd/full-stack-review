import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from  "react-router-dom";

export class Registration extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            password: "",
            redirect: false
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }

    handleUsername(e){
        this.setState({username: e.target.value})
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }

    registerUser(){
        axios.post("/auth/register", {username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true}))
    }


    render() {
        if(this.state.redirect){
            alert("login")
            return<Redirect to="/login" />
        }
        return (
            <div>
               <h3> Register a New Account</h3>
            
            <div>Username<input onChange={this.handleUsername} placeholder="username"/>
                Password<input onChange={this.handlePassword}placeholder="password" type="password"/>
            </div>
            <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}

export default Registration
