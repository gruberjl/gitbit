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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6g2e4', text: 'There are five, count it five, separate ways to configure multifactor authentication in Microsoft 365. In this article, we will go over three of them because one of them is no longer supported and one of them uses third-party tools that are out of scope for the MS-500.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ju97', text: 'Security Defaults', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b8rd', text: 'Security defaults are the latest way to enable MFA in Microsoft 365. Security defaults enable MFA across your entire tenant. That includes all of your users. There is no way to limit MFA to a select user or group with security defaults. If you created your tenant after October 22nd, 2019 security defaults are probably already enabled on your tenant. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd3jp9', text: 'By enabling security defaults in your Microsoft 365 tenant you\'re not only requiring MFA but you\'re also blocking legacy authentication, for example, IMAP, POP3, and basic auth.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dm3ui', text: 'Security Defaults are available for all Microsoft 365 tenants regardless of your licensing.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3b06s', text: 'How to enable/disable security defaults', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 10, offset: 72}], inlineStyleRanges: [{length: 22, offset: 47, style: 'BOLD'}, {length: 11, offset: 72, style: 'BOLD'}, {length: 24, offset: 85, style: 'BOLD'}, {length: 4, offset: 117, style: 'BOLD'}, {length: 3, offset: 149, style: 'BOLD'}, {length: 4, offset: 181, style: 'BOLD'}], key: 'bcnkf', text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Properties > Manage Security Defaults. Click Yes to enable the policy. Click No to disable the policy. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '1qv2a', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'efs5j', text: 'Per-user MFA', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1kh0t', text: 'Per-user MFA gives more control over who is required to use multifactor authentication, but it requires you to enable MFA for every user individually. That means every time you create a new user in Microsoft 365 you need to enable MFA for that user. But it also means you can roll out MFA to a set of users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2oqlb', text: 'Per-user MFA is available for all Microsoft 365 tenants regardless of your licensing.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '299as', text: 'How to enable per-user MFA', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 27, offset: 53}], inlineStyleRanges: [{length: 12, offset: 38, style: 'BOLD'}, {length: 27, offset: 53, style: 'BOLD'}], key: 'cvfj5', text: '1. Go to Microsoft 365 admin center > Active users > Multi-factor authentication.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '43ool', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 72, style: 'BOLD'}], key: '1244s', text: '2. Click the check box next to a user you want to enable MFA for. Click Enable.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '9h50r', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 9, style: 'BOLD'}], key: '8o4ta', text: '3. Click enable multi-factor auth.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b9mbs', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8cseb', text: 'Understanding MFA Status', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '9j7ar', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 68, style: 'BOLD'}, {length: 8, offset: 134, style: 'BOLD'}, {length: 9, offset: 208, style: 'BOLD'}], key: '1kikr', text: 'With per-user MFA you\'ll notice there are three different statuses. Disabled means the user isn\'t required to use per-user MFA. Next, enabled means the user is required to set up their MFA at the next login. Enforced means the user has set up the MFA.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2q4g8', text: 'How to configure the settings in per-user MFA', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'crpdo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3ujt1', text: 'One last thing. You can configure some options in the per-user MFA. By going to service settings you\'ll notice a whole list of options.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 0, style: 'BOLD'}], key: 'ela4a', text: 'App passwords are a great way to allow legacy apps to continue to connect to Microsoft 365. In short, app passwords will replace the users\' passwords so they can still log in to Microsoft 365 using an app that doesn\'t support Microsoft 365 MFA.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 0, style: 'BOLD'}], key: '22g8s', text: 'Trusted IPs are a simple way to bypass MFA when the users are coming from a certain IP address.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 20, offset: 0, style: 'BOLD'}, {length: 21, offset: 153, style: 'BOLD'}], key: '5l92', text: 'Verification options are the options that a user can set up MFA. For example, if you don\'t want users to be able to receive text messages simply uncheck Text message to phone.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 23, offset: 0, style: 'BOLD'}], key: '2dotp', text: 'Allow users to remember will allow the users to not be prompted every time they need to re-authenticate from a device.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8mghh', text: 'Conditional access policy', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aj3p7', text: 'The last built-in choice is via conditional access policies. Conditional access policies provide the best security defaults as well as the best per-user MFA. With conditional access policies, you can deploy MFA to a user or a group of users, so you don\'t have to require MFA for all users as you do with security defaults. Also, you can configure conditional access policies to include all users or all administrators, so you don\'t need to remember to enable MFA for every new user as you need to do with per-user MFA.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'am59g', text: 'The one downside of conditional access policies is licensing. Conditional access policies are only available for azure SD premium P1 licensed users. Conditional access policies are also available to Microsoft 365 business premium users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fb9eh', text: 'How to enable MFA using conditional access policies', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 51, style: 'BOLD'}, {length: 27, offset: 66, style: 'BOLD'}, {length: 10, offset: 96, style: 'BOLD'}, {length: 17, offset: 109, style: 'BOLD'}], key: 'crsit', text: '1. log in to Azure Active Directory admin center > All services > Azure AD Conditional Access > New Policy > Create new policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ar1vp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 20, style: 'BOLD'}], key: '8mpbh', text: '2. Enter a name of “Require MFA”', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fveqj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 9, offset: 56, style: 'BOLD'}], key: '713o9', text: '3. Click 0 users or workload identities selected. Click All users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a55eo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 59, offset: 9, style: 'BOLD'}, {length: 14, offset: 76, style: 'BOLD'}], key: '1c2a', text: '4. Click No cloud apps, actions, or authentication contexts selected. Click All cloud apps.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'esojv', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 9, style: 'BOLD'}, {length: 35, offset: 50, style: 'BOLD'}, {length: 6, offset: 93, style: 'BOLD'}, {length: 2, offset: 107, style: 'BOLD'}, {length: 6, offset: 139, style: 'BOLD'}], key: '62fgh', text: '5. Click 0 controls selected (under Grant). Click Require multi-factor authentication. Click Select. Click On (under Enable policy). Click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '1qkma', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7p222', text: 'MFA Server', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8u70p', text: 'Another possibility to deploy multifactor authentication in Microsoft 365 is to deploy an MFA server. MFA server would be an application that\'s installed on any Windows 2008 R two or later server that\'s joined to your domain. In short, you would download the MFA server installation files from Microsoft and install the software on your server. Then with a quick configuration, you can deploy your MFA server. As of July 1st, 2019 Microsoft, no longer offers an MFA server for new deployments. So, we won\'t be covering the installation or configuration in this guide.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '50guu', text: 'Third-party options', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '954c2', text: 'Microsoft has also configured Microsoft 365 so third-party vendors can offer multifactor authentication options. Several vendors sell software or cloud-only options that can tie into Microsoft 365 and provide you with multifactor authentication. Some of those vendors are one login and duo. They won\'t be covering the deployment of these options in this guide because they are not covered in the MS-500.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '187ec', text: 'User experience', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '89t8j', text: 'Once MFA is enabled for a user the user will see the following prompts (either in the browser or in Outlook).', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 49, style: 'BOLD'}], key: 'eljbq', text: '1. On the More information required prompt click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '5rhr2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4r4i6', text: '2. On Keep your account secure / start by getting the app page download Microsoft Authenticator to your mobile phone and open the app.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: 'emuso', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 25, style: 'BOLD'}, {length: 14, offset: 35, style: 'BOLD'}, {length: 19, offset: 52, style: 'BOLD'}], key: '1lre1', text: '3. Once in the app click I agree > Scan a QR code > While using the app.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e3llq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 46, style: 'BOLD'}], key: '89t62', text: '3. Then go back to the sign-in page and click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '52og6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 103, style: 'BOLD'}], key: 'alog3', text: '3. On Scan the QR code page scan the QR code with the Microsoft authenticator app on your phone. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: '9c51g', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1v56f', text: '4. Approve the sign-in request on your phone.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: '3i1pp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 56, style: 'BOLD'}], key: '7r5bf', text: '5. Once you see the Notification approved message click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 1, offset: 0}], inlineStyleRanges: [], key: 'aa6cs', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 61, style: 'BOLD'}], key: '4vc6e', text: '6. on the Phone page, enter your cell phone number and click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 1, offset: 0}], inlineStyleRanges: [], key: '46bl0', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 61, style: 'BOLD'}], key: 'i347', text: '7. Enter the code texted to you in the space provided. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 1, offset: 0}], inlineStyleRanges: [], key: 'd6no4', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 36, style: 'BOLD'}], key: 'ahfi', text: '8. Once you see SMS verified. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 1, offset: 0}], inlineStyleRanges: [], key: '9bgtr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 29, style: 'BOLD'}], key: '1ladh', text: '9. On the success page click Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 1, offset: 0}], inlineStyleRanges: [], key: '7tiun', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8akr6', text: '', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'left', alt: 'Microsoft 365 security defaults', height: 'auto', src: 'https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Properties', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Microsoft 365 security defaults', height: 'auto', src: 'https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png', targetOption: '_blank', url: 'https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Set Conditional access policy to all users', height: 'auto', src: 'https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Conditional access policy all cloud apps', height: 'auto', src: 'https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Conditional access policy requiring MFA', height: 'auto', src: 'https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'MFA Enabled More information required', height: 'auto', src: 'https://i.ibb.co/gRrD5Pb/MFA-Enabled.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Install the authentication app', height: 'auto', src: 'https://i.ibb.co/MsS22gP/install-the-authenticator-app.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'Setup the authenticator app', height: 'auto', src: 'https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {alignment: 'none', alt: 'Keep you account secure page', height: 'auto', src: 'https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Scan the QR code with your phone', height: 'auto', src: 'https://i.ibb.co/gT5QZKt/scan-qr-code.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'none', alt: 'Approve the sign in', height: 'auto', src: 'https://i.ibb.co/YhvggFT/approve-sign-in.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alignment: 'none', alt: 'Notification approved', height: 'auto', src: 'https://i.ibb.co/VjsxsJ4/notification-approved.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {targetOption: '_blank', url: 'https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx'}, mutability: 'MUTABLE', type: 'LINK'}, 20: {data: {alignment: 'none', alt: 'Enter phone number to receive text message', height: 'auto', src: 'https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 21: {data: {alignment: 'none', alt: 'Enter the code you received in the text message', height: 'auto', src: 'https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {data: {alignment: 'none', alt: 'SMS verified', height: 'auto', src: 'https://i.ibb.co/wQ44kFB/SMS-verified.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 23: {data: {alignment: 'none', alt: 'Click done', height: 'auto', src: 'https://i.ibb.co/TbQvJDf/Click-done.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Microsoft 365 Per-User MFA', height: 'auto', src: 'https://i.ibb.co/RjswM6n/per-user-mfa.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Enable per-user MFA', height: 'auto', src: 'https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Enable multi-factor auth', height: 'auto', src: 'https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'MFA Status in Microsoft 365', height: 'auto', src: 'https://i.ibb.co/HTFhBzB/MFA-Status.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Per-User MFA Settings', height: 'auto', src: 'https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Create a conditional access policy', height: 'auto', src: 'https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Name the conditional access Policy Require MFA', height: 'auto', src: 'https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'There are 5 different ways to enable MFA in Microsoft 365. Learn which way is the best way in this guide.', featuredImage: 'https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png', id: 'nAAIvNbtk', images: ['https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png', 'https://i.ibb.co/RjswM6n/per-user-mfa.png', 'https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png', 'https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png', 'https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png', 'https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png', 'https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png', 'https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png', 'https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png', 'https://i.ibb.co/gRrD5Pb/MFA-Enabled.png', 'https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png', 'https://i.ibb.co/gT5QZKt/scan-qr-code.png', 'https://i.ibb.co/VjsxsJ4/notification-approved.png', 'https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png', 'https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png', 'https://i.ibb.co/wQ44kFB/SMS-verified.png', 'https://i.ibb.co/TbQvJDf/Click-done.png', 'https://i.ibb.co/MsS22gP/install-the-authenticator-app.png', 'https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png', 'https://i.ibb.co/YhvggFT/approve-sign-in.png', 'https://i.ibb.co/HTFhBzB/MFA-Status.png', 'https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk', title: 'The many ways to implement multi-factor authentication (MFA) in Microsoft 365', type: 'article'},
      nextContentSlug: 'test/configure-and-manage-multi-factor-authentication-mfa-yjeapbng4',
      previousContentSlug: 'test/conditional-access-policies-sf_luicxn',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()((w, d, s, i)=> {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664931508787046, size: [0, 0], id: 'ld-534-9587'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')((w, d, s, i)=> {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664932884518758, size: [0, 0], id: 'ld-7740-2760'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
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
                  <div id="ld-534-9587" />
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>There are five, count it five, separate ways to configure multifactor authentication in Microsoft 365. In this article, we will go over three of them because one of them is no longer supported and one of them uses third-party tools that are out of scope for the MS-500.</p>
                    <div id="ld-7740-2760" /><h2>Security Defaults</h2>
                    <p>Security defaults are the latest way to enable MFA in Microsoft 365. Security defaults enable MFA across your entire tenant. That includes all of your users. There is no way to limit MFA to a select user or group with security defaults. If you created your tenant after October 22nd, 2019 security defaults are probably already enabled on your tenant.&nbsp;</p>
                    <p>By enabling security defaults in your Microsoft 365 tenant you're not only requiring MFA but you're also blocking legacy authentication, for example, IMAP, POP3, and basic auth.</p>
                    <p>Security Defaults are available for all Microsoft 365 tenants regardless of your licensing.</p>
                    <h3>How to enable/disable security defaults</h3>
                    <p>1. Go to Azure Active Directory admin center &gt; <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Properties" target="_blank" rel="noreferrer"><strong>Properties</strong></a><strong> </strong>&gt; <strong>Manage Security Defaults</strong>. Click <strong>Yes </strong>to enable the policy. Click <strong>No </strong>to disable the policy. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png" alt="Microsoft 365 security defaults" style="height: auto;width: auto" /></div>
                    <h2>Per-user MFA</h2>
                    <p>Per-user MFA gives more control over who is required to use multifactor authentication, but it requires you to enable MFA for every user individually. That means every time you create a new user in Microsoft 365 you need to enable MFA for that user. But it also means you can roll out MFA to a set of users.</p>
                    <p>Per-user MFA is available for all Microsoft 365 tenants regardless of your licensing.</p>
                    <h3>How to enable per-user MFA</h3>
                    <p>1. Go to Microsoft 365 admin center &gt; <strong>Active users</strong> &gt; <a href="https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx" target="_blank" rel="noreferrer"><strong>Multi-factor authentication</strong></a>.</p>
                    <div ><img src="https://i.ibb.co/RjswM6n/per-user-mfa.png" alt="Microsoft 365 Per-User MFA" style="height: auto;width: auto" /></div>
                    <p>2. Click the check box next to a user you want to enable MFA for. Click <strong>Enable</strong>.</p>
                    <div ><img src="https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png" alt="Enable per-user MFA" style="height: auto;width: auto" /></div>
                    <p>3. Click <strong>enable multi-factor auth</strong>.</p>
                    <div ><img src="https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png" alt="Enable multi-factor auth" style="height: auto;width: auto" /></div>
                    <h3>Understanding MFA Status</h3>
                    <div ><img src="https://i.ibb.co/HTFhBzB/MFA-Status.png" alt="MFA Status in Microsoft 365" style="height: auto;width: auto" /></div>
                    <p>With per-user MFA you'll notice there are three different statuses. <strong>Disabled</strong> means the user isn't required to use per-user MFA. Next, <strong>enabled </strong>means the user is required to set up their MFA at the next login. <strong>Enforced </strong>means the user has set up the MFA.</p>
                    <h3>How to configure the settings in per-user MFA</h3>
                    <div ><img src="https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png" alt="Per-User MFA Settings" style="height: auto;width: auto" /></div>
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
                    <div ><img src="https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png" alt="Create a conditional access policy" style="height: auto;width: auto" /></div>
                    <p>2. Enter a name of “<strong>Require MFA</strong>”</p>
                    <div ><img src="https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png" alt="Name the conditional access Policy Require MFA" style="height: auto;width: auto" /></div>
                    <p>3. Click <strong>0 users or workload identities selected</strong>. Click <strong>All users</strong>.</p>
                    <div ><img src="https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png" alt="Set Conditional access policy to all users" style="height: auto;width: auto" /></div>
                    <p>4. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>All cloud apps</strong>.</p>
                    <div ><img src="https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png" alt="Conditional access policy all cloud apps" style="height: auto;width: auto" /></div>
                    <p>5. Click <strong>0 controls selected</strong> (under Grant). Click <strong>Require multi-factor authentication</strong>. Click <strong>Select</strong>. Click <strong>On</strong> (under Enable policy). Click <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png" alt="Conditional access policy requiring MFA" style="height: auto;width: auto" /></div>
                    <h2>MFA Server</h2>
                    <p>Another possibility to deploy multifactor authentication in Microsoft 365 is to deploy an MFA server. MFA server would be an application that's installed on any Windows 2008 R two or later server that's joined to your domain. In short, you would download the MFA server installation files from Microsoft and install the software on your server. Then with a quick configuration, you can deploy your MFA server. As of July 1st, 2019 Microsoft, no longer offers an MFA server for new deployments. So, we won't be covering the installation or configuration in this guide.</p>
                    <h2>Third-party options</h2>
                    <p>Microsoft has also configured Microsoft 365 so third-party vendors can offer multifactor authentication options. Several vendors sell software or cloud-only options that can tie into Microsoft 365 and provide you with multifactor authentication. Some of those vendors are one login and duo. They won't be covering the deployment of these options in this guide because they are not covered in the MS-500.</p>
                    <h2>User experience</h2>
                    <p>Once MFA is enabled for a user the user will see the following prompts (either in the browser or in Outlook).</p>
                    <p>1. On the More information required prompt click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/gRrD5Pb/MFA-Enabled.png" alt="MFA Enabled More information required" style="height: auto;width: auto" /></div>
                    <p>2. On Keep your account secure / start by getting the app page download Microsoft Authenticator to your mobile phone and open the app.</p>
                    <div ><img src="https://i.ibb.co/MsS22gP/install-the-authenticator-app.png" alt="Install the authentication app" style="height: auto;width: auto" /></div>
                    <p>3. Once in the app click <strong>I agree </strong>&gt; <strong>Scan a QR code</strong> &gt; <strong>While using the app</strong>.</p>
                    <div ><img src="https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png" alt="Setup the authenticator app" style="height: auto;width: auto" /></div>
                    <p>3. Then go back to the sign-in page and click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png" alt="Keep you account secure page" style="height: auto;width: auto" /></div>
                    <p>3. On Scan the QR code page scan the QR code with the Microsoft authenticator app on your phone. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/gT5QZKt/scan-qr-code.png" alt="Scan the QR code with your phone" style="height: auto;width: auto" /></div>
                    <p>4. Approve the sign-in request on your phone.</p>
                    <div ><img src="https://i.ibb.co/YhvggFT/approve-sign-in.png" alt="Approve the sign in" style="height: auto;width: auto" /></div>
                    <p>5. Once you see the Notification approved message click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/VjsxsJ4/notification-approved.png" alt="Notification approved" style="height: auto;width: auto" /></div>
                    <p>6. on the Phone page, enter your cell phone number and click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png" alt="Enter phone number to receive text message" style="height: auto;width: auto" /></div>
                    <p>7. Enter the code texted to you in the space provided. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png" alt="Enter the code you received in the text message" style="height: auto;width: auto" /></div>
                    <p>8. Once you see SMS verified. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/wQ44kFB/SMS-verified.png" alt="SMS verified" style="height: auto;width: auto" /></div>
                    <p>9. On the success page click <strong>Done</strong>.</p>
                    <div ><img src="https://i.ibb.co/TbQvJDf/Click-done.png" alt="Click done" style="height: auto;width: auto" /></div>
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
