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
      path: '/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2',
      article: {"article":{"blocks":[{"data":{},"text":"With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization's data from personal devices and can even invite guests to collaborate. With this free-flowing access, productivity receives a big boost but so do the challenges around security. How do we make sure there aren't stale user accounts that have access to your environment that is no longer in use? Let's take another example. Let's say you have a user on the IT help desk. He has limited administrative rights to your Microsoft 365 tenant just like he's supposed to. Then he gets a transfer/promotion. Now he's in marketing. How do you make sure his administrative access has been removed?","inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"8lvv","type":"unstyled"},{"data":{},"type":"unstyled","key":"2nl3v","inlineStyleRanges":[],"text":"The answer is simple, access review. With Azure AD access reviews you can review group memberships, access to applications, and role members. You can configure access reviews to happen regularly to make sure only the right people have access.","entityRanges":[],"depth":0},{"data":{},"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"key":"5aodq","text":"What licenses are required?","depth":0},{"inlineStyleRanges":[],"type":"unstyled","data":{},"text":"To use access review you'll need an Azure AD Premium P2 license or Enterprise Mobility + Security (EMS) E5 license.","key":"d9qv","entityRanges":[],"depth":0},{"entityRanges":[],"data":{},"type":"header-two","inlineStyleRanges":[],"depth":0,"key":"e6neb","text":"How to setup access review for groups"},{"depth":0,"type":"unstyled","key":"f51s4","inlineStyleRanges":[],"data":{},"entityRanges":[],"text":"Let's jump right into setting up access review for a group. Let's set up the group membership to be reviewed monthly. Let's have the group owners review the membership. Then let's have it automatically approve access if there is no response."},{"data":{},"key":"39r8","text":"1. Log into Azure Active Directory admin center > Azure Active Directory > Identity Governance > Access reviews > New access review.","entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":35,"offset":12},{"offset":50,"length":22,"style":"BOLD"},{"length":19,"offset":75,"style":"BOLD"},{"style":"BOLD","offset":97,"length":14},{"length":17,"style":"BOLD","offset":114}],"depth":0},{"data":{},"depth":0,"type":"atomic","key":"458nd","text":" ","entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[]},{"depth":0,"key":"cv3ou","data":{},"type":"unstyled","entityRanges":[],"text":"2. In Select what to review click Teams + Groups. In Review scope click Select Teams + groups. Click Select group(s). Select the group you want to review. Click Select. Click All users next to Scope. Click Next: Reviews.","inlineStyleRanges":[{"offset":34,"style":"BOLD","length":14},{"length":12,"style":"BOLD","offset":53},{"offset":72,"style":"BOLD","length":21},{"length":15,"offset":101,"style":"BOLD"},{"style":"BOLD","length":6,"offset":161},{"offset":175,"style":"BOLD","length":10},{"style":"BOLD","offset":206,"length":13}]},{"text":" ","depth":0,"inlineStyleRanges":[],"key":"ce4vk","entityRanges":[{"offset":0,"key":1,"length":1}],"data":{},"type":"atomic"},{"depth":0,"inlineStyleRanges":[{"offset":37,"style":"BOLD","length":14},{"style":"BOLD","length":1,"offset":83},{"style":"BOLD","offset":115,"length":7},{"style":"BOLD","offset":130,"length":14}],"key":"dj416","entityRanges":[],"type":"unstyled","text":"3. Set the Select reviewers field to Group owner(s). Set the duration (in days) to 7. Set the Review recurrence to Monthly. Click Next: Settings.","data":{}},{"data":{},"key":"5btkj","text":" ","depth":0,"type":"atomic","inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":2}]},{"key":"9s94l","depth":0,"entityRanges":[],"data":{},"type":"unstyled","text":"4. Check the Auto apply results to resource. Set If reviewers don't respond to No change. Click Next: Review + Create.","inlineStyleRanges":[{"length":30,"offset":13,"style":"BOLD"},{"style":"BOLD","offset":79,"length":9},{"length":21,"style":"BOLD","offset":96}]},{"entityRanges":[{"key":3,"length":1,"offset":0}],"inlineStyleRanges":[],"text":" ","type":"atomic","key":"ej4iu","depth":0,"data":{}},{"key":"7v6gj","data":{},"entityRanges":[],"text":"5. Give your access review a helpful name then click Create.","depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":53,"length":6}],"type":"unstyled"},{"key":"213d4","data":{},"depth":0,"entityRanges":[{"key":4,"offset":0,"length":1}],"text":" ","type":"atomic","inlineStyleRanges":[]},{"text":"That's it. Now the owners of the group will receive a notification asking them to review the group membership monthly. They'll have one week to respond and they can automatically remove users from the group.","key":"ckq66","data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"type":"header-two","text":"How to manage access review on groups","entityRanges":[],"key":"11f30","data":{}},{"type":"unstyled","inlineStyleRanges":[],"key":"drnl5","depth":0,"text":"Now that the access review is configured what will the reviewers see? How do they manage the group through the access review? Not to worry, I'll explain.","data":{},"entityRanges":[]},{"depth":0,"text":"1. The reviewers will receive the following email. Click Start review.","inlineStyleRanges":[{"offset":51,"style":"color-rgb(33,37,41)","length":19},{"offset":51,"length":19,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":19,"offset":51},{"length":19,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":51},{"offset":57,"style":"BOLD","length":12}],"type":"unstyled","key":"1pckv","data":{},"entityRanges":[]},{"key":"cphgj","entityRanges":[{"length":1,"key":5,"offset":0}],"text":" ","depth":0,"data":{},"inlineStyleRanges":[],"type":"atomic"},{"entityRanges":[],"key":"5snvj","data":{},"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":45,"offset":79},{"offset":79,"length":45,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","offset":79,"length":45},{"offset":79,"length":45,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"length":7,"offset":85,"style":"BOLD"},{"length":6,"style":"BOLD","offset":103},{"style":"BOLD","length":6,"offset":117}],"type":"unstyled","depth":0,"text":"2. Click the checkbox next to the users that are still approved for the group. Click Approve. Give the reason. Click submit."},{"depth":0,"text":" ","entityRanges":[{"key":6,"length":1,"offset":0}],"inlineStyleRanges":[],"data":{},"key":"5cdge","type":"atomic"},{"entityRanges":[],"text":"3. Click the checkbox next to the users that are no longer approved for the group. Click Deny. Give the reason. Click Submit.","depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":125,"offset":0},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":125},{"length":125,"style":"fontsize-16","offset":0},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":125},{"offset":89,"length":4,"style":"BOLD"},{"offset":104,"length":6,"style":"BOLD"},{"length":6,"offset":118,"style":"BOLD"}],"key":"b9p3p","data":{},"type":"unstyled"},{"depth":0,"entityRanges":[{"key":7,"length":1,"offset":0}],"text":" ","inlineStyleRanges":[],"data":{},"type":"atomic","key":"4lboo"},{"entityRanges":[],"depth":0,"type":"unstyled","text":"If a user is denied you may not see the change right away. They will be removed when the review period has ended or when an administrator stops the review.","key":"9kc00","data":{},"inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":35},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":35},{"offset":0,"style":"fontsize-32","length":35},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":35,"offset":0}],"type":"unstyled","data":{},"entityRanges":[],"key":"89d85","text":"How to setup access review on roles"},{"key":"aho96","type":"unstyled","data":{},"text":"Configuring a role for access review is a bit different. The options are still about the same but there located in different spots. This time, let's configure the admins to review their access. In short, we'll be removing admin roles from any user who doesn't respond. We'll also be configuring the review to happen every 7 days.","inlineStyleRanges":[{"length":329,"style":"color-rgb(33,37,41)","offset":0},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":329},{"offset":0,"length":329,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":329,"offset":0}],"entityRanges":[],"depth":0},{"type":"unstyled","inlineStyleRanges":[{"length":106,"offset":0,"style":"color-rgb(33,37,41)"},{"length":106,"style":"bgcolor-rgb(255,255,255)","offset":0},{"style":"fontsize-16","offset":0,"length":106},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":106,"offset":0},{"offset":13,"length":35,"style":"BOLD"},{"style":"BOLD","length":12,"offset":51},{"length":39,"offset":66,"style":"BOLD"}],"entityRanges":[],"text":"1. Log in to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.","data":{},"key":"4fd2p","depth":0},{"key":"d6pjo","depth":0,"text":" ","type":"atomic","entityRanges":[{"key":8,"length":1,"offset":0}],"data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[{"length":14,"offset":9,"style":"BOLD"},{"length":14,"style":"BOLD","offset":26},{"style":"BOLD","length":3,"offset":43}],"depth":0,"data":{},"key":"62euq","type":"unstyled","entityRanges":[],"text":"2. Click Azure AD roles > Access reviews > New."},{"type":"atomic","inlineStyleRanges":[],"key":"dq33m","entityRanges":[{"length":1,"key":9,"offset":0}],"text":" ","depth":0,"data":{}},{"entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":11},{"offset":20,"length":24,"style":"BOLD"},{"offset":55,"length":9,"style":"BOLD"},{"style":"BOLD","offset":68,"length":6},{"style":"BOLD","length":8,"offset":84},{"length":6,"style":"BOLD","offset":96},{"offset":112,"style":"BOLD","length":4},{"offset":119,"length":5,"style":"BOLD"},{"style":"BOLD","length":25,"offset":132},{"style":"BOLD","length":7,"offset":159},{"style":"BOLD","offset":170,"length":18},{"style":"BOLD","offset":196,"length":18},{"length":4,"style":"BOLD","offset":222}],"text":"3. Set the name to \"Review User Admin Rights\". Set the Frequency to Weekly. Set the duration to 3 days. Set the End to Never. Click Select privileged role(s). Search for User Administrator. Click User Administrator. Click Done.","type":"unstyled","depth":0,"key":"aknq3"},{"entityRanges":[{"key":10,"offset":0,"length":1}],"inlineStyleRanges":[],"text":" ","key":"329cl","depth":0,"data":{},"type":"atomic"},{"depth":0,"text":"4. Expand the Upon completion settings. Set Auto apply results to resource to Enable. Set If reviewers don't respond select Remove access.","key":"fcj70","entityRanges":[],"type":"unstyled","data":{},"inlineStyleRanges":[{"length":24,"offset":14,"style":"BOLD"},{"length":30,"style":"BOLD","offset":44},{"offset":78,"style":"BOLD","length":6},{"style":"BOLD","length":26,"offset":90},{"offset":124,"length":13,"style":"BOLD"}]},{"type":"unstyled","key":"27ess","text":"5. Expand Advanced settings. Set Require reason on approval to Disable.","entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":10,"length":17,"style":"BOLD"},{"offset":33,"style":"BOLD","length":26},{"length":7,"offset":63,"style":"BOLD"}],"data":{}},{"entityRanges":[],"key":"63tho","depth":0,"text":"6. Click Start.","data":{},"type":"unstyled","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":5}]},{"entityRanges":[{"offset":0,"length":1,"key":11}],"key":"6bbu1","data":{},"inlineStyleRanges":[],"type":"atomic","depth":0,"text":" "},{"key":"8uuek","type":"unstyled","data":{},"inlineStyleRanges":[{"length":36,"offset":0,"style":"color-rgb(33,37,41)"},{"length":36,"style":"bgcolor-rgb(255,255,255)","offset":0},{"length":36,"style":"fontsize-32","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":36,"offset":0}],"depth":0,"text":"How to manage access review on roles","entityRanges":[]},{"type":"unstyled","entityRanges":[],"depth":0,"text":"So now you're set up so admins have to approve their role access every 7 days. So what does that look like? Well, first they'll receive a similar email to the one above. Then they'll be directed to a site where they can approve their access.","data":{},"key":"1s0gv","inlineStyleRanges":[{"offset":0,"length":241,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":241,"offset":0},{"length":241,"offset":0,"style":"fontsize-16"},{"offset":0,"length":241,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}]},{"entityRanges":[{"length":1,"offset":0,"key":12}],"data":{},"type":"atomic","key":"48oe2","depth":0,"text":" ","inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"key":"8sulj","depth":0,"data":{},"type":"unstyled","text":""}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"alignment":"none","alt":"New access review","src":"https://i.ibb.co/Xsxvz6Z/new-access-review.png","height":"auto","width":"auto"},"type":"IMAGE"},"1":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alt":"Access Review set the review type","height":"auto","src":"https://i.ibb.co/vVKtWPh/access-review-review-type3.png","alignment":"none"}},"2":{"type":"IMAGE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/8z2hzWH/access-review-reviews.png","alignment":"none","alt":"Access review reviews"},"mutability":"MUTABLE"},"3":{"data":{"alt":"set the access review settings","height":"auto","src":"https://i.ibb.co/QXMkkv8/access-review-settings.png","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"4":{"mutability":"MUTABLE","data":{"height":"auto","alignment":"none","width":"auto","src":"https://i.ibb.co/2N1VQMQ/review-access-review-settings.png","alt":"Review access review settings"},"type":"IMAGE"},"5":{"data":{"alt":"Action required access review email","src":"https://i.ibb.co/qMnYy61/action-required-access-review-email.png","height":"auto","width":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"6":{"data":{"width":"auto","height":"auto","alt":"Approve users in access review","alignment":"none","src":"https://i.ibb.co/vX5Vxms/Approve-users.png"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"data":{"width":"auto","src":"https://i.ibb.co/qNpQSRW/deny-users.png","alignment":"none","height":"auto","alt":"Deny users group access using access review"},"type":"IMAGE","mutability":"MUTABLE"},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png","height":"auto","alt":"Access Azure AD Privileged Identity Management","alignment":"none"}},"9":{"data":{"height":"auto","alt":"Access review for roles","width":"auto","alignment":"none","src":"https://i.ibb.co/SfjV9P0/access-review-for-roles.png"},"mutability":"MUTABLE","type":"IMAGE"},"10":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","alt":"Setup access rights for admin roles","src":"https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","alignment":"none","height":"auto"}},"11":{"data":{"height":"auto","src":"https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","alignment":"none","alt":"upon completion settings in access review","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"12":{"data":{"width":"auto","alt":"Approve access review for role","alignment":"none","height":"auto","src":"https://i.ibb.co/ggTMpH5/Access-review-approve-role.png"},"mutability":"MUTABLE","type":"IMAGE"}}},"type":"article","images":["https://i.ibb.co/Xsxvz6Z/new-access-review.png","https://i.ibb.co/W32Y480/Access-Review-Type.png","https://i.ibb.co/8z2hzWH/access-review-reviews.png","https://i.ibb.co/vVKtWPh/access-review-review-type3.png","https://i.ibb.co/QXMkkv8/access-review-settings.png","https://i.ibb.co/2N1VQMQ/review-access-review-settings.png","https://i.ibb.co/qMnYy61/action-required-access-review-email.png","https://i.ibb.co/sJ6YLYJ/Approve-users.png","https://i.ibb.co/vX5Vxms/Approve-users.png","https://i.ibb.co/qNpQSRW/deny-users.png","https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png","https://i.ibb.co/SfjV9P0/access-review-for-roles.png","https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","https://i.ibb.co/ggTMpH5/Access-review-approve-role.png"],"datePublished":"2022/5/26","sectionId":"AFV_acckJ","id":"rK48f6iM2","title":"Automating Access Review in Microsoft 365","featuredImage":"https://i.ibb.co/Xsxvz6Z/new-access-review.png","slug":"Automating-Access-Review-in-Microsoft-365-rK48f6iM2","publish":true,"description":"With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization's data from personal devices and can even invite guests to collaborate."},
      nextContentSlug: 'Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s',
      previousContentSlug: 'Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ',
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
                <div><p>With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization's data from personal devices and can even invite guests to collaborate. With this free-flowing access, productivity receives a big boost but so do the challenges around security. How do we make sure there aren't stale user accounts that have access to your environment that is no longer in use? Let's take another example. Let's say you have a user on the IT help desk. He has limited administrative rights to your Microsoft 365 tenant just like he's supposed to. Then he gets a transfer/promotion. Now he's in marketing. How do you make sure his administrative access has been removed?</p>
