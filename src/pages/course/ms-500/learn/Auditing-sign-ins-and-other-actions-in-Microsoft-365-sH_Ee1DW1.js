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
      article: {"type":"article","slug":"Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1","publish":true,"article":{"entityMap":{"0":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/SignIns"},"type":"LINK"},"1":{"mutability":"MUTABLE","data":{"alignment":"none","height":"auto","alt":"Sign-in logs","src":"https://i.ibb.co/gSn6PVP/sign-in-logs.png","width":"auto"},"type":"IMAGE"},"2":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","src":"https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png","alt":"Sign-in logs for user","height":"auto","width":"auto"}},"3":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","height":"auto","width":"auto","src":"https://i.ibb.co/DDHPKTV/activity-details.png","alt":"activity details"}},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Location tab","height":"auto","src":"https://i.ibb.co/QY6q69M/location-tab.png","alignment":"none","width":"auto"}},"5":{"type":"IMAGE","data":{"alignment":"none","height":"auto","src":"https://i.ibb.co/gZQ2vnG/device-info-tab.png","width":"auto","alt":"Device info tab"},"mutability":"MUTABLE"},"6":{"data":{"alignment":"none","src":"https://i.ibb.co/85LXdWW/Authentication-Details.png","height":"auto","alt":"Authentication Details","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"type":"IMAGE","data":{"width":"auto","alt":"conditional access policy sign-in logs","src":"https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png","alignment":"none","height":"auto"},"mutability":"MUTABLE"},"8":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Audit"}},"9":{"mutability":"MUTABLE","data":{"alignment":"none","alt":"View audit logs","src":"https://i.ibb.co/7GmvDjZ/view-audit-logs.png","height":"auto","width":"auto"},"type":"IMAGE"},"10":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/MsGraphUsers"},"type":"LINK"},"11":{"data":{"alignment":"none","height":"auto","width":"auto","alt":"Start recording user and admin activity","src":"https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png"},"mutability":"MUTABLE","type":"IMAGE"},"12":{"data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L"},"mutability":"MUTABLE","type":"LINK"},"13":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L"}}},"blocks":[{"entityRanges":[],"key":"4k1ep","depth":0,"text":"So now we have Microsoft 365 fairly secure. There's one more question you should be asking yourself? How do we audit/monitor the user's actions? Before we jump into the logs there's something you should know. There are a couple of places for auditing but we'll keep it simple and stick to the two most common. First, let's take a look at sign-in logs. Next, we'll jump into auditing the Active Directory account auditing. Finally, we'll jump into auditing all actions.","data":{},"inlineStyleRanges":[],"type":"unstyled"},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"9rld5","depth":0,"text":"Sign-in logs","type":"header-two"},{"entityRanges":[],"inlineStyleRanges":[],"key":"1dhu1","data":{},"depth":0,"type":"unstyled","text":"Sign-in logs are probably the most common logs used in Microsoft 365. From there you can see when a user logs in, what location they signed in from, and much more. Let's jump in and take a look."},{"data":{},"text":"How to view sign-in logs","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"header-three","key":"1jgfa"},{"entityRanges":[{"key":0,"length":12,"offset":72}],"inlineStyleRanges":[{"length":35,"offset":9,"style":"BOLD"},{"length":22,"offset":47,"style":"BOLD"},{"style":"BOLD","offset":72,"length":12}],"text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Sign-in logs.","type":"unstyled","key":"dtl0m","depth":0,"data":{}},{"inlineStyleRanges":[],"text":" ","data":{},"depth":0,"key":"644dd","type":"atomic","entityRanges":[{"length":1,"offset":0,"key":1}]},{"inlineStyleRanges":[],"entityRanges":[],"key":"4qlhl","data":{},"depth":0,"text":"From here you can see all the sign-ins to your Microsoft 365 tenant. You can filter the log to see more particular information. Finally, you can view the same sign-in logs from Azure Active Directory admin center > Enterprise applications > Sign-in logs.","type":"unstyled"},{"entityRanges":[],"key":"am3eg","type":"header-three","inlineStyleRanges":[],"depth":0,"data":{},"text":"How to view sign-in logs for a user"},{"text":"Now, you can go to the sign-in logs, then add a filter for a particular user but that's a bit tedious. Since most of the time when you want to review sign-in logs you are looking at a particular user let's look at the sign-in logs another way. By having it automatically filtered for a user.","data":{},"inlineStyleRanges":[],"depth":0,"type":"unstyled","entityRanges":[],"key":"7dggt"},{"key":"3v6ql","data":{},"text":"1. Go to Azure Active Directory admin center > Users. Select the user you want to view.","entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"length":35,"offset":9,"style":"BOLD"},{"style":"BOLD","length":5,"offset":47},{"style":"BOLD","length":15,"offset":54}],"depth":0},{"entityRanges":[{"length":1,"key":2,"offset":0}],"type":"atomic","data":{},"depth":0,"inlineStyleRanges":[],"key":"6ubvc","text":" "},{"key":"76uig","type":"unstyled","entityRanges":[],"data":{},"text":"2. Click Sign-in logs.","depth":0,"inlineStyleRanges":[{"offset":9,"length":12,"style":"BOLD"}]},{"data":{},"entityRanges":[],"depth":0,"key":"7s3jk","inlineStyleRanges":[],"type":"header-three","text":"How to read the sign-in logs"},{"key":"ah773","type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"text":"Now that we are at the sign-in logs let's take a look at how to read them. Before we jump into reviewing one of the logs you should know one thing. The sign-in logs will show more than one sign-in for the user. For example, if you sign into the Microsoft 365 admin center and then navigate to the Azure AD admin center you'll see at least two \"sign-ins\". That's because every time you navigate to a different app in Microsoft 365 you are re-authenticating using the same token. Now, click one of the sign-ins to view the data.","depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[],"key":"2c454","text":"Basic info","data":{},"entityRanges":[],"type":"header-four"},{"type":"unstyled","depth":0,"inlineStyleRanges":[],"key":"cudm9","data":{},"text":"On the basic info tab, you can see, basic info on the sign-in. Surprised right? Anyway, from here you can see information like the user that the sign-in is related to, and what application they signed into.","entityRanges":[]},{"entityRanges":[{"key":3,"length":1,"offset":0}],"type":"atomic","inlineStyleRanges":[],"text":" ","data":{},"depth":0,"key":"b72rs"},{"data":{},"inlineStyleRanges":[],"depth":0,"key":"3ra3t","text":"Location","entityRanges":[],"type":"header-four"},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"dgb8s","depth":0,"type":"unstyled","text":"On the location tab, you'll find the information on where the user logged in from. For example, you'll see the IP address and the best guess on the actual location. For example, Philadelphia, PA, US."},{"data":{},"entityRanges":[{"length":1,"key":4,"offset":0}],"key":"cnldh","depth":0,"text":" ","type":"atomic","inlineStyleRanges":[]},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"type":"header-four","text":"Device info","key":"8h6ht","data":{}},{"type":"unstyled","entityRanges":[],"text":"From the device info tab, you'll find information about the device. If the device is in Azure AD, you may see a device name. If the sign-in is from a browser, you'll notice the browser is located in the device info tab.","inlineStyleRanges":[],"data":{},"key":"1a5vn","depth":0},{"type":"atomic","depth":0,"inlineStyleRanges":[],"text":" ","key":"ag6o7","entityRanges":[{"length":1,"key":5,"offset":0}],"data":{}},{"key":"6uv82","depth":0,"data":{},"text":"Authentication Details","inlineStyleRanges":[],"entityRanges":[],"type":"header-four"},{"key":"2ahih","entityRanges":[],"text":"The authentication details tab is where you'll find information about how the user signed in. For example, if it's the actual sign-in you may see \"Password Hash Sync\" or \"Password in the cloud\". If the user is already signed in and simply connecting to another service you'll see \"Previously satisfied\"","inlineStyleRanges":[],"depth":0,"data":{},"type":"unstyled"},{"text":" ","entityRanges":[{"key":6,"length":1,"offset":0}],"depth":0,"inlineStyleRanges":[],"data":{},"key":"2barj","type":"atomic"},{"data":{},"inlineStyleRanges":[],"key":"46gej","type":"header-four","text":"Conditional access","depth":0,"entityRanges":[]},{"inlineStyleRanges":[],"text":"The conditional access tab will show you what conditional access policies were applied and which were not. It will also show you the status of the conditional access policy. For example, if the policy failed (and blocked the sign-in) then it will show Failure. Lastly, you can click the policy name to see information about the conditions and access controls. That way you can see why a policy failed, succeeded or didn't apply.","entityRanges":[],"key":"3hgv0","data":{},"type":"unstyled","depth":0},{"inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"offset":0,"key":7}],"key":"qbb2","data":{},"depth":0,"type":"atomic"},{"text":"Report only","entityRanges":[],"type":"header-four","data":{},"key":"5gacl","depth":0,"inlineStyleRanges":[]},{"type":"unstyled","data":{},"depth":0,"entityRanges":[],"text":"The report-only tab will show you conditional access policies that are in report-only mode. They won't block the sign-in but that way you can test your conditional access policies before applying them.","inlineStyleRanges":[],"key":"fa3lh"},{"key":"1g3jb","text":"Additional details","inlineStyleRanges":[],"data":{},"entityRanges":[],"type":"header-four","depth":0},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"data":{},"key":"8qmpk","text":"This tab is typically empty.","type":"unstyled"},{"type":"header-two","depth":0,"key":"6dkc0","entityRanges":[],"inlineStyleRanges":[],"data":{},"text":"Account auditing"},{"depth":0,"text":"What do I mean by account auditing? Well, every time you make a change to a user account it is logged in the Azure audit logs. For example, if you update the user display name or change the licenses assigned to a user, you'll see it in the account auditing logs.","inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"hoh1","data":{}},{"entityRanges":[],"key":"e7bp1","inlineStyleRanges":[],"depth":0,"text":"How to view account logs for the tenant","data":{},"type":"header-three"},{"depth":0,"entityRanges":[],"key":"4m2c7","type":"unstyled","data":{},"inlineStyleRanges":[],"text":"Just like the sign-in logs except it's one option lower (or up depending on where you are)"},{"text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Audit logs.","type":"unstyled","entityRanges":[{"key":8,"length":10,"offset":72}],"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":35},{"offset":47,"length":22,"style":"BOLD"},{"length":10,"style":"BOLD","offset":72}],"key":"cjpb3","data":{},"depth":0},{"entityRanges":[{"offset":0,"key":9,"length":1}],"key":"987gc","data":{},"type":"atomic","text":" ","depth":0,"inlineStyleRanges":[]},{"depth":0,"entityRanges":[{"key":10,"offset":93,"length":6}],"type":"unstyled","text":"You can also view an individual's account auditing logs by going to Azure Active Directory > Users > Click the user > Audit Logs.","data":{},"inlineStyleRanges":[{"offset":68,"length":22,"style":"BOLD"},{"offset":93,"style":"BOLD","length":6},{"length":10,"offset":118,"style":"BOLD"}],"key":"97cub"},{"data":{},"key":"1a73s","depth":0,"type":"header-two","entityRanges":[],"inlineStyleRanges":[],"text":"Auditing actions"},{"depth":0,"key":"2gv39","inlineStyleRanges":[],"text":"Now that you have an understanding of auditing sign-ins and Active Directory account activity let's look at how to audit all the actions in Microsoft 365. You can review almost all activities in Microsoft 365. For example, you can review when a file is accessed and by whom. You can also view changes and access mailboxes. For example, you can view when an item is sent, moved, or updated. Before we can audit activity let's enable auditing.","entityRanges":[],"data":{},"type":"unstyled"},{"inlineStyleRanges":[],"key":"39chi","depth":0,"type":"header-three","entityRanges":[],"text":"How to enable auditing in Microsoft 365","data":{}},{"type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[{"offset":9,"length":35,"style":"BOLD"},{"style":"BOLD","offset":47,"length":5},{"style":"BOLD","length":39,"offset":60}],"key":"2hkef","depth":0,"text":"1. Go to Microsoft 365 Defender admin center > Audit. Click Start recording user and admin activity."},{"key":"c4ng9","inlineStyleRanges":[],"text":" ","entityRanges":[{"offset":0,"length":1,"key":11}],"depth":0,"data":{},"type":"atomic"},{"key":"22r7n","inlineStyleRanges":[],"text":"How to enable auditing on mailboxes","entityRanges":[],"depth":0,"data":{},"type":"header-three"},{"inlineStyleRanges":[],"depth":0,"data":{},"text":"Now that auditing is enabled for the Microsoft 365 tenant let's make sure auditing is enabled in Exchange Online. First, we'll enable auditing admin actions. This is good if you need to see who read and deleted items in a mailbox. Next, we'll enable auditing for each mailbox.","key":"dpa0o","type":"unstyled","entityRanges":[]},{"inlineStyleRanges":[],"depth":0,"type":"header-four","text":"How to enable admin auditing","key":"4a6s","data":{},"entityRanges":[]},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"data":{},"key":"bf54u","type":"unstyled","text":"To enable Exchange auditing we'll need to use PowerShell."},{"data":{},"entityRanges":[{"length":22,"offset":56,"key":12}],"key":"3bt3c","type":"unstyled","depth":0,"text":"1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.","inlineStyleRanges":[{"offset":56,"style":"BOLD","length":22}]},{"depth":0,"data":{},"inlineStyleRanges":[{"length":102,"offset":30,"style":"BOLD"}],"text":"2. Run the following command \"Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets * -AdminAuditLogParameters *\"","type":"unstyled","key":"aev","entityRanges":[]},{"depth":0,"data":{},"type":"unstyled","text":"3. Then run the following command \"Set-OrganizationConfig -AuditDisabled $false\"","key":"2n90c","inlineStyleRanges":[{"length":44,"offset":35,"style":"BOLD"}],"entityRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"key":"6t4j6","text":"Note the stars in the log cmdlets and log parameters. These indicate we are auditing all cmdlets and all parameters. We can also limit the number of cmdlets audited by changing the cmdlets to *mailbox*. This will enable auditing for all PowerShell commands that use the mailbox word. For example, Set-Mailbox, Get-Mailbox, Set-MailboxFolder, Get-MailboxFolder, etc.","data":{},"depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"text":"How to enable auditing per mailbox","data":{},"type":"header-four","entityRanges":[],"depth":0,"key":"3uou8"},{"data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"9pib6","text":"Now that we've enabled auditing at the tenant level let's enable auditing on the mailbox level. Again, we'll be using Exchange Online PowerShell.","type":"unstyled"},{"type":"unstyled","data":{},"text":"1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.","entityRanges":[{"offset":56,"key":13,"length":22}],"key":"1ggk2","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":22,"offset":56}]},{"type":"unstyled","text":"2. Run the following command \"Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner\"","data":{},"entityRanges":[],"depth":0,"key":"fkqgl","inlineStyleRanges":[{"style":"BOLD","length":104,"offset":30}]},{"entityRanges":[],"type":"unstyled","depth":0,"inlineStyleRanges":[],"key":"22ujg","text":"Note you can also enable auditing for one mailbox using the following command 'Set-Maibox -Identity \"User1\" -AuditEnabled $true' and replace User1 with the display name or user principal name of the account you want to enable auditing for.","data":{}}]},"datePublished":"2022/6/28","images":["https://i.ibb.co/gSn6PVP/sign-in-logs.png","https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png","https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png","https://i.ibb.co/DDHPKTV/activity-details.png","https://i.ibb.co/QY6q69M/location-tab.png","https://i.ibb.co/gZQ2vnG/device-info-tab.png","https://i.ibb.co/85LXdWW/Authentication-Details.png","https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png","https://i.ibb.co/7GmvDjZ/view-audit-logs.png","https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png"],"id":"sH_Ee1DW1","featuredImage":"https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png","sectionId":"QScYfSu74","title":"Auditing sign-ins and other actions in Microsoft 365","description":"How do we audit/monitor the user's actions? First, let's take a look at sign-in logs. Then we'll jump into auditing all actions"},
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
