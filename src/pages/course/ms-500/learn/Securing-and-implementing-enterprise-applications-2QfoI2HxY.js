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
      path: '/course/ms-500/learn/Securing-and-implementing-enterprise-applications-2QfoI2HxY',
      article: {"article":{"entityMap":{"0":{"data":{"targetOption":"_blank","url":"https://techcommunity.microsoft.com/"},"type":"LINK","mutability":"MUTABLE"},"1":{"data":{"alt":"3rd party app consenting request","height":"auto","src":"https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"2":{"data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps"},"type":"LINK","mutability":"MUTABLE"},"3":{"type":"IMAGE","data":{"alt":"Review app access","height":"auto","width":"auto","src":"https://i.ibb.co/6HwM4Zg/review-app-access.png","alignment":"none"},"mutability":"MUTABLE"},"4":{"type":"IMAGE","data":{"alignment":"none","alt":"Enterprise app permissions in Azure AD","height":"auto","width":"auto","src":"https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png"},"mutability":"MUTABLE"},"5":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/UserSettings"}},"6":{"data":{"alignment":"none","src":"https://i.ibb.co/C2mp69m/disable-user-consent.png","width":"auto","height":"auto","alt":"Disable user consent and require an admin to approve"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"type":"LINK","data":{"url":"https://www.zoho.com/signup.html","targetOption":"_blank"},"mutability":"MUTABLE"},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/7RN0X5v/zoho-office-login.png","alignment":"none","alt":"Zoho Office login","width":"auto"}},"9":{"data":{"src":"https://i.ibb.co/BBN6L3x/request-app-access.png","width":"auto","alignment":"none","height":"auto","alt":"App requesting access to Microsoft 365"},"mutability":"MUTABLE","type":"IMAGE"},"10":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alignment":"none","height":"auto","alt":"Admins receiving notification user wants app access","src":"https://i.ibb.co/Q8dh29f/admin-review-email.png"}},"11":{"type":"IMAGE","data":{"alignment":"left","src":"https://i.ibb.co/DbBfrF4/review-app-access-requests.png","alt":"Review app access requests","width":"auto","height":"auto"},"mutability":"MUTABLE"},"12":{"type":"IMAGE","data":{"width":"auto","src":"https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png","height":"auto","alt":"Review 3rd party app access request","alignment":"none"},"mutability":"MUTABLE"},"13":{"data":{"alignment":"none","height":"auto","width":"auto","alt":"Approve access to third-party app","src":"https://i.ibb.co/rxSkbBQ/approve-access.png"},"type":"IMAGE","mutability":"MUTABLE"},"14":{"mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/RSwm2wQ/approved-email.png","alt":"third-party app approved","width":"auto","alignment":"none"},"type":"IMAGE"},"15":{"data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"16":{"mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png","alignment":"none","width":"auto","alt":"auto-approve apps with minimal impact"},"type":"IMAGE"},"17":{"mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png","alt":"Select permissions to auto-approve","height":"auto","alignment":"none"},"type":"IMAGE"}},"blocks":[{"key":"2l5rs","text":"Did you know your users can grant third-party apps consent to your Microsoft 365 tenant? By default, all users can grant third-party apps access to your company data that they have access to. Enterprise applications are a fantastic way for you and your users to extend your Microsoft 365 tenant to third-party apps, but they can leave your company vulnerable. First, let's jump in and consent to a third-party app the way a user would.","entityRanges":[],"inlineStyleRanges":[],"data":{},"type":"unstyled","depth":0},{"entityRanges":[],"data":{},"type":"header-two","depth":0,"key":"320bq","inlineStyleRanges":[],"text":"Granting third-party app access to your Microsoft 365 tenant"},{"inlineStyleRanges":[],"data":{},"text":"1. Go to https://techcommunity.microsoft.com/ ","type":"unstyled","entityRanges":[{"length":36,"offset":9,"key":0}],"depth":0,"key":"aobbf"},{"key":"a7tql","entityRanges":[],"text":"2. Click Sign in found in the top right corner.","depth":0,"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":7}],"type":"unstyled","data":{}},{"text":"3. Sign in using your Microsoft 365 credentials.","type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"data":{},"key":"2mu87","depth":0},{"key":"fvlr0","data":{},"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"depth":0,"text":"4. Next, you’ll see the permissions requested page. From here you see the permissions the app would like to access in your Microsoft 365 user account."},{"inlineStyleRanges":[{"style":"BOLD","offset":37,"length":38}],"text":"If you’re an admin you’ll also see a Consent on behalf of your organization.","depth":0,"key":"9j6no","entityRanges":[],"data":{},"type":"unstyled"},{"key":"3vqng","depth":0,"type":"unstyled","text":"5. Click Accept.","entityRanges":[],"inlineStyleRanges":[{"length":6,"style":"BOLD","offset":9}],"data":{}},{"depth":0,"text":" ","type":"atomic","inlineStyleRanges":[],"key":"2vkkp","entityRanges":[{"offset":0,"length":1,"key":1}],"data":{}},{"data":{},"inlineStyleRanges":[],"key":"28jvi","type":"unstyled","depth":0,"entityRanges":[],"text":"That’s it. Now Microsoft’s Tech Community can sign in as your user and read your user’s profile. Now, Microsoft’s Tech community is run by Microsoft so it’s a safe app to grant access to your tenant but what about other apps?"},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"text":"A malicious individual could trick your users into granting apps access to your tenant that they shouldn’t have. So, we’ll need to manage and restrict what apps users can grant access to. Before we lock down the access let’s look at the apps that already have access to your tenant.","key":"m19n","data":{},"type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"type":"header-two","key":"5o2qi","text":"How to view third party app access to your Microsoft 365 tenant","data":{},"entityRanges":[]},{"data":{},"entityRanges":[{"offset":33,"key":2,"length":23}],"type":"unstyled","key":"76jvd","text":"1. Go to Azure AD admin center > Enterprise applications. ","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":21},{"offset":33,"length":23,"style":"BOLD"}],"depth":0},{"key":"ca8s2","text":"2. Find and click the Microsoft Tech Community app.","inlineStyleRanges":[{"style":"BOLD","length":24,"offset":22}],"depth":0,"entityRanges":[],"type":"unstyled","data":{}},{"entityRanges":[{"length":1,"key":3,"offset":0}],"data":{},"text":" ","inlineStyleRanges":[],"type":"atomic","depth":0,"key":"d18g9"},{"type":"unstyled","entityRanges":[],"depth":0,"text":"3. By clicking Users and groups you can review who has given permissions to the app.","data":{},"inlineStyleRanges":[{"offset":15,"length":16,"style":"BOLD"}],"key":"dpoen"},{"entityRanges":[],"key":"6tslr","type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[{"length":12,"offset":15,"style":"BOLD"},{"length":12,"offset":29,"style":"BOLD"}],"text":"4. By clicking Permissions > User consent you can review what permissions have been given to the app."},{"entityRanges":[{"length":1,"offset":0,"key":4}],"inlineStyleRanges":[],"data":{},"text":" ","depth":0,"type":"atomic","key":"crl96"},{"depth":0,"entityRanges":[],"type":"header-two","data":{},"key":"6ht9m","inlineStyleRanges":[],"text":"Block users from granting access to any apps"},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled","depth":0,"text":"The best way to protect your tenant is to require admins to approve any third-party applications before a user can consent. That way users can't grant malicious apps access to your Microsoft 365 data or tenant.","key":"9j24l"},{"data":{},"type":"unstyled","key":"1q7ej","text":"1. Go to Azure AD admin center > Enterprise applications > User settings. ","inlineStyleRanges":[{"style":"BOLD","length":21,"offset":9},{"length":23,"style":"BOLD","offset":33},{"style":"BOLD","length":13,"offset":59}],"entityRanges":[{"offset":59,"key":5,"length":13}],"depth":0},{"entityRanges":[],"inlineStyleRanges":[{"length":3,"style":"BOLD","offset":9}],"type":"unstyled","key":"2spc6","data":{},"text":"2. Click No in Users can consent to apps accessing company data on their behalf.","depth":0},{"entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":3}],"data":{},"key":"172rc","text":"3. Click No in Users can consent to apps accessing company data for the groups they own.","type":"unstyled"},{"depth":0,"inlineStyleRanges":[{"length":4,"style":"BOLD","offset":9}],"data":{},"text":"4. Click Yes next to Users can request admin consent to apps they are unable to consent to.","type":"unstyled","entityRanges":[],"key":"c8t2t"},{"text":"5. Click Add roles. Search for global. Click Select.","data":{},"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":9,"offset":9},{"style":"BOLD","length":6,"offset":31},{"style":"BOLD","offset":45,"length":6}],"entityRanges":[],"depth":0,"key":"3j1e7"},{"depth":0,"text":"6. Click Save.","type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":4}],"key":"a87uu","data":{}},{"inlineStyleRanges":[],"depth":0,"type":"atomic","data":{},"key":"ajmni","entityRanges":[{"key":6,"length":1,"offset":0}],"text":" "},{"text":"Now, users can request access to apps and a notification will go to your global admins. Let’s look at how that would work.","entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","data":{},"depth":0,"key":"30djb"},{"key":"9q92m","entityRanges":[],"data":{},"type":"header-two","text":"Require admin approval to allow an app access to Microsoft 365","depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"entityRanges":[{"length":32,"offset":9,"key":7}],"type":"unstyled","data":{},"text":"1. Go to https://www.zoho.com/signup.html ","depth":0,"key":"8bg3u"},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"text":"2. Click the Office button.","depth":0,"key":"11n62","type":"unstyled"},{"key":"3l8oa","entityRanges":[{"key":8,"length":1,"offset":0}],"text":" ","depth":0,"data":{},"inlineStyleRanges":[],"type":"atomic"},{"key":"2s6n3","inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"unstyled","text":"3. Login with a regular user account.","data":{}},{"key":"4ghk9","entityRanges":[],"type":"unstyled","text":"4. Enter a justification reason and click Request approval.","data":{},"inlineStyleRanges":[{"style":"BOLD","offset":42,"length":16}],"depth":0},{"data":{},"text":" ","depth":0,"key":"d00v3","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"length":1,"key":9,"offset":0}]},{"text":"At this point, the admins will receive an email saying they need to review the consent. ","entityRanges":[],"type":"unstyled","key":"8q7l8","depth":0,"data":{},"inlineStyleRanges":[{"length":87,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":87},{"length":87,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":87,"offset":0}]},{"entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":14,"offset":9}],"depth":0,"text":"1. Click Review request.","key":"9jfjb","data":{}},{"key":"4kuad","inlineStyleRanges":[],"data":{},"type":"atomic","entityRanges":[{"offset":0,"key":10,"length":1}],"depth":0,"text":" "},{"data":{},"key":"brheh","text":"2. Click the app that requests approval.","depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"key":"1mjua","type":"atomic","depth":0,"text":" ","entityRanges":[{"offset":0,"length":1,"key":11}]},{"entityRanges":[],"key":"ccjd0","depth":0,"data":{},"inlineStyleRanges":[{"length":30,"style":"BOLD","offset":9}],"text":"3. Click Review permissions and consent.","type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":12,"offset":0}],"type":"atomic","text":" ","key":"aq570","data":{}},{"entityRanges":[],"key":"2s505","depth":0,"data":{},"inlineStyleRanges":[{"length":6,"style":"BOLD","offset":9}],"text":"4. Click Accept.","type":"unstyled"},{"inlineStyleRanges":[],"data":{},"key":"2ndvb","entityRanges":[{"length":1,"offset":0,"key":13}],"depth":0,"type":"atomic","text":" "},{"data":{},"text":"Once you click to accept the user will receive an email saying the access has been approved. Then the user can go back to the third-party app and gain access using their Microsoft 365 tenant account.","entityRanges":[],"key":"6vill","inlineStyleRanges":[],"type":"unstyled","depth":0},{"inlineStyleRanges":[],"entityRanges":[{"key":14,"offset":0,"length":1}],"data":{},"depth":0,"text":" ","key":"5nl0n","type":"atomic"},{"data":{},"text":"Auto-approval","depth":0,"type":"header-two","key":"cjccl","entityRanges":[],"inlineStyleRanges":[]},{"key":"3oi9b","type":"unstyled","inlineStyleRanges":[],"text":"Now you may be wondering how many requests you’ll receive. If you are in a smaller organization then chances are you won’t receive too many and you’ll be fine. If you’re in a larger organization, you may receive a lot of requests. That’s not good. You’ll be constantly approving apps even though they may not need many permissions. Let’s set up auto-approval for verified publishers that request a few permissions.","depth":0,"entityRanges":[],"data":{}},{"entityRanges":[{"key":15,"offset":59,"length":23}],"key":"arl2s","text":"1. Go to Azure AD admin center > Enterprise applications > Consent and permissions .","data":{},"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":21},{"length":23,"style":"BOLD","offset":33},{"style":"BOLD","length":24,"offset":59}],"type":"unstyled","depth":0},{"depth":0,"inlineStyleRanges":[{"offset":9,"length":78,"style":"BOLD"},{"length":4,"style":"BOLD","offset":95}],"type":"unstyled","text":"2. Click Allow user consent for apps from verified publishers, for selected permissions. Click Save","data":{},"entityRanges":[],"key":"7c8c5"},{"key":"3i9rt","depth":0,"data":{},"inlineStyleRanges":[{"length":48,"offset":9,"style":"BOLD"}],"type":"unstyled","entityRanges":[],"text":"3. Click Select permissions to classify as minimal impact."},{"entityRanges":[{"key":16,"length":1,"offset":0}],"data":{},"key":"5s3ge","depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic"},{"key":"4m647","inlineStyleRanges":[{"style":"BOLD","length":29,"offset":57}],"depth":0,"type":"unstyled","text":"4. Click the permissions you want to auto-approve. Click Yes, add selected permissions.","data":{},"entityRanges":[]},{"entityRanges":[{"length":1,"offset":0,"key":17}],"data":{},"inlineStyleRanges":[],"depth":0,"key":"r0jr","text":" ","type":"atomic"},{"key":"aae8f","entityRanges":[],"type":"unstyled","depth":0,"data":{},"text":"","inlineStyleRanges":[]}]},"publish":true,"featuredImage":"https://i.ibb.co/C2mp69m/disable-user-consent.png","description":"Did you know users may give malicious apps access to your Microsoft 365 tenant? Protect your organization from compromised enterprise apps.","title":"Securing and implementing enterprise applications","type":"article","datePublished":"2022/5/26","images":["https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png","https://i.ibb.co/6HwM4Zg/review-app-access.png","https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png","https://i.ibb.co/C2mp69m/disable-user-consent.png","https://i.ibb.co/7RN0X5v/zoho-office-login.png","https://i.ibb.co/BBN6L3x/request-app-access.png","https://i.ibb.co/Q8dh29f/admin-review-email.png","https://i.ibb.co/DbBfrF4/review-app-access-requests.png","https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png","https://i.ibb.co/rxSkbBQ/approve-access.png","https://i.ibb.co/RSwm2wQ/approved-email.png","https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png","https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png"],"id":"2QfoI2HxY","slug":"Securing-and-implementing-enterprise-applications-2QfoI2HxY","sectionId":"AFV_acckJ"},
      nextContentSlug: 'Whats-a-conditional-access-policy-V1en9Iugh',
      previousContentSlug: 'Creating-and-managing-users-through-groups-S1hQgFOMV',
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
                <div><p>Did you know your users can grant third-party apps consent to your Microsoft 365 tenant? By default, all users can grant third-party apps access to your company data that they have access to. Enterprise applications are a fantastic way for you and your users to extend your Microsoft 365 tenant to third-party apps, but they can leave your company vulnerable. First, let's jump in and consent to a third-party app the way a user would.</p>
<h2>Granting third-party app access to your Microsoft 365 tenant</h2>
<p>1. Go to <a href="https://techcommunity.microsoft.com/" target="_blank">https://techcommunity.microsoft.com/</a>&nbsp;</p>
<p>2. Click <strong>Sign in</strong> found in the top right corner.</p>
<p>3. Sign in using your Microsoft 365 credentials.</p>
<p>4. Next, you’ll see the permissions requested page. From here you see the permissions the app would like to access in your Microsoft 365 user account.</p>
<p>If you’re an admin you’ll also see a <strong>Consent on behalf of your organization</strong>.</p>
<p>5. Click <strong>Accept</strong>.</p>
<div ><img src="https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png" alt="3rd party app consenting request" style="height: auto;width: auto"/></div>
<p>That’s it. Now Microsoft’s Tech Community can sign in as your user and read your user’s profile. Now, Microsoft’s Tech community is run by Microsoft so it’s a safe app to grant access to your tenant but what about other apps?</p>
<p>A malicious individual could trick your users into granting apps access to your tenant that they shouldn’t have. So, we’ll need to manage and restrict what apps users can grant access to. Before we lock down the access let’s look at the apps that already have access to your tenant.</p>
<h2>How to view third party app access to your Microsoft 365 tenant</h2>
<p>1. Go to <strong>Azure AD admin center</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps" target="_blank"><strong>Enterprise applications</strong></a>.&nbsp;</p>
<p>2. Find and click the <strong>Microsoft Tech Community</strong> app.</p>
<div ><img src="https://i.ibb.co/6HwM4Zg/review-app-access.png" alt="Review app access" style="height: auto;width: auto"/></div>
<p>3. By clicking <strong>Users and groups</strong> you can review who has given permissions to the app.</p>
<p>4. By clicking <strong>Permissions </strong>&gt; <strong>User consent</strong> you can review what permissions have been given to the app.</p>
<div ><img src="https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png" alt="Enterprise app permissions in Azure AD" style="height: auto;width: auto"/></div>
<h2>Block users from granting access to any apps</h2>
<p>The best way to protect your tenant is to require admins to approve any third-party applications before a user can consent. That way users can't grant malicious apps access to your Microsoft 365 data or tenant.</p>
<p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Enterprise applications</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/UserSettings" target="_blank"><strong>User settings</strong></a>.&nbsp;</p>
<p>2. Click <strong>No </strong>in Users can consent to apps accessing company data on their behalf.</p>
<p>3. Click <strong>No </strong>in Users can consent to apps accessing company data for the groups they own.</p>
<p>4. Click <strong>Yes </strong>next to Users can request admin consent to apps they are unable to consent to.</p>
<p>5. Click <strong>Add roles</strong>. Search for <strong>global</strong>. Click <strong>Select</strong>.</p>
<p>6. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/C2mp69m/disable-user-consent.png" alt="Disable user consent and require an admin to approve" style="height: auto;width: auto"/></div>
<p>Now, users can request access to apps and a notification will go to your global admins. Let’s look at how that would work.</p>
<h2>Require admin approval to allow an app access to Microsoft 365</h2>
<p>1. Go to <a href="https://www.zoho.com/signup.html" target="_blank">https://www.zoho.com/signup.html</a>&nbsp;</p>
<p>2. Click the Office button.</p>
<div ><img src="https://i.ibb.co/7RN0X5v/zoho-office-login.png" alt="Zoho Office login" style="height: auto;width: auto"/></div>
<p>3. Login with a regular user account.</p>
<p>4. Enter a justification reason and click <strong>Request approval</strong>.</p>
<div ><img src="https://i.ibb.co/BBN6L3x/request-app-access.png" alt="App requesting access to Microsoft 365" style="height: auto;width: auto"/></div>
<p><span >At this point, the admins will receive an email saying they need to review the consent.</span>&nbsp;</p>
<p>1. Click <strong>Review request</strong>.</p>
<div ><img src="https://i.ibb.co/Q8dh29f/admin-review-email.png" alt="Admins receiving notification user wants app access" style="height: auto;width: auto"/></div>
<p>2. Click the app that requests approval.</p>
<div ><img src="https://i.ibb.co/DbBfrF4/review-app-access-requests.png" alt="Review app access requests" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Review permissions and consent</strong>.</p>
<div ><img src="https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png" alt="Review 3rd party app access request" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Accept</strong>.</p>
<div ><img src="https://i.ibb.co/rxSkbBQ/approve-access.png" alt="Approve access to third-party app" style="height: auto;width: auto"/></div>
<p>Once you click to accept the user will receive an email saying the access has been approved. Then the user can go back to the third-party app and gain access using their Microsoft 365 tenant account.</p>
<div ><img src="https://i.ibb.co/RSwm2wQ/approved-email.png" alt="third-party app approved" style="height: auto;width: auto"/></div>
<h2>Auto-approval</h2>
<p>Now you may be wondering how many requests you’ll receive. If you are in a smaller organization then chances are you won’t receive too many and you’ll be fine. If you’re in a larger organization, you may receive a lot of requests. That’s not good. You’ll be constantly approving apps even though they may not need many permissions. Let’s set up auto-approval for verified publishers that request a few permissions.</p>
<p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Enterprise applications</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings" target="_blank"><strong>Consent and permissions</strong></a><strong> </strong>.</p>
<p>2. Click <strong>Allow user consent for apps from verified publishers, for selected permissions</strong>. Click <strong>Save</strong></p>
<p>3. Click <strong>Select permissions to classify as minimal impact</strong>.</p>
<div ><img src="https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png" alt="auto-approve apps with minimal impact" style="height: auto;width: auto"/></div>
<p>4. Click the permissions you want to auto-approve. Click <strong>Yes, add selected permissions</strong>.</p>
<div ><img src="https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png" alt="Select permissions to auto-approve" style="height: auto;width: auto"/></div>
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
