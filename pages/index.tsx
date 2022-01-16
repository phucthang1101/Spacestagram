import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CoverImage from '../components/features/coverImage/CoverImage'
import MediaList from '../components/features/grid/MediaList'
import Layout from '../components/layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
     
        <CoverImage />
     
      <MediaList />
    </Layout>
  )
}

export default Home
