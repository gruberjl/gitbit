import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '6 Security & Compliance Features of Microsoft Teams'
  const jsonLd = {
    headline: title,
    datePublished: '1-16-2018',
    keywords: [
      'Microsoft Teams',
      'Office 365',
      'Cloud Security',
      'Microsoft 365',
      'MS-500'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://medium.com/gitbit/6-security-compliance-features-of-microsoft-teams-c9dacba5f909'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1920/1*tq8UWk-AbrYaLkDehWizyw.jpeg'} canonical={'https://medium.com/gitbit/6-security-compliance-features-of-microsoft-teams-c9dacba5f909'} title={title}>
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
