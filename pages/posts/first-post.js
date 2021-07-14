import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/alert'

export default function FirstPost() {
    return(
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                Check out my personal website{' '}
                <a href="http://mylevitz.com/">  MYL's Portfolio</a>
            </h2>
        </Layout>
    )
}