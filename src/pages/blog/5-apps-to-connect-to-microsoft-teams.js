import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

class BlogArticle extends Component {
  render() {
    const title = "5 Apps to Connect to Microsoft Teams"
    const jsonLd = {
      headline: title,
      datePublished: '2-9-2018',
      keywords: [
  			"Microsoft",
  			"Microsoft Teams",
  			"Microsoft 365",
  			"Office 365",
        'Productivity'
  		],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
        url: 'https://medium.com/@gruberjl'
      }
    }
    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*N2jT9YCnLB7d1P2G_2XBzA.png'} canonical={'https://medium.com/gitbit/5-apps-to-connect-to-microsoft-teams-17213517149a'} title={title} description={"Microsoft Teams is quickly becoming the hub for teamwork within Office 365. A team can chat via text, voice, and video. Microsoft Teams can connect people and apps together."}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>5 Apps to Connect to Microsoft Teams</Typography>
                  <Typography variant="body1" gutterBottom>Microsoft Teams is quickly becoming the hub for teamwork within Office 365. A team can chat via text, voice, and video. Microsoft Teams can connect people and apps bringing important information directly to the team that needs it. The apps listed below are either included in Office 365 or have a free version available to use.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>1. Twitter</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                     <div role="button" tabIndex="0">
                        <div>
                           <div>
                              <div>
                                 <div></div>
                                 <img style={{maxWidth: '100%', height: 'auto'}} alt="Teams Connectors Page" width="700" height="376" role="presentation" src="https://miro.medium.com/max/700/1*N2jT9YCnLB7d1P2G_2XBzA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*N2jT9YCnLB7d1P2G_2XBzA.png 276w, https://miro.medium.com/max/552/1*N2jT9YCnLB7d1P2G_2XBzA.png 552w, https://miro.medium.com/max/640/1*N2jT9YCnLB7d1P2G_2XBzA.png 640w, https://miro.medium.com/max/700/1*N2jT9YCnLB7d1P2G_2XBzA.png 700w"/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </figure>
                  <Typography variant="body1" gutterBottom><a href="https://twitter.com/gruberjl" rel="noopener">Twitter</a> has become a complaint and communication hub. If you’re not on it, you can’t control the conversations about your organization. Microsoft Teams can give you regularly scheduled updates or immediate updates to help your organization stay connected to clients and prospects.</Typography>
                  <Typography variant="body1" gutterBottom><strong>Pro Tip</strong>: I’ve watched a business explode in growth because the business owner was continually the first person to comment on President Trump’s Tweets. Not such an aggressive company? Wendy’s had the most popular tweet of all time by offering a man free chicken nuggets for a year. Talk about low cost advertising.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>2. Chatra</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                     <div>
                        <div>
                           <div>
                              <div></div>
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Teams chat" width="373" height="491" role="presentation" src="https://miro.medium.com/max/373/1*zPdD7QR0KmhTmyjFXCjcpw.png" sizes="373px" srcSet="https://miro.medium.com/max/276/1*zPdD7QR0KmhTmyjFXCjcpw.png 276w, https://miro.medium.com/max/373/1*zPdD7QR0KmhTmyjFXCjcpw.png 373w"/>
                           </div>
                        </div>
                     </div>
                  </figure>
                  <Typography variant="body1" gutterBottom>The free-forever for one agent app, <a href="https://app.chatra.io/?enroll=&amp;partnerId=kSXks3r4Qkn7Fts8Z" rel="noopener">Chatra</a>, is a live chat app for your website. Connect with customers and alert your team when a customer is ready to chat. Chatra &amp; Teams can help grow your business, as well as, improve customer retention.</Typography>
                  <Typography variant="body1" gutterBottom><strong>Insider Information:</strong> The younger generations don’t want to speak to a sales person on the phone or wait for your email response. As the world moves faster and faster chatting directly with leads will become more and more common.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>3. Microsoft Forms</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                     <div>
                        <div>
                           <div>
                              <div></div>
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Teams Forms Responses" width="462" height="458" role="presentation" src="https://miro.medium.com/max/462/1*LiJqJO2sTH_HQu3K2xBaag.png" sizes="462px" srcSet="https://miro.medium.com/max/276/1*LiJqJO2sTH_HQu3K2xBaag.png 276w, https://miro.medium.com/max/462/1*LiJqJO2sTH_HQu3K2xBaag.png 462w"/>
                           </div>
                        </div>
                     </div>
                  </figure>
                  <Typography variant="body1" gutterBottom>When a lead fills out a form on your website you have minutes to call or the odds of closing drop dramatically. The odds of contacting a lead decrease by over 10 times in the first hour! Luckily, <a href="https://forms.office.com" rel="noopener">Microsoft Forms</a> integrates directly into Teams. The next available specialist can contact the lead immediately.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>4. Bizzy</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                     <div role="button" tabIndex="0">
                        <div>
                           <div>
                              <div>
                                 <div></div>
                                 <img style={{maxWidth: '100%', height: 'auto'}} alt="Web Chat" width="700" height="409" role="presentation" src="https://miro.medium.com/max/700/1*vzcuBCuDeUPW91yNAl-wOg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*vzcuBCuDeUPW91yNAl-wOg.png 276w, https://miro.medium.com/max/552/1*vzcuBCuDeUPW91yNAl-wOg.png 552w, https://miro.medium.com/max/640/1*vzcuBCuDeUPW91yNAl-wOg.png 640w, https://miro.medium.com/max/700/1*vzcuBCuDeUPW91yNAl-wOg.png 700w"/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </figure>
                  <Typography variant="body1" gutterBottom>Bizzy is one of the easiest bots to configure and setup. Built on top of Microsoft Flow, Bizzy can help your team move faster in the matter of days, not months. While Bizzy can be configured directly in Flow, the Bizzy Admin Portal unlocks the full potential of the platform. Skill organization, permission management, custom bots and many more features. Bizzy is easily one of the top bots on the market today.</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>5. Microsoft Flow</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                     <div role="button" tabIndex="0">
                        <div>
                           <div>
                              <div>
                                 <div></div>
                                 <img style={{maxWidth: '100%', height: 'auto'}} alt="Teams Microsoft Flows" width="700" height="345" role="presentation" src="https://miro.medium.com/max/700/1*SKp_MofSBoqk5uYMSnle9A.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*SKp_MofSBoqk5uYMSnle9A.png 276w, https://miro.medium.com/max/552/1*SKp_MofSBoqk5uYMSnle9A.png 552w, https://miro.medium.com/max/640/1*SKp_MofSBoqk5uYMSnle9A.png 640w, https://miro.medium.com/max/700/1*SKp_MofSBoqk5uYMSnle9A.png 700w"/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </figure>
                  <Typography variant="body1" gutterBottom>Get notifications for approval processes and all sort of integrations! Microsoft Flow is one of the most complex yet powerful workflow apps on the market. Pairing Microsoft Flow with Microsoft Teams can mean the automated passing of tickets, notifications when documents are updated, the list goes on and on. While complex, the options are practically endless.</Typography>
                  <Typography variant="body1" gutterBottom><strong>Pro Tip:</strong> Leave the complex flows to the experts. Stick to the templates for a while. Flows can be literally do parts of your job for you but you can easily get lost and frustrated going down the rabbits hole.</Typography>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                     <div>
                        <div>
                           <Typography variant="body1" gutterBottom>Thank you for taking the time to read my article. I hope you found it beneficial. If you have any questions or feedback, please don’t hesitate to reach out. Don’t forget to sign up for the newsletter at <a href="https://businesscenter.office.com/b/gitbit/signup" rel="noopener">https://businesscenter.office.com/b/gitbit/signup</a></Typography>
                           <Typography variant="body1" gutterBottom>— <a href="https://www.linkedin.com/in/johnlgruber/" rel="noopener">John Gruber</a> — <a href="https://www.tierpoint.com/managed-services/office365/" rel="noopener">TierPoint Collaboration Engineer</a></Typography>
                        </div>
                     </div>
                  </section>
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
