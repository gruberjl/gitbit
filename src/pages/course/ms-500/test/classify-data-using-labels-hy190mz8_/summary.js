import {h, Component} from 'preact'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import {onAuthStateChanged} from '../../../../../components/firebase/on-auth-state-changed'
import saveDoc from '../../../../../components/firebase/save-doc'
import {getDoc} from '../../../../../components/firebase/get-doc'
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBox from '@mui/icons-material/CheckBox'
import Page from '../../../../../components/page'
import Typography from '@mui/material/Typography'
import {pink} from '@mui/material/colors'
import Snackbar from '@mui/material/Snackbar'
import Box from '@mui/material/Box'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
const clone = require('clone')

const gradeQuestion = (question, correctAnswers, testQuestion) => {
  let pointsReceived = 0

  if (testQuestion.type === 'hot-area') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const answer = question.answers[correctAnswer.id] || {}
      const correctAnswerId = Object.values(correctAnswer).find((a) => a.isCorrect).id

      if (answer.answer == correctAnswerId)
        pointsReceived++
    })
  } else if (testQuestion.type === 'drag-drop') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const correctAnswerId = correctAnswer.answerId
      const answer = question.answers[correctAnswer.id]

      if (answer.answerId === correctAnswerId)
        pointsReceived++
    })
  } else if (testQuestion.type === 'build-list') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const answer = question.answers[correctAnswer.id]
      if (answer && answer.idx === correctAnswer.idx)
        pointsReceived++
    })
    Object.values(question.answers).forEach((answer) => {
      const correctAnswer = correctAnswers[answer.id]
      if (!correctAnswer || correctAnswer.idx !== answer.idx)
        pointsReceived--
    })
  } else if (testQuestion.type === 'multiple-choice') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const userMarkedCorrect = Boolean(question.answers[correctAnswer.id])

      if (correctAnswer.isCorrect && userMarkedCorrect)
        pointsReceived++
      else if (!correctAnswer.isCorrect && userMarkedCorrect)
        pointsReceived--
    })
  } else
    console.error('unknown question type')


  if (pointsReceived < 0)
    pointsReceived = 0

  return pointsReceived
}

const getMaxPoints = (testQuestion, answers) => {
  let maxPoints = 0

  if (testQuestion.type === 'hot-area')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'drag-drop')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'build-list')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'multiple-choice') {
    Object.values(answers).forEach((answer) => {
      if (answer.isCorrect)
        maxPoints++
    })
  } else
    console.error(`Cannot get max points. unknown question type. question.type===${testQuestion.type}`)


  return maxPoints
}

const isBrowser = () => typeof window !== 'undefined'

