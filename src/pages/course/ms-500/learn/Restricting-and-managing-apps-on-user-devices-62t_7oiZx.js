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
      path: '/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx',
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dm85i', text: 'Now that we have devices set up in Intune and secure how do we start deploying, managing, and securing apps? Let\'s start by deploying an app to an Android device.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '332cg', text: 'How to deploy an app to an Android device', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 8, offset: 58}], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 5, offset: 51, style: 'BOLD'}, {length: 7, offset: 58, style: 'BOLD'}, {length: 3, offset: 68, style: 'BOLD'}, {length: 8, offset: 77, style: 'BOLD'}, {length: 22, offset: 89, style: 'BOLD'}, {length: 6, offset: 119, style: 'BOLD'}], key: '5gis3', text: '1. Go to Microsoft Endpoint Manager admin center > Apps > Android > Add. Set App type to Manage Google Play app. Click Select.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '2ija8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 55, style: 'BOLD'}, {length: 8, offset: 77, style: 'BOLD'}], key: 'co18t', text: '2. Search for the app you want to deploy, for example, Outlook. Click on the app icon.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '4gten', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 9, style: 'BOLD'}, {length: 7, offset: 19, style: 'BOLD'}, {length: 5, offset: 29, style: 'BOLD'}, {length: 4, offset: 36, style: 'BOLD'}], key: '899ce', text: '3. Click Approve > Approve > Done > Sync.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fk1i', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dv4er', text: '4. Wait 15 minutes then go to Apps > Android. (If the app still isn\'t there click Add > Set App type to Manage Google Play app. Click Select. Search and click on the app ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e0uo6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 9, style: 'BOLD'}, {length: 8, offset: 106, style: 'BOLD'}, {length: 13, offset: 122, style: 'BOLD'}], key: '5f67q', text: '5. Click Add all users (or click Add group and add the group you want to deploy the app to) located under Required. Click Review + save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e81nj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}], key: 'cr98s', text: '6. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f8dis', text: 'Now when the users\' Android decheck-ineck in they\'ll receive the new app.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '57chd', text: 'Understanding assignments', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 88, style: 'BOLD'}, {length: 30, offset: 98, style: 'BOLD'}, {length: 36, offset: 134, style: 'BOLD'}], key: 'cna0j', text: 'Did you notice you could add your groups to three different sections under Assignments: Required, Available for enrolled devices, and Available with or without enrollment. Let\'s discuss those three sections', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5n6o6', text: 'Required', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2clvh', text: 'Required will automatically download the app to the users\' devices. They won\'t need to download, install, or do anything. The app will automatically be downloaded and installed on the users\' devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ba4in', text: 'Available for enrolled devices', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd4mrp', text: 'Available for enrolled devices will make the app available in the managed play store. In short, a user can go and download/install the app onto their device but it won\'t happen automatically.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6io8s', text: 'Available with or without enrollment', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7c8h8', text: 'Available with or without enrollment will make the app available even if the user doesn\'t complete the enrollment process. In short, a user can install the Intune app on their device, sign in with their credentials and then not complete the enrollment process but the app would still be available to the user.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '39epg', text: 'Configuring apps with the App configuration policies', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fjl4b', text: 'Some apps can even be configured through Intune. For example, in the last section, we installed Outlook on every user\'s device. Now that the app is installed the user would need to set up their mailbox in Outlook manually or we can create an app configuration policy to configure the app for us.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 5, offset: 51, style: 'BOLD'}, {length: 24, offset: 58, style: 'BOLD'}, {length: 4, offset: 85, style: 'BOLD'}, {length: 15, offset: 91, style: 'BOLD'}], key: '2u4', text: '1. Go to Microsoft Endpoint Manager admin center > Apps > App configuration policy > Add > Managed devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dlta2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 11, style: 'BOLD'}, {length: 13, offset: 19, style: 'BOLD'}, {length: 9, offset: 38, style: 'BOLD'}, {length: 18, offset: 50, style: 'BOLD'}, {length: 12, offset: 70, style: 'BOLD'}, {length: 17, offset: 84, style: 'BOLD'}, {length: 10, offset: 109, style: 'BOLD'}, {length: 17, offset: 127, style: 'BOLD'}, {length: 3, offset: 152, style: 'BOLD'}, {length: 4, offset: 157, style: 'BOLD'}], key: 'ctsmh', text: '2. Set the name to Setup Outlook. Set Platform to Android Enterprise. Profile Type: All Profile Types. Click Select app. Click Microsoft Outlook. Click OK > Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '43kdr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 40, style: 'BOLD'}], key: '4ctvi', text: '3. Set the following options then click next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 26, offset: 31, style: 'BOLD'}], key: 'bnt4r', text: 'Configuration settings format: Use configuration designer', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 34, style: 'BOLD'}], key: '84lgj', text: 'Configure email account settings: Yes', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 21, style: 'BOLD'}], key: '6i6a2', text: 'Authentication type: Modern authentication', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 29, style: 'BOLD'}], key: '1e6fd', text: 'Username attribute from AAD: User Principal Name', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 20, offset: 34, style: 'BOLD'}], key: 'c0csv', text: 'Email address attribute from AAD: Primary SMTP Address', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '7dauq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 9, style: 'BOLD'}, {length: 4, offset: 120, style: 'BOLD'}], key: 'ccv51', text: '4. Click Add all users or select the same group you set in the How to deploy an app to an Android device section. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}], key: '174cg', text: '5. Click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'at59q', text: 'Now when an Android device syncs with Intune the user will automatically receive the Outlook app and the app will be configured for them.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd0eip', text: 'How to protect apps and isolate data', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9spgb', text: 'Now that we have Outlook installed and configured on your user devices how do we isolate and protect the company data stored in Outlook that\'s cached and accessible on the user device? With app protection policies of course!', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 5, offset: 51, style: 'BOLD'}, {length: 21, offset: 58, style: 'BOLD'}, {length: 13, offset: 82, style: 'BOLD'}, {length: 7, offset: 98, style: 'BOLD'}], key: '4bjl3', text: '1. Go to Microsoft Endpoint Manager admin center > Apps > App protection policy > Create policy > Android.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '97n1t', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 21, style: 'BOLD'}, {length: 4, offset: 52, style: 'BOLD'}], key: '6p7ka', text: '2. Name the policy: "Protect Microsoft Apps". Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 11, style: 'BOLD'}, {length: 18, offset: 40, style: 'BOLD'}, {length: 4, offset: 66, style: 'BOLD'}], key: 'fe8ji', text: '3. Set the Target policy to dropdown to All Microsoft Apps. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '59ukp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 40, style: 'BOLD'}], key: 'fqcgm', text: '4. Set the following options then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 44, style: 'BOLD'}], key: '619r7', text: 'Backup org data to Android backup services: Block', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 29, style: 'BOLD'}], key: 'bluoa', text: 'Send org data to other apps: Policy managed apps', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 6, style: 'BOLD'}], key: 'e4c7g', text: 'Click Select (next to select apps to exempt).', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 6, style: 'BOLD'}], key: 'aglbb', text: 'Name: Webex', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 7, style: 'BOLD'}], key: 'dqqen', text: 'Value: com.cisco.webex.meetings', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: '1d5g4', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 41, style: 'BOLD'}], key: 'dhflp', text: '5. On the Access requirements page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 40, style: 'BOLD'}], key: '7pdv1', text: '6. On the Conditional launch page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 166, style: 'BOLD'}, {length: 6, offset: 173, style: 'BOLD'}], key: '1cj5r', text: '7. On the Assignments page select your group. (you can\'t select all users on app protection policies. You can, however, create a dynamic group with all users). Click Next > Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 89, offset: 0, style: 'ITALIC'}], key: '992pk', text: 'NOTE: You can\'t apply app protection policies to devices. They must be assigned to users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ok1u', text: 'Now your users won\'t be able to send data to any app that isn\'t managed by the policy or Webex. The users will also be required to enter a pin to access their Microsoft apps.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ahcf7', text: 'One final note, App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fvnbh', text: 'Limit access to unmanaged devices', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f49bc', text: 'Now, let\'s say not everyone in your organization will receive Intune. But you don\'t want those devices doing everything in Exchange Online. Maybe you want them to read email on these devices but you don\'t want them to download attachments or enable offline mode. Let\'s set that up.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ch0oh', text: '1. create a conditional access policy with the following settings:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 0, style: 'BOLD'}], key: 'd8sg6', text: 'Name: Unmanaged Devices', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 28, offset: 0, style: 'BOLD'}], key: 'emoth', text: 'Users or workload identities: Set to the group that will use unmanaged devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 0, style: 'BOLD'}], key: '966pu', text: 'Cloud apps: Office 365 Exchange Online', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 0, style: 'BOLD'}], key: '758tq', text: 'Session: Use app-enforced restrictions', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '7rd31', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'oa96', text: '2. Run the following in PowerShell:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8nr43', text: 'Connect-ExchangeOnline\nNew-OwaMailboxPolicy LimitUnmanagedDevices\nSet-OwaMailboxPolicy LimitUnmanagedDevices -ConditionalAccessPolicy ReadOnly', type: 'code'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '627ot', text: '3. Set the OWA mailbox policy on the mailboxes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 29, offset: 30}], inlineStyleRanges: [{length: 21, offset: 6, style: 'BOLD'}, {length: 29, offset: 30, style: 'BOLD'}, {length: 11, offset: 63, style: 'BOLD'}, {length: 9, offset: 76, style: 'BOLD'}, {length: 8, offset: 98, style: 'BOLD'}, {length: 16, offset: 108, style: 'BOLD'}, {length: 12, offset: 127, style: 'BOLD'}, {length: 7, offset: 174, style: 'BOLD'}, {length: 22, offset: 190, style: 'BOLD'}, {length: 3, offset: 214, style: 'BOLD'}, {length: 4, offset: 219, style: 'BOLD'}], key: 'f554n', text: 'Go to Exchange admin center > Classic Exchange admin center  > recipients > mailboxes. Select the mailbox > mailbox features > View details (under Outlook on the web). Click browse > select LimitUnmanagedDevices > OK > Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '37fr8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5a5pq', text: 'Windows information protection', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '75jqb', text: 'Windows Information Protection (WIP), formally known as enterprise data protection (EDP), helps to protect against potential data leakage without interfering with the employee\'s work. In short, it prevents data from leaving apps protected by an app protection policy on Windows 10 devices. It works just like the App protection policy for Android we created above. It will prevent data from leaving the protected app. There are 4 settings:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 0, style: 'BOLD'}], key: 'c03df', text: 'Block: Will completely block data from leaving the protected apps', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 15, offset: 0, style: 'BOLD'}], key: 'a8ap8', text: 'Allow Overrides: The user will receive a prompt will moving data from a protected to a non-protected app. If the user chooses to move the data regardless of the prompt the action will be logged.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 0, style: 'BOLD'}], key: '6bje6', text: 'Silent: The user will be allowed to move data from the protected apps but it will be logged.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 0, style: 'BOLD'}, {length: 96, offset: 5, style: 'color-rgb(33,37,41)'}, {length: 96, offset: 5, style: 'bgcolor-rgb(255,255,255)'}, {length: 96, offset: 5, style: 'fontsize-16'}, {length: 96, offset: 5, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'fauqq', text: 'Off: The user will be allowed to move data from the protected apps and the action will not be logged.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 337, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 337, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 337, offset: 0, style: 'fontsize-16'}, {length: 337, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'c8dnf', text: 'Just like app protection policies in Android in Windows you need to select which apps are protected. You can also exempt apps. For example, you can create a policy to protect Microsoft Teams, then you can exclude Office ProPlus. With this configuration, users won\'t be able to remove data from Microsoft Teams except to the Office suite.', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/AppsAndroidMenu/androidApps'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Add an Android app to Intune', height: 'auto', src: 'https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Create App protection policy - Apps', height: 'auto', src: 'https://i.ibb.co/qFPWBbn/Create-App-protection-policy-Apps.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'App protection policy - Data protection', height: 'auto', src: 'https://i.ibb.co/cy9zXyZ/App-protection-policy-Data-protection.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Conditional access policy', height: 'auto', src: 'https://i.ibb.co/b6KtMZt/conditional-access-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {targetOption: '_blank', url: 'https://outlook.office365.com/ecp/?form=eac&mkt=en-US'}, mutability: 'MUTABLE', type: 'LINK'}, 14: {data: {alignment: 'none', alt: 'Set OWA Mailbox policy', height: 'auto', src: 'https://i.ibb.co/7GtPn4V/set-owa-mailbox-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Select outlook in the app selection', height: 'auto', src: 'https://i.ibb.co/56RM4mY/select-outlook-in-the-app-selection.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Approve the app', height: 'auto', src: 'https://i.ibb.co/VvzLtY2/approve-the-app.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Assign the app', height: 'auto', src: 'https://i.ibb.co/Q69pRsR/Assign-the-app.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Assign to all users', height: 'auto', src: 'https://i.ibb.co/Ny4rpWg/Assign-to-all-users.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Create an app configuration policy', height: 'auto', src: 'https://i.ibb.co/98k1njW/Create-an-app-configuration-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Set up App Configuration policy Basics', height: 'auto', src: 'https://i.ibb.co/WPv7R5g/Set-up-App-Configuration-policy-Basics.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Create app configuration policy - Settings', height: 'auto', src: 'https://i.ibb.co/BsXT1tZ/Create-app-configuration-policy-Settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Create an app protection policy', height: 'auto', src: 'https://i.ibb.co/7nmGbsm/create-an-app-protection-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/6/22', description: 'Now that we have devices set up in Intune and secure how do we start deploying, managing, and securing apps? Let\'s start by deploying an app to an Android device.', featuredImage: 'https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png', id: '62t_7oiZx', images: ['https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png', 'https://i.ibb.co/56RM4mY/select-outlook-in-the-app-selection.png', 'https://i.ibb.co/VvzLtY2/approve-the-app.png', 'https://i.ibb.co/Q69pRsR/Assign-the-app.png', 'https://i.ibb.co/Ny4rpWg/Assign-to-all-users.png', 'https://i.ibb.co/98k1njW/Create-an-app-configuration-policy.png', 'https://i.ibb.co/WPv7R5g/Set-up-App-Configuration-policy-Basics.png', 'https://i.ibb.co/BsXT1tZ/Create-app-configuration-policy-Settings.png', 'https://i.ibb.co/7nmGbsm/create-an-app-protection-policy.png', 'https://i.ibb.co/qFPWBbn/Create-App-protection-policy-Apps.png', 'https://i.ibb.co/cy9zXyZ/App-protection-policy-Data-protection.png', 'https://i.ibb.co/b6KtMZt/conditional-access-policy.png', 'https://i.ibb.co/7GtPn4V/set-owa-mailbox-policy.png'], publish: true, sectionId: 'l0DxUuonW', slug: 'Restricting-and-managing-apps-on-user-devices-62t_7oiZx', title: 'Restricting and managing apps on user devices', type: 'article'},
      nextContentSlug: 'NEXT_CONTENT',
      previousContentSlug: 'Understanding-compliance-policies-qDRA4jjoN',
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
              pre {
                white-space: pre-wrap;
              }
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p>Now that we have devices set up in Intune and secure how do we start deploying, managing, and securing apps? Let's start by deploying an app to an Android device.</p>
                  <h2>How to deploy an app to an Android device</h2>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Apps </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/AppsAndroidMenu/androidApps" target="_blank" rel="noreferrer"><strong>Android</strong> </a>&gt; <strong>Add</strong>. Set <strong>App type</strong> to <strong>Manage Google Play app</strong>. Click <strong>Select</strong>.</p>
                  <div ><img src="https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png" alt="Add an Android app to Intune" style="height: auto;width: auto" /></div>
                  <p>2. Search for the app you want to deploy, for example, <strong>Outlook</strong>. Click on the <strong>app icon</strong>.</p>
                  <div ><img src="https://i.ibb.co/56RM4mY/select-outlook-in-the-app-selection.png" alt="Select outlook in the app selection" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Approve </strong>&gt; <strong>Approve</strong> &gt; <strong>Done </strong>&gt; <strong>Sync</strong>.</p>
                  <div ><img src="https://i.ibb.co/VvzLtY2/approve-the-app.png" alt="Approve the app" style="height: auto;width: auto" /></div>
                  <p>4. Wait 15 minutes then go to Apps &gt; Android. (If the app still isn't there click Add &gt; Set App type to Manage Google Play app. Click Select. Search and click on the app&nbsp;</p>
                  <div ><img src="https://i.ibb.co/Q69pRsR/Assign-the-app.png" alt="Assign the app" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Add all users</strong> (or click Add group and add the group you want to deploy the app to) located under <strong>Required</strong>. Click <strong>Review + save</strong>.</p>
                  <div ><img src="https://i.ibb.co/Ny4rpWg/Assign-to-all-users.png" alt="Assign to all users" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Save</strong>.</p>
                  <p>Now when the users' Android decheck-ineck in they'll receive the new app.</p>
                  <h2>Understanding assignments</h2>
                  <p>Did you notice you could add your groups to three different sections under Assignments: <strong>Required</strong>, <strong>Available for enrolled devices</strong>, and <strong>Available with or without enrollment</strong>. Let's discuss those three sections</p>
                  <h3>Required</h3>
                  <p>Required will automatically download the app to the users' devices. They won't need to download, install, or do anything. The app will automatically be downloaded and installed on the users' devices.</p>
                  <h3>Available for enrolled devices</h3>
                  <p>Available for enrolled devices will make the app available in the managed play store. In short, a user can go and download/install the app onto their device but it won't happen automatically.</p>
                  <h3>Available with or without enrollment</h3>
                  <p>Available with or without enrollment will make the app available even if the user doesn't complete the enrollment process. In short, a user can install the Intune app on their device, sign in with their credentials and then not complete the enrollment process but the app would still be available to the user.</p>
                  <h2>Configuring apps with the App configuration policies</h2>
                  <p>Some apps can even be configured through Intune. For example, in the last section, we installed Outlook on every user's device. Now that the app is installed the user would need to set up their mailbox in Outlook manually or we can create an app configuration policy to configure the app for us.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Apps </strong>&gt; <strong>App configuration policy</strong> &gt; <strong>Add </strong>&gt; <strong>Managed devices</strong>.</p>
                  <div ><img src="https://i.ibb.co/98k1njW/Create-an-app-configuration-policy.png" alt="Create an app configuration policy" style="height: auto;width: auto" /></div>
                  <p>2. Set the <strong>name </strong>to <strong>Setup Outlook</strong>. Set <strong>Platform </strong>to <strong>Android Enterprise</strong>. <strong>Profile Type</strong>: <strong>All Profile Types</strong>. Click <strong>Select app</strong>. Click <strong>Microsoft Outlook</strong>. Click <strong>OK </strong>&gt; <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/WPv7R5g/Set-up-App-Configuration-policy-Basics.png" alt="Set up App Configuration policy Basics" style="height: auto;width: auto" /></div>
                  <p>3. Set the following options then click <strong>next</strong>.</p>
                  <p>Configuration settings format: <strong>Use configuration designer</strong></p>
                  <p>Configure email account settings: <strong>Yes</strong></p>
                  <p>Authentication type: <strong>Modern authentication</strong></p>
                  <p>Username attribute from AAD: <strong>User Principal Name</strong></p>
                  <p>Email address attribute from AAD: <strong>Primary SMTP Address</strong></p>
                  <div ><img src="https://i.ibb.co/BsXT1tZ/Create-app-configuration-policy-Settings.png" alt="Create app configuration policy - Settings" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Add all users</strong> or select the same group you set in the How to deploy an app to an Android device section. Click <strong>Next</strong>.</p>
                  <p>5. Click <strong>Create</strong>.</p>
                  <p>Now when an Android device syncs with Intune the user will automatically receive the Outlook app and the app will be configured for them.</p>
                  <h2>How to protect apps and isolate data</h2>
                  <p>Now that we have Outlook installed and configured on your user devices how do we isolate and protect the company data stored in Outlook that's cached and accessible on the user device? With app protection policies of course!</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Apps </strong>&gt; <strong>App protection policy</strong> &gt; <strong>Create policy</strong> &gt; <strong>Android</strong>.</p>
                  <div ><img src="https://i.ibb.co/7nmGbsm/create-an-app-protection-policy.png" alt="Create an app protection policy" style="height: auto;width: auto" /></div>
                  <p>2. Name the policy: "<strong>Protect Microsoft Apps</strong>". Click <strong>Next</strong>.</p>
                  <p>3. Set the <strong>Target policy to </strong>dropdown to <strong>All Microsoft Apps</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/qFPWBbn/Create-App-protection-policy-Apps.png" alt="Create App protection policy - Apps" style="height: auto;width: auto" /></div>
                  <p>4. Set the following options then click <strong>Next</strong>.</p>
                  <p>Backup org data to Android backup services: <strong>Block</strong></p>
                  <p>Send org data to other apps: <strong>Policy managed apps</strong></p>
                  <p>Click <strong>Select </strong>(next to select apps to exempt).</p>
                  <p>Name: <strong>Webex</strong></p>
                  <p>Value: <strong>com.cisco.webex.meetings</strong></p>
                  <div ><img src="https://i.ibb.co/cy9zXyZ/App-protection-policy-Data-protection.png" alt="App protection policy - Data protection" style="height: auto;width: auto" /></div>
                  <p>5. On the Access requirements page click <strong>Next</strong>.</p>
                  <p>6. On the Conditional launch page click <strong>Next</strong>.</p>
                  <p>7. On the Assignments page select your group. (you can't select all users on app protection policies. You can, however, create a dynamic group with all users). Click <strong>Next </strong>&gt; <strong>Create</strong>.</p>
                  <p><em>NOTE: You can't apply app protection policies to devices. They must be assigned to users.</em></p>
                  <p>Now your users won't be able to send data to any app that isn't managed by the policy or Webex. The users will also be required to enter a pin to access their Microsoft apps.</p>
                  <p>One final note, App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.</p>
                  <h2>Limit access to unmanaged devices</h2>
                  <p>Now, let's say not everyone in your organization will receive Intune. But you don't want those devices doing everything in Exchange Online. Maybe you want them to read email on these devices but you don't want them to download attachments or enable offline mode. Let's set that up.</p>
                  <p>1. create a conditional access policy with the following settings:</p>
                  <p><strong>Name</strong>: Unmanaged Devices</p>
                  <p><strong>Users or workload identities</strong>: Set to the group that will use unmanaged devices.</p>
                  <p><strong>Cloud apps</strong>: Office 365 Exchange Online</p>
                  <p><strong>Session</strong>: Use app-enforced restrictions</p>
                  <div ><img src="https://i.ibb.co/b6KtMZt/conditional-access-policy.png" alt="Conditional access policy" style="height: auto;width: auto" /></div>
                  <p>2. Run the following in PowerShell:</p>
                  <pre>Connect-ExchangeOnline<br />New-OwaMailboxPolicy LimitUnmanagedDevices<br />Set-OwaMailboxPolicy LimitUnmanagedDevices -ConditionalAccessPolicy ReadOnly</pre>
                  <p>3. Set the OWA mailbox policy on the mailboxes.</p>
                  <p>Go to <strong>Exchange admin center</strong> &gt; <a href="https://outlook.office365.com/ecp/?form=eac&mkt=en-US" target="_blank" rel="noreferrer"><strong>Classic Exchange admin center</strong></a>  &gt; <strong>recipients </strong>&gt; <strong>mailboxes</strong>. Select the <strong>mailbox </strong>&gt; <strong>mailbox features</strong> &gt; <strong>View details</strong> (under Outlook on the web). Click <strong>browse </strong>&gt; select <strong>LimitUnmanagedDevices </strong>&gt; <strong>OK </strong>&gt; <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/7GtPn4V/set-owa-mailbox-policy.png" alt="Set OWA Mailbox policy" style="height: auto;width: auto" /></div>
                  <h2>Windows information protection</h2>
                  <p>Windows Information Protection (WIP), formally known as enterprise data protection (EDP), helps to protect against potential data leakage without interfering with the employee's work. In short, it prevents data from leaving apps protected by an app protection policy on Windows 10 devices. It works just like the App protection policy for Android we created above. It will prevent data from leaving the protected app. There are 4 settings:</p>
                  <ul>
                    <li><strong>Block</strong>: Will completely block data from leaving the protected apps</li>
                    <li><strong>Allow Overrides</strong>: The user will receive a prompt will moving data from a protected to a non-protected app. If the user chooses to move the data regardless of the prompt the action will be logged.</li>
                    <li><strong>Silent</strong>: The user will be allowed to move data from the protected apps but it will be logged.</li>
                    <li><strong>Off</strong>: <span >The user will be allowed to move data from the protected apps and the action will not be logged.</span></li>
                  </ul>
                  <p><span >Just like app protection policies in Android in Windows you need to select which apps are protected. You can also exempt apps. For example, you can create a policy to protect Microsoft Teams, then you can exclude Office ProPlus. With this configuration, users won't be able to remove data from Microsoft Teams except to the Office suite.</span></p>
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
