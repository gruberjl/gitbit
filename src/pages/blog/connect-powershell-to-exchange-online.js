import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Connect PowerShell to Exchange Online'
  const jsonLd = {
    headline: title,
    datePublished: '10-19-2018',
    keywords: [
      'Microsoft',
      'Microsoft Exchange Online',
      'Microsoft 365',
      'Office 365',
      'PowerShell'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://medium.com/gitbit/connect-powershell-to-exchange-online-8e2defe23ce0'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*CLmyTy4bL13Rd2fZ12529Q.png'} canonical={'https://medium.com/gitbit/connect-powershell-to-exchange-online-8e2defe23ce0'} title={title} description={'Office 365 is a suite of clouds and services bundled into one package. Connecting to Exchange Online’s PowerShell will allow you to manage the email portion of your Office 365 tenant.'}>
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
