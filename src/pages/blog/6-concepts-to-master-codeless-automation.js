import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '6 Concepts to Master Codeless Automation'
  const jsonLd = {
    headline: title,
    datePublished: '10-14-2018',
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

  const canonical = 'https://medium.com/gitbit/6-concepts-to-master-codeless-automation-9477e93a0ae3'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1000/1*SIb-7xHwfHKsPU2YMxoJUA.png'} canonical={'https://medium.com/gitbit/6-concepts-to-master-codeless-automation-9477e93a0ae3'} title={title} description={'Some days it seems impossible to get everything done. As time goes by hectic days become normal. Racing through tasks and grinding through the daily routines without missing a beat becomes a…'}>
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
