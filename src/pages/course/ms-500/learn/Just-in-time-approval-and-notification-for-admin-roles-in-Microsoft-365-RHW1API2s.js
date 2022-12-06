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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bajq4', text: 'Up until now, we\'ve worked with permanent admin role assignments. Essentially, the user account is an admin until the user account is removed from the admin role. But there\'s another option. Just in time privileged access. Microsoft calls this Privileged Identity Management (PIM). With PIM users only have admin roles for a limited time. And before they activate the admin role they can be required to get approval.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6kgn9', text: 'Licenses required', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bc2cu', text: 'First things first. What licenses are required to use privileged identity management? You\'ll need an Azure AD Premium P2 license. It\'s also included in the Enterprise Mobility + Security (EMS) E5 license.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eth4v', text: 'Assign a role', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '43gj9', text: 'Now let\'s assign a role using PIM. By default, the role can only be active for 8 hours. So let\'s give a user a permanent role assignment.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 9, style: 'BOLD'}, {length: 12, offset: 47, style: 'BOLD'}, {length: 39, offset: 62, style: 'BOLD'}], key: '2ieu8', text: '1. Go to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bi8jn', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}, {length: 11, offset: 26, style: 'BOLD'}, {length: 15, offset: 40, style: 'BOLD'}], key: 'et3sg', text: '2. Click Azure AD roles > Assignments > Add assignments.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e0ate', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}, {length: 20, offset: 28, style: 'BOLD'}, {length: 18, offset: 56, style: 'BOLD'}, {length: 5, offset: 87, style: 'BOLD'}, {length: 6, offset: 115, style: 'BOLD'}, {length: 4, offset: 129, style: 'BOLD'}], key: 'd3slc', text: '3. Under Select role select Global Administrator. Click No member selected. Select the user you want to add. Click Select. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bam9n', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}], key: 'o5bp', text: '4. Click Assign.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4m9k8', text: 'How to activate a role assignment', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a253m', text: 'Once you assign a user an eligible role the user will receive the following email:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '6rljl', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}], key: 'bg93m', text: '1. Click View or activate role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 9, style: 'BOLD'}], key: 'eup6h', text: '2. Click Activate.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 48, style: 'BOLD'}], key: 'bn43e', text: '3. If additional verification is required click continue. Finish the authentication.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'r95r', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}, {length: 8, offset: 23, style: 'BOLD'}], key: '9eu6o', text: '4. Set a reason. Click Activate.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '62qtv', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7thu2', text: 'Review role assignments', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aakkc', text: 'As an admin, you may need to review who\'s assigned what roles. Let\'s take a look.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 99, offset: 3, style: 'color-rgb(33,37,41)'}, {length: 99, offset: 3, style: 'bgcolor-rgb(255,255,255)'}, {length: 99, offset: 3, style: 'fontsize-16'}, {length: 99, offset: 3, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 35, offset: 9, style: 'BOLD'}, {length: 12, offset: 47, style: 'BOLD'}, {length: 39, offset: 62, style: 'BOLD'}], key: '5sq6d', text: '1. Go to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ertsa', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}, {length: 11, offset: 26, style: 'BOLD'}], key: '54gf', text: '2. Click Azure AD roles > Assignments.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '3ed4v', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dimgd', text: 'Under eligible assignments, you\'ll see the user you added. These users have a role assigned through PIM that needs to be activated.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '46ksa', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 6, style: 'BOLD'}], key: '39ga7', text: 'Click Active assignments. These users currently have roles. If you look under state you\'ll see two different states: "Assigned" and "Active". Assigned users have the role assigned to them permanently. They\'ll always have admin rights. Activated roles show users that are eligible for assignment and have activated the role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '1ogi4', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd5v50', text: 'Update Settings', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dsmcb', text: 'So now we\'ve configured a user and we know how they can activate the admin role. But we\'ve got a problem. The activation should only be 1 hour and another admin needs to approve the activation before the role is activated. Next, we\'ll disable the permanent assignment of the role. Finally, we\'ll make sure an admin is notified when the PIM role is activated.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 102, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 102, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 102, offset: 0, style: 'fontsize-16'}, {length: 102, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 35, offset: 9, style: 'BOLD'}, {length: 12, offset: 47, style: 'BOLD'}, {length: 39, offset: 62, style: 'BOLD'}], key: '9se3f', text: '1. Go to Azure Active Directory admin center > All services > Azure AD Privileged Identity Management.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '5dqav', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 15, offset: 9, style: 'BOLD'}, {length: 11, offset: 26, style: 'BOLD'}, {length: 8, offset: 40, style: 'BOLD'}], key: 'hfv4', text: '2. Click Azure AD roles > Assignments > Settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ei0mr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 25, offset: 9, style: 'BOLD'}, {length: 4, offset: 37, style: 'BOLD'}], key: '3b3s5', text: '3. Click Application Administrator > Edit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '59j6s', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 36, offset: 11, style: 'BOLD'}, {length: 1, offset: 50, style: 'BOLD'}, {length: 28, offset: 59, style: 'BOLD'}, {length: 20, offset: 95, style: 'BOLD'}, {length: 6, offset: 117, style: 'BOLD'}, {length: 5, offset: 128, style: 'BOLD'}, {length: 6, offset: 152, style: 'BOLD'}, {length: 16, offset: 166, style: 'BOLD'}], key: '4s6lf', text: '4. Set the Activation maximum duration (hours) to 1. Click Require approval to activate. Click No approver selected. Select the admin to approve. Click Select. Click Next: Assignment.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '8ok9o', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 33, offset: 11, style: 'BOLD'}, {length: 18, offset: 52, style: 'BOLD'}], key: 'eh9sc', text: '5. Uncheck Allow permanent active assignment. Click Next: Notification.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cqoda', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 10, style: 'BOLD'}, {length: 43, offset: 31, style: 'BOLD'}, {length: 6, offset: 82, style: 'BOLD'}], key: '3jaqk', text: '6. Set an email address in the Role activation alert additional recipients. Click Update.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a8044', text: 'Who can approve the admin role assignment?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7e4hm', text: 'Only global administrators and privileged role administrators can approve the admin role assignments. Let\'s try it now. Walk through the "Assign a role" steps above but this time grant someone the application administrator role. Then login with the user you made eligible for the role and activate the role following the "How to activate a role assignment steps above".', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cs53r', text: 'How to approve activation of a role', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 23, offset: 181, style: 'BOLD'}], key: '8rop7', text: '1. Once a user requests a role the approver will receive an email with the subject "PIM: Review User\'s request to activate the Application Administrator role". In that email, click Approve or deny request.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: '12a29', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 3, style: 'BOLD'}, {length: 7, offset: 14, style: 'BOLD'}, {length: 9, offset: 37, style: 'BOLD'}, {length: 7, offset: 70, style: 'BOLD'}], key: '4b45i', text: '2. Review the request then click the checkbox next to the role. Click Approve.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '9ir5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 10, style: 'BOLD'}, {length: 7, offset: 34, style: 'BOLD'}], key: '57pdu', text: '3. Give a justification and click Confirm.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: '9m6a4', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ce8ot', text: '', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'How to open Azure AD PIM', height: 'auto', src: 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'none', alt: 'Add assignments in PIM', height: 'auto', src: 'https://i.ibb.co/mtw4673/PIM-Add-Assignments.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Azure AD PIM roles', height: 'auto', src: 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Open PIM settings', height: 'auto', src: 'https://i.ibb.co/h1KfLY4/PIM-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Edit PIM role assignments', height: 'auto', src: 'https://i.ibb.co/G55hBDT/edit-PIM-role-assignments.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Edit PIM role settings', height: 'auto', src: 'https://i.ibb.co/2nWcPxZ/edit-PIM-role-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Edit PIM role settings assignments', height: 'auto', src: 'https://i.ibb.co/1r6Sv3c/edit-PIM-role-settings-assignments.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'Approve PIM role assignment email', height: 'auto', src: 'https://i.ibb.co/C0MtxQc/approve-pim-role-assignment-email.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {alignment: 'left', alt: 'Approve the PIM role assignment', height: 'auto', src: 'https://i.ibb.co/6Nrtpt9/approve-pim-role-assignment.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Approve request justification', height: 'auto', src: 'https://i.ibb.co/GkpLRJq/approve-request-justification.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'left', alt: 'Approve the PIM role assignment', height: 'auto', src: 'https://i.ibb.co/6Nrtpt9/approve-pim-role-assignment.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alignment: 'none', alt: 'Approve request justification', height: 'auto', src: 'https://i.ibb.co/GkpLRJq/approve-request-justification.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Add user assignments in PIM', height: 'auto', src: 'https://i.ibb.co/MGjzT0Q/add-user-assignments.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Activate a PIM role', height: 'auto', src: 'https://i.ibb.co/dcb6XFN/Activate-a-Role.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'left', alt: 'additional-verification-click-to-continue', height: 'auto', src: 'https://i.ibb.co/2d73qCQ/continue.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Activate a role', height: 'auto', src: 'https://i.ibb.co/XzvVpkv/activate-role.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Azure AD PIM', height: 'auto', src: 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'PIM assignments', height: 'auto', src: 'https://i.ibb.co/svCt0jy/PIM-assignments.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'left', alt: 'Eligible assignements', height: 'auto', src: 'https://i.ibb.co/t37zJqS/eligible-assignments.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Active PIM Assignements', height: 'auto', src: 'https://i.ibb.co/7btbR3M/active-pim-assignements.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Just in time privileged access. Microsoft calls this Privileged Identity Management (PIM). With PIM users only have admin roles for a limited time. And before they activate the admin role they can be required to get approval.', featuredImage: 'https://i.ibb.co/dcb6XFN/Activate-a-Role.png', id: 'RHW1API2s', images: ['https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', 'https://i.ibb.co/mtw4673/PIM-Add-Assignments.png', 'https://i.ibb.co/MGjzT0Q/add-user-assignments.png', 'https://i.ibb.co/dcb6XFN/Activate-a-Role.png', 'https://i.ibb.co/2d73qCQ/continue.png', 'https://i.ibb.co/ZxxcJW0/activate-role.png', 'https://i.ibb.co/XzvVpkv/activate-role.png', 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', 'https://i.ibb.co/svCt0jy/PIM-assignments.png', 'https://i.ibb.co/t37zJqS/eligible-assignments.png', 'https://i.ibb.co/7btbR3M/active-pim-assignements.png', 'https://i.ibb.co/7btbR3M/active-pim-assignements.png', 'https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png', 'https://i.ibb.co/h1KfLY4/PIM-settings.png', 'https://i.ibb.co/G55hBDT/edit-PIM-role-assignments.png', 'https://i.ibb.co/2nWcPxZ/edit-PIM-role-settings.png', 'https://i.ibb.co/2nWcPxZ/edit-PIM-role-settings.png', 'https://i.ibb.co/DkrH6cb/edit-PIM-role-settings-assignments.png', 'https://i.ibb.co/C0MtxQc/approve-pim-role-assignment-email.png', 'https://i.ibb.co/6Nrtpt9/approve-pim-role-assignment.png', 'https://i.ibb.co/GkpLRJq/approve-request-justification.png', 'https://i.ibb.co/1r6Sv3c/edit-PIM-role-settings-assignments.png', 'https://i.ibb.co/pJdHDkz/Edit-role-settings-notifications.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s', title: 'Just in time, approval and notification for admin roles in Microsoft 365', type: 'article'},
      nextContentSlug: 'test/lockbox-risk-policies-access-review-and-jit-8awhclygp',
      previousContentSlug: 'learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2',
      hasCompletedContent: false,
      userAcct: {completedContent: []},
      decideHeight: '1000px'
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
    this.mountAds1()
    this.mountAds2()

    const setDecideHeight = (a) => {
      if (!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))))
        this.setState({decideHeight: '250px'})
    }

    setDecideHeight(navigator.userAgent||navigator.vendor||window.opera)
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
                  <div id="ld-534-9587" style={{height: this.state.decideHeight, overflow: 'hidden'}} />
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>Up until now, we've worked with permanent admin role assignments. Essentially, the user account is an admin until the user account is removed from the admin role. But there's another option. Just in time privileged access. Microsoft calls this Privileged Identity Management (PIM). With PIM users only have admin roles for a limited time. And before they activate the admin role they can be required to get approval.</p>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>Licenses required</h2>
                    <p>First things first. What licenses are required to use privileged identity management? You'll need an Azure AD Premium P2 license. It's also included in the Enterprise Mobility + Security (EMS) E5 license.</p>
                    <h2>Assign a role</h2>
                    <p>Now let's assign a role using PIM. By default, the role can only be active for 8 hours. So let's give a user a permanent role assignment.</p>
                    <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong>.</p>
                    <div ><img src="https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png" alt="How to open Azure AD PIM" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Azure AD roles</strong> &gt; <strong>Assignments</strong> &gt; <strong>Add assignments</strong>.</p>
                    <div ><img src="https://i.ibb.co/mtw4673/PIM-Add-Assignments.png" alt="Add assignments in PIM" height="auto" width="auto" /></div>
                    <p>3. Under <strong>Select role</strong> select <strong>Global Administrator</strong>. Click <strong>No member selected</strong>. Select the <strong>user </strong>you want to add. Click <strong>Select</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/MGjzT0Q/add-user-assignments.png" alt="Add user assignments in PIM" height="auto" width="auto" /></div>
                    <p>4. Click <strong>Assign</strong>.</p>
                    <h2>How to activate a role assignment</h2>
                    <p>Once you assign a user an eligible role the user will receive the following email:</p>
                    <div ><img src="https://i.ibb.co/dcb6XFN/Activate-a-Role.png" alt="Activate a PIM role" height="auto" width="auto" /></div>
                    <p>1. Click <strong>View or activate role</strong>.</p>
                    <p>2. Click <strong>Activate</strong>.</p>
                    <p>3. If additional verification is required click <strong>continue</strong>. Finish the authentication.</p>
                    <div ><img src="https://i.ibb.co/2d73qCQ/continue.png" alt="additional-verification-click-to-continue" height="auto" width="auto" /></div>
                    <p>4. Set a <strong>reason</strong>. Click <strong>Activate</strong>.</p>
                    <div ><img src="https://i.ibb.co/XzvVpkv/activate-role.png" alt="Activate a role" height="auto" width="auto" /></div>
                    <h2>Review role assignments</h2>
                    <p>As an admin, you may need to review who's assigned what roles. Let's take a look.</p>
                    <p>1. <span >Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png" alt="Azure AD PIM" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Azure AD roles</strong> &gt; <strong>Assignments</strong>.</p>
                    <div ><img src="https://i.ibb.co/svCt0jy/PIM-assignments.png" alt="PIM assignments" height="auto" width="auto" /></div>
                    <p>Under eligible assignments, you'll see the user you added. These users have a role assigned through PIM that needs to be activated.</p>
                    <div ><img src="https://i.ibb.co/t37zJqS/eligible-assignments.png" alt="Eligible assignements" height="auto" width="auto" /></div>
                    <p>Click <strong>Active assignments</strong>. These users currently have roles. If you look under state you'll see two different states: "Assigned" and "Active". Assigned users have the role assigned to them permanently. They'll always have admin rights. Activated roles show users that are eligible for assignment and have activated the role.</p>
                    <div ><img src="https://i.ibb.co/7btbR3M/active-pim-assignements.png" alt="Active PIM Assignements" height="auto" width="auto" /></div>
                    <h2>Update Settings</h2>
                    <p>So now we've configured a user and we know how they can activate the admin role. But we've got a problem. The activation should only be 1 hour and another admin needs to approve the activation before the role is activated. Next, we'll disable the permanent assignment of the role. Finally, we'll make sure an admin is notified when the PIM role is activated.</p>
                    <p><span >1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/g47sPD6/Azure-Ad-PIM.png" alt="Azure AD PIM roles" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Azure AD roles </strong>&gt; <strong>Assignments</strong> &gt; <strong>Settings</strong>.</p>
                    <div ><img src="https://i.ibb.co/h1KfLY4/PIM-settings.png" alt="Open PIM settings" height="auto" width="auto" /></div>
                    <p>3. Click <strong>Application Administrator</strong> &gt; <strong>Edit</strong>.</p>
                    <div ><img src="https://i.ibb.co/G55hBDT/edit-PIM-role-assignments.png" alt="Edit PIM role assignments" height="auto" width="auto" /></div>
                    <p>4. Set the <strong>Activation maximum duration (hours) </strong>to <strong>1</strong>. Click <strong>Require approval to activate</strong>. Click <strong>No approver selected</strong>. <strong>Select</strong> the <strong>admin</strong> to approve. Click <strong>Select</strong>. Click <strong>Next: Assignment</strong>.</p>
                    <div ><img src="https://i.ibb.co/2nWcPxZ/edit-PIM-role-settings.png" alt="Edit PIM role settings" height="auto" width="auto" /></div>
                    <p>5. Uncheck <strong>Allow permanent active assignment</strong>. Click <strong>Next: Notification</strong>.</p>
                    <div ><img src="https://i.ibb.co/1r6Sv3c/edit-PIM-role-settings-assignments.png" alt="Edit PIM role settings assignments" height="auto" width="auto" /></div>
                    <p>6. Set an <strong>email address</strong> in the <strong>Role activation alert additional recipients</strong>. Click <strong>Update</strong>.</p>
                    <h2>Who can approve the admin role assignment?</h2>
                    <p>Only global administrators and privileged role administrators can approve the admin role assignments. Let's try it now. Walk through the "Assign a role" steps above but this time grant someone the application administrator role. Then login with the user you made eligible for the role and activate the role following the "How to activate a role assignment steps above".</p>
                    <h2>How to approve activation of a role</h2>
                    <p>1. Once a user requests a role the approver will receive an email with the subject "PIM: Review User's request to activate the Application Administrator role". In that email, click <strong>Approve or deny request</strong>.</p>
                    <div ><img src="https://i.ibb.co/C0MtxQc/approve-pim-role-assignment-email.png" alt="Approve PIM role assignment email" height="auto" width="auto" /></div>
                    <p>2. <strong>Review </strong>the <strong>request</strong> then click the <strong>checkbox </strong>next to the role. Click <strong>Approve</strong>.</p>
                    <div ><img src="https://i.ibb.co/6Nrtpt9/approve-pim-role-assignment.png" alt="Approve the PIM role assignment" height="auto" width="auto" /></div>
                    <p>3. Give a <strong>justification</strong> and click <strong>Confirm</strong>.</p>
                    <div ><img src="https://i.ibb.co/GkpLRJq/approve-request-justification.png" alt="Approve request justification" height="auto" width="auto" /></div>
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
