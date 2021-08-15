import Character from './Character';
import { Grid, Box } from '@material-ui/core';
import React from 'react';

const Characters = ({data, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>;
    } 

    return (
        <Box style={{margin:20}}>

            <Grid container spacing={4}
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}>

                   
                   {data.map(item => (
                        <Grid item md={3}>
                            <Character key={item.char_id} item={item} />
                        </Grid>
                    ))}
            </Grid>

        </Box>
    )
}

export default Characters;