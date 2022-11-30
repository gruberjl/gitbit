import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Improving Teamwork and Collaboration with Microsoft Teams'
  const jsonLd = {
    headline: title,
    datePublished: '9-17-2018',
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

  const canonical = 'https://medium.com/gitbit/improving-teamwork-and-collaboration-with-microsoft-teams-4a550c7029c6'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1000/1*lu07WwPtQxi3E-JM6mupAA.jpeg'} canonical={'https://medium.com/gitbit/improving-teamwork-and-collaboration-with-microsoft-teams-4a550c7029c6'} title={title} description={'Microsoft Teams is a collaboration hub built around group chat with a fast growing list of connections to all the apps your team needs. Microsoft has developed apps for every device. Use the…'}>
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
