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
      path: '/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx',
      article: {"type":"article","title":"Restricting and managing apps on user devices","description":"Now that we have devices set up in Intune and secure how do we start deploying, managing, and securing apps? Let's start by deploying an app to an Android device.","featuredImage":"https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png","id":"62t_7oiZx","images":["https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png","https://i.ibb.co/56RM4mY/select-outlook-in-the-app-selection.png","https://i.ibb.co/VvzLtY2/approve-the-app.png","https://i.ibb.co/Q69pRsR/Assign-the-app.png","https://i.ibb.co/Ny4rpWg/Assign-to-all-users.png","https://i.ibb.co/98k1njW/Create-an-app-configuration-policy.png","https://i.ibb.co/WPv7R5g/Set-up-App-Configuration-policy-Basics.png","https://i.ibb.co/BsXT1tZ/Create-app-configuration-policy-Settings.png","https://i.ibb.co/7nmGbsm/create-an-app-protection-policy.png","https://i.ibb.co/qFPWBbn/Create-App-protection-policy-Apps.png","https://i.ibb.co/cy9zXyZ/App-protection-policy-Data-protection.png","https://i.ibb.co/b6KtMZt/conditional-access-policy.png","https://i.ibb.co/7GtPn4V/set-owa-mailbox-policy.png"],"datePublished":"2022/6/22","article":{"blocks":[{"inlineStyleRanges":[],"data":{},"key":"dm85i","entityRanges":[],"text":"Now that we have devices set up in Intune and secure how do we start deploying, managing, and securing apps? Let's start by deploying an app to an Android device.","depth":0,"type":"unstyled"},{"text":"How to deploy an app to an Android device","entityRanges":[],"inlineStyleRanges":[],"key":"332cg","data":{},"depth":0,"type":"header-two"},{"text":"1. Go to Microsoft Endpoint Manager admin center > Apps > Android > Add. Set App type to Manage Google Play app. Click Select.","inlineStyleRanges":[{"style":"BOLD","length":39,"offset":9},{"length":5,"style":"BOLD","offset":51},{"offset":58,"style":"BOLD","length":7},{"style":"BOLD","length":3,"offset":68},{"style":"BOLD","offset":77,"length":8},{"style":"BOLD","offset":89,"length":22},{"length":6,"style":"BOLD","offset":119}],"key":"5gis3","type":"unstyled","depth":0,"entityRanges":[{"offset":58,"length":8,"key":0}],"data":{}},{"depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[{"key":1,"offset":0,"length":1}],"text":" ","type":"atomic","key":"2ija8"},{"entityRanges":[],"text":"2. Search for the app you want to deploy, for example, Outlook. Click on the app icon.","depth":0,"inlineStyleRanges":[{"length":7,"offset":55,"style":"BOLD"},{"length":8,"style":"BOLD","offset":77}],"key":"co18t","data":{},"type":"unstyled"},{"inlineStyleRanges":[],"type":"atomic","data":{},"key":"4gten","text":" ","entityRanges":[{"length":1,"key":2,"offset":0}],"depth":0},{"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":8},{"offset":19,"style":"BOLD","length":7},{"style":"BOLD","offset":29,"length":5},{"offset":36,"style":"BOLD","length":4}],"key":"899ce","type":"unstyled","entityRanges":[],"depth":0,"text":"3. Click Approve > Approve > Done > Sync.","data":{}},{"entityRanges":[{"offset":0,"key":3,"length":1}],"depth":0,"data":{},"key":"fk1i","inlineStyleRanges":[],"type":"atomic","text":" "},{"depth":0,"inlineStyleRanges":[],"text":"4. Wait 15 minutes then go to Apps > Android. (If the app still isn't there click Add > Set App type to Manage Google Play app. Click Select. Search and click on the app ","data":{},"entityRanges":[],"key":"dv4er","type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"type":"atomic","text":" ","key":"e0uo6","data":{},"entityRanges":[{"key":4,"length":1,"offset":0}]},{"depth":0,"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":13},{"style":"BOLD","length":8,"offset":106},{"length":13,"style":"BOLD","offset":122}],"entityRanges":[],"text":"5. Click Add all users (or click Add group and add the group you want to deploy the app to) located under Required. Click Review + save.","key":"5f67q","data":{},"type":"unstyled"},{"entityRanges":[{"length":1,"offset":0,"key":5}],"key":"e81nj","data":{},"depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic"},{"depth":0,"text":"6. Click Save.","key":"cr98s","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":4}],"type":"unstyled","entityRanges":[],"data":{}},{"inlineStyleRanges":[],"depth":0,"type":"unstyled","entityRanges":[],"key":"f8dis","data":{},"text":"Now when the users' Android decheck-ineck in they'll receive the new app."},{"type":"header-two","inlineStyleRanges":[],"depth":0,"data":{},"key":"57chd","entityRanges":[],"text":"Understanding assignments"},{"type":"unstyled","key":"cna0j","depth":0,"data":{},"entityRanges":[],"text":"Did you notice you could add your groups to three different sections under Assignments: Required, Available for enrolled devices, and Available with or without enrollment. Let's discuss those three sections","inlineStyleRanges":[{"style":"BOLD","length":8,"offset":88},{"style":"BOLD","length":30,"offset":98},{"offset":134,"style":"BOLD","length":36}]},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"5n6o6","type":"header-three","text":"Required","depth":0},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"text":"Required will automatically download the app to the users' devices. They won't need to download, install, or do anything. The app will automatically be downloaded and installed on the users' devices.","type":"unstyled","key":"2clvh"},{"entityRanges":[],"key":"ba4in","text":"Available for enrolled devices","type":"header-three","inlineStyleRanges":[],"data":{},"depth":0},{"key":"d4mrp","data":{},"entityRanges":[],"text":"Available for enrolled devices will make the app available in the managed play store. In short, a user can go and download/install the app onto their device but it won't happen automatically.","depth":0,"type":"unstyled","inlineStyleRanges":[]},{"depth":0,"key":"6io8s","type":"header-three","entityRanges":[],"inlineStyleRanges":[],"data":{},"text":"Available with or without enrollment"},{"entityRanges":[],"key":"7c8h8","depth":0,"text":"Available with or without enrollment will make the app available even if the user doesn't complete the enrollment process. In short, a user can install the Intune app on their device, sign in with their credentials and then not complete the enrollment process but the app would still be available to the user.","type":"unstyled","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"text":"Configuring apps with the App configuration policies","data":{},"inlineStyleRanges":[],"type":"header-two","depth":0,"key":"39epg"},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"key":"fjl4b","type":"unstyled","text":"Some apps can even be configured through Intune. For example, in the last section, we installed Outlook on every user's device. Now that the app is installed the user would need to set up their mailbox in Outlook manually or we can create an app configuration policy to configure the app for us.","data":{}},{"type":"unstyled","depth":0,"data":{},"entityRanges":[],"key":"2u4","text":"1. Go to Microsoft Endpoint Manager admin center > Apps > App configuration policy > Add > Managed devices.","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":39},{"length":5,"offset":51,"style":"BOLD"},{"length":24,"style":"BOLD","offset":58},{"length":4,"style":"BOLD","offset":85},{"style":"BOLD","offset":91,"length":15}]},{"key":"dlta2","text":" ","entityRanges":[{"offset":0,"length":1,"key":6}],"inlineStyleRanges":[],"depth":0,"type":"atomic","data":{}},{"inlineStyleRanges":[{"style":"BOLD","offset":11,"length":5},{"offset":19,"style":"BOLD","length":13},{"style":"BOLD","offset":38,"length":9},{"offset":50,"style":"BOLD","length":18},{"offset":70,"length":12,"style":"BOLD"},{"style":"BOLD","length":17,"offset":84},{"style":"BOLD","offset":109,"length":10},{"length":17,"style":"BOLD","offset":127},{"style":"BOLD","offset":152,"length":3},{"length":4,"style":"BOLD","offset":157}],"entityRanges":[],"data":{},"text":"2. Set the name to Setup Outlook. Set Platform to Android Enterprise. Profile Type: All Profile Types. Click Select app. Click Microsoft Outlook. Click OK > Next.","key":"ctsmh","depth":0,"type":"unstyled"},{"text":" ","key":"43kdr","data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":7}],"depth":0,"type":"atomic"},{"depth":0,"data":{},"text":"3. Set the following options then click next.","inlineStyleRanges":[{"length":4,"offset":40,"style":"BOLD"}],"entityRanges":[],"key":"4ctvi","type":"unstyled"},{"depth":0,"text":"Configuration settings format: Use configuration designer","key":"bnt4r","type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[{"length":26,"offset":31,"style":"BOLD"}]},{"entityRanges":[],"key":"84lgj","text":"Configure email account settings: Yes","data":{},"inlineStyleRanges":[{"style":"BOLD","length":3,"offset":34}],"depth":0,"type":"unstyled"},{"key":"6i6a2","depth":0,"text":"Authentication type: Modern authentication","inlineStyleRanges":[{"length":21,"style":"BOLD","offset":21}],"entityRanges":[],"type":"unstyled","data":{}},{"depth":0,"entityRanges":[],"key":"1e6fd","data":{},"text":"Username attribute from AAD: User Principal Name","inlineStyleRanges":[{"offset":29,"style":"BOLD","length":19}],"type":"unstyled"},{"key":"c0csv","type":"unstyled","entityRanges":[],"depth":0,"text":"Email address attribute from AAD: Primary SMTP Address","inlineStyleRanges":[{"length":20,"style":"BOLD","offset":34}],"data":{}},{"inlineStyleRanges":[],"text":" ","key":"7dauq","data":{},"depth":0,"type":"atomic","entityRanges":[{"key":8,"length":1,"offset":0}]},{"type":"unstyled","key":"ccv51","inlineStyleRanges":[{"style":"BOLD","length":13,"offset":9},{"offset":120,"style":"BOLD","length":4}],"entityRanges":[],"data":{},"depth":0,"text":"4. Click Add all users or select the same group you set in the How to deploy an app to an Android device section. Click Next."},{"key":"174cg","data":{},"inlineStyleRanges":[{"style":"BOLD","length":6,"offset":9}],"entityRanges":[],"text":"5. Click Create.","type":"unstyled","depth":0},{"entityRanges":[],"type":"unstyled","data":{},"key":"at59q","text":"Now when an Android device syncs with Intune the user will automatically receive the Outlook app and the app will be configured for them.","inlineStyleRanges":[],"depth":0},{"text":"How to protect apps and isolate data","type":"header-two","data":{},"inlineStyleRanges":[],"key":"d0eip","entityRanges":[],"depth":0},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{},"key":"9spgb","text":"Now that we have Outlook installed and configured on your user devices how do we isolate and protect the company data stored in Outlook that's cached and accessible on the user device? With app protection policies of course!","type":"unstyled"},{"entityRanges":[],"data":{},"key":"4bjl3","text":"1. Go to Microsoft Endpoint Manager admin center > Apps > App protection policy > Create policy > Android.","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":39},{"length":5,"style":"BOLD","offset":51},{"style":"BOLD","offset":58,"length":21},{"offset":82,"length":13,"style":"BOLD"},{"style":"BOLD","length":7,"offset":98}],"depth":0,"type":"unstyled"},{"entityRanges":[{"key":9,"length":1,"offset":0}],"inlineStyleRanges":[],"depth":0,"type":"atomic","data":{},"key":"97n1t","text":" "},{"data":{},"inlineStyleRanges":[{"offset":21,"style":"BOLD","length":22},{"style":"BOLD","offset":52,"length":4}],"text":"2. Name the policy: \"Protect Microsoft Apps\". Click Next.","depth":0,"key":"6p7ka","type":"unstyled","entityRanges":[]},{"inlineStyleRanges":[{"style":"BOLD","offset":11,"length":17},{"length":18,"offset":40,"style":"BOLD"},{"style":"BOLD","length":4,"offset":66}],"text":"3. Set the Target policy to dropdown to All Microsoft Apps. Click Next.","entityRanges":[],"depth":0,"type":"unstyled","data":{},"key":"fe8ji"},{"key":"59ukp","text":" ","data":{},"inlineStyleRanges":[],"entityRanges":[{"key":10,"offset":0,"length":1}],"depth":0,"type":"atomic"},{"entityRanges":[],"data":{},"inlineStyleRanges":[{"length":4,"style":"BOLD","offset":40}],"depth":0,"type":"unstyled","key":"fqcgm","text":"4. Set the following options then click Next."},{"entityRanges":[],"type":"unstyled","depth":0,"data":{},"key":"619r7","inlineStyleRanges":[{"length":5,"style":"BOLD","offset":44}],"text":"Backup org data to Android backup services: Block"},{"entityRanges":[],"inlineStyleRanges":[{"offset":29,"style":"BOLD","length":19}],"type":"unstyled","data":{},"depth":0,"text":"Send org data to other apps: Policy managed apps","key":"bluoa"},{"entityRanges":[],"inlineStyleRanges":[{"offset":6,"length":7,"style":"BOLD"}],"type":"unstyled","key":"e4c7g","data":{},"text":"Click Select (next to select apps to exempt).","depth":0},{"text":"Name: Webex","type":"unstyled","key":"aglbb","inlineStyleRanges":[{"length":5,"style":"BOLD","offset":6}],"data":{},"entityRanges":[],"depth":0},{"entityRanges":[],"key":"dqqen","data":{},"text":"Value: com.cisco.webex.meetings","inlineStyleRanges":[{"offset":7,"length":24,"style":"BOLD"}],"depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":11,"offset":0}],"depth":0,"data":{},"text":" ","type":"atomic","key":"1d5g4"},{"entityRanges":[],"depth":0,"inlineStyleRanges":[{"length":4,"offset":41,"style":"BOLD"}],"key":"dhflp","type":"unstyled","text":"5. On the Access requirements page click Next.","data":{}},{"data":{},"entityRanges":[],"key":"7pdv1","text":"6. On the Conditional launch page click Next.","inlineStyleRanges":[{"offset":40,"style":"BOLD","length":4}],"type":"unstyled","depth":0},{"key":"1cj5r","inlineStyleRanges":[{"offset":166,"style":"BOLD","length":5},{"style":"BOLD","length":6,"offset":173}],"text":"7. On the Assignments page select your group. (you can't select all users on app protection policies. You can, however, create a dynamic group with all users). Click Next > Create.","type":"unstyled","entityRanges":[],"depth":0,"data":{}},{"entityRanges":[],"type":"unstyled","depth":0,"key":"992pk","data":{},"inlineStyleRanges":[{"offset":0,"length":89,"style":"ITALIC"}],"text":"NOTE: You can't apply app protection policies to devices. They must be assigned to users."},{"depth":0,"text":"Now your users won't be able to send data to any app that isn't managed by the policy or Webex. The users will also be required to enter a pin to access their Microsoft apps.","entityRanges":[],"key":"1ok1u","data":{},"type":"unstyled","inlineStyleRanges":[]},{"depth":0,"type":"unstyled","text":"One final note, App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.","entityRanges":[],"inlineStyleRanges":[],"data":{},"key":"ahcf7"},{"inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"fvnbh","type":"header-two","depth":0,"text":"Limit access to unmanaged devices"},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"text":"Now, let's say not everyone in your organization will receive Intune. But you don't want those devices doing everything in Exchange Online. Maybe you want them to read email on these devices but you don't want them to download attachments or enable offline mode. Let's set that up.","key":"f49bc","depth":0,"type":"unstyled"},{"entityRanges":[],"depth":0,"data":{},"key":"ch0oh","inlineStyleRanges":[],"text":"1. create a conditional access policy with the following settings:","type":"unstyled"},{"depth":0,"text":"Name: Unmanaged Devices","key":"d8sg6","type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":0}]},{"depth":0,"type":"unstyled","key":"emoth","entityRanges":[],"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":28}],"text":"Users or workload identities: Set to the group that will use unmanaged devices.","data":{}},{"inlineStyleRanges":[{"style":"BOLD","offset":0,"length":10}],"depth":0,"entityRanges":[],"key":"966pu","type":"unstyled","data":{},"text":"Cloud apps: Office 365 Exchange Online"},{"depth":0,"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":7}],"text":"Session: Use app-enforced restrictions","key":"758tq","entityRanges":[],"data":{},"type":"unstyled"},{"key":"7rd31","entityRanges":[{"length":1,"key":12,"offset":0}],"data":{},"depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic"},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"text":"2. Run the following in PowerShell:","type":"unstyled","data":{},"key":"oa96"},{"depth":0,"data":{},"text":"Connect-ExchangeOnline\nNew-OwaMailboxPolicy LimitUnmanagedDevices\nSet-OwaMailboxPolicy LimitUnmanagedDevices -ConditionalAccessPolicy ReadOnly","key":"8nr43","inlineStyleRanges":[],"type":"code","entityRanges":[]},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"text":"3. Set the OWA mailbox policy on the mailboxes.","type":"unstyled","depth":0,"key":"627ot"},{"depth":0,"data":{},"entityRanges":[{"key":13,"length":29,"offset":30}],"type":"unstyled","text":"Go to Exchange admin center > Classic Exchange admin center  > recipients > mailboxes. Select the mailbox > mailbox features > View details (under Outlook on the web). Click browse > select LimitUnmanagedDevices > OK > Save.","inlineStyleRanges":[{"style":"BOLD","length":21,"offset":6},{"style":"BOLD","length":29,"offset":30},{"length":11,"style":"BOLD","offset":63},{"offset":76,"length":9,"style":"BOLD"},{"style":"BOLD","offset":98,"length":8},{"style":"BOLD","length":16,"offset":108},{"offset":127,"style":"BOLD","length":12},{"length":7,"offset":174,"style":"BOLD"},{"length":22,"offset":190,"style":"BOLD"},{"offset":214,"style":"BOLD","length":3},{"style":"BOLD","offset":219,"length":4}],"key":"f554n"},{"type":"atomic","data":{},"entityRanges":[{"key":14,"offset":0,"length":1}],"depth":0,"text":" ","key":"37fr8","inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[],"type":"header-two","text":"Windows information protection","key":"5a5pq","data":{},"entityRanges":[]},{"type":"unstyled","entityRanges":[],"key":"75jqb","inlineStyleRanges":[],"depth":0,"data":{},"text":"Windows Information Protection (WIP), formally known as enterprise data protection (EDP), helps to protect against potential data leakage without interfering with the employee's work. In short, it prevents data from leaving apps protected by an app protection policy on Windows 10 devices. It works just like the App protection policy for Android we created above. It will prevent data from leaving the protected app. There are 4 settings:"},{"type":"unordered-list-item","text":"Block: Will completely block data from leaving the protected apps","key":"c03df","inlineStyleRanges":[{"length":5,"offset":0,"style":"BOLD"}],"depth":0,"data":{},"entityRanges":[]},{"text":"Allow Overrides: The user will receive a prompt will moving data from a protected to a non-protected app. If the user chooses to move the data regardless of the prompt the action will be logged.","data":{},"type":"unordered-list-item","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":0,"length":15}],"key":"a8ap8","depth":0},{"data":{},"key":"6bje6","type":"unordered-list-item","inlineStyleRanges":[{"style":"BOLD","offset":0,"length":6}],"entityRanges":[],"text":"Silent: The user will be allowed to move data from the protected apps but it will be logged.","depth":0},{"key":"fauqq","type":"unordered-list-item","entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":3},{"style":"color-rgb(33,37,41)","length":96,"offset":5},{"offset":5,"style":"bgcolor-rgb(255,255,255)","length":96},{"offset":5,"style":"fontsize-16","length":96},{"length":96,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":5}],"data":{},"text":"Off: The user will be allowed to move data from the protected apps and the action will not be logged."},{"inlineStyleRanges":[{"length":337,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":337},{"style":"fontsize-16","offset":0,"length":337},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":337}],"depth":0,"data":{},"key":"c8dnf","text":"Just like app protection policies in Android in Windows you need to select which apps are protected. You can also exempt apps. For example, you can create a policy to protect Microsoft Teams, then you can exclude Office ProPlus. With this configuration, users won't be able to remove data from Microsoft Teams except to the Office suite.","type":"unstyled","entityRanges":[]}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/AppsAndroidMenu/androidApps"}},"1":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alignment":"none","alt":"Add an Android app to Intune","src":"https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png","height":"auto"}},"2":{"data":{"height":"auto","width":"auto","alt":"Select outlook in the app selection","src":"https://i.ibb.co/56RM4mY/select-outlook-in-the-app-selection.png","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"3":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","alignment":"none","height":"auto","alt":"Approve the app","src":"https://i.ibb.co/VvzLtY2/approve-the-app.png"}},"4":{"type":"IMAGE","data":{"height":"auto","alignment":"none","alt":"Assign the app","src":"https://i.ibb.co/Q69pRsR/Assign-the-app.png","width":"auto"},"mutability":"MUTABLE"},"5":{"data":{"src":"https://i.ibb.co/Ny4rpWg/Assign-to-all-users.png","height":"auto","alt":"Assign to all users","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"6":{"data":{"alt":"Create an app configuration policy","src":"https://i.ibb.co/98k1njW/Create-an-app-configuration-policy.png","alignment":"none","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","width":"auto","alt":"Set up App Configuration policy Basics","alignment":"none","src":"https://i.ibb.co/WPv7R5g/Set-up-App-Configuration-policy-Basics.png"}},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","alt":"Create app configuration policy - Settings","src":"https://i.ibb.co/BsXT1tZ/Create-app-configuration-policy-Settings.png","alignment":"none"}},"9":{"data":{"width":"auto","alt":"Create an app protection policy","src":"https://i.ibb.co/7nmGbsm/create-an-app-protection-policy.png","height":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"10":{"data":{"alt":"Create App protection policy - Apps","height":"auto","alignment":"none","src":"https://i.ibb.co/qFPWBbn/Create-App-protection-policy-Apps.png","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"11":{"data":{"width":"auto","src":"https://i.ibb.co/cy9zXyZ/App-protection-policy-Data-protection.png","alt":"App protection policy - Data protection","height":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"12":{"data":{"alt":"Conditional access policy","alignment":"none","src":"https://i.ibb.co/b6KtMZt/conditional-access-policy.png","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"13":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://outlook.office365.com/ecp/?form=eac&mkt=en-US","targetOption":"_blank"}},"14":{"mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/7GtPn4V/set-owa-mailbox-policy.png","width":"auto","alt":"Set OWA Mailbox policy","height":"auto"},"type":"IMAGE"}}},"slug":"Restricting-and-managing-apps-on-user-devices-62t_7oiZx","publish":true,"sectionId":"l0DxUuonW"},
      nextContentSlug: 'NEXT_CONTENT',
      previousContentSlug: 'Understanding-compliance-policies-qDRA4jjoN',
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
                <div><p>Now that we have devices set up in Intune and secure how do we start deploying, managing, and securing apps? Let's start by deploying an app to an Android device.</p>
