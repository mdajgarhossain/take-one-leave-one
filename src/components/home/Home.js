import React from 'react'
import { useState, useEffect } from 'react';
import SearchAutoComplete from '../common/SearchAutoComplete'
import { Typography, Box, Grid, Button } from '@mui/material';

export default function Home() {
    const [cityData, setCityData] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCityData(data)
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Grid container direction='column' alignItems='center' justifyContent='center' sx={{ height: '70vh' }}>
            <Typography variant="h4" component="h1" sx={{ pb: 2, color: '#2E3B55', fontSize: 35, fontWeight: 'bold' }}>
                Connect with skilled professionals, build a network and work together
            </Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
                <SearchAutoComplete placeholder="Which city are you located?" options={cityData} onChange={(event, value) => console.log(value)} optionLabel={option => option.name} />
                <Button size='small' variant='contained' sx={{ ml: 2, pl: 3, pr: 3, fontWeight: 'bold' }}>Browse</Button>
            </Box>
        </Grid>
    )
}
