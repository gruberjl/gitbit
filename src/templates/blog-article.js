/* eslint react/jsx-no-undef: "off", no-tabs: "off", no-irregular-whitespace: "off" */
import {h, Component} from 'preact'
import Page from '../../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const marginTop24Style = {
  marginTop: '24px'
}

class ArticlePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article: {ARTICLE: true}
    }
  }

  render() {
    const jsonLd = {
      headline: this.state.article.title,
      datePublished: this.state.article.publishDate,
      keywords: [
        'Microsoft',
        'Microsoft 365',
        'Office 365',
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      author: {
        '@type': 'Person',
        name: 'John Gruber',
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} title={this.state.article.title} description={this.state.article.description}>
        <Container>
          <Grid container>
            <Grid item>
              <main>
                <div id="ld-534-9587" /><script>{`(function(w,d,s,i){w.ldAdInit=w.ldAdInit||[];w.ldAdInit.push({slot:15664931508787046,size:[0, 0],id:"ld-534-9587"});if(!d.getElementById(i)){var j=d.createElement(s),p=d.getElementsByTagName(s)[0];j.async=true;j.src="//cdn2.decide.dev/_js/ajs.js";j.id=i;p.parentNode.insertBefore(j,p);}})(window,document,"script","ld-ajs")`}</script>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><ARTICLE /></div>
              </main>
            </Grid>
          </Grid>
        </Container>
      </Page>
    )
  }
}

export default ArticlePage
