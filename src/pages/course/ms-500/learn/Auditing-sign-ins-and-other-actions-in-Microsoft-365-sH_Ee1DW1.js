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
    this.mountAds1 = this.mountAds1.bind(this)
    this.mountAds2 = this.mountAds2.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4k1ep', text: 'So now we have Microsoft 365 fairly secure. There\'s one more question you should be asking yourself. How do we audit/monitor the user\'s actions? Before we jump into the logs there\'s something you should know. There are a couple of places for auditing but we\'ll keep it simple and stick to the two most common. First, let\'s take a look at sign-in logs. Next, we\'ll jump into auditing the Active Directory account auditing. Finally, we\'ll jump into auditing all actions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9rld5', text: 'Sign-in logs', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1dhu1', text: 'Sign-in logs are probably the most common logs used in Microsoft 365. From there you can see when a user logs in, what location they signed in from, and much more. Let\'s jump in and take a look.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1jgfa', text: 'How to view sign-in logs', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 12, offset: 72}], inlineStyleRanges: [{length: 35, offset: 9, style: 'BOLD'}, {length: 22, offset: 47, style: 'BOLD'}, {length: 12, offset: 72, style: 'BOLD'}], key: 'dtl0m', text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Sign-in logs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '644dd', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4qlhl', text: 'From here you can see all the sign-ins to your Microsoft 365 tenant. You can filter the log to see more particular information. Finally, you can view the same sign-in logs from Azure Active Directory admin center > Enterprise applications > Sign-in logs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'am3eg', text: 'How to view sign-in logs for a user', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7dggt', text: 'Now, you can go to the sign-in logs, then add a filter for a particular user but that\'s a bit tedious. Since most of the time when you want to review sign-in logs, you are looking at a particular user let\'s look at the sign-in logs another way. By having it automatically filtered for a user.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 9, style: 'BOLD'}, {length: 5, offset: 47, style: 'BOLD'}, {length: 15, offset: 54, style: 'BOLD'}], key: '3v6ql', text: '1. Go to Azure Active Directory admin center > Users. Select the user you want to view.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '6ubvc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 9, style: 'BOLD'}], key: '76uig', text: '2. Click Sign-in logs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7s3jk', text: 'How to read the sign-in logs', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ah773', text: 'Now that we are at the sign-in logs let\'s take a look at how to read them. Before we jump into reviewing one of the logs you should know one thing. The sign-in logs will show more than one sign-in for the user. For example, if you sign into the Microsoft 365 admin center and then navigate to the Azure AD admin center you\'ll see at least two "sign-ins". That\'s because every time you navigate to a different app in Microsoft 365 you are re-authenticating using the same token. Now, click one of the sign-ins to view the data.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2c454', text: 'Basic info', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cudm9', text: 'On the basic info tab, you can see, basic info on the sign-in. Surprised right? Anyway, from here you can see information like the user that the sign-in is related to, and what application they signed into.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b72rs', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3ra3t', text: 'Location', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dgb8s', text: 'On the location tab, you\'ll find the information on where the user logged in from. For example, you\'ll see the IP address and the best guess on the actual location. For example, Philadelphia, PA, US.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cnldh', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8h6ht', text: 'Device info', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1a5vn', text: 'From the device info tab, you\'ll find information about the device. If the device is in Azure AD, you may see a device name. If the sign-in is from a browser, you\'ll notice the browser is located in the device info tab.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ag6o7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6uv82', text: 'Authentication Details', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2ahih', text: 'The authentication details tab is where you\'ll find information about how the user signed in. For example, if it\'s the actual sign-in you may see "Password Hash Sync" or "Password in the cloud". If the user is already signed in and simply connecting to another service you\'ll see "Previously satisfied"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '2barj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '46gej', text: 'Conditional access', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3hgv0', text: 'The conditional access tab will show you what conditional access policies were applied and which were not. It will also show you the status of the conditional access policy. For example, if the policy failed (and blocked the sign-in) then it will show Failure. Lastly, you can click the policy name to see information about the conditions and access controls. That way you can see why a policy failed, succeeded or didn\'t apply.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'qbb2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5gacl', text: 'Report only', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fa3lh', text: 'The report-only tab will show you conditional access policies that are in report-only mode. They won\'t block the sign-in but that way you can test your conditional access policies before applying them.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1g3jb', text: 'Additional details', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8qmpk', text: 'This tab is typically empty.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6dkc0', text: 'Account auditing', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'hoh1', text: 'What do I mean by account auditing? Well, every time you make a change to a user account it is logged in the Azure audit logs. For example, if you update the user display name or change the licenses assigned to a user, you\'ll see it in the account auditing logs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e7bp1', text: 'How to view account logs for the tenant', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4m2c7', text: 'Just like the sign-in logs except its one option lower (or up depending on where you are)', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 10, offset: 72}], inlineStyleRanges: [{length: 35, offset: 9, style: 'BOLD'}, {length: 22, offset: 47, style: 'BOLD'}, {length: 10, offset: 72, style: 'BOLD'}], key: 'cjpb3', text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Audit logs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '987gc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 6, offset: 93}], inlineStyleRanges: [{length: 22, offset: 68, style: 'BOLD'}, {length: 6, offset: 93, style: 'BOLD'}, {length: 10, offset: 118, style: 'BOLD'}], key: '97cub', text: 'You can also view an individual\'s account auditing logs by going to Azure Active Directory > Users > Click the user > Audit Logs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1a73s', text: 'Auditing actions', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2gv39', text: 'Now that you have an understanding of auditing sign-ins and Active Directory account activity let\'s look at how to audit all the actions in Microsoft 365. You can review almost all activities in Microsoft 365. For example, you can review when a file is accessed and by whom. You can also view changes and access mailboxes. For example, you can view when an item is sent, moved, or updated. Before we can audit activity let\'s enable auditing.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '39chi', text: 'How to enable auditing in Microsoft 365', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 9, style: 'BOLD'}, {length: 5, offset: 47, style: 'BOLD'}, {length: 39, offset: 60, style: 'BOLD'}], key: '2hkef', text: '1. Go to Microsoft 365 Defender admin center > Audit. Click Start recording user and admin activity.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c4ng9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '22r7n', text: 'How to enable auditing on mailboxes', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dpa0o', text: 'Now that auditing is enabled for the Microsoft 365 tenant let\'s make sure auditing is enabled in Exchange Online. First, we\'ll enable auditing admin actions. This is good if you need to see who read and deleted items in a mailbox. Next, we\'ll enable auditing for each mailbox.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4a6s', text: 'How to enable admin auditing', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bf54u', text: 'To enable Exchange auditing we\'ll need to use PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 22, offset: 56}], inlineStyleRanges: [{length: 22, offset: 56, style: 'BOLD'}], key: '3bt3c', text: '1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 102, offset: 30, style: 'BOLD'}], key: 'aev', text: '2. Run the following command "Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets * -AdminAuditLogParameters *"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 44, offset: 35, style: 'BOLD'}], key: '2n90c', text: '3. Then run the following command "Set-OrganizationConfig -AuditDisabled $false"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6t4j6', text: 'Note the stars in the log cmdlets and log parameters. These indicate we are auditing all cmdlets and all parameters. We can also limit the number of cmdlets audited by changing the cmdlets to *mailbox*. This will enable auditing for all PowerShell commands that use the mailbox word. For example, Set-Mailbox, Get-Mailbox, Set-MailboxFolder, Get-MailboxFolder, etc.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3uou8', text: 'How to enable auditing per mailbox', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9pib6', text: 'Now that we\'ve enabled auditing at the tenant level let\'s enable auditing on the mailbox level. Again, we\'ll be using Exchange Online PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 22, offset: 56}], inlineStyleRanges: [{length: 22, offset: 56, style: 'BOLD'}], key: '1ggk2', text: '1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 104, offset: 30, style: 'BOLD'}], key: 'fkqgl', text: '2. Run the following command "Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '22ujg', text: 'Note you can also enable auditing for one mailbox using the following command \'Set-Maibox -Identity "User1" -AuditEnabled $true\' and replace User1 with the display name or user principal name of the account you want to enable auditing for.', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/SignIns'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Sign-in logs', height: 'auto', src: 'https://i.ibb.co/gSn6PVP/sign-in-logs.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/MsGraphUsers'}, mutability: 'MUTABLE', type: 'LINK'}, 11: {data: {alignment: 'none', alt: 'Start recording user and admin activity', height: 'auto', src: 'https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L'}, mutability: 'MUTABLE', type: 'LINK'}, 13: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {alignment: 'none', alt: 'Sign-in logs for user', height: 'auto', src: 'https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'activity details', height: 'auto', src: 'https://i.ibb.co/DDHPKTV/activity-details.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Location tab', height: 'auto', src: 'https://i.ibb.co/QY6q69M/location-tab.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Device info tab', height: 'auto', src: 'https://i.ibb.co/gZQ2vnG/device-info-tab.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Authentication Details', height: 'auto', src: 'https://i.ibb.co/85LXdWW/Authentication-Details.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'conditional access policy sign-in logs', height: 'auto', src: 'https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Audit'}, mutability: 'MUTABLE', type: 'LINK'}, 9: {data: {alignment: 'none', alt: 'View audit logs', height: 'auto', src: 'https://i.ibb.co/7GmvDjZ/view-audit-logs.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/6/28', description: 'How do we audit/monitor the user\'s actions? First, let\'s take a look at sign-in logs. Then we\'ll jump into auditing all actions', featuredImage: 'https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png', id: 'sH_Ee1DW1', images: ['https://i.ibb.co/gSn6PVP/sign-in-logs.png', 'https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png', 'https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png', 'https://i.ibb.co/DDHPKTV/activity-details.png', 'https://i.ibb.co/QY6q69M/location-tab.png', 'https://i.ibb.co/gZQ2vnG/device-info-tab.png', 'https://i.ibb.co/85LXdWW/Authentication-Details.png', 'https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png', 'https://i.ibb.co/7GmvDjZ/view-audit-logs.png', 'https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png'], publish: true, sectionId: 'QScYfSu74', slug: 'Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', title: 'Auditing sign-ins and other actions in Microsoft 365', type: 'article'},
      nextContentSlug: 'test/auditing-sign-ins-and-microsoft-sentinel-g8uabkfyn',
      previousContentSlug: 'learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
    this.mountAds1()
    this.mountAds2()
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

  mountAds1() {
    (function(w, d, s, i) {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664931508787046, size: [0, 0], id: 'ld-534-9587'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
  }

  mountAds2() {
    ((w, d, s, i)=> {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664932884518758, size: [0, 0], id: 'ld-7740-2760'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
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
                  <div id="ld-534-9587" />
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>So now we have Microsoft 365 fairly secure. There's one more question you should be asking yourself. How do we audit/monitor the user's actions? Before we jump into the logs there's something you should know. There are a couple of places for auditing but we'll keep it simple and stick to the two most common. First, let's take a look at sign-in logs. Next, we'll jump into auditing the Active Directory account auditing. Finally, we'll jump into auditing all actions.</p>
                    <div id="ld-7740-2760" /><h2>Sign-in logs</h2>
                    <p>Sign-in logs are probably the most common logs used in Microsoft 365. From there you can see when a user logs in, what location they signed in from, and much more. Let's jump in and take a look.</p>
                    <h3>How to view sign-in logs</h3>
                    <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/SignIns" target="_blank" rel="noreferrer"><strong>Sign-in logs</strong></a>.</p>
                    <div ><img src="https://i.ibb.co/gSn6PVP/sign-in-logs.png" alt="Sign-in logs" height="auto" width="auto" /></div>
                    <p>From here you can see all the sign-ins to your Microsoft 365 tenant. You can filter the log to see more particular information. Finally, you can view the same sign-in logs from Azure Active Directory admin center &gt; Enterprise applications &gt; Sign-in logs.</p>
                    <h3>How to view sign-in logs for a user</h3>
                    <p>Now, you can go to the sign-in logs, then add a filter for a particular user but that's a bit tedious. Since most of the time when you want to review sign-in logs, you are looking at a particular user let's look at the sign-in logs another way. By having it automatically filtered for a user.</p>
                    <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Users</strong>. <strong>Select the user</strong> you want to view.</p>
                    <div ><img src="https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png" alt="Sign-in logs for user" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Sign-in logs</strong>.</p>
                    <h3>How to read the sign-in logs</h3>
                    <p>Now that we are at the sign-in logs let's take a look at how to read them. Before we jump into reviewing one of the logs you should know one thing. The sign-in logs will show more than one sign-in for the user. For example, if you sign into the Microsoft 365 admin center and then navigate to the Azure AD admin center you'll see at least two "sign-ins". That's because every time you navigate to a different app in Microsoft 365 you are re-authenticating using the same token. Now, click one of the sign-ins to view the data.</p>
                    <h4>Basic info</h4>
                    <p>On the basic info tab, you can see, basic info on the sign-in. Surprised right? Anyway, from here you can see information like the user that the sign-in is related to, and what application they signed into.</p>
                    <div ><img src="https://i.ibb.co/DDHPKTV/activity-details.png" alt="activity details" height="auto" width="auto" /></div>
                    <h4>Location</h4>
                    <p>On the location tab, you'll find the information on where the user logged in from. For example, you'll see the IP address and the best guess on the actual location. For example, Philadelphia, PA, US.</p>
                    <div ><img src="https://i.ibb.co/QY6q69M/location-tab.png" alt="Location tab" height="auto" width="auto" /></div>
                    <h4>Device info</h4>
                    <p>From the device info tab, you'll find information about the device. If the device is in Azure AD, you may see a device name. If the sign-in is from a browser, you'll notice the browser is located in the device info tab.</p>
                    <div ><img src="https://i.ibb.co/gZQ2vnG/device-info-tab.png" alt="Device info tab" height="auto" width="auto" /></div>
                    <h4>Authentication Details</h4>
                    <p>The authentication details tab is where you'll find information about how the user signed in. For example, if it's the actual sign-in you may see "Password Hash Sync" or "Password in the cloud". If the user is already signed in and simply connecting to another service you'll see "Previously satisfied"</p>
                    <div ><img src="https://i.ibb.co/85LXdWW/Authentication-Details.png" alt="Authentication Details" height="auto" width="auto" /></div>
                    <h4>Conditional access</h4>
                    <p>The conditional access tab will show you what conditional access policies were applied and which were not. It will also show you the status of the conditional access policy. For example, if the policy failed (and blocked the sign-in) then it will show Failure. Lastly, you can click the policy name to see information about the conditions and access controls. That way you can see why a policy failed, succeeded or didn't apply.</p>
                    <div ><img src="https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png" alt="conditional access policy sign-in logs" height="auto" width="auto" /></div>
                    <h4>Report only</h4>
                    <p>The report-only tab will show you conditional access policies that are in report-only mode. They won't block the sign-in but that way you can test your conditional access policies before applying them.</p>
                    <h4>Additional details</h4>
                    <p>This tab is typically empty.</p>
                    <h2>Account auditing</h2>
                    <p>What do I mean by account auditing? Well, every time you make a change to a user account it is logged in the Azure audit logs. For example, if you update the user display name or change the licenses assigned to a user, you'll see it in the account auditing logs.</p>
                    <h3>How to view account logs for the tenant</h3>
                    <p>Just like the sign-in logs except its one option lower (or up depending on where you are)</p>
                    <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Audit" target="_blank" rel="noreferrer"><strong>Audit logs</strong></a>.</p>
                    <div ><img src="https://i.ibb.co/7GmvDjZ/view-audit-logs.png" alt="View audit logs" height="auto" width="auto" /></div>
                    <p>You can also view an individual's account auditing logs by going to <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/MsGraphUsers" target="_blank" rel="noreferrer"><strong>Users </strong></a>&gt; Click the user &gt; <strong>Audit Logs</strong>.</p>
                    <h2>Auditing actions</h2>
                    <p>Now that you have an understanding of auditing sign-ins and Active Directory account activity let's look at how to audit all the actions in Microsoft 365. You can review almost all activities in Microsoft 365. For example, you can review when a file is accessed and by whom. You can also view changes and access mailboxes. For example, you can view when an item is sent, moved, or updated. Before we can audit activity let's enable auditing.</p>
                    <h3>How to enable auditing in Microsoft 365</h3>
                    <p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Audit</strong>. Click <strong>Start recording user and admin activity</strong>.</p>
                    <div ><img src="https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png" alt="Start recording user and admin activity" height="auto" width="auto" /></div>
                    <h3>How to enable auditing on mailboxes</h3>
                    <p>Now that auditing is enabled for the Microsoft 365 tenant let's make sure auditing is enabled in Exchange Online. First, we'll enable auditing admin actions. This is good if you need to see who read and deleted items in a mailbox. Next, we'll enable auditing for each mailbox.</p>
                    <h4>How to enable admin auditing</h4>
                    <p>To enable Exchange auditing we'll need to use PowerShell.</p>
                    <p>1. Open PowerShell and connect to Exchange Online using <a href="https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L" target="_blank" rel="noreferrer"><strong>Connect-ExchangeOnline</strong></a>.</p>
                    <p>2. Run the following command "<strong>Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets * -AdminAuditLogParameters *</strong>"</p>
                    <p>3. Then run the following command "<strong>Set-OrganizationConfig -AuditDisabled $false</strong>"</p>
                    <p>Note the stars in the log cmdlets and log parameters. These indicate we are auditing all cmdlets and all parameters. We can also limit the number of cmdlets audited by changing the cmdlets to *mailbox*. This will enable auditing for all PowerShell commands that use the mailbox word. For example, Set-Mailbox, Get-Mailbox, Set-MailboxFolder, Get-MailboxFolder, etc.</p>
                    <h4>How to enable auditing per mailbox</h4>
                    <p>Now that we've enabled auditing at the tenant level let's enable auditing on the mailbox level. Again, we'll be using Exchange Online PowerShell.</p>
                    <p>1. Open PowerShell and connect to Exchange Online using <a href="https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L" target="_blank" rel="noreferrer"><strong>Connect-ExchangeOnline</strong></a>.</p>
                    <p>2. Run the following command "<strong>Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owne</strong>r"</p>
                    <p>Note you can also enable auditing for one mailbox using the following command 'Set-Maibox -Identity "User1" -AuditEnabled $true' and replace User1 with the display name or user principal name of the account you want to enable auditing for.</p>
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
