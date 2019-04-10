import React, { Component } from 'react';
import GitHuB from './Github'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import Auth0Lock from 'auth0-lock'
//import auth0 from 'auth0-js';
import * as auth0 from 'auth0-js';
import NavbarH from './NavBar';
class App extends Component {

constructor(props){
  super(props);

  this.state={
    id:'',
    profile:{}
  };
}

//static defaultProps={
 // ClientID:'dq37WQBZnMDsPWC1hohqDMHTr6rFQ73P',
 // Domain:'dev-hc9pbwhc.auth0.com'
//}

componentWIillMount(){
//this.lock= new Auth0Lock(this.props.ClientID, this.props.Domain);
//this.lock.on('authenticated', (authResult)=>{
 // console.log(authResult);
//});

auth0 = new auth0.WebAuth({
    domain: 'dev-hc9pbwhc.auth0.com',
    clientID: 'dq37WQBZnMDsPWC1hohqDMHTr6rFQ73P',
    redirectUri: 'http://localhost:3000/',
    responseType: 'token id_token',
    scope: 'openid'
  });

}


showLock(){
  //this.lock.show();
  this.auth0.authorize();
}
  render() {
    return (
      <div>
        <NavbarH onLogin={this.showLock.bind(this)}/> 
        <GitHuB/>
      </div>
    );
  }
} 

export default App;
