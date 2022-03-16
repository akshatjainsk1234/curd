import {FormGroup, FormControl,Input, InputLabel, Button,makeStyles,Typography} from '@material-ui/core';
import { useState } from 'react';
import addUser from '../Service/Api'
import {Link,useNavigate} from 'react-router-dom';


const useStyle = makeStyles({
    container:{
        width: '50%',
        margin: '5% 0 0 25%'

    },
    '&>*':{
        marginTop: '20%'
    }

})
const initialValues={
    name: '',
    username: '',
    email: '',
    mobile: '',
}
const Addusers = ()=>{
    const [user,setUser]= useState(initialValues);
    const {name,username,email,mobile}=user;
    const classes = useStyle()
    const navigate = useNavigate()
    

    const onValueChange=(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }

    const addUserDetail=async()=>{
        await addUser(user)
        return navigate('/allUsers')
       

    } 
    
    
    return(
        <div>
        
            <Link to="/Addusers">
        

            </Link>
            
            <p>hii this is code for Addusers</p>

            <FormGroup className={classes.container}>
            <Typography variant='h4'>Add User</Typography>
                <FormControl>
                    <InputLabel>name</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name='name' />
                </FormControl>
                <FormControl>
                    <InputLabel>username</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name='username' />
                </FormControl>
                <FormControl>
                    <InputLabel>email</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name='email' />
                </FormControl>
                <FormControl>
                    <InputLabel>mobile</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name='mobile' />
                </FormControl>
                <Button variant='contained' onClick={()=>addUserDetail()} color='primary'>Add user</Button>
            </FormGroup>

            
           
        </div>
    
    )
}
export default Addusers;