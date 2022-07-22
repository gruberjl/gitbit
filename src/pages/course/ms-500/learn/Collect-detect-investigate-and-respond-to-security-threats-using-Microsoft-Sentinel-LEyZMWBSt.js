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
      path: '/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt',
      article: {ARTICLE: true},
      nextContentSlug: 'Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP',
      previousContentSlug: 'Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T',
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
                <div><h2>What is Microsoft Sentinel?</h2>
                  <p>Microsoft Sentinel is a scalable cloud-based security information and event management (SIEM). It's also a security orchestration, automation, and response (SOAR) solution. So what does that mean?</p>
                  <p>The easiest way to understand Microsoft Sentinel is to break down its capabilities.</p>
                  <ul>
                    <li>Collect data across all users, applications, devices, and infrastructure hardware for on-premises devices and cloud apps.</li>
                    <li>Detect previously undetected threats, and reduce false positives. Hunt for suspicious activity and Investigate threats using AI.</li>
                    <li>Respond to incidents with automation and orchestration.</li>
                  </ul>
                  <p>In short, it collects, detects, investigates, and responds to threats across your organization. I think it's probably even easier to understand by setting it up and getting started.</p>
                  <h2>What licenses are required for Microsoft Sentinel?</h2>
                  <p>Microsoft Sentinel requires a pay-as-you-use license to Microsoft Azure. Pricing can be seen <a href="https://azure.microsoft.com/en-us/pricing/details/microsoft-sentinel/" target="_blank" rel="noreferrer">here</a>. You can also sign up for a free $200 credit by going <a href="https://azure.microsoft.com/en-us/free/" target="_blank" rel="noreferrer">here</a>.</p>
                  <h2>What roles/permissions are available and required?</h2>
                  <p>First, the global admin has full access to create a Microsoft Sentinel workspace.</p>
                  <p><strong>Owner</strong>: Grants full access to manage all resources, including the ability to assign roles in Azure RBAC. This is the role that's received when you set up the workspace.</p>
                  <p><strong>Microsoft Sentinel Automation Contributor</strong>: Allows Microsoft Sentinel to add playbooks to automation rules. It is not meant for user accounts.</p>
                  <p><strong>Reader</strong>: View all resources but cannot make any changes.</p>
                  <p><strong>Managed Application Operator Role</strong>: Lets you manage  the managed application resources</p>
                  <p><strong>Contributor</strong>: Can perform everything the owner can except they can't assign roles.</p>
                  <p><strong>Logic App contributor</strong>: This allows you to manage logic apps including playbooks and incidents.</p>
                  <h2>Enable Microsoft Sentinel</h2>
                  <p>1. Open the Azure admin center (note, not the Azure AD admin center) &gt; Search for Microsoft Sentinel. Click <a href="https://portal.azure.com/?quickstart=true#blade/HubsExtension/BrowseResource/resourceType/microsoft.securityinsightsarg%2Fsentinel" target="_blank" rel="noreferrer">Microsoft Sentinel</a>.</p>
                  <p>2. Click <strong>Create Microsoft Sentinel</strong>.</p>
                  <div ><img src="https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png" alt="Create Microsoft Sentinel" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Create a new workspace</strong>.</p>
                  <div ><img src="https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png" alt="Create a new workspace" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Create new</strong>. Set the name to <strong>Sentinel</strong>. Click <strong>OK</strong>.</p>
                  <div ><img src="https://i.ibb.co/S6Bz6JQ/resource-group.png" alt="Resource group" style="height: auto;width: auto" /></div>
                  <p>5. Set the instance name to <strong>Sentinel-Instance</strong>. Click <strong>Review + Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png" alt="Set the instance name and click Create" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Create</strong>.</p>
                  <p>7. Click the <strong>Sentinel-Instance</strong>. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png" alt="Add Microsoft Sentinel to a workspace" style="height: auto;width: auto" /></div>
                  <h2>Connect Microsoft Sentinel to data sources</h2>
                  <p>Next, we'll need to connect Microsoft Sentinel to a data source. In short, this means Microsft Sentinel will ingest the data from the service or app. Sometimes, you'll need to install an agent, for example, to monitor computers/servers. In Microsoft 365 case all we need to do is set up the connector.</p>
                  <h3>How to connect Office 365 with Microsoft Sentinal</h3>
                  <p>1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Data connectors</strong>. Search for <strong>Office 365</strong> and click on the <strong>connector</strong>. Click <strong>Open connector page</strong>.</p>
                  <div ><img src="https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png" alt="Microsoft Sentinel | Data connectors" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Exchange</strong>, <strong>SharePoint</strong>, and <strong>Teams</strong> checkboxes. Click <strong>Apply Changes</strong>.</p>
                  <div ><img src="https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png" alt="Configure Office 365 data connector" style="height: auto;width: auto" /></div>
                  <h3>How to connect Azure Active Directory with Microsoft Sentinal</h3>
                  <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Data connectors</strong>. Search for <strong>Azure Active Directory</strong> and click on the <strong>connector</strong>. Click the <strong>Open connector page </strong>button.</span></p>
                  <div ><img src="https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png" alt="Microsoft Sentinel Azure AD Data connector" style="height: auto;width: auto" /></div>
                  <p>2. Click all the checkboxes under Configuration. Click <strong>Apply Changes</strong>.</p>
                  <div ><img src="https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png" alt="Configure Azure AD data connector" style="height: auto;width: auto" /></div>
                  <h2>Enable diagnostic settings</h2>
                  <p>Next, we'll enable the diagnostic settings to send the logs to Microsoft Sentinel.</p>
                  <p>1. Go to <strong>Microsoft Azure admin center</strong> &gt; search for <strong>monitor </strong>&gt; Click <strong>Monitor </strong>&gt; <strong>Diagnostic</strong> <strong>settings</strong>.</p>
                  <div ><img src="https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png" alt="Open diagnostic settings" style="height: auto;width: auto" /></div>
                  <p>2. Click your <strong>workspace</strong>. Click <strong>Add diagnostic setting</strong>.</p>
                  <div ><img src="https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png" alt="Add diagnostic setting" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>audit </strong>&gt; <strong>allLogs</strong> &gt; <strong>AllMetrics </strong>&gt; <strong>Send to Log Analytics workspace</strong>. Set the name to <strong>Diagnostic settings</strong>. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png" alt="Create diagnostic settings" style="height: auto;width: auto" /></div>
                  <h2>How to integrate Microsoft Defender for Cloud Apps</h2>
                  <p>So now we have connected a couple of pieces of Microsoft 365 but what about Microsoft Defender for Cloud Apps? To manage incidents based on alerts generated by Microsoft Cloud App Security we'll need to create a security extension in Microsoft Defender for Cloud Apps.</p>
                  <p>1. Open the <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer"><strong>Microsoft Defender for Cloud Apps portal</strong></a>. Click the <strong>settings </strong>gear in the top right corner. Click <strong>Security Extension</strong>.</p>
                  <div ><img src="https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png" alt="Open Security Extensions" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>SIEM agents</strong> &gt; <strong>Add SIEM agent</strong> &gt; <strong>Azure Sentinel</strong>.</p>
                  <div ><img src="https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png" alt="Add SIEM agent Microsoft Sentinel" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Next </strong>&gt; <strong>Close</strong>.</p>
                  <h2>How to create a rule</h2>
                  <p>Rules are created to turn raw data into alerts and incidents. In short, they are used to detect threats and create alerts.</p>
                  <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Analytics </strong>&gt; <strong>Rule templates</strong> &gt; Search for Advanced Multistage. Click <strong>Advanced Multistage Attack Detection</strong> &gt; <strong>Create rule</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png" alt="Create Microsoft Sentinel rule" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Next: Automated response</strong> &gt; <strong>Next: Review</strong> &gt; <strong>Create</strong></p>
                  <h2>How to create a workbook</h2>
                  <p>Workbooks are like dashboards. They will show you your data in different graphs and ways. Let's create one now.</p>
                  <p>1. <span >Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Workbooks</strong> &gt; <strong>Add workbook</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/qN9XsKj/Add-Workbook.png" alt="Add workbook to Microsoft Sentinel" style="height: auto;width: auto" /></div>
                  <p><span >2. Click <strong>Save</strong> (the floppy disk icon) &gt; Enter a title of <strong>Azure Sign in and usage</strong>. Click <strong>Save</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png" alt="Save your new workbook" style="height: auto;width: auto" /></div>
                  <h2>How to view a workbook</h2>
                  <p>Now let's open the workbook so you know how to view it when you want to come back to it.</p>
                  <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Workbooks</strong> &gt; <strong>My workbooks</strong> &gt; <strong>Azure Sign in and usage</strong> &gt; <strong>View saved workbook</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/ssNQGdy/View-saved-workbook.png" alt="View saved workbook" style="height: auto;width: auto" /></div>
                  <p>There are a number of template workbooks you can use too. Why not try to set up one now?</p>
                  <h2>How to create a playbook</h2>
                  <p>Playbooks are like Power Automate flows. They have a trigger and then a set of actions that happen when the trigger is initiated. Before we can create the playbook let's set up for it first.</p>
                  <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. <strong>Automation </strong>&gt;<strong>Playbook templates (Preview)</strong> &gt; <strong>Block AAD user - Alert</strong> &gt; <strong>Create playbook</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/LCT6PrC/Create-a-playbook.png" alt="Create a playbook" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Next: Connections</strong> &gt; <strong>Next: Review and create</strong> &gt; <strong>Create and continue to designer</strong>.</p>
                  <p>3. Click each action in the playbook looking for <strong>yellow triangles</strong>. Once found click the <strong>exclamation in the circle</strong>. <strong>Sign in</strong> to your Microsoft 365 account. <strong>Accept the permissions</strong>.</p>
                  <div ><img src="https://i.ibb.co/bNDYmjx/Setup-connections.png" alt="Setup the connections" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Save</strong>.</p>
                  <p>2. Enter the playbook name of <strong>Email-on-sign-in</strong>. Click <strong>Enable diagnostics logs in Log Analytics</strong>. Click <strong>Next: Connections</strong>.</p>
                  <div ><img src="https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png" alt="Create a playbook: Basic Settings" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Next: Review and create</strong> &gt; <strong>Create and continue to designer</strong>.</p>
                  <p>4. Set a condition</p>
                  <p>5. Under true click Add an action.</p>
                  <p>6. Enter "<strong>Send an email (V2) Office 365 Outlook</strong>" in the search box. Click <strong>Send an email (V2)</strong>.</p>
                  <div ><img src="https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png" alt="Send an email (V2) Office 365 Outlook" style="height: auto;width: auto" /></div>
                  <p>7. Click <strong>Sign in</strong>. In the box that opens sign in to your account.</p>
                  <div ><img src="https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png" alt="Sign in to Office 365 Outlook" style="height: auto;width: auto" /></div>
                  <h2>How to review the logs</h2>
                  <p>Microsoft Sentinel gathers logs and then allows you to search through the logs using Kusto Query Language (KQL), Let's check out one of the built-in queries.</p>
                  <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong> &gt; <strong>Logs</strong>. Search for <strong>All SiginLogs events</strong> and click <strong>Run</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png" alt="View Microsoft Sentinel Logs" style="height: auto;width: auto" /></div>
                  <h2>Parts of Microsoft Sentinel</h2>
                  <h3>Workspace</h3>
                  <p>Workspaces are like tenants. You can use one workspace to store everything or you can break down your Microsoft Sentinel deployment with multiple workspaces.</p>
                  <h3>Data connectors</h3>
                  <p>Data connectors allow you to ingest data into Microsoft sentinel. Some sources simply require enabling it in Microsoft Sentinel, for example, Office 365 and Azure Active Directory. Other sources require a little more setup but it's still doable.</p>
                  <h3>Log retention and querying</h3>
                  <p>After the logs are ingested into Microsoft Sentinel, the data is stored in Log Analytics where you can use Kusto Query Language (KQL) to parse and find the data you need.</p>
                  <h3>Workbooks</h3>
                  <p>Workbooks are like dashboards. They are built on your log data and the KQL queries to view your data. Microsoft has a number of workbooks built-in to Microsoft Sentinel.</p>
                  <h3>Playbook</h3>
                  <p>Playbooks are a trigger with a set of rules that allow you to automatically respond to threats. A basic playbook would be "When alert X is created then send an email"</p>
                  <h3>Analytic Rules</h3>
                  <p>Rules help you get notified when something suspicious happens. They turn the raw data into alerts and incidents</p>
                  <h3>Alerts</h3>
                  <p>Alerts are the basis for incidents. They indicate that someone or something attempted to perform a malicious or suspicious event. One or more alerts will generate incidents</p>
                  <h3>Incidents</h3>
                  <p>Microsoft Sentinel will group related alerts, assets, and other information into incidents that you can assign and work on.</p>
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
