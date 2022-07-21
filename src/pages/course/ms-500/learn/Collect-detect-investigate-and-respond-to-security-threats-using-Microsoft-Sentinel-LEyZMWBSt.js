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
      article: {"description":"Microsoft Sentinel is Microsoft's cloud-based SIEM. It can be used to collect, detect, investigate, and respond to threats to your environment.","title":"Collect, detect, investigate, and respond to security threats using Microsoft Sentinel","featuredImage":"https://i.ibb.co/qN9XsKj/Add-Workbook.png","id":"LEyZMWBSt","datePublished":"2022/5/26","publish":true,"article":{"blocks":[{"key":"ed0a2","entityRanges":[],"text":"What is Microsoft Sentinel?","depth":0,"inlineStyleRanges":[],"type":"header-two","data":{}},{"depth":0,"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"9d5vf","text":"Microsoft Sentinel is a scalable cloud-based security information and event management (SIEM). It's also a security orchestration, automation, and response (SOAR) solution. So what does that mean?"},{"inlineStyleRanges":[],"key":"29qeu","entityRanges":[],"data":{},"depth":0,"text":"The easiest way to understand Microsoft Sentinel is to break down its capabilities.","type":"unstyled"},{"entityRanges":[],"key":"7vjtb","data":{},"inlineStyleRanges":[],"type":"unordered-list-item","depth":0,"text":"Collect data across all users, applications, devices, and infrastructure hardware for on-premises devices and cloud apps."},{"data":{},"type":"unordered-list-item","text":"Detect previously undetected threats, and reduce false positives. Hunt for suspicious activity and Investigate threats using AI.","key":"4l70n","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"depth":0,"type":"unordered-list-item","key":"7or9u","inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"Respond to incidents with automation and orchestration."},{"entityRanges":[],"key":"1lefu","type":"unstyled","depth":0,"inlineStyleRanges":[],"data":{},"text":"In short, it collects, detects, investigates, and responds to threats across your organization. I think it's probably even easier to understand by setting it up and getting started."},{"entityRanges":[],"key":"50o4o","inlineStyleRanges":[],"depth":0,"type":"header-two","data":{},"text":"What licenses are required for Microsoft Sentinel?"},{"text":"Microsoft Sentinel requires a pay-as-you-use license to Microsoft Azure. Pricing can be seen here. You can also sign up for a free $200 credit by going here.","inlineStyleRanges":[],"key":"fvk5q","depth":0,"entityRanges":[{"length":4,"offset":93,"key":0},{"offset":152,"length":4,"key":1}],"type":"unstyled","data":{}},{"data":{},"text":"What roles/permissions are available and required?","type":"header-two","entityRanges":[],"depth":0,"key":"7ragr","inlineStyleRanges":[]},{"key":"fkjq4","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"unstyled","text":"First, the global admin has full access to create a Microsoft Sentinel workspace."},{"text":"Owner: Grants full access to manage all resources, including the ability to assign roles in Azure RBAC. This is the role that's received when you set up the workspace.","type":"unstyled","data":{},"key":"8vof1","entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":5}]},{"key":"39neb","depth":0,"text":"Microsoft Sentinel Automation Contributor: Allows Microsoft Sentinel to add playbooks to automation rules. It is not meant for user accounts.","entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":41,"offset":0}]},{"text":"Reader: View all resources but cannot make any changes.","depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[{"style":"BOLD","length":6,"offset":0}],"entityRanges":[],"key":"67nco"},{"key":"2s5rp","data":{},"text":"Managed Application Operator Role: Lets you manage  the managed application resources","type":"unstyled","depth":0,"inlineStyleRanges":[{"length":33,"style":"BOLD","offset":0}],"entityRanges":[]},{"depth":0,"data":{},"type":"unstyled","text":"Contributor: Can perform everything the owner can except they can't assign roles.","key":"4k6fk","inlineStyleRanges":[{"offset":0,"style":"BOLD","length":11}],"entityRanges":[]},{"key":"8fogc","data":{},"type":"unstyled","entityRanges":[],"text":"Logic App contributor: This allows you to manage logic apps including playbooks and incidents.","inlineStyleRanges":[{"style":"BOLD","length":21,"offset":0}],"depth":0},{"inlineStyleRanges":[],"depth":0,"key":"c69o8","type":"header-two","entityRanges":[],"data":{},"text":"Enable Microsoft Sentinel"},{"data":{},"type":"unstyled","key":"dg16u","entityRanges":[{"key":2,"length":18,"offset":108}],"inlineStyleRanges":[],"depth":0,"text":"1. Open the Azure admin center (note, not the Azure AD admin center) > Search for Microsoft Sentinel. Click Microsoft Sentinel."},{"depth":0,"text":"2. Click Create Microsoft Sentinel.","key":"qvt2","data":{},"type":"unstyled","inlineStyleRanges":[{"offset":9,"length":25,"style":"BOLD"}],"entityRanges":[]},{"key":"764t2","depth":0,"type":"atomic","inlineStyleRanges":[],"entityRanges":[{"key":3,"offset":0,"length":1}],"data":{},"text":" "},{"entityRanges":[],"inlineStyleRanges":[{"length":22,"style":"BOLD","offset":9}],"type":"unstyled","key":"a9bd4","depth":0,"data":{},"text":"3. Click Create a new workspace."},{"key":"b010r","inlineStyleRanges":[],"type":"atomic","depth":0,"data":{},"entityRanges":[{"length":1,"key":4,"offset":0}],"text":" "},{"type":"unstyled","data":{},"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":10},{"offset":37,"length":8,"style":"BOLD"},{"style":"BOLD","length":2,"offset":53}],"text":"4. Click Create new. Set the name to Sentinel. Click OK.","key":"74v4c","depth":0},{"entityRanges":[{"length":1,"offset":0,"key":5}],"depth":0,"data":{},"text":" ","key":"70ni9","type":"atomic","inlineStyleRanges":[]},{"data":{},"type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"length":17,"style":"BOLD","offset":28},{"offset":53,"length":15,"style":"BOLD"}],"text":"5. Set the instance name to Sentinel-Instance. Click Review + Create.","depth":0,"key":"1bb5a"},{"text":" ","depth":0,"key":"e414s","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"key":6,"length":1}],"data":{}},{"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":6,"offset":9}],"data":{},"key":"a100p","text":"6. Click Create.","type":"unstyled","depth":0},{"text":"7. Click the Sentinel-Instance. Click Add.","type":"unstyled","depth":0,"key":"30rjv","inlineStyleRanges":[{"style":"BOLD","length":17,"offset":13},{"style":"BOLD","offset":38,"length":3}],"entityRanges":[],"data":{}},{"text":" ","depth":0,"inlineStyleRanges":[],"key":"fcu8c","data":{},"entityRanges":[{"length":1,"offset":0,"key":7}],"type":"atomic"},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"header-two","key":"dojjp","text":"Connect Microsoft Sentinel to data sources"},{"depth":0,"entityRanges":[],"key":"6tb7j","type":"unstyled","text":"Next, we'll need to connect Microsoft Sentinel to a data source. In short, this means Microsft Sentinel will ingest the data from the service or app. Sometimes, you'll need to install an agent, for example, to monitor computers/servers. In Microsoft 365 case all we need to do is set up the connector.","inlineStyleRanges":[],"data":{}},{"data":{},"inlineStyleRanges":[],"type":"header-three","entityRanges":[],"depth":0,"key":"292fc","text":"How to connect Office 365 with Microsoft Sentinal"},{"key":"77p83","depth":0,"data":{},"inlineStyleRanges":[{"length":18,"style":"BOLD","offset":9},{"style":"BOLD","length":18,"offset":35},{"length":18,"offset":66,"style":"BOLD"},{"length":15,"offset":92,"style":"BOLD"},{"offset":120,"style":"BOLD","length":10},{"style":"BOLD","length":9,"offset":148},{"style":"BOLD","offset":165,"length":19}],"type":"unstyled","entityRanges":[],"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Data connectors. Search for Office 365 and click on the connector. Click Open connector page."},{"type":"atomic","depth":0,"entityRanges":[{"length":1,"key":8,"offset":0}],"inlineStyleRanges":[],"text":" ","data":{},"key":"cp3nt"},{"key":"acqbe","text":"2. Click Exchange, SharePoint, and Teams checkboxes. Click Apply Changes.","data":{},"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":8,"offset":9},{"length":10,"offset":19,"style":"BOLD"},{"length":5,"style":"BOLD","offset":35},{"length":13,"offset":59,"style":"BOLD"}],"type":"unstyled","entityRanges":[]},{"entityRanges":[{"key":9,"length":1,"offset":0}],"data":{},"text":" ","inlineStyleRanges":[],"type":"atomic","key":"lral","depth":0},{"inlineStyleRanges":[],"key":"dnq6t","data":{},"text":"How to connect Azure Active Directory with Microsoft Sentinal","type":"header-three","entityRanges":[],"depth":0},{"data":{},"depth":0,"key":"28jbv","type":"unstyled","entityRanges":[],"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Data connectors. Search for Azure Active Directory and click on the connector. Click the Open connector page button.","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":208},{"length":208,"style":"bgcolor-rgb(255,255,255)","offset":0},{"style":"fontsize-16","length":208,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":208},{"style":"BOLD","length":18,"offset":9},{"length":18,"offset":35,"style":"BOLD"},{"offset":66,"length":18,"style":"BOLD"},{"length":15,"offset":92,"style":"BOLD"},{"offset":120,"length":22,"style":"BOLD"},{"style":"BOLD","length":9,"offset":160},{"style":"BOLD","length":20,"offset":181}]},{"data":{},"entityRanges":[{"length":1,"offset":0,"key":10}],"inlineStyleRanges":[],"type":"atomic","text":" ","key":"d7otq","depth":0},{"text":"2. Click all the checkboxes under Configuration. Click Apply Changes.","depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","length":13,"offset":55}],"entityRanges":[],"key":"4ciqc","type":"unstyled"},{"inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"offset":0,"key":11}],"depth":0,"data":{},"key":"ef40l","type":"atomic"},{"depth":0,"text":"Enable diagnostic settings","type":"header-two","entityRanges":[],"key":"1f7qd","inlineStyleRanges":[],"data":{}},{"key":"auriu","inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"Next, we'll enable the diagnostic settings to send the logs to Microsoft Sentinel.","type":"unstyled","depth":0},{"entityRanges":[],"text":"1. Go to Microsoft Azure admin center > search for monitor > Click Monitor > Diagnostic settings.","depth":0,"key":"eepio","inlineStyleRanges":[{"length":28,"offset":9,"style":"BOLD"},{"offset":51,"length":8,"style":"BOLD"},{"style":"BOLD","length":8,"offset":67},{"length":10,"style":"BOLD","offset":77},{"length":8,"style":"BOLD","offset":88}],"data":{},"type":"unstyled"},{"entityRanges":[{"length":1,"key":12,"offset":0}],"key":"ega1u","depth":0,"data":{},"type":"atomic","inlineStyleRanges":[],"text":" "},{"data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":14,"style":"BOLD","length":9},{"style":"BOLD","length":22,"offset":31}],"text":"2. Click your workspace. Click Add diagnostic setting.","key":"3upqf","entityRanges":[]},{"text":" ","entityRanges":[{"key":13,"length":1,"offset":0}],"key":"8m8pq","data":{},"inlineStyleRanges":[],"depth":0,"type":"atomic"},{"data":{},"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":6},{"offset":17,"length":7,"style":"BOLD"},{"style":"BOLD","length":11,"offset":27},{"style":"BOLD","length":31,"offset":40},{"length":19,"style":"BOLD","offset":89},{"offset":116,"style":"BOLD","length":4}],"depth":0,"type":"unstyled","entityRanges":[],"key":"eji9","text":"3. Click audit > allLogs > AllMetrics > Send to Log Analytics workspace. Set the name to Diagnostic settings. Click Save."},{"inlineStyleRanges":[],"text":" ","data":{},"key":"bhq86","entityRanges":[{"key":14,"offset":0,"length":1}],"depth":0,"type":"atomic"},{"depth":0,"type":"header-two","key":"3pc2f","text":"How to integrate Microsoft Defender for Cloud Apps","data":{},"entityRanges":[],"inlineStyleRanges":[]},{"inlineStyleRanges":[],"type":"unstyled","data":{},"key":"5af44","depth":0,"entityRanges":[],"text":"So now we have connected a couple of pieces of Microsoft 365 but what about Microsoft Defender for Cloud Apps? To manage incidents based on alerts generated by Microsoft Cloud App Security we'll need to create a security extension in Microsoft Defender for Cloud Apps."},{"type":"unstyled","data":{},"text":"1. Open the Microsoft Defender for Cloud Apps portal. Click the settings gear in the top right corner. Click Security Extension.","key":"d29mr","inlineStyleRanges":[{"length":40,"offset":12,"style":"BOLD"},{"length":9,"offset":64,"style":"BOLD"},{"length":18,"style":"BOLD","offset":109}],"depth":0,"entityRanges":[{"offset":12,"key":15,"length":40}]},{"data":{},"entityRanges":[{"length":1,"key":16,"offset":0}],"type":"atomic","inlineStyleRanges":[],"text":" ","key":"23p","depth":0},{"entityRanges":[],"key":"bos6i","data":{},"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":11},{"style":"BOLD","length":14,"offset":23},{"style":"BOLD","length":14,"offset":40}],"type":"unstyled","depth":0,"text":"2. Click SIEM agents > Add SIEM agent > Azure Sentinel."},{"inlineStyleRanges":[],"text":" ","depth":0,"entityRanges":[{"key":17,"length":1,"offset":0}],"data":{},"key":"r4po","type":"atomic"},{"depth":0,"data":{},"type":"unstyled","key":"d42jj","text":"3. Click Next > Close.","inlineStyleRanges":[{"length":5,"offset":9,"style":"BOLD"},{"offset":16,"length":5,"style":"BOLD"}],"entityRanges":[]},{"key":"2jev1","type":"header-two","text":"How to create a rule","inlineStyleRanges":[],"entityRanges":[],"data":{},"depth":0},{"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"data":{},"text":"Rules are created to turn raw data into alerts and incidents. In short, they are used to detect threats and create alerts.","key":"3p75s","depth":0},{"data":{},"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Analytics > Rule templates > Search for Advanced Multistage. Click Advanced Multistage Attack Detection > Create rule.","inlineStyleRanges":[{"length":210,"style":"color-rgb(33,37,41)","offset":0},{"style":"bgcolor-rgb(255,255,255)","length":210,"offset":0},{"offset":0,"style":"fontsize-16","length":210},{"offset":0,"length":210,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"style":"BOLD","offset":9,"length":18},{"offset":35,"length":18,"style":"BOLD"},{"style":"BOLD","length":18,"offset":66},{"style":"BOLD","length":10,"offset":92},{"offset":104,"length":14,"style":"BOLD"},{"style":"BOLD","length":36,"offset":159},{"offset":198,"length":11,"style":"BOLD"}],"type":"unstyled","key":"bcj07","depth":0,"entityRanges":[]},{"text":" ","entityRanges":[{"offset":0,"key":18,"length":1}],"type":"atomic","key":"21clp","data":{},"inlineStyleRanges":[],"depth":0},{"key":"k1h8","depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":24},{"style":"BOLD","offset":36,"length":12},{"length":6,"style":"BOLD","offset":51}],"text":"2. Click Next: Automated response > Next: Review > Create","type":"unstyled"},{"entityRanges":[],"key":"6tc4o","data":{},"depth":0,"inlineStyleRanges":[],"type":"header-two","text":"How to create a workbook"},{"data":{},"inlineStyleRanges":[],"depth":0,"key":"74r7i","text":"Workbooks are like dashboards. They will show you your data in different graphs and ways. Let's create one now.","type":"unstyled","entityRanges":[]},{"entityRanges":[],"depth":0,"type":"unstyled","key":"96t8r","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":3,"length":114},{"length":114,"style":"bgcolor-rgb(255,255,255)","offset":3},{"length":114,"offset":3,"style":"fontsize-16"},{"offset":3,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":114},{"length":18,"style":"BOLD","offset":9},{"length":18,"offset":35,"style":"BOLD"},{"style":"BOLD","offset":66,"length":18},{"style":"BOLD","length":9,"offset":92},{"length":12,"offset":104,"style":"BOLD"}],"data":{},"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Workbooks > Add workbook."},{"depth":0,"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"length":1,"key":19}],"key":"5hvse","text":" ","data":{}},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":92},{"length":92,"style":"bgcolor-rgb(255,255,255)","offset":0},{"style":"fontsize-16","offset":0,"length":92},{"length":92,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"style":"BOLD","offset":9,"length":4},{"length":23,"offset":56,"style":"BOLD"},{"length":4,"style":"BOLD","offset":87}],"data":{},"entityRanges":[],"text":"2. Click Save (the floppy disk icon) > Enter a title of Azure Sign in and usage. Click Save.","key":"586ma","type":"unstyled","depth":0},{"entityRanges":[{"offset":0,"length":1,"key":20}],"inlineStyleRanges":[],"key":"4nu8f","depth":0,"text":" ","data":{},"type":"atomic"},{"inlineStyleRanges":[],"data":{},"text":"How to view a workbook","entityRanges":[],"key":"ckr9o","depth":0,"type":"header-two"},{"entityRanges":[],"data":{},"depth":0,"text":"Now let's open the workbook so you know how to view it when you want to come back to it.","inlineStyleRanges":[],"key":"77c76","type":"unstyled"},{"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":165},{"length":165,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"length":165,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":165},{"offset":9,"length":18,"style":"BOLD"},{"style":"BOLD","length":18,"offset":35},{"style":"BOLD","offset":66,"length":18},{"length":9,"offset":92,"style":"BOLD"},{"style":"BOLD","offset":104,"length":12},{"style":"BOLD","offset":119,"length":23},{"style":"BOLD","offset":145,"length":19}],"key":"fce10","data":{},"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Workbooks > My workbooks > Azure Sign in and usage > View saved workbook.","depth":0,"type":"unstyled","entityRanges":[]},{"text":" ","depth":0,"key":"famk6","entityRanges":[{"offset":0,"length":1,"key":21}],"type":"atomic","data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"f2fnn","data":{},"text":"There are a number of template workbooks you can use too. Why not try to set up one now?","type":"unstyled"},{"data":{},"entityRanges":[],"depth":0,"key":"avp0a","text":"How to create a playbook","inlineStyleRanges":[],"type":"header-two"},{"key":"eeg0u","depth":0,"inlineStyleRanges":[],"text":"Playbooks are like Power Automate flows. They have a trigger and then a set of actions that happen when the trigger is initiated. Before we can create the playbook let's set up for it first.","type":"unstyled","data":{},"entityRanges":[]},{"key":"720an","depth":0,"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Automation >Playbook templates (Preview) > Block AAD user - Alert > Create playbook.","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":170},{"length":170,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"style":"fontsize-16","length":170},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":170,"offset":0},{"style":"BOLD","length":18,"offset":9},{"length":18,"offset":35,"style":"BOLD"},{"offset":66,"length":18,"style":"BOLD"},{"style":"BOLD","offset":86,"length":11},{"style":"BOLD","offset":98,"length":28},{"style":"BOLD","offset":129,"length":22},{"style":"BOLD","length":15,"offset":154}],"type":"unstyled","entityRanges":[],"data":{}},{"type":"atomic","inlineStyleRanges":[],"entityRanges":[{"key":22,"length":1,"offset":0}],"text":" ","key":"8k3lu","data":{},"depth":0},{"text":"2. Click Next: Connections > Next: Review and create > Create and continue to designer.","key":"4vtnt","depth":0,"type":"unstyled","inlineStyleRanges":[{"length":17,"offset":9,"style":"BOLD"},{"style":"BOLD","length":23,"offset":29},{"offset":55,"length":31,"style":"BOLD"}],"entityRanges":[],"data":{}},{"entityRanges":[],"key":"d4rss","depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[{"offset":49,"style":"BOLD","length":16},{"length":25,"style":"BOLD","offset":88},{"length":7,"offset":115,"style":"BOLD"},{"offset":154,"style":"BOLD","length":22}],"text":"3. Click each action in the playbook looking for yellow triangles. Once found click the exclamation in the circle. Sign in to your Microsoft 365 account. Accept the permissions."},{"depth":0,"inlineStyleRanges":[],"key":"61so2","entityRanges":[{"length":1,"key":23,"offset":0}],"data":{},"type":"atomic","text":" "},{"data":{},"type":"unstyled","inlineStyleRanges":[{"offset":9,"length":4,"style":"BOLD"}],"depth":0,"entityRanges":[],"text":"4. Click Save.","key":"elrl0"},{"text":"2. Enter the playbook name of Email-on-sign-in. Click Enable diagnostics logs in Log Analytics. Click Next: Connections.","key":"4im45","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","length":16,"offset":30},{"offset":54,"style":"BOLD","length":40},{"length":17,"style":"BOLD","offset":102}],"type":"unstyled"},{"key":"2897m","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":24,"length":1}],"text":" ","type":"atomic","data":{},"depth":0},{"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":23,"offset":9},{"length":31,"style":"BOLD","offset":35}],"text":"3. Click Next: Review and create > Create and continue to designer.","depth":0,"key":"oqu4","entityRanges":[],"data":{}},{"key":"41rt","inlineStyleRanges":[],"data":{},"entityRanges":[],"depth":0,"text":"4. Set a condition","type":"unstyled"},{"text":"5. Under true click Add an action.","entityRanges":[],"data":{},"type":"unstyled","key":"91isn","inlineStyleRanges":[],"depth":0},{"type":"unstyled","key":"7saur","inlineStyleRanges":[{"style":"BOLD","length":37,"offset":10},{"style":"BOLD","length":18,"offset":74}],"text":"6. Enter \"Send an email (V2) Office 365 Outlook\" in the search box. Click Send an email (V2).","depth":0,"entityRanges":[],"data":{}},{"type":"atomic","entityRanges":[{"offset":0,"key":25,"length":1}],"data":{},"depth":0,"inlineStyleRanges":[],"key":"8e24i","text":" "},{"key":"dp4b8","depth":0,"text":"7. Click Sign in. In the box that opens sign in to your account.","data":{},"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":7}],"type":"unstyled"},{"depth":0,"data":{},"inlineStyleRanges":[],"key":"1m6cg","text":" ","entityRanges":[{"offset":0,"key":26,"length":1}],"type":"atomic"},{"depth":0,"type":"header-two","text":"How to review the logs","entityRanges":[],"data":{},"inlineStyleRanges":[],"key":"890t3"},{"data":{},"key":"8cqnk","depth":0,"type":"unstyled","text":"Microsoft Sentinel gathers logs and then allows you to search through the logs using Kusto Query Language (KQL), Let's check out one of the built-in queries.","inlineStyleRanges":[],"entityRanges":[]},{"type":"unstyled","entityRanges":[],"depth":0,"key":"bha63","data":{},"text":"1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance > Logs. Search for All SiginLogs events and click Run.","inlineStyleRanges":[{"offset":0,"length":139,"style":"color-rgb(33,37,41)"},{"length":139,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"length":139,"offset":0,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":139,"offset":0},{"offset":9,"style":"BOLD","length":18},{"length":18,"offset":35,"style":"BOLD"},{"style":"BOLD","offset":66,"length":18},{"length":4,"offset":87,"style":"BOLD"},{"length":20,"style":"BOLD","offset":104},{"style":"BOLD","length":3,"offset":135}]},{"text":" ","entityRanges":[{"offset":0,"key":27,"length":1}],"key":"efqpc","depth":0,"data":{},"type":"atomic","inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"depth":0,"key":"cqlbi","entityRanges":[],"text":"Parts of Microsoft Sentinel","type":"header-two"},{"entityRanges":[],"data":{},"text":"Workspace","depth":0,"type":"header-three","inlineStyleRanges":[],"key":"4f9j8"},{"text":"Workspaces are like tenants. You can use one workspace to store everything or you can break down your Microsoft Sentinel deployment with multiple workspaces.","entityRanges":[],"depth":0,"type":"unstyled","data":{},"key":"d80i5","inlineStyleRanges":[]},{"text":"Data connectors","depth":0,"type":"header-three","entityRanges":[],"inlineStyleRanges":[],"key":"5h6n8","data":{}},{"type":"unstyled","entityRanges":[],"key":"ap4dv","inlineStyleRanges":[],"depth":0,"text":"Data connectors allow you to ingest data into Microsoft sentinel. Some sources simply require enabling it in Microsoft Sentinel, for example, Office 365 and Azure Active Directory. Other sources require a little more setup but it's still doable.","data":{}},{"depth":0,"inlineStyleRanges":[],"type":"header-three","entityRanges":[],"key":"7g61n","data":{},"text":"Log retention and querying"},{"type":"unstyled","entityRanges":[],"depth":0,"key":"55kve","data":{},"inlineStyleRanges":[],"text":"After the logs are ingested into Microsoft Sentinel, the data is stored in Log Analytics where you can use Kusto Query Language (KQL) to parse and find the data you need."},{"data":{},"key":"cpi2d","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"header-three","text":"Workbooks"},{"entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"Workbooks are like dashboards. They are built on your log data and the KQL queries to view your data. Microsoft has a number of workbooks built-in to Microsoft Sentinel.","depth":0,"key":"1is31","type":"unstyled"},{"depth":0,"key":"8n7oe","text":"Playbook","inlineStyleRanges":[],"data":{},"type":"header-three","entityRanges":[]},{"depth":0,"type":"unstyled","data":{},"key":"9p8qs","inlineStyleRanges":[],"entityRanges":[],"text":"Playbooks are a trigger with a set of rules that allow you to automatically respond to threats. A basic playbook would be \"When alert X is created then send an email\""},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"header-three","text":"Analytic Rules","key":"v0if","data":{}},{"key":"6col","type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"text":"Rules help you get notified when something suspicious happens. They turn the raw data into alerts and incidents","depth":0,"data":{}},{"inlineStyleRanges":[],"key":"1iiub","data":{},"text":"Alerts","depth":0,"entityRanges":[],"type":"header-three"},{"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled","text":"Alerts are the basis for incidents. They indicate that someone or something attempted to perform a malicious or suspicious event. One or more alerts will generate incidents","data":{},"depth":0,"key":"1i0t4"},{"depth":0,"entityRanges":[],"data":{},"text":"Incidents","type":"header-three","key":"7hh5m","inlineStyleRanges":[]},{"entityRanges":[],"key":"163pt","inlineStyleRanges":[],"depth":0,"data":{},"text":"Microsoft Sentinel will group related alerts, assets, and other information into incidents that you can assign and work on.","type":"unstyled"}],"entityMap":{"0":{"type":"LINK","data":{"url":"https://azure.microsoft.com/en-us/pricing/details/microsoft-sentinel/","targetOption":"_blank"},"mutability":"MUTABLE"},"1":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://azure.microsoft.com/en-us/free/"},"type":"LINK"},"2":{"data":{"url":"https://portal.azure.com/?quickstart=true#blade/HubsExtension/BrowseResource/resourceType/microsoft.securityinsightsarg%2Fsentinel","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"3":{"mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png","alt":"Create Microsoft Sentinel","alignment":"none","width":"auto"},"type":"IMAGE"},"4":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png","alignment":"none","alt":"Create a new workspace","height":"auto","width":"auto"},"type":"IMAGE"},"5":{"type":"IMAGE","data":{"alt":"Resource group","alignment":"none","height":"auto","width":"auto","src":"https://i.ibb.co/S6Bz6JQ/resource-group.png"},"mutability":"MUTABLE"},"6":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png","alignment":"none","width":"auto","alt":"Set the instance name and click Create","height":"auto"},"type":"IMAGE"},"7":{"data":{"src":"https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png","alignment":"none","height":"auto","alt":"Add Microsoft Sentinel to a workspace","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"Microsoft Sentinel | Data connectors","src":"https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png","width":"auto","height":"auto"}},"9":{"data":{"alt":"Configure Office 365 data connector","width":"auto","height":"auto","alignment":"none","src":"https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png"},"mutability":"MUTABLE","type":"IMAGE"},"10":{"data":{"height":"auto","alignment":"none","src":"https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png","alt":"Microsoft Sentinel Azure AD Data connector","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"11":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"Configure Azure AD data connector","src":"https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png","width":"auto","height":"auto"}},"12":{"data":{"alt":"Open diagnostic settings","width":"auto","src":"https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png","url":"https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.EventHub%2Fnamespaces","alignment":"none","targetOption":"_blank","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"13":{"data":{"src":"https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png","width":"auto","alt":"Add diagnostic setting","alignment":"none","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"14":{"data":{"alignment":"none","alt":"Create diagnostic settings","width":"auto","height":"auto","src":"https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png"},"mutability":"MUTABLE","type":"IMAGE"},"15":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://go.microsoft.com/fwlink/?linkid=2058038","alt":"Add workbook to Microsoft Sentinel","targetOption":"_blank","alignment":"left","height":"auto","width":"auto","src":"https://i.ibb.co/qN9XsKj/Add-Workbook.png"}},"16":{"data":{"alt":"Open Security Extensions","width":"auto","src":"https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png","alignment":"none","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"17":{"type":"IMAGE","data":{"height":"auto","alt":"Add SIEM agent Microsoft Sentinel","alignment":"none","width":"auto","src":"https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png"},"mutability":"MUTABLE"},"18":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","targetOption":"_blank","src":"https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png","alt":"Create Microsoft Sentinel rule","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","alignment":"none","height":"auto"}},"19":{"mutability":"MUTABLE","data":{"targetOption":"_blank","alt":"Add workbook to Microsoft Sentinel","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","alignment":"none","width":"auto","height":"auto","src":"https://i.ibb.co/qN9XsKj/Add-Workbook.png"},"type":"IMAGE"},"20":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","alt":"Save your new workbook","targetOption":"_blank","src":"https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png","height":"auto","width":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations"}},"21":{"data":{"height":"auto","width":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","targetOption":"_blank","alignment":"none","src":"https://i.ibb.co/ssNQGdy/View-saved-workbook.png","alt":"View saved workbook"},"type":"IMAGE","mutability":"MUTABLE"},"22":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","alignment":"none","alt":"Create a playbook","height":"auto","targetOption":"_blank","src":"https://i.ibb.co/LCT6PrC/Create-a-playbook.png","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations"}},"23":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","alt":"Setup the connections","alignment":"none","src":"https://i.ibb.co/bNDYmjx/Setup-connections.png","width":"auto"}},"24":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","height":"auto","src":"https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png","width":"auto","alt":"Create a playbook: Basic Settings"}},"25":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png","alignment":"none","alt":"Send an email (V2) Office 365 Outlook","height":"auto","width":"auto"}},"26":{"mutability":"MUTABLE","data":{"alignment":"none","height":"auto","alt":"Sign in to Office 365 Outlook","src":"https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png","width":"auto"},"type":"IMAGE"},"27":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","alt":"View Microsoft Sentinel Logs","width":"auto","src":"https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png","height":"auto"}},"28":{"type":"IMAGE","data":{"width":"auto","alt":"Sign in to Office 365 Outlook","src":"https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png","height":"auto","alignment":"left"},"mutability":"MUTABLE"}}},"type":"article","sectionId":"QScYfSu74","slug":"Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt","images":["https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png","https://i.ibb.co/VHk7YHx/Create-a-new-workspace.png","https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png","https://i.ibb.co/S6Bz6JQ/resource-group.png","https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png","https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png","https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png","https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png","https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png","https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png","https://i.ibb.co/qN9XsKj/Add-Workbook.png","https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png","https://i.ibb.co/ssNQGdy/View-saved-workbook.png","https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png","https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png","https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png","https://i.ibb.co/GcnPkd9/Create-a-named-location.png","https://i.ibb.co/pbsXGDq/Create-a-playbook-from-a-template.png","https://i.ibb.co/pbsXGDq/Create-a-playbook-from-a-template.png","https://i.ibb.co/HG2Ghpd/Create-a-playbook.png","https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png","https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png","https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png","https://i.ibb.co/LCT6PrC/Create-a-playbook.png","https://i.ibb.co/bNDYmjx/Setup-connections.png","https://i.ibb.co/nm1Ldvw/open-event-hubs.png","https://i.ibb.co/99YcTZC/create-event-hubs-namespace.png","https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png","https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png","https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png","https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png"]},
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
