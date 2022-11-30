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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8lvv', text: 'With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization\'s data from personal devices and can even invite guests to collaborate. With this free-flowing access, productivity receives a big boost but so do the challenges around security. How do we make sure there aren\'t stale user accounts that have access to your environment that is no longer in use? Let\'s take another example. Let\'s say you have a user on the IT help desk. He has limited administrative rights to your Microsoft 365 tenant just like he\'s supposed to. Then he gets a transfer/promotion. Now he\'s in marketing. How do you make sure his administrative access has been removed?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2nl3v', text: 'The answer is simple, access review. With Azure AD access reviews you can review group memberships, access to applications, and role members. You can configure access reviews to happen regularly to make sure only the right people have access.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5aodq', text: 'What licenses are required?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd9qv', text: 'To use access review you\'ll need an Azure AD Premium P2 license or Enterprise Mobility + Security (EMS) E5 license.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e6neb', text: 'How to setup access review for groups', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f51s4', text: 'Let\'s jump right into setting up access review for a group. Let\'s set up the group membership to be reviewed monthly. Let\'s have the group owners review the membership. Then let\'s have it automatically approve access if there is no response.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 12, style: 'BOLD'}, {length: 22, offset: 50, style: 'BOLD'}, {length: 19, offset: 75, style: 'BOLD'}, {length: 14, offset: 97, style: 'BOLD'}, {length: 17, offset: 114, style: 'BOLD'}], key: '39r8', text: '1. Log into Azure Active Directory admin center > Azure Active Directory > Identity Governance > Access reviews > New access review.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '458nd', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 34, style: 'BOLD'}, {length: 12, offset: 53, style: 'BOLD'}, {length: 21, offset: 72, style: 'BOLD'}, {length: 15, offset: 101, style: 'BOLD'}, {length: 6, offset: 161, style: 'BOLD'}, {length: 10, offset: 175, style: 'BOLD'}, {length: 13, offset: 206, style: 'BOLD'}], key: 'cv3ou', text: '2. In Select what to review click Teams + Groups. In Review scope click Select Teams + groups. Click Select group(s). Select the group you want to review. Click Select. Click All users next to Scope. Click Next: Reviews.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ce4vk', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 37, style: 'BOLD'}, {length: 1, offset: 83, style: 'BOLD'}, {length: 7, offset: 115, style: 'BOLD'}, {length: 14, offset: 130, style: 'BOLD'}], key: 'dj416', text: '3. Set the Select reviewers field to Group owner(s). Set the duration (in days) to 7. Set the Review recurrence to Monthly. Click Next: Settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '5btkj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 30, offset: 13, style: 'BOLD'}, {length: 9, offset: 79, style: 'BOLD'}, {length: 21, offset: 96, style: 'BOLD'}], key: '9s94l', text: '4. Check the Auto apply results to resource. Set If reviewers don\'t respond to No change. Click Next: Review + Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ej4iu', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 53, style: 'BOLD'}], key: '7v6gj', text: '5. Give your access review a helpful name then click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '213d4', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ckq66', text: 'That\'s it. Now the owners of the group will receive a notification asking them to review the group membership monthly. They\'ll have one week to respond and they can automatically remove users from the group.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '11f30', text: 'How to manage access review on groups', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'drnl5', text: 'Now that the access review is configured what will the reviewers see? How do they manage the group through the access review? Not to worry, I\'ll explain.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 51, style: 'color-rgb(33,37,41)'}, {length: 19, offset: 51, style: 'bgcolor-rgb(255,255,255)'}, {length: 19, offset: 51, style: 'fontsize-16'}, {length: 19, offset: 51, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 12, offset: 57, style: 'BOLD'}], key: '1pckv', text: '1. The reviewers will receive the following email. Click Start review.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cphgj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 45, offset: 79, style: 'color-rgb(33,37,41)'}, {length: 45, offset: 79, style: 'bgcolor-rgb(255,255,255)'}, {length: 45, offset: 79, style: 'fontsize-16'}, {length: 45, offset: 79, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 7, offset: 85, style: 'BOLD'}, {length: 6, offset: 103, style: 'BOLD'}, {length: 6, offset: 117, style: 'BOLD'}], key: '5snvj', text: '2. Click the checkbox next to the users that are still approved for the group. Click Approve. Give the reason. Click submit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '5cdge', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 125, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 125, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 125, offset: 0, style: 'fontsize-16'}, {length: 125, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 4, offset: 89, style: 'BOLD'}, {length: 6, offset: 104, style: 'BOLD'}, {length: 6, offset: 118, style: 'BOLD'}], key: 'b9p3p', text: '3. Click the checkbox next to the users that are no longer approved for the group. Click Deny. Give the reason. Click Submit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '4lboo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9kc00', text: 'If a user is denied you may not see the change right away. They will be removed when the review period has ended or when an administrator stops the review.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 35, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 35, offset: 0, style: 'fontsize-32'}, {length: 35, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '89d85', text: 'How to setup access review on roles', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 329, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 329, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 329, offset: 0, style: 'fontsize-16'}, {length: 329, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'aho96', text: 'Configuring a role for access review is a bit different. The options are still about the same but there located in different spots. This time, let\'s configure the admins to review their access. In short, we\'ll be removing admin roles from any user who doesn\'t respond. We\'ll also be configuring the review to happen every 7 days.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 106, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 106, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 106, offset: 0, style: 'fontsize-16'}, {length: 106, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 35, offset: 13, style: 'BOLD'}, {length: 12, offset: 51, style: 'BOLD'}, {length: 39, offset: 66, style: 'BOLD'}], key: '4fd2p', text: '1. Log in to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'd6pjo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}, {length: 14, offset: 26, style: 'BOLD'}, {length: 3, offset: 43, style: 'BOLD'}], key: '62euq', text: '2. Click Azure AD roles > Access reviews > New.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dq33m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 11, style: 'BOLD'}, {length: 24, offset: 20, style: 'BOLD'}, {length: 9, offset: 55, style: 'BOLD'}, {length: 6, offset: 68, style: 'BOLD'}, {length: 8, offset: 84, style: 'BOLD'}, {length: 6, offset: 96, style: 'BOLD'}, {length: 4, offset: 112, style: 'BOLD'}, {length: 5, offset: 119, style: 'BOLD'}, {length: 25, offset: 132, style: 'BOLD'}, {length: 7, offset: 159, style: 'BOLD'}, {length: 18, offset: 170, style: 'BOLD'}, {length: 18, offset: 196, style: 'BOLD'}, {length: 4, offset: 222, style: 'BOLD'}], key: 'aknq3', text: '3. Set the name to "Review User Admin Rights". Set the Frequency to Weekly. Set the duration to 3 days. Set the End to Never. Click Select privileged role(s). Search for User Administrator. Click User Administrator. Click Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '329cl', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 14, style: 'BOLD'}, {length: 30, offset: 44, style: 'BOLD'}, {length: 6, offset: 78, style: 'BOLD'}, {length: 26, offset: 90, style: 'BOLD'}, {length: 13, offset: 124, style: 'BOLD'}], key: 'fcj70', text: '4. Expand the Upon completion settings. Set Auto apply results to resource to Enable. Set If reviewers don\'t respond select Remove access.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 10, style: 'BOLD'}, {length: 26, offset: 33, style: 'BOLD'}, {length: 7, offset: 63, style: 'BOLD'}], key: '27ess', text: '5. Expand Advanced settings. Set Require reason on approval to Disable.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}], key: '63tho', text: '6. Click Start.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: '6bbu1', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 36, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 36, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 36, offset: 0, style: 'fontsize-32'}, {length: 36, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '8uuek', text: 'How to manage access review on roles', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 241, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 241, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 241, offset: 0, style: 'fontsize-16'}, {length: 241, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '1s0gv', text: 'So now you\'re set up so admins have to approve their role access every 7 days. So what does that look like? Well, first they\'ll receive a similar email to the one above. Then they\'ll be directed to a site where they can approve their access.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '48oe2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8sulj', text: '', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'New access review', height: 'auto', src: 'https://i.ibb.co/Xsxvz6Z/new-access-review.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'none', alt: 'Access Review set the review type', height: 'auto', src: 'https://i.ibb.co/vVKtWPh/access-review-review-type3.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Setup access rights for admin roles', height: 'auto', src: 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'upon completion settings in access review', height: 'auto', src: 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Approve access review for role', height: 'auto', src: 'https://i.ibb.co/ggTMpH5/Access-review-approve-role.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Access review reviews', height: 'auto', src: 'https://i.ibb.co/8z2hzWH/access-review-reviews.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'set the access review settings', height: 'auto', src: 'https://i.ibb.co/QXMkkv8/access-review-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Review access review settings', height: 'auto', src: 'https://i.ibb.co/2N1VQMQ/review-access-review-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Action required access review email', height: 'auto', src: 'https://i.ibb.co/qMnYy61/action-required-access-review-email.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Approve users in access review', height: 'auto', src: 'https://i.ibb.co/vX5Vxms/Approve-users.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Deny users group access using access review', height: 'auto', src: 'https://i.ibb.co/qNpQSRW/deny-users.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Access Azure AD Privileged Identity Management', height: 'auto', src: 'https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Access review for roles', height: 'auto', src: 'https://i.ibb.co/SfjV9P0/access-review-for-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization\'s data from personal devices and can even invite guests to collaborate.', featuredImage: 'https://i.ibb.co/Xsxvz6Z/new-access-review.png', id: 'rK48f6iM2', images: ['https://i.ibb.co/Xsxvz6Z/new-access-review.png', 'https://i.ibb.co/W32Y480/Access-Review-Type.png', 'https://i.ibb.co/8z2hzWH/access-review-reviews.png', 'https://i.ibb.co/vVKtWPh/access-review-review-type3.png', 'https://i.ibb.co/QXMkkv8/access-review-settings.png', 'https://i.ibb.co/2N1VQMQ/review-access-review-settings.png', 'https://i.ibb.co/qMnYy61/action-required-access-review-email.png', 'https://i.ibb.co/sJ6YLYJ/Approve-users.png', 'https://i.ibb.co/vX5Vxms/Approve-users.png', 'https://i.ibb.co/qNpQSRW/deny-users.png', 'https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png', 'https://i.ibb.co/SfjV9P0/access-review-for-roles.png', 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', 'https://i.ibb.co/ggTMpH5/Access-review-approve-role.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Automating-Access-Review-in-Microsoft-365-rK48f6iM2', title: 'Automating Access Review in Microsoft 365', type: 'article'},
      nextContentSlug: 'learn/Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s',
      previousContentSlug: 'learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ',
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
                  <div id="ld-534-9587" /><script>{`(function(w,d,s,i){w.ldAdInit=w.ldAdInit||[];w.ldAdInit.push({slot:15664931508787046,size:[0, 0],id:"ld-534-9587"});if(!d.getElementById(i)){var j=d.createElement(s),p=d.getElementsByTagName(s)[0];j.async=true;j.src="//cdn2.decide.dev/_js/ajs.js";j.id=i;p.parentNode.insertBefore(j,p);}})(window,document,"script","ld-ajs")`}</script>
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization's data from personal devices and can even invite guests to collaborate. With this free-flowing access, productivity receives a big boost but so do the challenges around security. How do we make sure there aren't stale user accounts that have access to your environment that is no longer in use? Let's take another example. Let's say you have a user on the IT help desk. He has limited administrative rights to your Microsoft 365 tenant just like he's supposed to. Then he gets a transfer/promotion. Now he's in marketing. How do you make sure his administrative access has been removed?</p>
                    <p>The answer is simple, access review. With Azure AD access reviews you can review group memberships, access to applications, and role members. You can configure access reviews to happen regularly to make sure only the right people have access.</p>
                    <div id="ld-7740-2760" /><script>{`(function(w,d,s,i){w.ldAdInit=w.ldAdInit||[];w.ldAdInit.push({slot:15664932884518758,size:[0, 0],id:"ld-7740-2760"});if(!d.getElementById(i)){var j=d.createElement(s),p=d.getElementsByTagName(s)[0];j.async=true;j.src="//cdn2.decide.dev/_js/ajs.js";j.id=i;p.parentNode.insertBefore(j,p);}})(window,document,"script","ld-ajs")`}</script><h2>What licenses are required?</h2>
                    <p>To use access review you'll need an Azure AD Premium P2 license or Enterprise Mobility + Security (EMS) E5 license.</p>
                    <h2>How to setup access review for groups</h2>
                    <p>Let's jump right into setting up access review for a group. Let's set up the group membership to be reviewed monthly. Let's have the group owners review the membership. Then let's have it automatically approve access if there is no response.</p>
                    <p>1. Log into <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Identity Governance</strong> &gt; <strong>Access reviews</strong> &gt; <strong>New access review</strong>.</p>
                    <div ><img src="https://i.ibb.co/Xsxvz6Z/new-access-review.png" alt="New access review" style="height: auto;width: auto" /></div>
                    <p>2. In Select what to review click <strong>Teams + Groups</strong>. In <strong>Review scope</strong> click <strong>Select Teams + groups</strong>. Click <strong>Select group(s)</strong>. Select the group you want to review. Click <strong>Select</strong>. Click <strong>All users </strong>next to Scope. Click <strong>Next: Reviews</strong>.</p>
                    <div ><img src="https://i.ibb.co/vVKtWPh/access-review-review-type3.png" alt="Access Review set the review type" style="height: auto;width: auto" /></div>
                    <p>3. Set the Select reviewers field to <strong>Group owner(s)</strong>. Set the duration (in days) to <strong>7</strong>. Set the Review recurrence to <strong>Monthly</strong>. Click <strong>Next: Settings</strong>.</p>
                    <div ><img src="https://i.ibb.co/8z2hzWH/access-review-reviews.png" alt="Access review reviews" style="height: auto;width: auto" /></div>
                    <p>4. Check the <strong>Auto apply results to resource</strong>. Set If reviewers don't respond to <strong>No change</strong>. Click <strong>Next: Review + Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/QXMkkv8/access-review-settings.png" alt="set the access review settings" style="height: auto;width: auto" /></div>
                    <p>5. Give your access review a helpful name then click <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/2N1VQMQ/review-access-review-settings.png" alt="Review access review settings" style="height: auto;width: auto" /></div>
                    <p>That's it. Now the owners of the group will receive a notification asking them to review the group membership monthly. They'll have one week to respond and they can automatically remove users from the group.</p>
                    <h2>How to manage access review on groups</h2>
                    <p>Now that the access review is configured what will the reviewers see? How do they manage the group through the access review? Not to worry, I'll explain.</p>
                    <p>1. The reviewers will receive the following email. <span >Click <strong>Start review</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/qMnYy61/action-required-access-review-email.png" alt="Action required access review email" style="height: auto;width: auto" /></div>
                    <p>2. Click the checkbox next to the users that are still approved for the group. <span >Click <strong>Approve</strong>. Give the <strong>reason</strong>. Click <strong>submit</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/vX5Vxms/Approve-users.png" alt="Approve users in access review" style="height: auto;width: auto" /></div>
                    <p><span >3. Click the checkbox next to the users that are no longer approved for the group. Click <strong>Deny</strong>. Give the <strong>reason</strong>. Click <strong>Submit</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/qNpQSRW/deny-users.png" alt="Deny users group access using access review" style="height: auto;width: auto" /></div>
                    <p>If a user is denied you may not see the change right away. They will be removed when the review period has ended or when an administrator stops the review.</p>
                    <p><span >How to setup access review on roles</span></p>
                    <p><span >Configuring a role for access review is a bit different. The options are still about the same but there located in different spots. This time, let's configure the admins to review their access. In short, we'll be removing admin roles from any user who doesn't respond. We'll also be configuring the review to happen every 7 days.</span></p>
                    <p><span >1. Log in to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png" alt="Access Azure AD Privileged Identity Management" style="height: auto;width: auto" /></div>
                    <p>2. Click <strong>Azure AD roles</strong> &gt; <strong>Access reviews</strong> &gt; <strong>New</strong>.</p>
                    <div ><img src="https://i.ibb.co/SfjV9P0/access-review-for-roles.png" alt="Access review for roles" style="height: auto;width: auto" /></div>
                    <p>3. Set the <strong>name</strong> to "<strong>Review User Admin Rights</strong>". Set the <strong>Frequency</strong> to <strong>Weekly</strong>. Set the <strong>duration</strong> to <strong>3 days</strong>. Set the <strong>End </strong>to <strong>Never</strong>. Click <strong>Select privileged role(s)</strong>. <strong>Search </strong>for <strong>User Administrator</strong>. Click <strong>User Administrator</strong>. Click <strong>Done</strong>.</p>
                    <div ><img src="https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png" alt="Setup access rights for admin roles" style="height: auto;width: auto" /></div>
                    <p>4. Expand the <strong>Upon completion settings</strong>. Set <strong>Auto apply results to resource</strong> to <strong>Enable</strong>. Set <strong>If reviewers don't respond</strong> select <strong>Remove access</strong>.</p>
                    <p>5. Expand <strong>Advanced settings</strong>. Set <strong>Require reason on approval</strong> to <strong>Disable</strong>.</p>
                    <p>6. Click <strong>Start</strong>.</p>
                    <div ><img src="https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png" alt="upon completion settings in access review" style="height: auto;width: auto" /></div>
                    <p><span >How to manage access review on roles</span></p>
                    <p><span >So now you're set up so admins have to approve their role access every 7 days. So what does that look like? Well, first they'll receive a similar email to the one above. Then they'll be directed to a site where they can approve their access.</span></p>
                    <div ><img src="https://i.ibb.co/ggTMpH5/Access-review-approve-role.png" alt="Approve access review for role" style="height: auto;width: auto" /></div>
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
