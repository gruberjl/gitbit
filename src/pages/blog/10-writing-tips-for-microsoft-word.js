import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '10 Writing Tips for Microsoft Word'
  const jsonLd = {
    headline: title,
    datePublished: '10-13-2018',
    keywords: [
      'Microsoft',
      'Microsoft Word',
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

  const canonical = 'https://medium.com/gitbit/10-writing-tips-for-microsoft-word-60ed6e645515'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*soXE-MymVVp4327bzccbpA.jpeg'} canonical={'https://medium.com/gitbit/10-writing-tips-for-microsoft-word-60ed6e645515'} title={title} description={'10 tips to save you time and stay organized. Microsoft Word 2016 is built for maximum productivity. Quickly produce professional documents using the rich authoring features.'}>
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
