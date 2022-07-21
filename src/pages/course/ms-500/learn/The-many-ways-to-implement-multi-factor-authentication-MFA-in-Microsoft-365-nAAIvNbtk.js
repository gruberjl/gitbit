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
      article: {"description":"There are 5 different ways to enable MFA in Microsoft 365. Learn which way is the best way in this guide.","type":"article","datePublished":"2022/5/26","id":"nAAIvNbtk","article":{"blocks":[{"entityRanges":[],"text":"There are five, count it five, separate ways to configure multifactor authentication in Microsoft 365. In this article, we will go over three of them because one of them is no longer supported and one of them uses third-party tools that are out of scope for the MS-500.","depth":0,"inlineStyleRanges":[],"data":{},"type":"unstyled","key":"6g2e4"},{"key":"6ju97","data":{},"type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Security Defaults"},{"inlineStyleRanges":[],"depth":0,"data":{},"type":"unstyled","entityRanges":[],"key":"b8rd","text":"Security defaults are the latest way to enable MFA in Microsoft 365. Security defaults enable MFA across your entire tenant. That includes all of your users. There is no way to limit MFA to a select user or group with security defaults. If you created your tenant after October 22nd, 2019 security defaults are probably already enabled on your tenant. "},{"depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"d3jp9","type":"unstyled","text":"By enabling security defaults in your Microsoft 365 tenant you're not only requiring MFA but you're also blocking legacy authentication, for example, IMAP, POP3, and basic auth."},{"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"key":"dm3ui","data":{},"text":"Security Defaults are available for all Microsoft 365 tenants regardless of your licensing.","depth":0},{"data":{},"text":"How to enable/disable security defaults","type":"header-three","entityRanges":[],"depth":0,"key":"3b06s","inlineStyleRanges":[]},{"data":{},"type":"unstyled","depth":0,"key":"bcnkf","text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Properties > Manage Security Defaults. Click Yes to enable the policy. Click No to disable the policy. Click Save.","inlineStyleRanges":[{"style":"BOLD","offset":47,"length":22},{"style":"BOLD","length":11,"offset":72},{"offset":85,"style":"BOLD","length":24},{"offset":117,"length":4,"style":"BOLD"},{"length":3,"style":"BOLD","offset":149},{"offset":181,"style":"BOLD","length":4}],"entityRanges":[{"key":0,"offset":72,"length":10}]},{"text":" ","type":"atomic","entityRanges":[{"offset":0,"length":1,"key":1}],"data":{},"depth":0,"inlineStyleRanges":[],"key":"1qv2a"},{"entityRanges":[],"data":{},"depth":0,"text":"Per-user MFA","type":"header-two","key":"efs5j","inlineStyleRanges":[]},{"entityRanges":[],"data":{},"type":"unstyled","key":"1kh0t","depth":0,"inlineStyleRanges":[],"text":"Per-user MFA gives more control over who is required to use multifactor authentication, but it requires you to enable MFA for every user individually. That means every time you create a new user in Microsoft 365 you need to enable MFA for that user. But it also means you can roll out MFA to a set of users."},{"key":"2oqlb","text":"Per-user MFA is available for all Microsoft 365 tenants regardless of your licensing.","entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[],"depth":0},{"key":"299as","entityRanges":[],"text":"How to enable per-user MFA","depth":0,"data":{},"inlineStyleRanges":[],"type":"header-three"},{"entityRanges":[{"offset":53,"length":27,"key":2}],"depth":0,"text":"1. Go to Microsoft 365 admin center > Active users > Multi-factor authentication.","type":"unstyled","data":{},"key":"cvfj5","inlineStyleRanges":[{"length":12,"style":"BOLD","offset":38},{"offset":53,"style":"BOLD","length":27}]},{"inlineStyleRanges":[],"key":"43ool","depth":0,"text":" ","data":{},"type":"atomic","entityRanges":[{"key":3,"length":1,"offset":0}]},{"entityRanges":[],"data":{},"inlineStyleRanges":[{"length":6,"style":"BOLD","offset":72}],"type":"unstyled","text":"2. Click the check box next to a user you want to enable MFA for. Click Enable.","key":"1244s","depth":0},{"data":{},"depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic","entityRanges":[{"key":4,"offset":0,"length":1}],"key":"9h50r"},{"entityRanges":[],"depth":0,"key":"8o4ta","data":{},"text":"3. Click enable multi-factor auth.","type":"unstyled","inlineStyleRanges":[{"offset":9,"length":24,"style":"BOLD"}]},{"type":"atomic","key":"b9mbs","depth":0,"inlineStyleRanges":[],"data":{},"text":" ","entityRanges":[{"key":5,"offset":0,"length":1}]},{"key":"8cseb","inlineStyleRanges":[],"entityRanges":[],"type":"header-three","text":"Understanding MFA Status","depth":0,"data":{}},{"text":" ","data":{},"key":"9j7ar","entityRanges":[{"offset":0,"length":1,"key":6}],"inlineStyleRanges":[],"depth":0,"type":"atomic"},{"text":"With per-user MFA you'll notice there are three different statuses. Disabled means the user isn't required to use per-user MFA. Next, enabled means the user is required to set up their MFA at the next login. Enforced means the user has set up the MFA.","depth":0,"data":{},"inlineStyleRanges":[{"offset":68,"style":"BOLD","length":8},{"offset":134,"style":"BOLD","length":8},{"style":"BOLD","length":9,"offset":208}],"entityRanges":[],"key":"1kikr","type":"unstyled"},{"text":"How to configure the settings in per-user MFA","data":{},"inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"2q4g8","type":"header-three"},{"inlineStyleRanges":[],"depth":0,"text":" ","type":"atomic","key":"crpdo","data":{},"entityRanges":[{"key":7,"offset":0,"length":1}]},{"key":"3ujt1","entityRanges":[],"data":{},"text":"One last thing. You can configure some options in the per-user MFA. By going to service settings you'll notice a whole list of options.","depth":0,"type":"unstyled","inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":14}],"type":"unordered-list-item","text":"App passwords are a great way to allow legacy apps to continue to connect to Microsoft 365. In short, app passwords will replace the users' passwords so they can still log in to Microsoft 365 using an app that doesn't support Microsoft 365 MFA.","key":"ela4a","depth":0,"data":{}},{"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":12}],"text":"Trusted IPs are a simple way to bypass MFA when the users are coming from a certain IP address.","type":"unordered-list-item","data":{},"depth":0,"entityRanges":[],"key":"22g8s"},{"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":20,"offset":0},{"style":"BOLD","length":21,"offset":153}],"type":"unordered-list-item","text":"Verification options are the options that a user can set up MFA. For example, if you don't want users to be able to receive text messages simply uncheck Text message to phone.","depth":0,"key":"5l92","data":{}},{"entityRanges":[],"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":23}],"data":{},"type":"unordered-list-item","depth":0,"key":"2dotp","text":"Allow users to remember will allow the users to not be prompted every time they need to re-authenticate from a device."},{"key":"8mghh","text":"Conditional access policy","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"header-two","data":{}},{"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"depth":0,"text":"The last built-in choice is via conditional access policies. Conditional access policies provide the best security defaults as well as the best per-user MFA. With conditional access policies, you can deploy MFA to a user or a group of users, so you don't have to require MFA for all users as you do with security defaults. Also, you can configure conditional access policies to include all users or all administrators, so you don't need to remember to enable MFA for every new user as you need to do with per-user MFA.","key":"aj3p7","data":{}},{"inlineStyleRanges":[],"entityRanges":[],"key":"am59g","depth":0,"type":"unstyled","text":"The one downside of conditional access policies is licensing. Conditional access policies are only available for azure SD premium P1 licensed users. Conditional access policies are also available to Microsoft 365 business premium users.","data":{}},{"depth":0,"data":{},"text":"How to enable MFA using conditional access policies","inlineStyleRanges":[],"key":"fb9eh","entityRanges":[],"type":"header-three"},{"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":12,"offset":51},{"offset":66,"style":"BOLD","length":27},{"length":10,"style":"BOLD","offset":96},{"length":17,"offset":109,"style":"BOLD"}],"key":"crsit","depth":0,"text":"1. log in to Azure Active Directory admin center > All services > Azure AD Conditional Access > New Policy > Create new policy.","data":{},"type":"unstyled"},{"data":{},"type":"atomic","text":" ","key":"ar1vp","inlineStyleRanges":[],"depth":0,"entityRanges":[{"length":1,"key":8,"offset":0}]},{"inlineStyleRanges":[{"length":11,"offset":20,"style":"BOLD"}],"depth":0,"key":"8mpbh","entityRanges":[],"data":{},"text":"2. Enter a name of “Require MFA”","type":"unstyled"},{"entityRanges":[{"offset":0,"key":9,"length":1}],"depth":0,"data":{},"key":"fveqj","inlineStyleRanges":[],"text":" ","type":"atomic"},{"text":"3. Click 0 users or workload identities selected. Click All users.","key":"713o9","type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":39},{"offset":56,"style":"BOLD","length":9}],"data":{},"depth":0},{"entityRanges":[{"key":10,"length":1,"offset":0}],"inlineStyleRanges":[],"type":"atomic","data":{},"depth":0,"key":"a55eo","text":" "},{"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":59,"offset":9},{"offset":76,"style":"BOLD","length":14}],"entityRanges":[],"data":{},"text":"4. Click No cloud apps, actions, or authentication contexts selected. Click All cloud apps.","key":"1c2a","type":"unstyled"},{"data":{},"type":"atomic","text":" ","key":"esojv","depth":0,"entityRanges":[{"offset":0,"key":11,"length":1}],"inlineStyleRanges":[]},{"depth":0,"type":"unstyled","key":"62fgh","entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","length":19,"offset":9},{"offset":50,"style":"BOLD","length":35},{"offset":93,"style":"BOLD","length":6},{"style":"BOLD","offset":107,"length":2},{"style":"BOLD","offset":139,"length":6}],"text":"5. Click 0 controls selected (under Grant). Click Require multi-factor authentication. Click Select. Click On (under Enable policy). Click Create."},{"data":{},"text":" ","key":"1qkma","depth":0,"type":"atomic","entityRanges":[{"length":1,"key":12,"offset":0}],"inlineStyleRanges":[]},{"data":{},"depth":0,"key":"7p222","inlineStyleRanges":[],"entityRanges":[],"text":"MFA Server","type":"header-two"},{"text":"Another possibility to deploy multifactor authentication in Microsoft 365 is to deploy an MFA server. MFA server would be an application that's installed on any Windows 2008 R two or later server that's joined to your domain. In short, you would download the MFA server installation files from Microsoft and install the software on your server. Then with a quick configuration, you can deploy your MFA server. As of July 1st, 2019 Microsoft, no longer offers an MFA server for new deployments. So, we won't be covering the installation or configuration in this guide.","entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[],"depth":0,"key":"8u70p"},{"inlineStyleRanges":[],"entityRanges":[],"type":"header-two","data":{},"text":"Third-party options","key":"50guu","depth":0},{"key":"954c2","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"Microsoft has also configured Microsoft 365 so third-party vendors can offer multifactor authentication options. Several vendors sell software or cloud-only options that can tie into Microsoft 365 and provide you with multifactor authentication. Some of those vendors are one login and duo. They won't be covering the deployment of these options in this guide because they are not covered in the MS-500.","data":{}},{"depth":0,"type":"header-two","text":"User experience","entityRanges":[],"inlineStyleRanges":[],"data":{},"key":"187ec"},{"key":"89t8j","text":"Once MFA is enabled for a user the user will see the following prompts (either in the browser or in Outlook).","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled"},{"inlineStyleRanges":[{"offset":49,"style":"BOLD","length":4}],"type":"unstyled","entityRanges":[],"key":"eljbq","depth":0,"data":{},"text":"1. On the More information required prompt click Next."},{"key":"5rhr2","data":{},"text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":13}],"depth":0,"type":"atomic"},{"data":{},"key":"4r4i6","text":"2. On Keep your account secure / start by getting the app page download Microsoft Authenticator to your mobile phone and open the app.","depth":0,"type":"unstyled","inlineStyleRanges":[],"entityRanges":[]},{"key":"emuso","data":{},"entityRanges":[{"offset":0,"length":1,"key":14}],"depth":0,"inlineStyleRanges":[],"type":"atomic","text":" "},{"key":"1lre1","depth":0,"text":"3. Once in the app click I agree > Scan a QR code > While using the app.","inlineStyleRanges":[{"style":"BOLD","offset":25,"length":8},{"offset":35,"length":14,"style":"BOLD"},{"offset":52,"style":"BOLD","length":19}],"type":"unstyled","entityRanges":[],"data":{}},{"key":"e3llq","text":" ","data":{},"inlineStyleRanges":[],"entityRanges":[{"key":15,"length":1,"offset":0}],"depth":0,"type":"atomic"},{"inlineStyleRanges":[{"offset":46,"style":"BOLD","length":4}],"text":"3. Then go back to the sign-in page and click Next.","depth":0,"entityRanges":[],"data":{},"type":"unstyled","key":"89t62"},{"type":"atomic","key":"52og6","depth":0,"data":{},"text":" ","entityRanges":[{"offset":0,"key":16,"length":1}],"inlineStyleRanges":[]},{"key":"alog3","inlineStyleRanges":[{"length":4,"style":"BOLD","offset":103}],"text":"3. On Scan the QR code page scan the QR code with the Microsoft authenticator app on your phone. Click Next.","depth":0,"type":"unstyled","entityRanges":[],"data":{}},{"text":" ","key":"9c51g","type":"atomic","data":{},"entityRanges":[{"key":17,"offset":0,"length":1}],"inlineStyleRanges":[],"depth":0},{"entityRanges":[],"data":{},"inlineStyleRanges":[],"type":"unstyled","depth":0,"text":"4. Approve the sign-in request on your phone.","key":"1v56f"},{"entityRanges":[{"length":1,"offset":0,"key":18}],"depth":0,"key":"3i1pp","type":"atomic","text":" ","inlineStyleRanges":[],"data":{}},{"entityRanges":[],"key":"7r5bf","data":{},"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":56}],"text":"5. Once you see the Notification approved message click Next.","depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"type":"atomic","depth":0,"entityRanges":[{"length":1,"key":19,"offset":0}],"data":{},"text":" ","key":"aa6cs"},{"inlineStyleRanges":[{"offset":61,"length":4,"style":"BOLD"}],"key":"4vc6e","depth":0,"entityRanges":[],"data":{},"text":"6. on the Phone page, enter your cell phone number and click Next.","type":"unstyled"},{"key":"46bl0","text":" ","entityRanges":[{"key":20,"length":1,"offset":0}],"depth":0,"inlineStyleRanges":[],"type":"atomic","data":{}},{"depth":0,"key":"i347","text":"7. Enter the code texted to you in the space provided. Click Next.","type":"unstyled","data":{},"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":61}]},{"key":"d6no4","type":"atomic","entityRanges":[{"key":21,"offset":0,"length":1}],"depth":0,"inlineStyleRanges":[],"text":" ","data":{}},{"type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"offset":36,"style":"BOLD","length":4}],"depth":0,"data":{},"text":"8. Once you see SMS verified. Click Next.","key":"ahfi"},{"depth":0,"data":{},"key":"9bgtr","entityRanges":[{"key":22,"offset":0,"length":1}],"text":" ","inlineStyleRanges":[],"type":"atomic"},{"inlineStyleRanges":[{"length":4,"style":"BOLD","offset":29}],"key":"1ladh","data":{},"type":"unstyled","depth":0,"entityRanges":[],"text":"9. On the success page click Done."},{"data":{},"inlineStyleRanges":[],"text":" ","key":"7tiun","depth":0,"type":"atomic","entityRanges":[{"length":1,"key":23,"offset":0}]},{"depth":0,"entityRanges":[],"key":"8akr6","data":{},"text":"","type":"unstyled","inlineStyleRanges":[]}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png","height":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Properties","width":"auto","alt":"Microsoft 365 security defaults","targetOption":"_blank","alignment":"left"},"type":"LINK"},"1":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png","targetOption":"_blank","url":"https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx","alignment":"none","width":"auto","alt":"Microsoft 365 security defaults"}},"2":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx"}},"3":{"data":{"alignment":"none","alt":"Microsoft 365 Per-User MFA","src":"https://i.ibb.co/RjswM6n/per-user-mfa.png","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"4":{"data":{"alt":"Enable per-user MFA","width":"auto","alignment":"none","height":"auto","src":"https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png"},"mutability":"MUTABLE","type":"IMAGE"},"5":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","alt":"Enable multi-factor auth","height":"auto","src":"https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png","width":"auto"}},"6":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","alignment":"none","width":"auto","alt":"MFA Status in Microsoft 365","src":"https://i.ibb.co/HTFhBzB/MFA-Status.png"}},"7":{"mutability":"MUTABLE","data":{"alt":"Per-User MFA Settings","height":"auto","alignment":"none","src":"https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png","width":"auto"},"type":"IMAGE"},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png","width":"auto","alt":"Create a conditional access policy","alignment":"none","height":"auto"}},"9":{"mutability":"MUTABLE","data":{"alt":"Name the conditional access Policy Require MFA","width":"auto","alignment":"none","height":"auto","src":"https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png"},"type":"IMAGE"},"10":{"mutability":"MUTABLE","data":{"width":"auto","height":"auto","src":"https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png","alt":"Set Conditional access policy to all users","alignment":"none"},"type":"IMAGE"},"11":{"data":{"alignment":"none","height":"auto","width":"auto","alt":"Conditional access policy all cloud apps","src":"https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png"},"type":"IMAGE","mutability":"MUTABLE"},"12":{"data":{"height":"auto","width":"auto","alignment":"none","alt":"Conditional access policy requiring MFA","src":"https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png"},"mutability":"MUTABLE","type":"IMAGE"},"13":{"mutability":"MUTABLE","data":{"width":"auto","alt":"MFA Enabled More information required","src":"https://i.ibb.co/gRrD5Pb/MFA-Enabled.png","height":"auto","alignment":"none"},"type":"IMAGE"},"14":{"data":{"src":"https://i.ibb.co/MsS22gP/install-the-authenticator-app.png","height":"auto","alt":"Install the authentication app","width":"auto","alignment":"none"},"mutability":"MUTABLE","type":"IMAGE"},"15":{"mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png","height":"auto","width":"auto","alt":"Setup the authenticator app"},"type":"IMAGE"},"16":{"type":"IMAGE","data":{"alt":"Keep you account secure page","alignment":"none","height":"auto","src":"https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png","width":"auto"},"mutability":"MUTABLE"},"17":{"data":{"alignment":"none","src":"https://i.ibb.co/gT5QZKt/scan-qr-code.png","alt":"Scan the QR code with your phone","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"18":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Approve the sign in","height":"auto","width":"auto","alignment":"none","src":"https://i.ibb.co/YhvggFT/approve-sign-in.png"}},"19":{"type":"IMAGE","data":{"width":"auto","alignment":"none","src":"https://i.ibb.co/VjsxsJ4/notification-approved.png","height":"auto","alt":"Notification approved"},"mutability":"MUTABLE"},"20":{"data":{"alignment":"none","src":"https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png","height":"auto","width":"auto","alt":"Enter phone number to receive text message"},"type":"IMAGE","mutability":"MUTABLE"},"21":{"type":"IMAGE","data":{"height":"auto","width":"auto","alignment":"none","src":"https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png","alt":"Enter the code you received in the text message"},"mutability":"MUTABLE"},"22":{"data":{"src":"https://i.ibb.co/wQ44kFB/SMS-verified.png","width":"auto","alt":"SMS verified","alignment":"none","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"23":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","alignment":"none","width":"auto","alt":"Click done","src":"https://i.ibb.co/TbQvJDf/Click-done.png"}}}},"title":"The many ways to implement multi-factor authentication (MFA) in Microsoft 365","featuredImage":"https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png","publish":true,"images":["https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png","https://i.ibb.co/RjswM6n/per-user-mfa.png","https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png","https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png","https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png","https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png","https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png","https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png","https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png","https://i.ibb.co/gRrD5Pb/MFA-Enabled.png","https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png","https://i.ibb.co/gT5QZKt/scan-qr-code.png","https://i.ibb.co/VjsxsJ4/notification-approved.png","https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png","https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png","https://i.ibb.co/wQ44kFB/SMS-verified.png","https://i.ibb.co/TbQvJDf/Click-done.png","https://i.ibb.co/MsS22gP/install-the-authenticator-app.png","https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png","https://i.ibb.co/YhvggFT/approve-sign-in.png","https://i.ibb.co/HTFhBzB/MFA-Status.png","https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png"],"sectionId":"AFV_acckJ","slug":"The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk"},
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
