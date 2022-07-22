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
      path: '/course/ms-500/learn/Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s',
      article: {sectionId: 'AFV_acckJ', slug: 'Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s', images: ['https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', 'https://i.ibb.co/mtw4673/PIM-Add-Assignments.png', 'https://i.ibb.co/MGjzT0Q/add-user-assignments.png', 'https://i.ibb.co/dcb6XFN/Activate-a-Role.png', 'https://i.ibb.co/2d73qCQ/continue.png', 'https://i.ibb.co/ZxxcJW0/activate-role.png', 'https://i.ibb.co/XzvVpkv/activate-role.png', 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', 'https://i.ibb.co/svCt0jy/PIM-assignments.png', 'https://i.ibb.co/t37zJqS/eligible-assignments.png', 'https://i.ibb.co/7btbR3M/active-pim-assignements.png', 'https://i.ibb.co/7btbR3M/active-pim-assignements.png', 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', 'https://i.ibb.co/h1KfLY4/PIM-settings.png', 'https://i.ibb.co/G55hBDT/edit-PIM-role-assignments.png', 'https://i.ibb.co/2nWcPxZ/edit-PIM-role-settings.png', 'https://i.ibb.co/2nWcPxZ/edit-PIM-role-settings.png', 'https://i.ibb.co/DkrH6cb/edit-PIM-role-settings-assignments.png', 'https://i.ibb.co/C0MtxQc/approve-pim-role-assignment-email.png', 'https://i.ibb.co/6Nrtpt9/approve-pim-role-assignment.png', 'https://i.ibb.co/GkpLRJq/approve-request-justification.png', 'https://i.ibb.co/1r6Sv3c/edit-PIM-role-settings-assignments.png', 'https://i.ibb.co/pJdHDkz/Edit-role-settings-notifications.png'], article: {blocks: [{text: 'Up until now, we\'ve worked with permanent admin role assignments. Essentially, the user account is an admin until the user account is removed from the admin role. But there\'s another option. Just in time privileged access. Microsoft calls this Privileged Identity Management (PIM). With PIM users only have admin roles for a limited time. And before they activate the admin role they can be required to get approval.', type: 'unstyled', inlineStyleRanges: [], data: {}, entityRanges: [], depth: 0, key: 'bajq4'}, {type: 'header-two', entityRanges: [], text: 'Licenses required', key: '6kgn9', depth: 0, data: {}, inlineStyleRanges: []}, {key: 'bc2cu', data: {}, inlineStyleRanges: [], text: 'First things first. What licenses are required to use privileged identity management? You\'ll need an Azure AD Premium P2 license. It\'s also included in the Enterprise Mobility + Security (EMS) E5 license.', type: 'unstyled', depth: 0, entityRanges: []}, {depth: 0, type: 'header-two', key: 'eth4v', inlineStyleRanges: [], data: {}, entityRanges: [], text: 'Assign a role'}, {key: '43gj9', depth: 0, inlineStyleRanges: [], text: 'Now let\'s assign a role using PIM. By default, the role can only be active for 8 hours. So let\'s give a user a permanent role assignment.', type: 'unstyled', data: {}, entityRanges: []}, {data: {}, text: '1. Go to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.', key: '2ieu8', type: 'unstyled', entityRanges: [], inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 35}, {style: 'BOLD', length: 12, offset: 47}, {length: 39, style: 'BOLD', offset: 62}], depth: 0}, {text: ' ', inlineStyleRanges: [], depth: 0, data: {}, type: 'atomic', key: 'bi8jn', entityRanges: [{length: 1, offset: 0, key: 0}]}, {key: 'et3sg', inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}, {length: 11, style: 'BOLD', offset: 26}, {offset: 40, length: 15, style: 'BOLD'}], text: '2. Click Azure AD roles > Assignments > Add assignments.', data: {}, type: 'unstyled', depth: 0, entityRanges: []}, {key: 'e0ate', inlineStyleRanges: [], entityRanges: [{key: 1, length: 1, offset: 0}], depth: 0, text: ' ', type: 'atomic', data: {}}, {data: {}, inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}, {length: 20, style: 'BOLD', offset: 28}, {length: 18, offset: 56, style: 'BOLD'}, {length: 5, offset: 87, style: 'BOLD'}, {offset: 115, style: 'BOLD', length: 6}, {length: 4, offset: 129, style: 'BOLD'}], type: 'unstyled', entityRanges: [], text: '3. Under Select role select Global Administrator. Click No member selected. Select the user you want to add. Click Select. Click Next.', depth: 0, key: 'd3slc'}, {entityRanges: [{key: 2, length: 1, offset: 0}], data: {}, key: 'bam9n', inlineStyleRanges: [], text: ' ', type: 'atomic', depth: 0}, {key: 'o5bp', inlineStyleRanges: [{length: 6, style: 'BOLD', offset: 9}], depth: 0, data: {}, entityRanges: [], text: '4. Click Assign.', type: 'unstyled'}, {type: 'header-two', entityRanges: [], data: {}, inlineStyleRanges: [], depth: 0, text: 'How to activate a role assignment', key: '4m9k8'}, {key: 'a253m', type: 'unstyled', depth: 0, data: {}, text: 'Once you assign a user as an eligible role the user will receive the following email:', inlineStyleRanges: [], entityRanges: []}, {text: ' ', inlineStyleRanges: [], type: 'atomic', entityRanges: [{offset: 0, key: 3, length: 1}], depth: 0, key: '6rljl', data: {}}, {entityRanges: [], inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 21}], data: {}, text: '1. Click View or activate role.', type: 'unstyled', key: 'bg93m', depth: 0}, {key: 'eup6h', type: 'unstyled', text: '2. Click Activate.', entityRanges: [], data: {}, depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 8, offset: 9}]}, {key: 'bn43e', entityRanges: [], data: {}, inlineStyleRanges: [{offset: 48, style: 'BOLD', length: 8}], text: '3. If additional verification is required click continue. Finish the authentication.', type: 'unstyled', depth: 0}, {type: 'atomic', data: {}, depth: 0, text: ' ', key: 'r95r', entityRanges: [{key: 4, offset: 0, length: 1}], inlineStyleRanges: []}, {entityRanges: [], inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 6}, {offset: 23, length: 8, style: 'BOLD'}], text: '4. Set a reason. Click Activate.', depth: 0, key: '9eu6o', type: 'unstyled', data: {}}, {key: '62qtv', entityRanges: [{offset: 0, key: 5, length: 1}], inlineStyleRanges: [], text: ' ', type: 'atomic', depth: 0, data: {}}, {data: {}, inlineStyleRanges: [], text: 'Review role assignments', key: '7thu2', depth: 0, type: 'header-two', entityRanges: []}, {entityRanges: [], depth: 0, text: 'As an admin, you may need to review who\'s assigned what roles. Let\'s take a look.', data: {}, inlineStyleRanges: [], type: 'unstyled', key: 'aakkc'}, {type: 'unstyled', key: '5sq6d', entityRanges: [], text: '1. Go to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.', data: {}, depth: 0, inlineStyleRanges: [{offset: 3, style: 'color-rgb(33,37,41)', length: 99}, {length: 99, offset: 3, style: 'bgcolor-rgb(255,255,255)'}, {style: 'fontsize-16', offset: 3, length: 99}, {offset: 3, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 99}, {length: 35, style: 'BOLD', offset: 9}, {length: 12, offset: 47, style: 'BOLD'}, {style: 'BOLD', offset: 62, length: 39}]}, {type: 'atomic', depth: 0, entityRanges: [{length: 1, offset: 0, key: 6}], inlineStyleRanges: [], key: 'ertsa', text: ' ', data: {}}, {inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 14}, {style: 'BOLD', length: 11, offset: 26}], entityRanges: [], type: 'unstyled', key: '54gf', depth: 0, text: '2. Click Azure AD roles > Assignments.', data: {}}, {inlineStyleRanges: [], type: 'atomic', text: ' ', key: '3ed4v', data: {}, entityRanges: [{length: 1, offset: 0, key: 7}], depth: 0}, {key: 'dimgd', data: {}, depth: 0, text: 'Under eligible assignments, you\'ll see the user you added. These users have a role assigned through PIM that needs to be activated.', entityRanges: [], type: 'unstyled', inlineStyleRanges: []}, {data: {}, inlineStyleRanges: [], text: ' ', entityRanges: [{length: 1, offset: 0, key: 8}], key: '46ksa', type: 'atomic', depth: 0}, {depth: 0, entityRanges: [], text: 'Click Active assignments. These users currently have roles. If you look under state you\'ll see two different states: "Assigned" and "Active". Assigned users have the role assigned to them permanently. They\'ll always have admin rights. Activated roles show users that are eligible for assignment and have activated the role.', inlineStyleRanges: [{length: 18, offset: 6, style: 'BOLD'}], key: '39ga7', type: 'unstyled', data: {}}, {entityRanges: [{length: 1, key: 9, offset: 0}], key: '1ogi4', type: 'atomic', depth: 0, data: {}, inlineStyleRanges: [], text: ' '}, {key: 'd5v50', text: 'Update Settings', depth: 0, entityRanges: [], data: {}, type: 'header-two', inlineStyleRanges: []}, {entityRanges: [], inlineStyleRanges: [], depth: 0, text: 'So now we\'ve configured a user and we know how they can activate the admin role. But we\'ve got a problem. The activation should only be 1 hour and another admin needs to approve the activation before the role is activated. Next, we\'ll disable the permanent assignment of the role. Finally, we\'ll make sure an admin is notified when the PIM role is activated.', type: 'unstyled', key: 'dsmcb', data: {}}, {entityRanges: [], data: {}, key: '9se3f', depth: 0, inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 102, offset: 0}, {style: 'bgcolor-rgb(255,255,255)', length: 102, offset: 0}, {length: 102, style: 'fontsize-16', offset: 0}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 102, offset: 0}, {offset: 9, style: 'BOLD', length: 35}, {length: 12, offset: 47, style: 'BOLD'}, {offset: 62, style: 'BOLD', length: 39}], type: 'unstyled', text: '1. Go to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.'}, {data: {}, key: '5dqav', type: 'atomic', inlineStyleRanges: [], text: ' ', depth: 0, entityRanges: [{length: 1, offset: 0, key: 10}]}, {key: 'hfv4', text: '2. Click Azure AD roles > Assignments > Settings.', inlineStyleRanges: [{style: 'BOLD', length: 15, offset: 9}, {offset: 26, length: 11, style: 'BOLD'}, {style: 'BOLD', length: 8, offset: 40}], entityRanges: [], type: 'unstyled', data: {}, depth: 0}, {inlineStyleRanges: [], text: ' ', type: 'atomic', entityRanges: [{key: 11, length: 1, offset: 0}], key: 'ei0mr', depth: 0, data: {}}, {data: {}, text: '3. Click Application Administrator > Edit.', type: 'unstyled', entityRanges: [], key: '3b3s5', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 25}, {offset: 37, style: 'BOLD', length: 4}], depth: 0}, {entityRanges: [{key: 12, length: 1, offset: 0}], depth: 0, type: 'atomic', inlineStyleRanges: [], text: ' ', key: '59j6s', data: {}}, {data: {}, depth: 0, text: '4. Set the Activation maximum duration (hours) to 1. Click Require approval to activate. Click No approver selected. Select the admin to approve. Click Select. Click Next: Assignment.', inlineStyleRanges: [{offset: 11, style: 'BOLD', length: 36}, {offset: 50, style: 'BOLD', length: 1}, {length: 28, offset: 59, style: 'BOLD'}, {length: 20, style: 'BOLD', offset: 95}, {length: 6, offset: 117, style: 'BOLD'}, {length: 5, style: 'BOLD', offset: 128}, {offset: 152, style: 'BOLD', length: 6}, {style: 'BOLD', offset: 166, length: 16}], key: '4s6lf', entityRanges: [], type: 'unstyled'}, {depth: 0, key: '8ok9o', inlineStyleRanges: [], entityRanges: [{key: 13, length: 1, offset: 0}], text: ' ', type: 'atomic', data: {}}, {entityRanges: [], text: '5. Uncheck Allow permanent active assignment. Click Next: Notification.', key: 'eh9sc', inlineStyleRanges: [{style: 'BOLD', offset: 11, length: 33}, {style: 'BOLD', length: 18, offset: 52}], data: {}, depth: 0, type: 'unstyled'}, {data: {}, depth: 0, inlineStyleRanges: [], text: ' ', type: 'atomic', entityRanges: [{offset: 0, length: 1, key: 14}], key: 'cqoda'}, {data: {}, depth: 0, text: '6.  Set an email address in the Role activation alert additional recipients. Click Update.', entityRanges: [{length: 1, key: 15, offset: 3}], key: '3jaqk', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', offset: 11, length: 13}, {length: 43, style: 'BOLD', offset: 32}, {length: 6, offset: 83, style: 'BOLD'}]}, {data: {}, entityRanges: [{length: 1, key: 16, offset: 0}], depth: 0, key: 'aik7l', inlineStyleRanges: [], text: ' ', type: 'atomic'}, {entityRanges: [], key: 'a8044', inlineStyleRanges: [], depth: 0, data: {}, type: 'header-two', text: 'Who can approve the admin role assignment?'}, {type: 'unstyled', key: '7e4hm', text: 'Only global administrators and privileged role administrators can approve the admin role assignments. Let\'s try it now. Walk through the "Assign a role" steps above but this time grant someone the application administrator role. Then login with the user you made eligible for the role and activate the role following the "How to activate a role assignment steps above".', entityRanges: [], depth: 0, data: {}, inlineStyleRanges: []}, {key: 'cs53r', entityRanges: [], depth: 0, type: 'header-two', inlineStyleRanges: [], data: {}, text: 'How to approve activation of a role'}, {key: '8rop7', depth: 0, data: {}, text: '1. Once a user requests a role the approver will receive an email with the subject "PIM: Review User\'s request to activate the Application Administrator role". In that email, click Approve or deny request.', type: 'unstyled', entityRanges: [], inlineStyleRanges: [{style: 'BOLD', length: 23, offset: 181}]}, {data: {}, type: 'atomic', key: '12a29', depth: 0, text: ' ', entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: []}, {key: '4b45i', text: '2. Review the request then click the checkbox next to the role. Click Approve.', entityRanges: [], type: 'unstyled', data: {}, depth: 0, inlineStyleRanges: [{offset: 3, style: 'BOLD', length: 7}, {offset: 14, style: 'BOLD', length: 7}, {style: 'BOLD', length: 9, offset: 37}, {length: 7, style: 'BOLD', offset: 70}]}, {inlineStyleRanges: [], type: 'atomic', text: ' ', depth: 0, data: {}, key: '9ir5', entityRanges: [{length: 1, key: 18, offset: 0}]}, {depth: 0, inlineStyleRanges: [{offset: 10, style: 'BOLD', length: 13}, {style: 'BOLD', length: 7, offset: 34}], text: '3. Give a justification and click Confirm.', data: {}, type: 'unstyled', entityRanges: [], key: '57pdu'}, {key: '9m6a4', depth: 0, data: {}, entityRanges: [{key: 19, offset: 0, length: 1}], inlineStyleRanges: [], text: ' ', type: 'atomic'}, {entityRanges: [], key: 'ce8ot', inlineStyleRanges: [], type: 'unstyled', data: {}, depth: 0, text: ''}], entityMap: {0: {data: {width: 'auto', height: 'auto', src: 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', alt: 'How to open Azure AD PIM', alignment: 'none'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {type: 'IMAGE', data: {src: 'https://i.ibb.co/mtw4673/PIM-Add-Assignments.png', width: 'auto', alt: 'Add assignments in PIM', height: 'auto', alignment: 'none'}, mutability: 'MUTABLE'}, 2: {data: {alignment: 'none', src: 'https://i.ibb.co/MGjzT0Q/add-user-assignments.png', width: 'auto', alt: 'Add user assignments in PIM', height: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 3: {data: {width: 'auto', alt: 'Activate a PIM role', alignment: 'none', height: 'auto', src: 'https://i.ibb.co/dcb6XFN/Activate-a-Role.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {type: 'IMAGE', data: {alt: 'additional-verification-click-to-continue', width: 'auto', src: 'https://i.ibb.co/2d73qCQ/continue.png', height: 'auto', alignment: 'left'}, mutability: 'MUTABLE'}, 5: {mutability: 'MUTABLE', data: {height: 'auto', width: 'auto', alignment: 'none', alt: 'Activate a role', src: 'https://i.ibb.co/XzvVpkv/activate-role.png'}, type: 'IMAGE'}, 6: {data: {height: 'auto', alt: 'Azure AD PIM', width: 'auto', src: 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', alignment: 'none'}, type: 'IMAGE', mutability: 'MUTABLE'}, 7: {type: 'IMAGE', data: {alignment: 'none', alt: 'PIM assignments', width: 'auto', src: 'https://i.ibb.co/svCt0jy/PIM-assignments.png', height: 'auto'}, mutability: 'MUTABLE'}, 8: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', width: 'auto', alignment: 'left', src: 'https://i.ibb.co/t37zJqS/eligible-assignments.png', alt: 'Eligible assignements'}}, 9: {data: {width: 'auto', height: 'auto', src: 'https://i.ibb.co/7btbR3M/active-pim-assignements.png', alignment: 'none', alt: 'Active PIM Assignements'}, type: 'IMAGE', mutability: 'MUTABLE'}, 10: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Azure AD PIM roles', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', height: 'auto'}}, 11: {data: {alt: 'Open PIM settings', src: 'https://i.ibb.co/h1KfLY4/PIM-settings.png', width: 'auto', height: 'auto', alignment: 'none'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {width: 'auto', alignment: 'none', alt: 'Edit PIM role assignments', src: 'https://i.ibb.co/G55hBDT/edit-PIM-role-assignments.png', height: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', width: 'auto', height: 'auto', alt: 'Edit PIM role settings', src: 'https://i.ibb.co/2nWcPxZ/edit-PIM-role-settings.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 14: {type: 'IMAGE', mutability: 'MUTABLE', data: {width: 'auto', alt: 'Edit PIM role settings assignments', height: 'auto', src: 'https://i.ibb.co/1r6Sv3c/edit-PIM-role-settings-assignments.png', alignment: 'none'}}, 15: {data: {height: 'auto', width: 'auto', alignment: 'left', alt: 'Edit PIM role assignments', src: 'https://i.ibb.co/DkrH6cb/edit-PIM-role-settings-assignments.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 16: {data: {height: 'auto', alt: 'Edit role settings notifications', src: 'https://i.ibb.co/pJdHDkz/Edit-role-settings-notifications.png', width: 'auto', alignment: 'none'}, type: 'IMAGE', mutability: 'MUTABLE'}, 17: {data: {alignment: 'none', alt: 'Approve PIM role assignment email', width: 'auto', height: 'auto', src: 'https://i.ibb.co/C0MtxQc/approve-pim-role-assignment-email.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 18: {data: {alignment: 'left', alt: 'Approve the PIM role assignment', width: 'auto', height: 'auto', src: 'https://i.ibb.co/6Nrtpt9/approve-pim-role-assignment.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 19: {data: {width: 'auto', src: 'https://i.ibb.co/GkpLRJq/approve-request-justification.png', height: 'auto', alignment: 'none', alt: 'Approve request justification'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, type: 'article', featuredImage: 'https://i.ibb.co/dcb6XFN/Activate-a-Role.png', publish: true, description: 'Just in time privileged access. Microsoft calls this Privileged Identity Management (PIM). With PIM users only have admin roles for a limited time. And before they activate the admin role they can be required to get approval.', id: 'RHW1API2s', title: 'Just in time, approval and notification for admin roles in Microsoft 365', datePublished: '2022/5/26'},
      nextContentSlug: 'Whats-Microsoft-365-Defender-z8EMM9Eu_',
      previousContentSlug: 'Automating-Access-Review-in-Microsoft-365-rK48f6iM2',
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
                <div><p>Up until now, we've worked with permanent admin role assignments. Essentially, the user account is an admin until the user account is removed from the admin role. But there's another option. Just in time privileged access. Microsoft calls this Privileged Identity Management (PIM). With PIM users only have admin roles for a limited time. And before they activate the admin role they can be required to get approval.</p>
                  <h2>Licenses required</h2>
                  <p>First things first. What licenses are required to use privileged identity management? You'll need an Azure AD Premium P2 license. It's also included in the Enterprise Mobility + Security (EMS) E5 license.</p>
                  <h2>Assign a role</h2>
                  <p>Now let's assign a role using PIM. By default, the role can only be active for 8 hours. So let's give a user a permanent role assignment.</p>
                  <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong>.</p>
                  <div ><img src="https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png" alt="How to open Azure AD PIM" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Azure AD roles</strong> &gt; <strong>Assignments</strong> &gt; <strong>Add assignments</strong>.</p>
                  <div ><img src="https://i.ibb.co/mtw4673/PIM-Add-Assignments.png" alt="Add assignments in PIM" style="height: auto;width: auto" /></div>
                  <p>3. Under <strong>Select role</strong> select <strong>Global Administrator</strong>. Click <strong>No member selected</strong>. Select the <strong>user </strong>you want to add. Click <strong>Select</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/MGjzT0Q/add-user-assignments.png" alt="Add user assignments in PIM" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Assign</strong>.</p>
                  <h2>How to activate a role assignment</h2>
                  <p>Once you assign a user as an eligible role the user will receive the following email:</p>
                  <div ><img src="https://i.ibb.co/dcb6XFN/Activate-a-Role.png" alt="Activate a PIM role" style="height: auto;width: auto" /></div>
                  <p>1. Click <strong>View or activate role</strong>.</p>
                  <p>2. Click <strong>Activate</strong>.</p>
                  <p>3. If additional verification is required click <strong>continue</strong>. Finish the authentication.</p>
                  <div ><img src="https://i.ibb.co/2d73qCQ/continue.png" alt="additional-verification-click-to-continue" style="height: auto;width: auto" /></div>
                  <p>4. Set a <strong>reason</strong>. Click <strong>Activate</strong>.</p>
                  <div ><img src="https://i.ibb.co/XzvVpkv/activate-role.png" alt="Activate a role" style="height: auto;width: auto" /></div>
                  <h2>Review role assignments</h2>
                  <p>As an admin, you may need to review who's assigned what roles. Let's take a look.</p>
                  <p>1. <span >Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png" alt="Azure AD PIM" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Azure AD roles</strong> &gt; <strong>Assignments</strong>.</p>
                  <div ><img src="https://i.ibb.co/svCt0jy/PIM-assignments.png" alt="PIM assignments" style="height: auto;width: auto" /></div>
                  <p>Under eligible assignments, you'll see the user you added. These users have a role assigned through PIM that needs to be activated.</p>
                  <div ><img src="https://i.ibb.co/t37zJqS/eligible-assignments.png" alt="Eligible assignements" style="height: auto;width: auto" /></div>
                  <p>Click <strong>Active assignments</strong>. These users currently have roles. If you look under state you'll see two different states: "Assigned" and "Active". Assigned users have the role assigned to them permanently. They'll always have admin rights. Activated roles show users that are eligible for assignment and have activated the role.</p>
                  <div ><img src="https://i.ibb.co/7btbR3M/active-pim-assignements.png" alt="Active PIM Assignements" style="height: auto;width: auto" /></div>
                  <h2>Update Settings</h2>
                  <p>So now we've configured a user and we know how they can activate the admin role. But we've got a problem. The activation should only be 1 hour and another admin needs to approve the activation before the role is activated. Next, we'll disable the permanent assignment of the role. Finally, we'll make sure an admin is notified when the PIM role is activated.</p>
                  <p><span >1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png" alt="Azure AD PIM roles" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Azure AD roles </strong>&gt; <strong>Assignments</strong> &gt; <strong>Settings</strong>.</p>
                  <div ><img src="https://i.ibb.co/h1KfLY4/PIM-settings.png" alt="Open PIM settings" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Application Administrator</strong> &gt; <strong>Edit</strong>.</p>
                  <div ><img src="https://i.ibb.co/G55hBDT/edit-PIM-role-assignments.png" alt="Edit PIM role assignments" style="height: auto;width: auto" /></div>
                  <p>4. Set the <strong>Activation maximum duration (hours) </strong>to <strong>1</strong>. Click <strong>Require approval to activate</strong>. Click <strong>No approver selected</strong>. <strong>Select</strong> the <strong>admin</strong> to approve. Click <strong>Select</strong>. Click <strong>Next: Assignment</strong>.</p>
                  <div ><img src="https://i.ibb.co/2nWcPxZ/edit-PIM-role-settings.png" alt="Edit PIM role settings" style="height: auto;width: auto" /></div>
                  <p>5. Uncheck <strong>Allow permanent active assignment</strong>. Click <strong>Next: Notification</strong>.</p>
                  <div ><img src="https://i.ibb.co/1r6Sv3c/edit-PIM-role-settings-assignments.png" alt="Edit PIM role settings assignments" style="height: auto;width: auto" /></div>
                  <p>6. <div ><img src="https://i.ibb.co/DkrH6cb/edit-PIM-role-settings-assignments.png" alt="Edit PIM role assignments" style="height: auto;width: auto" /></div>Set an <strong>email address</strong> in the <strong>Role activation alert additional recipients</strong>. Click <strong>Update</strong>.</p>
                  <div ><img src="https://i.ibb.co/pJdHDkz/Edit-role-settings-notifications.png" alt="Edit role settings notifications" style="height: auto;width: auto" /></div>
                  <h2>Who can approve the admin role assignment?</h2>
                  <p>Only global administrators and privileged role administrators can approve the admin role assignments. Let's try it now. Walk through the "Assign a role" steps above but this time grant someone the application administrator role. Then login with the user you made eligible for the role and activate the role following the "How to activate a role assignment steps above".</p>
                  <h2>How to approve activation of a role</h2>
                  <p>1. Once a user requests a role the approver will receive an email with the subject "PIM: Review User's request to activate the Application Administrator role". In that email, click <strong>Approve or deny request</strong>.</p>
                  <div ><img src="https://i.ibb.co/C0MtxQc/approve-pim-role-assignment-email.png" alt="Approve PIM role assignment email" style="height: auto;width: auto" /></div>
                  <p>2. <strong>Review </strong>the <strong>request</strong> then click the <strong>checkbox </strong>next to the role. Click <strong>Approve</strong>.</p>
                  <div ><img src="https://i.ibb.co/6Nrtpt9/approve-pim-role-assignment.png" alt="Approve the PIM role assignment" style="height: auto;width: auto" /></div>
                  <p>3. Give a <strong>justification</strong> and click <strong>Confirm</strong>.</p>
                  <div ><img src="https://i.ibb.co/GkpLRJq/approve-request-justification.png" alt="Approve request justification" style="height: auto;width: auto" /></div>
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
