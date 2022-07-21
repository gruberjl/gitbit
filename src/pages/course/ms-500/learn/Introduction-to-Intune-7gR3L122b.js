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
      article: {"datePublished":"2022/6/17","article":{"blocks":[{"type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":373},{"style":"bgcolor-rgb(255,255,255)","length":373,"offset":0},{"style":"fontsize-16","length":373,"offset":0},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":373}],"text":"Microsoft Intune is a beast of an application. For those that have used Microsoft System Center Configuration Manager (SCCM) explaining Microsoft Intune is a bit easier Because Microsoft Intune is a cloud-based replacement for configuration manager. If you haven't used SCCM don't worry, I'll explain Microsoft Intune and most of its components throughout the next lessons. ","data":{},"key":"3bsc7","entityRanges":[]},{"depth":0,"type":"atomic","entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[],"text":" ","key":"24pa7","data":{}},{"entityRanges":[],"text":"So far, we have looked at securing Microsoft 365, Microsoft servers, and third-party devices like firewalls but we haven't looked at how to secure Windows 10, Android, Apple iOS, and Macs. Securing client devices is exactly where Microsoft Intune comes into play.","depth":0,"type":"unstyled","key":"2ij9u","data":{},"inlineStyleRanges":[]},{"type":"unstyled","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"Let's review the parts of my Microsoft Intune to explain what it can do.","key":"70nq3"},{"text":"What licenses make Microsoft Intune available?","entityRanges":[],"data":{"text-align":"start"},"inlineStyleRanges":[{"length":46,"offset":0,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":46,"offset":0},{"style":"fontsize-2rem","length":46,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":46}],"depth":0,"key":"7jojb","type":"header-two"},{"type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":50,"offset":0},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":50},{"style":"fontsize-2rem","length":50,"offset":0},{"length":50,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"key":"7akf8","text":"Intune is include 2xwsd in the following licenses:","depth":0,"data":{}},{"key":"5gqok","type":"unordered-list-item","text":"Microsoft 365 E3 and Microsoft 365 E5","entityRanges":[],"depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":37},{"style":"bgcolor-rgb(255,255,255)","length":37,"offset":0},{"length":37,"style":"fontsize-16","offset":0},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":37}],"data":{"margin-left":"1.5em"}},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":72,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":72,"offset":0},{"style":"fontsize-16","offset":0,"length":72},{"length":72,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"type":"unordered-list-item","entityRanges":[],"data":{"margin-left":"1.5em"},"text":"Enterprise Mobility + Security E3  and Enterprise Mobility + Security E5","key":"5dknt","depth":0},{"type":"unordered-list-item","text":"Microsoft 365 Business Premium","data":{"margin-left":"1.5em"},"key":"bjc4g","depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":30,"offset":0},{"offset":0,"length":30,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":30,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":30}],"entityRanges":[]},{"data":{"margin-left":"1.5em"},"text":"Microsoft 365 F1 and Microsoft 365 F3","inlineStyleRanges":[{"length":37,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":37},{"length":37,"offset":0,"style":"fontsize-16"},{"length":37,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"depth":0,"type":"unordered-list-item","entityRanges":[],"key":"871p2"},{"data":{"margin-left":"1.5em"},"key":"7ngc1","type":"unordered-list-item","entityRanges":[],"depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":60},{"style":"bgcolor-rgb(255,255,255)","length":60,"offset":0},{"offset":0,"length":60,"style":"fontsize-16"},{"length":60,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"text":"Microsoft 365 Government G3  and Microsoft 365 Government G5"},{"data":{"margin-left":"1.5em"},"type":"unordered-list-item","text":"Intune for Education","entityRanges":[],"key":"9h2ed","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":20},{"length":20,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"length":20,"offset":0,"style":"fontsize-16"},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":20}],"depth":0},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":57,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":57,"offset":0},{"style":"fontsize-16","length":57,"offset":0},{"length":57,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"key":"ejpmf","data":{"margin-left":"1.5em"},"text":"Microsoft 365 Education A3 and Microsoft 365 Education A5 ","entityRanges":[],"type":"unordered-list-item","depth":0},{"data":{},"text":"How do you connect to the Intune admin center?","depth":0,"type":"header-two","entityRanges":[],"inlineStyleRanges":[],"key":"b80qq"},{"depth":0,"text":"Before we dive into what Intune can do, let's connect to the back-end admin center. Microsoft calls the admin center Microsoft Endpoint Manager admin center. You can access the Microsoft Endpoint Manager admin center by going to your Microsoft 365 admin center > admin centers > Endpoint Manager. ","type":"unstyled","entityRanges":[{"key":1,"length":16,"offset":279}],"key":"cahde","data":{},"inlineStyleRanges":[]},{"data":{},"entityRanges":[],"key":"iflg","text":"","depth":0,"type":"unstyled","inlineStyleRanges":[]},{"data":{},"text":" ","inlineStyleRanges":[],"key":"dgnar","depth":0,"entityRanges":[{"key":2,"length":1,"offset":0}],"type":"atomic"},{"key":"be8in","entityRanges":[],"text":"Inventory","data":{},"inlineStyleRanges":[],"type":"header-two","depth":0},{"depth":0,"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"text":"First, Microsoft Intune will hold all of your client devices providing an inventory to help you manage all of the devices. It will gather a ton of information about the device but don’t worry, it won’t gather user information that the organization doesn’t need. Once the devices are in Microsoft Intune you can do a lot of cool things with them. And don't worry, Microsoft Intune keeps your devices in Azure Active Directory so you can configure conditional access policies around your devices.","data":{},"key":"5apkm"},{"depth":0,"entityRanges":[],"key":"a3eus","data":{},"text":"How to view all the devices in Intune","inlineStyleRanges":[],"type":"header-three"},{"key":"flbjp","depth":0,"type":"unstyled","entityRanges":[{"offset":92,"length":11,"key":3}],"text":"To view all the devices in Intune go to Microsoft Endpoint Manager admin center > Devices > All devices.","data":{},"inlineStyleRanges":[]},{"key":"elet2","data":{},"text":"How to setup clean-up rules","inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"header-three"},{"entityRanges":[],"data":{},"inlineStyleRanges":[{"length":150,"style":"color-rgb(33,37,41)","offset":123},{"offset":123,"length":150,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","offset":123,"length":150},{"offset":123,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":150}],"text":"Since users are always leaving your organization and replacing devices the Intune inventory will get stale pretty quickly. Microsoft Intune can automatically remove devices for you. Let's configure Intune to automatically remove devices that haven't checked in for 60 days.","type":"unstyled","depth":0,"key":"1qseo"},{"text":"1. Go to Microsoft Endpoint Manager admin center > Devices > Device clean-up rules.","entityRanges":[{"key":4,"length":21,"offset":61}],"type":"unstyled","key":"37jb1","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":39},{"length":8,"style":"BOLD","offset":51},{"offset":61,"length":21,"style":"BOLD"}],"depth":0,"data":{}},{"data":{},"text":"2. Click Delete devices based on last check-in date to Yes.","key":"9qgh3","depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"offset":9,"length":42,"style":"BOLD"},{"length":3,"style":"BOLD","offset":55}]},{"text":"3. Set Delete devices that haven't checked in for this many days to 60.","type":"unstyled","inlineStyleRanges":[{"offset":7,"style":"BOLD","length":57},{"style":"BOLD","length":2,"offset":68}],"entityRanges":[],"depth":0,"data":{},"key":"9com6"},{"type":"unstyled","key":"5lde6","text":"4. Click Save.","data":{},"inlineStyleRanges":[{"offset":9,"length":4,"style":"BOLD"}],"entityRanges":[],"depth":0},{"depth":0,"text":" ","key":"3srmg","inlineStyleRanges":[],"data":{},"type":"atomic","entityRanges":[{"key":5,"length":1,"offset":0}]},{"entityRanges":[],"type":"header-two","key":"9fivp","depth":0,"data":{},"inlineStyleRanges":[],"text":"Configuration profiles"},{"text":" ","inlineStyleRanges":[],"data":{},"type":"atomic","depth":0,"entityRanges":[{"key":6,"offset":0,"length":1}],"key":"55ub9"},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"key":"11qa4","text":"For example, you can deploy configuration profiles that will configure the devices for you. For example, you can configure encryption to be deployed to all your Windows 10 devices. The encryption can happen silently behind the scenes, so your users don’t even know it’s happening.","type":"unstyled","data":{}},{"key":"8k8d7","data":{},"type":"unstyled","text":"Sometimes, configuration profiles require the users to configure the devices. For example, requiring a passcode on all Android devices. Since Intune doesn’t know what the user will want the passcode to be, Intune will prompt the user to configure the passcode.","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[],"key":"4a978","type":"header-two","text":"Compliance policies"},{"depth":0,"key":"4of8p","type":"atomic","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":7,"length":1}],"data":{},"text":" "},{"key":"2tdg9","inlineStyleRanges":[],"entityRanges":[],"data":{},"depth":0,"type":"unstyled","text":"Compliant policies are a way to verify a device is configured properly. They can work in conjunction with configuration profiles. Let's take an example."},{"depth":0,"data":{},"type":"unstyled","entityRanges":[],"text":"Let's say you have a configuration profile that requires a user to set up a password on their Android device. How do you know the user has set up the password and hasn't simply skipped and ignored the messages? Furthermore, how do you block a device from getting corporate data while it does not have a password protecting it? This is where compliance policies come into play.","inlineStyleRanges":[],"key":"36kiu"},{"inlineStyleRanges":[],"text":"We can configure a compliance policy to verify a user has a password on their device and we can block that device from receiving Microsoft 365 data until the user has configured the password.","key":"1mrvs","type":"unstyled","entityRanges":[],"depth":0,"data":{}},{"depth":0,"key":"9g74f","inlineStyleRanges":[],"data":{},"text":"App deployment","entityRanges":[],"type":"header-two"},{"entityRanges":[{"key":8,"offset":0,"length":1}],"data":{},"type":"atomic","key":"deuc5","inlineStyleRanges":[],"text":" ","depth":0},{"text":"Another notable feature of Microsoft Intune is the ability to deploy and configure apps. For example, you may want all devices to be using Microsoft Outlook. We can deploy Microsoft Outlook to Windows, Mac, Android, and iOS devices and we can configure outlook to automatically connect to the user's Microsoft 365 mailbox.","key":"f6cab","entityRanges":[],"data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[]},{"key":"10un5","text":"Push updates","data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"header-two"},{"data":{},"depth":0,"type":"atomic","text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"key":9,"offset":0}],"key":"4snpp"},{"depth":0,"entityRanges":[],"key":"41nqb","inlineStyleRanges":[],"type":"unstyled","text":"Last but not least is the ability to push updates to some devices. I say some devices because Google and Apple block you from pushing updates to some of their devices. We’ll get into those details later. But by using compliance policies we can force users to update their devices if they want access to Microsoft 365 data.","data":{}},{"data":{},"inlineStyleRanges":[],"depth":0,"type":"header-two","entityRanges":[],"key":"8hicf","text":"Forget deploying images. Use Windows Autopilot"},{"text":" ","depth":0,"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":10}],"key":"3bldh","data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"6q7n5","type":"unstyled","data":{},"text":"Finally, Microsoft Intune has something new called Autopilot. With Windows Autopilot, you no longer need to reimage a Windows 10 or Windows 11 computer or manually set up new devices. Your hardware vendor can ship them already connected to Intune straight to your employees. Or you can configure a device using Autopilot and automate the deployment of the device yourself."},{"key":"3kj0h","text":"There are three major advantages to using Windows Autopilot:","depth":0,"type":"unstyled","inlineStyleRanges":[],"data":{},"entityRanges":[]},{"depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"text":"1. Device registration: Windows Autopilot will automatically add the new device to Microsoft Intune, Microsoft 365, and join your domain for you.","data":{},"key":"aess2"},{"entityRanges":[],"depth":0,"data":{},"key":"5pee0","text":"2. Profile creation and assignment: With the device automatically being joined to Microsoft Intune you can automatically deploy configuration profiles and apps to your devices.","type":"unstyled","inlineStyleRanges":[]},{"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"data":{},"depth":0,"text":"3. Shipping: Your vendor can ship devices directly to your users. Then your users can turn the device on, connect to the internet, and Windows Autopilot will automatically deliver apps and settings.","key":"58pa2"},{"inlineStyleRanges":[],"key":"2cimv","data":{},"entityRanges":[],"text":"Setting device join limits","type":"header-two","depth":0},{"key":"42t8n","text":"Finally, there's one more option I'm unsure what lesson to put it under, so it's going here. How to set a limit on the number of devices a user can enroll into Intune or Azure AD.","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[],"type":"unstyled"},{"text":"There are two places to limit the number of devices a user can enroll: Intune and Azure AD.","data":{},"depth":0,"inlineStyleRanges":[],"key":"c5qsi","type":"unstyled","entityRanges":[]},{"depth":0,"entityRanges":[],"key":"fb0ul","type":"header-three","data":{},"inlineStyleRanges":[],"text":"How to restrict the number of devices a user can enroll in Intune"},{"data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"cqjue","text":"Setting this option will limit the number of devices a user can enroll in Intune. This setting won't affect how many devices a user can have in Azure AD.","entityRanges":[]},{"inlineStyleRanges":[{"offset":9,"length":39,"style":"BOLD"},{"offset":51,"style":"BOLD","length":8},{"style":"BOLD","length":14,"offset":61},{"length":37,"style":"BOLD","offset":78},{"style":"BOLD","length":9,"offset":117}],"entityRanges":[{"key":11,"offset":78,"length":36}],"depth":0,"key":"6nacs","text":"1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Enrollment device limit restrictions > All Users.","data":{},"type":"unstyled"},{"inlineStyleRanges":[],"key":"2uv59","depth":0,"entityRanges":[{"key":12,"length":1,"offset":0}],"data":{},"text":" ","type":"atomic"},{"type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","length":11,"offset":9},{"length":4,"offset":22,"style":"BOLD"},{"length":13,"style":"BOLD","offset":98},{"length":4,"style":"BOLD","offset":119}],"depth":0,"text":"2. Click Properties > Edit. Set the number of devices you want a user to be able to enroll. Click Review + save. Click Save.","key":"au80k"},{"data":{},"entityRanges":[{"key":13,"length":1,"offset":0}],"inlineStyleRanges":[],"type":"atomic","text":" ","key":"e0gn7","depth":0},{"data":{},"inlineStyleRanges":[],"type":"header-three","entityRanges":[],"text":"How to limit the number of devices a user can have in Azure AD","depth":0,"key":"50c33"},{"type":"unstyled","key":"3l77k","text":"This setting will limit how many devices a user can have in Azure AD. Since Intune creates the devices in Azure AD this setting will affect Azure AD and Intune.","inlineStyleRanges":[],"depth":0,"entityRanges":[],"data":{}},{"key":"efd0m","text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Devices.","inlineStyleRanges":[{"length":35,"offset":9,"style":"BOLD"},{"offset":47,"length":22,"style":"BOLD"},{"style":"BOLD","length":7,"offset":72}],"entityRanges":[],"data":{},"type":"unstyled","depth":0},{"entityRanges":[{"key":14,"offset":0,"length":1}],"key":"520lb","depth":0,"type":"atomic","text":" ","inlineStyleRanges":[],"data":{}},{"key":"cgm5n","text":"2. Click Device settings. Set the Maximum number of devices per user. Click Save.","entityRanges":[{"length":15,"offset":9,"key":15}],"inlineStyleRanges":[{"length":15,"offset":9,"style":"BOLD"},{"style":"BOLD","length":34,"offset":34},{"length":4,"offset":76,"style":"BOLD"}],"type":"unstyled","depth":0,"data":{}},{"entityRanges":[{"key":16,"length":1,"offset":0}],"type":"atomic","inlineStyleRanges":[],"key":"ev0lq","depth":0,"data":{},"text":" "},{"text":"","type":"unstyled","data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"7h8k7","depth":0}],"entityMap":{"0":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Endpoint Manager admin center","width":"auto","src":"https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png","height":"auto","alignment":"none"}},"1":{"type":"LINK","data":{"targetOption":"_blank","url":"https://endpoint.microsoft.com/?ref=AdminCenter#home"},"mutability":"MUTABLE"},"2":{"data":{"alignment":"none","alt":"How to open the Endpoint Manager admin center","src":"https://i.ibb.co/q9Dj65h/endpoint-manager.png","width":"auto","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"3":{"mutability":"MUTABLE","data":{"url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/mDMDevicesPreview","targetOption":"_blank"},"type":"LINK"},"4":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/deviceCleanUp"}},"5":{"data":{"alt":"Intune automatically clean-up stale devices","height":"auto","src":"https://i.ibb.co/5FGSPWH/device-clean-up-rules.png","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"6":{"data":{"src":"https://i.ibb.co/7tQMTkT/configuration-profiles.png","height":"auto","width":"auto","alignment":"none","alt":"Microsoft Intune configuration profile"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"mutability":"MUTABLE","data":{"alt":"Microsoft Intune compliance policy","src":"https://i.ibb.co/NV1pCKG/compliance-policy.png","width":"auto","alignment":"none","height":"auto"},"type":"IMAGE"},"8":{"data":{"alignment":"none","height":"auto","width":"auto","alt":"App deployment","src":"https://i.ibb.co/Lk6g8Cg/app-deployment.png"},"type":"IMAGE","mutability":"MUTABLE"},"9":{"mutability":"MUTABLE","data":{"height":"auto","width":"auto","alignment":"none","alt":"Intune Update rings","src":"https://i.ibb.co/hB8Ysj9/Intune-Updates.png"},"type":"IMAGE"},"10":{"type":"IMAGE","data":{"alt":"Autopilot","height":"auto","alignment":"none","width":"auto","src":"https://i.ibb.co/FYLwR5d/Autopilot.png"},"mutability":"MUTABLE"},"11":{"data":{"url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/deviceLimitEnrollmentRestrictions","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"12":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png","alignment":"none","width":"auto","alt":"Limit the number of devices a user can enroll in Intune","height":"auto"},"type":"IMAGE"},"13":{"type":"IMAGE","data":{"alignment":"none","height":"auto","alt":"Limit enrollments in Intune","width":"auto","src":"https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png"},"mutability":"MUTABLE"},"14":{"data":{"src":"https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png","height":"auto","alignment":"none","width":"auto","alt":"Azure AD Devices"},"type":"IMAGE","mutability":"MUTABLE"},"15":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_Devices/DevicesMenuBlade/DeviceSettings/menuId/","targetOption":"_blank"}},"16":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png","alignment":"none","width":"auto","height":"auto","alt":"Set Azure AD Device limits"}}}},"description":"Microsoft Intune is a beast of an application. I'll explain Microsoft Intune and most of its components throughout the next lessons. ","slug":"Introduction-to-Intune-7gR3L122b","featuredImage":"https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png","title":"Introduction to Intune","id":"7gR3L122b","type":"article","images":["https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png","https://i.ibb.co/q9Dj65h/endpoint-manager.png","https://i.ibb.co/5FGSPWH/device-clean-up-rules.png","https://i.ibb.co/7tQMTkT/configuration-profiles.png","https://i.ibb.co/NV1pCKG/compliance-policy.png","https://i.ibb.co/Lk6g8Cg/app-deployment.png","https://i.ibb.co/hB8Ysj9/Intune-Updates.png","https://i.ibb.co/FYLwR5d/Autopilot.png","https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png","https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png","https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png","https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png"],"publish":true,"sectionId":"l0DxUuonW"},
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
