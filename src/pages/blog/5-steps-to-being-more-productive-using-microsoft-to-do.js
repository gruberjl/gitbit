import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const BlogArticle = () => {
  const title = '5 Steps to Being More Productive Using Microsoft To-Do'
  const jsonLd = {
    headline: title,
    datePublished: '1-27-2018',
    keywords: [
      'Microsoft',
      'Microsoft ToDo',
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

  const canonical = 'https://medium.com/gitbit/5-steps-to-being-more-productive-using-microsoft-to-do-9a147a1fa3f9'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/505/1*e2eAae92fZFoVRa8lcLaYw.png'} canonical={'https://medium.com/gitbit/5-steps-to-being-more-productive-using-microsoft-to-do-9a147a1fa3f9'} title={title} description={'Microsoft To-Do is one of the latest apps to be included in Office 365. It’s a simple to-do list that makes it easy to plan your day. Whether it’s for work, school or home, To-Do will help you…'}>
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
