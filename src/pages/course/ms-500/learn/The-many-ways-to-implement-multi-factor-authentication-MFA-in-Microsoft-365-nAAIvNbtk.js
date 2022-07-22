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
      path: '/course/ms-500/learn/The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk',
      article: {description: 'There are 5 different ways to enable MFA in Microsoft 365. Learn which way is the best way in this guide.', sectionId: 'AFV_acckJ', id: 'nAAIvNbtk', slug: 'The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk', title: 'The many ways to implement multi-factor authentication (MFA) in Microsoft 365', images: ['https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png', 'https://i.ibb.co/RjswM6n/per-user-mfa.png', 'https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png', 'https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png', 'https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png', 'https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png', 'https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png', 'https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png', 'https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png', 'https://i.ibb.co/gRrD5Pb/MFA-Enabled.png', 'https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png', 'https://i.ibb.co/gT5QZKt/scan-qr-code.png', 'https://i.ibb.co/VjsxsJ4/notification-approved.png', 'https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png', 'https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png', 'https://i.ibb.co/wQ44kFB/SMS-verified.png', 'https://i.ibb.co/TbQvJDf/Click-done.png', 'https://i.ibb.co/MsS22gP/install-the-authenticator-app.png', 'https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png', 'https://i.ibb.co/YhvggFT/approve-sign-in.png', 'https://i.ibb.co/HTFhBzB/MFA-Status.png', 'https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png'], publish: true, featuredImage: 'https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png', datePublished: '2022/5/26', article: {blocks: [{inlineStyleRanges: [], text: 'There are five, count it five, separate ways to configure multifactor authentication in Microsoft 365. In this article, we will go over three of them because one of them is no longer supported and one of them uses third-party tools that are out of scope for the MS-500.', type: 'unstyled', key: '6g2e4', entityRanges: [], data: {}, depth: 0}, {entityRanges: [], depth: 0, inlineStyleRanges: [], type: 'header-two', text: 'Security Defaults', data: {}, key: '6ju97'}, {inlineStyleRanges: [], key: 'b8rd', text: 'Security defaults are the latest way to enable MFA in Microsoft 365. Security defaults enable MFA across your entire tenant. That includes all of your users. There is no way to limit MFA to a select user or group with security defaults. If you created your tenant after October 22nd, 2019 security defaults are probably already enabled on your tenant. ', data: {}, type: 'unstyled', entityRanges: [], depth: 0}, {depth: 0, key: 'd3jp9', inlineStyleRanges: [], type: 'unstyled', text: 'By enabling security defaults in your Microsoft 365 tenant you\'re not only requiring MFA but you\'re also blocking legacy authentication, for example, IMAP, POP3, and basic auth.', entityRanges: [], data: {}}, {entityRanges: [], key: 'dm3ui', depth: 0, data: {}, inlineStyleRanges: [], text: 'Security Defaults are available for all Microsoft 365 tenants regardless of your licensing.', type: 'unstyled'}, {text: 'How to enable/disable security defaults', type: 'header-three', depth: 0, data: {}, entityRanges: [], inlineStyleRanges: [], key: '3b06s'}, {key: 'bcnkf', entityRanges: [{offset: 72, key: 0, length: 10}], depth: 0, data: {}, inlineStyleRanges: [{offset: 47, style: 'BOLD', length: 22}, {style: 'BOLD', length: 11, offset: 72}, {offset: 85, style: 'BOLD', length: 24}, {style: 'BOLD', offset: 117, length: 4}, {length: 3, offset: 149, style: 'BOLD'}, {length: 4, offset: 181, style: 'BOLD'}], text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Properties > Manage Security Defaults. Click Yes to enable the policy. Click No to disable the policy. Click Save.', type: 'unstyled'}, {text: ' ', inlineStyleRanges: [], type: 'atomic', data: {}, depth: 0, entityRanges: [{offset: 0, key: 1, length: 1}], key: '1qv2a'}, {type: 'header-two', key: 'efs5j', depth: 0, inlineStyleRanges: [], text: 'Per-user MFA', data: {}, entityRanges: []}, {key: '1kh0t', data: {}, inlineStyleRanges: [], depth: 0, text: 'Per-user MFA gives more control over who is required to use multifactor authentication, but it requires you to enable MFA for every user individually. That means every time you create a new user in Microsoft 365 you need to enable MFA for that user. But it also means you can roll out MFA to a set of users.', type: 'unstyled', entityRanges: []}, {data: {}, type: 'unstyled', key: '2oqlb', entityRanges: [], inlineStyleRanges: [], depth: 0, text: 'Per-user MFA is available for all Microsoft 365 tenants regardless of your licensing.'}, {entityRanges: [], text: 'How to enable per-user MFA', inlineStyleRanges: [], key: '299as', type: 'header-three', data: {}, depth: 0}, {depth: 0, data: {}, key: 'cvfj5', text: '1. Go to Microsoft 365 admin center > Active users > Multi-factor authentication.', entityRanges: [{offset: 53, key: 2, length: 27}], type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', length: 12, offset: 38}, {style: 'BOLD', offset: 53, length: 27}]}, {data: {}, key: '43ool', depth: 0, inlineStyleRanges: [], type: 'atomic', entityRanges: [{offset: 0, length: 1, key: 3}], text: ' '}, {depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 6, offset: 72}], type: 'unstyled', key: '1244s', entityRanges: [], text: '2. Click the check box next to a user you want to enable MFA for. Click Enable.', data: {}}, {data: {}, text: ' ', entityRanges: [{key: 4, length: 1, offset: 0}], depth: 0, inlineStyleRanges: [], key: '9h50r', type: 'atomic'}, {key: '8o4ta', depth: 0, inlineStyleRanges: [{length: 24, style: 'BOLD', offset: 9}], data: {}, text: '3. Click enable multi-factor auth.', type: 'unstyled', entityRanges: []}, {key: 'b9mbs', depth: 0, entityRanges: [{length: 1, key: 5, offset: 0}], data: {}, inlineStyleRanges: [], text: ' ', type: 'atomic'}, {data: {}, depth: 0, type: 'header-three', entityRanges: [], key: '8cseb', text: 'Understanding MFA Status', inlineStyleRanges: []}, {entityRanges: [{offset: 0, length: 1, key: 6}], data: {}, text: ' ', inlineStyleRanges: [], type: 'atomic', key: '9j7ar', depth: 0}, {key: '1kikr', data: {}, text: 'With per-user MFA you\'ll notice there are three different statuses. Disabled means the user isn\'t required to use per-user MFA. Next, enabled means the user is required to set up their MFA at the next login. Enforced means the user has set up the MFA.', depth: 0, inlineStyleRanges: [{offset: 68, style: 'BOLD', length: 8}, {length: 8, style: 'BOLD', offset: 134}, {offset: 208, style: 'BOLD', length: 9}], type: 'unstyled', entityRanges: []}, {entityRanges: [], key: '2q4g8', text: 'How to configure the settings in per-user MFA', type: 'header-three', data: {}, depth: 0, inlineStyleRanges: []}, {entityRanges: [{length: 1, key: 7, offset: 0}], type: 'atomic', inlineStyleRanges: [], key: 'crpdo', data: {}, depth: 0, text: ' '}, {text: 'One last thing. You can configure some options in the per-user MFA. By going to service settings you\'ll notice a whole list of options.', key: '3ujt1', data: {}, entityRanges: [], inlineStyleRanges: [], depth: 0, type: 'unstyled'}, {data: {}, inlineStyleRanges: [{length: 14, style: 'BOLD', offset: 0}], text: 'App passwords are a great way to allow legacy apps to continue to connect to Microsoft 365. In short, app passwords will replace the users\' passwords so they can still log in to Microsoft 365 using an app that doesn\'t support Microsoft 365 MFA.', entityRanges: [], depth: 0, type: 'unordered-list-item', key: 'ela4a'}, {entityRanges: [], inlineStyleRanges: [{length: 12, style: 'BOLD', offset: 0}], data: {}, depth: 0, text: 'Trusted IPs are a simple way to bypass MFA when the users are coming from a certain IP address.', key: '22g8s', type: 'unordered-list-item'}, {key: '5l92', data: {}, entityRanges: [], inlineStyleRanges: [{length: 20, style: 'BOLD', offset: 0}, {offset: 153, style: 'BOLD', length: 21}], type: 'unordered-list-item', text: 'Verification options are the options that a user can set up MFA. For example, if you don\'t want users to be able to receive text messages simply uncheck Text message to phone.', depth: 0}, {key: '2dotp', entityRanges: [], text: 'Allow users to remember will allow the users to not be prompted every time they need to re-authenticate from a device.', depth: 0, type: 'unordered-list-item', inlineStyleRanges: [{length: 23, offset: 0, style: 'BOLD'}], data: {}}, {data: {}, text: 'Conditional access policy', type: 'header-two', depth: 0, inlineStyleRanges: [], key: '8mghh', entityRanges: []}, {entityRanges: [], text: 'The last built-in choice is via conditional access policies. Conditional access policies provide the best security defaults as well as the best per-user MFA. With conditional access policies, you can deploy MFA to a user or a group of users, so you don\'t have to require MFA for all users as you do with security defaults. Also, you can configure conditional access policies to include all users or all administrators, so you don\'t need to remember to enable MFA for every new user as you need to do with per-user MFA.', data: {}, key: 'aj3p7', depth: 0, inlineStyleRanges: [], type: 'unstyled'}, {text: 'The one downside of conditional access policies is licensing. Conditional access policies are only available for azure SD premium P1 licensed users. Conditional access policies are also available to Microsoft 365 business premium users.', type: 'unstyled', inlineStyleRanges: [], depth: 0, data: {}, key: 'am59g', entityRanges: []}, {depth: 0, key: 'fb9eh', inlineStyleRanges: [], data: {}, type: 'header-three', entityRanges: [], text: 'How to enable MFA using conditional access policies'}, {inlineStyleRanges: [{style: 'BOLD', length: 12, offset: 51}, {length: 27, offset: 66, style: 'BOLD'}, {offset: 96, style: 'BOLD', length: 10}, {offset: 109, style: 'BOLD', length: 17}], data: {}, text: '1. log in to Azure Active Directory admin center > All services > Azure AD Conditional Access > New Policy > Create new policy.', depth: 0, key: 'crsit', type: 'unstyled', entityRanges: []}, {entityRanges: [{length: 1, key: 8, offset: 0}], depth: 0, inlineStyleRanges: [], key: 'ar1vp', text: ' ', data: {}, type: 'atomic'}, {entityRanges: [], depth: 0, inlineStyleRanges: [{offset: 20, length: 11, style: 'BOLD'}], type: 'unstyled', data: {}, text: '2. Enter a name of “Require MFA”', key: '8mpbh'}, {key: 'fveqj', text: ' ', data: {}, entityRanges: [{length: 1, key: 9, offset: 0}], type: 'atomic', inlineStyleRanges: [], depth: 0}, {entityRanges: [], type: 'unstyled', key: '713o9', inlineStyleRanges: [{style: 'BOLD', length: 39, offset: 9}, {offset: 56, length: 9, style: 'BOLD'}], depth: 0, data: {}, text: '3. Click 0 users or workload identities selected. Click All users.'}, {inlineStyleRanges: [], type: 'atomic', data: {}, depth: 0, key: 'a55eo', text: ' ', entityRanges: [{key: 10, offset: 0, length: 1}]}, {depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 59, offset: 9}, {style: 'BOLD', offset: 76, length: 14}], data: {}, text: '4. Click No cloud apps, actions, or authentication contexts selected. Click All cloud apps.', entityRanges: [], key: '1c2a', type: 'unstyled'}, {text: ' ', depth: 0, inlineStyleRanges: [], data: {}, entityRanges: [{key: 11, offset: 0, length: 1}], type: 'atomic', key: 'esojv'}, {depth: 0, data: {}, text: '5. Click 0 controls selected (under Grant). Click Require multi-factor authentication. Click Select. Click On (under Enable policy). Click Create.', type: 'unstyled', inlineStyleRanges: [{length: 19, offset: 9, style: 'BOLD'}, {length: 35, offset: 50, style: 'BOLD'}, {style: 'BOLD', length: 6, offset: 93}, {style: 'BOLD', length: 2, offset: 107}, {length: 6, offset: 139, style: 'BOLD'}], key: '62fgh', entityRanges: []}, {inlineStyleRanges: [], type: 'atomic', key: '1qkma', depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], data: {}, text: ' '}, {inlineStyleRanges: [], depth: 0, data: {}, type: 'header-two', key: '7p222', text: 'MFA Server', entityRanges: []}, {type: 'unstyled', entityRanges: [], key: '8u70p', depth: 0, text: 'Another possibility to deploy multifactor authentication in Microsoft 365 is to deploy an MFA server. MFA server would be an application that\'s installed on any Windows 2008 R two or later server that\'s joined to your domain. In short, you would download the MFA server installation files from Microsoft and install the software on your server. Then with a quick configuration, you can deploy your MFA server. As of July 1st, 2019 Microsoft, no longer offers an MFA server for new deployments. So, we won\'t be covering the installation or configuration in this guide.', data: {}, inlineStyleRanges: []}, {entityRanges: [], inlineStyleRanges: [], text: 'Third-party options', depth: 0, data: {}, key: '50guu', type: 'header-two'}, {type: 'unstyled', depth: 0, entityRanges: [], key: '954c2', data: {}, inlineStyleRanges: [], text: 'Microsoft has also configured Microsoft 365 so third-party vendors can offer multifactor authentication options. Several vendors sell software or cloud-only options that can tie into Microsoft 365 and provide you with multifactor authentication. Some of those vendors are one login and duo. They won\'t be covering the deployment of these options in this guide because they are not covered in the MS-500.'}, {depth: 0, key: '187ec', data: {}, inlineStyleRanges: [], text: 'User experience', entityRanges: [], type: 'header-two'}, {key: '89t8j', type: 'unstyled', data: {}, depth: 0, inlineStyleRanges: [], text: 'Once MFA is enabled for a user the user will see the following prompts (either in the browser or in Outlook).', entityRanges: []}, {entityRanges: [], data: {}, inlineStyleRanges: [{length: 4, style: 'BOLD', offset: 49}], type: 'unstyled', depth: 0, text: '1. On the More information required prompt click Next.', key: 'eljbq'}, {inlineStyleRanges: [], depth: 0, key: '5rhr2', type: 'atomic', text: ' ', entityRanges: [{key: 13, offset: 0, length: 1}], data: {}}, {data: {}, entityRanges: [], depth: 0, inlineStyleRanges: [], type: 'unstyled', key: '4r4i6', text: '2. On Keep your account secure / start by getting the app page download Microsoft Authenticator to your mobile phone and open the app.'}, {entityRanges: [{offset: 0, key: 14, length: 1}], key: 'emuso', text: ' ', depth: 0, data: {}, type: 'atomic', inlineStyleRanges: []}, {entityRanges: [], text: '3. Once in the app click I agree > Scan a QR code > While using the app.', inlineStyleRanges: [{style: 'BOLD', offset: 25, length: 8}, {length: 14, offset: 35, style: 'BOLD'}, {offset: 52, length: 19, style: 'BOLD'}], key: '1lre1', data: {}, depth: 0, type: 'unstyled'}, {entityRanges: [{length: 1, key: 15, offset: 0}], data: {}, inlineStyleRanges: [], type: 'atomic', depth: 0, text: ' ', key: 'e3llq'}, {key: '89t62', data: {}, text: '3. Then go back to the sign-in page and click Next.', entityRanges: [], type: 'unstyled', depth: 0, inlineStyleRanges: [{length: 4, offset: 46, style: 'BOLD'}]}, {entityRanges: [{length: 1, key: 16, offset: 0}], key: '52og6', type: 'atomic', text: ' ', depth: 0, data: {}, inlineStyleRanges: []}, {type: 'unstyled', entityRanges: [], data: {}, key: 'alog3', inlineStyleRanges: [{length: 4, style: 'BOLD', offset: 103}], text: '3. On Scan the QR code page scan the QR code with the Microsoft authenticator app on your phone. Click Next.', depth: 0}, {key: '9c51g', type: 'atomic', entityRanges: [{key: 17, length: 1, offset: 0}], text: ' ', depth: 0, data: {}, inlineStyleRanges: []}, {text: '4. Approve the sign-in request on your phone.', data: {}, type: 'unstyled', depth: 0, inlineStyleRanges: [], key: '1v56f', entityRanges: []}, {text: ' ', key: '3i1pp', depth: 0, type: 'atomic', entityRanges: [{offset: 0, key: 18, length: 1}], inlineStyleRanges: [], data: {}}, {key: '7r5bf', data: {}, type: 'unstyled', depth: 0, text: '5. Once you see the Notification approved message click Next.', inlineStyleRanges: [{offset: 56, length: 4, style: 'BOLD'}], entityRanges: []}, {entityRanges: [{key: 19, offset: 0, length: 1}], data: {}, key: 'aa6cs', text: ' ', inlineStyleRanges: [], depth: 0, type: 'atomic'}, {text: '6. on the Phone page, enter your cell phone number and click Next.', entityRanges: [], inlineStyleRanges: [{style: 'BOLD', length: 4, offset: 61}], depth: 0, type: 'unstyled', data: {}, key: '4vc6e'}, {key: '46bl0', type: 'atomic', data: {}, depth: 0, text: ' ', inlineStyleRanges: [], entityRanges: [{length: 1, key: 20, offset: 0}]}, {entityRanges: [], type: 'unstyled', inlineStyleRanges: [{offset: 61, length: 4, style: 'BOLD'}], key: 'i347', depth: 0, data: {}, text: '7. Enter the code texted to you in the space provided. Click Next.'}, {depth: 0, entityRanges: [{length: 1, offset: 0, key: 21}], data: {}, key: 'd6no4', inlineStyleRanges: [], text: ' ', type: 'atomic'}, {inlineStyleRanges: [{offset: 36, length: 4, style: 'BOLD'}], text: '8. Once you see SMS verified. Click Next.', data: {}, depth: 0, key: 'ahfi', entityRanges: [], type: 'unstyled'}, {type: 'atomic', key: '9bgtr', data: {}, inlineStyleRanges: [], entityRanges: [{key: 22, length: 1, offset: 0}], text: ' ', depth: 0}, {entityRanges: [], data: {}, key: '1ladh', inlineStyleRanges: [{style: 'BOLD', length: 4, offset: 29}], text: '9. On the success page click Done.', depth: 0, type: 'unstyled'}, {depth: 0, inlineStyleRanges: [], key: '7tiun', data: {}, entityRanges: [{offset: 0, key: 23, length: 1}], text: ' ', type: 'atomic'}, {key: '8akr6', depth: 0, entityRanges: [], inlineStyleRanges: [], data: {}, type: 'unstyled', text: ''}], entityMap: {0: {data: {targetOption: '_blank', src: 'https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Properties', alignment: 'left', width: 'auto', height: 'auto', alt: 'Microsoft 365 security defaults'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {width: 'auto', alt: 'Microsoft 365 security defaults', height: 'auto', src: 'https://i.ibb.co/P1P0wNY/microsoft-365-manage-security-defaults.png', targetOption: '_blank', alignment: 'none', url: 'https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx'}, type: 'LINK'}, 3: {mutability: 'MUTABLE', data: {height: 'auto', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/RjswM6n/per-user-mfa.png', alt: 'Microsoft 365 Per-User MFA'}, type: 'IMAGE'}, 4: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'none', src: 'https://i.ibb.co/PZm5KmW/enable-per-user-mfa.png', alt: 'Enable per-user MFA', height: 'auto', width: 'auto'}}, 5: {mutability: 'MUTABLE', data: {alignment: 'none', height: 'auto', alt: 'Enable multi-factor auth', width: 'auto', src: 'https://i.ibb.co/S7V5dtG/enable-per-user-mfa-last-button.png'}, type: 'IMAGE'}, 6: {data: {alignment: 'none', height: 'auto', alt: 'MFA Status in Microsoft 365', src: 'https://i.ibb.co/HTFhBzB/MFA-Status.png', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 7: {type: 'IMAGE', data: {height: 'auto', width: 'auto', alt: 'Per-User MFA Settings', src: 'https://i.ibb.co/gz1c3d2/per-user-mfa-settings.png', alignment: 'none'}, mutability: 'MUTABLE'}, 8: {type: 'IMAGE', data: {alt: 'Create a conditional access policy', src: 'https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png', width: 'auto', height: 'auto', alignment: 'none'}, mutability: 'MUTABLE'}, 9: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', src: 'https://i.ibb.co/qxDcS5y/name-conditional-access-policy.png', alt: 'Name the conditional access Policy Require MFA', width: 'auto', alignment: 'none'}}, 10: {data: {height: 'auto', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/12YyXpS/Set-Conditional-access-policy-to-all-users.png', alt: 'Set Conditional access policy to all users'}, type: 'IMAGE', mutability: 'MUTABLE'}, 11: {type: 'IMAGE', data: {src: 'https://i.ibb.co/T0vZjsW/conditional-access-policy-all-cloud-apps.png', alignment: 'none', alt: 'Conditional access policy all cloud apps', height: 'auto', width: 'auto'}, mutability: 'MUTABLE'}, 12: {data: {alt: 'Conditional access policy requiring MFA', alignment: 'none', src: 'https://i.ibb.co/mcCvKFG/conditional-access-policy-requiring-mfa.png', width: 'auto', height: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {type: 'IMAGE', mutability: 'MUTABLE', data: {src: 'https://i.ibb.co/gRrD5Pb/MFA-Enabled.png', width: 'auto', alignment: 'none', alt: 'MFA Enabled More information required', height: 'auto'}}, 14: {mutability: 'MUTABLE', data: {alignment: 'none', width: 'auto', src: 'https://i.ibb.co/MsS22gP/install-the-authenticator-app.png', height: 'auto', alt: 'Install the authentication app'}, type: 'IMAGE'}, 15: {type: 'IMAGE', mutability: 'MUTABLE', data: {src: 'https://i.ibb.co/vDYhfBd/Setup-authenticator-app.png', alt: 'Setup the authenticator app', width: 'auto', height: 'auto', alignment: 'none'}}, 16: {type: 'IMAGE', data: {alignment: 'none', alt: 'Keep you account secure page', src: 'https://i.ibb.co/xDMnv45/keep-your-account-secure-page.png', height: 'auto', width: 'auto'}, mutability: 'MUTABLE'}, 17: {data: {alignment: 'none', alt: 'Scan the QR code with your phone', src: 'https://i.ibb.co/gT5QZKt/scan-qr-code.png', width: 'auto', height: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {width: 'auto', src: 'https://i.ibb.co/YhvggFT/approve-sign-in.png', alt: 'Approve the sign in', height: 'auto', alignment: 'none'}, type: 'IMAGE', mutability: 'MUTABLE'}, 19: {mutability: 'MUTABLE', data: {alignment: 'none', height: 'auto', src: 'https://i.ibb.co/VjsxsJ4/notification-approved.png', width: 'auto', alt: 'Notification approved'}, type: 'IMAGE'}, 20: {data: {alt: 'Enter phone number to receive text message', width: 'auto', src: 'https://i.ibb.co/St4Fkrz/enter-phone-number-to-recieve-text-message.png', alignment: 'none', height: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 21: {data: {width: 'auto', alt: 'Enter the code you received in the text message', src: 'https://i.ibb.co/W6c37x4/enter-code-received-in-text-message.png', height: 'auto', alignment: 'none'}, type: 'IMAGE', mutability: 'MUTABLE'}, 22: {type: 'IMAGE', data: {height: 'auto', src: 'https://i.ibb.co/wQ44kFB/SMS-verified.png', width: 'auto', alignment: 'none', alt: 'SMS verified'}, mutability: 'MUTABLE'}, 23: {data: {alignment: 'none', alt: 'Click done', height: 'auto', width: 'auto', src: 'https://i.ibb.co/TbQvJDf/Click-done.png'}, type: 'IMAGE', mutability: 'MUTABLE'}}}, type: 'article'},
      nextContentSlug: 'Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr',
      previousContentSlug: 'Whats-a-conditional-access-policy-V1en9Iugh',
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
                <div><p>There are five, count it five, separate ways to configure multifactor authentication in Microsoft 365. In this article, we will go over three of them because one of them is no longer supported and one of them uses third-party tools that are out of scope for the MS-500.</p>
                  <h2>Security Defaults</h2>
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
