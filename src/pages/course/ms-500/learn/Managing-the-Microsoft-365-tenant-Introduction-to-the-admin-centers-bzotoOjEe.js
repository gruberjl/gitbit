/* eslint react/jsx-no-undef: "off", no-tabs: "off", no-irregular-whitespace: "off" */
import {h, Component} from 'preact'
import Page from '../../../../components/page'
import ContentsRead from '../../../../components/contents-read'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {getDoc} from '../../../../components/firebase/get-doc'
import saveDoc from '../../../../components/firebase/save-doc'
import {onAuthStateChanged} from '../../../../components/firebase/on-auth-state-changed'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'

const isBrowser = () => typeof window !== 'undefined'

const marginTop24Style = {
  marginTop: '24px'
}

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)
    this.getUid = this.getUid.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe',
      article: {ARTICLE: true},
      nextContentSlug: 'Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
      previousContentSlug: 'Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
  }

  getUid(user) {
    if (user) {
      getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
        if (!userAcct.completedContent)
          userAcct.completedContent = []

        this.setState({userAcct})
      })
    }
  }

  addScroll() {
    if (isBrowser()) {
      document.addEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: true})
    }
  }

  componentWillUnmount() {
    if (isBrowser() && this.state.isTrackScrolling)
      document.removeEventListener('scroll', this.trackScrolling)

    this.onAuthStateChangedListener()
  }

  trackScrolling() {
    if (document.body.scrollHeight * .8 < window.innerHeight + window.scrollY)
      this.setHasCompletedContent(true)
  }

  setHasCompletedContent(val) {
    if (val === true) {
      document.removeEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: false})

      if (this.state.userAcct.id) {
        const userAcct = this.state.userAcct

        if (!userAcct.completedContent.includes(this.state.article.id)) {
          userAcct.completedContent.push(this.state.article.id)
          this.setState({userAcct})
          saveDoc('courses/MS-500/users', userAcct)
        }
      }
    }
  }

  render() {
    const jsonLd = {
      headline: this.state.article.title,
      datePublished: this.state.article.datePublished,
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
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} canonical={this.state.path} title={this.state.article.title} description={this.state.article.description}>
        <main>
          <style>
            {`main, h1, h2, h3, h4, h5, h6, p, span, li, a {
                font-family: Roboto, Helvetica, Arial, sans-serif;
                margin-bottom: 0.35em;
                word-break: break-word;
              }
              h1 {
                font-weight: 400;
                font-size: 3rem;
                line-height: 1.167;
                letter-spacing: 0em;
              }
              h2 {
                font-weight: 400;
                font-size: 2.125rem;
                line-height: 1.235;
                letter-spacing: 0.00735em;
              }
              h3 {
                font-weight: 400;
                font-size: 1.5rem;
                line-height: 1.334;
                letter-spacing: 0em;
              }
              h4 {
                font-weight: 500;
                font-size: 1.25rem;
                line-height: 1.6;
                letter-spacing: 0.0075em;
              }
              p, span, li, a {
                font-size: 1rem;
                line-height: 1.5;
                letter-spacing: 0.00938em;
              }
              img {
                max-width: 100%;
                margin: 0 auto;
                display: block;
              }
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p />
                  <img src="https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png" alt="Microsoft 365 admin centers" style="height: auto;width: auto" />
                  <p>Microsoft 365 management is broken down into multiple admin centers. An admin center is a website used to manage part of the tenant. For example, there's an Exchange Online admin center that can help you manage the email portion of your Microsoft 365 tenant. Another SharePoint Online admin center to help manage the SharePoint Online part of your tenant.</p>
                  <p>Here's a list of all the Microsoft 365 admin centers you may need.</p>
                  <h2>Microsoft 365 admin center</h2>
                  <p>This is the primary admin center. You can access it by clicking the admin button from <a href="https://portal.office.com" target="_blank" rel="noreferrer">portal.office.com</a> in the left pane.</p>
                  <div ><img src="https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png" alt="Microsoft 365 admin center button" style="height: auto;width: auto" /></div>
                  <p>You can access the admin center directly by going to <a href="https://admin.microsoft.com/" target="_blank" rel="noreferrer">https://admin.microsoft.com/</a>. From the Microsoft 365 admin center, you can create users, and groups, assign licenses, contact Microsoft support, update domain names, view the service health, or access the other admin centers.</p>
                  <p>From the Microsoft 365 admin center, you can access the other admin centers. To access the other admin centers, perform the following:</p>
                  <ol>
                    <li>Click Show all in the left pane.</li>
                    <li>Click All admin centers</li>
                  </ol>
                  <h2>Azure Advanced Threat Protection (ATP) admin center</h2>
                  <div ><img src="https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png" alt="Azure ATP Icon" style="height: auto;width: auto" /></div>
                  <p><span >The Azure ATP admin center can be accessed by going to </span><a href="https://go.microsoft.com/fwlink/?linkid=848894" target="_blank" rel="noreferrer"><span ><ins>https://go.microsoft.com/fwlink/?linkid=848894</ins></span></a><span > and logging in with your admin credentials.</span></p>
                  <p><span >The Cloud App Security admin center is replacing the Azure ATP admin center, but it's still listed so we'll review it. The Azure ATP admin center is designed for hybrid environments where part of your organization is hosted in on-premises servers and part of your environment is hosted in Microsoft 365. Azure ATP collects, analyzes, detects, and alerts you to suspicious activity in your on-premises Active Directory environment. The Azure ATP admin center is where you can perform the following:</span></p>
                  <ul>
                    <li >View all suspicious activity</li>
                    <li>Protect user credentials stored in Active Directory (AD)</li>
                    <li>Supply a timeline for clear incident information<br />&nbsp;</li>
                  </ul>
                  <h2>Azure Active Directory (AD) admin center</h2>
                  <img src="https://i.ibb.co/HK83H6d/Azure-ad-icon.png" alt="Azure AD Icon" style="height: auto;width: auto" />
                  <p>The Azure Active Directory (AD) admin center can be accessed by going to <a href="https://aad.portal.azure.com/" target="_blank" rel="noreferrer">https://aad.portal.azure.com/</a>. Azure AD is the cloud version of your on-premise AD. It's like on-premise AD on steroids. It's where you can perform the following:</p>
                  <ul>
                    <li>Manage identity including users and groups.</li>
                    <li>Enable multi-factor authentication (MFA)</li>
                    <li>Configure self-service password reset</li>
                    <li>Edit company branding</li>
                    <li>View user sign-ins</li>
                    <li>Configure conditional access policies</li>
                  </ul>
                  <h2>Cloud App Security admin center</h2>
                  <img src="https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png" alt="Cloud App Security Icon" style="height: auto;width: auto" />
                  <p>The cloud app security admin center can be accessed by going to <a href="https://portal.cloudappsecurity.com" target="_blank" rel="noreferrer">https://portal.cloudappsecurity.com</a>. From the cloud app security admin center, you can manage unsanctioned cloud applications. From the Cloud App security admin center you can perform the following:</p>
                  <ul>
                    <li>Discover unauthorized cloud applications being used within your organization</li>
                    <li>Connect and manage authorized apps</li>
                    <li>Configure policies to manage risk</li>
                    <li>View and manage alerts</li>
                  </ul>
                  <h2>Compliance admin center</h2>
                  <img src="https://i.ibb.co/Jk3LPPL/compliance-icon.png" alt="Compliance admin center icon" style="height: auto;width: auto" />
                  <p>The compliance admin center can be accessed by going to <a href="https://compliance.microsoft.com/homepage" target="_blank" rel="noreferrer">https://compliance.microsoft.com/homepage</a>. The compliance admin center is where you can manage the compliance of your tenant. You can classify data, set retention policies, and recover data. From the compliance admin center you can perform the following:</p>
                  <ul>
                    <li>Create sensitivity and retention labels to retain data for as long as needed.</li>
                    <li>Review intelligent reports to view where labels are being used.</li>
                    <li>Review a detailed view of the classification trends across your tenant.</li>
                  </ul>
                  <h2>Endpoint Manager admin center</h2>
                  <img src="https://i.ibb.co/89kQWVH/endpoint-icon.png" alt="Endpoint manager compliance admin center icon" style="height: auto;width: auto" />
                  <p>The Endpoint manager admin center can be accessed by going to <a href="https://endpoint.microsoft.com/?ref=AdminCenter#home" target="_blank" rel="noreferrer">https://endpoint.microsoft.com/?ref=AdminCenter#home</a>. The Endpoint manager admin center is where you can manage the end-user devices. It's where you can perform the following:</p>
                  <ul>
                    <li>Enroll and configure devices</li>
                    <li>Distribute apps to your devices</li>
                    <li>Monitor and set compliance requirements on devices</li>
                  </ul>
                  <h2>Exchange admin center</h2>
                  <img src="https://i.ibb.co/9VWVrqp/exchange-icon.png" alt="Exchange admin center icon" style="height: auto;width: auto" />
                  <p>The Exchange admin center can be accessed by going to <a href="https://admin.exchange.microsoft.com/" target="_blank" rel="noreferrer">https://admin.exchange.microsoft.com/</a>. The Exchange admin center is where you manage email and everything about email. It's where you can perform the following:</p>
                  <ul>
                    <li>Manage user mailboxes</li>
                    <li>Create and manage shared/resource mailboxes</li>
                    <li>Create mail flow rules</li>
                    <li>Perform message traces</li>
                  </ul>
                  <h2>Power Platform admin center</h2>
                  <img src="https://i.ibb.co/LnWj2Yb/power-automate-icon.png" alt="Power Automate admin center icon" style="height: auto;width: auto" />
                  <p>The Power Platform admin center can be accessed by going to <a href="https://admin.powerplatform.microsoft.com/" target="_blank" rel="noreferrer">https://admin.powerplatform.microsoft.com/</a>. The Power Platform admin center is where you can manage the automation of repetitive tasks. From the Power Platform admin center you can perform the following:</p>
                  <ul>
                    <li>Review Power Automate analytics</li>
                    <li>Review Power Apps analytics</li>
                    <li>Create integrations between on-premise, Power BI, Microsoft Flow, and PowerApps.</li>
                    <li>Manage Dynamics 365 apps</li>
                  </ul>
                  <h2>Microsoft 365 Apps admin center</h2>
                  <img src="https://i.ibb.co/MpGbXrz/Office-install-icon.png" alt="Microsoft 365 Apps Office configuration icon" style="height: auto;width: auto" />
                  <p>The Microsoft 365 Apps admin center can be accessed by going to <a href="https://config.office.com/officeSettings" target="_blank" rel="noreferrer">https://config.office.com/officeSettings</a>. The Microsoft 365 Apps admin center can be used to deploy settings and configurations to users that install the Office suite on their computers. Traditionally, the configuration found in the Microsoft 365 Apps admin center would have been performed via group policy</p>
                  <ul>
                    <li>Deploy Office customization policies</li>
                    <li>Receive and implement security policy recommendations</li>
                    <li>Create an Office Customization to deploy Office with specific configurations</li>
                  </ul>
                  <h2>Microsoft Stream admin center</h2>
                  <p>The Microsoft Stream admin center can be accessed by going to <a href="https://web.microsoftstream.com/admin" target="_blank" rel="noreferrer">https://web.microsoftstream.com/admin</a>. From the Stream admin center, you can configure options for Microsoft Stream. For example, you can limit who can host live events. There are a ton of options in the admin center. Some of which are:</p>
                  <ul>
                    <li>Set Stream admins</li>
                    <li>Manage content on behalf of users</li>
                    <li>Configure live events, comments, and restrict organization-wide channel creation</li>
                  </ul>
                  <h2>Power BI admin center</h2>
                  <img src="https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png" alt="Power BI admin center icon" style="height: auto;width: auto" />
                  <p>The Power BI admin center can be accessed by going to <a href="https://app.powerbi.com/admin-portal" target="_blank" rel="noreferrer">https://app.powerbi.com/admin-portal</a>. The Power BI admin center is used to manage Power BI. From it, you can view usage metrics, and control how users interact with Power BI. From the Power BI admin center you can perform the following:</p>
                  <ul>
                    <li>Configure tenant settings</li>
                    <li>Review usage metrics</li>
                    <li>Configure sensitivity labels</li>
                    <li>Enable Cloud App Security integration</li>
                  </ul>
                  <h2>Security admin center</h2>
                  <img src="https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png" alt="Security center admin center" style="height: auto;width: auto" />
                  <p>The Security admin center can be accessed by going to <a href="https://protection.office.com/" target="_blank" rel="noreferrer">https://protection.office.com/</a>. The Security admin center is used to get visibility, investigate, and manage the security of your Microsoft 365 tenant. From it you can perform the following:</p>
                  <ul>
                    <li>Manage and view alerts</li>
                    <li>Launch simulation attacks</li>
                    <li>Investigate threats</li>
                    <li>Configure anti-phishing, anti-spam, attachment, and link policies</li>
                  </ul>
                  <h2>SharePoint admin center</h2>
                  <img src="https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png" alt="SharePoint admin center" style="height: auto;width: auto" />
                  <p>The SharePoint admin center can be accessed by going to the Microsoft 365 admin center &gt; Show all &gt; All admin centers &gt; SharePoint. From the SharePoint admin center, you can manage SharePoint sites and OneDrive sites. You can perform the following:</p>
                  <ul>
                    <li>Create and manage SharePoint sites</li>
                    <li>Configure sharing and access control</li>
                    <li>Manage tenant-wide settings</li>
                    <li>Migrate data to SharePoint</li>
                  </ul>
                  <h2>Microsoft Teams admin center</h2>
                  <img src="https://i.ibb.co/dGJJV84/Teams-admin-center.png" alt="Microsoft Teams admin center icon" style="height: auto;width: auto" />
                  <p>The Teams admin center can be accessed by going to <a href="https://admin.teams.microsoft.com/" target="_blank" rel="noreferrer">https://admin.teams.microsoft.com/</a>. From the Microsoft Teams admin center, you can manage Microsoft Teams. From it, you can configure messaging, conferencing, and external communication options. You can perform the following:</p>
                  <ul>
                    <li>&nbsp;Review relevant information about your Teams deployment</li>
                    <li>View and manage Teams users</li>
                    <li>Manage your Teams</li>
                    <li>Configure organization-wide settings</li>
                  </ul>
                  <h2>Yammer admin center</h2>
                  <img src="https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png" alt="Yammer admin center icon" style="height: auto;width: auto" />
                  <p>The Yammer admin center can be accessed by going to the Microsoft 365 admin center &gt; Show all &gt; All admin centers &gt; Yammer. From the Yammer admin center, you can manage your Yammer network, for example, you can set usage policies and control external network settings. You can also perform the following:</p>
                  <ul>
                    <li>Configure Yammer tenant-wide settings</li>
                    <li>Manage Yammer admins</li>
                    <li>Configure usage policy</li>
                    <li>Manage external network access</li>
                    <li>Monitor keywords</li>
                    <li>Configure security settings</li>
                    <li>Export data</li>
                  </ul>
                </div>
                <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                  <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                  <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{mt: 3}}>
                <ContentsRead completedContent={this.state.userAcct.completedContent} />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

export default ArticlePage
