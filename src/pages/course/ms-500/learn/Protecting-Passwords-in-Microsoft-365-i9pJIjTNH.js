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
      path: '/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH',
      article: {"article":{"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/Settings/SecurityPrivacy/:/Settings/L1/PasswordPolicy"}},"1":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Set passwords to expire in Microsoft 365","height":"auto","src":"https://i.ibb.co/L8gHHXJ/set-password-to-expire-in-Microsoft-365.png","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users","alignment":"none","width":"auto","targetOption":"_blank"}},"2":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Set-MsolDirSyncFeature -Feature EnforceCloudPasswordPolicyForPasswordSyncedUsers","height":"auto","targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users","width":"auto","alignment":"none","src":"https://i.ibb.co/Wf5HpMV/Set-Msol-Dir-Sync-Feature-Feature-Enforce-Cloud-Password-Policy-For-Password-Synced-Users.png"}},"3":{"type":"LINK","mutability":"MUTABLE","data":{"alt":"Reset a Microsoft 365 cloud-only user's password","width":"auto","alignment":"left","height":"auto","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users","src":"https://i.ibb.co/sCkm61R/reset-a-Microsoft-365-cloud-only-user-s-password.png","targetOption":"_blank"}},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection","alignment":"none","targetOption":"_blank","width":"auto","src":"https://i.ibb.co/sCkm61R/reset-a-Microsoft-365-cloud-only-user-s-password.png","alt":"Reset a Microsoft 365 cloud-only user's password","height":"auto"}},"5":{"mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection","height":"auto","width":"auto","src":"https://i.ibb.co/26hSJg8/reset-user-password.png","alignment":"none","alt":"Reset Microsoft 365 user password","targetOption":"_blank"},"type":"IMAGE"},"6":{"mutability":"MUTABLE","type":"IMAGE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection","targetOption":"_blank","height":"auto","width":"auto","alt":"Account is temporarily locked to prevent unauthorized use. Try again later, and if you still have trouble, contact your admin.","alignment":"none","src":"https://i.ibb.co/027NY26/account-is-temporarily-locked.png"}},"7":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","targetOption":"_blank","alt":"Access smart lockout settings","width":"auto","height":"auto","src":"https://i.ibb.co/DLD4G4q/access-smart-lockout-settings.png","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection"}},"8":{"data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection","src":"https://i.ibb.co/9tBh0pR/edit-smart-lockout-settings.png","alignment":"left","targetOption":"_blank","width":"auto","height":"auto","alt":"Edit smart lock settings"},"type":"LINK","mutability":"MUTABLE"},"9":{"mutability":"MUTABLE","data":{"width":"auto","height":"auto","targetOption":"_blank","alignment":"none","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/Properties","src":"https://i.ibb.co/9tBh0pR/edit-smart-lockout-settings.png","alt":"Edit smart lock settings"},"type":"IMAGE"},"10":{"type":"LINK","mutability":"MUTABLE","data":{"width":"auto","height":"auto","targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/Properties","src":"https://i.ibb.co/dfT6Mnj/open-password-reset-in-Azure-AD.png","alt":"Open Password Reset options in Azure AD","alignment":"left"}},"11":{"type":"IMAGE","data":{"height":"auto","alignment":"none","alt":"Open Password Reset options in Azure AD","width":"auto","src":"https://i.ibb.co/dfT6Mnj/open-password-reset-in-Azure-AD.png"},"mutability":"MUTABLE"},"12":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","height":"auto","alt":"Enable self service password reset","src":"https://i.ibb.co/x6TWRmW/enable-self-service-password-reset-in-Microsoft-365.png","width":"auto"}},"13":{"data":{"src":"https://i.ibb.co/DwLDNf2/self-service-password-reset-options.png","width":"auto","height":"auto","alignment":"none","alt":"Self-service password reset options in Microsoft 365"},"type":"IMAGE","mutability":"MUTABLE"}},"blocks":[{"inlineStyleRanges":[],"key":"fv46l","data":{},"text":"We all know what passwords are and how important they are to keep secret but new research on when to expire passwords may surprise you.","entityRanges":[],"depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"entityRanges":[],"key":"b2nok","data":{},"text":"By default, passwords are set to never expire in Microsoft 365. Microsoft’s current research strongly shows that requiring passwords to be changed does more harm than good. They drive users to re-use passwords including updating old passwords in ways that are easily guessed and choose weaker passwords. Microsoft strongly recommends enabling multi-factor authentication. But either way, Microsoft has made it easy for you to set a password expiration policy in Microsoft 365.","type":"unstyled","depth":0},{"key":"f8427","type":"header-two","text":"Setting passwords to expire in Microsoft 365","depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[],"data":{},"type":"unstyled","text":"To set your Microsoft 365 cloud-only accounts passwords to expire is easy.","entityRanges":[],"key":"8fov","depth":0},{"key":"5o46c","depth":0,"data":{},"entityRanges":[{"length":26,"key":0,"offset":82}],"type":"ordered-list-item","inlineStyleRanges":[{"offset":6,"style":"BOLD","length":26},{"style":"BOLD","offset":35,"length":9},{"length":12,"style":"BOLD","offset":46},{"offset":60,"style":"BOLD","length":19},{"style":"BOLD","length":27,"offset":82}],"text":"Go to Microsoft 365 admin center > Settings > Org settings > Security & privacy > Password expiration policy ."},{"type":"ordered-list-item","inlineStyleRanges":[{"length":51,"style":"BOLD","offset":6}],"entityRanges":[],"text":"Click Set user passwords to expire after a number of days.","key":"6iuqq","depth":0,"data":{}},{"inlineStyleRanges":[{"length":28,"offset":8,"style":"BOLD"},{"length":47,"style":"BOLD","offset":39}],"text":"Set the Days before passwords expire & Days before a user is notified about expiration.","type":"ordered-list-item","data":{},"entityRanges":[],"key":"29v0s","depth":0},{"depth":0,"text":"Click Save.","key":"4r82e","data":{},"inlineStyleRanges":[{"offset":6,"style":"BOLD","length":4}],"type":"ordered-list-item","entityRanges":[]},{"inlineStyleRanges":[],"type":"atomic","text":" ","entityRanges":[{"key":1,"offset":0,"length":1}],"data":{},"depth":0,"key":"tguo"},{"data":{},"depth":0,"entityRanges":[],"key":"98q2c","text":"Setting passwords of synced users to expire in Microsoft 365","inlineStyleRanges":[],"type":"header-two"},{"entityRanges":[],"depth":0,"data":{},"text":"If you followed the instructions above, you’ve now set all your cloud-only accounts passwords to expire but what about the synced accounts? Synced users are set to passwords never expire in Microsoft 365. That means the password synchronized to the cloud is still valid after the on-premises password expires, in other words, the user can continue to log in to Microsoft 365 using an expired password. If a user has a synchronized account and never touches the domain, they’ll be able to continue to sign in to Microsoft 365. So now let’s set the synced accounts passwords to expire.","key":"3r3ih","type":"unstyled","inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[{"offset":55,"style":"BOLD","length":19}],"depth":0,"text":"Open PowerShell and connect to Microsoft 365 using the Connect-MsolService","key":"bh0t1","type":"ordered-list-item","data":{}},{"type":"ordered-list-item","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":6,"length":94}],"text":"Run  “Set-MsolDirSyncFeature -Feature EnforceCloudPasswordPolicyForPasswordSyncedUsers -Enable $true”","depth":0,"data":{},"key":"16o28"},{"key":"2rj3c","data":{},"inlineStyleRanges":[{"length":3,"style":"BOLD","offset":53}],"depth":0,"text":"When prompted to continue with this operation? Click Yes.","type":"ordered-list-item","entityRanges":[]},{"key":"65k2a","text":" ","inlineStyleRanges":[],"data":{},"depth":0,"type":"atomic","entityRanges":[{"offset":0,"key":2,"length":1}]},{"inlineStyleRanges":[],"data":{},"text":"Resetting passwords for cloud-only users","type":"header-two","key":"1diln","depth":0,"entityRanges":[]},{"depth":0,"entityRanges":[],"key":"la4q","data":{},"text":"Sometimes, users will forget their passwords. It happens. Microsoft offers two options To reset a cloud-only user's password: self-service password reset (SSPR) or an admin can reset the password for the user. To reset a password for a user perform the following:","type":"unstyled","inlineStyleRanges":[]},{"text":"1. Log in to the Microsoft 365 admin center > Users > Active users. ","type":"unstyled","key":"2ok09","data":{},"depth":0,"inlineStyleRanges":[{"length":26,"offset":17,"style":"BOLD"},{"offset":46,"style":"BOLD","length":6},{"length":12,"style":"BOLD","offset":54}],"entityRanges":[{"offset":54,"key":3,"length":12}]},{"data":{},"key":"9lea6","text":"2. Search for the user that needs their password reset and click on them.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"inlineStyleRanges":[{"length":14,"offset":9,"style":"BOLD"}],"entityRanges":[],"data":{},"key":"4ghi9","text":"3. Click Reset password.","type":"unstyled","depth":0},{"key":"1jh0k","text":" ","type":"atomic","entityRanges":[{"key":4,"length":1,"offset":0}],"data":{},"depth":0,"inlineStyleRanges":[]},{"key":"6kjs","data":{},"text":"4. Select the options you want. Then click Reset password.","type":"unstyled","depth":0,"entityRanges":[],"inlineStyleRanges":[{"offset":43,"style":"BOLD","length":14}]},{"text":" ","data":{},"entityRanges":[{"key":5,"length":1,"offset":0}],"key":"4fobe","type":"atomic","depth":0,"inlineStyleRanges":[]},{"key":"1pr0i","depth":0,"data":{},"type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"style":"ITALIC","length":300,"offset":0}],"text":"Important note: The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles: Directory readers, Guest inviter, and Password administrator. Only Global admins can reset passwords for other administrators."},{"type":"header-two","key":"c7pu4","inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"Password lockout","depth":0},{"inlineStyleRanges":[],"type":"unstyled","data":{},"entityRanges":[],"text":"Microsoft has created a smart lockout system that helps lock out bad actors that try to guess your users’ passwords or use some other type of brute force method. A smart lockout can detect if it’s a valid user attempting to log in to their account and treats them differently than attempts that come from attackers. Attackers will get locked out, while your users can continue to access Microsoft 365.","depth":0,"key":"79k5q"},{"depth":0,"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"6a1nr","text":"When a user is locked out due to entering their password wrong too many times, they'll see the following message: “Your account is temporarily locked to prevent unauthorized use. Try again later, and if you still have trouble, contact your admin.”"},{"inlineStyleRanges":[],"type":"atomic","key":"dbd4n","data":{},"entityRanges":[{"key":6,"length":1,"offset":0}],"depth":0,"text":" "},{"entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[],"key":"4ea0m","type":"header-three","text":"How does smart lock work?"},{"data":{},"depth":0,"entityRanges":[],"text":"By default, Microsoft 365 will lock out an account for one minute after 10 failed attempts (or 3 for US Government). The account will automatically lock again after each failed sign-in attempt for one minute or longer.","type":"unstyled","key":"ckvm8","inlineStyleRanges":[]},{"text":"Smart Lockout uses a familiar location vs an unfamiliar location to differentiate between a bad actor and a genuine user. Unfamiliar and familiar locations both have separate lockout counters.","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"d27lf","type":"unstyled"},{"inlineStyleRanges":[],"entityRanges":[],"key":"3bl07","text":"Smart lockout tracks the last three bad password hashes and won't increment the lockout counter for the same password. For example, let's say a user’s password was Password321! and recently changed their password to Password543!. Then the user attempts to log into their account using Password321! three times. That would only count as one attempt.","depth":0,"data":{},"type":"unstyled"},{"entityRanges":[],"text":"Note: This does not work if you are configured using pass-through authentication since the authentication is happening in your on-premises environment and not in Microsoft 365.","depth":0,"key":"bri7q","data":{},"inlineStyleRanges":[{"style":"ITALIC","offset":0,"length":176}],"type":"unstyled"},{"data":{},"inlineStyleRanges":[{"length":224,"style":"BOLD","offset":0}],"text":"Important: Administrators can't unlock a user's account if they've been locked out. The user must wait for the lockout duration to expire or they can use the self-service password reset (SSPR) from a trusted device/location.","entityRanges":[],"key":"aejaa","depth":0,"type":"unstyled"},{"entityRanges":[],"depth":0,"key":"aqctm","text":"Editing the Password lockout settings","data":{},"type":"header-three","inlineStyleRanges":[]},{"inlineStyleRanges":[],"text":"The password lockout settings are simple in Microsoft 365. From the password protection settings, you can set the lockout threshold, lockout duration in seconds, and configure a banned password list. The banned password list is a custom list of passwords that your users won't be able to use when setting their passwords.  To get to the settings follow the below instructions:","depth":0,"entityRanges":[],"data":{},"type":"unstyled","key":"epbic"},{"text":"1. Go to Azure AD admin center and log in with admin credentials","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":21,"offset":9}],"entityRanges":[],"data":{},"key":"735j2","depth":0},{"inlineStyleRanges":[{"style":"BOLD","length":22,"offset":9},{"offset":34,"length":8,"style":"BOLD"},{"style":"BOLD","offset":45,"length":22}],"depth":0,"key":"botfk","data":{},"type":"unstyled","entityRanges":[],"text":"2. Go to Azure Active Directory > Security > Authentication methods."},{"type":"atomic","key":"ac0eu","data":{},"entityRanges":[{"length":1,"offset":0,"key":7}],"depth":0,"inlineStyleRanges":[],"text":" "},{"entityRanges":[{"offset":9,"length":19,"key":8}],"key":"foi4s","text":"3. Click Password protection. ","type":"unstyled","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":19}],"data":{},"depth":0},{"key":"6s86i","text":"4. Update the password protection policies and click Save.","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":53}],"entityRanges":[],"data":{},"type":"unstyled"},{"text":" ","key":"cj793","inlineStyleRanges":[],"depth":0,"type":"atomic","entityRanges":[{"key":9,"length":1,"offset":0}],"data":{}},{"type":"header-two","inlineStyleRanges":[],"entityRanges":[],"text":"Self-service password reset","key":"7bern","data":{},"depth":0},{"key":"813f7","data":{},"text":"Now, I've mentioned self-service password reset (SSPR) a couple of times so I thought I should explain. SSPR allows a user to reset their password without admin intervention. You've used it before on websites. For example, if you forget your password for Twitter or another web application you can click a reset password button and it will email your password. The same thing can be set up for Microsoft 365. By default, it's disabled for your users and enabled for your admins, so let’s enable it for everyone.","type":"unstyled","depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"inlineStyleRanges":[{"length":8,"offset":9,"style":"BOLD"}],"entityRanges":[],"type":"unstyled","depth":0,"data":{},"text":"1. Go to Azure AD and sign in with admin credentials.","key":"5i9d7"},{"entityRanges":[{"length":14,"key":10,"offset":34}],"depth":0,"data":{},"key":"6mmbs","type":"unstyled","inlineStyleRanges":[{"offset":9,"length":22,"style":"BOLD"},{"style":"BOLD","length":15,"offset":34}],"text":"2. Click Azure Active Directory > Password reset  (you may need to scroll down to see it)."},{"text":" ","depth":0,"entityRanges":[{"key":11,"offset":0,"length":1}],"data":{},"inlineStyleRanges":[],"type":"atomic","key":"foh56"},{"depth":0,"data":{},"text":"3. Click All > click Save.","entityRanges":[],"key":"2fval","inlineStyleRanges":[{"length":4,"style":"BOLD","offset":9},{"offset":21,"length":4,"style":"BOLD"}],"type":"unstyled"},{"inlineStyleRanges":[],"data":{},"entityRanges":[{"offset":0,"key":12,"length":1}],"key":"beuar","depth":0,"type":"atomic","text":" "},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"text":"While you’re here you should check out the other options available.","data":{},"key":"1ts1g","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":13,"offset":0,"length":1}],"key":"a4n1v","type":"atomic","text":" ","inlineStyleRanges":[]},{"type":"header-two","key":"71ppo","inlineStyleRanges":[],"data":{},"text":"How do you block a user from signing into Microsoft 365 when they are locked out of on-premises AD?","depth":0,"entityRanges":[]},{"entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"Now that we understand the Microsoft 365 defaults and adjusting the settings what about synchronized users? What if we have our on-premises AD tuned to just how we like it, the correct amount of password attempts gets a user locked. How do we apply our on-premises password protection to all Microsoft 365 synced users?","type":"unstyled","depth":0,"key":"eg1jo"},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"fuqlu","data":{},"text":"The answer is easy, by having the users authenticate to the on-premises AD. Using Pass-through authentication every time a user wants to authenticate to your Microsoft 365 tenant they’ll have to authenticate to your on-premises environment. Then, the AD group policy will apply to their sign-ins.","type":"unstyled"},{"entityRanges":[],"text":"","type":"unstyled","key":"c6ddj","inlineStyleRanges":[],"data":{},"depth":0}]},"type":"article","slug":"Protecting-Passwords-in-Microsoft-365-i9pJIjTNH","featuredImage":"https://i.ibb.co/DLD4G4q/access-smart-lockout-settings.png","id":"i9pJIjTNH","images":["https://i.ibb.co/DLD4G4q/access-smart-lockout-settings.png","https://i.ibb.co/027NY26/account-is-temporarily-locked.png","https://i.ibb.co/9tBh0pR/edit-smart-lockout-settings.png","https://i.ibb.co/x6TWRmW/enable-self-service-password-reset-in-Microsoft-365.png","https://i.ibb.co/dfT6Mnj/open-password-reset-in-Azure-AD.png","https://i.ibb.co/sCkm61R/reset-a-Microsoft-365-cloud-only-user-s-password.png","https://i.ibb.co/26hSJg8/reset-user-password.png","https://i.ibb.co/DwLDNf2/self-service-password-reset-options.png","https://i.ibb.co/L8gHHXJ/set-password-to-expire-in-Microsoft-365.png","https://i.ibb.co/Wf5HpMV/Set-Msol-Dir-Sync-Feature-Feature-Enforce-Cloud-Password-Policy-For-Password-Synced-Users.png"],"sectionId":"AFV_acckJ","publish":true,"title":"Protecting Passwords in Microsoft 365","datePublished":"2022/5/26","description":"Password management in Microsoft 365: protection and ease of use. Simple to configure and simple to manage."},
      nextContentSlug: 'Creating-and-managing-users-through-groups-S1hQgFOMV',
      previousContentSlug: 'Whats-AD-Connect-ky5W0Lz5P',
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
                <div><p>We all know what passwords are and how important they are to keep secret but new research on when to expire passwords may surprise you.</p>
