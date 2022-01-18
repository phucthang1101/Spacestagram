import { createSlice, createAsyncThunk, isAnyOf, createEntityAdapter } from '@reduxjs/toolkit';
import getConfig from 'next/config';
import { SpaceCard } from '../components/models/SpaceCard';
import { RootState } from './store';
const { publicRuntimeConfig } = getConfig();

const API_URL = publicRuntimeConfig.API_URL;

interface CardsState {
    cardsLoaded: boolean;
    loadMore: boolean;
    status: string;
    month: number;
}

const cardsAdapter = createEntityAdapter<SpaceCard>({
    selectId: (spaceCard) => spaceCard.title
});

const getPreviousMonthDate = (NoOfMonths: number) => {
    let today = new Date();
    let priorDate = new Date().setDate(today.getDate() - 30 * NoOfMonths);
    return new Date(priorDate).toISOString().split('T')[0];
};


export const fetchCardsAsync = createAsyncThunk<SpaceCard[], void, { state: RootState }>(
    'cards/fetchCardsAsync',
    async (_, thunkAPI: any) => {
        try {
            const response = await fetch(`${API_URL}&start_date=${getPreviousMonthDate(1)}`);
            console.log("fetchCardsAsync: ", response);
            const apiCards = await response.json();
            // since cards from API do not have id field so we should init it.
            // let id = thunkAPI.getState().cards.latestId;
            // apiCards.map((card: SpaceCard) => { card.id = id++; card.liked = false })
            return apiCards;
        }
        catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    },
)


export const fetchMoreCardsAsync = createAsyncThunk<SpaceCard[], void, { state: RootState }>(
    'cards/fetchMoreCardsAsync',
    async (_, thunkAPI: any) => {
        try {
            const NoOfMonths = thunkAPI.getState().cards.month;
            const response = await fetch(`${API_URL}&start_date=${getPreviousMonthDate(NoOfMonths)}`);
            console.log("fetchMoreCardsAsync: ", NoOfMonths);
            const apiCards = await response.json();

            return apiCards;
        }
        catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    },
)


export const fetchCardsRandomAsync = createAsyncThunk<SpaceCard[], void, { state: RootState }>(
    'cards/fetchCardsRandomAsync',
    async (_, thunkAPI: any) => {
        try {
            const response = await fetch(`${API_URL}&count=15`);
            const apiCards = await response.json();
            return apiCards;
        }
        catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    },
)


export const CardsSlice = createSlice({
    name: 'cards',
    initialState: cardsAdapter.getInitialState<CardsState>({
        cardsLoaded: false,
        loadMore: false,
        status: 'idle',
        month: 1
    }),
    reducers: {
        resetLoadMore: (state) => {
            state.loadMore = false;
        },
    },
    extraReducers: (builder => {
        builder.addCase(fetchCardsAsync.pending, state => {
            state.status = 'pendingFetchCards'
        });
        builder.addCase(fetchCardsAsync.fulfilled, (state, action) => {
            console.log('fetchCardsAsync.fulfilled: ', action.payload)
            cardsAdapter.setAll(state, action.payload)
            state.status = 'pendingFetchCards'
            state.cardsLoaded = true;
            state.month = state.month + 1;
        });
        builder.addCase(fetchCardsAsync.rejected, state => {
            state.status = 'idle'
        });


        builder.addCase(fetchCardsRandomAsync.pending, state => {
            state.status = 'pendingFetchCards'
        });
        builder.addCase(fetchCardsRandomAsync.fulfilled, (state, action) => {
            console.log('fetchCardsRandomAsync.fulfilled: ', action.payload)
            cardsAdapter.setAll(state, action.payload)
            state.status = 'pendingFetchCards'
            state.cardsLoaded = true;
        });
        builder.addCase(fetchCardsRandomAsync.rejected, state => {
            state.status = 'idle'
        });


        builder.addCase(fetchMoreCardsAsync.pending, state => {
            state.status = 'pendingFetchMoreCards'
        });
        builder.addCase(fetchMoreCardsAsync.fulfilled, (state, action) => {
            console.log('fetchMoreCardsAsync.fulfilled: ', action.payload)
            cardsAdapter.addMany(state, action.payload)
            state.status = 'pendingFetchMoreCards'
            state.loadMore = true;
            state.month = state.month + 1;
        });

        builder.addCase(fetchMoreCardsAsync.rejected, state => {
            state.status = 'idle'
        });
    })
})

const selectors = cardsAdapter.getSelectors(
    (state: RootState) => state.cards,
);
export const selectCards = selectors.selectAll;

export const cardSelectors = cardsAdapter.getSelectors((state: RootState) => state.cards);

export const { resetLoadMore } = CardsSlice.actions;