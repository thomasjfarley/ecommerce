import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import '../Styles/Login.css'


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            passState: 0
        }
    }
    render() {

        // const text = this.state.open ? "Hide" : "Show"
        const passcode = (min, max) => {
            min = Math.ceil(10000);
            max = Math.floor(99999);
            return Math.floor(Math.random() * (max - min + 1)) + min;

        }


        const handleSubmit = (event) => {
            // event.preventDefault()
            alert("Enter Passcode "+ passcode())
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
            <div>
                {/*<div>*/}
                    {/*<input type="button" value={text}*/}
                       {/*onClick={() => this.setState({open: !this.state.open})}*/}
                    {/*/>*/}
                    {/*{this.state.open ? <div>Opened</div> : ""}*/}
                {/*</div>*/}
                <div className="login">
                    <form className="flexBox" onSubmit={handleSubmit}>
                        Forgot Password
                        <TextField id="use" required
                                   fullWidth={true}
                                   placeholder="Email"
                                   type="email"
                                   onChange={event => this.setState({email: event.target.value})}/>
                                <RaisedButton type="submit"
                                              label={"Submit"}
                                              onClick={handleSubmit}
                                              href='/code'

                                />


                        <hr/>
                        {/*{this.state.open ? <div><FPForm/></div> : ""}*/}


                    </form>

                </div>
            </div>
        )
    }


}





