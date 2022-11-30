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
let bottomOfArticle

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)
    this.getUid = this.getUid.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5r8mo', text: 'The meat and potatoes of Microsoft 365 security. The Microsoft Defender for Office 365 secures your entire Microsoft 365 environment. It\'s where you can review weaknesses in your security, review alerts and incidents, and harden your phishing/spam protection. Oddly enough, I find it to be one of the least covered admin centers in the MS-500. So we\'ll go over everything quickly but I\'d recommend spending some time learning the admin center for yourself.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2kge9', text: 'Incidents & alerts', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '4r2gv', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 12, offset: 301}], inlineStyleRanges: [], key: 'sp63', text: 'This is where Microsoft will alert you that it has found a security attack that may have penetrated your environment. These alerts can range from "Unusual volume of file deletion" to "Honeytoken activity on endpoint" To edit the alerts you see go to Microsoft 365 compliance admin center > Policies > Alert policy. Also, you may not see all of the alerts if auditing isn\'t turned on.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4iq5c', text: 'How to turn auditing on', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dd595', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 5, offset: 49}], inlineStyleRanges: [], key: '6dsos', text: '1. Go to Microsoft 365 compliance admin center > Audit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '493ff', text: '2. Click Start recording user and admin activity. (If you don\'t see the blue bar auditing is already turned on)', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b6uvv', text: 'Hunting', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '1t1de', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 67, offset: 300}], inlineStyleRanges: [], key: '2oec', text: 'Advanced hunting is where you can Kusto query language to explore 30 days of data across your environment. You can use the hunting section of the Microsoft 365 Defender admin center to find advanced threats in your environment. Microsoft has a number of queries already defined that you can explore. https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd2sfc', text: 'Actions & submissions', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '4qkfc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 4, style: 'BOLD'}, {length: 39, offset: 31, style: 'color-rgb(23,23,23)'}, {length: 39, offset: 31, style: 'bgcolor-rgb(255,255,255)'}, {length: 39, offset: 31, style: 'fontsize-16'}, {length: 39, offset: 31, style: 'fontfamily-Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif'}], key: '6pmqs', text: 'The Action center replaces the Office 365 Security & Compliance Center and the Action center in the Microsoft Defender Security Center. It unifies the action center for Defender for Endpoint and Defender for Office 365. The action center can be used to perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b8ima', text: 'Approve remediation (including automated remediation)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'easud', text: 'Review already approved remediation actions', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ada0d', text: 'Audit completed actions', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '9mgrd', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 4, style: 'BOLD'}, {length: 246, offset: 69, style: 'color-rgb(33,37,41)'}, {length: 246, offset: 69, style: 'bgcolor-rgb(255,255,255)'}, {length: 246, offset: 69, style: 'fontsize-16'}, {length: 246, offset: 69, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'fd5fk', text: 'The Submissions tab is where you can submit emails, attachments, and URLs to Microsoft for scanning and updating their security. From the submissions tab, you can also see emails users submitted as Phishing attacks and then submit them to Microsoft for analysis or flag them as phishing, junk, or not threats found.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd1lvu', text: 'Secure score', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '1l7ag', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4sblc', text: 'The Secure score is Microsoft rating the security of your environment and making recommendations to improve it. They\'ll make recommendations to your Microsoft 365 environment and even your on-premises devices if you connect your devices to the Microsoft 365 Defender portal. For example, it will recommend you turn on the user risk policy which will use intelligence to determine if someone\'s Microsoft 365 account is being or has been maliciously compromised.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '37dpf', text: 'Learning hub', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '86r08', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9g4g6', text: 'The learning hub is a place where you can learn how to better defend your Microsoft 365 and on-premises environment. The learning hub has several links to helpful videos to guide you through the setup of different parts of the Microsoft 365 security environment.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1o4pv', text: 'Email & collaboration review', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '79t4u', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 117, style: 'BOLD'}, {length: 16, offset: 322, style: 'BOLD'}], key: '5gcdk', text: 'The email & collaboration review tab is where you can review the organization\'s quarantine and restricted users. The quarantine is where any message that is sent to quarantine will appear for admins. In short, if a user says they should have received an email and haven\'t, you can go to the quarantine to retrieve it. The restricted users\' section is where you can go to unblock a user account that is blocked from sending emails. In short, if a user\'s account is compromised and is sending out spam Microsoft will block the account from sending emails. After you change the password, configure MFA, and train the user again you can then go to the restricted users\' section to unblock their account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4kpqn', text: 'Attack simulation training', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: '4ereq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2c3s1', text: 'The attack simulation training is where you can send setup and send fake phishing emails to your users where they can either flag it as phishing or fall victim to your fake phishing attack. If they fall victim to the fake phishing attack they can be automatically assigned a training where they can learn to spot fake phishing attacks.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fhjjd', text: 'Policies & rules', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '99ke2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c0pmk', text: 'Under policies & rules, you can set up the threat policies for your Microsoft 365 tenant. You can configure anti-phishing, anti-spam, and anti-malware policies. You can also configure your allow/blocked email addresses and domain rules. The policies & rules section is probably the most common section, it\'s where you can control most of the security in your environment. It\'s also where you can manage your alerts. You can customize who is alerted on what event.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '310ip', text: 'Reports', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ctegv', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ctig0', text: 'The reports section contains several security-related reports for your Microsoft 365 environment. You can review several security reports, email the reports to yourself, or schedule a report to be sent to yourself regularly. There are a ton of reports you can view but some of the most common are:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e97dt', text: 'Users at risk', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'hiak', text: 'DLP policy matches', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3ilt1', text: 'Device compliance', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3b989', text: 'malware status summary', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '88vfc', text: 'Compromised users', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5thd9', text: 'Threat protection status', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'pn6s', text: 'Audit', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '67sd', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9i2fu', text: 'Auditing is a powerful place where you can access the audit logs for your entire Microsoft 365 environment. Need to find out who deleted a document or who created a group? It\'s no problem for the audit logs. Search across hundreds of activities across your entire Microsoft 365 tenant. Filter by time, activity, users, or location (including File, folder, or site). You can also configure the audit retention policies to tell Microsoft to hang on to up to 10 years of audit logs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fnaqt', text: 'Permissions & roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c2cnk', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '87k42', text: 'The permissions and roles tab is where you can add members to roles and create custom roles. Much like the role management in the Azure AD admin center. It\'s the same roles! So in short, there\'s no point in looking into permissions & roles here since you can do it all from the Microsoft 365 admin center or the Azure AD admin center.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1lse5', text: 'Settings', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '44gjt', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '48nmn', text: 'The settings section is where, you guessed it, contains the settings. Depending on what licenses you have is depending on the settings you\'ll see.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8a0nr', text: 'More resources', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: '47cdn', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6f9s4', text: 'The more resources tab will link you to the other security admin centers. From Azure AD, Defender for Cloud Apps, to Microsoft Defender for Identity admin centers.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'Microsoft 365 incidents and alerts', height: 'auto', src: 'https://i.ibb.co/WcwKY2G/Microsoft-365-incidents-and-alerts.png', targetOption: '_blank', url: 'https://compliance.microsoft.com/alertpolicies', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'left', alt: 'Microsoft 365 Start recording user and admin activity', height: 'auto', src: 'https://i.ibb.co/bdVRPQS/Start-recording-user-and-admin-activity.png', targetOption: '_blank', url: 'https://compliance.microsoft.com/alertpolicies', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 10: {data: {alignment: 'none', alt: 'Email and collaboration review', height: 'auto', src: 'https://i.ibb.co/q9Nt4Wj/email-and-collaboration-review.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Attack simulation training', height: 'auto', src: 'https://i.ibb.co/ZfFfxVb/attack-simulation-training.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Microsoft 365 defender policies and rules', height: 'auto', src: 'https://i.ibb.co/0QbcJvM/Policies-and-rules.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Microsoft 365 Defender reports', height: 'auto', src: 'https://i.ibb.co/FY7m9H1/Microsoft-365-Defender-Reports.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Microsoft 365 audit logs', height: 'auto', src: 'https://i.ibb.co/tJCZBwt/Microsoft-365-audit-logs.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'Microsoft 365 Defender Permissions and Roles', height: 'auto', src: 'https://i.ibb.co/vdM5BtG/Microsoft-365-Permissions-and-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {alignment: 'none', alt: 'Microsoft 365 Defender Settings', height: 'auto', src: 'https://i.ibb.co/kBf0jbb/Microsoft-365-Defender-Settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Microsoft 365 Defender More Resources', height: 'auto', src: 'https://i.ibb.co/sP6Q3DQ/Microsoft-365-Defender-More-Resources.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Microsoft 365 Start recording user and admin activity', height: 'auto', src: 'https://i.ibb.co/bdVRPQS/Start-recording-user-and-admin-activity.png', targetOption: '_blank', url: 'https://compliance.microsoft.com/auditlogsearch', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {targetOption: '_blank', url: 'https://compliance.microsoft.com/auditlogsearch'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {data: {alignment: 'none', alt: 'Microsoft 365 defender hunting', height: 'auto', src: 'https://i.ibb.co/vzYyJLJ/microsoft-365-defender-hunting.png', targetOption: '_blank', url: 'https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {targetOption: '_blank', url: 'https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries'}, mutability: 'MUTABLE', type: 'LINK'}, 6: {data: {alignment: 'none', alt: 'Microsoft 365 Defender actions and submissions', height: 'auto', src: 'https://i.ibb.co/bRBczN1/microsoft-365-defender-actions-and-submissions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Microsoft 365 Defender submissions', height: 'auto', src: 'https://i.ibb.co/0c1xcTS/Microsoft-365-defender-submissions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Secure score', height: 'auto', src: 'https://i.ibb.co/MR4hf5t/Secure-Score.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Microsoft 365 learning hub', height: 'auto', src: 'https://i.ibb.co/ZzLvqcC/learning-hub.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'The meat and potatoes of Microsoft 365 security. The Microsoft Defender for Office 365 secures your entire Microsoft 365 environment.', featuredImage: 'https://i.ibb.co/WcwKY2G/Microsoft-365-incidents-and-alerts.png', id: 'EnPyp7ukN', images: ['https://i.ibb.co/bdVRPQS/Start-recording-user-and-admin-activity.png', 'https://i.ibb.co/WcwKY2G/Microsoft-365-incidents-and-alerts.png', 'https://i.ibb.co/vzYyJLJ/microsoft-365-defender-hunting.png', 'https://i.ibb.co/0c1xcTS/Microsoft-365-defender-submissions.png', 'https://i.ibb.co/bRBczN1/microsoft-365-defender-actions-and-submissions.png', 'https://i.ibb.co/MR4hf5t/Secure-Score.png', 'https://i.ibb.co/ZzLvqcC/learning-hub.png', 'https://i.ibb.co/q9Nt4Wj/email-and-collaboration-review.png', 'https://i.ibb.co/ZfFfxVb/attack-simulation-training.png', 'https://i.ibb.co/0QbcJvM/Policies-and-rules.png', 'https://i.ibb.co/FY7m9H1/Microsoft-365-Defender-Reports.png', 'https://i.ibb.co/tJCZBwt/Microsoft-365-audit-logs.png', 'https://i.ibb.co/vdM5BtG/Microsoft-365-Permissions-and-roles.png', 'https://i.ibb.co/kBf0jbb/Microsoft-365-Defender-Settings.png', 'https://i.ibb.co/sP6Q3DQ/Microsoft-365-Defender-More-Resources.png'], publish: true, sectionId: 'QScYfSu74', slug: 'Whats-Microsoft-Defender-for-Office-365-EnPyp7ukN', title: 'What\'s Microsoft Defender for Office 365?', type: 'article'},
      nextContentSlug: 'learn/Protect-your-email-environment-from-malicious-actors-6HUOr7qbL',
      previousContentSlug: 'learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA',
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
      const el = document.getElementById('bottom-of-article')
      const rect = el.getBoundingClientRect()
      bottomOfArticle = rect.top
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
    if (bottomOfArticle && bottomOfArticle <= window.scrollY+window.innerHeight)
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
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} title={this.state.article.title} description={this.state.article.description}>
        <div>
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
              pre {
                white-space: pre-wrap;
              }
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <main>
                  <div id="ld-534-9587" /><script>{`(function(w,d,s,i){w.ldAdInit=w.ldAdInit||[];w.ldAdInit.push({slot:15664931508787046,size:[0, 0],id:"ld-534-9587"});if(!d.getElementById(i)){var j=d.createElement(s),p=d.getElementsByTagName(s)[0];j.async=true;j.src="//cdn2.decide.dev/_js/ajs.js";j.id=i;p.parentNode.insertBefore(j,p);}})(window,document,"script","ld-ajs")`}</script>
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>The meat and potatoes of Microsoft 365 security. The Microsoft Defender for Office 365 secures your entire Microsoft 365 environment. It's where you can review weaknesses in your security, review alerts and incidents, and harden your phishing/spam protection. Oddly enough, I find it to be one of the least covered admin centers in the MS-500. So we'll go over everything quickly but I'd recommend spending some time learning the admin center for yourself.</p>
                    <div id="ld-7740-2760" /><script>{`(function(w,d,s,i){w.ldAdInit=w.ldAdInit||[];w.ldAdInit.push({slot:15664932884518758,size:[0, 0],id:"ld-7740-2760"});if(!d.getElementById(i)){var j=d.createElement(s),p=d.getElementsByTagName(s)[0];j.async=true;j.src="//cdn2.decide.dev/_js/ajs.js";j.id=i;p.parentNode.insertBefore(j,p);}})(window,document,"script","ld-ajs")`}</script><h2>Incidents &amp; alerts</h2>
                    <div ><img src="https://i.ibb.co/WcwKY2G/Microsoft-365-incidents-and-alerts.png" alt="Microsoft 365 incidents and alerts" style="height: auto;width: auto" /></div>
                    <p>This is where Microsoft will alert you that it has found a security attack that may have penetrated your environment. These alerts can range from "Unusual volume of file deletion" to "Honeytoken activity on endpoint" To edit the alerts you see go to Microsoft 365 compliance admin center &gt; Policies &gt; <a href="https://compliance.microsoft.com/alertpolicies" target="_blank" rel="noreferrer">Alert policy</a>. Also, you may not see all of the alerts if auditing isn't turned on.</p>
                    <h3>How to turn auditing on</h3>
                    <div ><img src="https://i.ibb.co/bdVRPQS/Start-recording-user-and-admin-activity.png" alt="Microsoft 365 Start recording user and admin activity" style="height: auto;width: auto" /></div>
                    <p>1. Go to Microsoft 365 compliance admin center &gt; <a href="https://compliance.microsoft.com/auditlogsearch" target="_blank" rel="noreferrer">Audit</a>.</p>
                    <p>2. Click Start recording user and admin activity. (If you don't see the blue bar auditing is already turned on)</p>
                    <h2>Hunting</h2>
                    <div ><img src="https://i.ibb.co/vzYyJLJ/microsoft-365-defender-hunting.png" alt="Microsoft 365 defender hunting" style="height: auto;width: auto" /></div>
                    <p>Advanced hunting is where you can Kusto query language to explore 30 days of data across your environment. You can use the hunting section of the Microsoft 365 Defender admin center to find advanced threats in your environment. Microsoft has a number of queries already defined that you can explore. <a href="https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries" target="_blank" rel="noreferrer">https://github.com/microsoft/Microsoft-365-Defender-Hunting-Queries</a></p>
                    <h2>Actions &amp; submissions</h2>
                    <div ><img src="https://i.ibb.co/bRBczN1/microsoft-365-defender-actions-and-submissions.png" alt="Microsoft 365 Defender actions and submissions" style="height: auto;width: auto" /></div>
                    <p>The <strong>Action center</strong> replaces the <span >Office 365 Security &amp; Compliance Center</span> and the Action center in the Microsoft Defender Security Center. It unifies the action center for Defender for Endpoint and Defender for Office 365. The action center can be used to perform the following:</p>
                    <ul>
                      <li>Approve remediation (including automated remediation)</li>
                      <li>Review already approved remediation actions</li>
                      <li>Audit completed actions</li>
                    </ul>
                    <div ><img src="https://i.ibb.co/0c1xcTS/Microsoft-365-defender-submissions.png" alt="Microsoft 365 Defender submissions" style="height: auto;width: auto" /></div>
                    <p>The <strong>Submissions</strong> tab is where you can submit emails, attachments, and <span >URLs to Microsoft for scanning and updating their security. From the submissions tab, you can also see emails users submitted as Phishing attacks and then submit them to Microsoft for analysis or flag them as phishing, junk, or not threats found.</span></p>
                    <h2>Secure score</h2>
                    <div ><img src="https://i.ibb.co/MR4hf5t/Secure-Score.png" alt="Secure score" style="height: auto;width: auto" /></div>
                    <p>The Secure score is Microsoft rating the security of your environment and making recommendations to improve it. They'll make recommendations to your Microsoft 365 environment and even your on-premises devices if you connect your devices to the Microsoft 365 Defender portal. For example, it will recommend you turn on the user risk policy which will use intelligence to determine if someone's Microsoft 365 account is being or has been maliciously compromised.</p>
                    <h2>Learning hub</h2>
                    <div ><img src="https://i.ibb.co/ZzLvqcC/learning-hub.png" alt="Microsoft 365 learning hub" style="height: auto;width: auto" /></div>
                    <p>The learning hub is a place where you can learn how to better defend your Microsoft 365 and on-premises environment. The learning hub has several links to helpful videos to guide you through the setup of different parts of the Microsoft 365 security environment.</p>
                    <h2>Email &amp; collaboration review</h2>
                    <div ><img src="https://i.ibb.co/q9Nt4Wj/email-and-collaboration-review.png" alt="Email and collaboration review" style="height: auto;width: auto" /></div>
                    <p>The email &amp; collaboration review tab is where you can review the organization's quarantine and restricted users. The <strong>quarantine </strong>is where any message that is sent to quarantine will appear for admins. In short, if a user says they should have received an email and haven't, you can go to the quarantine to retrieve it. The <strong>restricted users</strong>' section is where you can go to unblock a user account that is blocked from sending emails. In short, if a user's account is compromised and is sending out spam Microsoft will block the account from sending emails. After you change the password, configure MFA, and train the user again you can then go to the restricted users' section to unblock their account.</p>
                    <h2>Attack simulation training</h2>
                    <div ><img src="https://i.ibb.co/ZfFfxVb/attack-simulation-training.png" alt="Attack simulation training" style="height: auto;width: auto" /></div>
                    <p>The attack simulation training is where you can send setup and send fake phishing emails to your users where they can either flag it as phishing or fall victim to your fake phishing attack. If they fall victim to the fake phishing attack they can be automatically assigned a training where they can learn to spot fake phishing attacks.</p>
                    <h2>Policies &amp; rules</h2>
                    <div ><img src="https://i.ibb.co/0QbcJvM/Policies-and-rules.png" alt="Microsoft 365 defender policies and rules" style="height: auto;width: auto" /></div>
                    <p>Under policies &amp; rules, you can set up the threat policies for your Microsoft 365 tenant. You can configure anti-phishing, anti-spam, and anti-malware policies. You can also configure your allow/blocked email addresses and domain rules. The policies &amp; rules section is probably the most common section, it's where you can control most of the security in your environment. It's also where you can manage your alerts. You can customize who is alerted on what event.</p>
                    <h2>Reports</h2>
                    <div ><img src="https://i.ibb.co/FY7m9H1/Microsoft-365-Defender-Reports.png" alt="Microsoft 365 Defender reports" style="height: auto;width: auto" /></div>
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
                    <div ><img src="https://i.ibb.co/tJCZBwt/Microsoft-365-audit-logs.png" alt="Microsoft 365 audit logs" style="height: auto;width: auto" /></div>
                    <p>Auditing is a powerful place where you can access the audit logs for your entire Microsoft 365 environment. Need to find out who deleted a document or who created a group? It's no problem for the audit logs. Search across hundreds of activities across your entire Microsoft 365 tenant. Filter by time, activity, users, or location (including File, folder, or site). You can also configure the audit retention policies to tell Microsoft to hang on to up to 10 years of audit logs.</p>
                    <h2>Permissions &amp; roles</h2>
                    <div ><img src="https://i.ibb.co/vdM5BtG/Microsoft-365-Permissions-and-roles.png" alt="Microsoft 365 Defender Permissions and Roles" style="height: auto;width: auto" /></div>
                    <p>The permissions and roles tab is where you can add members to roles and create custom roles. Much like the role management in the Azure AD admin center. It's the same roles! So in short, there's no point in looking into permissions &amp; roles here since you can do it all from the Microsoft 365 admin center or the Azure AD admin center.</p>
                    <h2>Settings</h2>
                    <div ><img src="https://i.ibb.co/kBf0jbb/Microsoft-365-Defender-Settings.png" alt="Microsoft 365 Defender Settings" style="height: auto;width: auto" /></div>
                    <p>The settings section is where, you guessed it, contains the settings. Depending on what licenses you have is depending on the settings you'll see.</p>
                    <h2>More resources</h2>
                    <div ><img src="https://i.ibb.co/sP6Q3DQ/Microsoft-365-Defender-More-Resources.png" alt="Microsoft 365 Defender More Resources" style="height: auto;width: auto" /></div>
                    <p>The more resources tab will link you to the other security admin centers. From Azure AD, Defender for Cloud Apps, to Microsoft Defender for Identity admin centers.</p>
                  </div>
                  <div id="bottom-of-article" />
                  <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                    <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                    <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
                  </Box>
                </main>
              </Grid>
              <Grid item lg={3} sx={{mt: 3}}>
                <ContentsRead completedContent={this.state.userAcct.completedContent} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Page>
    )
  }
}

export default ArticlePage
