import React from 'react';
import { Grid, Dialog, DialogContent } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CardItem from './CardItem';  

const CardCarouselPopup = ({ open, handleClose, items }) => {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogContent>
                <Carousel navButtonsAlwaysVisible>
                    <Grid container spacing={2}>
                        {items.map((item, i) => (
                            <Grid item xs={12} sm={4} key={i}>
                                <CardItem item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Carousel>
            </DialogContent>
        </Dialog>
    );
};

export default CardCarouselPopup;
