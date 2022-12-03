import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'What’s OneDrive for Business. Enterprise File Sync and Share'
  const jsonLd = {
    headline: title,
    datePublished: '10-12-2018',
    keywords: [
      'Microsoft',
      'Microsoft OneDrive',
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

  const canonical = 'https://medium.com/gitbit/whats-onedrive-for-business-7965bed454b0'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*JZH5y9EsQeEhRxaolsLipw.png'} canonical={'https://medium.com/gitbit/whats-onedrive-for-business-7965bed454b0'} title={title} description={'The world is changing. Data is growing at a rapid pace. By 2020 the world will have accumulated 44 zettabytes or 44,000,000,000,000 GB of data.'}>
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
