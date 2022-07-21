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
      path: '/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt',
      article: {"images":["https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png","https://i.ibb.co/VHk7YHx/Create-a-new-workspace.png","https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png","https://i.ibb.co/S6Bz6JQ/resource-group.png","https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png","https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png","https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png","https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png","https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png","https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png","https://i.ibb.co/qN9XsKj/Add-Workbook.png","https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png","https://i.ibb.co/ssNQGdy/View-saved-workbook.png","https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png","https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png","https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png","https://i.ibb.co/GcnPkd9/Create-a-named-location.png","https://i.ibb.co/pbsXGDq/Create-a-playbook-from-a-template.png","https://i.ibb.co/pbsXGDq/Create-a-playbook-from-a-template.png","https://i.ibb.co/HG2Ghpd/Create-a-playbook.png","https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png","https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png","https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png","https://i.ibb.co/LCT6PrC/Create-a-playbook.png","https://i.ibb.co/bNDYmjx/Setup-connections.png","https://i.ibb.co/nm1Ldvw/open-event-hubs.png","https://i.ibb.co/99YcTZC/create-event-hubs-namespace.png","https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png","https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png","https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png","https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png"],"article":{"blocks":[{"depth":0,"text":"What is Microsoft Sentinel?","key":"ed0a2","entityRanges":[],"data":{},"inlineStyleRanges":[],"type":"header-two"},{"entityRanges":[],"key":"9d5vf","inlineStyleRanges":[],"data":{},"type":"unstyled","depth":0,"text":"Microsoft Sentinel is a scalable cloud-based security information and event management (SIEM). It's also a security orchestration, automation, and response (SOAR) solution. So what does that mean?"},{"type":"unstyled","depth":0,"text":"The easiest way to understand Microsoft Sentinel is to break down its capabilities.","entityRanges":[],"key":"29qeu","data":{},"inlineStyleRanges":[]},{"data":{},"depth":0,"entityRanges":[],"key":"7vjtb","text":"Collect data across all users, applications, devices, and infrastructure hardware for on-premises devices and cloud apps.","type":"unordered-list-item","inlineStyleRanges":[]},{"inlineStyleRanges":[],"depth":0,"key":"4l70n","type":"unordered-list-item","text":"Detect previously undetected threats, and reduce false positives. Hunt for suspicious activity and Investigate threats using AI.","data":{},"entityRanges":[]},{"type":"unordered-list-item","key":"7or9u","inlineStyleRanges":[],"text":"Respond to incidents with automation and orchestration.","data":{},"entityRanges":[],"depth":0},{"inlineStyleRanges":[],"key":"1lefu","depth":0,"entityRanges":[],"data":{},"text":"In short, it collects, detects, investigates, and responds to threats across your organization. I think it's probably even easier to understand by setting it up and getting started.","type":"unstyled"},{"text":"What licenses are required for Microsoft Sentinel?","data":{},"depth":0,"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"key":"50o4o"},{"text":"Microsoft Sentinel requires a pay-as-you-use license to Microsoft Azure. Pricing can be seen here. You can also sign up for a free $200 credit by going here.","key":"fvk5q","type":"unstyled","entityRanges":[{"key":0,"offset":93,"length":4},{"key":1,"length":4,"offset":152}],"inlineStyleRanges":[],"depth":0,"data":{}},{"inlineStyleRanges":[],"key":"7ragr","entityRanges":[],"text":"What roles/permissions are available and required?","type":"header-two","depth":0,"data":{}},{"data":{},"entityRanges":[],"type":"unstyled","depth":0,"text":"First, the global admin has full access to create a Microsoft Sentinel workspace.","key":"fkjq4","inlineStyleRanges":[]},{"entityRanges":[],"text":"Owner: Grants full access to manage all resources, including the ability to assign roles in Azure RBAC. This is the role that's received when you set up the workspace.","depth":0,"data":{},"key":"8vof1","inlineStyleRanges":[{"style":"BOLD","offset":0,"length":5}],"type":"unstyled"},{"data":{},"type":"unstyled","inlineStyleRanges":[{"offset":0,"length":41,"style":"BOLD"}],"key":"39neb","text":"Microsoft Sentinel Automation Contributor: Allows Microsoft Sentinel to add playbooks to automation rules. It is not meant for user accounts.","entityRanges":[],"depth":0},{"inlineStyleRanges":[{"style":"BOLD","length":6,"offset":0}],"data":{},"entityRanges":[],"key":"67nco","text":"Reader: View all resources but cannot make any changes.","depth":0,"type":"unstyled"},{"data":{},"inlineStyleRanges":[{"offset":0,"length":33,"style":"BOLD"}],"entityRanges":[],"type":"unstyled","depth":0,"text":"Managed Application Operator Role: Lets you manage  the managed application resources","key":"2s5rp"},{"key":"4k6fk","entityRanges":[],"text":"Contributor: Can perform everything the owner can except they can't assign roles.","depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[{"style":"BOLD","length":11,"offset":0}]},{"depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[{"length":21,"style":"BOLD","offset":0}],"key":"8fogc","text":"Logic App contributor: This allows you to manage logic apps including playbooks and incidents.","type":"unstyled"},{"inlineStyleRanges":[],"type":"header-two","depth":0,"text":"Enable Microsoft Sentinel","key":"c69o8","entityRanges":[],"data":{}},{"type":"unstyled","depth":0,"data":{},"text":"1. Open the Azure admin center (note, not the Azure AD admin center) > Search for Microsoft Sentinel. Click Microsoft Sentinel.","entityRanges":[{"key":2,"length":18,"offset":108}],"key":"dg16u","inlineStyleRanges":[]},{"type":"unstyled","depth":0,"key":"qvt2","inlineStyleRanges":[{"offset":9,"length":25,"style":"BOLD"}],"text":"2. Click Create Microsoft Sentinel.","entityRanges":[],"data":{}},{"text":" ","entityRanges":[{"offset":0,"key":3,"length":1}],"depth":0,"type":"atomic","data":{},"key":"764t2","inlineStyleRanges":[]},{"inlineStyleRanges":[{"length":22,"offset":9,"style":"BOLD"}],"type":"unstyled","entityRanges":[],"depth":0,"text":"3. Click Create a new workspace.","data":{},"key":"a9bd4"},{"entityRanges":[{"offset":0,"length":1,"key":4}],"data":{},"depth":0,"text":" ","key":"b010r","type":"atomic","inlineStyleRanges":[]},{"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":10},{"length":8,"style":"BOLD","offset":37},{"length":2,"offset":53,"style":"BOLD"}],"data":{},"key":"74v4c","depth":0,"type":"unstyled","entityRanges":[],"text":"4. Click Create new. Set the name to Sentinel. Click OK."},{"key":"70ni9","inlineStyleRanges":[],"text":" ","data":{},"type":"atomic","entityRanges":[{"key":5,"offset":0,"length":1}],"depth":0},{"inlineStyleRanges":[{"length":17,"style":"BOLD","offset":28},{"offset":53,"length":15,"style":"BOLD"}],"type":"unstyled","depth":0,"entityRanges":[],"key":"1bb5a","text":"5. Set the instance name to Sentinel-Instance. Click Review + Create.","data":{}},{"key":"e414s","depth":0,"entityRanges":[{"offset":0,"length":1,"key":6}],"type":"atomic","inlineStyleRanges":[],"data":{},"text":" "},{"entityRanges":[],"key":"a100p","data":{},"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":6,"offset":9}],"text":"6. Click Create.","depth":0},{"inlineStyleRanges":[{"style":"BOLD","offset":13,"length":17},{"length":3,"style":"BOLD","offset":38}],"entityRanges":[],"text":"7. Click the Sentinel-Instance. Click Add.","type":"unstyled","key":"30rjv","data":{},"depth":0},{"data":{},"key":"fcu8c","entityRanges":[{"key":7,"length":1,"offset":0}],"depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic"},{"key":"dojjp","type":"header-two","entityRanges":[],"depth":0,"data":{},"text":"Connect Microsoft Sentinel to data sources","inlineStyleRanges":[]},{"key":"6tb7j","depth":0,"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"data":{},"text":"Next, we'll need to connect Microsoft Sentinel to a data source. In short, this means Microsft Sentinel will ingest the data from the service or app. Sometimes, you'll need to install an agent, for example, to monitor computers/servers. In Microsoft 365 case all we need to do is set up the connector."},{"type":"header-three","text":"How to connect Office 365 with Microsoft Sentinal","data":{},"entityRanges":[],"key":"292fc","depth":0,"inlineStyleRanges":[]},{"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Data connectors. Search for Office 365 and click on the connector. Click Open connector page.","type":"unstyled","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[{"length":18,"offset":9,"style":"BOLD"},{"length":18,"style":"BOLD","offset":35},{"offset":66,"style":"BOLD","length":18},{"offset":92,"style":"BOLD","length":15},{"style":"BOLD","length":10,"offset":120},{"style":"BOLD","length":9,"offset":148},{"style":"BOLD","offset":165,"length":19}],"key":"77p83"},{"depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":8}],"key":"cp3nt","text":" ","type":"atomic"},{"entityRanges":[],"type":"unstyled","text":"2. Click Exchange, SharePoint, and Teams checkboxes. Click Apply Changes.","data":{},"key":"acqbe","depth":0,"inlineStyleRanges":[{"offset":9,"length":8,"style":"BOLD"},{"offset":19,"style":"BOLD","length":10},{"style":"BOLD","length":5,"offset":35},{"style":"BOLD","length":13,"offset":59}]},{"key":"lral","depth":0,"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":9}],"text":" ","data":{},"type":"atomic"},{"type":"header-three","inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"dnq6t","data":{},"text":"How to connect Azure Active Directory with Microsoft Sentinal"},{"key":"28jbv","type":"unstyled","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":208},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":208},{"offset":0,"length":208,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":208},{"offset":9,"style":"BOLD","length":18},{"style":"BOLD","offset":35,"length":18},{"style":"BOLD","length":18,"offset":66},{"offset":92,"style":"BOLD","length":15},{"style":"BOLD","offset":120,"length":22},{"style":"BOLD","length":9,"offset":160},{"offset":181,"length":20,"style":"BOLD"}],"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Data connectors. Search for Azure Active Directory and click on the connector. Click the Open connector page button.","entityRanges":[],"depth":0,"data":{}},{"data":{},"depth":0,"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":10}],"key":"d7otq","text":" "},{"data":{},"inlineStyleRanges":[{"style":"BOLD","length":13,"offset":55}],"type":"unstyled","depth":0,"entityRanges":[],"key":"4ciqc","text":"2. Click all the checkboxes under Configuration. Click Apply Changes."},{"inlineStyleRanges":[],"type":"atomic","depth":0,"text":" ","data":{},"key":"ef40l","entityRanges":[{"length":1,"key":11,"offset":0}]},{"entityRanges":[],"inlineStyleRanges":[],"text":"Enable diagnostic settings","key":"1f7qd","depth":0,"data":{},"type":"header-two"},{"entityRanges":[],"inlineStyleRanges":[],"key":"auriu","type":"unstyled","depth":0,"data":{},"text":"Next, we'll enable the diagnostic settings to send the logs to Microsoft Sentinel."},{"text":"1. Go to Microsoft Azure admin center > search for monitor > Click Monitor > Diagnostic settings.","entityRanges":[],"inlineStyleRanges":[{"length":28,"style":"BOLD","offset":9},{"length":8,"offset":51,"style":"BOLD"},{"length":8,"style":"BOLD","offset":67},{"style":"BOLD","length":10,"offset":77},{"offset":88,"style":"BOLD","length":8}],"type":"unstyled","depth":0,"key":"eepio","data":{}},{"entityRanges":[{"key":12,"length":1,"offset":0}],"key":"ega1u","type":"atomic","text":" ","inlineStyleRanges":[],"depth":0,"data":{}},{"entityRanges":[],"depth":0,"text":"2. Click your workspace. Click Add diagnostic setting.","data":{},"key":"3upqf","type":"unstyled","inlineStyleRanges":[{"length":9,"style":"BOLD","offset":14},{"offset":31,"style":"BOLD","length":22}]},{"text":" ","inlineStyleRanges":[],"entityRanges":[{"key":13,"offset":0,"length":1}],"key":"8m8pq","type":"atomic","depth":0,"data":{}},{"entityRanges":[],"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":6},{"length":7,"style":"BOLD","offset":17},{"length":11,"offset":27,"style":"BOLD"},{"style":"BOLD","offset":40,"length":31},{"style":"BOLD","length":19,"offset":89},{"style":"BOLD","offset":116,"length":4}],"text":"3. Click audit > allLogs > AllMetrics > Send to Log Analytics workspace. Set the name to Diagnostic settings. Click Save.","key":"eji9","data":{},"type":"unstyled","depth":0},{"depth":0,"text":" ","key":"bhq86","entityRanges":[{"key":14,"length":1,"offset":0}],"type":"atomic","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"data":{},"key":"3pc2f","text":"How to integrate Microsoft Defender for Cloud Apps","inlineStyleRanges":[],"depth":0,"type":"header-two"},{"data":{},"key":"5af44","inlineStyleRanges":[],"entityRanges":[],"text":"So now we have connected a couple of pieces of Microsoft 365 but what about Microsoft Defender for Cloud Apps? To manage incidents based on alerts generated by Microsoft Cloud App Security we'll need to create a security extension in Microsoft Defender for Cloud Apps.","depth":0,"type":"unstyled"},{"data":{},"entityRanges":[{"offset":12,"key":15,"length":40}],"key":"d29mr","type":"unstyled","inlineStyleRanges":[{"offset":12,"length":40,"style":"BOLD"},{"style":"BOLD","offset":64,"length":9},{"length":18,"offset":109,"style":"BOLD"}],"text":"1. Open the Microsoft Defender for Cloud Apps portal. Click the settings gear in the top right corner. Click Security Extension.","depth":0},{"key":"23p","text":" ","data":{},"type":"atomic","depth":0,"entityRanges":[{"key":16,"length":1,"offset":0}],"inlineStyleRanges":[]},{"depth":0,"entityRanges":[],"type":"unstyled","data":{},"text":"2. Click SIEM agents > Add SIEM agent > Azure Sentinel.","inlineStyleRanges":[{"style":"BOLD","length":11,"offset":9},{"offset":23,"style":"BOLD","length":14},{"style":"BOLD","length":14,"offset":40}],"key":"bos6i"},{"key":"r4po","inlineStyleRanges":[],"text":" ","entityRanges":[{"key":17,"offset":0,"length":1}],"type":"atomic","depth":0,"data":{}},{"entityRanges":[],"key":"d42jj","text":"3. Click Next > Close.","depth":0,"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":5},{"style":"BOLD","length":5,"offset":16}],"data":{}},{"key":"2jev1","text":"How to create a rule","entityRanges":[],"data":{},"depth":0,"inlineStyleRanges":[],"type":"header-two"},{"entityRanges":[],"text":"Rules are created to turn raw data into alerts and incidents. In short, they are used to detect threats and create alerts.","key":"3p75s","inlineStyleRanges":[],"type":"unstyled","data":{},"depth":0},{"key":"bcj07","text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Analytics > Rule templates > Search for Advanced Multistage. Click Advanced Multistage Attack Detection > Create rule.","type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[{"length":210,"style":"color-rgb(33,37,41)","offset":0},{"length":210,"style":"bgcolor-rgb(255,255,255)","offset":0},{"length":210,"offset":0,"style":"fontsize-16"},{"offset":0,"length":210,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"style":"BOLD","length":18,"offset":9},{"style":"BOLD","length":18,"offset":35},{"length":18,"offset":66,"style":"BOLD"},{"style":"BOLD","offset":92,"length":10},{"offset":104,"style":"BOLD","length":14},{"length":36,"style":"BOLD","offset":159},{"length":11,"style":"BOLD","offset":198}],"entityRanges":[]},{"text":" ","inlineStyleRanges":[],"key":"21clp","entityRanges":[{"length":1,"offset":0,"key":18}],"depth":0,"data":{},"type":"atomic"},{"entityRanges":[],"text":"2. Click Next: Automated response > Next: Review > Create","data":{},"key":"k1h8","inlineStyleRanges":[{"style":"BOLD","length":24,"offset":9},{"length":12,"offset":36,"style":"BOLD"},{"offset":51,"style":"BOLD","length":6}],"type":"unstyled","depth":0},{"depth":0,"data":{},"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"text":"How to create a workbook","key":"6tc4o"},{"key":"74r7i","data":{},"text":"Workbooks are like dashboards. They will show you your data in different graphs and ways. Let's create one now.","type":"unstyled","depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"key":"96t8r","inlineStyleRanges":[{"length":114,"style":"color-rgb(33,37,41)","offset":3},{"style":"bgcolor-rgb(255,255,255)","length":114,"offset":3},{"offset":3,"length":114,"style":"fontsize-16"},{"offset":3,"length":114,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"offset":9,"length":18,"style":"BOLD"},{"offset":35,"length":18,"style":"BOLD"},{"style":"BOLD","length":18,"offset":66},{"offset":92,"length":9,"style":"BOLD"},{"offset":104,"style":"BOLD","length":12}],"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Workbooks > Add workbook.","depth":0,"entityRanges":[],"data":{},"type":"unstyled"},{"entityRanges":[{"key":19,"offset":0,"length":1}],"key":"5hvse","depth":0,"inlineStyleRanges":[],"data":{},"text":" ","type":"atomic"},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":92,"offset":0},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":92},{"style":"fontsize-16","length":92,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":92,"offset":0},{"offset":9,"length":4,"style":"BOLD"},{"style":"BOLD","offset":56,"length":23},{"style":"BOLD","offset":87,"length":4}],"text":"2. Click Save (the floppy disk icon) > Enter a title of Azure Sign in and usage. Click Save.","data":{},"key":"586ma","entityRanges":[],"depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"text":" ","type":"atomic","entityRanges":[{"length":1,"key":20,"offset":0}],"key":"4nu8f","depth":0,"data":{}},{"depth":0,"text":"How to view a workbook","key":"ckr9o","entityRanges":[],"inlineStyleRanges":[],"data":{},"type":"header-two"},{"depth":0,"key":"77c76","inlineStyleRanges":[],"data":{},"text":"Now let's open the workbook so you know how to view it when you want to come back to it.","entityRanges":[],"type":"unstyled"},{"depth":0,"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":165},{"style":"bgcolor-rgb(255,255,255)","length":165,"offset":0},{"length":165,"style":"fontsize-16","offset":0},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":165},{"style":"BOLD","length":18,"offset":9},{"offset":35,"style":"BOLD","length":18},{"length":18,"style":"BOLD","offset":66},{"style":"BOLD","length":9,"offset":92},{"offset":104,"style":"BOLD","length":12},{"style":"BOLD","length":23,"offset":119},{"offset":145,"length":19,"style":"BOLD"}],"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Workbooks > My workbooks > Azure Sign in and usage > View saved workbook.","key":"fce10","type":"unstyled","data":{},"entityRanges":[]},{"data":{},"inlineStyleRanges":[],"text":" ","depth":0,"key":"famk6","entityRanges":[{"offset":0,"key":21,"length":1}],"type":"atomic"},{"key":"f2fnn","depth":0,"entityRanges":[],"data":{},"type":"unstyled","text":"There are a number of template workbooks you can use too. Why not try to set up one now?","inlineStyleRanges":[]},{"depth":0,"key":"avp0a","data":{},"text":"How to create a playbook","inlineStyleRanges":[],"entityRanges":[],"type":"header-two"},{"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"eeg0u","depth":0,"text":"Playbooks are like Power Automate flows. They have a trigger and then a set of actions that happen when the trigger is initiated. Before we can create the playbook let's set up for it first."},{"entityRanges":[],"data":{},"type":"unstyled","key":"720an","text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Automation >Playbook templates (Preview) > Block AAD user - Alert > Create playbook.","depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":170},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":170},{"offset":0,"style":"fontsize-16","length":170},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":170},{"offset":9,"length":18,"style":"BOLD"},{"offset":35,"style":"BOLD","length":18},{"length":18,"style":"BOLD","offset":66},{"offset":86,"length":11,"style":"BOLD"},{"offset":98,"style":"BOLD","length":28},{"offset":129,"style":"BOLD","length":22},{"length":15,"style":"BOLD","offset":154}]},{"key":"8k3lu","depth":0,"text":" ","entityRanges":[{"length":1,"key":22,"offset":0}],"inlineStyleRanges":[],"type":"atomic","data":{}},{"entityRanges":[],"depth":0,"key":"4vtnt","inlineStyleRanges":[{"length":17,"offset":9,"style":"BOLD"},{"offset":29,"length":23,"style":"BOLD"},{"length":31,"style":"BOLD","offset":55}],"data":{},"type":"unstyled","text":"2. Click Next: Connections > Next: Review and create > Create and continue to designer."},{"key":"d4rss","inlineStyleRanges":[{"style":"BOLD","length":16,"offset":49},{"offset":88,"length":25,"style":"BOLD"},{"style":"BOLD","offset":115,"length":7},{"length":22,"style":"BOLD","offset":154}],"type":"unstyled","entityRanges":[],"depth":0,"text":"3. Click each action in the playbook looking for yellow triangles. Once found click the exclamation in the circle. Sign in to your Microsoft 365 account. Accept the permissions.","data":{}},{"text":" ","type":"atomic","inlineStyleRanges":[],"key":"61so2","depth":0,"data":{},"entityRanges":[{"key":23,"length":1,"offset":0}]},{"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":9}],"type":"unstyled","data":{},"key":"elrl0","entityRanges":[],"text":"4. Click Save.","depth":0},{"data":{},"entityRanges":[],"key":"4im45","inlineStyleRanges":[{"style":"BOLD","offset":30,"length":16},{"length":40,"style":"BOLD","offset":54},{"length":17,"offset":102,"style":"BOLD"}],"type":"unstyled","text":"2. Enter the playbook name of Email-on-sign-in. Click Enable diagnostics logs in Log Analytics. Click Next: Connections.","depth":0},{"data":{},"key":"2897m","inlineStyleRanges":[],"entityRanges":[{"key":24,"offset":0,"length":1}],"text":" ","type":"atomic","depth":0},{"data":{},"key":"oqu4","inlineStyleRanges":[{"style":"BOLD","length":23,"offset":9},{"style":"BOLD","offset":35,"length":31}],"entityRanges":[],"depth":0,"text":"3. Click Next: Review and create > Create and continue to designer.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"41rt","text":"4. Set a condition","type":"unstyled"},{"text":"5. Under true click Add an action.","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"91isn","data":{}},{"entityRanges":[],"text":"6. Enter \"Send an email (V2) Office 365 Outlook\" in the search box. Click Send an email (V2).","type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[{"offset":10,"length":37,"style":"BOLD"},{"offset":74,"style":"BOLD","length":18}],"key":"7saur"},{"entityRanges":[{"key":25,"length":1,"offset":0}],"key":"8e24i","type":"atomic","depth":0,"inlineStyleRanges":[],"text":" ","data":{}},{"text":"7. Click Sign in. In the box that opens sign in to your account.","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":7,"offset":9}],"type":"unstyled","entityRanges":[],"data":{},"key":"dp4b8"},{"depth":0,"key":"1m6cg","data":{},"type":"atomic","entityRanges":[{"key":26,"offset":0,"length":1}],"text":" ","inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"key":"890t3","depth":0,"text":"How to review the logs","entityRanges":[],"type":"header-two"},{"inlineStyleRanges":[],"entityRanges":[],"text":"Microsoft Sentinel gathers logs and then allows you to search through the logs using Kusto Query Language (KQL), Let's check out one of the built-in queries.","key":"8cqnk","data":{},"depth":0,"type":"unstyled"},{"key":"bha63","data":{},"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance > Logs. Search for All SiginLogs events and click Run.","type":"unstyled","depth":0,"inlineStyleRanges":[{"length":139,"offset":0,"style":"color-rgb(33,37,41)"},{"length":139,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"length":139,"style":"fontsize-16","offset":0},{"length":139,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0},{"style":"BOLD","length":18,"offset":9},{"length":18,"style":"BOLD","offset":35},{"style":"BOLD","length":18,"offset":66},{"style":"BOLD","length":4,"offset":87},{"offset":104,"length":20,"style":"BOLD"},{"style":"BOLD","offset":135,"length":3}],"entityRanges":[]},{"entityRanges":[{"offset":0,"length":1,"key":27}],"key":"efqpc","depth":0,"type":"atomic","inlineStyleRanges":[],"text":" ","data":{}},{"entityRanges":[],"type":"header-two","depth":0,"key":"cqlbi","text":"Parts of Microsoft Sentinel","data":{},"inlineStyleRanges":[]},{"key":"4f9j8","text":"Workspace","type":"header-three","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[]},{"inlineStyleRanges":[],"depth":0,"type":"unstyled","key":"d80i5","entityRanges":[],"text":"Workspaces are like tenants. You can use one workspace to store everything or you can break down your Microsoft Sentinel deployment with multiple workspaces.","data":{}},{"data":{},"depth":0,"key":"5h6n8","inlineStyleRanges":[],"type":"header-three","entityRanges":[],"text":"Data connectors"},{"entityRanges":[],"inlineStyleRanges":[],"text":"Data connectors allow you to ingest data into Microsoft sentinel. Some sources simply require enabling it in Microsoft Sentinel, for example, Office 365 and Azure Active Directory. Other sources require a little more setup but it's still doable.","key":"ap4dv","depth":0,"type":"unstyled","data":{}},{"inlineStyleRanges":[],"key":"7g61n","depth":0,"type":"header-three","text":"Log retention and querying","data":{},"entityRanges":[]},{"data":{},"text":"After the logs are ingested into Microsoft Sentinel, the data is stored in Log Analytics where you can use Kusto Query Language (KQL) to parse and find the data you need.","entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"55kve"},{"entityRanges":[],"data":{},"text":"Workbooks","depth":0,"key":"cpi2d","type":"header-three","inlineStyleRanges":[]},{"type":"unstyled","key":"1is31","inlineStyleRanges":[],"text":"Workbooks are like dashboards. They are built on your log data and the KQL queries to view your data. Microsoft has a number of workbooks built-in to Microsoft Sentinel.","entityRanges":[],"depth":0,"data":{}},{"entityRanges":[],"depth":0,"data":{},"key":"8n7oe","inlineStyleRanges":[],"text":"Playbook","type":"header-three"},{"inlineStyleRanges":[],"data":{},"type":"unstyled","key":"9p8qs","entityRanges":[],"depth":0,"text":"Playbooks are a trigger with a set of rules that allow you to automatically respond to threats. A basic playbook would be \"When alert X is created then send an email\""},{"key":"v0if","type":"header-three","depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[],"text":"Analytic Rules"},{"key":"6col","text":"Rules help you get notified when something suspicious happens. They turn the raw data into alerts and incidents","type":"unstyled","depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[]},{"key":"1iiub","type":"header-three","inlineStyleRanges":[],"text":"Alerts","data":{},"entityRanges":[],"depth":0},{"entityRanges":[],"key":"1i0t4","data":{},"text":"Alerts are the basis for incidents. They indicate that someone or something attempted to perform a malicious or suspicious event. One or more alerts will generate incidents","type":"unstyled","depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"key":"7hh5m","entityRanges":[],"data":{},"text":"Incidents","type":"header-three","depth":0},{"inlineStyleRanges":[],"key":"163pt","depth":0,"text":"Microsoft Sentinel will group related alerts, assets, and other information into incidents that you can assign and work on.","type":"unstyled","entityRanges":[],"data":{}}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://azure.microsoft.com/en-us/pricing/details/microsoft-sentinel/","targetOption":"_blank"}},"1":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://azure.microsoft.com/en-us/free/"}},"2":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://portal.azure.com/?quickstart=true#blade/HubsExtension/BrowseResource/resourceType/microsoft.securityinsightsarg%2Fsentinel"},"type":"LINK"},"3":{"data":{"src":"https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png","alignment":"none","alt":"Create Microsoft Sentinel","width":"auto","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"4":{"data":{"alignment":"none","alt":"Create a new workspace","height":"auto","width":"auto","src":"https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png"},"mutability":"MUTABLE","type":"IMAGE"},"5":{"type":"IMAGE","data":{"alignment":"none","src":"https://i.ibb.co/S6Bz6JQ/resource-group.png","height":"auto","alt":"Resource group","width":"auto"},"mutability":"MUTABLE"},"6":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","width":"auto","alt":"Set the instance name and click Create","height":"auto","src":"https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png"}},"7":{"type":"IMAGE","data":{"alignment":"none","height":"auto","alt":"Add Microsoft Sentinel to a workspace","src":"https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png","width":"auto"},"mutability":"MUTABLE"},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","alt":"Microsoft Sentinel | Data connectors","alignment":"none","src":"https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png","width":"auto"}},"9":{"data":{"src":"https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png","height":"auto","width":"auto","alignment":"none","alt":"Configure Office 365 data connector"},"type":"IMAGE","mutability":"MUTABLE"},"10":{"type":"IMAGE","data":{"src":"https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png","width":"auto","alt":"Microsoft Sentinel Azure AD Data connector","alignment":"none","height":"auto"},"mutability":"MUTABLE"},"11":{"mutability":"MUTABLE","data":{"width":"auto","height":"auto","alt":"Configure Azure AD data connector","src":"https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png","alignment":"none"},"type":"IMAGE"},"12":{"data":{"height":"auto","url":"https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.EventHub%2Fnamespaces","alignment":"none","targetOption":"_blank","src":"https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png","alt":"Open diagnostic settings","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"13":{"type":"IMAGE","data":{"width":"auto","src":"https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png","alt":"Add diagnostic setting","alignment":"none","height":"auto"},"mutability":"MUTABLE"},"14":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"Create diagnostic settings","src":"https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png","height":"auto","width":"auto"}},"15":{"type":"LINK","mutability":"MUTABLE","data":{"alt":"Add workbook to Microsoft Sentinel","targetOption":"_blank","src":"https://i.ibb.co/qN9XsKj/Add-Workbook.png","url":"https://go.microsoft.com/fwlink/?linkid=2058038","height":"auto","alignment":"left","width":"auto"}},"16":{"type":"IMAGE","data":{"alignment":"none","alt":"Open Security Extensions","height":"auto","width":"auto","src":"https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png"},"mutability":"MUTABLE"},"17":{"data":{"width":"auto","alignment":"none","height":"auto","alt":"Add SIEM agent Microsoft Sentinel","src":"https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png"},"type":"IMAGE","mutability":"MUTABLE"},"18":{"type":"IMAGE","data":{"alt":"Create Microsoft Sentinel rule","width":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","alignment":"none","targetOption":"_blank","src":"https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png","height":"auto"},"mutability":"MUTABLE"},"19":{"mutability":"MUTABLE","data":{"width":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","alignment":"none","height":"auto","alt":"Add workbook to Microsoft Sentinel","targetOption":"_blank","src":"https://i.ibb.co/qN9XsKj/Add-Workbook.png"},"type":"IMAGE"},"20":{"mutability":"MUTABLE","type":"IMAGE","data":{"targetOption":"_blank","alt":"Save your new workbook","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","src":"https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png","height":"auto","alignment":"none","width":"auto"}},"21":{"data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","height":"auto","src":"https://i.ibb.co/ssNQGdy/View-saved-workbook.png","width":"auto","alt":"View saved workbook","alignment":"none","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"22":{"type":"IMAGE","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","height":"auto","width":"auto","alt":"Create a playbook","alignment":"none","src":"https://i.ibb.co/LCT6PrC/Create-a-playbook.png"}},"23":{"data":{"src":"https://i.ibb.co/bNDYmjx/Setup-connections.png","alignment":"none","width":"auto","alt":"Setup the connections","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"24":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","alt":"Create a playbook: Basic Settings","width":"auto","src":"https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png","alignment":"none"}},"25":{"mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png","width":"auto","height":"auto","alt":"Send an email (V2) Office 365 Outlook"},"type":"IMAGE"},"26":{"data":{"alignment":"none","alt":"Sign in to Office 365 Outlook","height":"auto","width":"auto","src":"https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png"},"type":"IMAGE","mutability":"MUTABLE"},"27":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alt":"View Microsoft Sentinel Logs","src":"https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png","height":"auto","alignment":"none"}},"28":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"left","src":"https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png","alt":"Sign in to Office 365 Outlook","height":"auto","width":"auto"}}}},"type":"article","sectionId":"QScYfSu74","datePublished":"2022/5/26","id":"LEyZMWBSt","description":"Microsoft Sentinel is Microsoft's cloud-based SIEM. It can be used to collect, detect, investigate, and respond to threats to your environment.","slug":"Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt","featuredImage":"https://i.ibb.co/qN9XsKj/Add-Workbook.png","title":"Collect, detect, investigate, and respond to security threats using Microsoft Sentinel","publish":true},
      nextContentSlug: 'Implement-and-manage-Microsoft-Defender-for-Cloud-Apps-7MQ3wE4wP',
      previousContentSlug: 'Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T',
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
                <div><h2>What is Microsoft Sentinel?</h2>
<p>Microsoft Sentinel is a scalable cloud-based security information and event management (SIEM). It's also a security orchestration, automation, and response (SOAR) solution. So what does that mean?</p>
<p>The easiest way to understand Microsoft Sentinel is to break down its capabilities.</p>
<ul>
<li>Collect data across all users, applications, devices, and infrastructure hardware for on-premises devices and cloud apps.</li>
<li>Detect previously undetected threats, and reduce false positives. Hunt for suspicious activity and Investigate threats using AI.</li>
<li>Respond to incidents with automation and orchestration.</li>
</ul>
<p>In short, it collects, detects, investigates, and responds to threats across your organization. I think it's probably even easier to understand by setting it up and getting started.</p>
<h2>What licenses are required for Microsoft Sentinel?</h2>
<p>Microsoft Sentinel requires a pay-as-you-use license to Microsoft Azure. Pricing can be seen <a href="https://azure.microsoft.com/en-us/pricing/details/microsoft-sentinel/" target="_blank">here</a>. You can also sign up for a free $200 credit by going <a href="https://azure.microsoft.com/en-us/free/" target="_blank">here</a>.</p>
<h2>What roles/permissions are available and required?</h2>
<p>First, the global admin has full access to create a Microsoft Sentinel workspace.</p>
<p><strong>Owner</strong>: Grants full access to manage all resources, including the ability to assign roles in Azure RBAC. This is the role that's received when you set up the workspace.</p>
<p><strong>Microsoft Sentinel Automation Contributor</strong>: Allows Microsoft Sentinel to add playbooks to automation rules. It is not meant for user accounts.</p>
<p><strong>Reader</strong>: View all resources but cannot make any changes.</p>
<p><strong>Managed Application Operator Role</strong>: Lets you manage  the managed application resources</p>
<p><strong>Contributor</strong>: Can perform everything the owner can except they can't assign roles.</p>
<p><strong>Logic App contributor</strong>: This allows you to manage logic apps including playbooks and incidents.</p>
<h2>Enable Microsoft Sentinel</h2>
<p>1. Open the Azure admin center (note, not the Azure AD admin center) &gt; Search for Microsoft Sentinel. Click <a href="https://portal.azure.com/?quickstart=true#blade/HubsExtension/BrowseResource/resourceType/microsoft.securityinsightsarg%2Fsentinel" target="_blank">Microsoft Sentinel</a>.</p>
<p>2. Click <strong>Create Microsoft Sentinel</strong>.</p>
<div ><img src="https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png" alt="Create Microsoft Sentinel" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Create a new workspace</strong>.</p>
<div ><img src="https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png" alt="Create a new workspace" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Create new</strong>. Set the name to <strong>Sentinel</strong>. Click <strong>OK</strong>.</p>
<div ><img src="https://i.ibb.co/S6Bz6JQ/resource-group.png" alt="Resource group" style="height: auto;width: auto"/></div>
<p>5. Set the instance name to <strong>Sentinel-Instance</strong>. Click <strong>Review + Create</strong>.</p>
<div ><img src="https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png" alt="Set the instance name and click Create" style="height: auto;width: auto"/></div>
<p>6. Click <strong>Create</strong>.</p>
<p>7. Click the <strong>Sentinel-Instance</strong>. Click <strong>Add</strong>.</p>
<div ><img src="https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png" alt="Add Microsoft Sentinel to a workspace" style="height: auto;width: auto"/></div>
<h2>Connect Microsoft Sentinel to data sources</h2>
<p>Next, we'll need to connect Microsoft Sentinel to a data source. In short, this means Microsft Sentinel will ingest the data from the service or app. Sometimes, you'll need to install an agent, for example, to monitor computers/servers. In Microsoft 365 case all we need to do is set up the connector.</p>
<h3>How to connect Office 365 with Microsoft Sentinal</h3>
<p>1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Data connectors</strong>. Search for <strong>Office 365</strong> and click on the <strong>connector</strong>. Click <strong>Open connector page</strong>.</p>
<div ><img src="https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png" alt="Microsoft Sentinel | Data connectors" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Exchange</strong>, <strong>SharePoint</strong>, and <strong>Teams</strong> checkboxes. Click <strong>Apply Changes</strong>.</p>
<div ><img src="https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png" alt="Configure Office 365 data connector" style="height: auto;width: auto"/></div>
<h3>How to connect Azure Active Directory with Microsoft Sentinal</h3>
<p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Data connectors</strong>. Search for <strong>Azure Active Directory</strong> and click on the <strong>connector</strong>. Click the <strong>Open connector page </strong>button.</span></p>
<div ><img src="https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png" alt="Microsoft Sentinel Azure AD Data connector" style="height: auto;width: auto"/></div>
<p>2. Click all the checkboxes under Configuration. Click <strong>Apply Changes</strong>.</p>
<div ><img src="https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png" alt="Configure Azure AD data connector" style="height: auto;width: auto"/></div>
<h2>Enable diagnostic settings</h2>
<p>Next, we'll enable the diagnostic settings to send the logs to Microsoft Sentinel.</p>
<p>1. Go to <strong>Microsoft Azure admin center</strong> &gt; search for <strong>monitor </strong>&gt; Click <strong>Monitor </strong>&gt; <strong>Diagnostic</strong> <strong>settings</strong>.</p>
<div ><img src="https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png" alt="Open diagnostic settings" style="height: auto;width: auto"/></div>
<p>2. Click your <strong>workspace</strong>. Click <strong>Add diagnostic setting</strong>.</p>
<div ><img src="https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png" alt="Add diagnostic setting" style="height: auto;width: auto"/></div>
<p>3. Click <strong>audit </strong>&gt; <strong>allLogs</strong> &gt; <strong>AllMetrics </strong>&gt; <strong>Send to Log Analytics workspace</strong>. Set the name to <strong>Diagnostic settings</strong>. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png" alt="Create diagnostic settings" style="height: auto;width: auto"/></div>
<h2>How to integrate Microsoft Defender for Cloud Apps</h2>
<p>So now we have connected a couple of pieces of Microsoft 365 but what about Microsoft Defender for Cloud Apps? To manage incidents based on alerts generated by Microsoft Cloud App Security we'll need to create a security extension in Microsoft Defender for Cloud Apps.</p>
<p>1. Open the <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank"><strong>Microsoft Defender for Cloud Apps portal</strong></a>. Click the <strong>settings </strong>gear in the top right corner. Click <strong>Security Extension</strong>.</p>
<div ><img src="https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png" alt="Open Security Extensions" style="height: auto;width: auto"/></div>
<p>2. Click <strong>SIEM agents</strong> &gt; <strong>Add SIEM agent</strong> &gt; <strong>Azure Sentinel</strong>.</p>
<div ><img src="https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png" alt="Add SIEM agent Microsoft Sentinel" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Next </strong>&gt; <strong>Close</strong>.</p>
<h2>How to create a rule</h2>
<p>Rules are created to turn raw data into alerts and incidents. In short, they are used to detect threats and create alerts.</p>
<p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Analytics </strong>&gt; <strong>Rule templates</strong> &gt; Search for Advanced Multistage. Click <strong>Advanced Multistage Attack Detection</strong> &gt; <strong>Create rule</strong>.</span></p>
<div ><img src="https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png" alt="Create Microsoft Sentinel rule" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Next: Automated response</strong> &gt; <strong>Next: Review</strong> &gt; <strong>Create</strong></p>
<h2>How to create a workbook</h2>
<p>Workbooks are like dashboards. They will show you your data in different graphs and ways. Let's create one now.</p>
<p>1. <span >Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Workbooks</strong> &gt; <strong>Add workbook</strong>.</span></p>
<div ><img src="https://i.ibb.co/qN9XsKj/Add-Workbook.png" alt="Add workbook to Microsoft Sentinel" style="height: auto;width: auto"/></div>
<p><span >2. Click <strong>Save</strong> (the floppy disk icon) &gt; Enter a title of <strong>Azure Sign in and usage</strong>. Click <strong>Save</strong>.</span></p>
<div ><img src="https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png" alt="Save your new workbook" style="height: auto;width: auto"/></div>
<h2>How to view a workbook</h2>
<p>Now let's open the workbook so you know how to view it when you want to come back to it.</p>
<p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Workbooks</strong> &gt; <strong>My workbooks</strong> &gt; <strong>Azure Sign in and usage</strong> &gt; <strong>View saved workbook</strong>.</span></p>
<div ><img src="https://i.ibb.co/ssNQGdy/View-saved-workbook.png" alt="View saved workbook" style="height: auto;width: auto"/></div>
<p>There are a number of template workbooks you can use too. Why not try to set up one now?</p>
<h2>How to create a playbook</h2>
<p>Playbooks are like Power Automate flows. They have a trigger and then a set of actions that happen when the trigger is initiated. Before we can create the playbook let's set up for it first.</p>
<p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. <strong>Automation </strong>&gt;<strong>Playbook templates (Preview)</strong> &gt; <strong>Block AAD user - Alert</strong> &gt; <strong>Create playbook</strong>.</span></p>
<div ><img src="https://i.ibb.co/LCT6PrC/Create-a-playbook.png" alt="Create a playbook" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Next: Connections</strong> &gt; <strong>Next: Review and create</strong> &gt; <strong>Create and continue to designer</strong>.</p>
<p>3. Click each action in the playbook looking for <strong>yellow triangles</strong>. Once found click the <strong>exclamation in the circle</strong>. <strong>Sign in</strong> to your Microsoft 365 account. <strong>Accept the permissions</strong>.</p>
<div ><img src="https://i.ibb.co/bNDYmjx/Setup-connections.png" alt="Setup the connections" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Save</strong>.</p>
<p>2. Enter the playbook name of <strong>Email-on-sign-in</strong>. Click <strong>Enable diagnostics logs in Log Analytics</strong>. Click <strong>Next: Connections</strong>.</p>
<div ><img src="https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png" alt="Create a playbook: Basic Settings" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Next: Review and create</strong> &gt; <strong>Create and continue to designer</strong>.</p>
<p>4. Set a condition</p>
<p>5. Under true click Add an action.</p>
<p>6. Enter "<strong>Send an email (V2) Office 365 Outlook</strong>" in the search box. Click <strong>Send an email (V2)</strong>.</p>
<div ><img src="https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png" alt="Send an email (V2) Office 365 Outlook" style="height: auto;width: auto"/></div>
<p>7. Click <strong>Sign in</strong>. In the box that opens sign in to your account.</p>
<div ><img src="https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png" alt="Sign in to Office 365 Outlook" style="height: auto;width: auto"/></div>
<h2>How to review the logs</h2>
<p>Microsoft Sentinel gathers logs and then allows you to search through the logs using Kusto Query Language (KQL), Let's check out one of the built-in queries.</p>
<p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong> &gt; <strong>Logs</strong>. Search for <strong>All SiginLogs events</strong> and click <strong>Run</strong>.</span></p>
<div ><img src="https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png" alt="View Microsoft Sentinel Logs" style="height: auto;width: auto"/></div>
<h2>Parts of Microsoft Sentinel</h2>
<h3>Workspace</h3>
<p>Workspaces are like tenants. You can use one workspace to store everything or you can break down your Microsoft Sentinel deployment with multiple workspaces.</p>
<h3>Data connectors</h3>
<p>Data connectors allow you to ingest data into Microsoft sentinel. Some sources simply require enabling it in Microsoft Sentinel, for example, Office 365 and Azure Active Directory. Other sources require a little more setup but it's still doable.</p>
<h3>Log retention and querying</h3>
<p>After the logs are ingested into Microsoft Sentinel, the data is stored in Log Analytics where you can use Kusto Query Language (KQL) to parse and find the data you need.</p>
<h3>Workbooks</h3>
<p>Workbooks are like dashboards. They are built on your log data and the KQL queries to view your data. Microsoft has a number of workbooks built-in to Microsoft Sentinel.</p>
<h3>Playbook</h3>
<p>Playbooks are a trigger with a set of rules that allow you to automatically respond to threats. A basic playbook would be "When alert X is created then send an email"</p>
<h3>Analytic Rules</h3>
<p>Rules help you get notified when something suspicious happens. They turn the raw data into alerts and incidents</p>
<h3>Alerts</h3>
<p>Alerts are the basis for incidents. They indicate that someone or something attempted to perform a malicious or suspicious event. One or more alerts will generate incidents</p>
<h3>Incidents</h3>
<p>Microsoft Sentinel will group related alerts, assets, and other information into incidents that you can assign and work on.</p>
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
