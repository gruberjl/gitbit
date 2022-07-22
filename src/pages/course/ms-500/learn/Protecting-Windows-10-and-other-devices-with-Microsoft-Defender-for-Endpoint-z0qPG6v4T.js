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
      path: '/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T',
      article: {ARTICLE: true},
      nextContentSlug: 'Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt',
      previousContentSlug: 'Simulating-attacks-with-Microsoft-365-GG4cMY8pK',
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
                <div><blockquote>Microsoft Defender for Endpoint is an enterprise endpoint security platform designed to help enterprise networks prevent, detect, investigate, and respond to advanced threats. - Microsoft (What is Microsoft Defender for Endpoint?)</blockquote>
                  <p>Microsoft Defender for Endpoint secures your endpoints (Windows 10, Windows Server, macOS, Linux, Android, and iOS). It's anti-malware on steroids. Microsoft Defender for Endpoint can be easily deployed through your Microsoft 365 admin centers and once it's deployed it will protect and recommend enhancing the security of your devices. Microsoft Defender for Endpoint allows you to protect, investigate, and responds to risks and security threats across all your endpoint.</p>
                  <h2>What licenses are required to set up Defender for Endpoint?</h2>
                  <p>First, there are two plans for Microsoft Defender for Endpoint: Microsoft Defender for Endpoint Plan 1 (P1) &amp; Microsoft Defender for Endpoint Plan 2 (P2).</p>
                  <ul>
                    <li>Microsoft Defender for Endpoint Plan 1 (P1) is available as a standalone subscription and it's part of the Microsoft 365 E3 and Microsoft 365 A3 licenses.</li>
                    <li>Microsoft Defender for Endpoint Plan 2 (P2) is available as a standalone subscription and it's part of the following licenses:</li>
                    <li>Windows 11 Enterprise E5 &amp; <span >Windows 11 Enterprise </span>A5</li>
                    <li>Windows 10 Enterprise E5 &amp; <span >Windows 10 Enterprise </span>A5</li>
                    <li>Microsoft 365 E5 &amp; <span >Microsoft 365 </span>A5 &amp; <span >Microsoft 365 </span>G5</li>
                    <li>Microsoft 365 E5 &amp; <span >Microsoft 365 </span>A5 &amp; <span >Microsoft 365 </span>G5 &amp; <span >Microsoft 365 </span>F5 Security</li>
                    <li>Microsoft 365 F5 Security &amp; Compliance</li>
                  </ul>
                  <h2>Setup Microsoft Defender for Endpoint</h2>
                  <p>Before we can install Defender for Endpoint on our endpoint we'll need to perform some setup on the back end.</p>
                  <h3>Setup a connection from Endpoint to other services</h3>
                  <p>You can connect Microsoft Defender for Identity, Office 365 threat intelligence, Microsoft Defender for Cloud Apps, and Microsoft Intune to Microsoft Defender for Endpoints. By enabling them all you get everything connected! Let's take a look.</p>
                  <p>1. Go to Microsoft 365 Defender admin center &gt; Settings &gt; Endpoints &gt; <a href="https://security.microsoft.com/preferences2/integration" target="_blank" rel="noreferrer">Advanced Features</a>.</p>
                  <p>2. Turn On <strong>Microsoft Defender for Identity integration</strong>, <strong>Office 365 Threat Intelligence connection</strong>, and <strong>Microsoft Defender for Cloud Apps</strong>, and 	</p>
                  <p><strong>Microsoft Intune connection</strong>. Click <strong>Save preferences</strong>.</p>
                  <div ><img src="https://i.ibb.co/T47Xhyh/enable-endpoint-connections.png" alt="Enable Endpoint Connections" style="height: auto;width: auto" /></div>
                  <h3>Connect Android, iOS, and Windows to Defender for Endpoint</h3>
                  <p>Now we need to enable or connect our Intune connected devices to Endpoint.</p>
                  <p>1. Open Microsoft Endpoint Manager admin center &gt; Endpoint security &gt; Microsoft Defender for Endpoint. Enable the following settings: (then click save)</p>
                  <ul>
                    <li>Allow Microsoft Defender for Endpoint to enforce Endpoint Security Configurations</li>
                    <li>Connect Android devices to Microsoft Defender for Endpoint</li>
                    <li>Connect iOS devices to Microsoft Defender for Endpoint</li>
                    <li>Connect Windows devices to Microsoft Defender for Endpoint</li>
                    <li>Connect Android devices to Microsoft Defender for Endpoint for app protection policy evaluation&nbsp;</li>
                    <li>Connect iOS devices to Microsoft Defender for Endpoint for app protection policy evaluation</li>
                  </ul>
                  <div ><img src="https://i.ibb.co/J3LyVzr/Endpoint-security-Microsoft-Defender-for-Endpoint.png" alt="Endpoint security | Microsoft Defender for Endpoint" style="height: auto;width: auto" /></div>
                  <h3>Connect Microsoft Defender for Office 365 with Microsoft Defender for Endpoint</h3>
                  <p>Last but not least, integrate Microsoft Defender for Office 365 with Microsoft Defender for Endpoint. It's in a different place than the rest of the settings.</p>
                  <p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Explorer</strong> &gt; <strong>MDE Settings</strong>. Set <strong>Connect to Defender for Endpoint</strong> to <strong>On</strong>.</p>
                  <div ><img src="https://i.ibb.co/Z8wc4gr/integrate-Microsoft-Defender-for-Office-365-with-Microsoft-Defender-for-Endpoint.png" alt="integrate Microsoft Defender for Office 365 with Microsoft Defender for Endpoint" style="height: auto;width: auto" /></div>
                  <h2>Onboard Windows devices</h2>
                  <p>Next, we'll create a device configuration profile to onboard the Windows devices.</p>
                  <p>1. Go to <strong>Microsoft Endpoint admin center</strong> &gt; <strong>Devices</strong> &gt; <strong>Windows</strong> &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/configProfiles" target="_blank" rel="noreferrer"><strong>Configuration profiles</strong></a> &gt; <strong>Create Policy</strong>. Select <strong>Windows 10 and later</strong> as the <strong>platform </strong>and set the profile type to <strong>Templates</strong>. Lastly, click <strong>Microsoft Defender for Endpoint</strong> then click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/nfYr8d2/Create-a-configuration-profile.png" alt="Create a configuration profile to deploy Defender for Endpoint" style="height: auto;width: auto" /></div>
                  <p>2. Name your policy <strong>Defender for Endpoint</strong>. Click <strong>Next</strong>.</p>
                  <p>3. Set <strong>Expedite telemetry reporting frequency</strong> to <strong>Yes</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/JqYbwxB/Set-Defender-for-Endpoint-values.png" alt="Set Defender for Endpoint values" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Add all devices</strong> under Included groups. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/2s2yyfS/Add-all-devices-to-Defender-for-Endpoint-deployment.png" alt="Add all devices to Defender for Endpoint deployment" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Next </strong>on the Applicability Rules page.</p>
                  <p>6. Click <strong>Create</strong>.</p>
                  <p>Wait for the policy to deploy to your computers and you're all set!</p>
                  <h3>Additional configuration for Defender for Endpoint</h3>
                  <p>Now, the settings so far have been pretty basic. Let's fine-tune the Defender for Endpoint setup.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Endpoint security</strong> &gt; <strong>Antivirus</strong>. Click <strong>Create policy</strong>. Set <strong>Platform </strong>to <strong>Windows 10, Windows 11, and Windows Server</strong>. Set the <strong>profile </strong>to <strong>Microsoft Defender Antivirus</strong>.</p>
                  <div ><img src="https://i.ibb.co/jDkpDvj/Create-Defender-for-Endpoint-policy.png" alt="Create Defender for Endpoint policy" style="height: auto;width: auto" /></div>
                  <p>2. Name the policy <strong>Microsoft Defender Antivirus</strong>. Click <strong>Next</strong>.</p>
                  <p>Now you'll see a whole slew of configuration settings to configure Defender Antivirus. Make a few setting configurations and finish the profile setup!</p>
                  <h2>How to set up and manage Web content filtering</h2>
                  <p>Okay, so now how do we block users from accessing certain sites on your Windows 10 / Windows 11 computers? It's multiple steps in multiple locations. First, we need to enable the web content filtering and network indicators on our tenant. Then we need to make sure SmartScreen and Network Protection are enabled on our devices. Finally, we can create a policy to allow or block certain categories, and/or we can block certain sites. First, let's enable Microsoft Defender SmartScreen and Network Protection on the devices.</p>
                  <h3>Turn on web content filtering and network indicators</h3>
                  <p>1. Open <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Endpoints </strong>&gt; <strong>Advanced Features</strong>. Click <strong>On </strong>next to <strong>Web content filtering</strong>. Click <strong>On </strong>next to <strong>Custom network indicators</strong>.</p>
                  <div ><img src="https://i.ibb.co/bFhRynd/Enable-Web-Content-Filtering.png" alt="Enable web content filtering and network indicators" style="height: auto;width: auto" /></div>
                  <h3>Enable Microsoft Defender SmartScreen and Network Protection on the devices</h3>
                  <p>Next, we need to make sure Microsoft Defender SmartScreen and Microsoft Defender Exploit Guard Network protection are both enabled. Let's create a device configuration profile to do that now.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <a href="https://endpoint.microsoft.com/#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/configurationProfiles" target="_blank" rel="noreferrer"><strong>Configuration profiles</strong></a><strong> </strong> &gt; <strong>Create a profile</strong>. Set the <strong>Platform </strong>to <strong>Windows 10 and later</strong>. Set the <strong>Profile type</strong> to <strong>Templates</strong>. Click <strong>Endpoint protection</strong> &gt; <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/DrTrC2v/Create-a-device-configuration-profile.png" alt="Create a device configuration profile" style="height: auto;width: auto" /></div>
                  <p>2. Set the name to <strong>Enable Web content filtering</strong>. Click <strong>Next</strong>.</p>
                  <p>3. Expand <strong>Microsoft Defender SmartScreen</strong>. Click <strong>Enable</strong> next to <strong>SmartScreen for apps and files</strong>. Expand <strong>Microsoft Defender Exploit Guard</strong> &gt; <strong>Network filtering</strong>. Click <strong>Network protection</strong> &gt; <strong>Enable</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/t3CrjCX/Enable-Smart-Screen-and-Network-Protection.png" alt="Enable SmartScreen and Network Protection" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Add all devices</strong>. Click <strong>Next </strong>&gt; <strong>Next </strong>&gt; <strong>Create</strong>.</p>
                  <h3>Create a policy to block certain categories</h3>
                  <p>Now, let's block certain categories. For example, we can block adult sites, gambling, illegal activity, or a whole list of other categories.</p>
                  <p>1. Go to <strong>Microsoft Defender admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Endpoints </strong>&gt; <a href="https://security.microsoft.com/preferences2/web_content_filtering_policy" target="_blank" rel="noreferrer"><strong>web content filtering</strong></a><strong> </strong>. Enter a <strong>policy name</strong> of <strong>Block sites</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/fXQ7bKB/Create-a-web-content-filter.png" alt="Create a web content filter" style="height: auto;width: auto" /></div>
                  <p>2. <strong>Expand the categories</strong> and check out the sub-categories. Then check <strong>Adult content</strong> and <strong>Legal liability</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/MRGRCjt/block-categories.png" alt="block categories" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Next </strong>&gt; <strong>Save</strong>.</p>
                  <p>To test the policy wait an hour or so and open a website that features nudity in the browser.</p>
                  <div ><img src="https://i.ibb.co/NywhvQs/this-content-is-blocked.png" alt="This content is blocked" style="height: auto;width: auto" /></div>
                  <h3>Allow or Block certain sites</h3>
                  <p>Finally, how to allow or block certain sites. Let's jump right in.</p>
                  <p>1. Go to <strong>Microsoft Defender admin center</strong> &gt; <strong>Settings</strong> &gt; <strong>Endpoints</strong> &gt; <strong>Indicators </strong>&gt; <a href="https://security.microsoft.com/preferences2/custom_ti_indicators/url" target="_blank" rel="noreferrer"><strong>URLs/Domains</strong></a> &gt; <strong>Add item</strong>. Type the URL you want to block in the <strong>URL/Domain</strong> textbox. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/NKCtk8X/Block-a-url.png" alt="Block a URL in Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>2. Set the <strong>response action</strong> to <strong>Block execution</strong>. Set an <strong>alert title</strong>, <strong>severity</strong>, and <strong>description</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/KrQpJCR/Block-URL-action.png" alt="Choose an action for the URL" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Next </strong>&gt;<strong>Save</strong>.</p>
                  <p>Lastly, remember a couple of things. Block rules will block all subpages. So if you create a block rule for bing.com that will block bing.com and all subpages (for example bing.com/images). If you block bing.com/images then your users will still be able to access bing.com and bing.com/videos, etc. Finally, allow rules take precedence so if you create a block rule for bing.com and an allow rule for bing.com/images then users won't be able to go to bing.com (or it's subpages) except for bing.com/images.</p>
                  <h2>How to setup Defender for Endpoint to work with other antivirus programs</h2>
                  <p>Okay, so you're thinking of deploying Defender for Endpoint but you're still using a different antivirus program. How do you get the information and the advantage of using Defender for Endpoint without the antivirus scanning? Microsoft calls this passive mode. Passive mode will still send data from your devices to Microsoft 365 for tracking and analysis but it won't scan the computer for viruses. To set the computer in passive mode simply create a registry file on the computer:</p>
                  <p>Path: HKLM\SOFTWARE\Policies\Microsoft\Windows Advanced Threat Protection<br />Name: ForceDefenderPassiveMode<br />Type: REG_DWORD<br />Value: 1</p>
                  <h2>How to configure automatic remediation using Microsoft Defender for Endpoint</h2>
                  <p>So now we have Microsoft Defender for Endpoint setup and detecting threats but how do we set up Microsoft Defender for Endpoint to simply resolve the threats for us? With automated remediation! And don't worry, we can turn off automated remediation for a group of devices, for example, executives. There's a multi-step process for setting up automated remediation. One, turn on automated remediation on the tenant level. Two setup groups to enable/disable automated remediation.</p>
                  <h3>How to enable automated remediation for the tenant</h3>
                  <p>1. Go to <strong>Microsoft Defender admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Endpoints </strong>&gt; <strong>Advanced features</strong>. Set <strong>Automated investigation</strong> and <strong>Automatically resolve alerts</strong> to <strong>on</strong>. Click <strong>Save preferences</strong>.</p>
                  <div ><img src="https://i.ibb.co/kJNPLzC/enable-automated-remediation.png" alt="enable automated remediation" style="height: auto;width: auto" /></div>
                  <h3>Enable automated remediation for one group</h3>
                  <p>Now let's set up automated remediation. Before we set up remediation let's create 2 groups of devices. One group is for automatic remediation and the other group will be manual remediation. This is a fairly common setup. For example, you may want executives to be manual while everyone else is automated.</p>
                  <p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Endpoints </strong>&gt; <a href="https://security.microsoft.com/preferences2/machine_groups" target="_blank" rel="noreferrer"><strong>Device groups</strong></a>. Click <strong>Add device group</strong>. Set the name to "<strong>Automated remediation</strong>". Set the automation level to Full.</p>
                  <div ><img src="https://i.ibb.co/ryhrTg5/Create-a-device-group.png" alt="Create a device group" style="height: auto;width: auto" /></div>
                  <p>2. Now let's select our filter. For my filter, it will be "name" and "starts with" "pc-" but your filter may be different. Once set up click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/TbzQdFz/Filter-device-group.png" alt="set the device group filter" style="height: auto;width: auto" /></div>
                  <p>3. On the next page verify the devices in the group and click <strong>Next</strong>. Click <strong>Done</strong>.</p>
                  <p>Now go and create another group for your executives with no automated remediation.</p>
                  <h2>How do we delegate permissions to certain users per group?</h2>
                  <p>Let's take it a step further. Maybe some of your admins aren't allowed to work with all the devices in your organization. Maybe they can work with all devices but your executives. How do we delegate permissions so the admins can work with some of the computers but not all? First, create a user group in Azure AD. Let's call this group <strong>standard admins</strong>. Then we'll need to set up roles in Microsoft 365 Defender. Finally, we'll assign permissions to the standard admins.</p>
                  <p><em>Note: The following can only be done by a user that's assigned the Global Administrator role or Security Administrator role.</em></p>
                  <p>Before we assign permissions let's talk about what each permission can do:</p>
                  <ul>
                    <li><strong>View data - Security Operations</strong>: The view data security operations permissions give the ability to view data related to security operations. For example, they can view the Security operations dashboard, Incidents, Alerts, Automated investigations, Advanced Hunting security operations data schemas, and more.</li>
                    <li><strong>View data - Threat and vulnerability management</strong>: This permission gives the user the ability to view data related to threats and vulnerabilities. For example, view the TVM dashboard, security recommendations, and more.</li>
                    <li><strong>Active remediation actions - Security operations</strong>: This permission gives the user the ability to take response actions, for example, isolating a device. The user can also approve or dismiss pending remediation actions, and manage allowed/blocked lists for automation.</li>
                    <li><span ><strong>Active remediation actions - </strong></span><strong> Threat and vulnerability management - Exception handling</strong>: Gives the user the ability to Create new TVM exceptions and manage active exceptions.</li>
                    <li><span ><strong>Active remediation actions - </strong></span><strong> Threat and vulnerability management - Remediation handling</strong>: Gives the user the ability to manage remediation requests, tickets, and activities</li>
                    <li><span ><strong>Active remediation actions - </strong></span><strong> Threat and vulnerability management - Application handling</strong>: Give the user the ability to block and unblock apps.</li>
                    <li><strong>Threat and vulnerability management – Manage security baselines assessment profiles</strong>: Give the user the ability to create and manage profiles so you can verify if your devices are compliant.</li>
                    <li><strong>Alerts investigation</strong>: Give the user the ability to manage alerts, initiate automated investigations, run anti-virus scans, collect investigation packages, and manage device tags.</li>
                  </ul>
                  <h3>How to setup roles in Microsoft 365 Defender</h3>
                  <p>1. Go to <strong>Microsoft 365 Defender</strong> &gt; <strong>Settings </strong>&gt; <strong>Endpoints </strong>&gt; <a href="https://security.microsoft.com/preferences2/user_roles" target="_blank" rel="noreferrer"><strong>Roles</strong></a><strong> </strong>. Click <strong>Turn on roles</strong>.</p>
                  <p>2. <strong>Name the role</strong> then review the permissions. Once ready click <strong>Assigned user groups</strong>.</p>
                  <div ><img src="https://i.ibb.co/SmH95B4/Name-the-role.png" alt="Name the role" style="height: auto;width: auto" /></div>
                  <p>3. Find the <strong>group </strong>and click the <strong>checkbox</strong>. Then click <strong>Add selected groups</strong>. Finally, click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/SfjZkGk/add-the-Azure-AD-Group.png" alt="Add the Azure AD Group" style="height: auto;width: auto" /></div>
                  <h3>Assign the admins to the device group</h3>
                  <p>So now we have device groups and admin roles. Let's set our admins to the device group.</p>
                  <p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Endpoints </strong>&gt; <a href="https://security.microsoft.com/preferences2/machine_groups" target="_blank" rel="noreferrer"><strong>Device groups</strong></a>. Click your <strong>automated remediation</strong> group. Click <strong>User access</strong> &gt; <strong>Standard admins</strong> &gt; <strong>Add selected groups</strong> &gt; <strong>Done</strong>.</p>
                  <div ><img src="https://i.ibb.co/hs7RZTS/assign-admins-to-device-group.png" alt="Assign the admin roles to the device group" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Apply Changes</strong>.</p>
                  <div ><img src="https://i.ibb.co/t8Wzqr3/Apply-changes.png" alt="Apply changes" style="height: auto;width: auto" /></div>
                  <h2>How to run anti-virus scans on a computer</h2>
                  <p>Now that Defender for Endpoint is deployed and configured let's run an anti-virus scan on a computer.</p>
                  <p>1. Open <strong>Microsoft 365 Defender admin center</strong> &gt; <a href="https://security.microsoft.com/machines" target="_blank" rel="noreferrer"><strong>Device inventory</strong></a>. Click the device you want to run a scan on.</p>
                  <div ><img src="https://i.ibb.co/ZXY7kzG/open-a-device-in-microsoft-365-defender.png" alt="Open a device in Microsoft 365 defender" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Run antivirus scan</strong> &gt; Select the <strong>scan type</strong> &gt; Type a <strong>comment </strong>in the section provided. Click <strong>Confirm</strong>.</p>
                  <div ><img src="https://i.ibb.co/8bdCZGN/run-a-full-scan.png" alt="Run a full scan" style="height: auto;width: auto" /></div>
                  <h2>Let's review devices</h2>
                  <p>So now we have all our devices in Defender for Endpoint let's take a look at the alerts and risk levels.</p>
                  <p>1. Go to Microsoft 365 Defender admin center &gt; Device inventory.</p>
                  <p>Here you'll see all the devices that have been onboarded with Defender for Endpoint.</p>
                  <h2>Understanding Risk Levels</h2>
                  <p>Now, let's talk about risk levels.</p>
                  <p>The risk level reflects the overall risk assessment of the device based on a combination of factors, including the types and severity of active alerts on the device. Resolving active alerts, approving remediation activities, and suppressing subsequent alerts can lower the risk level.</p>
                  <p>The risk level can influence the enforcement of conditional access and other security policies on Microsoft Intune and other connected solutions.</p>
                  <p>Risk levels support Windows 10, Windows 11, Android, iOS, and Mac</p>
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
