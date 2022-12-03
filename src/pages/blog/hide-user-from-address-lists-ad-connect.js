import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Hide User from Address Lists (AD Connect)'
  const jsonLd = {
    headline: title,
    datePublished: '11-2-2018',
    keywords: [
      'Microsoft',
      'Active Directory',
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

  const canonical = 'https://medium.com/gitbit/hide-user-from-address-lists-ad-connect-ee67f2369bc1'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={''} canonical={'https://medium.com/gitbit/hide-user-from-address-lists-ad-connect-ee67f2369bc1'} title={title} description={'How to hide a user from the address book in Office 365 when using AD Connect'}>
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
