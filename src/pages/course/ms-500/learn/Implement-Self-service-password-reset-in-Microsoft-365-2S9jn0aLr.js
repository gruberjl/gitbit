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
      article: {"slug":"Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr","sectionId":"AFV_acckJ","publish":true,"id":"2S9jn0aLr","datePublished":"2022/5/26","images":["https://i.ibb.co/T0TR946/choose-a-new-password.png","https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png","https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png","https://i.ibb.co/JRjc77D/enter-the-code.png","https://i.ibb.co/mX8t7P0/cant-access-your-account.png","https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png","https://i.ibb.co/V3qmVYF/get-back-into-your-account.png","https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png","https://i.ibb.co/cJLFytw/manage-user-feature-settings.png","https://i.ibb.co/61QhNtN/enable-combined-features.png","https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png","https://i.ibb.co/nLP24yX/enable-sspr.png","https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png","https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png","https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png","https://i.ibb.co/yBsDWSF/unexpire-password.png","https://i.ibb.co/SJvpG6h/customize-syncronization-options.png","https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png","https://i.ibb.co/JqLvsnC/write-lockouttime.png","https://i.ibb.co/ch4C20T/reset-password.png","https://i.ibb.co/YTznr3c/descendant-user-objects.png","https://i.ibb.co/TT4PC9t/select-a-principal-ad.png","https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png","https://i.ibb.co/TT4PC9t/select-a-principal-ad.png","https://i.ibb.co/XVNpVjD/Add-Permissions.png","https://i.ibb.co/XVNpVjD/Add-Permissions.png","https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png","https://i.ibb.co/HHD24wp/open-ad-properties.png","https://i.ibb.co/p4RPcvB/enable-advanced-features.png","https://i.ibb.co/LkCDyjm/MSOL-account.png","https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png"],"title":"Implement Self-service password reset in Microsoft 365","article":{"entityMap":{"0":{"type":"IMAGE","mutability":"MUTABLE","data":{"url":"https://portal.office.com","width":"auto","alignment":"none","height":"auto","src":"https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png","alt":"View current AD connect settings","targetOption":"_blank"}},"1":{"mutability":"MUTABLE","data":{"height":"auto","alignment":"none","url":"https://portal.office.com","width":"auto","alt":"MSOL Account","targetOption":"_blank","src":"https://i.ibb.co/LkCDyjm/MSOL-account.png"},"type":"IMAGE"},"2":{"mutability":"MUTABLE","data":{"width":"auto","alt":"Enable Advanced features","height":"auto","targetOption":"_blank","src":"https://i.ibb.co/p4RPcvB/enable-advanced-features.png","alignment":"none","url":"https://portal.office.com"},"type":"IMAGE"},"3":{"data":{"width":"auto","alignment":"none","alt":"Open AD properties","height":"auto","url":"https://portal.office.com","targetOption":"_blank","src":"https://i.ibb.co/HHD24wp/open-ad-properties.png"},"mutability":"MUTABLE","type":"IMAGE"},"4":{"data":{"width":"auto","targetOption":"_blank","alt":"Open advanced properties","height":"auto","src":"https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png","alignment":"none","url":"https://portal.office.com"},"mutability":"MUTABLE","type":"IMAGE"},"5":{"data":{"height":"auto","src":"https://i.ibb.co/XVNpVjD/Add-Permissions.png","url":"https://portal.office.com","targetOption":"_blank","alt":"Add permissions in AD","alignment":"none","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"6":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","targetOption":"_blank","alignment":"none","alt":"Select a principal","height":"auto","url":"https://portal.office.com","src":"https://i.ibb.co/TT4PC9t/select-a-principal-ad.png"}},"7":{"mutability":"MUTABLE","data":{"alt":"Select Descendant User Objects","url":"https://portal.office.com","alignment":"none","height":"auto","width":"auto","targetOption":"_blank","src":"https://i.ibb.co/YTznr3c/descendant-user-objects.png"},"type":"IMAGE"},"8":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://portal.office.com","alt":"Reset password permissions","alignment":"none","height":"auto","width":"auto","src":"https://i.ibb.co/ch4C20T/reset-password.png"},"type":"IMAGE"},"9":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Write lockoutTime","height":"auto","targetOption":"_blank","width":"auto","alignment":"none","src":"https://i.ibb.co/JqLvsnC/write-lockouttime.png","url":"https://portal.office.com"}},"10":{"data":{"height":"auto","src":"https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png","alignment":"none","targetOption":"_blank","alt":"Write pwdLastSet","width":"auto","url":"https://portal.office.com"},"mutability":"MUTABLE","type":"IMAGE"},"11":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","url":"https://portal.office.com","alignment":"none","targetOption":"_blank","height":"auto","alt":"Add permissions in AD","src":"https://i.ibb.co/XVNpVjD/Add-Permissions.png"}},"12":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/TT4PC9t/select-a-principal-ad.png","targetOption":"_blank","alt":"Select a principal","width":"auto","alignment":"none","height":"auto","url":"https://portal.office.com"},"type":"IMAGE"},"13":{"mutability":"MUTABLE","data":{"alignment":"none","width":"auto","src":"https://i.ibb.co/yBsDWSF/unexpire-password.png","height":"auto","alt":"Unexpire password","url":"https://portal.office.com","targetOption":"_blank"},"type":"IMAGE"},"14":{"mutability":"MUTABLE","type":"IMAGE","data":{"src":"https://i.ibb.co/SJvpG6h/customize-syncronization-options.png","width":"auto","targetOption":"_blank","url":"https://portal.office.com","alt":"Customize synchronization options","alignment":"none","height":"auto"}},"15":{"mutability":"MUTABLE","data":{"width":"auto","alt":"AD Connect enter your global admin credentials","src":"https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png","url":"https://portal.office.com","height":"auto","targetOption":"_blank","alignment":"none"},"type":"IMAGE"},"16":{"mutability":"MUTABLE","data":{"url":"https://portal.office.com","alignment":"none","src":"https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png","height":"auto","alt":"Enable password write-back in AD Connect","width":"auto","targetOption":"_blank"},"type":"IMAGE"},"17":{"data":{"alt":"Password reset options in Microsoft 365","url":"https://portal.office.com","width":"auto","alignment":"none","targetOption":"_blank","src":"https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"18":{"mutability":"MUTABLE","data":{"url":"https://portal.office.com","targetOption":"_blank","width":"auto","alignment":"left","src":"https://i.ibb.co/nLP24yX/enable-sspr.png","alt":"Enable SSPR","height":"auto"},"type":"IMAGE"},"19":{"data":{"alignment":"none","alt":"Write-back on-premises integration","height":"auto","url":"https://portal.office.com","targetOption":"_blank","src":"https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"20":{"data":{"url":"https://portal.office.com","width":"auto","height":"auto","alignment":"none","src":"https://i.ibb.co/cJLFytw/manage-user-feature-settings.png","targetOption":"_blank","alt":"Microsoft 365 manage user feature settings"},"mutability":"MUTABLE","type":"IMAGE"},"21":{"data":{"targetOption":"_blank","src":"https://i.ibb.co/61QhNtN/enable-combined-features.png","alt":"Microsoft 365 enabled combined features","url":"https://portal.office.com","alignment":"none","width":"auto","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"22":{"type":"IMAGE","mutability":"MUTABLE","data":{"url":"https://portal.office.com","targetOption":"_blank","src":"https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png","alignment":"none","height":"auto","width":"auto","alt":"Microsoft 365 password reset authentication methods"}},"23":{"data":{"url":"https://portal.office.com","height":"auto","alignment":"left","alt":"Can't access your account? Microsoft 365","src":"https://i.ibb.co/mX8t7P0/cant-access-your-account.png","width":"auto","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"24":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","alt":"Can't access your account? Microsoft 365","src":"https://i.ibb.co/mX8t7P0/cant-access-your-account.png","alignment":"none","width":"auto"}},"25":{"type":"IMAGE","mutability":"MUTABLE","data":{"targetOption":"_blank","alignment":"none","src":"https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png","height":"auto","alt":"Which type of account do you need help with?","width":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/"}},"26":{"type":"IMAGE","mutability":"MUTABLE","data":{"targetOption":"_blank","width":"auto","alt":"Get back into your account","alignment":"none","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","src":"https://i.ibb.co/V3qmVYF/get-back-into-your-account.png","height":"auto"}},"27":{"type":"IMAGE","data":{"height":"auto","alt":"Get back into your account text message","width":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","targetOption":"_blank","alignment":"none","src":"https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png"},"mutability":"MUTABLE"},"28":{"mutability":"MUTABLE","data":{"alt":"Enter the code texted to you","width":"auto","height":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","src":"https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png","alignment":"none","targetOption":"_blank"},"type":"IMAGE"},"29":{"data":{"height":"auto","targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","src":"https://i.ibb.co/T0TR946/choose-a-new-password.png","alignment":"none","width":"auto","alt":"Choose a new password in SSPR for Microsoft 365"},"type":"IMAGE","mutability":"MUTABLE"},"30":{"type":"LINK","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/","targetOption":"_blank"},"mutability":"MUTABLE"}},"blocks":[{"text":"Self-service password reset (SSPR) is a possibility you're used to with other websites you log on to. For example, Gmail has a self-service password reset. In short, self-service password reset means a user that forgot their password can reset it without contacting an administrator. The user can authorize themselves in another fashion whether it's a text message using the Microsoft authenticator app or a phone call.","key":"99l3i","depth":0,"entityRanges":[],"inlineStyleRanges":[],"data":{},"type":"unstyled"},{"type":"unstyled","key":"50pag","depth":0,"data":{},"entityRanges":[],"text":"While self-service password reset doesn't enhance the security of your Microsoft 365 tenant it does reduce the call volume to your help desk.","inlineStyleRanges":[]},{"entityRanges":[],"key":"8st22","depth":0,"data":{},"text":"If you’re synchronizing your on-premises AD to Office 365 setting up a self-service password reset service isn't as easy as flipping a switch. The good thing about synchronizing your on-premises AD to Microsoft 365 and configuring a self-service password reset service is users can reset their on-premises AD password using the Microsoft 365 self-service portal. When configuring SSPR while you have AD connect configured Microsoft calls it password writeback. ","inlineStyleRanges":[],"type":"unstyled"},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"key":"41prr","data":{},"text":"As I said earlier, configuring SSPR when synchronizing your user accounts from your on-premises AD isn't as easy as flipping a switch. First will need to configure the on-premises AD to allow Office 365 to reset the passwords. Then we all need to configure AD connect to allow users to reset their passwords. Finally, we’ll need to configure Microsoft 365 to allow users to reset their passwords.","type":"unstyled"},{"depth":0,"key":"8k2e0","data":{},"entityRanges":[],"type":"header-two","inlineStyleRanges":[],"text":"License Requirements"},{"type":"unstyled","entityRanges":[],"text":"If you're configured with a Microsoft 365 cloud-only account, which means you're not using AD Connect to synchronize your on-premises AD to Office 365 then the self-service password reset it's free. If you are synchronizing your on-premises AD to Office 365 then you'll need an Azure AD Premium P1 license. Azure AD P1 licenses or included In Microsoft 365 business premium licensing. ","key":"9a8g6","data":{},"depth":0,"inlineStyleRanges":[]},{"data":{},"entityRanges":[],"key":"787je","text":"Configuring on-premises AD to prepare for SSPR","inlineStyleRanges":[],"type":"header-two","depth":0},{"entityRanges":[],"type":"unstyled","key":"a2pog","text":"First, will need to give the AD connect account permission to reset users’ passwords. ","data":{},"depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"text":"1. Log onto the server that has AD Connect installed.","type":"unstyled","depth":0,"entityRanges":[],"key":"as01e","data":{}},{"key":"cm2v","entityRanges":[],"data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":32,"style":"BOLD","length":9},{"offset":49,"style":"BOLD","length":36},{"offset":93,"style":"BOLD","length":4}],"text":"2. Open Azure AD Connect. Click Configure. Click View or export current configuration. Click Next."},{"depth":0,"key":"7oa1a","inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":0}],"type":"atomic","data":{},"text":" "},{"data":{},"depth":0,"entityRanges":[],"text":"3. Take note of the account listed under Synchronized Directories > Account.","key":"bpf5q","inlineStyleRanges":[{"style":"BOLD","length":24,"offset":41},{"length":7,"style":"BOLD","offset":68}],"type":"unstyled"},{"inlineStyleRanges":[],"data":{},"depth":0,"text":" ","entityRanges":[{"offset":0,"length":1,"key":1}],"type":"atomic","key":"eaf2b"},{"data":{},"inlineStyleRanges":[],"type":"unstyled","text":"4. Exit the AD Connect wizard.","entityRanges":[],"depth":0,"key":"6nssr"},{"text":"5. Login onto a server that has Active Directory Users & Computers.","entityRanges":[],"data":{},"key":"eqmv5","inlineStyleRanges":[],"depth":0,"type":"unstyled"},{"data":{},"key":"8prr3","depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"offset":52,"style":"BOLD","length":5},{"length":17,"offset":59,"style":"BOLD"}],"text":"6. Open Active Directory Users and Computers. Click View > Advanced Features\n(if there is a checkbox next to Advanced Features then don’t click it.)"},{"entityRanges":[{"length":1,"offset":0,"key":2}],"key":"61qj6","data":{},"depth":0,"inlineStyleRanges":[],"type":"atomic","text":" "},{"text":"7. Right-click the root domain > Properties.","entityRanges":[],"key":"es4f0","data":{},"inlineStyleRanges":[{"offset":33,"style":"BOLD","length":10}],"type":"unstyled","depth":0},{"entityRanges":[{"key":3,"offset":0,"length":1}],"key":"bh42i","data":{},"type":"atomic","text":" ","depth":0,"inlineStyleRanges":[]},{"key":"dt4np","inlineStyleRanges":[{"style":"BOLD","offset":13,"length":8},{"style":"BOLD","length":8,"offset":28}],"text":"8. Click the Security tab > Advanced.","data":{},"type":"unstyled","entityRanges":[],"depth":0},{"type":"atomic","entityRanges":[{"key":4,"length":1,"offset":0}],"depth":0,"inlineStyleRanges":[],"key":"4gdct","text":" ","data":{}},{"entityRanges":[],"data":{},"text":"9. Click Add.","key":"3o9fq","depth":0,"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":3}],"type":"unstyled"},{"type":"atomic","entityRanges":[{"length":1,"key":5,"offset":0}],"inlineStyleRanges":[],"text":" ","depth":0,"key":"3kdp8","data":{}},{"entityRanges":[],"text":"10. Click Select a principal > enter the name of the account you found in step 3 above. Click OK.","inlineStyleRanges":[{"offset":10,"style":"BOLD","length":18},{"style":"BOLD","length":2,"offset":94}],"depth":0,"key":"86tnj","data":{},"type":"unstyled"},{"text":" ","entityRanges":[{"length":1,"key":6,"offset":0}],"data":{},"depth":0,"key":"2fuu0","inlineStyleRanges":[],"type":"atomic"},{"depth":0,"type":"unstyled","text":"11. Click the Applies to drop-down and select Descendant User Objects.","key":"cm1cb","entityRanges":[],"data":{},"inlineStyleRanges":[{"length":10,"style":"BOLD","offset":14},{"offset":46,"style":"BOLD","length":23}]},{"type":"atomic","entityRanges":[{"offset":0,"key":7,"length":1}],"inlineStyleRanges":[],"key":"7vgee","depth":0,"text":" ","data":{}},{"depth":0,"entityRanges":[],"inlineStyleRanges":[{"length":14,"style":"BOLD","offset":10}],"data":{},"text":"12. Click Reset password (located under Permissions).","key":"cs4cg","type":"unstyled"},{"key":"2tt2j","text":" ","data":{},"entityRanges":[{"length":1,"offset":0,"key":8}],"type":"atomic","depth":0,"inlineStyleRanges":[]},{"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":17,"offset":19}],"entityRanges":[],"key":"7le94","text":"13. Find and check Write lockoutTime.","depth":0,"data":{}},{"text":" ","type":"atomic","data":{},"entityRanges":[{"key":9,"length":1,"offset":0}],"key":"8ulo2","depth":0,"inlineStyleRanges":[]},{"type":"unstyled","entityRanges":[],"key":"7rbqe","text":"14. Find and check Write pwdLastSet.","depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","offset":19,"length":16}]},{"type":"atomic","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":10,"length":1}],"key":"f9uab","text":" "},{"inlineStyleRanges":[{"style":"BOLD","length":2,"offset":10}],"text":"15. Click OK.","key":"ck07t","data":{},"entityRanges":[],"depth":0,"type":"unstyled"},{"data":{},"key":"en51p","depth":0,"type":"unstyled","inlineStyleRanges":[{"length":3,"offset":10,"style":"BOLD"}],"entityRanges":[],"text":"16. Click Add again."},{"depth":0,"entityRanges":[{"key":11,"length":1,"offset":0}],"text":" ","key":"7138s","data":{},"inlineStyleRanges":[],"type":"atomic"},{"key":"3ugq1","text":"17. Click Select a principal > enter the name of the account you found in step 3 above. Click OK.","data":{},"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":18,"offset":10},{"offset":94,"style":"BOLD","length":2}],"depth":0,"type":"unstyled"},{"depth":0,"key":"4k0t6","type":"atomic","entityRanges":[{"length":1,"offset":0,"key":12}],"inlineStyleRanges":[],"data":{},"text":" "},{"depth":0,"key":"cnlsr","type":"unstyled","entityRanges":[],"data":{},"text":"18. Click Unexpire password. Click OK until you’ve closed all the windows.","inlineStyleRanges":[{"style":"BOLD","length":17,"offset":10},{"length":3,"offset":35,"style":"BOLD"}]},{"inlineStyleRanges":[],"key":"c7gbb","depth":0,"text":" ","type":"atomic","entityRanges":[{"length":1,"offset":0,"key":13}],"data":{}},{"type":"header-two","text":"Configure password writeback in AD Connect","entityRanges":[],"inlineStyleRanges":[],"key":"9ggf5","data":{},"depth":0},{"entityRanges":[],"text":"Next, we’ll need to enable password write-back in AD Connect.","type":"unstyled","depth":0,"key":"72hor","inlineStyleRanges":[],"data":{}},{"depth":0,"type":"unstyled","data":{},"text":"1. Logon to the AD Connect server.","entityRanges":[],"key":"7glma","inlineStyleRanges":[]},{"entityRanges":[],"key":"1015m","text":"2. Double click Azure AD Connect.","depth":0,"inlineStyleRanges":[],"type":"unstyled","data":{}},{"data":{},"key":"8mbnr","text":"3. Click Configure.","inlineStyleRanges":[{"length":9,"offset":9,"style":"BOLD"}],"entityRanges":[],"type":"unstyled","depth":0},{"text":"4. Click Customize synchronization options. Click Next.","type":"unstyled","key":"7hs6v","depth":0,"entityRanges":[],"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":33},{"length":4,"offset":50,"style":"BOLD"}],"data":{}},{"inlineStyleRanges":[],"text":" ","key":"15hum","depth":0,"data":{},"entityRanges":[{"key":14,"length":1,"offset":0}],"type":"atomic"},{"key":"anlrb","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":60}],"text":"5. Enter your Microsoft 365 global admin credentials. Click Next. If required, re-enter your credentials in the space provided.","type":"unstyled"},{"depth":0,"entityRanges":[{"length":1,"offset":0,"key":15}],"type":"atomic","data":{},"inlineStyleRanges":[],"text":" ","key":"fnde8"},{"type":"unstyled","text":"6. On the Connect your directories page, click Next.","entityRanges":[],"key":"fma85","data":{},"depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":47,"length":4}]},{"type":"unstyled","depth":0,"inlineStyleRanges":[{"length":4,"style":"BOLD","offset":46}],"key":"3a5g8","entityRanges":[],"data":{},"text":"7. On the Domain and OU filtering page, click Next."},{"type":"unstyled","text":"8. On the Optional features page, click Password writeback. Click Next.","key":"a8ofi","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":18,"offset":40},{"style":"BOLD","length":4,"offset":66}]},{"text":" ","key":"btqoj","type":"atomic","depth":0,"entityRanges":[{"key":16,"offset":0,"length":1}],"data":{},"inlineStyleRanges":[]},{"key":"63pq","data":{},"type":"unstyled","text":"9. On the Ready to configure page, click Configure.","depth":0,"inlineStyleRanges":[{"length":9,"style":"BOLD","offset":41}],"entityRanges":[]},{"text":"10. Wait until the configuration is complete. Then click Exit.","inlineStyleRanges":[{"style":"BOLD","offset":57,"length":4}],"type":"unstyled","depth":0,"entityRanges":[],"key":"77m03","data":{}},{"text":"Enable SSPR in Microsoft 365","depth":0,"entityRanges":[],"key":"e858h","inlineStyleRanges":[],"type":"header-two","data":{}},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"text":"Lastly, we need to enable self-service password reset in Microsoft 365.","data":{},"key":"b3334","type":"unstyled"},{"data":{},"type":"unstyled","text":"1. Open Azure Active Directory admin center and login with a global admin account > Azure Active Directory > Password Reset.","entityRanges":[],"inlineStyleRanges":[{"offset":84,"style":"BOLD","length":22},{"style":"BOLD","offset":109,"length":14}],"key":"rl50","depth":0},{"data":{},"type":"atomic","entityRanges":[{"key":17,"offset":0,"length":1}],"text":" ","key":"agdc8","inlineStyleRanges":[],"depth":0},{"data":{},"key":"3n121","entityRanges":[],"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":4},{"length":4,"style":"BOLD","offset":48}],"type":"unstyled","depth":0,"text":"2. Click All to enable SSPR for everyone. Click Save."},{"data":{},"key":"8lbs7","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"key":18,"length":1,"offset":0}],"depth":0,"text":" "},{"text":"3. Go to on-premises integration. Click Yes under Write back passwords to your on-premises directory. Click Save.","type":"unstyled","key":"6g0bn","data":{},"inlineStyleRanges":[{"length":23,"style":"BOLD","offset":9},{"length":3,"style":"BOLD","offset":40},{"style":"BOLD","offset":108,"length":4}],"entityRanges":[],"depth":0},{"data":{},"entityRanges":[{"length":1,"offset":0,"key":19}],"text":" ","key":"354du","type":"atomic","depth":0,"inlineStyleRanges":[]},{"data":{},"key":"5ipa8","depth":0,"type":"header-two","text":"Enable combined registration","entityRanges":[],"inlineStyleRanges":[]},{"data":{},"type":"unstyled","text":"Enabling combined registration will mean users will only need to register a device once for a multifactor and self-service password reset. Without enabling combined registration users will need to add their cell phone twice. This feature is already enabled for new tenants. ","entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"di9m7"},{"text":"1. log in to Azure Active Directory admin center with global admin credentials.","type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"fn0rf","depth":0},{"depth":0,"text":"2. Go to Azure Active Directory > User Settings > Manage user feature settings.","type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"length":22,"offset":9,"style":"BOLD"},{"offset":34,"length":13,"style":"BOLD"},{"style":"BOLD","length":28,"offset":50}],"key":"ec459","data":{}},{"entityRanges":[{"key":20,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"cea92","depth":0,"data":{},"text":" ","type":"atomic"},{"entityRanges":[],"key":"9d0ia","text":"3. Click All under Users can use the combined security information registration experience. Click Save.","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":3,"offset":9},{"length":4,"offset":98,"style":"BOLD"}],"type":"unstyled","data":{}},{"inlineStyleRanges":[],"text":" ","depth":0,"key":"66k3g","type":"atomic","data":{},"entityRanges":[{"length":1,"key":21,"offset":0}]},{"entityRanges":[],"data":{},"inlineStyleRanges":[],"key":"57dca","type":"header-two","depth":0,"text":"Set authentication methods and harden security"},{"entityRanges":[],"key":"9u4mk","depth":0,"type":"unstyled","text":"So now we've configured self-service password reset but how do we harden the security? There is a couple of ways. First, let's jump into the authentication methods.","inlineStyleRanges":[],"data":{}},{"inlineStyleRanges":[{"length":22,"offset":82,"style":"BOLD"},{"length":14,"offset":107,"style":"BOLD"},{"offset":124,"style":"BOLD","length":22}],"entityRanges":[],"depth":0,"data":{},"text":"1. Sign in to Azure Active Directory admin center with a global admin. Then go to Azure Active Directory > Password reset > Authentication methods.","key":"filnu","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"text":"2. If you want to require a user to have 2 methods of authentication when resetting the password click 2.","inlineStyleRanges":[{"style":"BOLD","length":1,"offset":103}],"type":"unstyled","key":"8c4v1"},{"depth":0,"data":{},"type":"unstyled","text":"3. If you want to allow the users to provide answers to security questions or an office phone to authenticate click the checkboxes.","entityRanges":[],"inlineStyleRanges":[],"key":"3r5pq"},{"text":" ","data":{},"inlineStyleRanges":[],"type":"atomic","key":"dh89s","depth":0,"entityRanges":[{"length":1,"offset":0,"key":22}]},{"depth":0,"key":"9439q","data":{},"text":"4. Click Save.","type":"unstyled","inlineStyleRanges":[{"offset":9,"length":4,"style":"BOLD"}],"entityRanges":[]},{"key":"b2u51","inlineStyleRanges":[],"depth":0,"entityRanges":[],"text":"End-users experience setting up their own authentication methods","data":{},"type":"header-two"},{"data":{},"inlineStyleRanges":[],"text":"Now self-service password reset is enabled for your tenant. How do users configure their authentication methods? It’s easy.","type":"unstyled","key":"1nd8d","depth":0,"entityRanges":[]},{"type":"unstyled","text":"1. Go to https://portal.office.com","key":"cuc72","depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[]},{"key":"c80lc","text":"2. Login with their work credentials.","inlineStyleRanges":[],"data":{},"depth":0,"type":"unstyled","entityRanges":[]},{"text":"3. On the More information required page click Next.","entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[],"depth":0,"key":"4urts"},{"inlineStyleRanges":[],"key":"3dt5v","type":"unstyled","text":"4. Enter your phone number in the space provided. Click Next.","depth":0,"data":{},"entityRanges":[]},{"entityRanges":[],"text":"5. Enter the code that’s texted to you. Click Next.","data":{},"key":"boohp","depth":0,"inlineStyleRanges":[],"type":"unstyled"},{"entityRanges":[],"key":"2hced","depth":0,"inlineStyleRanges":[],"type":"unstyled","data":{},"text":"6. Click Next > Done."},{"text":"End-user experience resetting their passwords","data":{},"entityRanges":[],"type":"header-two","inlineStyleRanges":[],"depth":0,"key":"am0b4"},{"data":{},"text":"In this section, I'll explain the end-user experience of resetting their passwords. ","depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"key":"8l6f2"},{"text":"1. Go to https://portal.office.com ","entityRanges":[{"key":23,"offset":9,"length":25}],"type":"unstyled","inlineStyleRanges":[],"key":"2c42q","data":{},"depth":0},{"entityRanges":[],"data":{},"text":"2. Click Can’t access your account?","type":"unstyled","depth":0,"key":"3uqvv","inlineStyleRanges":[{"length":26,"style":"BOLD","offset":9}]},{"inlineStyleRanges":[],"entityRanges":[{"key":24,"offset":0,"length":1}],"depth":0,"data":{},"key":"53qrh","text":" ","type":"atomic"},{"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":22}],"text":"3. Click Work or school account.","entityRanges":[],"key":"85jjj","type":"unstyled","data":{},"depth":0},{"entityRanges":[{"length":1,"offset":0,"key":25}],"inlineStyleRanges":[],"depth":0,"data":{},"key":"amp15","text":" ","type":"atomic"},{"entityRanges":[],"text":"4. Enter your username in the space provided. Fill out the CAPTCHA in the space provided. Click Next.","type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[{"offset":96,"style":"BOLD","length":4}],"key":"2ne0i"},{"key":"dhlks","data":{},"inlineStyleRanges":[],"text":" ","depth":0,"entityRanges":[{"length":1,"offset":0,"key":26}],"type":"atomic"},{"depth":0,"type":"unstyled","entityRanges":[],"key":"d5bsi","text":"5. Enter your phone number in the space provided. Click Text.","data":{},"inlineStyleRanges":[{"length":4,"offset":56,"style":"BOLD"}]},{"key":"f0e7q","text":" ","type":"atomic","inlineStyleRanges":[],"entityRanges":[{"key":27,"length":1,"offset":0}],"depth":0,"data":{}},{"text":"6. Enter the code texted to you. Click Next.","type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":39}],"entityRanges":[],"key":"ej3pr","data":{}},{"type":"atomic","key":"6fgbb","depth":0,"inlineStyleRanges":[],"text":" ","entityRanges":[{"key":28,"offset":0,"length":1}],"data":{}},{"depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":40,"length":6}],"key":"drq70","data":{},"type":"unstyled","entityRanges":[],"text":"7. Enter your new password twice. Click Finish."},{"key":"p0sn","data":{},"text":" ","type":"atomic","depth":0,"entityRanges":[{"key":29,"offset":0,"length":1}],"inlineStyleRanges":[]},{"type":"unstyled","depth":0,"data":{},"entityRanges":[{"offset":53,"length":77,"key":30}],"inlineStyleRanges":[],"text":"There are a few more settings that can be changed in https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/  so be sure to take a look.","key":"6f977"}]},"type":"article","description":"Self-service password reset in Microsoft 365 is a great way to empower users and decrease call volume to your IT help desk.","featuredImage":"https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png"},
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
