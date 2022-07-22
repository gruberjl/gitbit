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
      path: '/course/ms-500/learn/Securing-and-implementing-enterprise-applications-2QfoI2HxY',
      article: {id: '2QfoI2HxY', type: 'article', publish: true, featuredImage: 'https://i.ibb.co/C2mp69m/disable-user-consent.png', sectionId: 'AFV_acckJ', datePublished: '2022/5/26', images: ['https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png', 'https://i.ibb.co/6HwM4Zg/review-app-access.png', 'https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png', 'https://i.ibb.co/C2mp69m/disable-user-consent.png', 'https://i.ibb.co/7RN0X5v/zoho-office-login.png', 'https://i.ibb.co/BBN6L3x/request-app-access.png', 'https://i.ibb.co/Q8dh29f/admin-review-email.png', 'https://i.ibb.co/DbBfrF4/review-app-access-requests.png', 'https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png', 'https://i.ibb.co/rxSkbBQ/approve-access.png', 'https://i.ibb.co/RSwm2wQ/approved-email.png', 'https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png', 'https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png'], slug: 'Securing-and-implementing-enterprise-applications-2QfoI2HxY', description: 'Did you know users may give malicious apps access to your Microsoft 365 tenant? Protect your organization from compromised enterprise apps.', article: {blocks: [{inlineStyleRanges: [], entityRanges: [], type: 'unstyled', text: 'Did you know your users can grant third-party apps consent to your Microsoft 365 tenant? By default, all users can grant third-party apps access to your company data that they have access to. Enterprise applications are a fantastic way for you and your users to extend your Microsoft 365 tenant to third-party apps, but they can leave your company vulnerable. First, let\'s jump in and consent to a third-party app the way a user would.', data: {}, depth: 0, key: '2l5rs'}, {inlineStyleRanges: [], type: 'header-two', depth: 0, entityRanges: [], data: {}, key: '320bq', text: 'Granting third-party app access to your Microsoft 365 tenant'}, {entityRanges: [{key: 0, length: 36, offset: 9}], key: 'aobbf', depth: 0, data: {}, type: 'unstyled', text: '1. Go to https://techcommunity.microsoft.com/ ', inlineStyleRanges: []}, {type: 'unstyled', entityRanges: [], data: {}, key: 'a7tql', text: '2. Click Sign in found in the top right corner.', depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 7, offset: 9}]}, {inlineStyleRanges: [], text: '3. Sign in using your Microsoft 365 credentials.', depth: 0, key: '2mu87', data: {}, entityRanges: [], type: 'unstyled'}, {depth: 0, text: '4. Next, you’ll see the permissions requested page. From here you see the permissions the app would like to access in your Microsoft 365 user account.', data: {}, inlineStyleRanges: [], entityRanges: [], key: 'fvlr0', type: 'unstyled'}, {key: '9j6no', entityRanges: [], text: 'If you’re an admin you’ll also see a Consent on behalf of your organization.', type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [{style: 'BOLD', length: 38, offset: 37}]}, {entityRanges: [], text: '5. Click Accept.', inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 6}], depth: 0, key: '3vqng', data: {}, type: 'unstyled'}, {type: 'atomic', text: ' ', data: {}, inlineStyleRanges: [], key: '2vkkp', entityRanges: [{length: 1, offset: 0, key: 1}], depth: 0}, {depth: 0, inlineStyleRanges: [], entityRanges: [], key: '28jvi', data: {}, type: 'unstyled', text: 'That’s it. Now Microsoft’s Tech Community can sign in as your user and read your user’s profile. Now, Microsoft’s Tech community is run by Microsoft so it’s a safe app to grant access to your tenant but what about other apps?'}, {entityRanges: [], key: 'm19n', text: 'A malicious individual could trick your users into granting apps access to your tenant that they shouldn’t have. So, we’ll need to manage and restrict what apps users can grant access to. Before we lock down the access let’s look at the apps that already have access to your tenant.', inlineStyleRanges: [], data: {}, type: 'unstyled', depth: 0}, {data: {}, depth: 0, entityRanges: [], key: '5o2qi', inlineStyleRanges: [], type: 'header-two', text: 'How to view third party app access to your Microsoft 365 tenant'}, {type: 'unstyled', entityRanges: [{key: 2, length: 23, offset: 33}], inlineStyleRanges: [{style: 'BOLD', length: 21, offset: 9}, {style: 'BOLD', length: 23, offset: 33}], depth: 0, key: '76jvd', text: '1. Go to Azure AD admin center > Enterprise applications. ', data: {}}, {entityRanges: [], key: 'ca8s2', depth: 0, text: '2. Find and click the Microsoft Tech Community app.', type: 'unstyled', inlineStyleRanges: [{length: 24, style: 'BOLD', offset: 22}], data: {}}, {text: ' ', inlineStyleRanges: [], depth: 0, key: 'd18g9', type: 'atomic', entityRanges: [{length: 1, key: 3, offset: 0}], data: {}}, {entityRanges: [], inlineStyleRanges: [{offset: 15, style: 'BOLD', length: 16}], data: {}, type: 'unstyled', key: 'dpoen', text: '3. By clicking Users and groups you can review who has given permissions to the app.', depth: 0}, {text: '4. By clicking Permissions > User consent you can review what permissions have been given to the app.', inlineStyleRanges: [{length: 12, offset: 15, style: 'BOLD'}, {offset: 29, style: 'BOLD', length: 12}], depth: 0, type: 'unstyled', key: '6tslr', entityRanges: [], data: {}}, {text: ' ', type: 'atomic', key: 'crl96', data: {}, entityRanges: [{key: 4, length: 1, offset: 0}], depth: 0, inlineStyleRanges: []}, {key: '6ht9m', depth: 0, type: 'header-two', entityRanges: [], inlineStyleRanges: [], data: {}, text: 'Block users from granting access to any apps'}, {entityRanges: [], key: '9j24l', text: 'The best way to protect your tenant is to require admins to approve any third-party applications before a user can consent. That way users can\'t grant malicious apps access to your Microsoft 365 data or tenant.', data: {}, depth: 0, inlineStyleRanges: [], type: 'unstyled'}, {text: '1. Go to Azure AD admin center > Enterprise applications > User settings. ', data: {}, inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}, {length: 23, offset: 33, style: 'BOLD'}, {style: 'BOLD', offset: 59, length: 13}], depth: 0, type: 'unstyled', entityRanges: [{length: 13, offset: 59, key: 5}], key: '1q7ej'}, {key: '2spc6', data: {}, text: '2. Click No in Users can consent to apps accessing company data on their behalf.', depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 3, offset: 9}], entityRanges: [], type: 'unstyled'}, {text: '3. Click No in Users can consent to apps accessing company data for the groups they own.', type: 'unstyled', inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}], entityRanges: [], key: '172rc', depth: 0, data: {}}, {data: {}, type: 'unstyled', depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 4, offset: 9}], text: '4. Click Yes next to Users can request admin consent to apps they are unable to consent to.', entityRanges: [], key: 'c8t2t'}, {type: 'unstyled', key: '3j1e7', depth: 0, data: {}, inlineStyleRanges: [{length: 9, style: 'BOLD', offset: 9}, {offset: 31, style: 'BOLD', length: 6}, {length: 6, offset: 45, style: 'BOLD'}], entityRanges: [], text: '5. Click Add roles. Search for global. Click Select.'}, {key: 'a87uu', type: 'unstyled', entityRanges: [], inlineStyleRanges: [{offset: 9, length: 4, style: 'BOLD'}], depth: 0, data: {}, text: '6. Click Save.'}, {depth: 0, type: 'atomic', entityRanges: [{offset: 0, key: 6, length: 1}], text: ' ', key: 'ajmni', data: {}, inlineStyleRanges: []}, {text: 'Now, users can request access to apps and a notification will go to your global admins. Let’s look at how that would work.', key: '30djb', depth: 0, type: 'unstyled', entityRanges: [], data: {}, inlineStyleRanges: []}, {type: 'header-two', text: 'Require admin approval to allow an app access to Microsoft 365', inlineStyleRanges: [], depth: 0, data: {}, key: '9q92m', entityRanges: []}, {text: '1. Go to https://www.zoho.com/signup.html ', entityRanges: [{length: 32, offset: 9, key: 7}], key: '8bg3u', inlineStyleRanges: [], depth: 0, data: {}, type: 'unstyled'}, {entityRanges: [], key: '11n62', data: {}, depth: 0, inlineStyleRanges: [], text: '2. Click the Office button.', type: 'unstyled'}, {text: ' ', depth: 0, inlineStyleRanges: [], type: 'atomic', data: {}, entityRanges: [{key: 8, length: 1, offset: 0}], key: '3l8oa'}, {data: {}, type: 'unstyled', entityRanges: [], text: '3. Login with a regular user account.', key: '2s6n3', depth: 0, inlineStyleRanges: []}, {depth: 0, inlineStyleRanges: [{length: 16, offset: 42, style: 'BOLD'}], data: {}, text: '4. Enter a justification reason and click Request approval.', entityRanges: [], key: '4ghk9', type: 'unstyled'}, {data: {}, entityRanges: [{length: 1, key: 9, offset: 0}], key: 'd00v3', text: ' ', depth: 0, inlineStyleRanges: [], type: 'atomic'}, {text: 'At this point, the admins will receive an email saying they need to review the consent. ', key: '8q7l8', inlineStyleRanges: [{length: 87, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 87, style: 'bgcolor-rgb(255,255,255)', offset: 0}, {length: 87, offset: 0, style: 'fontsize-16'}, {offset: 0, length: 87, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], entityRanges: [], type: 'unstyled', depth: 0, data: {}}, {depth: 0, type: 'unstyled', inlineStyleRanges: [{length: 14, style: 'BOLD', offset: 9}], text: '1. Click Review request.', data: {}, key: '9jfjb', entityRanges: []}, {type: 'atomic', entityRanges: [{length: 1, key: 10, offset: 0}], key: '4kuad', data: {}, inlineStyleRanges: [], text: ' ', depth: 0}, {depth: 0, text: '2. Click the app that requests approval.', data: {}, entityRanges: [], type: 'unstyled', inlineStyleRanges: [], key: 'brheh'}, {data: {}, key: '1mjua', inlineStyleRanges: [], depth: 0, text: ' ', type: 'atomic', entityRanges: [{key: 11, length: 1, offset: 0}]}, {data: {}, inlineStyleRanges: [{length: 30, offset: 9, style: 'BOLD'}], depth: 0, type: 'unstyled', key: 'ccjd0', text: '3. Click Review permissions and consent.', entityRanges: []}, {data: {}, entityRanges: [{key: 12, length: 1, offset: 0}], key: 'aq570', depth: 0, text: ' ', inlineStyleRanges: [], type: 'atomic'}, {depth: 0, type: 'unstyled', entityRanges: [], data: {}, key: '2s505', inlineStyleRanges: [{style: 'BOLD', length: 6, offset: 9}], text: '4. Click Accept.'}, {type: 'atomic', entityRanges: [{key: 13, length: 1, offset: 0}], key: '2ndvb', data: {}, depth: 0, text: ' ', inlineStyleRanges: []}, {entityRanges: [], key: '6vill', data: {}, inlineStyleRanges: [], text: 'Once you click to accept the user will receive an email saying the access has been approved. Then the user can go back to the third-party app and gain access using their Microsoft 365 tenant account.', depth: 0, type: 'unstyled'}, {entityRanges: [{length: 1, offset: 0, key: 14}], type: 'atomic', key: '5nl0n', inlineStyleRanges: [], depth: 0, data: {}, text: ' '}, {inlineStyleRanges: [], entityRanges: [], key: 'cjccl', data: {}, text: 'Auto-approval', type: 'header-two', depth: 0}, {depth: 0, entityRanges: [], key: '3oi9b', data: {}, text: 'Now you may be wondering how many requests you’ll receive. If you are in a smaller organization then chances are you won’t receive too many and you’ll be fine. If you’re in a larger organization, you may receive a lot of requests. That’s not good. You’ll be constantly approving apps even though they may not need many permissions. Let’s set up auto-approval for verified publishers that request a few permissions.', type: 'unstyled', inlineStyleRanges: []}, {inlineStyleRanges: [{length: 21, style: 'BOLD', offset: 9}, {offset: 33, length: 23, style: 'BOLD'}, {style: 'BOLD', length: 24, offset: 59}], key: 'arl2s', type: 'unstyled', data: {}, depth: 0, entityRanges: [{length: 23, key: 15, offset: 59}], text: '1. Go to Azure AD admin center > Enterprise applications > Consent and permissions .'}, {data: {}, inlineStyleRanges: [{style: 'BOLD', length: 78, offset: 9}, {length: 4, offset: 95, style: 'BOLD'}], entityRanges: [], text: '2. Click Allow user consent for apps from verified publishers, for selected permissions. Click Save', key: '7c8c5', depth: 0, type: 'unstyled'}, {data: {}, text: '3. Click Select permissions to classify as minimal impact.', inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 48}], type: 'unstyled', key: '3i9rt', entityRanges: [], depth: 0}, {inlineStyleRanges: [], entityRanges: [{length: 1, offset: 0, key: 16}], type: 'atomic', depth: 0, data: {}, key: '5s3ge', text: ' '}, {type: 'unstyled', entityRanges: [], key: '4m647', text: '4. Click the permissions you want to auto-approve. Click Yes, add selected permissions.', depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 29, offset: 57}], data: {}}, {entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], text: ' ', depth: 0, key: 'r0jr', type: 'atomic', data: {}}, {inlineStyleRanges: [], entityRanges: [], data: {}, type: 'unstyled', text: '', key: 'aae8f', depth: 0}], entityMap: {0: {type: 'LINK', data: {url: 'https://techcommunity.microsoft.com/', targetOption: '_blank'}, mutability: 'MUTABLE'}, 1: {data: {alt: '3rd party app consenting request', src: 'https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png', alignment: 'none', height: 'auto', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 2: {type: 'LINK', data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps'}, mutability: 'MUTABLE'}, 3: {data: {alt: 'Review app access', alignment: 'none', src: 'https://i.ibb.co/6HwM4Zg/review-app-access.png', height: 'auto', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 4: {data: {height: 'auto', alt: 'Enterprise app permissions in Azure AD', src: 'https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png', alignment: 'none', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 5: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/UserSettings', targetOption: '_blank'}}, 6: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/C2mp69m/disable-user-consent.png', height: 'auto', alignment: 'none', width: 'auto', alt: 'Disable user consent and require an admin to approve'}}, 7: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://www.zoho.com/signup.html'}}, 8: {data: {width: 'auto', src: 'https://i.ibb.co/7RN0X5v/zoho-office-login.png', height: 'auto', alignment: 'none', alt: 'Zoho Office login'}, type: 'IMAGE', mutability: 'MUTABLE'}, 9: {type: 'IMAGE', mutability: 'MUTABLE', data: {alt: 'App requesting access to Microsoft 365', src: 'https://i.ibb.co/BBN6L3x/request-app-access.png', height: 'auto', alignment: 'none', width: 'auto'}}, 10: {type: 'IMAGE', data: {width: 'auto', src: 'https://i.ibb.co/Q8dh29f/admin-review-email.png', height: 'auto', alignment: 'none', alt: 'Admins receiving notification user wants app access'}, mutability: 'MUTABLE'}, 11: {data: {height: 'auto', alignment: 'left', alt: 'Review app access requests', width: 'auto', src: 'https://i.ibb.co/DbBfrF4/review-app-access-requests.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {height: 'auto', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/wQqYW6B/review-permissions-and-consent.png', alt: 'Review 3rd party app access request'}, type: 'IMAGE', mutability: 'MUTABLE'}, 13: {mutability: 'MUTABLE', data: {src: 'https://i.ibb.co/rxSkbBQ/approve-access.png', height: 'auto', alt: 'Approve access to third-party app', alignment: 'none', width: 'auto'}, type: 'IMAGE'}, 14: {data: {width: 'auto', alignment: 'none', height: 'auto', alt: 'third-party app approved', src: 'https://i.ibb.co/RSwm2wQ/approved-email.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {mutability: 'MUTABLE', type: 'LINK', data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings', targetOption: '_blank'}}, 16: {data: {alt: 'auto-approve apps with minimal impact', height: 'auto', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {height: 'auto', width: 'auto', alt: 'Select permissions to auto-approve', alignment: 'none', src: 'https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, title: 'Securing and implementing enterprise applications'},
      nextContentSlug: 'Whats-a-conditional-access-policy-V1en9Iugh',
      previousContentSlug: 'Creating-and-managing-users-through-groups-S1hQgFOMV',
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
                <div><p>Did you know your users can grant third-party apps consent to your Microsoft 365 tenant? By default, all users can grant third-party apps access to your company data that they have access to. Enterprise applications are a fantastic way for you and your users to extend your Microsoft 365 tenant to third-party apps, but they can leave your company vulnerable. First, let's jump in and consent to a third-party app the way a user would.</p>
                  <h2>Granting third-party app access to your Microsoft 365 tenant</h2>
                  <p>1. Go to <a href="https://techcommunity.microsoft.com/" target="_blank" rel="noreferrer">https://techcommunity.microsoft.com/</a>&nbsp;</p>
                  <p>2. Click <strong>Sign in</strong> found in the top right corner.</p>
                  <p>3. Sign in using your Microsoft 365 credentials.</p>
                  <p>4. Next, you’ll see the permissions requested page. From here you see the permissions the app would like to access in your Microsoft 365 user account.</p>
                  <p>If you’re an admin you’ll also see a <strong>Consent on behalf of your organization</strong>.</p>
                  <p>5. Click <strong>Accept</strong>.</p>
                  <div ><img src="https://i.ibb.co/6wc4hND/3rd-party-app-consent-request.png" alt="3rd party app consenting request" style="height: auto;width: auto" /></div>
                  <p>That’s it. Now Microsoft’s Tech Community can sign in as your user and read your user’s profile. Now, Microsoft’s Tech community is run by Microsoft so it’s a safe app to grant access to your tenant but what about other apps?</p>
                  <p>A malicious individual could trick your users into granting apps access to your tenant that they shouldn’t have. So, we’ll need to manage and restrict what apps users can grant access to. Before we lock down the access let’s look at the apps that already have access to your tenant.</p>
                  <h2>How to view third party app access to your Microsoft 365 tenant</h2>
                  <p>1. Go to <strong>Azure AD admin center</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps" target="_blank" rel="noreferrer"><strong>Enterprise applications</strong></a>.&nbsp;</p>
                  <p>2. Find and click the <strong>Microsoft Tech Community</strong> app.</p>
                  <div ><img src="https://i.ibb.co/6HwM4Zg/review-app-access.png" alt="Review app access" style="height: auto;width: auto" /></div>
                  <p>3. By clicking <strong>Users and groups</strong> you can review who has given permissions to the app.</p>
                  <p>4. By clicking <strong>Permissions </strong>&gt; <strong>User consent</strong> you can review what permissions have been given to the app.</p>
                  <div ><img src="https://i.ibb.co/3fVnBjt/enterprise-app-permissions.png" alt="Enterprise app permissions in Azure AD" style="height: auto;width: auto" /></div>
                  <h2>Block users from granting access to any apps</h2>
                  <p>The best way to protect your tenant is to require admins to approve any third-party applications before a user can consent. That way users can't grant malicious apps access to your Microsoft 365 data or tenant.</p>
                  <p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Enterprise applications</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/UserSettings" target="_blank" rel="noreferrer"><strong>User settings</strong></a>.&nbsp;</p>
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
                  <p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Enterprise applications</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/UserSettings" target="_blank" rel="noreferrer"><strong>Consent and permissions</strong></a><strong> </strong>.</p>
                  <p>2. Click <strong>Allow user consent for apps from verified publishers, for selected permissions</strong>. Click <strong>Save</strong></p>
                  <p>3. Click <strong>Select permissions to classify as minimal impact</strong>.</p>
                  <div ><img src="https://i.ibb.co/vsv7Cyn/allow-user-consent-for-apps.png" alt="auto-approve apps with minimal impact" style="height: auto;width: auto" /></div>
                  <p>4. Click the permissions you want to auto-approve. Click <strong>Yes, add selected permissions</strong>.</p>
                  <div ><img src="https://i.ibb.co/16wXQjb/add-most-used-auto-approved-permissions.png" alt="Select permissions to auto-approve" style="height: auto;width: auto" /></div>
                  <p />
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
