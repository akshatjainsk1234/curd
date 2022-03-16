import {FormGroup, FormControl,Input, InputLabel, Button,makeStyles,Typography} from '@material-ui/core';
import { useEffect, useState } from 'react';
import {editUser, getUsers }  from '../Service/Api'
import {Link,useNavigate,useParams} from 'react-router-dom';


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
const EditUsers = ()=>{
    const [user,setUser]= useState(initialValues);
    const {name,username,email,mobile}=user;
    const {id} = useParams();
    
    const classes = useStyle()
    const navigate = useNavigate();

   
    const loadUserData=async()=>{
       const response=await getUsers(id)
       console.log(response.data,"bbb")
        setUser(response.data)
    }
    
    useEffect(()=>{
        loadUserData();
    },[]);
   

    const onValueChange=(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
        // console.log(user);
    }

    const editUserDetail=async()=>{
         await editUser(id,user)
        return navigate('/allusers')
    

    }
    
    
    return(
        <div>
        
            <Link to="/Addusers">
        

            </Link>
            
            <p>hii this is code for Addusers</p>

            <FormGroup className={classes.container}>
            <Typography variant='h4'>Edit User</Typography>
                <FormControl>
                    <InputLabel>name</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name='name' value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>username</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name='username' value={username} />
                </FormControl>
                <FormControl>
                    <InputLabel>email</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name='email' value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>mobile</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name='mobile' value={mobile} />
                </FormControl>
                <Button variant='contained' onClick={()=>editUserDetail()} color='primary'>Edit user</Button>
            </FormGroup>

            
           
        </div>
    
    )
}
export default EditUsers;