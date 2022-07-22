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
      path: '/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1',
      article: {id: 'sH_Ee1DW1', featuredImage: 'https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png', article: {entityMap: {0: {data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/SignIns', targetOption: '_blank'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/gSn6PVP/sign-in-logs.png', alignment: 'none', alt: 'Sign-in logs', height: 'auto', width: 'auto'}}, 2: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', alt: 'Sign-in logs for user', alignment: 'none', width: 'auto', src: 'https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png'}}, 3: {data: {alt: 'activity details', src: 'https://i.ibb.co/DDHPKTV/activity-details.png', alignment: 'none', width: 'auto', height: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 4: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Location tab', alignment: 'none', height: 'auto', width: 'auto', src: 'https://i.ibb.co/QY6q69M/location-tab.png'}}, 5: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/gZQ2vnG/device-info-tab.png', height: 'auto', alt: 'Device info tab', width: 'auto', alignment: 'none'}}, 6: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/85LXdWW/Authentication-Details.png', height: 'auto', width: 'auto', alignment: 'none', alt: 'Authentication Details'}}, 7: {type: 'IMAGE', data: {width: 'auto', alt: 'conditional access policy sign-in logs', height: 'auto', src: 'https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png', alignment: 'none'}, mutability: 'MUTABLE'}, 8: {data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Audit', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, 9: {data: {alignment: 'none', width: 'auto', src: 'https://i.ibb.co/7GmvDjZ/view-audit-logs.png', height: 'auto', alt: 'View audit logs'}, type: 'IMAGE', mutability: 'MUTABLE'}, 10: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/MsGraphUsers'}}, 11: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Start recording user and admin activity', alignment: 'none', src: 'https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png', height: 'auto', width: 'auto'}}, 12: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L', targetOption: '_blank'}}, 13: {type: 'LINK', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L', targetOption: '_blank'}, mutability: 'MUTABLE'}}, blocks: [{depth: 0, text: 'So now we have Microsoft 365 fairly secure. There\'s one more question you should be asking yourself? How do we audit/monitor the user\'s actions? Before we jump into the logs there\'s something you should know. There are a couple of places for auditing but we\'ll keep it simple and stick to the two most common. First, let\'s take a look at sign-in logs. Next, we\'ll jump into auditing the Active Directory account auditing. Finally, we\'ll jump into auditing all actions.', key: '4k1ep', inlineStyleRanges: [], type: 'unstyled', data: {}, entityRanges: []}, {type: 'header-two', inlineStyleRanges: [], entityRanges: [], depth: 0, key: '9rld5', data: {}, text: 'Sign-in logs'}, {depth: 0, entityRanges: [], text: 'Sign-in logs are probably the most common logs used in Microsoft 365. From there you can see when a user logs in, what location they signed in from, and much more. Let\'s jump in and take a look.', data: {}, type: 'unstyled', key: '1dhu1', inlineStyleRanges: []}, {inlineStyleRanges: [], text: 'How to view sign-in logs', type: 'header-three', data: {}, key: '1jgfa', depth: 0, entityRanges: []}, {data: {}, type: 'unstyled', key: 'dtl0m', text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Sign-in logs.', entityRanges: [{length: 12, offset: 72, key: 0}], inlineStyleRanges: [{style: 'BOLD', length: 35, offset: 9}, {length: 22, offset: 47, style: 'BOLD'}, {style: 'BOLD', offset: 72, length: 12}], depth: 0}, {type: 'atomic', entityRanges: [{key: 1, length: 1, offset: 0}], key: '644dd', text: ' ', inlineStyleRanges: [], depth: 0, data: {}}, {depth: 0, inlineStyleRanges: [], entityRanges: [], key: '4qlhl', data: {}, type: 'unstyled', text: 'From here you can see all the sign-ins to your Microsoft 365 tenant. You can filter the log to see more particular information. Finally, you can view the same sign-in logs from Azure Active Directory admin center > Enterprise applications > Sign-in logs.'}, {text: 'How to view sign-in logs for a user', depth: 0, inlineStyleRanges: [], entityRanges: [], key: 'am3eg', data: {}, type: 'header-three'}, {data: {}, entityRanges: [], text: 'Now, you can go to the sign-in logs, then add a filter for a particular user but that\'s a bit tedious. Since most of the time when you want to review sign-in logs you are looking at a particular user let\'s look at the sign-in logs another way. By having it automatically filtered for a user.', inlineStyleRanges: [], key: '7dggt', depth: 0, type: 'unstyled'}, {text: '1. Go to Azure Active Directory admin center > Users. Select the user you want to view.', type: 'unstyled', key: '3v6ql', entityRanges: [], depth: 0, data: {}, inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 35}, {offset: 47, style: 'BOLD', length: 5}, {style: 'BOLD', length: 15, offset: 54}]}, {text: ' ', data: {}, entityRanges: [{offset: 0, length: 1, key: 2}], depth: 0, key: '6ubvc', type: 'atomic', inlineStyleRanges: []}, {text: '2. Click Sign-in logs.', type: 'unstyled', data: {}, inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 12}], entityRanges: [], depth: 0, key: '76uig'}, {depth: 0, key: '7s3jk', text: 'How to read the sign-in logs', type: 'header-three', entityRanges: [], inlineStyleRanges: [], data: {}}, {type: 'unstyled', entityRanges: [], inlineStyleRanges: [], depth: 0, key: 'ah773', data: {}, text: 'Now that we are at the sign-in logs let\'s take a look at how to read them. Before we jump into reviewing one of the logs you should know one thing. The sign-in logs will show more than one sign-in for the user. For example, if you sign into the Microsoft 365 admin center and then navigate to the Azure AD admin center you\'ll see at least two "sign-ins". That\'s because every time you navigate to a different app in Microsoft 365 you are re-authenticating using the same token. Now, click one of the sign-ins to view the data.'}, {data: {}, depth: 0, text: 'Basic info', key: '2c454', type: 'header-four', inlineStyleRanges: [], entityRanges: []}, {entityRanges: [], type: 'unstyled', data: {}, key: 'cudm9', text: 'On the basic info tab, you can see, basic info on the sign-in. Surprised right? Anyway, from here you can see information like the user that the sign-in is related to, and what application they signed into.', inlineStyleRanges: [], depth: 0}, {text: ' ', data: {}, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], depth: 0, key: 'b72rs', type: 'atomic'}, {data: {}, depth: 0, text: 'Location', inlineStyleRanges: [], type: 'header-four', entityRanges: [], key: '3ra3t'}, {key: 'dgb8s', inlineStyleRanges: [], type: 'unstyled', depth: 0, text: 'On the location tab, you\'ll find the information on where the user logged in from. For example, you\'ll see the IP address and the best guess on the actual location. For example, Philadelphia, PA, US.', entityRanges: [], data: {}}, {text: ' ', data: {}, key: 'cnldh', entityRanges: [{key: 4, length: 1, offset: 0}], depth: 0, inlineStyleRanges: [], type: 'atomic'}, {data: {}, key: '8h6ht', type: 'header-four', entityRanges: [], depth: 0, text: 'Device info', inlineStyleRanges: []}, {key: '1a5vn', text: 'From the device info tab, you\'ll find information about the device. If the device is in Azure AD, you may see a device name. If the sign-in is from a browser, you\'ll notice the browser is located in the device info tab.', type: 'unstyled', depth: 0, entityRanges: [], inlineStyleRanges: [], data: {}}, {data: {}, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ag6o7', depth: 0, text: ' ', type: 'atomic'}, {key: '6uv82', entityRanges: [], text: 'Authentication Details', type: 'header-four', data: {}, depth: 0, inlineStyleRanges: []}, {type: 'unstyled', text: 'The authentication details tab is where you\'ll find information about how the user signed in. For example, if it\'s the actual sign-in you may see "Password Hash Sync" or "Password in the cloud". If the user is already signed in and simply connecting to another service you\'ll see "Previously satisfied"', data: {}, depth: 0, inlineStyleRanges: [], entityRanges: [], key: '2ahih'}, {key: '2barj', data: {}, text: ' ', depth: 0, type: 'atomic', inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 6}]}, {depth: 0, text: 'Conditional access', entityRanges: [], key: '46gej', inlineStyleRanges: [], data: {}, type: 'header-four'}, {entityRanges: [], inlineStyleRanges: [], data: {}, depth: 0, key: '3hgv0', text: 'The conditional access tab will show you what conditional access policies were applied and which were not. It will also show you the status of the conditional access policy. For example, if the policy failed (and blocked the sign-in) then it will show Failure. Lastly, you can click the policy name to see information about the conditions and access controls. That way you can see why a policy failed, succeeded or didn\'t apply.', type: 'unstyled'}, {type: 'atomic', entityRanges: [{key: 7, length: 1, offset: 0}], text: ' ', data: {}, inlineStyleRanges: [], depth: 0, key: 'qbb2'}, {depth: 0, key: '5gacl', entityRanges: [], text: 'Report only', inlineStyleRanges: [], data: {}, type: 'header-four'}, {data: {}, text: 'The report-only tab will show you conditional access policies that are in report-only mode. They won\'t block the sign-in but that way you can test your conditional access policies before applying them.', key: 'fa3lh', depth: 0, entityRanges: [], inlineStyleRanges: [], type: 'unstyled'}, {depth: 0, inlineStyleRanges: [], text: 'Additional details', type: 'header-four', key: '1g3jb', data: {}, entityRanges: []}, {data: {}, depth: 0, text: 'This tab is typically empty.', key: '8qmpk', entityRanges: [], inlineStyleRanges: [], type: 'unstyled'}, {depth: 0, entityRanges: [], inlineStyleRanges: [], type: 'header-two', data: {}, text: 'Account auditing', key: '6dkc0'}, {type: 'unstyled', data: {}, depth: 0, inlineStyleRanges: [], key: 'hoh1', text: 'What do I mean by account auditing? Well, every time you make a change to a user account it is logged in the Azure audit logs. For example, if you update the user display name or change the licenses assigned to a user, you\'ll see it in the account auditing logs.', entityRanges: []}, {text: 'How to view account logs for the tenant', data: {}, key: 'e7bp1', depth: 0, entityRanges: [], type: 'header-three', inlineStyleRanges: []}, {text: 'Just like the sign-in logs except it\'s one option lower (or up depending on where you are)', depth: 0, entityRanges: [], key: '4m2c7', inlineStyleRanges: [], type: 'unstyled', data: {}}, {key: 'cjpb3', data: {}, text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Audit logs.', type: 'unstyled', depth: 0, inlineStyleRanges: [{offset: 9, length: 35, style: 'BOLD'}, {offset: 47, length: 22, style: 'BOLD'}, {style: 'BOLD', length: 10, offset: 72}], entityRanges: [{key: 8, offset: 72, length: 10}]}, {inlineStyleRanges: [], text: ' ', entityRanges: [{key: 9, offset: 0, length: 1}], data: {}, type: 'atomic', key: '987gc', depth: 0}, {key: '97cub', entityRanges: [{key: 10, length: 6, offset: 93}], type: 'unstyled', text: 'You can also view an individual\'s account auditing logs by going to Azure Active Directory > Users > Click the user > Audit Logs.', data: {}, depth: 0, inlineStyleRanges: [{style: 'BOLD', offset: 68, length: 22}, {style: 'BOLD', length: 6, offset: 93}, {offset: 118, length: 10, style: 'BOLD'}]}, {entityRanges: [], key: '1a73s', type: 'header-two', data: {}, text: 'Auditing actions', inlineStyleRanges: [], depth: 0}, {depth: 0, inlineStyleRanges: [], text: 'Now that you have an understanding of auditing sign-ins and Active Directory account activity let\'s look at how to audit all the actions in Microsoft 365. You can review almost all activities in Microsoft 365. For example, you can review when a file is accessed and by whom. You can also view changes and access mailboxes. For example, you can view when an item is sent, moved, or updated. Before we can audit activity let\'s enable auditing.', type: 'unstyled', entityRanges: [], key: '2gv39', data: {}}, {text: 'How to enable auditing in Microsoft 365', entityRanges: [], depth: 0, data: {}, inlineStyleRanges: [], key: '39chi', type: 'header-three'}, {data: {}, inlineStyleRanges: [{offset: 9, length: 35, style: 'BOLD'}, {length: 5, offset: 47, style: 'BOLD'}, {length: 39, offset: 60, style: 'BOLD'}], depth: 0, type: 'unstyled', key: '2hkef', entityRanges: [], text: '1. Go to Microsoft 365 Defender admin center > Audit. Click Start recording user and admin activity.'}, {key: 'c4ng9', inlineStyleRanges: [], entityRanges: [{length: 1, offset: 0, key: 11}], data: {}, type: 'atomic', depth: 0, text: ' '}, {data: {}, depth: 0, type: 'header-three', entityRanges: [], key: '22r7n', inlineStyleRanges: [], text: 'How to enable auditing on mailboxes'}, {text: 'Now that auditing is enabled for the Microsoft 365 tenant let\'s make sure auditing is enabled in Exchange Online. First, we\'ll enable auditing admin actions. This is good if you need to see who read and deleted items in a mailbox. Next, we\'ll enable auditing for each mailbox.', inlineStyleRanges: [], data: {}, key: 'dpa0o', depth: 0, entityRanges: [], type: 'unstyled'}, {type: 'header-four', data: {}, inlineStyleRanges: [], key: '4a6s', entityRanges: [], depth: 0, text: 'How to enable admin auditing'}, {inlineStyleRanges: [], data: {}, key: 'bf54u', text: 'To enable Exchange auditing we\'ll need to use PowerShell.', depth: 0, entityRanges: [], type: 'unstyled'}, {key: '3bt3c', text: '1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.', inlineStyleRanges: [{length: 22, offset: 56, style: 'BOLD'}], entityRanges: [{key: 12, length: 22, offset: 56}], depth: 0, data: {}, type: 'unstyled'}, {data: {}, entityRanges: [], type: 'unstyled', text: '2. Run the following command "Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets * -AdminAuditLogParameters *"', key: 'aev', depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 102, offset: 30}]}, {entityRanges: [], depth: 0, text: '3. Then run the following command "Set-OrganizationConfig -AuditDisabled $false"', key: '2n90c', data: {}, type: 'unstyled', inlineStyleRanges: [{length: 44, style: 'BOLD', offset: 35}]}, {depth: 0, entityRanges: [], key: '6t4j6', data: {}, type: 'unstyled', text: 'Note the stars in the log cmdlets and log parameters. These indicate we are auditing all cmdlets and all parameters. We can also limit the number of cmdlets audited by changing the cmdlets to *mailbox*. This will enable auditing for all PowerShell commands that use the mailbox word. For example, Set-Mailbox, Get-Mailbox, Set-MailboxFolder, Get-MailboxFolder, etc.', inlineStyleRanges: []}, {entityRanges: [], depth: 0, text: 'How to enable auditing per mailbox', key: '3uou8', data: {}, type: 'header-four', inlineStyleRanges: []}, {inlineStyleRanges: [], type: 'unstyled', text: 'Now that we\'ve enabled auditing at the tenant level let\'s enable auditing on the mailbox level. Again, we\'ll be using Exchange Online PowerShell.', entityRanges: [], depth: 0, data: {}, key: '9pib6'}, {inlineStyleRanges: [{style: 'BOLD', length: 22, offset: 56}], data: {}, depth: 0, key: '1ggk2', text: '1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.', entityRanges: [{offset: 56, key: 13, length: 22}], type: 'unstyled'}, {text: '2. Run the following command "Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner"', entityRanges: [], data: {}, key: 'fkqgl', inlineStyleRanges: [{offset: 30, style: 'BOLD', length: 104}], depth: 0, type: 'unstyled'}, {key: '22ujg', text: 'Note you can also enable auditing for one mailbox using the following command \'Set-Maibox -Identity "User1" -AuditEnabled $true\' and replace User1 with the display name or user principal name of the account you want to enable auditing for.', data: {}, entityRanges: [], inlineStyleRanges: [], type: 'unstyled', depth: 0}]}, datePublished: '2022/6/28', publish: true, images: ['https://i.ibb.co/gSn6PVP/sign-in-logs.png', 'https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png', 'https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png', 'https://i.ibb.co/DDHPKTV/activity-details.png', 'https://i.ibb.co/QY6q69M/location-tab.png', 'https://i.ibb.co/gZQ2vnG/device-info-tab.png', 'https://i.ibb.co/85LXdWW/Authentication-Details.png', 'https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png', 'https://i.ibb.co/7GmvDjZ/view-audit-logs.png', 'https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png'], description: 'How do we audit/monitor the user\'s actions? First, let\'s take a look at sign-in logs. Then we\'ll jump into auditing all actions', title: 'Auditing sign-ins and other actions in Microsoft 365', slug: 'Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', sectionId: 'QScYfSu74', type: 'article'},
      nextContentSlug: 'How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf',
      previousContentSlug: 'Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP',
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
                  <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/SignIns" target="_blank" rel="noreferrer"><strong>Sign-in logs</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/gSn6PVP/sign-in-logs.png" alt="Sign-in logs" style="height: auto;width: auto" /></div>
                  <p>From here you can see all the sign-ins to your Microsoft 365 tenant. You can filter the log to see more particular information. Finally, you can view the same sign-in logs from Azure Active Directory admin center &gt; Enterprise applications &gt; Sign-in logs.</p>
                  <h3>How to view sign-in logs for a user</h3>
                  <p>Now, you can go to the sign-in logs, then add a filter for a particular user but that's a bit tedious. Since most of the time when you want to review sign-in logs you are looking at a particular user let's look at the sign-in logs another way. By having it automatically filtered for a user.</p>
                  <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Users</strong>. <strong>Select the user</strong> you want to view.</p>
                  <div ><img src="https://i.ibb.co/F8FqcGJ/sign-in-logs-for-user.png" alt="Sign-in logs for user" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Sign-in logs</strong>.</p>
                  <h3>How to read the sign-in logs</h3>
                  <p>Now that we are at the sign-in logs let's take a look at how to read them. Before we jump into reviewing one of the logs you should know one thing. The sign-in logs will show more than one sign-in for the user. For example, if you sign into the Microsoft 365 admin center and then navigate to the Azure AD admin center you'll see at least two "sign-ins". That's because every time you navigate to a different app in Microsoft 365 you are re-authenticating using the same token. Now, click one of the sign-ins to view the data.</p>
                  <h4>Basic info</h4>
                  <p>On the basic info tab, you can see, basic info on the sign-in. Surprised right? Anyway, from here you can see information like the user that the sign-in is related to, and what application they signed into.</p>
                  <div ><img src="https://i.ibb.co/DDHPKTV/activity-details.png" alt="activity details" style="height: auto;width: auto" /></div>
                  <h4>Location</h4>
                  <p>On the location tab, you'll find the information on where the user logged in from. For example, you'll see the IP address and the best guess on the actual location. For example, Philadelphia, PA, US.</p>
                  <div ><img src="https://i.ibb.co/QY6q69M/location-tab.png" alt="Location tab" style="height: auto;width: auto" /></div>
                  <h4>Device info</h4>
                  <p>From the device info tab, you'll find information about the device. If the device is in Azure AD, you may see a device name. If the sign-in is from a browser, you'll notice the browser is located in the device info tab.</p>
                  <div ><img src="https://i.ibb.co/gZQ2vnG/device-info-tab.png" alt="Device info tab" style="height: auto;width: auto" /></div>
                  <h4>Authentication Details</h4>
                  <p>The authentication details tab is where you'll find information about how the user signed in. For example, if it's the actual sign-in you may see "Password Hash Sync" or "Password in the cloud". If the user is already signed in and simply connecting to another service you'll see "Previously satisfied"</p>
                  <div ><img src="https://i.ibb.co/85LXdWW/Authentication-Details.png" alt="Authentication Details" style="height: auto;width: auto" /></div>
                  <h4>Conditional access</h4>
                  <p>The conditional access tab will show you what conditional access policies were applied and which were not. It will also show you the status of the conditional access policy. For example, if the policy failed (and blocked the sign-in) then it will show Failure. Lastly, you can click the policy name to see information about the conditions and access controls. That way you can see why a policy failed, succeeded or didn't apply.</p>
                  <div ><img src="https://i.ibb.co/2tCsbnf/conditional-access-policy-sign-in-logs.png" alt="conditional access policy sign-in logs" style="height: auto;width: auto" /></div>
                  <h4>Report only</h4>
                  <p>The report-only tab will show you conditional access policies that are in report-only mode. They won't block the sign-in but that way you can test your conditional access policies before applying them.</p>
                  <h4>Additional details</h4>
                  <p>This tab is typically empty.</p>
                  <h2>Account auditing</h2>
                  <p>What do I mean by account auditing? Well, every time you make a change to a user account it is logged in the Azure audit logs. For example, if you update the user display name or change the licenses assigned to a user, you'll see it in the account auditing logs.</p>
                  <h3>How to view account logs for the tenant</h3>
                  <p>Just like the sign-in logs except it's one option lower (or up depending on where you are)</p>
                  <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Audit" target="_blank" rel="noreferrer"><strong>Audit logs</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/7GmvDjZ/view-audit-logs.png" alt="View audit logs" style="height: auto;width: auto" /></div>
                  <p>You can also view an individual's account auditing logs by going to <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/MsGraphUsers" target="_blank" rel="noreferrer"><strong>Users </strong></a>&gt; Click the user &gt; <strong>Audit Logs</strong>.</p>
                  <h2>Auditing actions</h2>
                  <p>Now that you have an understanding of auditing sign-ins and Active Directory account activity let's look at how to audit all the actions in Microsoft 365. You can review almost all activities in Microsoft 365. For example, you can review when a file is accessed and by whom. You can also view changes and access mailboxes. For example, you can view when an item is sent, moved, or updated. Before we can audit activity let's enable auditing.</p>
                  <h3>How to enable auditing in Microsoft 365</h3>
                  <p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Audit</strong>. Click <strong>Start recording user and admin activity</strong>.</p>
                  <div ><img src="https://i.ibb.co/BqMw3jZ/Start-recording-user-and-admin-activity.png" alt="Start recording user and admin activity" style="height: auto;width: auto" /></div>
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
