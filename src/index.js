import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Header from './Pages/Header.js'
// import Forms from './Forms.js';



const App = () => (
   <MuiThemeProvider>
       <Header/>

   </MuiThemeProvider>

)


ReactDOM.render(<App />, document.getElementById('root'));