<h2>How to deploy an app to an Android device</h2>
<p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Apps </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/AppsAndroidMenu/androidApps" target="_blank"><strong>Android</strong> </a>&gt; <strong>Add</strong>. Set <strong>App type</strong> to <strong>Manage Google Play app</strong>. Click <strong>Select</strong>.</p>
<div ><img src="https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png" alt="Add an Android app to Intune" style="height: auto;width: auto"/></div>
<p>2. Search for the app you want to deploy, for example, <strong>Outlook</strong>. Click on the <strong>app icon</strong>.</p>
<div ><img src="https://i.ibb.co/56RM4mY/select-outlook-in-the-app-selection.png" alt="Select outlook in the app selection" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Approve </strong>&gt; <strong>Approve</strong> &gt; <strong>Done </strong>&gt; <strong>Sync</strong>.</p>
<div ><img src="https://i.ibb.co/VvzLtY2/approve-the-app.png" alt="Approve the app" style="height: auto;width: auto"/></div>
<p>4. Wait 15 minutes then go to Apps &gt; Android. (If the app still isn't there click Add &gt; Set App type to Manage Google Play app. Click Select. Search and click on the app&nbsp;</p>
<div ><img src="https://i.ibb.co/Q69pRsR/Assign-the-app.png" alt="Assign the app" style="height: auto;width: auto"/></div>
<p>5. Click <strong>Add all users</strong> (or click Add group and add the group you want to deploy the app to) located under <strong>Required</strong>. Click <strong>Review + save</strong>.</p>
<div ><img src="https://i.ibb.co/Ny4rpWg/Assign-to-all-users.png" alt="Assign to all users" style="height: auto;width: auto"/></div>
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
<div ><img src="https://i.ibb.co/98k1njW/Create-an-app-configuration-policy.png" alt="Create an app configuration policy" style="height: auto;width: auto"/></div>
<p>2. Set the <strong>name </strong>to <strong>Setup Outlook</strong>. Set <strong>Platform </strong>to <strong>Android Enterprise</strong>. <strong>Profile Type</strong>: <strong>All Profile Types</strong>. Click <strong>Select app</strong>. Click <strong>Microsoft Outlook</strong>. Click <strong>OK </strong>&gt; <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/WPv7R5g/Set-up-App-Configuration-policy-Basics.png" alt="Set up App Configuration policy Basics" style="height: auto;width: auto"/></div>
<p>3. Set the following options then click <strong>next</strong>.</p>
<p>Configuration settings format: <strong>Use configuration designer</strong></p>
<p>Configure email account settings: <strong>Yes</strong></p>
<p>Authentication type: <strong>Modern authentication</strong></p>
<p>Username attribute from AAD: <strong>User Principal Name</strong></p>
<p>Email address attribute from AAD: <strong>Primary SMTP Address</strong></p>
<div ><img src="https://i.ibb.co/BsXT1tZ/Create-app-configuration-policy-Settings.png" alt="Create app configuration policy - Settings" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Add all users</strong> or select the same group you set in the How to deploy an app to an Android device section. Click <strong>Next</strong>.</p>
<p>5. Click <strong>Create</strong>.</p>
<p>Now when an Android device syncs with Intune the user will automatically receive the Outlook app and the app will be configured for them.</p>
<h2>How to protect apps and isolate data</h2>
<p>Now that we have Outlook installed and configured on your user devices how do we isolate and protect the company data stored in Outlook that's cached and accessible on the user device? With app protection policies of course!</p>
<p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Apps </strong>&gt; <strong>App protection policy</strong> &gt; <strong>Create policy</strong> &gt; <strong>Android</strong>.</p>
<div ><img src="https://i.ibb.co/7nmGbsm/create-an-app-protection-policy.png" alt="Create an app protection policy" style="height: auto;width: auto"/></div>
<p>2. Name the policy: "<strong>Protect Microsoft Apps</strong>". Click <strong>Next</strong>.</p>
<p>3. Set the <strong>Target policy to </strong>dropdown to <strong>All Microsoft Apps</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/qFPWBbn/Create-App-protection-policy-Apps.png" alt="Create App protection policy - Apps" style="height: auto;width: auto"/></div>
<p>4. Set the following options then click <strong>Next</strong>.</p>
<p>Backup org data to Android backup services: <strong>Block</strong></p>
<p>Send org data to other apps: <strong>Policy managed apps</strong></p>
<p>Click <strong>Select </strong>(next to select apps to exempt).</p>
<p>Name: <strong>Webex</strong></p>
<p>Value: <strong>com.cisco.webex.meetings</strong></p>
<div ><img src="https://i.ibb.co/cy9zXyZ/App-protection-policy-Data-protection.png" alt="App protection policy - Data protection" style="height: auto;width: auto"/></div>
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
<div ><img src="https://i.ibb.co/b6KtMZt/conditional-access-policy.png" alt="Conditional access policy" style="height: auto;width: auto"/></div>
<p>2. Run the following in PowerShell:</p>
<pre>Connect-ExchangeOnline<br/>New-OwaMailboxPolicy LimitUnmanagedDevices<br/>Set-OwaMailboxPolicy LimitUnmanagedDevices -ConditionalAccessPolicy ReadOnly</pre>
<p>3. Set the OWA mailbox policy on the mailboxes.</p>
<p>Go to <strong>Exchange admin center</strong> &gt; <a href="https://outlook.office365.com/ecp/?form=eac&mkt=en-US" target="_blank"><strong>Classic Exchange admin center</strong></a>  &gt; <strong>recipients </strong>&gt; <strong>mailboxes</strong>. Select the <strong>mailbox </strong>&gt; <strong>mailbox features</strong> &gt; <strong>View details</strong> (under Outlook on the web). Click <strong>browse </strong>&gt; select <strong>LimitUnmanagedDevices </strong>&gt; <strong>OK </strong>&gt; <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/7GtPn4V/set-owa-mailbox-policy.png" alt="Set OWA Mailbox policy" style="height: auto;width: auto"/></div>
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
