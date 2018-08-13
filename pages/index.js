import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Projects } from '../components/Projects/containers'

import '../static/scss/app.scss'

const contentful = require('contentful')

const SPACE_ID = ''
const ACCESS_TOKEN = ''
const POSTS_CONTENT_TYPE = ''

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
