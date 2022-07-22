import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '6 Security & Compliance Features of Microsoft Teams'
  const jsonLd = {
    headline: title,
    datePublished: '1-16-2018',
    keywords: [
      'Microsoft Teams',
      'Office 365',
      'Cloud Security',
      'Microsoft 365',
      'MS-500'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1920/1*tq8UWk-AbrYaLkDehWizyw.jpeg'} canonical={'https://medium.com/gitbit/6-security-compliance-features-of-microsoft-teams-c9dacba5f909'} title={title}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>6 Security &amp; Compliance Features of Microsoft Teams</Typography>
                <div>
                  <figure style={{margin: 0, textAlign: 'center'}}><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams screenshot" src="https://miro.medium.com/max/1920/1*tq8UWk-AbrYaLkDehWizyw.jpeg" width="1920" height="1136" role="presentation" /></figure>
                </div>
                <div>
                  <div>
                    <Typography variant="h4" component="h2" gutterBottom>What’s Microsoft Teams?</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft Teams is one of the latest and fastest growing applications included in Office 365. <em>Microsoft has already announced they’ll be replacing Skype with the Teams application.</em> “Communicate in the moment and keep everyone in the know. Stay connected with chat, calls, and meetings within your team and in private or small group conversations. Schedule and join online Skype meetings with HD video, VoIP, and dial-in audio conferencing options. Share your files, apps or desktop in online meetings and review the important moments later with transcriptions of recorded content. Have a dedicated phone number for placing and receiving domestic and international phone calls, with advances features including voicemail, transfer, delegation and emergency calling (e911).” Unlike Skype, it’s very easy to integrate other applications and tools into Teams making it a great place to build your organization and stay connected.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div><iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FOF65_p_07cE%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOF65_p_07cE&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOF65_p_07cE%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="Understanding e-Discovery in Microsoft Teams" scrolling="auto" /></div>
                      </div>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>1. E-Discovery</Typography>
                    <Typography variant="body1" gutterBottom><strong>“Electronic discovery</strong> (sometimes known as e-discovery, ediscovery, eDiscovery, or e-Discovery)<strong> is the <em>electronic</em> aspect of identifying, collecting and producing electronically stored information</strong> (ESI) <strong>in response to a request for production in a law suit or investigation.</strong>” The processes and technologies around e-discovery are often complex because of the sheer volume of electronic data produced and stored. Additionally, unlike hard-copy evidence, electronic documents are more dynamic and often contain metadata such as time-date stamps, author and recipient information, and file properties. Preserving the original content and metadata for electronically stored information is required in order to eliminate claims of spoliation or tampering with evidence later in the litigation.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>2. Security &amp; Compliance Certifications</Typography>
                    <Typography variant="body1" gutterBottom>I know, cerifitications aren’t really a feature, but they’re important! Teams is Tier C-compliant at launch. This includes the following standards: ISO 27001, ISO 27018, SSAE16 SOC 1 and SOC 2, HIPAA, and EU Model Clauses (EUMC). Within the Microsoft compliance framework, Microsoft classifies Office 365 applications and services into four categories. Each category is defined by specific compliance commitments that must be met for an Office 365 service, or a related Microsoft service, to be listed in that category. Services in compliance categories C and D that have industry-leading compliance commitments are enabled by default. Services in categories A and B come with controls to turn on or turn off these services for an entire organization. Details can be found in the <a href="https://go.microsoft.com/fwlink/?linkid=855777" rel="noopener">Compliance Framework for Industry Standards and Regulations</a>. Microsoft Teams also supports Cloud Security Alliance compliance.</Typography>
                    <Typography variant="body1" gutterBottom>Integrating different apps and tools with Microsoft Teams allows an organization to keep everything in one place. Chat, calls, projects, OneNote, etc. Teams becomes a critical point in the organization for security, compliance, and regulation. Since Teams is built into Office 365 you can use the Security &amp; Compliance admin center to configure e-Discovery and compliance, as well as, perform administrative searches.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>3. Legal Hold</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft Teams can be configured with ‘Legal Hold’. Once a legal hold is enabled you can make sure all information and interactions within Teams is kept indefinitely so someone can search and export the evidence for the court of law. Litigation Hold will maintain a copy of the data even after it has been deleted. A user can still delete the content as they’d expect, but Microsoft will continue to retain the data in a hidden location only administrators can access.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>4. Content Search</Typography>
                    <Typography variant="body1" gutterBottom>Compliance Content Search allows administrators to search for information across the Team application. Using complex queries an administrator can find information pertaining to a specific incident or legal matter. Content search is designed for performance &amp; scale. It won’t matter if you have 5 users and 2 years worth of data or 10,000 users and 10 years of data. The search can provide fast, and accurate results.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>5. Data location</Typography>
                    <Typography variant="body1" gutterBottom>Data in Teams resides in the region based on tenant affinity. Currently, Teams supports the Americas, EMEA, and APAC regions. This will meet certain countries requirements to keep data local. The data can move to other locations without any user intevention. If your data is kept on the east coast, but a large storm is incoming, your data will be transferred to the west coast.</Typography>
                    <Typography variant="body1" gutterBottom>As of November 1, 2017, Teams offers data residency in the United Kingdom for new tenants only. A new tenant is defined as any tenant that hasn’t had a single user from the tenant sign in to Microsoft Teams.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>6. Privacy</Typography>
                    <Typography variant="body1" gutterBottom>“As a customer of Office 365, you own and control your data. Microsoft does not use your data for anything other than providing you with the service that you have subscribed to. As a service provider, we do not scan your email, documents, or teams for advertising or for purposes that are not service-related. Microsoft doesn’t have access to uploaded content. Like OneDrive for Business and SharePoint Online, customer data stays within the tenant.”</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>Upcoming features</Typography>
                    <Typography variant="body1" gutterBottom>The full suite of security and compliance (that’s available to email and other parts of Office 365) is not available yet. Microsoft is considering adding the following features soon:</Typography>
                    <ul>
                      <li>Tenant-specific retention Policy</li>
                      <li>Data loss prevention (DLP)</li>
                      <li>Customer Lockbox</li>
                      <li>Rights Management</li>
                    </ul>
                  </div>
                </div>
                <div role="separator"><span /><span /><span /></div>
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

export default BlogArticle
