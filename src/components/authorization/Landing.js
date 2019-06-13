import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export class Landing extends Component {
    constructor(){
        super()
        this.state ={}
    }

LogoutUser (){
    axios.post("/auth/logout").then(response => console.log(response.data))
}
    render() {
        return (
            <div>
               <Link to="/login"><button>Login</button></Link> 
                <Link to="/register"><button>Create Login</button></Link> 
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        )
    }
}

export default Landing
