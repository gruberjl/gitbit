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
      question: {"answerOptions":{"7lnz7cd5x":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"aqiuc","text":"System","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>System</p>\n","id":"7lnz7cd5x"},"86u-sakxc":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"cl1sc","text":"Security","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Security</p>\n","id":"86u-sakxc"},"9vlyr6jpz":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"apbq8","text":"Application","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Application</p>\n","id":"9vlyr6jpz"},"augolcxj8":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"65o1c","text":"Application and Services Logs/Microsoft/Windows/Security-Adminless","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Application and Services Logs/Microsoft/Windows/Security-Adminless</p>\n","id":"augolcxj8"}},"id":"coq4hskij","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"84hee","text":"Your organization has an on-premises Active Directory domain named gitbit.org","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"cjnsv","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"ad2aj","text":"Your organization has installed Azure AD Connect on a server to sync your on-premises AD to Microsoft 365.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"f3atd","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"4ejju","text":"There's an error in the sync. You've been tasked with finding and resolving the error. You need to view Azure AD Connect events.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8gj5","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"4s2m0","text":"What event logs do you use?","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>Your organization has an on-premises Active Directory domain named gitbit.org</p>\n<p></p>\n<p>Your organization has installed Azure AD Connect on a server to sync your on-premises AD to Microsoft 365.</p>\n<p></p>\n<p>There's an error in the sync. You've been tasked with finding and resolving the error. You need to view Azure AD Connect events.</p>\n<p></p>\n<p>What event logs do you use?</p>\n","questionText":"Your organization has an on-premises Active Directory domain named gitbit.org Your organization has installed Azure AD Connect on a server to sync your on-premises AD to Microsoft 365. There's an error in the sync. You've been tasked with finding and resolving the error. You need to view Azure AD Connect events. What event logs do you use?","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"55qba","text":"Troubleshooting AD Connect can be a bit complicated Because there are four places that you may need to check to view the errors (although the data is usually redundant)","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"eip5c","text":"Directory Sync status in the Microsoft 365 admin center.","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"46kjg","text":"Sync errors in the Azure AD admin center (found under Azure Active Directory Connect health)","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"694ir","text":"The synchronization service app on the AD Connect server","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"e5hq7","text":"The application event logs on the AD Connect server","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":69,"offset":0}],"inlineStyleRanges":[],"key":"3e60r","text":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":1,"length":93,"offset":0}],"inlineStyleRanges":[],"key":"e8hec","text":"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance","type":"unstyled"}],"entityMap":{"0":{"data":{"href":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","target":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"href":"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance","target":"_blank","url":"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>Troubleshooting AD Connect can be a bit complicated Because there are four places that you may need to check to view the errors (although the data is usually redundant)</p>\n<ul>\n<li>Directory Sync status in the Microsoft 365 admin center.</li>\n<li>Sync errors in the Azure AD admin center (found under Azure Active Directory Connect health)</li>\n<li>The synchronization service app on the AD Connect server</li>\n<li>The application event logs on the AD Connect server</li>\n</ul>\n<p><a href=\"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P</a></p>\n<p><a href=\"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance\" target=\"_self\">https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance</a></p>\n","slug":"what-event-logs-do-you-us-coq4hskij","title":"What event logs do you use to troubleshoot AD Connect?","type":"multiple-choice"},
      test: {"answers":{"8a8tdv5yr":{"ordyqhjhj":{"id":"ordyqhjhj","isCorrect":false},"qme9decd7":{"id":"qme9decd7","isCorrect":false},"r5mrv1vqy":{"id":"r5mrv1vqy","isCorrect":true},"xvbwrp3vu":{"id":"xvbwrp3vu","isCorrect":false},"z7snw7q4f":{"id":"z7snw7q4f","isCorrect":false}},"ccdlpnbrj":{"9jptshdbm":{"id":"9jptshdbm","isCorrect":true},"_vpp_e2lg":{"id":"_vpp_e2lg","isCorrect":false},"cmoxolls5":{"id":"cmoxolls5","isCorrect":false},"u3zypljvd":{"id":"u3zypljvd","isCorrect":false}},"coq4hskij":{"7lnz7cd5x":{"id":"7lnz7cd5x","isCorrect":false},"86u-sakxc":{"id":"86u-sakxc","isCorrect":false},"9vlyr6jpz":{"id":"9vlyr6jpz","isCorrect":true},"augolcxj8":{"id":"augolcxj8","isCorrect":false}},"tots2lcqv":{"bn7_tcxzn":{"id":"bn7_tcxzn","isCorrect":false},"je1o6t9ds":{"id":"je1o6t9ds","isCorrect":false},"me4yg4psl":{"id":"me4yg4psl","isCorrect":true},"rabmmiz18":{"id":"rabmmiz18","isCorrect":false}},"yfwzgfxu8":{"gdbyecp1b":{"1wtadwmik":{"id":"1wtadwmik","isCorrect":false},"id":"gdbyecp1b","nd6qjhfnd":{"id":"nd6qjhfnd","isCorrect":false},"zhmxdwvhl":{"id":"zhmxdwvhl","isCorrect":true}},"zxoma6vc5":{"-t-rcn-fo":{"id":"-t-rcn-fo","isCorrect":false},"id":"zxoma6vc5","kuqd8vqiv":{"id":"kuqd8vqiv","isCorrect":true},"tva0md3-h":{"id":"tva0md3-h","isCorrect":false},"z2rbhe7oo":{"id":"z2rbhe7oo","isCorrect":false}}},"yogt2ep5x":{"fyokqryrr":{"epvzoj9gj":{"id":"epvzoj9gj","isCorrect":false},"id":"fyokqryrr","t61jygepm":{"id":"t61jygepm","isCorrect":false},"vw1sjoqcq":{"id":"vw1sjoqcq","isCorrect":true}},"jzjwn5hqw":{"-phlif_24":{"id":"-phlif_24","isCorrect":false},"id":"jzjwn5hqw","jgowsdkg4":{"id":"jgowsdkg4","isCorrect":true},"kdq2ue-hj":{"id":"kdq2ue-hj","isCorrect":false}}}},"datePublished":"2022/9/20","description":"Perfect for anyone who wants to ensure they know everything they need to know about AD Connect. With a series of questions that cover everything you need to know about AD Connect, this practice test is the perfect way to prepare for the real thing. So why wait? Take our MS-500 practice test today and put yourself one step closer to passing the MS-500 Microsoft 365 Security Administration certificate!","featuredImage":"https://i.ibb.co/nDBr7ps/ad-connect-status.png","id":"lg2mr5_z0","images":["https://i.ibb.co/nDBr7ps/ad-connect-status.png"],"publish":true,"questions":{"8a8tdv5yr":{"answerOptions":{"ordyqhjhj":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"d4qg7","text":"Source Anchor settings","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Source Anchor settings</p>\n","id":"ordyqhjhj"},"qme9decd7":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8n605","text":"Azure AD app and attribute filtering settings","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Azure AD app and attribute filtering settings</p>\n","id":"qme9decd7"},"r5mrv1vqy":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"dlsmg","text":"Password Hash Synchronization settings","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Password Hash Synchronization settings</p>\n","id":"r5mrv1vqy"},"xvbwrp3vu":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2qjeb","text":"attribute filtering settings","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>attribute filtering settings</p>\n","id":"xvbwrp3vu"},"z7snw7q4f":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"ds8d9","text":"User principal name settings","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>User principal name settings</p>\n","id":"z7snw7q4f"}},"id":"8a8tdv5yr","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"iriq","text":"Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization currently uses AD Connect to sync your user accounts from the on-premises AD to Microsoft 365. Your organization is also using Active Directory Federation Services (AD FS) to federate between the on-premises Active Directory (AD) and the Microsoft 365 tenant. Azure AD Connect has the following settings:","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"d6o7p","text":"📷","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"aotvn","text":"Your manager has asked if you can update the configuration so leaked credentials detection can run properly","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"eq3gs","text":"What attribute do you edit?","type":"unstyled"}],"entityMap":{"0":{"data":{"alt":"AD Connect settings","src":"https://i.ibb.co/Y87wd88/AD-Connect-Settings.png"},"mutability":"IMMUTABLE","type":"IMAGE"}}},"questionHtml":"<p>Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization currently uses AD Connect to sync your user accounts from the on-premises AD to Microsoft 365. Your organization is also using Active Directory Federation Services (AD FS) to federate between the on-premises Active Directory (AD) and the Microsoft 365 tenant. Azure AD Connect has the following settings:</p>\n<p><img src=\"https://i.ibb.co/Y87wd88/AD-Connect-Settings.png\" alt=\"AD Connect settings\" style=\"height: undefined;width: undefined\"/></p>\n<p>Your manager has asked if you can update the configuration so leaked credentials detection can run properly</p>\n<p>What attribute do you edit?</p>\n","questionText":"Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization currently uses AD Connect to sync your user accounts from the on-premises AD to Microsoft 365. Your organization is also using Active Directory Federation Services (AD FS) to federate between the on-premises Active Directory (AD) and the Microsoft 365 tenant. Azure AD Connect has the following settings: 📷 Your manager has asked if you can update the configuration so leaked credentials detection can run properly What attribute do you edit?","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"4h32i","text":"Leaked credentials detection can only work if the password hash is synced/stored in Microsoft 365.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8dkca","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":69,"offset":0}],"inlineStyleRanges":[],"key":"as43f","text":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8ksm3","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":1,"length":139,"offset":0}],"inlineStyleRanges":[],"key":"8fa1t","text":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization","type":"unstyled"}],"entityMap":{"0":{"data":{"url":"Leaked credentials detection can only work if the password hash is synced/stored in Microsoft 365.  https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P  https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"url":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>Leaked credentials detection can only work if the password hash is synced/stored in Microsoft 365.</p>\n<p></p>\n<p><a href=\"Leaked credentials detection can only work if the password hash is synced/stored in Microsoft 365.  https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P  https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P</a></p>\n<p></p>\n<p><a href=\"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization\" target=\"_self\">https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization</a></p>\n","slug":"what-attribute-do-you-edi-8a8tdv5yr","title":"What attribute do you edit to configure leaked credentials detection","type":"multiple-choice"},"ccdlpnbrj":{"answerOptions":{"9jptshdbm":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8516k","text":"From the Azure AD admin center, create a new certificate.","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>From the Azure AD admin center, create a new certificate.</p>\n","id":"9jptshdbm"},"_vpp_e2lg":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"fhbsd","text":"From the Azure AD admin center, enable Application Proxy.","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>From the Azure AD admin center, enable Application Proxy.</p>\n","id":"_vpp_e2lg"},"cmoxolls5":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"epkq5","text":"Configure authentication methods in the Azure AD admin center.","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Configure authentication methods in the Azure AD admin center.</p>\n","id":"cmoxolls5"},"u3zypljvd":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"bs0v9","text":"Create a Dynamic Access Control policy in the Azure AD admin center.","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Create a Dynamic Access Control policy in the Azure AD admin center.</p>\n","id":"u3zypljvd"}},"id":"ccdlpnbrj","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"7c8e","text":"Your organization has a Microsoft 365 tenant with AD Connect syncing your on-premises AD to Microsoft 365. All computers are running Windows 10 and are configured to use Microsoft Intune.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"dh8a2","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"1el6c","text":"You've been tasked with protecting the VPN. Your manager has asked you to require every computer connecting to the VPN is marked as compliant.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"5umfq","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"52mkp","text":"What do you need to do first?","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>Your organization has a Microsoft 365 tenant with AD Connect syncing your on-premises AD to Microsoft 365. All computers are running Windows 10 and are configured to use Microsoft Intune.</p>\n<p></p>\n<p>You've been tasked with protecting the VPN. Your manager has asked you to require every computer connecting to the VPN is marked as compliant.</p>\n<p></p>\n<p>What do you need to do first?</p>\n","questionText":"Your organization has a Microsoft 365 tenant with AD Connect syncing your on-premises AD to Microsoft 365. All computers are running Windows 10 and are configured to use Microsoft Intune. You've been tasked with protecting the VPN. Your manager has asked you to require every computer connecting to the VPN is marked as compliant. What do you need to do first?","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2et7c","text":"It's not very common so it's not included in the documents in this training but the correct steps are: Create a root certificate in Azure AD > Deploy the conditional access root certificate to on-premises AD > Configure the Conditional Access policy in Azure AD > Create an OMA-DM based VPNv2 Profile for Windows 10 devices.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"1u2ue","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":105,"offset":0}],"inlineStyleRanges":[],"key":"c2vcd","text":"https://docs.microsoft.com/en-us/windows-server/remote/remote-access/vpn/ad-ca-vpn-connectivity-windows10","type":"unstyled"}],"entityMap":{"0":{"data":{"url":"https://docs.microsoft.com/en-us/windows-server/remote/remote-access/vpn/ad-ca-vpn-connectivity-windows10"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>It's not very common so it's not included in the documents in this training but the correct steps are: Create a root certificate in Azure AD &gt; Deploy the conditional access root certificate to on-premises AD &gt; Configure the Conditional Access policy in Azure AD &gt; Create an OMA-DM based VPNv2 Profile for Windows 10 devices.</p>\n<p></p>\n<p><a href=\"https://docs.microsoft.com/en-us/windows-server/remote/remote-access/vpn/ad-ca-vpn-connectivity-windows10\" target=\"_self\">https://docs.microsoft.com/en-us/windows-server/remote/remote-access/vpn/ad-ca-vpn-connectivity-windows10</a></p>\n","slug":"youve-been-tasked-with-pr-ccdlpnbrj","title":"You've been tasked with protecting the VPN. What do you need to do first?","type":"multiple-choice"},"coq4hskij":{"answerOptions":{"7lnz7cd5x":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"aqiuc","text":"System","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>System</p>\n","id":"7lnz7cd5x"},"86u-sakxc":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"cl1sc","text":"Security","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Security</p>\n","id":"86u-sakxc"},"9vlyr6jpz":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"apbq8","text":"Application","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Application</p>\n","id":"9vlyr6jpz"},"augolcxj8":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"65o1c","text":"Application and Services Logs/Microsoft/Windows/Security-Adminless","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Application and Services Logs/Microsoft/Windows/Security-Adminless</p>\n","id":"augolcxj8"}},"id":"coq4hskij","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"84hee","text":"Your organization has an on-premises Active Directory domain named gitbit.org","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"cjnsv","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"ad2aj","text":"Your organization has installed Azure AD Connect on a server to sync your on-premises AD to Microsoft 365.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"f3atd","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"4ejju","text":"There's an error in the sync. You've been tasked with finding and resolving the error. You need to view Azure AD Connect events.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8gj5","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"4s2m0","text":"What event logs do you use?","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>Your organization has an on-premises Active Directory domain named gitbit.org</p>\n<p></p>\n<p>Your organization has installed Azure AD Connect on a server to sync your on-premises AD to Microsoft 365.</p>\n<p></p>\n<p>There's an error in the sync. You've been tasked with finding and resolving the error. You need to view Azure AD Connect events.</p>\n<p></p>\n<p>What event logs do you use?</p>\n","questionText":"Your organization has an on-premises Active Directory domain named gitbit.org Your organization has installed Azure AD Connect on a server to sync your on-premises AD to Microsoft 365. There's an error in the sync. You've been tasked with finding and resolving the error. You need to view Azure AD Connect events. What event logs do you use?","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"55qba","text":"Troubleshooting AD Connect can be a bit complicated Because there are four places that you may need to check to view the errors (although the data is usually redundant)","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"eip5c","text":"Directory Sync status in the Microsoft 365 admin center.","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"46kjg","text":"Sync errors in the Azure AD admin center (found under Azure Active Directory Connect health)","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"694ir","text":"The synchronization service app on the AD Connect server","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"e5hq7","text":"The application event logs on the AD Connect server","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":69,"offset":0}],"inlineStyleRanges":[],"key":"3e60r","text":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":1,"length":93,"offset":0}],"inlineStyleRanges":[],"key":"e8hec","text":"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance","type":"unstyled"}],"entityMap":{"0":{"data":{"href":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","target":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"href":"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance","target":"_blank","url":"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>Troubleshooting AD Connect can be a bit complicated Because there are four places that you may need to check to view the errors (although the data is usually redundant)</p>\n<ul>\n<li>Directory Sync status in the Microsoft 365 admin center.</li>\n<li>Sync errors in the Azure AD admin center (found under Azure Active Directory Connect health)</li>\n<li>The synchronization service app on the AD Connect server</li>\n<li>The application event logs on the AD Connect server</li>\n</ul>\n<p><a href=\"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P</a></p>\n<p><a href=\"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance\" target=\"_self\">https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance</a></p>\n","slug":"what-event-logs-do-you-us-coq4hskij","title":"What event logs do you use to troubleshoot AD Connect?","type":"multiple-choice"},"tots2lcqv":{"answerOptions":{"bn7_tcxzn":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"a1u4r","text":"Security event log","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Security event log</p>\n","id":"bn7_tcxzn"},"je1o6t9ds":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"5lr0h","text":"Directory Service event logs","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Directory Service event logs</p>\n","id":"je1o6t9ds"},"me4yg4psl":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"ec5ni","text":"Application event log","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>Application event log</p>\n","id":"me4yg4psl"},"rabmmiz18":{"answer":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2rbh7","text":"System event log","type":"unstyled"}],"entityMap":{}},"answerHtml":"<p>System event log</p>\n","id":"rabmmiz18"}},"id":"tots2lcqv","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"rbvj","text":"Your organization has an Active Directory domain named gitbit.org. You've installed Azure AD Connect on ServerA which is a server running Windows 2016.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8hmh2","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"b9rje","text":"There's an error syncing user accounts from your on-premises AD to Microsoft 365.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"aqec","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"1cvc1","text":"You've been tasked with resolving the error. To start, you RDP to ServerA and open the Directory Service event logs.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"agupt","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8pkc2","text":"What location can you use to troubleshoot the AD Connect sync errors?","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>Your organization has an Active Directory domain named gitbit.org. You've installed Azure AD Connect on ServerA which is a server running Windows 2016.</p>\n<p></p>\n<p>There's an error syncing user accounts from your on-premises AD to Microsoft 365.</p>\n<p></p>\n<p>You've been tasked with resolving the error. To start, you RDP to ServerA and open the Directory Service event logs.</p>\n<p></p>\n<p>What location can you use to troubleshoot the AD Connect sync errors?</p>\n","questionText":"Your organization has an Active Directory domain named gitbit.org. You've installed Azure AD Connect on ServerA which is a server running Windows 2016. There's an error syncing user accounts from your on-premises AD to Microsoft 365. You've been tasked with resolving the error. To start, you RDP to ServerA and open the Directory Service event logs. What location can you use to troubleshoot the AD Connect sync errors?","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"bjddh","text":"Troubleshooting AD Connect cannot be performed from the Directory Service event logs. You'll need to access the Windows Application event logs.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"88b4s","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":69,"offset":0}],"inlineStyleRanges":[],"key":"aohob","text":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8l97l","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":1,"length":93,"offset":0}],"inlineStyleRanges":[],"key":"3nv26","text":"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance","type":"unstyled"}],"entityMap":{"0":{"data":{"url":"Troubleshooting AD Connect cannot be performed from the Directory Service event logs. You'll need to access the Windows Application event logs.  https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P  https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"url":"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>Troubleshooting AD Connect cannot be performed from the Directory Service event logs. You'll need to access the Windows Application event logs.</p>\n<p></p>\n<p><a href=\"Troubleshooting AD Connect cannot be performed from the Directory Service event logs. You'll need to access the Windows Application event logs.  https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P  https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P</a></p>\n<p></p>\n<p><a href=\"https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance\" target=\"_self\">https://support.pingidentity.com/s/article/PingOne-How-to-troubleshoot-an-AD-Connect-Instance</a></p>\n","slug":"what-location-can-you-use-tots2lcqv","title":"What location can you use to troubleshoot the AD Connect sync errors?","type":"multiple-choice"},"yfwzgfxu8":{"answerOptions":{"gdbyecp1b":{"answerHtml":"","answers":{"1wtadwmik":{"id":"1wtadwmik","text":"Only employees who have a synced on-premises account"},"nd6qjhfnd":{"id":"nd6qjhfnd","text":"Only employees who have an Azure AD user account"},"zhmxdwvhl":{"id":"zhmxdwvhl","text":"Employees who have an Azure AD user account or a synced on-premises account"}},"id":"gdbyecp1b","text":"Which employees can authenticate by using Azure AD?"},"zxoma6vc5":{"answerHtml":"","answers":{"-t-rcn-fo":{"id":"-t-rcn-fo","text":"Fix the synchronization server and install Azure AD Connect in staging mode"},"kuqd8vqiv":{"id":"kuqd8vqiv","text":"Fix the synchronization server and install an additional authentication agent"},"tva0md3-h":{"id":"tva0md3-h","text":"Install Azure AD Connect in staging mode and run the Start-ADSyncSyncCycle cmdlet"},"z2rbhe7oo":{"id":"z2rbhe7oo","text":"Install an additional authentication agent and run the Start-ADSyncSyncCycle cmdlet"}},"id":"zxoma6vc5","text":"What should you do to remove the warning for pass-through authentication?"}},"id":"yfwzgfxu8","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"be9h2","text":"Your network contains an on-premises Active Directory domain that syncs to Azure Active Directory (Azure AD) as shown in the following exhibit.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"9is0e","text":"📷","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"5rqni","text":"The synchronization schedule is configured as shown in the following exhibit.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":1,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"670vt","text":"📷","type":"unstyled"}],"entityMap":{"0":{"data":{"alt":"AD Connect Setup","src":"https://i.ibb.co/VpsjVFh/ad-connect-setup.png"},"mutability":"IMMUTABLE","type":"IMAGE"},"1":{"data":{"alt":"AD Connect Scheduler status","src":"https://i.ibb.co/CWcS1NP/ad-connect-status.png"},"mutability":"IMMUTABLE","type":"IMAGE"}}},"questionHtml":"<p>Your network contains an on-premises Active Directory domain that syncs to Azure Active Directory (Azure AD) as shown in the following exhibit.</p>\n<p><img src=\"https://i.ibb.co/VpsjVFh/ad-connect-setup.png\" alt=\"AD Connect Setup\" style=\"height: undefined;width: undefined\"/></p>\n<p>The synchronization schedule is configured as shown in the following exhibit.</p>\n<p><img src=\"https://i.ibb.co/CWcS1NP/ad-connect-status.png\" alt=\"AD Connect Scheduler status\" style=\"height: undefined;width: undefined\"/></p>\n","questionText":"Your network contains an on-premises Active Directory domain that syncs to Azure Active Directory (Azure AD) as shown in the following exhibit. 📷 The synchronization schedule is configured as shown in the following exhibit. 📷","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"ajf1d","text":"Users that have an Azure AD user account or a synced on-premises account can both authenticate. (Pass-through authentication does not affect cloud-only accounts)","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"1g4md","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"ducbm","text":"The yellow exclamation mark is Microsoft warning you that you should have at least 2 pass-through authentication agents (in case one server fails).","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8j34r","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"b8cp1","text":"There's also an issue with the synchronization server because the last sync time is 4 hours. A sync should run every 30 minutes.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"em8bl","text":"","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":69,"offset":0}],"inlineStyleRanges":[],"key":"9meg1","text":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","type":"unstyled"}],"entityMap":{"0":{"data":{"url":"Users that have an Azure AD user account or a synced on-premises account can both authenticate. (Pass-through authentication does not affect cloud-only accounts)  The yellow exclamation mark is Microsoft warning you that you should have at least 2 pass-through authentication agents (in case one server fails).  There's also an issue with the synchronization server because the last sync time is 4 hours. A sync should run every 30 minutes.  https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>Users that have an Azure AD user account or a synced on-premises account can both authenticate. (Pass-through authentication does not affect cloud-only accounts)</p>\n<p></p>\n<p>The yellow exclamation mark is Microsoft warning you that you should have at least 2 pass-through authentication agents (in case one server fails).</p>\n<p></p>\n<p>There's also an issue with the synchronization server because the last sync time is 4 hours. A sync should run every 30 minutes.</p>\n<p></p>\n<p><a href=\"Users that have an Azure AD user account or a synced on-premises account can both authenticate. (Pass-through authentication does not affect cloud-only accounts)  The yellow exclamation mark is Microsoft warning you that you should have at least 2 pass-through authentication agents (in case one server fails).  There's also an issue with the synchronization server because the last sync time is 4 hours. A sync should run every 30 minutes.  https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P</a></p>\n","slug":"which-employees-can-authe-yfwzgfxu8","title":"Which employees can authenticate by using Azure AD? What should you do to remove the warning for pass-through authentication?","type":"hot-area"},"yogt2ep5x":{"answerOptions":{"fyokqryrr":{"answerHtml":"","answers":{"epvzoj9gj":{"id":"epvzoj9gj","text":"Password Synchronization with single-sign on"},"t61jygepm":{"id":"t61jygepm","text":"Federation with Active Directory Federation Services (AD FS)"},"vw1sjoqcq":{"id":"vw1sjoqcq","text":"Pass-through authentication with single-sign on"}},"id":"fyokqryrr","text":"User sign-in settings"},"jzjwn5hqw":{"answerHtml":"","answers":{"-phlif_24":{"id":"-phlif_24","text":"Disable Device writeback"},"jgowsdkg4":{"id":"jgowsdkg4","text":"Hybrid Azure AD Join"},"kdq2ue-hj":{"id":"kdq2ue-hj","text":"Enable Device writeback"}},"id":"jzjwn5hqw","text":"Device options"}},"id":"yogt2ep5x","images":[],"question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"2sq9o","text":"Your organization has a Microsoft 365 tenant and an on-premises Active Directory (AD) domain. Your organization has installed AD Connect but hasn't enabled the syncing of your on-premises AD to Microsoft 365. Your organization is currently using the default authentication settings.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"d0o7g","text":"Your manager has asked you to perform the following","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"c7vdu","text":"Have all domain joined computers registered in Azure AD.","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"f5pjh","text":"Configure Microsoft 365 to lock out any user that's currently locked out of the on-premises AD.","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"b09aj","text":"What two settings will you need to configure to meet the goals listed above?","type":"unstyled"}],"entityMap":{}},"questionHtml":"<p>Your organization has a Microsoft 365 tenant and an on-premises Active Directory (AD) domain. Your organization has installed AD Connect but hasn't enabled the syncing of your on-premises AD to Microsoft 365. Your organization is currently using the default authentication settings.</p>\n<p>Your manager has asked you to perform the following</p>\n<ul>\n<li>Have all domain joined computers registered in Azure AD.</li>\n<li>Configure Microsoft 365 to lock out any user that's currently locked out of the on-premises AD.</li>\n</ul>\n<p>What two settings will you need to configure to meet the goals listed above?</p>\n","questionText":"Your organization has a Microsoft 365 tenant and an on-premises Active Directory (AD) domain. Your organization has installed AD Connect but hasn't enabled the syncing of your on-premises AD to Microsoft 365. Your organization is currently using the default authentication settings. Your manager has asked you to perform the following Have all domain joined computers registered in Azure AD. Configure Microsoft 365 to lock out any user that's currently locked out of the on-premises AD. What two settings will you need to configure to meet the goals listed above?","references":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"5c0f2","text":"To ensure that all domain-joined computers are registered to Azure AD Hybrid Azure AD Join would need to be configured.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"3plp1","text":"To prevent users locked out of Active Directory from signing in to Azure AD and Active Directory pass-through authentication would need to be configured.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":0,"length":69,"offset":0}],"inlineStyleRanges":[],"key":"2uc0v","text":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","type":"unstyled"}],"entityMap":{"0":{"data":{"href":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","url":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P"},"mutability":"MUTABLE","type":"LINK"}}},"referencesHtml":"<p>To ensure that all domain-joined computers are registered to Azure AD Hybrid Azure AD Join would need to be configured.</p>\n<p>To prevent users locked out of Active Directory from signing in to Azure AD and Active Directory pass-through authentication would need to be configured.</p>\n<p><a href=\"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P\" target=\"_self\">https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P</a></p>\n","slug":"what-user-signin-settings-yogt2ep5x","title":"What User sign-in settings and Device options do you need to configure?","type":"hot-area"}},"sectionId":"AFV_acckJ","slug":"adconnect-lg2mr5_z0","title":"AD Connect","type":"test"},
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
