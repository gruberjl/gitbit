import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Microsoft Adds Free-form Digital Canvas to Office 365'
  const jsonLd = {
    headline: title,
    datePublished: '1-17-2018',
    keywords: [
      'Microsoft',
      'Microsoft Whiteboard',
      'Microsoft 365',
      'Office 365'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  const canonical = 'https://medium.com/gitbit/microsoft-adds-free-form-digital-canvas-to-office-365-17eb94c1df5'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*52UIhaYiQ-e81aDVmu-ZhA.png'} canonical={'https://medium.com/gitbit/microsoft-adds-free-form-digital-canvas-to-office-365-17eb94c1df5'} title={title} description={'Microsoft Whiteboard is a freeform digital canvas where people, ideas, and content come together. Microsoft Whiteboard Preview is the next version of the existing Microsoft Whiteboard app on Surface…'}>
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
