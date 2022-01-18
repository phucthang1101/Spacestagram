import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import CoverImage from '../components/features/coverImage/CoverImage'
import MediaList from '../components/features/grid/MediaList'
import LoadingScreen from '../components/features/loadingScreen/LoadingScreen'
import Layout from '../components/layout/Layout'
import { SpaceCard } from '../components/models/SpaceCard'


const Liked: NextPage = () => {
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState<SpaceCard[]>([]);

    useEffect(() => {
        setCards(Object.values(loadCardsFromLS()));
    }, []);

    const loadCardsFromLS = (): Record<string, SpaceCard> => {
        const stored = localStorage.getItem('cards');
        return stored ? JSON.parse(stored) : {};
    };
    setTimeout(() => setLoading(false), 2000);

    if (loading) return <LoadingScreen />
    return (
        <Layout>
            <CoverImage />
            <MediaList spaceCardsProps={cards} />
        </Layout>

    )
}

export default Liked
