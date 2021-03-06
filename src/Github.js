import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';
//import NavbarH from './NavBar'
const API = 'https://api.github.com/users' ;
class GitHuB extends Component {
	constructor(props){
		super(props);
		this.state={
			username:'KevinKibet',
			name:'',
			avatar:'',
			repos:'',
			followers:'',
			following:'',
			homeURL:'',
			notFound:''

		};
	}



	getProfile(username){
     let finalUrl = `${API}/${username}`;
     fetch(finalUrl)
     .then((res)=>{
       res.json();
       }
     ).then((data)=>{
       this.setState({

            username:data.login,
			name:data.name,
			avatar:data.avatar_url,
			repos:data.public_repos,
			followers:data.followers,
			following:data.following,
			homeURL:data.html_url,
			notFound:data.message

       });
     })
     .catch((error)=>{console.log('there was an error')})
	}



	componentDidMount(){
		this.getProfile(this.state.username);
	}
  render() {

    return (
      <div>
         
        <Search   search={this.getProfile.bind(this)}/>
        <Profile userData={this.state}/>
      </div>
    );
  }
}

export default GitHuB;
