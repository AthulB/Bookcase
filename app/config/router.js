import Login from '../auth/screens/Login/Login';
import Home from '../home/screens/Home';
import React from 'react';
import { Facebook,Google} from 'expo';
import c from '../config/constants';

export default class Screenshow extends React.Component{
    state={
        loggedIn : false,
        name : '',
        photoURL : ''
    }

    onSignInWithFacebook = async() => {
        const options = {permissions: ['public_profile','user_photos']}
        const {type, token} = await Facebook.logInWithReadPermissionsAsync(c.FACEBOOK_APP_ID, options);
        
        if (type === 'success') {
            fetch(`https://graph.facebook.com/me?fields=id,name,picture&access_token=${token}`)
            .then((response)=>{        
                response.json()
                .then((response)=>{
                    const name = response.name;
                    this.setState({name : name, loggedIn : true,photoURL : response.picture.data.url})
                    return
                })
            })
            return
        }
    }

      onSignInWithGoogle = async() => {
        try {
          const result = await Google.logInAsync({
            androidClientId: c.GOOGLE_APP_ID,
            scopes: ['profile', 'email'],
          });
  
          if (result.type === 'success') {
            this.setState({loggedIn : true, name : result.user.name, photoURL : result.user.photoUrl})
          } else {
            console.log('failure')
          }
        } catch(e) {
          console.log(e);
        }
      }

    render(){
        return(
            !this.state.loggedIn ? <Login
            facebook={this.onSignInWithFacebook}
            google={this.onSignInWithGoogle}/> : <Home name={this.state.name} photo={this.state.photoURL}/>
        )
    }
}