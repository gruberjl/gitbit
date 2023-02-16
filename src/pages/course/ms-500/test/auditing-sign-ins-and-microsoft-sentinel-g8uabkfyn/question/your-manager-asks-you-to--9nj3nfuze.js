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
      question: {answerOptions: {'aigx-mx8r': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c4l6u', text: 'Run the Set-MailboxDatabase cmdlet from the Exchange Online PowerShell', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Run the Set-MailboxDatabase cmdlet from the Exchange Online PowerShell</p>\n', id: 'aigx-mx8r'}, aumy3qsbe: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ft0t', text: 'Run the Set-Mailbox cmdlet from the Exchange Online PowerShell', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Run the Set-Mailbox cmdlet from the Exchange Online PowerShell</p>\n', id: 'aumy3qsbe'}, lxghw0suy: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f69cd', text: 'From the Exchange admin center, create a message trace.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From the Exchange admin center, create a message trace.</p>\n', id: 'lxghw0suy'}, ozxftw4xv: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b6n77', text: 'From the Exchange admin center, create a journal rule', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From the Exchange admin center, create a journal rule</p>\n', id: 'ozxftw4xv'}}, answerText: 'Run the Set-Mailbox cmdlet from the Exchange Online PowerShell.', id: '9nj3nfuze', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c6pft', text: 'You have a Microsoft 365 tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2j8b', text: 'Your manager asks you to enable auditing for all Microsoft Exchange Online mailboxes/users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b968r', text: 'What should you do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You have a Microsoft 365 tenant.</p>\n<p>Your manager asks you to enable auditing for all Microsoft Exchange Online mailboxes/users.</p>\n<p>What should you do?</p>\n', questionText: 'You have a Microsoft 365 tenant. Your manager asks you to enable auditing for all Microsoft Exchange Online mailboxes/users. What should you do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '94cj1', text: 'Connect to Exchange Online using Connect-ExchangeOnline. Run the following\n"Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 105, offset: 0}], inlineStyleRanges: [], key: 'f29vl', text: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 85, offset: 0}], inlineStyleRanges: [], key: '66a7j', text: 'https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing', target: '_blank', url: 'https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Connect to Exchange Online using Connect-ExchangeOnline. Run the following<br>"Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner"</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1" target="_self">https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1</a></p>\n<p><a href="https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing" target="_self">https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing</a></p>\n', slug: 'your-manager-asks-you-to--9nj3nfuze', title: 'Your manager asks you to enable auditing for all Microsoft Exchange Online mailboxes', type: 'multiple-choice'},
      test: {answers: {'-oy2r6rb1': {'3k1nxw-ts': {id: '3k1nxw-ts', isCorrect: false}, _6mawocp9: {id: '_6mawocp9', isCorrect: true}, it0pjjz3n3: {id: 'it0pjjz3n3', isCorrect: false}, rziuuogxw: {id: 'rziuuogxw', isCorrect: false}}, '5lehjwztz': {'9cie4jo7al': {id: '9cie4jo7al', isCorrect: false}, clayc5vqw: {id: 'clayc5vqw', isCorrect: false}, heqkpcynp: {id: 'heqkpcynp', isCorrect: true}, origsjd2c: {id: 'origsjd2c', isCorrect: false}}, '9nj3nfuze': {'aigx-mx8r': {id: 'aigx-mx8r', isCorrect: false}, aumy3qsbe: {id: 'aumy3qsbe', isCorrect: true}, lxghw0suy: {id: 'lxghw0suy', isCorrect: false}, ozxftw4xv: {id: 'ozxftw4xv', isCorrect: false}}, aalmecon0: {r19uvzla7: {id: 'r19uvzla7', isCorrect: false}, sjmr0mett: {id: 'sjmr0mett', isCorrect: true}}, dn2zan45b: {'3_uyyl_j-': {id: '3_uyyl_j-', isCorrect: false}, oftjktzhq: {id: 'oftjktzhq', isCorrect: true}, tipgypa2b: {id: 'tipgypa2b', isCorrect: false}, uhqbyimau: {id: 'uhqbyimau', isCorrect: false}}, 'gwefxxw-a': {'1creqk7qs': {id: '1creqk7qs', isCorrect: true}, 'f-wnidywu': {id: 'f-wnidywu', isCorrect: false}, g1vnp9n7m: {id: 'g1vnp9n7m', isCorrect: false}, vkdlkopge: {id: 'vkdlkopge', isCorrect: false}}, iy3aqucze: {gjm4kpt60: {id: 'gjm4kpt60', isCorrect: false}, gmsuswn5q: {id: 'gmsuswn5q', isCorrect: false}, gw5ilbi4bj: {id: 'gw5ilbi4bj', isCorrect: false}, n2bcnuziu: {id: 'n2bcnuziu', isCorrect: true}, xs8ubrpvs: {id: 'xs8ubrpvs', isCorrect: true}}, lyhvwqanl: {'50jfhslcmu': {id: '50jfhslcmu', isCorrect: false}, da7zvmmlo: {id: 'da7zvmmlo', isCorrect: false}, nzdxbrarqj: {id: 'nzdxbrarqj', isCorrect: false}, 'u9xe_d-vc': {id: 'u9xe_d-vc', isCorrect: true}}, mbxw0s0lc: {beqqmzwt6: {id: 'beqqmzwt6', isCorrect: false}, c0g8ohcpy: {id: 'c0g8ohcpy', isCorrect: true}, dgq09fnak: {id: 'dgq09fnak', isCorrect: false}, nfalj_2ud: {id: 'nfalj_2ud', isCorrect: false}}}, datePublished: '2022/10/11', description: 'This free practice quiz includes questions from Microsoft 365 security administrator (MS-500) test prep solutions that cover auditing sign-ins and Microsoft Sentinel', featuredImage: 'https://i.ibb.co/tZVDGDy/Microsoft-Sentinel.png', id: 'g8uabkfyn', images: ['https://i.ibb.co/tZVDGDy/Microsoft-Sentinel.png'], publish: true, questions: {'-oy2r6rb1': {answerOptions: {'3k1nxw-ts': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dfaat', text: 'Go to Azure Active Directory admin center and review the audit logs.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Go to Azure Active Directory admin center and review the audit logs.</p>\n', id: '3k1nxw-ts'}, _6mawocp9: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4fv07', text: 'Go to Azure Active Directory admin center and review the sign-in logs.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Go to Azure Active Directory admin center and review the sign-in logs.</p>\n', id: '_6mawocp9'}, it0pjjz3n3: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '346gc', text: 'From the Microsoft Defender admin center download a report.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From the Microsoft Defender admin center download a report.</p>\n', id: 'it0pjjz3n3'}, rziuuogxw: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bbj72', text: 'Go to Azure Active Directory admin center and review the authentication methods.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Go to Azure Active Directory admin center and review the authentication methods.</p>\n', id: 'rziuuogxw'}}, id: '-oy2r6rb1', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '229gp', text: 'You have a Microsoft 365 tenant with Microsoft 365 E5 licenses.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6uap3', text: 'Most of your users are required to use an authenticator app to access Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '11gj', text: 'You need to view which users have used an authenticator app to access Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6cth6', text: 'What should you do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You have a Microsoft 365 tenant with Microsoft 365 E5 licenses.</p>\n<p>Most of your users are required to use an authenticator app to access Microsoft 365.</p>\n<p>You need to view which users have used an authenticator app to access Microsoft 365.</p>\n<p>What should you do?</p>\n', questionText: 'You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. Most of your users are required to use an authenticator app to access Microsoft 365. You need to view which users have used an authenticator app to access Microsoft 365. What should you do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4vr7t', text: 'The user sign-in logs located in the Azure AD admin center provides information on the user sign-ins. The logs contain the information about the MFA authentication status.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 0, style: 'BOLD'}], key: '1nom3', text: 'Reference:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 91, offset: 0}], inlineStyleRanges: [], key: '1vt6t', text: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>The user sign-in logs located in the Azure AD admin center provides information on the user sign-ins. The logs contain the information about the MFA authentication status.</p>\n<p><strong>Reference</strong>:</p>\n<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins" target="_self">https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins</a></p>\n', slug: 'you-need-to-view-which-us--oy2r6rb1', title: 'You need to view which users have used an authenticator app to access Microsoft 365', type: 'multiple-choice'}, '5lehjwztz': {answerOptions: {'9cie4jo7al': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '43amn', text: 'Add and configure a data connector from the Microsoft 365 compliance center.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Add and configure a data connector from the Microsoft 365 compliance center.</p>\n', id: '9cie4jo7al'}, clayc5vqw: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c64o3', text: 'Configure log collectors from the Microsoft Defender for Cloud Apps admin center.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Configure log collectors from the Microsoft Defender for Cloud Apps admin center.</p>\n', id: 'clayc5vqw'}, heqkpcynp: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2oiv4', text: 'Configure security extensions from the Microsoft Defender for Cloud Apps admin center.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Configure security extensions from the Microsoft Defender for Cloud Apps admin center.</p>\n', id: 'heqkpcynp'}, origsjd2c: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3fvra', text: 'Configure app connectors from the Microsoft Defender for Cloud Apps admin center.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Configure app connectors from the Microsoft Defender for Cloud Apps admin center.</p>\n', id: 'origsjd2c'}}, id: '5lehjwztz', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cp513', text: 'You have a Microsoft 365 tenant with a Microsoft Sentinel workspace.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '822po', text: 'You\'ve been asked by your manager to configure Microsoft 365 so you can manage incidents based on alerts generated by Microsoft Cloud App Security.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bgd47', text: 'What do you need to do first?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You have a Microsoft 365 tenant with a Microsoft Sentinel workspace.</p>\n<p>You\'ve been asked by your manager to configure Microsoft 365 so you can manage incidents based on alerts generated by Microsoft Cloud App Security.</p>\n<p>What do you need to do first?</p>\n', questionText: 'You have a Microsoft 365 tenant with a Microsoft Sentinel workspace. You\'ve been asked by your manager to configure Microsoft 365 so you can manage incidents based on alerts generated by Microsoft Cloud App Security. What do you need to do first?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cu3am', text: 'If you need to manage incidents based on alerts generated by Microsoft Cloud App Security we\'ll need to create a security extension in Microsoft Defender for the Cloud Apps admin center.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 136, offset: 0}], inlineStyleRanges: [], key: 'f7fg0', text: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 65, offset: 0}], inlineStyleRanges: [], key: 'aibac', text: 'https://docs.microsoft.com/en-us/cloud-app-security/siem-sentinel', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/cloud-app-security/siem-sentinel', target: '_blank', url: 'https://docs.microsoft.com/en-us/cloud-app-security/siem-sentinel'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>If you need to manage incidents based on alerts generated by Microsoft Cloud App Security we\'ll need to create a security extension in Microsoft Defender for the Cloud Apps admin center.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt" target="_self">https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt</a></p>\n<p><a href="https://docs.microsoft.com/en-us/cloud-app-security/siem-sentinel" target="_self">https://docs.microsoft.com/en-us/cloud-app-security/siem-sentinel</a></p>\n', slug: 'manage-incidents-based-on-5lehjwztz', title: 'Manage incidents based on alerts generated by Microsoft Cloud App Security', type: 'multiple-choice'}, '9nj3nfuze': {answerOptions: {'aigx-mx8r': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c4l6u', text: 'Run the Set-MailboxDatabase cmdlet from the Exchange Online PowerShell', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Run the Set-MailboxDatabase cmdlet from the Exchange Online PowerShell</p>\n', id: 'aigx-mx8r'}, aumy3qsbe: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ft0t', text: 'Run the Set-Mailbox cmdlet from the Exchange Online PowerShell', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Run the Set-Mailbox cmdlet from the Exchange Online PowerShell</p>\n', id: 'aumy3qsbe'}, lxghw0suy: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f69cd', text: 'From the Exchange admin center, create a message trace.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From the Exchange admin center, create a message trace.</p>\n', id: 'lxghw0suy'}, ozxftw4xv: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b6n77', text: 'From the Exchange admin center, create a journal rule', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>From the Exchange admin center, create a journal rule</p>\n', id: 'ozxftw4xv'}}, answerText: 'Run the Set-Mailbox cmdlet from the Exchange Online PowerShell.', id: '9nj3nfuze', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c6pft', text: 'You have a Microsoft 365 tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2j8b', text: 'Your manager asks you to enable auditing for all Microsoft Exchange Online mailboxes/users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b968r', text: 'What should you do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You have a Microsoft 365 tenant.</p>\n<p>Your manager asks you to enable auditing for all Microsoft Exchange Online mailboxes/users.</p>\n<p>What should you do?</p>\n', questionText: 'You have a Microsoft 365 tenant. Your manager asks you to enable auditing for all Microsoft Exchange Online mailboxes/users. What should you do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '94cj1', text: 'Connect to Exchange Online using Connect-ExchangeOnline. Run the following\n"Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 105, offset: 0}], inlineStyleRanges: [], key: 'f29vl', text: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 85, offset: 0}], inlineStyleRanges: [], key: '66a7j', text: 'https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing', target: '_blank', url: 'https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Connect to Exchange Online using Connect-ExchangeOnline. Run the following<br>"Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner"</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1" target="_self">https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1</a></p>\n<p><a href="https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing" target="_self">https://docs.microsoft.com/en-us/office365/securitycompliance/enable-mailbox-auditing</a></p>\n', slug: 'your-manager-asks-you-to--9nj3nfuze', title: 'Your manager asks you to enable auditing for all Microsoft Exchange Online mailboxes', type: 'multiple-choice'}, aalmecon0: {answerOptions: {r19uvzla7: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'farij', text: 'No', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>No</p>\n', id: 'r19uvzla7'}, sjmr0mett: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9v1dp', text: 'Yes', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Yes</p>\n', id: 'sjmr0mett'}}, id: 'aalmecon0', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7c0on', text: 'You have a Microsoft 365 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '45rqd', text: 'You have a user named John Gruber. Several users have full access to the mailbox of John Gruber.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ubqd', text: 'Some email messages sent to John Gruber appear to have been read and deleted before the user viewed them.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b6i6t', text: 'When you search the audit log in Security & Compliance to identify who signed in to the mailbox of John Gruber, the results are blank.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5400h', text: 'You need to ensure that you can view future sign-ins to the mailbox of John Gruber. You run the Set-Maibox -Identity "John Gruber" -AuditEnabled $true command. Does that', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'diqnu', text: 'meet the goal?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You have a Microsoft 365 subscription.</p>\n<p>You have a user named John Gruber. Several users have full access to the mailbox of John Gruber.</p>\n<p>Some email messages sent to John Gruber appear to have been read and deleted before the user viewed them.</p>\n<p>When you search the audit log in Security &amp; Compliance to identify who signed in to the mailbox of John Gruber, the results are blank.</p>\n<p>You need to ensure that you can view future sign-ins to the mailbox of John Gruber. You run the Set-Maibox -Identity "John Gruber" -AuditEnabled $true command. Does that</p>\n<p>meet the goal?</p>\n', questionText: 'You have a Microsoft 365 subscription. You have a user named John Gruber. Several users have full access to the mailbox of John Gruber. Some email messages sent to John Gruber appear to have been read and deleted before the user viewed them. When you search the audit log in Security & Compliance to identify who signed in to the mailbox of John Gruber, the results are blank. You need to ensure that you can view future sign-ins to the mailbox of John Gruber. You run the Set-Maibox -Identity "John Gruber" -AuditEnabled $true command. Does that meet the goal?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8gos6', text: 'We can enable auditing at the mailbox level. We\'ll be using Exchange Online PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dfdvs', text: '1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a45j0', text: '2. Run the following command "Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner" Or for one user we can run the following "Set-Maibox -Identity "User1" -AuditEnabled $true"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 105, offset: 0}], inlineStyleRanges: [], key: 'aioia', text: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 88, offset: 0}], inlineStyleRanges: [], key: 'aukfh', text: 'https://docs.microsoft.com/en-us/powershell/module/exchange/set-mailbox?view=exchange-ps', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/powershell/module/exchange/set-mailbox?view=exchange-ps', target: '_blank', url: 'https://docs.microsoft.com/en-us/powershell/module/exchange/set-mailbox?view=exchange-ps'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>We can enable auditing at the mailbox level. We\'ll be using Exchange Online PowerShell.</p>\n<p>1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.</p>\n<p>2. Run the following command "Get-Mailbox -ResultSize unlimited | Set-Mailbox -AuditEnabled $true -DefaultAuditSet Admin,Delegate,Owner" Or for one user we can run the following "Set-Maibox -Identity "User1" -AuditEnabled $true"</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1" target="_self">https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1</a></p>\n<p><a href="https://docs.microsoft.com/en-us/powershell/module/exchange/set-mailbox?view=exchange-ps" target="_self">https://docs.microsoft.com/en-us/powershell/module/exchange/set-mailbox?view=exchange-ps</a></p>\n', slug: 'view-future-signins-to-th-aalmecon0', title: 'view future sign-ins to the mailbox of a user', type: 'multiple-choice'}, dn2zan45b: {answerOptions: {'3_uyyl_j-': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4lq5m', text: 'Setup data connectors.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Setup data connectors.</p>\n', id: '3_uyyl_j-'}, oftjktzhq: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2u82t', text: 'Add a workbook.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Add a workbook.</p>\n', id: 'oftjktzhq'}, tipgypa2b: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5mqeo', text: 'Add a custom rule template.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Add a custom rule template.</p>\n', id: 'tipgypa2b'}, uhqbyimau: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'do42s', text: 'Setup a playbook.', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Setup a playbook.</p>\n', id: 'uhqbyimau'}}, id: 'dn2zan45b', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fm4t', text: 'Your organization has a Microsoft Sentinel workspace that has a connector configured to Azure AD and Microsoft Office 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9qhiv', text: 'You need to configure a Fusion rule template to detect multistage attacks where users sign in by using compromised credentials. Then they delete multiple files from Microsoft OneDrive.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '67j80', text: 'What do you need to do after you create an active rule that has the default settings?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft Sentinel workspace that has a connector configured to Azure AD and Microsoft Office 365.</p>\n<p>You need to configure a Fusion rule template to detect multistage attacks where users sign in by using compromised credentials. Then they delete multiple files from Microsoft OneDrive.</p>\n<p>What do you need to do after you create an active rule that has the default settings?</p>\n', questionText: 'Your organization has a Microsoft Sentinel workspace that has a connector configured to Azure AD and Microsoft Office 365. You need to configure a Fusion rule template to detect multistage attacks where users sign in by using compromised credentials. Then they delete multiple files from Microsoft OneDrive. What do you need to do after you create an active rule that has the default settings?', references: {blocks: [{data: {}, depth: 0, entityRanges: [{key: 0, length: 136, offset: 0}], inlineStyleRanges: [], key: 'ak39j', text: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 80, offset: 0}], inlineStyleRanges: [], key: '7i3hi', text: 'https://docs.microsoft.com/en-gb/azure/azure-monitor/platform/workbooks-overview', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '30mop', text: 'Workbooks are a way to view the alerts so it would make sense to create one after activating a rule template.', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-gb/azure/azure-monitor/platform/workbooks-overview', target: '_blank', url: 'https://docs.microsoft.com/en-gb/azure/azure-monitor/platform/workbooks-overview'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p><a href="https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt" target="_self">https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt</a></p>\n<p><a href="https://docs.microsoft.com/en-gb/azure/azure-monitor/platform/workbooks-overview" target="_self">https://docs.microsoft.com/en-gb/azure/azure-monitor/platform/workbooks-overview</a></p>\n<p>Workbooks are a way to view the alerts so it would make sense to create one after activating a rule template.</p>\n', slug: 'what-do-you-need-to-do-af-dn2zan45b', title: 'What do you need to do after you create an active rule that has the default settings?', type: 'multiple-choice'}, 'gwefxxw-a': {answerOptions: {'1creqk7qs': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aa4bc', text: 'Sign-ins', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Sign-ins</p>\n', id: '1creqk7qs'}, 'f-wnidywu': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6sjvi', text: 'Authentication methods', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Authentication methods</p>\n', id: 'f-wnidywu'}, g1vnp9n7m: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'et27s', text: 'Access review', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Access review</p>\n', id: 'g1vnp9n7m'}, vkdlkopge: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e0bg1', text: 'Azure AD Identity Protection', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Azure AD Identity Protection</p>\n', id: 'vkdlkopge'}}, id: 'gwefxxw-a', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6dnr8', text: 'Where can you go to review the location (IP address) when administrators log in to your Microsoft 365 tenant?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Where can you go to review the location (IP address) when administrators log in to your Microsoft 365 tenant?</p>\n', questionText: 'Where can you go to review the location (IP address) when administrators log in to your Microsoft 365 tenant?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fcl84', text: 'The sign-in logs will tell you where users have logged in from.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 105, offset: 0}], inlineStyleRanges: [], key: 'e4rob', text: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 91, offset: 0}], inlineStyleRanges: [], key: '3rj80', text: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>The sign-in logs will tell you where users have logged in from.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1" target="_self">https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins" target="_self">https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins</a></p>\n', slug: 'where-can-you-go-to-revie-gwefxxw-a', title: 'Where can you go to review the location (IP address) when administrators log in to your Microsoft 365 tenant?', type: 'multiple-choice'}, iy3aqucze: {answerOptions: {gjm4kpt60: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd96pa', text: 'Microsoft Sentinel Automation Contributor', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Microsoft Sentinel Automation Contributor</p>\n', id: 'gjm4kpt60'}, gmsuswn5q: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '19at1', text: 'Reader', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Reader</p>\n', id: 'gmsuswn5q'}, gw5ilbi4bj: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fvu19', text: 'Managed Application Operator Role', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Managed Application Operator Role</p>\n', id: 'gw5ilbi4bj'}, n2bcnuziu: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '902gp', text: 'Contributor', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Contributor</p>\n', id: 'n2bcnuziu'}, xs8ubrpvs: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dq73l', text: 'Logic App contributor', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Logic App contributor</p>\n', id: 'xs8ubrpvs'}}, answerText: 'Logic App contributor. Contributor.', id: 'iy3aqucze', images: ['https://i.ibb.co/tZVDGDy/Microsoft-Sentinel.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9bfif', text: 'You have a Microsoft Sentinel workspace. The workspace has two connectors configured. One for Azure AD and another one for Microsoft Office 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3651p', text: 'Your organization has hired a new admin. The new admin will need access to Microsoft Sentinel. Your manager informs you the new admin will need to perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dvitn', text: 'Manage incidents', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8249e', text: 'Create and run playbooks', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '52qi', text: 'Your manager asks you which two roles should you assign to the new user?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1h4v1', text: '', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>You have a Microsoft Sentinel workspace. The workspace has two connectors configured. One for Azure AD and another one for Microsoft Office 365.</p>\n<p>Your organization has hired a new admin. The new admin will need access to Microsoft Sentinel. Your manager informs you the new admin will need to perform the following:</p>\n<ul>\n<li>Manage incidents</li>\n<li>Create and run playbooks</li>\n</ul>\n<p>Your manager asks you which two roles should you assign to the new user?</p>\n<p></p>\n', questionText: 'You have a Microsoft Sentinel workspace. The workspace has two connectors configured. One for Azure AD and another one for Microsoft Office 365. Your organization has hired a new admin. The new admin will need access to Microsoft Sentinel. Your manager informs you the new admin will need to perform the following: Manage incidents Create and run playbooks Your manager asks you which two roles should you assign to the new user? ', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3co8j', text: 'The Contributor can perform everything the owner can except they can\'t assign roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '57qsg', text: 'The Logic App contributor role allows you to manage logic apps including playbooks and incidents.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'alkda', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9a8el', text: 'The Microsoft Sentinel Reader cannot manage incidents. The role can only be used to read/view.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2evqu', text: 'The Microsoft Sentinel Automation Contributor can add playbooks to automation rules. It isn\'t designed to be assigned to a user.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4tejh', text: 'The Managed Application Operator Role allows you to read and manage actions on managed application resources.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 136, offset: 0}], inlineStyleRanges: [], key: 'ahci4', text: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 53, offset: 0}], inlineStyleRanges: [], key: 'b9n58', text: 'https://docs.microsoft.com/en-us/azure/sentinel/roles', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/sentinel/roles', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/sentinel/roles'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>The Contributor can perform everything the owner can except they can\'t assign roles.</p>\n<p>The Logic App contributor role allows you to manage logic apps including playbooks and incidents.</p>\n<p></p>\n<p>The Microsoft Sentinel Reader cannot manage incidents. The role can only be used to read/view.</p>\n<p>The Microsoft Sentinel Automation Contributor can add playbooks to automation rules. It isn\'t designed to be assigned to a user.</p>\n<p>The Managed Application Operator Role allows you to read and manage actions on managed application resources.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt" target="_self">https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/sentinel/roles" target="_self">https://docs.microsoft.com/en-us/azure/sentinel/roles</a></p>\n', slug: 'which-two-roles-could-you-iy3aqucze', title: 'Which two roles could you assign to create and run playbooks and manage incidents', type: 'multiple-choice'}, lyhvwqanl: {answerOptions: {'50jfhslcmu': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fvtt4', text: 'Azure AD Access review', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Azure AD Access review</p>\n', id: '50jfhslcmu'}, da7zvmmlo: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '87q7b', text: 'Azure AD Authentication methods', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Azure AD Authentication methods</p>\n', id: 'da7zvmmlo'}, nzdxbrarqj: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3gccf', text: 'Azure AD Identity Protection', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Azure AD Identity Protection</p>\n', id: 'nzdxbrarqj'}, 'u9xe_d-vc': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8imi8', text: 'Azure Ad Sign-in logs', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Azure Ad Sign-in logs</p>\n', id: 'u9xe_d-vc'}}, id: 'lyhvwqanl', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8q5jj', text: 'Your organization is currently using Microsoft 365. Your manager has asked you where he can go to audit the sign in\'s of any user with the user administrator role. Where you should tell him to go?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization is currently using Microsoft 365. Your manager has asked you where he can go to audit the sign in\'s of any user with the user administrator role. Where you should tell him to go?</p>\n', questionText: 'Your organization is currently using Microsoft 365. Your manager has asked you where he can go to audit the sign in\'s of any user with the user administrator role. Where you should tell him to go?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 25, style: 'BOLD'}, {length: 22, offset: 63, style: 'BOLD'}, {length: 12, offset: 88, style: 'BOLD'}], key: '3voj7', text: 'To review sign-ins go to Azure Active Directory admin center > Azure Active Directory > Sign-in logs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 105, offset: 0}], inlineStyleRanges: [], key: '5as9p', text: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 91, offset: 0}], inlineStyleRanges: [], key: 'aptgm', text: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {href: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins', target: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>To review sign-ins go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Sign-in logs</strong>.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1" target="_self">https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins" target="_self">https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-sign-ins</a></p>\n', slug: 'where-should-you-go-to-au-lyhvwqanl', title: 'Where should you go to audit sign in\'s?', type: 'multiple-choice'}, mbxw0s0lc: {answerOptions: {beqqmzwt6: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'k8bi', text: 'Set-AuditLogs -Identity "John Gruber" -Enabled $true', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Set-AuditLogs -Identity "John Gruber" -Enabled $true</p>\n', id: 'beqqmzwt6'}, c0g8ohcpy: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '54m81', text: 'Set-Maibox -Identity "John Gruber" -AuditEnabled $true', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Set-Maibox -Identity "John Gruber" -AuditEnabled $true</p>\n', id: 'c0g8ohcpy'}, dgq09fnak: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c6kto', text: 'Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*</p>\n', id: 'dgq09fnak'}, nfalj_2ud: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7kt3d', text: 'Enable-AuditLogs -Identity "John Gruber"', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Enable-AuditLogs -Identity "John Gruber"</p>\n', id: 'nfalj_2ud'}}, answerText: 'Set-Maibox -Identity "John Gruber" -AuditEnabled $true.', id: 'mbxw0s0lc', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'i9fe', text: 'Your organization has a Microsoft 365 tenant with a user named John Gruber. Multiple users have been granted read and manage (full access) to John Gruber\'s mailbox.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '39re7', text: 'John Gruber found a few emails that were sent to him were marked as read and deleted before he had a chance to review them.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b34jh', text: 'You\'ve been asked to see who accessed and deleted the emails. You search the audit log in the Microsoft Defender admin center to see who read and deleted the emails but the audit logs are blank. So your manager has asked you to configure the audit logs so your can view who accessed the mailbox in the future.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e72p0', text: 'What Exchange PowerShell commands do you need to run to verify you can see the audit logs in the future?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has a Microsoft 365 tenant with a user named John Gruber. Multiple users have been granted read and manage (full access) to John Gruber\'s mailbox.</p>\n<p>John Gruber found a few emails that were sent to him were marked as read and deleted before he had a chance to review them.</p>\n<p>You\'ve been asked to see who accessed and deleted the emails. You search the audit log in the Microsoft Defender admin center to see who read and deleted the emails but the audit logs are blank. So your manager has asked you to configure the audit logs so your can view who accessed the mailbox in the future.</p>\n<p>What Exchange PowerShell commands do you need to run to verify you can see the audit logs in the future?</p>\n', questionText: 'Your organization has a Microsoft 365 tenant with a user named John Gruber. Multiple users have been granted read and manage (full access) to John Gruber\'s mailbox. John Gruber found a few emails that were sent to him were marked as read and deleted before he had a chance to review them. You\'ve been asked to see who accessed and deleted the emails. You search the audit log in the Microsoft Defender admin center to see who read and deleted the emails but the audit logs are blank. So your manager has asked you to configure the audit logs so your can view who accessed the mailbox in the future. What Exchange PowerShell commands do you need to run to verify you can see the audit logs in the future?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ctqe', text: 'To enable Exchange auditing of a mailbox we\'ll need to use PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e69g2', text: '1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eou25', text: '2. Run the following command "Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'j7gu', text: '3. Then run the following command "Set-OrganizationConfig -AuditDisabled $false"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '45icd', text: 'You can also replace step 3 with the following: Set-Mailbox -Identity "User1 " -AuditDelegate @{Add="MailboxLogin"}', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 105, offset: 0}], inlineStyleRanges: [], key: 'c0c63', text: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>To enable Exchange auditing of a mailbox we\'ll need to use PowerShell.</p>\n<p>1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.</p>\n<p>2. Run the following command "Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*"</p>\n<p>3. Then run the following command "Set-OrganizationConfig -AuditDisabled $false"</p>\n<p>You can also replace step 3 with the following: Set-Mailbox -Identity "User1 " -AuditDelegate @{Add="MailboxLogin"}</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1" target="_self">https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1</a></p>\n', slug: 'what-exchange-powershell--mbxw0s0lc', title: 'What Exchange PowerShell commands do you need to run to verify you can see the audit logs in the future?', type: 'multiple-choice'}}, sectionId: 'QScYfSu74', slug: 'auditing-sign-ins-and-microsoft-sentinel-g8uabkfyn', title: 'Auditing sign-ins and Microsoft Sentinel', type: 'test'},
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
