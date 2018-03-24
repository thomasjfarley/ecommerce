import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../Styles/Login.css'


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
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
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                cpassword: this.state.cpassword,
            }

            // console.log("Pass1:", this.state.password)
            // console.log("Pass2:", this.state.cpassword)

            if(this.state.password === this.state.cpassword){
                console.log("Yes")
                alert("Registration Sucessful")

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
                    <TextField id="first-name"
                               fullWidth={true}
                               placeholder="First Name"
                               onChange={event => this.setState({fname: event.target.value})}/>
                    <TextField id="last-name"
                               fullWidth={true}
                               placeholder="Last Name"
                               onChange={event => this.setState({lname: event.target.value})}/>
                    <TextField id="email" required
                               fullWidth={true}
                               placeholder="Email"
                               type="email"
                               onChange={event => this.setState({email: event.target.value})}/>
                    <TextField id="username" required
                               fullWidth={true}
                               placeholder="Username"
                               onChange={event => this.setState({username: event.target.value})}/>
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