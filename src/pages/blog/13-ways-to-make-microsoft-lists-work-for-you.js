import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '13 Ways to Make Microsoft Lists Work for You'
  const jsonLd = {
    headline: title,
    datePublished: '11-24-2020',
    keywords: [
      'Microsoft',
      'Microsoft Lists',
      'Microsoft 365',
      'Office 365',
      'Productivity'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://betterhumans.pub/13-ways-to-make-microsoft-lists-work-for-you-71b831e81abf'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1400/1*DsNJyGjMb37x7GMWGNgnQw.png'} canonical={'https://betterhumans.pub/13-ways-to-make-microsoft-lists-work-for-you-71b831e81abf'} title={title} description={'Microsoft Lists is a new app that is available with Microsoft 365. With Microsoft Lists, you can create a list to organize information. Store, share and collaborate with others in a clean list…'}>
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
