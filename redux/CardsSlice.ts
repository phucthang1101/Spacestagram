import { createSlice, createAsyncThunk, isAnyOf, createEntityAdapter } from '@reduxjs/toolkit';
import getConfig from 'next/config';
import { SpaceCard } from '../components/models/SpaceCard';
import { RootState } from './store';
const { publicRuntimeConfig } = getConfig();

const API_URL = publicRuntimeConfig.API_URL;

interface CardsState {
    cardsLoaded: boolean,
    status: string;
}

const cardsAdapter = createEntityAdapter<SpaceCard>();

const getPreviousMonthDate = () => {
    let today = new Date();
    let priorDate = new Date().setDate(today.getDate() - 30);
    return new Date(priorDate).toISOString().split('T')[0];
};

export const fetchCardsAsync = createAsyncThunk<SpaceCard[], void, { state: RootState }>(
    'cards/fetchCardsAsync',
    async (_, thunkAPI: any) => {
        try {
            const response = await fetch(`${API_URL}&start_date=${getPreviousMonthDate()}`);
            console.log(response);
            const apiCards = await response.json();
            // since cards from API do not have id field so we should init it.
            let id = 1;
            apiCards.map((card: SpaceCard) => {card.id = id++; card.liked = false})
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
        status: 'idle'
    }),
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchCardsAsync.pending, state => {
            state.status = 'pendingFetchCards'
        });
        builder.addCase(fetchCardsAsync.fulfilled, (state, action) => {
            console.log('fetchCardsAsync.fulfilled: ', action.payload)
            cardsAdapter.setAll(state, action.payload)
            state.status = 'pendingFetchCards'
            state.cardsLoaded = true;
        });

        builder.addCase(fetchCardsAsync.rejected, state => {
            state.status = 'idle'
        });
    })
})

const selectors = cardsAdapter.getSelectors(
    (state: RootState) => state.cards,
);
export const selectCards = selectors.selectAll;

export const cardSelectors = cardsAdapter.getSelectors((state: RootState) => state.cards);


