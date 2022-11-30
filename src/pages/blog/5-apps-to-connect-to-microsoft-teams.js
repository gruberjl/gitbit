import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const BlogArticle = () => {
  const title = '5 Apps to Connect to Microsoft Teams'
  const jsonLd = {
    headline: title,
    datePublished: '2-9-2018',
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

  if (typeof window !== 'undefined')
    location.href = 'https://medium.com/gitbit/5-apps-to-connect-to-microsoft-teams-17213517149a'

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*N2jT9YCnLB7d1P2G_2XBzA.png'} canonical={'https://medium.com/gitbit/5-apps-to-connect-to-microsoft-teams-17213517149a'} title={title} description={'Microsoft Teams is quickly becoming the hub for teamwork within Office 365. A team can chat via text, voice, and video. Microsoft Teams can connect people and apps together.'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="body1" gutterBottom>If you were not automatically redirected please go to <a href='https://medium.com/gitbit/5-apps-to-connect-to-microsoft-teams-17213517149a'>{title}</a></Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </Page>
  )
}

export default BlogArticle
