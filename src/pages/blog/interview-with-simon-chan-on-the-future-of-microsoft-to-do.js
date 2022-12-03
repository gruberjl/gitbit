import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Interview with Simon Chan on the Future of Microsoft To-Do'
  const jsonLd = {
    headline: title,
    datePublished: '2-5-2018',
    keywords: [
      'Microsoft',
      'Microsoft To-Do',
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

  const canonical = 'https://medium.com/gitbit/interview-with-simon-chan-on-the-future-of-microsoft-to-do-aee3a460610'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1400/1*t2GmJE7phLo75UsqCeiurw.jpeg'} canonical={'https://medium.com/gitbit/interview-with-simon-chan-on-the-future-of-microsoft-to-do-aee3a460610'} title={title} description={'Meet Simon Chan. After developing Wunderlist’s client base to 20 mil, he joined Microsoft as Senior Product Manager of To-Do. Find out about the eventual fate of To-Do and how Simon intends to proceed'}>
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
