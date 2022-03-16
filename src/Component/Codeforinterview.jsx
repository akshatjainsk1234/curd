import React from 'react'
import {Link} from 'react-router-dom'
import {Box,makeStyles,Typography} from '@material-ui/core'
import Youtube from '../Assests/Images/Youtube.png'
import Insta from '../Assests/Images/Insta.JPEG'; 


 const useStyle = makeStyles({
     image:{
         width: "50%",
         height: "50%"
     },
     component:{
         margin: "50px"

     }
 })

const Codeforinterview = ()=>{
    const classes=useStyle();
    return(
        <div>
            <Link to="/">
            

            </Link>
            <Box className={classes.component}>
            <Typography variant='h4' style={{marginBottom: '50'}}>code for Interview</Typography>
        <Box style={{display:'flex'}}>
            <img className={classes.image} src={Youtube} />
            <img className={classes.image} src={Insta} />
        </Box>
        </Box>

        

        </div>
        
    )
}

export default Codeforinterview;