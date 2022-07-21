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
      path: '/course/ms-500/learn/The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk',
      article: {"datePublished":"2022/5/26","featuredImage":"https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png","images":["https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png","https://i.ibb.co/RjswM6n/per-user-mfa.png","https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png","https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png","https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png","https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png","https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png","https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png","https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png","https://i.ibb.co/gRrD5Pb/MFA-Enabled.png","https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png","https://i.ibb.co/gT5QZKt/scan-qr-code.png","https://i.ibb.co/VjsxsJ4/notification-approved.png","https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png","https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png","https://i.ibb.co/wQ44kFB/SMS-verified.png","https://i.ibb.co/TbQvJDf/Click-done.png","https://i.ibb.co/MsS22gP/install-the-authenticator-app.png","https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png","https://i.ibb.co/YhvggFT/approve-sign-in.png","https://i.ibb.co/HTFhBzB/MFA-Status.png","https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png"],"title":"The many ways to implement multi-factor authentication (MFA) in Microsoft 365","publish":true,"sectionId":"AFV_acckJ","description":"There are 5 different ways to enable MFA in Microsoft 365. Learn which way is the best way in this guide.","slug":"The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk","article":{"entityMap":{"0":{"data":{"targetOption":"_blank","src":"https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Properties","alt":"Microsoft 365 security defaults","alignment":"left","height":"auto","width":"auto"},"type":"LINK","mutability":"MUTABLE"},"1":{"data":{"url":"https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx","alt":"Microsoft 365 security defaults","height":"auto","targetOption":"_blank","src":"https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png","width":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"2":{"data":{"targetOption":"_blank","url":"https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx"},"type":"LINK","mutability":"MUTABLE"},"3":{"data":{"alt":"Microsoft 365 Per-User MFA","height":"auto","width":"auto","src":"https://i.ibb.co/RjswM6n/per-user-mfa.png","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"4":{"type":"IMAGE","data":{"src":"https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png","width":"auto","alignment":"none","height":"auto","alt":"Enable per-user MFA"},"mutability":"MUTABLE"},"5":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","alt":"Enable multi-factor auth","alignment":"none","width":"auto","src":"https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png"}},"6":{"mutability":"MUTABLE","data":{"width":"auto","alignment":"none","alt":"MFA Status in Microsoft 365","src":"https://i.ibb.co/HTFhBzB/MFA-Status.png","height":"auto"},"type":"IMAGE"},"7":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","width":"auto","height":"auto","alt":"Per-User MFA Settings","src":"https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png"}},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","alignment":"none","alt":"Create a conditional access policy","src":"https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png"}},"9":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","alt":"Name the conditional access Policy Require MFA","alignment":"none","src":"https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png"}},"10":{"type":"IMAGE","data":{"src":"https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png","alignment":"none","width":"auto","alt":"Set Conditional access policy to all users","height":"auto"},"mutability":"MUTABLE"},"11":{"data":{"alignment":"none","alt":"Conditional access policy all cloud apps","src":"https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"12":{"data":{"src":"https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png","height":"auto","width":"auto","alignment":"none","alt":"Conditional access policy requiring MFA"},"type":"IMAGE","mutability":"MUTABLE"},"13":{"data":{"alignment":"none","src":"https://i.ibb.co/gRrD5Pb/MFA-Enabled.png","width":"auto","height":"auto","alt":"MFA Enabled More information required"},"type":"IMAGE","mutability":"MUTABLE"},"14":{"mutability":"MUTABLE","data":{"width":"auto","alignment":"none","src":"https://i.ibb.co/MsS22gP/install-the-authenticator-app.png","alt":"Install the authentication app","height":"auto"},"type":"IMAGE"},"15":{"mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png","width":"auto","alt":"Setup the authenticator app","height":"auto"},"type":"IMAGE"},"16":{"data":{"height":"auto","alignment":"none","src":"https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png","alt":"Keep you account secure page","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"17":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/gT5QZKt/scan-qr-code.png","height":"auto","alignment":"none","alt":"Scan the QR code with your phone"}},"18":{"data":{"alignment":"none","height":"auto","alt":"Approve the sign in","src":"https://i.ibb.co/YhvggFT/approve-sign-in.png","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"19":{"data":{"height":"auto","src":"https://i.ibb.co/VjsxsJ4/notification-approved.png","alt":"Notification approved","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"20":{"data":{"height":"auto","alignment":"none","width":"auto","alt":"Enter phone number to receive text message","src":"https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png"},"mutability":"MUTABLE","type":"IMAGE"},"21":{"mutability":"MUTABLE","data":{"alt":"Enter the code you received in the text message","width":"auto","src":"https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png","height":"auto","alignment":"none"},"type":"IMAGE"},"22":{"data":{"height":"auto","alt":"SMS verified","src":"https://i.ibb.co/wQ44kFB/SMS-verified.png","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"23":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"Click done","height":"auto","src":"https://i.ibb.co/TbQvJDf/Click-done.png","width":"auto"}}},"blocks":[{"data":{},"depth":0,"text":"There are five, count it five, separate ways to configure multifactor authentication in Microsoft 365. In this article, we will go over three of them because one of them is no longer supported and one of them uses third-party tools that are out of scope for the MS-500.","type":"unstyled","inlineStyleRanges":[],"key":"6g2e4","entityRanges":[]},{"inlineStyleRanges":[],"data":{},"depth":0,"type":"header-two","text":"Security Defaults","entityRanges":[],"key":"6ju97"},{"data":{},"key":"b8rd","entityRanges":[],"text":"Security defaults are the latest way to enable MFA in Microsoft 365. Security defaults enable MFA across your entire tenant. That includes all of your users. There is no way to limit MFA to a select user or group with security defaults. If you created your tenant after October 22nd, 2019 security defaults are probably already enabled on your tenant. ","inlineStyleRanges":[],"depth":0,"type":"unstyled"},{"depth":0,"type":"unstyled","entityRanges":[],"text":"By enabling security defaults in your Microsoft 365 tenant you're not only requiring MFA but you're also blocking legacy authentication, for example, IMAP, POP3, and basic auth.","key":"d3jp9","data":{},"inlineStyleRanges":[]},{"key":"dm3ui","entityRanges":[],"data":{},"text":"Security Defaults are available for all Microsoft 365 tenants regardless of your licensing.","depth":0,"inlineStyleRanges":[],"type":"unstyled"},{"key":"3b06s","entityRanges":[],"type":"header-three","inlineStyleRanges":[],"data":{},"depth":0,"text":"How to enable/disable security defaults"},{"entityRanges":[{"offset":72,"key":0,"length":10}],"text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Properties > Manage Security Defaults. Click Yes to enable the policy. Click No to disable the policy. Click Save.","key":"bcnkf","depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[{"offset":47,"style":"BOLD","length":22},{"offset":72,"length":11,"style":"BOLD"},{"length":24,"offset":85,"style":"BOLD"},{"length":4,"style":"BOLD","offset":117},{"style":"BOLD","length":3,"offset":149},{"offset":181,"length":4,"style":"BOLD"}]},{"type":"atomic","text":" ","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":1,"offset":0}],"key":"1qv2a"},{"key":"efs5j","text":"Per-user MFA","data":{},"depth":0,"entityRanges":[],"type":"header-two","inlineStyleRanges":[]},{"data":{},"key":"1kh0t","depth":0,"inlineStyleRanges":[],"text":"Per-user MFA gives more control over who is required to use multifactor authentication, but it requires you to enable MFA for every user individually. That means every time you create a new user in Microsoft 365 you need to enable MFA for that user. But it also means you can roll out MFA to a set of users.","type":"unstyled","entityRanges":[]},{"depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[],"text":"Per-user MFA is available for all Microsoft 365 tenants regardless of your licensing.","type":"unstyled","key":"2oqlb"},{"key":"299as","type":"header-three","depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[],"text":"How to enable per-user MFA"},{"depth":0,"key":"cvfj5","entityRanges":[{"offset":53,"key":2,"length":27}],"type":"unstyled","text":"1. Go to Microsoft 365 admin center > Active users > Multi-factor authentication.","data":{},"inlineStyleRanges":[{"offset":38,"style":"BOLD","length":12},{"style":"BOLD","offset":53,"length":27}]},{"depth":0,"key":"43ool","text":" ","type":"atomic","inlineStyleRanges":[],"data":{},"entityRanges":[{"key":3,"length":1,"offset":0}]},{"type":"unstyled","text":"2. Click the check box next to a user you want to enable MFA for. Click Enable.","data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[{"offset":72,"style":"BOLD","length":6}],"key":"1244s"},{"inlineStyleRanges":[],"entityRanges":[{"key":4,"length":1,"offset":0}],"data":{},"type":"atomic","text":" ","key":"9h50r","depth":0},{"inlineStyleRanges":[{"offset":9,"length":24,"style":"BOLD"}],"key":"8o4ta","entityRanges":[],"type":"unstyled","text":"3. Click enable multi-factor auth.","depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[],"text":" ","entityRanges":[{"key":5,"length":1,"offset":0}],"key":"b9mbs","data":{},"type":"atomic"},{"type":"header-three","key":"8cseb","data":{},"text":"Understanding MFA Status","entityRanges":[],"inlineStyleRanges":[],"depth":0},{"key":"9j7ar","text":" ","type":"atomic","depth":0,"data":{},"entityRanges":[{"length":1,"key":6,"offset":0}],"inlineStyleRanges":[]},{"type":"unstyled","text":"With per-user MFA you'll notice there are three different statuses. Disabled means the user isn't required to use per-user MFA. Next, enabled means the user is required to set up their MFA at the next login. Enforced means the user has set up the MFA.","key":"1kikr","entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","length":8,"offset":68},{"offset":134,"length":8,"style":"BOLD"},{"style":"BOLD","length":9,"offset":208}],"depth":0},{"text":"How to configure the settings in per-user MFA","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"header-three","key":"2q4g8"},{"key":"crpdo","inlineStyleRanges":[],"text":" ","type":"atomic","entityRanges":[{"key":7,"length":1,"offset":0}],"depth":0,"data":{}},{"depth":0,"data":{},"inlineStyleRanges":[],"text":"One last thing. You can configure some options in the per-user MFA. By going to service settings you'll notice a whole list of options.","type":"unstyled","entityRanges":[],"key":"3ujt1"},{"key":"ela4a","text":"App passwords are a great way to allow legacy apps to continue to connect to Microsoft 365. In short, app passwords will replace the users' passwords so they can still log in to Microsoft 365 using an app that doesn't support Microsoft 365 MFA.","entityRanges":[],"inlineStyleRanges":[{"length":14,"style":"BOLD","offset":0}],"type":"unordered-list-item","depth":0,"data":{}},{"type":"unordered-list-item","depth":0,"key":"22g8s","inlineStyleRanges":[{"length":12,"offset":0,"style":"BOLD"}],"entityRanges":[],"text":"Trusted IPs are a simple way to bypass MFA when the users are coming from a certain IP address.","data":{}},{"depth":0,"key":"5l92","entityRanges":[],"text":"Verification options are the options that a user can set up MFA. For example, if you don't want users to be able to receive text messages simply uncheck Text message to phone.","inlineStyleRanges":[{"style":"BOLD","offset":0,"length":20},{"style":"BOLD","length":21,"offset":153}],"data":{},"type":"unordered-list-item"},{"inlineStyleRanges":[{"length":23,"style":"BOLD","offset":0}],"entityRanges":[],"data":{},"key":"2dotp","depth":0,"text":"Allow users to remember will allow the users to not be prompted every time they need to re-authenticate from a device.","type":"unordered-list-item"},{"data":{},"text":"Conditional access policy","inlineStyleRanges":[],"depth":0,"key":"8mghh","type":"header-two","entityRanges":[]},{"text":"The last built-in choice is via conditional access policies. Conditional access policies provide the best security defaults as well as the best per-user MFA. With conditional access policies, you can deploy MFA to a user or a group of users, so you don't have to require MFA for all users as you do with security defaults. Also, you can configure conditional access policies to include all users or all administrators, so you don't need to remember to enable MFA for every new user as you need to do with per-user MFA.","entityRanges":[],"data":{},"depth":0,"inlineStyleRanges":[],"type":"unstyled","key":"aj3p7"},{"text":"The one downside of conditional access policies is licensing. Conditional access policies are only available for azure SD premium P1 licensed users. Conditional access policies are also available to Microsoft 365 business premium users.","entityRanges":[],"key":"am59g","inlineStyleRanges":[],"data":{},"depth":0,"type":"unstyled"},{"entityRanges":[],"data":{},"key":"fb9eh","inlineStyleRanges":[],"type":"header-three","text":"How to enable MFA using conditional access policies","depth":0},{"entityRanges":[],"data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[{"offset":51,"style":"BOLD","length":12},{"style":"BOLD","offset":66,"length":27},{"style":"BOLD","length":10,"offset":96},{"style":"BOLD","offset":109,"length":17}],"key":"crsit","text":"1. log in to Azure Active Directory admin center > All services > Azure AD Conditional Access > New Policy > Create new policy."},{"entityRanges":[{"length":1,"offset":0,"key":8}],"type":"atomic","inlineStyleRanges":[],"depth":0,"data":{},"key":"ar1vp","text":" "},{"inlineStyleRanges":[{"style":"BOLD","length":11,"offset":20}],"entityRanges":[],"text":"2. Enter a name of “Require MFA”","data":{},"depth":0,"key":"8mpbh","type":"unstyled"},{"entityRanges":[{"key":9,"offset":0,"length":1}],"inlineStyleRanges":[],"text":" ","key":"fveqj","data":{},"depth":0,"type":"atomic"},{"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":39},{"length":9,"offset":56,"style":"BOLD"}],"type":"unstyled","data":{},"text":"3. Click 0 users or workload identities selected. Click All users.","depth":0,"key":"713o9"},{"type":"atomic","inlineStyleRanges":[],"depth":0,"entityRanges":[{"length":1,"offset":0,"key":10}],"key":"a55eo","data":{},"text":" "},{"key":"1c2a","type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","length":59,"offset":9},{"length":14,"offset":76,"style":"BOLD"}],"text":"4. Click No cloud apps, actions, or authentication contexts selected. Click All cloud apps.","depth":0},{"data":{},"depth":0,"text":" ","inlineStyleRanges":[],"entityRanges":[{"key":11,"length":1,"offset":0}],"key":"esojv","type":"atomic"},{"text":"5. Click 0 controls selected (under Grant). Click Require multi-factor authentication. Click Select. Click On (under Enable policy). Click Create.","depth":0,"type":"unstyled","inlineStyleRanges":[{"length":19,"offset":9,"style":"BOLD"},{"offset":50,"length":35,"style":"BOLD"},{"style":"BOLD","length":6,"offset":93},{"offset":107,"style":"BOLD","length":2},{"length":6,"offset":139,"style":"BOLD"}],"data":{},"entityRanges":[],"key":"62fgh"},{"text":" ","key":"1qkma","entityRanges":[{"key":12,"length":1,"offset":0}],"data":{},"inlineStyleRanges":[],"depth":0,"type":"atomic"},{"data":{},"depth":0,"text":"MFA Server","type":"header-two","inlineStyleRanges":[],"entityRanges":[],"key":"7p222"},{"key":"8u70p","inlineStyleRanges":[],"data":{},"type":"unstyled","entityRanges":[],"text":"Another possibility to deploy multifactor authentication in Microsoft 365 is to deploy an MFA server. MFA server would be an application that's installed on any Windows 2008 R two or later server that's joined to your domain. In short, you would download the MFA server installation files from Microsoft and install the software on your server. Then with a quick configuration, you can deploy your MFA server. As of July 1st, 2019 Microsoft, no longer offers an MFA server for new deployments. So, we won't be covering the installation or configuration in this guide.","depth":0},{"type":"header-two","text":"Third-party options","key":"50guu","inlineStyleRanges":[],"depth":0,"data":{},"entityRanges":[]},{"data":{},"key":"954c2","depth":0,"text":"Microsoft has also configured Microsoft 365 so third-party vendors can offer multifactor authentication options. Several vendors sell software or cloud-only options that can tie into Microsoft 365 and provide you with multifactor authentication. Some of those vendors are one login and duo. They won't be covering the deployment of these options in this guide because they are not covered in the MS-500.","inlineStyleRanges":[],"entityRanges":[],"type":"unstyled"},{"depth":0,"data":{},"entityRanges":[],"inlineStyleRanges":[],"text":"User experience","key":"187ec","type":"header-two"},{"inlineStyleRanges":[],"key":"89t8j","text":"Once MFA is enabled for a user the user will see the following prompts (either in the browser or in Outlook).","type":"unstyled","depth":0,"data":{},"entityRanges":[]},{"depth":0,"inlineStyleRanges":[{"offset":49,"style":"BOLD","length":4}],"type":"unstyled","text":"1. On the More information required prompt click Next.","data":{},"entityRanges":[],"key":"eljbq"},{"text":" ","type":"atomic","depth":0,"entityRanges":[{"offset":0,"length":1,"key":13}],"data":{},"inlineStyleRanges":[],"key":"5rhr2"},{"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"4r4i6","text":"2. On Keep your account secure / start by getting the app page download Microsoft Authenticator to your mobile phone and open the app.","data":{},"entityRanges":[]},{"entityRanges":[{"key":14,"length":1,"offset":0}],"data":{},"depth":0,"inlineStyleRanges":[],"type":"atomic","text":" ","key":"emuso"},{"inlineStyleRanges":[{"style":"BOLD","offset":25,"length":8},{"style":"BOLD","length":14,"offset":35},{"style":"BOLD","length":19,"offset":52}],"text":"3. Once in the app click I agree > Scan a QR code > While using the app.","depth":0,"data":{},"key":"1lre1","type":"unstyled","entityRanges":[]},{"inlineStyleRanges":[],"text":" ","depth":0,"data":{},"key":"e3llq","type":"atomic","entityRanges":[{"key":15,"length":1,"offset":0}]},{"key":"89t62","inlineStyleRanges":[{"style":"BOLD","offset":46,"length":4}],"type":"unstyled","entityRanges":[],"text":"3. Then go back to the sign-in page and click Next.","depth":0,"data":{}},{"key":"52og6","depth":0,"data":{},"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":16}],"text":" "},{"type":"unstyled","depth":0,"data":{},"text":"3. On Scan the QR code page scan the QR code with the Microsoft authenticator app on your phone. Click Next.","inlineStyleRanges":[{"offset":103,"length":4,"style":"BOLD"}],"entityRanges":[],"key":"alog3"},{"key":"9c51g","depth":0,"entityRanges":[{"offset":0,"key":17,"length":1}],"text":" ","type":"atomic","inlineStyleRanges":[],"data":{}},{"text":"4. Approve the sign-in request on your phone.","inlineStyleRanges":[],"key":"1v56f","data":{},"entityRanges":[],"type":"unstyled","depth":0},{"inlineStyleRanges":[],"data":{},"key":"3i1pp","type":"atomic","entityRanges":[{"offset":0,"key":18,"length":1}],"depth":0,"text":" "},{"entityRanges":[],"depth":0,"text":"5. Once you see the Notification approved message click Next.","type":"unstyled","key":"7r5bf","inlineStyleRanges":[{"style":"BOLD","length":4,"offset":56}],"data":{}},{"data":{},"type":"atomic","inlineStyleRanges":[],"depth":0,"key":"aa6cs","entityRanges":[{"key":19,"offset":0,"length":1}],"text":" "},{"depth":0,"text":"6. on the Phone page, enter your cell phone number and click Next.","inlineStyleRanges":[{"length":4,"offset":61,"style":"BOLD"}],"key":"4vc6e","data":{},"entityRanges":[],"type":"unstyled"},{"entityRanges":[{"key":20,"offset":0,"length":1}],"text":" ","type":"atomic","depth":0,"data":{},"inlineStyleRanges":[],"key":"46bl0"},{"key":"i347","inlineStyleRanges":[{"style":"BOLD","length":4,"offset":61}],"data":{},"type":"unstyled","text":"7. Enter the code texted to you in the space provided. Click Next.","entityRanges":[],"depth":0},{"depth":0,"entityRanges":[{"offset":0,"length":1,"key":21}],"key":"d6no4","text":" ","data":{},"inlineStyleRanges":[],"type":"atomic"},{"key":"ahfi","inlineStyleRanges":[{"style":"BOLD","length":4,"offset":36}],"text":"8. Once you see SMS verified. Click Next.","type":"unstyled","entityRanges":[],"data":{},"depth":0},{"depth":0,"inlineStyleRanges":[],"text":" ","key":"9bgtr","data":{},"entityRanges":[{"key":22,"length":1,"offset":0}],"type":"atomic"},{"type":"unstyled","data":{},"depth":0,"text":"9. On the success page click Done.","entityRanges":[],"key":"1ladh","inlineStyleRanges":[{"length":4,"style":"BOLD","offset":29}]},{"inlineStyleRanges":[],"depth":0,"entityRanges":[{"key":23,"length":1,"offset":0}],"type":"atomic","key":"7tiun","data":{},"text":" "},{"depth":0,"entityRanges":[],"text":"","data":{},"inlineStyleRanges":[],"type":"unstyled","key":"8akr6"}]},"type":"article","id":"nAAIvNbtk"},
      nextContentSlug: 'Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr',
      previousContentSlug: 'Whats-a-conditional-access-policy-V1en9Iugh',
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
                <div><p>There are five, count it five, separate ways to configure multifactor authentication in Microsoft 365. In this article, we will go over three of them because one of them is no longer supported and one of them uses third-party tools that are out of scope for the MS-500.</p>
<h2>Security Defaults</h2>
<p>Security defaults are the latest way to enable MFA in Microsoft 365. Security defaults enable MFA across your entire tenant. That includes all of your users. There is no way to limit MFA to a select user or group with security defaults. If you created your tenant after October 22nd, 2019 security defaults are probably already enabled on your tenant.&nbsp;</p>
<p>By enabling security defaults in your Microsoft 365 tenant you're not only requiring MFA but you're also blocking legacy authentication, for example, IMAP, POP3, and basic auth.</p>
<p>Security Defaults are available for all Microsoft 365 tenants regardless of your licensing.</p>
<h3>How to enable/disable security defaults</h3>
<p>1. Go to Azure Active Directory admin center &gt; <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Properties" target="_blank"><strong>Properties</strong></a><strong> </strong>&gt; <strong>Manage Security Defaults</strong>. Click <strong>Yes </strong>to enable the policy. Click <strong>No </strong>to disable the policy. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png" alt="Microsoft 365 security defaults" style="height: auto;width: auto"/></div>
<h2>Per-user MFA</h2>
<p>Per-user MFA gives more control over who is required to use multifactor authentication, but it requires you to enable MFA for every user individually. That means every time you create a new user in Microsoft 365 you need to enable MFA for that user. But it also means you can roll out MFA to a set of users.</p>
<p>Per-user MFA is available for all Microsoft 365 tenants regardless of your licensing.</p>
<h3>How to enable per-user MFA</h3>
<p>1. Go to Microsoft 365 admin center &gt; <strong>Active users</strong> &gt; <a href="https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx" target="_blank"><strong>Multi-factor authentication</strong></a>.</p>
<div ><img src="https://i.ibb.co/RjswM6n/per-user-mfa.png" alt="Microsoft 365 Per-User MFA" style="height: auto;width: auto"/></div>
<p>2. Click the check box next to a user you want to enable MFA for. Click <strong>Enable</strong>.</p>
<div ><img src="https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png" alt="Enable per-user MFA" style="height: auto;width: auto"/></div>
<p>3. Click <strong>enable multi-factor auth</strong>.</p>
<div ><img src="https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png" alt="Enable multi-factor auth" style="height: auto;width: auto"/></div>
<h3>Understanding MFA Status</h3>
<div ><img src="https://i.ibb.co/HTFhBzB/MFA-Status.png" alt="MFA Status in Microsoft 365" style="height: auto;width: auto"/></div>
<p>With per-user MFA you'll notice there are three different statuses. <strong>Disabled</strong> means the user isn't required to use per-user MFA. Next, <strong>enabled </strong>means the user is required to set up their MFA at the next login. <strong>Enforced </strong>means the user has set up the MFA.</p>
<h3>How to configure the settings in per-user MFA</h3>
<div ><img src="https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png" alt="Per-User MFA Settings" style="height: auto;width: auto"/></div>
<p>One last thing. You can configure some options in the per-user MFA. By going to service settings you'll notice a whole list of options.</p>
<ul>
<li><strong>App passwords </strong>are a great way to allow legacy apps to continue to connect to Microsoft 365. In short, app passwords will replace the users' passwords so they can still log in to Microsoft 365 using an app that doesn't support Microsoft 365 MFA.</li>
<li><strong>Trusted IPs </strong>are a simple way to bypass MFA when the users are coming from a certain IP address.</li>
<li><strong>Verification options</strong> are the options that a user can set up MFA. For example, if you don't want users to be able to receive text messages simply uncheck <strong>Text message to phone</strong>.</li>
<li><strong>Allow users to remember</strong> will allow the users to not be prompted every time they need to re-authenticate from a device.</li>
</ul>
<h2>Conditional access policy</h2>
<p>The last built-in choice is via conditional access policies. Conditional access policies provide the best security defaults as well as the best per-user MFA. With conditional access policies, you can deploy MFA to a user or a group of users, so you don't have to require MFA for all users as you do with security defaults. Also, you can configure conditional access policies to include all users or all administrators, so you don't need to remember to enable MFA for every new user as you need to do with per-user MFA.</p>
<p>The one downside of conditional access policies is licensing. Conditional access policies are only available for azure SD premium P1 licensed users. Conditional access policies are also available to Microsoft 365 business premium users.</p>
<h3>How to enable MFA using conditional access policies</h3>
<p>1. log in to Azure Active Directory admin center &gt; <strong>All services</strong> &gt; <strong>Azure AD Conditional Access</strong> &gt; <strong>New Policy</strong> &gt; <strong>Create new policy</strong>.</p>
<div ><img src="https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png" alt="Create a conditional access policy" style="height: auto;width: auto"/></div>
<p>2. Enter a name of “<strong>Require MFA</strong>”</p>
<div ><img src="https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png" alt="Name the conditional access Policy Require MFA" style="height: auto;width: auto"/></div>
<p>3. Click <strong>0 users or workload identities selected</strong>. Click <strong>All users</strong>.</p>
<div ><img src="https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png" alt="Set Conditional access policy to all users" style="height: auto;width: auto"/></div>
<p>4. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>All cloud apps</strong>.</p>
<div ><img src="https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png" alt="Conditional access policy all cloud apps" style="height: auto;width: auto"/></div>
<p>5. Click <strong>0 controls selected</strong> (under Grant). Click <strong>Require multi-factor authentication</strong>. Click <strong>Select</strong>. Click <strong>On</strong> (under Enable policy). Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png" alt="Conditional access policy requiring MFA" style="height: auto;width: auto"/></div>
<h2>MFA Server</h2>
<p>Another possibility to deploy multifactor authentication in Microsoft 365 is to deploy an MFA server. MFA server would be an application that's installed on any Windows 2008 R two or later server that's joined to your domain. In short, you would download the MFA server installation files from Microsoft and install the software on your server. Then with a quick configuration, you can deploy your MFA server. As of July 1st, 2019 Microsoft, no longer offers an MFA server for new deployments. So, we won't be covering the installation or configuration in this guide.</p>
<h2>Third-party options</h2>
<p>Microsoft has also configured Microsoft 365 so third-party vendors can offer multifactor authentication options. Several vendors sell software or cloud-only options that can tie into Microsoft 365 and provide you with multifactor authentication. Some of those vendors are one login and duo. They won't be covering the deployment of these options in this guide because they are not covered in the MS-500.</p>
<h2>User experience</h2>
<p>Once MFA is enabled for a user the user will see the following prompts (either in the browser or in Outlook).</p>
<p>1. On the More information required prompt click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/gRrD5Pb/MFA-Enabled.png" alt="MFA Enabled More information required" style="height: auto;width: auto"/></div>
<p>2. On Keep your account secure / start by getting the app page download Microsoft Authenticator to your mobile phone and open the app.</p>
<div ><img src="https://i.ibb.co/MsS22gP/install-the-authenticator-app.png" alt="Install the authentication app" style="height: auto;width: auto"/></div>
<p>3. Once in the app click <strong>I agree </strong>&gt; <strong>Scan a QR code</strong> &gt; <strong>While using the app</strong>.</p>
<div ><img src="https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png" alt="Setup the authenticator app" style="height: auto;width: auto"/></div>
<p>3. Then go back to the sign-in page and click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png" alt="Keep you account secure page" style="height: auto;width: auto"/></div>
<p>3. On Scan the QR code page scan the QR code with the Microsoft authenticator app on your phone. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/gT5QZKt/scan-qr-code.png" alt="Scan the QR code with your phone" style="height: auto;width: auto"/></div>
<p>4. Approve the sign-in request on your phone.</p>
<div ><img src="https://i.ibb.co/YhvggFT/approve-sign-in.png" alt="Approve the sign in" style="height: auto;width: auto"/></div>
<p>5. Once you see the Notification approved message click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/VjsxsJ4/notification-approved.png" alt="Notification approved" style="height: auto;width: auto"/></div>
<p>6. on the Phone page, enter your cell phone number and click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png" alt="Enter phone number to receive text message" style="height: auto;width: auto"/></div>
<p>7. Enter the code texted to you in the space provided. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png" alt="Enter the code you received in the text message" style="height: auto;width: auto"/></div>
<p>8. Once you see SMS verified. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/wQ44kFB/SMS-verified.png" alt="SMS verified" style="height: auto;width: auto"/></div>
<p>9. On the success page click <strong>Done</strong>.</p>
<div ><img src="https://i.ibb.co/TbQvJDf/Click-done.png" alt="Click done" style="height: auto;width: auto"/></div>
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
