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
      path: '/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P',
      article: {datePublished: '2022/5/26', featuredImage: 'https://i.ibb.co/7nDqr9x/Whats-AD-Connect.png', slug: 'Whats-AD-Connect-ky5W0Lz5P', images: ['https://i.ibb.co/7nDqr9x/Whats-AD-Connect.png', 'https://i.ibb.co/Vw4Y5TN/Unhealthy-identity-synchronization-notification.png', 'https://i.ibb.co/3CS1K7m/AD-Connect-error.png'], type: 'article', id: 'ky5W0Lz5P', article: {blocks: [{inlineStyleRanges: [{length: 646, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 646, style: 'bgcolor-rgb(255,255,255)', offset: 0}, {length: 646, style: 'fontsize-16', offset: 0}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0, length: 646}], key: 'dj096', data: {}, entityRanges: [], text: 'Now, if you\'ve been around Microsoft technology for a while you\'ve heard of user accounts. It\'s the term they\'ve been using for decades but recently things have become a bit more complicated. A person can have a user account in your on-premises Active Directory. They can have a user account in Microsoft 365. They can have a user account in other cloud providers as well. So now Microsoft, and the technology industry, have started separating user accounts and identities. User accounts may contain an email address, name, and other information about the person. The identity controls the authentication, for example, the username, and password.', depth: 0, type: 'unstyled'}, {type: 'atomic', entityRanges: [{offset: 0, key: 0, length: 1}], key: '78bc2', data: {}, text: ' ', depth: 0, inlineStyleRanges: []}, {key: '72igr', text: 'Synchronizing your on-premises Active Directory (AD) to Microsoft 365', type: 'header-two', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {}}, {type: 'unstyled', depth: 0, inlineStyleRanges: [], key: '4u7te', data: {}, entityRanges: [], text: 'AD Connect Is a Microsoft application that can be installed on a domain-joined Windows Server 2016 or later server that will sync your on-premises Active Directory to Microsoft 365’s Azure Active Directory. Every time you create, update, disable, or delete a user account in your on-premises AD, AD Connect will automatically sync that change to Microsoft 365.'}, {entityRanges: [], inlineStyleRanges: [], depth: 0, key: '9asia', data: {}, text: 'Why use Azure AD Connect?', type: 'header-three'}, {data: {}, text: 'Azure AD Connect makes managing users ten times easier. By allowing you and your admins to update a user account once and then have that information sync to Microsoft 365 it reduces duplicating work. When a user is terminated, you will only need to remember to disable the account in your on-premise AD and then allow that change to sync to Microsoft 365 locking the user out of your on-premise AD, as well as, Microsoft 365 and anywhere else that identity information is being used.', type: 'unstyled', entityRanges: [], depth: 0, key: 'b4qvi', inlineStyleRanges: []}, {key: 'gq9h', entityRanges: [], type: 'header-three', depth: 0, data: {}, inlineStyleRanges: [], text: 'Synced vs cloud-only accounts'}, {key: '3ur5q', inlineStyleRanges: [], text: 'You may see me or other admins refer to Microsoft 365 accounts as synced or cloud-only. A synced account is a user account that is being synchronized from the on-premises AD. A cloud-only user account is a user account that is not synced from the on-premises AD. If you aren\'t using AD Connect, all your accounts are cloud-only. If you have installed AD Connect and have user accounts that are on-premises and being synced to the Microsoft 365 tenant then those accounts are synced.', depth: 0, data: {}, type: 'unstyled', entityRanges: []}, {key: '36cgb', data: {}, text: 'Installing AD Connect', type: 'header-three', inlineStyleRanges: [], entityRanges: [], depth: 0}, {text: 'Let us not waste any time discussing how to install AD Connect because it isn’t covered in the MS-500 test. Instead, I will point you to a couple of useful articles from Microsoft about installing AD Connect. Although, if you haven\'t installed AD Connect before I\'d recommend hiring a consultant. There\'s a lot to consider when installing AD Connect including the user principal name, the source anchor, whether you have an on-premise Exchange server, and a slew of other requirements.', inlineStyleRanges: [], type: 'unstyled', key: '62j5j', data: {}, depth: 0, entityRanges: []}, {inlineStyleRanges: [], type: 'unstyled', key: 'f9gn1', text: 'Azure AD Connect Download: https://www.microsoft.com/en-us/download/details.aspx?id=47594 ', depth: 0, entityRanges: [{key: 1, length: 62, offset: 27}], data: {}}, {type: 'unstyled', depth: 0, key: 'c7dsg', data: {}, entityRanges: [{length: 93, offset: 26, key: 2}], text: 'AD Connect How-to guides: https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-roadmap ', inlineStyleRanges: []}, {key: 've3g', inlineStyleRanges: [], text: 'How to express install AD Connect: https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-express ', type: 'unstyled', depth: 0, data: {}, entityRanges: [{key: 3, length: 93, offset: 35}]}, {text: 'User Sign-in Methods', data: {}, inlineStyleRanges: [], type: 'header-three', depth: 0, entityRanges: [], key: 'ahpru'}, {depth: 0, text: 'One part of AD connect that Microsoft does cover under the MS-500 test is the sign-in method, also known as, the sign-in options. The sign-in options dictate how your on-premises synced users will authenticate when signing into a Microsoft 365 app. For example, you can configure AD Connect to synchronize a hash of the passwords. When a user is signing into Microsoft 365 Microsoft can manage the authentication by comparing the username and password supplied by the user with the username and password hash that is synced to Microsoft 365. This is known as password hash synchronization.', key: '4e80a', type: 'unstyled', data: {}, entityRanges: [], inlineStyleRanges: []}, {data: {}, entityRanges: [], key: '3ojl0', depth: 0, inlineStyleRanges: [], text: 'What’s Password Hash Synchronization', type: 'header-four'}, {depth: 0, key: '82p4n', type: 'unstyled', entityRanges: [], text: 'As mentioned above, password hash synchronization will configure AD Connect to synchronize a hash of your user\'s passwords to Microsoft 365. It\'s important to note, that the password is not synchronized across your Internet and Azure is not storing your passwords. It\'s an encrypted hash of the password.', data: {}, inlineStyleRanges: []}, {type: 'unstyled', depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2iu31', text: 'Password hash synchronization is also known as "same sign-on". It\'s known as same sign-on because a user will use the same credentials to sign in to your on-premise Active Directory, as well as, your Microsoft 365 environment.', data: {}}, {key: '5d7ir', inlineStyleRanges: [], text: 'A couple of noteworthy points on password hash synchronization:', data: {}, entityRanges: [], type: 'unstyled', depth: 0}, {text: 'Password hash synchronization is the easiest sign-in method to support.', key: '6s37j', data: {}, type: 'unordered-list-item', entityRanges: [], depth: 0, inlineStyleRanges: []}, {depth: 0, data: {}, key: 'djhq', type: 'unordered-list-item', inlineStyleRanges: [], text: 'Password hash synchronization can be disabled in AD Connect.', entityRanges: []}, {entityRanges: [], depth: 0, data: {}, text: 'Password hash synchronization doesn’t take any other servers or software. It works through AD Connect.', key: 'b449h', inlineStyleRanges: [], type: 'unordered-list-item'}, {type: 'header-five', key: '5m9cb', depth: 0, entityRanges: [], inlineStyleRanges: [], text: 'Limitations of password hash synchronization', data: {}}, {text: 'By default, Password hash synchronization doesn’t support the password expiration policy. if a user\'s password expires on-premise the user can continue to sign in to Microsoft 365 without changing their password. By default, the cloud account password is set to never expire.', key: 'de0mn', depth: 0, data: {}, inlineStyleRanges: [], entityRanges: [], type: 'unstyled'}, {key: 'bu4va', type: 'unstyled', data: {}, depth: 0, entityRanges: [], text: 'Out of the box AD Connect does not support “user must change password at next logon”. You can however and able it but you\'ll also want to enable password writeback. More on password write back later in the article.', inlineStyleRanges: []}, {entityRanges: [], key: '7e0d9', depth: 0, type: 'unstyled', text: 'AD Connect does not support account expiration. If you use account expirations in your on-premises AD, you\'ll need to create a PowerShell script that disables the user account in Azure AD or use Pass-through authentication.', data: {}, inlineStyleRanges: []}, {text: 'When you reset a password in Azure AD of a synchronized user the password will be overwritten by the on-premises AD password during the next password sync cycle. ', data: {}, depth: 0, inlineStyleRanges: [], key: '5u7cp', entityRanges: [], type: 'unstyled'}, {entityRanges: [], text: 'Leaked credential detection', key: '8grtl', type: 'header-five', depth: 0, inlineStyleRanges: [], data: {}}, {entityRanges: [], inlineStyleRanges: [], type: 'unstyled', depth: 0, key: 'eok56', data: {}, text: 'A quick side note, for Microsoft 365 to perform leaked credential detection you\'ll need to have password hash synchronization enabled even if your sign-in method has users signing in to your on-premises Active Directory.'}, {entityRanges: [], text: 'Active Directory Federation Services (ADFS)', inlineStyleRanges: [], data: {}, type: 'header-four', key: '4loin', depth: 0}, {type: 'unstyled', entityRanges: [], key: '9obhb', data: {}, inlineStyleRanges: [], text: 'ADFS is a software application developed by Microsoft two provide single sign-on (SSO). With ADFS users that are authenticating to Microsoft 365 will be redirected to your ADFS servers. NDFS uses claims-based access control authorization which is a process where the user is identified by a set of claims related to their identity. The claims are packaged into a secure token by ADFS and then sent to Microsoft 365.', depth: 0}, {text: 'Your ADFS servers will have requests sent to them every time a user authenticates to Microsoft 365. Because of this, it\'s typically recommended to have a minimum of Two ADFS servers. Since authentication can happen at the ADFS servers it\'s also recommended to implement ADFS proxy servers. Two ADFS proxy servers are also recommended.', key: 'cagtp', depth: 0, data: {}, type: 'unstyled', entityRanges: [], inlineStyleRanges: []}, {text: 'A couple of quick notes on ADFS:', inlineStyleRanges: [], depth: 0, type: 'unstyled', key: '27v0k', entityRanges: [], data: {}}, {depth: 0, data: {}, type: 'unordered-list-item', text: 'ADFS is one of the most complicated authentication systems available as a sign-in option for Microsoft 365.', key: 'dqhii', inlineStyleRanges: [], entityRanges: []}, {text: 'Since your users will be authenticating to the ADFS it’s recommended to have redundant servers.', inlineStyleRanges: [], type: 'unordered-list-item', entityRanges: [], depth: 0, data: {}, key: '8hjcc'}, {entityRanges: [], type: 'unordered-list-item', inlineStyleRanges: [], data: {}, key: '7brpc', depth: 0, text: 'ADFS is one of the most expensive sign-in options for Microsoft 365.'}, {type: 'header-four', entityRanges: [], data: {}, key: '9tgu8', inlineStyleRanges: [], depth: 0, text: 'Pass-through authentication'}, {key: 'a617l', entityRanges: [], inlineStyleRanges: [], depth: 0, text: 'Pass-through authentication (PTA) works like ADFS. With pass-through authentication users that are trying to access your Microsoft 365 environment will be passed to an on-premises server that has the PTA agent installed. Just like ADFS when a user signs in the username and password will be validated directly against your on-premises Active Directory.', data: {}, type: 'unstyled'}, {data: {}, depth: 0, type: 'unstyled', inlineStyleRanges: [], key: '3nnds', text: 'Pass-through authentication does not affect cloud-only users. When a user with a cloud-only account (an account that isn\'t synced from your on-premises AD) the users will still be able to log in. It\'s good to have at least one global admin that\'s a cloud-only account in case of PTA failure.', entityRanges: []}, {depth: 0, type: 'header-three', data: {}, inlineStyleRanges: [], entityRanges: [], text: 'Troubleshooting AD Connect', key: '85t92'}, {type: 'unstyled', depth: 0, text: 'Troubleshooting AD Connect can be a bit complicated Because there are four places that you may need to check to view the errors (although the data is usually redundant)', key: '5hq98', inlineStyleRanges: [], data: {}, entityRanges: []}, {inlineStyleRanges: [], type: 'ordered-list-item', depth: 0, entityRanges: [], key: 'a5uth', text: 'Directory Sync status in the Microsoft 365 admin center.', data: {}}, {key: '54ev4', data: {}, inlineStyleRanges: [], text: 'Sync errors in the Azure AD admin center (found under Azure Active Directory Connect health)', entityRanges: [], depth: 0, type: 'ordered-list-item'}, {entityRanges: [], data: {}, depth: 0, inlineStyleRanges: [], key: '87jkg', text: 'The synchronization service app on the AD Connect server', type: 'ordered-list-item'}, {entityRanges: [], type: 'ordered-list-item', data: {}, text: 'The application event logs on the AD Connect server', depth: 0, inlineStyleRanges: [], key: 'e4rhg'}, {depth: 0, text: 'The errors you\'ll receive', entityRanges: [], data: {}, key: 'ak2q', inlineStyleRanges: [], type: 'header-four'}, {type: 'unstyled', key: 'fkj86', entityRanges: [], text: 'The first thing you\'ll receive is an email with the subject line "Unhealthy identity synchronization notification".', inlineStyleRanges: [], depth: 0, data: {}}, {entityRanges: [{key: 4, offset: 0, length: 1}], depth: 0, inlineStyleRanges: [], data: {}, key: 'f9b7n', type: 'atomic', text: ' '}, {data: {}, text: 'How to review the error', inlineStyleRanges: [], key: 'c1fi0', entityRanges: [], type: 'header-four', depth: 0}, {text: 'To review the error in more detail log on to the server that has the AD Connect service running then open the Synchronization Service Manager application. From there you\'ll see one of the profiles with a status of Completed-export-error. Click on it. Then click the error (in the bottom right corner. Click Detail. You can also click the CN=GUID to view the account that changed and what attributes have changed.', entityRanges: [], inlineStyleRanges: [{offset: 214, length: 22, style: 'BOLD'}, {style: 'BOLD', offset: 266, length: 6}, {offset: 307, length: 6, style: 'BOLD'}], data: {}, key: '8jmhv', depth: 0, type: 'unstyled'}, {inlineStyleRanges: [], entityRanges: [{length: 1, key: 5, offset: 0}], type: 'atomic', text: ' ', data: {}, key: '28a4n', depth: 0}, {type: 'header-three', data: {}, text: 'Password Writeback', entityRanges: [], depth: 0, inlineStyleRanges: [], key: '6qui'}, {data: {}, entityRanges: [], depth: 0, inlineStyleRanges: [], key: '7n113', type: 'unstyled', text: 'Remember when I said AD Connect synchronizes your on-premises Active Directory to Microsoft 365, that it\'s a one-way sync? Now we\'re getting into the exceptions. Password writeback allows admins, as well as, users to update their password in Microsoft 365 and have that password synchronized back to the on-premises Active Directory. Let\'s say all your users are working from home. And occasionally, a user forgets their password. Currently, they call into your IT helpdesk and the IT staff must reset the password in Active Directory manually. With password writeback those calls are history. Users can go to the Microsoft 365 portal And through their username authenticate using text messages, phone calls, or another MFA authorization and reset their passwords.'}, {depth: 0, inlineStyleRanges: [], text: 'Note: Azure AD P1 licenses are needed to configure password writeback.', entityRanges: [], data: {}, key: '4738e', type: 'unstyled'}, {inlineStyleRanges: [], key: 'd20f1', depth: 0, data: {}, type: 'unstyled', entityRanges: [], text: 'Configuring password writeback is out of scope for the MS-500 but here are two Microsoft articles to help you get started: '}, {type: 'unordered-list-item', entityRanges: [{offset: 0, key: 6, length: 109}], inlineStyleRanges: [], depth: 0, text: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-registration-mfa-sspr-combined ', key: 'ba1mc', data: {}}, {data: {}, depth: 0, type: 'unordered-list-item', key: '7bc2u', text: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback ', entityRanges: [{length: 101, key: 7, offset: 0}], inlineStyleRanges: []}, {depth: 0, inlineStyleRanges: [], text: 'Other writeback options', type: 'header-three', data: {}, entityRanges: [], key: '4vd79'}, {text: 'For a while, Microsoft did allow organizations to configure user writeback where an admin could change a user\'s attributes in Microsoft 365 and have the attributes writeback to an on-premises environment. Today, Microsoft doesn\'t allow user writeback. As mentioned above, they do allow password writeback.', depth: 0, key: 'oan', inlineStyleRanges: [], data: {}, entityRanges: [], type: 'unstyled'}, {text: 'Microsoft also allows group writeback Where users can create and manage Microsoft 365 groups in Microsoft 365 and have those groups write back to the on-premises Active Directory.', type: 'unstyled', data: {}, key: '67jkm', inlineStyleRanges: [], depth: 0, entityRanges: []}, {entityRanges: [], text: 'Microsoft also allows device writeback. Device writeback will create a device object in the on-premises Active Directory for every Azure AD-managed device. The devices will be located in an OU called RegisteredDevices.', type: 'unstyled', inlineStyleRanges: [], depth: 0, key: 'dcg83', data: {}}, {data: {}, text: 'Hybrid Azure AD Joined devices', type: 'header-three', depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'buj1i'}, {data: {}, depth: 0, inlineStyleRanges: [], type: 'unstyled', entityRanges: [], key: '1sg80', text: 'Hybrid Azure AD joined devices are devices that are joined to your on-premises AD and registered with Azure AD through AD Connect. Configuring a hybrid Azure AD join will ensure that all domain-joined computers are registered in Azure AD. It’s also an important step if you want to manage your domain-joined computers using Intune.'}], entityMap: {0: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', alt: 'What\'s AD Connect', alignment: 'none', width: 'auto', src: 'https://i.ibb.co/7nDqr9x/Whats-AD-Connect.png', targetOption: '_blank', url: 'https://www.microsoft.com/en-us/download/details.aspx?id=47594'}}, 1: {mutability: 'MUTABLE', data: {url: 'https://www.microsoft.com/en-us/download/details.aspx?id=47594', targetOption: '_blank'}, type: 'LINK'}, 2: {data: {url: 'https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-roadmap', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, 3: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-express'}}, 4: {mutability: 'MUTABLE', type: 'IMAGE', data: {targetOption: '_blank', width: 'auto', url: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-registration-mfa-sspr-combined', height: 'auto', alignment: 'none', src: 'https://i.ibb.co/Vw4Y5TN/Unhealthy-identity-synchronization-notification.png', alt: 'Unhealthy identity synchronization notification'}}, 5: {type: 'IMAGE', mutability: 'MUTABLE', data: {alt: 'AD Connect Error', src: 'https://i.ibb.co/3CS1K7m/AD-Connect-error.png', alignment: 'none', height: 'auto', targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-registration-mfa-sspr-combined', width: 'auto'}}, 6: {mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-registration-mfa-sspr-combined'}, type: 'LINK'}, 7: {type: 'LINK', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback'}, mutability: 'MUTABLE'}}}, title: 'What\'s AD Connect', publish: true, description: 'Sync your on-premise Active Directory users to Microsoft 365. Quickly create users in Microsoft 365 and continue to sync your users from on-premise AD to Microsoft Azure Active Directory.', sectionId: 'AFV_acckJ'},
      nextContentSlug: 'Protecting-Passwords-in-Microsoft-365-i9pJIjTNH',
      previousContentSlug: 'Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1',
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
                <div><p><span >Now, if you've been around Microsoft technology for a while you've heard of user accounts. It's the term they've been using for decades but recently things have become a bit more complicated. A person can have a user account in your on-premises Active Directory. They can have a user account in Microsoft 365. They can have a user account in other cloud providers as well. So now Microsoft, and the technology industry, have started separating user accounts and identities. User accounts may contain an email address, name, and other information about the person. The identity controls the authentication, for example, the username, and password.</span></p>
                  <div ><img src="https://i.ibb.co/7nDqr9x/Whats-AD-Connect.png" alt="What's AD Connect" style="height: auto;width: auto" /></div>
                  <h2>Synchronizing your on-premises Active Directory (AD) to Microsoft 365</h2>
                  <p>AD Connect Is a Microsoft application that can be installed on a domain-joined Windows Server 2016 or later server that will sync your on-premises Active Directory to Microsoft 365’s Azure Active Directory. Every time you create, update, disable, or delete a user account in your on-premises AD, AD Connect will automatically sync that change to Microsoft 365.</p>
                  <h3>Why use Azure AD Connect?</h3>
                  <p>Azure AD Connect makes managing users ten times easier. By allowing you and your admins to update a user account once and then have that information sync to Microsoft 365 it reduces duplicating work. When a user is terminated, you will only need to remember to disable the account in your on-premise AD and then allow that change to sync to Microsoft 365 locking the user out of your on-premise AD, as well as, Microsoft 365 and anywhere else that identity information is being used.</p>
                  <h3>Synced vs cloud-only accounts</h3>
                  <p>You may see me or other admins refer to Microsoft 365 accounts as synced or cloud-only. A synced account is a user account that is being synchronized from the on-premises AD. A cloud-only user account is a user account that is not synced from the on-premises AD. If you aren't using AD Connect, all your accounts are cloud-only. If you have installed AD Connect and have user accounts that are on-premises and being synced to the Microsoft 365 tenant then those accounts are synced.</p>
                  <h3>Installing AD Connect</h3>
                  <p>Let us not waste any time discussing how to install AD Connect because it isn’t covered in the MS-500 test. Instead, I will point you to a couple of useful articles from Microsoft about installing AD Connect. Although, if you haven't installed AD Connect before I'd recommend hiring a consultant. There's a lot to consider when installing AD Connect including the user principal name, the source anchor, whether you have an on-premise Exchange server, and a slew of other requirements.</p>
                  <p>Azure AD Connect Download: <a href="https://www.microsoft.com/en-us/download/details.aspx?id=47594" target="_blank" rel="noreferrer">https://www.microsoft.com/en-us/download/details.aspx?id=47594</a>&nbsp;</p>
                  <p>AD Connect How-to guides: <a href="https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-roadmap" target="_blank" rel="noreferrer">https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-roadmap</a>&nbsp;</p>
                  <p>How to express install AD Connect: <a href="https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-express" target="_blank" rel="noreferrer">https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-express</a>&nbsp;</p>
                  <h3>User Sign-in Methods</h3>
                  <p>One part of AD connect that Microsoft does cover under the MS-500 test is the sign-in method, also known as, the sign-in options. The sign-in options dictate how your on-premises synced users will authenticate when signing into a Microsoft 365 app. For example, you can configure AD Connect to synchronize a hash of the passwords. When a user is signing into Microsoft 365 Microsoft can manage the authentication by comparing the username and password supplied by the user with the username and password hash that is synced to Microsoft 365. This is known as password hash synchronization.</p>
                  <h4>What’s Password Hash Synchronization</h4>
                  <p>As mentioned above, password hash synchronization will configure AD Connect to synchronize a hash of your user's passwords to Microsoft 365. It's important to note, that the password is not synchronized across your Internet and Azure is not storing your passwords. It's an encrypted hash of the password.</p>
                  <p>Password hash synchronization is also known as "same sign-on". It's known as same sign-on because a user will use the same credentials to sign in to your on-premise Active Directory, as well as, your Microsoft 365 environment.</p>
                  <p>A couple of noteworthy points on password hash synchronization:</p>
                  <ul>
                    <li>Password hash synchronization is the easiest sign-in method to support.</li>
                    <li>Password hash synchronization can be disabled in AD Connect.</li>
                    <li>Password hash synchronization doesn’t take any other servers or software. It works through AD Connect.</li>
                  </ul>
                  <h5>Limitations of password hash synchronization</h5>
                  <p>By default, Password hash synchronization doesn’t support the password expiration policy. if a user's password expires on-premise the user can continue to sign in to Microsoft 365 without changing their password. By default, the cloud account password is set to never expire.</p>
                  <p>Out of the box AD Connect does not support “user must change password at next logon”. You can however and able it but you'll also want to enable password writeback. More on password write back later in the article.</p>
                  <p>AD Connect does not support account expiration. If you use account expirations in your on-premises AD, you'll need to create a PowerShell script that disables the user account in Azure AD or use Pass-through authentication.</p>
                  <p>When you reset a password in Azure AD of a synchronized user the password will be overwritten by the on-premises AD password during the next password sync cycle.&nbsp;</p>
                  <h5>Leaked credential detection</h5>
                  <p>A quick side note, for Microsoft 365 to perform leaked credential detection you'll need to have password hash synchronization enabled even if your sign-in method has users signing in to your on-premises Active Directory.</p>
                  <h4>Active Directory Federation Services (ADFS)</h4>
                  <p>ADFS is a software application developed by Microsoft two provide single sign-on (SSO). With ADFS users that are authenticating to Microsoft 365 will be redirected to your ADFS servers. NDFS uses claims-based access control authorization which is a process where the user is identified by a set of claims related to their identity. The claims are packaged into a secure token by ADFS and then sent to Microsoft 365.</p>
                  <p>Your ADFS servers will have requests sent to them every time a user authenticates to Microsoft 365. Because of this, it's typically recommended to have a minimum of Two ADFS servers. Since authentication can happen at the ADFS servers it's also recommended to implement ADFS proxy servers. Two ADFS proxy servers are also recommended.</p>
                  <p>A couple of quick notes on ADFS:</p>
                  <ul>
                    <li>ADFS is one of the most complicated authentication systems available as a sign-in option for Microsoft 365.</li>
                    <li>Since your users will be authenticating to the ADFS it’s recommended to have redundant servers.</li>
                    <li>ADFS is one of the most expensive sign-in options for Microsoft 365.</li>
                  </ul>
                  <h4>Pass-through authentication</h4>
                  <p>Pass-through authentication (PTA) works like ADFS. With pass-through authentication users that are trying to access your Microsoft 365 environment will be passed to an on-premises server that has the PTA agent installed. Just like ADFS when a user signs in the username and password will be validated directly against your on-premises Active Directory.</p>
                  <p>Pass-through authentication does not affect cloud-only users. When a user with a cloud-only account (an account that isn't synced from your on-premises AD) the users will still be able to log in. It's good to have at least one global admin that's a cloud-only account in case of PTA failure.</p>
                  <h3>Troubleshooting AD Connect</h3>
                  <p>Troubleshooting AD Connect can be a bit complicated Because there are four places that you may need to check to view the errors (although the data is usually redundant)</p>
                  <ol>
                    <li>Directory Sync status in the Microsoft 365 admin center.</li>
                    <li>Sync errors in the Azure AD admin center (found under Azure Active Directory Connect health)</li>
                    <li>The synchronization service app on the AD Connect server</li>
                    <li>The application event logs on the AD Connect server</li>
                  </ol>
                  <h4>The errors you'll receive</h4>
                  <p>The first thing you'll receive is an email with the subject line "Unhealthy identity synchronization notification".</p>
                  <div ><img src="https://i.ibb.co/Vw4Y5TN/Unhealthy-identity-synchronization-notification.png" alt="Unhealthy identity synchronization notification" style="height: auto;width: auto" /></div>
                  <h4>How to review the error</h4>
                  <p>To review the error in more detail log on to the server that has the AD Connect service running then open the Synchronization Service Manager application. From there you'll see one of the profiles with a status of <strong>Completed-export-error</strong>. Click on it. Then click the <strong>error </strong>(in the bottom right corner. Click <strong>Detail</strong>. You can also click the CN=GUID to view the account that changed and what attributes have changed.</p>
                  <div ><img src="https://i.ibb.co/3CS1K7m/AD-Connect-error.png" alt="AD Connect Error" style="height: auto;width: auto" /></div>
                  <h3>Password Writeback</h3>
                  <p>Remember when I said AD Connect synchronizes your on-premises Active Directory to Microsoft 365, that it's a one-way sync? Now we're getting into the exceptions. Password writeback allows admins, as well as, users to update their password in Microsoft 365 and have that password synchronized back to the on-premises Active Directory. Let's say all your users are working from home. And occasionally, a user forgets their password. Currently, they call into your IT helpdesk and the IT staff must reset the password in Active Directory manually. With password writeback those calls are history. Users can go to the Microsoft 365 portal And through their username authenticate using text messages, phone calls, or another MFA authorization and reset their passwords.</p>
                  <p>Note: Azure AD P1 licenses are needed to configure password writeback.</p>
                  <p>Configuring password writeback is out of scope for the MS-500 but here are two Microsoft articles to help you get started:&nbsp;</p>
                  <ul>
                    <li><a href="https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-registration-mfa-sspr-combined" target="_blank" rel="noreferrer">https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-registration-mfa-sspr-combined</a>&nbsp;</li>
                    <li><a href="https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback" target="_blank" rel="noreferrer">https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback</a>&nbsp;</li>
                  </ul>
                  <h3>Other writeback options</h3>
                  <p>For a while, Microsoft did allow organizations to configure user writeback where an admin could change a user's attributes in Microsoft 365 and have the attributes writeback to an on-premises environment. Today, Microsoft doesn't allow user writeback. As mentioned above, they do allow password writeback.</p>
                  <p>Microsoft also allows group writeback Where users can create and manage Microsoft 365 groups in Microsoft 365 and have those groups write back to the on-premises Active Directory.</p>
                  <p>Microsoft also allows device writeback. Device writeback will create a device object in the on-premises Active Directory for every Azure AD-managed device. The devices will be located in an OU called RegisteredDevices.</p>
                  <h3>Hybrid Azure AD Joined devices</h3>
                  <p>Hybrid Azure AD joined devices are devices that are joined to your on-premises AD and registered with Azure AD through AD Connect. Configuring a hybrid Azure AD join will ensure that all domain-joined computers are registered in Azure AD. It’s also an important step if you want to manage your domain-joined computers using Intune.</p>
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
