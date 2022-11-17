import {h, Component} from 'preact'
import Page from '../../../../../../components/page'
import {onAuthStateChanged} from '../../../../../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../../../../../components/firebase/get-doc'
import saveDoc from '../../../../../../components/firebase/save-doc'
import Header from '../../../../../../components/test-question/header'
import Footer from '../../../../../../components/test-question/footer'
import Choice from '../../../../../../components/test-question/choice'
import HotArea from '../../../../../../components/test-question/hot-area'
import BuildList from '../../../../../../components/test-question/build-list'
import DragDrop from '../../../../../../components/test-question/drag-drop'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import debounce from 'debounce'
import Snackbar from '@mui/material/Snackbar'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
const clone = require('clone')

const isBrowser = () => typeof window !== 'undefined'

class EditPage extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.toggleEndExam = this.toggleEndExam.bind(this)
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
    this.toggleQuestionList = this.toggleQuestionList.bind(this)
    this.gotoQuestion = this.gotoQuestion.bind(this)
    this.setAnswer = this.setAnswer.bind(this)
    this.beforeUnload = this.beforeUnload.bind(this)
    this.save = this.save.bind(this)
    this.endExam = this.endExam.bind(this)
    this.navigateTo = this.navigateTo.bind(this)

    this.state = {
      uid: '',
      unsavedChanges: false,
      alert: '',
      answerShown: false,
      showQuestionList: false,
      question: {answerOptions: {'-caif4hue': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bor6c', text: 'Assign Admin2 the Exchange administrator role', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Assign Admin2 the Exchange administrator role</p>\n', id: '-caif4hue'}, '1eqrqtgzn': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5ha8q', text: 'Change Admin2\'s Assignment Type to Permanent', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Change Admin2\'s Assignment Type to Permanent</p>\n', id: '1eqrqtgzn'}, 'l9wn1_dj-': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7ltt7', text: 'Set Admin1\'s Assignment Type to Eligible', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Set Admin1\'s Assignment Type to Eligible</p>\n', id: 'l9wn1_dj-'}, vgd4jovrvp: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dboo9', text: 'Remove Admin1 from the Exchange administrator role', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Remove Admin1 from the Exchange administrator role</p>\n', id: 'vgd4jovrvp'}}, answerText: 'Set Admin1\'s Assignment Type to Eligible.', id: 'y7yw_o1fy', images: ['https://i.ibb.co/1L3btPY/PIM.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f13vi', text: 'Your organization has a Microsoft 365 tenant. The security requirements have changed and any admins who manage Microsoft 365 must be limited in their administrative actions for three hours at a time. Global administrators must be exempt from this requirement', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8bg2n', text: 'Your organization\'s current configuration of Azure AD Privileged Identity Management is shown below.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '4tt9p', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '95tcm', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 's39p', text: 'What changes do you need to make to meet the new security requirements?', type: 'unstyled'}], entityMap: {0: {data: {alt: 'PIM: Privileged Identity Management', src: 'https://i.ibb.co/1L3btPY/PIM.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant. The security requirements have changed and any admins who manage Microsoft 365 must be limited in their administrative actions for three hours at a time. Global administrators must be exempt from this requirement</p>\n<p>Your organization\'s current configuration of Azure AD Privileged Identity Management is shown below.</p>\n<img src="https://i.ibb.co/1L3btPY/PIM.png" alt="PIM: Privileged Identity Management" style="height: undefined;width: undefined"/>\n<p></p>\n<p>What changes do you need to make to meet the new security requirements?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. The security requirements have changed and any admins who manage Microsoft 365 must be limited in their administrative actions for three hours at a time. Global administrators must be exempt from this requirement Your organization\'s current configuration of Azure AD Privileged Identity Management is shown below. What changes do you need to make to meet the new security requirements?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'avsso', text: 'Admin1 has an End time of permanent which means he is allowed to perform administrative tasks for over three hours.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 94, offset: 0}], inlineStyleRanges: [], key: 'ermjf', text: 'https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Admin1 has an End time of permanent which means he is allowed to perform administrative tasks for over three hours.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1" target="_self">https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1</a></p>\n', slug: 'what-changes-do-you-need--y7yw_o1fy', title: 'What changes do you need to make time limited admins?', type: 'multiple-choice'},
      test: {answers: {gxhrsbbwx: {'1uuvw63nj': {id: '1uuvw63nj', idx: 0}, '2drnc6n_g': {id: '2drnc6n_g', idx: 2}, eu46sg6oy: {id: 'eu46sg6oy', idx: 1}}, i06pgqyev: {enr0edrdj: {'6ifpxsorr9': {id: '6ifpxsorr9', isCorrect: true}, dsukjpfhv: {id: 'dsukjpfhv', isCorrect: false}, id: 'enr0edrdj', ooqek8ihx: {id: 'ooqek8ihx', isCorrect: false}, rp0luz0s3: {id: 'rp0luz0s3', isCorrect: false}, yr_yug2vn: {id: 'yr_yug2vn', isCorrect: false}}, wfa8vaqgt: {'1v8l9o_ly': {id: '1v8l9o_ly', isCorrect: false}, '7ydlesazd': {id: '7ydlesazd', isCorrect: false}, id: 'wfa8vaqgt', o526u9j6n: {id: 'o526u9j6n', isCorrect: true}, t10cr72on: {id: 't10cr72on', isCorrect: false}, ttgmdjv4g: {id: 'ttgmdjv4g', isCorrect: false}}}, l4srbdjm_: {_adrldq5l: {id: '_adrldq5l', idx: 2}, 'i-ja0vphm': {id: 'i-ja0vphm', idx: 0}, mmowfnyk4: {id: 'mmowfnyk4', idx: 1}}, ouqnkmwr0: {'9dlnpjbkm': {bubh0cwro: {id: 'bubh0cwro', isCorrect: false}, id: '9dlnpjbkm', tntdrsix_: {id: 'tntdrsix_', isCorrect: false}, vna0ystrt: {id: 'vna0ystrt', isCorrect: false}, zaiiwovb8: {id: 'zaiiwovb8', isCorrect: true}}, jp5ipahl_: {'a4-1ne_5k': {id: 'a4-1ne_5k', isCorrect: true}, i6dvl0uvq: {id: 'i6dvl0uvq', isCorrect: false}, id: 'jp5ipahl_', qh7gs5kjv: {id: 'qh7gs5kjv', isCorrect: false}, sldw97gwk: {id: 'sldw97gwk', isCorrect: false}}}, 'rgg-l9u1t': {'2ydew6uezh': {'2pyz3hqil': {id: '2pyz3hqil', isCorrect: true}, id: '2ydew6uezh', yc1nh3neo: {id: 'yc1nh3neo', isCorrect: false}}, bkutictaq: {'0zlfqn91ds': {id: '0zlfqn91ds', isCorrect: true}, id: 'bkutictaq', rfgnpjcpt: {id: 'rfgnpjcpt', isCorrect: false}}, ugnvihehp: {id: 'ugnvihehp', pehu2wgyj: {id: 'pehu2wgyj', isCorrect: false}, ye9b2sz3c: {id: 'ye9b2sz3c', isCorrect: true}}}, vi0dvgjuu: {aft2ckwty: {'0upm-8wax': {id: '0upm-8wax', isCorrect: false}, dlxazzc45: {id: 'dlxazzc45', isCorrect: false}, htchmfexc: {id: 'htchmfexc', isCorrect: true}, id: 'aft2ckwty', 'unvrzhu-f': {id: 'unvrzhu-f', isCorrect: false}}, bmziumigl: {'5azdhi-2-': {id: '5azdhi-2-', isCorrect: false}, fodxwgrtb: {id: 'fodxwgrtb', isCorrect: false}, id: 'bmziumigl', kzmabgqiw: {id: 'kzmabgqiw', isCorrect: true}, sw4x5zj8x: {id: 'sw4x5zj8x', isCorrect: false}}}, y7yw_o1fy: {'-caif4hue': {id: '-caif4hue', isCorrect: false}, '1eqrqtgzn': {id: '1eqrqtgzn', isCorrect: false}, 'l9wn1_dj-': {id: 'l9wn1_dj-', isCorrect: true}, vgd4jovrvp: {id: 'vgd4jovrvp', isCorrect: false}}}, datePublished: '2022/10/12', description: 'Pass the Microsoft 365 security administrator test with ease. Use the following test to know you\'re ready to pass the MS-500 sections: time limited admin roles, protecting passwords, and managing users through groups.', featuredImage: 'https://i.ibb.co/1L3btPY/PIM.png', id: 'zhv828aiu', images: ['https://i.ibb.co/1L3btPY/PIM.png'], publish: true, questions: {gxhrsbbwx: {answerOptions: {'1uuvw63nj': {answer: 'Go to the Azure Active Directory admin center', answerHtml: '', id: '1uuvw63nj'}, '2drnc6n_g': {answer: 'Click Groups. Click Expiration', answerHtml: '', id: '2drnc6n_g'}, '5p-kejptx': {answer: 'Click a group. Then click Group settings', answerHtml: '', id: '5p-kejptx'}, 'bixz0yu4-': {answer: 'Click Groups. Then click Active Groups', answerHtml: '', id: 'bixz0yu4-'}, c6azj_dsl: {answer: 'Go to the Microsoft 365 admin center', answerHtml: '', id: 'c6azj_dsl'}, eu46sg6oy: {answer: 'Click Azure Active Directory', answerHtml: '', id: 'eu46sg6oy'}}, id: 'gxhrsbbwx', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7j1i5', text: 'You\'ve been tasked with configuring groups so they expire unless the group owners renew the group.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd7143', text: 'Where do you go to configure group expiration?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You\'ve been tasked with configuring groups so they expire unless the group owners renew the group.</p>\n<p>Where do you go to configure group expiration?</p>\n', questionText: 'You\'ve been tasked with configuring groups so they expire unless the group owners renew the group. Where do you go to configure group expiration?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5ilrn', text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Groups > Expiration.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '62k19', text: '2. Set the Group lifetime (in days) > an email for groups with no owners > enable expiration to All. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 95, offset: 0}], inlineStyleRanges: [], key: '8tgif', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 116, offset: 0}], inlineStyleRanges: [], key: 'b0gns', text: 'https://www.iorad.com/player/1796067/MS-500---Ensure-that-group-owners-renew-their-Office-365-groups-every-180-days-', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://www.iorad.com/player/1796067/MS-500---Ensure-that-group-owners-renew-their-Office-365-groups-every-180-days-', target: '_blank', url: 'https://www.iorad.com/player/1796067/MS-500---Ensure-that-group-owners-renew-their-Office-365-groups-every-180-days-'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>1. Go to Azure Active Directory admin center &gt; Azure Active Directory &gt; Groups &gt; Expiration.</p>\n<p>2. Set the Group lifetime (in days) &gt; an email for groups with no owners &gt; enable expiration to All. Click Save.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV</a></p>\n<p><a href="https://www.iorad.com/player/1796067/MS-500---Ensure-that-group-owners-renew-their-Office-365-groups-every-180-days-" target="_self">https://www.iorad.com/player/1796067/MS-500---Ensure-that-group-owners-renew-their-Office-365-groups-every-180-days-</a></p>\n', slug: 'where-do-you-go-to-config-gxhrsbbwx', title: 'Where do you go to configure group expiration?', type: 'build-list'}, i06pgqyev: {answerOptions: {enr0edrdj: {answerHtml: '', answers: {'6ifpxsorr9': {id: '6ifpxsorr9', text: '2'}, dsukjpfhv: {id: 'dsukjpfhv', text: '0'}, ooqek8ihx: {id: 'ooqek8ihx', text: '3'}, rp0luz0s3: {id: 'rp0luz0s3', text: '4'}, yr_yug2vn: {id: 'yr_yug2vn', text: '1'}}, id: 'enr0edrdj', text: 'Dynamic membership groups'}, wfa8vaqgt: {answerHtml: '', answers: {'1v8l9o_ly': {id: '1v8l9o_ly', text: '3'}, '7ydlesazd': {id: '7ydlesazd', text: '0'}, o526u9j6n: {id: 'o526u9j6n', text: '1'}, t10cr72on: {id: 't10cr72on', text: '2'}, ttgmdjv4g: {id: 'ttgmdjv4g', text: '4'}}, id: 'wfa8vaqgt', text: 'Assigned membership groups'}}, id: 'i06pgqyev', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f3p67', text: 'You have a Microsoft 365 tenant with Microsoft E5 licenses.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'frlrl', text: 'Users and devices are added/removed daily. Users in the sales department change their devices frequently.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '69ttt', text: 'You\'ve been asked to create three groups with the following requirements.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '732nb', text: '📷', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3v842', text: 'The solution must minimize administrative effort.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '29oa8', text: 'How many assigned groups and how many dynamic groups should be created?', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Group Names and Requirements', src: 'https://i.ibb.co/fdScjrV/Chart2.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>You have a Microsoft 365 tenant with Microsoft E5 licenses.</p>\n<p>Users and devices are added/removed daily. Users in the sales department change their devices frequently.</p>\n<p>You\'ve been asked to create three groups with the following requirements.</p>\n<p><img src="https://i.ibb.co/fdScjrV/Chart2.png" alt="Group Names and Requirements" style="height: undefined;width: undefined"/></p>\n<p>The solution must minimize administrative effort.</p>\n<p>How many assigned groups and how many dynamic groups should be created?</p>\n', questionText: 'You have a Microsoft 365 tenant with Microsoft E5 licenses. Users and devices are added/removed daily. Users in the sales department change their devices frequently. You\'ve been asked to create three groups with the following requirements. 📷 The solution must minimize administrative effort. How many assigned groups and how many dynamic groups should be created?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'advgh', text: 'Group1 has to be assigned because you can\'t create a device group based on the device owners\' attributes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1afbs', text: 'Group 2 can be dynamic because a user does have a department attribute.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '80m9c', text: 'Group 3 can be dynamic because a device does have a deviceownership attribute.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dc9fm', text: 'References:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 95, offset: 0}], inlineStyleRanges: [], key: 'b702l', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 129, offset: 0}], inlineStyleRanges: [], key: 'fo67v', text: 'https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/active-directory/users-groups-roles/groups-dynamic-membership.md', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/active-directory/users-groups-roles/groups-dynamic-membership.md', target: '_blank', url: 'https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/active-directory/users-groups-roles/groups-dynamic-membership.md'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Group1 has to be assigned because you can\'t create a device group based on the device owners\' attributes.</p>\n<p>Group 2 can be dynamic because a user does have a department attribute.</p>\n<p>Group 3 can be dynamic because a device does have a deviceownership attribute.</p>\n<p>References:</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV</a></p>\n<p><a href="https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/active-directory/users-groups-roles/groups-dynamic-membership.md" target="_self">https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/active-directory/users-groups-roles/groups-dynamic-membership.md</a></p>\n', slug: 'how-many-assigned-groups--i06pgqyev', title: 'How many assigned groups and how many dynamic groups should be created?', type: 'hot-area'}, l4srbdjm_: {answerOptions: {_adrldq5l: {answer: 'Click Password Expiration policy', answerHtml: '', id: '_adrldq5l'}, 'i-ja0vphm': {answer: 'Open the Microsoft 365 Admin Center ', answerHtml: '', id: 'i-ja0vphm'}, mmowfnyk4: {answer: 'Click Org Settings then click Security and Privacy', answerHtml: '', id: 'mmowfnyk4'}, rkk1mbz_n: {answer: 'Click Enterprise Admin', answerHtml: '', id: 'rkk1mbz_n'}, 'shhunl3-e': {answer: 'Open the Azure Active Directory Admin Center', answerHtml: '', id: 'shhunl3-e'}}, answerText: 'Open the Microsoft 365 Admin Center . Click Org Settings then click Security and Privacy. Click Password Expiration policy.', id: 'l4srbdjm_', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '42f55', text: 'You need to configure Microsoft 365 so that all users are required to change their passwords every 100 days.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6sh2g', text: 'What steps should you take to complete the task?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You need to configure Microsoft 365 so that all users are required to change their passwords every 100 days.</p>\n<p>What steps should you take to complete the task?</p>\n', questionText: 'You need to configure Microsoft 365 so that all users are required to change their passwords every 100 days. What steps should you take to complete the task?', references: {blocks: [{data: {}, depth: 0, entityRanges: [{key: 0, length: 90, offset: 0}], inlineStyleRanges: [], key: 'f22p6', text: 'https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 108, offset: 0}], inlineStyleRanges: [], key: 'anshk', text: 'https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1i0tv', text: 'Sign in to the Microsoft 365 Admin Center.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4abkl', text: 'In the left navigation pane, expand Show All > Settings > Org Settings.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cr8mv', text: 'Click on Security and Privacy.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '44dn7', text: 'Select the Password Expiration Policy.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e93ca', text: 'Ensure that the checkbox labeled Set user passwords to expire after a number of days is ticked.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aoh2q', text: 'Enter 100 in the Days before passwords expire field.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'euf6d', text: 'Click Save changes to save the changes.', type: 'ordered-list-item'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day', target: '_blank', url: 'https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p><a href="https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH" target="_self">https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH</a></p>\n<p><a href="https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day" target="_self">https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day</a></p>\n<ol>\n<li>Sign in to the Microsoft 365 Admin Center.</li>\n<li>In the left navigation pane, expand Show All &gt; Settings &gt; Org Settings.</li>\n<li>Click on Security and Privacy.</li>\n<li>Select the Password Expiration Policy.</li>\n<li>Ensure that the checkbox labeled Set user passwords to expire after a number of days is ticked.</li>\n<li>Enter 100 in the Days before passwords expire field.</li>\n<li>Click Save changes to save the changes.</li>\n</ol>\n', slug: 'you-need-to-ensure-that-a-l4srbdjm_', title: 'You need to ensure that all users must change their passwords every 100 days.', type: 'build-list'}, ouqnkmwr0: {answerOptions: {'9dlnpjbkm': {answerHtml: '', answers: {bubh0cwro: {id: 'bubh0cwro', text: 'Access packages'}, tntdrsix_: {id: 'tntdrsix_', text: 'Dynamic groups'}, vna0ystrt: {id: 'vna0ystrt', text: 'Data loss prevention policies'}, zaiiwovb8: {id: 'zaiiwovb8', text: 'Access reviews'}}, id: '9dlnpjbkm', text: 'All group owners must verify their group membership:'}, jp5ipahl_: {answerHtml: '', answers: {'a4-1ne_5k': {id: 'a4-1ne_5k', text: 'Dynamic groups'}, i6dvl0uvq: {id: 'i6dvl0uvq', text: 'Assigned groups'}, qh7gs5kjv: {id: 'qh7gs5kjv', text: 'Conditional access policies'}, sldw97gwk: {id: 'sldw97gwk', text: 'Access packages'}}, id: 'jp5ipahl_', text: 'Users should be automatically added to the security group corresponding to their department:'}}, id: 'ouqnkmwr0', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4hr2f', text: 'Your organization has a Microsoft 365 tenant. User accounts are synced from your organization\'s human resources system to Azure AD.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fh62l', text: 'Your organization has five departments that each have their own Microsoft SharePoint Online site. Every user must be granted access to their own department\'s site. No users should be able to access a site that is not their own respective department\'s site.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '57n1c', text: 'Your manager has asked you to configure the security of the SharePoint sites. He\'s given you the following requirements:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aksk2', text: 'Users should be automatically added to the security group corresponding to their department.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6e0f7', text: 'All group owners must verify their group membership only contains their department\'s users once a month.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '70ic3', text: 'How do you configure Microsoft 365 to meet the security requirements?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant. User accounts are synced from your organization\'s human resources system to Azure AD.</p>\n<p>Your organization has five departments that each have their own Microsoft SharePoint Online site. Every user must be granted access to their own department\'s site. No users should be able to access a site that is not their own respective department\'s site.</p>\n<p>Your manager has asked you to configure the security of the SharePoint sites. He\'s given you the following requirements:</p>\n<ul>\n<li>Users should be automatically added to the security group corresponding to their department.</li>\n<li>All group owners must verify their group membership only contains their department\'s users once a month.</li>\n</ul>\n<p>How do you configure Microsoft 365 to meet the security requirements?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. User accounts are synced from your organization\'s human resources system to Azure AD. Your organization has five departments that each have their own Microsoft SharePoint Online site. Every user must be granted access to their own department\'s site. No users should be able to access a site that is not their own respective department\'s site. Your manager has asked you to configure the security of the SharePoint sites. He\'s given you the following requirements: Users should be automatically added to the security group corresponding to their department. All group owners must verify their group membership only contains their department\'s users once a month. How do you configure Microsoft 365 to meet the security requirements?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cqcjj', text: 'To automatically add users to groups the group type must be dynamic.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f81s8', text: 'To have owners verify group members\' monthly access reviews must be used.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 95, offset: 0}], inlineStyleRanges: [], key: 'f0pm0', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>To automatically add users to groups the group type must be dynamic.</p>\n<p>To have owners verify group members\' monthly access reviews must be used.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV</a></p>\n', slug: 'how-do-you-configure-micr-ouqnkmwr0', title: 'How do you configure Microsoft 365 to meet the security requirements?', type: 'hot-area'}, 'rgg-l9u1t': {answerOptions: {'2ydew6uezh': {answerHtml: '', answers: {'2pyz3hqil': {id: '2pyz3hqil', text: 'Yes'}, yc1nh3neo: {id: 'yc1nh3neo', text: 'No'}}, id: '2ydew6uezh', text: 'User2 can create a distribution group named GitBit-Internal'}, bkutictaq: {answerHtml: '', answers: {'0zlfqn91ds': {id: '0zlfqn91ds', text: 'Yes'}, rfgnpjcpt: {id: 'rfgnpjcpt', text: 'No'}}, id: 'bkutictaq', text: 'User2 can create a security group named InternalOnly'}, ugnvihehp: {answerHtml: '', answers: {pehu2wgyj: {id: 'pehu2wgyj', text: 'No'}, ye9b2sz3c: {id: 'ye9b2sz3c', text: 'Yes'}}, id: 'ugnvihehp', text: 'User1 can create a distribution group named Distribution'}}, id: 'rgg-l9u1t', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ehpct', text: 'You have an Azure AD tenant named GitBit.org that contains the following users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '3gogs', text: '📷', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6neb8', text: 'You add configure the following group naming policies:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}], key: '6lcak', text: 'The word internal is added to the list of blocked words.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 8, style: 'BOLD'}], key: '9pnqp', text: 'You set GitBit- as a prefix.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '405n7', text: 'Check the box next to each true statement below.', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Users and Roles', src: 'https://i.ibb.co/fGL2dQn/Users-and-roles2.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>You have an Azure AD tenant named GitBit.org that contains the following users.</p>\n<p><img src="https://i.ibb.co/fGL2dQn/Users-and-roles2.png" alt="Users and Roles" style="height: undefined;width: undefined"/></p>\n<p>You add configure the following group naming policies:</p>\n<ul>\n<li>The word <strong>internal </strong>is added to the list of blocked words.</li>\n<li>You set <strong>GitBit-</strong> as a prefix.</li>\n</ul>\n<p>Check the box next to each true statement below.</p>\n', questionText: 'You have an Azure AD tenant named GitBit.org that contains the following users. 📷 You add configure the following group naming policies: The word internal is added to the list of blocked words. You set GitBit- as a prefix. Check the box next to each true statement below.', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '14uo6', text: 'The following admin roles are exempt from the group naming policy:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'chp8h', text: 'Global admin', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '71r56', text: 'User account admin', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1m07j', text: 'Partner Tier 1 Support', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bao9l', text: 'Partner Tier 2 Support', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '31ls3', text: 'Therefore User1 and User2 don\'t need to follow the group naming policies', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'djdem', text: 'Reference:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 95, offset: 0}], inlineStyleRanges: [], key: '5mvlb', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 97, offset: 0}], inlineStyleRanges: [], key: 'cgqla', text: 'https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide', target: '_blank', url: 'https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>The following admin roles are exempt from the group naming policy:</p>\n<ul>\n<li>Global admin</li>\n<li>User account admin</li>\n<li>Partner Tier 1 Support</li>\n<li>Partner Tier 2 Support</li>\n</ul>\n<p>Therefore User1 and User2 don\'t need to follow the group naming policies</p>\n<p>Reference:</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV</a></p>\n<p><a href="https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide" target="_self">https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide</a></p>\n', slug: 'how-are-admins-affected-b-rgg-l9u1t', title: 'How are admins affected by group naming policies?', type: 'hot-area'}, vi0dvgjuu: {answerOptions: {aft2ckwty: {answerHtml: '', answers: {'0upm-8wax': {id: '0upm-8wax', text: 'User1 only'}, dlxazzc45: {id: 'dlxazzc45', text: 'None'}, htchmfexc: {id: 'htchmfexc', text: 'User1, User2, User3, and User4'}, 'unvrzhu-f': {id: 'unvrzhu-f', text: 'User1 and User2 only'}}, id: 'aft2ckwty', text: 'ADGroup1'}, bmziumigl: {answerHtml: '', answers: {'5azdhi-2-': {id: '5azdhi-2-', text: 'User1 and User2 only'}, fodxwgrtb: {id: 'fodxwgrtb', text: 'User1 only'}, kzmabgqiw: {id: 'kzmabgqiw', text: 'User1, User2, User3, and User4'}, sw4x5zj8x: {id: 'sw4x5zj8x', text: 'None'}}, id: 'bmziumigl', text: 'ADGroup2'}}, id: 'vi0dvgjuu', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '646nl', text: 'Your organization has a Microsoft 365 tenant with the following users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '34ukf', text: '📷', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3k4qk', text: 'The Microsoft 365 tenant contains the following dynamic groups.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'asct5', text: '📷', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8l1ia', text: 'Which users are members of ADGroup1 and ADGroup2?', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Users chart', src: 'https://i.ibb.co/r5zkJWT/Users-chart.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Dynamic group chart', src: 'https://i.ibb.co/R91f09F/group-membership-chart.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant with the following users.</p>\n<p><img src="https://i.ibb.co/r5zkJWT/Users-chart.png" alt="Users chart" style="height: undefined;width: undefined"/></p>\n<p>The Microsoft 365 tenant contains the following dynamic groups.</p>\n<p><img src="https://i.ibb.co/R91f09F/group-membership-chart.png" alt="Dynamic group chart" style="height: undefined;width: undefined"/></p>\n<p>Which users are members of ADGroup1 and ADGroup2?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant with the following users. 📷 The Microsoft 365 tenant contains the following dynamic groups. 📷 Which users are members of ADGroup1 and ADGroup2?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9vive', text: 'The membership rule "contains" isn\'t case-sensitive. It matches any city that contains the chars "sea" so users 1 - 4 are all added.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7u3ml', text: 'The membership rule "match" isn\'t case-sensitive. It matches any city that starts with "sea" so users 1 - 4 are all added.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 95, offset: 0}], inlineStyleRanges: [], key: 'kne0', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 98, offset: 0}], inlineStyleRanges: [], key: '9bipp', text: 'https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>The membership rule "contains" isn\'t case-sensitive. It matches any city that contains the chars "sea" so users 1 - 4 are all added.</p>\n<p>The membership rule "match" isn\'t case-sensitive. It matches any city that starts with "sea" so users 1 - 4 are all added.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership" target="_self">https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership</a></p>\n', slug: 'you-organization-has-a-mi-vi0dvgjuu', title: 'Which users are members of ADGroup1 and ADGroup2?', type: 'hot-area'}, y7yw_o1fy: {answerOptions: {'-caif4hue': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bor6c', text: 'Assign Admin2 the Exchange administrator role', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Assign Admin2 the Exchange administrator role</p>\n', id: '-caif4hue'}, '1eqrqtgzn': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5ha8q', text: 'Change Admin2\'s Assignment Type to Permanent', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Change Admin2\'s Assignment Type to Permanent</p>\n', id: '1eqrqtgzn'}, 'l9wn1_dj-': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7ltt7', text: 'Set Admin1\'s Assignment Type to Eligible', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Set Admin1\'s Assignment Type to Eligible</p>\n', id: 'l9wn1_dj-'}, vgd4jovrvp: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dboo9', text: 'Remove Admin1 from the Exchange administrator role', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Remove Admin1 from the Exchange administrator role</p>\n', id: 'vgd4jovrvp'}}, answerText: 'Set Admin1\'s Assignment Type to Eligible.', id: 'y7yw_o1fy', images: ['https://i.ibb.co/1L3btPY/PIM.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f13vi', text: 'Your organization has a Microsoft 365 tenant. The security requirements have changed and any admins who manage Microsoft 365 must be limited in their administrative actions for three hours at a time. Global administrators must be exempt from this requirement', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8bg2n', text: 'Your organization\'s current configuration of Azure AD Privileged Identity Management is shown below.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '4tt9p', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '95tcm', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 's39p', text: 'What changes do you need to make to meet the new security requirements?', type: 'unstyled'}], entityMap: {0: {data: {alt: 'PIM: Privileged Identity Management', src: 'https://i.ibb.co/1L3btPY/PIM.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant. The security requirements have changed and any admins who manage Microsoft 365 must be limited in their administrative actions for three hours at a time. Global administrators must be exempt from this requirement</p>\n<p>Your organization\'s current configuration of Azure AD Privileged Identity Management is shown below.</p>\n<img src="https://i.ibb.co/1L3btPY/PIM.png" alt="PIM: Privileged Identity Management" style="height: undefined;width: undefined"/>\n<p></p>\n<p>What changes do you need to make to meet the new security requirements?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. The security requirements have changed and any admins who manage Microsoft 365 must be limited in their administrative actions for three hours at a time. Global administrators must be exempt from this requirement Your organization\'s current configuration of Azure AD Privileged Identity Management is shown below. What changes do you need to make to meet the new security requirements?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'avsso', text: 'Admin1 has an End time of permanent which means he is allowed to perform administrative tasks for over three hours.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 94, offset: 0}], inlineStyleRanges: [], key: 'ermjf', text: 'https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Admin1 has an End time of permanent which means he is allowed to perform administrative tasks for over three hours.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1" target="_self">https://www.gitbit.org/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1</a></p>\n', slug: 'what-changes-do-you-need--y7yw_o1fy', title: 'What changes do you need to make time limited admins?', type: 'multiple-choice'}}, sectionId: 'AFV_acckJ', slug: 'time-limited-admins-protecting-passwords-and-managing-users-groups-zhv828aiu', title: 'Time limited admin roles, protecting passwords, and Managing users through groups', type: 'test'},
      questionsShown: false
    }

    this.state.userAcct = {tests: {
      [this.state.test.id]: {
        [this.state.question.id]: {answers: {}}
      }
    }}

    this.state.questionIdx = Object.keys(this.state.test.questions).indexOf(this.state.question.id)
    this.state.previousQuestionSlug = this.state.questionIdx > 0 ? Object.values(this.state.test.questions)[this.state.questionIdx-1].slug : ''
    this.state.nextQuestionSlug = Object.values(this.state.test.questions).length-1 == this.state.questionIdx ? '' : Object.values(this.state.test.questions)[this.state.questionIdx+1].slug

    this.state.jsonLd = {
      datePublished: this.state.test.datePublished,
      keywords: [
        'Microsoft',
        'Microsoft 365',
        'Office 365',
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      mainEntity: {
        '@type': 'Question',
        name: this.state.question.title,
        text: this.state.question.questionText,
        answerCount: this.state.test.answers ? Object.keys(this.state.test.answers[this.state.question.id]).length : 0,
        dateCreated: this.state.test.datePublished,
        author: {
          '@type': 'Person',
          name: 'John Gruber',
          url: 'https://twitter.com/gruberjl'
        }
      }
    }

    if (this.state.test.answers) {
      this.state.jsonLd.mainEntity.acceptedAnswer = {
        '@type': 'Answer',
        url: `https://www.gitbit.org/course/ms-500/test/${this.state.test.slug}/question/${this.state.question.slug}`,
        author: {
          type: 'Person',
          name: 'John Gruber',
          url: 'https://twitter.com/gruberjl'
        },
        upvoteCount: 1,
        dateCreated: this.state.test.datePublished
      }

      this.state.jsonLd.mainEntity.acceptedAnswer.text = 'None'
    }
  }

  componentDidMount() {
    if (isBrowser()) {
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
      window.addEventListener('beforeunload', this.beforeUnload)
    }
  }

  componentWillUnmount() {
    this.onAuthStateChangedListener()
    window.removeEventListener('beforeunload', this.beforeUnload)
  }

  setUid(user) {
    if (user) {
      this.setState({
        uid: user.uid
      })

      getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
        if (!userAcct.tests)
          userAcct.tests = {}

        if (!userAcct.tests[this.state.test.id])
          userAcct.tests[this.state.test.id] = {}

        if (!userAcct.tests[this.state.test.id][this.state.question.id]) {
          userAcct.tests[this.state.test.id][this.state.question.id] = {
            id: this.state.question.id,
            answers: {}
          }
        }

        this.setState({userAcct})
      })
    }
  }

  toggleEndExam() {
    const endExamShown = !this.state.endExamShown
    this.setState({endExamShown})
  }

  toggleShowAnswer() {
    const answerShown = !this.state.answerShown
    this.setState({answerShown})
  }

  toggleQuestionList() {
    const showQuestionList = !this.state.showQuestionList
    this.setState({showQuestionList})
  }

  gotoQuestion(question) {
    return () => {
      this.navigateTo(`/course/ms-500/test/${this.state.test.slug}/question/${question.slug}`)()
    }
  }

  setAnswer(answers) {
    const userAcct = clone(this.state.userAcct)
    userAcct.tests[this.state.test.id][this.state.question.id].answers = answers

    this.setState({userAcct, unsavedChanges: true})
    if (!this.debounceSave)
      this.debounceSave = debounce(this.save, 5000)

    this.debounceSave()
  }

  beforeUnload() {
    if (this.state.unsavedChanges) {
      const s = 'You have unsaved changes. Really leave?'
      this.save()

      event = event || window.event // eslint-disable-line no-global-assign
      if (event)
        event.returnValue = s

      return s
    }
  }

  save() {
    if (this.state.uid) {
      return saveDoc(`courses/MS-500/users`, this.state.userAcct, false).then(() => {
        return new Promise((resolve, reject) => {
          this.setState({
            alert: 'Content saved',
            unsavedChanges: false
          }, () => {
            return resolve()
          })

          setTimeout(() => {
            this.setState({alert: ''})
          }, 3000)
        })
      })
    } return new Promise((res) => res())
  }

  endExam() {
    this.navigateTo(`/course/ms-500/test/${this.state.test.slug}/summary`)()
  }

  navigateTo(url) {
    return (ev) => {
      if (this.state.unsavedChanges) {
        if (ev)
          ev.preventDefault()

        this.save().then(() => {
          window.location.href = url
        })
      } else
        window.location.href = url
    }
  }

  render() {
    return (
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.question.title} description={this.state.question.questionText}>
        <main>
          <Container>
            <Header uid={this.state.uid} questionIdx={this.state.questionIdx} previousQuestionSlug={this.state.previousQuestionSlug} nextQuestionSlug={this.state.nextQuestionSlug} testSlug={this.state.test.slug} toggleEndExam={this.toggleEndExam} numOfQuestions={Object.values(this.state.test.questions).length} navigateTo={this.navigateTo} />
            {
              {
                'multiple-choice': <Choice question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />,
                'hot-area': <HotArea question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />,
                'build-list': <BuildList question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />,
                'drag-drop': <DragDrop question={this.state.question} setAnswer={this.setAnswer} answers={this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers} testAnswers={this.state.test.answers[this.state.question.id]} showAnswers={this.state.answerShown} />
              }[this.state.question.type]
            }
            <Grid container>
              <Grid item xs={12} style={{display: this.state.answerShown ? 'block' : 'none'}} >
                <Typography variant="h5" component="h3" gutterBottom>Answer Explanation</Typography>
              </Grid>
              <Grid item xs={12}>
                <div dangerouslySetInnerHTML={{__html: this.state.question.referencesHtml}} style={{display: this.state.answerShown ? 'block' : 'none'}} />
              </Grid>
            </Grid>
            <Footer uid={this.state.uid} previousQuestionSlug={this.state.previousQuestionSlug} nextQuestionSlug={this.state.nextQuestionSlug} testSlug={this.state.test.slug} toggleEndExam={this.toggleEndExam} toggleShowAnswer={this.toggleShowAnswer} toggleQuestionList={this.toggleQuestionList} navigateTo={this.navigateTo} />
          </Container>

          <Dialog onClose={this.toggleQuestionList} open={this.state.showQuestionList}>
            <DialogTitle>Test Questions</DialogTitle>
            <TableContainer>
              <Table striped bordered hover>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Answered</TableCell>
                    <TableCell>Question</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { Object.values(this.state.test.questions).map((question, idx) => (
                    <TableRow hover key={idx} onClick={this.gotoQuestion(question)} style={{cursor: 'pointer'}}>
                      <TableCell>{idx+1}</TableCell>
                      <TableCell><Checkbox checked={Object.values(this.state.userAcct.tests[this.state.test.id][this.state.question.id].answers).length > 0} /></TableCell>
                      <TableCell>{question.title}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Dialog>

          <Dialog onClose={this.toggleEndExam} open={this.state.endExamShown}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText>Are you sure you want to end the exam?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={this.endExam}>
                Yes
              </Button>
              <Button variant="outlined" onClick={this.toggleEndExam}>
                No
              </Button>
            </DialogActions>
          </Dialog>
        </main>
        <Snackbar message={this.state.alert} open={this.state.alert !== ''} />
      </Page>
    )
  }
}

export default EditPage
