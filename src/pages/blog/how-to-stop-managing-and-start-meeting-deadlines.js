import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'How to Stop Managing and Start Meeting Deadlines'
  const jsonLd = {
    headline: title,
    datePublished: '1-19-2018',
    keywords: [
      'Microsoft',
      'Microsoft Planner',
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

  const canonical = 'https://medium.com/gitbit/how-to-stop-managing-and-start-meeting-deadlines-d404f65404a9'
  if (typeof window !== 'undefined')
    location.href = canonical

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*85HOtkEcI2oQJxalNeWYAQ.png'} canonical={'https://medium.com/gitbit/how-to-stop-managing-and-start-meeting-deadlines-d404f65404a9'} title={title} description={'Scrum is the leading agile development methodology, used by Fortune 500 companies around the world. Planner is Microsoft Office 365’s task management app designed for agile teams.'}>
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
