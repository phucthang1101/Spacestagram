import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MediaList from '../components/features/grid/MediaList'
import Layout from '../components/layout/Layout'


const Home: NextPage = () => {
  return (
    <Layout>
      <MediaList />
    </Layout>
  )
}

export default Home
