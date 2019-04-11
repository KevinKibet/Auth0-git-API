import React, { Component } from 'react';
import GitHuB from './Github'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Auth0Lock from 'auth0-lock'
//import auth0 from 'auth0-js';
//import * as auth0 from 'auth0-js';
import NavbarH from './NavBar';
class App extends Component {

constructor(props){

  super(props);

  this.state={
    idToken:'',
    profile:{},
    t: new Auth0Lock(this.props.ClientID, this.props.Domain)
  };
}

static defaultProps={
  ClientID:'dq37WQBZnMDsPWC1hohqDMHTr6rFQ73P',
  Domain:'dev-hc9pbwhc.auth0.com'
}

componentWIillMount(){
this.lock= new Auth0Lock(this.props.ClientID, this.props.Domain);
this.lock.on('authenticated', (authResult)=>{
  this.lock.getProfile(authResult.idToken, (error, profile)=>{
    if (error){
      console.log(error);
      return ;
    }
    this.setProfile(authResult.idToken, profile);
  // console.log(profile)
  });
  
  });
this.getProfile();
}
setProfile(){
  let idToken = this.state.idToken ;
  let profile = this.state.profile ;
  localStorage.setItem('idToken', idToken);
  localStorage.setItem('profile', JSON.stringify(profile));

  this.setState({
    idToken:localStorage.getItem('idToken'),
    profile:JSON.parse(localStorage.getItem('profile'))
  });
}



getProfile(){
  if(localStorage.getItem('idToken') != null){
    this.setState({
    idToken:localStorage.getItem('idToken'),
    profile:JSON.parse(localStorage.getItem('profile'))
  }, ()=>{console.log(this.state)});
  }
}
//auth0 = new auth0.WebAuth({
   // domain: 'dev-hc9pbwhc.auth0.com',
   // clientID: 'dq37WQBZnMDsPWC1hohqDMHTr6rFQ73P',
    //redirectUri: 'http://localhost:3000/',
    //responseType: 'token id_token',
   // scope: 'openid'
 // });

//}


showLock() {
  this.state.t.show();
  }


Logout(){

  this.setState({
    idToken:'',
    profile:''
  }, ()=>{

    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
  })
}

  render() {
    let git;
    if(this.state.idToken==null){
     git = <GitHuB/>
    }else{
      git = "hey not going well"
    }
    return (
      <div>
        <NavbarH onLogout={this.Logout.bind(this)} onLogin={this.showLock.bind(this)} idToken = {this.state.idToken} lock = {this.lock}/> 
       {git}
       
      </div>
    );
  }
} 

export default App;
