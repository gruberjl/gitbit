import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Introduction to Email Threats & Defense'
  const jsonLd = {
    headline: title,
    datePublished: '6-10-2019',
    keywords: [
      'Microsoft',
      'Exchange Online',
      'Microsoft 365',
      'Office 365',
      'Cloud security'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://medium.com/hackernoon/introduction-to-email-threats-defense-9735ba4b193e'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/2000/1*Ijemqp-iDELaFM_DK0PX0g.png'} canonical={'https://medium.com/hackernoon/introduction-to-email-threats-defense-9735ba4b193e'} title={title} description={'There’s a constant threat to your organization. Email is one of the most common ways hackers attempt to breach your organization’s security. Over half of the messages received are spam, phishing…'}>
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
