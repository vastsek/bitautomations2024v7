import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lang
          title
          description
          author
          image
          siteUrl
          keywords
        }
      }
    }
  `)

  return data.site.siteMetadata
}