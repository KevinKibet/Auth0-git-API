import React, { Component } from 'react';
//import NavbarH from './NavBar'

class Profile extends Component {




  render() {
  	let userdata = this.props.userData ;
  	let followers = `${userdata.homeURL}/followers`;
  	let following = `${userdata.homeURL}/following`;
  	let repos = `${userdata.homeURL}/repositories`;
   
if(userdata.notFound=== 'User not Found'){

	 return (
      <div>
         
        <h1>hey boss!</h1>
        <p>Are you sure this person exist?</p>
      </div>
    );
}else{



	 return (
      <div>
         <section>
         <div>
             <a href={userdata.homeURL} target="_blank" title={userdata.name || userdata.username }> <img src={userdata.avatar}></img></a>
             <h2><a href={userdata.homeURL} title={userdata.username} target="_blank">{userdata.name || userdata.username}</a></h2>
              <h3>{userdata.location}</h3>
          </div>
          <div>

          <ul>

          <li>
          <a href={followers} target="_blank" title="No of followers" ><i>{userdata.followers}</i></a>
          </li>
          <li>
          <a href={repos} target="_blank" title="No of Repository" ><i>{userdata.ropos}</i></a>
          </li>

          <li>
          <a href={following} target="_blank" title="No of following" ><i>{userdata.following}</i></a>
          </li>

          </ul>
          </div>

         </section>
     
      </div>
    );
}


   
 




  } 
}

export default Profile;
