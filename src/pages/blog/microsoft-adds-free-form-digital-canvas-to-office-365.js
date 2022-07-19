import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

 
class BlogArticle extends Component {
  render() {
    const title = "Microsoft Adds Free-form Digital Canvas to Office 365"
    const jsonLd = {
      headline: title,
      datePublished: '1-17-2018',
      keywords: [
        "Microsoft",
        "Microsoft Whiteboard",
        "Microsoft 365",
        "Office 365"
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*52UIhaYiQ-e81aDVmu-ZhA.png'} canonical={'https://medium.com/gitbit/microsoft-adds-free-form-digital-canvas-to-office-365-17eb94c1df5'} title={title} description={"Microsoft Whiteboard is a freeform digital canvas where people, ideas, and content come together. Microsoft Whiteboard Preview is the next version of the existing Microsoft Whiteboard app on Surface…"}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>Microsoft Adds Free-form Digital Canvas to Office 365</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div role="button" tabIndex="0">
                      <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft 365 Free-form Digital Canvas" src="https://miro.medium.com/max/700/1*52UIhaYiQ-e81aDVmu-ZhA.png" width="700" height="404" role="presentation"/></div>
                   </div>
                  </figure>
                  <Typography variant="body1" gutterBottom>Microsoft Whiteboard is a freeform digital canvas where people, ideas, and content come together. Microsoft Whiteboard Preview is the next version of the existing Microsoft Whiteboard app on Surface Hub. Microsoft Whiteboard Preview adds support for Windows 10 PCs, letting users directly install from the Microsoft Store once it’s turned on for their organization. For the Surface Hub, the Preview app can also be downloaded from the Microsoft Store and will be installed side-by-side with the existing Whiteboard app.</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div>
                      <div><iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FrRA7HFk5a5w%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrRA7HFk5a5w&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrRA7HFk5a5w%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="Closer Look at Microsoft's upcoming Whiteboard app" scrolling="auto"></iframe></div>
                   </div>
                  </figure>
                  <Typography variant="body1" gutterBottom>Let’s get started. The application can be downloaded on Windows 10 or Surface devices. Go to the <a href="https://go.microsoft.com/fwlink/?linkid=863555" rel="noopener">Microsoft Store</a> for the free download. Once the app is launched, sign in with your Office 365 credentials. Once logged in you’ll be able to save your whiteboards to Microsoft’s secure cloud and collaborate in real time with other users.</Typography>
                  <Typography variant="body1" gutterBottom>If you’re using a device with an active pen, you can use pen and touch for different things. Drawing on the screen with the pen will cause ink to appear, while dragging with your fingers will cause the canvas to pan. If your device is passive — meaning that the pen is hollow or your device didn’t come with any pens — you’ll need to toggle finger painting mode on and off to change how you interact with the screen. While finger painting mode is on, touching the screen will draw ink on the canvas. While finger painting mode is off, touching the screen will pan or zoom the canvas.</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div role="button" tabIndex="0">
                      <div>
                         <div>
                            <div>
                               <div></div>
                               <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft canvas inking" width="700" height="231" role="presentation" src="https://miro.medium.com/max/700/0*VjHHfITsFPJZPbL1.jpg" sizes="700px" srcSet="https://miro.medium.com/max/276/0*VjHHfITsFPJZPbL1.jpg 276w, https://miro.medium.com/max/552/0*VjHHfITsFPJZPbL1.jpg 552w, https://miro.medium.com/max/640/0*VjHHfITsFPJZPbL1.jpg 640w, https://miro.medium.com/max/700/0*VjHHfITsFPJZPbL1.jpg 700w"/>
                            </div>
                         </div>
                      </div>
                   </div>
                  </figure>
                  <Typography variant="body1" gutterBottom>To <strong>delete </strong>something, select the object and click the trash can in the bottom left. You can switch among different <strong>color pens</strong>, <strong>highlighters</strong>, and <strong>erasers </strong>by selecting the appropriate tool at the bottom of the app. The <strong>ruler </strong>can be placed on the screen to help make better lines, angles, and measure distances. Drag and drop the ruler to move it around and use the mouse wheel (the mouse must be placed on the ruler) or two fingers with touch to rotate the ruler around.</Typography>
                  <Typography variant="body1" gutterBottom>To <strong>share </strong>and <strong>collaborate</strong> invite others with the person and plus sign in the top right corner. Currently, collaboration is only available to people within your organization. Microsoft will be adding the option to collaborate with guests outside of your organization in the coming months.</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div>
                      <div>
                         <div>
                            <div></div>
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Canvas sharing" width="439" height="267" role="presentation" src="https://miro.medium.com/max/439/0*48fRgX6krdF68deH.jpg" sizes="439px" srcSet="https://miro.medium.com/max/276/0*48fRgX6krdF68deH.jpg 276w, https://miro.medium.com/max/439/0*48fRgX6krdF68deH.jpg 439w"/>
                         </div>
                      </div>
                   </div>
                  </figure>
                  <Typography variant="body1" gutterBottom><strong>Drawing shapes </strong>can be difficult with your finger or mouse. You can enable the ‘ink to shape’ feature using the gear in the bottom right corner. This will enable the shape recognition feature and auto-correct the shapes you draw</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div>
                      <div>
                         <div>
                            <div></div>
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Whiteboard settings" width="267" height="227" role="presentation" src="https://miro.medium.com/max/267/0*CF-eJV0WDP37y7ig.jpg" sizes="267px" srcSet=""/>
                         </div>
                      </div>
                   </div>
                  </figure>
                  <Typography variant="h4" component="h2" gutterBottom>How to Enable Microsoft Whiteboard Preview</Typography>
                  <Typography variant="body1" gutterBottom>Currently, Microsoft Whiteboard is only is preview. In keeping with Microsoft’s standards it has been disabled by default. An administrator will need to enable Whiteboard in the admin center before it can be used. Once Microsoft Whiteboard meets the Office 365 compliance standards, Microsoft will turn this feature on-by-default. Microsoft will give a minimum of 30 day notification, via Message center before enabling the new app. To enable Whiteboard within your organization follow the steps below:</Typography>
                  <ol>
                   <li>On the Admin center home page go to Settings and then choose Services &amp; add-ins.</li>
                   <li>On the Service &amp; add-ins page, scroll down and choose Whiteboard Preview.</li>
                   <li>On the Whiteboard panel, toggle Turn Whiteboard on or off for your entire organization to On &gt; Save.</li>
                  </ol>
                  <Typography variant="h4" component="h2" gutterBottom>Frequently asked questions</Typography>
                  <Typography variant="body1" gutterBottom>Here are some frequently asked questions</Typography>
                  <Typography variant="h4" component="h2" gutterBottom>What Office 365 Suites are supported?</Typography>
                  <ul>
                   <li>Business Essentials</li>
                   <li>Business Premium</li>
                   <li>Microsoft 365 Firstline F1</li>
                   <li>Enterprise Firstline F1</li>
                   <li>Enterprise Firstline F2</li>
                   <li>Enterprise E1</li>
                   <li>Enterprise E2</li>
                   <li>Enterprise E3</li>
                   <li>Enterprise E4</li>
                   <li>Enterprise E5</li>
                   <li>Secure Productive Business</li>
                   <li>Secure Productive Enterprise E3</li>
                   <li>Secure Productive Enterprise E5</li>
                   <li>Education E1</li>
                   <li>Education E2</li>
                   <li>Education E3</li>
                   <li>Education E4</li>
                   <li>Education A1</li>
                   <li>Education A3</li>
                   <li>Education A4</li>
                   <li>Education A5</li>
                   <li>Microsoft 365 A3</li>
                   <li>Microsoft 365 A5</li>
                   <li>Home</li>
                   <li>Personal</li>
                  </ul>
                  <Typography variant="h4" component="h2" gutterBottom>What languages are currently supported?</Typography>
                  <Typography variant="body1" gutterBottom>The Microsoft Whiteboard Public Preview is currently only in English.</Typography>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="body1" gutterBottom>Thank you for taking the time to read my article. I hope you found it beneficial. If you have any questions or feedback please don’t hesitate to reach out.</Typography>
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
