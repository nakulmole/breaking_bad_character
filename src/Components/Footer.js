import {makeStyles, Box} from '@material-ui/core';


const useStyle = makeStyles ({


    footer:{

        background: '#000',
        height: 50,
        color:'white',
        marginTop: '50px',
        textAlign: 'center',
    },
});

const Footer = () => {
    const classes = useStyle();
    return(
    
       
            <Box className={classes.footer}>
              <label>Demo web app for  showing all cast from Breaking Bad web series</label>
            </Box>
    
    )}
    
export default Footer;
