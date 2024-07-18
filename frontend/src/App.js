
import Cookies from 'universal-cookie';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { StreamChat } from 'stream-chat'

function App() {
  const api_key = '8ut688828g2j'
  const token = Cookies.get('token')
  
  const client = StreamChat.getInstance(api_key)

  if(token){
    client.connectUser({
      id:Cookies.get('userId'),
      name:Cookies.get('userName'),
      fistName:Cookies.get('firstName'),
      lastName:Cookies.get('lastName'),
      hashedPassword:Cookies.get('hashedPassword')
    }, token).then((user)=>{
      console.log(user);
    })
  }
  
  return (
    <div className="App">
      <Signup />
      <Login />
    </div>
  );
}

export default App;
