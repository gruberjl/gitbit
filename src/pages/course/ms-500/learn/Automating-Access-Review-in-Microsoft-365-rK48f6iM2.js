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
      article: {"sectionId":"AFV_acckJ","featuredImage":"https://i.ibb.co/Xsxvz6Z/new-access-review.png","slug":"Automating-Access-Review-in-Microsoft-365-rK48f6iM2","title":"Automating Access Review in Microsoft 365","description":"With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization's data from personal devices and can even invite guests to collaborate.","id":"rK48f6iM2","article":{"blocks":[{"inlineStyleRanges":[],"depth":0,"type":"unstyled","text":"With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization's data from personal devices and can even invite guests to collaborate. With this free-flowing access, productivity receives a big boost but so do the challenges around security. How do we make sure there aren't stale user accounts that have access to your environment that is no longer in use? Let's take another example. Let's say you have a user on the IT help desk. He has limited administrative rights to your Microsoft 365 tenant just like he's supposed to. Then he gets a transfer/promotion. Now he's in marketing. How do you make sure his administrative access has been removed?","key":"8lvv","data":{},"entityRanges":[]},{"key":"2nl3v","type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"text":"The answer is simple, access review. With Azure AD access reviews you can review group memberships, access to applications, and role members. You can configure access reviews to happen regularly to make sure only the right people have access.","data":{},"depth":0},{"key":"5aodq","data":{},"entityRanges":[],"text":"What licenses are required?","inlineStyleRanges":[],"type":"header-two","depth":0},{"key":"d9qv","inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"unstyled","depth":0,"text":"To use access review you'll need an Azure AD Premium P2 license or Enterprise Mobility + Security (EMS) E5 license."},{"type":"header-two","inlineStyleRanges":[],"text":"How to setup access review for groups","entityRanges":[],"depth":0,"data":{},"key":"e6neb"},{"data":{},"entityRanges":[],"key":"f51s4","inlineStyleRanges":[],"text":"Let's jump right into setting up access review for a group. Let's set up the group membership to be reviewed monthly. Let's have the group owners review the membership. Then let's have it automatically approve access if there is no response.","depth":0,"type":"unstyled"},{"entityRanges":[],"text":"1. Log into Azure Active Directory admin center > Azure Active Directory > Identity Governance > Access reviews > New access review.","inlineStyleRanges":[{"style":"BOLD","length":35,"offset":12},{"offset":50,"style":"BOLD","length":22},{"length":19,"style":"BOLD","offset":75},{"length":14,"offset":97,"style":"BOLD"},{"style":"BOLD","offset":114,"length":17}],"data":{},"type":"unstyled","key":"39r8","depth":0},{"text":" ","inlineStyleRanges":[],"data":{},"depth":0,"entityRanges":[{"length":1,"offset":0,"key":0}],"key":"458nd","type":"atomic"},{"inlineStyleRanges":[{"length":14,"offset":34,"style":"BOLD"},{"length":12,"style":"BOLD","offset":53},{"offset":72,"length":21,"style":"BOLD"},{"length":15,"style":"BOLD","offset":101},{"style":"BOLD","length":6,"offset":161},{"length":10,"style":"BOLD","offset":175},{"offset":206,"style":"BOLD","length":13}],"entityRanges":[],"type":"unstyled","data":{},"key":"cv3ou","text":"2. In Select what to review click Teams + Groups. In Review scope click Select Teams + groups. Click Select group(s). Select the group you want to review. Click Select. Click All users next to Scope. Click Next: Reviews.","depth":0},{"depth":0,"inlineStyleRanges":[],"type":"atomic","data":{},"entityRanges":[{"key":1,"offset":0,"length":1}],"key":"ce4vk","text":" "},{"text":"3. Set the Select reviewers field to Group owner(s). Set the duration (in days) to 7. Set the Review recurrence to Monthly. Click Next: Settings.","data":{},"type":"unstyled","key":"dj416","entityRanges":[],"inlineStyleRanges":[{"length":14,"offset":37,"style":"BOLD"},{"style":"BOLD","length":1,"offset":83},{"style":"BOLD","length":7,"offset":115},{"offset":130,"style":"BOLD","length":14}],"depth":0},{"depth":0,"key":"5btkj","data":{},"type":"atomic","text":" ","entityRanges":[{"offset":0,"key":2,"length":1}],"inlineStyleRanges":[]},{"text":"4. Check the Auto apply results to resource. Set If reviewers don't respond to No change. Click Next: Review + Create.","type":"unstyled","entityRanges":[],"data":{},"depth":0,"inlineStyleRanges":[{"offset":13,"length":30,"style":"BOLD"},{"style":"BOLD","length":9,"offset":79},{"offset":96,"style":"BOLD","length":21}],"key":"9s94l"},{"data":{},"inlineStyleRanges":[],"text":" ","key":"ej4iu","type":"atomic","depth":0,"entityRanges":[{"offset":0,"length":1,"key":3}]},{"type":"unstyled","depth":0,"entityRanges":[],"data":{},"key":"7v6gj","inlineStyleRanges":[{"length":6,"style":"BOLD","offset":53}],"text":"5. Give your access review a helpful name then click Create."},{"data":{},"entityRanges":[{"key":4,"length":1,"offset":0}],"key":"213d4","depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic"},{"depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"key":"ckq66","data":{},"text":"That's it. Now the owners of the group will receive a notification asking them to review the group membership monthly. They'll have one week to respond and they can automatically remove users from the group."},{"text":"How to manage access review on groups","entityRanges":[],"type":"header-two","inlineStyleRanges":[],"key":"11f30","data":{},"depth":0},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"text":"Now that the access review is configured what will the reviewers see? How do they manage the group through the access review? Not to worry, I'll explain.","type":"unstyled","key":"drnl5","data":{}},{"depth":0,"entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[{"offset":51,"style":"color-rgb(33,37,41)","length":19},{"style":"bgcolor-rgb(255,255,255)","offset":51,"length":19},{"length":19,"style":"fontsize-16","offset":51},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":19,"offset":51},{"length":12,"offset":57,"style":"BOLD"}],"text":"1. The reviewers will receive the following email. Click Start review.","key":"1pckv"},{"key":"cphgj","text":" ","entityRanges":[{"length":1,"key":5,"offset":0}],"type":"atomic","inlineStyleRanges":[],"depth":0,"data":{}},{"data":{},"inlineStyleRanges":[{"length":45,"style":"color-rgb(33,37,41)","offset":79},{"style":"bgcolor-rgb(255,255,255)","offset":79,"length":45},{"style":"fontsize-16","offset":79,"length":45},{"length":45,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":79},{"length":7,"offset":85,"style":"BOLD"},{"style":"BOLD","offset":103,"length":6},{"style":"BOLD","length":6,"offset":117}],"entityRanges":[],"key":"5snvj","text":"2. Click the checkbox next to the users that are still approved for the group. Click Approve. Give the reason. Click submit.","type":"unstyled","depth":0},{"depth":0,"data":{},"entityRanges":[{"key":6,"offset":0,"length":1}],"key":"5cdge","inlineStyleRanges":[],"type":"atomic","text":" "},{"key":"b9p3p","text":"3. Click the checkbox next to the users that are no longer approved for the group. Click Deny. Give the reason. Click Submit.","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":125,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":125,"offset":0},{"length":125,"style":"fontsize-16","offset":0},{"length":125,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"length":4,"style":"BOLD","offset":89},{"length":6,"style":"BOLD","offset":104},{"offset":118,"length":6,"style":"BOLD"}],"data":{},"type":"unstyled","depth":0,"entityRanges":[]},{"depth":0,"entityRanges":[{"key":7,"length":1,"offset":0}],"key":"4lboo","data":{},"text":" ","type":"atomic","inlineStyleRanges":[]},{"depth":0,"entityRanges":[],"text":"If a user is denied you may not see the change right away. They will be removed when the review period has ended or when an administrator stops the review.","key":"9kc00","data":{},"type":"unstyled","inlineStyleRanges":[]},{"inlineStyleRanges":[{"length":35,"style":"color-rgb(33,37,41)","offset":0},{"length":35,"style":"bgcolor-rgb(255,255,255)","offset":0},{"length":35,"offset":0,"style":"fontsize-32"},{"length":35,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"data":{},"entityRanges":[],"key":"89d85","type":"unstyled","depth":0,"text":"How to setup access review on roles"},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":329},{"length":329,"style":"bgcolor-rgb(255,255,255)","offset":0},{"length":329,"style":"fontsize-16","offset":0},{"length":329,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"text":"Configuring a role for access review is a bit different. The options are still about the same but there located in different spots. This time, let's configure the admins to review their access. In short, we'll be removing admin roles from any user who doesn't respond. We'll also be configuring the review to happen every 7 days.","entityRanges":[],"data":{},"type":"unstyled","depth":0,"key":"aho96"},{"inlineStyleRanges":[{"length":106,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"length":106,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":106,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":106,"offset":0},{"offset":13,"length":35,"style":"BOLD"},{"offset":51,"length":12,"style":"BOLD"},{"offset":66,"style":"BOLD","length":39}],"depth":0,"text":"1. Log in to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.","key":"4fd2p","data":{},"entityRanges":[],"type":"unstyled"},{"key":"d6pjo","depth":0,"text":" ","data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":8,"offset":0}],"type":"atomic"},{"data":{},"text":"2. Click Azure AD roles > Access reviews > New.","key":"62euq","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":14},{"style":"BOLD","offset":26,"length":14},{"length":3,"offset":43,"style":"BOLD"}],"entityRanges":[],"depth":0,"type":"unstyled"},{"entityRanges":[{"offset":0,"key":9,"length":1}],"data":{},"inlineStyleRanges":[],"text":" ","key":"dq33m","depth":0,"type":"atomic"},{"key":"aknq3","type":"unstyled","entityRanges":[],"data":{},"depth":0,"text":"3. Set the name to \"Review User Admin Rights\". Set the Frequency to Weekly. Set the duration to 3 days. Set the End to Never. Click Select privileged role(s). Search for User Administrator. Click User Administrator. Click Done.","inlineStyleRanges":[{"length":4,"style":"BOLD","offset":11},{"style":"BOLD","offset":20,"length":24},{"length":9,"style":"BOLD","offset":55},{"length":6,"style":"BOLD","offset":68},{"offset":84,"style":"BOLD","length":8},{"style":"BOLD","offset":96,"length":6},{"length":4,"offset":112,"style":"BOLD"},{"style":"BOLD","length":5,"offset":119},{"offset":132,"length":25,"style":"BOLD"},{"length":7,"offset":159,"style":"BOLD"},{"length":18,"offset":170,"style":"BOLD"},{"style":"BOLD","offset":196,"length":18},{"style":"BOLD","length":4,"offset":222}]},{"key":"329cl","text":" ","entityRanges":[{"length":1,"offset":0,"key":10}],"depth":0,"inlineStyleRanges":[],"type":"atomic","data":{}},{"depth":0,"data":{},"type":"unstyled","key":"fcj70","text":"4. Expand the Upon completion settings. Set Auto apply results to resource to Enable. Set If reviewers don't respond select Remove access.","inlineStyleRanges":[{"length":24,"style":"BOLD","offset":14},{"style":"BOLD","offset":44,"length":30},{"style":"BOLD","offset":78,"length":6},{"style":"BOLD","offset":90,"length":26},{"offset":124,"style":"BOLD","length":13}],"entityRanges":[]},{"key":"27ess","entityRanges":[],"inlineStyleRanges":[{"length":17,"style":"BOLD","offset":10},{"style":"BOLD","offset":33,"length":26},{"style":"BOLD","length":7,"offset":63}],"data":{},"depth":0,"text":"5. Expand Advanced settings. Set Require reason on approval to Disable.","type":"unstyled"},{"data":{},"type":"unstyled","depth":0,"key":"63tho","text":"6. Click Start.","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":5,"offset":9}]},{"type":"atomic","entityRanges":[{"offset":0,"length":1,"key":11}],"text":" ","inlineStyleRanges":[],"key":"6bbu1","data":{},"depth":0},{"text":"How to manage access review on roles","depth":0,"data":{},"entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"offset":0,"length":36,"style":"color-rgb(33,37,41)"},{"length":36,"style":"bgcolor-rgb(255,255,255)","offset":0},{"length":36,"offset":0,"style":"fontsize-32"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":36,"offset":0}],"key":"8uuek"},{"entityRanges":[],"key":"1s0gv","text":"So now you're set up so admins have to approve their role access every 7 days. So what does that look like? Well, first they'll receive a similar email to the one above. Then they'll be directed to a site where they can approve their access.","type":"unstyled","inlineStyleRanges":[{"offset":0,"length":241,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":241,"offset":0},{"style":"fontsize-16","offset":0,"length":241},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":241}],"depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[],"data":{},"text":" ","entityRanges":[{"offset":0,"key":12,"length":1}],"key":"48oe2","type":"atomic"},{"key":"8sulj","depth":0,"entityRanges":[],"data":{},"type":"unstyled","text":"","inlineStyleRanges":[]}],"entityMap":{"0":{"data":{"alt":"New access review","src":"https://i.ibb.co/Xsxvz6Z/new-access-review.png","width":"auto","alignment":"none","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"data":{"alignment":"none","width":"auto","alt":"Access Review set the review type","src":"https://i.ibb.co/vVKtWPh/access-review-review-type3.png","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"2":{"data":{"alignment":"none","alt":"Access review reviews","src":"https://i.ibb.co/8z2hzWH/access-review-reviews.png","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"3":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alignment":"none","src":"https://i.ibb.co/QXMkkv8/access-review-settings.png","alt":"set the access review settings","height":"auto"}},"4":{"data":{"alt":"Review access review settings","height":"auto","src":"https://i.ibb.co/2N1VQMQ/review-access-review-settings.png","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"5":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Action required access review email","src":"https://i.ibb.co/qMnYy61/action-required-access-review-email.png","alignment":"none","width":"auto","height":"auto"}},"6":{"mutability":"MUTABLE","type":"IMAGE","data":{"src":"https://i.ibb.co/vX5Vxms/Approve-users.png","alignment":"none","height":"auto","width":"auto","alt":"Approve users in access review"}},"7":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Deny users group access using access review","src":"https://i.ibb.co/qNpQSRW/deny-users.png","width":"auto","alignment":"none","height":"auto"}},"8":{"mutability":"MUTABLE","data":{"height":"auto","alignment":"none","alt":"Access Azure AD Privileged Identity Management","width":"auto","src":"https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png"},"type":"IMAGE"},"9":{"mutability":"MUTABLE","data":{"alignment":"none","height":"auto","alt":"Access review for roles","width":"auto","src":"https://i.ibb.co/SfjV9P0/access-review-for-roles.png"},"type":"IMAGE"},"10":{"data":{"width":"auto","src":"https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","alignment":"none","height":"auto","alt":"Setup access rights for admin roles"},"type":"IMAGE","mutability":"MUTABLE"},"11":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"upon completion settings in access review","src":"https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","height":"auto","width":"auto"}},"12":{"data":{"width":"auto","src":"https://i.ibb.co/ggTMpH5/Access-review-approve-role.png","height":"auto","alignment":"none","alt":"Approve access review for role"},"mutability":"MUTABLE","type":"IMAGE"}}},"type":"article","images":["https://i.ibb.co/Xsxvz6Z/new-access-review.png","https://i.ibb.co/W32Y480/Access-Review-Type.png","https://i.ibb.co/8z2hzWH/access-review-reviews.png","https://i.ibb.co/vVKtWPh/access-review-review-type3.png","https://i.ibb.co/QXMkkv8/access-review-settings.png","https://i.ibb.co/2N1VQMQ/review-access-review-settings.png","https://i.ibb.co/qMnYy61/action-required-access-review-email.png","https://i.ibb.co/sJ6YLYJ/Approve-users.png","https://i.ibb.co/vX5Vxms/Approve-users.png","https://i.ibb.co/qNpQSRW/deny-users.png","https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png","https://i.ibb.co/SfjV9P0/access-review-for-roles.png","https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png","https://i.ibb.co/ggTMpH5/Access-review-approve-role.png"],"publish":true,"datePublished":"2022/5/26"},
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
