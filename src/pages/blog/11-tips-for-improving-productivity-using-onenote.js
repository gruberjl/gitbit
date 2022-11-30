import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '11 Tips for Improving Productivity using OneNote'
  const jsonLd = {
    headline: title,
    datePublished: '1-12-2018',
    keywords: [
      'OneNote',
      'Microsoft',
      'Productivity',
      'Office 365',
      'Microsoft 365'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://betterhumans.pub/10-tips-to-improve-productivity-using-onenote-85dee4a32cf2'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1603/1*pFl-NA9QZkRgzrudAfuUWA.jpeg'} canonical={'https://betterhumans.pub/10-tips-to-improve-productivity-using-onenote-85dee4a32cf2'} title={title} description={'OneNote is a digital notebook that automatically backs up to Microsoft’s Office 365 cloud. Microsoft has developed apps for every device including Windows PC, Mac,iPhone, Android. OneNote notebooks…'}>
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
