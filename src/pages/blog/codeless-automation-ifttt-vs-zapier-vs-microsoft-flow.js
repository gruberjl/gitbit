import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


class BlogArticle extends Component {
  render() {
    const title = "Codeless Automation: IFTTT vs Zapier vs Microsoft Flow"
    const jsonLd = {
      headline: title,
      datePublished: '10-10-2018',
      keywords: [
        "Microsoft",
        "Microsoft Flow",
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
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={''} canonical={'https://betterprogramming.pub/codeless-automation-ifttt-vs-zapier-vs-microsoft-flow-57d5bc56fc0e'} title={title} description={"With IFTTT’s total fund raising at over 62 million dollars the codelesss automation workspace has really heated up. With products like IFTTT, Zapier, and Microsoft Flow on the market, automating…"}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>Codeless Automation: IFTTT vs Zapier vs Microsoft Flow</Typography>
                  <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Codeless automation: IFTTT vs Zapier vs Microsoft Flow" src="https://miro.medium.com/max/1000/1*-uNwn8p2fGeJFz1TAvoQmQ.png" width="1000" height="500" role="presentation"/></div>
                            </div>
                         </figure>
                      </div>
                   </div>
                  </div>
                  <div>
                   <div>
                      <Typography variant="body1" gutterBottom>With IFTTT’s total fundraising at over 62 million dollars, the codeless automation workspace has really heated up. With products like IFTTT, Zapier, and Microsoft Flow on the market, automating day-to-day tasks has never been easier. These tools allow you to connect your apps and build automated workflows to be more productive. But these apps each have their own strengths and choosing the right one can be difficult.</Typography>
                      <Typography variant="body1" gutterBottom>In broad strokes IFTTT, Zapier, and Microsoft Flow all perform the same function, to connect apps and automate workflows. Each has its own strengths and weaknesses. Choosing the right app has proven difficult because each app fits a different niche. At first glance, choosing the right app is daunting. The interfaces, approach, and verbiage are different on each app, yet the most important difference is the connections to third-party apps. The connectors in each app drastically change how each app is used and who uses them.</Typography>
                   </div>
                  </div>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom><strong>IFTTT</strong></Typography>
                         <Typography variant="body1" gutterBottom>The simplest of the three. Each workflow has one trigger and one action. Beautifully designed, IFTTT is a great starting place with automation. The clean simple structure of the app ranks IFTTT as a top contender. The low learning curve and easy registration make it quick and painless to begin rolling out automated workflows. The simplicity comes with drawbacks, however, as IFTTT only has single action workflows. As long as your workflows don’t require complex calculations IFTTT may be the perfect fit for what you need to do.</Typography>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>Zapier</Typography>
                         <Typography variant="body1" gutterBottom>With multi-step workflows, Zapier has more options than IFTTT. While not quite as simple as IFTTT, Zapier has a fantastic interface and many find the trade-off between simplicity and power worth it. Zapier will allow your workflows to grow more complex than IFTTT, making it a strong competitor. Zapier has the most connections to third-party apps. These connections along with the elegant design make Zapier a strong competitor in this fierce battle.</Typography>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>Microsoft Flow</Typography>
                         <Typography variant="body1" gutterBottom>The most complex of the three, Flow doesn’t stop with multi-step workflows. Microsoft has designed <code>For-Each</code> and <code>Do-While</code> loops directly into the toolset. <code>If-Then-Else</code> conditionals are included too making it the most powerful codeless automation tool on the market. The other unique aspect of Flow is its direct integration to Office 365 and the Microsoft Office product line. This added power makes it more difficult to learn than its competitors IFTTT and Zapier, but the direct integration into your e-mail, OneDrive, and other products you use every day make it worth learning. If your organization is using Office 365, Microsoft Flow will have the most integrations for your work.</Typography>
                      </div>
                   </div>
                  </section>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>So Which Is Right for You?</Typography>
                         <Typography variant="body1" gutterBottom>
                         While each app has huge differences in simplicity and power, the largest variation comes from the connectors. <strong>IFTTT integrates nicely with IOT</strong> and tech you’ll find around the house. Turning lights on and off or reminders to meditate each day are some of the most common workflows. IFTTT is the perfect choice if you're looking for home and personal automation. <strong>Zapier’s most common connectors come from Google’s G Suite</strong>. Zapier is the go-to choice for people looking to automate their workday while living in Google’s productivity suite. M<strong>icrosoft Flow’s direct integration with Office 365 makes it an easy choice for those working in Office 365 all day long</strong>. Plus the added complexity of Microsoft Flow is a favorite among the hardcore automaters.
                         </Typography>
                         <table style={{margin: '0 auto'}}>
                        <thead>
                        <tr>
                        <th></th>
                        <th>IFTTT</th>
                        <th>Zapier</th>
                        <th>Microsoft Flow</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td><strong>Price</strong></td>
                        <td>Free</td>
                        <td>Free up to 100 runs/month or $20 multi-step workflows</td>
                        <td>Free up to 750 runs/month</td>
                        </tr>
                        <tr>
                        <td><strong>Connectors</strong></td>
                        <td>600</td>
                        <td>1000</td>
                        <td>200</td>
                        </tr>
                        <tr>
                        <td><strong>Learning Curve</strong></td>
                        <td>Easy</td>
                        <td>Easy</td>
                        <td>Difficult</td>
                        </tr>
                        <tr>
                        <td><strong>Workflow Power</strong></td>
                        <td>Low</td>
                        <td>Medium</td>
                        <td>High</td>
                        </tr>
                        <tr>
                        <td><strong>Recommended Use</strong></td>
                        <td>Home</td>
                        <td>Professional</td>
                        <td>Professional</td>
                        </tr>
                        </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>Conclusion</Typography>
                         <Typography variant="body1" gutterBottom>In summary, all three are fantastic and worth looking into. If you’re not sure where to start, go with IFTTT. It’s simple and easy to get started. If you’re interested in automating your work life you may want to look into Zapier and Microsoft Flow. If you have any questions don’t hesitate to reach out below or find me on <a href="https://twitter.com/gruberjl" rel="noopener">Twitter @gruberjl</a> or <a href="https://www.linkedin.com/in/gruberjl/" rel="noopener">LinkedIn</a>.</Typography>
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