<p>The answer is simple, access review. With Azure AD access reviews you can review group memberships, access to applications, and role members. You can configure access reviews to happen regularly to make sure only the right people have access.</p>
<h2>What licenses are required?</h2>
<p>To use access review you'll need an Azure AD Premium P2 license or Enterprise Mobility + Security (EMS) E5 license.</p>
<h2>How to setup access review for groups</h2>
<p>Let's jump right into setting up access review for a group. Let's set up the group membership to be reviewed monthly. Let's have the group owners review the membership. Then let's have it automatically approve access if there is no response.</p>
<p>1. Log into <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Identity Governance</strong> &gt; <strong>Access reviews</strong> &gt; <strong>New access review</strong>.</p>
<div ><img src="https://i.ibb.co/Xsxvz6Z/new-access-review.png" alt="New access review" style="height: auto;width: auto"/></div>
<p>2. In Select what to review click <strong>Teams + Groups</strong>. In <strong>Review scope</strong> click <strong>Select Teams + groups</strong>. Click <strong>Select group(s)</strong>. Select the group you want to review. Click <strong>Select</strong>. Click <strong>All users </strong>next to Scope. Click <strong>Next: Reviews</strong>.</p>
<div ><img src="https://i.ibb.co/vVKtWPh/access-review-review-type3.png" alt="Access Review set the review type" style="height: auto;width: auto"/></div>
<p>3. Set the Select reviewers field to <strong>Group owner(s)</strong>. Set the duration (in days) to <strong>7</strong>. Set the Review recurrence to <strong>Monthly</strong>. Click <strong>Next: Settings</strong>.</p>
<div ><img src="https://i.ibb.co/8z2hzWH/access-review-reviews.png" alt="Access review reviews" style="height: auto;width: auto"/></div>
<p>4. Check the <strong>Auto apply results to resource</strong>. Set If reviewers don't respond to <strong>No change</strong>. Click <strong>Next: Review + Create</strong>.</p>
<div ><img src="https://i.ibb.co/QXMkkv8/access-review-settings.png" alt="set the access review settings" style="height: auto;width: auto"/></div>
<p>5. Give your access review a helpful name then click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/2N1VQMQ/review-access-review-settings.png" alt="Review access review settings" style="height: auto;width: auto"/></div>
<p>That's it. Now the owners of the group will receive a notification asking them to review the group membership monthly. They'll have one week to respond and they can automatically remove users from the group.</p>
<h2>How to manage access review on groups</h2>
<p>Now that the access review is configured what will the reviewers see? How do they manage the group through the access review? Not to worry, I'll explain.</p>
<p>1. The reviewers will receive the following email. <span >Click <strong>Start review</strong>.</span></p>
<div ><img src="https://i.ibb.co/qMnYy61/action-required-access-review-email.png" alt="Action required access review email" style="height: auto;width: auto"/></div>
<p>2. Click the checkbox next to the users that are still approved for the group. <span >Click <strong>Approve</strong>. Give the <strong>reason</strong>. Click <strong>submit</strong>.</span></p>
<div ><img src="https://i.ibb.co/vX5Vxms/Approve-users.png" alt="Approve users in access review" style="height: auto;width: auto"/></div>
<p><span >3. Click the checkbox next to the users that are no longer approved for the group. Click <strong>Deny</strong>. Give the <strong>reason</strong>. Click <strong>Submit</strong>.</span></p>
<div ><img src="https://i.ibb.co/qNpQSRW/deny-users.png" alt="Deny users group access using access review" style="height: auto;width: auto"/></div>
<p>If a user is denied you may not see the change right away. They will be removed when the review period has ended or when an administrator stops the review.</p>
<p><span >How to setup access review on roles</span></p>
<p><span >Configuring a role for access review is a bit different. The options are still about the same but there located in different spots. This time, let's configure the admins to review their access. In short, we'll be removing admin roles from any user who doesn't respond. We'll also be configuring the review to happen every 7 days.</span></p>
<p><span >1. Log in to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong>.</span></p>
<div ><img src="https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png" alt="Access Azure AD Privileged Identity Management" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Azure AD roles</strong> &gt; <strong>Access reviews</strong> &gt; <strong>New</strong>.</p>
<div ><img src="https://i.ibb.co/SfjV9P0/access-review-for-roles.png" alt="Access review for roles" style="height: auto;width: auto"/></div>
<p>3. Set the <strong>name</strong> to "<strong>Review User Admin Rights</strong>". Set the <strong>Frequency</strong> to <strong>Weekly</strong>. Set the <strong>duration</strong> to <strong>3 days</strong>. Set the <strong>End </strong>to <strong>Never</strong>. Click <strong>Select privileged role(s)</strong>. <strong>Search </strong>for <strong>User Administrator</strong>. Click <strong>User Administrator</strong>. Click <strong>Done</strong>.</p>
<div ><img src="https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png" alt="Setup access rights for admin roles" style="height: auto;width: auto"/></div>
<p>4. Expand the <strong>Upon completion settings</strong>. Set <strong>Auto apply results to resource</strong> to <strong>Enable</strong>. Set <strong>If reviewers don't respond</strong> select <strong>Remove access</strong>.</p>
<p>5. Expand <strong>Advanced settings</strong>. Set <strong>Require reason on approval</strong> to <strong>Disable</strong>.</p>
<p>6. Click <strong>Start</strong>.</p>
<div ><img src="https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png" alt="upon completion settings in access review" style="height: auto;width: auto"/></div>
<p><span >How to manage access review on roles</span></p>
<p><span >So now you're set up so admins have to approve their role access every 7 days. So what does that look like? Well, first they'll receive a similar email to the one above. Then they'll be directed to a site where they can approve their access.</span></p>
<div ><img src="https://i.ibb.co/ggTMpH5/Access-review-approve-role.png" alt="Approve access review for role" style="height: auto;width: auto"/></div>
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
