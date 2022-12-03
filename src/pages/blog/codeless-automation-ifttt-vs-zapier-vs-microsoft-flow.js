import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Codeless Automation: IFTTT vs Zapier vs Microsoft Flow'
  const jsonLd = {
    headline: title,
    datePublished: '10-10-2018',
    keywords: [
      'Microsoft',
      'Microsoft Flow',
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

  const canonical = 'https://betterprogramming.pub/codeless-automation-ifttt-vs-zapier-vs-microsoft-flow-57d5bc56fc0e'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={''} canonical={'https://betterprogramming.pub/codeless-automation-ifttt-vs-zapier-vs-microsoft-flow-57d5bc56fc0e'} title={title} description={'With IFTTT’s total fund raising at over 62 million dollars the codelesss automation workspace has really heated up. With products like IFTTT, Zapier, and Microsoft Flow on the market, automating…'}>
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
