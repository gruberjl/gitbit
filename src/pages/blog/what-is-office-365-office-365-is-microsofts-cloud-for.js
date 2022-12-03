import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'What Is Office 365?. Office 365 is Microsoft’s cloud for…'
  const jsonLd = {
    headline: title,
    datePublished: '4-17-2018',
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

  const canonical = 'https://medium.com/gitbit/what-is-office-365-b87c919fac82'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1200/0*cGOLIwkj_pYA9pAt.JPG'} canonical={'https://medium.com/gitbit/what-is-office-365-b87c919fac82'} title={title} description={'Office 365 is Microsoft’s cloud for businesses. Designed around productivity and collaboration, Microsoft has integrated over 30 apps into the cloud platform. From email, file storage, and secure…'}>
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