class TestsSummary extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.gradeTest = this.gradeTest.bind(this)
    this.save = this.save.bind(this)
    this.getJsonLd = this.getJsonLd.bind(this)
    this.setCompletedContent = this.setCompletedContent.bind(this)

    this.state = {
      uid: '',
      alert: '',
      nextContentSlug: 'learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f',
      previousContentSlug: 'learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf',
      test: {answers: {bwzmgdcav: {deandxifw: {id: 'deandxifw', isCorrect: true}, garzwa4dy: {id: 'garzwa4dy', isCorrect: false}, 's_ljg-bdf': {id: 's_ljg-bdf', isCorrect: false}, t74kendml: {id: 't74kendml', isCorrect: false}}, d0npibkzf: {ecwaqp_hp: {id: 'ecwaqp_hp', isCorrect: true}, o2b348ksa: {id: 'o2b348ksa', isCorrect: false}, sh6h3zlqp: {id: 'sh6h3zlqp', isCorrect: false}, tekdqag0e: {id: 'tekdqag0e', isCorrect: true}, uakffzilc: {id: 'uakffzilc', isCorrect: true}}, e_7xjpzye: {'6yzk4s2wq': {id: '6yzk4s2wq', isCorrect: false}, pxcc7sb_s: {id: 'pxcc7sb_s', isCorrect: false}, zegugbf1e: {id: 'zegugbf1e', isCorrect: true}}, 'f0swmvw-q': {'26rwrdsbo': {answerId: 'wss0z2hws', id: '26rwrdsbo'}, qeri8d2is: {answerId: '9rgvh8vl8', id: 'qeri8d2is'}, wbydjnthv: {answerId: 'qukghbbh9', id: 'wbydjnthv'}}, hnt9mftfw: {'-ge1ovxpx': {id: '-ge1ovxpx', isCorrect: true}, '1k-a7ecdb': {id: '1k-a7ecdb', isCorrect: true}, '9txdkkxzr': {id: '9txdkkxzr', isCorrect: true}, crxkwtfkv: {id: 'crxkwtfkv', isCorrect: true}, e72l_qa5a: {id: 'e72l_qa5a', isCorrect: false}, fsrydtgq8: {id: 'fsrydtgq8', isCorrect: false}, 'hocz-2cid': {id: 'hocz-2cid', isCorrect: false}, tzvgyoxhg: {id: 'tzvgyoxhg', isCorrect: false}}, rbznddltc: {'0xfudvojt': {id: '0xfudvojt', idx: 0}, egbwwqnzm: {id: 'egbwwqnzm', idx: 3}, oki15ayit: {id: 'oki15ayit', idx: 1}, ubacgqhcy: {id: 'ubacgqhcy', idx: 2}}, zvcwvghdj: {'196wir48n': {fu2vju_ib: {id: 'fu2vju_ib', isCorrect: false}, h7twhtnj0: {id: 'h7twhtnj0', isCorrect: true}, id: '196wir48n', qhxcgejvr: {id: 'qhxcgejvr', isCorrect: false}, uwpxtwebr: {id: 'uwpxtwebr', isCorrect: false}}, epokleem7: {'5xfq7dopp': {id: '5xfq7dopp', isCorrect: false}, _xdk6a4xvj: {id: '_xdk6a4xvj', isCorrect: true}, ejulf7yfz: {id: 'ejulf7yfz', isCorrect: false}, id: 'epokleem7', nshxe4p_f: {id: 'nshxe4p_f', isCorrect: false}}, n38baemmy: {dmy9p2v0x: {id: 'dmy9p2v0x', isCorrect: false}, egpaixjt_: {id: 'egpaixjt_', isCorrect: false}, id: 'n38baemmy', 'kmj-zkxq0': {id: 'kmj-zkxq0', isCorrect: true}, phw3rz1ry: {id: 'phw3rz1ry', isCorrect: false}, y6jzhya13: {id: 'y6jzhya13', isCorrect: false}}}}, datePublished: '2022/10/3', description: 'All the questions you may see about classifying data using labels in the Microsoft 365 security administrator (MS-500) certificate', featuredImage: 'https://i.ibb.co/FbhnFpH/Groups.png', id: 'hy190mz8_', images: ['https://i.ibb.co/Xx0jdjJ/Groups2.png', 'https://i.ibb.co/FbhnFpH/Groups.png', 'https://i.ibb.co/FbhnFpH/Groups.png'], publish: true, questions: {bwzmgdcav: {answerOptions: {deandxifw: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8sbk7', text: 'Go to Reports > How labels were applied', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Go to Reports &gt; How labels were applied</p>\n', id: 'deandxifw'}, garzwa4dy: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c71cq', text: 'From Reports, select Dashboard', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Reports, select Dashboard</p>\n', id: 'garzwa4dy'}, 's_ljg-bdf': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ah4f', text: 'From Search & investigation, select eDiscovery', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Search &amp; investigation, select eDiscovery</p>\n', id: 's_ljg-bdf'}, t74kendml: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '91vlj', text: 'From Search & investigation, select Content search', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From Search &amp; investigation, select Content search</p>\n', id: 't74kendml'}}, id: 'bwzmgdcav', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cfvb3', text: 'You recently created and published several labels policies in a Microsoft 365 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9kckv', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5u5fs', text: 'You need to view which labels were applied by users manually and which labels were applied automatically.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bkt1', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2osae', text: 'What should you do from the Compliance admin center?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You recently created and published several labels policies in a Microsoft 365 subscription.</p>\n<p></p>\n<p>You need to view which labels were applied by users manually and which labels were applied automatically.</p>\n<p></p>\n<p>What should you do from the Compliance admin center?</p>\n', questionText: 'You recently created and published several labels policies in a Microsoft 365 subscription. You need to view which labels were applied by users manually and which labels were applied automatically. What should you do from the Compliance admin center?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'conjo', text: 'From the Compliance admin center navigate to Reports > How labels were applied', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '6k090', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>From the Compliance admin center navigate to Reports &gt; How labels were applied</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n', slug: 'view-which-labels-were-ap-bwzmgdcav', title: 'View which labels were applied by users manually and which labels were applied automatically', type: 'multiple-choice'}, d0npibkzf: {answerOptions: {ecwaqp_hp: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dmvs6', text: 'A distribution list', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A distribution list</p>\n', id: 'ecwaqp_hp'}, o2b348ksa: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5bt11', text: 'A security group created in the Azure AD admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A security group created in the Azure AD admin center</p>\n', id: 'o2b348ksa'}, sh6h3zlqp: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bn84e', text: 'A security group', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A security group</p>\n', id: 'sh6h3zlqp'}, tekdqag0e: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4mmot', text: 'A Microsoft 365 group', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A Microsoft 365 group</p>\n', id: 'tekdqag0e'}, uakffzilc: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '55oqa', text: 'A mail-enabled security group', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A mail-enabled security group</p>\n', id: 'uakffzilc'}}, id: 'd0npibkzf', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b739d', text: 'You\'ve been tasked to create a group that will be used for publishing sensitivity labels. The group must only contain user accounts. What are the possible ways to create the group?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You\'ve been tasked to create a group that will be used for publishing sensitivity labels. The group must only contain user accounts. What are the possible ways to create the group?</p>\n', questionText: 'You\'ve been tasked to create a group that will be used for publishing sensitivity labels. The group must only contain user accounts. What are the possible ways to create the group?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '431am', text: 'You can publish labels to users but only to groups that have email addresses (Distribution groups, Microsoft 365 groups, and mail-enabled security groups). You can\'t publish a label to a security group. The group can have assigned or dynamic membership.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '5irso', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 130, offset: 0}], inlineStyleRanges: [], key: '3k9b7', text: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts', target: '_self', url: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You can publish labels to users but only to groups that have email addresses (Distribution groups, Microsoft 365 groups, and mail-enabled security groups). You can\'t publish a label to a security group. The group can have assigned or dynamic membership.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts" target="_self">https://docs.microsoft.com/en-us/azure/information-protection/prepare#azure-information-protection-requirements-for-group-accounts</a></p>\n', slug: 'what-groups-can-be-used-t-d0npibkzf', title: 'What groups can be used to assign sensitivity labels?', type: 'multiple-choice'}, e_7xjpzye: {answerOptions: {'6yzk4s2wq': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '34vqk', text: 'The content expiration settings of the label.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>The content expiration settings of the label.</p>\n', id: '6yzk4s2wq'}, pxcc7sb_s: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'doos9', text: 'The encryption settings of the label.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>The encryption settings of the label.</p>\n', id: 'pxcc7sb_s'}, zegugbf1e: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ks7c', text: 'The external sharing settings and the assigned permissions of the label', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>The external sharing settings and the assigned permissions of the label</p>\n', id: 'zegugbf1e'}}, id: 'e_7xjpzye', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e156l', text: 'Your organization has a Microsoft 365 tenant. Your tenant has an information protection label named CompanyConfidential in the Microsoft Compliance admin center. Your tenant has CompanyConfidential applied to a global policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eq5n3', text: 'One of your users protects an email using the CompanyConfidential label and sends the email to an external recipient. The external recipient reports that they cannot open the email.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3hohe', text: 'You\'ve been asked to assist the user so the email can be sent to the external recipient. What should you do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant. Your tenant has an information protection label named CompanyConfidential in the Microsoft Compliance admin center. Your tenant has CompanyConfidential applied to a global policy.</p>\n<p>One of your users protects an email using the CompanyConfidential label and sends the email to an external recipient. The external recipient reports that they cannot open the email.</p>\n<p>You\'ve been asked to assist the user so the email can be sent to the external recipient. What should you do?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. Your tenant has an information protection label named CompanyConfidential in the Microsoft Compliance admin center. Your tenant has CompanyConfidential applied to a global policy. One of your users protects an email using the CompanyConfidential label and sends the email to an external recipient. The external recipient reports that they cannot open the email. You\'ve been asked to assist the user so the email can be sent to the external recipient. What should you do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4od1t', text: 'External users can open emails labeled with encryption and content expiration. The issue is caused by the external sharing settings or assigned permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4nlnp', text: 'If the label is set to limit external sharing and the setting is set to only people in your organization, or existing guests external users may not be able to open the email.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7lu3b', text: 'If the label is set so permissions are applied and then limited to only authenticated users or specific users where the recipient isn\'t listed then the user won\'t be able to access the data.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: 'd2c1h', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>External users can open emails labeled with encryption and content expiration. The issue is caused by the external sharing settings or assigned permissions.</p>\n<p>If the label is set to limit external sharing and the setting is set to only people in your organization, or existing guests external users may not be able to open the email.</p>\n<p>If the label is set so permissions are applied and then limited to only authenticated users or specific users where the recipient isn\'t listed then the user won\'t be able to access the data.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n', slug: 'assist-the-user-so-the-em-e_7xjpzye', title: 'Assist the user so the email can be sent to the external recipient', type: 'multiple-choice'}, 'f0swmvw-q': {answerOptions: {'8iabnio3a': {answer: 'on-premises Active Directory Users and Computers', answerHtml: '', id: '8iabnio3a'}, '9rgvh8vl8': {answer: 'Microsoft Entra admin center', answerHtml: '', id: '9rgvh8vl8'}, boen9qyxi: {answer: 'Microsoft 365 admin center', answerHtml: '', id: 'boen9qyxi'}, codgiwag7: {answer: 'A security group', answerHtml: '', id: 'codgiwag7'}, nsra1lyym: {answer: 'A dynamic membership rule set to accountEnabled Equals true', answerHtml: '', id: 'nsra1lyym'}, qukghbbh9: {answer: 'A Microsoft 365 group', answerHtml: '', id: 'qukghbbh9'}, wss0z2hws: {answer: 'A dynamic membership rule set to userType Equals Member', answerHtml: '', id: 'wss0z2hws'}}, id: 'f0swmvw-q', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'en56g', text: 'Your organization has a Microsoft 365 tenant that\'s syncing the users and groups from an on-premises AD using AD Connect.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bmpos', text: 'Your company has recently hired a new team of people to manage the sensitivity labels.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4eslo', text: 'Your manager has asked you to configure a new group that will be used for publishing sensitivity labels to pilot users. The group must contain only user accounts (excluding guest accounts). The membership of the group should be automatically updated.', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant that\'s syncing the users and groups from an on-premises AD using AD Connect.</p>\n<p>Your company has recently hired a new team of people to manage the sensitivity labels.</p>\n<p>Your manager has asked you to configure a new group that will be used for publishing sensitivity labels to pilot users. The group must contain only user accounts (excluding guest accounts). The membership of the group should be automatically updated.</p>\n', questionText: 'Your organization has a Microsoft 365 tenant that\'s syncing the users and groups from an on-premises AD using AD Connect. Your company has recently hired a new team of people to manage the sensitivity labels. Your manager has asked you to configure a new group that will be used for publishing sensitivity labels to pilot users. The group must contain only user accounts (excluding guest accounts). The membership of the group should be automatically updated.', questions: {'26rwrdsbo': {answerId: '', id: '26rwrdsbo', text: 'Membership criteria'}, qeri8d2is: {answerId: '', id: 'qeri8d2is', text: 'Where should you create the group?'}, wbydjnthv: {answerId: '', id: 'wbydjnthv', text: 'What type of group should you create?'}}, references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8rrf2', text: 'You can use any group type that has an email address. That includes a mail-enabled security group, a distribution group, or a Microsoft 365 group. You cannot use a security group because it doesn\'t have an email address.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '118f', text: 'You can set up a rule for dynamic membership on security groups or Microsoft 365 groups. The criteria should be set to userType -eq "Member"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '63o7t', text: 'You must create dynamic groups in Azure AD. Microsoft 365 doesn\'t have dynamic membership. On-premises dynamic groups don\'t sync to Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: 'd7mnb', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 69, offset: 0}], inlineStyleRanges: [], key: '4nkab', text: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You can use any group type that has an email address. That includes a mail-enabled security group, a distribution group, or a Microsoft 365 group. You cannot use a security group because it doesn\'t have an email address.</p>\n<p>You can set up a rule for dynamic membership on security groups or Microsoft 365 groups. The criteria should be set to userType -eq "Member"</p>\n<p>You must create dynamic groups in Azure AD. Microsoft 365 doesn\'t have dynamic membership. On-premises dynamic groups don\'t sync to Microsoft 365.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/information-protection/prepare" target="_self">https://docs.microsoft.com/en-us/azure/information-protection/prepare</a></p>\n', slug: 'configure-a-new-group-tha-f0swmvw-q', title: 'Configure a new group that will be used for publishing sensitivity labels', type: 'drag-drop'}, hnt9mftfw: {answerOptions: {'-ge1ovxpx': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c9a44', text: 'Group 4', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 4</p>\n', id: '-ge1ovxpx'}, '1k-a7ecdb': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9kp7g', text: 'Group 14', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 14</p>\n', id: '1k-a7ecdb'}, '9txdkkxzr': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5r3pr', text: 'Group 13', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 13</p>\n', id: '9txdkkxzr'}, crxkwtfkv: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'efi3f', text: 'Group 1', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 1</p>\n', id: 'crxkwtfkv'}, e72l_qa5a: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5hpi7', text: 'Group 11', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 11</p>\n', id: 'e72l_qa5a'}, fsrydtgq8: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ep8lb', text: 'Group 12', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 12</p>\n', id: 'fsrydtgq8'}, 'hocz-2cid': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c9a63', text: 'Group 3', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 3</p>\n', id: 'hocz-2cid'}, tzvgyoxhg: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2u2rq', text: 'Group 2', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Group 2</p>\n', id: 'tzvgyoxhg'}}, id: 'hnt9mftfw', images: ['https://i.ibb.co/Xx0jdjJ/Groups2.png', 'https://i.ibb.co/FbhnFpH/Groups.png', 'https://i.ibb.co/FbhnFpH/Groups.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bp047', text: 'Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '77opj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd96jc', text: 'The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '6rna5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '806c9', text: 'You create an Information Protection label policy named Policy1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '90v0m', text: 'You need to apply Policy1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd9t9g', text: 'To which groups can you apply Policy1?', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Group set 1', height: 148, src: 'https://i.ibb.co/FbhnFpH/Groups.png', width: 553}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Group set 2', height: 148, src: 'https://i.ibb.co/Xx0jdjJ/Groups2.png', width: 564}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table.</p>\n<img src="https://i.ibb.co/FbhnFpH/Groups.png" alt="Group set 1" height="148" width="553" style="aspect-ratio: auto 553 / 148; height: auto;" />\n<p>The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table.</p>\n<img src="https://i.ibb.co/Xx0jdjJ/Groups2.png" alt="Group set 2" height="148" width="564" style="aspect-ratio: auto 564 / 148; height: auto;" />\n<p>You create an Information Protection label policy named Policy1.</p>\n<p>You need to apply Policy1.</p>\n<p>To which groups can you apply Policy1?</p>\n', questionText: 'Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the groups shown in the following table. The domain is synced to a Microsoft Azure Active Directory (Azure AD) tenant that contains the groups shown in the following table. You create an Information Protection label policy named Policy1. You need to apply Policy1. To which groups can you apply Policy1?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5p7n5', text: 'Labels can be applied to any group that has an email address.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '4ckla', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 69, offset: 0}], inlineStyleRanges: [], key: 'eskh1', text: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/information-protection/prepare'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Labels can be applied to any group that has an email address.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/information-protection/prepare" target="_self">https://docs.microsoft.com/en-us/azure/information-protection/prepare</a></p>\n', slug: 'to-which-groups-can-you-a-hnt9mftfw', title: 'To which groups can you apply Policy1?', type: 'multiple-choice'}, rbznddltc: {answerOptions: {'0xfudvojt': {answer: 'Open the Microsoft 365 purview / compliance admin center', answerHtml: '', id: '0xfudvojt'}, egbwwqnzm: {answer: 'Publish the label', answerHtml: '', id: 'egbwwqnzm'}, oki15ayit: {answer: 'Go to Information protection', answerHtml: '', id: 'oki15ayit'}, ubacgqhcy: {answer: 'Create and configure a label', answerHtml: '', id: 'ubacgqhcy'}}, id: 'rbznddltc', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4eis', text: 'Your organization has a Microsoft 365 tenant. Your organization has recently hired an organization to review your compliance requirements. They notice your accountants have a lot of data with different levels of sensitivity. Your team has been asked to create a label for some of the accountants to use. Your manager has asked you to create a sensitivity label. Where do you go to create the label?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant. Your organization has recently hired an organization to review your compliance requirements. They notice your accountants have a lot of data with different levels of sensitivity. Your team has been asked to create a label for some of the accountants to use. Your manager has asked you to create a sensitivity label. Where do you go to create the label?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant. Your organization has recently hired an organization to review your compliance requirements. They notice your accountants have a lot of data with different levels of sensitivity. Your team has been asked to create a label for some of the accountants to use. Your manager has asked you to create a sensitivity label. Where do you go to create the label?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '90kmb', text: 'You need to go to the Microsoft 365 purview/compliance center > Information Protection > Labels > Create a label. From there you can follow the wizard to configure your label. Once your label is created you\'ll need to publish the label to your users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: 'd3iap', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 19, offset: 0}], inlineStyleRanges: [], key: '3oh4a', text: 'https://ior.ad/7BnF', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://ior.ad/7BnF', target: '_blank', url: 'https://ior.ad/7BnF'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You need to go to the Microsoft 365 purview/compliance center &gt; Information Protection &gt; Labels &gt; Create a label. From there you can follow the wizard to configure your label. Once your label is created you\'ll need to publish the label to your users.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://ior.ad/7BnF" target="_self">https://ior.ad/7BnF</a></p>\n', slug: 'where-do-you-go-to-create-rbznddltc', title: 'Where do you go to create the label?', type: 'build-list'}, zvcwvghdj: {answerOptions: {'196wir48n': {answerHtml: '', answers: {fu2vju_ib: {id: 'fu2vju_ib', text: 'Label1'}, h7twhtnj0: {id: 'h7twhtnj0', text: 'Label2'}, qhxcgejvr: {id: 'qhxcgejvr', text: 'Label1 and Label2'}, uwpxtwebr: {id: 'uwpxtwebr', text: 'No label'}}, id: '196wir48n', text: 'If User1 saves a Word document with "Product1 and Product2" in it, the document will be assigned:'}, epokleem7: {answerHtml: '', answers: {'5xfq7dopp': {id: '5xfq7dopp', text: 'No label'}, _xdk6a4xvj: {id: '_xdk6a4xvj', text: 'Label2'}, ejulf7yfz: {id: 'ejulf7yfz', text: 'Label1'}, nshxe4p_f: {id: 'nshxe4p_f', text: 'Label1 and Label2'}}, id: 'epokleem7', text: 'If User1 saves a Word document with "Product2 and Product1" in it, the document will be assigned'}, n38baemmy: {answerHtml: '', answers: {egpaixjt_: {id: 'egpaixjt_', text: 'Label2'}, 'kmj-zkxq0': {id: 'kmj-zkxq0', text: 'No label'}, phw3rz1ry: {id: 'phw3rz1ry', text: 'Label1 and Label2'}, y6jzhya13: {id: 'y6jzhya13', text: 'Label1'}}, id: 'n38baemmy', text: 'If User1 saves a Word document with "product2" in it, the document will be assigned'}}, id: 'zvcwvghdj', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '159pu', text: 'Your organization has the sensitive info type data classifications shown below.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '3vhvb', text: '📷', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fok8m', text: 'Your organization has the Information Protection labels shown below', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '2opq7', text: '📷', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd7rs8', text: 'Your organization has the Information Protection label policies shown below', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bf8o8', text: '📷', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2nq4r', text: 'check the box next to each true statement.', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Condition chart', height: 100, src: 'https://i.ibb.co/Hz0XgJn/condition-chart.png', width: 397}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Label Conditions', height: 100, src: 'https://i.ibb.co/xYd5gCX/label-conditions.png', width: 443}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 2: {data: {alt: 'Policy Chart', height: 133, src: 'https://i.ibb.co/H7SJhBG/policy-chart2.png', width: 575}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, questionHtml: '<p>Your organization has the sensitive info type data classifications shown below.</p>\n<img src="https://i.ibb.co/Hz0XgJn/condition-chart.png" alt="Condition chart" height="100" width="397" style="aspect-ratio: auto 397 / 100; height: auto;" />\n<p>Your organization has the Information Protection labels shown below</p>\n<img src="https://i.ibb.co/xYd5gCX/label-conditions.png" alt="Label Conditions" height="100" width="443" style="aspect-ratio: auto 443 / 100; height: auto;" />\n<p>Your organization has the Information Protection label policies shown below</p>\n<img src="https://i.ibb.co/H7SJhBG/policy-chart2.png" alt="Policy Chart" height="133" width="575" style="aspect-ratio: auto 575 / 133; height: auto;" />\n<p>check the box next to each true statement.</p>\n', questionText: 'Your organization has the sensitive info type data classifications shown below. 📷 Your organization has the Information Protection labels shown below 📷 Your organization has the Information Protection label policies shown below 📷 check the box next to each true statement.', references: {blocks: [{data: {}, depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], inlineStyleRanges: [], key: '26t75', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 96, offset: 0}], inlineStyleRanges: [], key: '9duef', text: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1c6so', text: 'Only one sensitivity label will be applied to a document automatically. The higher the order number the higher the priority so Label2 will take precedence over Label1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a55vu', text: 'Since the first 2 documents contain Product1 & Product2 Label2 is applied because it has the highest order.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4nu8n', text: 'Since condition2 is case sensitive the third document does not receive the label.', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide', url: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_self">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>\n<p><a href="https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide" target="_self">https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide</a></p>\n<p>Only one sensitivity label will be applied to a document automatically. The higher the order number the higher the priority so Label2 will take precedence over Label1.</p>\n<p>Since the first 2 documents contain Product1 &amp; Product2 Label2 is applied because it has the highest order.</p>\n<p>Since condition2 is case sensitive the third document does not receive the label.</p>\n', slug: 'which-labels-will-be-appl-zvcwvghdj', title: 'Which labels will be applied to which documents?', type: 'hot-area'}}, sectionId: 'YhftdGIRX', slug: 'classify-data-using-labels-hy190mz8_', title: 'Classify data using labels', type: 'test'}
    }

    this.state.userAcct = {tests: {
      [this.state.test.id]: { }
    }}
  }

  componentDidMount() {
    if (isBrowser())
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
  }

  componentWillUnmount() {
    this.onAuthStateChangedListener()
  }

  setUid(user) {
    if (!user) {
      window.location.href = '/login'
      return
    }

    this.setState({
      uid: user.uid
    })

    getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
      if (!userAcct.tests)
        userAcct.tests = {}

      if (!userAcct.tests[this.state.test.id])
        userAcct.tests[this.state.test.id] = {}

      this.setState({userAcct}, () => {
        if (!userAcct.tests[this.state.test.id].score)
          this.gradeTest()
      })
    })
  }

  setCompletedContent(userAcct) {
    return new Promise((resolve) => {
      if (!userAcct.completedContent.includes(this.state.test.id)) {
        userAcct.completedContent.push(this.state.test.id)
        this.setState({userAcct}, () => {
          saveDoc('courses/MS-500/users', userAcct).then(() => resolve())
        })
      } else
        return resolve()
    })
  }

  gradeTest() {
    let maxPoints = 0
    let pointsReceived = 0
    const userAcct = clone(this.state.userAcct)
    this.setCompletedContent(userAcct)

    Object.keys(this.state.test.answers).forEach((questionId) => {
      const answers = this.state.test.answers[questionId]
      const question = userAcct.tests[this.state.test.id][questionId]
      const testQuestion = this.state.test.questions[questionId]
      const questionMaxPoints = getMaxPoints(testQuestion, answers)
      const pointsReceivedForQuestion = question ? gradeQuestion(question, answers, testQuestion) : 0
      if (!userAcct.tests[this.state.test.id][questionId])
        userAcct.tests[this.state.test.id][questionId] = {answers: {}, id: questionId}

      userAcct.tests[this.state.test.id][questionId].maxPoints = questionMaxPoints
      userAcct.tests[this.state.test.id][questionId].pointsReceived = pointsReceivedForQuestion
      pointsReceived = pointsReceived + pointsReceivedForQuestion
      maxPoints = maxPoints + questionMaxPoints
    })

    userAcct.tests[this.state.test.id].score = Math.round(pointsReceived / maxPoints * 1000)

    this.setState({userAcct, alert: 'test grading complete!'}, () => {
      this.save()
    })

    setTimeout(() => {
      this.setState({alert: ''})
    }, 3000)
  }

  save() {
    return saveDoc(`courses/MS-500/users`, this.state.userAcct, false)
  }

  getJsonLd() {
    return {
      $schema: 'https://json-schema.org/draft/2019-09/schema',
      '@context': 'http://schema.org',
      '@type': 'Quiz',
      assesses: this.state.test.title,
      educationalLevel: 'beginner',
      learningResourceType: 'Quiz',
      teaches: this.state.test.title,
      abstract: this.state.test.description,
      image: this.state.test.featuredImage,
      name: this.state.test.title,
      '@id': location.href,
      description: this.state.test.description
    }
  }

  render() {
    return (
      <Page title={`${this.state.test.title} Summary`} description={this.state.test.description} jsonLd={this.getJsonLd()} jsonLdType="Quiz">
        <main style={{backgroundColor: '#F3F6F9'}}>
          <Container>
            <Box sx={{display: 'flex', justifyContent: 'space-between', py: 3}}>
              <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
              <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
            </Box>

            <Paper elevation={3} sx={{p: 4}}>
              <Grid container className='box' spacing={2}>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Exam Number:</strong> MS-500</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Passing Score:</strong> 700</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Your Score:</strong> {this.state.userAcct.tests[this.state.test.id].score}</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1">
                    <strong>Result:</strong> {
                      this.state.userAcct.tests[this.state.test.id].score || this.state.userAcct.tests[this.state.test.id].score === 0 ?
                        (this.state.userAcct.tests[this.state.test.id].score >= 700 ? 'Pass' : 'Fail') :
                        ''
                    }
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            <Paper elevation={3} sx={{my: 4, p: 4}}>
              <Grid container className='box' spacing={2}>
                <Grid item xs={10}>
                  <Typography variant="h4" component="h1">Test Sumary</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button onClick={this.gradeTest}>Grade test</Button>
                </Grid>
                { Object.keys(this.state.test.answers).map((questionId) => (
                  <Grid container item xs={6} key={questionId}>
                    <Grid item xs={1}>
                      <Button variant="text" href={`/course/ms-500/test/${this.state.test.slug}/question/${this.state.test.questions[questionId].slug}`}>
                        { this.state.userAcct.tests[this.state.test.id][questionId] ? (this.state.userAcct.tests[this.state.test.id][questionId].maxPoints === this.state.userAcct.tests[this.state.test.id][questionId].pointsReceived ?
                          <CheckBox color='success' /> :
                           <CheckBoxOutlineBlank sx={{color: pink[500]}} />) : ''

                        }
                      </Button>
                    </Grid>
                    <Grid item xs={11}>
                      <Button variant="text" href={`/course/ms-500/test/${this.state.test.slug}/question/${this.state.test.questions[questionId].slug}`}>{this.state.test.questions[questionId].title}</Button>
                    </Grid>
                  </Grid>
                ))}

              </Grid>
            </Paper>
          </Container>
        </main>
        <Snackbar message={this.state.alert} open={this.state.alert !== ''} />
      </Page>
    )
  }
}

export default TestsSummary
