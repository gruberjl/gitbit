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
      path: '/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1',
      article: {"sectionId":"QScYfSu74","slug":"Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1","datePublished":"2022/6/28","images":["https://i.ibb.co/gSn6PVP/sign-in-logs.png","https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png","https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png","https://i.ibb.co/DDHPKTV/activity-details.png","https://i.ibb.co/QY6q69M/location-tab.png","https://i.ibb.co/gZQ2vnG/device-info-tab.png","https://i.ibb.co/85LXdWW/Authentication-Details.png","https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png","https://i.ibb.co/7GmvDjZ/view-audit-logs.png","https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png"],"title":"Auditing sign-ins and other actions in Microsoft 365","article":{"blocks":[{"data":{},"entityRanges":[],"depth":0,"type":"unstyled","key":"4k1ep","text":"So now we have Microsoft 365 fairly secure. There's one more question you should be asking yourself? How do we audit/monitor the user's actions? Before we jump into the logs there's something you should know. There are a couple of places for auditing but we'll keep it simple and stick to the two most common. First, let's take a look at sign-in logs. Next, we'll jump into auditing the Active Directory account auditing. Finally, we'll jump into auditing all actions.","inlineStyleRanges":[]},{"type":"header-two","text":"Sign-in logs","inlineStyleRanges":[],"key":"9rld5","entityRanges":[],"data":{},"depth":0},{"type":"unstyled","key":"1dhu1","depth":0,"inlineStyleRanges":[],"data":{},"text":"Sign-in logs are probably the most common logs used in Microsoft 365. From there you can see when a user logs in, what location they signed in from, and much more. Let's jump in and take a look.","entityRanges":[]},{"key":"1jgfa","type":"header-three","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"How to view sign-in logs"},{"type":"unstyled","depth":0,"entityRanges":[{"length":12,"key":0,"offset":72}],"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":35},{"length":22,"style":"BOLD","offset":47},{"offset":72,"length":12,"style":"BOLD"}],"data":{},"key":"dtl0m","text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Sign-in logs."},{"type":"atomic","depth":0,"inlineStyleRanges":[],"key":"644dd","entityRanges":[{"key":1,"offset":0,"length":1}],"data":{},"text":" "},{"inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"unstyled","depth":0,"text":"From here you can see all the sign-ins to your Microsoft 365 tenant. You can filter the log to see more particular information. Finally, you can view the same sign-in logs from Azure Active Directory admin center > Enterprise applications > Sign-in logs.","key":"4qlhl"},{"data":{},"text":"How to view sign-in logs for a user","entityRanges":[],"key":"am3eg","depth":0,"inlineStyleRanges":[],"type":"header-three"},{"depth":0,"entityRanges":[],"data":{},"key":"7dggt","inlineStyleRanges":[],"type":"unstyled","text":"Now, you can go to the sign-in logs, then add a filter for a particular user but that's a bit tedious. Since most of the time when you want to review sign-in logs you are looking at a particular user let's look at the sign-in logs another way. By having it automatically filtered for a user."},{"data":{},"inlineStyleRanges":[{"length":35,"style":"BOLD","offset":9},{"style":"BOLD","length":5,"offset":47},{"style":"BOLD","length":15,"offset":54}],"entityRanges":[],"key":"3v6ql","depth":0,"type":"unstyled","text":"1. Go to Azure Active Directory admin center > Users. Select the user you want to view."},{"entityRanges":[{"key":2,"length":1,"offset":0}],"key":"6ubvc","data":{},"inlineStyleRanges":[],"text":" ","depth":0,"type":"atomic"},{"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":12}],"depth":0,"key":"76uig","type":"unstyled","data":{},"entityRanges":[],"text":"2. Click Sign-in logs."},{"key":"7s3jk","depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"How to read the sign-in logs","type":"header-three"},{"depth":0,"type":"unstyled","key":"ah773","text":"Now that we are at the sign-in logs let's take a look at how to read them. Before we jump into reviewing one of the logs you should know one thing. The sign-in logs will show more than one sign-in for the user. For example, if you sign into the Microsoft 365 admin center and then navigate to the Azure AD admin center you'll see at least two \"sign-ins\". That's because every time you navigate to a different app in Microsoft 365 you are re-authenticating using the same token. Now, click one of the sign-ins to view the data.","entityRanges":[],"inlineStyleRanges":[],"data":{}},{"entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"Basic info","key":"2c454","type":"header-four","depth":0},{"entityRanges":[],"text":"On the basic info tab, you can see, basic info on the sign-in. Surprised right? Anyway, from here you can see information like the user that the sign-in is related to, and what application they signed into.","type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[],"key":"cudm9"},{"key":"b72rs","data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[{"key":3,"offset":0,"length":1}],"type":"atomic","text":" "},{"depth":0,"inlineStyleRanges":[],"text":"Location","key":"3ra3t","type":"header-four","entityRanges":[],"data":{}},{"entityRanges":[],"type":"unstyled","depth":0,"key":"dgb8s","inlineStyleRanges":[],"text":"On the location tab, you'll find the information on where the user logged in from. For example, you'll see the IP address and the best guess on the actual location. For example, Philadelphia, PA, US.","data":{}},{"entityRanges":[{"key":4,"length":1,"offset":0}],"depth":0,"type":"atomic","data":{},"key":"cnldh","inlineStyleRanges":[],"text":" "},{"inlineStyleRanges":[],"key":"8h6ht","data":{},"entityRanges":[],"type":"header-four","depth":0,"text":"Device info"},{"key":"1a5vn","entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"From the device info tab, you'll find information about the device. If the device is in Azure AD, you may see a device name. If the sign-in is from a browser, you'll notice the browser is located in the device info tab.","data":{},"type":"unstyled"},{"text":" ","type":"atomic","key":"ag6o7","entityRanges":[{"key":5,"length":1,"offset":0}],"depth":0,"data":{},"inlineStyleRanges":[]},{"entityRanges":[],"key":"6uv82","text":"Authentication Details","inlineStyleRanges":[],"type":"header-four","depth":0,"data":{}},{"key":"2ahih","depth":0,"data":{},"text":"The authentication details tab is where you'll find information about how the user signed in. For example, if it's the actual sign-in you may see \"Password Hash Sync\" or \"Password in the cloud\". If the user is already signed in and simply connecting to another service you'll see \"Previously satisfied\"","type":"unstyled","entityRanges":[],"inlineStyleRanges":[]},{"key":"2barj","text":" ","data":{},"entityRanges":[{"offset":0,"key":6,"length":1}],"depth":0,"type":"atomic","inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"data":{},"type":"header-four","depth":0,"key":"46gej","text":"Conditional access"},{"key":"3hgv0","inlineStyleRanges":[],"text":"The conditional access tab will show you what conditional access policies were applied and which were not. It will also show you the status of the conditional access policy. For example, if the policy failed (and blocked the sign-in) then it will show Failure. Lastly, you can click the policy name to see information about the conditions and access controls. That way you can see why a policy failed, succeeded or didn't apply.","type":"unstyled","data":{},"entityRanges":[],"depth":0},{"entityRanges":[{"key":7,"offset":0,"length":1}],"data":{},"inlineStyleRanges":[],"depth":0,"text":" ","key":"qbb2","type":"atomic"},{"key":"5gacl","type":"header-four","entityRanges":[],"text":"Report only","data":{},"depth":0,"inlineStyleRanges":[]},{"key":"fa3lh","inlineStyleRanges":[],"text":"The report-only tab will show you conditional access policies that are in report-only mode. They won't block the sign-in but that way you can test your conditional access policies before applying them.","type":"unstyled","entityRanges":[],"data":{},"depth":0},{"entityRanges":[],"data":{},"type":"header-four","key":"1g3jb","depth":0,"text":"Additional details","inlineStyleRanges":[]},{"key":"8qmpk","depth":0,"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled","text":"This tab is typically empty.","data":{}},{"type":"header-two","text":"Account auditing","key":"6dkc0","entityRanges":[],"inlineStyleRanges":[],"data":{},"depth":0},{"type":"unstyled","text":"What do I mean by account auditing? Well, every time you make a change to a user account it is logged in the Azure audit logs. For example, if you update the user display name or change the licenses assigned to a user, you'll see it in the account auditing logs.","key":"hoh1","depth":0,"data":{},"entityRanges":[],"inlineStyleRanges":[]},{"type":"header-three","entityRanges":[],"key":"e7bp1","data":{},"inlineStyleRanges":[],"depth":0,"text":"How to view account logs for the tenant"},{"inlineStyleRanges":[],"data":{},"depth":0,"entityRanges":[],"type":"unstyled","text":"Just like the sign-in logs except it's one option lower (or up depending on where you are)","key":"4m2c7"},{"data":{},"inlineStyleRanges":[{"offset":9,"length":35,"style":"BOLD"},{"length":22,"offset":47,"style":"BOLD"},{"style":"BOLD","offset":72,"length":10}],"depth":0,"key":"cjpb3","type":"unstyled","entityRanges":[{"key":8,"length":10,"offset":72}],"text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Audit logs."},{"entityRanges":[{"key":9,"offset":0,"length":1}],"inlineStyleRanges":[],"depth":0,"key":"987gc","data":{},"text":" ","type":"atomic"},{"entityRanges":[{"key":10,"offset":93,"length":6}],"key":"97cub","data":{},"inlineStyleRanges":[{"style":"BOLD","length":22,"offset":68},{"style":"BOLD","offset":93,"length":6},{"offset":118,"length":10,"style":"BOLD"}],"type":"unstyled","depth":0,"text":"You can also view an individual's account auditing logs by going to Azure Active Directory > Users > Click the user > Audit Logs."},{"type":"header-two","data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"text":"Auditing actions","key":"1a73s"},{"key":"2gv39","data":{},"inlineStyleRanges":[],"text":"Now that you have an understanding of auditing sign-ins and Active Directory account activity let's look at how to audit all the actions in Microsoft 365. You can review almost all activities in Microsoft 365. For example, you can review when a file is accessed and by whom. You can also view changes and access mailboxes. For example, you can view when an item is sent, moved, or updated. Before we can audit activity let's enable auditing.","type":"unstyled","entityRanges":[],"depth":0},{"type":"header-three","entityRanges":[],"data":{},"inlineStyleRanges":[],"depth":0,"text":"How to enable auditing in Microsoft 365","key":"39chi"},{"key":"2hkef","type":"unstyled","entityRanges":[],"text":"1. Go to Microsoft 365 Defender admin center > Audit. Click Start recording user and admin activity.","data":{},"inlineStyleRanges":[{"style":"BOLD","length":35,"offset":9},{"length":5,"offset":47,"style":"BOLD"},{"style":"BOLD","offset":60,"length":39}],"depth":0},{"entityRanges":[{"offset":0,"key":11,"length":1}],"data":{},"inlineStyleRanges":[],"key":"c4ng9","depth":0,"type":"atomic","text":" "},{"depth":0,"data":{},"key":"22r7n","text":"How to enable auditing on mailboxes","inlineStyleRanges":[],"type":"header-three","entityRanges":[]},{"key":"dpa0o","entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","depth":0,"data":{},"text":"Now that auditing is enabled for the Microsoft 365 tenant let's make sure auditing is enabled in Exchange Online. First, we'll enable auditing admin actions. This is good if you need to see who read and deleted items in a mailbox. Next, we'll enable auditing for each mailbox."},{"key":"4a6s","text":"How to enable admin auditing","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[],"type":"header-four"},{"inlineStyleRanges":[],"entityRanges":[],"text":"To enable Exchange auditing we'll need to use PowerShell.","depth":0,"key":"bf54u","data":{},"type":"unstyled"},{"type":"unstyled","entityRanges":[{"key":12,"offset":56,"length":22}],"text":"1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.","key":"3bt3c","depth":0,"data":{},"inlineStyleRanges":[{"length":22,"style":"BOLD","offset":56}]},{"type":"unstyled","data":{},"inlineStyleRanges":[{"style":"BOLD","length":102,"offset":30}],"entityRanges":[],"key":"aev","depth":0,"text":"2. Run the following command \"Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets * -AdminAuditLogParameters *\""},{"text":"3. Then run the following command \"Set-OrganizationConfig -AuditDisabled $false\"","type":"unstyled","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":35,"length":44,"style":"BOLD"}],"key":"2n90c"},{"data":{},"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"depth":0,"key":"6t4j6","text":"Note the stars in the log cmdlets and log parameters. These indicate we are auditing all cmdlets and all parameters. We can also limit the number of cmdlets audited by changing the cmdlets to *mailbox*. This will enable auditing for all PowerShell commands that use the mailbox word. For example, Set-Mailbox, Get-Mailbox, Set-MailboxFolder, Get-MailboxFolder, etc."},{"entityRanges":[],"data":{},"type":"header-four","inlineStyleRanges":[],"key":"3uou8","depth":0,"text":"How to enable auditing per mailbox"},{"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"data":{},"depth":0,"text":"Now that we've enabled auditing at the tenant level let's enable auditing on the mailbox level. Again, we'll be using Exchange Online PowerShell.","key":"9pib6"},{"data":{},"text":"1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.","depth":0,"key":"1ggk2","inlineStyleRanges":[{"style":"BOLD","length":22,"offset":56}],"type":"unstyled","entityRanges":[{"key":13,"length":22,"offset":56}]},{"text":"2. Run the following command \"Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner\"","depth":0,"type":"unstyled","data":{},"entityRanges":[],"key":"fkqgl","inlineStyleRanges":[{"length":104,"offset":30,"style":"BOLD"}]},{"depth":0,"type":"unstyled","data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"22ujg","text":"Note you can also enable auditing for one mailbox using the following command 'Set-Maibox -Identity \"User1\" -AuditEnabled $true' and replace User1 with the display name or user principal name of the account you want to enable auditing for."}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/SignIns"},"type":"LINK"},"1":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"Sign-in logs","width":"auto","height":"auto","src":"https://i.ibb.co/gSn6PVP/sign-in-logs.png"}},"2":{"type":"IMAGE","data":{"height":"auto","width":"auto","alignment":"none","src":"https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png","alt":"Sign-in logs for user"},"mutability":"MUTABLE"},"3":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/DDHPKTV/activity-details.png","alignment":"none","alt":"activity details","width":"auto","height":"auto"},"type":"IMAGE"},"4":{"mutability":"MUTABLE","data":{"alignment":"none","height":"auto","width":"auto","alt":"Location tab","src":"https://i.ibb.co/QY6q69M/location-tab.png"},"type":"IMAGE"},"5":{"mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/gZQ2vnG/device-info-tab.png","width":"auto","height":"auto","alt":"Device info tab"},"type":"IMAGE"},"6":{"data":{"height":"auto","width":"auto","alt":"Authentication Details","src":"https://i.ibb.co/85LXdWW/Authentication-Details.png","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"conditional access policy sign-in logs","width":"auto","src":"https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png","alignment":"none","height":"auto"}},"8":{"data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Audit","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"9":{"type":"IMAGE","data":{"width":"auto","src":"https://i.ibb.co/7GmvDjZ/view-audit-logs.png","height":"auto","alt":"View audit logs","alignment":"none"},"mutability":"MUTABLE"},"10":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/MsGraphUsers"}},"11":{"data":{"alignment":"none","height":"auto","alt":"Start recording user and admin activity","src":"https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"12":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L","targetOption":"_blank"}},"13":{"data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L"},"type":"LINK","mutability":"MUTABLE"}}},"type":"article","id":"sH_Ee1DW1","publish":true,"featuredImage":"https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png","description":"How do we audit/monitor the user's actions? First, let's take a look at sign-in logs. Then we'll jump into auditing all actions"},
      nextContentSlug: 'How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf',
      previousContentSlug: 'Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP',
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
                <div><p>So now we have Microsoft 365 fairly secure. There's one more question you should be asking yourself? How do we audit/monitor the user's actions? Before we jump into the logs there's something you should know. There are a couple of places for auditing but we'll keep it simple and stick to the two most common. First, let's take a look at sign-in logs. Next, we'll jump into auditing the Active Directory account auditing. Finally, we'll jump into auditing all actions.</p>
