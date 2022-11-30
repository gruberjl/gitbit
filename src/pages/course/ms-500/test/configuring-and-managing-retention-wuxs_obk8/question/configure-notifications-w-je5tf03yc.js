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
      question: {answerOptions: {'1fsqa58ap': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3pbd', text: 'From Search & investigation, create a guided search.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Search &amp; investigation, create a guided search.</p>\n', id: '1fsqa58ap'}, '5khdo_771': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fucj6', text: 'From Events, create an event.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Events, create an event.</p>\n', id: '5khdo_771'}, blnqvjzj9i: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9qtcj', text: 'From Policies > Alert Policies, create a new alert policy.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Policies &gt; Alert Policies, create a new alert policy.</p>\n', id: 'blnqvjzj9i'}, 'f-bu1ozrs': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5rsdj', text: 'From Search & Investigation, create an eDiscovery case.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Search &amp; Investigation, create an eDiscovery case.</p>\n', id: 'f-bu1ozrs'}}, answerText: 'From Policies > Alert Policies, create a new alert policy.', id: 'je5tf03yc', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bn0ie', text: 'Your organization has a Microsoft 365 tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'btsb8', text: 'Your manager asks you to configure notifications whenever an administrator starts an eDiscovery search. How do you configure the notifications?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant.</p>\n<p>Your manager asks you to configure notifications whenever an administrator starts an eDiscovery search. How do you configure the notifications?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. Your manager asks you to configure notifications whenever an administrator starts an eDiscovery search. How do you configure the notifications?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6s4sh', text: '1. Go to Microsoft Purview admin center > Policies > Alert policies > New alert policy. Configure the options and click Next. Set the Activity to An eDiscovery search was started or exported. Click Next. Set who you want to be notified. Click Next > Finish.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 114, offset: 0}], inlineStyleRanges: [], key: 'emu4', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 92, offset: 0}], inlineStyleRanges: [], key: 'enl3a', text: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide', target: '_blank', url: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>1. Go to Microsoft Purview admin center &gt; Policies &gt; Alert policies &gt; New alert policy. Configure the options and click Next. Set the Activity to An eDiscovery search was started or exported. Click Next. Set who you want to be notified. Click Next &gt; Finish.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f</a></p>\n<p><a href="https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide" target="_self">https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide</a></p>\n', slug: 'configure-notifications-w-je5tf03yc', title: 'Configure notifications whenever an administrator starts an eDiscovery search', type: 'multiple-choice'},
      test: {answers: {je5tf03yc: {'1fsqa58ap': {id: '1fsqa58ap', isCorrect: false}, '5khdo_771': {id: '5khdo_771', isCorrect: false}, blnqvjzj9i: {id: 'blnqvjzj9i', isCorrect: true}, 'f-bu1ozrs': {id: 'f-bu1ozrs', isCorrect: false}}, jhsmnhhwq: {'89finux6v': {id: '89finux6v', idx: 0}, 'l-9g9vyp4': {id: 'l-9g9vyp4', idx: 2}, pvgvlqyi1: {id: 'pvgvlqyi1', idx: 1}}, s2nowxi5p: {agozoueeo: {id: 'agozoueeo', isCorrect: false}, huikd2yc3: {id: 'huikd2yc3', isCorrect: false}, kzjbz3hy6: {id: 'kzjbz3hy6', isCorrect: false}, pdtofogpt: {id: 'pdtofogpt', isCorrect: true}}, vtlprufec: {'bkl75-fsc': {id: 'bkl75-fsc', nsepbpscni: {id: 'nsepbpscni', isCorrect: false}, 'zo-ju09y-': {id: 'zo-ju09y-', isCorrect: true}}, nrsqxye7b: {ei4q_z1_y: {id: 'ei4q_z1_y', isCorrect: true}, id: 'nrsqxye7b', sya0kkatz: {id: 'sya0kkatz', isCorrect: false}}, p55u1hzdp: {id: 'p55u1hzdp', 'pl_9o-uv4': {id: 'pl_9o-uv4', isCorrect: true}, u4sqrax86: {id: 'u4sqrax86', isCorrect: false}}}, w2fkhvcon: {pirpdvias: {id: 'pirpdvias', 'ojft2qs-3': {id: 'ojft2qs-3', isCorrect: false}, 'oyx-iecys': {id: 'oyx-iecys', isCorrect: true}, s_5ah_arb: {id: 's_5ah_arb', isCorrect: false}, uckgolu4q: {id: 'uckgolu4q', isCorrect: false}}, xohcriiqr: {ewq5j4pw_: {id: 'ewq5j4pw_', isCorrect: false}, fjcafbmjw: {id: 'fjcafbmjw', isCorrect: false}, id: 'xohcriiqr', ygcpzvqmq: {id: 'ygcpzvqmq', isCorrect: true}}}, xlunrqlha: {'1k9ds71gh': {id: '1k9ds71gh', isCorrect: false}, a3ojlmj8s: {id: 'a3ojlmj8s', isCorrect: true}, adrtgc8jth: {id: 'adrtgc8jth', isCorrect: false}, f3lz53e0b: {id: 'f3lz53e0b', isCorrect: false}}}, datePublished: '2022/10/12', description: 'This free practice test covers retention policies. Every question you may see regarding retention policies in the Microsoft 365 security administrator test is here.', featuredImage: 'https://i.ibb.co/g9YFQN3/Policy2-Retention-Policy.png', id: 'wuxs_obk8', images: ['https://i.ibb.co/g9YFQN3/Policy2-Retention-Policy.png'], publish: true, questions: {je5tf03yc: {answerOptions: {'1fsqa58ap': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3pbd', text: 'From Search & investigation, create a guided search.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Search &amp; investigation, create a guided search.</p>\n', id: '1fsqa58ap'}, '5khdo_771': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fucj6', text: 'From Events, create an event.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Events, create an event.</p>\n', id: '5khdo_771'}, blnqvjzj9i: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9qtcj', text: 'From Policies > Alert Policies, create a new alert policy.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Policies &gt; Alert Policies, create a new alert policy.</p>\n', id: 'blnqvjzj9i'}, 'f-bu1ozrs': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5rsdj', text: 'From Search & Investigation, create an eDiscovery case.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Search &amp; Investigation, create an eDiscovery case.</p>\n', id: 'f-bu1ozrs'}}, answerText: 'From Policies > Alert Policies, create a new alert policy.', id: 'je5tf03yc', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bn0ie', text: 'Your organization has a Microsoft 365 tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'btsb8', text: 'Your manager asks you to configure notifications whenever an administrator starts an eDiscovery search. How do you configure the notifications?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant.</p>\n<p>Your manager asks you to configure notifications whenever an administrator starts an eDiscovery search. How do you configure the notifications?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. Your manager asks you to configure notifications whenever an administrator starts an eDiscovery search. How do you configure the notifications?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6s4sh', text: '1. Go to Microsoft Purview admin center > Policies > Alert policies > New alert policy. Configure the options and click Next. Set the Activity to An eDiscovery search was started or exported. Click Next. Set who you want to be notified. Click Next > Finish.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 114, offset: 0}], inlineStyleRanges: [], key: 'emu4', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 92, offset: 0}], inlineStyleRanges: [], key: 'enl3a', text: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide', target: '_blank', url: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>1. Go to Microsoft Purview admin center &gt; Policies &gt; Alert policies &gt; New alert policy. Configure the options and click Next. Set the Activity to An eDiscovery search was started or exported. Click Next. Set who you want to be notified. Click Next &gt; Finish.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f</a></p>\n<p><a href="https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide" target="_self">https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies?view=o365-worldwide</a></p>\n', slug: 'configure-notifications-w-je5tf03yc', title: 'Configure notifications whenever an administrator starts an eDiscovery search', type: 'multiple-choice'}, jhsmnhhwq: {answerOptions: {'6mqkbsv36': {answer: 'Open the Azure Active Directory admin center', answerHtml: '', id: '6mqkbsv36'}, '89finux6v': {answer: 'Open the Microsoft Purview admin center', answerHtml: '', id: '89finux6v'}, gpy73tv6j: {answer: 'Open the Microsoft 365 admin center', answerHtml: '', id: 'gpy73tv6j'}, 'l-9g9vyp4': {answer: 'Click Access & permissions', answerHtml: '', id: 'l-9g9vyp4'}, pcmhdiom8: {answer: 'Assign a role to Admin1', answerHtml: '', id: 'pcmhdiom8'}, pvgvlqyi1: {answer: 'Open the case and go to Settings', answerHtml: '', id: 'pvgvlqyi1'}}, answerText: 'Open the Microsoft Purview admin center. Open the case and go to Settings. Click Access & permissions.', id: 'jhsmnhhwq', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '69b1g', text: 'You have a Microsoft 365 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dgc7p', text: 'The Global administrator role is assigned to your user account. You have a user named Admin1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7iirj', text: 'You create an eDiscovery case named Case1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '45n0b', text: 'You need to ensure that Admin1 can view the results of Case1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '64jkm', text: 'What should you do first?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You have a Microsoft 365 subscription.</p>\n<p>The Global administrator role is assigned to your user account. You have a user named Admin1.</p>\n<p>You create an eDiscovery case named Case1.</p>\n<p>You need to ensure that Admin1 can view the results of Case1.</p>\n<p>What should you do first?</p>\n', questionText: 'You have a Microsoft 365 subscription. The Global administrator role is assigned to your user account. You have a user named Admin1. You create an eDiscovery case named Case1. You need to ensure that Admin1 can view the results of Case1. What should you do first?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4osbq', text: 'The user will need the eDiscovery Manager role assigned and then be given the permissions to the case.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2cp9d', text: '1. Go to Microsoft Purview admin center > Permissions > Microsoft Purview solutions roles > eDiscovery Manager. Click Edit next to eDiscovery Manager.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fgqth', text: '2. Click Choose eDiscovery Manager > Add. Click the member you want to grant permission to. Click Add. Click Done > Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 114, offset: 0}], inlineStyleRanges: [], key: '9eoqq', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 91, offset: 0}], inlineStyleRanges: [], key: '9529d', text: 'https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions', target: '_blank', url: 'https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>The user will need the eDiscovery Manager role assigned and then be given the permissions to the case.</p>\n<p>1. Go to Microsoft Purview admin center &gt; Permissions &gt; Microsoft Purview solutions roles &gt; eDiscovery Manager. Click Edit next to eDiscovery Manager.</p>\n<p>2. Click Choose eDiscovery Manager &gt; Add. Click the member you want to grant permission to. Click Add. Click Done &gt; Save.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f</a></p>\n<p><a href="https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions" target="_self">https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions</a></p>\n', slug: 'admin1-can-view-the-resul-jhsmnhhwq', title: 'Admin1 can view the results of Case1', type: 'build-list'}, s2nowxi5p: {answerOptions: {agozoueeo: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '52bm6', text: 'Enable and configure In-Place Archiving for John Gruber\'s mailbox', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Enable and configure In-Place Archiving for John Gruber\'s mailbox</p>\n', id: 'agozoueeo'}, huikd2yc3: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fafe2', text: 'Set a message delivery restriction on John Gruber\'s mailbox', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Set a message delivery restriction on John Gruber\'s mailbox</p>\n', id: 'huikd2yc3'}, kzjbz3hy6: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8iv44', text: 'From the Compliance admin center, perform a content search of John Gruber\'s mailbox', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From the Compliance admin center, perform a content search of John Gruber\'s mailbox</p>\n', id: 'kzjbz3hy6'}, pdtofogpt: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a3lhl', text: 'Place John Gruber\'s mailbox on Litigation Hold', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Place John Gruber\'s mailbox on Litigation Hold</p>\n', id: 'pdtofogpt'}}, answerText: 'Place John Gruber\'s mailbox on Litigation Hold.', id: 's2nowxi5p', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2plad', text: 'Your organization has a Microsoft 365 tenant with a user named John Gruber.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '748tb', text: 'The CEO of your organization believes John Gruber may have sent email messages to one of your rivals with company secrets.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '81pgp', text: 'You must provide a way to review any emails sent by John Gruber to the rival, even those that were deleted after being sent.', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant with a user named John Gruber.</p>\n<p>The CEO of your organization believes John Gruber may have sent email messages to one of your rivals with company secrets.</p>\n<p>You must provide a way to review any emails sent by John Gruber to the rival, even those that were deleted after being sent.</p>\n', questionText: 'Your organization has a Microsoft 365 tenant with a user named John Gruber. The CEO of your organization believes John Gruber may have sent email messages to one of your rivals with company secrets. You must provide a way to review any emails sent by John Gruber to the rival, even those that were deleted after being sent.', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6c6t0', text: 'Everything in a mailbox will be kept after a litigation hold is enabled. Including items deleted, modified, and in the archive mailbox.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 114, offset: 0}], inlineStyleRanges: [], key: 'ccm8h', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Everything in a mailbox will be kept after a litigation hold is enabled. Including items deleted, modified, and in the archive mailbox.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f</a></p>\n', slug: 'provide-a-way-to-review-a-s2nowxi5p', title: 'Provide a way to review any emails sent by John Gruber to the rival', type: 'multiple-choice'}, vtlprufec: {answerOptions: {'bkl75-fsc': {answerHtml: '', answers: {nsepbpscni: {id: 'nsepbpscni', text: 'Yes'}, 'zo-ju09y-': {id: 'zo-ju09y-', text: 'No'}}, id: 'bkl75-fsc', text: 'If a user creates a file in Microsoft OneDrive on January 1, 2018, an administrator can recover the file on April 15, 2022'}, nrsqxye7b: {answerHtml: '', answers: {ei4q_z1_y: {id: 'ei4q_z1_y', text: 'Yes'}, sya0kkatz: {id: 'sya0kkatz', text: 'No'}}, id: 'nrsqxye7b', text: 'If a user creates a file in Microsoft OneDrive on January 1, 2018, users can access the file on January 15, 2019'}, p55u1hzdp: {answerHtml: '', answers: {'pl_9o-uv4': {id: 'pl_9o-uv4', text: 'Yes'}, u4sqrax86: {id: 'u4sqrax86', text: 'No'}}, id: 'p55u1hzdp', text: 'If a user deletes a file in Microsoft OneDrive on January 1, 2018, an administrator can recover the file on April 15, 2019'}}, id: 'vtlprufec', images: ['https://i.ibb.co/g9YFQN3/Policy2-Retention-Policy.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3s55n', text: 'You have a Microsoft 365 subscription. From the Security & Compliance admin center, you create the retention policies shown in the following table.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ecp1d', text: '📷', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'daob4', text: 'Policy1 is configured as shown in the following exhibit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'eovj9', text: '📷', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fv465', text: 'Policy2 is configured as shown in the following exhibit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '9qmns', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '51aiu', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7a7b', text: 'Select Yes if the statement is true. If the statement is false select No.', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Policy locations chart', src: 'https://i.ibb.co/VTTN5M2/policy-locations.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Policy1 Retention Policy', src: 'https://i.ibb.co/Z825ptq/Policy1-Retention-Policy.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 2: {data: {alt: 'Policy2 retention policy', src: 'https://i.ibb.co/g9YFQN3/Policy2-Retention-Policy.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>You have a Microsoft 365 subscription. From the Security &amp; Compliance admin center, you create the retention policies shown in the following table.</p>\n<p><img src="https://i.ibb.co/VTTN5M2/policy-locations.png" alt="Policy locations chart" style="height: undefined;width: undefined"/></p>\n<p>Policy1 is configured as shown in the following exhibit.</p>\n<p><img src="https://i.ibb.co/Z825ptq/Policy1-Retention-Policy.png" alt="Policy1 Retention Policy" style="height: undefined;width: undefined"/></p>\n<p>Policy2 is configured as shown in the following exhibit.</p>\n<img src="https://i.ibb.co/g9YFQN3/Policy2-Retention-Policy.png" alt="Policy2 retention policy" style="height: undefined;width: undefined"/>\n<p></p>\n<p>Select Yes if the statement is true. If the statement is false select No.</p>\n', questionText: 'You have a Microsoft 365 subscription. From the Security & Compliance admin center, you create the retention policies shown in the following table. 📷 Policy1 is configured as shown in the following exhibit. 📷 Policy2 is configured as shown in the following exhibit. Select Yes if the statement is true. If the statement is false select No.', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4glgf', text: 'Policy2 is in effect because retention wins over deletion. Content won\'t be permanently deleted when it also has retention settings to retain it.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 114, offset: 0}], inlineStyleRanges: [], key: '82k70', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 248, offset: 0}], inlineStyleRanges: [], key: 'qs4c', text: 'https://docs.microsoft.com/en-us/office365/securitycompliance/retention-policies?redirectSourcePath=%252fen-us%252farticle%252fOverview-of-retention- policies-5e377752-700d-4870-9b6d-12bfc12d2423#the-principles-of-retention-or-what-takes-precedence', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/office365/securitycompliance/retention-policies?redirectSourcePath=%252fen-us%252farticle%252fOverview-of-retention-', target: '_blank', url: 'https://docs.microsoft.com/en-us/office365/securitycompliance/retention-policies?redirectSourcePath=%252fen-us%252farticle%252fOverview-of-retention-'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Policy2 is in effect because retention wins over deletion. Content won\'t be permanently deleted when it also has retention settings to retain it.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f</a></p>\n<p><a href="https://docs.microsoft.com/en-us/office365/securitycompliance/retention-policies?redirectSourcePath=%252fen-us%252farticle%252fOverview-of-retention-" target="_self">https://docs.microsoft.com/en-us/office365/securitycompliance/retention-policies?redirectSourcePath=%252fen-us%252farticle%252fOverview-of-retention- policies-5e377752-700d-4870-9b6d-12bfc12d2423#the-principles-of-retention-or-what-takes-precedence</a></p>\n', slug: 'when-can-you-recover-a-fi-vtlprufec', title: 'When can you recover a file?', type: 'hot-area'}, w2fkhvcon: {answerOptions: {pirpdvias: {answerHtml: '', answers: {'ojft2qs-3': {id: 'ojft2qs-3', text: 'the user can recover the file until May 1, 2020'}, 'oyx-iecys': {id: 'oyx-iecys', text: 'the user can recover the file on March 1, 2020'}, s_5ah_arb: {id: 's_5ah_arb', text: 'the user cannot recover the file'}, uckgolu4q: {id: 'uckgolu4q', text: 'the user can recover the file until January 1, 2020'}}, id: 'pirpdvias', text: 'If a user creates a file in Microsoft OneDrive on January 1, 2019, modifies the file on March 1, 2019, and deletes the file on May 1, 2019,'}, xohcriiqr: {answerHtml: '', answers: {ewq5j4pw_: {id: 'ewq5j4pw_', text: 'the file will be deleted on January 1, 2021'}, fjcafbmjw: {id: 'fjcafbmjw', text: 'the file will be deleted on July 1, 2021'}, ygcpzvqmq: {id: 'ygcpzvqmq', text: 'the file will be retained'}}, id: 'xohcriiqr', text: 'If a user creates a file in Microsoft SharePoint library on January 1, 2019, and modifies the file every six months,'}}, id: 'w2fkhvcon', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9iil6', text: 'You have a Microsoft 365 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'amfj6', text: 'You are creating a retention policy named Retention1 as shown in the following exhibit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '9rj1q', text: '📷', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ftub7', text: 'You apply Retention1 to SharePoint sites and OneDrive accounts.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '28oak', text: 'Select the answer that properly completes the sentences.', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Retention Policy', src: 'https://i.ibb.co/z5WW2Mr/retention-policy.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>You have a Microsoft 365 subscription.</p>\n<p>You are creating a retention policy named Retention1 as shown in the following exhibit.</p>\n<p><img src="https://i.ibb.co/z5WW2Mr/retention-policy.png" alt="Retention Policy" style="height: undefined;width: undefined"/></p>\n<p>You apply Retention1 to SharePoint sites and OneDrive accounts.</p>\n<p>Select the answer that properly completes the sentences.</p>\n', questionText: 'You have a Microsoft 365 subscription. You are creating a retention policy named Retention1 as shown in the following exhibit. 📷 You apply Retention1 to SharePoint sites and OneDrive accounts. Select the answer that properly completes the sentences.', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aectj', text: 'Since "Start the retention policy" "When items were last modified" is selected and the retention period is for 2 years if a file is modified every 6 months it will be retained forever.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'amebj', text: 'Since "Start the retention policy" "When items were last modified" is selected and the retention period is for 2 years if a file is modified March 1, 2019 the file can be recovered until March 1, 2021', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 114, offset: 0}], inlineStyleRanges: [], key: 'f4lj4', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Since "Start the retention policy" "When items were last modified" is selected and the retention period is for 2 years if a file is modified every 6 months it will be retained forever.</p>\n<p>Since "Start the retention policy" "When items were last modified" is selected and the retention period is for 2 years if a file is modified March 1, 2019 the file can be recovered until March 1, 2021</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f</a></p>\n', slug: 'how-will-the-retention-po-w2fkhvcon', title: 'How will the retention policy be applied?', type: 'hot-area'}, xlunrqlha: {answerOptions: {'1k9ds71gh': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6j5um', text: 'From the Security & Compliance admin center, create a data loss prevention (DLP) policy', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From the Security &amp; Compliance admin center, create a data loss prevention (DLP) policy</p>\n', id: '1k9ds71gh'}, a3ojlmj8s: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b6gsb', text: 'From Exchange Online PowerShell, run Start-ManagedFolderAssistant', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Exchange Online PowerShell, run Start-ManagedFolderAssistant</p>\n', id: 'a3ojlmj8s'}, adrtgc8jth: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bkf8g', text: 'From Exchange Online PowerShell, run Start-RetentionAutoTagLearning', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Exchange Online PowerShell, run Start-RetentionAutoTagLearning</p>\n', id: 'adrtgc8jth'}, f3lz53e0b: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6hsk2', text: 'From the Security & Compliance admin center, create a label policy', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From the Security &amp; Compliance admin center, create a label policy</p>\n', id: 'f3lz53e0b'}}, id: 'xlunrqlha', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '591sh', text: 'You have a Microsoft 365 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3jutl', text: 'Yesterday, you created retention labels and published the labels to Microsoft Exchange Online mailboxes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bo51f', text: 'You need to ensure that the labels will be available for manual assignment as soon as possible.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '98nbm', text: 'What should you do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You have a Microsoft 365 subscription.</p>\n<p>Yesterday, you created retention labels and published the labels to Microsoft Exchange Online mailboxes.</p>\n<p>You need to ensure that the labels will be available for manual assignment as soon as possible.</p>\n<p>What should you do?</p>\n', questionText: 'You have a Microsoft 365 subscription. Yesterday, you created retention labels and published the labels to Microsoft Exchange Online mailboxes. You need to ensure that the labels will be available for manual assignment as soon as possible. What should you do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c45f5', text: 'Run the following PowerShell Command: "Get-Mailbox -ResultSize unlimited | ?{$_.Name -notlike "DiscoverySearchMailbox*"} | %{ Start-ManagedFolderAssistant $_.UserPrincipalName }"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '84ofs', text: 'Note: If you only need to publish the labels to one user immediately you can use "Start-ManagedFolderAssistant UPN" and replace UPN with the user\'s sign-in name', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 114, offset: 0}], inlineStyleRanges: [], key: '545hb', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 105, offset: 0}], inlineStyleRanges: [], key: 'cehq0', text: 'https://docs.microsoft.com/en-us/powershell/module/exchange/start-managedfolderassistant?view=exchange-ps', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/office365/securitycompliance/set-up-a-custom-blocked-urls-list-wtih-atp', target: '_blank', url: 'https://docs.microsoft.com/en-us/office365/securitycompliance/set-up-a-custom-blocked-urls-list-wtih-atp'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Run the following PowerShell Command: "Get-Mailbox -ResultSize unlimited | ?{$_.Name -notlike "DiscoverySearchMailbox*"} | %{ Start-ManagedFolderAssistant $_.UserPrincipalName }"</p>\n<p>Note: If you only need to publish the labels to one user immediately you can use "Start-ManagedFolderAssistant UPN" and replace UPN with the user\'s sign-in name</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f" target="_self">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f</a></p>\n<p><a href="https://docs.microsoft.com/en-us/office365/securitycompliance/set-up-a-custom-blocked-urls-list-wtih-atp" target="_self">https://docs.microsoft.com/en-us/powershell/module/exchange/start-managedfolderassistant?view=exchange-ps</a></p>\n', slug: 'ensure-that-the-labels-wi-xlunrqlha', title: 'Ensure that the labels will be available for manual assignment as soon as possible', type: 'multiple-choice'}}, sectionId: 'YhftdGIRX', slug: 'configuring-and-managing-retention-wuxs_obk8', title: 'Configuring and managing retention', type: 'test'},
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
