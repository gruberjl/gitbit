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
      path: '/course/ms-500/learn/Whats-Microsoft-Defender-for-Office-365-EnPyp7ukN',
      article: {"title":"What's Microsoft Defender for Office 365?","slug":"Whats-Microsoft-Defender-for-Office-365-EnPyp7ukN","description":"The meat and potatoes of Microsoft 365 security. The Microsoft Defender for Office 365 secures your entire Microsoft 365 environment.","id":"EnPyp7ukN","images":["https://i.ibb.co/bdVRPQS/Start-recording-user-and-admin-activity.png","https://i.ibb.co/WcwKY2G/Microsoft-365-incidents-and-alerts.png","https://i.ibb.co/vzYyJLJ/microsoft-365-defender-hunting.png","https://i.ibb.co/0c1xcTS/Microsoft-365-defender-submissions.png","https://i.ibb.co/bRBczN1/microsoft-365-defender-actions-and-submissions.png","https://i.ibb.co/MR4hf5t/Secure-Score.png","https://i.ibb.co/ZzLvqcC/learning-hub.png","https://i.ibb.co/q9Nt4Wj/email-and-collaboration-review.png","https://i.ibb.co/ZfFfxVb/attack-simulation-training.png","https://i.ibb.co/0QbcJvM/Policies-and-rules.png","https://i.ibb.co/FY7m9H1/Microsoft-365-Defender-Reports.png","https://i.ibb.co/tJCZBwt/Microsoft-365-audit-logs.png","https://i.ibb.co/vdM5BtG/Microsoft-365-Permissions-and-roles.png","https://i.ibb.co/kBf0jbb/Microsoft-365-Defender-Settings.png","https://i.ibb.co/sP6Q3DQ/Microsoft-365-Defender-More-Resources.png"],"type":"article","featuredImage":"https://i.ibb.co/WcwKY2G/Microsoft-365-incidents-and-alerts.png","sectionId":"QScYfSu74","datePublished":"2022/5/26","publish":true,"article":{"blocks":[{"text":"The meat and potatoes of Microsoft 365 security. The Microsoft Defender for Office 365 secures your entire Microsoft 365 environment. It's where you can review weaknesses in your security, review alerts and incidents, and harden your phishing/spam protection. Oddly enough, I find it to be one of the least covered admin centers in the MS-500. So we'll go over everything quickly but I'd recommend spending some time learning the admin center for yourself.","entityRanges":[],"depth":0,"type":"unstyled","key":"5r8mo","inlineStyleRanges":[],"data":{}},{"text":"Incidents & alerts","inlineStyleRanges":[],"depth":0,"key":"2kge9","data":{},"entityRanges":[],"type":"header-two"},{"entityRanges":[{"key":0,"length":1,"offset":0}],"key":"4r2gv","text":" ","type":"atomic","depth":0,"data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[],"type":"unstyled","depth":0,"data":{},"key":"sp63","entityRanges":[{"key":1,"offset":301,"length":12}],"text":"This is where Microsoft will alert you that it has found a security attack that may have penetrated your environment. These alerts can range from \"Unusual volume of file deletion\" to \"Honeytoken activity on endpoint\" To edit the alerts you see go to Microsoft 365 compliance admin center > Policies > Alert policy. Also, you may not see all of the alerts if auditing isn't turned on."},{"entityRanges":[],"type":"header-three","text":"How to turn auditing on","data":{},"inlineStyleRanges":[],"key":"4iq5c","depth":0},{"inlineStyleRanges":[],"key":"dd595","depth":0,"type":"atomic","data":{},"text":" ","entityRanges":[{"length":1,"key":2,"offset":0}]},{"type":"unstyled","text":"1. Go to Microsoft 365 compliance admin center > Audit.","data":{},"depth":0,"key":"6dsos","entityRanges":[{"key":3,"length":5,"offset":49}],"inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[],"key":"493ff","text":"2. Click Start recording user and admin activity. (If you don't see the blue bar auditing is already turned on)","type":"unstyled"},{"depth":0,"data":{},"type":"header-two","text":"Hunting","entityRanges":[],"key":"b6uvv","inlineStyleRanges":[]},{"entityRanges":[{"key":4,"length":1,"offset":0}],"type":"atomic","depth":0,"inlineStyleRanges":[],"text":" ","key":"1t1de","data":{}},{"data":{},"inlineStyleRanges":[],"entityRanges":[{"length":67,"offset":300,"key":5}],"depth":0,"text":"Advanced hunting is where you can Kusto query language to explore 30 days of data across your environment. You can use the hunting section of the Microsoft 365 Defender admin center to find advanced threats in your environment. Microsoft has a number of queries already defined that you can explore. https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries","key":"2oec","type":"unstyled"},{"key":"d2sfc","data":{},"type":"header-two","depth":0,"entityRanges":[],"inlineStyleRanges":[],"text":"Actions & submissions"},{"depth":0,"data":{},"entityRanges":[{"length":1,"offset":0,"key":6}],"type":"atomic","key":"4qkfc","text":" ","inlineStyleRanges":[]},{"data":{},"key":"6pmqs","text":"The Action center replaces the Office 365 Security & Compliance Center and the Action center in the Microsoft Defender Security Center. It unifies the action center for Defender for Endpoint and Defender for Office 365. The action center can be used to perform the following:","type":"unstyled","inlineStyleRanges":[{"length":13,"style":"BOLD","offset":4},{"style":"color-rgb(23,23,23)","length":39,"offset":31},{"style":"bgcolor-rgb(255,255,255)","length":39,"offset":31},{"offset":31,"style":"fontsize-16","length":39},{"style":"fontfamily-Segoe UI\", SegoeUI, \"Helvetica Neue\", Helvetica, Arial, sans-serif","length":39,"offset":31}],"depth":0,"entityRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"type":"unordered-list-item","depth":0,"data":{},"key":"b8ima","text":"Approve remediation (including automated remediation)"},{"depth":0,"inlineStyleRanges":[],"text":"Review already approved remediation actions","data":{},"type":"unordered-list-item","key":"easud","entityRanges":[]},{"inlineStyleRanges":[],"type":"unordered-list-item","text":"Audit completed actions","entityRanges":[],"data":{},"key":"ada0d","depth":0},{"depth":0,"entityRanges":[{"length":1,"offset":0,"key":7}],"type":"atomic","inlineStyleRanges":[],"text":" ","key":"9mgrd","data":{}},{"data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[{"length":11,"style":"BOLD","offset":4},{"style":"color-rgb(33,37,41)","offset":69,"length":246},{"style":"bgcolor-rgb(255,255,255)","offset":69,"length":246},{"style":"fontsize-16","length":246,"offset":69},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":246,"offset":69}],"entityRanges":[],"key":"fd5fk","text":"The Submissions tab is where you can submit emails, attachments, and URLs to Microsoft for scanning and updating their security. From the submissions tab, you can also see emails users submitted as Phishing attacks and then submit them to Microsoft for analysis or flag them as phishing, junk, or not threats found."},{"inlineStyleRanges":[],"text":"Secure score","data":{},"depth":0,"key":"d1lvu","type":"header-two","entityRanges":[]},{"type":"atomic","data":{},"key":"1l7ag","text":" ","depth":0,"entityRanges":[{"key":8,"length":1,"offset":0}],"inlineStyleRanges":[]},{"entityRanges":[],"type":"unstyled","text":"The Secure score is Microsoft rating the security of your environment and making recommendations to improve it. They'll make recommendations to your Microsoft 365 environment and even your on-premises devices if you connect your devices to the Microsoft 365 Defender portal. For example, it will recommend you turn on the user risk policy which will use intelligence to determine if someone's Microsoft 365 account is being or has been maliciously compromised.","key":"4sblc","depth":0,"inlineStyleRanges":[],"data":{}},{"text":"Learning hub","data":{},"depth":0,"type":"header-two","key":"37dpf","entityRanges":[],"inlineStyleRanges":[]},{"text":" ","key":"86r08","entityRanges":[{"length":1,"offset":0,"key":9}],"inlineStyleRanges":[],"depth":0,"data":{},"type":"atomic"},{"entityRanges":[],"inlineStyleRanges":[],"key":"9g4g6","data":{},"depth":0,"type":"unstyled","text":"The learning hub is a place where you can learn how to better defend your Microsoft 365 and on-premises environment. The learning hub has several links to helpful videos to guide you through the setup of different parts of the Microsoft 365 security environment."},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"text":"Email & collaboration review","key":"1o4pv","type":"header-two","depth":0},{"key":"79t4u","inlineStyleRanges":[],"text":" ","type":"atomic","depth":0,"entityRanges":[{"offset":0,"key":10,"length":1}],"data":{}},{"key":"5gcdk","text":"The email & collaboration review tab is where you can review the organization's quarantine and restricted users. The quarantine is where any message that is sent to quarantine will appear for admins. In short, if a user says they should have received an email and haven't, you can go to the quarantine to retrieve it. The restricted users' section is where you can go to unblock a user account that is blocked from sending emails. In short, if a user's account is compromised and is sending out spam Microsoft will block the account from sending emails. After you change the password, configure MFA, and train the user again you can then go to the restricted users' section to unblock their account.","entityRanges":[],"data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":11,"offset":117},{"offset":322,"style":"BOLD","length":16}]},{"key":"4kpqn","depth":0,"entityRanges":[],"type":"header-two","text":"Attack simulation training","data":{},"inlineStyleRanges":[]},{"entityRanges":[{"offset":0,"length":1,"key":11}],"key":"4ereq","text":" ","inlineStyleRanges":[],"depth":0,"type":"atomic","data":{}},{"text":"The attack simulation training is where you can send setup and send fake phishing emails to your users where they can either flag it as phishing or fall victim to your fake phishing attack. If they fall victim to the fake phishing attack they can be automatically assigned a training where they can learn to spot fake phishing attacks.","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[],"data":{},"key":"2c3s1"},{"key":"fhjjd","entityRanges":[],"type":"header-two","inlineStyleRanges":[],"text":"Policies & rules","depth":0,"data":{}},{"depth":0,"entityRanges":[{"offset":0,"key":12,"length":1}],"type":"atomic","data":{},"key":"99ke2","inlineStyleRanges":[],"text":" "},{"type":"unstyled","inlineStyleRanges":[],"data":{},"key":"c0pmk","depth":0,"text":"Under policies & rules, you can set up the threat policies for your Microsoft 365 tenant. You can configure anti-phishing, anti-spam, and anti-malware policies. You can also configure your allow/blocked email addresses and domain rules. The policies & rules section is probably the most common section, it's where you can control most of the security in your environment. It's also where you can manage your alerts. You can customize who is alerted on what event.","entityRanges":[]},{"data":{},"entityRanges":[],"key":"310ip","inlineStyleRanges":[],"type":"header-two","text":"Reports","depth":0},{"type":"atomic","entityRanges":[{"length":1,"key":13,"offset":0}],"key":"ctegv","depth":0,"data":{},"inlineStyleRanges":[],"text":" "},{"depth":0,"data":{},"type":"unstyled","entityRanges":[],"text":"The reports section contains several security-related reports for your Microsoft 365 environment. You can review several security reports, email the reports to yourself, or schedule a report to be sent to yourself regularly. There are a ton of reports you can view but some of the most common are:","inlineStyleRanges":[],"key":"ctig0"},{"data":{},"text":"Users at risk","depth":0,"key":"e97dt","type":"unordered-list-item","entityRanges":[],"inlineStyleRanges":[]},{"inlineStyleRanges":[],"key":"hiak","entityRanges":[],"type":"unordered-list-item","depth":0,"data":{},"text":"DLP policy matches"},{"key":"3ilt1","type":"unordered-list-item","text":"Device compliance","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[]},{"text":"malware status summary","inlineStyleRanges":[],"key":"3b989","entityRanges":[],"data":{},"type":"unordered-list-item","depth":0},{"type":"unordered-list-item","key":"88vfc","inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"Compromised users","depth":0},{"data":{},"text":"Threat protection status","key":"5thd9","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unordered-list-item"},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"data":{},"key":"pn6s","type":"header-two","text":"Audit"},{"key":"67sd","inlineStyleRanges":[],"type":"atomic","depth":0,"data":{},"entityRanges":[{"key":14,"offset":0,"length":1}],"text":" "},{"inlineStyleRanges":[],"data":{},"type":"unstyled","key":"9i2fu","entityRanges":[],"depth":0,"text":"Auditing is a powerful place where you can access the audit logs for your entire Microsoft 365 environment. Need to find out who deleted a document or who created a group? It's no problem for the audit logs. Search across hundreds of activities across your entire Microsoft 365 tenant. Filter by time, activity, users, or location (including File, folder, or site). You can also configure the audit retention policies to tell Microsoft to hang on to up to 10 years of audit logs."},{"text":"Permissions & roles","type":"header-two","key":"fnaqt","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"depth":0,"key":"c2cnk","text":" ","data":{},"entityRanges":[{"offset":0,"length":1,"key":15}],"inlineStyleRanges":[],"type":"atomic"},{"entityRanges":[],"key":"87k42","type":"unstyled","data":{},"depth":0,"text":"The permissions and roles tab is where you can add members to roles and create custom roles. Much like the role management in the Azure AD admin center. It's the same roles! So in short, there's no point in looking into permissions & roles here since you can do it all from the Microsoft 365 admin center or the Azure AD admin center.","inlineStyleRanges":[]},{"type":"header-two","key":"1lse5","entityRanges":[],"data":{},"text":"Settings","inlineStyleRanges":[],"depth":0},{"type":"atomic","depth":0,"key":"44gjt","text":" ","data":{},"entityRanges":[{"length":1,"key":16,"offset":0}],"inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"48nmn","text":"The settings section is where, you guessed it, contains the settings. Depending on what licenses you have is depending on the settings you'll see.","data":{}},{"data":{},"entityRanges":[],"text":"More resources","key":"8a0nr","inlineStyleRanges":[],"type":"header-two","depth":0},{"type":"atomic","text":" ","entityRanges":[{"length":1,"offset":0,"key":17}],"key":"47cdn","data":{},"inlineStyleRanges":[],"depth":0},{"key":"6f9s4","text":"The more resources tab will link you to the other security admin centers. From Azure AD, Defender for Cloud Apps, to Microsoft Defender for Identity admin centers.","data":{},"type":"unstyled","depth":0,"entityRanges":[],"inlineStyleRanges":[]}],"entityMap":{"0":{"data":{"src":"https://i.ibb.co/WcwKY2G/Microsoft-365-incidents-and-alerts.png","width":"auto","alignment":"none","targetOption":"_blank","url":"https://compliance.microsoft.com/alertpolicies","height":"auto","alt":"Microsoft 365 incidents and alerts"},"type":"IMAGE","mutability":"MUTABLE"},"1":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/bdVRPQS/Start-recording-user-and-admin-activity.png","url":"https://compliance.microsoft.com/alertpolicies","width":"auto","alt":"Microsoft 365 Start recording user and admin activity","alignment":"left","targetOption":"_blank","height":"auto"},"type":"LINK"},"2":{"data":{"alt":"Microsoft 365 Start recording user and admin activity","height":"auto","width":"auto","targetOption":"_blank","alignment":"none","src":"https://i.ibb.co/bdVRPQS/Start-recording-user-and-admin-activity.png","url":"https://compliance.microsoft.com/auditlogsearch"},"type":"IMAGE","mutability":"MUTABLE"},"3":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://compliance.microsoft.com/auditlogsearch","targetOption":"_blank"}},"4":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/vzYyJLJ/microsoft-365-defender-hunting.png","targetOption":"_blank","url":"https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries","alignment":"none","alt":"Microsoft 365 defender hunting","height":"auto","width":"auto"},"type":"IMAGE"},"5":{"data":{"url":"https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"6":{"type":"IMAGE","data":{"src":"https://i.ibb.co/bRBczN1/microsoft-365-defender-actions-and-submissions.png","alignment":"none","height":"auto","alt":"Microsoft 365 Defender actions and submissions","width":"auto"},"mutability":"MUTABLE"},"7":{"mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/0c1xcTS/Microsoft-365-defender-submissions.png","width":"auto","alt":"Microsoft 365 Defender submissions","height":"auto"},"type":"IMAGE"},"8":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","width":"auto","alt":"Secure score","src":"https://i.ibb.co/MR4hf5t/Secure-Score.png","height":"auto"}},"9":{"data":{"alignment":"none","src":"https://i.ibb.co/ZzLvqcC/learning-hub.png","width":"auto","height":"auto","alt":"Microsoft 365 learning hub"},"mutability":"MUTABLE","type":"IMAGE"},"10":{"data":{"alt":"Email and collaboration review","width":"auto","src":"https://i.ibb.co/q9Nt4Wj/email-and-collaboration-review.png","height":"auto","alignment":"none"},"mutability":"MUTABLE","type":"IMAGE"},"11":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","height":"auto","alt":"Attack simulation training","src":"https://i.ibb.co/ZfFfxVb/attack-simulation-training.png","width":"auto"}},"12":{"type":"IMAGE","data":{"alt":"Microsoft 365 defender policies and rules","alignment":"none","width":"auto","src":"https://i.ibb.co/0QbcJvM/Policies-and-rules.png","height":"auto"},"mutability":"MUTABLE"},"13":{"type":"IMAGE","data":{"src":"https://i.ibb.co/FY7m9H1/Microsoft-365-Defender-Reports.png","width":"auto","alignment":"none","height":"auto","alt":"Microsoft 365 Defender reports"},"mutability":"MUTABLE"},"14":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/tJCZBwt/Microsoft-365-audit-logs.png","alignment":"none","height":"auto","width":"auto","alt":"Microsoft 365 audit logs"}},"15":{"data":{"alignment":"none","src":"https://i.ibb.co/vdM5BtG/Microsoft-365-Permissions-and-roles.png","height":"auto","width":"auto","alt":"Microsoft 365 Defender Permissions and Roles"},"mutability":"MUTABLE","type":"IMAGE"},"16":{"type":"IMAGE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/kBf0jbb/Microsoft-365-Defender-Settings.png","alt":"Microsoft 365 Defender Settings","alignment":"none"},"mutability":"MUTABLE"},"17":{"mutability":"MUTABLE","data":{"alignment":"none","height":"auto","width":"auto","alt":"Microsoft 365 Defender More Resources","src":"https://i.ibb.co/sP6Q3DQ/Microsoft-365-Defender-More-Resources.png"},"type":"IMAGE"}}}},
      nextContentSlug: 'Protect-your-email-environment-from-malicious-actors-6HUOr7qbL',
      previousContentSlug: 'Whats-Microsoft-Defender-for-identity-Kye_yNLxA',
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
                <div><p>The meat and potatoes of Microsoft 365 security. The Microsoft Defender for Office 365 secures your entire Microsoft 365 environment. It's where you can review weaknesses in your security, review alerts and incidents, and harden your phishing/spam protection. Oddly enough, I find it to be one of the least covered admin centers in the MS-500. So we'll go over everything quickly but I'd recommend spending some time learning the admin center for yourself.</p>
<h2>Incidents &amp; alerts</h2>
<div ><img src="https://i.ibb.co/WcwKY2G/Microsoft-365-incidents-and-alerts.png" alt="Microsoft 365 incidents and alerts" style="height: auto;width: auto"/></div>
<p>This is where Microsoft will alert you that it has found a security attack that may have penetrated your environment. These alerts can range from "Unusual volume of file deletion" to "Honeytoken activity on endpoint" To edit the alerts you see go to Microsoft 365 compliance admin center &gt; Policies &gt; <a href="https://compliance.microsoft.com/alertpolicies" target="_blank">Alert policy</a>. Also, you may not see all of the alerts if auditing isn't turned on.</p>
<h3>How to turn auditing on</h3>
<div ><img src="https://i.ibb.co/bdVRPQS/Start-recording-user-and-admin-activity.png" alt="Microsoft 365 Start recording user and admin activity" style="height: auto;width: auto"/></div>
<p>1. Go to Microsoft 365 compliance admin center &gt; <a href="https://compliance.microsoft.com/auditlogsearch" target="_blank">Audit</a>.</p>
<p>2. Click Start recording user and admin activity. (If you don't see the blue bar auditing is already turned on)</p>
<h2>Hunting</h2>
<div ><img src="https://i.ibb.co/vzYyJLJ/microsoft-365-defender-hunting.png" alt="Microsoft 365 defender hunting" style="height: auto;width: auto"/></div>
<p>Advanced hunting is where you can Kusto query language to explore 30 days of data across your environment. You can use the hunting section of the Microsoft 365 Defender admin center to find advanced threats in your environment. Microsoft has a number of queries already defined that you can explore. <a href="https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries" target="_blank">https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries</a></p>
<h2>Actions &amp; submissions</h2>
<div ><img src="https://i.ibb.co/bRBczN1/microsoft-365-defender-actions-and-submissions.png" alt="Microsoft 365 Defender actions and submissions" style="height: auto;width: auto"/></div>
<p>The <strong>Action center</strong> replaces the <span >Office 365 Security &amp; Compliance Center</span> and the Action center in the Microsoft Defender Security Center. It unifies the action center for Defender for Endpoint and Defender for Office 365. The action center can be used to perform the following:</p>
<ul>
<li>Approve remediation (including automated remediation)</li>
<li>Review already approved remediation actions</li>
<li>Audit completed actions</li>
</ul>
<div ><img src="https://i.ibb.co/0c1xcTS/Microsoft-365-defender-submissions.png" alt="Microsoft 365 Defender submissions" style="height: auto;width: auto"/></div>
<p>The <strong>Submissions</strong> tab is where you can submit emails, attachments, and <span >URLs to Microsoft for scanning and updating their security. From the submissions tab, you can also see emails users submitted as Phishing attacks and then submit them to Microsoft for analysis or flag them as phishing, junk, or not threats found.</span></p>
<h2>Secure score</h2>
<div ><img src="https://i.ibb.co/MR4hf5t/Secure-Score.png" alt="Secure score" style="height: auto;width: auto"/></div>
<p>The Secure score is Microsoft rating the security of your environment and making recommendations to improve it. They'll make recommendations to your Microsoft 365 environment and even your on-premises devices if you connect your devices to the Microsoft 365 Defender portal. For example, it will recommend you turn on the user risk policy which will use intelligence to determine if someone's Microsoft 365 account is being or has been maliciously compromised.</p>
<h2>Learning hub</h2>
<div ><img src="https://i.ibb.co/ZzLvqcC/learning-hub.png" alt="Microsoft 365 learning hub" style="height: auto;width: auto"/></div>
<p>The learning hub is a place where you can learn how to better defend your Microsoft 365 and on-premises environment. The learning hub has several links to helpful videos to guide you through the setup of different parts of the Microsoft 365 security environment.</p>
<h2>Email &amp; collaboration review</h2>
<div ><img src="https://i.ibb.co/q9Nt4Wj/email-and-collaboration-review.png" alt="Email and collaboration review" style="height: auto;width: auto"/></div>
<p>The email &amp; collaboration review tab is where you can review the organization's quarantine and restricted users. The <strong>quarantine </strong>is where any message that is sent to quarantine will appear for admins. In short, if a user says they should have received an email and haven't, you can go to the quarantine to retrieve it. The <strong>restricted users</strong>' section is where you can go to unblock a user account that is blocked from sending emails. In short, if a user's account is compromised and is sending out spam Microsoft will block the account from sending emails. After you change the password, configure MFA, and train the user again you can then go to the restricted users' section to unblock their account.</p>
<h2>Attack simulation training</h2>
<div ><img src="https://i.ibb.co/ZfFfxVb/attack-simulation-training.png" alt="Attack simulation training" style="height: auto;width: auto"/></div>
<p>The attack simulation training is where you can send setup and send fake phishing emails to your users where they can either flag it as phishing or fall victim to your fake phishing attack. If they fall victim to the fake phishing attack they can be automatically assigned a training where they can learn to spot fake phishing attacks.</p>
<h2>Policies &amp; rules</h2>
<div ><img src="https://i.ibb.co/0QbcJvM/Policies-and-rules.png" alt="Microsoft 365 defender policies and rules" style="height: auto;width: auto"/></div>
<p>Under policies &amp; rules, you can set up the threat policies for your Microsoft 365 tenant. You can configure anti-phishing, anti-spam, and anti-malware policies. You can also configure your allow/blocked email addresses and domain rules. The policies &amp; rules section is probably the most common section, it's where you can control most of the security in your environment. It's also where you can manage your alerts. You can customize who is alerted on what event.</p>
<h2>Reports</h2>
<div ><img src="https://i.ibb.co/FY7m9H1/Microsoft-365-Defender-Reports.png" alt="Microsoft 365 Defender reports" style="height: auto;width: auto"/></div>
<p>The reports section contains several security-related reports for your Microsoft 365 environment. You can review several security reports, email the reports to yourself, or schedule a report to be sent to yourself regularly. There are a ton of reports you can view but some of the most common are:</p>
<ul>
<li>Users at risk</li>
<li>DLP policy matches</li>
<li>Device compliance</li>
<li>malware status summary</li>
<li>Compromised users</li>
<li>Threat protection status</li>
</ul>
<h2>Audit</h2>
<div ><img src="https://i.ibb.co/tJCZBwt/Microsoft-365-audit-logs.png" alt="Microsoft 365 audit logs" style="height: auto;width: auto"/></div>
<p>Auditing is a powerful place where you can access the audit logs for your entire Microsoft 365 environment. Need to find out who deleted a document or who created a group? It's no problem for the audit logs. Search across hundreds of activities across your entire Microsoft 365 tenant. Filter by time, activity, users, or location (including File, folder, or site). You can also configure the audit retention policies to tell Microsoft to hang on to up to 10 years of audit logs.</p>
<h2>Permissions &amp; roles</h2>
<div ><img src="https://i.ibb.co/vdM5BtG/Microsoft-365-Permissions-and-roles.png" alt="Microsoft 365 Defender Permissions and Roles" style="height: auto;width: auto"/></div>
<p>The permissions and roles tab is where you can add members to roles and create custom roles. Much like the role management in the Azure AD admin center. It's the same roles! So in short, there's no point in looking into permissions &amp; roles here since you can do it all from the Microsoft 365 admin center or the Azure AD admin center.</p>
<h2>Settings</h2>
<div ><img src="https://i.ibb.co/kBf0jbb/Microsoft-365-Defender-Settings.png" alt="Microsoft 365 Defender Settings" style="height: auto;width: auto"/></div>
<p>The settings section is where, you guessed it, contains the settings. Depending on what licenses you have is depending on the settings you'll see.</p>
<h2>More resources</h2>
<div ><img src="https://i.ibb.co/sP6Q3DQ/Microsoft-365-Defender-More-Resources.png" alt="Microsoft 365 Defender More Resources" style="height: auto;width: auto"/></div>
<p>The more resources tab will link you to the other security admin centers. From Azure AD, Defender for Cloud Apps, to Microsoft Defender for Identity admin centers.</p>
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
