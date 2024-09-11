import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import CardItem from './CardItem';

const CardCategoryDisplay = ({ heading, items, onMoreClick }) => {
    const displayedItems = items.slice(0, 3); 

    return (
        <div style={{ marginBottom: '40px' }}>
            <Typography variant="h4" component="h2" align="center" style={{ marginBottom: '16px', marginTop: '16px' }}>
                {heading}
            </Typography>
            <Grid container spacing={2}>
                {displayedItems.map((item, i) => (
                    <Grid item xs={12} sm={4} key={i}>
                        <CardItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Button variant="outlined" color="primary" onClick={onMoreClick}>
                    Show More
                </Button>
            </Grid>
        </div>
    );
};

export default CardCategoryDisplay;
