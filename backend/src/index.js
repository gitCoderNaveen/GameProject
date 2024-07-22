import express from 'express'
import cors from 'cors'
import {StreamChat} from 'stream-chat'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
const app = express()


app.use(cors()); // middleware 
app.use(express.json()); // all these are basic stuff

const api_key = '8ut688828g2j'
const api_secret = 'saq7ervrwysnc9e3m74ency6cfyr46zne7q5wswbcdk8ehmkrnjp5gtzgty2gd44';
const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, userName, password } = req.body
        const userId = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);
        const token = serverClient.createToken(userId)
        res.json({ token, firstName, lastName, userName, hashedPassword, userId })
    }catch (error){
        res.json(error)
    }
})

app.post('/login', async (req, res)=>{
    try{
    const {username, password} = req.body
    const {users} = await serverClient.queryUsers({name:username})
    if(users.length === 0) return res.json({message: "user not found"})
    
    const token = serverClient.createToken(users[0].id)
    const passwordMatch = await bcrypt.compare(password, users[0].hashedPassword)

    if(passwordMatch){
        res.json({
            token, 
            firstName:users[0].firstName,
            lastName: users[0].lastName,
            username,
            userId:users[0].id
        })
    }
}catch(error){
    res.json(error);
}
    
})


app.listen(3001,() => {
    console.log('server is running on port 3001');
});