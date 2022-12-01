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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2l5rs', text: 'Did you know your users can grant third-party apps consent to your Microsoft 365 tenant? By default, all users can grant third-party apps access to your company data that they have access to. Enterprise applications are a fantastic way for you and your users to extend your Microsoft 365 tenant to third-party apps, but they can leave your company vulnerable. First, let\'s jump in and consent to a third-party app the way a user would.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '320bq', text: 'Granting third-party app access to your Microsoft 365 tenant', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 36, offset: 9}], inlineStyleRanges: [], key: 'aobbf', text: '1. Go to https://techcommunity.microsoft.com/ ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 9, style: 'BOLD'}], key: 'a7tql', text: '2. Click Sign in found in the top right corner.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2mu87', text: '3. Sign in using your Microsoft 365 credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fvlr0', text: '4. Next, you’ll see the permissions requested page. From here you see the permissions the app would like to access in your Microsoft 365 user account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 38, offset: 37, style: 'BOLD'}], key: '9j6no', text: 'If you’re an admin you’ll also see a Consent on behalf of your organization.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}], key: '3vqng', text: '5. Click Accept.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '2vkkp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '28jvi', text: 'That’s it. Now Microsoft’s Tech Community can sign in as your user and read your user’s profile. Now, Microsoft’s Tech community is run by Microsoft so it’s a safe app to grant access to your tenant but what about other apps?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'm19n', text: 'A malicious individual could trick your users into granting apps access to your tenant that they shouldn’t have. So, we’ll need to manage and restrict what apps users can grant access to. Before we lock down the access let’s look at the apps that already have access to your tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5o2qi', text: 'How to view third-party app access to your Microsoft 365 tenant', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 23, offset: 33}], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}, {length: 23, offset: 33, style: 'BOLD'}], key: '76jvd', text: '1. Go to Azure AD admin center > Enterprise applications.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 22, style: 'BOLD'}], key: 'ca8s2', text: '2. Find and click the Microsoft Tech Community app.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'd18g9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 16, offset: 15, style: 'BOLD'}], key: 'dpoen', text: '3. By clicking Users and groups you can review who has given permissions to the app.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 15, style: 'BOLD'}, {length: 12, offset: 29, style: 'BOLD'}], key: '6tslr', text: '4. By clicking Permissions > User consent you can review what permissions have been given to the app.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'crl96', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ht9m', text: 'Block users from granting access to any apps', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9j24l', text: 'The best way to protect your tenant is to require admins to approve any third-party applications before a user can consent. That way users can\'t grant malicious apps access to your Microsoft 365 data or tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 23, offset: 59}], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}, {length: 23, offset: 33, style: 'BOLD'}], key: '1q7ej', text: '1. Go to Azure AD admin center > Enterprise applications > Consent and permissions. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}], key: '2spc6', text: '2. Click No in Users can consent to apps accessing company data on their behalf.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}], key: '172rc', text: '3. Click No in Users can consent to apps accessing company data for the groups they own.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}], key: 'c8t2t', text: '4. Click Yes next to Users can request admin consent to apps they are unable to consent to.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}, {length: 6, offset: 31, style: 'BOLD'}, {length: 6, offset: 45, style: 'BOLD'}], key: '3j1e7', text: '5. Click Add roles. Search for global. Click Select.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}], key: 'a87uu', text: '6. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ajmni', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '30djb', text: 'Now, users can request access to apps and a notification will go to your global admins. Let’s look at how that would work.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9q92m', text: 'Require admin approval to allow an app access to Microsoft 365', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 32, offset: 9}], inlineStyleRanges: [], key: '8bg3u', text: '1. Go to https://www.zoho.com/signup.html ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '11n62', text: '2. Click the Office button.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '3l8oa', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2s6n3', text: '3. Login with a regular user account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 16, offset: 42, style: 'BOLD'}], key: '4ghk9', text: '4. Enter a justification reason and click Request approval.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: 'd00v3', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 87, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 87, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 87, offset: 0, style: 'fontsize-16'}, {length: 87, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '8q7l8', text: 'At this point, the admins will receive an email saying they need to review the consent. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}], key: '9jfjb', text: '1. Click Review request.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '4kuad', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'brheh', text: '2. Click the app that requests approval.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: '1mjua', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 30, offset: 9, style: 'BOLD'}], key: 'ccjd0', text: '3. Click Review permissions and consent.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: 'aq570', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}], key: '2s505', text: '4. Click Accept.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '2ndvb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6vill', text: 'Once you click to accept the user will receive an email saying the access has been approved. Then the user can go back to the third-party app and gain access using their Microsoft 365 tenant account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '5nl0n', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cjccl', text: 'Auto-approval', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3oi9b', text: 'Now you may be wondering how many requests you’ll receive. If you are in a smaller organization then chances are you won’t receive too many and you’ll be fine. If you’re in a larger organization, you may receive a lot of requests. That’s not good. You’ll be constantly approving apps even though they may not need many permissions. Let’s set up auto-approval for verified publishers that request a few permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 23, offset: 59}], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}, {length: 23, offset: 33, style: 'BOLD'}, {length: 23, offset: 59, style: 'BOLD'}], key: 'arl2s', text: '1. Go to Azure AD admin center > Enterprise applications > Consent and permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 78, offset: 9, style: 'BOLD'}, {length: 4, offset: 95, style: 'BOLD'}], key: '7c8c5', text: '2. Click Allow user consent for apps from verified publishers, for selected permissions. Click Save', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 48, offset: 9, style: 'BOLD'}], key: '3i9rt', text: '3. Click Select permissions to classify as minimal impact.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '5s3ge', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 29, offset: 57, style: 'BOLD'}], key: '4m647', text: '4. Click the permissions you want to auto-approve. Click Yes, add selected permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: 'r0jr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aae8f', text: '', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://techcommunity.microsoft.com/'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: '3rd party app consenting request', height: 'auto', src: 'https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Admins receiving notification user wants app access', height: 'auto', src: 'https://i.ibb.co/Q8dh29f/admin-review-email.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'left', alt: 'Review app access requests', height: 'auto', src: 'https://i.ibb.co/DbBfrF4/review-app-access-requests.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Review 3rd party app access request', height: 'auto', src: 'https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Approve access to third-party app', height: 'auto', src: 'https://i.ibb.co/rxSkbBQ/approve-access.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'third-party app approved', height: 'auto', src: 'https://i.ibb.co/RSwm2wQ/approved-email.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'auto-approve apps with minimal impact', height: 'auto', src: 'https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 16: {data: {alignment: 'none', alt: 'auto-approve apps with minimal impact', height: 'auto', src: 'https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Select permissions to auto-approve', height: 'auto', src: 'https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps'}, mutability: 'MUTABLE', type: 'LINK'}, 3: {data: {alignment: 'none', alt: 'Review app access', height: 'auto', src: 'https://i.ibb.co/6HwM4Zg/review-app-access.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Enterprise app permissions in Azure AD', height: 'auto', src: 'https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Disable user consent and require an admin to approve', height: 'auto', src: 'https://i.ibb.co/C2mp69m/disable-user-consent.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 6: {data: {alignment: 'none', alt: 'Disable user consent and require an admin to approve', height: 'auto', src: 'https://i.ibb.co/C2mp69m/disable-user-consent.png', targetOption: '_blank', url: 'https://www.zoho.com/signup.html', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Zoho Office login', height: 'auto', src: 'https://i.ibb.co/7RN0X5v/zoho-office-login.png', targetOption: '_blank', url: 'https://www.zoho.com/signup.html', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 8: {data: {alignment: 'none', alt: 'Zoho Office login', height: 'auto', src: 'https://i.ibb.co/7RN0X5v/zoho-office-login.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'App requesting access to Microsoft 365', height: 'auto', src: 'https://i.ibb.co/BBN6L3x/request-app-access.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Did you know users may give malicious apps access to your Microsoft 365 tenant? Protect your organization from compromised enterprise apps.', featuredImage: 'https://i.ibb.co/C2mp69m/disable-user-consent.png', id: '2QfoI2HxY', images: ['https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png', 'https://i.ibb.co/6HwM4Zg/review-app-access.png', 'https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png', 'https://i.ibb.co/C2mp69m/disable-user-consent.png', 'https://i.ibb.co/7RN0X5v/zoho-office-login.png', 'https://i.ibb.co/BBN6L3x/request-app-access.png', 'https://i.ibb.co/Q8dh29f/admin-review-email.png', 'https://i.ibb.co/DbBfrF4/review-app-access-requests.png', 'https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png', 'https://i.ibb.co/rxSkbBQ/approve-access.png', 'https://i.ibb.co/RSwm2wQ/approved-email.png', 'https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png', 'https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Securing-and-implementing-enterprise-applications-2QfoI2HxY', title: 'Securing and implementing enterprise applications', type: 'article'},
      nextContentSlug: 'learn/Whats-a-conditional-access-policy-V1en9Iugh',
      previousContentSlug: 'test/time-limited-admins-protecting-passwords-and-managing-users-groups-zhv828aiu',
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
                  <div><p>Did you know your users can grant third-party apps consent to your Microsoft 365 tenant? By default, all users can grant third-party apps access to your company data that they have access to. Enterprise applications are a fantastic way for you and your users to extend your Microsoft 365 tenant to third-party apps, but they can leave your company vulnerable. First, let's jump in and consent to a third-party app the way a user would.</p>
                    <div id="ld-7740-2760" /><h2>Granting third-party app access to your Microsoft 365 tenant</h2>
                    <p>1. Go to <a href="https://techcommunity.microsoft.com/" target="_blank" rel="noreferrer">https://techcommunity.microsoft.com/</a>&nbsp;</p>
                    <p>2. Click <strong>Sign in</strong> found in the top right corner.</p>
                    <p>3. Sign in using your Microsoft 365 credentials.</p>
                    <p>4. Next, you’ll see the permissions requested page. From here you see the permissions the app would like to access in your Microsoft 365 user account.</p>
                    <p>If you’re an admin you’ll also see a <strong>Consent on behalf of your organization</strong>.</p>
                    <p>5. Click <strong>Accept</strong>.</p>
                    <div ><img src="https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png" alt="3rd party app consenting request" style="height: auto;width: auto" /></div>
                    <p>That’s it. Now Microsoft’s Tech Community can sign in as your user and read your user’s profile. Now, Microsoft’s Tech community is run by Microsoft so it’s a safe app to grant access to your tenant but what about other apps?</p>
                    <p>A malicious individual could trick your users into granting apps access to your tenant that they shouldn’t have. So, we’ll need to manage and restrict what apps users can grant access to. Before we lock down the access let’s look at the apps that already have access to your tenant.</p>
                    <h2>How to view third-party app access to your Microsoft 365 tenant</h2>
                    <p>1. Go to <strong>Azure AD admin center</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps" target="_blank" rel="noreferrer"><strong>Enterprise applications</strong></a>.</p>
                    <p>2. Find and click the <strong>Microsoft Tech Community</strong> app.</p>
                    <div ><img src="https://i.ibb.co/6HwM4Zg/review-app-access.png" alt="Review app access" style="height: auto;width: auto" /></div>
                    <p>3. By clicking <strong>Users and groups</strong> you can review who has given permissions to the app.</p>
                    <p>4. By clicking <strong>Permissions </strong>&gt; <strong>User consent</strong> you can review what permissions have been given to the app.</p>
                    <div ><img src="https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png" alt="Enterprise app permissions in Azure AD" style="height: auto;width: auto" /></div>
                    <h2>Block users from granting access to any apps</h2>
                    <p>The best way to protect your tenant is to require admins to approve any third-party applications before a user can consent. That way users can't grant malicious apps access to your Microsoft 365 data or tenant.</p>
                    <p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Enterprise applications</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings" target="_blank" rel="noreferrer">Consent and permissions</a>.&nbsp;</p>
                    <p>2. Click <strong>No </strong>in Users can consent to apps accessing company data on their behalf.</p>
                    <p>3. Click <strong>No </strong>in Users can consent to apps accessing company data for the groups they own.</p>
                    <p>4. Click <strong>Yes </strong>next to Users can request admin consent to apps they are unable to consent to.</p>
                    <p>5. Click <strong>Add roles</strong>. Search for <strong>global</strong>. Click <strong>Select</strong>.</p>
                    <p>6. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/C2mp69m/disable-user-consent.png" alt="Disable user consent and require an admin to approve" style="height: auto;width: auto" /></div>
                    <p>Now, users can request access to apps and a notification will go to your global admins. Let’s look at how that would work.</p>
                    <h2>Require admin approval to allow an app access to Microsoft 365</h2>
                    <p>1. Go to <a href="https://www.zoho.com/signup.html" target="_blank" rel="noreferrer">https://www.zoho.com/signup.html</a>&nbsp;</p>
                    <p>2. Click the Office button.</p>
                    <div ><img src="https://i.ibb.co/7RN0X5v/zoho-office-login.png" alt="Zoho Office login" style="height: auto;width: auto" /></div>
                    <p>3. Login with a regular user account.</p>
                    <p>4. Enter a justification reason and click <strong>Request approval</strong>.</p>
                    <div ><img src="https://i.ibb.co/BBN6L3x/request-app-access.png" alt="App requesting access to Microsoft 365" style="height: auto;width: auto" /></div>
                    <p><span >At this point, the admins will receive an email saying they need to review the consent.</span>&nbsp;</p>
                    <p>1. Click <strong>Review request</strong>.</p>
                    <div ><img src="https://i.ibb.co/Q8dh29f/admin-review-email.png" alt="Admins receiving notification user wants app access" style="height: auto;width: auto" /></div>
                    <p>2. Click the app that requests approval.</p>
                    <div ><img src="https://i.ibb.co/DbBfrF4/review-app-access-requests.png" alt="Review app access requests" style="height: auto;width: auto" /></div>
                    <p>3. Click <strong>Review permissions and consent</strong>.</p>
                    <div ><img src="https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png" alt="Review 3rd party app access request" style="height: auto;width: auto" /></div>
                    <p>4. Click <strong>Accept</strong>.</p>
                    <div ><img src="https://i.ibb.co/rxSkbBQ/approve-access.png" alt="Approve access to third-party app" style="height: auto;width: auto" /></div>
                    <p>Once you click to accept the user will receive an email saying the access has been approved. Then the user can go back to the third-party app and gain access using their Microsoft 365 tenant account.</p>
                    <div ><img src="https://i.ibb.co/RSwm2wQ/approved-email.png" alt="third-party app approved" style="height: auto;width: auto" /></div>
                    <h2>Auto-approval</h2>
                    <p>Now you may be wondering how many requests you’ll receive. If you are in a smaller organization then chances are you won’t receive too many and you’ll be fine. If you’re in a larger organization, you may receive a lot of requests. That’s not good. You’ll be constantly approving apps even though they may not need many permissions. Let’s set up auto-approval for verified publishers that request a few permissions.</p>
                    <p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Enterprise applications</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings" target="_blank" rel="noreferrer"><strong>Consent and permissions</strong></a>.</p>
                    <p>2. Click <strong>Allow user consent for apps from verified publishers, for selected permissions</strong>. Click <strong>Save</strong></p>
                    <p>3. Click <strong>Select permissions to classify as minimal impact</strong>.</p>
                    <div ><img src="https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png" alt="auto-approve apps with minimal impact" style="height: auto;width: auto" /></div>
                    <p>4. Click the permissions you want to auto-approve. Click <strong>Yes, add selected permissions</strong>.</p>
                    <div ><img src="https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png" alt="Select permissions to auto-approve" style="height: auto;width: auto" /></div>
                    <p />
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
