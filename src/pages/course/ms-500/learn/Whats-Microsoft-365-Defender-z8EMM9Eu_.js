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
      article: {"images":["https://i.ibb.co/0mYRcpQ/incidents.png","https://i.ibb.co/YQkzpMx/microsoft-secure-score.png","https://i.ibb.co/SRGRqjL/secure-score.png","https://i.ibb.co/W2Rkc3c/view-resolution-information.png","https://i.ibb.co/MDMyDQt/Microsoft-Defender.png","https://i.ibb.co/nznXdXd/Microsoft-Defender-for-Office-365.png","https://i.ibb.co/vvDtZ8n/Microsoft-Defender-for-Endpoint.png","https://i.ibb.co/26Vmy9V/Microsoft-Defender-for-Identity.png","https://i.ibb.co/qDkQcfX/Microsoft-Defender-for-Cloud-Apps.png","https://i.ibb.co/qDkQcfX/Microsoft-Defender-for-Cloud-Apps.png"],"article":{"blocks":[{"key":"8gppo","depth":0,"entityRanges":[],"inlineStyleRanges":[],"data":{},"text":"","type":"unstyled"},{"inlineStyleRanges":[],"data":{},"depth":0,"text":" ","entityRanges":[{"offset":0,"key":0,"length":1}],"type":"atomic","key":"1venf"},{"text":"Microsoft 365 Defender is a suite of security technology to detect security risks, investigate attacks, and prevent harmful activities. It includes several security solutions including Microsoft Defender for Endpoint, Microsoft Defender for Office 365, Microsoft Defender for Identity, Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP), and Microsoft Defender for Cloud Apps formally known as Microsoft Cloud App Security. But typically, when someone says \"What's Microsoft 365 Defender?\" they are referring to the Microsoft 365 Defender portal.","inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"28dm3","depth":0,"data":{}},{"inlineStyleRanges":[],"key":"2a0gn","text":"Microsoft Defender for Office 365","data":{},"entityRanges":[],"depth":0,"type":"header-two"},{"text":" ","data":{},"entityRanges":[{"key":1,"length":1,"offset":0}],"key":"c8500","inlineStyleRanges":[],"type":"atomic","depth":0},{"entityRanges":[],"depth":0,"key":"ehqsn","data":{},"inlineStyleRanges":[],"text":"We won't go into all the features you can access for Microsoft Defender for Office 365 because it isn't all covered on the MS-500 test and quite simply, it's a lot. Plus, some of the sections I've broken into different articles. But let's cover some of the basics.","type":"unstyled"},{"type":"header-three","depth":0,"data":{},"text":"What is Defender for Office 365?","entityRanges":[],"inlineStyleRanges":[],"key":"dptns"},{"text":"Every Office 365 subscription comes with some security functionality. Depending on your subscriptions is depending on how many additional security capabilities you'll receive. In Defender for Office 365, there are three main packages tied to your subscription type:","key":"74ncu","data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"unstyled"},{"data":{},"depth":0,"text":"Exchange Online Protection (EOP)","entityRanges":[],"type":"unordered-list-item","key":"bu7ob","inlineStyleRanges":[]},{"key":"199md","data":{},"text":"Microsoft Defender for Office 365 Plan 1 (Defender for Office P1)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"inlineStyleRanges":[],"depth":0,"data":{},"type":"unordered-list-item","key":"fog2d","entityRanges":[],"text":"Microsoft Defender for Office 365 Plan 2 (Defender for Office P2)"},{"inlineStyleRanges":[],"depth":0,"data":{},"text":"Exchange Online Protection","key":"1ubl6","entityRanges":[],"type":"header-three"},{"entityRanges":[],"text":"Exchange Online Protection is available to every license that has an Exchange Online mailbox license. In short, it's the basic security package you receive with a Microsoft 365 mailbox. It protects against spam, phishing attacks, malware, and bulk mail. It has spoof intelligence, impersonation detection, and quarantine capabilities. You also get access to the Audit logs and message trace.","depth":0,"data":{},"key":"1c16m","type":"unstyled","inlineStyleRanges":[]},{"inlineStyleRanges":[],"type":"header-three","text":"Defender for Office P1","key":"418lc","depth":0,"entityRanges":[],"data":{}},{"data":{},"depth":0,"text":"Defender for Office P1 has all the capabilities of Exchange Online Protection plus some more. For example, you'll get access to safe attachments, safe links, Defender for Office 365 protection for SharePoint Online, Teams, and OneDrive for Business. User and domain impersonation protection, alerts, and SIEM integration API for alerts and detections.","type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"key":"6t9gm"},{"key":"22ob3","data":{},"type":"header-three","entityRanges":[],"inlineStyleRanges":[],"text":"Defender for Office P2","depth":0},{"inlineStyleRanges":[],"entityRanges":[],"text":"Defender for Office P2 includes everything that Defender for Office P1 includes (including the Exchange Online Protection) plus more. You'll gain access to the Threat Explorer, Threat Trackers, and Campaign views. You'll also gain access to Automated Investigation and Response (AIR) capabilities.","type":"unstyled","data":{},"depth":0,"key":"f6met"},{"inlineStyleRanges":[],"entityRanges":[],"text":"What's Microsoft Defender for Endpoint?","key":"esga0","depth":0,"data":{},"type":"header-two"},{"data":{},"entityRanges":[{"offset":0,"key":2,"length":1}],"key":"a8rrv","inlineStyleRanges":[],"type":"atomic","text":" ","depth":0},{"depth":0,"type":"unstyled","text":"Formally known as Windows Defender Advanced Threat Protection (ATP) then later known as Microsoft Defender Advanced Threat Protection (ATP). Microsoft Defender for Endpoint is Microsoft's complete endpoint security package. Microsoft Defender for Endpoint offers security for clients, servers, mobile devices, and network devices. Offering attack surface reduction, detection, and response to threats and automated investigation and remediation.","key":"4t0l4","entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":107,"length":27},{"style":"bgcolor-rgb(255,255,255)","length":27,"offset":107},{"length":27,"style":"fontsize-16","offset":107},{"offset":107,"length":27,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}]},{"depth":0,"text":"Microsoft Defender for Endpoint is available in the following licenses:","inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"1irbc","data":{}},{"depth":0,"data":{},"inlineStyleRanges":[],"text":"Microsoft Defender for Endpoint Plan 1 (P1)","type":"unordered-list-item","entityRanges":[],"key":"6p3gk"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":43,"offset":0},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":43},{"offset":0,"length":43,"style":"fontsize-16"},{"length":43,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"text":"Microsoft Defender for Endpoint Plan 2 (P2)","key":"3ctec","type":"unordered-list-item"},{"inlineStyleRanges":[{"length":34,"style":"color-rgb(33,37,41)","offset":0},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":34},{"length":34,"style":"fontsize-16","offset":0},{"length":34,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"key":"5p0ui","depth":0,"data":{"margin-left":"1.5em"},"entityRanges":[],"text":"Microsoft Defender for Endpoint P1 is included as part of Microsoft 365 E3/A3 licenses","type":"unordered-list-item"},{"key":"22m8u","text":"Microsoft Defender for Endpoint P2 is available as part of the following plans: Windows 11 Enterprise E5/A5, Windows 10 Enterprise E5/A5, Microsoft 365 E5/A5/G5 (which includes Windows 10 or Windows 11 Enterprise E5), Microsoft 365 E5/A5/G5/F5 Security, Microsoft 365 F5 Security & Compliance","entityRanges":[],"depth":0,"type":"unordered-list-item","inlineStyleRanges":[],"data":{}},{"entityRanges":[],"text":"What's Microsoft Defender for Identity?","depth":0,"data":{},"inlineStyleRanges":[],"key":"tqg1","type":"header-two"},{"key":"6m0cp","type":"atomic","text":" ","inlineStyleRanges":[],"depth":0,"data":{},"entityRanges":[{"key":3,"length":1,"offset":0}]},{"entityRanges":[],"data":{},"type":"unstyled","text":"Formally known as Azure Advanced Threat Protection or Azure ATP for short. Microsoft Defender for Identity also replaces Microsoft Advanced Threat Analytics (ATA). Microsoft Defender for Identity is Microsoft 365's solution for your on-premises Active Directory security. It uses a variety of signals to detect advanced threats. It can detect compromised identities, and malicious actions targeting your organization. In short, you install a small piece of software on your Active Directory (AD) servers and then Microsoft will collect a lot of security-related information and show you alerts in the Microsoft 365 portal.","depth":0,"key":"73h3t","inlineStyleRanges":[]},{"data":{},"text":"Microsoft Defender for Identity is available with the following licenses:","key":"2s87f","depth":0,"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled"},{"inlineStyleRanges":[],"data":{},"depth":0,"text":"Enterprise Mobility + Security E5/A5 (EMS E5 & EMS A5)","type":"unordered-list-item","entityRanges":[],"key":"cj3np"},{"type":"unordered-list-item","key":"etoqg","data":{},"depth":0,"text":"Microsoft 365 E5/A5/G5","entityRanges":[],"inlineStyleRanges":[]},{"data":{},"key":"3h2rm","text":"Microsoft 365 E5/A5/G5/F5 Security","type":"unordered-list-item","entityRanges":[],"depth":0,"inlineStyleRanges":[]},{"data":{},"type":"unordered-list-item","entityRanges":[],"text":"Microsoft F5 Security & Compliance","inlineStyleRanges":[],"key":"m3v5","depth":0},{"key":"9mmst","depth":0,"data":{},"entityRanges":[],"type":"unordered-list-item","inlineStyleRanges":[],"text":"Microsoft Defender for Identity (standalone license)"},{"key":"8ta8u","type":"header-two","text":"What's Microsoft Defender for Cloud Apps?","data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":4,"offset":0}],"type":"atomic","text":" ","key":"eshbt","data":{}},{"key":"7ere8","data":{},"depth":0,"text":"Formally known as Microsoft Cloud App Security, Microsoft Defender for Cloud Apps is a Cloud Access Security Broker (CASB). In short, it will pull in data from other cloud apps/firewalls so you can see what cloud apps your users are using, how much they are using them, and apply policies to limit their use.","inlineStyleRanges":[{"length":221,"offset":87,"style":"color-rgb(23,23,23)"},{"offset":87,"style":"bgcolor-rgb(255,255,255)","length":221},{"style":"fontsize-16","offset":87,"length":221},{"offset":87,"style":"fontfamily-Segoe UI\", SegoeUI, \"Helvetica Neue\", Helvetica, Arial, sans-serif","length":221}],"type":"unstyled","entityRanges":[]},{"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":75},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":75},{"offset":0,"style":"fontsize-16","length":75},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":75,"offset":0}],"type":"unstyled","text":"Microsoft Defender for Cloud Apps is available with the following licenses:","depth":0,"key":"e0k54","data":{},"entityRanges":[]},{"key":"b8hhe","data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[{"offset":0,"length":16,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":16,"offset":0},{"style":"fontsize-16","offset":0,"length":16},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":16,"offset":0}],"text":"Microsoft 365 E5","type":"unordered-list-item"},{"key":"5ei20","inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"unordered-list-item","depth":0,"text":"Microsoft 365 E5 Security"},{"key":"cc99v","inlineStyleRanges":[],"data":{},"entityRanges":[],"depth":0,"text":"Microsoft 365 E5 Compliance","type":"unordered-list-item"},{"depth":0,"data":{},"type":"unordered-list-item","entityRanges":[],"key":"dq0vg","inlineStyleRanges":[],"text":"Enterprise Mobility + Security E5 (EMS E5)"},{"key":"33uvi","entityRanges":[],"text":"Microsoft Cloud App Security (standalone license)","depth":0,"data":{},"type":"unordered-list-item","inlineStyleRanges":[]},{"depth":0,"data":{},"entityRanges":[],"key":"fka90","type":"unordered-list-item","text":"Microsoft 365 Education A3/A5","inlineStyleRanges":[]},{"inlineStyleRanges":[],"entityRanges":[],"text":"Office 365 E5","type":"unordered-list-item","key":"4erls","depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","data":{},"entityRanges":[],"key":"4lsen","text":""}],"entityMap":{"0":{"data":{"width":"auto","alignment":"none","alt":"Microsoft Defender","height":"auto","src":"https://i.ibb.co/MDMyDQt/Microsoft-Defender.png"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"type":"IMAGE","data":{"height":"auto","alt":"Microsoft Defender for Office 365","width":"auto","alignment":"none","src":"https://i.ibb.co/nznXdXd/Microsoft-Defender-for-Office-365.png"},"mutability":"MUTABLE"},"2":{"data":{"height":"auto","alt":"Microsoft Defender for Endpoint","src":"https://i.ibb.co/vvDtZ8n/Microsoft-Defender-for-Endpoint.png","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"3":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","alt":"Microsoft Defender for Identity","src":"https://i.ibb.co/26Vmy9V/Microsoft-Defender-for-Identity.png","alignment":"none"}},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Microsoft Defender for Cloud Apps","width":"auto","src":"https://i.ibb.co/qDkQcfX/Microsoft-Defender-for-Cloud-Apps.png","height":"auto","alignment":"none"}}}},"title":"What's Microsoft 365 Defender?","datePublished":"2022/5/26","featuredImage":"https://i.ibb.co/MDMyDQt/Microsoft-Defender.png","type":"article","sectionId":"QScYfSu74","slug":"Whats-Microsoft-365-Defender-z8EMM9Eu_","id":"z8EMM9Eu_","publish":true,"description":"Microsoft 365 Defender is a suite of security technology to detect security risks, investigate attacks, and prevent harmful activities."},
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
