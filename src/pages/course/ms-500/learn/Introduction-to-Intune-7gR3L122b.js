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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 112, offset: 277, style: 'color-rgb(33,37,41)'}, {length: 112, offset: 277, style: 'bgcolor-rgb(255,255,255)'}, {length: 112, offset: 277, style: 'fontsize-16'}, {length: 112, offset: 277, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '3bsc7', text: 'So far, we have looked at securing Microsoft 365, Microsoft servers, and third-party devices like firewalls, but we haven\'t looked at how to secure Windows 10, Android, Apple iOS, and Macs. Securing client devices is exactly where Microsoft Intune comes into play. If you haven\'t used SCCM, don\'t worry; I\'ll explain Microsoft Intune and most of its components throughout the next lessons. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '24pa7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2ij9u', text: 'So far, we have looked at securing Microsoft 365, Microsoft servers, and third-party devices like firewalls but we haven\'t looked at how to secure Windows 10, Android, Apple iOS, and Macs. Securing client devices is exactly where Microsoft Intune comes into play.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '70nq3', text: 'Let\'s review the parts of my Microsoft Intune to explain what it can do.', type: 'unstyled'}, {data: {'text-align': 'start'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 46, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 46, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 46, offset: 0, style: 'fontsize-2rem'}, {length: 46, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '7jojb', text: 'What licenses make Microsoft Intune available?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 45, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 45, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 45, offset: 0, style: 'fontsize-2rem'}, {length: 45, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '7akf8', text: 'Intune is included in the following licenses:', type: 'unstyled'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 38, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 38, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 38, offset: 0, style: 'fontsize-16'}, {length: 38, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '5gqok', text: 'Microsoft 365 E3 and Microsoft 365 E5.', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 73, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 73, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 73, offset: 0, style: 'fontsize-16'}, {length: 73, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '5dknt', text: 'Enterprise Mobility + Security E3  and Enterprise Mobility + Security E5.', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 31, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 31, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 31, offset: 0, style: 'fontsize-16'}, {length: 31, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'bjc4g', text: 'Microsoft 365 Business Premium.', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 38, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 38, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 38, offset: 0, style: 'fontsize-16'}, {length: 38, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '871p2', text: 'Microsoft 365 F1 and Microsoft 365 F3.', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 61, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 61, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 61, offset: 0, style: 'fontsize-16'}, {length: 61, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '7ngc1', text: 'Microsoft 365 Government G3  and Microsoft 365 Government G5.', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 21, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 21, offset: 0, style: 'fontsize-16'}, {length: 21, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '9h2ed', text: 'Intune for Education.', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 58, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 58, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 58, offset: 0, style: 'fontsize-16'}, {length: 58, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'ejpmf', text: 'Microsoft 365 Education A3 and Microsoft 365 Education A5. ', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b80qq', text: 'How do you connect to the Intune admin center?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 16, offset: 279}], inlineStyleRanges: [], key: 'cahde', text: 'Before we dive into what Intune can do, let\'s connect to the back-end admin center. Microsoft calls the admin center Microsoft Endpoint Manager admin center. You can access the Microsoft Endpoint Manager admin center by going to your Microsoft 365 admin center > admin centers > Endpoint Manager. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'iflg', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dgnar', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'be8in', text: 'Inventory', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5apkm', text: 'First, Microsoft Intune will hold all of your client devices providing an inventory to help you manage all of the devices. It will gather a ton of information about the device but don’t worry, it won’t gather user information that the organization doesn’t need. Once the devices are in Microsoft Intune you can do a lot of cool things with them. And don\'t worry, Microsoft Intune keeps your devices in Azure Active Directory so you can configure conditional access policies around your devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a3eus', text: 'How to view all the devices in Intune', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 11, offset: 92}], inlineStyleRanges: [], key: 'flbjp', text: 'To view all the devices in Intune go to Microsoft Endpoint Manager admin center > Devices > All devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'elet2', text: 'How to setup clean-up rules', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 150, offset: 123, style: 'color-rgb(33,37,41)'}, {length: 150, offset: 123, style: 'bgcolor-rgb(255,255,255)'}, {length: 150, offset: 123, style: 'fontsize-16'}, {length: 150, offset: 123, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '1qseo', text: 'Since users are always leaving your organization and replacing devices the Intune inventory will get stale pretty quickly. Microsoft Intune can automatically remove devices for you. Let\'s configure Intune to automatically remove devices that haven\'t checked in for 60 days.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 21, offset: 61}], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 8, offset: 51, style: 'BOLD'}, {length: 21, offset: 61, style: 'BOLD'}], key: '37jb1', text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Device clean-up rules.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 42, offset: 9, style: 'BOLD'}, {length: 3, offset: 55, style: 'BOLD'}], key: '9qgh3', text: '2. Click Delete devices based on last check-in date to Yes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 57, offset: 7, style: 'BOLD'}, {length: 2, offset: 68, style: 'BOLD'}], key: '9com6', text: '3. Set Delete devices that haven\'t checked in for this many days to 60.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}], key: '5lde6', text: '4. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '3srmg', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9fivp', text: 'Configuration profiles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '55ub9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '11qa4', text: 'For example, you can deploy configuration profiles that will configure the devices for you. For example, you can configure encryption to be deployed to all your Windows 10 devices. The encryption can happen silently behind the scenes, so your users don’t even know it’s happening.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8k8d7', text: 'Sometimes, configuration profiles require the users to configure the devices. For example, requiring a passcode on all Android devices. Since Intune doesn’t know what the user will want the passcode to be, Intune will prompt the user to configure the passcode.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4a978', text: 'Compliance policies', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '4of8p', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2tdg9', text: 'Compliant policies are a way to verify a device is configured properly. They can work in conjunction with configuration profiles. Let\'s take an example.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '36kiu', text: 'Let\'s say you have a configuration profile that requires a user to set up a password on their Android device. How do you know the user has set up the password and hasn\'t simply skipped and ignored the messages? Furthermore, how do you block a device from getting corporate data while it does not have a password protecting it? This is where compliance policies come into play.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1mrvs', text: 'We can configure a compliance policy to verify a user has a password on their device and we can block that device from receiving Microsoft 365 data until the user has configured the password.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9g74f', text: 'App deployment', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'deuc5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f6cab', text: 'Another notable feature of Microsoft Intune is the ability to deploy and configure apps. For example, you may want all devices to be using Microsoft Outlook. We can deploy Microsoft Outlook to Windows, Mac, Android, and iOS devices and we can configure Outlook to automatically connect to the user\'s Microsoft 365 mailbox.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '10un5', text: 'Push updates', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '4snpp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '41nqb', text: 'Last but not least is the ability to push updates to some devices. I say some devices because Google and Apple block you from pushing updates to some of their devices. We’ll get into those details later. But by using compliance policies we can force users to update their devices if they want access to Microsoft 365 data.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8hicf', text: 'Forget deploying images. Use Windows Autopilot', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '3bldh', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6q7n5', text: 'Finally, Microsoft Intune has something new called Autopilot. With Windows Autopilot, you no longer need to reimage a Windows 10 or Windows 11 computer or manually set up new devices. Your hardware vendor can ship them already connected to Intune straight to your employees. Or you can configure a device using Autopilot and automate the deployment of the device yourself.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3kj0h', text: 'There are three major advantages to using Windows Autopilot:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aess2', text: '1. Device registration: Windows Autopilot will automatically add the new device to Microsoft Intune, Microsoft 365, and join your domain for you.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5pee0', text: '2. Profile creation and assignment: With the device automatically being joined to Microsoft Intune you can automatically deploy configuration profiles and apps to your devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '58pa2', text: '3. Shipping: Your vendor can ship devices directly to your users. Then your users can turn the device on, connect to the internet, and Windows Autopilot will automatically deliver apps and settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2cimv', text: 'Setting device join limits', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '42t8n', text: 'Finally, there\'s one more option I\'m unsure what lesson to put it under, so it\'s going here. How to set a limit on the number of devices a user can enroll into Intune or Azure AD.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c5qsi', text: 'There are two places to limit the number of devices a user can enroll: Intune and Azure AD.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fb0ul', text: 'How to restrict the number of devices a user can enroll in Intune', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cqjue', text: 'Setting this option will limit the number of devices a user can enroll in Intune. This setting won\'t affect how many devices a user can have in Azure AD.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 36, offset: 78}], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 8, offset: 51, style: 'BOLD'}, {length: 14, offset: 61, style: 'BOLD'}, {length: 37, offset: 78, style: 'BOLD'}, {length: 9, offset: 117, style: 'BOLD'}], key: '6nacs', text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Enrollment device limit restrictions > All Users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '2uv59', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}, {length: 4, offset: 22, style: 'BOLD'}, {length: 13, offset: 98, style: 'BOLD'}, {length: 4, offset: 119, style: 'BOLD'}], key: 'au80k', text: '2. Click Properties > Edit. Set the number of devices you want a user to be able to enroll. Click Review + save. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e0gn7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '50c33', text: 'How to limit the number of devices a user can have in Azure AD', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3l77k', text: 'This setting will limit how many devices a user can have in Azure AD. Since Intune creates the devices in Azure AD this setting will affect Azure AD and Intune.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 35, offset: 9, style: 'BOLD'}, {length: 22, offset: 47, style: 'BOLD'}, {length: 7, offset: 72, style: 'BOLD'}], key: 'efd0m', text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '520lb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 15, offset: 9}], inlineStyleRanges: [{length: 15, offset: 9, style: 'BOLD'}, {length: 34, offset: 34, style: 'BOLD'}, {length: 4, offset: 76, style: 'BOLD'}], key: 'cgm5n', text: '2. Click Device settings. Set the Maximum number of devices per user. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ev0lq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7h8k7', text: '', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'Endpoint Manager admin center', height: 589, src: 'https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png', width: 1297}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#home'}, mutability: 'MUTABLE', type: 'LINK'}, 10: {data: {alignment: 'none', alt: 'Autopilot', height: 626, src: 'https://i.ibb.co/FYLwR5d/Autopilot.png', width: 910}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/deviceLimitEnrollmentRestrictions'}, mutability: 'MUTABLE', type: 'LINK'}, 12: {data: {alignment: 'none', alt: 'Limit the number of devices a user can enroll in Intune', height: 557, src: 'https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png', width: 1238}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Limit enrollments in Intune', height: 470, src: 'https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png', width: 1515}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Azure AD Devices', height: 526, src: 'https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png', width: 497}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_Devices/DevicesMenuBlade/DeviceSettings/menuId/'}, mutability: 'MUTABLE', type: 'LINK'}, 16: {data: {alignment: 'none', alt: 'Set Azure AD Device limits', height: 662, src: 'https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png', width: 1491}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'How to open the Endpoint Manager admin center', height: 947, src: 'https://i.ibb.co/q9Dj65h/endpoint-manager.png', width: 278}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/mDMDevicesPreview'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {data: {targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/deviceCleanUp'}, mutability: 'MUTABLE', type: 'LINK'}, 5: {data: {alignment: 'none', alt: 'Intune automatically clean-up stale devices', height: 804, src: 'https://i.ibb.co/5FGSPWH/device-clean-up-rules.png', width: 1090}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Microsoft Intune configuration profile', height: 560, src: 'https://i.ibb.co/7tQMTkT/configuration-profiles.png', width: 1465}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Microsoft Intune compliance policy', height: 629, src: 'https://i.ibb.co/NV1pCKG/compliance-policy.png', width: 1773}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'App deployment', height: 650, src: 'https://i.ibb.co/Lk6g8Cg/app-deployment.png', width: 1718}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Intune Update rings', height: 651, src: 'https://i.ibb.co/hB8Ysj9/Intune-Updates.png', width: 1719}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/6/17', description: 'Microsoft Intune is a beast of an application. I\'ll explain Microsoft Intune and most of its components throughout the next lessons. ', featuredImage: 'https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png', id: '7gR3L122b', images: ['https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png', 'https://i.ibb.co/q9Dj65h/endpoint-manager.png', 'https://i.ibb.co/5FGSPWH/device-clean-up-rules.png', 'https://i.ibb.co/7tQMTkT/configuration-profiles.png', 'https://i.ibb.co/NV1pCKG/compliance-policy.png', 'https://i.ibb.co/Lk6g8Cg/app-deployment.png', 'https://i.ibb.co/hB8Ysj9/Intune-Updates.png', 'https://i.ibb.co/FYLwR5d/Autopilot.png', 'https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png', 'https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png', 'https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png', 'https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png'], publish: true, sectionId: 'l0DxUuonW', slug: 'Introduction-to-Intune-7gR3L122b', title: 'Introduction to Intune', type: 'article'},
      nextContentSlug: 'learn/Setting-up-Android-Devices-ZyKX3Idjs',
      previousContentSlug: 'test/securing-sharepoint-online-vojmqnsev',
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
                  <div id="ld-534-9587" style={{height: this.state.decideHeight, overflow: 'hidden'}} >
                    <p style="position: absolute;z-index: -1">Reserved for ads. Please scroll down.</p>
                  </div>
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>So far, we have looked at securing Microsoft 365, Microsoft servers, and third-party devices like firewalls, but we haven't looked at how to secure Windows 10, Android, Apple iOS, and Macs. Securing client devices is exactly where Microsoft Intune comes into play. If you haven<span >'t used SCCM, don't worry; I'll explain Microsoft Intune and most of its components throughout the next lessons.</span>&nbsp;</p>
                    <div ><img src="https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png" alt="Endpoint Manager admin center" height="589" width="1297" style="aspect-ratio: auto 1297 / 589; height: auto;" /></div>
                    <p>So far, we have looked at securing Microsoft 365, Microsoft servers, and third-party devices like firewalls but we haven't looked at how to secure Windows 10, Android, Apple iOS, and Macs. Securing client devices is exactly where Microsoft Intune comes into play.</p>
                    <p>Let's review the parts of my Microsoft Intune to explain what it can do.</p>
                    <h2 ><span >What licenses make Microsoft Intune available?</span></h2>
                    <p><span >Intune is included in the following licenses:</span></p>
                    <ul>
                      <li ><span >Microsoft 365 E3 and Microsoft 365 E5.</span></li>
                      <li ><span >Enterprise Mobility + Security E3  and Enterprise Mobility + Security E5.</span></li>
                      <li ><span >Microsoft 365 Business Premium.</span></li>
                      <li ><span >Microsoft 365 F1 and Microsoft 365 F3.</span></li>
                      <li ><span >Microsoft 365 Government G3  and Microsoft 365 Government G5.</span></li>
                      <li ><span >Intune for Education.</span></li>
                      <li ><span >Microsoft 365 Education A3 and Microsoft 365 Education A5.</span>&nbsp;</li>
                    </ul>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>How do you connect to the Intune admin center?</h2>
                    <p>Before we dive into what Intune can do, let's connect to the back-end admin center. Microsoft calls the admin center Microsoft Endpoint Manager admin center. You can access the Microsoft Endpoint Manager admin center by going to your Microsoft 365 admin center &gt; admin centers &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#home" target="_blank" rel="noreferrer">Endpoint Manager</a>.&nbsp;</p>
                    <p />
                    <div ><img src="https://i.ibb.co/q9Dj65h/endpoint-manager.png" alt="How to open the Endpoint Manager admin center" height="947" width="278" style="aspect-ratio: auto 278 / 947; height: auto;" /></div>
                    <h2>Inventory</h2>
                    <p>First, Microsoft Intune will hold all of your client devices providing an inventory to help you manage all of the devices. It will gather a ton of information about the device but don’t worry, it won’t gather user information that the organization doesn’t need. Once the devices are in Microsoft Intune you can do a lot of cool things with them. And don't worry, Microsoft Intune keeps your devices in Azure Active Directory so you can configure conditional access policies around your devices.</p>
                    <h3>How to view all the devices in Intune</h3>
                    <p>To view all the devices in Intune go to Microsoft Endpoint Manager admin center &gt; Devices &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/mDMDevicesPreview" target="_blank" rel="noreferrer">All devices</a>.</p>
                    <h3>How to setup clean-up rules</h3>
                    <p>Since users are always leaving your organization and replacing devices the Intune inventory will get stale pretty quickly. <span >Microsoft Intune can automatically remove devices for you. Let's configure Intune to automatically remove devices that haven't checked in for 60 days.</span></p>
                    <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/deviceCleanUp" target="_blank" rel="noreferrer"><strong>Device clean-up rules</strong></a>.</p>
                    <p>2. Click <strong>Delete devices based on last check-in date</strong> to <strong>Yes</strong>.</p>
                    <p>3. Set <strong>Delete devices that haven't checked in for this many days</strong> to <strong>60</strong>.</p>
                    <p>4. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/5FGSPWH/device-clean-up-rules.png" alt="Intune automatically clean-up stale devices" height="804" width="1090" style="aspect-ratio: auto 1090 / 804; height: auto;" /></div>
                    <h2>Configuration profiles</h2>
                    <div ><img src="https://i.ibb.co/7tQMTkT/configuration-profiles.png" alt="Microsoft Intune configuration profile" height="560" width="1465" style="aspect-ratio: auto 1465 / 560; height: auto;" /></div>
                    <p>For example, you can deploy configuration profiles that will configure the devices for you. For example, you can configure encryption to be deployed to all your Windows 10 devices. The encryption can happen silently behind the scenes, so your users don’t even know it’s happening.</p>
                    <p>Sometimes, configuration profiles require the users to configure the devices. For example, requiring a passcode on all Android devices. Since Intune doesn’t know what the user will want the passcode to be, Intune will prompt the user to configure the passcode.</p>
                    <h2>Compliance policies</h2>
                    <div ><img src="https://i.ibb.co/NV1pCKG/compliance-policy.png" alt="Microsoft Intune compliance policy" height="629" width="1773" style="aspect-ratio: auto 1773 / 629; height: auto;" /></div>
                    <p>Compliant policies are a way to verify a device is configured properly. They can work in conjunction with configuration profiles. Let's take an example.</p>
                    <p>Let's say you have a configuration profile that requires a user to set up a password on their Android device. How do you know the user has set up the password and hasn't simply skipped and ignored the messages? Furthermore, how do you block a device from getting corporate data while it does not have a password protecting it? This is where compliance policies come into play.</p>
                    <p>We can configure a compliance policy to verify a user has a password on their device and we can block that device from receiving Microsoft 365 data until the user has configured the password.</p>
                    <h2>App deployment</h2>
                    <div ><img src="https://i.ibb.co/Lk6g8Cg/app-deployment.png" alt="App deployment" height="650" width="1718" style="aspect-ratio: auto 1718 / 650; height: auto;" /></div>
                    <p>Another notable feature of Microsoft Intune is the ability to deploy and configure apps. For example, you may want all devices to be using Microsoft Outlook. We can deploy Microsoft Outlook to Windows, Mac, Android, and iOS devices and we can configure Outlook to automatically connect to the user's Microsoft 365 mailbox.</p>
                    <h2>Push updates</h2>
                    <div ><img src="https://i.ibb.co/hB8Ysj9/Intune-Updates.png" alt="Intune Update rings" height="651" width="1719" style="aspect-ratio: auto 1719 / 651; height: auto;" /></div>
                    <p>Last but not least is the ability to push updates to some devices. I say some devices because Google and Apple block you from pushing updates to some of their devices. We’ll get into those details later. But by using compliance policies we can force users to update their devices if they want access to Microsoft 365 data.</p>
                    <h2>Forget deploying images. Use Windows Autopilot</h2>
                    <div ><img src="https://i.ibb.co/FYLwR5d/Autopilot.png" alt="Autopilot" height="626" width="910" style="aspect-ratio: auto 910 / 626; height: auto;" /></div>
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
                    <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Enroll devices</strong> &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/deviceLimitEnrollmentRestrictions" target="_blank" rel="noreferrer"><strong>Enrollment device limit restrictions</strong></a><strong> </strong>&gt; <strong>All Users</strong>.</p>
                    <div ><img src="https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png" alt="Limit the number of devices a user can enroll in Intune" height="557" width="1238" style="aspect-ratio: auto 1238 / 557; height: auto;" /></div>
                    <p>2. Click <strong>Properties </strong>&gt; <strong>Edit</strong>. Set the number of devices you want a user to be able to enroll. Click <strong>Review + save</strong>. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png" alt="Limit enrollments in Intune" height="470" width="1515" style="aspect-ratio: auto 1515 / 470; height: auto;" /></div>
                    <h3>How to limit the number of devices a user can have in Azure AD</h3>
                    <p>This setting will limit how many devices a user can have in Azure AD. Since Intune creates the devices in Azure AD this setting will affect Azure AD and Intune.</p>
                    <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Devices</strong>.</p>
                    <div ><img src="https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png" alt="Azure AD Devices" height="526" width="497" style="aspect-ratio: auto 497 / 526; height: auto;" /></div>
                    <p>2. Click <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_Devices/DevicesMenuBlade/DeviceSettings/menuId/" target="_blank" rel="noreferrer"><strong>Device settings</strong></a>. Set the <strong>Maximum number of devices per user</strong>. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png" alt="Set Azure AD Device limits" height="662" width="1491" style="aspect-ratio: auto 1491 / 662; height: auto;" /></div>
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
