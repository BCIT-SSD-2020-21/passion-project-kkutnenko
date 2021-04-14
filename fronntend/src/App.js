
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import GuardedRoute from './components/GuardRoute'
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
      <Tabs></Tabs>
        <Switch>          
          <Route path="/login">
            <Login authenticate={authenticateUser}></Login>
          </Route>
          <Route path="/images">

            <p>Images</p>
          </Route>
          <Route path="/links">
            <LinksPage></LinksPage>
          </Route>
          {/* <Route path="/todos">
            <ToDo user = {user}></ToDo>
          </Route> */}
          <Route path="/notes">
            <Notes></Notes>
          </Route>
          <GuardedRoute path='/profile' auth={isAuthenticated} component={UserProfile} user={user}/>
          <Route path="/">

            {/* <Home></Home> */}
            <ToDo user = {user}></ToDo>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;

