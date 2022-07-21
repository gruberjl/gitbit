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
      path: '/course/ms-500/learn/Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe',
      article: {"description":"Everything you need to know about the portal office admin centers","pushlish":true,"publish":true,"article":{"blocks":[{"entityRanges":[],"key":"2l8pu","inlineStyleRanges":[],"data":{},"text":"","type":"unstyled","depth":0},{"type":"atomic","data":{},"text":" ","inlineStyleRanges":[],"key":"ca697","depth":0,"entityRanges":[{"key":0,"length":1,"offset":0}]},{"depth":0,"entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[],"key":"cq0tv","text":"Microsoft 365 management is broken down into multiple admin centers. An admin center is a website used to manage part of the tenant. For example, there's an Exchange Online admin center that can help you manage the email portion of your Microsoft 365 tenant. Another SharePoint Online admin center to help manage the SharePoint Online part of your tenant."},{"data":{},"depth":0,"key":"5odlf","text":"Here's a list of all the Microsoft 365 admin centers you may need.","inlineStyleRanges":[],"type":"unstyled","entityRanges":[]},{"type":"header-two","entityRanges":[],"depth":0,"key":"43tlt","data":{},"inlineStyleRanges":[],"text":"Microsoft 365 admin center"},{"inlineStyleRanges":[],"type":"unstyled","depth":0,"entityRanges":[{"offset":86,"length":17,"key":1}],"key":"3oork","text":"This is the primary admin center. You can access it by clicking the admin button from portal.office.com in the left pane.","data":{}},{"inlineStyleRanges":[],"depth":0,"data":{},"type":"atomic","key":"3mrqa","entityRanges":[{"length":1,"key":2,"offset":0}],"text":" "},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","entityRanges":[{"key":3,"length":28,"offset":53}],"key":"a0hke","data":{},"text":"You can access the admin center directly by going to https://admin.microsoft.com/. From the Microsoft 365 admin center, you can create users, and groups, assign licenses, contact Microsoft support, update domain names, view the service health, or access the other admin centers."},{"depth":0,"text":"From the Microsoft 365 admin center, you can access the other admin centers. To access the other admin centers, perform the following:","inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"e92hf","data":{}},{"depth":0,"key":"d87jh","data":{},"type":"ordered-list-item","text":"Click Show all in the left pane.","entityRanges":[],"inlineStyleRanges":[]},{"data":{},"text":"Click All admin centers","entityRanges":[],"key":"53g3o","inlineStyleRanges":[],"type":"ordered-list-item","depth":0},{"data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[],"key":"4n8ms","type":"header-two","text":"Azure Advanced Threat Protection (ATP) admin center"},{"depth":0,"text":" ","inlineStyleRanges":[],"data":{},"type":"atomic","key":"7o6oc","entityRanges":[{"length":1,"key":4,"offset":0}]},{"data":{},"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":145,"offset":0},{"length":145,"style":"bgcolor-rgb(255,255,255)","offset":0},{"style":"fontsize-16","length":145,"offset":0},{"length":145,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0},{"style":"color-rgb(13,110,253)","length":46,"offset":55},{"style":"UNDERLINE","offset":55,"length":46}],"text":"The Azure ATP admin center can be accessed by going to https://go.microsoft.com/fwlink/?linkid=848894 and logging in with your admin credentials.","type":"unstyled","depth":0,"entityRanges":[{"offset":55,"length":46,"key":5}],"key":"8q416"},{"key":"b7rb5","depth":0,"type":"unstyled","entityRanges":[],"text":"The Cloud App Security admin center is replacing the Azure ATP admin center, but it's still listed so we'll review it. The Azure ATP admin center is designed for hybrid environments where part of your organization is hosted in on-premises servers and part of your environment is hosted in Microsoft 365. Azure ATP collects, analyzes, detects, and alerts you to suspicious activity in your on-premises Active Directory environment. The Azure ATP admin center is where you can perform the following:","data":{},"inlineStyleRanges":[{"length":497,"offset":0,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":497,"offset":0},{"length":497,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":497}]},{"depth":0,"type":"unordered-list-item","inlineStyleRanges":[],"data":{"text-align":"start"},"text":"View all suspicious activity","key":"5bo7b","entityRanges":[]},{"inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"unordered-list-item","text":"Protect user credentials stored in Active Directory (AD)","depth":0,"key":"do7ei"},{"key":"6lfuf","inlineStyleRanges":[],"entityRanges":[],"depth":0,"text":"Supply a timeline for clear incident information\n ","data":{},"type":"unordered-list-item"},{"type":"header-two","key":"bg0l1","data":{},"inlineStyleRanges":[],"entityRanges":[],"text":"Azure Active Directory (AD) admin center","depth":0},{"inlineStyleRanges":[],"data":{},"entityRanges":[{"length":1,"key":6,"offset":0}],"key":"1dabt","type":"atomic","text":" ","depth":0},{"key":"733t3","inlineStyleRanges":[],"text":"The Azure Active Directory (AD) admin center can be accessed by going to https://aad.portal.azure.com/. Azure AD is the cloud version of your on-premise AD. It's like on-premise AD on steroids. It's where you can perform the following:","data":{},"type":"unstyled","entityRanges":[{"key":7,"length":29,"offset":73}],"depth":0},{"inlineStyleRanges":[],"type":"unordered-list-item","data":{},"key":"7e9f","depth":0,"entityRanges":[],"text":"Manage identity including users and groups."},{"text":"Enable multi-factor authentication (MFA)","data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"an3bm","type":"unordered-list-item"},{"key":"42bf5","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"text":"Configure self-service password reset","entityRanges":[],"data":{}},{"data":{},"key":"8va8u","depth":0,"text":"Edit company branding","inlineStyleRanges":[],"type":"unordered-list-item","entityRanges":[]},{"data":{},"inlineStyleRanges":[],"depth":0,"entityRanges":[],"text":"View user sign-ins","type":"unordered-list-item","key":"1csbh"},{"depth":0,"entityRanges":[],"text":"Configure conditional access policies","type":"unordered-list-item","key":"60la5","inlineStyleRanges":[],"data":{}},{"entityRanges":[],"data":{},"depth":0,"text":"Cloud App Security admin center","type":"header-two","inlineStyleRanges":[],"key":"6gk5v"},{"text":" ","data":{},"inlineStyleRanges":[],"depth":0,"key":"9jk1e","entityRanges":[{"key":8,"length":1,"offset":0}],"type":"atomic"},{"entityRanges":[{"key":9,"offset":64,"length":35}],"data":{},"text":"The cloud app security admin center can be accessed by going to https://portal.cloudappsecurity.com. From the cloud app security admin center, you can manage unsanctioned cloud applications. From the Cloud App security admin center you can perform the following:","type":"unstyled","key":"8kipa","depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"entityRanges":[],"type":"unordered-list-item","depth":0,"key":"dhpsi","data":{},"text":"Discover unauthorized cloud applications being used within your organization"},{"text":"Connect and manage authorized apps","key":"9f0se","type":"unordered-list-item","inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{}},{"data":{},"type":"unordered-list-item","text":"Configure policies to manage risk","depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"997pr"},{"key":"d35pl","entityRanges":[],"type":"unordered-list-item","data":{},"depth":0,"inlineStyleRanges":[],"text":"View and manage alerts"},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Compliance admin center","data":{},"key":"37mv9","type":"header-two"},{"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":10}],"depth":0,"data":{},"text":" ","key":"6l8so"},{"key":"d2k92","depth":0,"text":"The compliance admin center can be accessed by going to https://compliance.microsoft.com/homepage. The compliance admin center is where you can manage the compliance of your tenant. You can classify data, set retention policies, and recover data. From the compliance admin center you can perform the following:","type":"unstyled","inlineStyleRanges":[],"data":{},"entityRanges":[{"key":11,"length":41,"offset":56}]},{"depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[],"key":"cvaog","type":"unordered-list-item","text":"Create sensitivity and retention labels to retain data for as long as needed."},{"key":"brc39","depth":0,"inlineStyleRanges":[],"text":"Review intelligent reports to view where labels are being used.","data":{},"entityRanges":[],"type":"unordered-list-item"},{"entityRanges":[],"type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"text":"Review a detailed view of the classification trends across your tenant.","data":{},"key":"9q2ar"},{"entityRanges":[],"depth":0,"type":"header-two","data":{},"inlineStyleRanges":[],"key":"cthvk","text":"Endpoint Manager admin center"},{"text":" ","depth":0,"data":{},"entityRanges":[{"length":1,"offset":0,"key":12}],"type":"atomic","key":"fkujl","inlineStyleRanges":[]},{"inlineStyleRanges":[],"key":"ber6o","data":{},"type":"unstyled","text":"The Endpoint manager admin center can be accessed by going to https://endpoint.microsoft.com/?ref=AdminCenter#home. The Endpoint manager admin center is where you can manage the end-user devices. It's where you can perform the following:","entityRanges":[{"key":13,"offset":62,"length":52}],"depth":0},{"inlineStyleRanges":[],"type":"unordered-list-item","data":{},"key":"ddlnr","entityRanges":[],"text":"Enroll and configure devices","depth":0},{"depth":0,"data":{},"key":"3b8ok","entityRanges":[],"type":"unordered-list-item","inlineStyleRanges":[],"text":"Distribute apps to your devices"},{"depth":0,"text":"Monitor and set compliance requirements on devices","type":"unordered-list-item","key":"bue80","data":{},"entityRanges":[],"inlineStyleRanges":[]},{"depth":0,"data":{},"inlineStyleRanges":[],"text":"Exchange admin center","entityRanges":[],"key":"9hooe","type":"header-two"},{"key":"43fvm","inlineStyleRanges":[],"data":{},"type":"atomic","depth":0,"entityRanges":[{"offset":0,"key":14,"length":1}],"text":" "},{"data":{},"text":"The Exchange admin center can be accessed by going to https://admin.exchange.microsoft.com/. The Exchange admin center is where you manage email and everything about email. It's where you can perform the following:","entityRanges":[{"offset":54,"length":37,"key":15}],"key":"4laal","inlineStyleRanges":[],"type":"unstyled","depth":0},{"data":{},"entityRanges":[],"text":"Manage user mailboxes","key":"6a45u","depth":0,"inlineStyleRanges":[],"type":"unordered-list-item"},{"depth":0,"text":"Create and manage shared/resource mailboxes","type":"unordered-list-item","entityRanges":[],"inlineStyleRanges":[],"key":"8tib9","data":{}},{"data":{},"inlineStyleRanges":[],"type":"unordered-list-item","depth":0,"entityRanges":[],"key":"bf9eu","text":"Create mail flow rules"},{"data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[],"key":"affn1","text":"Perform message traces","type":"unordered-list-item"},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"type":"header-two","depth":0,"key":"8j0na","text":"Power Platform admin center"},{"key":"2srot","depth":0,"text":" ","entityRanges":[{"key":16,"offset":0,"length":1}],"type":"atomic","data":{},"inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"entityRanges":[{"key":17,"length":42,"offset":60}],"depth":0,"type":"unstyled","text":"The Power Platform admin center can be accessed by going to https://admin.powerplatform.microsoft.com/. The Power Platform admin center is where you can manage the automation of repetitive tasks. From the Power Platform admin center you can perform the following:","key":"de7hv"},{"entityRanges":[],"type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"data":{},"key":"eko58","text":"Review Power Automate analytics"},{"depth":0,"inlineStyleRanges":[],"text":"Review Power Apps analytics","type":"unordered-list-item","entityRanges":[],"data":{},"key":"bhu1t"},{"depth":0,"text":"Create integrations between on-premise, Power BI, Microsoft Flow, and PowerApps.","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"6j3ol","type":"unordered-list-item"},{"inlineStyleRanges":[],"text":"Manage Dynamics 365 apps","depth":0,"data":{},"entityRanges":[],"key":"39st2","type":"unordered-list-item"},{"data":{},"key":"2ib2o","depth":0,"text":"Microsoft 365 Apps admin center","entityRanges":[],"inlineStyleRanges":[],"type":"header-two"},{"text":" ","data":{},"type":"atomic","key":"6fdpj","depth":0,"entityRanges":[{"length":1,"offset":0,"key":18}],"inlineStyleRanges":[]},{"key":"fen7v","inlineStyleRanges":[],"type":"unstyled","depth":0,"data":{},"text":"The Microsoft 365 Apps admin center can be accessed by going to https://config.office.com/officeSettings. The Microsoft 365 Apps admin center can be used to deploy settings and configurations to users that install the Office suite on their computers. Traditionally, the configuration found in the Microsoft 365 Apps admin center would have been performed via group policy","entityRanges":[{"length":40,"key":19,"offset":64}]},{"key":"9ur51","depth":0,"data":{},"type":"unordered-list-item","text":"Deploy Office customization policies","entityRanges":[],"inlineStyleRanges":[]},{"text":"Receive and implement security policy recommendations","data":{},"type":"unordered-list-item","key":"fi7pf","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"inlineStyleRanges":[],"type":"unordered-list-item","entityRanges":[],"key":"5uah2","data":{},"depth":0,"text":"Create an Office Customization to deploy Office with specific configurations"},{"depth":0,"data":{},"key":"e4or","entityRanges":[],"text":"Microsoft Stream admin center","inlineStyleRanges":[],"type":"header-two"},{"inlineStyleRanges":[],"depth":0,"data":{},"text":"The Microsoft Stream admin center can be accessed by going to https://web.microsoftstream.com/admin. From the Stream admin center, you can configure options for Microsoft Stream. For example, you can limit who can host live events. There are a ton of options in the admin center. Some of which are:","type":"unstyled","entityRanges":[{"length":37,"offset":62,"key":20}],"key":"44rac"},{"entityRanges":[],"type":"unordered-list-item","text":"Set Stream admins","inlineStyleRanges":[],"depth":0,"data":{},"key":"bqvam"},{"entityRanges":[],"data":{},"text":"Manage content on behalf of users","type":"unordered-list-item","key":"6na0q","depth":0,"inlineStyleRanges":[]},{"type":"unordered-list-item","inlineStyleRanges":[],"entityRanges":[],"key":"dlfeg","data":{},"text":"Configure live events, comments, and restrict organization-wide channel creation","depth":0},{"data":{},"text":"Power BI admin center","key":"7i08p","depth":0,"inlineStyleRanges":[],"type":"header-two","entityRanges":[]},{"entityRanges":[{"offset":0,"key":21,"length":1}],"text":" ","key":"8m6k7","type":"atomic","inlineStyleRanges":[],"depth":0,"data":{}},{"key":"2ifee","inlineStyleRanges":[],"text":"The Power BI admin center can be accessed by going to https://app.powerbi.com/admin-portal. The Power BI admin center is used to manage Power BI. From it, you can view usage metrics, and control how users interact with Power BI. From the Power BI admin center you can perform the following:","depth":0,"data":{},"type":"unstyled","entityRanges":[{"key":22,"length":36,"offset":54}]},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Configure tenant settings","key":"9dovk","data":{},"type":"unordered-list-item"},{"entityRanges":[],"type":"unordered-list-item","inlineStyleRanges":[],"text":"Review usage metrics","depth":0,"data":{},"key":"3acdp"},{"key":"5qmjj","depth":0,"entityRanges":[],"text":"Configure sensitivity labels","data":{},"inlineStyleRanges":[],"type":"unordered-list-item"},{"entityRanges":[],"type":"unordered-list-item","key":"cs71h","depth":0,"inlineStyleRanges":[],"text":"Enable Cloud App Security integration","data":{}},{"data":{},"inlineStyleRanges":[],"type":"header-two","key":"bh6lu","text":"Security admin center","entityRanges":[],"depth":0},{"data":{},"key":"2ffkg","depth":0,"type":"atomic","inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"offset":0,"key":23}]},{"entityRanges":[{"key":24,"length":30,"offset":54}],"key":"b3u6f","inlineStyleRanges":[],"data":{},"type":"unstyled","depth":0,"text":"The Security admin center can be accessed by going to https://protection.office.com/. The Security admin center is used to get visibility, investigate, and manage the security of your Microsoft 365 tenant. From it you can perform the following:"},{"text":"Manage and view alerts","entityRanges":[],"key":"b96n9","inlineStyleRanges":[],"data":{},"type":"unordered-list-item","depth":0},{"key":"c7u41","data":{},"inlineStyleRanges":[],"text":"Launch simulation attacks","type":"unordered-list-item","entityRanges":[],"depth":0},{"text":"Investigate threats","entityRanges":[],"type":"unordered-list-item","data":{},"depth":0,"key":"63r9a","inlineStyleRanges":[]},{"text":"Configure anti-phishing, anti-spam, attachment, and link policies","key":"20j8t","type":"unordered-list-item","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[]},{"data":{},"entityRanges":[],"depth":0,"text":"SharePoint admin center","inlineStyleRanges":[],"type":"header-two","key":"54l9u"},{"inlineStyleRanges":[],"depth":0,"entityRanges":[{"key":25,"offset":0,"length":1}],"text":" ","key":"ee12c","data":{},"type":"atomic"},{"key":"e0k8e","entityRanges":[],"type":"unstyled","data":{},"text":"The SharePoint admin center can be accessed by going to the Microsoft 365 admin center > Show all > All admin centers > SharePoint. From the SharePoint admin center, you can manage SharePoint sites and OneDrive sites. You can perform the following:","depth":0,"inlineStyleRanges":[]},{"text":"Create and manage SharePoint sites","inlineStyleRanges":[],"type":"unordered-list-item","entityRanges":[],"key":"cdmmb","depth":0,"data":{}},{"entityRanges":[],"key":"4hgru","text":"Configure sharing and access control","data":{},"inlineStyleRanges":[],"depth":0,"type":"unordered-list-item"},{"depth":0,"key":"79k6f","data":{},"text":"Manage tenant-wide settings","type":"unordered-list-item","inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[],"depth":0,"text":"Migrate data to SharePoint","data":{},"inlineStyleRanges":[],"key":"6jf3c","type":"unordered-list-item"},{"data":{},"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"key":"1ueoc","text":"Microsoft Teams admin center","depth":0},{"type":"atomic","data":{},"key":"5ifnr","depth":0,"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":26}],"text":" "},{"depth":0,"entityRanges":[{"key":27,"length":34,"offset":51}],"key":"6pfao","data":{},"inlineStyleRanges":[],"text":"The Teams admin center can be accessed by going to https://admin.teams.microsoft.com/. From the Microsoft Teams admin center, you can manage Microsoft Teams. From it, you can configure messaging, conferencing, and external communication options. You can perform the following:","type":"unstyled"},{"type":"unordered-list-item","data":{},"depth":0,"key":"evq1k","text":" Review relevant information about your Teams deployment","entityRanges":[],"inlineStyleRanges":[]},{"type":"unordered-list-item","data":{},"key":"hihu","text":"View and manage Teams users","entityRanges":[],"depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"type":"unordered-list-item","entityRanges":[],"key":"9hdmg","depth":0,"text":"Manage your Teams","data":{}},{"entityRanges":[],"key":"92h8a","data":{},"inlineStyleRanges":[],"depth":0,"text":"Configure organization-wide settings","type":"unordered-list-item"},{"key":"5hpmt","depth":0,"entityRanges":[],"type":"header-two","data":{},"text":"Yammer admin center","inlineStyleRanges":[]},{"entityRanges":[{"offset":0,"length":1,"key":28}],"type":"atomic","data":{},"inlineStyleRanges":[],"key":"fvf0j","depth":0,"text":" "},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"6er9g","data":{},"text":"The Yammer admin center can be accessed by going to the Microsoft 365 admin center > Show all > All admin centers > Yammer. From the Yammer admin center, you can manage your Yammer network, for example, you can set usage policies and control external network settings. You can also perform the following:","type":"unstyled"},{"key":"d7lg2","inlineStyleRanges":[],"depth":0,"data":{},"type":"unordered-list-item","entityRanges":[],"text":"Configure Yammer tenant-wide settings"},{"key":"dlsbi","text":"Manage Yammer admins","depth":0,"data":{},"entityRanges":[],"type":"unordered-list-item","inlineStyleRanges":[]},{"entityRanges":[],"text":"Configure usage policy","data":{},"type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"key":"2serg"},{"entityRanges":[],"inlineStyleRanges":[],"data":{},"depth":0,"key":"8etrc","text":"Manage external network access","type":"unordered-list-item"},{"key":"f9jtu","text":"Monitor keywords","type":"unordered-list-item","data":{},"entityRanges":[],"inlineStyleRanges":[],"depth":0},{"type":"unordered-list-item","entityRanges":[],"key":"8gi2h","inlineStyleRanges":[],"text":"Configure security settings","data":{},"depth":0},{"inlineStyleRanges":[],"text":"Export data","type":"unordered-list-item","key":"3ihus","entityRanges":[],"depth":0,"data":{}}],"entityMap":{"0":{"data":{"height":"auto","alt":"Microsoft 365 admin centers","width":"auto","targetOption":"_blank","url":"https://portal.office.com","src":"https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png"},"type":"IMAGE","mutability":"MUTABLE"},"1":{"type":"LINK","data":{"height":"auto","targetOption":"_blank","alt":"Microsoft 365 admin center button","src":"https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png","width":"auto","url":"https://portal.office.com","alignment":"none"},"mutability":"MUTABLE"},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Microsoft 365 admin center button","targetOption":"_blank","alignment":"none","src":"https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png","url":"https://admin.microsoft.com/","height":"auto","width":"auto"}},"3":{"type":"LINK","mutability":"MUTABLE","data":{"height":"auto","targetOption":"_blank","width":"auto","alt":"Azure ATP Icon","_map":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://go.microsoft.com/fwlink/?linkid=848894","title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","targetOption":"_blank"}},"alignment":"none","title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","url":"https://admin.microsoft.com/","src":"https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png"}},"4":{"mutability":"MUTABLE","type":"IMAGE","data":{"targetOption":"_blank","height":"auto","alignment":"none","alt":"Azure ATP Icon","title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","_map":{"type":"LINK","mutability":"MUTABLE","data":{"title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","url":"https://go.microsoft.com/fwlink/?linkid=848894","targetOption":"_blank"}},"url":"https://go.microsoft.com/fwlink/?linkid=848894","width":"auto","src":"https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png"}},"5":{"mutability":"MUTABLE","type":"LINK","data":{"alignment":"left","height":"auto","alt":"Azure ATP icon","targetOption":"_blank","_map":{"mutability":"MUTABLE","data":{"url":"https://go.microsoft.com/fwlink/?linkid=848894","title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","targetOption":"_blank"},"type":"LINK"},"title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","url":"https://go.microsoft.com/fwlink/?linkid=848894","width":"auto","src":"https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png"}},"6":{"type":"IMAGE","data":{"url":"https://aad.portal.azure.com/","alt":"Azure AD Icon","width":"auto","src":"https://i.ibb.co/HK83H6d/Azure-ad-icon.png","height":"auto","targetOption":"_blank"},"mutability":"MUTABLE"},"7":{"mutability":"MUTABLE","data":{"width":"auto","alt":"Cloud App Security Icon","targetOption":"_blank","src":"https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png","height":"auto","url":"https://aad.portal.azure.com/"},"type":"LINK"},"8":{"mutability":"MUTABLE","data":{"alt":"Cloud App Security Icon","url":"https://portal.cloudappsecurity.com","height":"auto","src":"https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png","targetOption":"_blank","width":"auto"},"type":"IMAGE"},"9":{"type":"LINK","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/Jk3LPPL/compliance-icon.png","height":"auto","targetOption":"_blank","width":"auto","url":"https://portal.cloudappsecurity.com","alt":"Compliance admin center icon"}},"10":{"type":"IMAGE","data":{"width":"auto","alt":"Compliance admin center icon","height":"auto","targetOption":"_blank","url":"https://compliance.microsoft.com/homepage","src":"https://i.ibb.co/Jk3LPPL/compliance-icon.png"},"mutability":"MUTABLE"},"11":{"data":{"alt":"Endpoint manager compliance admin center icon","height":"auto","width":"auto","src":"https://i.ibb.co/89kQWVH/endpoint-icon.png","url":"https://compliance.microsoft.com/homepage","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"12":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","url":"https://endpoint.microsoft.com/?ref=AdminCenter#home","targetOption":"_blank","src":"https://i.ibb.co/89kQWVH/endpoint-icon.png","width":"auto","alt":"Endpoint manager compliance admin center icon"}},"13":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/9VWVrqp/exchange-icon.png","width":"auto","alt":"Exchange admin center icon","height":"auto","url":"https://endpoint.microsoft.com/?ref=AdminCenter#home","targetOption":"_blank"},"type":"LINK"},"14":{"mutability":"MUTABLE","data":{"width":"auto","alt":"Exchange admin center icon","src":"https://i.ibb.co/9VWVrqp/exchange-icon.png","url":"https://admin.exchange.microsoft.com/","height":"auto","targetOption":"_blank"},"type":"IMAGE"},"15":{"type":"LINK","data":{"height":"auto","width":"auto","targetOption":"_blank","alt":"Power Automate admin center icon","src":"https://i.ibb.co/LnWj2Yb/power-automate-icon.png","url":"https://admin.exchange.microsoft.com/"},"mutability":"MUTABLE"},"16":{"mutability":"MUTABLE","data":{"targetOption":"_blank","height":"auto","width":"auto","alt":"Power Automate admin center icon","url":"https://admin.powerplatform.microsoft.com/","src":"https://i.ibb.co/LnWj2Yb/power-automate-icon.png"},"type":"IMAGE"},"17":{"type":"LINK","data":{"width":"auto","alt":"Microsoft 365 Apps Office configuration icon","targetOption":"_blank","height":"auto","src":"https://i.ibb.co/MpGbXrz/Office-install-icon.png","url":"https://admin.powerplatform.microsoft.com/"},"mutability":"MUTABLE"},"18":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","alt":"Microsoft 365 Apps Office configuration icon","src":"https://i.ibb.co/MpGbXrz/Office-install-icon.png","width":"auto","url":"https://config.office.com/officeSettings","targetOption":"_blank"}},"19":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","alt":"Power BI admin center icon","url":"https://config.office.com/officeSettings","width":"auto","height":"auto","src":"https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png"}},"20":{"data":{"height":"auto","alt":"Power BI admin center icon","url":"https://web.microsoftstream.com/admin","width":"auto","targetOption":"_blank","src":"https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png"},"type":"LINK","mutability":"MUTABLE"},"21":{"type":"IMAGE","data":{"targetOption":"_blank","src":"https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png","height":"auto","alt":"Power BI admin center icon","url":"https://app.powerbi.com/admin-portal","width":"auto"},"mutability":"MUTABLE"},"22":{"data":{"src":"https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png","url":"https://app.powerbi.com/admin-portal","alt":"Security center admin center","targetOption":"_blank","height":"auto","width":"auto"},"mutability":"MUTABLE","type":"LINK"},"23":{"type":"IMAGE","data":{"src":"https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png","alt":"Security center admin center","url":"https://protection.office.com/","targetOption":"_blank","height":"auto","width":"auto"},"mutability":"MUTABLE"},"24":{"mutability":"MUTABLE","type":"LINK","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png","url":"https://protection.office.com/","targetOption":"_blank","alt":"SharePoint admin center"}},"25":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"SharePoint admin center","src":"https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png","url":"https://admin.teams.microsoft.com/","width":"auto","height":"auto","targetOption":"_blank"}},"26":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Microsoft Teams admin center icon","url":"https://admin.teams.microsoft.com/","height":"auto","src":"https://i.ibb.co/dGJJV84/Teams-admin-center.png","width":"auto","targetOption":"_blank"}},"27":{"data":{"alt":"Yammer admin center icon","targetOption":"_blank","height":"auto","width":"auto","src":"https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png","url":"https://admin.teams.microsoft.com/"},"mutability":"MUTABLE","type":"LINK"},"28":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","alt":"Yammer admin center icon","width":"auto","src":"https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png"}}}},"datePublished":"2022/5/26","id":"bzotoOjEe","sectionId":"qwJW5VrBW","type":"article","images":["https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png","https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png","https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png","https://i.ibb.co/HK83H6d/Azure-ad-icon.png","https://i.ibb.co/Jk3LPPL/compliance-icon.png","https://i.ibb.co/89kQWVH/endpoint-icon.png","https://i.ibb.co/9VWVrqp/exchange-icon.png","https://i.ibb.co/LnWj2Yb/power-automate-icon.png","https://i.ibb.co/MpGbXrz/Office-install-icon.png","https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png","https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png","https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png","https://i.ibb.co/dGJJV84/Teams-admin-center.png","https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png","https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png","https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png"],"featuredImage":"https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png","slug":"Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe","title":"Managing the Microsoft 365 tenant - Introduction to the admin centers"},
      nextContentSlug: 'Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
      previousContentSlug: 'Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4',
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
                <div><p></p>
<img src="https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png" alt="Microsoft 365 admin centers" style="height: auto;width: auto"/>
<p>Microsoft 365 management is broken down into multiple admin centers. An admin center is a website used to manage part of the tenant. For example, there's an Exchange Online admin center that can help you manage the email portion of your Microsoft 365 tenant. Another SharePoint Online admin center to help manage the SharePoint Online part of your tenant.</p>
<p>Here's a list of all the Microsoft 365 admin centers you may need.</p>
<h2>Microsoft 365 admin center</h2>
<p>This is the primary admin center. You can access it by clicking the admin button from <a href="https://portal.office.com" target="_blank">portal.office.com</a> in the left pane.</p>
<div ><img src="https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png" alt="Microsoft 365 admin center button" style="height: auto;width: auto"/></div>
<p>You can access the admin center directly by going to <a href="https://admin.microsoft.com/" target="_blank">https://admin.microsoft.com/</a>. From the Microsoft 365 admin center, you can create users, and groups, assign licenses, contact Microsoft support, update domain names, view the service health, or access the other admin centers.</p>
<p>From the Microsoft 365 admin center, you can access the other admin centers. To access the other admin centers, perform the following:</p>
<ol>
<li>Click Show all in the left pane.</li>
<li>Click All admin centers</li>
</ol>
<h2>Azure Advanced Threat Protection (ATP) admin center</h2>
<div ><img src="https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png" alt="Azure ATP Icon" style="height: auto;width: auto"/></div>
<p><span >The Azure ATP admin center can be accessed by going to </span><a href="https://go.microsoft.com/fwlink/?linkid=848894" target="_blank"><span ><ins>https://go.microsoft.com/fwlink/?linkid=848894</ins></span></a><span > and logging in with your admin credentials.</span></p>
<p><span >The Cloud App Security admin center is replacing the Azure ATP admin center, but it's still listed so we'll review it. The Azure ATP admin center is designed for hybrid environments where part of your organization is hosted in on-premises servers and part of your environment is hosted in Microsoft 365. Azure ATP collects, analyzes, detects, and alerts you to suspicious activity in your on-premises Active Directory environment. The Azure ATP admin center is where you can perform the following:</span></p>
<ul>
<li >View all suspicious activity</li>
<li>Protect user credentials stored in Active Directory (AD)</li>
<li>Supply a timeline for clear incident information<br/>&nbsp;</li>
</ul>
<h2>Azure Active Directory (AD) admin center</h2>
<img src="https://i.ibb.co/HK83H6d/Azure-ad-icon.png" alt="Azure AD Icon" style="height: auto;width: auto"/>
<p>The Azure Active Directory (AD) admin center can be accessed by going to <a href="https://aad.portal.azure.com/" target="_blank">https://aad.portal.azure.com/</a>. Azure AD is the cloud version of your on-premise AD. It's like on-premise AD on steroids. It's where you can perform the following:</p>
<ul>
<li>Manage identity including users and groups.</li>
<li>Enable multi-factor authentication (MFA)</li>
<li>Configure self-service password reset</li>
<li>Edit company branding</li>
<li>View user sign-ins</li>
<li>Configure conditional access policies</li>
</ul>
<h2>Cloud App Security admin center</h2>
<img src="https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png" alt="Cloud App Security Icon" style="height: auto;width: auto"/>
<p>The cloud app security admin center can be accessed by going to <a href="https://portal.cloudappsecurity.com" target="_blank">https://portal.cloudappsecurity.com</a>. From the cloud app security admin center, you can manage unsanctioned cloud applications. From the Cloud App security admin center you can perform the following:</p>
<ul>
<li>Discover unauthorized cloud applications being used within your organization</li>
<li>Connect and manage authorized apps</li>
<li>Configure policies to manage risk</li>
<li>View and manage alerts</li>
</ul>
<h2>Compliance admin center</h2>
<img src="https://i.ibb.co/Jk3LPPL/compliance-icon.png" alt="Compliance admin center icon" style="height: auto;width: auto"/>
<p>The compliance admin center can be accessed by going to <a href="https://compliance.microsoft.com/homepage" target="_blank">https://compliance.microsoft.com/homepage</a>. The compliance admin center is where you can manage the compliance of your tenant. You can classify data, set retention policies, and recover data. From the compliance admin center you can perform the following:</p>
<ul>
<li>Create sensitivity and retention labels to retain data for as long as needed.</li>
<li>Review intelligent reports to view where labels are being used.</li>
<li>Review a detailed view of the classification trends across your tenant.</li>
</ul>
<h2>Endpoint Manager admin center</h2>
<img src="https://i.ibb.co/89kQWVH/endpoint-icon.png" alt="Endpoint manager compliance admin center icon" style="height: auto;width: auto"/>
<p>The Endpoint manager admin center can be accessed by going to <a href="https://endpoint.microsoft.com/?ref=AdminCenter#home" target="_blank">https://endpoint.microsoft.com/?ref=AdminCenter#home</a>. The Endpoint manager admin center is where you can manage the end-user devices. It's where you can perform the following:</p>
<ul>
<li>Enroll and configure devices</li>
<li>Distribute apps to your devices</li>
<li>Monitor and set compliance requirements on devices</li>
</ul>
<h2>Exchange admin center</h2>
<img src="https://i.ibb.co/9VWVrqp/exchange-icon.png" alt="Exchange admin center icon" style="height: auto;width: auto"/>
<p>The Exchange admin center can be accessed by going to <a href="https://admin.exchange.microsoft.com/" target="_blank">https://admin.exchange.microsoft.com/</a>. The Exchange admin center is where you manage email and everything about email. It's where you can perform the following:</p>
<ul>
<li>Manage user mailboxes</li>
<li>Create and manage shared/resource mailboxes</li>
<li>Create mail flow rules</li>
<li>Perform message traces</li>
</ul>
<h2>Power Platform admin center</h2>
<img src="https://i.ibb.co/LnWj2Yb/power-automate-icon.png" alt="Power Automate admin center icon" style="height: auto;width: auto"/>
<p>The Power Platform admin center can be accessed by going to <a href="https://admin.powerplatform.microsoft.com/" target="_blank">https://admin.powerplatform.microsoft.com/</a>. The Power Platform admin center is where you can manage the automation of repetitive tasks. From the Power Platform admin center you can perform the following:</p>
<ul>
<li>Review Power Automate analytics</li>
<li>Review Power Apps analytics</li>
<li>Create integrations between on-premise, Power BI, Microsoft Flow, and PowerApps.</li>
<li>Manage Dynamics 365 apps</li>
</ul>
<h2>Microsoft 365 Apps admin center</h2>
<img src="https://i.ibb.co/MpGbXrz/Office-install-icon.png" alt="Microsoft 365 Apps Office configuration icon" style="height: auto;width: auto"/>
<p>The Microsoft 365 Apps admin center can be accessed by going to <a href="https://config.office.com/officeSettings" target="_blank">https://config.office.com/officeSettings</a>. The Microsoft 365 Apps admin center can be used to deploy settings and configurations to users that install the Office suite on their computers. Traditionally, the configuration found in the Microsoft 365 Apps admin center would have been performed via group policy</p>
<ul>
<li>Deploy Office customization policies</li>
<li>Receive and implement security policy recommendations</li>
<li>Create an Office Customization to deploy Office with specific configurations</li>
</ul>
<h2>Microsoft Stream admin center</h2>
<p>The Microsoft Stream admin center can be accessed by going to <a href="https://web.microsoftstream.com/admin" target="_blank">https://web.microsoftstream.com/admin</a>. From the Stream admin center, you can configure options for Microsoft Stream. For example, you can limit who can host live events. There are a ton of options in the admin center. Some of which are:</p>
<ul>
<li>Set Stream admins</li>
<li>Manage content on behalf of users</li>
<li>Configure live events, comments, and restrict organization-wide channel creation</li>
</ul>
<h2>Power BI admin center</h2>
<img src="https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png" alt="Power BI admin center icon" style="height: auto;width: auto"/>
<p>The Power BI admin center can be accessed by going to <a href="https://app.powerbi.com/admin-portal" target="_blank">https://app.powerbi.com/admin-portal</a>. The Power BI admin center is used to manage Power BI. From it, you can view usage metrics, and control how users interact with Power BI. From the Power BI admin center you can perform the following:</p>
<ul>
<li>Configure tenant settings</li>
<li>Review usage metrics</li>
<li>Configure sensitivity labels</li>
<li>Enable Cloud App Security integration</li>
</ul>
<h2>Security admin center</h2>
<img src="https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png" alt="Security center admin center" style="height: auto;width: auto"/>
<p>The Security admin center can be accessed by going to <a href="https://protection.office.com/" target="_blank">https://protection.office.com/</a>. The Security admin center is used to get visibility, investigate, and manage the security of your Microsoft 365 tenant. From it you can perform the following:</p>
<ul>
<li>Manage and view alerts</li>
<li>Launch simulation attacks</li>
<li>Investigate threats</li>
<li>Configure anti-phishing, anti-spam, attachment, and link policies</li>
</ul>
<h2>SharePoint admin center</h2>
<img src="https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png" alt="SharePoint admin center" style="height: auto;width: auto"/>
<p>The SharePoint admin center can be accessed by going to the Microsoft 365 admin center &gt; Show all &gt; All admin centers &gt; SharePoint. From the SharePoint admin center, you can manage SharePoint sites and OneDrive sites. You can perform the following:</p>
<ul>
<li>Create and manage SharePoint sites</li>
<li>Configure sharing and access control</li>
<li>Manage tenant-wide settings</li>
<li>Migrate data to SharePoint</li>
</ul>
<h2>Microsoft Teams admin center</h2>
<img src="https://i.ibb.co/dGJJV84/Teams-admin-center.png" alt="Microsoft Teams admin center icon" style="height: auto;width: auto"/>
<p>The Teams admin center can be accessed by going to <a href="https://admin.teams.microsoft.com/" target="_blank">https://admin.teams.microsoft.com/</a>. From the Microsoft Teams admin center, you can manage Microsoft Teams. From it, you can configure messaging, conferencing, and external communication options. You can perform the following:</p>
<ul>
<li>&nbsp;Review relevant information about your Teams deployment</li>
<li>View and manage Teams users</li>
<li>Manage your Teams</li>
<li>Configure organization-wide settings</li>
</ul>
<h2>Yammer admin center</h2>
<img src="https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png" alt="Yammer admin center icon" style="height: auto;width: auto"/>
<p>The Yammer admin center can be accessed by going to the Microsoft 365 admin center &gt; Show all &gt; All admin centers &gt; Yammer. From the Yammer admin center, you can manage your Yammer network, for example, you can set usage policies and control external network settings. You can also perform the following:</p>
<ul>
<li>Configure Yammer tenant-wide settings</li>
<li>Manage Yammer admins</li>
<li>Configure usage policy</li>
<li>Manage external network access</li>
<li>Monitor keywords</li>
<li>Configure security settings</li>
<li>Export data</li>
</ul>
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
