import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '30 Advanced Tips for Becoming a Microsoft Teams Power User'
  const jsonLd = {
    headline: title,
    datePublished: '10-14-2020',
    keywords: [
      'Microsoft',
      'Microsoft Teams',
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

  const canonical = 'https://betterhumans.pub/30-advanced-tips-for-becoming-a-microsoft-teams-power-user-d1e544444656'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*qRhUy_LCV-zZDIc1z8DL5w.png'} canonical={'https://betterhumans.pub/30-advanced-tips-for-becoming-a-microsoft-teams-power-user-d1e544444656'} title={title} description={'Microsoft Teams is a communication platform much like Slack that combines one on one & team chat, video meetings, and file storage. Teams also has a number of application integrations that can be…'}>
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