<p>By default, passwords are set to never expire in Microsoft 365. Microsoft’s current research strongly shows that requiring passwords to be changed does more harm than good. They drive users to re-use passwords including updating old passwords in ways that are easily guessed and choose weaker passwords. Microsoft strongly recommends enabling multi-factor authentication. But either way, Microsoft has made it easy for you to set a password expiration policy in Microsoft 365.</p>
<h2>Setting passwords to expire in Microsoft 365</h2>
<p>To set your Microsoft 365 cloud-only accounts passwords to expire is easy.</p>
<ol>
<li>Go to <strong>Microsoft 365 admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Org settings</strong> &gt;<strong> Security &amp; privacy</strong> &gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/Settings/SecurityPrivacy/:/Settings/L1/PasswordPolicy" target="_blank"><strong>Password expiration policy</strong></a><strong> </strong>.</li>
<li>Click <strong>Set user passwords to expire after a number of days</strong>.</li>
<li>Set the <strong>Days before passwords expire</strong> &amp; <strong>Days before a user is notified about expiration</strong>.</li>
<li>Click <strong>Save</strong>.</li>
</ol>
<div ><img src="https://i.ibb.co/L8gHHXJ/set-password-to-expire-in-Microsoft-365.png" alt="Set passwords to expire in Microsoft 365" style="height: auto;width: auto"/></div>
<h2>Setting passwords of synced users to expire in Microsoft 365</h2>
<p>If you followed the instructions above, you’ve now set all your cloud-only accounts passwords to expire but what about the synced accounts? Synced users are set to passwords never expire in Microsoft 365. That means the password synchronized to the cloud is still valid after the on-premises password expires, in other words, the user can continue to log in to Microsoft 365 using an expired password. If a user has a synchronized account and never touches the domain, they’ll be able to continue to sign in to Microsoft 365. So now let’s set the synced accounts passwords to expire.</p>
<ol>
<li>Open PowerShell and connect to Microsoft 365 using the <strong>Connect-MsolService</strong></li>
<li>Run  “<strong>Set-MsolDirSyncFeature -Feature EnforceCloudPasswordPolicyForPasswordSyncedUsers -Enable $true</strong>”</li>
<li>When prompted to continue with this operation? Click <strong>Yes</strong>.</li>
</ol>
<div ><img src="https://i.ibb.co/Wf5HpMV/Set-Msol-Dir-Sync-Feature-Feature-Enforce-Cloud-Password-Policy-For-Password-Synced-Users.png" alt="Set-MsolDirSyncFeature -Feature EnforceCloudPasswordPolicyForPasswordSyncedUsers" style="height: auto;width: auto"/></div>
<h2>Resetting passwords for cloud-only users</h2>
<p>Sometimes, users will forget their passwords. It happens. Microsoft offers two options To reset a cloud-only user's password: self-service password reset (SSPR) or an admin can reset the password for the user. To reset a password for a user perform the following:</p>
<p>1. Log in to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Users </strong>&gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank"><strong>Active users</strong></a>.&nbsp;</p>
<p>2. Search for the user that needs their password reset and click on them.</p>
<p>3. Click <strong>Reset password</strong>.</p>
<div ><img src="https://i.ibb.co/sCkm61R/reset-a-Microsoft-365-cloud-only-user-s-password.png" alt="Reset a Microsoft 365 cloud-only user's password" style="height: auto;width: auto"/></div>
<p>4. Select the options you want. Then click <strong>Reset password</strong>.</p>
<div ><img src="https://i.ibb.co/26hSJg8/reset-user-password.png" alt="Reset Microsoft 365 user password" style="height: auto;width: auto"/></div>
<p><em>Important note: The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles: Directory readers, Guest inviter, and Password administrator. Only Global admins can reset passwords for other administrators.</em></p>
<h2>Password lockout</h2>
<p>Microsoft has created a smart lockout system that helps lock out bad actors that try to guess your users’ passwords or use some other type of brute force method. A smart lockout can detect if it’s a valid user attempting to log in to their account and treats them differently than attempts that come from attackers. Attackers will get locked out, while your users can continue to access Microsoft 365.</p>
<p>When a user is locked out due to entering their password wrong too many times, they'll see the following message: “Your account is temporarily locked to prevent unauthorized use. Try again later, and if you still have trouble, contact your admin.”</p>
<div ><img src="https://i.ibb.co/027NY26/account-is-temporarily-locked.png" alt="Account is temporarily locked to prevent unauthorized use. Try again later, and if you still have trouble, contact your admin." style="height: auto;width: auto"/></div>
<h3>How does smart lock work?</h3>
<p>By default, Microsoft 365 will lock out an account for one minute after 10 failed attempts (or 3 for US Government). The account will automatically lock again after each failed sign-in attempt for one minute or longer.</p>
<p>Smart Lockout uses a familiar location vs an unfamiliar location to differentiate between a bad actor and a genuine user. Unfamiliar and familiar locations both have separate lockout counters.</p>
<p>Smart lockout tracks the last three bad password hashes and won't increment the lockout counter for the same password. For example, let's say a user’s password was Password321! and recently changed their password to Password543!. Then the user attempts to log into their account using Password321! three times. That would only count as one attempt.</p>
<p><em>Note: This does not work if you are configured using pass-through authentication since the authentication is happening in your on-premises environment and not in Microsoft 365.</em></p>
<p><strong>Important: Administrators can't unlock a user's account if they've been locked out. The user must wait for the lockout duration to expire or they can use the self-service password reset (SSPR) from a trusted device/location.</strong></p>
<h3>Editing the Password lockout settings</h3>
<p>The password lockout settings are simple in Microsoft 365. From the password protection settings, you can set the lockout threshold, lockout duration in seconds, and configure a banned password list. The banned password list is a custom list of passwords that your users won't be able to use when setting their passwords.  To get to the settings follow the below instructions:</p>
<p>1. Go to <strong>Azure AD admin center</strong> and log in with admin credentials</p>
<p>2. Go to <strong>Azure Active Directory</strong> &gt; <strong>Security</strong> &gt; <strong>Authentication methods</strong>.</p>
<div ><img src="https://i.ibb.co/DLD4G4q/access-smart-lockout-settings.png" alt="Access smart lockout settings" style="height: auto;width: auto"/></div>
<p>3. Click <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection" target="_blank"><strong>Password protection</strong></a>.&nbsp;</p>
<p>4. Update the password protection policies and click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/9tBh0pR/edit-smart-lockout-settings.png" alt="Edit smart lock settings" style="height: auto;width: auto"/></div>
<h2>Self-service password reset</h2>
<p>Now, I've mentioned self-service password reset (SSPR) a couple of times so I thought I should explain. SSPR allows a user to reset their password without admin intervention. You've used it before on websites. For example, if you forget your password for Twitter or another web application you can click a reset password button and it will email your password. The same thing can be set up for Microsoft 365. By default, it's disabled for your users and enabled for your admins, so let’s enable it for everyone.</p>
<p>1. Go to <strong>Azure AD</strong> and sign in with admin credentials.</p>
<p>2. Click <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/Properties" target="_blank"><strong>Password reset</strong></a><strong> </strong> (you may need to scroll down to see it).</p>
<div ><img src="https://i.ibb.co/dfT6Mnj/open-password-reset-in-Azure-AD.png" alt="Open Password Reset options in Azure AD" style="height: auto;width: auto"/></div>
<p>3. Click <strong>All </strong>&gt; click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/x6TWRmW/enable-self-service-password-reset-in-Microsoft-365.png" alt="Enable self service password reset" style="height: auto;width: auto"/></div>
<p>While you’re here you should check out the other options available.</p>
<div ><img src="https://i.ibb.co/DwLDNf2/self-service-password-reset-options.png" alt="Self-service password reset options in Microsoft 365" style="height: auto;width: auto"/></div>
<h2>How do you block a user from signing into Microsoft 365 when they are locked out of on-premises AD?</h2>
<p>Now that we understand the Microsoft 365 defaults and adjusting the settings what about synchronized users? What if we have our on-premises AD tuned to just how we like it, the correct amount of password attempts gets a user locked. How do we apply our on-premises password protection to all Microsoft 365 synced users?</p>
<p>The answer is easy, by having the users authenticate to the on-premises AD. Using Pass-through authentication every time a user wants to authenticate to your Microsoft 365 tenant they’ll have to authenticate to your on-premises environment. Then, the AD group policy will apply to their sign-ins.</p>
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
