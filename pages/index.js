import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"

import { getSortedPostsData } from "../lib/posts"

// Static- Generation (getStaticProps)
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m Abhijith, a web developer. I’ve been working as a web
          developer for a few years now, and I’m passionate about everything
          that goes into making websites work well and look beautiful. The web
          is my passion because it’s where I can find the most exciting projects
          to work on. It’s also where I get to express my creativity in ways
          that are hard to find elsewhere. I love working with clients who want
          something more than just another website; they want their site to be
          more than just another website. They want it to be memorable,
          engaging, and valuable—and that’s where I come in!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* blogs prop displaying */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
