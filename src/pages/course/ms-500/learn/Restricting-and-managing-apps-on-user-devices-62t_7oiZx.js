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
      article: {"images":["https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png","https://i.ibb.co/56RM4mY/select-outlook-in-the-app-selection.png","https://i.ibb.co/VvzLtY2/approve-the-app.png","https://i.ibb.co/Q69pRsR/Assign-the-app.png","https://i.ibb.co/Ny4rpWg/Assign-to-all-users.png","https://i.ibb.co/98k1njW/Create-an-app-configuration-policy.png","https://i.ibb.co/WPv7R5g/Set-up-App-Configuration-policy-Basics.png","https://i.ibb.co/BsXT1tZ/Create-app-configuration-policy-Settings.png","https://i.ibb.co/7nmGbsm/create-an-app-protection-policy.png","https://i.ibb.co/qFPWBbn/Create-App-protection-policy-Apps.png","https://i.ibb.co/cy9zXyZ/App-protection-policy-Data-protection.png","https://i.ibb.co/b6KtMZt/conditional-access-policy.png","https://i.ibb.co/7GtPn4V/set-owa-mailbox-policy.png"],"featuredImage":"https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png","sectionId":"l0DxUuonW","description":"Now that we have devices set up in Intune and secure how do we start deploying, managing, and securing apps? Let's start by deploying an app to an Android device.","title":"Restricting and managing apps on user devices","article":{"blocks":[{"entityRanges":[],"data":{},"text":"Now that we have devices set up in Intune and secure how do we start deploying, managing, and securing apps? Let's start by deploying an app to an Android device.","key":"dm85i","inlineStyleRanges":[],"type":"unstyled","depth":0},{"text":"How to deploy an app to an Android device","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"header-two","key":"332cg"},{"text":"1. Go to Microsoft Endpoint Manager admin center > Apps > Android > Add. Set App type to Manage Google Play app. Click Select.","entityRanges":[{"key":0,"length":8,"offset":58}],"depth":0,"key":"5gis3","type":"unstyled","data":{},"inlineStyleRanges":[{"length":39,"offset":9,"style":"BOLD"},{"offset":51,"length":5,"style":"BOLD"},{"style":"BOLD","offset":58,"length":7},{"style":"BOLD","length":3,"offset":68},{"offset":77,"style":"BOLD","length":8},{"offset":89,"style":"BOLD","length":22},{"style":"BOLD","length":6,"offset":119}]},{"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":1,"offset":0}],"key":"2ija8","depth":0,"type":"atomic","text":" ","data":{}},{"type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":7,"offset":55},{"style":"BOLD","length":8,"offset":77}],"text":"2. Search for the app you want to deploy, for example, Outlook. Click on the app icon.","depth":0,"data":{},"key":"co18t"},{"type":"atomic","entityRanges":[{"key":2,"offset":0,"length":1}],"inlineStyleRanges":[],"depth":0,"text":" ","key":"4gten","data":{}},{"data":{},"depth":0,"key":"899ce","inlineStyleRanges":[{"length":8,"offset":9,"style":"BOLD"},{"length":7,"offset":19,"style":"BOLD"},{"offset":29,"style":"BOLD","length":5},{"style":"BOLD","length":4,"offset":36}],"text":"3. Click Approve > Approve > Done > Sync.","entityRanges":[],"type":"unstyled"},{"depth":0,"data":{},"text":" ","type":"atomic","key":"fk1i","inlineStyleRanges":[],"entityRanges":[{"key":3,"length":1,"offset":0}]},{"text":"4. Wait 15 minutes then go to Apps > Android. (If the app still isn't there click Add > Set App type to Manage Google Play app. Click Select. Search and click on the app ","depth":0,"inlineStyleRanges":[],"data":{},"type":"unstyled","key":"dv4er","entityRanges":[]},{"depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic","entityRanges":[{"key":4,"offset":0,"length":1}],"data":{},"key":"e0uo6"},{"key":"5f67q","depth":0,"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":13,"offset":9},{"style":"BOLD","offset":106,"length":8},{"offset":122,"length":13,"style":"BOLD"}],"data":{},"type":"unstyled","text":"5. Click Add all users (or click Add group and add the group you want to deploy the app to) located under Required. Click Review + save."},{"type":"atomic","data":{},"entityRanges":[{"key":5,"offset":0,"length":1}],"inlineStyleRanges":[],"depth":0,"text":" ","key":"e81nj"},{"key":"cr98s","inlineStyleRanges":[{"length":4,"offset":9,"style":"BOLD"}],"data":{},"entityRanges":[],"depth":0,"text":"6. Click Save.","type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"key":"f8dis","text":"Now when the users' Android decheck-ineck in they'll receive the new app.","data":{},"type":"unstyled"},{"type":"header-two","key":"57chd","entityRanges":[],"text":"Understanding assignments","inlineStyleRanges":[],"data":{},"depth":0},{"type":"unstyled","depth":0,"entityRanges":[],"key":"cna0j","text":"Did you notice you could add your groups to three different sections under Assignments: Required, Available for enrolled devices, and Available with or without enrollment. Let's discuss those three sections","data":{},"inlineStyleRanges":[{"style":"BOLD","length":8,"offset":88},{"length":30,"offset":98,"style":"BOLD"},{"style":"BOLD","length":36,"offset":134}]},{"data":{},"text":"Required","key":"5n6o6","inlineStyleRanges":[],"entityRanges":[],"type":"header-three","depth":0},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"Required will automatically download the app to the users' devices. They won't need to download, install, or do anything. The app will automatically be downloaded and installed on the users' devices.","type":"unstyled","key":"2clvh","data":{}},{"text":"Available for enrolled devices","type":"header-three","key":"ba4in","inlineStyleRanges":[],"data":{},"depth":0,"entityRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"type":"unstyled","data":{},"text":"Available for enrolled devices will make the app available in the managed play store. In short, a user can go and download/install the app onto their device but it won't happen automatically.","key":"d4mrp"},{"entityRanges":[],"inlineStyleRanges":[],"type":"header-three","text":"Available with or without enrollment","depth":0,"key":"6io8s","data":{}},{"depth":0,"key":"7c8h8","inlineStyleRanges":[],"text":"Available with or without enrollment will make the app available even if the user doesn't complete the enrollment process. In short, a user can install the Intune app on their device, sign in with their credentials and then not complete the enrollment process but the app would still be available to the user.","data":{},"entityRanges":[],"type":"unstyled"},{"depth":0,"text":"Configuring apps with the App configuration policies","inlineStyleRanges":[],"entityRanges":[],"type":"header-two","data":{},"key":"39epg"},{"inlineStyleRanges":[],"depth":0,"key":"fjl4b","entityRanges":[],"data":{},"text":"Some apps can even be configured through Intune. For example, in the last section, we installed Outlook on every user's device. Now that the app is installed the user would need to set up their mailbox in Outlook manually or we can create an app configuration policy to configure the app for us.","type":"unstyled"},{"depth":0,"key":"2u4","type":"unstyled","text":"1. Go to Microsoft Endpoint Manager admin center > Apps > App configuration policy > Add > Managed devices.","data":{},"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":39},{"length":5,"style":"BOLD","offset":51},{"length":24,"offset":58,"style":"BOLD"},{"length":4,"offset":85,"style":"BOLD"},{"length":15,"style":"BOLD","offset":91}]},{"depth":0,"inlineStyleRanges":[],"key":"dlta2","data":{},"text":" ","type":"atomic","entityRanges":[{"length":1,"key":6,"offset":0}]},{"text":"2. Set the name to Setup Outlook. Set Platform to Android Enterprise. Profile Type: All Profile Types. Click Select app. Click Microsoft Outlook. Click OK > Next.","type":"unstyled","entityRanges":[],"depth":0,"data":{},"key":"ctsmh","inlineStyleRanges":[{"style":"BOLD","offset":11,"length":5},{"length":13,"offset":19,"style":"BOLD"},{"length":9,"style":"BOLD","offset":38},{"offset":50,"style":"BOLD","length":18},{"offset":70,"style":"BOLD","length":12},{"style":"BOLD","length":17,"offset":84},{"length":10,"style":"BOLD","offset":109},{"length":17,"style":"BOLD","offset":127},{"style":"BOLD","length":3,"offset":152},{"style":"BOLD","length":4,"offset":157}]},{"inlineStyleRanges":[],"text":" ","key":"43kdr","type":"atomic","entityRanges":[{"key":7,"length":1,"offset":0}],"data":{},"depth":0},{"text":"3. Set the following options then click next.","key":"4ctvi","entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[{"offset":40,"style":"BOLD","length":4}],"data":{}},{"text":"Configuration settings format: Use configuration designer","type":"unstyled","depth":0,"key":"bnt4r","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":31,"length":26}],"data":{}},{"key":"84lgj","depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[{"style":"BOLD","length":3,"offset":34}],"text":"Configure email account settings: Yes","entityRanges":[]},{"key":"6i6a2","inlineStyleRanges":[{"length":21,"style":"BOLD","offset":21}],"entityRanges":[],"depth":0,"text":"Authentication type: Modern authentication","type":"unstyled","data":{}},{"inlineStyleRanges":[{"style":"BOLD","offset":29,"length":19}],"text":"Username attribute from AAD: User Principal Name","depth":0,"entityRanges":[],"key":"1e6fd","data":{},"type":"unstyled"},{"key":"c0csv","type":"unstyled","data":{},"text":"Email address attribute from AAD: Primary SMTP Address","depth":0,"entityRanges":[],"inlineStyleRanges":[{"length":20,"style":"BOLD","offset":34}]},{"depth":0,"data":{},"key":"7dauq","inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"offset":0,"key":8}],"type":"atomic"},{"depth":0,"type":"unstyled","text":"4. Click Add all users or select the same group you set in the How to deploy an app to an Android device section. Click Next.","entityRanges":[],"key":"ccv51","data":{},"inlineStyleRanges":[{"length":13,"style":"BOLD","offset":9},{"offset":120,"style":"BOLD","length":4}]},{"text":"5. Click Create.","type":"unstyled","inlineStyleRanges":[{"offset":9,"length":6,"style":"BOLD"}],"key":"174cg","entityRanges":[],"data":{},"depth":0},{"type":"unstyled","depth":0,"data":{},"text":"Now when an Android device syncs with Intune the user will automatically receive the Outlook app and the app will be configured for them.","inlineStyleRanges":[],"key":"at59q","entityRanges":[]},{"depth":0,"data":{},"entityRanges":[],"key":"d0eip","inlineStyleRanges":[],"text":"How to protect apps and isolate data","type":"header-two"},{"type":"unstyled","data":{},"entityRanges":[],"key":"9spgb","depth":0,"text":"Now that we have Outlook installed and configured on your user devices how do we isolate and protect the company data stored in Outlook that's cached and accessible on the user device? With app protection policies of course!","inlineStyleRanges":[]},{"entityRanges":[],"key":"4bjl3","data":{},"inlineStyleRanges":[{"length":39,"offset":9,"style":"BOLD"},{"style":"BOLD","offset":51,"length":5},{"style":"BOLD","offset":58,"length":21},{"length":13,"offset":82,"style":"BOLD"},{"style":"BOLD","length":7,"offset":98}],"text":"1. Go to Microsoft Endpoint Manager admin center > Apps > App protection policy > Create policy > Android.","depth":0,"type":"unstyled"},{"entityRanges":[{"length":1,"offset":0,"key":9}],"key":"97n1t","depth":0,"text":" ","type":"atomic","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"type":"unstyled","depth":0,"key":"6p7ka","inlineStyleRanges":[{"style":"BOLD","length":22,"offset":21},{"style":"BOLD","length":4,"offset":52}],"data":{},"text":"2. Name the policy: \"Protect Microsoft Apps\". Click Next."},{"type":"unstyled","entityRanges":[],"data":{},"text":"3. Set the Target policy to dropdown to All Microsoft Apps. Click Next.","inlineStyleRanges":[{"style":"BOLD","length":17,"offset":11},{"style":"BOLD","length":18,"offset":40},{"style":"BOLD","offset":66,"length":4}],"depth":0,"key":"fe8ji"},{"depth":0,"data":{},"entityRanges":[{"length":1,"key":10,"offset":0}],"key":"59ukp","type":"atomic","text":" ","inlineStyleRanges":[]},{"key":"fqcgm","entityRanges":[],"inlineStyleRanges":[{"offset":40,"style":"BOLD","length":4}],"text":"4. Set the following options then click Next.","data":{},"depth":0,"type":"unstyled"},{"entityRanges":[],"key":"619r7","inlineStyleRanges":[{"length":5,"style":"BOLD","offset":44}],"depth":0,"data":{},"text":"Backup org data to Android backup services: Block","type":"unstyled"},{"entityRanges":[],"text":"Send org data to other apps: Policy managed apps","inlineStyleRanges":[{"offset":29,"style":"BOLD","length":19}],"data":{},"key":"bluoa","depth":0,"type":"unstyled"},{"depth":0,"data":{},"key":"e4c7g","text":"Click Select (next to select apps to exempt).","entityRanges":[],"inlineStyleRanges":[{"length":7,"style":"BOLD","offset":6}],"type":"unstyled"},{"key":"aglbb","data":{},"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":5,"offset":6}],"entityRanges":[],"text":"Name: Webex","type":"unstyled"},{"inlineStyleRanges":[{"style":"BOLD","offset":7,"length":24}],"depth":0,"data":{},"text":"Value: com.cisco.webex.meetings","key":"dqqen","type":"unstyled","entityRanges":[]},{"key":"1d5g4","depth":0,"data":{},"entityRanges":[{"key":11,"offset":0,"length":1}],"type":"atomic","inlineStyleRanges":[],"text":" "},{"entityRanges":[],"text":"5. On the Access requirements page click Next.","type":"unstyled","key":"dhflp","depth":0,"data":{},"inlineStyleRanges":[{"length":4,"offset":41,"style":"BOLD"}]},{"entityRanges":[],"data":{},"key":"7pdv1","type":"unstyled","inlineStyleRanges":[{"offset":40,"style":"BOLD","length":4}],"text":"6. On the Conditional launch page click Next.","depth":0},{"text":"7. On the Assignments page select your group. (you can't select all users on app protection policies. You can, however, create a dynamic group with all users). Click Next > Create.","type":"unstyled","inlineStyleRanges":[{"offset":166,"length":5,"style":"BOLD"},{"offset":173,"length":6,"style":"BOLD"}],"depth":0,"data":{},"key":"1cj5r","entityRanges":[]},{"inlineStyleRanges":[{"length":89,"style":"ITALIC","offset":0}],"data":{},"text":"NOTE: You can't apply app protection policies to devices. They must be assigned to users.","depth":0,"type":"unstyled","entityRanges":[],"key":"992pk"},{"key":"1ok1u","inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"data":{},"text":"Now your users won't be able to send data to any app that isn't managed by the policy or Webex. The users will also be required to enter a pin to access their Microsoft apps.","depth":0},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","text":"One final note, App protection policies that apply to Microsoft 365 apps, for example, Power BI, will protect apps even if the user is on an unmanaged device.","key":"ahcf7","data":{},"entityRanges":[]},{"data":{},"key":"fvnbh","type":"header-two","text":"Limit access to unmanaged devices","inlineStyleRanges":[],"depth":0,"entityRanges":[]},{"key":"f49bc","data":{},"inlineStyleRanges":[],"text":"Now, let's say not everyone in your organization will receive Intune. But you don't want those devices doing everything in Exchange Online. Maybe you want them to read email on these devices but you don't want them to download attachments or enable offline mode. Let's set that up.","entityRanges":[],"depth":0,"type":"unstyled"},{"data":{},"key":"ch0oh","entityRanges":[],"inlineStyleRanges":[],"depth":0,"type":"unstyled","text":"1. create a conditional access policy with the following settings:"},{"inlineStyleRanges":[{"length":4,"offset":0,"style":"BOLD"}],"text":"Name: Unmanaged Devices","type":"unstyled","depth":0,"entityRanges":[],"data":{},"key":"d8sg6"},{"text":"Users or workload identities: Set to the group that will use unmanaged devices.","key":"emoth","entityRanges":[],"inlineStyleRanges":[{"offset":0,"length":28,"style":"BOLD"}],"depth":0,"data":{},"type":"unstyled"},{"text":"Cloud apps: Office 365 Exchange Online","entityRanges":[],"inlineStyleRanges":[{"offset":0,"length":10,"style":"BOLD"}],"key":"966pu","data":{},"type":"unstyled","depth":0},{"key":"758tq","text":"Session: Use app-enforced restrictions","entityRanges":[],"data":{},"inlineStyleRanges":[{"length":7,"style":"BOLD","offset":0}],"type":"unstyled","depth":0},{"depth":0,"text":" ","key":"7rd31","inlineStyleRanges":[],"type":"atomic","data":{},"entityRanges":[{"key":12,"length":1,"offset":0}]},{"data":{},"text":"2. Run the following in PowerShell:","type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"depth":0,"key":"oa96"},{"data":{},"inlineStyleRanges":[],"depth":0,"entityRanges":[],"type":"code","key":"8nr43","text":"Connect-ExchangeOnline\nNew-OwaMailboxPolicy LimitUnmanagedDevices\nSet-OwaMailboxPolicy LimitUnmanagedDevices -ConditionalAccessPolicy ReadOnly"},{"entityRanges":[],"key":"627ot","depth":0,"data":{},"inlineStyleRanges":[],"type":"unstyled","text":"3. Set the OWA mailbox policy on the mailboxes."},{"data":{},"depth":0,"key":"f554n","text":"Go to Exchange admin center > Classic Exchange admin center  > recipients > mailboxes. Select the mailbox > mailbox features > View details (under Outlook on the web). Click browse > select LimitUnmanagedDevices > OK > Save.","entityRanges":[{"key":13,"length":29,"offset":30}],"inlineStyleRanges":[{"style":"BOLD","offset":6,"length":21},{"length":29,"offset":30,"style":"BOLD"},{"length":11,"style":"BOLD","offset":63},{"length":9,"style":"BOLD","offset":76},{"style":"BOLD","offset":98,"length":8},{"length":16,"style":"BOLD","offset":108},{"style":"BOLD","length":12,"offset":127},{"style":"BOLD","length":7,"offset":174},{"style":"BOLD","length":22,"offset":190},{"offset":214,"length":3,"style":"BOLD"},{"length":4,"style":"BOLD","offset":219}],"type":"unstyled"},{"entityRanges":[{"offset":0,"key":14,"length":1}],"text":" ","type":"atomic","depth":0,"key":"37fr8","data":{},"inlineStyleRanges":[]},{"text":"Windows information protection","depth":0,"entityRanges":[],"key":"5a5pq","type":"header-two","inlineStyleRanges":[],"data":{}},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"text":"Windows Information Protection (WIP), formally known as enterprise data protection (EDP), helps to protect against potential data leakage without interfering with the employee's work. In short, it prevents data from leaving apps protected by an app protection policy on Windows 10 devices. It works just like the App protection policy for Android we created above. It will prevent data from leaving the protected app. There are 4 settings:","data":{},"key":"75jqb"},{"text":"Block: Will completely block data from leaving the protected apps","key":"c03df","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":5,"offset":0}],"type":"unordered-list-item"},{"depth":0,"key":"a8ap8","inlineStyleRanges":[{"length":15,"offset":0,"style":"BOLD"}],"data":{},"type":"unordered-list-item","text":"Allow Overrides: The user will receive a prompt will moving data from a protected to a non-protected app. If the user chooses to move the data regardless of the prompt the action will be logged.","entityRanges":[]},{"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":6}],"type":"unordered-list-item","text":"Silent: The user will be allowed to move data from the protected apps but it will be logged.","depth":0,"data":{},"entityRanges":[],"key":"6bje6"},{"entityRanges":[],"depth":0,"text":"Off: The user will be allowed to move data from the protected apps and the action will not be logged.","key":"fauqq","type":"unordered-list-item","data":{},"inlineStyleRanges":[{"length":3,"offset":0,"style":"BOLD"},{"style":"color-rgb(33,37,41)","length":96,"offset":5},{"length":96,"offset":5,"style":"bgcolor-rgb(255,255,255)"},{"length":96,"style":"fontsize-16","offset":5},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":96,"offset":5}]},{"text":"Just like app protection policies in Android in Windows you need to select which apps are protected. You can also exempt apps. For example, you can create a policy to protect Microsoft Teams, then you can exclude Office ProPlus. With this configuration, users won't be able to remove data from Microsoft Teams except to the Office suite.","depth":0,"data":{},"type":"unstyled","key":"c8dnf","entityRanges":[],"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":337,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":337,"offset":0},{"style":"fontsize-16","length":337,"offset":0},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":337}]}],"entityMap":{"0":{"data":{"targetOption":"_blank","url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/AppsAndroidMenu/androidApps"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"height":"auto","width":"auto","src":"https://i.ibb.co/PCVRKDf/Add-an-Android-app-to-Intune.png","alignment":"none","alt":"Add an Android app to Intune"},"mutability":"MUTABLE","type":"IMAGE"},"2":{"data":{"alt":"Select outlook in the app selection","alignment":"none","src":"https://i.ibb.co/56RM4mY/select-outlook-in-the-app-selection.png","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"3":{"type":"IMAGE","data":{"alignment":"none","alt":"Approve the app","height":"auto","width":"auto","src":"https://i.ibb.co/VvzLtY2/approve-the-app.png"},"mutability":"MUTABLE"},"4":{"mutability":"MUTABLE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/Q69pRsR/Assign-the-app.png","alignment":"none","alt":"Assign the app"},"type":"IMAGE"},"5":{"type":"IMAGE","data":{"src":"https://i.ibb.co/Ny4rpWg/Assign-to-all-users.png","width":"auto","alignment":"none","height":"auto","alt":"Assign to all users"},"mutability":"MUTABLE"},"6":{"data":{"width":"auto","height":"auto","alt":"Create an app configuration policy","alignment":"none","src":"https://i.ibb.co/98k1njW/Create-an-app-configuration-policy.png"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"mutability":"MUTABLE","data":{"alignment":"none","alt":"Set up App Configuration policy Basics","src":"https://i.ibb.co/WPv7R5g/Set-up-App-Configuration-policy-Basics.png","width":"auto","height":"auto"},"type":"IMAGE"},"8":{"data":{"alignment":"none","alt":"Create app configuration policy - Settings","src":"https://i.ibb.co/BsXT1tZ/Create-app-configuration-policy-Settings.png","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"9":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/7nmGbsm/create-an-app-protection-policy.png","alignment":"none","height":"auto","width":"auto","alt":"Create an app protection policy"},"type":"IMAGE"},"10":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alignment":"none","height":"auto","src":"https://i.ibb.co/qFPWBbn/Create-App-protection-policy-Apps.png","alt":"Create App protection policy - Apps"}},"11":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","height":"auto","alignment":"none","alt":"App protection policy - Data protection","src":"https://i.ibb.co/cy9zXyZ/App-protection-policy-Data-protection.png"}},"12":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"Conditional access policy","src":"https://i.ibb.co/b6KtMZt/conditional-access-policy.png","height":"auto","width":"auto"}},"13":{"type":"LINK","data":{"targetOption":"_blank","url":"https://outlook.office365.com/ecp/?form=eac&mkt=en-US"},"mutability":"MUTABLE"},"14":{"mutability":"MUTABLE","type":"IMAGE","data":{"src":"https://i.ibb.co/7GtPn4V/set-owa-mailbox-policy.png","height":"auto","alt":"Set OWA Mailbox policy","width":"auto","alignment":"none"}}}},"id":"62t_7oiZx","type":"article","slug":"Restricting-and-managing-apps-on-user-devices-62t_7oiZx","publish":true,"datePublished":"2022/6/22"},
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
