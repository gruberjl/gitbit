import {h} from 'preact'
import Page from '../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import {CardActionArea} from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import blogArticles from '../../../data/ms500-blog-articles'

const Blog = () => (
  <Page title={'Read the latest news, guides, and how to articles on securing Microsoft 365.'} description={'News, advice, opinions, and guides on securing Microsoft 365. Learn how to be a cybersecurity pro and secure your Microsoft 365 tenant better than the rest.'} jsonLdType={'WebPage'} image={'/assets/microsoft365-security-administrator-associate-600x600.png'}>
    <main style={{backgroundColor: '#F3F6F9'}}>
      <Container className="blog-articles">
        <Grid container spacing={2}>
          <Grid container item>
            <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>Cybersecurity and Microsoft 365</Typography>
          </Grid>
          {blogArticles.map((article, idx) => (
            <Grid item key={idx} xs={12} md={6} sm={6} lg={3}>
              <a href={`/course/ms-500/blog/${article.slug}`}>
                <Card>
                  <CardActionArea>
                    <CardMedia component="img" variant="top" image={article.featuredImage} alt={article.title} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{mt: 4, mb: 4}}>{article.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{article.description}</Typography>
                      <CardActions>
                        <Button size="small" color="primary" href={`/course/ms-500/blog/${article.slug}`}>Read more</Button>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  </Page>
)

export default Blog
