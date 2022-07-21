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
      path: '/course/ms-500/learn/Introduction-to-Intune-7gR3L122b',
      article: {"featuredImage":"https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png","publish":true,"sectionId":"l0DxUuonW","type":"article","slug":"Introduction-to-Intune-7gR3L122b","title":"Introduction to Intune","description":"Microsoft Intune is a beast of an application. I'll explain Microsoft Intune and most of its components throughout the next lessons. ","id":"7gR3L122b","article":{"blocks":[{"key":"3bsc7","depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[{"length":373,"style":"color-rgb(33,37,41)","offset":0},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":373},{"style":"fontsize-16","length":373,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":373,"offset":0}],"text":"Microsoft Intune is a beast of an application. For those that have used Microsoft System Center Configuration Manager (SCCM) explaining Microsoft Intune is a bit easier Because Microsoft Intune is a cloud-based replacement for configuration manager. If you haven't used SCCM don't worry, I'll explain Microsoft Intune and most of its components throughout the next lessons. ","entityRanges":[]},{"type":"atomic","text":" ","depth":0,"data":{},"key":"24pa7","inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":0}]},{"depth":0,"text":"So far, we have looked at securing Microsoft 365, Microsoft servers, and third-party devices like firewalls but we haven't looked at how to secure Windows 10, Android, Apple iOS, and Macs. Securing client devices is exactly where Microsoft Intune comes into play.","data":{},"entityRanges":[],"key":"2ij9u","type":"unstyled","inlineStyleRanges":[]},{"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"70nq3","depth":0,"text":"Let's review the parts of my Microsoft Intune to explain what it can do."},{"text":"What licenses make Microsoft Intune available?","type":"header-two","entityRanges":[],"inlineStyleRanges":[{"length":46,"style":"color-rgb(33,37,41)","offset":0},{"length":46,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-2rem","length":46,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":46,"offset":0}],"data":{"text-align":"start"},"depth":0,"key":"7jojb"},{"text":"Intune is include 2xwsd in the following licenses:","entityRanges":[],"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":50},{"style":"bgcolor-rgb(255,255,255)","length":50,"offset":0},{"length":50,"offset":0,"style":"fontsize-2rem"},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":50}],"key":"7akf8","type":"unstyled","depth":0,"data":{}},{"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":37},{"offset":0,"length":37,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","offset":0,"length":37},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":37}],"depth":0,"type":"unordered-list-item","entityRanges":[],"key":"5gqok","text":"Microsoft 365 E3 and Microsoft 365 E5","data":{"margin-left":"1.5em"}},{"data":{"margin-left":"1.5em"},"entityRanges":[],"depth":0,"text":"Enterprise Mobility + Security E3  and Enterprise Mobility + Security E5","type":"unordered-list-item","inlineStyleRanges":[{"length":72,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"length":72,"style":"bgcolor-rgb(255,255,255)"},{"length":72,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":72}],"key":"5dknt"},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":30,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":30,"offset":0},{"length":30,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":30,"offset":0}],"data":{"margin-left":"1.5em"},"type":"unordered-list-item","text":"Microsoft 365 Business Premium","entityRanges":[],"key":"bjc4g","depth":0},{"depth":0,"key":"871p2","type":"unordered-list-item","data":{"margin-left":"1.5em"},"inlineStyleRanges":[{"offset":0,"length":37,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":37,"offset":0},{"offset":0,"style":"fontsize-16","length":37},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":37}],"entityRanges":[],"text":"Microsoft 365 F1 and Microsoft 365 F3"},{"entityRanges":[],"type":"unordered-list-item","key":"7ngc1","text":"Microsoft 365 Government G3  and Microsoft 365 Government G5","inlineStyleRanges":[{"length":60,"style":"color-rgb(33,37,41)","offset":0},{"offset":0,"length":60,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":60,"offset":0},{"offset":0,"length":60,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"depth":0,"data":{"margin-left":"1.5em"}},{"entityRanges":[],"depth":0,"type":"unordered-list-item","key":"9h2ed","inlineStyleRanges":[{"length":20,"style":"color-rgb(33,37,41)","offset":0},{"length":20,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":20,"offset":0},{"offset":0,"length":20,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"text":"Intune for Education","data":{"margin-left":"1.5em"}},{"key":"ejpmf","type":"unordered-list-item","entityRanges":[],"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":57},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":57},{"style":"fontsize-16","offset":0,"length":57},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":57}],"data":{"margin-left":"1.5em"},"text":"Microsoft 365 Education A3 and Microsoft 365 Education A5 ","depth":0},{"key":"b80qq","type":"header-two","inlineStyleRanges":[],"text":"How do you connect to the Intune admin center?","depth":0,"entityRanges":[],"data":{}},{"inlineStyleRanges":[],"text":"Before we dive into what Intune can do, let's connect to the back-end admin center. Microsoft calls the admin center Microsoft Endpoint Manager admin center. You can access the Microsoft Endpoint Manager admin center by going to your Microsoft 365 admin center > admin centers > Endpoint Manager. ","type":"unstyled","entityRanges":[{"offset":279,"key":1,"length":16}],"key":"cahde","depth":0,"data":{}},{"entityRanges":[],"data":{},"text":"","type":"unstyled","inlineStyleRanges":[],"key":"iflg","depth":0},{"entityRanges":[{"offset":0,"length":1,"key":2}],"key":"dgnar","depth":0,"type":"atomic","data":{},"text":" ","inlineStyleRanges":[]},{"entityRanges":[],"type":"header-two","text":"Inventory","key":"be8in","data":{},"inlineStyleRanges":[],"depth":0},{"entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[],"text":"First, Microsoft Intune will hold all of your client devices providing an inventory to help you manage all of the devices. It will gather a ton of information about the device but don’t worry, it won’t gather user information that the organization doesn’t need. Once the devices are in Microsoft Intune you can do a lot of cool things with them. And don't worry, Microsoft Intune keeps your devices in Azure Active Directory so you can configure conditional access policies around your devices.","key":"5apkm","data":{}},{"depth":0,"type":"header-three","entityRanges":[],"inlineStyleRanges":[],"data":{},"text":"How to view all the devices in Intune","key":"a3eus"},{"depth":0,"type":"unstyled","key":"flbjp","entityRanges":[{"key":3,"length":11,"offset":92}],"inlineStyleRanges":[],"text":"To view all the devices in Intune go to Microsoft Endpoint Manager admin center > Devices > All devices.","data":{}},{"key":"elet2","entityRanges":[],"depth":0,"type":"header-three","text":"How to setup clean-up rules","data":{},"inlineStyleRanges":[]},{"depth":0,"type":"unstyled","entityRanges":[],"text":"Since users are always leaving your organization and replacing devices the Intune inventory will get stale pretty quickly. Microsoft Intune can automatically remove devices for you. Let's configure Intune to automatically remove devices that haven't checked in for 60 days.","key":"1qseo","data":{},"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":150,"offset":123},{"length":150,"offset":123,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":150,"offset":123},{"offset":123,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":150}]},{"entityRanges":[{"key":4,"offset":61,"length":21}],"data":{},"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":39},{"length":8,"style":"BOLD","offset":51},{"style":"BOLD","offset":61,"length":21}],"depth":0,"text":"1. Go to Microsoft Endpoint Manager admin center > Devices > Device clean-up rules.","key":"37jb1","type":"unstyled"},{"text":"2. Click Delete devices based on last check-in date to Yes.","inlineStyleRanges":[{"style":"BOLD","length":42,"offset":9},{"style":"BOLD","length":3,"offset":55}],"key":"9qgh3","entityRanges":[],"data":{},"type":"unstyled","depth":0},{"entityRanges":[],"text":"3. Set Delete devices that haven't checked in for this many days to 60.","key":"9com6","inlineStyleRanges":[{"length":57,"offset":7,"style":"BOLD"},{"offset":68,"length":2,"style":"BOLD"}],"depth":0,"data":{},"type":"unstyled"},{"text":"4. Click Save.","type":"unstyled","key":"5lde6","entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":4}],"data":{}},{"key":"3srmg","type":"atomic","text":" ","inlineStyleRanges":[],"depth":0,"entityRanges":[{"length":1,"key":5,"offset":0}],"data":{}},{"key":"9fivp","type":"header-two","inlineStyleRanges":[],"text":"Configuration profiles","depth":0,"entityRanges":[],"data":{}},{"inlineStyleRanges":[],"key":"55ub9","type":"atomic","depth":0,"data":{},"entityRanges":[{"key":6,"offset":0,"length":1}],"text":" "},{"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"depth":0,"key":"11qa4","data":{},"text":"For example, you can deploy configuration profiles that will configure the devices for you. For example, you can configure encryption to be deployed to all your Windows 10 devices. The encryption can happen silently behind the scenes, so your users don’t even know it’s happening."},{"entityRanges":[],"type":"unstyled","data":{},"text":"Sometimes, configuration profiles require the users to configure the devices. For example, requiring a passcode on all Android devices. Since Intune doesn’t know what the user will want the passcode to be, Intune will prompt the user to configure the passcode.","depth":0,"key":"8k8d7","inlineStyleRanges":[]},{"depth":0,"type":"header-two","data":{},"text":"Compliance policies","inlineStyleRanges":[],"entityRanges":[],"key":"4a978"},{"text":" ","type":"atomic","entityRanges":[{"offset":0,"length":1,"key":7}],"depth":0,"key":"4of8p","data":{},"inlineStyleRanges":[]},{"depth":0,"entityRanges":[],"text":"Compliant policies are a way to verify a device is configured properly. They can work in conjunction with configuration profiles. Let's take an example.","inlineStyleRanges":[],"data":{},"key":"2tdg9","type":"unstyled"},{"inlineStyleRanges":[],"type":"unstyled","data":{},"text":"Let's say you have a configuration profile that requires a user to set up a password on their Android device. How do you know the user has set up the password and hasn't simply skipped and ignored the messages? Furthermore, how do you block a device from getting corporate data while it does not have a password protecting it? This is where compliance policies come into play.","depth":0,"entityRanges":[],"key":"36kiu"},{"entityRanges":[],"text":"We can configure a compliance policy to verify a user has a password on their device and we can block that device from receiving Microsoft 365 data until the user has configured the password.","depth":0,"type":"unstyled","data":{},"key":"1mrvs","inlineStyleRanges":[]},{"key":"9g74f","data":{},"text":"App deployment","type":"header-two","inlineStyleRanges":[],"entityRanges":[],"depth":0},{"key":"deuc5","type":"atomic","text":" ","depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[{"length":1,"key":8,"offset":0}]},{"entityRanges":[],"depth":0,"type":"unstyled","data":{},"key":"f6cab","text":"Another notable feature of Microsoft Intune is the ability to deploy and configure apps. For example, you may want all devices to be using Microsoft Outlook. We can deploy Microsoft Outlook to Windows, Mac, Android, and iOS devices and we can configure outlook to automatically connect to the user's Microsoft 365 mailbox.","inlineStyleRanges":[]},{"data":{},"text":"Push updates","type":"header-two","entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"10un5"},{"entityRanges":[{"key":9,"length":1,"offset":0}],"depth":0,"data":{},"key":"4snpp","inlineStyleRanges":[],"text":" ","type":"atomic"},{"type":"unstyled","text":"Last but not least is the ability to push updates to some devices. I say some devices because Google and Apple block you from pushing updates to some of their devices. We’ll get into those details later. But by using compliance policies we can force users to update their devices if they want access to Microsoft 365 data.","key":"41nqb","entityRanges":[],"data":{},"depth":0,"inlineStyleRanges":[]},{"text":"Forget deploying images. Use Windows Autopilot","inlineStyleRanges":[],"type":"header-two","entityRanges":[],"depth":0,"key":"8hicf","data":{}},{"entityRanges":[{"offset":0,"length":1,"key":10}],"text":" ","data":{},"inlineStyleRanges":[],"type":"atomic","depth":0,"key":"3bldh"},{"text":"Finally, Microsoft Intune has something new called Autopilot. With Windows Autopilot, you no longer need to reimage a Windows 10 or Windows 11 computer or manually set up new devices. Your hardware vendor can ship them already connected to Intune straight to your employees. Or you can configure a device using Autopilot and automate the deployment of the device yourself.","entityRanges":[],"type":"unstyled","depth":0,"key":"6q7n5","inlineStyleRanges":[],"data":{}},{"entityRanges":[],"depth":0,"data":{},"type":"unstyled","key":"3kj0h","text":"There are three major advantages to using Windows Autopilot:","inlineStyleRanges":[]},{"key":"aess2","data":{},"type":"unstyled","text":"1. Device registration: Windows Autopilot will automatically add the new device to Microsoft Intune, Microsoft 365, and join your domain for you.","inlineStyleRanges":[],"entityRanges":[],"depth":0},{"text":"2. Profile creation and assignment: With the device automatically being joined to Microsoft Intune you can automatically deploy configuration profiles and apps to your devices.","inlineStyleRanges":[],"key":"5pee0","entityRanges":[],"depth":0,"type":"unstyled","data":{}},{"inlineStyleRanges":[],"key":"58pa2","text":"3. Shipping: Your vendor can ship devices directly to your users. Then your users can turn the device on, connect to the internet, and Windows Autopilot will automatically deliver apps and settings.","depth":0,"data":{},"entityRanges":[],"type":"unstyled"},{"entityRanges":[],"type":"header-two","text":"Setting device join limits","data":{},"depth":0,"key":"2cimv","inlineStyleRanges":[]},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"42t8n","data":{},"text":"Finally, there's one more option I'm unsure what lesson to put it under, so it's going here. How to set a limit on the number of devices a user can enroll into Intune or Azure AD.","type":"unstyled"},{"inlineStyleRanges":[],"depth":0,"data":{},"type":"unstyled","key":"c5qsi","text":"There are two places to limit the number of devices a user can enroll: Intune and Azure AD.","entityRanges":[]},{"inlineStyleRanges":[],"depth":0,"text":"How to restrict the number of devices a user can enroll in Intune","data":{},"entityRanges":[],"key":"fb0ul","type":"header-three"},{"depth":0,"type":"unstyled","entityRanges":[],"key":"cqjue","data":{},"inlineStyleRanges":[],"text":"Setting this option will limit the number of devices a user can enroll in Intune. This setting won't affect how many devices a user can have in Azure AD."},{"data":{},"type":"unstyled","entityRanges":[{"offset":78,"length":36,"key":11}],"key":"6nacs","text":"1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Enrollment device limit restrictions > All Users.","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":39,"offset":9},{"style":"BOLD","length":8,"offset":51},{"style":"BOLD","length":14,"offset":61},{"style":"BOLD","offset":78,"length":37},{"length":9,"style":"BOLD","offset":117}]},{"entityRanges":[{"offset":0,"length":1,"key":12}],"data":{},"type":"atomic","inlineStyleRanges":[],"key":"2uv59","depth":0,"text":" "},{"type":"unstyled","entityRanges":[],"depth":0,"key":"au80k","text":"2. Click Properties > Edit. Set the number of devices you want a user to be able to enroll. Click Review + save. Click Save.","data":{},"inlineStyleRanges":[{"offset":9,"length":11,"style":"BOLD"},{"style":"BOLD","length":4,"offset":22},{"style":"BOLD","length":13,"offset":98},{"style":"BOLD","length":4,"offset":119}]},{"inlineStyleRanges":[],"key":"e0gn7","text":" ","depth":0,"type":"atomic","entityRanges":[{"offset":0,"key":13,"length":1}],"data":{}},{"entityRanges":[],"key":"50c33","type":"header-three","depth":0,"data":{},"inlineStyleRanges":[],"text":"How to limit the number of devices a user can have in Azure AD"},{"type":"unstyled","depth":0,"text":"This setting will limit how many devices a user can have in Azure AD. Since Intune creates the devices in Azure AD this setting will affect Azure AD and Intune.","data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"3l77k"},{"entityRanges":[],"text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Devices.","type":"unstyled","depth":0,"key":"efd0m","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":35},{"style":"BOLD","length":22,"offset":47},{"offset":72,"style":"BOLD","length":7}],"data":{}},{"text":" ","key":"520lb","depth":0,"entityRanges":[{"length":1,"key":14,"offset":0}],"inlineStyleRanges":[],"data":{},"type":"atomic"},{"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":15},{"offset":34,"length":34,"style":"BOLD"},{"length":4,"offset":76,"style":"BOLD"}],"key":"cgm5n","type":"unstyled","data":{},"text":"2. Click Device settings. Set the Maximum number of devices per user. Click Save.","depth":0,"entityRanges":[{"offset":9,"key":15,"length":15}]},{"inlineStyleRanges":[],"data":{},"key":"ev0lq","entityRanges":[{"key":16,"offset":0,"length":1}],"depth":0,"type":"atomic","text":" "},{"text":"","type":"unstyled","depth":0,"data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"7h8k7"}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"width":"auto","height":"auto","src":"https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png","alignment":"none","alt":"Endpoint Manager admin center"},"type":"IMAGE"},"1":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://endpoint.microsoft.com/?ref=AdminCenter#home"}},"2":{"mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/q9Dj65h/endpoint-manager.png","alt":"How to open the Endpoint Manager admin center","height":"auto","width":"auto"},"type":"IMAGE"},"3":{"type":"LINK","data":{"targetOption":"_blank","url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/mDMDevicesPreview"},"mutability":"MUTABLE"},"4":{"mutability":"MUTABLE","data":{"url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/deviceCleanUp","targetOption":"_blank"},"type":"LINK"},"5":{"data":{"height":"auto","width":"auto","src":"https://i.ibb.co/5FGSPWH/device-clean-up-rules.png","alignment":"none","alt":"Intune automatically clean-up stale devices"},"type":"IMAGE","mutability":"MUTABLE"},"6":{"mutability":"MUTABLE","data":{"alt":"Microsoft Intune configuration profile","height":"auto","width":"auto","alignment":"none","src":"https://i.ibb.co/7tQMTkT/configuration-profiles.png"},"type":"IMAGE"},"7":{"data":{"src":"https://i.ibb.co/NV1pCKG/compliance-policy.png","height":"auto","alignment":"none","width":"auto","alt":"Microsoft Intune compliance policy"},"type":"IMAGE","mutability":"MUTABLE"},"8":{"type":"IMAGE","data":{"alignment":"none","height":"auto","src":"https://i.ibb.co/Lk6g8Cg/app-deployment.png","alt":"App deployment","width":"auto"},"mutability":"MUTABLE"},"9":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","height":"auto","alt":"Intune Update rings","src":"https://i.ibb.co/hB8Ysj9/Intune-Updates.png","width":"auto"}},"10":{"data":{"alt":"Autopilot","height":"auto","width":"auto","src":"https://i.ibb.co/FYLwR5d/Autopilot.png","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"11":{"type":"LINK","data":{"targetOption":"_blank","url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/deviceLimitEnrollmentRestrictions"},"mutability":"MUTABLE"},"12":{"data":{"alt":"Limit the number of devices a user can enroll in Intune","src":"https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png","width":"auto","alignment":"none","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"13":{"mutability":"MUTABLE","data":{"alignment":"none","width":"auto","src":"https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png","height":"auto","alt":"Limit enrollments in Intune"},"type":"IMAGE"},"14":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Azure AD Devices","width":"auto","src":"https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png","height":"auto","alignment":"none"}},"15":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_Devices/DevicesMenuBlade/DeviceSettings/menuId/","targetOption":"_blank"}},"16":{"type":"IMAGE","data":{"src":"https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png","alignment":"none","width":"auto","alt":"Set Azure AD Device limits","height":"auto"},"mutability":"MUTABLE"}}},"datePublished":"2022/6/17","images":["https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png","https://i.ibb.co/q9Dj65h/endpoint-manager.png","https://i.ibb.co/5FGSPWH/device-clean-up-rules.png","https://i.ibb.co/7tQMTkT/configuration-profiles.png","https://i.ibb.co/NV1pCKG/compliance-policy.png","https://i.ibb.co/Lk6g8Cg/app-deployment.png","https://i.ibb.co/hB8Ysj9/Intune-Updates.png","https://i.ibb.co/FYLwR5d/Autopilot.png","https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png","https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png","https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png","https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png"]},
      nextContentSlug: 'Setting-up-Android-Devices-ZyKX3Idjs',
      previousContentSlug: 'Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI',
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
                <div><p><span >Microsoft Intune is a beast of an application. For those that have used Microsoft System Center Configuration Manager (SCCM) explaining Microsoft Intune is a bit easier Because Microsoft Intune is a cloud-based replacement for configuration manager. If you haven't used SCCM don't worry, I'll explain Microsoft Intune and most of its components throughout the next lessons.</span>&nbsp;</p>
