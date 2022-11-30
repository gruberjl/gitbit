import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Mac ❤’s OneDrive for Business'
  const jsonLd = {
    headline: title,
    datePublished: '10-18-2018',
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

  const canonical = 'https://medium.com/gitbit/mac-s-onedrive-for-business-f83be226a79b'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1000/1*gmbdfxFBGhLBnLbXjfLuLQ.png'} canonical={'https://medium.com/gitbit/mac-s-onedrive-for-business-f83be226a79b'} title={'Mac ❤’s OneDrive for Business. Microsoft vs Apple is one of the…'} description={'Everything you need to know to start using OneDrive on Mac'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
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
