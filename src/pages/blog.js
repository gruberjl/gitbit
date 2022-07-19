import { h, Component } from "preact"
import Page from '../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import blogArticles from '../data/blog-articles'

class BlogArticle extends Component {
  constructor(props) {
    super()
    this.handleWindowResize = this.handleWindowResize.bind(this)

    const articles = blogArticles.articles.map(article => {
      article.height = article.image575Height
      return article
    })

    this.state = {
      width: 575,
      articles: articles
    }
  }

  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener("resize", this.handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize)
  }

  handleWindowResize() {
    let newWidth = this.state.width
    let newArticles = this.state.articles


    if (window.innerWidth <= 575) {
      if (newWidth !== 575) {
        newWidth = 575
        newArticles = newArticles.map(article => {
          article.height = article.image575Height
          return article
        })
      }
    } else if (window.innerWidth >= 576 && window.innerWidth < 767) {
      if (newWidth !== 244) {
        newWidth = 244
        newArticles = newArticles.map(article => {
          article.height = article.image244Height
          return article
        })
      }
    } else if (window.innerWidth >= 767 && window.innerWidth < 991) {
      if (newWidth !== 334) {
        newWidth = 334
        newArticles = newArticles.map(article => {
          article.height = article.image334Height
          return article
        })
      }
    } else if (window.innerWidth >= 991 && window.innerWidth < 1199) {
      if (newWidth !== 214) {
        newWidth = 214
        newArticles = newArticles.map(article => {
          article.height = article.image214Height
          return article
        })
      }
    } else if (window.innerWidth >= 1199 && window.innerWidth < 1399) {
      if (newWidth !== 259) {
        newWidth = 259
        newArticles = newArticles.map(article => {
          article.height = article.image259Height
          return article
        })
      }
    } else if (window.innerWidth >= 1400) {
      if (newWidth !== 304) {
        newWidth = 304
        newArticles = newArticles.map(article => {
          article.height = article.image304Height
          return article
        })
      }
    }

    this.setState({
      width: newWidth,
      articles: newArticles
    })
  }

  render() {
    return (
      <Page title={'Advice, opinions, and guides on Microsoft 365'} description={'Advice, opinions, and guides on Microsoft 365'} jsonLdType={'WebPage'} image={'/assets/microsoft365-security-administrator-associate-600x600.png'}>
        <main style={{backgroundColor: '#F3F6F9'}}>
          <Container className="blog-articles">
            <Grid container spacing={2}>
              <Grid container item>
                <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>How to get the most out of Microsoft 365</Typography>
              </Grid>
              {this.state.articles.map((article, idx) => (
                <Grid item key={idx} xs={12} md={6} sm={6} lg={3}>
                  <a href={`/blog/${article.gitbitURL}`}>
                    <Card>
                      <CardActionArea>
                        <CardMedia component="img" variant="top" image={article.image} alt={article.title}
                          srcSet={`${article.image575} 575w, ${article.image244} 244w, ${article.image334} 334w, ${article.image214} 214w, ${article.image259} 259w, ${article.image304} 304w`}
                          sizes='(max-width: 575px) 575px, (max-width:767px) 244px, (max-width:991px) 334px, (max-width:1199px) 214px, (max-width:1399px) 259px, (min-width:1400px) 304px'
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" sx={{mt:4, mb:4}}>{article.title}</Typography>
                          <Typography variant="body2" color="text.secondary">{article.description}</Typography>
                          <CardActions>
                            <Button size="small" color="primary" href="/tests/new">Read more</Button>
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
  }
}
// sizes="(max-width: 575px) 575px, (min-width:576px) and (max-width:767px) 244px, (min-width:768px) and (max-width:991px) 334px, (min-width:992px) and (max-width:1199px) 214px, (min-width:1200px) and (max-width:1399px) 259px, (min-width:1400px) 304px"
export default BlogArticle
