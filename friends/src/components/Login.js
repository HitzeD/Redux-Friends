import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: '',
            }
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ 
            ...this.state,
            credentials: { [e.target.name]: e.target.value },
        })
    }

    

    render(){
        return (
            <div>
                <input onChange={this.handleChanges} name="user" value={this.state.credentials.username} type="text" placeholder="Enter Username" />
                <input onChange={this.handleChanges} name="pass" value={this.state.credentials.password} type="password" placeholder="Enter Password" />
            </div>
        )
    }
}

export default Login;