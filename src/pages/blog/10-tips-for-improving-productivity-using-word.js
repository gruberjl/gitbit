import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '10 Tips for Improving Productivity using Word'
  const jsonLd = {
    headline: title,
    datePublished: '10-18-2019',
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

  const canonical = 'https://medium.com/gitbit/10-new-microsoft-word-features-you-need-to-use-now-2a38e7722ec0'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1609/1*Rg_5e2z8nlnKnRvEKHHOrQ.png'} canonical={'https://medium.com/gitbit/10-new-microsoft-word-features-you-need-to-use-now-2a38e7722ec0'} title={title} description={'While working for Microsoft, Charles Simonyi and Richard Brodie developed the first version of Microsoft Word. The two developers chipped away at Xerox Bravo, the principal WYSIWYG (What You See Is…'}>
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
