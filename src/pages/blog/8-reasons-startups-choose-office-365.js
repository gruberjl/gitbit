import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '8 Reasons Startups Choose Office 365'
  const jsonLd = {
    headline: title,
    datePublished: '10-22-2018',
    keywords: [
      'Microsoft',
      'startup',
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

  const canonical = 'https://medium.com/gitbit/8-reasons-startups-chose-office-365-366823158f94'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*5WDkCFfsNRXviWiQReDefw.jpeg'} canonical={'https://medium.com/gitbit/8-reasons-startups-chose-office-365-366823158f94'} title={title} description={'Before I get started I’d like to note: This isn’t a G-Suite vs Office 365 or anything else vs Office 365. This is a breakdown of the best parts of Office 365. There’s a lot of great options for…'}>
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
