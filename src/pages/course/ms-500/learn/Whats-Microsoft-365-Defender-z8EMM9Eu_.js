import { h, Component } from "preact"
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

const removePaddingStyle = {
  padding: '0px'
}

const marginTop24Style = {
  marginTop: '24px'
}

const listItemStyle = {
  border: 'none',
  paddingTop: '12px',
  paddingBottom: '12px'
}

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Whats-Microsoft-365-Defender-z8EMM9Eu_',
      article: {"type":"article","title":"What's Microsoft 365 Defender?","article":{"blocks":[{"text":"","depth":0,"key":"8gppo","type":"unstyled","data":{},"inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[{"length":1,"offset":0,"key":0}],"key":"1venf","type":"atomic","data":{},"text":" ","inlineStyleRanges":[],"depth":0},{"entityRanges":[],"data":{},"inlineStyleRanges":[],"depth":0,"text":"Microsoft 365 Defender is a suite of security technology to detect security risks, investigate attacks, and prevent harmful activities. It includes several security solutions including Microsoft Defender for Endpoint, Microsoft Defender for Office 365, Microsoft Defender for Identity, Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP), and Microsoft Defender for Cloud Apps formally known as Microsoft Cloud App Security. But typically, when someone says \"What's Microsoft 365 Defender?\" they are referring to the Microsoft 365 Defender portal.","key":"28dm3","type":"unstyled"},{"inlineStyleRanges":[],"type":"header-two","text":"Microsoft Defender for Office 365","entityRanges":[],"data":{},"key":"2a0gn","depth":0},{"data":{},"key":"c8500","type":"atomic","inlineStyleRanges":[],"entityRanges":[{"key":1,"length":1,"offset":0}],"depth":0,"text":" "},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"ehqsn","type":"unstyled","text":"We won't go into all the features you can access for Microsoft Defender for Office 365 because it isn't all covered on the MS-500 test and quite simply, it's a lot. Plus, some of the sections I've broken into different articles. But let's cover some of the basics."},{"inlineStyleRanges":[],"type":"header-three","text":"What is Defender for Office 365?","depth":0,"key":"dptns","entityRanges":[],"data":{}},{"entityRanges":[],"data":{},"key":"74ncu","text":"Every Office 365 subscription comes with some security functionality. Depending on your subscriptions is depending on how many additional security capabilities you'll receive. In Defender for Office 365, there are three main packages tied to your subscription type:","type":"unstyled","depth":0,"inlineStyleRanges":[]},{"text":"Exchange Online Protection (EOP)","depth":0,"data":{},"type":"unordered-list-item","key":"bu7ob","entityRanges":[],"inlineStyleRanges":[]},{"text":"Microsoft Defender for Office 365 Plan 1 (Defender for Office P1)","inlineStyleRanges":[],"key":"199md","data":{},"depth":0,"entityRanges":[],"type":"unordered-list-item"},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Microsoft Defender for Office 365 Plan 2 (Defender for Office P2)","type":"unordered-list-item","key":"fog2d","data":{}},{"key":"1ubl6","data":{},"type":"header-three","depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Exchange Online Protection"},{"depth":0,"inlineStyleRanges":[],"text":"Exchange Online Protection is available to every license that has an Exchange Online mailbox license. In short, it's the basic security package you receive with a Microsoft 365 mailbox. It protects against spam, phishing attacks, malware, and bulk mail. It has spoof intelligence, impersonation detection, and quarantine capabilities. You also get access to the Audit logs and message trace.","data":{},"type":"unstyled","key":"1c16m","entityRanges":[]},{"data":{},"type":"header-three","inlineStyleRanges":[],"depth":0,"key":"418lc","entityRanges":[],"text":"Defender for Office P1"},{"data":{},"entityRanges":[],"type":"unstyled","key":"6t9gm","text":"Defender for Office P1 has all the capabilities of Exchange Online Protection plus some more. For example, you'll get access to safe attachments, safe links, Defender for Office 365 protection for SharePoint Online, Teams, and OneDrive for Business. User and domain impersonation protection, alerts, and SIEM integration API for alerts and detections.","depth":0,"inlineStyleRanges":[]},{"type":"header-three","text":"Defender for Office P2","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[],"key":"22ob3"},{"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"text":"Defender for Office P2 includes everything that Defender for Office P1 includes (including the Exchange Online Protection) plus more. You'll gain access to the Threat Explorer, Threat Trackers, and Campaign views. You'll also gain access to Automated Investigation and Response (AIR) capabilities.","key":"f6met","depth":0,"data":{}},{"type":"header-two","data":{},"text":"What's Microsoft Defender for Endpoint?","inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"esga0"},{"key":"a8rrv","data":{},"text":" ","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"key":2,"length":1,"offset":0}],"depth":0},{"data":{},"text":"Formally known as Windows Defender Advanced Threat Protection (ATP) then later known as Microsoft Defender Advanced Threat Protection (ATP). Microsoft Defender for Endpoint is Microsoft's complete endpoint security package. Microsoft Defender for Endpoint offers security for clients, servers, mobile devices, and network devices. Offering attack surface reduction, detection, and response to threats and automated investigation and remediation.","entityRanges":[],"key":"4t0l4","type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":107,"length":27},{"length":27,"style":"bgcolor-rgb(255,255,255)","offset":107},{"style":"fontsize-16","offset":107,"length":27},{"length":27,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":107}]},{"inlineStyleRanges":[],"key":"1irbc","entityRanges":[],"depth":0,"data":{},"type":"unstyled","text":"Microsoft Defender for Endpoint is available in the following licenses:"},{"data":{},"key":"6p3gk","type":"unordered-list-item","text":"Microsoft Defender for Endpoint Plan 1 (P1)","inlineStyleRanges":[],"depth":0,"entityRanges":[]},{"key":"3ctec","text":"Microsoft Defender for Endpoint Plan 2 (P2)","data":{},"type":"unordered-list-item","entityRanges":[],"depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":43,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":43,"offset":0},{"style":"fontsize-16","offset":0,"length":43},{"offset":0,"length":43,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}]},{"depth":0,"entityRanges":[],"key":"5p0ui","data":{"margin-left":"1.5em"},"text":"Microsoft Defender for Endpoint P1 is included as part of Microsoft 365 E3/A3 licenses","inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":34},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":34},{"length":34,"offset":0,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":34,"offset":0}],"type":"unordered-list-item"},{"key":"22m8u","text":"Microsoft Defender for Endpoint P2 is available as part of the following plans: Windows 11 Enterprise E5/A5, Windows 10 Enterprise E5/A5, Microsoft 365 E5/A5/G5 (which includes Windows 10 or Windows 11 Enterprise E5), Microsoft 365 E5/A5/G5/F5 Security, Microsoft 365 F5 Security & Compliance","data":{},"type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"key":"tqg1","data":{},"type":"header-two","depth":0,"entityRanges":[],"inlineStyleRanges":[],"text":"What's Microsoft Defender for Identity?"},{"key":"6m0cp","inlineStyleRanges":[],"data":{},"entityRanges":[{"key":3,"length":1,"offset":0}],"text":" ","type":"atomic","depth":0},{"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"key":"73h3t","depth":0,"data":{},"text":"Formally known as Azure Advanced Threat Protection or Azure ATP for short. Microsoft Defender for Identity also replaces Microsoft Advanced Threat Analytics (ATA). Microsoft Defender for Identity is Microsoft 365's solution for your on-premises Active Directory security. It uses a variety of signals to detect advanced threats. It can detect compromised identities, and malicious actions targeting your organization. In short, you install a small piece of software on your Active Directory (AD) servers and then Microsoft will collect a lot of security-related information and show you alerts in the Microsoft 365 portal."},{"entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[],"data":{},"text":"Microsoft Defender for Identity is available with the following licenses:","key":"2s87f"},{"depth":0,"entityRanges":[],"key":"cj3np","text":"Enterprise Mobility + Security E5/A5 (EMS E5 & EMS A5)","data":{},"type":"unordered-list-item","inlineStyleRanges":[]},{"type":"unordered-list-item","text":"Microsoft 365 E5/A5/G5","key":"etoqg","inlineStyleRanges":[],"data":{},"entityRanges":[],"depth":0},{"text":"Microsoft 365 E5/A5/G5/F5 Security","inlineStyleRanges":[],"type":"unordered-list-item","entityRanges":[],"key":"3h2rm","depth":0,"data":{}},{"entityRanges":[],"inlineStyleRanges":[],"text":"Microsoft F5 Security & Compliance","type":"unordered-list-item","key":"m3v5","depth":0,"data":{}},{"key":"9mmst","data":{},"entityRanges":[],"text":"Microsoft Defender for Identity (standalone license)","depth":0,"type":"unordered-list-item","inlineStyleRanges":[]},{"key":"8ta8u","text":"What's Microsoft Defender for Cloud Apps?","data":{},"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"depth":0},{"depth":0,"data":{},"inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"key":4,"offset":0}],"type":"atomic","key":"eshbt"},{"data":{},"key":"7ere8","entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"style":"color-rgb(23,23,23)","length":221,"offset":87},{"offset":87,"style":"bgcolor-rgb(255,255,255)","length":221},{"offset":87,"length":221,"style":"fontsize-16"},{"style":"fontfamily-Segoe UI\", SegoeUI, \"Helvetica Neue\", Helvetica, Arial, sans-serif","offset":87,"length":221}],"text":"Formally known as Microsoft Cloud App Security, Microsoft Defender for Cloud Apps is a Cloud Access Security Broker (CASB). In short, it will pull in data from other cloud apps/firewalls so you can see what cloud apps your users are using, how much they are using them, and apply policies to limit their use.","depth":0},{"depth":0,"text":"Microsoft Defender for Cloud Apps is available with the following licenses:","entityRanges":[],"key":"e0k54","type":"unstyled","data":{},"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":75,"offset":0},{"length":75,"style":"bgcolor-rgb(255,255,255)","offset":0},{"offset":0,"length":75,"style":"fontsize-16"},{"length":75,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}]},{"key":"b8hhe","data":{},"text":"Microsoft 365 E5","type":"unordered-list-item","entityRanges":[],"depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":16,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":16,"offset":0},{"offset":0,"style":"fontsize-16","length":16},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":16}]},{"key":"5ei20","text":"Microsoft 365 E5 Security","type":"unordered-list-item","entityRanges":[],"inlineStyleRanges":[],"depth":0,"data":{}},{"depth":0,"text":"Microsoft 365 E5 Compliance","type":"unordered-list-item","entityRanges":[],"key":"cc99v","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"text":"Enterprise Mobility + Security E5 (EMS E5)","key":"dq0vg","inlineStyleRanges":[],"data":{},"depth":0,"type":"unordered-list-item"},{"inlineStyleRanges":[],"type":"unordered-list-item","depth":0,"key":"33uvi","entityRanges":[],"text":"Microsoft Cloud App Security (standalone license)","data":{}},{"key":"fka90","entityRanges":[],"type":"unordered-list-item","depth":0,"data":{},"inlineStyleRanges":[],"text":"Microsoft 365 Education A3/A5"},{"type":"unordered-list-item","depth":0,"key":"4erls","text":"Office 365 E5","inlineStyleRanges":[],"entityRanges":[],"data":{}},{"inlineStyleRanges":[],"key":"4lsen","text":"","type":"unstyled","data":{},"depth":0,"entityRanges":[]}],"entityMap":{"0":{"data":{"height":"auto","alignment":"none","width":"auto","alt":"Microsoft Defender","src":"https://i.ibb.co/MDMyDQt/Microsoft-Defender.png"},"type":"IMAGE","mutability":"MUTABLE"},"1":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","alt":"Microsoft Defender for Office 365","alignment":"none","src":"https://i.ibb.co/nznXdXd/Microsoft-Defender-for-Office-365.png","height":"auto"}},"2":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alt":"Microsoft Defender for Endpoint","height":"auto","alignment":"none","src":"https://i.ibb.co/vvDtZ8n/Microsoft-Defender-for-Endpoint.png"}},"3":{"mutability":"MUTABLE","data":{"alt":"Microsoft Defender for Identity","height":"auto","src":"https://i.ibb.co/26Vmy9V/Microsoft-Defender-for-Identity.png","alignment":"none","width":"auto"},"type":"IMAGE"},"4":{"data":{"width":"auto","alt":"Microsoft Defender for Cloud Apps","height":"auto","src":"https://i.ibb.co/qDkQcfX/Microsoft-Defender-for-Cloud-Apps.png","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"}}},"featuredImage":"https://i.ibb.co/MDMyDQt/Microsoft-Defender.png","slug":"Whats-Microsoft-365-Defender-z8EMM9Eu_","sectionId":"QScYfSu74","id":"z8EMM9Eu_","images":["https://i.ibb.co/0mYRcpQ/incidents.png","https://i.ibb.co/YQkzpMx/microsoft-secure-score.png","https://i.ibb.co/SRGRqjL/secure-score.png","https://i.ibb.co/W2Rkc3c/view-resolution-information.png","https://i.ibb.co/MDMyDQt/Microsoft-Defender.png","https://i.ibb.co/nznXdXd/Microsoft-Defender-for-Office-365.png","https://i.ibb.co/vvDtZ8n/Microsoft-Defender-for-Endpoint.png","https://i.ibb.co/26Vmy9V/Microsoft-Defender-for-Identity.png","https://i.ibb.co/qDkQcfX/Microsoft-Defender-for-Cloud-Apps.png","https://i.ibb.co/qDkQcfX/Microsoft-Defender-for-Cloud-Apps.png"],"publish":true,"datePublished":"2022/5/26","description":"Microsoft 365 Defender is a suite of security technology to detect security risks, investigate attacks, and prevent harmful activities."},
      nextContentSlug: 'Whats-Microsoft-Defender-for-identity-Kye_yNLxA',
      previousContentSlug: 'Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged((user) => {
      if (user) {
        getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
          if (!userAcct.completedContent) {
            userAcct.completedContent = []
          }
          this.setState({userAcct})
        })
      }
    })

    if (isBrowser()) {
      document.addEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: true})
    }
  }

  componentWillUnmount() {
    if (isBrowser() && this.state.isTrackScrolling)
      document.removeEventListener('scroll', this.trackScrolling);

    this.onAuthStateChangedListener()
  }

  trackScrolling() {
    if (document.body.scrollHeight * .8 < window.innerHeight + window.scrollY) {
      this.setHasCompletedContent(true)
    }
  }

  setHasCompletedContent(val) {
    if (val === true) {
      document.removeEventListener('scroll', this.trackScrolling);
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
        "Microsoft",
        "Microsoft 365",
        "Office 365",
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
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
                <div><p></p>
<div ><img src="https://i.ibb.co/MDMyDQt/Microsoft-Defender.png" alt="Microsoft Defender" style="height: auto;width: auto"/></div>
<p>Microsoft 365 Defender is a suite of security technology to detect security risks, investigate attacks, and prevent harmful activities. It includes several security solutions including Microsoft Defender for Endpoint, Microsoft Defender for Office 365, Microsoft Defender for Identity, Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP), and Microsoft Defender for Cloud Apps formally known as Microsoft Cloud App Security. But typically, when someone says "What's Microsoft 365 Defender?" they are referring to the Microsoft 365 Defender portal.</p>
<h2>Microsoft Defender for Office 365</h2>
<div ><img src="https://i.ibb.co/nznXdXd/Microsoft-Defender-for-Office-365.png" alt="Microsoft Defender for Office 365" style="height: auto;width: auto"/></div>
<p>We won't go into all the features you can access for Microsoft Defender for Office 365 because it isn't all covered on the MS-500 test and quite simply, it's a lot. Plus, some of the sections I've broken into different articles. But let's cover some of the basics.</p>
<h3>What is Defender for Office 365?</h3>
<p>Every Office 365 subscription comes with some security functionality. Depending on your subscriptions is depending on how many additional security capabilities you'll receive. In Defender for Office 365, there are three main packages tied to your subscription type:</p>
<ul>
<li>Exchange Online Protection (EOP)</li>
<li>Microsoft Defender for Office 365 Plan 1 (Defender for Office P1)</li>
<li>Microsoft Defender for Office 365 Plan 2 (Defender for Office P2)</li>
</ul>
<h3>Exchange Online Protection</h3>
<p>Exchange Online Protection is available to every license that has an Exchange Online mailbox license. In short, it's the basic security package you receive with a Microsoft 365 mailbox. It protects against spam, phishing attacks, malware, and bulk mail. It has spoof intelligence, impersonation detection, and quarantine capabilities. You also get access to the Audit logs and message trace.</p>
<h3>Defender for Office P1</h3>
<p>Defender for Office P1 has all the capabilities of Exchange Online Protection plus some more. For example, you'll get access to safe attachments, safe links, Defender for Office 365 protection for SharePoint Online, Teams, and OneDrive for Business. User and domain impersonation protection, alerts, and SIEM integration API for alerts and detections.</p>
<h3>Defender for Office P2</h3>
<p>Defender for Office P2 includes everything that Defender for Office P1 includes (including the Exchange Online Protection) plus more. You'll gain access to the Threat Explorer, Threat Trackers, and Campaign views. You'll also gain access to Automated Investigation and Response (AIR) capabilities.</p>
<h2>What's Microsoft Defender for Endpoint?</h2>
<div ><img src="https://i.ibb.co/vvDtZ8n/Microsoft-Defender-for-Endpoint.png" alt="Microsoft Defender for Endpoint" style="height: auto;width: auto"/></div>
<p>Formally known as Windows Defender Advanced Threat Protection (ATP) then later known as Microsoft Defender <span >Advanced Threat Protection </span>(ATP). Microsoft Defender for Endpoint is Microsoft's complete endpoint security package. Microsoft Defender for Endpoint offers security for clients, servers, mobile devices, and network devices. Offering attack surface reduction, detection, and response to threats and automated investigation and remediation.</p>
<p>Microsoft Defender for Endpoint is available in the following licenses:</p>
<ul>
<li>Microsoft Defender for Endpoint Plan 1 (P1)</li>
<li><span >Microsoft Defender for Endpoint Plan 2 (P2)</span></li>
<li ><span >Microsoft Defender for Endpoint P1</span> is included as part of Microsoft 365 E3/A3 licenses</li>
<li>Microsoft Defender for Endpoint P2 is available as part of the following plans: Windows 11 Enterprise E5/A5, Windows 10 Enterprise E5/A5, Microsoft 365 E5/A5/G5 (which includes Windows 10 or Windows 11 Enterprise E5), Microsoft 365 E5/A5/G5/F5 Security, Microsoft 365 F5 Security &amp; Compliance</li>
</ul>
<h2>What's Microsoft Defender for Identity?</h2>
<div ><img src="https://i.ibb.co/26Vmy9V/Microsoft-Defender-for-Identity.png" alt="Microsoft Defender for Identity" style="height: auto;width: auto"/></div>
<p>Formally known as Azure Advanced Threat Protection or Azure ATP for short. Microsoft Defender for Identity also replaces Microsoft Advanced Threat Analytics (ATA). Microsoft Defender for Identity is Microsoft 365's solution for your on-premises Active Directory security. It uses a variety of signals to detect advanced threats. It can detect compromised identities, and malicious actions targeting your organization. In short, you install a small piece of software on your Active Directory (AD) servers and then Microsoft will collect a lot of security-related information and show you alerts in the Microsoft 365 portal.</p>
<p>Microsoft Defender for Identity is available with the following licenses:</p>
<ul>
<li>Enterprise Mobility + Security E5/A5 (EMS E5 &amp; EMS A5)</li>
<li>Microsoft 365 E5/A5/G5</li>
<li>Microsoft 365 E5/A5/G5/F5 Security</li>
<li>Microsoft F5 Security &amp; Compliance</li>
<li>Microsoft Defender for Identity (standalone license)</li>
</ul>
<h2>What's Microsoft Defender for Cloud Apps?</h2>
<div ><img src="https://i.ibb.co/qDkQcfX/Microsoft-Defender-for-Cloud-Apps.png" alt="Microsoft Defender for Cloud Apps" style="height: auto;width: auto"/></div>
<p>Formally known as Microsoft Cloud App Security, Microsoft Defender for Cloud Apps is a <span >Cloud Access Security Broker (CASB). In short, it will pull in data from other cloud apps/firewalls so you can see what cloud apps your users are using, how much they are using them, and apply policies to limit their use.</span></p>
<p><span >Microsoft Defender for Cloud Apps is available with the following licenses:</span></p>
<ul>
<li><span >Microsoft 365 E5</span></li>
<li>Microsoft 365 E5 Security</li>
<li>Microsoft 365 E5 Compliance</li>
<li>Enterprise Mobility + Security E5 (EMS E5)</li>
<li>Microsoft Cloud App Security (standalone license)</li>
<li>Microsoft 365 Education A3/A5</li>
<li>Office 365 E5</li>
</ul>
<p></p>
</div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:3 }}>
                  <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                  <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos/>}>Next</Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{ mt: 3 }}>
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
