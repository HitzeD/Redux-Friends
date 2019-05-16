import React from 'react';
import { connect } from "react-redux";
import { login } from "../actions";


class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ 
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
        .then(() => {
            this.props.history.push("/protected");
        });
    };
    

    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <input onChange={this.handleChanges} name="username" value={this.state.credentials.username} type="text" placeholder="Enter Username" />
                    <input onChange={this.handleChanges} name="password" value={this.state.credentials.password} type="password" placeholder="Enter Password" />
                    <button>Submit</button>    
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
})

export default connect(mapStateToProps, { login })(Login);