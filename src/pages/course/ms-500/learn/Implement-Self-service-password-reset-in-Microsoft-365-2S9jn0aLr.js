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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '99l3i', text: 'Self-service password reset (SSPR) is a possibility you\'re used to with other websites you log on to. For example, Gmail has a self-service password reset. In short, self-service password reset means a user that forgot their password can reset it without contacting an administrator. The user can authorize themselves in another fashion whether it\'s a text message using the Microsoft authenticator app or a phone call.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '50pag', text: 'While self-service password reset doesn\'t enhance the security of your Microsoft 365 tenant it does reduce the call volume to your help desk.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8st22', text: 'If you’re synchronizing your on-premises AD to Office 365 setting up a self-service password reset service isn\'t as easy as flipping a switch. The good thing about synchronizing your on-premises AD to Microsoft 365 and configuring a self-service password reset service is users can reset their on-premises AD password using the Microsoft 365 self-service portal. When configuring SSPR while you have AD connect configured Microsoft calls it password writeback. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '41prr', text: 'As I said earlier, configuring SSPR when synchronizing your user accounts from your on-premises AD isn\'t as easy as flipping a switch. First will need to configure the on-premises AD to allow Office 365 to reset the passwords. Then we all need to configure AD connect to allow users to reset their passwords. Finally, we’ll need to configure Microsoft 365 to allow users to reset their passwords.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8k2e0', text: 'License Requirements', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9a8g6', text: 'If you\'re configured with a Microsoft 365 cloud-only account, which means you\'re not using AD Connect to synchronize your on-premises AD to Office 365 then the self-service password reset it\'s free. If you are synchronizing your on-premises AD to Office 365 then you\'ll need an Azure AD Premium P1 license. Azure AD P1 licenses or included In Microsoft 365 business premium licensing. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '787je', text: 'Configuring on-premises AD to prepare for SSPR', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a2pog', text: 'First, will need to give the AD connect account permission to reset users’ passwords. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'as01e', text: '1. Log onto the server that has AD Connect installed.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 32, style: 'BOLD'}, {length: 36, offset: 49, style: 'BOLD'}, {length: 4, offset: 93, style: 'BOLD'}], key: 'cm2v', text: '2. Open Azure AD Connect. Click Configure. Click View or export current configuration. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '7oa1a', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 41, style: 'BOLD'}, {length: 7, offset: 68, style: 'BOLD'}], key: 'bpf5q', text: '3. Take note of the account listed under Synchronized Directories > Account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'eaf2b', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6nssr', text: '4. Exit the AD Connect wizard.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eqmv5', text: '5. Login onto a server that has Active Directory Users & Computers.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 52, style: 'BOLD'}, {length: 17, offset: 59, style: 'BOLD'}], key: '8prr3', text: '6. Open Active Directory Users and Computers. Click View > Advanced Features\n(if there is a checkbox next to Advanced Features then don’t click it.)', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '61qj6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 33, style: 'BOLD'}], key: 'es4f0', text: '7. Right-click the root domain > Properties.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bh42i', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 13, style: 'BOLD'}, {length: 8, offset: 28, style: 'BOLD'}], key: 'dt4np', text: '8. Click the Security tab > Advanced.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '4gdct', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}], key: '3o9fq', text: '9. Click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '3kdp8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 10, style: 'BOLD'}, {length: 2, offset: 94, style: 'BOLD'}], key: '86tnj', text: '10. Click Select a principal > enter the name of the account you found in step 3 above. Click OK.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '2fuu0', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 14, style: 'BOLD'}, {length: 23, offset: 46, style: 'BOLD'}], key: 'cm1cb', text: '11. Click the Applies to drop-down and select Descendant User Objects.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '7vgee', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 10, style: 'BOLD'}], key: 'cs4cg', text: '12. Click Reset password (located under Permissions).', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '2tt2j', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 19, style: 'BOLD'}], key: '7le94', text: '13. Find and check Write lockoutTime.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '8ulo2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 16, offset: 19, style: 'BOLD'}], key: '7rbqe', text: '14. Find and check Write pwdLastSet.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'f9uab', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 2, offset: 10, style: 'BOLD'}], key: 'ck07t', text: '15. Click OK.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 10, style: 'BOLD'}], key: 'en51p', text: '16. Click Add again.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: '7138s', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 10, style: 'BOLD'}, {length: 2, offset: 94, style: 'BOLD'}], key: '3ugq1', text: '17. Click Select a principal > enter the name of the account you found in step 3 above. Click OK.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '4k0t6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 10, style: 'BOLD'}, {length: 3, offset: 35, style: 'BOLD'}], key: 'cnlsr', text: '18. Click Unexpire password. Click OK until you’ve closed all the windows.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c7gbb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9ggf5', text: 'Configure password writeback in AD Connect', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '72hor', text: 'Next, we’ll need to enable password write-back in AD Connect.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7glma', text: '1. Logon to the AD Connect server.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1015m', text: '2. Double click Azure AD Connect.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}], key: '8mbnr', text: '3. Click Configure.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 33, offset: 9, style: 'BOLD'}, {length: 4, offset: 50, style: 'BOLD'}], key: '7hs6v', text: '4. Click Customize synchronization options. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '15hum', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 60, style: 'BOLD'}], key: 'anlrb', text: '5. Enter your Microsoft 365 global admin credentials. Click Next. If required, re-enter your credentials in the space provided.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fnde8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 47, style: 'BOLD'}], key: 'fma85', text: '6. On the Connect your directories page, click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 46, style: 'BOLD'}], key: '3a5g8', text: '7. On the Domain and OU filtering page, click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 40, style: 'BOLD'}, {length: 4, offset: 66, style: 'BOLD'}], key: 'a8ofi', text: '8. On the Optional features page, click Password writeback. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: 'btqoj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 41, style: 'BOLD'}], key: '63pq', text: '9. On the Ready to configure page, click Configure.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 57, style: 'BOLD'}], key: '77m03', text: '10. Wait until the configuration is complete. Then click Exit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e858h', text: 'Enable SSPR in Microsoft 365', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b3334', text: 'Lastly, we need to enable self-service password reset in Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 84, style: 'BOLD'}, {length: 14, offset: 109, style: 'BOLD'}], key: 'rl50', text: '1. Open Azure Active Directory admin center and login with a global admin account > Azure Active Directory > Password Reset.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: 'agdc8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}, {length: 4, offset: 48, style: 'BOLD'}], key: '3n121', text: '2. Click All to enable SSPR for everyone. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: '8lbs7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 23, offset: 9, style: 'BOLD'}, {length: 3, offset: 40, style: 'BOLD'}, {length: 4, offset: 108, style: 'BOLD'}], key: '6g0bn', text: '3. Go to on-premises integration. Click Yes under Write back passwords to your on-premises directory. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 1, offset: 0}], inlineStyleRanges: [], key: '354du', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5ipa8', text: 'Enable combined registration', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'di9m7', text: 'Enabling combined registration will mean users will only need to register a device once for a multifactor and self-service password reset. Without enabling combined registration users will need to add their cell phone twice. This feature is already enabled for new tenants. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fn0rf', text: '1. log in to Azure Active Directory admin center with global admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 9, style: 'BOLD'}, {length: 13, offset: 34, style: 'BOLD'}, {length: 28, offset: 50, style: 'BOLD'}], key: 'ec459', text: '2. Go to Azure Active Directory > User Settings > Manage user feature settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cea92', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}, {length: 4, offset: 98, style: 'BOLD'}], key: '9d0ia', text: '3. Click All under Users can use the combined security information registration experience. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 1, offset: 0}], inlineStyleRanges: [], key: '66k3g', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '57dca', text: 'Set authentication methods and harden security', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9u4mk', text: 'So now we\'ve configured self-service password reset but how do we harden the security? There is a couple of ways. First, let\'s jump into the authentication methods.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 82, style: 'BOLD'}, {length: 14, offset: 107, style: 'BOLD'}, {length: 22, offset: 124, style: 'BOLD'}], key: 'filnu', text: '1. Sign in to Azure Active Directory admin center with a global admin. Then go to Azure Active Directory > Password reset > Authentication methods.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 1, offset: 103, style: 'BOLD'}], key: '8c4v1', text: '2. If you want to require a user to have 2 methods of authentication when resetting the password click 2.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3r5pq', text: '3. If you want to allow the users to provide answers to security questions or an office phone to authenticate click the checkboxes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dh89s', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}], key: '9439q', text: '4. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b2u51', text: 'End-users experience setting up their own authentication methods', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1nd8d', text: 'Now self-service password reset is enabled for your tenant. How do users configure their authentication methods? It’s easy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cuc72', text: '1. Go to https://portal.office.com', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c80lc', text: '2. Login with their work credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4urts', text: '3. On the More information required page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3dt5v', text: '4. Enter your phone number in the space provided. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'boohp', text: '5. Enter the code that’s texted to you. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2hced', text: '6. Click Next > Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'am0b4', text: 'End-user experience resetting their passwords', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8l6f2', text: 'In this section, I\'ll explain the end-user experience of resetting their passwords. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 25, offset: 9}], inlineStyleRanges: [], key: '2c42q', text: '1. Go to https://portal.office.com ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 26, offset: 9, style: 'BOLD'}], key: '3uqvv', text: '2. Click Can’t access your account?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 24, length: 1, offset: 0}], inlineStyleRanges: [], key: '53qrh', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 9, style: 'BOLD'}], key: '85jjj', text: '3. Click Work or school account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 25, length: 1, offset: 0}], inlineStyleRanges: [], key: 'amp15', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 96, style: 'BOLD'}], key: '2ne0i', text: '4. Enter your username in the space provided. Fill out the CAPTCHA in the space provided. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 26, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dhlks', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 56, style: 'BOLD'}], key: 'd5bsi', text: '5. Enter your phone number in the space provided. Click Text.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 27, length: 1, offset: 0}], inlineStyleRanges: [], key: 'f0e7q', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 39, style: 'BOLD'}], key: 'ej3pr', text: '6. Enter the code texted to you. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 28, length: 1, offset: 0}], inlineStyleRanges: [], key: '6fgbb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 40, style: 'BOLD'}], key: 'drq70', text: '7. Enter your new password twice. Click Finish.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 29, length: 1, offset: 0}], inlineStyleRanges: [], key: 'p0sn', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 30, length: 77, offset: 53}], inlineStyleRanges: [], key: '6f977', text: 'There are a few more settings that can be changed in https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/  so be sure to take a look.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'View current AD connect settings', height: 'auto', src: 'https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'none', alt: 'MSOL Account', height: 'auto', src: 'https://i.ibb.co/LkCDyjm/MSOL-account.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Write pwdLastSet', height: 'auto', src: 'https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Add permissions in AD', height: 'auto', src: 'https://i.ibb.co/XVNpVjD/Add-Permissions.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Select a principal', height: 'auto', src: 'https://i.ibb.co/TT4PC9t/select-a-principal-ad.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Unexpire password', height: 'auto', src: 'https://i.ibb.co/yBsDWSF/unexpire-password.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Customize synchronization options', height: 'auto', src: 'https://i.ibb.co/SJvpG6h/customize-syncronization-options.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'AD Connect enter your global admin credentials', height: 'auto', src: 'https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {alignment: 'none', alt: 'Enable password write-back in AD Connect', height: 'auto', src: 'https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Password reset options in Microsoft 365', height: 'auto', src: 'https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'left', alt: 'Enable SSPR', height: 'auto', src: 'https://i.ibb.co/nLP24yX/enable-sspr.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alignment: 'none', alt: 'Write-back on-premises integration', height: 'auto', src: 'https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Enable Advanced features', height: 'auto', src: 'https://i.ibb.co/p4RPcvB/enable-advanced-features.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 20: {data: {alignment: 'none', alt: 'Microsoft 365 manage user feature settings', height: 'auto', src: 'https://i.ibb.co/cJLFytw/manage-user-feature-settings.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 21: {data: {alignment: 'none', alt: 'Microsoft 365 enabled combined features', height: 'auto', src: 'https://i.ibb.co/61QhNtN/enable-combined-features.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {data: {alignment: 'none', alt: 'Microsoft 365 password reset authentication methods', height: 'auto', src: 'https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 23: {data: {alignment: 'left', alt: 'Can\'t access your account? Microsoft 365', height: 'auto', src: 'https://i.ibb.co/mX8t7P0/cant-access-your-account.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 24: {data: {alignment: 'none', alt: 'Can\'t access your account? Microsoft 365', height: 'auto', src: 'https://i.ibb.co/mX8t7P0/cant-access-your-account.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 25: {data: {alignment: 'none', alt: 'Which type of account do you need help with?', height: 'auto', src: 'https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 26: {data: {alignment: 'none', alt: 'Get back into your account', height: 'auto', src: 'https://i.ibb.co/V3qmVYF/get-back-into-your-account.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 27: {data: {alignment: 'none', alt: 'Get back into your account text message', height: 'auto', src: 'https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 28: {data: {alignment: 'none', alt: 'Enter the code texted to you', height: 'auto', src: 'https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 29: {data: {alignment: 'none', alt: 'Choose a new password in SSPR for Microsoft 365', height: 'auto', src: 'https://i.ibb.co/T0TR946/choose-a-new-password.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Open AD properties', height: 'auto', src: 'https://i.ibb.co/HHD24wp/open-ad-properties.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 30: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {data: {alignment: 'none', alt: 'Open advanced properties', height: 'auto', src: 'https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Add permissions in AD', height: 'auto', src: 'https://i.ibb.co/XVNpVjD/Add-Permissions.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Select a principal', height: 'auto', src: 'https://i.ibb.co/TT4PC9t/select-a-principal-ad.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Select Descendant User Objects', height: 'auto', src: 'https://i.ibb.co/YTznr3c/descendant-user-objects.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Reset password permissions', height: 'auto', src: 'https://i.ibb.co/ch4C20T/reset-password.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Write lockoutTime', height: 'auto', src: 'https://i.ibb.co/JqLvsnC/write-lockouttime.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Self-service password reset in Microsoft 365 is a great way to empower users and decrease call volume to your IT help desk.', featuredImage: 'https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png', id: '2S9jn0aLr', images: ['https://i.ibb.co/T0TR946/choose-a-new-password.png', 'https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png', 'https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png', 'https://i.ibb.co/JRjc77D/enter-the-code.png', 'https://i.ibb.co/mX8t7P0/cant-access-your-account.png', 'https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png', 'https://i.ibb.co/V3qmVYF/get-back-into-your-account.png', 'https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png', 'https://i.ibb.co/cJLFytw/manage-user-feature-settings.png', 'https://i.ibb.co/61QhNtN/enable-combined-features.png', 'https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png', 'https://i.ibb.co/nLP24yX/enable-sspr.png', 'https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png', 'https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png', 'https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png', 'https://i.ibb.co/yBsDWSF/unexpire-password.png', 'https://i.ibb.co/SJvpG6h/customize-syncronization-options.png', 'https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png', 'https://i.ibb.co/JqLvsnC/write-lockouttime.png', 'https://i.ibb.co/ch4C20T/reset-password.png', 'https://i.ibb.co/YTznr3c/descendant-user-objects.png', 'https://i.ibb.co/TT4PC9t/select-a-principal-ad.png', 'https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png', 'https://i.ibb.co/TT4PC9t/select-a-principal-ad.png', 'https://i.ibb.co/XVNpVjD/Add-Permissions.png', 'https://i.ibb.co/XVNpVjD/Add-Permissions.png', 'https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png', 'https://i.ibb.co/HHD24wp/open-ad-properties.png', 'https://i.ibb.co/p4RPcvB/enable-advanced-features.png', 'https://i.ibb.co/LkCDyjm/MSOL-account.png', 'https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr', title: 'Implement Self-service password reset in Microsoft 365', type: 'article'},
      nextContentSlug: 'learn/Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC',
      previousContentSlug: 'test/configure-and-manage-multi-factor-authentication-mfa-yjeapbng4',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
    this.mountAds1()
    this.mountAds2()
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
                  <div id="ld-534-9587" />
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>Self-service password reset (SSPR) is a possibility you're used to with other websites you log on to. For example, Gmail has a self-service password reset. In short, self-service password reset means a user that forgot their password can reset it without contacting an administrator. The user can authorize themselves in another fashion whether it's a text message using the Microsoft authenticator app or a phone call.</p>
                    <p>While self-service password reset doesn't enhance the security of your Microsoft 365 tenant it does reduce the call volume to your help desk.</p>
                    <p>If you’re synchronizing your on-premises AD to Office 365 setting up a self-service password reset service isn't as easy as flipping a switch. The good thing about synchronizing your on-premises AD to Microsoft 365 and configuring a self-service password reset service is users can reset their on-premises AD password using the Microsoft 365 self-service portal. When configuring SSPR while you have AD connect configured Microsoft calls it password writeback.&nbsp;</p>
                    <p>As I said earlier, configuring SSPR when synchronizing your user accounts from your on-premises AD isn't as easy as flipping a switch. First will need to configure the on-premises AD to allow Office 365 to reset the passwords. Then we all need to configure AD connect to allow users to reset their passwords. Finally, we’ll need to configure Microsoft 365 to allow users to reset their passwords.</p>
                    <div id="ld-7740-2760" /><h2>License Requirements</h2>
                    <p>If you're configured with a Microsoft 365 cloud-only account, which means you're not using AD Connect to synchronize your on-premises AD to Office 365 then the self-service password reset it's free. If you are synchronizing your on-premises AD to Office 365 then you'll need an Azure AD Premium P1 license. Azure AD P1 licenses or included In Microsoft 365 business premium licensing.&nbsp;</p>
                    <h2>Configuring on-premises AD to prepare for SSPR</h2>
                    <p>First, will need to give the AD connect account permission to reset users’ passwords.&nbsp;</p>
                    <p>1. Log onto the server that has AD Connect installed.</p>
                    <p>2. Open Azure AD Connect. Click <strong>Configure</strong>. Click <strong>View or export current configuration</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png" alt="View current AD connect settings" style="height: auto;width: auto" /></div>
                    <p>3. Take note of the account listed under <strong>Synchronized Directories</strong> &gt; <strong>Account</strong>.</p>
                    <div ><img src="https://i.ibb.co/LkCDyjm/MSOL-account.png" alt="MSOL Account" style="height: auto;width: auto" /></div>
                    <p>4. Exit the AD Connect wizard.</p>
                    <p>5. Login onto a server that has Active Directory Users &amp; Computers.</p>
                    <p>6. Open Active Directory Users and Computers. Click <strong>View </strong>&gt; <strong>Advanced Features</strong><br />(if there is a checkbox next to Advanced Features then don’t click it.)</p>
                    <div ><img src="https://i.ibb.co/p4RPcvB/enable-advanced-features.png" alt="Enable Advanced features" style="height: auto;width: auto" /></div>
                    <p>7. Right-click the root domain &gt; <strong>Properties</strong>.</p>
                    <div ><img src="https://i.ibb.co/HHD24wp/open-ad-properties.png" alt="Open AD properties" style="height: auto;width: auto" /></div>
                    <p>8. Click the <strong>Security</strong> tab &gt; <strong>Advanced</strong>.</p>
                    <div ><img src="https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png" alt="Open advanced properties" style="height: auto;width: auto" /></div>
                    <p>9. Click <strong>Add</strong>.</p>
                    <div ><img src="https://i.ibb.co/XVNpVjD/Add-Permissions.png" alt="Add permissions in AD" style="height: auto;width: auto" /></div>
                    <p>10. Click <strong>Select a principal</strong> &gt; enter the name of the account you found in step 3 above. Click <strong>OK</strong>.</p>
                    <div ><img src="https://i.ibb.co/TT4PC9t/select-a-principal-ad.png" alt="Select a principal" style="height: auto;width: auto" /></div>
                    <p>11. Click the <strong>Applies to</strong> drop-down and select <strong>Descendant User Objects</strong>.</p>
                    <div ><img src="https://i.ibb.co/YTznr3c/descendant-user-objects.png" alt="Select Descendant User Objects" style="height: auto;width: auto" /></div>
                    <p>12. Click <strong>Reset password</strong> (located under Permissions).</p>
                    <div ><img src="https://i.ibb.co/ch4C20T/reset-password.png" alt="Reset password permissions" style="height: auto;width: auto" /></div>
                    <p>13. Find and check <strong>Write lockoutTime</strong>.</p>
                    <div ><img src="https://i.ibb.co/JqLvsnC/write-lockouttime.png" alt="Write lockoutTime" style="height: auto;width: auto" /></div>
                    <p>14. Find and check <strong>Write pwdLastSet</strong>.</p>
                    <div ><img src="https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png" alt="Write pwdLastSet" style="height: auto;width: auto" /></div>
                    <p>15. Click <strong>OK</strong>.</p>
                    <p>16. Click <strong>Add</strong> again.</p>
                    <div ><img src="https://i.ibb.co/XVNpVjD/Add-Permissions.png" alt="Add permissions in AD" style="height: auto;width: auto" /></div>
                    <p>17. Click <strong>Select a principal</strong> &gt; enter the name of the account you found in step 3 above. Click <strong>OK</strong>.</p>
                    <div ><img src="https://i.ibb.co/TT4PC9t/select-a-principal-ad.png" alt="Select a principal" style="height: auto;width: auto" /></div>
                    <p>18. Click <strong>Unexpire password</strong>. Click <strong>OK </strong>until you’ve closed all the windows.</p>
                    <div ><img src="https://i.ibb.co/yBsDWSF/unexpire-password.png" alt="Unexpire password" style="height: auto;width: auto" /></div>
                    <h2>Configure password writeback in AD Connect</h2>
                    <p>Next, we’ll need to enable password write-back in AD Connect.</p>
                    <p>1. Logon to the AD Connect server.</p>
                    <p>2. Double click Azure AD Connect.</p>
                    <p>3. Click <strong>Configure</strong>.</p>
                    <p>4. Click <strong>Customize synchronization options</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/SJvpG6h/customize-syncronization-options.png" alt="Customize synchronization options" style="height: auto;width: auto" /></div>
                    <p>5. Enter your Microsoft 365 global admin credentials. Click <strong>Next</strong>. If required, re-enter your credentials in the space provided.</p>
                    <div ><img src="https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png" alt="AD Connect enter your global admin credentials" style="height: auto;width: auto" /></div>
                    <p>6. On the Connect your directories page, click <strong>Next</strong>.</p>
                    <p>7. On the Domain and OU filtering page, click <strong>Next</strong>.</p>
                    <p>8. On the Optional features page, click <strong>Password writeback</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png" alt="Enable password write-back in AD Connect" style="height: auto;width: auto" /></div>
                    <p>9. On the Ready to configure page, click <strong>Configure</strong>.</p>
                    <p>10. Wait until the configuration is complete. Then click <strong>Exit</strong>.</p>
                    <h2>Enable SSPR in Microsoft 365</h2>
                    <p>Lastly, we need to enable self-service password reset in Microsoft 365.</p>
                    <p>1. Open Azure Active Directory admin center and login with a global admin account &gt; <strong>Azure Active Directory</strong> &gt; <strong>Password Reset</strong>.</p>
                    <div ><img src="https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png" alt="Password reset options in Microsoft 365" style="height: auto;width: auto" /></div>
                    <p>2. Click <strong>All </strong>to enable SSPR for everyone. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/nLP24yX/enable-sspr.png" alt="Enable SSPR" style="height: auto;width: auto" /></div>
                    <p>3. Go to <strong>on-premises integration</strong>. Click <strong>Yes</strong> under Write back passwords to your on-premises directory. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png" alt="Write-back on-premises integration" style="height: auto;width: auto" /></div>
                    <h2>Enable combined registration</h2>
                    <p>Enabling combined registration will mean users will only need to register a device once for a multifactor and self-service password reset. Without enabling combined registration users will need to add their cell phone twice. This feature is already enabled for new tenants.&nbsp;</p>
                    <p>1. log in to Azure Active Directory admin center with global admin credentials.</p>
                    <p>2. Go to <strong>Azure Active Directory</strong> &gt; <strong>User Settings</strong> &gt; <strong>Manage user feature settings</strong>.</p>
                    <div ><img src="https://i.ibb.co/cJLFytw/manage-user-feature-settings.png" alt="Microsoft 365 manage user feature settings" style="height: auto;width: auto" /></div>
                    <p>3. Click <strong>All</strong> under Users can use the combined security information registration experience. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/61QhNtN/enable-combined-features.png" alt="Microsoft 365 enabled combined features" style="height: auto;width: auto" /></div>
                    <h2>Set authentication methods and harden security</h2>
                    <p>So now we've configured self-service password reset but how do we harden the security? There is a couple of ways. First, let's jump into the authentication methods.</p>
                    <p>1. Sign in to Azure Active Directory admin center with a global admin. Then go to <strong>Azure Active Directory</strong> &gt; <strong>Password reset</strong> &gt; <strong>Authentication methods</strong>.</p>
                    <p>2. If you want to require a user to have 2 methods of authentication when resetting the password click <strong>2</strong>.</p>
                    <p>3. If you want to allow the users to provide answers to security questions or an office phone to authenticate click the checkboxes.</p>
                    <div ><img src="https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png" alt="Microsoft 365 password reset authentication methods" style="height: auto;width: auto" /></div>
                    <p>4. Click <strong>Save</strong>.</p>
                    <h2>End-users experience setting up their own authentication methods</h2>
                    <p>Now self-service password reset is enabled for your tenant. How do users configure their authentication methods? It’s easy.</p>
                    <p>1. Go to https://portal.office.com</p>
                    <p>2. Login with their work credentials.</p>
                    <p>3. On the More information required page click Next.</p>
                    <p>4. Enter your phone number in the space provided. Click Next.</p>
                    <p>5. Enter the code that’s texted to you. Click Next.</p>
                    <p>6. Click Next &gt; Done.</p>
                    <h2>End-user experience resetting their passwords</h2>
                    <p>In this section, I'll explain the end-user experience of resetting their passwords.&nbsp;</p>
                    <p>1. Go to <a href="https://portal.office.com" target="_blank" rel="noreferrer">https://portal.office.com</a>&nbsp;</p>
                    <p>2. Click <strong>Can’t access your account?</strong></p>
                    <div ><img src="https://i.ibb.co/mX8t7P0/cant-access-your-account.png" alt="Can't access your account? Microsoft 365" style="height: auto;width: auto" /></div>
                    <p>3. Click <strong>Work or school account</strong>.</p>
                    <div ><img src="https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png" alt="Which type of account do you need help with?" style="height: auto;width: auto" /></div>
                    <p>4. Enter your username in the space provided. Fill out the CAPTCHA in the space provided. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/V3qmVYF/get-back-into-your-account.png" alt="Get back into your account" style="height: auto;width: auto" /></div>
                    <p>5. Enter your phone number in the space provided. Click <strong>Text</strong>.</p>
                    <div ><img src="https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png" alt="Get back into your account text message" style="height: auto;width: auto" /></div>
                    <p>6. Enter the code texted to you. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png" alt="Enter the code texted to you" style="height: auto;width: auto" /></div>
                    <p>7. Enter your new password twice. Click <strong>Finish</strong>.</p>
                    <div ><img src="https://i.ibb.co/T0TR946/choose-a-new-password.png" alt="Choose a new password in SSPR for Microsoft 365" style="height: auto;width: auto" /></div>
                    <p>There are a few more settings that can be changed in <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/" target="_blank" rel="noreferrer">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/</a>  so be sure to take a look.</p>
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
