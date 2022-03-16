
import { TableCell, TableHead, TableRow,Table,TableBody,makeStyles, Button } from '@material-ui/core'
import { useEffect,useState } from 'react'
import { getUsers,deleteUser } from '../Service/Api'
import {Link} from 'react-router-dom'


const useStyle = makeStyles({

    table:{
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead:{
        '&>*':{
            background: '#000000',
            color: '#ffffff',
            fontSize: '20px'
            
        }
    },
    row:{
        '&>*':{
            fontSize: '20px'
        }
        
    }

})
const Allusers = () =>{
const [users,setUsers]=useState([])
const classes = useStyle() 



    
    useEffect(()=>{
        getAllUsers();
    },[])

    const getAllUsers = async()=>{
        const response=await getUsers();
        console.log(response,"alluser")
        setUsers(response.data)
    }
    const deleteUserData = async(id)=>{
         await deleteUser(id)
        getAllUsers();
    }
    
    return(
        <div>
            <Link to="/Allusers">
            

            </Link>
            <p>hii this is code for Allusers</p>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>mobile</TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user)=>
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.mobile}</TableCell>

                            <TableCell>
                 <Button variant='contained' color='primary' style={{marginRight:'10px' }} 
                 component={Link} to={`/EditUsers/${user.id}`} >Edit</Button>
                
                                <Button variant='contained' color='secondary' onClick={()=> deleteUserData(user.id)}>Delete</Button>
                            </TableCell>


                        </TableRow>
                        )
                    }
                </TableBody>
            </Table>


               
        </div>
    )
}

export default Allusers