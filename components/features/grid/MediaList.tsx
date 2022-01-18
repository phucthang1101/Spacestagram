import React, { useCallback, useEffect } from 'react'
import { fetchMoreCardsAsync, resetLoadMore } from '../../../redux/CardsSlice';
import { useAppDispatch } from '../../../redux/store';
import useSpaceCard from '../../hooks/useSpaceCard';
import { SpaceCard } from '../../models/SpaceCard';
import SpaceMedia from '../card/SpaceMedia';
import styles from './MediaList.module.css';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Fade } from "react-awesome-reveal";

interface Props {
    spaceCardsProps: SpaceCard[];
}
const MediaList = ({ spaceCardsProps }: Props) => {
    const dispatch = useAppDispatch();
    const { loadMore } = useSpaceCard();


    const trackScrolling = useCallback(() => {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 300 && !loadMore) {
            // remove event listener to make sure it only runs once
            //console.log('ready to fetch more');
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


    const renderSpaceCards = () => {
        return spaceCardsProps.map((spaceCard: SpaceCard) => (
            <Fade key={spaceCard.title}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    style={{ display: 'flex' }}
                    className={styles.space_card_wrapper}
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
                    {renderSpaceCards()}
                </Grid>
            </Container>
        </>
    )
}

export default MediaList
