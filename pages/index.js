import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getBitCoinLatest } from '../lib/api'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const getBit = await getBitCoinLatest()
  return {
    props: {
      allPostsData,
      getBit
    }
  }
}

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Full Stack Developr with 3 years of experience.</p>
        <p>
          Check out my first post at{' '}
          <Link href="/posts/first-post">
                <a >First Post</a>
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
      <h2 className={utilStyles.headingLg}>Latest Bitcoin</h2>
        <ul className={utilStyles.list}>
            {props.getBit.map(({currency,rate,description}) =>(
              <li className={utilStyles.listItem} key={currency}>
                Currency : {currency}
                <br />
                Rate : {rate}
                <br />
                Description : {description}
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  )
}