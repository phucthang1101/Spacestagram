import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import CoverImage from '../components/features/coverImage/CoverImage'
import MediaList from '../components/features/grid/MediaList'
import LoadingScreen from '../components/features/loadingScreen/LoadingScreen'
import useSpaceCard from '../components/hooks/useSpaceCard'
import Layout from '../components/layout/Layout'
import { fetchCardsRandomAsync } from '../redux/CardsSlice'
import { useAppDispatch } from '../redux/store'


const Random: NextPage = () => {
    const [loading, setLoading] = useState(true);

    const dispatch = useAppDispatch();
    const { spaceCards } = useSpaceCard();


    const initApp = useCallback(async () => {
        try {
            await dispatch(fetchCardsRandomAsync());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch])

    useEffect(() => {
        initApp().then(() => setLoading(false));
    }, [initApp])


    if (loading) return <LoadingScreen />

    return (
        <Layout>
            <CoverImage />
            <MediaList spaceCardsProps={spaceCards} />
        </Layout>

    )
}

export default Random
