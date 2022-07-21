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
      article: {"publish":true,"pushlish":true,"images":["https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png","https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png","https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png","https://i.ibb.co/HK83H6d/Azure-ad-icon.png","https://i.ibb.co/Jk3LPPL/compliance-icon.png","https://i.ibb.co/89kQWVH/endpoint-icon.png","https://i.ibb.co/9VWVrqp/exchange-icon.png","https://i.ibb.co/LnWj2Yb/power-automate-icon.png","https://i.ibb.co/MpGbXrz/Office-install-icon.png","https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png","https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png","https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png","https://i.ibb.co/dGJJV84/Teams-admin-center.png","https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png","https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png","https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png"],"title":"Managing the Microsoft 365 tenant - Introduction to the admin centers","type":"article","article":{"entityMap":{"0":{"data":{"targetOption":"_blank","height":"auto","src":"https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png","alt":"Microsoft 365 admin centers","width":"auto","url":"https://portal.office.com"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://portal.office.com","height":"auto","alignment":"none","src":"https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png","width":"auto","alt":"Microsoft 365 admin center button","targetOption":"_blank"}},"2":{"type":"IMAGE","data":{"width":"auto","url":"https://admin.microsoft.com/","src":"https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png","targetOption":"_blank","alt":"Microsoft 365 admin center button","alignment":"none","height":"auto"},"mutability":"MUTABLE"},"3":{"mutability":"MUTABLE","type":"LINK","data":{"height":"auto","src":"https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png","url":"https://admin.microsoft.com/","targetOption":"_blank","alt":"Azure ATP Icon","_map":{"type":"LINK","mutability":"MUTABLE","data":{"title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","url":"https://go.microsoft.com/fwlink/?linkid=848894","targetOption":"_blank"}},"title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","width":"auto","alignment":"none"}},"4":{"mutability":"MUTABLE","type":"IMAGE","data":{"title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","height":"auto","alt":"Azure ATP Icon","alignment":"none","targetOption":"_blank","url":"https://go.microsoft.com/fwlink/?linkid=848894","_map":{"mutability":"MUTABLE","data":{"url":"https://go.microsoft.com/fwlink/?linkid=848894","title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","targetOption":"_blank"},"type":"LINK"},"src":"https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png","width":"auto"}},"5":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://go.microsoft.com/fwlink/?linkid=848894","title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","src":"https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png","alignment":"left","width":"auto","targetOption":"_blank","height":"auto","alt":"Azure ATP icon","_map":{"type":"LINK","data":{"url":"https://go.microsoft.com/fwlink/?linkid=848894","title":"<span data-offset-key=\"fbuo1-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">https://go.microsoft.com/fwlink/?linkid=848894</span></span>","targetOption":"_blank"},"mutability":"MUTABLE"}}},"6":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/HK83H6d/Azure-ad-icon.png","url":"https://aad.portal.azure.com/","alt":"Azure AD Icon","targetOption":"_blank","height":"auto"}},"7":{"data":{"src":"https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png","width":"auto","height":"auto","url":"https://aad.portal.azure.com/","alt":"Cloud App Security Icon","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"8":{"type":"IMAGE","data":{"width":"auto","targetOption":"_blank","src":"https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png","url":"https://portal.cloudappsecurity.com","alt":"Cloud App Security Icon","height":"auto"},"mutability":"MUTABLE"},"9":{"mutability":"MUTABLE","type":"LINK","data":{"alt":"Compliance admin center icon","targetOption":"_blank","height":"auto","width":"auto","url":"https://portal.cloudappsecurity.com","src":"https://i.ibb.co/Jk3LPPL/compliance-icon.png"}},"10":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/Jk3LPPL/compliance-icon.png","width":"auto","targetOption":"_blank","alt":"Compliance admin center icon","url":"https://compliance.microsoft.com/homepage","height":"auto"}},"11":{"type":"LINK","data":{"targetOption":"_blank","width":"auto","url":"https://compliance.microsoft.com/homepage","alt":"Endpoint manager compliance admin center icon","src":"https://i.ibb.co/89kQWVH/endpoint-icon.png","height":"auto"},"mutability":"MUTABLE"},"12":{"data":{"src":"https://i.ibb.co/89kQWVH/endpoint-icon.png","width":"auto","height":"auto","alt":"Endpoint manager compliance admin center icon","targetOption":"_blank","url":"https://endpoint.microsoft.com/?ref=AdminCenter#home"},"mutability":"MUTABLE","type":"IMAGE"},"13":{"type":"LINK","mutability":"MUTABLE","data":{"alt":"Exchange admin center icon","url":"https://endpoint.microsoft.com/?ref=AdminCenter#home","src":"https://i.ibb.co/9VWVrqp/exchange-icon.png","width":"auto","targetOption":"_blank","height":"auto"}},"14":{"data":{"height":"auto","alt":"Exchange admin center icon","targetOption":"_blank","src":"https://i.ibb.co/9VWVrqp/exchange-icon.png","width":"auto","url":"https://admin.exchange.microsoft.com/"},"type":"IMAGE","mutability":"MUTABLE"},"15":{"data":{"height":"auto","src":"https://i.ibb.co/LnWj2Yb/power-automate-icon.png","width":"auto","alt":"Power Automate admin center icon","url":"https://admin.exchange.microsoft.com/","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"16":{"data":{"alt":"Power Automate admin center icon","src":"https://i.ibb.co/LnWj2Yb/power-automate-icon.png","height":"auto","width":"auto","url":"https://admin.powerplatform.microsoft.com/","targetOption":"_blank"},"mutability":"MUTABLE","type":"IMAGE"},"17":{"data":{"alt":"Microsoft 365 Apps Office configuration icon","targetOption":"_blank","width":"auto","url":"https://admin.powerplatform.microsoft.com/","height":"auto","src":"https://i.ibb.co/MpGbXrz/Office-install-icon.png"},"mutability":"MUTABLE","type":"LINK"},"18":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","targetOption":"_blank","url":"https://config.office.com/officeSettings","src":"https://i.ibb.co/MpGbXrz/Office-install-icon.png","width":"auto","alt":"Microsoft 365 Apps Office configuration icon"}},"19":{"type":"LINK","data":{"url":"https://config.office.com/officeSettings","width":"auto","height":"auto","alt":"Power BI admin center icon","src":"https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png","targetOption":"_blank"},"mutability":"MUTABLE"},"20":{"type":"LINK","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png","alt":"Power BI admin center icon","targetOption":"_blank","url":"https://web.microsoftstream.com/admin","height":"auto"}},"21":{"type":"IMAGE","data":{"width":"auto","url":"https://app.powerbi.com/admin-portal","targetOption":"_blank","src":"https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png","alt":"Power BI admin center icon","height":"auto"},"mutability":"MUTABLE"},"22":{"data":{"width":"auto","height":"auto","alt":"Security center admin center","url":"https://app.powerbi.com/admin-portal","targetOption":"_blank","src":"https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png"},"type":"LINK","mutability":"MUTABLE"},"23":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","alt":"Security center admin center","targetOption":"_blank","url":"https://protection.office.com/","src":"https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png"}},"24":{"type":"LINK","mutability":"MUTABLE","data":{"alt":"SharePoint admin center","url":"https://protection.office.com/","width":"auto","targetOption":"_blank","src":"https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png","height":"auto"}},"25":{"data":{"src":"https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png","height":"auto","alt":"SharePoint admin center","width":"auto","url":"https://admin.teams.microsoft.com/","targetOption":"_blank"},"mutability":"MUTABLE","type":"IMAGE"},"26":{"type":"IMAGE","data":{"src":"https://i.ibb.co/dGJJV84/Teams-admin-center.png","width":"auto","targetOption":"_blank","alt":"Microsoft Teams admin center icon","height":"auto","url":"https://admin.teams.microsoft.com/"},"mutability":"MUTABLE"},"27":{"type":"LINK","data":{"height":"auto","url":"https://admin.teams.microsoft.com/","width":"auto","alt":"Yammer admin center icon","src":"https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png","targetOption":"_blank"},"mutability":"MUTABLE"},"28":{"type":"IMAGE","data":{"width":"auto","src":"https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png","alt":"Yammer admin center icon","height":"auto"},"mutability":"MUTABLE"}},"blocks":[{"key":"2l8pu","type":"unstyled","data":{},"depth":0,"inlineStyleRanges":[],"text":"","entityRanges":[]},{"data":{},"key":"ca697","type":"atomic","depth":0,"entityRanges":[{"length":1,"offset":0,"key":0}],"inlineStyleRanges":[],"text":" "},{"data":{},"entityRanges":[],"key":"cq0tv","depth":0,"inlineStyleRanges":[],"text":"Microsoft 365 management is broken down into multiple admin centers. An admin center is a website used to manage part of the tenant. For example, there's an Exchange Online admin center that can help you manage the email portion of your Microsoft 365 tenant. Another SharePoint Online admin center to help manage the SharePoint Online part of your tenant.","type":"unstyled"},{"key":"5odlf","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unstyled","text":"Here's a list of all the Microsoft 365 admin centers you may need.","data":{}},{"data":{},"type":"header-two","entityRanges":[],"key":"43tlt","text":"Microsoft 365 admin center","depth":0,"inlineStyleRanges":[]},{"key":"3oork","data":{},"type":"unstyled","inlineStyleRanges":[],"text":"This is the primary admin center. You can access it by clicking the admin button from portal.office.com in the left pane.","entityRanges":[{"offset":86,"key":1,"length":17}],"depth":0},{"key":"3mrqa","data":{},"text":" ","type":"atomic","inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":2}],"depth":0},{"text":"You can access the admin center directly by going to https://admin.microsoft.com/. From the Microsoft 365 admin center, you can create users, and groups, assign licenses, contact Microsoft support, update domain names, view the service health, or access the other admin centers.","type":"unstyled","key":"a0hke","entityRanges":[{"length":28,"offset":53,"key":3}],"data":{},"depth":0,"inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"data":{},"depth":0,"type":"unstyled","key":"e92hf","text":"From the Microsoft 365 admin center, you can access the other admin centers. To access the other admin centers, perform the following:"},{"depth":0,"text":"Click Show all in the left pane.","key":"d87jh","inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"ordered-list-item"},{"type":"ordered-list-item","inlineStyleRanges":[],"data":{},"depth":0,"entityRanges":[],"key":"53g3o","text":"Click All admin centers"},{"type":"header-two","data":{},"inlineStyleRanges":[],"entityRanges":[],"text":"Azure Advanced Threat Protection (ATP) admin center","depth":0,"key":"4n8ms"},{"entityRanges":[{"key":4,"length":1,"offset":0}],"depth":0,"data":{},"text":" ","inlineStyleRanges":[],"type":"atomic","key":"7o6oc"},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":145,"offset":0},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":145},{"length":145,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":145},{"length":46,"style":"color-rgb(13,110,253)","offset":55},{"offset":55,"style":"UNDERLINE","length":46}],"depth":0,"type":"unstyled","data":{},"entityRanges":[{"key":5,"offset":55,"length":46}],"text":"The Azure ATP admin center can be accessed by going to https://go.microsoft.com/fwlink/?linkid=848894 and logging in with your admin credentials.","key":"8q416"},{"type":"unstyled","entityRanges":[],"depth":0,"data":{},"key":"b7rb5","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":497},{"offset":0,"length":497,"style":"bgcolor-rgb(255,255,255)"},{"length":497,"style":"fontsize-16","offset":0},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":497}],"text":"The Cloud App Security admin center is replacing the Azure ATP admin center, but it's still listed so we'll review it. The Azure ATP admin center is designed for hybrid environments where part of your organization is hosted in on-premises servers and part of your environment is hosted in Microsoft 365. Azure ATP collects, analyzes, detects, and alerts you to suspicious activity in your on-premises Active Directory environment. The Azure ATP admin center is where you can perform the following:"},{"key":"5bo7b","data":{"text-align":"start"},"text":"View all suspicious activity","type":"unordered-list-item","depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"key":"do7ei","data":{},"type":"unordered-list-item","inlineStyleRanges":[],"text":"Protect user credentials stored in Active Directory (AD)","depth":0,"entityRanges":[]},{"data":{},"type":"unordered-list-item","text":"Supply a timeline for clear incident information\n ","depth":0,"inlineStyleRanges":[],"entityRanges":[],"key":"6lfuf"},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"Azure Active Directory (AD) admin center","data":{},"type":"header-two","key":"bg0l1"},{"text":" ","depth":0,"entityRanges":[{"key":6,"offset":0,"length":1}],"inlineStyleRanges":[],"data":{},"type":"atomic","key":"1dabt"},{"entityRanges":[{"key":7,"offset":73,"length":29}],"text":"The Azure Active Directory (AD) admin center can be accessed by going to https://aad.portal.azure.com/. Azure AD is the cloud version of your on-premise AD. It's like on-premise AD on steroids. It's where you can perform the following:","key":"733t3","depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[]},{"inlineStyleRanges":[],"data":{},"text":"Manage identity including users and groups.","entityRanges":[],"type":"unordered-list-item","key":"7e9f","depth":0},{"data":{},"key":"an3bm","type":"unordered-list-item","entityRanges":[],"depth":0,"text":"Enable multi-factor authentication (MFA)","inlineStyleRanges":[]},{"key":"42bf5","text":"Configure self-service password reset","depth":0,"type":"unordered-list-item","entityRanges":[],"inlineStyleRanges":[],"data":{}},{"entityRanges":[],"key":"8va8u","text":"Edit company branding","inlineStyleRanges":[],"depth":0,"type":"unordered-list-item","data":{}},{"data":{},"entityRanges":[],"type":"unordered-list-item","inlineStyleRanges":[],"key":"1csbh","depth":0,"text":"View user sign-ins"},{"depth":0,"text":"Configure conditional access policies","entityRanges":[],"key":"60la5","type":"unordered-list-item","data":{},"inlineStyleRanges":[]},{"depth":0,"key":"6gk5v","type":"header-two","text":"Cloud App Security admin center","entityRanges":[],"data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[],"text":" ","entityRanges":[{"key":8,"length":1,"offset":0}],"type":"atomic","key":"9jk1e","data":{},"depth":0},{"text":"The cloud app security admin center can be accessed by going to https://portal.cloudappsecurity.com. From the cloud app security admin center, you can manage unsanctioned cloud applications. From the Cloud App security admin center you can perform the following:","depth":0,"type":"unstyled","entityRanges":[{"length":35,"offset":64,"key":9}],"data":{},"inlineStyleRanges":[],"key":"8kipa"},{"text":"Discover unauthorized cloud applications being used within your organization","entityRanges":[],"type":"unordered-list-item","depth":0,"data":{},"key":"dhpsi","inlineStyleRanges":[]},{"type":"unordered-list-item","data":{},"depth":0,"text":"Connect and manage authorized apps","entityRanges":[],"key":"9f0se","inlineStyleRanges":[]},{"data":{},"depth":0,"key":"997pr","entityRanges":[],"inlineStyleRanges":[],"type":"unordered-list-item","text":"Configure policies to manage risk"},{"text":"View and manage alerts","data":{},"key":"d35pl","depth":0,"type":"unordered-list-item","inlineStyleRanges":[],"entityRanges":[]},{"depth":0,"key":"37mv9","entityRanges":[],"text":"Compliance admin center","data":{},"type":"header-two","inlineStyleRanges":[]},{"key":"6l8so","inlineStyleRanges":[],"text":" ","depth":0,"type":"atomic","data":{},"entityRanges":[{"length":1,"offset":0,"key":10}]},{"key":"d2k92","depth":0,"entityRanges":[{"length":41,"offset":56,"key":11}],"data":{},"text":"The compliance admin center can be accessed by going to https://compliance.microsoft.com/homepage. The compliance admin center is where you can manage the compliance of your tenant. You can classify data, set retention policies, and recover data. From the compliance admin center you can perform the following:","type":"unstyled","inlineStyleRanges":[]},{"type":"unordered-list-item","key":"cvaog","data":{},"text":"Create sensitivity and retention labels to retain data for as long as needed.","entityRanges":[],"depth":0,"inlineStyleRanges":[]},{"text":"Review intelligent reports to view where labels are being used.","key":"brc39","inlineStyleRanges":[],"depth":0,"entityRanges":[],"data":{},"type":"unordered-list-item"},{"data":{},"key":"9q2ar","depth":0,"inlineStyleRanges":[],"entityRanges":[],"type":"unordered-list-item","text":"Review a detailed view of the classification trends across your tenant."},{"text":"Endpoint Manager admin center","inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"cthvk","type":"header-two","data":{}},{"data":{},"type":"atomic","key":"fkujl","text":" ","depth":0,"entityRanges":[{"offset":0,"key":12,"length":1}],"inlineStyleRanges":[]},{"inlineStyleRanges":[],"text":"The Endpoint manager admin center can be accessed by going to https://endpoint.microsoft.com/?ref=AdminCenter#home. The Endpoint manager admin center is where you can manage the end-user devices. It's where you can perform the following:","entityRanges":[{"length":52,"key":13,"offset":62}],"data":{},"key":"ber6o","depth":0,"type":"unstyled"},{"depth":0,"text":"Enroll and configure devices","entityRanges":[],"type":"unordered-list-item","key":"ddlnr","data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"3b8ok","type":"unordered-list-item","data":{},"text":"Distribute apps to your devices"},{"depth":0,"inlineStyleRanges":[],"data":{},"type":"unordered-list-item","entityRanges":[],"text":"Monitor and set compliance requirements on devices","key":"bue80"},{"data":{},"text":"Exchange admin center","key":"9hooe","type":"header-two","inlineStyleRanges":[],"entityRanges":[],"depth":0},{"entityRanges":[{"offset":0,"key":14,"length":1}],"key":"43fvm","depth":0,"data":{},"text":" ","inlineStyleRanges":[],"type":"atomic"},{"type":"unstyled","text":"The Exchange admin center can be accessed by going to https://admin.exchange.microsoft.com/. The Exchange admin center is where you manage email and everything about email. It's where you can perform the following:","entityRanges":[{"key":15,"offset":54,"length":37}],"data":{},"inlineStyleRanges":[],"key":"4laal","depth":0},{"entityRanges":[],"text":"Manage user mailboxes","key":"6a45u","depth":0,"inlineStyleRanges":[],"data":{},"type":"unordered-list-item"},{"depth":0,"type":"unordered-list-item","entityRanges":[],"data":{},"inlineStyleRanges":[],"key":"8tib9","text":"Create and manage shared/resource mailboxes"},{"depth":0,"text":"Create mail flow rules","inlineStyleRanges":[],"data":{},"type":"unordered-list-item","entityRanges":[],"key":"bf9eu"},{"data":{},"type":"unordered-list-item","inlineStyleRanges":[],"entityRanges":[],"text":"Perform message traces","depth":0,"key":"affn1"},{"key":"8j0na","depth":0,"data":{},"text":"Power Platform admin center","entityRanges":[],"type":"header-two","inlineStyleRanges":[]},{"depth":0,"data":{},"text":" ","key":"2srot","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"length":1,"key":16}]},{"key":"de7hv","inlineStyleRanges":[],"depth":0,"type":"unstyled","entityRanges":[{"offset":60,"key":17,"length":42}],"text":"The Power Platform admin center can be accessed by going to https://admin.powerplatform.microsoft.com/. The Power Platform admin center is where you can manage the automation of repetitive tasks. From the Power Platform admin center you can perform the following:","data":{}},{"text":"Review Power Automate analytics","inlineStyleRanges":[],"data":{},"entityRanges":[],"key":"eko58","type":"unordered-list-item","depth":0},{"depth":0,"inlineStyleRanges":[],"type":"unordered-list-item","text":"Review Power Apps analytics","data":{},"entityRanges":[],"key":"bhu1t"},{"data":{},"key":"6j3ol","entityRanges":[],"inlineStyleRanges":[],"text":"Create integrations between on-premise, Power BI, Microsoft Flow, and PowerApps.","depth":0,"type":"unordered-list-item"},{"key":"39st2","inlineStyleRanges":[],"depth":0,"type":"unordered-list-item","data":{},"text":"Manage Dynamics 365 apps","entityRanges":[]},{"text":"Microsoft 365 Apps admin center","depth":0,"entityRanges":[],"key":"2ib2o","type":"header-two","data":{},"inlineStyleRanges":[]},{"text":" ","data":{},"type":"atomic","key":"6fdpj","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":18,"length":1}],"depth":0},{"data":{},"key":"fen7v","depth":0,"text":"The Microsoft 365 Apps admin center can be accessed by going to https://config.office.com/officeSettings. The Microsoft 365 Apps admin center can be used to deploy settings and configurations to users that install the Office suite on their computers. Traditionally, the configuration found in the Microsoft 365 Apps admin center would have been performed via group policy","entityRanges":[{"offset":64,"key":19,"length":40}],"type":"unstyled","inlineStyleRanges":[]},{"text":"Deploy Office customization policies","data":{},"depth":0,"entityRanges":[],"type":"unordered-list-item","inlineStyleRanges":[],"key":"9ur51"},{"type":"unordered-list-item","depth":0,"data":{},"text":"Receive and implement security policy recommendations","key":"fi7pf","inlineStyleRanges":[],"entityRanges":[]},{"type":"unordered-list-item","data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"5uah2","depth":0,"text":"Create an Office Customization to deploy Office with specific configurations"},{"entityRanges":[],"data":{},"key":"e4or","inlineStyleRanges":[],"text":"Microsoft Stream admin center","depth":0,"type":"header-two"},{"type":"unstyled","entityRanges":[{"offset":62,"length":37,"key":20}],"data":{},"key":"44rac","depth":0,"inlineStyleRanges":[],"text":"The Microsoft Stream admin center can be accessed by going to https://web.microsoftstream.com/admin. From the Stream admin center, you can configure options for Microsoft Stream. For example, you can limit who can host live events. There are a ton of options in the admin center. Some of which are:"},{"type":"unordered-list-item","text":"Set Stream admins","depth":0,"entityRanges":[],"data":{},"key":"bqvam","inlineStyleRanges":[]},{"text":"Manage content on behalf of users","type":"unordered-list-item","entityRanges":[],"inlineStyleRanges":[],"key":"6na0q","data":{},"depth":0},{"depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"Configure live events, comments, and restrict organization-wide channel creation","type":"unordered-list-item","key":"dlfeg"},{"entityRanges":[],"type":"header-two","depth":0,"data":{},"key":"7i08p","inlineStyleRanges":[],"text":"Power BI admin center"},{"key":"8m6k7","data":{},"text":" ","type":"atomic","inlineStyleRanges":[],"depth":0,"entityRanges":[{"offset":0,"length":1,"key":21}]},{"data":{},"text":"The Power BI admin center can be accessed by going to https://app.powerbi.com/admin-portal. The Power BI admin center is used to manage Power BI. From it, you can view usage metrics, and control how users interact with Power BI. From the Power BI admin center you can perform the following:","depth":0,"inlineStyleRanges":[],"type":"unstyled","entityRanges":[{"key":22,"length":36,"offset":54}],"key":"2ifee"},{"inlineStyleRanges":[],"type":"unordered-list-item","entityRanges":[],"key":"9dovk","depth":0,"data":{},"text":"Configure tenant settings"},{"inlineStyleRanges":[],"data":{},"key":"3acdp","depth":0,"text":"Review usage metrics","entityRanges":[],"type":"unordered-list-item"},{"key":"5qmjj","type":"unordered-list-item","inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{},"text":"Configure sensitivity labels"},{"entityRanges":[],"depth":0,"text":"Enable Cloud App Security integration","data":{},"inlineStyleRanges":[],"key":"cs71h","type":"unordered-list-item"},{"inlineStyleRanges":[],"key":"bh6lu","entityRanges":[],"data":{},"depth":0,"text":"Security admin center","type":"header-two"},{"key":"2ffkg","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"key":23,"length":1,"offset":0}],"text":" ","depth":0,"data":{}},{"text":"The Security admin center can be accessed by going to https://protection.office.com/. The Security admin center is used to get visibility, investigate, and manage the security of your Microsoft 365 tenant. From it you can perform the following:","entityRanges":[{"offset":54,"key":24,"length":30}],"data":{},"inlineStyleRanges":[],"depth":0,"type":"unstyled","key":"b3u6f"},{"type":"unordered-list-item","inlineStyleRanges":[],"text":"Manage and view alerts","entityRanges":[],"data":{},"key":"b96n9","depth":0},{"data":{},"key":"c7u41","entityRanges":[],"inlineStyleRanges":[],"text":"Launch simulation attacks","type":"unordered-list-item","depth":0},{"inlineStyleRanges":[],"type":"unordered-list-item","key":"63r9a","data":{},"text":"Investigate threats","entityRanges":[],"depth":0},{"entityRanges":[],"depth":0,"key":"20j8t","data":{},"inlineStyleRanges":[],"text":"Configure anti-phishing, anti-spam, attachment, and link policies","type":"unordered-list-item"},{"entityRanges":[],"text":"SharePoint admin center","inlineStyleRanges":[],"key":"54l9u","depth":0,"data":{},"type":"header-two"},{"depth":0,"text":" ","key":"ee12c","type":"atomic","inlineStyleRanges":[],"entityRanges":[{"key":25,"length":1,"offset":0}],"data":{}},{"depth":0,"data":{},"key":"e0k8e","entityRanges":[],"inlineStyleRanges":[],"text":"The SharePoint admin center can be accessed by going to the Microsoft 365 admin center > Show all > All admin centers > SharePoint. From the SharePoint admin center, you can manage SharePoint sites and OneDrive sites. You can perform the following:","type":"unstyled"},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"unordered-list-item","key":"cdmmb","data":{},"text":"Create and manage SharePoint sites"},{"inlineStyleRanges":[],"text":"Configure sharing and access control","data":{},"type":"unordered-list-item","entityRanges":[],"key":"4hgru","depth":0},{"depth":0,"text":"Manage tenant-wide settings","entityRanges":[],"type":"unordered-list-item","data":{},"inlineStyleRanges":[],"key":"79k6f"},{"text":"Migrate data to SharePoint","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"6jf3c","type":"unordered-list-item","depth":0},{"inlineStyleRanges":[],"key":"1ueoc","text":"Microsoft Teams admin center","entityRanges":[],"type":"header-two","depth":0,"data":{}},{"key":"5ifnr","text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"key":26,"offset":0}],"data":{},"type":"atomic","depth":0},{"entityRanges":[{"offset":51,"length":34,"key":27}],"type":"unstyled","depth":0,"text":"The Teams admin center can be accessed by going to https://admin.teams.microsoft.com/. From the Microsoft Teams admin center, you can manage Microsoft Teams. From it, you can configure messaging, conferencing, and external communication options. You can perform the following:","key":"6pfao","data":{},"inlineStyleRanges":[]},{"data":{},"key":"evq1k","text":" Review relevant information about your Teams deployment","type":"unordered-list-item","depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"entityRanges":[],"data":{},"text":"View and manage Teams users","inlineStyleRanges":[],"key":"hihu","depth":0,"type":"unordered-list-item"},{"key":"9hdmg","depth":0,"inlineStyleRanges":[],"type":"unordered-list-item","data":{},"entityRanges":[],"text":"Manage your Teams"},{"key":"92h8a","inlineStyleRanges":[],"text":"Configure organization-wide settings","type":"unordered-list-item","depth":0,"data":{},"entityRanges":[]},{"text":"Yammer admin center","key":"5hpmt","entityRanges":[],"inlineStyleRanges":[],"type":"header-two","data":{},"depth":0},{"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":28}],"key":"fvf0j","depth":0,"text":" ","data":{},"type":"atomic"},{"data":{},"entityRanges":[],"text":"The Yammer admin center can be accessed by going to the Microsoft 365 admin center > Show all > All admin centers > Yammer. From the Yammer admin center, you can manage your Yammer network, for example, you can set usage policies and control external network settings. You can also perform the following:","key":"6er9g","inlineStyleRanges":[],"depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"text":"Configure Yammer tenant-wide settings","depth":0,"type":"unordered-list-item","key":"d7lg2","data":{},"entityRanges":[]},{"text":"Manage Yammer admins","inlineStyleRanges":[],"depth":0,"type":"unordered-list-item","data":{},"key":"dlsbi","entityRanges":[]},{"depth":0,"text":"Configure usage policy","type":"unordered-list-item","entityRanges":[],"key":"2serg","data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[],"depth":0,"key":"8etrc","entityRanges":[],"type":"unordered-list-item","data":{},"text":"Manage external network access"},{"entityRanges":[],"type":"unordered-list-item","key":"f9jtu","inlineStyleRanges":[],"depth":0,"text":"Monitor keywords","data":{}},{"inlineStyleRanges":[],"text":"Configure security settings","data":{},"depth":0,"type":"unordered-list-item","entityRanges":[],"key":"8gi2h"},{"entityRanges":[],"text":"Export data","key":"3ihus","data":{},"inlineStyleRanges":[],"type":"unordered-list-item","depth":0}]},"sectionId":"qwJW5VrBW","id":"bzotoOjEe","datePublished":"2022/5/26","slug":"Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe","description":"Everything you need to know about the portal office admin centers","featuredImage":"https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png"},
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
