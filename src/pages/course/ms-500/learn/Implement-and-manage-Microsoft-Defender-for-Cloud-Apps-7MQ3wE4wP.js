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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [{key: 0, length: 9, offset: 265}], inlineStyleRanges: [], key: '1uuos', text: '"Microsoft Defender for Cloud Apps is a Cloud Access Security Broker (CASB) that operates on multiple clouds. It provides rich visibility, control over data travel, and sophisticated analytics to identify and combat cyber threats across all your cloud services." - Microsoft', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7v83a', text: 'In short, The Microsoft Defender for Cloud Apps portal is a place where you can integrate your Azure AD user accounts, devices, and other third-party cloud apps to see what your users are using and then potentially put a stop to it.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'frvfh', text: 'What are the license requirements?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '78au7', text: 'Microsoft does have a stand-alone license available too so you can get access to Microsoft Defender for Cloud Apps without the rest of the security suite.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'anfab', text: 'Microsoft Cloud App Security stand-alone license', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '37dol', text: 'Microsoft 365 E5 & Microsoft 365 E5 Security & Microsoft 365 E5 Compliance', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3usr8', text: 'Microsoft 365 Enterprise Mobility & Security (EMS E5)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a9ngg', text: 'Office 365 E5 (no 3rd party applications can be connected and managed with this license)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a27s9', text: 'Microsoft 365 Education A3 & Microsoft 365 Education A5', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'alhar', text: 'Open the Microsoft Defender for Cloud Apps admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bvrtr', text: 'The Defender for Cloud Apps has an admin center. You can access it by performing the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 4, offset: 73}], inlineStyleRanges: [], key: 'ar31m', text: '1. Open the Microsoft 365 Defender admin center > More resources > Click Open under Microsoft Defender for Cloud Apps.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cbg50', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c1b0k', text: 'Enable Microsoft Defender for Identity data integration', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '94an', text: 'The first thing you\'ll want to do is enable Microsoft Defender for Identity data integration. In short, you\'ll be allowing Microsoft Defender for Cloud Apps access to your user accounts in Azure AD. Defender for Identity collects and holds information from your configured servers. It will collect the following information:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c8rc7', text: 'network traffic to and from domain controllers', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'epcg3', text: 'Security logs', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '76kp6', text: 'AD information', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8pe6s', text: 'Entity information (for example, names, email addresses, and phone numbers)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'epmg0', text: 'Microsoft uses this information to find indicators of an attack and then generate alerts if a possible attack is detected. Your security team can also view entities and related information gathered from your network.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 55, offset: 13, style: 'BOLD'}], key: '2il4i', text: '1. Click the Enable Microsoft Defender for Identity data integration link.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ae5si', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7s8c5', text: '2. If you see Deploy Microsoft Defender for Identity click the link.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ahc4p', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}], key: 'moe6', text: '3. Click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'eai60', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 31, offset: 9, style: 'BOLD'}], key: '875vd', text: '4. Click Provide a username and password.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '632ti', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3aaj', text: '5. Enter your on-premises credentials in the space provided. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cr62t', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 9, style: 'BOLD'}], key: '4plf1', text: '6. Click Download Sensore Setup at the top of the screen.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '9mri7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}, {length: 5, offset: 23, style: 'BOLD'}], key: '1e0mj', text: '7. Click Download then copy the access key.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '8690l', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 75, style: 'BOLD'}], key: 'clmb3', text: '8. Copy the ZIP to a domain controller then extract it. Once extracted run Azure ATP Sensor Setup.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 42, style: 'BOLD'}], key: '8q10u', text: '9. On the Choose your language page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 45, style: 'BOLD'}], key: 'cj599', text: '10. On the Sensor deployment type page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 47, style: 'BOLD'}, {length: 7, offset: 90, style: 'BOLD'}], key: '85mva', text: '11. On the Configure the sensor page enter the access key you received from step 7. Click Install.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'f958u', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '69sn3', text: 'Review servers with the sensor installed', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a1n1r', text: 'Now let\'s review which servers have the sensors installed.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 13, style: 'BOLD'}, {length: 8, offset: 49, style: 'BOLD'}], key: '1hq7d', text: '1. Click the gear in the top right corner. Click Settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'npcj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 31, offset: 9, style: 'BOLD'}, {length: 50, offset: 43, style: 'BOLD'}], key: '89g3r', text: '2. Click Microsoft Defender for Identity > Configure Microsoft Defender for Identity sensors.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '55kh5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8681v', text: 'Create a file alert', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5lclt', text: 'Now we may need to alert us on file activity. Let\'s say we want to receive an alert on any file that has a name that contains the word File. Let\'s set it up. First, we\'ll need to enable file monitoring in the Office 365 connector. Then we\'ll need to create a policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 293, offset: 0, style: 'ITALIC'}], key: '6ae8v', text: 'The policy below will match any file located in OneDrive or SharePoint with the file name containing the word or phrase you add. In the example below it will match any file with the file name of File. So it will match the following files: File.docx, ImportantFile.docx, and File_Important.docx', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '775oh', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 33, offset: 12}], inlineStyleRanges: [{length: 34, offset: 12, style: 'BOLD'}, {length: 11, offset: 60, style: 'BOLD'}, {length: 14, offset: 74, style: 'BOLD'}, {length: 8, offset: 100, style: 'BOLD'}, {length: 3, offset: 110, style: 'BOLD'}, {length: 10, offset: 123, style: 'BOLD'}, {length: 16, offset: 141, style: 'BOLD'}], key: 'fum6f', text: '1. Open the Microsoft Defender for Cloud Apps portal. Go to Investigate > Connected apps. Click the ellipsis (...) next to Office 365. Click Edit settings...', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: 'abfvb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 17, style: 'BOLD'}, {length: 7, offset: 57, style: 'BOLD'}], key: '6hsae', text: '2. Click all the Office 365 components checkboxes. Click Connect.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '21s6r', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bl4pb', text: '3. Close the Connect Office 365 window. Click Control > Policies > Create policy > File policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: '1s1ph', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 12, style: 'BOLD'}, {length: 13, offset: 40, style: 'BOLD'}, {length: 35, offset: 70, style: 'BOLD'}], key: '3nc86', text: '4. Give the policy a name, for example, File Policy 1. Remove the two files matching all of the following filters.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: 'avscl', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 15, offset: 9, style: 'BOLD'}, {length: 9, offset: 33, style: 'BOLD'}], key: '7jk9b', text: '5. Click Select a filter. Select File name.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 1, offset: 0}], inlineStyleRanges: [], key: '15ib3', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}, {length: 14, offset: 24, style: 'BOLD'}, {length: 4, offset: 67, style: 'BOLD'}], key: '4dh5o', text: '6. Click equals. Select contains words. Set the File name field to File.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fga1i', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 38, offset: 25, style: 'BOLD'}, {length: 19, offset: 87, style: 'BOLD'}, {length: 13, offset: 119, style: 'BOLD'}, {length: 6, offset: 160, style: 'BOLD'}], key: 'ceq7a', text: '7. Check the box next to Create an alert for each matching file. Check the box next to Send alert as email. Enter your email address in the box provided. Click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 1, offset: 0}], inlineStyleRanges: [], key: '900i5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fs6ut', text: 'Understanding Cloud Apps policies', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6kfbb', text: 'Understanding the Cloud App policies can be a bit tricky. In short, you always have 4 parts.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e85im', text: 'Meta-information', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9b4h1', text: 'The meta-information is at the top. This is data specifically for the policy. For example, the policy name, description, severity, etc.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 1, offset: 0}], inlineStyleRanges: [], key: '430jb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9pqa7', text: 'Filters', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '37i2e', text: 'The filters are generally next. They tell us who, and what the policy is applied to. You can create a filter for all sorts of different things. For example, you can apply a policy based on the actor (the user that\'s performing the action) the IP address of the actor, the apps the actor is interacting with, etc.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 1, offset: 0}], inlineStyleRanges: [], key: 'j5i8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3t35m', text: 'Actions', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3h2kn', text: 'The actions are what will happen when the filters are matched. For example, you can test a policy, in which case an alert can be created but the user won\'t be prevented from performing an action or you can block the user from acting.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 24, length: 1, offset: 0}], inlineStyleRanges: [], key: '5mqm9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'de30h', text: 'Alerts', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fq672', text: 'Alerts are sent when a user performs the actions that match the filters. You can send an email, text message, simply create an alert in Defender for Cloud Apps or send alerts to Power Automate.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 25, length: 1, offset: 0}], inlineStyleRanges: [], key: 'eaqr8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a03so', text: 'Block printing from Exchange Online', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5orp2', text: 'Alright, now we\'ve configured some basic alerting let\'s get more technical. Let\'s create a session policy that blocks printing from Exchange Online. We\'ll need a conditional access policy, then we\'ll create the app access control to block printing.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '38g40', text: 'Create the conditional access policy', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 26, length: 27, offset: 48}], inlineStyleRanges: [{length: 12, offset: 33, style: 'BOLD'}, {length: 10, offset: 83, style: 'BOLD'}, {length: 17, offset: 96, style: 'BOLD'}], key: 'ed1b7', text: '1. Go to Azure AD admin center > All services > Azure AD Conditional Access. Click New policy > Create new policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 27, length: 1, offset: 0}], inlineStyleRanges: [], key: '9k82v', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 19, style: 'BOLD'}, {length: 39, offset: 41, style: 'BOLD'}, {length: 9, offset: 88, style: 'BOLD'}], key: '1plqa', text: '2. Set the name to Block Printing. Click 0 users or workload identities selected. Click All users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 28, length: 1, offset: 0}], inlineStyleRanges: [], key: 'u78u', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 59, offset: 9, style: 'BOLD'}, {length: 11, offset: 76, style: 'BOLD'}, {length: 15, offset: 100, style: 'BOLD'}, {length: 26, offset: 123, style: 'BOLD'}, {length: 6, offset: 157, style: 'BOLD'}], key: '6a0q4', text: '3. Click No cloud apps, actions, or authentication contexts selected. Click Select apps. Search for Exchange Online. Click Office 365 Exchange Online. Click Select.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 29, length: 1, offset: 0}], inlineStyleRanges: [], key: '8j7q0', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 9, style: 'BOLD'}, {length: 34, offset: 58, style: 'BOLD'}, {length: 12, offset: 100, style: 'BOLD'}, {length: 17, offset: 124, style: 'BOLD'}, {length: 6, offset: 149, style: 'BOLD'}, {length: 7, offset: 43, style: 'ITALIC'}], key: '7n7d5', text: '4. Click 0 controls selected located under Session. Click Use Conditional Access App Control. Click Monitor only and select Use custom policy. Click Select.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 30, length: 1, offset: 0}], inlineStyleRanges: [], key: '17com', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 2, offset: 28, style: 'BOLD'}, {length: 6, offset: 38, style: 'BOLD'}], key: '3qqq9', text: '5. Set the Enable policy to On. Click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 31, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fakln', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4oqp8', text: 'Login to Exchange Online', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 32, length: 32, offset: 222}], inlineStyleRanges: [], key: 'f998c', text: 'Now that the conditional access policy is set up we\'ll need to have someone log into Exchange Online. Someone that is part of the conditional access policy you set up above. Anyone will do. It can even be you. Simply open https://outlook.office.com/mail/.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4r0vp', text: 'Enable the app in your organization', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 33, length: 33, offset: 8}], inlineStyleRanges: [{length: 12, offset: 44, style: 'BOLD'}, {length: 14, offset: 58, style: 'BOLD'}, {length: 35, offset: 75, style: 'BOLD'}, {length: 8, offset: 123, style: 'BOLD'}, {length: 11, offset: 173, style: 'BOLD'}], key: 'bnt09', text: '1. Open Microsoft Defender for Cloud Apps > Investigate > Connected apps > Conditional Access App Control apps > Click the ellipsis next to Microsoft Exchange Online. Click Edit app...', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 34, length: 1, offset: 0}], inlineStyleRanges: [], key: '4t6en', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 4, offset: 56, style: 'BOLD'}], key: 'drpl3', text: '2. Click Use with Conditional Access App Control. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 35, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b9hdn', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'af54o', text: 'Create session policy', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2l0tv', text: '1. Click Control > Policies > Create policy > Session policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 36, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e2m83', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'brctj', text: '2. Set the policy name to Block Printing from Exchange Online. Click Select under Session control type. Click Block activities.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 37, length: 1, offset: 0}], inlineStyleRanges: [], key: '88vds', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}, {length: 25, offset: 28, style: 'BOLD'}, {length: 15, offset: 61, style: 'BOLD'}, {length: 5, offset: 84, style: 'BOLD'}], key: '3ve52', text: '3. Click Select apps. Click Microsoft Exchange Online. Click Select activity. Click Print.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 38, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b9qb7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 45, style: 'BOLD'}, {length: 6, offset: 58, style: 'BOLD'}], key: 'eji5h', text: '4. Scroll down to the actions section. Click Block. Click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 39, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dttou', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'v3ce', text: 'The above policy doesn\'t only apply to Microsoft 365 apps. Any app that\'s registered in Azure AD that supports session controls can be managed in the same fashion.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8508o', text: 'Review the logs', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7b7up', text: 'So now we have a few apps set up in Cloud App Security. Let\'s dive in and see how to review the logs to see how to track who\'s doing what.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 45, offset: 12, style: 'BOLD'}, {length: 12, offset: 65, style: 'BOLD'}, {length: 12, offset: 79, style: 'BOLD'}], key: '69iss', text: '1. Open the Microsoft 365 Cloud App Security admin center. Click Investigate > Activity log.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'adp2m', text: '2. Click on an activity to see more information.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 40, length: 1, offset: 0}], inlineStyleRanges: [], key: 'epma', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cu1aj', text: '', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/defender-cloud-apps/'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {targetOption: '_blank', url: 'https://go.microsoft.com/fwlink/?linkid=2058038'}, mutability: 'MUTABLE', type: 'LINK'}, 10: {data: {alignment: 'none', alt: 'Enter the sensor access key', height: 'auto', src: 'https://i.ibb.co/c888GgC/enter-access-key.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Click the gear then click Settings', height: 'auto', src: 'https://i.ibb.co/D7mLYH2/cloud-apps-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Configure Microsoft Defender for Identity sensors', height: 'auto', src: 'https://i.ibb.co/RYMnJLT/Configure-Microsoft-Defender-for-Identity-sensors.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Microsoft Defender for Cloud Apps email alert', height: 'auto', src: 'https://i.ibb.co/C21rd1c/file-policy-alert.png', targetOption: '_blank', url: 'https://go.microsoft.com/fwlink/?linkid=2058038', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'left', alt: 'Open the Microsoft Defender for Cloud Apps connected apps settings', height: 'auto', src: 'https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png', targetOption: '_blank', url: 'https://go.microsoft.com/fwlink/?linkid=2058038', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 15: {data: {alignment: 'none', alt: 'Open the Microsoft Defender for Cloud Apps connected apps settings', height: 'auto', src: 'https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {alignment: 'none', alt: 'Microsoft Defender for Cloud Apps Office 365 components', height: 'auto', src: 'https://i.ibb.co/PGyBPSP/defender-for-cloud-apps-office-365-components.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Create file policy', height: 'auto', src: 'https://i.ibb.co/nLDD0JR/create-file-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'none', alt: 'Create a file policy. Set the name and remove the filters', height: 'auto', src: 'https://i.ibb.co/wL49NXB/create-file-policy-set-name.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alignment: 'none', alt: 'Filter by file name', height: 'auto', src: 'https://i.ibb.co/5LjdDSK/Filter-by-file-name.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Open Microsoft Defender for Cloud Apps Admin Center', height: 'auto', src: 'https://i.ibb.co/wdyzFt9/open-microsoft-defender-for-cloud-apps.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 20: {data: {alignment: 'none', alt: 'Set file filter match to contain the words File', height: 'auto', src: 'https://i.ibb.co/tLQ6q3r/set-filter-match-to-contains-words.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 21: {data: {alignment: 'none', alt: 'Set alert to email', height: 'auto', src: 'https://i.ibb.co/q9cjDjz/set-alert.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {data: {alignment: 'none', alt: 'Cloud App Policy Meta-Information', height: 'auto', src: 'https://i.ibb.co/W0DDsqx/policy-meta-information.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#allservices/category/All', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 23: {data: {alignment: 'none', alt: 'Cloud app policy filters', height: 'auto', src: 'https://i.ibb.co/qxr2D8p/filter.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#allservices/category/All', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 24: {data: {alignment: 'none', alt: 'Microsoft Defender for Cloud Apps Actions', height: 'auto', src: 'https://i.ibb.co/WPYhm63/Actions.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#allservices/category/All', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 25: {data: {alignment: 'none', alt: 'Microsoft Defender for cloud apps Alerts', height: 'auto', src: 'https://i.ibb.co/VH7H7kw/Alerts.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#allservices/category/All', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 26: {data: {alignment: 'left', alt: 'Create new conditional access policy', height: 'auto', src: 'https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#allservices/category/All', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 27: {data: {alignment: 'none', alt: 'Create new conditional access policy', height: 'auto', src: 'https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 28: {data: {alignment: 'none', alt: 'Conditional access policy all users', height: 'auto', src: 'https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png', targetOption: '_blank', url: 'https://outlook.office.com/mail/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 29: {data: {alignment: 'none', alt: 'Set Exchange Online as the app in the conditional apps', height: 'auto', src: 'https://i.ibb.co/q5shGXd/conditional-access-policy-set-exchange-online.png', targetOption: '_blank', url: 'https://outlook.office.com/mail/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Enable Microsoft Defender for Identity data integration', height: 'auto', src: 'https://i.ibb.co/DwMCTLt/Enable-Microsoft-Defender-for-Identity-data-integration.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 30: {data: {alignment: 'none', alt: 'Session controls', height: 'auto', src: 'https://i.ibb.co/3zwTtWD/session-controls.png', targetOption: '_blank', url: 'https://outlook.office.com/mail/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 31: {data: {alignment: 'none', alt: 'Enable the conditional access policy', height: 'auto', src: 'https://i.ibb.co/ckcDbJn/enable-the-conditional-access-policy.png', targetOption: '_blank', url: 'https://outlook.office.com/mail/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 32: {data: {alignment: 'left', alt: 'Edit connected apps', height: 'auto', src: 'https://i.ibb.co/mCq773W/edit-connected-app.png', targetOption: '_blank', url: 'https://outlook.office.com/mail/', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 33: {data: {alignment: 'left', alt: 'Edit connected apps', height: 'auto', src: 'https://i.ibb.co/mCq773W/edit-connected-app.png', targetOption: '_blank', url: 'https://go.microsoft.com/fwlink/?linkid=2058038', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 34: {data: {alignment: 'none', alt: 'Edit connected apps', height: 'auto', src: 'https://i.ibb.co/mCq773W/edit-connected-app.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 35: {data: {alignment: 'none', alt: 'Use with conditional access app control', height: 'auto', src: 'https://i.ibb.co/Fzk45vy/use-with-conditional-access-app-control.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 36: {data: {alignment: 'none', alt: 'Create session policy', height: 'auto', src: 'https://i.ibb.co/b1C33jn/create-session-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 37: {data: {alignment: 'none', alt: 'Session Policy block activities', height: 'auto', src: 'https://i.ibb.co/Lp85jht/session-policy-block-activities.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 38: {data: {alignment: 'none', alt: 'Select apps and select activiities', height: 'auto', src: 'https://i.ibb.co/R24dxgR/select-apps-select-activity.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 39: {data: {alignment: 'none', alt: 'Set the session policy to block', height: 'auto', src: 'https://i.ibb.co/yg2Z6Jf/block-session-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Deploy Microsoft Defender for Identity', height: 'auto', src: 'https://i.ibb.co/88DsRRM/Deploy-Microsoft-Defender-for-Identity.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 40: {data: {alignment: 'none', alt: 'Cloud app activity log', height: 'auto', src: 'https://i.ibb.co/bbrpv8C/cloud-app-activity-log.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Create Microsoft Defender for Identity instance', height: 'auto', src: 'https://i.ibb.co/fq6jbYc/Create-Microsoft-Defender-for-Identity-instance.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Provide a username and password', height: 'auto', src: 'https://i.ibb.co/JBGdSfr/provide-a-username-and-password.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Enter on-premises credentials', height: 'auto', src: 'https://i.ibb.co/HHK2qWz/enter-onpremises-credentials.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Download the sensor setup', height: 'auto', src: 'https://i.ibb.co/svLKv8H/download-sensor-setup.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Download the sensor then copy the key', height: 'auto', src: 'https://i.ibb.co/kM8dshr/Download-sensor-and-copy-access-key.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'The Microsoft Defender for Cloud Apps portal is a place where you can integrate Microsoft 365 and other third-party cloud apps to see what your users are using and stop them.', featuredImage: 'https://i.ibb.co/tLQ6q3r/set-filter-match-to-contains-words.png', id: '7MQ3wE4wP', images: ['https://i.ibb.co/wdyzFt9/open-microsoft-defender-for-cloud-apps.png', 'https://i.ibb.co/DwMCTLt/Enable-Microsoft-Defender-for-Identity-data-integration.png', 'https://i.ibb.co/88DsRRM/Deploy-Microsoft-Defender-for-Identity.png', 'https://i.ibb.co/fq6jbYc/Create-Microsoft-Defender-for-Identity-instance.png', 'https://i.ibb.co/JBGdSfr/provide-a-username-and-password.png', 'https://i.ibb.co/HHK2qWz/enter-onpremises-credentials.png', 'https://i.ibb.co/svLKv8H/download-sensor-setup.png', 'https://i.ibb.co/svLKv8H/download-sensor-setup.png', 'https://i.ibb.co/kM8dshr/Download-sensor-and-copy-access-key.png', 'https://i.ibb.co/c888GgC/enter-access-key.png', 'https://i.ibb.co/D7mLYH2/cloud-apps-settings.png', 'https://i.ibb.co/RYMnJLT/Configure-Microsoft-Defender-for-Identity-sensors.png', 'https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png', 'https://i.ibb.co/PGyBPSP/defender-for-cloud-apps-office-365-components.png', 'https://i.ibb.co/nLDD0JR/create-file-policy.png', 'https://i.ibb.co/wL49NXB/create-file-policy-set-name.png', 'https://i.ibb.co/5LjdDSK/Filter-by-file-name.png', 'https://i.ibb.co/tLQ6q3r/set-filter-match-to-contains-words.png', 'https://i.ibb.co/q9cjDjz/set-alert.png', 'https://i.ibb.co/C21rd1c/file-policy-alert.png', 'https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png', 'https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png', 'https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png', 'https://i.ibb.co/q5shGXd/conditional-access-policy-set-exchange-online.png', 'https://i.ibb.co/3zwTtWD/session-controls.png', 'https://i.ibb.co/ckcDbJn/enable-the-conditional-access-policy.png', 'https://i.ibb.co/mCq773W/edit-connected-app.png', 'https://i.ibb.co/Fzk45vy/use-with-conditional-access-app-control.png', 'https://i.ibb.co/b1C33jn/create-session-policy.png', 'https://i.ibb.co/Lp85jht/session-policy-block-activities.png', 'https://i.ibb.co/R24dxgR/select-apps-select-activity.png', 'https://i.ibb.co/yg2Z6Jf/block-session-policy.png', 'https://i.ibb.co/W0DDsqx/policy-meta-information.png', 'https://i.ibb.co/qxr2D8p/filter.png', 'https://i.ibb.co/WPYhm63/Actions.png', 'https://i.ibb.co/VH7H7kw/Alerts.png', 'https://i.ibb.co/bbrpv8C/cloud-app-activity-log.png'], publish: true, sectionId: 'QScYfSu74', slug: 'Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP', title: 'Implement and manage Microsoft Defender for Cloud Apps', type: 'article'},
      nextContentSlug: 'test/microsoft-defender-1hidrpsrl',
      previousContentSlug: 'learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T',
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
                  <div><p>"Microsoft Defender for Cloud Apps is a Cloud Access Security Broker (CASB) that operates on multiple clouds. It provides rich visibility, control over data travel, and sophisticated analytics to identify and combat cyber threats across all your cloud services." - <a href="https://docs.microsoft.com/en-us/defender-cloud-apps/" target="_blank" rel="noreferrer">Microsoft</a></p>
                    <p>In short, The Microsoft Defender for Cloud Apps portal is a place where you can integrate your Azure AD user accounts, devices, and other third-party cloud apps to see what your users are using and then potentially put a stop to it.</p>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>What are the license requirements?</h2>
                    <p>Microsoft does have a stand-alone license available too so you can get access to Microsoft Defender for Cloud Apps without the rest of the security suite.</p>
                    <ul>
                      <li>Microsoft Cloud App Security stand-alone license</li>
                      <li>Microsoft 365 E5 &amp; Microsoft 365 E5 Security &amp; Microsoft 365 E5 Compliance</li>
                      <li>Microsoft 365 Enterprise Mobility &amp; Security (EMS E5)</li>
                      <li>Office 365 E5 (no 3rd party applications can be connected and managed with this license)</li>
                      <li>Microsoft 365 Education A3 &amp; Microsoft 365 Education A5</li>
                    </ul>
                    <h2>Open the Microsoft Defender for Cloud Apps admin center</h2>
                    <p>The Defender for Cloud Apps has an admin center. You can access it by performing the following:</p>
                    <p>1. Open the Microsoft 365 Defender admin center &gt; More resources &gt; Click <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer">Open</a> under Microsoft Defender for Cloud Apps.</p>
                    <div ><img src="https://i.ibb.co/wdyzFt9/open-microsoft-defender-for-cloud-apps.png" alt="Open Microsoft Defender for Cloud Apps Admin Center" height="auto" width="auto" /></div>
                    <h2>Enable Microsoft Defender for Identity data integration</h2>
                    <p>The first thing you'll want to do is enable Microsoft Defender for Identity data integration. In short, you'll be allowing Microsoft Defender for Cloud Apps access to your user accounts in Azure AD. Defender for Identity collects and holds information from your configured servers. It will collect the following information:</p>
                    <ul>
                      <li>network traffic to and from domain controllers</li>
                      <li>Security logs</li>
                      <li>AD information</li>
                      <li>Entity information (for example, names, email addresses, and phone numbers)</li>
                    </ul>
                    <p>Microsoft uses this information to find indicators of an attack and then generate alerts if a possible attack is detected. Your security team can also view entities and related information gathered from your network.</p>
                    <p>1. Click the <strong>Enable Microsoft Defender for Identity data integration</strong> link.</p>
                    <div ><img src="https://i.ibb.co/DwMCTLt/Enable-Microsoft-Defender-for-Identity-data-integration.png" alt="Enable Microsoft Defender for Identity data integration" height="auto" width="auto" /></div>
                    <p>2. If you see Deploy Microsoft Defender for Identity click the link.</p>
                    <div ><img src="https://i.ibb.co/88DsRRM/Deploy-Microsoft-Defender-for-Identity.png" alt="Deploy Microsoft Defender for Identity" height="auto" width="auto" /></div>
                    <p>3. Click <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/fq6jbYc/Create-Microsoft-Defender-for-Identity-instance.png" alt="Create Microsoft Defender for Identity instance" height="auto" width="auto" /></div>
                    <p>4. Click <strong>Provide a username and password</strong>.</p>
                    <div ><img src="https://i.ibb.co/JBGdSfr/provide-a-username-and-password.png" alt="Provide a username and password" height="auto" width="auto" /></div>
                    <p>5. Enter your on-premises credentials in the space provided. Click Save.</p>
                    <div ><img src="https://i.ibb.co/HHK2qWz/enter-onpremises-credentials.png" alt="Enter on-premises credentials" height="auto" width="auto" /></div>
                    <p>6. Click <strong>Download Sensore Setup</strong> at the top of the screen.</p>
                    <div ><img src="https://i.ibb.co/svLKv8H/download-sensor-setup.png" alt="Download the sensor setup" height="auto" width="auto" /></div>
                    <p>7. Click <strong>Download </strong>then <strong>copy </strong>the access key.</p>
                    <div ><img src="https://i.ibb.co/kM8dshr/Download-sensor-and-copy-access-key.png" alt="Download the sensor then copy the key" height="auto" width="auto" /></div>
                    <p>8. Copy the ZIP to a domain controller then extract it. Once extracted run <strong>Azure ATP Sensor Setup</strong>.</p>
                    <p>9. On the Choose your language page click <strong>Next</strong>.</p>
                    <p>10. On the Sensor deployment type page click <strong>Next</strong>.</p>
                    <p>11. On the Configure the sensor page enter the <strong>access key</strong> you received from step 7. Click <strong>Install</strong>.</p>
                    <div ><img src="https://i.ibb.co/c888GgC/enter-access-key.png" alt="Enter the sensor access key" height="auto" width="auto" /></div>
                    <h2>Review servers with the sensor installed</h2>
                    <p>Now let's review which servers have the sensors installed.</p>
                    <p>1. Click the <strong>gear </strong>in the top right corner. Click <strong>Settings</strong>.</p>
                    <div ><img src="https://i.ibb.co/D7mLYH2/cloud-apps-settings.png" alt="Click the gear then click Settings" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Microsoft Defender for Identity</strong> &gt; <strong>Configure Microsoft Defender for Identity sensors.</strong></p>
                    <div ><img src="https://i.ibb.co/RYMnJLT/Configure-Microsoft-Defender-for-Identity-sensors.png" alt="Configure Microsoft Defender for Identity sensors" height="auto" width="auto" /></div>
                    <h2>Create a file alert</h2>
                    <p>Now we may need to alert us on file activity. Let's say we want to receive an alert on any file that has a name that contains the word File. Let's set it up. First, we'll need to enable file monitoring in the Office 365 connector. Then we'll need to create a policy.</p>
                    <p><em>The policy below will match any file located in OneDrive or SharePoint with the file name containing the word or phrase you add. In the example below it will match any file with the file name of File. So it will match the following files: File.docx, ImportantFile.docx, and File_Important.docx</em></p>
                    <div ><img src="https://i.ibb.co/C21rd1c/file-policy-alert.png" alt="Microsoft Defender for Cloud Apps email alert" height="auto" width="auto" /></div>
                    <p>1. Open the <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer"><strong>Microsoft Defender for Cloud Apps</strong></a><strong> </strong>portal. Go to <strong>Investigate</strong> &gt; <strong>Connected apps</strong>. Click the <strong>ellipsis</strong> (<strong>...</strong>) next to <strong>Office 365</strong>. Click <strong>Edit settings...</strong></p>
                    <div ><img src="https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png" alt="Open the Microsoft Defender for Cloud Apps connected apps settings" height="auto" width="auto" /></div>
                    <p>2. Click all the <strong>Office 365 components</strong> checkboxes. Click <strong>Connect</strong>.</p>
                    <div ><img src="https://i.ibb.co/PGyBPSP/defender-for-cloud-apps-office-365-components.png" alt="Microsoft Defender for Cloud Apps Office 365 components" height="auto" width="auto" /></div>
                    <p>3. Close the Connect Office 365 window. Click Control &gt; Policies &gt; Create policy &gt; File policy.</p>
                    <div ><img src="https://i.ibb.co/nLDD0JR/create-file-policy.png" alt="Create file policy" height="auto" width="auto" /></div>
                    <p>4. Give the <strong>policy a name</strong>, for example, <strong>File Policy 1</strong>. Remove the two <strong>files matching all of the following</strong> filters.</p>
                    <div ><img src="https://i.ibb.co/wL49NXB/create-file-policy-set-name.png" alt="Create a file policy. Set the name and remove the filters" height="auto" width="auto" /></div>
                    <p>5. Click <strong>Select a filter</strong>. Select <strong>File name</strong>.</p>
                    <div ><img src="https://i.ibb.co/5LjdDSK/Filter-by-file-name.png" alt="Filter by file name" height="auto" width="auto" /></div>
                    <p>6. Click <strong>equals</strong>. Select <strong>contains words</strong>. Set the File name field to <strong>File</strong>.</p>
                    <div ><img src="https://i.ibb.co/tLQ6q3r/set-filter-match-to-contains-words.png" alt="Set file filter match to contain the words File" height="auto" width="auto" /></div>
                    <p>7. Check the box next to <strong>Create an alert for each matching file</strong>. Check the box next to <strong>Send alert as email</strong>. Enter your <strong>email address</strong> in the box provided. Click <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/q9cjDjz/set-alert.png" alt="Set alert to email" height="auto" width="auto" /></div>
                    <h2>Understanding Cloud Apps policies</h2>
                    <p>Understanding the Cloud App policies can be a bit tricky. In short, you always have 4 parts.</p>
                    <h3>Meta-information</h3>
                    <p>The meta-information is at the top. This is data specifically for the policy. For example, the policy name, description, severity, etc.</p>
                    <div ><img src="https://i.ibb.co/W0DDsqx/policy-meta-information.png" alt="Cloud App Policy Meta-Information" height="auto" width="auto" /></div>
                    <h3>Filters</h3>
                    <p>The filters are generally next. They tell us who, and what the policy is applied to. You can create a filter for all sorts of different things. For example, you can apply a policy based on the actor (the user that's performing the action) the IP address of the actor, the apps the actor is interacting with, etc.</p>
                    <div ><img src="https://i.ibb.co/qxr2D8p/filter.png" alt="Cloud app policy filters" height="auto" width="auto" /></div>
                    <h3>Actions</h3>
                    <p>The actions are what will happen when the filters are matched. For example, you can test a policy, in which case an alert can be created but the user won't be prevented from performing an action or you can block the user from acting.</p>
                    <div ><img src="https://i.ibb.co/WPYhm63/Actions.png" alt="Microsoft Defender for Cloud Apps Actions" height="auto" width="auto" /></div>
                    <h3>Alerts</h3>
                    <p>Alerts are sent when a user performs the actions that match the filters. You can send an email, text message, simply create an alert in Defender for Cloud Apps or send alerts to Power Automate.</p>
                    <div ><img src="https://i.ibb.co/VH7H7kw/Alerts.png" alt="Microsoft Defender for cloud apps Alerts" height="auto" width="auto" /></div>
                    <h2>Block printing from Exchange Online</h2>
                    <p>Alright, now we've configured some basic alerting let's get more technical. Let's create a session policy that blocks printing from Exchange Online. We'll need a conditional access policy, then we'll create the app access control to block printing.</p>
                    <h3>Create the conditional access policy</h3>
                    <p>1. Go to Azure AD admin center &gt; <strong>All services</strong> &gt; <a href="https://aad.portal.azure.com/#allservices/category/All" target="_blank" rel="noreferrer">Azure AD Conditional Access</a>. Click <strong>New policy</strong> &gt; <strong>Create new policy</strong>.</p>
                    <div ><img src="https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png" alt="Create new conditional access policy" height="auto" width="auto" /></div>
                    <p>2. Set the name to <strong>Block Printing</strong>. Click <strong>0 users or workload identities selected</strong>. Click <strong>All users</strong>.</p>
                    <div ><img src="https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png" alt="Conditional access policy all users" height="auto" width="auto" /></div>
                    <p>3. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>Select apps</strong>. Search for <strong>Exchange Online</strong>. Click <strong>Office 365 Exchange Online</strong>. Click <strong>Select</strong>.</p>
                    <div ><img src="https://i.ibb.co/q5shGXd/conditional-access-policy-set-exchange-online.png" alt="Set Exchange Online as the app in the conditional apps" height="auto" width="auto" /></div>
                    <p>4. Click <strong>0 controls selected</strong> located under <em>Session</em>. Click <strong>Use Conditional Access App Control</strong>. Click <strong>Monitor only</strong> and select <strong>Use custom policy</strong>. Click <strong>Select</strong>.</p>
                    <div ><img src="https://i.ibb.co/3zwTtWD/session-controls.png" alt="Session controls" height="auto" width="auto" /></div>
                    <p>5. Set the Enable policy to <strong>On</strong>. Click <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/ckcDbJn/enable-the-conditional-access-policy.png" alt="Enable the conditional access policy" height="auto" width="auto" /></div>
                    <h2>Login to Exchange Online</h2>
                    <p>Now that the conditional access policy is set up we'll need to have someone log into Exchange Online. Someone that is part of the conditional access policy you set up above. Anyone will do. It can even be you. Simply open <a href="https://outlook.office.com/mail/" target="_blank" rel="noreferrer">https://outlook.office.com/mail/</a>.</p>
                    <h3>Enable the app in your organization</h3>
                    <p>1. Open <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer">Microsoft Defender for Cloud Apps</a> &gt; <strong>Investigate </strong>&gt; <strong>Connected apps</strong> &gt; <strong>Conditional Access App Control apps</strong> &gt; Click the <strong>ellipsis</strong> next to Microsoft Exchange Online. Click <strong>Edit app...</strong></p>
                    <div ><img src="https://i.ibb.co/mCq773W/edit-connected-app.png" alt="Edit connected apps" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Use with Conditional Access App Control</strong>. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/Fzk45vy/use-with-conditional-access-app-control.png" alt="Use with conditional access app control" height="auto" width="auto" /></div>
                    <h3>Create session policy</h3>
                    <p>1. Click Control &gt; Policies &gt; Create policy &gt; Session policy.</p>
                    <div ><img src="https://i.ibb.co/b1C33jn/create-session-policy.png" alt="Create session policy" height="auto" width="auto" /></div>
                    <p>2. Set the policy name to Block Printing from Exchange Online. Click Select under Session control type. Click Block activities.</p>
                    <div ><img src="https://i.ibb.co/Lp85jht/session-policy-block-activities.png" alt="Session Policy block activities" height="auto" width="auto" /></div>
                    <p>3. Click <strong>Select apps</strong>. Click <strong>Microsoft Exchange Online</strong>. Click <strong>Select activity</strong>. Click <strong>Print</strong>.</p>
                    <div ><img src="https://i.ibb.co/R24dxgR/select-apps-select-activity.png" alt="Select apps and select activiities" height="auto" width="auto" /></div>
                    <p>4. Scroll down to the actions section. Click <strong>Block</strong>. Click <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/yg2Z6Jf/block-session-policy.png" alt="Set the session policy to block" height="auto" width="auto" /></div>
                    <p>The above policy doesn't only apply to Microsoft 365 apps. Any app that's registered in Azure AD that supports session controls can be managed in the same fashion.</p>
                    <h2>Review the logs</h2>
                    <p>So now we have a few apps set up in Cloud App Security. Let's dive in and see how to review the logs to see how to track who's doing what.</p>
                    <p>1. Open the <strong>Microsoft 365 Cloud App Security admin center</strong>. Click <strong>Investigate </strong>&gt; <strong>Activity log</strong>.</p>
                    <p>2. Click on an activity to see more information.</p>
                    <div ><img src="https://i.ibb.co/bbrpv8C/cloud-app-activity-log.png" alt="Cloud app activity log" height="auto" width="auto" /></div>
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
