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
      path: '/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA',
      article: {ARTICLE: true},
      nextContentSlug: 'Whats-Microsoft-Defender-for-Office-365-EnPyp7ukN',
      previousContentSlug: 'Whats-Microsoft-365-Defender-z8EMM9Eu_',
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
                <div><p>Microsoft Defender for Identity is designed to protect your on-premises Active Directory (AD) and Active Directory Federation Services (ADFS). Microsoft Defender for Identity can perform the following:</p>
                  <ul>
                    <li>Monitor user and entity behavior/activities with intelligent analytics.</li>
                    <li>Protect user identities and reduces the attack surface.</li>
                    <li>Identify and investigate suspicious user activities to find advanced attacks throughout your environment.</li>
                    <li>Use the Microsoft 365 portal to monitor and respond to investigate alerts and user activity.</li>
                  </ul>
                  <h2>How does Microsoft Defender for Identity work?</h2>
                  <p>Microsoft Defender for Identity monitors your domain controllers' network traffic and event logs. It then uses this information to detect attacks and threats. Microsoft Defender for Identity gathers the information and analyzes it based on user and device behavior. But what's the flow?</p>
                  <p>In short, you install a sensor on your AD FS servers and domain controllers. The sensor will send the network traffic, Windows events, and traces back to Microsoft Defender for Identity that's in the Microsoft 365 cloud. Microsoft Defender for Identity will send the information to the Microsoft Defender for Cloud Apps portal and show you the activities, and alerts.</p>
                  <p><em>But don't worry. Microsoft won't use your data for advertising or anything else other than providing you the defense your organization needs.</em></p>
                  <h2>What licenses will give us Microsoft Defender for Identity?</h2>
                  <p>Microsoft Defender for Identity is part of the Enterprise Mobility + Security 5 (EMS E5) and as a standalone license.</p>
                  <h2>How do you set up Microsoft Defender for Identity?</h2>
                  <p>There are a couple of steps to set up the Microsoft Defender for Identity. In short, we'll need to configure Defender for Identity and then install the sensor on your AD servers. After that, we'll need to configure the account for automatic actions. Then we'll need to set up the sensitive accounts and honey token accounts. Next, we'll enable the integration between Defender for Identity and Defender for Cloud Apps, as well as, Defender for Endpoint. Then you'll need to review the reports and Secure Score to improve the security of your environment. Finally, you'll need to monitor the alerts.</p>
                  <h3>How to configure Microsoft Defender for Identity</h3>
                  <p>1. Go to the <strong>Microsoft 365 Defender portal</strong> &gt; <strong>More resources</strong> &gt; Click <a href="https://portal.atp.azure.com/" target="_blank" rel="noreferrer"><strong>Open</strong></a> located under <strong>Azure Advanced Threat Protection</strong>.</p>
                  <div ><img src="https://i.ibb.co/4FyCGbZ/Open-Defender-for-Identity.png" alt="How to open the Microsoft Defender for Identity Portal" style="height: auto;width: auto" /></div>
                  <p><div ><img src="https://i.ibb.co/zfjrs6K/Open-Defender-for-Identity.png" alt="How to open Microsoft Defender for Identity" style="height: auto;width: auto" /></div>2. If you receive the Welcome screen click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/0jhdMwP/defender-for-identity-create.png" alt="Create the Defender for Identity instance" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>configuration</strong> &gt; <strong>Directory services</strong>.</p>
                  <p>4. Open <strong>PowerShell </strong>on your domain controller. Run the following script:</p>
                  <pre>Import-Module ActiveDirectory<br />if ((Get-KdsRootKey) -eq $null) &#123;<br />     Add-KdsRootKey -EffectiveImmediately<br />     Write-Host "Please wait 10 hours and then run this script again"<br />&#125; else &#123;<br />     $DomainControllers = Get-ADDomainController<br />     $Dcs = @()<br />     foreach ($DomainController in $DomainControllers) &#123;<br />          $Dcs += "$($DomainController.Name)$"<br />     &#125;<br />     new-adserviceaccount -name gMSA01 -dnshostname ((Get-DnsServer).ServerSetting.ComputerName) -PrincipalsAllowedToRetrieveManagedPassword $Dcs<br />&#125;</pre>
                  <p>5. If you receive the message "<strong>Please wait 10 hours and then run this script again</strong>" wait 10 hours then run the script again.</p>
                  <p>6. Enter the username of <strong>gMSA01</strong>. Click the <strong>Group managed service account</strong>. Enter your <strong>domain name</strong> in the space provided. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/qsYwScq/Defender-for-Identity-Directory-Services.png" alt="Setup directory services with Defender for Identity" style="height: auto;width: auto" /></div>
                  <h3>How to<div ><img src="https://i.ibb.co/r4mpPNq/Microsoft-Defender-for-Identity-Setup.png" alt="Microsoft Defender for Identity creation" style="height: auto;width: auto" /></div>install the sensor on your AD servers</h3>
                  <p>1. Open the <a href="https://portal.atp.azure.com/" target="_blank" rel="noreferrer">Microsoft Defender for Identity admin center</a>.</p>
                  <p>2. Click <strong>Configuration</strong> &gt; <strong>Sensors</strong>.</p>
                  <div ><img src="https://i.ibb.co/w6TtrRt/defender-for-identity-download-sensors.png" alt="Microsoft Defender for identity sensors" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Download</strong>. Save the zip to your computer.</p>
                  <p>4. Copy the zip file to one of your domain controllers.</p>
                  <p>5. Extract the zip.</p>
                  <p>6. Run <strong>Azure ATP Sensor Setup.exe</strong></p>
                  <p>7. On the Install Microsoft Defender for Identity Sensor page click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/BBV6hs7/Microsoft-Defender-for-Identity-Sensor-Install-Choose-Language.png" alt="Microsoft Defender for Identity Sensor Install Choose Language" style="height: auto;width: auto" /></div>
                  <p>8. On the Sensor deployment type page click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/xgVRBHc/Microsoft-Defender-for-Identity-Sensor-Install-Deployment-Type.png" alt="Microsoft Defender for Identity Sensor Install Deployment Type" style="height: auto;width: auto" /></div>
                  <p>9. Go back to the Defender for Identity admin center sensory web page and <strong>copy </strong>the Access key. <strong>Paste </strong>the access key into the Configure the Sensor page. Click <strong>Install</strong>.</p>
                  <div ><img src="https://i.ibb.co/DzKrx0z/Microsoft-Defender-for-Identity-Sensor-Install-Configure-the-Sensor.png" alt="Microsoft Defender for Identity Sensor Install Configure the Sensor" style="height: auto;width: auto" /></div>
                  <p>10. Click Finish.</p>
                  <p>11. Repeat steps 4-10 on each domain controller.</p>
                  <p>12. Once the sensor is installed on all of your domain controllers refresh the Defender for Identity Sensors web page and verify the DCs appear in the list with the status of <strong>Running</strong>.</p>
                  <div ><img src="https://i.ibb.co/FzXLp2J/defender-for-identity-DCs.png" alt="Defender for Identity DCs with Sensor installed" style="height: auto;width: auto" /></div>
                  <h3>Configure Delayed updates</h3>
                  <p>Now that we have the software installed there's one configuration option you should know. Delayed updates give you the ability to set the Defender for Identity to delay installing updates by 72 hours. Typically, Microsoft will release updates for the sensor a couple of times a month. By setting the delay to 72 hours you may be a little bit behind but you'll be less likely to have a negative impact due to an update being misconfigured.</p>
                  <p>1. <span >Go to the <strong>Microsoft 365 Defender portal</strong> &gt; <strong>More resources</strong> &gt; Click </span><a href="https://portal.atp.azure.com/" target="_blank" rel="noreferrer"><span ><strong><ins>Open</ins></strong></span></a><span > located under <strong>Azure Advanced Threat Protection</strong>.</span></p>
                  <p><span >2. Click <strong>Settings </strong>in the left nav &gt; <strong>Updates</strong>. Click the Delayed update switch to <strong>On</strong>. Click <strong>Save</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/KhQT36Y/delay-updates.png" alt="Microsoft Defender for Identity Delayed updated" style="height: auto;width: auto" /></div>
                  <h2>Configure Automatic Actions</h2>
                  <p>In these steps, we'll set up the group account we created earlier to perform automatic actions in our AD domain.</p>
                  <p>1. Open <strong>Active Directory Users and Computers</strong>. Right-click the <strong>domain </strong>and click <strong>Properties</strong>.</p>
                  <div ><img src="https://i.ibb.co/F5dcMLV/AD-Properties.png" alt="Open domain properties" style="height: auto;width: auto" /></div>
                  <p>2. Click the <strong>Security </strong>tab &gt; <strong>Advanced </strong>&gt; <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/375P8GM/Add-Advanced-Permissions.png" alt="Add advanced permissions" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Select a principal</strong>. Click <strong>Object Types</strong> &gt; <strong>Service Accounts</strong> &gt; <strong>OK</strong>. Enter <strong>gMSA01</strong> in the object name to select box. Click <strong>OK</strong>.</p>
                  <div ><img src="https://i.ibb.co/MkCvDqj/select-a-principal.png" alt="Select a principal" style="height: auto;width: auto" /></div>
                  <p>4. Click the <strong>Applies to</strong> drop down. Select <strong>Descendant User object</strong>.</p>
                  <div ><img src="https://i.ibb.co/7jsFRLc/Applies-to.png" alt="Applies to" style="height: auto;width: auto" /></div>
                  <p>5. To enable force password reset click <strong>Permissions: Reset password</strong>. Then click <strong>Properties: Read pwdLastSet</strong> &amp; <strong>Properties: Write pwdLastSet</strong></p>
                  <p>6. To grant the account the ability to disable users click <strong>Properties: Read userAccountControl</strong> &amp; <strong>Properties: Write userAccountControl</strong></p>
                  <div ><img src="https://i.ibb.co/vvjdwDy/User-Permissions.png" alt="User Permissions" style="height: auto;width: auto" /></div>
                  <p>8. Click <strong>OK</strong>.</p>
                  <p>7. Click <strong>Add</strong> &gt; <strong>Select a principal</strong>. Enter <strong>GMSA01</strong> in the name field again and click <strong>OK</strong>. Click the <strong>Applies to</strong> dropdown. Then click <strong>Descendant Group objects</strong>.</p>
                  <div ><img src="https://i.ibb.co/YbPw0Zc/group-objects.png" alt="Group objects" style="height: auto;width: auto" /></div>
                  <p>8. Click <strong>Properties: Read Members</strong> &amp; <strong>Properties: Write Members</strong>.</p>
                  <div ><img src="https://i.ibb.co/T2bgwNJ/group-permissions.png" alt="Group permissions" style="height: auto;width: auto" /></div>
                  <p>9. Click <strong>OK</strong>. Click <strong>Apply </strong>&gt; <strong>OK</strong>.</p>
                  <p>10. Go back to the Microsoft Defender admin center web page again. Click Settings &gt; Identities &gt; <a href="https://security.microsoft.com/settings/identities?tabid=manageAccounts" target="_blank" rel="noreferrer">Manage action accounts</a>.&nbsp;</p>
                  <p>11. Click <strong>Add credentials</strong>. Set the account name to <strong>gMSA01</strong>. Set the domain to your <strong>internal domain name</strong>. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/8sSxWZV/add-credentials-for-action-accounts.png" alt="Add credentials for action accounts" style="height: auto;width: auto" /></div>
                  <h3>How to set up the sensitive accounts</h3>
                  <p>Sensitive accounts are typically C-level executives and administrator accounts. Administrator accounts and domain controllers are automatically added as sensitive accounts but we'll add them manually anyway. These accounts will require extra alerts and management by Defender for Identity.</p>
                  <p>1. Go to <strong>Microsoft Defender admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Identitites</strong> &gt; <a href="https://security.microsoft.com/settings/identities?tabid=entityTagsSensitive" target="_blank" rel="noreferrer"><strong>Sensitive</strong></a>.</p>
                  <p>2. Click <strong>Tag users</strong>. Click the check box next to the <strong>accounts you want to add</strong>. Click <strong>Add selection</strong>.</p>
                  <div ><img src="https://i.ibb.co/9nC0B4Z/tag-sensitive-accounts.png" alt="Tag sensitive accounts" style="height: auto;width: auto" /></div>
                  <h3>How to set up honey token accounts</h3>
                  <p>Honey token accounts are accounts that are never used. They should never be logged into by anyone. When a malicious user accesses your environment and then uses that account in an attempt to gain elevated permissions then Defender for Identity will trigger alerts.</p>
                  <p>1. Create an account in your on-premises Active Directory Users and Computers. Name the account something like "Gruber Admin" that a malicious user would find and attempt to access.</p>
                  <div ><img src="https://i.ibb.co/s58V9jq/honeytoken-account-creation.png" alt="Honeytoken account creation" style="height: auto;width: auto" /></div>
                  <p><span >2. Wait until your on-premises AD syncs to Microsoft 365. Typically it takes about 1 hour.</span></p>
                  <p><span >3. Go to <strong>Microsoft Defender admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Identities</strong> &gt; </span><a href="https://security.microsoft.com/settings/identities?tabid=entityTagsHoneytoken" target="_blank" rel="noreferrer"><span ><strong><ins>Honeytoken</ins></strong></span></a><span >.</span></p>
                  <p><span >4. Click <strong>Tag users</strong>. <strong>Select the honeytoken account</strong> you created in step 1. Click <strong>Add selection</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/3cFcT2J/honeytoken-account-setup.png" alt="Honeytoken account setup" style="height: auto;width: auto" /></div>
                  <h3>Enable Microsoft Defender for Identity data integration into Microsoft Defender for Cloud Apps</h3>
                  <p>1. Open Microsoft Defender portal &gt; More resources &gt; <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer">Microsoft Defender for Cloud Apps</a>.</p>
                  <div ><img src="https://i.ibb.co/ZXQX5Rd/Open-Microsoft-Defender-for-Cloud-Apps.png" alt="Open Microsoft Defender for Cloud Apps" style="height: auto;width: auto" /></div>
                  <p>2. Click the <strong>gear </strong>in the top right corner &gt; <strong>Settings </strong>&gt; <strong>Microsoft Defender for Identity</strong>. Check the <strong>Enable Microsoft Defender for Identity integration</strong>. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/f0NNnnb/Defender-for-Cloud-Apps-integration-with-Defender-for-Identity.png" alt="Integrate Defender for Cloud Apps with Defender for Identity" style="height: auto;width: auto" /></div>
                  <h2>Enable Microsoft Defender for Identity data integration into Microsoft Defender for Endpoint</h2>
                  <p><span >1. Go to Microsoft Defender for Identity admin center &gt; Configuration &gt; </span><a href="https://portal.atp.azure.com/configuration?tab=wdatp" target="_blank" rel="noreferrer"><span >Microsoft Defender for Endpoint</span></a><span >.</span></p>
                  <p><span >2. Click On next to <strong>Integration with Microsoft Defender for Endpoint</strong>. Click <strong>Save</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/qW4W1SS/Enable-Integration-Between-Defender-for-Endpoint-and-Defender-for-Identity.png" alt="Enable Integration Between Defender for Endpoint and Defender for Identity" style="height: auto;width: auto" /></div>
                  <p>3. Go to the <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Settings</strong> &gt; <strong>Endpoints </strong>&gt; <a href="https://security.microsoft.com/preferences2/integration" target="_blank" rel="noreferrer"><strong>Advanced Features</strong></a>.</p>
                  <p>4. Enable the <strong>Microsoft Defender for Identity integration</strong> setting. Click <strong>Save preferences</strong>.</p>
                  <div ><img src="https://i.ibb.co/WkvGhbd/Enable-Defender-for-Identity-and-endpoint-integration.png" alt="Enable Defender for Identity and endpoint integration" style="height: auto;width: auto" /></div>
                  <h2>How to configure monitoring for a server that cannot connect to the internet</h2>
                  <p>Let's say you have two servers: Server1 and Server2. Server1 is a domain controller and can connect to the internet. Server2 is a member server and can't connect to the internet. How do we monitor Server2 using Microsoft Defender for Identity? With an event subscription and port mirroring!</p>
                  <h3>Install the sensor in standalone mode</h3>
                  <p>Here's another scenario you'll probably never see in real life but it may be on the test. Let's say you have 2 servers: server1 and server2. Server1 is a domain controller and can't connect to the internet. Server2 is a member server and can communicate with server1 and connect to the internet. How do you monitor server2 using the sensor?</p>
                  <p>1. Install the standalone sensor on Server2</p>
                  <p>2. Setup event subscription on Server2</p>
                  <p>3. Setup <a href="https://docs.microsoft.com/en-us/defender-for-identity/configure-port-mirroring" target="_blank" rel="noreferrer">port mirroring</a> on Server1</p>
                  <h2>How to monitor VPN</h2>
                  <p>So now we're at another oddball. It's not very common so I won't go into details but you may see the question on the test. How do we integrate a VPN and Microsoft Defender for Identity?</p>
                  <p>Let's run through the scenario. Let's say you have a VPN server named VPN1 that runs Windows Server 2016 with the Remote Access role installed and configured. You have the Defender for Identity sensor installed on a Windows Server 2016 server named Server1. How do we integrate the VPN and Defender for Identity?</p>
                  <p>1. Configure <a href="https://docs.microsoft.com/en-us/defender-for-identity/install-step6-vpn#configure-radius-accounting-on-the-vpn-system" target="_blank" rel="noreferrer">RADIUS Accounting</a> on VPN1</p>
                  <p>2. Enable <a href="https://docs.microsoft.com/en-us/defender-for-identity/install-step6-vpn#configure-vpn-in-defender-for-identity" target="_blank" rel="noreferrer">VPN / RADIUS Accounts</a> in Defender for Identity</p>
                  <p>3. Enable <a href="https://docs.microsoft.com/en-us/defender-for-identity/install-step6-vpn#configure-vpn-in-defender-for-identity" target="_blank" rel="noreferrer">inbound port 1813</a> on Server1</p>
                  <h2>How to integrate SIEM and Defender for identity</h2>
                  <p>Here's another oddball I won't go into detail but you may see it on the test. How and when do we integrate a third-party security information and event management (SIEM) solution and Defender for Identity?</p>
                  <p>You'll need to integrate a SIEM and Defender for Identity when you're using a third-party SIEM solution and you want Defender for Identity to detect when sensitive groups are modified and when malicious services are created. In short, anytime you want Defender for Identity to alert when the SIEM solution picks up an issue.</p>
                  <p>How do you integrate a SIEM solution and Defender for Identity? By configuring event forwarding on the domain controllers / SIEM solution.</p>
                  <h2>How to monitor alerts</h2>
                  <p>The alerts will show up in a couple of different places. First, they'll show up in the Microsoft Defender for Identity Timeline. Next, they'll show up in the Microsoft Defender admin center Alerts &amp; Investigation pages. Finally, they'll show up on the Microsoft Defender for Cloud Apps Alerts page.</p>
                  <h3>How to view alerts in the Microsoft Defender for Identity Timeline</h3>
                  <div ><img src="https://i.ibb.co/bQDBh0Y/Defender-for-Identity-Timeline.png" alt="Defender for Identity timeline" style="height: auto;width: auto" /></div>
                  <p>1. Go to <strong>Microsoft Defender for Identity admin center</strong> &gt; <a href="https://portal.atp.azure.com/timeline?status=Open&severity=All" target="_blank" rel="noreferrer"><strong>Timeline</strong></a>.</p>
                  <p>From there you'll see the suspicious activity in a timeline. You can click an alert to review more details about the issue. You can also click the ellipsis (...) next to an alert and close, suppress, or delete an alert.</p>
                  <h3>How to view alerts in the Microsoft Defender admin center</h3>
                  <div ><img src="https://i.ibb.co/G9qzFPn/Honeytoken-breach-in-microsoft-defender.png" alt="Honeytoken breach in Microsoft defender admin center" style="height: auto;width: auto" /></div>
                  <p>1. Open the <strong>Microsoft Defender admin center</strong> &gt; <strong>Incidents &amp; alerts</strong> &gt; <strong>Incidents</strong>.</p>
                  <p>From there you can see the incidents. By clicking an incident name you can view more information, for example, the user and device that was used.</p>
                  <h3>How to view alerts in the Microsoft Defender for Cloud Apps admin center</h3>
                  <div ><img src="https://i.ibb.co/nbDKcWs/Defender-for-Cloud-Apps-Alerts.png" alt="Defender for Cloud Apps alerts" style="height: auto;width: auto" /></div>
                  <p>1. Open the <strong>Microsoft Defender for Cloud Apps admin center</strong> &gt; <strong>Alerts</strong>.</p>
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
