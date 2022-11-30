import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '13 Outlook Productivity & Organization Tips'
  const jsonLd = {
    headline: title,
    datePublished: '1-23-2019',
    keywords: [
      'Microsoft',
      'Microsoft Outlook',
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

  const canonical = 'https://betterhumans.pub/13-outlook-productivity-organization-tips-244e9f16efeb'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1000/1*5s_KoLjkCsFe9-eXmTY38g.jpeg'} canonical={'https://betterhumans.pub/13-outlook-productivity-organization-tips-244e9f16efeb'} title={title} description={'Microsoft Outlook is a personal information manager from Microsoft, accessible as a piece of the Microsoft Office suite. Albeit often used as an email application, it likewise incorporates a…'}>
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
