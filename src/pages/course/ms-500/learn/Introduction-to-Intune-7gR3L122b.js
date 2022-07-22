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
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Introduction-to-Intune-7gR3L122b',
      article: {datePublished: '2022/6/17', images: ['https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png', 'https://i.ibb.co/q9Dj65h/endpoint-manager.png', 'https://i.ibb.co/5FGSPWH/device-clean-up-rules.png', 'https://i.ibb.co/7tQMTkT/configuration-profiles.png', 'https://i.ibb.co/NV1pCKG/compliance-policy.png', 'https://i.ibb.co/Lk6g8Cg/app-deployment.png', 'https://i.ibb.co/hB8Ysj9/Intune-Updates.png', 'https://i.ibb.co/FYLwR5d/Autopilot.png', 'https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png', 'https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png', 'https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png', 'https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png'], slug: 'Introduction-to-Intune-7gR3L122b', sectionId: 'l0DxUuonW', description: 'Microsoft Intune is a beast of an application. I\'ll explain Microsoft Intune and most of its components throughout the next lessons. ', featuredImage: 'https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png', publish: true, type: 'article', title: 'Introduction to Intune', article: {entityMap: {0: {data: {alignment: 'none', src: 'https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png', width: 'auto', alt: 'Endpoint Manager admin center', height: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {mutability: 'MUTABLE', type: 'LINK', data: {url: 'https://endpoint.microsoft.com/?ref=AdminCenter#home', targetOption: '_blank'}}, 2: {mutability: 'MUTABLE', data: {alignment: 'none', src: 'https://i.ibb.co/q9Dj65h/endpoint-manager.png', alt: 'How to open the Endpoint Manager admin center', height: 'auto', width: 'auto'}, type: 'IMAGE'}, 3: {data: {url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/mDMDevicesPreview', targetOption: '_blank'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {data: {url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/deviceCleanUp', targetOption: '_blank'}, mutability: 'MUTABLE', type: 'LINK'}, 5: {mutability: 'MUTABLE', data: {alt: 'Intune automatically clean-up stale devices', src: 'https://i.ibb.co/5FGSPWH/device-clean-up-rules.png', height: 'auto', width: 'auto', alignment: 'none'}, type: 'IMAGE'}, 6: {data: {width: 'auto', height: 'auto', alt: 'Microsoft Intune configuration profile', src: 'https://i.ibb.co/7tQMTkT/configuration-profiles.png', alignment: 'none'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'none', alt: 'Microsoft Intune compliance policy', src: 'https://i.ibb.co/NV1pCKG/compliance-policy.png', width: 'auto', height: 'auto'}}, 8: {data: {height: 'auto', alignment: 'none', width: 'auto', alt: 'App deployment', src: 'https://i.ibb.co/Lk6g8Cg/app-deployment.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {type: 'IMAGE', mutability: 'MUTABLE', data: {alt: 'Intune Update rings', alignment: 'none', width: 'auto', height: 'auto', src: 'https://i.ibb.co/hB8Ysj9/Intune-Updates.png'}}, 10: {data: {width: 'auto', alignment: 'none', alt: 'Autopilot', height: 'auto', src: 'https://i.ibb.co/FYLwR5d/Autopilot.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 11: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/deviceLimitEnrollmentRestrictions'}}, 12: {type: 'IMAGE', data: {alt: 'Limit the number of devices a user can enroll in Intune', width: 'auto', height: 'auto', alignment: 'none', src: 'https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png'}, mutability: 'MUTABLE'}, 13: {data: {alignment: 'none', width: 'auto', src: 'https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png', alt: 'Limit enrollments in Intune', height: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 14: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'none', height: 'auto', width: 'auto', src: 'https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png', alt: 'Azure AD Devices'}}, 15: {mutability: 'MUTABLE', data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_Devices/DevicesMenuBlade/DeviceSettings/menuId/', targetOption: '_blank'}, type: 'LINK'}, 16: {type: 'IMAGE', data: {height: 'auto', alignment: 'none', width: 'auto', alt: 'Set Azure AD Device limits', src: 'https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png'}, mutability: 'MUTABLE'}}, blocks: [{depth: 0, text: 'Microsoft Intune is a beast of an application. For those that have used Microsoft System Center Configuration Manager (SCCM) explaining Microsoft Intune is a bit easier Because Microsoft Intune is a cloud-based replacement for configuration manager. If you haven\'t used SCCM don\'t worry, I\'ll explain Microsoft Intune and most of its components throughout the next lessons. ', inlineStyleRanges: [{length: 373, offset: 0, style: 'color-rgb(33,37,41)'}, {offset: 0, style: 'bgcolor-rgb(255,255,255)', length: 373}, {offset: 0, length: 373, style: 'fontsize-16'}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0, length: 373}], type: 'unstyled', data: {}, entityRanges: [], key: '3bsc7'}, {type: 'atomic', key: '24pa7', entityRanges: [{length: 1, offset: 0, key: 0}], inlineStyleRanges: [], depth: 0, text: ' ', data: {}}, {text: 'So far, we have looked at securing Microsoft 365, Microsoft servers, and third-party devices like firewalls but we haven\'t looked at how to secure Windows 10, Android, Apple iOS, and Macs. Securing client devices is exactly where Microsoft Intune comes into play.', data: {}, type: 'unstyled', entityRanges: [], depth: 0, inlineStyleRanges: [], key: '2ij9u'}, {data: {}, text: 'Let\'s review the parts of my Microsoft Intune to explain what it can do.', key: '70nq3', entityRanges: [], type: 'unstyled', depth: 0, inlineStyleRanges: []}, {entityRanges: [], data: {'text-align': 'start'}, key: '7jojb', depth: 0, inlineStyleRanges: [{offset: 0, style: 'color-rgb(33,37,41)', length: 46}, {offset: 0, style: 'bgcolor-rgb(255,255,255)', length: 46}, {style: 'fontsize-2rem', offset: 0, length: 46}, {length: 46, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], text: 'What licenses make Microsoft Intune available?', type: 'header-two'}, {data: {}, text: 'Intune is include 2xwsd in the following licenses:', type: 'unstyled', depth: 0, inlineStyleRanges: [{length: 50, style: 'color-rgb(33,37,41)', offset: 0}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 50}, {offset: 0, style: 'fontsize-2rem', length: 50}, {length: 50, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}], key: '7akf8', entityRanges: []}, {depth: 0, data: {'margin-left': '1.5em'}, entityRanges: [], text: 'Microsoft 365 E3 and Microsoft 365 E5', type: 'unordered-list-item', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 37}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 37}, {style: 'fontsize-16', length: 37, offset: 0}, {length: 37, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '5gqok'}, {entityRanges: [], type: 'unordered-list-item', depth: 0, data: {'margin-left': '1.5em'}, inlineStyleRanges: [{length: 72, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 72, style: 'bgcolor-rgb(255,255,255)', offset: 0}, {offset: 0, style: 'fontsize-16', length: 72}, {offset: 0, length: 72, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '5dknt', text: 'Enterprise Mobility + Security E3  and Enterprise Mobility + Security E5'}, {entityRanges: [], key: 'bjc4g', text: 'Microsoft 365 Business Premium', inlineStyleRanges: [{offset: 0, style: 'color-rgb(33,37,41)', length: 30}, {length: 30, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {offset: 0, length: 30, style: 'fontsize-16'}, {length: 30, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], type: 'unordered-list-item', depth: 0, data: {'margin-left': '1.5em'}}, {depth: 0, text: 'Microsoft 365 F1 and Microsoft 365 F3', entityRanges: [], data: {'margin-left': '1.5em'}, key: '871p2', type: 'unordered-list-item', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 37, offset: 0}, {length: 37, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {style: 'fontsize-16', offset: 0, length: 37}, {offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 37}]}, {entityRanges: [], depth: 0, inlineStyleRanges: [{offset: 0, style: 'color-rgb(33,37,41)', length: 60}, {style: 'bgcolor-rgb(255,255,255)', length: 60, offset: 0}, {style: 'fontsize-16', length: 60, offset: 0}, {length: 60, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}], key: '7ngc1', data: {'margin-left': '1.5em'}, text: 'Microsoft 365 Government G3  and Microsoft 365 Government G5', type: 'unordered-list-item'}, {depth: 0, text: 'Intune for Education', type: 'unordered-list-item', entityRanges: [], key: '9h2ed', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 20, offset: 0}, {offset: 0, style: 'bgcolor-rgb(255,255,255)', length: 20}, {style: 'fontsize-16', length: 20, offset: 0}, {offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 20}], data: {'margin-left': '1.5em'}}, {inlineStyleRanges: [{offset: 0, length: 57, style: 'color-rgb(33,37,41)'}, {offset: 0, style: 'bgcolor-rgb(255,255,255)', length: 57}, {length: 57, style: 'fontsize-16', offset: 0}, {length: 57, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], type: 'unordered-list-item', depth: 0, entityRanges: [], text: 'Microsoft 365 Education A3 and Microsoft 365 Education A5 ', key: 'ejpmf', data: {'margin-left': '1.5em'}}, {text: 'How do you connect to the Intune admin center?', entityRanges: [], inlineStyleRanges: [], key: 'b80qq', depth: 0, data: {}, type: 'header-two'}, {text: 'Before we dive into what Intune can do, let\'s connect to the back-end admin center. Microsoft calls the admin center Microsoft Endpoint Manager admin center. You can access the Microsoft Endpoint Manager admin center by going to your Microsoft 365 admin center > admin centers > Endpoint Manager. ', depth: 0, key: 'cahde', inlineStyleRanges: [], type: 'unstyled', entityRanges: [{key: 1, length: 16, offset: 279}], data: {}}, {depth: 0, data: {}, entityRanges: [], inlineStyleRanges: [], text: '', type: 'unstyled', key: 'iflg'}, {entityRanges: [{offset: 0, key: 2, length: 1}], data: {}, depth: 0, text: ' ', inlineStyleRanges: [], key: 'dgnar', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], text: 'Inventory', inlineStyleRanges: [], type: 'header-two', key: 'be8in'}, {depth: 0, type: 'unstyled', entityRanges: [], data: {}, key: '5apkm', text: 'First, Microsoft Intune will hold all of your client devices providing an inventory to help you manage all of the devices. It will gather a ton of information about the device but don’t worry, it won’t gather user information that the organization doesn’t need. Once the devices are in Microsoft Intune you can do a lot of cool things with them. And don\'t worry, Microsoft Intune keeps your devices in Azure Active Directory so you can configure conditional access policies around your devices.', inlineStyleRanges: []}, {data: {}, text: 'How to view all the devices in Intune', type: 'header-three', inlineStyleRanges: [], key: 'a3eus', entityRanges: [], depth: 0}, {key: 'flbjp', type: 'unstyled', data: {}, inlineStyleRanges: [], text: 'To view all the devices in Intune go to Microsoft Endpoint Manager admin center > Devices > All devices.', depth: 0, entityRanges: [{key: 3, length: 11, offset: 92}]}, {entityRanges: [], inlineStyleRanges: [], text: 'How to setup clean-up rules', type: 'header-three', depth: 0, data: {}, key: 'elet2'}, {depth: 0, text: 'Since users are always leaving your organization and replacing devices the Intune inventory will get stale pretty quickly. Microsoft Intune can automatically remove devices for you. Let\'s configure Intune to automatically remove devices that haven\'t checked in for 60 days.', entityRanges: [], type: 'unstyled', data: {}, inlineStyleRanges: [{length: 150, style: 'color-rgb(33,37,41)', offset: 123}, {offset: 123, style: 'bgcolor-rgb(255,255,255)', length: 150}, {style: 'fontsize-16', length: 150, offset: 123}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 150, offset: 123}], key: '1qseo'}, {depth: 0, key: '37jb1', type: 'unstyled', data: {}, inlineStyleRanges: [{length: 39, style: 'BOLD', offset: 9}, {style: 'BOLD', length: 8, offset: 51}, {style: 'BOLD', length: 21, offset: 61}], text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Device clean-up rules.', entityRanges: [{key: 4, length: 21, offset: 61}]}, {depth: 0, type: 'unstyled', entityRanges: [], inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 42}, {length: 3, offset: 55, style: 'BOLD'}], key: '9qgh3', data: {}, text: '2. Click Delete devices based on last check-in date to Yes.'}, {text: '3. Set Delete devices that haven\'t checked in for this many days to 60.', depth: 0, key: '9com6', data: {}, inlineStyleRanges: [{style: 'BOLD', offset: 7, length: 57}, {offset: 68, style: 'BOLD', length: 2}], entityRanges: [], type: 'unstyled'}, {entityRanges: [], text: '4. Click Save.', key: '5lde6', data: {}, type: 'unstyled', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 4}], depth: 0}, {text: ' ', depth: 0, type: 'atomic', entityRanges: [{length: 1, offset: 0, key: 5}], key: '3srmg', inlineStyleRanges: [], data: {}}, {inlineStyleRanges: [], depth: 0, type: 'header-two', data: {}, entityRanges: [], text: 'Configuration profiles', key: '9fivp'}, {data: {}, inlineStyleRanges: [], type: 'atomic', entityRanges: [{offset: 0, length: 1, key: 6}], text: ' ', key: '55ub9', depth: 0}, {text: 'For example, you can deploy configuration profiles that will configure the devices for you. For example, you can configure encryption to be deployed to all your Windows 10 devices. The encryption can happen silently behind the scenes, so your users don’t even know it’s happening.', type: 'unstyled', entityRanges: [], depth: 0, key: '11qa4', data: {}, inlineStyleRanges: []}, {key: '8k8d7', depth: 0, entityRanges: [], type: 'unstyled', inlineStyleRanges: [], data: {}, text: 'Sometimes, configuration profiles require the users to configure the devices. For example, requiring a passcode on all Android devices. Since Intune doesn’t know what the user will want the passcode to be, Intune will prompt the user to configure the passcode.'}, {data: {}, type: 'header-two', key: '4a978', inlineStyleRanges: [], text: 'Compliance policies', depth: 0, entityRanges: []}, {text: ' ', depth: 0, key: '4of8p', data: {}, inlineStyleRanges: [], type: 'atomic', entityRanges: [{key: 7, length: 1, offset: 0}]}, {data: {}, text: 'Compliant policies are a way to verify a device is configured properly. They can work in conjunction with configuration profiles. Let\'s take an example.', depth: 0, key: '2tdg9', entityRanges: [], inlineStyleRanges: [], type: 'unstyled'}, {data: {}, text: 'Let\'s say you have a configuration profile that requires a user to set up a password on their Android device. How do you know the user has set up the password and hasn\'t simply skipped and ignored the messages? Furthermore, how do you block a device from getting corporate data while it does not have a password protecting it? This is where compliance policies come into play.', key: '36kiu', depth: 0, entityRanges: [], inlineStyleRanges: [], type: 'unstyled'}, {inlineStyleRanges: [], type: 'unstyled', depth: 0, key: '1mrvs', text: 'We can configure a compliance policy to verify a user has a password on their device and we can block that device from receiving Microsoft 365 data until the user has configured the password.', entityRanges: [], data: {}}, {inlineStyleRanges: [], depth: 0, text: 'App deployment', entityRanges: [], key: '9g74f', data: {}, type: 'header-two'}, {entityRanges: [{key: 8, length: 1, offset: 0}], key: 'deuc5', data: {}, inlineStyleRanges: [], text: ' ', type: 'atomic', depth: 0}, {entityRanges: [], inlineStyleRanges: [], key: 'f6cab', depth: 0, data: {}, type: 'unstyled', text: 'Another notable feature of Microsoft Intune is the ability to deploy and configure apps. For example, you may want all devices to be using Microsoft Outlook. We can deploy Microsoft Outlook to Windows, Mac, Android, and iOS devices and we can configure outlook to automatically connect to the user\'s Microsoft 365 mailbox.'}, {key: '10un5', type: 'header-two', entityRanges: [], depth: 0, text: 'Push updates', data: {}, inlineStyleRanges: []}, {type: 'atomic', key: '4snpp', depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], text: ' ', data: {}}, {data: {}, inlineStyleRanges: [], depth: 0, key: '41nqb', entityRanges: [], type: 'unstyled', text: 'Last but not least is the ability to push updates to some devices. I say some devices because Google and Apple block you from pushing updates to some of their devices. We’ll get into those details later. But by using compliance policies we can force users to update their devices if they want access to Microsoft 365 data.'}, {text: 'Forget deploying images. Use Windows Autopilot', entityRanges: [], inlineStyleRanges: [], key: '8hicf', data: {}, type: 'header-two', depth: 0}, {inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 10}], depth: 0, type: 'atomic', text: ' ', data: {}, key: '3bldh'}, {text: 'Finally, Microsoft Intune has something new called Autopilot. With Windows Autopilot, you no longer need to reimage a Windows 10 or Windows 11 computer or manually set up new devices. Your hardware vendor can ship them already connected to Intune straight to your employees. Or you can configure a device using Autopilot and automate the deployment of the device yourself.', depth: 0, data: {}, entityRanges: [], inlineStyleRanges: [], type: 'unstyled', key: '6q7n5'}, {data: {}, inlineStyleRanges: [], depth: 0, entityRanges: [], key: '3kj0h', text: 'There are three major advantages to using Windows Autopilot:', type: 'unstyled'}, {text: '1. Device registration: Windows Autopilot will automatically add the new device to Microsoft Intune, Microsoft 365, and join your domain for you.', key: 'aess2', depth: 0, inlineStyleRanges: [], data: {}, entityRanges: [], type: 'unstyled'}, {inlineStyleRanges: [], entityRanges: [], type: 'unstyled', depth: 0, key: '5pee0', text: '2. Profile creation and assignment: With the device automatically being joined to Microsoft Intune you can automatically deploy configuration profiles and apps to your devices.', data: {}}, {data: {}, inlineStyleRanges: [], key: '58pa2', type: 'unstyled', depth: 0, text: '3. Shipping: Your vendor can ship devices directly to your users. Then your users can turn the device on, connect to the internet, and Windows Autopilot will automatically deliver apps and settings.', entityRanges: []}, {inlineStyleRanges: [], text: 'Setting device join limits', depth: 0, key: '2cimv', type: 'header-two', entityRanges: [], data: {}}, {text: 'Finally, there\'s one more option I\'m unsure what lesson to put it under, so it\'s going here. How to set a limit on the number of devices a user can enroll into Intune or Azure AD.', depth: 0, type: 'unstyled', key: '42t8n', entityRanges: [], data: {}, inlineStyleRanges: []}, {key: 'c5qsi', data: {}, depth: 0, type: 'unstyled', text: 'There are two places to limit the number of devices a user can enroll: Intune and Azure AD.', entityRanges: [], inlineStyleRanges: []}, {data: {}, text: 'How to restrict the number of devices a user can enroll in Intune', entityRanges: [], key: 'fb0ul', depth: 0, type: 'header-three', inlineStyleRanges: []}, {entityRanges: [], type: 'unstyled', key: 'cqjue', depth: 0, data: {}, text: 'Setting this option will limit the number of devices a user can enroll in Intune. This setting won\'t affect how many devices a user can have in Azure AD.', inlineStyleRanges: []}, {data: {}, type: 'unstyled', key: '6nacs', depth: 0, entityRanges: [{key: 11, length: 36, offset: 78}], inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 39}, {style: 'BOLD', length: 8, offset: 51}, {style: 'BOLD', offset: 61, length: 14}, {style: 'BOLD', length: 37, offset: 78}, {style: 'BOLD', length: 9, offset: 117}], text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Enrollment device limit restrictions > All Users.'}, {text: ' ', type: 'atomic', entityRanges: [{key: 12, length: 1, offset: 0}], data: {}, inlineStyleRanges: [], key: '2uv59', depth: 0}, {data: {}, text: '2. Click Properties > Edit. Set the number of devices you want a user to be able to enroll. Click Review + save. Click Save.', entityRanges: [], key: 'au80k', depth: 0, inlineStyleRanges: [{length: 11, style: 'BOLD', offset: 9}, {length: 4, offset: 22, style: 'BOLD'}, {style: 'BOLD', offset: 98, length: 13}, {offset: 119, length: 4, style: 'BOLD'}], type: 'unstyled'}, {entityRanges: [{length: 1, key: 13, offset: 0}], text: ' ', type: 'atomic', key: 'e0gn7', data: {}, inlineStyleRanges: [], depth: 0}, {data: {}, text: 'How to limit the number of devices a user can have in Azure AD', entityRanges: [], key: '50c33', depth: 0, type: 'header-three', inlineStyleRanges: []}, {depth: 0, data: {}, entityRanges: [], type: 'unstyled', text: 'This setting will limit how many devices a user can have in Azure AD. Since Intune creates the devices in Azure AD this setting will affect Azure AD and Intune.', key: '3l77k', inlineStyleRanges: []}, {key: 'efd0m', data: {}, inlineStyleRanges: [{style: 'BOLD', length: 35, offset: 9}, {length: 22, offset: 47, style: 'BOLD'}, {length: 7, offset: 72, style: 'BOLD'}], type: 'unstyled', text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Devices.', entityRanges: [], depth: 0}, {entityRanges: [{key: 14, length: 1, offset: 0}], depth: 0, key: '520lb', text: ' ', type: 'atomic', inlineStyleRanges: [], data: {}}, {data: {}, inlineStyleRanges: [{style: 'BOLD', length: 15, offset: 9}, {offset: 34, style: 'BOLD', length: 34}, {length: 4, offset: 76, style: 'BOLD'}], text: '2. Click Device settings. Set the Maximum number of devices per user. Click Save.', type: 'unstyled', depth: 0, entityRanges: [{key: 15, offset: 9, length: 15}], key: 'cgm5n'}, {key: 'ev0lq', depth: 0, type: 'atomic', entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], data: {}, text: ' '}, {key: '7h8k7', type: 'unstyled', depth: 0, entityRanges: [], data: {}, text: '', inlineStyleRanges: []}]}, id: '7gR3L122b'},
      nextContentSlug: 'Setting-up-Android-Devices-ZyKX3Idjs',
      previousContentSlug: 'Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
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
                  <div ><img src="https://i.ibb.co/Fq3N8BX/Endpoint-Manager-Admin-Center.png" alt="Endpoint Manager admin center" style="height: auto;width: auto" /></div>
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
                  <p>Before we dive into what Intune can do, let's connect to the back-end admin center. Microsoft calls the admin center Microsoft Endpoint Manager admin center. You can access the Microsoft Endpoint Manager admin center by going to your Microsoft 365 admin center &gt; admin centers &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#home" target="_blank" rel="noreferrer">Endpoint Manager</a>.&nbsp;</p>
                  <p />
                  <div ><img src="https://i.ibb.co/q9Dj65h/endpoint-manager.png" alt="How to open the Endpoint Manager admin center" style="height: auto;width: auto" /></div>
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
                  <div ><img src="https://i.ibb.co/5FGSPWH/device-clean-up-rules.png" alt="Intune automatically clean-up stale devices" style="height: auto;width: auto" /></div>
                  <h2>Configuration profiles</h2>
                  <div ><img src="https://i.ibb.co/7tQMTkT/configuration-profiles.png" alt="Microsoft Intune configuration profile" style="height: auto;width: auto" /></div>
                  <p>For example, you can deploy configuration profiles that will configure the devices for you. For example, you can configure encryption to be deployed to all your Windows 10 devices. The encryption can happen silently behind the scenes, so your users don’t even know it’s happening.</p>
                  <p>Sometimes, configuration profiles require the users to configure the devices. For example, requiring a passcode on all Android devices. Since Intune doesn’t know what the user will want the passcode to be, Intune will prompt the user to configure the passcode.</p>
                  <h2>Compliance policies</h2>
                  <div ><img src="https://i.ibb.co/NV1pCKG/compliance-policy.png" alt="Microsoft Intune compliance policy" style="height: auto;width: auto" /></div>
                  <p>Compliant policies are a way to verify a device is configured properly. They can work in conjunction with configuration profiles. Let's take an example.</p>
                  <p>Let's say you have a configuration profile that requires a user to set up a password on their Android device. How do you know the user has set up the password and hasn't simply skipped and ignored the messages? Furthermore, how do you block a device from getting corporate data while it does not have a password protecting it? This is where compliance policies come into play.</p>
                  <p>We can configure a compliance policy to verify a user has a password on their device and we can block that device from receiving Microsoft 365 data until the user has configured the password.</p>
                  <h2>App deployment</h2>
                  <div ><img src="https://i.ibb.co/Lk6g8Cg/app-deployment.png" alt="App deployment" style="height: auto;width: auto" /></div>
                  <p>Another notable feature of Microsoft Intune is the ability to deploy and configure apps. For example, you may want all devices to be using Microsoft Outlook. We can deploy Microsoft Outlook to Windows, Mac, Android, and iOS devices and we can configure outlook to automatically connect to the user's Microsoft 365 mailbox.</p>
                  <h2>Push updates</h2>
                  <div ><img src="https://i.ibb.co/hB8Ysj9/Intune-Updates.png" alt="Intune Update rings" style="height: auto;width: auto" /></div>
                  <p>Last but not least is the ability to push updates to some devices. I say some devices because Google and Apple block you from pushing updates to some of their devices. We’ll get into those details later. But by using compliance policies we can force users to update their devices if they want access to Microsoft 365 data.</p>
                  <h2>Forget deploying images. Use Windows Autopilot</h2>
                  <div ><img src="https://i.ibb.co/FYLwR5d/Autopilot.png" alt="Autopilot" style="height: auto;width: auto" /></div>
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
                  <div ><img src="https://i.ibb.co/ZLBHqzr/limit-device-enrollments-Intune.png" alt="Limit the number of devices a user can enroll in Intune" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Properties </strong>&gt; <strong>Edit</strong>. Set the number of devices you want a user to be able to enroll. Click <strong>Review + save</strong>. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/qNbcrJf/limit-enrollments-in-Intune.png" alt="Limit enrollments in Intune" style="height: auto;width: auto" /></div>
                  <h3>How to limit the number of devices a user can have in Azure AD</h3>
                  <p>This setting will limit how many devices a user can have in Azure AD. Since Intune creates the devices in Azure AD this setting will affect Azure AD and Intune.</p>
                  <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Devices</strong>.</p>
                  <div ><img src="https://i.ibb.co/zh1KVXP/Azure-AD-Devices.png" alt="Azure AD Devices" style="height: auto;width: auto" /></div>
                  <p>2. Click <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_Devices/DevicesMenuBlade/DeviceSettings/menuId/" target="_blank" rel="noreferrer"><strong>Device settings</strong></a>. Set the <strong>Maximum number of devices per user</strong>. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/Dfh1hxF/set-Azure-AD-device-limits.png" alt="Set Azure AD Device limits" style="height: auto;width: auto" /></div>
                  <p />
                </div>
                <div id="bottom-of-article" />
                <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                  <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                  <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{mt: 3}}>
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
