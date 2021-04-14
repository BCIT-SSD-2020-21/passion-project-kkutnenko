
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from './components/Header'
import {Auth} from 'aws-amplify'

function App() {

  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [user,setUser] = useState({})
  
  const authenticateUser = (authState) => {
    setisAuthenticated(authState);
  }

  useEffect(() => {
    console.log(`Authenticated: ${isAuthenticated}`);
    getUser()
    console.log(user)
  }, [isAuthenticated]);

  const getUser = async () => {
    try{
      const attributes = await Auth.currentAuthenticatedUser();
      setUser(attributes)
      setisAuthenticated(true)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <Router>
      <Header auth={isAuthenticated} authenticate={authenticateUser}></Header>
      <main style = {{marginTop: 30}}></main>      
        <Switch>          
          <Route path="/login">
            <Login authenticate={authenticateUser}></Login>
          </Route>
          <Route path="/">
            <Login authenticate={authenticateUser}></Login>
          </Route>
          
        </Switch>
    </Router>
    
  );
}

export default App;

