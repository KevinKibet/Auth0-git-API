import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class NavbarH extends Component {

onLogin(){
	this.props.onLogin();
}

onLogout(){

this.props.onLogout();
}
  render() {
let page;

if(this.props.idToken){
	page = <a href= "#" onClick={this.onLogout.bind(this)}> LOGOUT</a>
}else{
	page= <a href= "#" onClick={this.onLogin.bind(this)}> LOGIN</a>
}


    return (
      <div>
      <Navbar>
       {page}

<div>
<h3>The GitHub Searcher</h3>
</div>
      </Navbar>
      </div>
    );
  }
}

export default NavbarH;