<h2>Sign-in logs</h2>
<p>Sign-in logs are probably the most common logs used in Microsoft 365. From there you can see when a user logs in, what location they signed in from, and much more. Let's jump in and take a look.</p>
<h3>How to view sign-in logs</h3>
<p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/SignIns" target="_blank"><strong>Sign-in logs</strong></a>.</p>
<div ><img src="https://i.ibb.co/gSn6PVP/sign-in-logs.png" alt="Sign-in logs" style="height: auto;width: auto"/></div>
<p>From here you can see all the sign-ins to your Microsoft 365 tenant. You can filter the log to see more particular information. Finally, you can view the same sign-in logs from Azure Active Directory admin center &gt; Enterprise applications &gt; Sign-in logs.</p>
<h3>How to view sign-in logs for a user</h3>
<p>Now, you can go to the sign-in logs, then add a filter for a particular user but that's a bit tedious. Since most of the time when you want to review sign-in logs you are looking at a particular user let's look at the sign-in logs another way. By having it automatically filtered for a user.</p>
<p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Users</strong>. <strong>Select the user</strong> you want to view.</p>
<div ><img src="https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png" alt="Sign-in logs for user" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Sign-in logs</strong>.</p>
<h3>How to read the sign-in logs</h3>
<p>Now that we are at the sign-in logs let's take a look at how to read them. Before we jump into reviewing one of the logs you should know one thing. The sign-in logs will show more than one sign-in for the user. For example, if you sign into the Microsoft 365 admin center and then navigate to the Azure AD admin center you'll see at least two "sign-ins". That's because every time you navigate to a different app in Microsoft 365 you are re-authenticating using the same token. Now, click one of the sign-ins to view the data.</p>
<h4>Basic info</h4>
<p>On the basic info tab, you can see, basic info on the sign-in. Surprised right? Anyway, from here you can see information like the user that the sign-in is related to, and what application they signed into.</p>
<div ><img src="https://i.ibb.co/DDHPKTV/activity-details.png" alt="activity details" style="height: auto;width: auto"/></div>
<h4>Location</h4>
<p>On the location tab, you'll find the information on where the user logged in from. For example, you'll see the IP address and the best guess on the actual location. For example, Philadelphia, PA, US.</p>
<div ><img src="https://i.ibb.co/QY6q69M/location-tab.png" alt="Location tab" style="height: auto;width: auto"/></div>
<h4>Device info</h4>
<p>From the device info tab, you'll find information about the device. If the device is in Azure AD, you may see a device name. If the sign-in is from a browser, you'll notice the browser is located in the device info tab.</p>
<div ><img src="https://i.ibb.co/gZQ2vnG/device-info-tab.png" alt="Device info tab" style="height: auto;width: auto"/></div>
<h4>Authentication Details</h4>
<p>The authentication details tab is where you'll find information about how the user signed in. For example, if it's the actual sign-in you may see "Password Hash Sync" or "Password in the cloud". If the user is already signed in and simply connecting to another service you'll see "Previously satisfied"</p>
<div ><img src="https://i.ibb.co/85LXdWW/Authentication-Details.png" alt="Authentication Details" style="height: auto;width: auto"/></div>
<h4>Conditional access</h4>
<p>The conditional access tab will show you what conditional access policies were applied and which were not. It will also show you the status of the conditional access policy. For example, if the policy failed (and blocked the sign-in) then it will show Failure. Lastly, you can click the policy name to see information about the conditions and access controls. That way you can see why a policy failed, succeeded or didn't apply.</p>
<div ><img src="https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png" alt="conditional access policy sign-in logs" style="height: auto;width: auto"/></div>
<h4>Report only</h4>
<p>The report-only tab will show you conditional access policies that are in report-only mode. They won't block the sign-in but that way you can test your conditional access policies before applying them.</p>
<h4>Additional details</h4>
<p>This tab is typically empty.</p>
<h2>Account auditing</h2>
<p>What do I mean by account auditing? Well, every time you make a change to a user account it is logged in the Azure audit logs. For example, if you update the user display name or change the licenses assigned to a user, you'll see it in the account auditing logs.</p>
<h3>How to view account logs for the tenant</h3>
<p>Just like the sign-in logs except it's one option lower (or up depending on where you are)</p>
<p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Audit" target="_blank"><strong>Audit logs</strong></a>.</p>
<div ><img src="https://i.ibb.co/7GmvDjZ/view-audit-logs.png" alt="View audit logs" style="height: auto;width: auto"/></div>
<p>You can also view an individual's account auditing logs by going to <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/MsGraphUsers" target="_blank"><strong>Users </strong></a>&gt; Click the user &gt; <strong>Audit Logs</strong>.</p>
<h2>Auditing actions</h2>
<p>Now that you have an understanding of auditing sign-ins and Active Directory account activity let's look at how to audit all the actions in Microsoft 365. You can review almost all activities in Microsoft 365. For example, you can review when a file is accessed and by whom. You can also view changes and access mailboxes. For example, you can view when an item is sent, moved, or updated. Before we can audit activity let's enable auditing.</p>
<h3>How to enable auditing in Microsoft 365</h3>
<p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Audit</strong>. Click <strong>Start recording user and admin activity</strong>.</p>
<div ><img src="https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png" alt="Start recording user and admin activity" style="height: auto;width: auto"/></div>
<h3>How to enable auditing on mailboxes</h3>
<p>Now that auditing is enabled for the Microsoft 365 tenant let's make sure auditing is enabled in Exchange Online. First, we'll enable auditing admin actions. This is good if you need to see who read and deleted items in a mailbox. Next, we'll enable auditing for each mailbox.</p>
<h4>How to enable admin auditing</h4>
<p>To enable Exchange auditing we'll need to use PowerShell.</p>
<p>1. Open PowerShell and connect to Exchange Online using <a href="https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L" target="_blank"><strong>Connect-ExchangeOnline</strong></a>.</p>
<p>2. Run the following command "<strong>Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets * -AdminAuditLogParameters *</strong>"</p>
<p>3. Then run the following command "<strong>Set-OrganizationConfig -AuditDisabled $false</strong>"</p>
<p>Note the stars in the log cmdlets and log parameters. These indicate we are auditing all cmdlets and all parameters. We can also limit the number of cmdlets audited by changing the cmdlets to *mailbox*. This will enable auditing for all PowerShell commands that use the mailbox word. For example, Set-Mailbox, Get-Mailbox, Set-MailboxFolder, Get-MailboxFolder, etc.</p>
<h4>How to enable auditing per mailbox</h4>
<p>Now that we've enabled auditing at the tenant level let's enable auditing on the mailbox level. Again, we'll be using Exchange Online PowerShell.</p>
<p>1. Open PowerShell and connect to Exchange Online using <a href="https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L" target="_blank"><strong>Connect-ExchangeOnline</strong></a>.</p>
<p>2. Run the following command "<strong>Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owne</strong>r"</p>
<p>Note you can also enable auditing for one mailbox using the following command 'Set-Maibox -Identity "User1" -AuditEnabled $true' and replace User1 with the display name or user principal name of the account you want to enable auditing for.</p>
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
