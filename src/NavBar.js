import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class NavbarH extends Component {

onLogin(){
	this.props.onLogin();
}


  render() {
    return (
      <div>
      <Navbar>

<a href= "#" onClick={this.onLogin.bind(this)}> LOGIN</a>
<div>
<h3>The GitHub Searcher</h3>
</div>
      </Navbar>
      </div>
    );
  }
}

export default NavbarH;
