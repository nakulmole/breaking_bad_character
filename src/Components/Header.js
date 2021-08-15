import {AppBar, InputBase, makeStyles, Box, Toolbar} from '@material-ui/core';
import logo from '../images/b_b_logo.png';
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles ({


    header:{

        background: '#000',
        padding: 20,
        height: 120,

    },

    image:{
        width:'150px'
    },

    search:{

        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        marginLeft: 150,
        borderRadius: 3,
        position: 'relative'

    },


    inputBox:{

        color: 'inherit',
        margin:'0 50px',
        fontFamily: 'Segoe UI",Arial,sans-serif,',

    },


    searchIcon:{

        position: 'absolute',
        marginLeft:10,
        top: 3,

    }

});

const Header = ({ getText }) => {
const classes = useStyle();
return(

    <AppBar className={classes.header} position="static">
        <Toolbar>
        <img className={classes.image} src={logo} alt="logo"/>
        <Box className={classes.search}>
        <Box className={classes.searchIcon}>
        <SearchIcon/>
        </Box>
        <InputBase  
         placeholder="Search by name"
                        autoFocus
                        classes = {{ root : classes.inputBox }}
                        onChange={(e) => getText(e.target.value)}/>
        </Box>
        </Toolbar>
    </AppBar>

)

}

export default Header;
