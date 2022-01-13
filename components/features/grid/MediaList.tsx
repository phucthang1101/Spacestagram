import React, { useEffect } from 'react'
import { fetchCardsAsync } from '../../../redux/CardsSlice';
import { useAppDispatch } from '../../../redux/store';
import useSpaceCard from '../../hooks/useSpaceCard';
import { SpaceCard } from '../../models/SpaceCard';
import SpaceMedia from '../card/SpaceMedia';
import styles from './MediaList.module.css';
import { Button, Grid } from '@mui/material';
import Container from '@mui/material/Container';

const MediaList = () => {
    const dispatch = useAppDispatch();
    const { spaceCards, cardsLoaded } = useSpaceCard();

    //console.log({ products })
    useEffect(() => {
        console.log("media list useeffect: ", cardsLoaded)
        if (!cardsLoaded) {
            dispatch(fetchCardsAsync());
        }
    }, [cardsLoaded, dispatch])

    const renderProducts = () => {
        //console.log('products in renderProducts: ', products[0])
        return spaceCards.map((spaceCard: SpaceCard) => (
            <Grid
                item
                xs={12}
                sm={6}
                key={spaceCard.id}
                style={{ display: 'flex' }}
            >
                <SpaceMedia spaceCard={spaceCard} />
            </Grid>
        ))
    }

    return (
        <>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {renderProducts()}
                </Grid>
            </Container>
        </>
    )
}

export default MediaList
