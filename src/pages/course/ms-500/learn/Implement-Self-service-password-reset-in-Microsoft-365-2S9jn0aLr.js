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
      path: '/course/ms-500/learn/Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr',
      article: {"description":"Self-service password reset in Microsoft 365 is a great way to empower users and decrease call volume to your IT help desk.","featuredImage":"https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png","id":"2S9jn0aLr","images":["https://i.ibb.co/T0TR946/choose-a-new-password.png","https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png","https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png","https://i.ibb.co/JRjc77D/enter-the-code.png","https://i.ibb.co/mX8t7P0/cant-access-your-account.png","https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png","https://i.ibb.co/V3qmVYF/get-back-into-your-account.png","https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png","https://i.ibb.co/cJLFytw/manage-user-feature-settings.png","https://i.ibb.co/61QhNtN/enable-combined-features.png","https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png","https://i.ibb.co/nLP24yX/enable-sspr.png","https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png","https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png","https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png","https://i.ibb.co/yBsDWSF/unexpire-password.png","https://i.ibb.co/SJvpG6h/customize-syncronization-options.png","https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png","https://i.ibb.co/JqLvsnC/write-lockouttime.png","https://i.ibb.co/ch4C20T/reset-password.png","https://i.ibb.co/YTznr3c/descendant-user-objects.png","https://i.ibb.co/TT4PC9t/select-a-principal-ad.png","https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png","https://i.ibb.co/TT4PC9t/select-a-principal-ad.png","https://i.ibb.co/XVNpVjD/Add-Permissions.png","https://i.ibb.co/XVNpVjD/Add-Permissions.png","https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png","https://i.ibb.co/HHD24wp/open-ad-properties.png","https://i.ibb.co/p4RPcvB/enable-advanced-features.png","https://i.ibb.co/LkCDyjm/MSOL-account.png","https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png"],"datePublished":"2022/5/26","publish":true,"slug":"Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr","type":"article","title":"Implement Self-service password reset in Microsoft 365","article":{"entityMap":{"0":{"data":{"width":"auto","alt":"View current AD connect settings","targetOption":"_blank","height":"auto","url":"https://portal.office.com","src":"https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png","alignment":"none"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"type":"IMAGE","data":{"alignment":"none","targetOption":"_blank","width":"auto","height":"auto","src":"https://i.ibb.co/LkCDyjm/MSOL-account.png","alt":"MSOL Account","url":"https://portal.office.com"},"mutability":"MUTABLE"},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/p4RPcvB/enable-advanced-features.png","targetOption":"_blank","alt":"Enable Advanced features","width":"auto","alignment":"none","url":"https://portal.office.com"}},"3":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Open AD properties","targetOption":"_blank","alignment":"none","src":"https://i.ibb.co/HHD24wp/open-ad-properties.png","height":"auto","width":"auto","url":"https://portal.office.com"}},"4":{"mutability":"MUTABLE","data":{"url":"https://portal.office.com","targetOption":"_blank","alt":"Open advanced properties","width":"auto","height":"auto","alignment":"none","src":"https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png"},"type":"IMAGE"},"5":{"mutability":"MUTABLE","data":{"alt":"Add permissions in AD","src":"https://i.ibb.co/XVNpVjD/Add-Permissions.png","url":"https://portal.office.com","alignment":"none","height":"auto","width":"auto","targetOption":"_blank"},"type":"IMAGE"},"6":{"type":"IMAGE","mutability":"MUTABLE","data":{"targetOption":"_blank","src":"https://i.ibb.co/TT4PC9t/select-a-principal-ad.png","alt":"Select a principal","width":"auto","alignment":"none","height":"auto","url":"https://portal.office.com"}},"7":{"data":{"url":"https://portal.office.com","src":"https://i.ibb.co/YTznr3c/descendant-user-objects.png","alignment":"none","height":"auto","alt":"Select Descendant User Objects","width":"auto","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","url":"https://portal.office.com","targetOption":"_blank","width":"auto","src":"https://i.ibb.co/ch4C20T/reset-password.png","alignment":"none","alt":"Reset password permissions"}},"9":{"mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/JqLvsnC/write-lockouttime.png","targetOption":"_blank","url":"https://portal.office.com","height":"auto","alt":"Write lockoutTime","alignment":"none"},"type":"IMAGE"},"10":{"type":"IMAGE","data":{"alt":"Write pwdLastSet","alignment":"none","src":"https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png","url":"https://portal.office.com","height":"auto","width":"auto","targetOption":"_blank"},"mutability":"MUTABLE"},"11":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","width":"auto","alt":"Add permissions in AD","src":"https://i.ibb.co/XVNpVjD/Add-Permissions.png","url":"https://portal.office.com","height":"auto","targetOption":"_blank"}},"12":{"data":{"targetOption":"_blank","src":"https://i.ibb.co/TT4PC9t/select-a-principal-ad.png","url":"https://portal.office.com","alt":"Select a principal","width":"auto","height":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"13":{"mutability":"MUTABLE","type":"IMAGE","data":{"src":"https://i.ibb.co/yBsDWSF/unexpire-password.png","alignment":"none","height":"auto","targetOption":"_blank","alt":"Unexpire password","url":"https://portal.office.com","width":"auto"}},"14":{"data":{"url":"https://portal.office.com","targetOption":"_blank","width":"auto","alignment":"none","height":"auto","src":"https://i.ibb.co/SJvpG6h/customize-syncronization-options.png","alt":"Customize synchronization options"},"type":"IMAGE","mutability":"MUTABLE"},"15":{"type":"IMAGE","data":{"targetOption":"_blank","height":"auto","url":"https://portal.office.com","alignment":"none","src":"https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png","alt":"AD Connect enter your global admin credentials","width":"auto"},"mutability":"MUTABLE"},"16":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png","width":"auto","height":"auto","alignment":"none","alt":"Enable password write-back in AD Connect","targetOption":"_blank","url":"https://portal.office.com"},"type":"IMAGE"},"17":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png","width":"auto","alignment":"none","targetOption":"_blank","alt":"Password reset options in Microsoft 365","height":"auto","url":"https://portal.office.com"},"type":"IMAGE"},"18":{"mutability":"MUTABLE","data":{"width":"auto","alignment":"left","url":"https://portal.office.com","targetOption":"_blank","src":"https://i.ibb.co/nLP24yX/enable-sspr.png","height":"auto","alt":"Enable SSPR"},"type":"IMAGE"},"19":{"data":{"src":"https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png","alt":"Write-back on-premises integration","url":"https://portal.office.com","height":"auto","width":"auto","alignment":"none","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"20":{"data":{"width":"auto","url":"https://portal.office.com","alignment":"none","targetOption":"_blank","src":"https://i.ibb.co/cJLFytw/manage-user-feature-settings.png","height":"auto","alt":"Microsoft 365 manage user feature settings"},"type":"IMAGE","mutability":"MUTABLE"},"21":{"data":{"targetOption":"_blank","src":"https://i.ibb.co/61QhNtN/enable-combined-features.png","url":"https://portal.office.com","width":"auto","alt":"Microsoft 365 enabled combined features","height":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"22":{"data":{"alignment":"none","src":"https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png","width":"auto","url":"https://portal.office.com","alt":"Microsoft 365 password reset authentication methods","height":"auto","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"23":{"data":{"alignment":"left","targetOption":"_blank","height":"auto","src":"https://i.ibb.co/mX8t7P0/cant-access-your-account.png","alt":"Can't access your account? Microsoft 365","width":"auto","url":"https://portal.office.com"},"type":"LINK","mutability":"MUTABLE"},"24":{"mutability":"MUTABLE","data":{"alignment":"none","targetOption":"_blank","height":"auto","width":"auto","src":"https://i.ibb.co/mX8t7P0/cant-access-your-account.png","alt":"Can't access your account? Microsoft 365","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/"},"type":"IMAGE"},"25":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Which type of account do you need help with?","width":"auto","src":"https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","alignment":"none","height":"auto","targetOption":"_blank"}},"26":{"mutability":"MUTABLE","data":{"alt":"Get back into your account","alignment":"none","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","width":"auto","targetOption":"_blank","height":"auto","src":"https://i.ibb.co/V3qmVYF/get-back-into-your-account.png"},"type":"IMAGE"},"27":{"data":{"alignment":"none","width":"auto","alt":"Get back into your account text message","height":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","targetOption":"_blank","src":"https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png"},"type":"IMAGE","mutability":"MUTABLE"},"28":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png","width":"auto","alignment":"none","height":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","alt":"Enter the code texted to you","targetOption":"_blank"},"type":"IMAGE"},"29":{"mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","height":"auto","alignment":"none","alt":"Choose a new password in SSPR for Microsoft 365","targetOption":"_blank","width":"auto","src":"https://i.ibb.co/T0TR946/choose-a-new-password.png"},"type":"IMAGE"},"30":{"mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","targetOption":"_blank"},"type":"LINK"}},"blocks":[{"entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[],"type":"unstyled","key":"99l3i","text":"Self-service password reset (SSPR) is a possibility you're used to with other websites you log on to. For example, Gmail has a self-service password reset. In short, self-service password reset means a user that forgot their password can reset it without contacting an administrator. The user can authorize themselves in another fashion whether it's a text message using the Microsoft authenticator app or a phone call."},{"entityRanges":[],"type":"unstyled","text":"While self-service password reset doesn't enhance the security of your Microsoft 365 tenant it does reduce the call volume to your help desk.","data":{},"inlineStyleRanges":[],"key":"50pag","depth":0},{"depth":0,"inlineStyleRanges":[],"text":"If you’re synchronizing your on-premises AD to Office 365 setting up a self-service password reset service isn't as easy as flipping a switch. The good thing about synchronizing your on-premises AD to Microsoft 365 and configuring a self-service password reset service is users can reset their on-premises AD password using the Microsoft 365 self-service portal. When configuring SSPR while you have AD connect configured Microsoft calls it password writeback. ","key":"8st22","data":{},"type":"unstyled","entityRanges":[]},{"key":"41prr","entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[],"text":"As I said earlier, configuring SSPR when synchronizing your user accounts from your on-premises AD isn't as easy as flipping a switch. First will need to configure the on-premises AD to allow Office 365 to reset the passwords. Then we all need to configure AD connect to allow users to reset their passwords. Finally, we’ll need to configure Microsoft 365 to allow users to reset their passwords.","data":{}},{"key":"8k2e0","inlineStyleRanges":[],"type":"header-two","text":"License Requirements","depth":0,"entityRanges":[],"data":{}},{"depth":0,"text":"If you're configured with a Microsoft 365 cloud-only account, which means you're not using AD Connect to synchronize your on-premises AD to Office 365 then the self-service password reset it's free. If you are synchronizing your on-premises AD to Office 365 then you'll need an Azure AD Premium P1 license. Azure AD P1 licenses or included In Microsoft 365 business premium licensing. ","type":"unstyled","data":{},"inlineStyleRanges":[],"key":"9a8g6","entityRanges":[]},{"text":"Configuring on-premises AD to prepare for SSPR","inlineStyleRanges":[],"type":"header-two","entityRanges":[],"data":{},"depth":0,"key":"787je"},{"text":"First, will need to give the AD connect account permission to reset users’ passwords. ","inlineStyleRanges":[],"key":"a2pog","type":"unstyled","entityRanges":[],"depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[],"text":"1. Log onto the server that has AD Connect installed.","entityRanges":[],"data":{},"key":"as01e","type":"unstyled"},{"key":"cm2v","entityRanges":[],"data":{},"text":"2. Open Azure AD Connect. Click Configure. Click View or export current configuration. Click Next.","type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":9,"offset":32},{"offset":49,"style":"BOLD","length":36},{"style":"BOLD","length":4,"offset":93}]},{"key":"7oa1a","type":"atomic","inlineStyleRanges":[],"entityRanges":[{"key":0,"length":1,"offset":0}],"depth":0,"data":{},"text":" "},{"text":"3. Take note of the account listed under Synchronized Directories > Account.","type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"offset":41,"style":"BOLD","length":24},{"style":"BOLD","offset":68,"length":7}],"depth":0,"data":{},"key":"bpf5q"},{"key":"eaf2b","inlineStyleRanges":[],"depth":0,"data":{},"entityRanges":[{"offset":0,"key":1,"length":1}],"type":"atomic","text":" "},{"depth":0,"entityRanges":[],"type":"unstyled","data":{},"inlineStyleRanges":[],"text":"4. Exit the AD Connect wizard.","key":"6nssr"},{"type":"unstyled","key":"eqmv5","inlineStyleRanges":[],"text":"5. Login onto a server that has Active Directory Users & Computers.","entityRanges":[],"depth":0,"data":{}},{"entityRanges":[],"inlineStyleRanges":[{"length":5,"offset":52,"style":"BOLD"},{"offset":59,"style":"BOLD","length":17}],"depth":0,"key":"8prr3","text":"6. Open Active Directory Users and Computers. Click View > Advanced Features\n(if there is a checkbox next to Advanced Features then don’t click it.)","data":{},"type":"unstyled"},{"key":"61qj6","depth":0,"text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"key":2,"offset":0}],"data":{},"type":"atomic"},{"text":"7. Right-click the root domain > Properties.","depth":0,"data":{},"entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"length":10,"offset":33,"style":"BOLD"}],"key":"es4f0"},{"data":{},"entityRanges":[{"length":1,"key":3,"offset":0}],"depth":0,"key":"bh42i","type":"atomic","inlineStyleRanges":[],"text":" "},{"entityRanges":[],"data":{},"text":"8. Click the Security tab > Advanced.","inlineStyleRanges":[{"style":"BOLD","offset":13,"length":8},{"length":8,"offset":28,"style":"BOLD"}],"type":"unstyled","key":"dt4np","depth":0},{"text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"data":{},"key":"4gdct","entityRanges":[{"offset":0,"key":4,"length":1}]},{"type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","length":3,"offset":9}],"key":"3o9fq","entityRanges":[],"text":"9. Click Add."},{"key":"3kdp8","data":{},"type":"atomic","text":" ","inlineStyleRanges":[],"entityRanges":[{"key":5,"length":1,"offset":0}],"depth":0},{"text":"10. Click Select a principal > enter the name of the account you found in step 3 above. Click OK.","type":"unstyled","key":"86tnj","depth":0,"data":{},"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":10,"length":18},{"offset":94,"style":"BOLD","length":2}]},{"text":" ","key":"2fuu0","depth":0,"type":"atomic","data":{},"entityRanges":[{"key":6,"offset":0,"length":1}],"inlineStyleRanges":[]},{"entityRanges":[],"type":"unstyled","key":"cm1cb","data":{},"depth":0,"inlineStyleRanges":[{"length":10,"style":"BOLD","offset":14},{"length":23,"offset":46,"style":"BOLD"}],"text":"11. Click the Applies to drop-down and select Descendant User Objects."},{"entityRanges":[{"key":7,"offset":0,"length":1}],"type":"atomic","inlineStyleRanges":[],"key":"7vgee","depth":0,"text":" ","data":{}},{"key":"cs4cg","data":{},"depth":0,"text":"12. Click Reset password (located under Permissions).","entityRanges":[],"inlineStyleRanges":[{"length":14,"offset":10,"style":"BOLD"}],"type":"unstyled"},{"type":"atomic","depth":0,"data":{},"text":" ","key":"2tt2j","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":8,"length":1}]},{"key":"7le94","inlineStyleRanges":[{"offset":19,"style":"BOLD","length":17}],"type":"unstyled","text":"13. Find and check Write lockoutTime.","depth":0,"entityRanges":[],"data":{}},{"entityRanges":[{"key":9,"offset":0,"length":1}],"type":"atomic","key":"8ulo2","depth":0,"data":{},"text":" ","inlineStyleRanges":[]},{"text":"14. Find and check Write pwdLastSet.","data":{},"key":"7rbqe","entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"offset":19,"style":"BOLD","length":16}],"depth":0},{"inlineStyleRanges":[],"text":" ","depth":0,"data":{},"entityRanges":[{"offset":0,"key":10,"length":1}],"key":"f9uab","type":"atomic"},{"data":{},"key":"ck07t","inlineStyleRanges":[{"style":"BOLD","offset":10,"length":2}],"entityRanges":[],"text":"15. Click OK.","depth":0,"type":"unstyled"},{"inlineStyleRanges":[{"offset":10,"style":"BOLD","length":3}],"key":"en51p","depth":0,"entityRanges":[],"type":"unstyled","data":{},"text":"16. Click Add again."},{"depth":0,"entityRanges":[{"length":1,"key":11,"offset":0}],"type":"atomic","text":" ","key":"7138s","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"key":"3ugq1","inlineStyleRanges":[{"style":"BOLD","offset":10,"length":18},{"offset":94,"style":"BOLD","length":2}],"depth":0,"text":"17. Click Select a principal > enter the name of the account you found in step 3 above. Click OK.","type":"unstyled","data":{}},{"depth":0,"entityRanges":[{"offset":0,"length":1,"key":12}],"data":{},"type":"atomic","inlineStyleRanges":[],"key":"4k0t6","text":" "},{"depth":0,"inlineStyleRanges":[{"offset":10,"style":"BOLD","length":17},{"offset":35,"style":"BOLD","length":3}],"text":"18. Click Unexpire password. Click OK until you’ve closed all the windows.","type":"unstyled","key":"cnlsr","entityRanges":[],"data":{}},{"depth":0,"key":"c7gbb","type":"atomic","inlineStyleRanges":[],"data":{},"text":" ","entityRanges":[{"length":1,"offset":0,"key":13}]},{"key":"9ggf5","text":"Configure password writeback in AD Connect","depth":0,"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"data":{}},{"key":"72hor","entityRanges":[],"data":{},"inlineStyleRanges":[],"depth":0,"text":"Next, we’ll need to enable password write-back in AD Connect.","type":"unstyled"},{"depth":0,"type":"unstyled","key":"7glma","text":"1. Logon to the AD Connect server.","entityRanges":[],"inlineStyleRanges":[],"data":{}},{"depth":0,"data":{},"key":"1015m","entityRanges":[],"text":"2. Double click Azure AD Connect.","type":"unstyled","inlineStyleRanges":[]},{"depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","length":9,"offset":9}],"type":"unstyled","entityRanges":[],"key":"8mbnr","text":"3. Click Configure."},{"key":"7hs6v","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":33},{"offset":50,"style":"BOLD","length":4}],"text":"4. Click Customize synchronization options. Click Next.","depth":0,"type":"unstyled","entityRanges":[],"data":{}},{"data":{},"key":"15hum","inlineStyleRanges":[],"entityRanges":[{"key":14,"length":1,"offset":0}],"depth":0,"text":" ","type":"atomic"},{"data":{},"entityRanges":[],"type":"unstyled","depth":0,"text":"5. Enter your Microsoft 365 global admin credentials. Click Next. If required, re-enter your credentials in the space provided.","inlineStyleRanges":[{"offset":60,"style":"BOLD","length":4}],"key":"anlrb"},{"data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":15,"length":1}],"type":"atomic","key":"fnde8","text":" "},{"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":47}],"depth":0,"type":"unstyled","data":{},"key":"fma85","entityRanges":[],"text":"6. On the Connect your directories page, click Next."},{"type":"unstyled","depth":0,"text":"7. On the Domain and OU filtering page, click Next.","key":"3a5g8","data":{},"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":46}],"entityRanges":[]},{"entityRanges":[],"data":{},"key":"a8ofi","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":18,"offset":40},{"length":4,"style":"BOLD","offset":66}],"text":"8. On the Optional features page, click Password writeback. Click Next.","type":"unstyled"},{"type":"atomic","depth":0,"data":{},"entityRanges":[{"key":16,"length":1,"offset":0}],"text":" ","key":"btqoj","inlineStyleRanges":[]},{"text":"9. On the Ready to configure page, click Configure.","entityRanges":[],"type":"unstyled","key":"63pq","data":{},"depth":0,"inlineStyleRanges":[{"length":9,"style":"BOLD","offset":41}]},{"data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":57,"length":4}],"entityRanges":[],"text":"10. Wait until the configuration is complete. Then click Exit.","key":"77m03"},{"inlineStyleRanges":[],"key":"e858h","entityRanges":[],"depth":0,"type":"header-two","data":{},"text":"Enable SSPR in Microsoft 365"},{"text":"Lastly, we need to enable self-service password reset in Microsoft 365.","depth":0,"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"key":"b3334","data":{}},{"key":"rl50","text":"1. Open Azure Active Directory admin center and login with a global admin account > Azure Active Directory > Password Reset.","entityRanges":[],"depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[{"length":22,"offset":84,"style":"BOLD"},{"length":14,"offset":109,"style":"BOLD"}]},{"entityRanges":[{"key":17,"length":1,"offset":0}],"type":"atomic","key":"agdc8","text":" ","depth":0,"data":{},"inlineStyleRanges":[]},{"key":"3n121","inlineStyleRanges":[{"offset":9,"length":4,"style":"BOLD"},{"offset":48,"style":"BOLD","length":4}],"depth":0,"entityRanges":[],"text":"2. Click All to enable SSPR for everyone. Click Save.","type":"unstyled","data":{}},{"key":"8lbs7","text":" ","data":{},"entityRanges":[{"key":18,"length":1,"offset":0}],"depth":0,"type":"atomic","inlineStyleRanges":[]},{"entityRanges":[],"key":"6g0bn","depth":0,"data":{},"text":"3. Go to on-premises integration. Click Yes under Write back passwords to your on-premises directory. Click Save.","inlineStyleRanges":[{"length":23,"style":"BOLD","offset":9},{"style":"BOLD","length":3,"offset":40},{"style":"BOLD","length":4,"offset":108}],"type":"unstyled"},{"type":"atomic","inlineStyleRanges":[],"data":{},"entityRanges":[{"length":1,"offset":0,"key":19}],"key":"354du","depth":0,"text":" "},{"type":"header-two","entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"Enable combined registration","key":"5ipa8","depth":0},{"inlineStyleRanges":[],"key":"di9m7","text":"Enabling combined registration will mean users will only need to register a device once for a multifactor and self-service password reset. Without enabling combined registration users will need to add their cell phone twice. This feature is already enabled for new tenants. ","entityRanges":[],"data":{},"depth":0,"type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[],"text":"1. log in to Azure Active Directory admin center with global admin credentials.","key":"fn0rf","type":"unstyled"},{"text":"2. Go to Azure Active Directory > User Settings > Manage user feature settings.","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":22},{"length":13,"style":"BOLD","offset":34},{"length":28,"offset":50,"style":"BOLD"}],"type":"unstyled","entityRanges":[],"depth":0,"key":"ec459","data":{}},{"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":20,"offset":0}],"depth":0,"data":{},"text":" ","key":"cea92","type":"atomic"},{"data":{},"key":"9d0ia","type":"unstyled","inlineStyleRanges":[{"length":3,"offset":9,"style":"BOLD"},{"length":4,"offset":98,"style":"BOLD"}],"text":"3. Click All under Users can use the combined security information registration experience. Click Save.","entityRanges":[],"depth":0},{"type":"atomic","entityRanges":[{"length":1,"key":21,"offset":0}],"depth":0,"text":" ","key":"66k3g","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"type":"header-two","data":{},"text":"Set authentication methods and harden security","key":"57dca","inlineStyleRanges":[],"depth":0},{"depth":0,"entityRanges":[],"type":"unstyled","text":"So now we've configured self-service password reset but how do we harden the security? There is a couple of ways. First, let's jump into the authentication methods.","key":"9u4mk","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"key":"filnu","text":"1. Sign in to Azure Active Directory admin center with a global admin. Then go to Azure Active Directory > Password reset > Authentication methods.","depth":0,"inlineStyleRanges":[{"length":22,"style":"BOLD","offset":82},{"style":"BOLD","offset":107,"length":14},{"style":"BOLD","length":22,"offset":124}],"data":{},"type":"unstyled"},{"key":"8c4v1","text":"2. If you want to require a user to have 2 methods of authentication when resetting the password click 2.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":103,"style":"BOLD","length":1}],"data":{},"entityRanges":[]},{"key":"3r5pq","entityRanges":[],"depth":0,"text":"3. If you want to allow the users to provide answers to security questions or an office phone to authenticate click the checkboxes.","type":"unstyled","data":{},"inlineStyleRanges":[]},{"entityRanges":[{"offset":0,"key":22,"length":1}],"text":" ","type":"atomic","depth":0,"key":"dh89s","data":{},"inlineStyleRanges":[]},{"text":"4. Click Save.","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":4,"offset":9}],"data":{},"depth":0,"key":"9439q","entityRanges":[]},{"depth":0,"data":{},"inlineStyleRanges":[],"text":"End-users experience setting up their own authentication methods","key":"b2u51","entityRanges":[],"type":"header-two"},{"inlineStyleRanges":[],"text":"Now self-service password reset is enabled for your tenant. How do users configure their authentication methods? It’s easy.","entityRanges":[],"depth":0,"type":"unstyled","key":"1nd8d","data":{}},{"inlineStyleRanges":[],"depth":0,"text":"1. Go to https://portal.office.com","data":{},"entityRanges":[],"key":"cuc72","type":"unstyled"},{"depth":0,"text":"2. Login with their work credentials.","key":"c80lc","inlineStyleRanges":[],"type":"unstyled","data":{},"entityRanges":[]},{"entityRanges":[],"data":{},"type":"unstyled","depth":0,"text":"3. On the More information required page click Next.","key":"4urts","inlineStyleRanges":[]},{"data":{},"key":"3dt5v","text":"4. Enter your phone number in the space provided. Click Next.","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unstyled"},{"inlineStyleRanges":[],"entityRanges":[],"key":"boohp","data":{},"text":"5. Enter the code that’s texted to you. Click Next.","depth":0,"type":"unstyled"},{"text":"6. Click Next > Done.","depth":0,"key":"2hced","inlineStyleRanges":[],"entityRanges":[],"type":"unstyled","data":{}},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"am0b4","text":"End-user experience resetting their passwords","type":"header-two","depth":0},{"depth":0,"data":{},"inlineStyleRanges":[],"text":"In this section, I'll explain the end-user experience of resetting their passwords. ","type":"unstyled","key":"8l6f2","entityRanges":[]},{"data":{},"text":"1. Go to https://portal.office.com ","depth":0,"inlineStyleRanges":[],"entityRanges":[{"length":25,"offset":9,"key":23}],"type":"unstyled","key":"2c42q"},{"type":"unstyled","entityRanges":[],"depth":0,"text":"2. Click Can’t access your account?","key":"3uqvv","inlineStyleRanges":[{"length":26,"style":"BOLD","offset":9}],"data":{}},{"data":{},"inlineStyleRanges":[],"text":" ","key":"53qrh","depth":0,"entityRanges":[{"key":24,"offset":0,"length":1}],"type":"atomic"},{"key":"85jjj","inlineStyleRanges":[{"length":22,"offset":9,"style":"BOLD"}],"text":"3. Click Work or school account.","data":{},"depth":0,"type":"unstyled","entityRanges":[]},{"entityRanges":[{"key":25,"length":1,"offset":0}],"data":{},"inlineStyleRanges":[],"key":"amp15","text":" ","type":"atomic","depth":0},{"data":{},"entityRanges":[],"key":"2ne0i","inlineStyleRanges":[{"length":4,"style":"BOLD","offset":96}],"type":"unstyled","depth":0,"text":"4. Enter your username in the space provided. Fill out the CAPTCHA in the space provided. Click Next."},{"data":{},"key":"dhlks","text":" ","entityRanges":[{"offset":0,"length":1,"key":26}],"depth":0,"inlineStyleRanges":[],"type":"atomic"},{"key":"d5bsi","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":56}],"depth":0,"data":{},"text":"5. Enter your phone number in the space provided. Click Text.","type":"unstyled"},{"depth":0,"entityRanges":[{"offset":0,"key":27,"length":1}],"text":" ","type":"atomic","key":"f0e7q","inlineStyleRanges":[],"data":{}},{"key":"ej3pr","type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":39}],"text":"6. Enter the code texted to you. Click Next.","data":{},"entityRanges":[]},{"text":" ","key":"6fgbb","data":{},"inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":28,"length":1}],"depth":0,"type":"atomic"},{"key":"drq70","depth":0,"inlineStyleRanges":[{"offset":40,"style":"BOLD","length":6}],"text":"7. Enter your new password twice. Click Finish.","type":"unstyled","entityRanges":[],"data":{}},{"inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":29,"length":1}],"text":" ","key":"p0sn","data":{},"type":"atomic","depth":0},{"entityRanges":[{"length":77,"offset":53,"key":30}],"data":{},"inlineStyleRanges":[],"type":"unstyled","depth":0,"key":"6f977","text":"There are a few more settings that can be changed in https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/  so be sure to take a look."}]},"sectionId":"AFV_acckJ"},
      nextContentSlug: 'Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC',
      previousContentSlug: 'The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk',
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
                <div><p>Self-service password reset (SSPR) is a possibility you're used to with other websites you log on to. For example, Gmail has a self-service password reset. In short, self-service password reset means a user that forgot their password can reset it without contacting an administrator. The user can authorize themselves in another fashion whether it's a text message using the Microsoft authenticator app or a phone call.</p>
<p>While self-service password reset doesn't enhance the security of your Microsoft 365 tenant it does reduce the call volume to your help desk.</p>
<p>If you’re synchronizing your on-premises AD to Office 365 setting up a self-service password reset service isn't as easy as flipping a switch. The good thing about synchronizing your on-premises AD to Microsoft 365 and configuring a self-service password reset service is users can reset their on-premises AD password using the Microsoft 365 self-service portal. When configuring SSPR while you have AD connect configured Microsoft calls it password writeback.&nbsp;</p>
<p>As I said earlier, configuring SSPR when synchronizing your user accounts from your on-premises AD isn't as easy as flipping a switch. First will need to configure the on-premises AD to allow Office 365 to reset the passwords. Then we all need to configure AD connect to allow users to reset their passwords. Finally, we’ll need to configure Microsoft 365 to allow users to reset their passwords.</p>
<h2>License Requirements</h2>
<p>If you're configured with a Microsoft 365 cloud-only account, which means you're not using AD Connect to synchronize your on-premises AD to Office 365 then the self-service password reset it's free. If you are synchronizing your on-premises AD to Office 365 then you'll need an Azure AD Premium P1 license. Azure AD P1 licenses or included In Microsoft 365 business premium licensing.&nbsp;</p>
<h2>Configuring on-premises AD to prepare for SSPR</h2>
<p>First, will need to give the AD connect account permission to reset users’ passwords.&nbsp;</p>
<p>1. Log onto the server that has AD Connect installed.</p>
<p>2. Open Azure AD Connect. Click <strong>Configure</strong>. Click <strong>View or export current configuration</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png" alt="View current AD connect settings" style="height: auto;width: auto"/></div>
<p>3. Take note of the account listed under <strong>Synchronized Directories</strong> &gt; <strong>Account</strong>.</p>
<div ><img src="https://i.ibb.co/LkCDyjm/MSOL-account.png" alt="MSOL Account" style="height: auto;width: auto"/></div>
<p>4. Exit the AD Connect wizard.</p>
<p>5. Login onto a server that has Active Directory Users &amp; Computers.</p>
<p>6. Open Active Directory Users and Computers. Click <strong>View </strong>&gt; <strong>Advanced Features</strong><br/>(if there is a checkbox next to Advanced Features then don’t click it.)</p>
<div ><img src="https://i.ibb.co/p4RPcvB/enable-advanced-features.png" alt="Enable Advanced features" style="height: auto;width: auto"/></div>
<p>7. Right-click the root domain &gt; <strong>Properties</strong>.</p>
<div ><img src="https://i.ibb.co/HHD24wp/open-ad-properties.png" alt="Open AD properties" style="height: auto;width: auto"/></div>
<p>8. Click the <strong>Security</strong> tab &gt; <strong>Advanced</strong>.</p>
<div ><img src="https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png" alt="Open advanced properties" style="height: auto;width: auto"/></div>
<p>9. Click <strong>Add</strong>.</p>
<div ><img src="https://i.ibb.co/XVNpVjD/Add-Permissions.png" alt="Add permissions in AD" style="height: auto;width: auto"/></div>
<p>10. Click <strong>Select a principal</strong> &gt; enter the name of the account you found in step 3 above. Click <strong>OK</strong>.</p>
<div ><img src="https://i.ibb.co/TT4PC9t/select-a-principal-ad.png" alt="Select a principal" style="height: auto;width: auto"/></div>
<p>11. Click the <strong>Applies to</strong> drop-down and select <strong>Descendant User Objects</strong>.</p>
<div ><img src="https://i.ibb.co/YTznr3c/descendant-user-objects.png" alt="Select Descendant User Objects" style="height: auto;width: auto"/></div>
<p>12. Click <strong>Reset password</strong> (located under Permissions).</p>
<div ><img src="https://i.ibb.co/ch4C20T/reset-password.png" alt="Reset password permissions" style="height: auto;width: auto"/></div>
<p>13. Find and check <strong>Write lockoutTime</strong>.</p>
<div ><img src="https://i.ibb.co/JqLvsnC/write-lockouttime.png" alt="Write lockoutTime" style="height: auto;width: auto"/></div>
<p>14. Find and check <strong>Write pwdLastSet</strong>.</p>
<div ><img src="https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png" alt="Write pwdLastSet" style="height: auto;width: auto"/></div>
<p>15. Click <strong>OK</strong>.</p>
<p>16. Click <strong>Add</strong> again.</p>
<div ><img src="https://i.ibb.co/XVNpVjD/Add-Permissions.png" alt="Add permissions in AD" style="height: auto;width: auto"/></div>
<p>17. Click <strong>Select a principal</strong> &gt; enter the name of the account you found in step 3 above. Click <strong>OK</strong>.</p>
<div ><img src="https://i.ibb.co/TT4PC9t/select-a-principal-ad.png" alt="Select a principal" style="height: auto;width: auto"/></div>
<p>18. Click <strong>Unexpire password</strong>. Click <strong>OK </strong>until you’ve closed all the windows.</p>
<div ><img src="https://i.ibb.co/yBsDWSF/unexpire-password.png" alt="Unexpire password" style="height: auto;width: auto"/></div>
<h2>Configure password writeback in AD Connect</h2>
<p>Next, we’ll need to enable password write-back in AD Connect.</p>
<p>1. Logon to the AD Connect server.</p>
<p>2. Double click Azure AD Connect.</p>
<p>3. Click <strong>Configure</strong>.</p>
<p>4. Click <strong>Customize synchronization options</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/SJvpG6h/customize-syncronization-options.png" alt="Customize synchronization options" style="height: auto;width: auto"/></div>
<p>5. Enter your Microsoft 365 global admin credentials. Click <strong>Next</strong>. If required, re-enter your credentials in the space provided.</p>
<div ><img src="https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png" alt="AD Connect enter your global admin credentials" style="height: auto;width: auto"/></div>
<p>6. On the Connect your directories page, click <strong>Next</strong>.</p>
<p>7. On the Domain and OU filtering page, click <strong>Next</strong>.</p>
<p>8. On the Optional features page, click <strong>Password writeback</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png" alt="Enable password write-back in AD Connect" style="height: auto;width: auto"/></div>
<p>9. On the Ready to configure page, click <strong>Configure</strong>.</p>
<p>10. Wait until the configuration is complete. Then click <strong>Exit</strong>.</p>
<h2>Enable SSPR in Microsoft 365</h2>
<p>Lastly, we need to enable self-service password reset in Microsoft 365.</p>
<p>1. Open Azure Active Directory admin center and login with a global admin account &gt; <strong>Azure Active Directory</strong> &gt; <strong>Password Reset</strong>.</p>
<div ><img src="https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png" alt="Password reset options in Microsoft 365" style="height: auto;width: auto"/></div>
<p>2. Click <strong>All </strong>to enable SSPR for everyone. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/nLP24yX/enable-sspr.png" alt="Enable SSPR" style="height: auto;width: auto"/></div>
<p>3. Go to <strong>on-premises integration</strong>. Click <strong>Yes</strong> under Write back passwords to your on-premises directory. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png" alt="Write-back on-premises integration" style="height: auto;width: auto"/></div>
<h2>Enable combined registration</h2>
<p>Enabling combined registration will mean users will only need to register a device once for a multifactor and self-service password reset. Without enabling combined registration users will need to add their cell phone twice. This feature is already enabled for new tenants.&nbsp;</p>
<p>1. log in to Azure Active Directory admin center with global admin credentials.</p>
<p>2. Go to <strong>Azure Active Directory</strong> &gt; <strong>User Settings</strong> &gt; <strong>Manage user feature settings</strong>.</p>
<div ><img src="https://i.ibb.co/cJLFytw/manage-user-feature-settings.png" alt="Microsoft 365 manage user feature settings" style="height: auto;width: auto"/></div>
<p>3. Click <strong>All</strong> under Users can use the combined security information registration experience. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/61QhNtN/enable-combined-features.png" alt="Microsoft 365 enabled combined features" style="height: auto;width: auto"/></div>
<h2>Set authentication methods and harden security</h2>
<p>So now we've configured self-service password reset but how do we harden the security? There is a couple of ways. First, let's jump into the authentication methods.</p>
<p>1. Sign in to Azure Active Directory admin center with a global admin. Then go to <strong>Azure Active Directory</strong> &gt; <strong>Password reset</strong> &gt; <strong>Authentication methods</strong>.</p>
<p>2. If you want to require a user to have 2 methods of authentication when resetting the password click <strong>2</strong>.</p>
<p>3. If you want to allow the users to provide answers to security questions or an office phone to authenticate click the checkboxes.</p>
<div ><img src="https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png" alt="Microsoft 365 password reset authentication methods" style="height: auto;width: auto"/></div>
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
<p>1. Go to <a href="https://portal.office.com" target="_blank">https://portal.office.com</a>&nbsp;</p>
<p>2. Click <strong>Can’t access your account?</strong></p>
<div ><img src="https://i.ibb.co/mX8t7P0/cant-access-your-account.png" alt="Can't access your account? Microsoft 365" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Work or school account</strong>.</p>
<div ><img src="https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png" alt="Which type of account do you need help with?" style="height: auto;width: auto"/></div>
<p>4. Enter your username in the space provided. Fill out the CAPTCHA in the space provided. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/V3qmVYF/get-back-into-your-account.png" alt="Get back into your account" style="height: auto;width: auto"/></div>
<p>5. Enter your phone number in the space provided. Click <strong>Text</strong>.</p>
<div ><img src="https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png" alt="Get back into your account text message" style="height: auto;width: auto"/></div>
<p>6. Enter the code texted to you. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png" alt="Enter the code texted to you" style="height: auto;width: auto"/></div>
<p>7. Enter your new password twice. Click <strong>Finish</strong>.</p>
<div ><img src="https://i.ibb.co/T0TR946/choose-a-new-password.png" alt="Choose a new password in SSPR for Microsoft 365" style="height: auto;width: auto"/></div>
<p>There are a few more settings that can be changed in <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/" target="_blank">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/</a>  so be sure to take a look.</p>
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
