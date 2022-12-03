import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '19 Reasons Exchange Online is Winning'
  const jsonLd = {
    headline: title,
    datePublished: '1-19-2019',
    keywords: [
      'Microsoft',
      'Exchange Online',
      'Microsoft 365',
      'Office 365'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://medium.com/gitbit/19-reasons-exchange-online-is-winning-195f2188150d'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1280/1*06thNHYNsN-FgSa_w4GhaQ.jpeg'} canonical={'https://medium.com/gitbit/19-reasons-exchange-online-is-winning-195f2188150d'} title={title} description={'Exchange Online is Microsoft’s hosted email for businesses. It’s the industry-leading cloud solution adopted by small businesses and fortune 500 companies. Microsoft Exchange Online provides the…'}>
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
