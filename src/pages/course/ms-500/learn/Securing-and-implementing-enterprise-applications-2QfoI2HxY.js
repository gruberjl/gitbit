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
      article: {"title":"Securing and implementing enterprise applications","article":{"blocks":[{"type":"unstyled","text":"Did you know your users can grant third-party apps consent to your Microsoft 365 tenant? By default, all users can grant third-party apps access to your company data that they have access to. Enterprise applications are a fantastic way for you and your users to extend your Microsoft 365 tenant to third-party apps, but they can leave your company vulnerable. First, let's jump in and consent to a third-party app the way a user would.","key":"2l5rs","depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[]},{"key":"320bq","data":{},"text":"Granting third-party app access to your Microsoft 365 tenant","inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"header-two"},{"key":"aobbf","data":{},"entityRanges":[{"offset":9,"length":36,"key":0}],"type":"unstyled","text":"1. Go to https://techcommunity.microsoft.com/ ","depth":0,"inlineStyleRanges":[]},{"depth":0,"data":{},"text":"2. Click Sign in found in the top right corner.","inlineStyleRanges":[{"style":"BOLD","length":7,"offset":9}],"entityRanges":[],"key":"a7tql","type":"unstyled"},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"text":"3. Sign in using your Microsoft 365 credentials.","key":"2mu87","type":"unstyled","depth":0},{"entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"fvlr0","text":"4. Next, you’ll see the permissions requested page. From here you see the permissions the app would like to access in your Microsoft 365 user account.","data":{}},{"entityRanges":[],"data":{},"text":"If you’re an admin you’ll also see a Consent on behalf of your organization.","inlineStyleRanges":[{"style":"BOLD","length":38,"offset":37}],"type":"unstyled","key":"9j6no","depth":0},{"type":"unstyled","entityRanges":[],"data":{},"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":6,"offset":9}],"text":"5. Click Accept.","key":"3vqng"},{"data":{},"inlineStyleRanges":[],"text":" ","key":"2vkkp","entityRanges":[{"offset":0,"key":1,"length":1}],"type":"atomic","depth":0},{"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"text":"That’s it. Now Microsoft’s Tech Community can sign in as your user and read your user’s profile. Now, Microsoft’s Tech community is run by Microsoft so it’s a safe app to grant access to your tenant but what about other apps?","data":{},"depth":0,"key":"28jvi"},{"text":"A malicious individual could trick your users into granting apps access to your tenant that they shouldn’t have. So, we’ll need to manage and restrict what apps users can grant access to. Before we lock down the access let’s look at the apps that already have access to your tenant.","key":"m19n","type":"unstyled","inlineStyleRanges":[],"depth":0,"data":{},"entityRanges":[]},{"depth":0,"inlineStyleRanges":[],"type":"header-two","data":{},"key":"5o2qi","entityRanges":[],"text":"How to view third party app access to your Microsoft 365 tenant"},{"entityRanges":[{"offset":33,"length":23,"key":2}],"depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":21},{"style":"BOLD","length":23,"offset":33}],"text":"1. Go to Azure AD admin center > Enterprise applications. ","key":"76jvd"},{"data":{},"depth":0,"type":"unstyled","entityRanges":[],"key":"ca8s2","inlineStyleRanges":[{"length":24,"offset":22,"style":"BOLD"}],"text":"2. Find and click the Microsoft Tech Community app."},{"key":"d18g9","type":"atomic","entityRanges":[{"key":3,"length":1,"offset":0}],"inlineStyleRanges":[],"depth":0,"text":" ","data":{}},{"entityRanges":[],"depth":0,"type":"unstyled","data":{},"key":"dpoen","inlineStyleRanges":[{"style":"BOLD","offset":15,"length":16}],"text":"3. By clicking Users and groups you can review who has given permissions to the app."},{"data":{},"depth":0,"text":"4. By clicking Permissions > User consent you can review what permissions have been given to the app.","entityRanges":[],"inlineStyleRanges":[{"length":12,"style":"BOLD","offset":15},{"style":"BOLD","length":12,"offset":29}],"key":"6tslr","type":"unstyled"},{"entityRanges":[{"key":4,"offset":0,"length":1}],"inlineStyleRanges":[],"data":{},"depth":0,"key":"crl96","type":"atomic","text":" "},{"depth":0,"data":{},"entityRanges":[],"inlineStyleRanges":[],"type":"header-two","text":"Block users from granting access to any apps","key":"6ht9m"},{"depth":0,"entityRanges":[],"text":"The best way to protect your tenant is to require admins to approve any third-party applications before a user can consent. That way users can't grant malicious apps access to your Microsoft 365 data or tenant.","data":{},"inlineStyleRanges":[],"type":"unstyled","key":"9j24l"},{"depth":0,"type":"unstyled","key":"1q7ej","inlineStyleRanges":[{"style":"BOLD","length":21,"offset":9},{"offset":33,"length":23,"style":"BOLD"},{"style":"BOLD","offset":59,"length":13}],"text":"1. Go to Azure AD admin center > Enterprise applications > User settings. ","data":{},"entityRanges":[{"key":5,"length":13,"offset":59}]},{"type":"unstyled","text":"2. Click No in Users can consent to apps accessing company data on their behalf.","key":"2spc6","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[{"offset":9,"length":3,"style":"BOLD"}]},{"entityRanges":[],"depth":0,"key":"172rc","inlineStyleRanges":[{"length":3,"offset":9,"style":"BOLD"}],"type":"unstyled","data":{},"text":"3. Click No in Users can consent to apps accessing company data for the groups they own."},{"text":"4. Click Yes next to Users can request admin consent to apps they are unable to consent to.","data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":4,"offset":9}],"entityRanges":[],"key":"c8t2t"},{"data":{},"entityRanges":[],"key":"3j1e7","depth":0,"text":"5. Click Add roles. Search for global. Click Select.","type":"unstyled","inlineStyleRanges":[{"length":9,"style":"BOLD","offset":9},{"length":6,"offset":31,"style":"BOLD"},{"length":6,"style":"BOLD","offset":45}]},{"data":{},"depth":0,"entityRanges":[],"text":"6. Click Save.","key":"a87uu","inlineStyleRanges":[{"style":"BOLD","length":4,"offset":9}],"type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"key":6,"length":1}],"text":" ","key":"ajmni","data":{}},{"type":"unstyled","entityRanges":[],"data":{},"key":"30djb","depth":0,"inlineStyleRanges":[],"text":"Now, users can request access to apps and a notification will go to your global admins. Let’s look at how that would work."},{"key":"9q92m","depth":0,"type":"header-two","entityRanges":[],"inlineStyleRanges":[],"data":{},"text":"Require admin approval to allow an app access to Microsoft 365"},{"type":"unstyled","key":"8bg3u","depth":0,"entityRanges":[{"key":7,"offset":9,"length":32}],"data":{},"inlineStyleRanges":[],"text":"1. Go to https://www.zoho.com/signup.html "},{"text":"2. Click the Office button.","entityRanges":[],"data":{},"depth":0,"inlineStyleRanges":[],"key":"11n62","type":"unstyled"},{"inlineStyleRanges":[],"text":" ","entityRanges":[{"key":8,"offset":0,"length":1}],"key":"3l8oa","data":{},"depth":0,"type":"atomic"},{"depth":0,"data":{},"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"text":"3. Login with a regular user account.","key":"2s6n3"},{"key":"4ghk9","entityRanges":[],"text":"4. Enter a justification reason and click Request approval.","type":"unstyled","data":{},"depth":0,"inlineStyleRanges":[{"offset":42,"style":"BOLD","length":16}]},{"text":" ","key":"d00v3","depth":0,"type":"atomic","entityRanges":[{"key":9,"length":1,"offset":0}],"data":{},"inlineStyleRanges":[]},{"data":{},"depth":0,"entityRanges":[],"key":"8q7l8","inlineStyleRanges":[{"length":87,"style":"color-rgb(33,37,41)","offset":0},{"style":"bgcolor-rgb(255,255,255)","length":87,"offset":0},{"length":87,"offset":0,"style":"fontsize-16"},{"length":87,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"text":"At this point, the admins will receive an email saying they need to review the consent. ","type":"unstyled"},{"key":"9jfjb","data":{},"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":14}],"type":"unstyled","text":"1. Click Review request.","depth":0,"entityRanges":[]},{"depth":0,"type":"atomic","entityRanges":[{"key":10,"length":1,"offset":0}],"key":"4kuad","data":{},"text":" ","inlineStyleRanges":[]},{"inlineStyleRanges":[],"text":"2. Click the app that requests approval.","data":{},"key":"brheh","depth":0,"entityRanges":[],"type":"unstyled"},{"data":{},"type":"atomic","inlineStyleRanges":[],"entityRanges":[{"key":11,"length":1,"offset":0}],"key":"1mjua","text":" ","depth":0},{"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":30}],"text":"3. Click Review permissions and consent.","key":"ccjd0","type":"unstyled","entityRanges":[],"depth":0,"data":{}},{"entityRanges":[{"length":1,"offset":0,"key":12}],"depth":0,"data":{},"text":" ","type":"atomic","inlineStyleRanges":[],"key":"aq570"},{"data":{},"text":"4. Click Accept.","key":"2s505","type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":6,"offset":9}],"entityRanges":[]},{"key":"2ndvb","data":{},"text":" ","entityRanges":[{"length":1,"key":13,"offset":0}],"inlineStyleRanges":[],"depth":0,"type":"atomic"},{"key":"6vill","data":{},"depth":0,"text":"Once you click to accept the user will receive an email saying the access has been approved. Then the user can go back to the third-party app and gain access using their Microsoft 365 tenant account.","entityRanges":[],"inlineStyleRanges":[],"type":"unstyled"},{"inlineStyleRanges":[],"text":" ","data":{},"entityRanges":[{"key":14,"length":1,"offset":0}],"depth":0,"key":"5nl0n","type":"atomic"},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{},"type":"header-two","key":"cjccl","text":"Auto-approval"},{"key":"3oi9b","text":"Now you may be wondering how many requests you’ll receive. If you are in a smaller organization then chances are you won’t receive too many and you’ll be fine. If you’re in a larger organization, you may receive a lot of requests. That’s not good. You’ll be constantly approving apps even though they may not need many permissions. Let’s set up auto-approval for verified publishers that request a few permissions.","entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[],"depth":0},{"entityRanges":[{"length":23,"offset":59,"key":15}],"inlineStyleRanges":[{"style":"BOLD","length":21,"offset":9},{"length":23,"offset":33,"style":"BOLD"},{"style":"BOLD","length":24,"offset":59}],"key":"arl2s","text":"1. Go to Azure AD admin center > Enterprise applications > Consent and permissions .","depth":0,"data":{},"type":"unstyled"},{"depth":0,"text":"2. Click Allow user consent for apps from verified publishers, for selected permissions. Click Save","key":"7c8c5","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":78},{"offset":95,"length":4,"style":"BOLD"}],"entityRanges":[],"data":{}},{"depth":0,"data":{},"text":"3. Click Select permissions to classify as minimal impact.","inlineStyleRanges":[{"offset":9,"length":48,"style":"BOLD"}],"key":"3i9rt","entityRanges":[],"type":"unstyled"},{"key":"5s3ge","text":" ","entityRanges":[{"offset":0,"length":1,"key":16}],"data":{},"type":"atomic","depth":0,"inlineStyleRanges":[]},{"entityRanges":[],"key":"4m647","text":"4. Click the permissions you want to auto-approve. Click Yes, add selected permissions.","depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[{"length":29,"offset":57,"style":"BOLD"}]},{"key":"r0jr","inlineStyleRanges":[],"type":"atomic","depth":0,"data":{},"entityRanges":[{"offset":0,"key":17,"length":1}],"text":" "},{"key":"aae8f","depth":0,"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","data":{},"text":""}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"url":"https://techcommunity.microsoft.com/","targetOption":"_blank"},"type":"LINK"},"1":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"3rd party app consenting request","height":"auto","width":"auto","alignment":"none","src":"https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png"}},"2":{"mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps","targetOption":"_blank"},"type":"LINK"},"3":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","height":"auto","src":"https://i.ibb.co/6HwM4Zg/review-app-access.png","alignment":"none","alt":"Review app access"}},"4":{"data":{"alt":"Enterprise app permissions in Azure AD","alignment":"none","height":"auto","src":"https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"5":{"data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/UserSettings","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"6":{"mutability":"MUTABLE","data":{"alt":"Disable user consent and require an admin to approve","alignment":"none","height":"auto","width":"auto","src":"https://i.ibb.co/C2mp69m/disable-user-consent.png"},"type":"IMAGE"},"7":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://www.zoho.com/signup.html","targetOption":"_blank"}},"8":{"mutability":"MUTABLE","type":"IMAGE","data":{"src":"https://i.ibb.co/7RN0X5v/zoho-office-login.png","width":"auto","alt":"Zoho Office login","height":"auto","alignment":"none"}},"9":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","width":"auto","height":"auto","alt":"App requesting access to Microsoft 365","src":"https://i.ibb.co/BBN6L3x/request-app-access.png"}},"10":{"type":"IMAGE","data":{"width":"auto","height":"auto","src":"https://i.ibb.co/Q8dh29f/admin-review-email.png","alt":"Admins receiving notification user wants app access","alignment":"none"},"mutability":"MUTABLE"},"11":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","width":"auto","alignment":"left","alt":"Review app access requests","src":"https://i.ibb.co/DbBfrF4/review-app-access-requests.png"}},"12":{"data":{"alignment":"none","src":"https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png","alt":"Review 3rd party app access request","height":"auto","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"13":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alignment":"none","alt":"Approve access to third-party app","src":"https://i.ibb.co/rxSkbBQ/approve-access.png","height":"auto"}},"14":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/RSwm2wQ/approved-email.png","alignment":"none","alt":"third-party app approved","height":"auto"}},"15":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings","targetOption":"_blank"}},"16":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","height":"auto","alignment":"none","alt":"auto-approve apps with minimal impact","src":"https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png"}},"17":{"data":{"width":"auto","alignment":"none","height":"auto","alt":"Select permissions to auto-approve","src":"https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png"},"type":"IMAGE","mutability":"MUTABLE"}}},"sectionId":"AFV_acckJ","featuredImage":"https://i.ibb.co/C2mp69m/disable-user-consent.png","type":"article","publish":true,"description":"Did you know users may give malicious apps access to your Microsoft 365 tenant? Protect your organization from compromised enterprise apps.","slug":"Securing-and-implementing-enterprise-applications-2QfoI2HxY","images":["https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png","https://i.ibb.co/6HwM4Zg/review-app-access.png","https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png","https://i.ibb.co/C2mp69m/disable-user-consent.png","https://i.ibb.co/7RN0X5v/zoho-office-login.png","https://i.ibb.co/BBN6L3x/request-app-access.png","https://i.ibb.co/Q8dh29f/admin-review-email.png","https://i.ibb.co/DbBfrF4/review-app-access-requests.png","https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png","https://i.ibb.co/rxSkbBQ/approve-access.png","https://i.ibb.co/RSwm2wQ/approved-email.png","https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png","https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png"],"id":"2QfoI2HxY","datePublished":"2022/5/26"},
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
