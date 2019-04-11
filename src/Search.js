import React, { Component } from 'react';
//import NavbarH from './NavBar'

class Search extends Component {

submit(event){

   event.preventDefault();
   let value =this.refs.username.value ;
   this.props.search(value);
   this.refs.username.value = '';
}


  render() {
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>

         <label> SEARCH<input type="search" ref="username" placeholder="Enter What you want to search"/><label/>

        <form/>
      </div>
    );
  }
}

export default Search;