<div ><img src="https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png" alt="Endpoint Manager admin center" style="height: auto;width: auto"/></div>
<p>So far, we have looked at securing Microsoft 365, Microsoft servers, and third-party devices like firewalls but we haven't looked at how to secure Windows 10, Android, Apple iOS, and Macs. Securing client devices is exactly where Microsoft Intune comes into play.</p>
<p>Let's review the parts of my Microsoft Intune to explain what it can do.</p>
<h2 ><span >What licenses make Microsoft Intune available?</span></h2>
<p><span >Intune is include 2xwsd in the following licenses:</span></p>
<ul>
<li ><span >Microsoft 365 E3 and Microsoft 365 E5</span></li>
<li ><span >Enterprise Mobility + Security E3  and Enterprise Mobility + Security E5</span></li>
<li ><span >Microsoft 365 Business Premium</span></li>
<li ><span >Microsoft 365 F1 and Microsoft 365 F3</span></li>
<li ><span >Microsoft 365 Government G3  and Microsoft 365 Government G5</span></li>
<li ><span >Intune for Education</span></li>
<li ><span >Microsoft 365 Education A3 and Microsoft 365 Education A5</span>&nbsp;</li>
</ul>
<h2>How do you connect to the Intune admin center?</h2>
<p>Before we dive into what Intune can do, let's connect to the back-end admin center. Microsoft calls the admin center Microsoft Endpoint Manager admin center. You can access the Microsoft Endpoint Manager admin center by going to your Microsoft 365 admin center &gt; admin centers &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#home" target="_blank">Endpoint Manager</a>.&nbsp;</p>
<p></p>
<div ><img src="https://i.ibb.co/q9Dj65h/endpoint-manager.png" alt="How to open the Endpoint Manager admin center" style="height: auto;width: auto"/></div>
<h2>Inventory</h2>
<p>First, Microsoft Intune will hold all of your client devices providing an inventory to help you manage all of the devices. It will gather a ton of information about the device but don’t worry, it won’t gather user information that the organization doesn’t need. Once the devices are in Microsoft Intune you can do a lot of cool things with them. And don't worry, Microsoft Intune keeps your devices in Azure Active Directory so you can configure conditional access policies around your devices.</p>
<h3>How to view all the devices in Intune</h3>
<p>To view all the devices in Intune go to Microsoft Endpoint Manager admin center &gt; Devices &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/mDMDevicesPreview" target="_blank">All devices</a>.</p>
<h3>How to setup clean-up rules</h3>
<p>Since users are always leaving your organization and replacing devices the Intune inventory will get stale pretty quickly. <span >Microsoft Intune can automatically remove devices for you. Let's configure Intune to automatically remove devices that haven't checked in for 60 days.</span></p>
<p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/deviceCleanUp" target="_blank"><strong>Device clean-up rules</strong></a>.</p>
<p>2. Click <strong>Delete devices based on last check-in date</strong> to <strong>Yes</strong>.</p>
<p>3. Set <strong>Delete devices that haven't checked in for this many days</strong> to <strong>60</strong>.</p>
<p>4. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/5FGSPWH/device-clean-up-rules.png" alt="Intune automatically clean-up stale devices" style="height: auto;width: auto"/></div>
<h2>Configuration profiles</h2>
<div ><img src="https://i.ibb.co/7tQMTkT/configuration-profiles.png" alt="Microsoft Intune configuration profile" style="height: auto;width: auto"/></div>
<p>For example, you can deploy configuration profiles that will configure the devices for you. For example, you can configure encryption to be deployed to all your Windows 10 devices. The encryption can happen silently behind the scenes, so your users don’t even know it’s happening.</p>
<p>Sometimes, configuration profiles require the users to configure the devices. For example, requiring a passcode on all Android devices. Since Intune doesn’t know what the user will want the passcode to be, Intune will prompt the user to configure the passcode.</p>
<h2>Compliance policies</h2>
<div ><img src="https://i.ibb.co/NV1pCKG/compliance-policy.png" alt="Microsoft Intune compliance policy" style="height: auto;width: auto"/></div>
<p>Compliant policies are a way to verify a device is configured properly. They can work in conjunction with configuration profiles. Let's take an example.</p>
<p>Let's say you have a configuration profile that requires a user to set up a password on their Android device. How do you know the user has set up the password and hasn't simply skipped and ignored the messages? Furthermore, how do you block a device from getting corporate data while it does not have a password protecting it? This is where compliance policies come into play.</p>
<p>We can configure a compliance policy to verify a user has a password on their device and we can block that device from receiving Microsoft 365 data until the user has configured the password.</p>
<h2>App deployment</h2>
<div ><img src="https://i.ibb.co/Lk6g8Cg/app-deployment.png" alt="App deployment" style="height: auto;width: auto"/></div>
<p>Another notable feature of Microsoft Intune is the ability to deploy and configure apps. For example, you may want all devices to be using Microsoft Outlook. We can deploy Microsoft Outlook to Windows, Mac, Android, and iOS devices and we can configure outlook to automatically connect to the user's Microsoft 365 mailbox.</p>
<h2>Push updates</h2>
<div ><img src="https://i.ibb.co/hB8Ysj9/Intune-Updates.png" alt="Intune Update rings" style="height: auto;width: auto"/></div>
<p>Last but not least is the ability to push updates to some devices. I say some devices because Google and Apple block you from pushing updates to some of their devices. We’ll get into those details later. But by using compliance policies we can force users to update their devices if they want access to Microsoft 365 data.</p>
<h2>Forget deploying images. Use Windows Autopilot</h2>
<div ><img src="https://i.ibb.co/FYLwR5d/Autopilot.png" alt="Autopilot" style="height: auto;width: auto"/></div>
<p>Finally, Microsoft Intune has something new called Autopilot. With Windows Autopilot, you no longer need to reimage a Windows 10 or Windows 11 computer or manually set up new devices. Your hardware vendor can ship them already connected to Intune straight to your employees. Or you can configure a device using Autopilot and automate the deployment of the device yourself.</p>
<p>There are three major advantages to using Windows Autopilot:</p>
<p>1. Device registration: Windows Autopilot will automatically add the new device to Microsoft Intune, Microsoft 365, and join your domain for you.</p>
<p>2. Profile creation and assignment: With the device automatically being joined to Microsoft Intune you can automatically deploy configuration profiles and apps to your devices.</p>
<p>3. Shipping: Your vendor can ship devices directly to your users. Then your users can turn the device on, connect to the internet, and Windows Autopilot will automatically deliver apps and settings.</p>
<h2>Setting device join limits</h2>
<p>Finally, there's one more option I'm unsure what lesson to put it under, so it's going here. How to set a limit on the number of devices a user can enroll into Intune or Azure AD.</p>
<p>There are two places to limit the number of devices a user can enroll: Intune and Azure AD.</p>
<h3>How to restrict the number of devices a user can enroll in Intune</h3>
<p>Setting this option will limit the number of devices a user can enroll in Intune. This setting won't affect how many devices a user can have in Azure AD.</p>
<p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Enroll devices</strong> &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/deviceLimitEnrollmentRestrictions" target="_blank"><strong>Enrollment device limit restrictions</strong></a><strong> </strong>&gt; <strong>All Users</strong>.</p>
<div ><img src="https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png" alt="Limit the number of devices a user can enroll in Intune" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Properties </strong>&gt; <strong>Edit</strong>. Set the number of devices you want a user to be able to enroll. Click <strong>Review + save</strong>. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png" alt="Limit enrollments in Intune" style="height: auto;width: auto"/></div>
<h3>How to limit the number of devices a user can have in Azure AD</h3>
<p>This setting will limit how many devices a user can have in Azure AD. Since Intune creates the devices in Azure AD this setting will affect Azure AD and Intune.</p>
<p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Devices</strong>.</p>
<div ><img src="https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png" alt="Azure AD Devices" style="height: auto;width: auto"/></div>
<p>2. Click <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_Devices/DevicesMenuBlade/DeviceSettings/menuId/" target="_blank"><strong>Device settings</strong></a>. Set the <strong>Maximum number of devices per user</strong>. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png" alt="Set Azure AD Device limits" style="height: auto;width: auto"/></div>
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
