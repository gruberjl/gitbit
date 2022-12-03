import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Reset Passwords in Office 365. How to reset passwords in Office 365'
  const jsonLd = {
    headline: title,
    datePublished: '12-13-2018',
    keywords: [
      'Microsoft',
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

  const canonical = 'https://medium.com/gitbit/reset-passwords-in-office-365-e46ea75ee88'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/588/1*N58qbHvqifsYw3wm4Fv_6A.png'} canonical={'https://medium.com/gitbit/reset-passwords-in-office-365-e46ea75ee88'} title={title} description={'Like most IT services and applications Office 365 is secured with passwords. People will occasionally forget their password and a reset will be required. Since every organization has different needs…'}>
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
