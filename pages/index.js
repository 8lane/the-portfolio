import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Projects } from '../components/Projects/containers'

import '../static/scss/app.scss'

const contentful = require('contentful')

const SPACE_ID = 'aycig32znf0e'
const ACCESS_TOKEN = '24069045287934d23d1f203dbac3cf0089a3f7e0de31bbd1770e2ff74b22ca5e'
const POSTS_CONTENT_TYPE = '2wKn6yEnZewu2SCCkus4as'

const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN })

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await client.getEntries({ content_type: POSTS_CONTENT_TYPE })
      .then((response) => response.items)
      .catch((error) => {
        console.log(chalk.red(`\nError occurred while fetching posts`))
    })

    return {
      posts
    }
  }

  render() {
    const { posts } = this.props

    return (
      <div className="tc-app">
        <a className="skip-link sr-only" href="#content">
          Skip to content
        </a>

        <Header />

        <div id="content">
          <main className="app-content container">
            <article className="app-content__main">
              <div className="app-content__body">
                <Projects posts={posts} />
              </div>
            </article>
          </main>
        </div>

        <Footer />
      </div>
    )
  }
}
