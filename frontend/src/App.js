
import Cookies from 'universal-cookie';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { StreamChat } from 'stream-chat'

function App() {
  const api_key = '8ut688828g2j'
  const cookies = new Cookies()
  const token = cookies.get('token')
  
  const client = StreamChat.getInstance(api_key)

  if(token){
    client.connectUser({
      id: cookies.get('userId'),
      name:cookies.get('userName'),
      fistName:cookies.get('firstName'),
      lastName:cookies.get('lastName'),
      hashedPassword:cookies.get('hashedPassword')
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
