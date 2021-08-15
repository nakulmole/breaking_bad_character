import { Card, makeStyles, Tooltip, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    img: {
        height: 350,
        width: '100%',
        objectFit: 'cover'
    }
})

const Character = ({ item }) => {
    console.log(item);

    const classes = useStyle();
    return (
        
        <Card>
            <Tooltip title={
                    <>
                       <Typography>Id:  {item.char_id}</Typography>
                        <Typography>Name:  {item.name}</Typography>
                        <Typography>Birthday: {item.birthday}</Typography>
                        <Typography>Occupation: {item.occupation}</Typography>
                        <Typography>Status: {item.status}</Typography>
                        <Typography>Nickname: {item.nickname}</Typography>
                        <Typography>Real Name: {item.portrayed}</Typography>
    
                    </>
                }
            
                arrow placement="right">
                <img src={item.img} className={classes.img} alt = "character" />
            </Tooltip>
        </Card>
    )
}

export default Character;