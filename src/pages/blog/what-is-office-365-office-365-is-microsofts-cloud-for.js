import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

 
class BlogArticle extends Component {
  render() {
    const title = "What Is Office 365?. Office 365 is Microsoft’s cloud for…"
    const jsonLd = {
      headline: title,
      datePublished: '4-17-2018',
      keywords: [
        "Microsoft",
        "Microsoft 365",
        "Office 365",
        "Productivity"
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1200/0*cGOLIwkj_pYA9pAt.JPG'} canonical={'https://medium.com/gitbit/what-is-office-365-b87c919fac82'} title={title} description={"Office 365 is Microsoft’s cloud for businesses. Designed around productivity and collaboration, Microsoft has integrated over 30 apps into the cloud platform. From email, file storage, and secure…"}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>What Is Office 365?</Typography>
                  <Typography variant="body1" gutterBottom>Office 365 is Microsoft’s cloud for businesses. Designed around productivity and collaboration, Microsoft has integrated over 30 apps into the cloud platform. From <strong>email, file storage, and secure chat for teams</strong>, businesses around the world are empowering their users by improving productivity while cutting costs. Microsoft’s continued shift to cloud computing has had a significant impact on businesses.</Typography>
                  <Typography variant="body1" gutterBottom><strong>Exchange Online</strong> is Microsoft Office 365’s cloud-based email solution. The industry-leading cloud solution is the most common app adopted by small businesses and Fortune 500 companies. Microsoft Exchange Online provides the benefits of a cloud-based email service with the robust capabilities of an on-premises server deployment. Simple to manage and rock-solid security has made Exchange Online the top business email service in the cloud. SPAM filters, compliance, e-discovery, and archiving are integrated directly into the platform. Since every user can have a mailbox up to 50GB in size and send and receive emails as large as 150MB, organizations can stop managing mailboxes and start being more productive.</Typography>
                  <Typography variant="body1" gutterBottom>Read the rest of the article at <a href="http://documentmedia.com/article-2792-What-Is-Office-365.html" rel="noopener">Document Media</a>.</Typography>
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>
      </Page>
    )
  }
}

export default BlogArticle
