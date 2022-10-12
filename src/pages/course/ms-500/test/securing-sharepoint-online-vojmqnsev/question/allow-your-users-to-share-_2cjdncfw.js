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
      question: {answerOptions: {'98ee1nydz': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2pi6g', text: 'Modify the Device access settings so your users cannot access OneDrive files unless they are on a managed device.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Modify the Device access settings so your users cannot access OneDrive files unless they are on a managed device.</p>\n', id: '98ee1nydz'}, b5knghke6: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ep8d1', text: 'Decrease the permissions for OneDrive External sharing so your users can only share with users at Uber Bikes.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Decrease the permissions for OneDrive External sharing so your users can only share with users at Uber Bikes.</p>\n', id: 'b5knghke6'}, bbr1plbvl: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ddfv', text: 'Increase the permission level for OneDrive External sharing so your users can share with users at Uber Bikes.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Increase the permission level for OneDrive External sharing so your users can share with users at Uber Bikes.</p>\n', id: 'bbr1plbvl'}, dmr7_ya7lq: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8rjg8', text: 'Modify the Sync settings so your users can\'t sync their files to their devices.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Modify the Sync settings so your users can\'t sync their files to their devices.</p>\n', id: 'dmr7_ya7lq'}, snjnmiclb: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '249nf', text: 'Modify the Links settings.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Modify the Links settings.</p>\n', id: 'snjnmiclb'}}, answerText: 'Modify the Links settings.Decrease the permissions for OneDrive External sharing so your users can only share with users at Uber Bikes.', id: '_2cjdncfw', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'mrih', text: 'Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4avk0', text: 'Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven\'t been changed.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4rtbc', text: 'You need to allow your users to share files from Microsoft OneDrive with specific users at Uber Bikes but prevent your users from sharing files with anyone else.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7k1fc', text: 'What settings should you change in the SharePoint Online admin center?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org</p>\n<p>Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven\'t been changed.</p>\n<p>You need to allow your users to share files from Microsoft OneDrive with specific users at Uber Bikes but prevent your users from sharing files with anyone else.</p>\n<p>What settings should you change in the SharePoint Online admin center?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven\'t been changed. You need to allow your users to share files from Microsoft OneDrive with specific users at Uber Bikes but prevent your users from sharing files with anyone else. What settings should you change in the SharePoint Online admin center?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9t069', text: 'By default, OneDrive files can be shared with anyone so increasing the permission level doesn\'t make sense.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2tssc', text: 'By default, the link settings are set to "Anyone with the link" so they should be set to Specific people.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '93ag0', text: 'By setting the OneDrive External sharing to the least permissive level users would only be able to share with users that are currently in the GitBit organization so your users wouldn\'t be able to share with Uber Bikes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fald2', text: 'Decreasing the permission level for OneDrive External sharing would be correct so users cannot share with anyone.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1uk96', text: 'Modifying the device and sync settings wouldn\'t change who users can share too.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 128, offset: 0}], inlineStyleRanges: [], key: '3ikgb', text: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 75, offset: 0}], inlineStyleRanges: [], key: '4vsr4', text: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off', target: '_blank', url: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>By default, OneDrive files can be shared with anyone so increasing the permission level doesn\'t make sense.</p>\n<p>By default, the link settings are set to "Anyone with the link" so they should be set to Specific people.</p>\n<p>By setting the OneDrive External sharing to the least permissive level users would only be able to share with users that are currently in the GitBit organization so your users wouldn\'t be able to share with Uber Bikes.</p>\n<p>Decreasing the permission level for OneDrive External sharing would be correct so users cannot share with anyone.</p>\n<p>Modifying the device and sync settings wouldn\'t change who users can share too.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI" target="_self">https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI</a></p>\n<p><a href="https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off" target="_self">https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off</a></p>\n', slug: 'allow-your-users-to-share-_2cjdncfw', title: 'Allow your users to share files from Microsoft OneDrive to specific users', type: 'multiple-choice'},
      test: {answers: {'7lnqsog5w': {b3uu3ve02: {id: 'b3uu3ve02', isCorrect: false}, ichshf30l: {id: 'ichshf30l', isCorrect: false}, lqqh0bka_: {id: 'lqqh0bka_', isCorrect: true}, u683dsyvz: {id: 'u683dsyvz', isCorrect: false}}, _2cjdncfw: {'98ee1nydz': {id: '98ee1nydz', isCorrect: false}, b5knghke6: {id: 'b5knghke6', isCorrect: true}, bbr1plbvl: {id: 'bbr1plbvl', isCorrect: false}, dmr7_ya7lq: {id: 'dmr7_ya7lq', isCorrect: false}, snjnmiclb: {id: 'snjnmiclb', isCorrect: true}}, oj0aooplo: {rmstir_qm: {id: 'rmstir_qm', idx: 1}, uwbtfphfb: {id: 'uwbtfphfb', idx: 0}}, pfymaygta: {q2bt4fy5s: {id: 'q2bt4fy5s', idx: 1}, 'qq-fi7uvp': {id: 'qq-fi7uvp', idx: 0}, x9l4yb3zz: {id: 'x9l4yb3zz', idx: 2}}, zhsvqsjaa: {'c-vpcsq2x': {'8saqen2ct': {id: '8saqen2ct', isCorrect: false}, id: 'c-vpcsq2x', jxxzfmfku: {id: 'jxxzfmfku', isCorrect: true}, zjedlty9t: {id: 'zjedlty9t', isCorrect: false}}, lw00_mjo6: {id: 'lw00_mjo6', v5lvbbg8k: {id: 'v5lvbbg8k', isCorrect: false}, vttrg_wos: {id: 'vttrg_wos', isCorrect: true}, xcxg4bgta: {id: 'xcxg4bgta', isCorrect: false}, 'xk3ijb-fb': {id: 'xk3ijb-fb', isCorrect: false}}}}, datePublished: '2022/10/8', description: 'View all the MS-500 exam questions, answers and explanations for free that pertain to SharePoint Online.', featuredImage: 'https://i.ibb.co/XDzMVcY/onedrive-sharing-settings.png', id: 'vojmqnsev', images: ['https://i.ibb.co/XDzMVcY/onedrive-sharing-settings.png'], publish: true, questions: {'7lnqsog5w': {answerOptions: {b3uu3ve02: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'elsnd', text: 'Open the SharePoint admin center and configure the secure control settings.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Open the SharePoint admin center and configure the secure control settings.</p>\n', id: 'b3uu3ve02'}, ichshf30l: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3qqp', text: 'Open the Microsoft Azure AD admin center and create an Azure AD Identity Protection sign-in risk policy.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Open the Microsoft Azure AD admin center and create an Azure AD Identity Protection sign-in risk policy.</p>\n', id: 'ichshf30l'}, lqqh0bka_: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3rj08', text: 'Run the Set-SPOTenant cmdlet and specify the -ConditionalAccessPolicy parameter from the SharePoint Online PowerShell.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Run the Set-SPOTenant cmdlet and specify the -ConditionalAccessPolicy parameter from the SharePoint Online PowerShell.</p>\n', id: 'lqqh0bka_'}, u683dsyvz: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd41vq', text: 'Open the Microsoft Azure AD admin center and create an Azure AD Identity Protection user risk policy.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Open the Microsoft Azure AD admin center and create an Azure AD Identity Protection user risk policy.</p>\n', id: 'u683dsyvz'}}, id: '7lnqsog5w', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bnma2', text: 'Your organization has a Microsoft 365 tenant. Some users access Microsoft SharePoint Online from unmanaged personal devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f3f5q', text: 'Your manager has asked you to prevent the users from downloading, printing, and syncing files from their unmanaged personal devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cg29k', text: 'What do you need to do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant. Some users access Microsoft SharePoint Online from unmanaged personal devices.</p>\n<p>Your manager has asked you to prevent the users from downloading, printing, and syncing files from their unmanaged personal devices.</p>\n<p>What do you need to do?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. Some users access Microsoft SharePoint Online from unmanaged personal devices. Your manager has asked you to prevent the users from downloading, printing, and syncing files from their unmanaged personal devices. What do you need to do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '15tr5', text: 'Connect to Sharepoint Online using PowerShell then run the following command: Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 128, offset: 0}], inlineStyleRanges: [], key: '7ts2l', text: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 101, offset: 0}], inlineStyleRanges: [], key: '9s8tg', text: 'https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 81, offset: 0}], inlineStyleRanges: [], key: '2vjtt', text: 'https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps', target: '_blank', url: 'https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {href: 'https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices', target: '_blank', url: 'https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Connect to Sharepoint Online using PowerShell then run the following command: Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI" target="_self">https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI</a></p>\n<p><a href="https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps" target="_self">https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps</a></p>\n<p><a href="https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices" target="_self">https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices</a></p>\n', slug: 'prevent-users-from-downlo-7lnqsog5w', title: 'Prevent users from downloading, printing, and syncing files from their unmanaged personal devices', type: 'multiple-choice'}, _2cjdncfw: {answerOptions: {'98ee1nydz': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2pi6g', text: 'Modify the Device access settings so your users cannot access OneDrive files unless they are on a managed device.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Modify the Device access settings so your users cannot access OneDrive files unless they are on a managed device.</p>\n', id: '98ee1nydz'}, b5knghke6: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ep8d1', text: 'Decrease the permissions for OneDrive External sharing so your users can only share with users at Uber Bikes.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Decrease the permissions for OneDrive External sharing so your users can only share with users at Uber Bikes.</p>\n', id: 'b5knghke6'}, bbr1plbvl: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ddfv', text: 'Increase the permission level for OneDrive External sharing so your users can share with users at Uber Bikes.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Increase the permission level for OneDrive External sharing so your users can share with users at Uber Bikes.</p>\n', id: 'bbr1plbvl'}, dmr7_ya7lq: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8rjg8', text: 'Modify the Sync settings so your users can\'t sync their files to their devices.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Modify the Sync settings so your users can\'t sync their files to their devices.</p>\n', id: 'dmr7_ya7lq'}, snjnmiclb: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '249nf', text: 'Modify the Links settings.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Modify the Links settings.</p>\n', id: 'snjnmiclb'}}, answerText: 'Modify the Links settings.Decrease the permissions for OneDrive External sharing so your users can only share with users at Uber Bikes.', id: '_2cjdncfw', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'mrih', text: 'Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4avk0', text: 'Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven\'t been changed.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4rtbc', text: 'You need to allow your users to share files from Microsoft OneDrive with specific users at Uber Bikes but prevent your users from sharing files with anyone else.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7k1fc', text: 'What settings should you change in the SharePoint Online admin center?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org</p>\n<p>Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven\'t been changed.</p>\n<p>You need to allow your users to share files from Microsoft OneDrive with specific users at Uber Bikes but prevent your users from sharing files with anyone else.</p>\n<p>What settings should you change in the SharePoint Online admin center?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant with a primary domain of GitBit.org Your organization works with a partner company named Uber Bikes. Your Microsoft OneDrive settings haven\'t been changed. You need to allow your users to share files from Microsoft OneDrive with specific users at Uber Bikes but prevent your users from sharing files with anyone else. What settings should you change in the SharePoint Online admin center?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9t069', text: 'By default, OneDrive files can be shared with anyone so increasing the permission level doesn\'t make sense.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2tssc', text: 'By default, the link settings are set to "Anyone with the link" so they should be set to Specific people.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '93ag0', text: 'By setting the OneDrive External sharing to the least permissive level users would only be able to share with users that are currently in the GitBit organization so your users wouldn\'t be able to share with Uber Bikes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fald2', text: 'Decreasing the permission level for OneDrive External sharing would be correct so users cannot share with anyone.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1uk96', text: 'Modifying the device and sync settings wouldn\'t change who users can share too.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 128, offset: 0}], inlineStyleRanges: [], key: '3ikgb', text: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 75, offset: 0}], inlineStyleRanges: [], key: '4vsr4', text: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off', target: '_blank', url: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>By default, OneDrive files can be shared with anyone so increasing the permission level doesn\'t make sense.</p>\n<p>By default, the link settings are set to "Anyone with the link" so they should be set to Specific people.</p>\n<p>By setting the OneDrive External sharing to the least permissive level users would only be able to share with users that are currently in the GitBit organization so your users wouldn\'t be able to share with Uber Bikes.</p>\n<p>Decreasing the permission level for OneDrive External sharing would be correct so users cannot share with anyone.</p>\n<p>Modifying the device and sync settings wouldn\'t change who users can share too.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI" target="_self">https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI</a></p>\n<p><a href="https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off" target="_self">https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off</a></p>\n', slug: 'allow-your-users-to-share-_2cjdncfw', title: 'Allow your users to share files from Microsoft OneDrive to specific users', type: 'multiple-choice'}, oj0aooplo: {answerOptions: {ddi5oothg: {answer: 'Open the Azure AD admin center', answerHtml: '', id: 'ddi5oothg'}, oqw3352kp: {answer: 'Create an Azure AD sign-in risk policy', answerHtml: '', id: 'oqw3352kp'}, rmstir_qm: {answer: 'Configure the Access control settings', answerHtml: '', id: 'rmstir_qm'}, uwbtfphfb: {answer: 'Open the SharePoint admin center', answerHtml: '', id: 'uwbtfphfb'}, xnusk8mhs: {answer: 'Create an Azure AD conditional access policy', answerHtml: '', id: 'xnusk8mhs'}}, id: 'oj0aooplo', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'af2nd', text: 'your organization has a Microsoft 365 tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c5719', text: 'Most of your users access Microsoft SharePoint Online from unmanaged personal devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fap13', text: 'You\'ve been tasked with preventing users from downloading, printing, and syncing files to unmanaged devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '62rji', text: 'What should you do to fulfill the task?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>your organization has a Microsoft 365 tenant.</p>\n<p>Most of your users access Microsoft SharePoint Online from unmanaged personal devices.</p>\n<p>You\'ve been tasked with preventing users from downloading, printing, and syncing files to unmanaged devices.</p>\n<p>What should you do to fulfill the task?</p>\n', questionText: 'your organization has a Microsoft 365 tenant. Most of your users access Microsoft SharePoint Online from unmanaged personal devices. You\'ve been tasked with preventing users from downloading, printing, and syncing files to unmanaged devices. What should you do to fulfill the task?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '96k6l', text: 'You can use the SharePoint admin center > Access control page or the Set-SPOTenant PowerShell cmdlet to block or limit access to SharePoint and OneDrive content from unmanaged devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 128, offset: 0}], inlineStyleRanges: [], key: 'a23gc', text: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 183, offset: 0}], inlineStyleRanges: [], key: '9cmk6', text: 'https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps', target: '_blank', url: 'https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You can use the SharePoint admin center &gt; Access control page or the Set-SPOTenant PowerShell cmdlet to block or limit access to SharePoint and OneDrive content from unmanaged devices.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI" target="_self">https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI</a></p>\n<p><a href="https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps" target="_self">https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spotenant?view=sharepoint-ps https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices</a></p>\n', slug: 'how-do-you-prevent-users--oj0aooplo', title: 'How do you prevent users from downloading, printing, and syncing files to unmanaged devices.', type: 'build-list'}, pfymaygta: {answerOptions: {'gctitiv-4': {answer: 'Open the Azure AD admin center', answerHtml: '', id: 'gctitiv-4'}, q2bt4fy5s: {answer: 'Select Policies > Sharing', answerHtml: '', id: 'q2bt4fy5s'}, 'qq-fi7uvp': {answer: 'Open the SharePoint admin center', answerHtml: '', id: 'qq-fi7uvp'}, vkcaw25ey: {answer: 'Open the Microsoft 365 admin center', answerHtml: '', id: 'vkcaw25ey'}, x9l4yb3zz: {answer: 'Select More external sharing settings', answerHtml: '', id: 'x9l4yb3zz'}}, id: 'pfymaygta', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8uar3', text: 'Your manager discovers that users are sharing Microsoft SharePoint files and content with external people.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7fptp', text: 'He has asked you to block sharing invitations to any external users except users from gitbit.org.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '49rgv', text: 'How do you complete the task?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your manager discovers that users are sharing Microsoft SharePoint files and content with external people.</p>\n<p>He has asked you to block sharing invitations to any external users except users from gitbit.org.</p>\n<p>How do you complete the task?</p>\n', questionText: 'Your manager discovers that users are sharing Microsoft SharePoint files and content with external people. He has asked you to block sharing invitations to any external users except users from gitbit.org. How do you complete the task?', references: {blocks: [{data: {}, depth: 0, entityRanges: [{key: 0, length: 128, offset: 0}], inlineStyleRanges: [], key: 'dnk08', text: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 115, offset: 0}], inlineStyleRanges: [], key: '6d48f', text: 'https://www.iorad.com/player/1797740/MS-500---Allow-sharing-invitations-to-be-sent-only-to-users-in-an-email-domain', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '12mpu', text: 'Open the SharePoint admin center > Policies > Sharing > More external sharing settings > Limit external sharing by domain > Add domains > Allow only specific domains > Set the domain you want to allow > Save.', type: 'ordered-list-item'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://www.iorad.com/player/1797740/MS-500---Allow-sharing-invitations-to-be-sent-only-to-users-in-an-email-domain', target: '_blank', url: 'https://www.iorad.com/player/1797740/MS-500---Allow-sharing-invitations-to-be-sent-only-to-users-in-an-email-domain'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p><a href="https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI" target="_self">https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI</a></p>\n<p><a href="https://www.iorad.com/player/1797740/MS-500---Allow-sharing-invitations-to-be-sent-only-to-users-in-an-email-domain" target="_self">https://www.iorad.com/player/1797740/MS-500---Allow-sharing-invitations-to-be-sent-only-to-users-in-an-email-domain</a></p>\n<ol>\n<li>Open the SharePoint admin center &gt; Policies &gt; Sharing &gt; More external sharing settings &gt; Limit external sharing by domain &gt; Add domains &gt; Allow only specific domains &gt; Set the domain you want to allow &gt; Save.</li>\n</ol>\n', slug: 'how-to-block-sharing-invi-pfymaygta', title: 'How to block sharing invitations to any external users except users from gitbit.org', type: 'build-list'}, zhsvqsjaa: {answerOptions: {'c-vpcsq2x': {answerHtml: '', answers: {'8saqen2ct': {id: '8saqen2ct', text: 'cannot access OneDrive files.'}, jxxzfmfku: {id: 'jxxzfmfku', text: 'can access OneDrive files after a link is created.'}, zjedlty9t: {id: 'zjedlty9t', text: 'must be added to a group before the user can access OneDrive content'}}, id: 'c-vpcsq2x', text: 'If a new guest user is created for userB@adatum.com the user'}, lw00_mjo6: {answerHtml: '', answers: {v5lvbbg8k: {id: 'v5lvbbg8k', text: 'must be added to a group before the user can access OneDrive content'}, vttrg_wos: {id: 'vttrg_wos', text: 'cannot access OneDrive files.'}, 'xk3ijb-fb': {id: 'xk3ijb-fb', text: 'can access OneDrive files after a link is created.'}}, id: 'lw00_mjo6', text: 'A user with an email address of userA@google.com'}}, answerText: 'can access OneDrive files after a link is created.cannot access OneDrive files.', id: 'zhsvqsjaa', images: ['https://i.ibb.co/XDzMVcY/onedrive-sharing-settings.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5uvg8', text: 'Your organization has a Microsoft 365 tenant with a domain of gitbit.org.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eakef', text: 'You configure the Sharing settings in Microsoft SharePoint Online as below.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '4jglf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2rhtd', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2sihf', text: 'Select the correct answers below', type: 'unstyled'}], entityMap: {0: {data: {alt: 'OneDrive and SharePoint sharing settings', src: 'https://i.ibb.co/XDzMVcY/onedrive-sharing-settings.png'}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant with a domain of gitbit.org.</p>\n<p>You configure the Sharing settings in Microsoft SharePoint Online as below.</p>\n<img src="https://i.ibb.co/XDzMVcY/onedrive-sharing-settings.png" alt="OneDrive and SharePoint sharing settings" style="height: undefined;width: undefined"/>\n<p></p>\n<p>Select the correct answers below</p>\n', questionText: 'Your organization has a Microsoft 365 tenant with a domain of gitbit.org. You configure the Sharing settings in Microsoft SharePoint Online as below. Select the correct answers below', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '75cgc', text: 'google.com is not listed in the "allow only these domains" list so they cannot access OneDrive files.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4434v', text: 'adatum.com is listed in the "allow only these domains" but OneDrive sharing is set to "existing external users" so a guest user account would be required. Once the guest account is created and the content is shared with the Adatum.com user then the Adatum user will be able to access the content.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 128, offset: 0}], inlineStyleRanges: [], key: '5qe0j', text: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 75, offset: 0}], inlineStyleRanges: [], key: '4nste', text: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off', target: '_blank', url: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>google.com is not listed in the "allow only these domains" list so they cannot access OneDrive files.</p>\n<p>adatum.com is listed in the "allow only these domains" but OneDrive sharing is set to "existing external users" so a guest user account would be required. Once the guest account is created and the content is shared with the Adatum.com user then the Adatum user will be able to access the content.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI" target="_self">https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI</a></p>\n<p><a href="https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off" target="_self">https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off</a></p>\n', slug: 'review-what-external-user-zhsvqsjaa', title: 'Review what external users can access SharePoint and OneDrive files', type: 'hot-area'}}, sectionId: 'YhftdGIRX', slug: 'securing-sharepoint-online-vojmqnsev', title: 'Securing SharePoint Online', type: 'test'},
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
