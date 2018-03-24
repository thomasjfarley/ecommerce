import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Code from './code'

import '../Styles/Login.css'


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
        }
    }
    render() {
        const handleSubmit = (event) => {
            const payload = {
                event: event,
                email: this.state.email,


            }
            this.props.submitHandler(payload)
            // event.preventDefault()
            // console.log(this.state.username + " : " + this.state.password)
        }
        // const handleTextChange = (event) => {
        //     this.setState({username: event.target.value})
        // }
        // const handleUsernameChange = (event) => {
        //     //console.log(event.target.value)
        //     this.setState({username: event.target.value});
        //     event.preventDefault();
        //
        //
        // }
        return (
            <div className="login">
                <form className="flexBox" onSubmit={handleSubmit}>
                    Forgot Password
                    <TextField id="use" required
                               fullWidth={true}
                               placeholder="Email"
                               type="email"
                               onChange={event => this.setState({email: event.target.value})}/>
                    <Router>
                        <div>
                            <div>
                                <Link to='/forgotpassword/code'>
                                <RaisedButton type="submit"
                                                label={"Submit"}/>
                                </Link>
                            </div>
                            <Route exact path='/forgotpassword/code' component={Code}/>

                        </div>

                    </Router>


                </form>

            </div>
        )
    }

}

