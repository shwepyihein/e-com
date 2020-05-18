import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Hompage';
import ShopPage from './pages/shop/shoppage'
import Header from './components/header/Header'
import SignInAndSignOut from './pages/SIgnin and signout/SigninandSignout'
import { auth, createUserProfileDocument } from './firebase/firebase'

class  App extends React.Component {
    constructor(){
      super()
      this.state={
        currentUser:null
      }
    }
      
      unsubscribeFromAuth= null;

      componentDidMount(){
       this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
          if(userAuth)   {
            console.log(userAuth)
            const userRef= await createUserProfileDocument(userAuth) ;
            
            userRef.onSnapshot(snapShot =>{
              this.setState({
                currentUser:{
                  id:snapShot.id,
                  ...snapShot.data()
                }
              });
            });
            
          }
          this.setState({currentUser:userAuth})

        })
        
      }
      
      componentWillUnmount(){
        this.unsubscribeFromAuth();
      }
      

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={Homepage}/>          
            <Route   path='/shop' component={ShopPage}/>  
            <Route   path='/signin' component={SignInAndSignOut}/>          
          </Switch>
      </div>
    );
  }
}

export default App;
