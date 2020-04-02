import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      You should not be viewing this. If you are, something has gone terribly
      wrong.
    </p>
  </Layout>
)

export default NotFoundPage
