import React, { useCallback, useEffect } from 'react'
import { fetchCardsAsync, fetchMoreCardsAsync, resetLoadMore } from '../../../redux/CardsSlice';
import { useAppDispatch } from '../../../redux/store';
import useSpaceCard from '../../hooks/useSpaceCard';
import { SpaceCard } from '../../models/SpaceCard';
import SpaceMedia from '../card/SpaceMedia';
import styles from './MediaList.module.css';
import { Button, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Fade } from "react-awesome-reveal";

const MediaList = () => {
    const dispatch = useAppDispatch();
    const { spaceCards, cardsLoaded, loadMore } = useSpaceCard();

    //console.log({ products })
    useEffect(() => {
        //console.log("media list useeffect: ", cardsLoaded)
        if (!cardsLoaded) {
            dispatch(fetchCardsAsync());
        }
    }, [cardsLoaded, dispatch]);


    const trackScrolling = useCallback(() => {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100 && !loadMore) {
            // remove event listener to make sure it only runs once
            console.log('ready to fetch more');
            dispatch(fetchMoreCardsAsync())
            document.removeEventListener('scroll', trackScrolling)
        }
    }, [dispatch, loadMore]);

    useEffect(() => {
        if (!loadMore) document.addEventListener('scroll', trackScrolling);
        return () => {
            document.removeEventListener('scroll', trackScrolling)
        };
    }, [trackScrolling, loadMore, dispatch])

    useEffect(() => {
        dispatch(resetLoadMore())
    }, [loadMore])

    // const scrolling_function = () => {
    //     // if at bottom of the screen
    //     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
    //         // remove event listener to make sure it only runs once
    //         console.log('ready to fetch more');
    //         window.removeEventListener('scroll', scrolling_function)

    //     }
    //     let { status } = useSpaceCard();
    //     if (status.includes("fulfilled")) {
    //         window.addEventListener('scroll', scrolling_function);
    //     }
    // }








    const renderProducts = () => {
        //console.log('products in renderProducts: ', products[0])
        return spaceCards.map((spaceCard: SpaceCard) => (
            <Fade>
                <Grid
                    item
                    xs={12}
                    sm={12}
                   
                    style={{ display: 'flex' }}
                >
                    <SpaceMedia spaceCard={spaceCard} />
                </Grid>
                </Fade>
        ))
    }


    // function to allow for pagination



    return (
        <>
            <Container maxWidth="lg" className={styles.media_list_container}>
                <Grid container spacing={4} className={styles.media_list_grid_container}>
                    {renderProducts()}
                </Grid>
            </Container>
        </>
    )
}

export default MediaList
