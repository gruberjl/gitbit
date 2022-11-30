import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const BlogArticle = () => {
  const title = '10 Reasons SharePoint Online Destroys File Shares'
  const jsonLd = {
    headline: title,
    datePublished: '2-1-2018',
    keywords: [
      'Microsoft',
      'SharePoint Online',
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

  const canonical = 'https://medium.com/gitbit/10-reasons-sharepoint-online-destroys-file-shares-7c2c2680f1e9'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1306/1*px7gQaOUIJmLN2LhwNgyFQ.jpeg'} canonical={'https://medium.com/gitbit/10-reasons-sharepoint-online-destroys-file-shares-7c2c2680f1e9'} title={title} description={'The IT department of the future leads the business driving innovation. We streamline the day to day, improve customer experience, and help the sales team close more deals!'}>
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
