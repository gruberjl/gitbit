import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const BlogArticle = () => {
  const title = 'Top 11 Tips and Tricks for Using Microsoft OneDrive'
  const jsonLd = {
    headline: title,
    datePublished: '8-6-2021',
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

  const canonical = 'https://medium.com/gitbit/11-pro-tips-and-tricks-for-using-microsoft-onedrive-34a235deea2c'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1920/1*sfDRk0sFrRgZ5ib7BOBQ_w.png'} canonical={'https://medium.com/gitbit/11-pro-tips-and-tricks-for-using-microsoft-onedrive-34a235deea2c'} title={title} description={'with OneDrive you can keep items on your local device and sync them to the cloud. That way your files are available while you don\'t have an internet connection but are still backed up to the cloud as soon as you connect!'}>
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
