import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'How to Automatically Forward Email from Office 365 to another Email Address'
  const jsonLd = {
    headline: title,
    datePublished: '01-11-2018',
    keywords: [
      'email',
      'Productivity',
      'Outlook',
      'Office 365'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://medium.com/gitbit/how-to-automatically-forward-email-from-office-365-to-another-email-address-9ba6de6ea3a9'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*hb1dnishAsWeJQHytvH7Cg.png'} canonical={'https://medium.com/gitbit/how-to-automatically-forward-email-from-office-365-to-another-email-address-9ba6de6ea3a9'} title={title} description={'Email forwarding refers to manually or automatically re-sending an email message delivered to one email address to one or more other addresses. Email forwarding is an ambiguous term that references…'}>
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
