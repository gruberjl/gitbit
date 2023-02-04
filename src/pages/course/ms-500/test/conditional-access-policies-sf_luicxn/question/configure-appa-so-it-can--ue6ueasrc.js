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
      question: {answerOptions: {'0wexho7c5': {answer: 'From the Azure AD admin center, register AppA', answerHtml: '', id: '0wexho7c5'}, '4kz5--xd_': {answer: 'Open the Cloud App Security admin center', answerHtml: '', id: '4kz5--xd_'}, hnlfoza9w: {answer: 'Create an access policy', answerHtml: '', id: 'hnlfoza9w'}, zc48eiabm: {answer: 'Create a conditional access policy', answerHtml: '', id: 'zc48eiabm'}}, answerText: 'From the Azure AD admin center, register AppA. Create a conditional access policy. Open the Cloud App Security admin center. Create an access policy.', id: 'ue6ueasrc', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1q7nj', text: 'All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6gf2a', text: 'Your organization has purchased an app named AppA.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd9ioa', text: 'AppA that supports Microsoft\'s session controls.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'frh6e', text: 'Your manager asks you to configure AppA so it can be reviewed in real-time.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4e0tc', text: 'What do you need to do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune.</p>\n<p>Your organization has purchased an app named AppA.</p>\n<p>AppA that supports Microsoft\'s session controls.</p>\n<p>Your manager asks you to configure AppA so it can be reviewed in real-time.</p>\n<p>What do you need to do?</p>\n', questionText: 'All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune. Your organization has purchased an app named AppA. AppA that supports Microsoft\'s session controls. Your manager asks you to configure AppA so it can be reviewed in real-time. What do you need to do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '43gs5', text: 'You\'ll need to perform three steps to manage a device:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd8fnm', text: 'From the Azure AD admin center, register AppA.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9shuk', text: 'From the Azure AD admin center, create a conditional access policy.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bp36b', text: 'From the Cloud App Security admin center, create an access policy.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 69, offset: 0}], inlineStyleRanges: [], key: 'bd4ql', text: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad', target: '_blank', url: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You\'ll need to perform three steps to manage a device:</p>\n<ol>\n<li>From the Azure AD admin center, register AppA.</li>\n<li>From the Azure AD admin center, create a conditional access policy.</li>\n<li>From the Cloud App Security admin center, create an access policy.</li>\n</ol>\n<p><a href="https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad" target="_self">https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad</a></p>\n', slug: 'configure-appa-so-it-can--ue6ueasrc', title: 'Configure AppA so it can be reviewed in real-time', type: 'build-list'},
      test: {answers: {cuc4rrmfn: {'-jcwpjk2q': {id: '-jcwpjk2q', isCorrect: true}, '1fyqg-o98': {id: '1fyqg-o98', isCorrect: false}, tzkp0yc1m: {id: 'tzkp0yc1m', isCorrect: false}, xialyqe45: {id: 'xialyqe45', isCorrect: false}}, ue6ueasrc: {'0wexho7c5': {id: '0wexho7c5', idx: 0}, '4kz5--xd_': {id: '4kz5--xd_', idx: 2}, hnlfoza9w: {id: 'hnlfoza9w', idx: 3}, zc48eiabm: {id: 'zc48eiabm', idx: 1}}, yfm2sgksr: {kdsrpvy5j: {id: 'kdsrpvy5j', isCorrect: false}, lrlu3ra4p: {id: 'lrlu3ra4p', isCorrect: false}, v2hvstxme: {id: 'v2hvstxme', isCorrect: false}, vy2kaz8or: {id: 'vy2kaz8or', isCorrect: true}}}, datePublished: '2022/9/27', description: 'Test your knowledge of conditional access policies. Every question you may see in the MS-500 for conditional access policies is shown here.', featuredImage: 'https://i.ibb.co/q5NZSJf/conditional-access-policy.png', id: 'sf_luicxn', images: ['https://i.ibb.co/q5NZSJf/conditional-access-policy.png'], publish: true, questions: {cuc4rrmfn: {answerOptions: {'-jcwpjk2q': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'amle', text: 'Sign-ins logs located in the Azure Active Directory admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Sign-ins logs located in the Azure Active Directory admin center</p>\n', id: '-jcwpjk2q'}, '1fyqg-o98': {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7t6b3', text: 'Audit logs located in the Azure Active Directory admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Audit logs located in the Azure Active Directory admin center</p>\n', id: '1fyqg-o98'}, tzkp0yc1m: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5jra2', text: 'Activity logs located in the Cloud App Security admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>Activity logs located in the Cloud App Security admin center</p>\n', id: 'tzkp0yc1m'}, xialyqe45: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '69se3', text: 'The compliance report in the Microsoft Endpoint Manager admin center', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>The compliance report in the Microsoft Endpoint Manager admin center</p>\n', id: 'xialyqe45'}}, id: 'cuc4rrmfn', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3amid', text: 'Your organization has configured multiple conditional access policies to block non-compliant devices from connecting to Microsoft 365 and other services.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ftpcn', text: 'Some users complain that they cannot access some services due to their devices being non-compliant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9qq3o', text: 'Where can you go to check which conditional access policy is blocking the users\' login?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your organization has configured multiple conditional access policies to block non-compliant devices from connecting to Microsoft 365 and other services.</p>\n<p>Some users complain that they cannot access some services due to their devices being non-compliant.</p>\n<p>Where can you go to check which conditional access policy is blocking the users\' login?</p>\n', questionText: 'Your organization has configured multiple conditional access policies to block non-compliant devices from connecting to Microsoft 365 and other services. Some users complain that they cannot access some services due to their devices being non-compliant. Where can you go to check which conditional access policy is blocking the users\' login?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 11, style: 'BOLD'}, {length: 6, offset: 49, style: 'BOLD'}, {length: 12, offset: 57, style: 'BOLD'}, {length: 18, offset: 116, style: 'BOLD'}], key: 'f4616', text: 'Sign in to Azure Active Directory admin center > Users > Sign in logs > click the sign-in you want to investigate > Conditional access.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 86, offset: 0}], inlineStyleRanges: [], key: '6ufqg', text: 'https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh', type: 'unstyled'}], entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Sign in to <strong>Azure Active Directory admin center</strong> &gt; <strong>Users </strong>&gt; <strong>Sign in logs</strong> &gt; click the sign-in you want to investigate &gt; <strong>Conditional access</strong>.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh" target="_self">https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh</a></p>\n', slug: 'where-to-check-which-cond-cuc4rrmfn', title: 'Where to check which conditional access policy is blocking the users login', type: 'multiple-choice'}, ue6ueasrc: {answerOptions: {'0wexho7c5': {answer: 'From the Azure AD admin center, register AppA', answerHtml: '', id: '0wexho7c5'}, '4kz5--xd_': {answer: 'Open the Cloud App Security admin center', answerHtml: '', id: '4kz5--xd_'}, hnlfoza9w: {answer: 'Create an access policy', answerHtml: '', id: 'hnlfoza9w'}, zc48eiabm: {answer: 'Create a conditional access policy', answerHtml: '', id: 'zc48eiabm'}}, answerText: 'From the Azure AD admin center, register AppA. Create a conditional access policy. Open the Cloud App Security admin center. Create an access policy.', id: 'ue6ueasrc', images: [], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1q7nj', text: 'All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6gf2a', text: 'Your organization has purchased an app named AppA.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd9ioa', text: 'AppA that supports Microsoft\'s session controls.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'frh6e', text: 'Your manager asks you to configure AppA so it can be reviewed in real-time.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4e0tc', text: 'What do you need to do?', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune.</p>\n<p>Your organization has purchased an app named AppA.</p>\n<p>AppA that supports Microsoft\'s session controls.</p>\n<p>Your manager asks you to configure AppA so it can be reviewed in real-time.</p>\n<p>What do you need to do?</p>\n', questionText: 'All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune. Your organization has purchased an app named AppA. AppA that supports Microsoft\'s session controls. Your manager asks you to configure AppA so it can be reviewed in real-time. What do you need to do?', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '43gs5', text: 'You\'ll need to perform three steps to manage a device:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd8fnm', text: 'From the Azure AD admin center, register AppA.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9shuk', text: 'From the Azure AD admin center, create a conditional access policy.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bp36b', text: 'From the Cloud App Security admin center, create an access policy.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 69, offset: 0}], inlineStyleRanges: [], key: 'bd4ql', text: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad', type: 'unstyled'}], entityMap: {0: {data: {href: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad', target: '_blank', url: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>You\'ll need to perform three steps to manage a device:</p>\n<ol>\n<li>From the Azure AD admin center, register AppA.</li>\n<li>From the Azure AD admin center, create a conditional access policy.</li>\n<li>From the Cloud App Security admin center, create an access policy.</li>\n</ol>\n<p><a href="https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad" target="_self">https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad</a></p>\n', slug: 'configure-appa-so-it-can--ue6ueasrc', title: 'Configure AppA so it can be reviewed in real-time', type: 'build-list'}, yfm2sgksr: {answerOptions: {kdsrpvy5j: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eaamo', text: 'A user risk policy', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A user risk policy</p>\n', id: 'kdsrpvy5j'}, lrlu3ra4p: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fblpr', text: 'A sign-in risk policy', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A sign-in risk policy</p>\n', id: 'lrlu3ra4p'}, v2hvstxme: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4nbip', text: 'An Azure MFA Server', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>An Azure MFA Server</p>\n', id: 'v2hvstxme'}, vy2kaz8or: {answer: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5inok', text: 'A named location in Azure Active Directory (Azure AD)', type: 'unstyled'}], entityMap: {}}, answerHtml: '<p>A named location in Azure Active Directory (Azure AD)</p>\n', id: 'vy2kaz8or'}}, id: 'yfm2sgksr', images: ['https://i.ibb.co/q5NZSJf/conditional-access-policy.png'], question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'deju', text: 'Your company has a main office and a Microsoft 365 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4lpib', text: 'You need to enforce Microsoft Azure Multi-Factor Authentication (MFA) by using conditional access for all users who are NOT physically present in the office.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'da6eh', text: 'What should you include in the configuration?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4rj7u', text: '', type: 'unstyled'}], entityMap: {}}, questionHtml: '<p>Your company has a main office and a Microsoft 365 subscription.</p>\n<p>You need to enforce Microsoft Azure Multi-Factor Authentication (MFA) by using conditional access for all users who are NOT physically present in the office.</p>\n<p>What should you include in the configuration?</p>\n<p></p>\n', questionText: 'Your company has a main office and a Microsoft 365 subscription. You need to enforce Microsoft Azure Multi-Factor Authentication (MFA) by using conditional access for all users who are NOT physically present in the office. What should you include in the configuration? ', references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bp3jq', text: 'Named locations are required when you want to create a conditional access policy requiring MFA while excluding certain locations.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 86, offset: 0}], inlineStyleRanges: [], key: '51n5p', text: 'https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 93, offset: 0}], inlineStyleRanges: [], key: 'b57n9', text: 'https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition', type: 'unstyled'}], entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {url: 'https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition'}, mutability: 'MUTABLE', type: 'LINK'}}}, referencesHtml: '<p>Named locations are required when you want to create a conditional access policy requiring MFA while excluding certain locations.</p>\n<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh" target="_self">https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh</a></p>\n<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition" target="_self">https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition</a></p>\n', slug: 'create-conditional-access-yfm2sgksr', title: 'Create conditional access policy to enforce MFA but exclude physical locations', type: 'multiple-choice'}}, sectionId: 'AFV_acckJ', slug: 'conditional-access-policies-sf_luicxn', title: 'Conditional access policies', type: 'test'},
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
