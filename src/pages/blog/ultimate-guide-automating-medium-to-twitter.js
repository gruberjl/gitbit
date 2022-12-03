import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Ultimate Guide: Automating Medium to Twitter'
  const jsonLd = {
    headline: title,
    datePublished: '6-26-2019',
    keywords: [
      'Microsoft',
      'Microsoft Flow',
      'Medium.com',
      'Office 365',
      'Productivity'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://betterprogramming.pub/ultimate-guide-automating-medium-to-twitter-360f01c6e5ac'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1284/1*0Cl30s78fnG98LRd8t0dwA.png'} canonical={'https://betterprogramming.pub/ultimate-guide-automating-medium-to-twitter-360f01c6e5ac'} title={title} description={'But why should marketing take half your time? Get it off your plate so you can focus on the more creative processes. I know what you’re thinking… Automatically posting a tweet when you publish a…'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <h1>{title}</h1>
                <Typography variant="body1" gutterBottom>If you were not automatically redirected please go to <a href={canonical}>{title}</a></Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </Page>
  )
}

export default BlogArticle
