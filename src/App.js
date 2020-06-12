import React from 'react';
import './App.css';
import {Route, Switch ,Redirect} from 'react-router-dom';
import Homepage from './pages/Homepage/Hompage';
import ShopPage from './pages/shop/shoppage'
import Header from './components/header/Header'
import SignInAndSignOut from './pages/SIgnin and signout/SigninandSignout'
import { auth, createUserProfileDocument } from './firebase/firebase'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'

class  App extends React.Component {

      
      unsubscribeFromAuth= null;

      componentDidMount(){
          const {setCurrentUser} = this.props;
       this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
          if(userAuth)   {
            console.log(userAuth)
            const userRef= await createUserProfileDocument(userAuth) ;
            
            userRef.onSnapshot(snapShot =>{
              setCurrentUser({
                currentUser:{
                  id:snapShot.id,
                  ...snapShot.data()
                }
              });
            });
            
          }
          setCurrentUser(userAuth);

        })
        
      }
      
      componentWillUnmount(){
        this.unsubscribeFromAuth();
      }
      

  render(){
    return (
      <div>
        <Header/>
          <Switch>
            <Route exact path='/' component={Homepage}/>          
            <Route   path='/shop' component={ShopPage}/>  
            <Route  exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to="/"/>):(<SignInAndSignOut/>)}/>          
          </Switch>          
      </div>
    );
  }
}

const mapStateToProps =({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps= dispatch =>({
    setCurrentUser:user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
