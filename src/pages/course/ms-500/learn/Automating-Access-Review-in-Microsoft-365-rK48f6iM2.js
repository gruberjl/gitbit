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
      path: '/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2',
      article: {datePublished: '2022/5/26', images: ['https://i.ibb.co/Xsxvz6Z/new-access-review.png', 'https://i.ibb.co/W32Y480/Access-Review-Type.png', 'https://i.ibb.co/8z2hzWH/access-review-reviews.png', 'https://i.ibb.co/vVKtWPh/access-review-review-type3.png', 'https://i.ibb.co/QXMkkv8/access-review-settings.png', 'https://i.ibb.co/2N1VQMQ/review-access-review-settings.png', 'https://i.ibb.co/qMnYy61/action-required-access-review-email.png', 'https://i.ibb.co/sJ6YLYJ/Approve-users.png', 'https://i.ibb.co/vX5Vxms/Approve-users.png', 'https://i.ibb.co/qNpQSRW/deny-users.png', 'https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png', 'https://i.ibb.co/SfjV9P0/access-review-for-roles.png', 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', 'https://i.ibb.co/ggTMpH5/Access-review-approve-role.png'], id: 'rK48f6iM2', article: {blocks: [{entityRanges: [], depth: 0, text: 'With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization\'s data from personal devices and can even invite guests to collaborate. With this free-flowing access, productivity receives a big boost but so do the challenges around security. How do we make sure there aren\'t stale user accounts that have access to your environment that is no longer in use? Let\'s take another example. Let\'s say you have a user on the IT help desk. He has limited administrative rights to your Microsoft 365 tenant just like he\'s supposed to. Then he gets a transfer/promotion. Now he\'s in marketing. How do you make sure his administrative access has been removed?', type: 'unstyled', inlineStyleRanges: [], key: '8lvv', data: {}}, {key: '2nl3v', entityRanges: [], inlineStyleRanges: [], data: {}, depth: 0, text: 'The answer is simple, access review. With Azure AD access reviews you can review group memberships, access to applications, and role members. You can configure access reviews to happen regularly to make sure only the right people have access.', type: 'unstyled'}, {data: {}, inlineStyleRanges: [], type: 'header-two', key: '5aodq', depth: 0, text: 'What licenses are required?', entityRanges: []}, {depth: 0, text: 'To use access review you\'ll need an Azure AD Premium P2 license or Enterprise Mobility + Security (EMS) E5 license.', key: 'd9qv', type: 'unstyled', inlineStyleRanges: [], entityRanges: [], data: {}}, {depth: 0, key: 'e6neb', data: {}, type: 'header-two', text: 'How to setup access review for groups', inlineStyleRanges: [], entityRanges: []}, {key: 'f51s4', data: {}, text: 'Let\'s jump right into setting up access review for a group. Let\'s set up the group membership to be reviewed monthly. Let\'s have the group owners review the membership. Then let\'s have it automatically approve access if there is no response.', type: 'unstyled', entityRanges: [], depth: 0, inlineStyleRanges: []}, {text: '1. Log into Azure Active Directory admin center > Azure Active Directory > Identity Governance > Access reviews > New access review.', inlineStyleRanges: [{style: 'BOLD', length: 35, offset: 12}, {style: 'BOLD', length: 22, offset: 50}, {length: 19, offset: 75, style: 'BOLD'}, {style: 'BOLD', length: 14, offset: 97}, {style: 'BOLD', length: 17, offset: 114}], depth: 0, key: '39r8', type: 'unstyled', data: {}, entityRanges: []}, {inlineStyleRanges: [], depth: 0, key: '458nd', data: {}, text: ' ', type: 'atomic', entityRanges: [{offset: 0, key: 0, length: 1}]}, {data: {}, text: '2. In Select what to review click Teams + Groups. In Review scope click Select Teams + groups. Click Select group(s). Select the group you want to review. Click Select. Click All users next to Scope. Click Next: Reviews.', type: 'unstyled', entityRanges: [], key: 'cv3ou', depth: 0, inlineStyleRanges: [{offset: 34, length: 14, style: 'BOLD'}, {style: 'BOLD', length: 12, offset: 53}, {style: 'BOLD', length: 21, offset: 72}, {style: 'BOLD', length: 15, offset: 101}, {offset: 161, style: 'BOLD', length: 6}, {style: 'BOLD', length: 10, offset: 175}, {offset: 206, style: 'BOLD', length: 13}]}, {type: 'atomic', key: 'ce4vk', depth: 0, data: {}, inlineStyleRanges: [], text: ' ', entityRanges: [{key: 1, length: 1, offset: 0}]}, {type: 'unstyled', depth: 0, data: {}, key: 'dj416', entityRanges: [], text: '3. Set the Select reviewers field to Group owner(s). Set the duration (in days) to 7. Set the Review recurrence to Monthly. Click Next: Settings.', inlineStyleRanges: [{style: 'BOLD', length: 14, offset: 37}, {length: 1, offset: 83, style: 'BOLD'}, {length: 7, offset: 115, style: 'BOLD'}, {style: 'BOLD', offset: 130, length: 14}]}, {depth: 0, key: '5btkj', data: {}, inlineStyleRanges: [], type: 'atomic', text: ' ', entityRanges: [{length: 1, offset: 0, key: 2}]}, {depth: 0, key: '9s94l', type: 'unstyled', data: {}, entityRanges: [], text: '4. Check the Auto apply results to resource. Set If reviewers don\'t respond to No change. Click Next: Review + Create.', inlineStyleRanges: [{length: 30, style: 'BOLD', offset: 13}, {style: 'BOLD', offset: 79, length: 9}, {offset: 96, style: 'BOLD', length: 21}]}, {data: {}, entityRanges: [{length: 1, offset: 0, key: 3}], depth: 0, type: 'atomic', text: ' ', inlineStyleRanges: [], key: 'ej4iu'}, {data: {}, entityRanges: [], key: '7v6gj', inlineStyleRanges: [{offset: 53, style: 'BOLD', length: 6}], type: 'unstyled', depth: 0, text: '5. Give your access review a helpful name then click Create.'}, {depth: 0, text: ' ', type: 'atomic', inlineStyleRanges: [], key: '213d4', entityRanges: [{offset: 0, key: 4, length: 1}], data: {}}, {entityRanges: [], key: 'ckq66', depth: 0, type: 'unstyled', text: 'That\'s it. Now the owners of the group will receive a notification asking them to review the group membership monthly. They\'ll have one week to respond and they can automatically remove users from the group.', data: {}, inlineStyleRanges: []}, {entityRanges: [], key: '11f30', text: 'How to manage access review on groups', inlineStyleRanges: [], depth: 0, data: {}, type: 'header-two'}, {text: 'Now that the access review is configured what will the reviewers see? How do they manage the group through the access review? Not to worry, I\'ll explain.', depth: 0, inlineStyleRanges: [], entityRanges: [], key: 'drnl5', type: 'unstyled', data: {}}, {inlineStyleRanges: [{offset: 51, length: 19, style: 'color-rgb(33,37,41)'}, {length: 19, style: 'bgcolor-rgb(255,255,255)', offset: 51}, {length: 19, offset: 51, style: 'fontsize-16'}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 19, offset: 51}, {offset: 57, style: 'BOLD', length: 12}], key: '1pckv', depth: 0, text: '1. The reviewers will receive the following email. Click Start review.', type: 'unstyled', data: {}, entityRanges: []}, {inlineStyleRanges: [], data: {}, depth: 0, type: 'atomic', entityRanges: [{offset: 0, key: 5, length: 1}], key: 'cphgj', text: ' '}, {key: '5snvj', type: 'unstyled', entityRanges: [], data: {}, inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 79, length: 45}, {style: 'bgcolor-rgb(255,255,255)', length: 45, offset: 79}, {style: 'fontsize-16', offset: 79, length: 45}, {length: 45, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 79}, {style: 'BOLD', offset: 85, length: 7}, {length: 6, style: 'BOLD', offset: 103}, {offset: 117, length: 6, style: 'BOLD'}], text: '2. Click the checkbox next to the users that are still approved for the group. Click Approve. Give the reason. Click submit.', depth: 0}, {key: '5cdge', data: {}, text: ' ', entityRanges: [{length: 1, key: 6, offset: 0}], depth: 0, type: 'atomic', inlineStyleRanges: []}, {inlineStyleRanges: [{length: 125, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 125, style: 'bgcolor-rgb(255,255,255)', offset: 0}, {style: 'fontsize-16', offset: 0, length: 125}, {length: 125, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {style: 'BOLD', offset: 89, length: 4}, {style: 'BOLD', length: 6, offset: 104}, {style: 'BOLD', offset: 118, length: 6}], type: 'unstyled', entityRanges: [], key: 'b9p3p', data: {}, text: '3. Click the checkbox next to the users that are no longer approved for the group. Click Deny. Give the reason. Click Submit.', depth: 0}, {key: '4lboo', text: ' ', entityRanges: [{length: 1, offset: 0, key: 7}], data: {}, depth: 0, inlineStyleRanges: [], type: 'atomic'}, {type: 'unstyled', entityRanges: [], inlineStyleRanges: [], depth: 0, text: 'If a user is denied you may not see the change right away. They will be removed when the review period has ended or when an administrator stops the review.', key: '9kc00', data: {}}, {type: 'unstyled', entityRanges: [], data: {}, depth: 0, text: 'How to setup access review on roles', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 35}, {style: 'bgcolor-rgb(255,255,255)', length: 35, offset: 0}, {offset: 0, style: 'fontsize-32', length: 35}, {length: 35, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}], key: '89d85'}, {text: 'Configuring a role for access review is a bit different. The options are still about the same but there located in different spots. This time, let\'s configure the admins to review their access. In short, we\'ll be removing admin roles from any user who doesn\'t respond. We\'ll also be configuring the review to happen every 7 days.', key: 'aho96', entityRanges: [], inlineStyleRanges: [{length: 329, style: 'color-rgb(33,37,41)', offset: 0}, {length: 329, style: 'bgcolor-rgb(255,255,255)', offset: 0}, {length: 329, style: 'fontsize-16', offset: 0}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0, length: 329}], depth: 0, data: {}, type: 'unstyled'}, {key: '4fd2p', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 106, offset: 0}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 106}, {offset: 0, length: 106, style: 'fontsize-16'}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 106, offset: 0}, {length: 35, offset: 13, style: 'BOLD'}, {style: 'BOLD', length: 12, offset: 51}, {length: 39, style: 'BOLD', offset: 66}], text: '1. Log in to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.', type: 'unstyled', entityRanges: [], data: {}, depth: 0}, {inlineStyleRanges: [], type: 'atomic', entityRanges: [{length: 1, offset: 0, key: 8}], depth: 0, data: {}, text: ' ', key: 'd6pjo'}, {text: '2. Click Azure AD roles > Access reviews > New.', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 14}, {style: 'BOLD', length: 14, offset: 26}, {length: 3, style: 'BOLD', offset: 43}], entityRanges: [], depth: 0, data: {}, type: 'unstyled', key: '62euq'}, {inlineStyleRanges: [], entityRanges: [{offset: 0, key: 9, length: 1}], data: {}, text: ' ', type: 'atomic', key: 'dq33m', depth: 0}, {depth: 0, entityRanges: [], text: '3. Set the name to "Review User Admin Rights". Set the Frequency to Weekly. Set the duration to 3 days. Set the End to Never. Click Select privileged role(s). Search for User Administrator. Click User Administrator. Click Done.', type: 'unstyled', inlineStyleRanges: [{length: 4, offset: 11, style: 'BOLD'}, {style: 'BOLD', offset: 20, length: 24}, {style: 'BOLD', offset: 55, length: 9}, {style: 'BOLD', offset: 68, length: 6}, {style: 'BOLD', length: 8, offset: 84}, {style: 'BOLD', length: 6, offset: 96}, {style: 'BOLD', length: 4, offset: 112}, {style: 'BOLD', length: 5, offset: 119}, {style: 'BOLD', length: 25, offset: 132}, {style: 'BOLD', length: 7, offset: 159}, {style: 'BOLD', offset: 170, length: 18}, {length: 18, offset: 196, style: 'BOLD'}, {offset: 222, length: 4, style: 'BOLD'}], data: {}, key: 'aknq3'}, {data: {}, text: ' ', entityRanges: [{key: 10, length: 1, offset: 0}], depth: 0, inlineStyleRanges: [], key: '329cl', type: 'atomic'}, {key: 'fcj70', depth: 0, data: {}, text: '4. Expand the Upon completion settings. Set Auto apply results to resource to Enable. Set If reviewers don\'t respond select Remove access.', type: 'unstyled', entityRanges: [], inlineStyleRanges: [{offset: 14, length: 24, style: 'BOLD'}, {offset: 44, length: 30, style: 'BOLD'}, {offset: 78, length: 6, style: 'BOLD'}, {offset: 90, length: 26, style: 'BOLD'}, {style: 'BOLD', length: 13, offset: 124}]}, {depth: 0, data: {}, inlineStyleRanges: [{offset: 10, style: 'BOLD', length: 17}, {length: 26, offset: 33, style: 'BOLD'}, {style: 'BOLD', offset: 63, length: 7}], type: 'unstyled', entityRanges: [], key: '27ess', text: '5. Expand Advanced settings. Set Require reason on approval to Disable.'}, {key: '63tho', depth: 0, data: {}, text: '6. Click Start.', type: 'unstyled', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 5}], entityRanges: []}, {depth: 0, entityRanges: [{length: 1, key: 11, offset: 0}], data: {}, inlineStyleRanges: [], type: 'atomic', key: '6bbu1', text: ' '}, {key: '8uuek', depth: 0, text: 'How to manage access review on roles', entityRanges: [], inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 36, offset: 0}, {style: 'bgcolor-rgb(255,255,255)', length: 36, offset: 0}, {style: 'fontsize-32', offset: 0, length: 36}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 36, offset: 0}], type: 'unstyled', data: {}}, {inlineStyleRanges: [{length: 241, offset: 0, style: 'color-rgb(33,37,41)'}, {offset: 0, style: 'bgcolor-rgb(255,255,255)', length: 241}, {offset: 0, style: 'fontsize-16', length: 241}, {offset: 0, length: 241, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], type: 'unstyled', key: '1s0gv', depth: 0, data: {}, entityRanges: [], text: 'So now you\'re set up so admins have to approve their role access every 7 days. So what does that look like? Well, first they\'ll receive a similar email to the one above. Then they\'ll be directed to a site where they can approve their access.'}, {inlineStyleRanges: [], type: 'atomic', data: {}, key: '48oe2', text: ' ', depth: 0, entityRanges: [{length: 1, offset: 0, key: 12}]}, {key: '8sulj', text: '', type: 'unstyled', entityRanges: [], depth: 0, data: {}, inlineStyleRanges: []}], entityMap: {0: {type: 'IMAGE', data: {src: 'https://i.ibb.co/Xsxvz6Z/new-access-review.png', alt: 'New access review', alignment: 'none', height: 'auto', width: 'auto'}, mutability: 'MUTABLE'}, 1: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/vVKtWPh/access-review-review-type3.png', height: 'auto', alignment: 'none', width: 'auto', alt: 'Access Review set the review type'}}, 2: {data: {width: 'auto', src: 'https://i.ibb.co/8z2hzWH/access-review-reviews.png', height: 'auto', alt: 'Access review reviews', alignment: 'none'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/QXMkkv8/access-review-settings.png', alignment: 'none', height: 'auto', width: 'auto', alt: 'set the access review settings'}}, 4: {type: 'IMAGE', data: {alt: 'Review access review settings', height: 'auto', alignment: 'none', src: 'https://i.ibb.co/2N1VQMQ/review-access-review-settings.png', width: 'auto'}, mutability: 'MUTABLE'}, 5: {type: 'IMAGE', data: {width: 'auto', alignment: 'none', alt: 'Action required access review email', height: 'auto', src: 'https://i.ibb.co/qMnYy61/action-required-access-review-email.png'}, mutability: 'MUTABLE'}, 6: {mutability: 'MUTABLE', type: 'IMAGE', data: {width: 'auto', alignment: 'none', height: 'auto', src: 'https://i.ibb.co/vX5Vxms/Approve-users.png', alt: 'Approve users in access review'}}, 7: {data: {alignment: 'none', width: 'auto', height: 'auto', src: 'https://i.ibb.co/qNpQSRW/deny-users.png', alt: 'Deny users group access using access review'}, type: 'IMAGE', mutability: 'MUTABLE'}, 8: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', src: 'https://i.ibb.co/yPtV1h3/access-azure-ad-privileged-identity-management.png', width: 'auto', alt: 'Access Azure AD Privileged Identity Management', alignment: 'none'}}, 9: {data: {alt: 'Access review for roles', alignment: 'none', width: 'auto', height: 'auto', src: 'https://i.ibb.co/SfjV9P0/access-review-for-roles.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {type: 'IMAGE', mutability: 'MUTABLE', data: {width: 'auto', height: 'auto', alt: 'Setup access rights for admin roles', src: 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png', alignment: 'none'}}, 11: {mutability: 'MUTABLE', data: {height: 'auto', alignment: 'none', width: 'auto', alt: 'upon completion settings in access review', src: 'https://i.ibb.co/kBM9K3f/setup-access-review-for-admin-roles.png'}, type: 'IMAGE'}, 12: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Approve access review for role', alignment: 'none', height: 'auto', width: 'auto', src: 'https://i.ibb.co/ggTMpH5/Access-review-approve-role.png'}}}}, featuredImage: 'https://i.ibb.co/Xsxvz6Z/new-access-review.png', description: 'With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization\'s data from personal devices and can even invite guests to collaborate.', slug: 'Automating-Access-Review-in-Microsoft-365-rK48f6iM2', sectionId: 'AFV_acckJ', publish: true, type: 'article', title: 'Automating Access Review in Microsoft 365'},
      nextContentSlug: 'Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s',
      previousContentSlug: 'Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ',
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
                <div><p>With Microsoft 365 access to your data is in motion unlike it has been before. Users can access your organization's data from personal devices and can even invite guests to collaborate. With this free-flowing access, productivity receives a big boost but so do the challenges around security. How do we make sure there aren't stale user accounts that have access to your environment that is no longer in use? Let's take another example. Let's say you have a user on the IT help desk. He has limited administrative rights to your Microsoft 365 tenant just like he's supposed to. Then he gets a transfer/promotion. Now he's in marketing. How do you make sure his administrative access has been removed?</p>
                  <p>The answer is simple, access review. With Azure AD access reviews you can review group memberships, access to applications, and role members. You can configure access reviews to happen regularly to make sure only the right people have access.</p>
                  <h2>What licenses are required?</h2>
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
