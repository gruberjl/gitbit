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
      path: '/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP',
      article: {ARTICLE: true},
      nextContentSlug: 'Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1',
      previousContentSlug: 'Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt',
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
                <div><p>"Microsoft Defender for Cloud Apps is a Cloud Access Security Broker (CASB) that operates on multiple clouds. It provides rich visibility, control over data travel, and sophisticated analytics to identify and combat cyber threats across all your cloud services." - <a href="https://docs.microsoft.com/en-us/defender-cloud-apps/" target="_blank" rel="noreferrer">Microsoft</a></p>
                  <p>In short, The Microsoft Defender for Cloud Apps portal is a place where you can integrate your Azure AD user accounts, devices, and other third-party cloud apps to see what your users are using and then potentially put a stop to it.</p>
                  <h2>Open the Microsoft Defender for Cloud Apps admin center</h2>
                  <p>The Defender for Cloud Apps has an admin center. You can access it by performing the following:</p>
                  <p>1. Open the Microsoft 365 Defender admin center &gt; More resources &gt; Click <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer">Open</a> under Microsoft Defender for Cloud Apps.</p>
                  <div ><img src="https://i.ibb.co/wdyzFt9/open-microsoft-defender-for-cloud-apps.png" alt="Open Microsoft Defender for Cloud Apps Admin Center" style="height: auto;width: auto" /></div>
                  <h2>Enable Microsoft Defender for Identity data integration</h2>
                  <p>The first thing you'll want to do is enable Microsoft Defender for Identity data integration. In short, you'll be allowing Microsoft Defender for Cloud Apps access to your user accounts in Azure AD. Defender for Identity collects and holds information from your configured servers. It will collect the following information:</p>
                  <ul>
                    <li>network traffic to and from domain controllers</li>
                    <li>Security logs</li>
                    <li>AD information</li>
                    <li>Entity information (for example, names, email addresses, and phone numbers)</li>
                  </ul>
                  <p>Microsoft uses this information to find indicators of an attack and then generate alerts if a possible attack is detected. Your security team can also view entities and related information gathered from your network.</p>
                  <p>1. Click the <strong>Enable Microsoft Defender for Identity data integration</strong> link.</p>
                  <div ><img src="https://i.ibb.co/DwMCTLt/Enable-Microsoft-Defender-for-Identity-data-integration.png" alt="Enable Microsoft Defender for Identity data integration" style="height: auto;width: auto" /></div>
                  <p>2. If you see Deploy Microsoft Defender for Identity click the link.</p>
                  <div ><img src="https://i.ibb.co/88DsRRM/Deploy-Microsoft-Defender-for-Identity.png" alt="Deploy Microsoft Defender for Identity" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/fq6jbYc/Create-Microsoft-Defender-for-Identity-instance.png" alt="Create Microsoft Defender for Identity instance" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Provide a username and password</strong>.</p>
                  <div ><img src="https://i.ibb.co/JBGdSfr/provide-a-username-and-password.png" alt="Provide a username and password" style="height: auto;width: auto" /></div>
                  <p>5. Enter your on-premises credentials in the space provided. Click Save.</p>
                  <div ><img src="https://i.ibb.co/HHK2qWz/enter-onpremises-credentials.png" alt="Enter on-premises credentials" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Download Sensore Setup</strong> at the top of the screen.</p>
                  <div ><img src="https://i.ibb.co/svLKv8H/download-sensor-setup.png" alt="Download the sensor setup" style="height: auto;width: auto" /></div>
                  <p>7. Click <strong>Download </strong>then <strong>copy </strong>the access key.</p>
                  <div ><img src="https://i.ibb.co/kM8dshr/Download-sensor-and-copy-access-key.png" alt="Download the sensor then copy the key" style="height: auto;width: auto" /></div>
                  <p>8. Copy the ZIP to a domain controller then extract it. Once extracted run <strong>Azure ATP Sensor Setup</strong>.</p>
                  <p>9. On the Choose your language page click <strong>Next</strong>.</p>
                  <p>10. On the Sensor deployment type page click <strong>Next</strong>.</p>
                  <p>11. On the Configure the sensor page enter the <strong>access key</strong> you received from step 7. Click <strong>Install</strong>.</p>
                  <div ><img src="https://i.ibb.co/c888GgC/enter-access-key.png" alt="Enter the sensor access key" style="height: auto;width: auto" /></div>
                  <h2>Review servers with the sensor installed</h2>
                  <p>Now let's review which servers have the sensors installed.</p>
                  <p>1. Click the <strong>gear </strong>in the top right corner. Click <strong>Settings</strong>.</p>
                  <div ><img src="https://i.ibb.co/D7mLYH2/cloud-apps-settings.png" alt="Click the gear then click Settings" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Microsoft Defender for Identity</strong> &gt; <strong>Configure Microsoft Defender for Identity sensors.</strong></p>
                  <div ><img src="https://i.ibb.co/RYMnJLT/Configure-Microsoft-Defender-for-Identity-sensors.png" alt="Configure Microsoft Defender for Identity sensors" style="height: auto;width: auto" /></div>
                  <h2>Create a file alert</h2>
                  <p>Now we may need to alert us on file activity. Let's say we want to receive an alert on any file that has a name that contains the word File. Let's set it up. First, we'll need to enable file monitoring in the Office 365 connector. Then we'll need to create a policy.</p>
                  <p><em>The policy below will match any file located in OneDrive or SharePoint with the file name containing the word or phrase you add. In the example below it will match any file with the file name of File. So it will match the following files: File.docx, ImportantFile.docx, and File_Important.docx</em></p>
                  <div ><img src="https://i.ibb.co/C21rd1c/file-policy-alert.png" alt="Microsoft Defender for Cloud Apps email alert" style="height: auto;width: auto" /></div>
                  <p>1. Open the <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer"><strong>Microsoft Defender for Cloud Apps</strong></a><strong> </strong>portal. Go to <strong>Investigate</strong> &gt; <strong>Connected apps</strong>. Click the <strong>ellipsis</strong> (<strong>...</strong>) next to <strong>Office 365</strong>. Click <strong>Edit settings...</strong></p>
                  <div ><img src="https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png" alt="Open the Microsoft Defender for Cloud Apps connected apps settings" style="height: auto;width: auto" /></div>
                  <p>2. Click all the <strong>Office 365 components</strong> checkboxes. Click <strong>Connect</strong>.</p>
                  <div ><img src="https://i.ibb.co/PGyBPSP/defender-for-cloud-apps-office-365-components.png" alt="Microsoft Defender for Cloud Apps Office 365 components" style="height: auto;width: auto" /></div>
                  <p>3. Close the Connect Office 365 window. Click Control &gt; Policies &gt; Create policy &gt; File policy.</p>
                  <div ><img src="https://i.ibb.co/nLDD0JR/create-file-policy.png" alt="Create file policy" style="height: auto;width: auto" /></div>
                  <p>4. Give the <strong>policy a name</strong>, for example, <strong>File Policy 1</strong>. Remove the two <strong>files matching all of the following</strong> filters.</p>
                  <div ><img src="https://i.ibb.co/wL49NXB/create-file-policy-set-name.png" alt="Create a file policy. Set the name and remove the filters" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Select a filter</strong>. Select <strong>File name</strong>.</p>
                  <div ><img src="https://i.ibb.co/5LjdDSK/Filter-by-file-name.png" alt="Filter by file name" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>equals</strong>. Select <strong>contains words</strong>. Set the File name field to <strong>File</strong>.</p>
                  <div ><img src="https://i.ibb.co/tLQ6q3r/set-filter-match-to-contains-words.png" alt="Set file filter match to contain the words File" style="height: auto;width: auto" /></div>
                  <p>7. Check the box next to <strong>Create an alert for each matching file</strong>. Check the box next to <strong>Send alert as email</strong>. Enter your <strong>email address</strong> in the box provided. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/q9cjDjz/set-alert.png" alt="Set alert to email" style="height: auto;width: auto" /></div>
                  <h2>Understanding Cloud Apps policies</h2>
                  <p>Understanding the Cloud App policies can be a bit tricky. In short, you always have 4 parts.</p>
                  <h3>Meta-information</h3>
                  <p>The meta-information is at the top. This is data specifically for the policy. For example, the policy name, description, severity, etc.</p>
                  <div ><img src="https://i.ibb.co/W0DDsqx/policy-meta-information.png" alt="Cloud App Policy Meta-Information" style="height: auto;width: auto" /></div>
                  <h3>Filters</h3>
                  <p>The filters are generally next. They tell us who, and what the policy is applied to. You can create a filter for all sorts of different things. For example, you can apply a policy based on the actor (the user that's performing the action) the IP address of the actor, the apps the actor is interacting with, etc.</p>
                  <div ><img src="https://i.ibb.co/qxr2D8p/filter.png" alt="Cloud app policy filters" style="height: auto;width: auto" /></div>
                  <h3>Actions</h3>
                  <p>The actions are what will happen when the filters are matched. For example, you can test a policy, in which case an alert can be created but the user won't be prevented from performing an action or you can block the user from acting.</p>
                  <div ><img src="https://i.ibb.co/WPYhm63/Actions.png" alt="Microsoft Defender for Cloud Apps Actions" style="height: auto;width: auto" /></div>
                  <h3>Alerts</h3>
                  <p>Alerts are sent when a user performs the actions that match the filters. You can send an email, text message, simply create an alert in Defender for Cloud Apps or send alerts to Power Automate.</p>
                  <div ><img src="https://i.ibb.co/VH7H7kw/Alerts.png" alt="Microsoft Defender for cloud apps Alerts" style="height: auto;width: auto" /></div>
                  <h2>Block printing from Exchange Online</h2>
                  <p>Alright, now we've configured some basic alerting let's get more technical. Let's create a session policy that blocks printing from Exchange Online. We'll need a conditional access policy, then we'll create the app access control to block printing.</p>
                  <h3>Create the conditional access policy</h3>
                  <p>1. Go to Azure AD admin center &gt; <strong>All services</strong> &gt; <a href="https://aad.portal.azure.com/#allservices/category/All" target="_blank" rel="noreferrer">Azure AD Conditional Access</a>. Click <strong>New policy</strong> &gt; <strong>Create new policy</strong>.</p>
                  <div ><img src="https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png" alt="Create new conditional access policy" style="height: auto;width: auto" /></div>
                  <p>2. Set the name to <strong>Block Printing</strong>. Click <strong>0 users or workload identities selected</strong>. Click <strong>All users</strong>.</p>
                  <div ><img src="https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png" alt="Conditional access policy all users" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>Select apps</strong>. Search for <strong>Exchange Online</strong>. Click <strong>Office 365 Exchange Online</strong>. Click <strong>Select</strong>.</p>
                  <div ><img src="https://i.ibb.co/q5shGXd/conditional-access-policy-set-exchange-online.png" alt="Set Exchange Online as the app in the conditional apps" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>0 controls selected</strong> located under <em>Session</em>. Click <strong>Use Conditional Access App Control</strong>. Click <strong>Monitor only</strong> and select <strong>Use custom policy</strong>. Click <strong>Select</strong>.</p>
                  <div ><img src="https://i.ibb.co/3zwTtWD/session-controls.png" alt="Session controls" style="height: auto;width: auto" /></div>
                  <p>5. Set the Enable policy to <strong>On</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/ckcDbJn/enable-the-conditional-access-policy.png" alt="Enable the conditional access policy" style="height: auto;width: auto" /></div>
                  <h2>Login to Exchange Online</h2>
                  <p>Now that the conditional access policy is set up we'll need to have someone log into Exchange Online. Someone that is part of the conditional access policy you set up above. Anyone will do. It can even be you. Simply open <a href="https://outlook.office.com/mail/" target="_blank" rel="noreferrer">https://outlook.office.com/mail/</a>.</p>
                  <h3>Enable the app in your organization</h3>
                  <p>1. Open <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer">Microsoft Defender for Cloud Apps</a> &gt; <strong>Investigate </strong>&gt; <strong>Connected apps</strong> &gt; <strong>Conditional Access App Control apps</strong> &gt; Click the <strong>ellipsis</strong> next to Microsoft Exchange Online. Click <strong>Edit app...</strong></p>
                  <div ><img src="https://i.ibb.co/mCq773W/edit-connected-app.png" alt="Edit connected apps" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Use with Conditional Access App Control</strong>. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/Fzk45vy/use-with-conditional-access-app-control.png" alt="Use with conditional access app control" style="height: auto;width: auto" /></div>
                  <h3>Create session policy</h3>
                  <p>1. Click Control &gt; Policies &gt; Create policy &gt; Session policy.</p>
                  <div ><img src="https://i.ibb.co/b1C33jn/create-session-policy.png" alt="Create session policy" style="height: auto;width: auto" /></div>
                  <p>2. Set the policy name to Block Printing from Exchange Online. Click Select under Session control type. Click Block activities.</p>
                  <div ><img src="https://i.ibb.co/Lp85jht/session-policy-block-activities.png" alt="Session Policy block activities" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Select apps</strong>. Click <strong>Microsoft Exchange Online</strong>. Click <strong>Select activity</strong>. Click <strong>Print</strong>.</p>
                  <div ><img src="https://i.ibb.co/R24dxgR/select-apps-select-activity.png" alt="Select apps and select activiities" style="height: auto;width: auto" /></div>
                  <p>4. Scroll down to the actions section. Click <strong>Block</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/yg2Z6Jf/block-session-policy.png" alt="Set the session policy to block" style="height: auto;width: auto" /></div>
                  <p>The above policy doesn't only apply to Microsoft 365 apps. Any app that's registered in Azure AD that supports session controls can be managed in the same fashion.</p>
                  <h2>Review the logs</h2>
                  <p>So now we have a few apps set up in Cloud App Security. Let's dive in and see how to review the logs to see how to track who's doing what.</p>
                  <p>1. Open the <strong>Microsoft 365 Cloud App Security admin center</strong>. Click <strong>Investigate </strong>&gt; <strong>Activity log</strong>.</p>
                  <p>2. Click on an activity to see more information.</p>
                  <div ><img src="https://i.ibb.co/bbrpv8C/cloud-app-activity-log.png" alt="Cloud app activity log" style="height: auto;width: auto" /></div>
                  <p />
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
