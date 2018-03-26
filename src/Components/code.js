import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../Styles/Login.css'


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vcode: '',
            squestion: '',
            password: '',
            cpassword: ''
        }
    }

    render() {
        const handleSubmit = (event) => {
            event.preventDefault()

            // console.log("Hello from Handle submit")
            const payload = {
                event: event,
                vcode: this.state.vcode,
                squestion: this.state.squestion,
                password: this.state.password,
                cpassword: this.state.cpassword,
            }

            // console.log("Pass1:", this.state.password)
            // console.log("Pass2:", this.state.cpassword)

            if(this.state.vcode === "12345"){
                console.log("Nailed it")
            }
            else {
                alert("false code")
                return false;
            }

            if(this.state.password === this.state.cpassword){
                console.log("Yes")
                alert("Password Change Successful")

            }else {
                console.log("NO")
                alert("Passwords do not Match")
                return false;
            }


            this.props.submitHandler(payload)
            // if ($("#password").val() != $("#cpassword").val()) {
            //     alert("Passwords do not match.");
            // }
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
                    <TextField id="vcode" required
                               fullWidth={true}
                               placeholder="Verification Code"
                               onChange={event => this.setState({vcode: event.target.value})}/>
                    <div>What year did you graduate?</div>
                    <TextField id="squestion" required
                               fullWidth={true}
                               placeholder="Security Answer"
                               onChange={event => this.setState({squestion: event.target.value})}/>
                    <TextField id='password' required
                               fullWidth={true}
                               type="password"
                               placeholder="Password"
                               onChange={event => this.setState({password: event.target.value})}/>
                    <TextField id='confirm-password' required
                               fullWidth={true}
                               type="password"
                               placeholder="Confirm Password"
                               onChange={event => this.setState({cpassword: event.target.value})}/>

                    <RaisedButton type="submit"
                                  label={"Submit"}/>


                </form>
            </div>
        )
    }
}