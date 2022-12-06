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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fv46l', text: 'We all know what passwords are and how important they are to keep secret but new research on when to expire passwords may surprise you.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b2nok', text: 'By default, passwords are set to never expire in Microsoft 365. Microsoft’s current research strongly shows that requiring passwords to be changed does more harm than good. They drive users to re-use passwords including updating old passwords in ways that are easily guessed and choose weaker passwords. Microsoft strongly recommends enabling multi-factor authentication. But either way, Microsoft has made it easy for you to set a password expiration policy in Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f8427', text: 'Setting passwords to expire in Microsoft 365', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8fov', text: 'To set your Microsoft 365 cloud-only accounts passwords to expire is easy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 26, offset: 82}], inlineStyleRanges: [{length: 26, offset: 6, style: 'BOLD'}, {length: 9, offset: 35, style: 'BOLD'}, {length: 12, offset: 46, style: 'BOLD'}, {length: 19, offset: 60, style: 'BOLD'}, {length: 27, offset: 82, style: 'BOLD'}], key: '5o46c', text: 'Go to Microsoft 365 admin center > Settings > Org settings > Security & privacy > Password expiration policy .', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 51, offset: 6, style: 'BOLD'}], key: '6iuqq', text: 'Click Set user passwords to expire after a number of days.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 28, offset: 8, style: 'BOLD'}, {length: 47, offset: 39, style: 'BOLD'}], key: '29v0s', text: 'Set the Days before passwords expire & Days before a user is notified about expiration.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 6, style: 'BOLD'}], key: '4r82e', text: 'Click Save.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'tguo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '98q2c', text: 'Setting passwords of synced users to expire in Microsoft 365', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3r3ih', text: 'If you followed the instructions above, you’ve now set all your cloud-only accounts passwords to expire but what about the synced accounts? Synced users are set to passwords never expire in Microsoft 365. That means the password synchronized to the cloud is still valid after the on-premises password expires, in other words, the user can continue to log in to Microsoft 365 using an expired password. If a user has a synchronized account and never touches the domain, they’ll be able to continue to sign in to Microsoft 365. So now let’s set the synced accounts passwords to expire.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 55, style: 'BOLD'}], key: 'bh0t1', text: 'Open PowerShell and connect to Microsoft 365 using the Connect-MsolService', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 94, offset: 6, style: 'BOLD'}], key: '16o28', text: 'Run  “Set-MsolDirSyncFeature -Feature EnforceCloudPasswordPolicyForPasswordSyncedUsers -Enable $true”', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 53, style: 'BOLD'}], key: '2rj3c', text: 'When prompted to continue with this operation? Click Yes.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '65k2a', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1diln', text: 'Resetting passwords for cloud-only users', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'la4q', text: 'Sometimes, users will forget their passwords. It happens. Microsoft offers two options To reset a cloud-only user\'s password: self-service password reset (SSPR) or an admin can reset the password for the user. To reset a password for a user perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 12, offset: 54}], inlineStyleRanges: [{length: 26, offset: 17, style: 'BOLD'}, {length: 6, offset: 46, style: 'BOLD'}, {length: 12, offset: 54, style: 'BOLD'}], key: '2ok09', text: '1. Log in to the Microsoft 365 admin center > Users > Active users. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9lea6', text: '2. Search for the user that needs their password reset and click on them.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}], key: '4ghi9', text: '3. Click Reset password.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '1jh0k', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 43, style: 'BOLD'}], key: '6kjs', text: '4. Select the options you want. Then click Reset password.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '4fobe', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 300, offset: 0, style: 'ITALIC'}], key: '1pr0i', text: 'Important note: The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles: Directory readers, Guest inviter, and Password administrator. Only Global admins can reset passwords for other administrators.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c7pu4', text: 'Password lockout', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '79k5q', text: 'Microsoft has created a smart lockout system that helps lock out bad actors that try to guess your users’ passwords or use some other type of brute force method. A smart lockout can detect if it’s a valid user attempting to log in to their account and treats them differently than attempts that come from attackers. Attackers will get locked out, while your users can continue to access Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6a1nr', text: 'When a user is locked out due to entering their password wrong too many times, they\'ll see the following message: “Your account is temporarily locked to prevent unauthorized use. Try again later, and if you still have trouble, contact your admin.”', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dbd4n', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4ea0m', text: 'How does smart lock work?', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ckvm8', text: 'By default, Microsoft 365 will lock out an account for one minute after 10 failed attempts (or 3 for US Government). The account will automatically lock again after each failed sign-in attempt for one minute or longer.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd27lf', text: 'Smart Lockout uses a familiar location vs an unfamiliar location to differentiate between a bad actor and a genuine user. Unfamiliar and familiar locations both have separate lockout counters.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3bl07', text: 'Smart lockout tracks the last three bad password hashes and won\'t increment the lockout counter for the same password. For example, let\'s say a user’s password was Password321! and recently changed their password to Password543!. Then the user attempts to log into their account using Password321! three times. That would only count as one attempt.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 176, offset: 0, style: 'ITALIC'}], key: 'bri7q', text: 'Note: This does not work if you are configured using pass-through authentication since the authentication is happening in your on-premises environment and not in Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 224, offset: 0, style: 'BOLD'}], key: 'aejaa', text: 'Important: Administrators can\'t unlock a user\'s account if they\'ve been locked out. The user must wait for the lockout duration to expire or they can use the self-service password reset (SSPR) from a trusted device/location.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aqctm', text: 'Editing the Password lockout settings', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'epbic', text: 'The password lockout settings are simple in Microsoft 365. From the password protection settings, you can set the lockout threshold, lockout duration in seconds, and configure a banned password list. The banned password list is a custom list of passwords that your users won\'t be able to use when setting their passwords.  To get to the settings follow the below instructions:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}], key: '735j2', text: '1. Go to Azure AD admin center and log in with admin credentials', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 9, style: 'BOLD'}, {length: 8, offset: 34, style: 'BOLD'}, {length: 22, offset: 45, style: 'BOLD'}], key: 'botfk', text: '2. Go to Azure Active Directory > Security > Authentication methods.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ac0eu', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 19, offset: 9}], inlineStyleRanges: [{length: 19, offset: 9, style: 'BOLD'}], key: 'foi4s', text: '3. Click Password protection. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 53, style: 'BOLD'}], key: '6s86i', text: '4. Update the password protection policies and click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cj793', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7bern', text: 'Self-service password reset', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '813f7', text: 'Now, I\'ve mentioned self-service password reset (SSPR) a couple of times so I thought I should explain. SSPR allows a user to reset their password without admin intervention. You\'ve used it before on websites. For example, if you forget your password for Twitter or another web application you can click a reset password button and it will email your password. The same thing can be set up for Microsoft 365. By default, it\'s disabled for your users and enabled for your admins, so let’s enable it for everyone.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 9, style: 'BOLD'}], key: '5i9d7', text: '1. Go to Azure AD and sign in with admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 14, offset: 34}], inlineStyleRanges: [{length: 22, offset: 9, style: 'BOLD'}, {length: 15, offset: 34, style: 'BOLD'}], key: '6mmbs', text: '2. Click Azure Active Directory > Password reset  (you may need to scroll down to see it).', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'foh56', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}, {length: 4, offset: 21, style: 'BOLD'}], key: '2fval', text: '3. Click All > click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: 'beuar', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ts1g', text: 'While you’re here you should check out the other options available.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a4n1v', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '71ppo', text: 'How do you block a user from signing into Microsoft 365 when they are locked out of on-premises AD?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eg1jo', text: 'Now that we understand the Microsoft 365 defaults and adjusting the settings what about synchronized users? What if we have our on-premises AD tuned to just how we like it, the correct amount of password attempts gets a user locked. How do we apply our on-premises password protection to all Microsoft 365 synced users?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fuqlu', text: 'The answer is easy, by having the users authenticate to the on-premises AD. Using Pass-through authentication every time a user wants to authenticate to your Microsoft 365 tenant they’ll have to authenticate to your on-premises environment. Then, the AD group policy will apply to their sign-ins.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c6ddj', text: '', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/Settings/SecurityPrivacy/:/Settings/L1/PasswordPolicy'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Set passwords to expire in Microsoft 365', height: 874, src: 'https://i.ibb.co/L8gHHXJ/set-password-to-expire-in-Microsoft-365.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users', width: 1910}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'left', alt: 'Open Password Reset options in Azure AD', height: 'auto', src: 'https://i.ibb.co/dfT6Mnj/open-password-reset-in-Azure-AD.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/Properties', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 11: {data: {alignment: 'none', alt: 'Open Password Reset options in Azure AD', height: 432, src: 'https://i.ibb.co/dfT6Mnj/open-password-reset-in-Azure-AD.png', width: 489}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Enable self service password reset', height: 271, src: 'https://i.ibb.co/x6TWRmW/enable-self-service-password-reset-in-Microsoft-365.png', width: 984}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Self-service password reset options in Microsoft 365', height: 600, src: 'https://i.ibb.co/DwLDNf2/self-service-password-reset-options.png', width: 260}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Set-MsolDirSyncFeature -Feature EnforceCloudPasswordPolicyForPasswordSyncedUsers', height: 177, src: 'https://i.ibb.co/Wf5HpMV/Set-Msol-Dir-Sync-Feature-Feature-Enforce-Cloud-Password-Policy-For-Password-Synced-Users.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users', width: 837}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'left', alt: 'Reset a Microsoft 365 cloud-only user\'s password', height: 'auto', src: 'https://i.ibb.co/sCkm61R/reset-a-Microsoft-365-cloud-only-user-s-password.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {data: {alignment: 'none', alt: 'Reset a Microsoft 365 cloud-only user\'s password', height: 829, src: 'https://i.ibb.co/sCkm61R/reset-a-Microsoft-365-cloud-only-user-s-password.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection', width: 1211}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Reset Microsoft 365 user password', height: 402, src: 'https://i.ibb.co/26hSJg8/reset-user-password.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection', width: 574}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Account is temporarily locked to prevent unauthorized use. Try again later, and if you still have trouble, contact your admin.', height: 341, src: 'https://i.ibb.co/027NY26/account-is-temporarily-locked.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection', width: 364}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Access smart lockout settings', height: 440, src: 'https://i.ibb.co/DLD4G4q/access-smart-lockout-settings.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection', width: 783}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'left', alt: 'Edit smart lock settings', height: 'auto', src: 'https://i.ibb.co/9tBh0pR/edit-smart-lockout-settings.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 9: {data: {alignment: 'none', alt: 'Edit smart lock settings', height: 575, src: 'https://i.ibb.co/9tBh0pR/edit-smart-lockout-settings.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/Properties', width: 889}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Password management in Microsoft 365: protection and ease of use. Simple to configure and simple to manage.', featuredImage: 'https://i.ibb.co/DLD4G4q/access-smart-lockout-settings.png', id: 'i9pJIjTNH', images: ['https://i.ibb.co/DLD4G4q/access-smart-lockout-settings.png', 'https://i.ibb.co/027NY26/account-is-temporarily-locked.png', 'https://i.ibb.co/9tBh0pR/edit-smart-lockout-settings.png', 'https://i.ibb.co/x6TWRmW/enable-self-service-password-reset-in-Microsoft-365.png', 'https://i.ibb.co/dfT6Mnj/open-password-reset-in-Azure-AD.png', 'https://i.ibb.co/sCkm61R/reset-a-Microsoft-365-cloud-only-user-s-password.png', 'https://i.ibb.co/26hSJg8/reset-user-password.png', 'https://i.ibb.co/DwLDNf2/self-service-password-reset-options.png', 'https://i.ibb.co/L8gHHXJ/set-password-to-expire-in-Microsoft-365.png', 'https://i.ibb.co/Wf5HpMV/Set-Msol-Dir-Sync-Feature-Feature-Enforce-Cloud-Password-Policy-For-Password-Synced-Users.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Protecting-Passwords-in-Microsoft-365-i9pJIjTNH', title: 'Protecting Passwords in Microsoft 365', type: 'article'},
      nextContentSlug: 'learn/Creating-and-managing-users-through-groups-S1hQgFOMV',
      previousContentSlug: 'learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1',
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
                  <div><p>We all know what passwords are and how important they are to keep secret but new research on when to expire passwords may surprise you.</p>
                    <p>By default, passwords are set to never expire in Microsoft 365. Microsoft’s current research strongly shows that requiring passwords to be changed does more harm than good. They drive users to re-use passwords including updating old passwords in ways that are easily guessed and choose weaker passwords. Microsoft strongly recommends enabling multi-factor authentication. But either way, Microsoft has made it easy for you to set a password expiration policy in Microsoft 365.</p>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>Setting passwords to expire in Microsoft 365</h2>
                    <p>To set your Microsoft 365 cloud-only accounts passwords to expire is easy.</p>
                    <ol>
                      <li>Go to <strong>Microsoft 365 admin center</strong> &gt; <strong>Settings </strong>&gt; <strong>Org settings</strong> &gt;<strong> Security &amp; privacy</strong> &gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/Settings/SecurityPrivacy/:/Settings/L1/PasswordPolicy" target="_blank" rel="noreferrer"><strong>Password expiration policy</strong></a><strong> </strong>.</li>
                      <li>Click <strong>Set user passwords to expire after a number of days</strong>.</li>
                      <li>Set the <strong>Days before passwords expire</strong> &amp; <strong>Days before a user is notified about expiration</strong>.</li>
                      <li>Click <strong>Save</strong>.</li>
                    </ol>
                    <div ><img src="https://i.ibb.co/L8gHHXJ/set-password-to-expire-in-Microsoft-365.png" alt="Set passwords to expire in Microsoft 365" height="874" width="1910" style="aspect-ratio: auto 1910 / 874; height: auto;" /></div>
                    <h2>Setting passwords of synced users to expire in Microsoft 365</h2>
                    <p>If you followed the instructions above, you’ve now set all your cloud-only accounts passwords to expire but what about the synced accounts? Synced users are set to passwords never expire in Microsoft 365. That means the password synchronized to the cloud is still valid after the on-premises password expires, in other words, the user can continue to log in to Microsoft 365 using an expired password. If a user has a synchronized account and never touches the domain, they’ll be able to continue to sign in to Microsoft 365. So now let’s set the synced accounts passwords to expire.</p>
                    <ol>
                      <li>Open PowerShell and connect to Microsoft 365 using the <strong>Connect-MsolService</strong></li>
                      <li>Run  “<strong>Set-MsolDirSyncFeature -Feature EnforceCloudPasswordPolicyForPasswordSyncedUsers -Enable $true</strong>”</li>
                      <li>When prompted to continue with this operation? Click <strong>Yes</strong>.</li>
                    </ol>
                    <div ><img src="https://i.ibb.co/Wf5HpMV/Set-Msol-Dir-Sync-Feature-Feature-Enforce-Cloud-Password-Policy-For-Password-Synced-Users.png" alt="Set-MsolDirSyncFeature -Feature EnforceCloudPasswordPolicyForPasswordSyncedUsers" height="177" width="837" style="aspect-ratio: auto 837 / 177; height: auto;" /></div>
                    <h2>Resetting passwords for cloud-only users</h2>
                    <p>Sometimes, users will forget their passwords. It happens. Microsoft offers two options To reset a cloud-only user's password: self-service password reset (SSPR) or an admin can reset the password for the user. To reset a password for a user perform the following:</p>
                    <p>1. Log in to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Users </strong>&gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noreferrer"><strong>Active users</strong></a>.&nbsp;</p>
                    <p>2. Search for the user that needs their password reset and click on them.</p>
                    <p>3. Click <strong>Reset password</strong>.</p>
                    <div ><img src="https://i.ibb.co/sCkm61R/reset-a-Microsoft-365-cloud-only-user-s-password.png" alt="Reset a Microsoft 365 cloud-only user's password" height="829" width="1211" style="aspect-ratio: auto 1211 / 829; height: auto;" /></div>
                    <p>4. Select the options you want. Then click <strong>Reset password</strong>.</p>
                    <div ><img src="https://i.ibb.co/26hSJg8/reset-user-password.png" alt="Reset Microsoft 365 user password" height="402" width="574" style="aspect-ratio: auto 574 / 402; height: auto;" /></div>
                    <p><em>Important note: The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles: Directory readers, Guest inviter, and Password administrator. Only Global admins can reset passwords for other administrators.</em></p>
                    <h2>Password lockout</h2>
                    <p>Microsoft has created a smart lockout system that helps lock out bad actors that try to guess your users’ passwords or use some other type of brute force method. A smart lockout can detect if it’s a valid user attempting to log in to their account and treats them differently than attempts that come from attackers. Attackers will get locked out, while your users can continue to access Microsoft 365.</p>
                    <p>When a user is locked out due to entering their password wrong too many times, they'll see the following message: “Your account is temporarily locked to prevent unauthorized use. Try again later, and if you still have trouble, contact your admin.”</p>
                    <div ><img src="https://i.ibb.co/027NY26/account-is-temporarily-locked.png" alt="Account is temporarily locked to prevent unauthorized use. Try again later, and if you still have trouble, contact your admin." height="341" width="364" style="aspect-ratio: auto 364 / 341; height: auto;" /></div>
                    <h3>How does smart lock work?</h3>
                    <p>By default, Microsoft 365 will lock out an account for one minute after 10 failed attempts (or 3 for US Government). The account will automatically lock again after each failed sign-in attempt for one minute or longer.</p>
                    <p>Smart Lockout uses a familiar location vs an unfamiliar location to differentiate between a bad actor and a genuine user. Unfamiliar and familiar locations both have separate lockout counters.</p>
                    <p>Smart lockout tracks the last three bad password hashes and won't increment the lockout counter for the same password. For example, let's say a user’s password was Password321! and recently changed their password to Password543!. Then the user attempts to log into their account using Password321! three times. That would only count as one attempt.</p>
                    <p><em>Note: This does not work if you are configured using pass-through authentication since the authentication is happening in your on-premises environment and not in Microsoft 365.</em></p>
                    <p><strong>Important: Administrators can't unlock a user's account if they've been locked out. The user must wait for the lockout duration to expire or they can use the self-service password reset (SSPR) from a trusted device/location.</strong></p>
                    <h3>Editing the Password lockout settings</h3>
                    <p>The password lockout settings are simple in Microsoft 365. From the password protection settings, you can set the lockout threshold, lockout duration in seconds, and configure a banned password list. The banned password list is a custom list of passwords that your users won't be able to use when setting their passwords.  To get to the settings follow the below instructions:</p>
                    <p>1. Go to <strong>Azure AD admin center</strong> and log in with admin credentials</p>
                    <p>2. Go to <strong>Azure Active Directory</strong> &gt; <strong>Security</strong> &gt; <strong>Authentication methods</strong>.</p>
                    <div ><img src="https://i.ibb.co/DLD4G4q/access-smart-lockout-settings.png" alt="Access smart lockout settings" height="440" width="783" style="aspect-ratio: auto 783 / 440; height: auto;" /></div>
                    <p>3. Click <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/PasswordProtection" target="_blank" rel="noreferrer"><strong>Password protection</strong></a>.&nbsp;</p>
                    <p>4. Update the password protection policies and click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/9tBh0pR/edit-smart-lockout-settings.png" alt="Edit smart lock settings" height="575" width="889" style="aspect-ratio: auto 889 / 575; height: auto;" /></div>
                    <h2>Self-service password reset</h2>
                    <p>Now, I've mentioned self-service password reset (SSPR) a couple of times so I thought I should explain. SSPR allows a user to reset their password without admin intervention. You've used it before on websites. For example, if you forget your password for Twitter or another web application you can click a reset password button and it will email your password. The same thing can be set up for Microsoft 365. By default, it's disabled for your users and enabled for your admins, so let’s enable it for everyone.</p>
                    <p>1. Go to <strong>Azure AD</strong> and sign in with admin credentials.</p>
                    <p>2. Click <strong>Azure Active Directory</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/Properties" target="_blank" rel="noreferrer"><strong>Password reset</strong></a><strong> </strong> (you may need to scroll down to see it).</p>
                    <div ><img src="https://i.ibb.co/dfT6Mnj/open-password-reset-in-Azure-AD.png" alt="Open Password Reset options in Azure AD" height="432" width="489" style="aspect-ratio: auto 489 / 432; height: auto;" /></div>
                    <p>3. Click <strong>All </strong>&gt; click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/x6TWRmW/enable-self-service-password-reset-in-Microsoft-365.png" alt="Enable self service password reset" height="271" width="984" style="aspect-ratio: auto 984 / 271; height: auto;" /></div>
                    <p>While you’re here you should check out the other options available.</p>
                    <div ><img src="https://i.ibb.co/DwLDNf2/self-service-password-reset-options.png" alt="Self-service password reset options in Microsoft 365" height="600" width="260" style="aspect-ratio: auto 260 / 600; height: auto;" /></div>
                    <h2>How do you block a user from signing into Microsoft 365 when they are locked out of on-premises AD?</h2>
                    <p>Now that we understand the Microsoft 365 defaults and adjusting the settings what about synchronized users? What if we have our on-premises AD tuned to just how we like it, the correct amount of password attempts gets a user locked. How do we apply our on-premises password protection to all Microsoft 365 synced users?</p>
                    <p>The answer is easy, by having the users authenticate to the on-premises AD. Using Pass-through authentication every time a user wants to authenticate to your Microsoft 365 tenant they’ll have to authenticate to your on-premises environment. Then, the AD group policy will apply to their sign-ins.</p>
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
