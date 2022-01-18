import React, { useEffect } from 'react';
import { cardSelectors, fetchCardsAsync } from '../../redux/CardsSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store';

const useSpaceCard = () => {
    const spaceCards = useAppSelector(cardSelectors.selectAll)
    const { cardsLoaded, status, loadMore} = useAppSelector(state => state.cards);
    //const dispatch = useAppDispatch();

    // useEffect(() => {
    //     if (!cardsLoaded) dispatch(fetchCardsAsync());
    // }, [cardsLoaded, dispatch])


    return {
        spaceCards,
        cardsLoaded,
        status,
        loadMore
    }
}

export default useSpaceCard
