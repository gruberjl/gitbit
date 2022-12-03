import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Office 365 + AD Connect: Manage Groups'
  const jsonLd = {
    headline: title,
    datePublished: '12-11-2018',
    keywords: [
      'Microsoft',
      'Groups',
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

  const canonical = 'https://medium.com/gitbit/office-365-ad-connect-manage-groups-afe539ca017f'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/413/1*IBbrUL22opQi9V33U0hCYQ.png'} canonical={'https://medium.com/gitbit/office-365-ad-connect-manage-groups-afe539ca017f'} title={title} description={'If you are using Office 365 with AD Connect your groups are probably in your on-premise Active Directory. If your groups are being synced from your own premises Active Directory, you won’t be able to…'}>
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
