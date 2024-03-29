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
      bidvHeight: '362px',
      uid: '',
      unsavedChanges: false,
      alert: '',
      answerShown: false,
      showQuestionList: false,
      question: {answerOptions: {'-ge1ovxpx': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c9a44', text: 'Group 4', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 4</p>\n', id: '-ge1ovxpx'}, '1k-a7ecdb': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9kp7g', text: 'Group 14', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 14</p>\n', id: '1k-a7ecdb'}, '9txdkkxzr': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5r3pr', text: 'Group 13', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 13</p>\n', id: '9txdkkxzr'}, crxkwtfkv: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'efi3f', text: 'Group 1', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 1</p>\n', id: 'crxkwtfkv'}, e72l_qa5a: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5hpi7', text: 'Group 11', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 11</p>\n', id: 'e72l_qa5a'}, fsrydtgq8: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ep8lb', text: 'Group 12', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 12</p>\n', id: 'fsrydtgq8'}, 'hocz-2cid': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c9a63', text: 'Group 3', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 3</p>\n', id: 'hocz-2cid'}, tzvgyoxhg: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2u2rq', text: 'Group 2', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 2</p>\n', id: 'tzvgyoxhg'}}, answerText: 'Group 1. Group 4. Group 14. Group 13.', id: 'hnt9mftfw', images: ['https://i.ibb.co/Xx0jdjJ/Groups2.png', 'https://i.ibb.co/FbhnFpH/Groups.png', 'https://i.ibb.co/FbhnFpH/Groups.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bp047', text: 'Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '77opj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd96jc', text: 'The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '6rna5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '806c9', text: 'You create an Information Protection label policy named Policy1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '90v0m', text: 'You need to apply Policy1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd9t9g', text: 'To which groups can you apply Policy1?', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Group set 1', height: 148, src: 'https://i.ibb.co/FbhnFpH/Groups.png', width: 553}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Group set 2', height: 148, src: 'https://i.ibb.co/Xx0jdjJ/Groups2.png', width: 564}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table.</p>\n<img src="https://i.ibb.co/FbhnFpH/Groups.png" alt="Group set 1" height="148" width="553" style="aspect-ratio: auto 553 / 148; height: auto;" />\n<p>The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table.</p>\n<img src="https://i.ibb.co/Xx0jdjJ/Groups2.png" alt="Group set 2" height="148" width="564" style="aspect-ratio: auto 564 / 148; height: auto;" />\n<p>You create an Information Protection label policy named Policy1.</p>\n<p>You need to apply Policy1.</p>\n<p>To which groups can you apply Policy1?</p>\n', questionText: 'Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table. The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table. You create an Information Protection label policy named Policy1. You need to apply Policy1. To which groups can you apply Policy1?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5p7n5', text: 'Labels can be applied to any group that has an email address.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '4ckla', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 69, offset: 0}], inlineStyleRanges: [], key: 'eskh1', text: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Labels can be applied to any group that has an email address.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/information-protection/prepare" target="_self">https://docs.microsoft.com/en-us/azure/information-protection/prepare</a></p>\n', slug: 'to-which-groups-can-you-a-hnt9mftfw', title: 'To which groups can you apply Policy1?', type: 'multiple-choice'},
      test: {answers: {bwzmgdcav: {deandxifw: {id: 'deandxifw', isCorrect: true}, garzwa4dy: {id: 'garzwa4dy', isCorrect: false}, 's_ljg-bdf': {id: 's_ljg-bdf', isCorrect: false}, t74kendml: {id: 't74kendml', isCorrect: false}}, d0npibkzf: {ecwaqp_hp: {id: 'ecwaqp_hp', isCorrect: true}, o2b348ksa: {id: 'o2b348ksa', isCorrect: false}, sh6h3zlqp: {id: 'sh6h3zlqp', isCorrect: false}, tekdqag0e: {id: 'tekdqag0e', isCorrect: true}, uakffzilc: {id: 'uakffzilc', isCorrect: true}}, e_7xjpzye: {'6yzk4s2wq': {id: '6yzk4s2wq', isCorrect: false}, pxcc7sb_s: {id: 'pxcc7sb_s', isCorrect: false}, zegugbf1e: {id: 'zegugbf1e', isCorrect: true}}, 'f0swmvw-q': {'26rwrdsbo': {answerId: 'wss0z2hws', id: '26rwrdsbo'}, qeri8d2is: {answerId: '9rgvh8vl8', id: 'qeri8d2is'}, wbydjnthv: {answerId: 'qukghbbh9', id: 'wbydjnthv'}}, hnt9mftfw: {'-ge1ovxpx': {id: '-ge1ovxpx', isCorrect: true}, '1k-a7ecdb': {id: '1k-a7ecdb', isCorrect: true}, '9txdkkxzr': {id: '9txdkkxzr', isCorrect: true}, crxkwtfkv: {id: 'crxkwtfkv', isCorrect: true}, e72l_qa5a: {id: 'e72l_qa5a', isCorrect: false}, fsrydtgq8: {id: 'fsrydtgq8', isCorrect: false}, 'hocz-2cid': {id: 'hocz-2cid', isCorrect: false}, tzvgyoxhg: {id: 'tzvgyoxhg', isCorrect: false}}, rbznddltc: {'0xfudvojt': {id: '0xfudvojt', idx: 0}, egbwwqnzm: {id: 'egbwwqnzm', idx: 3}, oki15ayit: {id: 'oki15ayit', idx: 1}, ubacgqhcy: {id: 'ubacgqhcy', idx: 2}}, zvcwvghdj: {'196wir48n': {fu2vju_ib: {id: 'fu2vju_ib', isCorrect: false}, h7twhtnj0: {id: 'h7twhtnj0', isCorrect: true}, id: '196wir48n', qhxcgejvr: {id: 'qhxcgejvr', isCorrect: false}, uwpxtwebr: {id: 'uwpxtwebr', isCorrect: false}}, epokleem7: {'5xfq7dopp': {id: '5xfq7dopp', isCorrect: false}, _xdk6a4xvj: {id: '_xdk6a4xvj', isCorrect: true}, ejulf7yfz: {id: 'ejulf7yfz', isCorrect: false}, id: 'epokleem7', nshxe4p_f: {id: 'nshxe4p_f', isCorrect: false}}, n38baemmy: {dmy9p2v0x: {id: 'dmy9p2v0x', isCorrect: false}, egpaixjt_: {id: 'egpaixjt_', isCorrect: false}, id: 'n38baemmy', 'kmj-zkxq0': {id: 'kmj-zkxq0', isCorrect: true}, phw3rz1ry: {id: 'phw3rz1ry', isCorrect: false}, y6jzhya13: {id: 'y6jzhya13', isCorrect: false}}}}, datePublished: '2022/10/3', description: 'All the questions you may see about classifying data using labels in the Microsoft 365 security administrator (MS-500) certificate', featuredImage: 'https://i.ibb.co/FbhnFpH/Groups.png', id: 'hy190mz8_', images: ['https://i.ibb.co/Xx0jdjJ/Groups2.png', 'https://i.ibb.co/FbhnFpH/Groups.png', 'https://i.ibb.co/FbhnFpH/Groups.png'], publish: true, questions: {bwzmgdcav: {answerOptions: {deandxifw: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8sbk7', text: 'Go to Reports > How labels were applied', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Go to Reports &gt; How labels were applied</p>\n', id: 'deandxifw'}, garzwa4dy: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c71cq', text: 'From Reports, select Dashboard', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Reports, select Dashboard</p>\n', id: 'garzwa4dy'}, 's_ljg-bdf': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ah4f', text: 'From Search & investigation, select eDiscovery', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Search &amp; investigation, select eDiscovery</p>\n', id: 's_ljg-bdf'}, t74kendml: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '91vlj', text: 'From Search & investigation, select Content search', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Search &amp; investigation, select Content search</p>\n', id: 't74kendml'}}, answerText: 'Go to Reports > How labels were applied.', id: 'bwzmgdcav', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cfvb3', text: 'You recently created and published several labels policies in a Microsoft 365 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9kckv', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5u5fs', text: 'You need to view which labels were applied by users manually and which labels were applied automatically.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bkt1', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2osae', text: 'What should you do from the Compliance admin center?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You recently created and published several labels policies in a Microsoft 365 subscription.</p>\n<p></p>\n<p>You need to view which labels were applied by users manually and which labels were applied automatically.</p>\n<p></p>\n<p>What should you do from the Compliance admin center?</p>\n', questionText: 'You recently created and published several labels policies in a Microsoft 365 subscription. You need to view which labels were applied by users manually and which labels were applied automatically. What should you do from the Compliance admin center?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'conjo', text: 'From the Compliance admin center navigate to Reports > How labels were applied', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '6k090', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>From the Compliance admin center navigate to Reports &gt; How labels were applied</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n', slug: 'view-which-labels-were-ap-bwzmgdcav', title: 'View which labels were applied by users manually and which labels were applied automatically', type: 'multiple-choice'}, d0npibkzf: {answerOptions: {ecwaqp_hp: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dmvs6', text: 'A distribution list', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A distribution list</p>\n', id: 'ecwaqp_hp'}, o2b348ksa: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5bt11', text: 'A security group created in the Azure AD admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A security group created in the Azure AD admin center</p>\n', id: 'o2b348ksa'}, sh6h3zlqp: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bn84e', text: 'A security group', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A security group</p>\n', id: 'sh6h3zlqp'}, tekdqag0e: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4mmot', text: 'A Microsoft 365 group', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A Microsoft 365 group</p>\n', id: 'tekdqag0e'}, uakffzilc: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '55oqa', text: 'A mail-enabled security group', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A mail-enabled security group</p>\n', id: 'uakffzilc'}}, id: 'd0npibkzf', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b739d', text: 'You\'ve been tasked to create a group that will be used for publishing sensitivity labels. The group must only contain user accounts. What are the possible ways to create the group?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You\'ve been tasked to create a group that will be used for publishing sensitivity labels. The group must only contain user accounts. What are the possible ways to create the group?</p>\n', questionText: 'You\'ve been tasked to create a group that will be used for publishing sensitivity labels. The group must only contain user accounts. What are the possible ways to create the group?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '431am', text: 'You can publish labels to users but only to groups that have email addresses (Distribution groups, Microsoft 365 groups, and mail-enabled security groups). You can\'t publish a label to a security group. The group can have assigned or dynamic membership.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '5irso', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 130, offset: 0}], inlineStyleRanges: [], key: '3k9b7', text: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts', target: '_self', url: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You can publish labels to users but only to groups that have email addresses (Distribution groups, Microsoft 365 groups, and mail-enabled security groups). You can\'t publish a label to a security group. The group can have assigned or dynamic membership.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts" target="_self">https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts</a></p>\n', slug: 'what-groups-can-be-used-t-d0npibkzf', title: 'What groups can be used to assign sensitivity labels?', type: 'multiple-choice'}, e_7xjpzye: {answerOptions: {'6yzk4s2wq': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '34vqk', text: 'The content expiration settings of the label.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>The content expiration settings of the label.</p>\n', id: '6yzk4s2wq'}, pxcc7sb_s: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'doos9', text: 'The encryption settings of the label.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>The encryption settings of the label.</p>\n', id: 'pxcc7sb_s'}, zegugbf1e: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ks7c', text: 'The external sharing settings and the assigned permissions of the label', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>The external sharing settings and the assigned permissions of the label</p>\n', id: 'zegugbf1e'}}, id: 'e_7xjpzye', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e156l', text: 'Your organization has a Microsoft 365 tenant. Your tenant has an information protection label named CompanyConfidential in the Microsoft Compliance admin center. Your tenant has CompanyConfidential applied to a global policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eq5n3', text: 'One of your users protects an email using the CompanyConfidential label and sends the email to an external recipient. The external recipient reports that they cannot open the email.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3hohe', text: 'You\'ve been asked to assist the user so the email can be sent to the external recipient. What should you do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant. Your tenant has an information protection label named CompanyConfidential in the Microsoft Compliance admin center. Your tenant has CompanyConfidential applied to a global policy.</p>\n<p>One of your users protects an email using the CompanyConfidential label and sends the email to an external recipient. The external recipient reports that they cannot open the email.</p>\n<p>You\'ve been asked to assist the user so the email can be sent to the external recipient. What should you do?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. Your tenant has an information protection label named CompanyConfidential in the Microsoft Compliance admin center. Your tenant has CompanyConfidential applied to a global policy. One of your users protects an email using the CompanyConfidential label and sends the email to an external recipient. The external recipient reports that they cannot open the email. You\'ve been asked to assist the user so the email can be sent to the external recipient. What should you do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4od1t', text: 'External users can open emails labeled with encryption and content expiration. The issue is caused by the external sharing settings or assigned permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4nlnp', text: 'If the label is set to limit external sharing and the setting is set to only people in your organization, or existing guests external users may not be able to open the email.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7lu3b', text: 'If the label is set so permissions are applied and then limited to only authenticated users or specific users where the recipient isn\'t listed then the user won\'t be able to access the data.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: 'd2c1h', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>External users can open emails labeled with encryption and content expiration. The issue is caused by the external sharing settings or assigned permissions.</p>\n<p>If the label is set to limit external sharing and the setting is set to only people in your organization, or existing guests external users may not be able to open the email.</p>\n<p>If the label is set so permissions are applied and then limited to only authenticated users or specific users where the recipient isn\'t listed then the user won\'t be able to access the data.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n', slug: 'assist-the-user-so-the-em-e_7xjpzye', title: 'Assist the user so the email can be sent to the external recipient', type: 'multiple-choice'}, 'f0swmvw-q': {answerOptions: {'8iabnio3a': {answer: 'on-premises Active Directory Users and Computers', answerHtml: '', id: '8iabnio3a'}, '9rgvh8vl8': {answer: 'Microsoft Entra admin center', answerHtml: '', id: '9rgvh8vl8'}, boen9qyxi: {answer: 'Microsoft 365 admin center', answerHtml: '', id: 'boen9qyxi'}, codgiwag7: {answer: 'A security group', answerHtml: '', id: 'codgiwag7'}, nsra1lyym: {answer: 'A dynamic membership rule set to accountEnabled Equals true', answerHtml: '', id: 'nsra1lyym'}, qukghbbh9: {answer: 'A Microsoft 365 group', answerHtml: '', id: 'qukghbbh9'}, wss0z2hws: {answer: 'A dynamic membership rule set to userType Equals Member', answerHtml: '', id: 'wss0z2hws'}}, answerText: 'Microsoft Entra admin center. A dynamic membership rule set to userType Equals Member. A Microsoft 365 group.', id: 'f0swmvw-q', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'en56g', text: 'Your organization has a Microsoft 365 tenant that\'s syncing the users and groups from an on-premises AD using AD Connect.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bmpos', text: 'Your company has recently hired a new team of people to manage the sensitivity labels.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4eslo', text: 'Your manager has asked you to configure a new group that will be used for publishing sensitivity labels to pilot users. The group must contain only user accounts (excluding guest accounts). The membership of the group should be automatically updated.', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant that\'s syncing the users and groups from an on-premises AD using AD Connect.</p>\n<p>Your company has recently hired a new team of people to manage the sensitivity labels.</p>\n<p>Your manager has asked you to configure a new group that will be used for publishing sensitivity labels to pilot users. The group must contain only user accounts (excluding guest accounts). The membership of the group should be automatically updated.</p>\n', questionText: 'Your organization has a Microsoft 365 tenant that\'s syncing the users and groups from an on-premises AD using AD Connect. Your company has recently hired a new team of people to manage the sensitivity labels. Your manager has asked you to configure a new group that will be used for publishing sensitivity labels to pilot users. The group must contain only user accounts (excluding guest accounts). The membership of the group should be automatically updated.', questions: {'26rwrdsbo': {answerId: '', id: '26rwrdsbo', text: 'Membership criteria'}, qeri8d2is: {answerId: '', id: 'qeri8d2is', text: 'Where should you create the group?'}, wbydjnthv: {answerId: '', id: 'wbydjnthv', text: 'What type of group should you create?'}}, references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8rrf2', text: 'You can use any group type that has an email address. That includes a mail-enabled security group, a distribution group, or a Microsoft 365 group. You cannot use a security group because it doesn\'t have an email address.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '118f', text: 'You can set up a rule for dynamic membership on security groups or Microsoft 365 groups. The criteria should be set to userType -eq "Member"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '63o7t', text: 'You must create dynamic groups in Azure AD. Microsoft 365 doesn\'t have dynamic membership. On-premises dynamic groups don\'t sync to Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: 'd7mnb', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 69, offset: 0}], inlineStyleRanges: [], key: '4nkab', text: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You can use any group type that has an email address. That includes a mail-enabled security group, a distribution group, or a Microsoft 365 group. You cannot use a security group because it doesn\'t have an email address.</p>\n<p>You can set up a rule for dynamic membership on security groups or Microsoft 365 groups. The criteria should be set to userType -eq "Member"</p>\n<p>You must create dynamic groups in Azure AD. Microsoft 365 doesn\'t have dynamic membership. On-premises dynamic groups don\'t sync to Microsoft 365.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/information-protection/prepare" target="_self">https://docs.microsoft.com/en-us/azure/information-protection/prepare</a></p>\n', slug: 'configure-a-new-group-tha-f0swmvw-q', title: 'Configure a new group that will be used for publishing sensitivity labels', type: 'drag-drop'}, hnt9mftfw: {answerOptions: {'-ge1ovxpx': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c9a44', text: 'Group 4', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 4</p>\n', id: '-ge1ovxpx'}, '1k-a7ecdb': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9kp7g', text: 'Group 14', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 14</p>\n', id: '1k-a7ecdb'}, '9txdkkxzr': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5r3pr', text: 'Group 13', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 13</p>\n', id: '9txdkkxzr'}, crxkwtfkv: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'efi3f', text: 'Group 1', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 1</p>\n', id: 'crxkwtfkv'}, e72l_qa5a: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5hpi7', text: 'Group 11', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 11</p>\n', id: 'e72l_qa5a'}, fsrydtgq8: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ep8lb', text: 'Group 12', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 12</p>\n', id: 'fsrydtgq8'}, 'hocz-2cid': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c9a63', text: 'Group 3', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 3</p>\n', id: 'hocz-2cid'}, tzvgyoxhg: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2u2rq', text: 'Group 2', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 2</p>\n', id: 'tzvgyoxhg'}}, answerText: 'Group 1. Group 4. Group 14. Group 13.', id: 'hnt9mftfw', images: ['https://i.ibb.co/Xx0jdjJ/Groups2.png', 'https://i.ibb.co/FbhnFpH/Groups.png', 'https://i.ibb.co/FbhnFpH/Groups.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bp047', text: 'Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '77opj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd96jc', text: 'The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '6rna5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '806c9', text: 'You create an Information Protection label policy named Policy1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '90v0m', text: 'You need to apply Policy1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd9t9g', text: 'To which groups can you apply Policy1?', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Group set 1', height: 148, src: 'https://i.ibb.co/FbhnFpH/Groups.png', width: 553}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Group set 2', height: 148, src: 'https://i.ibb.co/Xx0jdjJ/Groups2.png', width: 564}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table.</p>\n<img src="https://i.ibb.co/FbhnFpH/Groups.png" alt="Group set 1" height="148" width="553" style="aspect-ratio: auto 553 / 148; height: auto;" />\n<p>The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table.</p>\n<img src="https://i.ibb.co/Xx0jdjJ/Groups2.png" alt="Group set 2" height="148" width="564" style="aspect-ratio: auto 564 / 148; height: auto;" />\n<p>You create an Information Protection label policy named Policy1.</p>\n<p>You need to apply Policy1.</p>\n<p>To which groups can you apply Policy1?</p>\n', questionText: 'Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table. The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table. You create an Information Protection label policy named Policy1. You need to apply Policy1. To which groups can you apply Policy1?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5p7n5', text: 'Labels can be applied to any group that has an email address.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '4ckla', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 69, offset: 0}], inlineStyleRanges: [], key: 'eskh1', text: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Labels can be applied to any group that has an email address.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/information-protection/prepare" target="_self">https://docs.microsoft.com/en-us/azure/information-protection/prepare</a></p>\n', slug: 'to-which-groups-can-you-a-hnt9mftfw', title: 'To which groups can you apply Policy1?', type: 'multiple-choice'}, rbznddltc: {answerOptions: {'0xfudvojt': {answer: 'Open the Microsoft 365 purview / compliance admin center', answerHtml: '', id: '0xfudvojt'}, egbwwqnzm: {answer: 'Publish the label', answerHtml: '', id: 'egbwwqnzm'}, oki15ayit: {answer: 'Go to Information protection', answerHtml: '', id: 'oki15ayit'}, ubacgqhcy: {answer: 'Create and configure a label', answerHtml: '', id: 'ubacgqhcy'}}, answerText: 'Open the Microsoft 365 purview / compliance admin center. Go to Information protection. Create and configure a label. Publish the label.', id: 'rbznddltc', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4eis', text: 'Your organization has a Microsoft 365 tenant. Your organization has recently hired an organization to review your compliance requirements. They notice your accountants have a lot of data with different levels of sensitivity. Your team has been asked to create a label for some of the accountants to use. Your manager has asked you to create a sensitivity label. Where do you go to create the label?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant. Your organization has recently hired an organization to review your compliance requirements. They notice your accountants have a lot of data with different levels of sensitivity. Your team has been asked to create a label for some of the accountants to use. Your manager has asked you to create a sensitivity label. Where do you go to create the label?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. Your organization has recently hired an organization to review your compliance requirements. They notice your accountants have a lot of data with different levels of sensitivity. Your team has been asked to create a label for some of the accountants to use. Your manager has asked you to create a sensitivity label. Where do you go to create the label?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '90kmb', text: 'You need to go to the Microsoft 365 purview/compliance center > Information Protection > Labels > Create a label. From there you can follow the wizard to configure your label. Once your label is created you\'ll need to publish the label to your users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: 'd3iap', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 19, offset: 0}], inlineStyleRanges: [], key: '3oh4a', text: 'https://ior.ad/7BnF', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://ior.ad/7BnF', target: '_blank', url: 'https://ior.ad/7BnF'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You need to go to the Microsoft 365 purview/compliance center &gt; Information Protection &gt; Labels &gt; Create a label. From there you can follow the wizard to configure your label. Once your label is created you\'ll need to publish the label to your users.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://ior.ad/7BnF" target="_self">https://ior.ad/7BnF</a></p>\n', slug: 'where-do-you-go-to-create-rbznddltc', title: 'Where do you go to create the label?', type: 'build-list'}, zvcwvghdj: {answerOptions: {'196wir48n': {answerHtml: '', answers: {fu2vju_ib: {id: 'fu2vju_ib', text: 'Label1'}, h7twhtnj0: {id: 'h7twhtnj0', text: 'Label2'}, qhxcgejvr: {id: 'qhxcgejvr', text: 'Label1 and Label2'}, uwpxtwebr: {id: 'uwpxtwebr', text: 'No label'}}, id: '196wir48n', text: 'If User1 saves a Word document with "Product1 and Product2" in it, the document will be assigned:'}, epokleem7: {answerHtml: '', answers: {'5xfq7dopp': {id: '5xfq7dopp', text: 'No label'}, _xdk6a4xvj: {id: '_xdk6a4xvj', text: 'Label2'}, ejulf7yfz: {id: 'ejulf7yfz', text: 'Label1'}, nshxe4p_f: {id: 'nshxe4p_f', text: 'Label1 and Label2'}}, id: 'epokleem7', text: 'If User1 saves a Word document with "Product2 and Product1" in it, the document will be assigned'}, n38baemmy: {answerHtml: '', answers: {egpaixjt_: {id: 'egpaixjt_', text: 'Label2'}, 'kmj-zkxq0': {id: 'kmj-zkxq0', text: 'No label'}, phw3rz1ry: {id: 'phw3rz1ry', text: 'Label1 and Label2'}, y6jzhya13: {id: 'y6jzhya13', text: 'Label1'}}, id: 'n38baemmy', text: 'If User1 saves a Word document with "product2" in it, the document will be assigned'}}, id: 'zvcwvghdj', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '159pu', text: 'Your organization has the sensitive info type data classifications shown below.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '3vhvb', text: '📷', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fok8m', text: 'Your organization has the Information Protection labels shown below', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '2opq7', text: '📷', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd7rs8', text: 'Your organization has the Information Protection label policies shown below', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bf8o8', text: '📷', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2nq4r', text: 'check the box next to each true statement.', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Condition chart', height: 100, src: 'https://i.ibb.co/Hz0XgJn/condition-chart.png', width: 397}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Label Conditions', height: 100, src: 'https://i.ibb.co/xYd5gCX/label-conditions.png', width: 443}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 2: {data: {alt: 'Policy Chart', height: 133, src: 'https://i.ibb.co/H7SJhBG/policy-chart2.png', width: 575}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your organization has the sensitive info type data classifications shown below.</p>\n<img src="https://i.ibb.co/Hz0XgJn/condition-chart.png" alt="Condition chart" height="100" width="397" style="aspect-ratio: auto 397 / 100; height: auto;" />\n<p>Your organization has the Information Protection labels shown below</p>\n<img src="https://i.ibb.co/xYd5gCX/label-conditions.png" alt="Label Conditions" height="100" width="443" style="aspect-ratio: auto 443 / 100; height: auto;" />\n<p>Your organization has the Information Protection label policies shown below</p>\n<img src="https://i.ibb.co/H7SJhBG/policy-chart2.png" alt="Policy Chart" height="133" width="575" style="aspect-ratio: auto 575 / 133; height: auto;" />\n<p>check the box next to each true statement.</p>\n', questionText: 'Your organization has the sensitive info type data classifications shown below. 📷 Your organization has the Information Protection labels shown below 📷 Your organization has the Information Protection label policies shown below 📷 check the box next to each true statement.', references: {blocks: [{data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '26t75', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 96, offset: 0}], inlineStyleRanges: [], key: '9duef', text: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1c6so', text: 'Only one sensitivity label will be applied to a document automatically. The higher the order number the higher the priority so Label2 will take precedence over Label1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a55vu', text: 'Since the first 2 documents contain Product1 & Product2 Label2 is applied because it has the highest order.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4nu8n', text: 'Since condition2 is case sensitive the third document does not receive the label.', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide', url: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide" target="_self">https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide</a></p>\n<p>Only one sensitivity label will be applied to a document automatically. The higher the order number the higher the priority so Label2 will take precedence over Label1.</p>\n<p>Since the first 2 documents contain Product1 &amp; Product2 Label2 is applied because it has the highest order.</p>\n<p>Since condition2 is case sensitive the third document does not receive the label.</p>\n', slug: 'which-labels-will-be-appl-zvcwvghdj', title: 'Which labels will be applied to which documents?', type: 'hot-area'}}, sectionId: 'YhftdGIRX', slug: 'classify-data-using-labels-hy190mz8_', title: 'Classify data using labels', type: 'test'},
      questionsShown: false
    }

    if (isBrowser()) {
      ((a) => {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))) this.state.bidvHeight = '691px'
      })(navigator.userAgent||navigator.vendor||window.opera)
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
      window.addEventListener('beforeunload', this.beforeUnload);

      ((d) => {
        const params =
        {
          bvwidgetid: 'ntv_2077339',
          bvlinksownid: 2077339,
          rows: 1,
          cols: 2,
          textpos: 'below',
          imagewidth: 325,
          mobilecols: 1,
          cb: (new Date()).getTime()
        }
        params.bvwidgetid = `ntv_2077339${ params.cb}`
        d.getElementById('ntv_2077339').id = params.bvwidgetid
        const qs = Object.keys(params).reduce((a, k)=> {
          a.push(`${k }=${ encodeURIComponent(params[k])}`); return a
        }, []).join(String.fromCharCode(38))
        const s = d.createElement('script'); s.type='text/javascript'; s.async=true
        const p = 'https:' == document.location.protocol ? 'https' : 'http'
        s.src = `${p }://cdn.hyperpromote.com/bidvertiser/tags/active/bdvws.js?${ qs}`
        d.getElementById(params.bvwidgetid).appendChild(s)
      })(document)

      const script = document.createElement('script')
      script.src = '//display.jalewaads.com/display/items.php?17966&5820&320&50&4&0&0'
      script.dataset.cfasync=false
      script.async = true
      script.type = 'text/javascript'
      document.querySelector('#adcontainer01').appendChild(script)
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
            <div id="ntv_2077339" style={{height: this.state.bidvHeight, overflow: 'hidden'}} />
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
              <Grid item xs={12}>
                <div id="adcontainer01" style={{height: '50px', overflow: 'hidden'}}><div id="adm-container-17966" /></div>
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
