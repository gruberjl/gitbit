import { h, Component } from "preact"
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

const removePaddingStyle = {
  padding: '0px'
}

const marginTop24Style = {
  marginTop: '24px'
}

const listItemStyle = {
  border: 'none',
  paddingTop: '12px',
  paddingBottom: '12px'
}

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP',
      article: {"type":"article","id":"7MQ3wE4wP","images":["https://i.ibb.co/wdyzFt9/open-microsoft-defender-for-cloud-apps.png","https://i.ibb.co/DwMCTLt/Enable-Microsoft-Defender-for-Identity-data-integration.png","https://i.ibb.co/88DsRRM/Deploy-Microsoft-Defender-for-Identity.png","https://i.ibb.co/fq6jbYc/Create-Microsoft-Defender-for-Identity-instance.png","https://i.ibb.co/JBGdSfr/provide-a-username-and-password.png","https://i.ibb.co/HHK2qWz/enter-onpremises-credentials.png","https://i.ibb.co/svLKv8H/download-sensor-setup.png","https://i.ibb.co/svLKv8H/download-sensor-setup.png","https://i.ibb.co/kM8dshr/Download-sensor-and-copy-access-key.png","https://i.ibb.co/c888GgC/enter-access-key.png","https://i.ibb.co/D7mLYH2/cloud-apps-settings.png","https://i.ibb.co/RYMnJLT/Configure-Microsoft-Defender-for-Identity-sensors.png","https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png","https://i.ibb.co/PGyBPSP/defender-for-cloud-apps-office-365-components.png","https://i.ibb.co/nLDD0JR/create-file-policy.png","https://i.ibb.co/wL49NXB/create-file-policy-set-name.png","https://i.ibb.co/5LjdDSK/Filter-by-file-name.png","https://i.ibb.co/tLQ6q3r/set-filter-match-to-contains-words.png","https://i.ibb.co/q9cjDjz/set-alert.png","https://i.ibb.co/C21rd1c/file-policy-alert.png","https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png","https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png","https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png","https://i.ibb.co/q5shGXd/conditional-access-policy-set-exchange-online.png","https://i.ibb.co/3zwTtWD/session-controls.png","https://i.ibb.co/ckcDbJn/enable-the-conditional-access-policy.png","https://i.ibb.co/mCq773W/edit-connected-app.png","https://i.ibb.co/Fzk45vy/use-with-conditional-access-app-control.png","https://i.ibb.co/b1C33jn/create-session-policy.png","https://i.ibb.co/Lp85jht/session-policy-block-activities.png","https://i.ibb.co/R24dxgR/select-apps-select-activity.png","https://i.ibb.co/yg2Z6Jf/block-session-policy.png","https://i.ibb.co/W0DDsqx/policy-meta-information.png","https://i.ibb.co/qxr2D8p/filter.png","https://i.ibb.co/WPYhm63/Actions.png","https://i.ibb.co/VH7H7kw/Alerts.png","https://i.ibb.co/bbrpv8C/cloud-app-activity-log.png"],"description":"The Microsoft Defender for Cloud Apps portal is a place where you can integrate Microsoft 365 and other third-party cloud apps to see what your users are using and stop them.","datePublished":"2022/5/26","slug":"Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP","title":"Implement and manage Microsoft Defender for Cloud Apps","featuredImage":"https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png","publish":true,"sectionId":"QScYfSu74","article":{"blocks":[{"data":{},"inlineStyleRanges":[],"key":"1uuos","depth":0,"entityRanges":[{"key":0,"length":9,"offset":265}],"text":"\"Microsoft Defender for Cloud Apps is a Cloud Access Security Broker (CASB) that operates on multiple clouds. It provides rich visibility, control over data travel, and sophisticated analytics to identify and combat cyber threats across all your cloud services.\" - Microsoft","type":"unstyled"},{"data":{},"type":"unstyled","inlineStyleRanges":[],"key":"7v83a","entityRanges":[],"text":"In short, The Microsoft Defender for Cloud Apps portal is a place where you can integrate your Azure AD user accounts, devices, and other third-party cloud apps to see what your users are using and then potentially put a stop to it.","depth":0},{"inlineStyleRanges":[],"type":"header-two","key":"alhar","data":{},"depth":0,"text":"Open the Microsoft Defender for Cloud Apps admin center","entityRanges":[]},{"key":"bvrtr","text":"The Defender for Cloud Apps has an admin center. You can access it by performing the following:","entityRanges":[],"data":{},"inlineStyleRanges":[],"depth":0,"type":"unstyled"},{"key":"ar31m","inlineStyleRanges":[],"entityRanges":[{"key":1,"offset":73,"length":4}],"data":{},"text":"1. Open the Microsoft 365 Defender admin center > More resources > Click Open under Microsoft Defender for Cloud Apps.","depth":0,"type":"unstyled"},{"depth":0,"type":"atomic","entityRanges":[{"key":2,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"cbg50","text":" ","data":{}},{"key":"c1b0k","entityRanges":[],"inlineStyleRanges":[],"text":"Enable Microsoft Defender for Identity data integration","type":"header-two","depth":0,"data":{}},{"depth":0,"text":"The first thing you'll want to do is enable Microsoft Defender for Identity data integration. In short, you'll be allowing Microsoft Defender for Cloud Apps access to your user accounts in Azure AD. Defender for Identity collects and holds information from your configured servers. It will collect the following information:","key":"94an","inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"unstyled"},{"type":"unordered-list-item","inlineStyleRanges":[],"key":"c8rc7","entityRanges":[],"text":"network traffic to and from domain controllers","depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[],"key":"epcg3","type":"unordered-list-item","data":{},"text":"Security logs","entityRanges":[]},{"entityRanges":[],"key":"76kp6","data":{},"type":"unordered-list-item","inlineStyleRanges":[],"text":"AD information","depth":0},{"data":{},"entityRanges":[],"type":"unordered-list-item","key":"8pe6s","inlineStyleRanges":[],"text":"Entity information (for example, names, email addresses, and phone numbers)","depth":0},{"data":{},"type":"unstyled","inlineStyleRanges":[],"depth":0,"text":"Microsoft uses this information to find indicators of an attack and then generate alerts if a possible attack is detected. Your security team can also view entities and related information gathered from your network.","entityRanges":[],"key":"epmg0"},{"depth":0,"inlineStyleRanges":[{"offset":13,"style":"BOLD","length":55}],"entityRanges":[],"key":"2il4i","data":{},"text":"1. Click the Enable Microsoft Defender for Identity data integration link.","type":"unstyled"},{"data":{},"depth":0,"text":" ","key":"ae5si","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"key":3,"length":1}]},{"depth":0,"type":"unstyled","data":{},"key":"7s8c5","entityRanges":[],"text":"2. If you see Deploy Microsoft Defender for Identity click the link.","inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"length":1,"key":4}],"key":"ahc4p","text":" ","data":{}},{"data":{},"depth":0,"key":"moe6","inlineStyleRanges":[{"offset":9,"length":6,"style":"BOLD"}],"text":"3. Click Create.","type":"unstyled","entityRanges":[]},{"depth":0,"text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":5}],"key":"eai60","type":"atomic","data":{}},{"inlineStyleRanges":[{"length":31,"style":"BOLD","offset":9}],"data":{},"key":"875vd","depth":0,"text":"4. Click Provide a username and password.","entityRanges":[],"type":"unstyled"},{"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"length":1,"key":6}],"data":{},"key":"632ti","depth":0,"text":" "},{"inlineStyleRanges":[],"depth":0,"data":{},"entityRanges":[],"key":"3aaj","text":"5. Enter your on-premises credentials in the space provided. Click Save.","type":"unstyled"},{"text":" ","key":"cr62t","type":"atomic","inlineStyleRanges":[],"depth":0,"data":{},"entityRanges":[{"offset":0,"key":7,"length":1}]},{"depth":0,"key":"4plf1","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":22}],"text":"6. Click Download Sensore Setup at the top of the screen.","type":"unstyled","entityRanges":[],"data":{}},{"data":{},"entityRanges":[{"key":8,"length":1,"offset":0}],"text":" ","depth":0,"inlineStyleRanges":[],"type":"atomic","key":"9mri7"},{"type":"unstyled","depth":0,"inlineStyleRanges":[{"length":9,"offset":9,"style":"BOLD"},{"length":5,"style":"BOLD","offset":23}],"text":"7. Click Download then copy the access key.","data":{},"key":"1e0mj","entityRanges":[]},{"entityRanges":[{"key":9,"length":1,"offset":0}],"inlineStyleRanges":[],"type":"atomic","data":{},"key":"8690l","text":" ","depth":0},{"data":{},"type":"unstyled","depth":0,"key":"clmb3","entityRanges":[],"text":"8. Copy the ZIP to a domain controller then extract it. Once extracted run Azure ATP Sensor Setup.","inlineStyleRanges":[{"style":"BOLD","offset":75,"length":22}]},{"inlineStyleRanges":[{"offset":42,"length":4,"style":"BOLD"}],"text":"9. On the Choose your language page click Next.","depth":0,"entityRanges":[],"data":{},"type":"unstyled","key":"8q10u"},{"key":"cj599","inlineStyleRanges":[{"length":4,"style":"BOLD","offset":45}],"depth":0,"text":"10. On the Sensor deployment type page click Next.","entityRanges":[],"data":{},"type":"unstyled"},{"data":{},"entityRanges":[],"depth":0,"text":"11. On the Configure the sensor page enter the access key you received from step 7. Click Install.","type":"unstyled","key":"85mva","inlineStyleRanges":[{"offset":47,"style":"BOLD","length":10},{"offset":90,"length":7,"style":"BOLD"}]},{"data":{},"depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic","entityRanges":[{"offset":0,"key":10,"length":1}],"key":"f958u"},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"type":"header-two","depth":0,"text":"Review servers with the sensor installed","key":"69sn3"},{"inlineStyleRanges":[],"depth":0,"text":"Now let's review which servers have the sensors installed.","data":{},"entityRanges":[],"type":"unstyled","key":"a1n1r"},{"entityRanges":[],"key":"1hq7d","text":"1. Click the gear in the top right corner. Click Settings.","type":"unstyled","data":{},"depth":0,"inlineStyleRanges":[{"length":5,"offset":13,"style":"BOLD"},{"style":"BOLD","length":8,"offset":49}]},{"inlineStyleRanges":[],"data":{},"text":" ","entityRanges":[{"key":11,"offset":0,"length":1}],"key":"npcj","depth":0,"type":"atomic"},{"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":31},{"length":50,"style":"BOLD","offset":43}],"key":"89g3r","text":"2. Click Microsoft Defender for Identity > Configure Microsoft Defender for Identity sensors.","type":"unstyled","data":{},"entityRanges":[],"depth":0},{"key":"55kh5","inlineStyleRanges":[],"depth":0,"text":" ","data":{},"entityRanges":[{"key":12,"length":1,"offset":0}],"type":"atomic"},{"text":"Create a file alert","type":"header-two","key":"8681v","inlineStyleRanges":[],"depth":0,"entityRanges":[],"data":{}},{"key":"5lclt","depth":0,"type":"unstyled","text":"Now we may need to alert us on file activity. Let's say we want to receive an alert on any file that has a name that contains the word File. Let's set it up. First, we'll need to enable file monitoring in the Office 365 connector. Then we'll need to create a policy.","data":{},"inlineStyleRanges":[],"entityRanges":[]},{"key":"6ae8v","data":{},"entityRanges":[],"text":"The policy below will match any file located in OneDrive or SharePoint with the file name containing the word or phrase you add. In the example below it will match any file with the file name of File. So it will match the following files: File.docx, ImportantFile.docx, and File_Important.docx","depth":0,"inlineStyleRanges":[{"offset":0,"length":293,"style":"ITALIC"}],"type":"unstyled"},{"text":" ","depth":0,"type":"atomic","key":"775oh","entityRanges":[{"length":1,"offset":0,"key":13}],"data":{},"inlineStyleRanges":[]},{"depth":0,"entityRanges":[{"length":33,"offset":12,"key":14}],"inlineStyleRanges":[{"style":"BOLD","offset":12,"length":34},{"style":"BOLD","length":11,"offset":60},{"offset":74,"style":"BOLD","length":14},{"offset":100,"length":8,"style":"BOLD"},{"offset":110,"style":"BOLD","length":3},{"offset":123,"length":10,"style":"BOLD"},{"offset":141,"style":"BOLD","length":16}],"text":"1. Open the Microsoft Defender for Cloud Apps portal. Go to Investigate > Connected apps. Click the ellipsis (...) next to Office 365. Click Edit settings...","key":"fum6f","type":"unstyled","data":{}},{"key":"abfvb","data":{},"inlineStyleRanges":[],"depth":0,"text":" ","type":"atomic","entityRanges":[{"offset":0,"key":15,"length":1}]},{"data":{},"entityRanges":[],"text":"2. Click all the Office 365 components checkboxes. Click Connect.","key":"6hsae","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","offset":17,"length":21},{"length":7,"style":"BOLD","offset":57}],"depth":0},{"entityRanges":[{"offset":0,"length":1,"key":16}],"inlineStyleRanges":[],"key":"21s6r","data":{},"type":"atomic","text":" ","depth":0},{"entityRanges":[],"depth":0,"text":"3. Close the Connect Office 365 window. Click Control > Policies > Create policy > File policy.","key":"bl4pb","type":"unstyled","data":{},"inlineStyleRanges":[]},{"key":"1s1ph","entityRanges":[{"length":1,"key":17,"offset":0}],"data":{},"type":"atomic","inlineStyleRanges":[],"depth":0,"text":" "},{"inlineStyleRanges":[{"style":"BOLD","offset":12,"length":13},{"style":"BOLD","length":13,"offset":40},{"length":35,"offset":70,"style":"BOLD"}],"entityRanges":[],"depth":0,"text":"4. Give the policy a name, for example, File Policy 1. Remove the two files matching all of the following filters.","data":{},"type":"unstyled","key":"3nc86"},{"text":" ","type":"atomic","data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":18,"offset":0}],"depth":0,"key":"avscl"},{"depth":0,"entityRanges":[],"text":"5. Click Select a filter. Select File name.","data":{},"key":"7jk9b","inlineStyleRanges":[{"style":"BOLD","length":15,"offset":9},{"length":9,"style":"BOLD","offset":33}],"type":"unstyled"},{"key":"15ib3","depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[{"key":19,"offset":0,"length":1}],"type":"atomic","text":" "},{"key":"4dh5o","type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[{"length":6,"style":"BOLD","offset":9},{"length":14,"style":"BOLD","offset":24},{"style":"BOLD","length":4,"offset":67}],"entityRanges":[],"text":"6. Click equals. Select contains words. Set the File name field to File."},{"key":"fga1i","inlineStyleRanges":[],"depth":0,"data":{},"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":20}],"text":" "},{"inlineStyleRanges":[{"style":"BOLD","length":38,"offset":25},{"style":"BOLD","length":19,"offset":87},{"style":"BOLD","offset":119,"length":13},{"style":"BOLD","length":6,"offset":160}],"type":"unstyled","depth":0,"text":"7. Check the box next to Create an alert for each matching file. Check the box next to Send alert as email. Enter your email address in the box provided. Click Create.","data":{},"entityRanges":[],"key":"ceq7a"},{"entityRanges":[{"key":21,"length":1,"offset":0}],"depth":0,"text":" ","data":{},"key":"900i5","type":"atomic","inlineStyleRanges":[]},{"inlineStyleRanges":[],"data":{},"text":"Understanding Cloud Apps policies","entityRanges":[],"depth":0,"type":"header-two","key":"fs6ut"},{"data":{},"text":"Understanding the Cloud App policies can be a bit tricky. In short, you always have 4 parts.","inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"6kfbb","depth":0},{"entityRanges":[],"data":{},"text":"Meta-information","inlineStyleRanges":[],"key":"e85im","type":"header-three","depth":0},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","key":"9b4h1","data":{},"text":"The meta-information is at the top. This is data specifically for the policy. For example, the policy name, description, severity, etc."},{"inlineStyleRanges":[],"text":" ","type":"atomic","entityRanges":[{"length":1,"offset":0,"key":22}],"key":"430jb","depth":0,"data":{}},{"inlineStyleRanges":[],"entityRanges":[],"type":"header-three","data":{},"text":"Filters","depth":0,"key":"9pqa7"},{"depth":0,"inlineStyleRanges":[],"data":{},"text":"The filters are generally next. They tell us who, and what the policy is applied to. You can create a filter for all sorts of different things. For example, you can apply a policy based on the actor (the user that's performing the action) the IP address of the actor, the apps the actor is interacting with, etc.","type":"unstyled","entityRanges":[],"key":"37i2e"},{"depth":0,"data":{},"text":" ","type":"atomic","entityRanges":[{"length":1,"offset":0,"key":23}],"key":"j5i8","inlineStyleRanges":[]},{"entityRanges":[],"key":"3t35m","depth":0,"type":"header-three","inlineStyleRanges":[],"data":{},"text":"Actions"},{"text":"The actions are what will happen when the filters are matched. For example, you can test a policy, in which case an alert can be created but the user won't be prevented from performing an action or you can block the user from acting.","data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"3h2kn","type":"unstyled","depth":0},{"depth":0,"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"key":24,"offset":0,"length":1}],"key":"5mqm9","data":{},"text":" "},{"data":{},"key":"de30h","text":"Alerts","depth":0,"entityRanges":[],"inlineStyleRanges":[],"type":"header-three"},{"type":"unstyled","depth":0,"entityRanges":[],"text":"Alerts are sent when a user performs the actions that match the filters. You can send an email, text message, simply create an alert in Defender for Cloud Apps or send alerts to Power Automate.","key":"fq672","data":{},"inlineStyleRanges":[]},{"type":"atomic","key":"eaqr8","depth":0,"text":" ","data":{},"entityRanges":[{"key":25,"length":1,"offset":0}],"inlineStyleRanges":[]},{"type":"header-two","key":"a03so","entityRanges":[],"data":{},"text":"Block printing from Exchange Online","depth":0,"inlineStyleRanges":[]},{"depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"5orp2","text":"Alright, now we've configured some basic alerting let's get more technical. Let's create a session policy that blocks printing from Exchange Online. We'll need a conditional access policy, then we'll create the app access control to block printing."},{"data":{},"type":"header-three","entityRanges":[],"text":"Create the conditional access policy","key":"38g40","depth":0,"inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[{"style":"BOLD","length":12,"offset":33},{"style":"BOLD","length":10,"offset":83},{"length":17,"offset":96,"style":"BOLD"}],"type":"unstyled","text":"1. Go to Azure AD admin center > All services > Azure AD Conditional Access. Click New policy > Create new policy.","key":"ed1b7","entityRanges":[{"length":27,"key":26,"offset":48}],"depth":0},{"entityRanges":[{"key":27,"offset":0,"length":1}],"key":"9k82v","inlineStyleRanges":[],"type":"atomic","depth":0,"text":" ","data":{}},{"type":"unstyled","depth":0,"data":{},"text":"2. Set the name to Block Printing. Click 0 users or workload identities selected. Click All users.","entityRanges":[],"key":"1plqa","inlineStyleRanges":[{"length":14,"style":"BOLD","offset":19},{"length":39,"offset":41,"style":"BOLD"},{"offset":88,"length":9,"style":"BOLD"}]},{"key":"u78u","entityRanges":[{"offset":0,"key":28,"length":1}],"inlineStyleRanges":[],"text":" ","data":{},"type":"atomic","depth":0},{"inlineStyleRanges":[{"offset":9,"length":59,"style":"BOLD"},{"style":"BOLD","length":11,"offset":76},{"style":"BOLD","offset":100,"length":15},{"style":"BOLD","length":26,"offset":123},{"offset":157,"style":"BOLD","length":6}],"type":"unstyled","depth":0,"key":"6a0q4","data":{},"text":"3. Click No cloud apps, actions, or authentication contexts selected. Click Select apps. Search for Exchange Online. Click Office 365 Exchange Online. Click Select.","entityRanges":[]},{"data":{},"inlineStyleRanges":[],"text":" ","key":"8j7q0","entityRanges":[{"length":1,"key":29,"offset":0}],"depth":0,"type":"atomic"},{"text":"4. Click 0 controls selected located under Session. Click Use Conditional Access App Control. Click Monitor only and select Use custom policy. Click Select.","type":"unstyled","data":{},"entityRanges":[],"key":"7n7d5","depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":19},{"style":"BOLD","offset":58,"length":34},{"offset":100,"style":"BOLD","length":12},{"length":17,"offset":124,"style":"BOLD"},{"style":"BOLD","length":6,"offset":149},{"length":7,"offset":43,"style":"ITALIC"}]},{"entityRanges":[{"offset":0,"key":30,"length":1}],"depth":0,"inlineStyleRanges":[],"key":"17com","text":" ","data":{},"type":"atomic"},{"key":"3qqq9","inlineStyleRanges":[{"style":"BOLD","length":2,"offset":28},{"style":"BOLD","offset":38,"length":6}],"text":"5. Set the Enable policy to On. Click Create.","entityRanges":[],"data":{},"type":"unstyled","depth":0},{"entityRanges":[{"key":31,"length":1,"offset":0}],"key":"fakln","type":"atomic","depth":0,"text":" ","data":{},"inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"key":"4oqp8","entityRanges":[],"text":"Login to Exchange Online","depth":0,"type":"header-two"},{"text":"Now that the conditional access policy is set up we'll need to have someone log into Exchange Online. Someone that is part of the conditional access policy you set up above. Anyone will do. It can even be you. Simply open https://outlook.office.com/mail/.","entityRanges":[{"offset":222,"length":32,"key":32}],"inlineStyleRanges":[],"key":"f998c","data":{},"type":"unstyled","depth":0},{"data":{},"entityRanges":[],"text":"Enable the app in your organization","key":"4r0vp","depth":0,"inlineStyleRanges":[],"type":"header-three"},{"key":"bnt09","type":"unstyled","depth":0,"text":"1. Open Microsoft Defender for Cloud Apps > Investigate > Connected apps > Conditional Access App Control apps > Click the ellipsis next to Microsoft Exchange Online. Click Edit app...","entityRanges":[{"length":33,"offset":8,"key":33}],"inlineStyleRanges":[{"length":12,"style":"BOLD","offset":44},{"length":14,"style":"BOLD","offset":58},{"offset":75,"style":"BOLD","length":35},{"offset":123,"length":8,"style":"BOLD"},{"style":"BOLD","offset":173,"length":11}],"data":{}},{"text":" ","key":"4t6en","depth":0,"type":"atomic","entityRanges":[{"key":34,"length":1,"offset":0}],"data":{},"inlineStyleRanges":[]},{"data":{},"depth":0,"text":"2. Click Use with Conditional Access App Control. Click Save.","entityRanges":[],"type":"unstyled","key":"drpl3","inlineStyleRanges":[{"style":"BOLD","length":39,"offset":9},{"length":4,"offset":56,"style":"BOLD"}]},{"inlineStyleRanges":[],"key":"b9hdn","type":"atomic","text":" ","depth":0,"entityRanges":[{"key":35,"offset":0,"length":1}],"data":{}},{"type":"header-three","entityRanges":[],"inlineStyleRanges":[],"text":"Create session policy","data":{},"depth":0,"key":"af54o"},{"entityRanges":[],"data":{},"depth":0,"type":"unstyled","text":"1. Click Control > Policies > Create policy > Session policy.","key":"2l0tv","inlineStyleRanges":[]},{"type":"atomic","data":{},"entityRanges":[{"length":1,"key":36,"offset":0}],"key":"e2m83","text":" ","inlineStyleRanges":[],"depth":0},{"data":{},"depth":0,"type":"unstyled","text":"2. Set the policy name to Block Printing from Exchange Online. Click Select under Session control type. Click Block activities.","key":"brctj","inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[{"offset":0,"length":1,"key":37}],"depth":0,"data":{},"type":"atomic","key":"88vds","text":" ","inlineStyleRanges":[]},{"type":"unstyled","depth":0,"key":"3ve52","text":"3. Click Select apps. Click Microsoft Exchange Online. Click Select activity. Click Print.","data":{},"entityRanges":[],"inlineStyleRanges":[{"offset":9,"length":11,"style":"BOLD"},{"style":"BOLD","length":25,"offset":28},{"length":15,"offset":61,"style":"BOLD"},{"style":"BOLD","offset":84,"length":5}]},{"entityRanges":[{"length":1,"offset":0,"key":38}],"depth":0,"key":"b9qb7","inlineStyleRanges":[],"text":" ","type":"atomic","data":{}},{"text":"4. Scroll down to the actions section. Click Block. Click Create.","entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":45,"length":5,"style":"BOLD"},{"style":"BOLD","offset":58,"length":6}],"data":{},"key":"eji5h","type":"unstyled"},{"data":{},"entityRanges":[{"key":39,"length":1,"offset":0}],"text":" ","depth":0,"key":"dttou","inlineStyleRanges":[],"type":"atomic"},{"data":{},"inlineStyleRanges":[],"text":"The above policy doesn't only apply to Microsoft 365 apps. Any app that's registered in Azure AD that supports session controls can be managed in the same fashion.","type":"unstyled","key":"v3ce","entityRanges":[],"depth":0},{"inlineStyleRanges":[],"entityRanges":[],"type":"header-two","key":"8508o","text":"Review the logs","data":{},"depth":0},{"entityRanges":[],"data":{},"key":"7b7up","type":"unstyled","depth":0,"text":"So now we have a few apps set up in Cloud App Security. Let's dive in and see how to review the logs to see how to track who's doing what.","inlineStyleRanges":[]},{"text":"1. Open the Microsoft 365 Cloud App Security admin center. Click Investigate > Activity log.","entityRanges":[],"key":"69iss","data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[{"offset":12,"style":"BOLD","length":45},{"style":"BOLD","length":12,"offset":65},{"length":12,"offset":79,"style":"BOLD"}]},{"depth":0,"entityRanges":[],"text":"2. Click on an activity to see more information.","key":"adp2m","inlineStyleRanges":[],"type":"unstyled","data":{}},{"data":{},"depth":0,"type":"atomic","inlineStyleRanges":[],"key":"epma","entityRanges":[{"offset":0,"key":40,"length":1}],"text":" "},{"entityRanges":[],"depth":0,"type":"unstyled","key":"cu1aj","data":{},"text":"","inlineStyleRanges":[]}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://docs.microsoft.com/en-us/defender-cloud-apps/","targetOption":"_blank"}},"1":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://go.microsoft.com/fwlink/?linkid=2058038"}},"2":{"mutability":"MUTABLE","data":{"alt":"Open Microsoft Defender for Cloud Apps Admin Center","width":"auto","alignment":"none","height":"auto","src":"https://i.ibb.co/wdyzFt9/open-microsoft-defender-for-cloud-apps.png"},"type":"IMAGE"},"3":{"data":{"width":"auto","height":"auto","alt":"Enable Microsoft Defender for Identity data integration","alignment":"none","src":"https://i.ibb.co/DwMCTLt/Enable-Microsoft-Defender-for-Identity-data-integration.png"},"type":"IMAGE","mutability":"MUTABLE"},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Deploy Microsoft Defender for Identity","width":"auto","src":"https://i.ibb.co/88DsRRM/Deploy-Microsoft-Defender-for-Identity.png","alignment":"none","height":"auto"}},"5":{"mutability":"MUTABLE","data":{"width":"auto","alignment":"none","src":"https://i.ibb.co/fq6jbYc/Create-Microsoft-Defender-for-Identity-instance.png","height":"auto","alt":"Create Microsoft Defender for Identity instance"},"type":"IMAGE"},"6":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/JBGdSfr/provide-a-username-and-password.png","alt":"Provide a username and password","height":"auto","alignment":"none"}},"7":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","alt":"Enter on-premises credentials","height":"auto","width":"auto","src":"https://i.ibb.co/HHK2qWz/enter-onpremises-credentials.png"}},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/svLKv8H/download-sensor-setup.png","height":"auto","alt":"Download the sensor setup","alignment":"none"}},"9":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/kM8dshr/Download-sensor-and-copy-access-key.png","alignment":"none","alt":"Download the sensor then copy the key","height":"auto"}},"10":{"mutability":"MUTABLE","data":{"alignment":"none","alt":"Enter the sensor access key","src":"https://i.ibb.co/c888GgC/enter-access-key.png","height":"auto","width":"auto"},"type":"IMAGE"},"11":{"data":{"alignment":"none","src":"https://i.ibb.co/D7mLYH2/cloud-apps-settings.png","alt":"Click the gear then click Settings","width":"auto","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"12":{"type":"IMAGE","data":{"width":"auto","alignment":"none","height":"auto","alt":"Configure Microsoft Defender for Identity sensors","src":"https://i.ibb.co/RYMnJLT/Configure-Microsoft-Defender-for-Identity-sensors.png"},"mutability":"MUTABLE"},"13":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/C21rd1c/file-policy-alert.png","height":"auto","alt":"Microsoft Defender for Cloud Apps email alert","targetOption":"_blank","alignment":"none","width":"auto","url":"https://go.microsoft.com/fwlink/?linkid=2058038"},"type":"IMAGE"},"14":{"type":"LINK","mutability":"MUTABLE","data":{"alt":"Open the Microsoft Defender for Cloud Apps connected apps settings","height":"auto","url":"https://go.microsoft.com/fwlink/?linkid=2058038","src":"https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png","alignment":"left","width":"auto","targetOption":"_blank"}},"15":{"type":"IMAGE","data":{"height":"auto","alignment":"none","alt":"Open the Microsoft Defender for Cloud Apps connected apps settings","width":"auto","src":"https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png"},"mutability":"MUTABLE"},"16":{"type":"IMAGE","data":{"alt":"Microsoft Defender for Cloud Apps Office 365 components","src":"https://i.ibb.co/PGyBPSP/defender-for-cloud-apps-office-365-components.png","height":"auto","alignment":"none","width":"auto"},"mutability":"MUTABLE"},"17":{"data":{"alignment":"none","width":"auto","alt":"Create file policy","src":"https://i.ibb.co/nLDD0JR/create-file-policy.png","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"18":{"data":{"src":"https://i.ibb.co/wL49NXB/create-file-policy-set-name.png","height":"auto","width":"auto","alignment":"none","alt":"Create a file policy. Set the name and remove the filters"},"type":"IMAGE","mutability":"MUTABLE"},"19":{"data":{"alignment":"none","alt":"Filter by file name","height":"auto","src":"https://i.ibb.co/5LjdDSK/Filter-by-file-name.png","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"20":{"data":{"alignment":"none","width":"auto","src":"https://i.ibb.co/tLQ6q3r/set-filter-match-to-contains-words.png","alt":"Set file filter match to contain the words File","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"21":{"type":"IMAGE","data":{"alignment":"none","src":"https://i.ibb.co/q9cjDjz/set-alert.png","width":"auto","height":"auto","alt":"Set alert to email"},"mutability":"MUTABLE"},"22":{"mutability":"MUTABLE","data":{"alignment":"none","url":"https://aad.portal.azure.com/#allservices/category/All","width":"auto","targetOption":"_blank","alt":"Cloud App Policy Meta-Information","height":"auto","src":"https://i.ibb.co/W0DDsqx/policy-meta-information.png"},"type":"IMAGE"},"23":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","alt":"Cloud app policy filters","targetOption":"_blank","height":"auto","src":"https://i.ibb.co/qxr2D8p/filter.png","url":"https://aad.portal.azure.com/#allservices/category/All","width":"auto"}},"24":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","width":"auto","targetOption":"_blank","src":"https://i.ibb.co/WPYhm63/Actions.png","url":"https://aad.portal.azure.com/#allservices/category/All","height":"auto","alt":"Microsoft Defender for Cloud Apps Actions"}},"25":{"mutability":"MUTABLE","data":{"width":"auto","targetOption":"_blank","alt":"Microsoft Defender for cloud apps Alerts","alignment":"none","url":"https://aad.portal.azure.com/#allservices/category/All","src":"https://i.ibb.co/VH7H7kw/Alerts.png","height":"auto"},"type":"IMAGE"},"26":{"type":"LINK","data":{"width":"auto","targetOption":"_blank","alt":"Create new conditional access policy","alignment":"left","url":"https://aad.portal.azure.com/#allservices/category/All","src":"https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png","height":"auto"},"mutability":"MUTABLE"},"27":{"data":{"src":"https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png","alignment":"none","width":"auto","height":"auto","alt":"Create new conditional access policy"},"type":"IMAGE","mutability":"MUTABLE"},"28":{"data":{"height":"auto","src":"https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png","width":"auto","alt":"Conditional access policy all users","url":"https://outlook.office.com/mail/","alignment":"none","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"29":{"type":"IMAGE","data":{"width":"auto","targetOption":"_blank","alt":"Set Exchange Online as the app in the conditional apps","height":"auto","url":"https://outlook.office.com/mail/","alignment":"none","src":"https://i.ibb.co/q5shGXd/conditional-access-policy-set-exchange-online.png"},"mutability":"MUTABLE"},"30":{"data":{"src":"https://i.ibb.co/3zwTtWD/session-controls.png","url":"https://outlook.office.com/mail/","alignment":"none","width":"auto","alt":"Session controls","height":"auto","targetOption":"_blank"},"mutability":"MUTABLE","type":"IMAGE"},"31":{"type":"IMAGE","data":{"targetOption":"_blank","height":"auto","alt":"Enable the conditional access policy","alignment":"none","width":"auto","src":"https://i.ibb.co/ckcDbJn/enable-the-conditional-access-policy.png","url":"https://outlook.office.com/mail/"},"mutability":"MUTABLE"},"32":{"data":{"width":"auto","height":"auto","url":"https://outlook.office.com/mail/","targetOption":"_blank","alignment":"left","alt":"Edit connected apps","src":"https://i.ibb.co/mCq773W/edit-connected-app.png"},"type":"LINK","mutability":"MUTABLE"},"33":{"mutability":"MUTABLE","data":{"width":"auto","alt":"Edit connected apps","targetOption":"_blank","url":"https://go.microsoft.com/fwlink/?linkid=2058038","height":"auto","src":"https://i.ibb.co/mCq773W/edit-connected-app.png","alignment":"left"},"type":"LINK"},"34":{"data":{"height":"auto","width":"auto","alignment":"none","src":"https://i.ibb.co/mCq773W/edit-connected-app.png","alt":"Edit connected apps"},"type":"IMAGE","mutability":"MUTABLE"},"35":{"data":{"alignment":"none","width":"auto","height":"auto","src":"https://i.ibb.co/Fzk45vy/use-with-conditional-access-app-control.png","alt":"Use with conditional access app control"},"mutability":"MUTABLE","type":"IMAGE"},"36":{"data":{"height":"auto","width":"auto","alignment":"none","alt":"Create session policy","src":"https://i.ibb.co/b1C33jn/create-session-policy.png"},"type":"IMAGE","mutability":"MUTABLE"},"37":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Session Policy block activities","src":"https://i.ibb.co/Lp85jht/session-policy-block-activities.png","alignment":"none","height":"auto","width":"auto"}},"38":{"data":{"alignment":"none","height":"auto","alt":"Select apps and select activiities","src":"https://i.ibb.co/R24dxgR/select-apps-select-activity.png","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"39":{"type":"IMAGE","data":{"src":"https://i.ibb.co/yg2Z6Jf/block-session-policy.png","height":"auto","alignment":"none","width":"auto","alt":"Set the session policy to block"},"mutability":"MUTABLE"},"40":{"data":{"width":"auto","alignment":"none","height":"auto","alt":"Cloud app activity log","src":"https://i.ibb.co/bbrpv8C/cloud-app-activity-log.png"},"type":"IMAGE","mutability":"MUTABLE"}}}},
      nextContentSlug: 'Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1',
      previousContentSlug: 'Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged((user) => {
      if (user) {
        getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
          if (!userAcct.completedContent) {
            userAcct.completedContent = []
          }
          this.setState({userAcct})
        })
      }
    })

    if (isBrowser()) {
      document.addEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: true})
    }
  }

  componentWillUnmount() {
    if (isBrowser() && this.state.isTrackScrolling)
      document.removeEventListener('scroll', this.trackScrolling);

    this.onAuthStateChangedListener()
  }

  trackScrolling() {
    if (document.body.scrollHeight * .8 < window.innerHeight + window.scrollY) {
      this.setHasCompletedContent(true)
    }
  }

  setHasCompletedContent(val) {
    if (val === true) {
      document.removeEventListener('scroll', this.trackScrolling);
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
        "Microsoft",
        "Microsoft 365",
        "Office 365",
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} canonical={this.state.path} title={this.state.article.title} description={this.state.article.description}>
        <main>
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
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p>"Microsoft Defender for Cloud Apps is a Cloud Access Security Broker (CASB) that operates on multiple clouds. It provides rich visibility, control over data travel, and sophisticated analytics to identify and combat cyber threats across all your cloud services." - <a href="https://docs.microsoft.com/en-us/defender-cloud-apps/" target="_blank">Microsoft</a></p>
<p>In short, The Microsoft Defender for Cloud Apps portal is a place where you can integrate your Azure AD user accounts, devices, and other third-party cloud apps to see what your users are using and then potentially put a stop to it.</p>
<h2>Open the Microsoft Defender for Cloud Apps admin center</h2>
<p>The Defender for Cloud Apps has an admin center. You can access it by performing the following:</p>
<p>1. Open the Microsoft 365 Defender admin center &gt; More resources &gt; Click <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank">Open</a> under Microsoft Defender for Cloud Apps.</p>
<div ><img src="https://i.ibb.co/wdyzFt9/open-microsoft-defender-for-cloud-apps.png" alt="Open Microsoft Defender for Cloud Apps Admin Center" style="height: auto;width: auto"/></div>
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
<div ><img src="https://i.ibb.co/DwMCTLt/Enable-Microsoft-Defender-for-Identity-data-integration.png" alt="Enable Microsoft Defender for Identity data integration" style="height: auto;width: auto"/></div>
<p>2. If you see Deploy Microsoft Defender for Identity click the link.</p>
<div ><img src="https://i.ibb.co/88DsRRM/Deploy-Microsoft-Defender-for-Identity.png" alt="Deploy Microsoft Defender for Identity" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/fq6jbYc/Create-Microsoft-Defender-for-Identity-instance.png" alt="Create Microsoft Defender for Identity instance" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Provide a username and password</strong>.</p>
<div ><img src="https://i.ibb.co/JBGdSfr/provide-a-username-and-password.png" alt="Provide a username and password" style="height: auto;width: auto"/></div>
<p>5. Enter your on-premises credentials in the space provided. Click Save.</p>
<div ><img src="https://i.ibb.co/HHK2qWz/enter-onpremises-credentials.png" alt="Enter on-premises credentials" style="height: auto;width: auto"/></div>
<p>6. Click <strong>Download Sensore Setup</strong> at the top of the screen.</p>
<div ><img src="https://i.ibb.co/svLKv8H/download-sensor-setup.png" alt="Download the sensor setup" style="height: auto;width: auto"/></div>
<p>7. Click <strong>Download </strong>then <strong>copy </strong>the access key.</p>
<div ><img src="https://i.ibb.co/kM8dshr/Download-sensor-and-copy-access-key.png" alt="Download the sensor then copy the key" style="height: auto;width: auto"/></div>
<p>8. Copy the ZIP to a domain controller then extract it. Once extracted run <strong>Azure ATP Sensor Setup</strong>.</p>
<p>9. On the Choose your language page click <strong>Next</strong>.</p>
<p>10. On the Sensor deployment type page click <strong>Next</strong>.</p>
<p>11. On the Configure the sensor page enter the <strong>access key</strong> you received from step 7. Click <strong>Install</strong>.</p>
<div ><img src="https://i.ibb.co/c888GgC/enter-access-key.png" alt="Enter the sensor access key" style="height: auto;width: auto"/></div>
<h2>Review servers with the sensor installed</h2>
<p>Now let's review which servers have the sensors installed.</p>
<p>1. Click the <strong>gear </strong>in the top right corner. Click <strong>Settings</strong>.</p>
<div ><img src="https://i.ibb.co/D7mLYH2/cloud-apps-settings.png" alt="Click the gear then click Settings" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Microsoft Defender for Identity</strong> &gt; <strong>Configure Microsoft Defender for Identity sensors.</strong></p>
<div ><img src="https://i.ibb.co/RYMnJLT/Configure-Microsoft-Defender-for-Identity-sensors.png" alt="Configure Microsoft Defender for Identity sensors" style="height: auto;width: auto"/></div>
<h2>Create a file alert</h2>
<p>Now we may need to alert us on file activity. Let's say we want to receive an alert on any file that has a name that contains the word File. Let's set it up. First, we'll need to enable file monitoring in the Office 365 connector. Then we'll need to create a policy.</p>
<p><em>The policy below will match any file located in OneDrive or SharePoint with the file name containing the word or phrase you add. In the example below it will match any file with the file name of File. So it will match the following files: File.docx, ImportantFile.docx, and File_Important.docx</em></p>
<div ><img src="https://i.ibb.co/C21rd1c/file-policy-alert.png" alt="Microsoft Defender for Cloud Apps email alert" style="height: auto;width: auto"/></div>
<p>1. Open the <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank"><strong>Microsoft Defender for Cloud Apps</strong></a><strong> </strong>portal. Go to <strong>Investigate</strong> &gt; <strong>Connected apps</strong>. Click the <strong>ellipsis</strong> (<strong>...</strong>) next to <strong>Office 365</strong>. Click <strong>Edit settings...</strong></p>
<div ><img src="https://i.ibb.co/7g7LvFg/office-365-cloud-apps-settings.png" alt="Open the Microsoft Defender for Cloud Apps connected apps settings" style="height: auto;width: auto"/></div>
<p>2. Click all the <strong>Office 365 components</strong> checkboxes. Click <strong>Connect</strong>.</p>
<div ><img src="https://i.ibb.co/PGyBPSP/defender-for-cloud-apps-office-365-components.png" alt="Microsoft Defender for Cloud Apps Office 365 components" style="height: auto;width: auto"/></div>
<p>3. Close the Connect Office 365 window. Click Control &gt; Policies &gt; Create policy &gt; File policy.</p>
<div ><img src="https://i.ibb.co/nLDD0JR/create-file-policy.png" alt="Create file policy" style="height: auto;width: auto"/></div>
<p>4. Give the <strong>policy a name</strong>, for example, <strong>File Policy 1</strong>. Remove the two <strong>files matching all of the following</strong> filters.</p>
<div ><img src="https://i.ibb.co/wL49NXB/create-file-policy-set-name.png" alt="Create a file policy. Set the name and remove the filters" style="height: auto;width: auto"/></div>
<p>5. Click <strong>Select a filter</strong>. Select <strong>File name</strong>.</p>
<div ><img src="https://i.ibb.co/5LjdDSK/Filter-by-file-name.png" alt="Filter by file name" style="height: auto;width: auto"/></div>
<p>6. Click <strong>equals</strong>. Select <strong>contains words</strong>. Set the File name field to <strong>File</strong>.</p>
<div ><img src="https://i.ibb.co/tLQ6q3r/set-filter-match-to-contains-words.png" alt="Set file filter match to contain the words File" style="height: auto;width: auto"/></div>
<p>7. Check the box next to <strong>Create an alert for each matching file</strong>. Check the box next to <strong>Send alert as email</strong>. Enter your <strong>email address</strong> in the box provided. Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/q9cjDjz/set-alert.png" alt="Set alert to email" style="height: auto;width: auto"/></div>
<h2>Understanding Cloud Apps policies</h2>
<p>Understanding the Cloud App policies can be a bit tricky. In short, you always have 4 parts.</p>
<h3>Meta-information</h3>
<p>The meta-information is at the top. This is data specifically for the policy. For example, the policy name, description, severity, etc.</p>
<div ><img src="https://i.ibb.co/W0DDsqx/policy-meta-information.png" alt="Cloud App Policy Meta-Information" style="height: auto;width: auto"/></div>
<h3>Filters</h3>
<p>The filters are generally next. They tell us who, and what the policy is applied to. You can create a filter for all sorts of different things. For example, you can apply a policy based on the actor (the user that's performing the action) the IP address of the actor, the apps the actor is interacting with, etc.</p>
<div ><img src="https://i.ibb.co/qxr2D8p/filter.png" alt="Cloud app policy filters" style="height: auto;width: auto"/></div>
<h3>Actions</h3>
<p>The actions are what will happen when the filters are matched. For example, you can test a policy, in which case an alert can be created but the user won't be prevented from performing an action or you can block the user from acting.</p>
<div ><img src="https://i.ibb.co/WPYhm63/Actions.png" alt="Microsoft Defender for Cloud Apps Actions" style="height: auto;width: auto"/></div>
<h3>Alerts</h3>
<p>Alerts are sent when a user performs the actions that match the filters. You can send an email, text message, simply create an alert in Defender for Cloud Apps or send alerts to Power Automate.</p>
<div ><img src="https://i.ibb.co/VH7H7kw/Alerts.png" alt="Microsoft Defender for cloud apps Alerts" style="height: auto;width: auto"/></div>
<h2>Block printing from Exchange Online</h2>
<p>Alright, now we've configured some basic alerting let's get more technical. Let's create a session policy that blocks printing from Exchange Online. We'll need a conditional access policy, then we'll create the app access control to block printing.</p>
<h3>Create the conditional access policy</h3>
<p>1. Go to Azure AD admin center &gt; <strong>All services</strong> &gt; <a href="https://aad.portal.azure.com/#allservices/category/All" target="_blank">Azure AD Conditional Access</a>. Click <strong>New policy</strong> &gt; <strong>Create new policy</strong>.</p>
<div ><img src="https://i.ibb.co/XXJLWvv/create-new-conditional-access-policy.png" alt="Create new conditional access policy" style="height: auto;width: auto"/></div>
<p>2. Set the name to <strong>Block Printing</strong>. Click <strong>0 users or workload identities selected</strong>. Click <strong>All users</strong>.</p>
<div ><img src="https://i.ibb.co/s368MwG/conditional-access-policy-all-users.png" alt="Conditional access policy all users" style="height: auto;width: auto"/></div>
<p>3. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>Select apps</strong>. Search for <strong>Exchange Online</strong>. Click <strong>Office 365 Exchange Online</strong>. Click <strong>Select</strong>.</p>
<div ><img src="https://i.ibb.co/q5shGXd/conditional-access-policy-set-exchange-online.png" alt="Set Exchange Online as the app in the conditional apps" style="height: auto;width: auto"/></div>
<p>4. Click <strong>0 controls selected</strong> located under <em>Session</em>. Click <strong>Use Conditional Access App Control</strong>. Click <strong>Monitor only</strong> and select <strong>Use custom policy</strong>. Click <strong>Select</strong>.</p>
<div ><img src="https://i.ibb.co/3zwTtWD/session-controls.png" alt="Session controls" style="height: auto;width: auto"/></div>
<p>5. Set the Enable policy to <strong>On</strong>. Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/ckcDbJn/enable-the-conditional-access-policy.png" alt="Enable the conditional access policy" style="height: auto;width: auto"/></div>
<h2>Login to Exchange Online</h2>
<p>Now that the conditional access policy is set up we'll need to have someone log into Exchange Online. Someone that is part of the conditional access policy you set up above. Anyone will do. It can even be you. Simply open <a href="https://outlook.office.com/mail/" target="_blank">https://outlook.office.com/mail/</a>.</p>
<h3>Enable the app in your organization</h3>
<p>1. Open <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank">Microsoft Defender for Cloud Apps</a> &gt; <strong>Investigate </strong>&gt; <strong>Connected apps</strong> &gt; <strong>Conditional Access App Control apps</strong> &gt; Click the <strong>ellipsis</strong> next to Microsoft Exchange Online. Click <strong>Edit app...</strong></p>
<div ><img src="https://i.ibb.co/mCq773W/edit-connected-app.png" alt="Edit connected apps" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Use with Conditional Access App Control</strong>. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/Fzk45vy/use-with-conditional-access-app-control.png" alt="Use with conditional access app control" style="height: auto;width: auto"/></div>
<h3>Create session policy</h3>
<p>1. Click Control &gt; Policies &gt; Create policy &gt; Session policy.</p>
<div ><img src="https://i.ibb.co/b1C33jn/create-session-policy.png" alt="Create session policy" style="height: auto;width: auto"/></div>
<p>2. Set the policy name to Block Printing from Exchange Online. Click Select under Session control type. Click Block activities.</p>
<div ><img src="https://i.ibb.co/Lp85jht/session-policy-block-activities.png" alt="Session Policy block activities" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Select apps</strong>. Click <strong>Microsoft Exchange Online</strong>. Click <strong>Select activity</strong>. Click <strong>Print</strong>.</p>
<div ><img src="https://i.ibb.co/R24dxgR/select-apps-select-activity.png" alt="Select apps and select activiities" style="height: auto;width: auto"/></div>
<p>4. Scroll down to the actions section. Click <strong>Block</strong>. Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/yg2Z6Jf/block-session-policy.png" alt="Set the session policy to block" style="height: auto;width: auto"/></div>
<p>The above policy doesn't only apply to Microsoft 365 apps. Any app that's registered in Azure AD that supports session controls can be managed in the same fashion.</p>
<h2>Review the logs</h2>
<p>So now we have a few apps set up in Cloud App Security. Let's dive in and see how to review the logs to see how to track who's doing what.</p>
<p>1. Open the <strong>Microsoft 365 Cloud App Security admin center</strong>. Click <strong>Investigate </strong>&gt; <strong>Activity log</strong>.</p>
<p>2. Click on an activity to see more information.</p>
<div ><img src="https://i.ibb.co/bbrpv8C/cloud-app-activity-log.png" alt="Cloud app activity log" style="height: auto;width: auto"/></div>
<p></p>
</div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:3 }}>
                  <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                  <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos/>}>Next</Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{ mt: 3 }}>
                <ContentsRead completedContent={this.state.userAcct.completedContent} />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

export default ArticlePage
