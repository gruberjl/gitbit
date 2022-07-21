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
      path: '/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
      article: {"sectionId":"qwJW5VrBW","publish":true,"title":"Managing Microsoft 365 through PowerShell","article":{"entityMap":{"0":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","alignment":"none","width":"auto","src":"https://i.ibb.co/31fXgzV/Power-Shell.png","alt":"Access PowerShell"}},"1":{"mutability":"MUTABLE","data":{"url":"https://download.microsoft.com/download/7/1/E/71EF1D05-A42C-4A1F-8162-96494B5E615C/msoidcli_32bit.msi","width":"auto","targetOption":"_blank","height":"auto","alt":"Open PowerShell as an admin","src":"https://i.ibb.co/4WfH7pW/powershell-as-admin.png"},"type":"LINK"},"2":{"data":{"src":"https://i.ibb.co/4WfH7pW/powershell-as-admin.png","height":"auto","width":"auto","alt":"Open PowerShell as an admin"},"type":"IMAGE","mutability":"MUTABLE"},"3":{"mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/tYJ6H9X/Power-Shell-Allow-this-app.png","height":"auto","alt":"PowerShell Allow open as admin"},"type":"IMAGE"},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/qyMttBg/install-nuget.png","height":"auto","alt":"Install NuGet","width":"auto"}},"5":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/HV13YF6/install-microsoft-365-powershell-modules.png","width":"auto","height":"auto","alt":"Install Microsoft 365 PowerShell Modules"}},"6":{"data":{"height":"auto","src":"https://i.ibb.co/1mnGG2H/set-executionpolicy.png","width":"auto","alt":"Set-ExecutionPolicy RemoteSigned"},"mutability":"MUTABLE","type":"IMAGE"},"7":{"mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/hdMWybz/connect-to-microsoft-365.png","alt":"Connect to Microsoft 365 PowerShell - Enter Username","height":"auto"},"type":"IMAGE"},"8":{"data":{"alt":"Microsoft 365 PowerShell Sign in Enter Password","src":"https://i.ibb.co/0VgpjZ3/connect-to-microsoft-365-enter-password.png","height":"auto","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"9":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/4Rs6bkV/get-help-get-msoluser.png","width":"auto","height":"auto","alt":"P{owerShell command Get-Help Get-MsolUser"}},"10":{"data":{"alt":"PowerShell running Get-Help Get-MsolUser -Example","width":"auto","src":"https://i.ibb.co/HdW0MVN/get-help-get-msoluser-examples.png","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"11":{"mutability":"MUTABLE","data":{"url":"https://gitbit-my.sharepoint.com/:x:/g/personal/john_gruber_gitbit_org/EQ0d0msWFOtGjxpFbMfgqd8Bk8BUclseahXPgO4dB4ZKcw?e=XB4FQq","targetOption":"_blank"},"type":"LINK"},"12":{"type":"LINK","data":{"targetOption":"_blank","url":"https://gitbit-my.sharepoint.com/:x:/g/personal/john_gruber_gitbit_org/EQwm_H3-5SFOkqV8qvhklBQB225Fdz4GfV1grM-6_Nl41w?e=yOljjN"},"mutability":"MUTABLE"},"13":{"data":{"url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"14":{"data":{"alignment":"none","width":"auto","alt":"Open SharePoint admin center","height":"auto","src":"https://i.ibb.co/xMS0rB1/sharepoint-admin-center.png"},"type":"IMAGE","mutability":"MUTABLE"},"15":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/BKbHN2x/Share-Point-url.png","alt":"Copy the SharePoint URL"}},"16":{"data":{"alt":"Connect the SharePoint Online using PowerShell","width":"auto","src":"https://i.ibb.co/pPgzDsj/connect-to-sharepoint-online-using-powershell.png","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"}},"blocks":[{"depth":0,"type":"header-two","entityRanges":[],"text":"What's PowerShell?","key":"9tq4i","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"depth":0,"text":"The best way to explain PowerShell is directly from Microsoft:","type":"unstyled","key":"aipuu","data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"a6cad","data":{},"type":"blockquote","text":"PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. PowerShell runs on Windows, Linux, and macOS."},{"data":{},"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"text":"To put it another way, PowerShell is a command-line + a scripting language combined. It's a powerful tool that can be used to automate actions on your computer as well as actions in Microsoft 365. But it doesn't manage Microsoft 365 out of the box. You first have to extend it which can be done using modules.","key":"41u92","depth":0},{"inlineStyleRanges":[],"data":{},"text":"Why PowerShell?","depth":0,"entityRanges":[],"key":"7i9lc","type":"header-two"},{"data":{},"text":"From PowerShell, you can make changes in bulk. For example, you can connect to Microsoft 365 using PowerShell, get a list of unlicensed users and license them all. All from a single script. You can also export data. Need a list of all the users or all the mailboxes? It's no problem with PowerShell. Get the data and export it to CSV. Or maybe you need to give a lot of users access to a SharePoint site. That's no problem with PowerShell.","type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"cabqa"},{"entityRanges":[],"data":{},"depth":0,"text":"How do you access PowerShell?","type":"header-two","inlineStyleRanges":[],"key":"6rdgp"},{"entityRanges":[],"type":"unstyled","key":"49v","depth":0,"data":{},"text":"PowerShell is automatically installed on all the latest versions of Windows. To access PowerShell on your computer click in the search box then type PowerShell. Finally, click PowerShell in the start menu.","inlineStyleRanges":[]},{"text":"","entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[],"data":{},"key":"9k8rv"},{"entityRanges":[{"length":1,"offset":0,"key":0}],"inlineStyleRanges":[],"text":" ","depth":0,"data":{},"key":"7l3he","type":"atomic"},{"type":"header-two","data":{},"key":"c61f7","depth":0,"entityRanges":[],"text":"How to connect to Microsoft 365 using PowerShell","inlineStyleRanges":[]},{"text":"One time setup","type":"header-three","inlineStyleRanges":[],"entityRanges":[],"key":"8riom","data":{},"depth":0},{"inlineStyleRanges":[{"length":77,"style":"ITALIC","offset":0}],"type":"unstyled","depth":0,"data":{},"text":"The following instructions need to be performed once per user on the machine.","entityRanges":[],"key":"aep59"},{"text":"1. If you're not running Windows 10, install Microsoft Online Services Sign-in Assistant. ","type":"unstyled","depth":0,"key":"ce25g","inlineStyleRanges":[],"data":{},"entityRanges":[{"length":43,"offset":45,"key":1}]},{"data":{},"entityRanges":[],"depth":0,"text":"2. Run Windows PowerShell as an administrator by searching for PowerShell in the start menu. Right-click Windows PowerShell then click Run as administrator.","key":"dq3u9","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":10,"offset":63},{"length":18,"offset":105,"style":"BOLD"},{"length":20,"offset":135,"style":"BOLD"}]},{"inlineStyleRanges":[],"data":{},"type":"atomic","entityRanges":[{"key":2,"length":1,"offset":0}],"depth":0,"key":"4fp2","text":" "},{"data":{},"key":"3iloq","type":"unstyled","inlineStyleRanges":[{"offset":23,"style":"BOLD","length":3}],"entityRanges":[],"depth":0,"text":"3. When prompted click Yes."},{"data":{},"inlineStyleRanges":[],"entityRanges":[{"key":3,"length":1,"offset":0}],"key":"ddi9p","text":" ","type":"atomic","depth":0},{"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":30,"length":62}],"text":"4. Run the following command: Set-PSRepository -Name \"PSGallery\" -InstallationPolicy Trusted","data":{},"type":"unstyled","key":"13ej6","depth":0},{"data":{"text-align":"left"},"key":"fqqc6","text":"5. If prompted with the following click Y then press Enter.","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":59},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":59},{"style":"fontsize-16","length":59,"offset":0},{"offset":0,"length":59,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"style":"BOLD","length":1,"offset":40},{"length":5,"style":"BOLD","offset":53}],"entityRanges":[],"type":"unstyled","depth":0},{"inlineStyleRanges":[{"length":515,"offset":0,"style":"color-rgb(33,37,41)"},{"length":515,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"length":515,"style":"fontsize-16","offset":0},{"length":515,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0},{"style":"bgcolor-rgb(241,241,241)","offset":0,"length":515},{"style":"fontfamily-monospace","offset":0,"length":515}],"entityRanges":[],"type":"unstyled","depth":0,"key":"321qq","data":{"text-align":"left"},"text":"NuGet provider is required to continue\nPowerShellGet requires NuGet provider version '2.8.5.201' or newer to interact with NuGet-based repositories. The NuGet provider must be available in 'C:\\Program Files\\PackageManagement\\ProviderAssemblies' or 'C:\\Users\\BasicUser\\AppData\\Local\\PackageManagement\\ProviderAssemblies'. You can also install the NuGet provider by running 'Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force'. Do you want PowerShellGet to install and import the NuGet provider now?"},{"depth":0,"entityRanges":[{"key":4,"length":1,"offset":0}],"text":" ","data":{},"inlineStyleRanges":[],"type":"atomic","key":"61qft"},{"key":"cf0r2","data":{},"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":23,"offset":30}],"depth":0,"text":"6. Run the following command: Install-Module MSOnline","type":"unstyled"},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":27,"offset":3},{"style":"bgcolor-rgb(255,255,255)","offset":3,"length":27},{"style":"fontsize-16","length":27,"offset":3},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":27,"offset":3},{"style":"BOLD","offset":30,"length":28}],"type":"unstyled","depth":0,"data":{},"key":"8pqmh","text":"7. Run the following command: Install-Module -Name AzureAD","entityRanges":[]},{"type":"unstyled","inlineStyleRanges":[{"offset":3,"style":"color-rgb(33,37,41)","length":26},{"style":"bgcolor-rgb(255,255,255)","offset":3,"length":26},{"style":"fontsize-16","length":26,"offset":3},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":3,"length":26},{"length":45,"offset":30,"style":"BOLD"}],"text":"8. Run the following command: Install-Module -Name ExchangeOnlineManagement","entityRanges":[],"depth":0,"data":{},"key":"esien"},{"text":"9. Run the following command: Install-Module -Name Microsoft.Online.SharePoint.PowerShell","key":"bro85","type":"unstyled","depth":0,"inlineStyleRanges":[{"length":26,"offset":3,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":26,"offset":3},{"style":"fontsize-16","length":26,"offset":3},{"offset":3,"length":26,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"style":"BOLD","length":59,"offset":30}],"data":{},"entityRanges":[]},{"text":"10. Run the following command: Install-Module -Name MicrosoftTeams -Force -AllowClobber","inlineStyleRanges":[{"length":56,"style":"BOLD","offset":31}],"entityRanges":[],"data":{},"type":"unstyled","key":"84plp","depth":0},{"data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":5}],"depth":0,"key":"5h5i2","text":" ","type":"atomic"},{"depth":0,"type":"unstyled","entityRanges":[],"data":{},"text":"11. Run the following command: Set-ExecutionPolicy RemoteSigned","inlineStyleRanges":[{"length":59,"style":"color-rgb(33,37,41)","offset":4},{"style":"bgcolor-rgb(255,255,255)","length":59,"offset":4},{"style":"fontsize-16","offset":4,"length":59},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":4,"length":59},{"style":"BOLD","length":32,"offset":31}],"key":"5bgsg"},{"data":{},"entityRanges":[],"type":"unstyled","key":"6capj","inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":85},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":85},{"style":"fontsize-16","offset":0,"length":85},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":85},{"offset":42,"style":"BOLD","length":1},{"offset":55,"style":"BOLD","length":5}],"depth":0,"text":"12. When prompted with the following type Y then press Enter.\nExecution Policy Change"},{"type":"unstyled","key":"3jspu","entityRanges":[],"depth":0,"text":"The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose you to the security risks described in the about_Execution_Policies help topic at https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?","inlineStyleRanges":[{"length":290,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":290},{"length":290,"offset":0,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":290,"offset":0},{"style":"CODE","length":290,"offset":0}],"data":{}},{"key":"12nq3","data":{},"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":87},{"style":"bgcolor-rgb(255,255,255)","length":87,"offset":0},{"length":87,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":87},{"offset":0,"style":"CODE","length":87}],"text":"[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is \"N\"):","type":"unstyled","entityRanges":[],"depth":0},{"depth":0,"data":{},"type":"unstyled","key":"1scq0","text":"","inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[{"key":6,"length":1,"offset":0}],"text":" ","key":"a7pjj","data":{},"inlineStyleRanges":[],"type":"atomic","depth":0},{"entityRanges":[],"type":"unstyled","key":"568ko","data":{},"text":"That's it. Your computer is set up to connect to Microsoft 365 using PowerShell. Now we need to connect to Microsoft 365 using PowerShell.","inlineStyleRanges":[],"depth":0},{"text":"Connect to Microsoft 365 using PowerShell","depth":0,"inlineStyleRanges":[],"data":{},"key":"3njc8","type":"header-three","entityRanges":[]},{"data":{},"inlineStyleRanges":[],"text":"You may have noticed that we installed modules for MSOnline, Azure AD, Exchange Online, SharePoint, and Microsoft Teams. Just like the Microsoft 365 admin centers, PowerShell is separated into different modules. Depending on the task you want to perform you'll need to connect using the correct module/command. The first connection we'll make is to Office 365. The MSOnline module is used to manage users, groups, licenses, and the tenant as a whole. It's directly related to the Microsoft 365 admin center from the last lesson.","key":"d0mni","type":"unstyled","depth":0,"entityRanges":[]},{"inlineStyleRanges":[],"type":"unstyled","text":"The following commands will need to be run every time you want to connect to Microsoft 365 using PowerShell.","key":"55jg8","depth":0,"entityRanges":[],"data":{}},{"text":"1. Run the following command: Connect-MsolService","type":"unstyled","depth":0,"data":{},"entityRanges":[],"key":"3cfuv","inlineStyleRanges":[{"length":19,"style":"BOLD","offset":30}]},{"inlineStyleRanges":[{"style":"BOLD","offset":48,"length":4}],"text":"2. When prompted enter your username then click Next.","type":"unstyled","entityRanges":[],"key":"eqhcv","data":{},"depth":0},{"entityRanges":[{"offset":0,"length":1,"key":7}],"data":{},"type":"atomic","depth":0,"key":"26a9t","inlineStyleRanges":[],"text":" "},{"type":"unstyled","inlineStyleRanges":[],"key":"6pme2","text":"3. Then enter your password and click Sign in.","entityRanges":[],"depth":0,"data":{}},{"entityRanges":[{"length":1,"key":8,"offset":0}],"inlineStyleRanges":[],"type":"atomic","key":"52mle","text":" ","depth":0,"data":{}},{"text":"4. If prompted for MFA, enter your MFA information then finish the connection.","depth":0,"inlineStyleRanges":[],"entityRanges":[],"key":"4igbs","type":"unstyled","data":{}},{"inlineStyleRanges":[],"depth":0,"text":"How to learn more","data":{},"entityRanges":[],"type":"header-three","key":"cvjfl"},{"entityRanges":[],"type":"unstyled","key":"5p318","text":"That's all it takes to connect to Microsoft 365 using PowerShell but the question is what now? How do you get a list of the users? Or the groups? Well, you can view all of the commands available to you via the command Get-Command -Module MSOnline. You can get help on each of the commands by running \"get-help <the-command>\".","depth":0,"data":{},"inlineStyleRanges":[{"length":28,"style":"BOLD","offset":218},{"offset":301,"length":22,"style":"BOLD"}]},{"data":{},"inlineStyleRanges":[{"length":21,"offset":99,"style":"BOLD"}],"type":"unstyled","text":"For example, there's a command available called \"Get-MsolUser\". To see the help for it you can run Get-Help Get-MsolUser.","key":"5c8st","depth":0,"entityRanges":[]},{"key":"cipd2","depth":0,"text":" ","entityRanges":[{"length":1,"offset":0,"key":9}],"data":{},"type":"atomic","inlineStyleRanges":[]},{"entityRanges":[],"depth":0,"key":"8vj4m","data":{},"text":"To see an example of running the commands you can run \"Get-Help <the-command> -Examples\"","inlineStyleRanges":[{"length":32,"style":"BOLD","offset":55}],"type":"unstyled"},{"entityRanges":[{"offset":0,"key":10,"length":1}],"inlineStyleRanges":[],"type":"atomic","text":" ","key":"b06n5","depth":0,"data":{}},{"text":"If you need further help simply Google it.","entityRanges":[],"data":{},"inlineStyleRanges":[],"key":"qs6l","type":"unstyled","depth":0},{"text":"Connect to Exchange Online using PowerShell","depth":0,"type":"header-three","key":"1ljp3","entityRanges":[],"inlineStyleRanges":[],"data":{}},{"entityRanges":[],"type":"unstyled","text":"So now you've connected to Office 365, but you can't manage email from the Microsoft 365 PowerShell. To manage the email you need to connect to Exchange Online.","inlineStyleRanges":[],"key":"4kjr2","depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[{"length":22,"style":"BOLD","offset":46}],"key":"d0ueq","type":"unstyled","entityRanges":[],"data":{},"text":"1. From PowerShell run the following command: Connect-ExchangeOnline"},{"data":{},"inlineStyleRanges":[],"key":"cjutf","entityRanges":[],"depth":0,"text":"2. Enter your username and password like you did when connecting to Microsoft 365.","type":"unstyled"},{"depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":106,"length":44}],"type":"unstyled","data":{},"key":"12pah","entityRanges":[{"offset":258,"key":11,"length":24}],"text":"That's it. You're now connected to Exchange Online using PowerShell. Just like Microsoft 365, you can run Get-Command -Module ExchangeOnlineManagement to get the primary commands but there are a lot more not listed. You can view all the commands by going to Exchange Online Commands."},{"key":"7fbtf","text":"Running a command","data":{},"entityRanges":[],"type":"header-four","inlineStyleRanges":[],"depth":0},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":183,"offset":123},{"style":"bgcolor-rgb(255,255,255)","offset":123,"length":183},{"length":183,"style":"fontsize-16","offset":123},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":183,"offset":123},{"length":49,"offset":310,"style":"BOLD"}],"entityRanges":[],"text":"So here's an example command: Set-Mailbox. You can use the set-mailbox command to edit the settings of existing mailboxes. Hypothetically, let's say someone deleted emails in User1's mailbox and you check the audit logs but they are empty. What do you do? You enable auditing for User1's mailbox. How? you run Set-Mailbox -Identity \"User1\" -AuditEnabled $true. Simply replace User1 with the user you want to enable auditing for and you're good to go.","data":{},"depth":0,"type":"unstyled","key":"fkqm6"},{"inlineStyleRanges":[{"offset":208,"length":124,"style":"BOLD"}],"text":"Here's another example: let's say yesterday you created retention labels so users can flag emails with a label to retain the emails permanently but a user needs to use the new label today what do you do? Run Get-Mailbox -ResultSize unlimited -RecipientTypeDetails UserMailbox | %{ Start-ManagedFolderAssistant $_.UserPrincipalName }.","data":{},"entityRanges":[],"depth":0,"key":"28voh","type":"unstyled"},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"text":"Connect to Azure AD using PowerShell","key":"a86dm","data":{},"type":"header-three"},{"entityRanges":[],"depth":0,"key":"be1u5","data":{},"type":"unstyled","inlineStyleRanges":[],"text":"Excellent, now we are connecting to Microsoft 365 and Exchange Online. But what about Azure AD? It's just as easy."},{"data":{},"inlineStyleRanges":[{"offset":46,"style":"BOLD","length":15}],"key":"6slku","depth":0,"text":"1. From PowerShell run the following command: Connect-AzureAD","entityRanges":[],"type":"unstyled"},{"data":{},"entityRanges":[],"depth":0,"text":"2. Enter your username and password like you did when connecting to Microsoft 365.","type":"unstyled","key":"9p3cf","inlineStyleRanges":[]},{"type":"unstyled","entityRanges":[],"text":"That's it. You're now connected to Azure AD using PowerShell. You can run Get-Command -Module AzureAD to get the commands for Azure AD.","depth":0,"data":{},"key":"eo0ft","inlineStyleRanges":[{"style":"BOLD","length":27,"offset":74}]},{"text":"Connect to Security & Compliance center using PowerShell","type":"header-three","inlineStyleRanges":[],"depth":0,"data":{},"key":"4auja","entityRanges":[]},{"entityRanges":[],"type":"unstyled","data":{},"inlineStyleRanges":[{"style":"BOLD","length":19,"offset":46}],"key":"9aj05","text":"1. From PowerShell run the following command: Connect-IPPSSession","depth":0},{"data":{},"entityRanges":[],"depth":0,"type":"unstyled","text":"2. Enter your username and password like you did when connecting to Microsoft 365.","key":"f6knf","inlineStyleRanges":[]},{"depth":0,"type":"unstyled","key":"c0rv7","data":{},"entityRanges":[{"length":48,"key":12,"offset":113}],"text":"That's it. You're now connected to Security & Compliance using PowerShell. You can view the commands by going to Security & Compliance Center PowerShell commands.","inlineStyleRanges":[]},{"depth":0,"type":"unstyled","data":{},"entityRanges":[],"key":"4ulvn","inlineStyleRanges":[],"text":"Here's a more complex example of using PowerShell. From the Security & Compliance admin center, you can download an XML of the rules, update the XML, then upload the XML to modify the rules."},{"data":{},"entityRanges":[],"type":"unstyled","text":"1. Run Connect-IPPSession to connect to the security and compliance PowerShell","key":"19l8l","depth":0,"inlineStyleRanges":[]},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"text":"2. Export the XML file of the current rules using the following:","type":"unstyled","depth":0,"key":"cgfd8"},{"key":"c0732","entityRanges":[],"inlineStyleRanges":[{"style":"CODE","offset":0,"length":61}],"text":"$ruleCollections = Get-DlpSensitiveInformationTypeRulePackage","type":"unstyled","depth":0,"data":{}},{"data":{},"text":"Set-Content -path C:\\custompath\\exportedRules.xml -Encoding Byte -Value $ruleCollections.SerializedClassificationRuleCollection","entityRanges":[],"key":"8mber","inlineStyleRanges":[{"style":"CODE","offset":0,"length":127}],"type":"unstyled","depth":0},{"key":"qur6","data":{},"inlineStyleRanges":[{"length":27,"style":"color-rgb(33,37,41)","offset":0},{"offset":0,"length":27,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","offset":0,"length":27},{"length":27,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"text":"3. Modify the exported XML.","depth":0,"entityRanges":[],"type":"unstyled"},{"inlineStyleRanges":[{"offset":0,"length":24,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":24,"offset":0},{"offset":0,"style":"fontsize-16","length":24},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":24}],"depth":0,"type":"unstyled","key":"b5374","text":"4. Upload your new rules","data":{},"entityRanges":[]},{"type":"unstyled","text":"New-DlpSensitiveInformationTypeRulePackage -FileData (Get-Content -Path \"C:\\custompath\\exportedRules.xml\" -Encoding Byte)","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":121,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":87,"offset":0},{"offset":100,"style":"bgcolor-rgb(255,255,255)","length":21},{"style":"fontsize-16","offset":0,"length":121},{"length":87,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"offset":100,"length":21,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"length":87,"offset":0,"style":"CODE"},{"style":"CODE","length":21,"offset":100},{"offset":87,"style":"bgcolor-rgb(241,241,241)","length":13},{"style":"fontfamily-monospace","length":13,"offset":87}],"depth":0,"key":"9v1eo","entityRanges":[],"data":{}},{"text":"To confirm, type Y, and then press Enter.","entityRanges":[],"key":"9ts77","data":{},"depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":41,"offset":0},{"length":41,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"length":41,"style":"fontsize-16","offset":0},{"length":41,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"offset":17,"style":"BOLD","length":1},{"style":"BOLD","length":5,"offset":35}],"type":"unstyled"},{"type":"header-three","inlineStyleRanges":[],"entityRanges":[],"data":{},"depth":0,"key":"46e7t","text":"Connect to SharePoint Online using PowerShell"},{"key":"1l4fv","data":{},"inlineStyleRanges":[],"depth":0,"text":"Connecting to SharePoint Online using PowerShell takes a couple of extra steps. It isn't difficult, you just need to grab another piece of information.","type":"unstyled","entityRanges":[]},{"type":"unstyled","text":"1. Go to https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters and login to your Office 365 tenant using the global admin credentials.","depth":0,"data":{},"entityRanges":[{"length":80,"key":13,"offset":9}],"key":"4a0n2","inlineStyleRanges":[]},{"data":{},"entityRanges":[],"text":"2. Click SharePoint in the list.","inlineStyleRanges":[{"style":"BOLD","length":10,"offset":9}],"key":"cad8p","type":"unstyled","depth":0},{"key":"6d15e","text":" ","type":"atomic","data":{},"entityRanges":[{"key":14,"length":1,"offset":0}],"depth":0,"inlineStyleRanges":[]},{"data":{},"text":"3. Copy the SharePoint URL. Everything before the _layouts.","key":"5pltk","entityRanges":[],"type":"unstyled","depth":0,"inlineStyleRanges":[]},{"text":" ","entityRanges":[{"offset":0,"length":1,"key":15}],"key":"c18k3","depth":0,"type":"atomic","inlineStyleRanges":[],"data":{}},{"entityRanges":[],"depth":0,"text":"4. Run the following command Connect-SPOService -Url <The URL you copied> replacing the <The URL you copied> with the URL you copied in step 3.","type":"unstyled","key":"68hp3","data":{},"inlineStyleRanges":[{"length":44,"style":"BOLD","offset":29}]},{"depth":0,"key":"escub","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":16,"length":1}],"text":" ","data":{},"type":"atomic"},{"depth":0,"type":"unstyled","key":"8rjca","entityRanges":[],"inlineStyleRanges":[],"data":{},"text":"5. Login with your admin credentials."},{"inlineStyleRanges":[{"offset":96,"length":58,"style":"BOLD"}],"key":"dvgfp","text":"That's it. You're now connected to SharePoint Online using PowerShell. To view the commands run Get-Command -Module Microsoft.Online.SharePoint.PowerShell.","depth":0,"data":{},"type":"unstyled","entityRanges":[]},{"data":{},"key":"9fbit","inlineStyleRanges":[{"length":40,"offset":131,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":40,"offset":131},{"style":"fontsize-16","length":40,"offset":131},{"length":40,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":131},{"offset":437,"length":57,"style":"BOLD"}],"entityRanges":[],"depth":0,"text":"Let's take another example command. Let's say you're tasked with securing your SharePoint environment. You need to stop users from downloading, printing, and syncing files from SharePoint Online using unmanaged devices. What's a managed device? A managed device is a device that is hybrid Azure AD joined or compliant in Intune. In short, a user has logged in to your SharePoint environment using their device. How do you do it? You run Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess. Let's break down the command. The Set-SPOTenant portion is the command. It's run to set properties on the SharePoint Online organization.","type":"unstyled"},{"entityRanges":[],"key":"1d8h1","inlineStyleRanges":[],"type":"header-three","text":"Connect to Microsoft Teams using PowerShell","depth":0,"data":{}},{"entityRanges":[],"data":{},"text":"Excellent, now we are connecting to Microsoft 365, Exchage Online, Azure AD, SharePoint Online, and Security & Compliance center. But what about Microsoft Teams? It's just as easy.","key":"9ah0p","inlineStyleRanges":[],"depth":0,"type":"unstyled"},{"key":"fqh1o","data":{},"text":"1. From PowerShell run the following command: Connect-MicrosoftTeams","depth":0,"inlineStyleRanges":[{"offset":46,"style":"BOLD","length":22}],"entityRanges":[],"type":"unstyled"},{"depth":0,"key":"9t1pg","data":{},"text":"2. Enter your username and password like you did when connecting to Microsoft 365.","entityRanges":[],"type":"unstyled","inlineStyleRanges":[]},{"inlineStyleRanges":[{"length":34,"style":"BOLD","offset":81}],"depth":0,"data":{},"text":"That's it. You're now connected to Microsoft Teams using PowerShell. You can run Get-Command -Module MicrosoftTeams to get the commands for Microsoft Teams.","type":"unstyled","key":"b7mb5","entityRanges":[]},{"type":"header-three","entityRanges":[],"inlineStyleRanges":[],"key":"5043i","data":{},"depth":0,"text":"To Disconnect from Microsoft 365 using PowerShell"},{"text":"To disconnect from Microsoft 365 PowerShell simply close the PowerShell window. You can simply close the window to disconnect from all the PowerShell connections.","data":{},"key":"fc7dg","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[]},{"entityRanges":[],"type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":25,"offset":100}],"key":"350kf","data":{},"text":"To disconnect from Exchange Online or Security and Compliance PowerShell run the following command: Disconnect-ExchangeOnline"},{"key":"4dd90","text":"To disconnect from Azure AD PowerShell run the following command: Disconnect-AzureAD","type":"unstyled","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":66,"style":"BOLD","length":18}]},{"data":{},"text":"To disconnect from SharePoint Online PowerShell run the following command: Disconnect-SPOService","type":"unstyled","key":"a6pvn","depth":0,"entityRanges":[],"inlineStyleRanges":[{"length":21,"style":"BOLD","offset":75}]},{"type":"unstyled","data":{},"depth":0,"text":"To disconnect from Microsoft Teams PowerShell run the following command: Disconnect-MicrosoftTeams","key":"bub1","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":25,"offset":73}]}]},"slug":"Managing-Microsoft-365-through-PowerShell-cg_vxOX9L","featuredImage":"https://i.ibb.co/HV13YF6/install-microsoft-365-powershell-modules.png","id":"cg_vxOX9L","datePublished":"2022/5/26","pushlish":true,"images":["https://i.ibb.co/31fXgzV/Power-Shell.png","https://i.ibb.co/4WfH7pW/powershell-as-admin.png","https://i.ibb.co/tYJ6H9X/Power-Shell-Allow-this-app.png","https://i.ibb.co/27KmRNQ/Power-Shell-Approval.png","https://i.ibb.co/Qf5V2PF/install-module-azure.png","https://i.ibb.co/qyMttBg/install-nuget.png","https://i.ibb.co/HV13YF6/install-microsoft-365-powershell-modules.png","https://i.ibb.co/hdMWybz/connect-to-microsoft-365.png","https://i.ibb.co/0VgpjZ3/connect-to-microsoft-365-enter-password.png","https://i.ibb.co/4Rs6bkV/get-help-get-msoluser.png","https://i.ibb.co/HdW0MVN/get-help-get-msoluser-examples.png","https://i.ibb.co/1mnGG2H/set-executionpolicy.png","https://i.ibb.co/xMS0rB1/sharepoint-admin-center.png","https://i.ibb.co/BKbHN2x/Share-Point-url.png","https://i.ibb.co/pPgzDsj/connect-to-sharepoint-online-using-powershell.png"],"description":"How to connect to all Microsoft 365 services through PowerShell","type":"article"},
      nextContentSlug: 'How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC',
      previousContentSlug: 'Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe',
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
                <div><h2>What's PowerShell?</h2>
<p>The best way to explain PowerShell is directly from Microsoft:</p>
<blockquote>PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. PowerShell runs on Windows, Linux, and macOS.</blockquote>
<p>To put it another way, PowerShell is a command-line + a scripting language combined. It's a powerful tool that can be used to automate actions on your computer as well as actions in Microsoft 365. But it doesn't manage Microsoft 365 out of the box. You first have to extend it which can be done using modules.</p>
<h2>Why PowerShell?</h2>
<p>From PowerShell, you can make changes in bulk. For example, you can connect to Microsoft 365 using PowerShell, get a list of unlicensed users and license them all. All from a single script. You can also export data. Need a list of all the users or all the mailboxes? It's no problem with PowerShell. Get the data and export it to CSV. Or maybe you need to give a lot of users access to a SharePoint site. That's no problem with PowerShell.</p>
<h2>How do you access PowerShell?</h2>
<p>PowerShell is automatically installed on all the latest versions of Windows. To access PowerShell on your computer click in the search box then type PowerShell. Finally, click PowerShell in the start menu.</p>
<p></p>
<div ><img src="https://i.ibb.co/31fXgzV/Power-Shell.png" alt="Access PowerShell" style="height: auto;width: auto"/></div>
<h2>How to connect to Microsoft 365 using PowerShell</h2>
<h3>One time setup</h3>
<p><em>The following instructions need to be performed once per user on the machine.</em></p>
<p>1. If you're not running Windows 10, install <a href="https://download.microsoft.com/download/7/1/E/71EF1D05-A42C-4A1F-8162-96494B5E615C/msoidcli_32bit.msi" target="_blank">Microsoft Online Services Sign-in Assistant</a>.&nbsp;</p>
<p>2. Run Windows PowerShell as an administrator by searching for <strong>PowerShell</strong> in the start menu. Right-click <strong>Windows PowerShell</strong> then click <strong>Run as administrator</strong>.</p>
<img src="https://i.ibb.co/4WfH7pW/powershell-as-admin.png" alt="Open PowerShell as an admin" style="height: auto;width: auto"/>
<p>3. When prompted click <strong>Yes</strong>.</p>
<img src="https://i.ibb.co/tYJ6H9X/Power-Shell-Allow-this-app.png" alt="PowerShell Allow open as admin" style="height: auto;width: auto"/>
<p>4. Run the following command: <strong>Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted</strong></p>
<p ><span >5. If prompted with the following click <strong>Y</strong> then press <strong>Enter</strong>.</span></p>
<p ><span >NuGet provider is required to continue<br/>PowerShellGet requires NuGet provider version '2.8.5.201' or newer to interact with NuGet-based repositories. The NuGet provider must be available in 'C:\Program Files\PackageManagement\ProviderAssemblies' or 'C:\Users\BasicUser\AppData\Local\PackageManagement\ProviderAssemblies'. You can also install the NuGet provider by running 'Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force'. Do you want PowerShellGet to install and import the NuGet provider now?</span></p>
<img src="https://i.ibb.co/qyMttBg/install-nuget.png" alt="Install NuGet" style="height: auto;width: auto"/>
<p>6. Run the following command: <strong>Install-Module MSOnline</strong></p>
<p>7. <span >Run the following command: </span><strong>Install-Module -Name AzureAD</strong></p>
<p>8. <span >Run the following command:</span> <strong>Install-Module -Name ExchangeOnlineManagement</strong></p>
<p>9. <span >Run the following command:</span> <strong>Install-Module -Name Microsoft.Online.SharePoint.PowerShell</strong></p>
<p>10. Run the following command: <strong>Install-Module -Name MicrosoftTeams -Force -AllowClobber</strong></p>
<img src="https://i.ibb.co/HV13YF6/install-microsoft-365-powershell-modules.png" alt="Install Microsoft 365 PowerShell Modules" style="height: auto;width: auto"/>
<p>11. <span >Run the following command: <strong>Set-ExecutionPolicy RemoteSigned</strong></span></p>
<p><span >12. When prompted with the following type <strong>Y</strong> then press <strong>Enter</strong>.<br/>Execution Policy Change</span></p>
<p><span ><code>The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose you to the security risks described in the about_Execution_Policies help topic at https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?</code></span></p>
<p><span ><code>[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"):</code></span></p>
<p></p>
<img src="https://i.ibb.co/1mnGG2H/set-executionpolicy.png" alt="Set-ExecutionPolicy RemoteSigned" style="height: auto;width: auto"/>
<p>That's it. Your computer is set up to connect to Microsoft 365 using PowerShell. Now we need to connect to Microsoft 365 using PowerShell.</p>
<h3>Connect to Microsoft 365 using PowerShell</h3>
<p>You may have noticed that we installed modules for MSOnline, Azure AD, Exchange Online, SharePoint, and Microsoft Teams. Just like the Microsoft 365 admin centers, PowerShell is separated into different modules. Depending on the task you want to perform you'll need to connect using the correct module/command. The first connection we'll make is to Office 365. The MSOnline module is used to manage users, groups, licenses, and the tenant as a whole. It's directly related to the Microsoft 365 admin center from the last lesson.</p>
<p>The following commands will need to be run every time you want to connect to Microsoft 365 using PowerShell.</p>
<p>1. Run the following command: <strong>Connect-MsolService</strong></p>
<p>2. When prompted enter your username then click <strong>Next</strong>.</p>
<img src="https://i.ibb.co/hdMWybz/connect-to-microsoft-365.png" alt="Connect to Microsoft 365 PowerShell - Enter Username" style="height: auto;width: auto"/>
<p>3. Then enter your password and click Sign in.</p>
<img src="https://i.ibb.co/0VgpjZ3/connect-to-microsoft-365-enter-password.png" alt="Microsoft 365 PowerShell Sign in Enter Password" style="height: auto;width: auto"/>
<p>4. If prompted for MFA, enter your MFA information then finish the connection.</p>
<h3>How to learn more</h3>
<p>That's all it takes to connect to Microsoft 365 using PowerShell but the question is what now? How do you get a list of the users? Or the groups? Well, you can view all of the commands available to you via the command <strong>Get-Command -Module MSOnline</strong>. You can get help on each of the commands by running "<strong>get-help &lt;the-command&gt;</strong>".</p>
<p>For example, there's a command available called "Get-MsolUser". To see the help for it you can run <strong>Get-Help Get-MsolUser</strong>.</p>
<img src="https://i.ibb.co/4Rs6bkV/get-help-get-msoluser.png" alt="P&#123;owerShell command Get-Help Get-MsolUser" style="height: auto;width: auto"/>
<p>To see an example of running the commands you can run "<strong>Get-Help &lt;the-command&gt; -Examples</strong>"</p>
<img src="https://i.ibb.co/HdW0MVN/get-help-get-msoluser-examples.png" alt="PowerShell running Get-Help Get-MsolUser -Example" style="height: auto;width: auto"/>
<p>If you need further help simply Google it.</p>
<h3>Connect to Exchange Online using PowerShell</h3>
<p>So now you've connected to Office 365, but you can't manage email from the Microsoft 365 PowerShell. To manage the email you need to connect to Exchange Online.</p>
<p>1. From PowerShell run the following command: <strong>Connect-ExchangeOnline</strong></p>
<p>2. Enter your username and password like you did when connecting to Microsoft 365.</p>
<p>That's it. You're now connected to Exchange Online using PowerShell. Just like Microsoft 365, you can run <strong>Get-Command -Module ExchangeOnlineManagement</strong> to get the primary commands but there are a lot more not listed. You can view all the commands by going to <a href="https://gitbit-my.sharepoint.com/:x:/g/personal/john_gruber_gitbit_org/EQ0d0msWFOtGjxpFbMfgqd8Bk8BUclseahXPgO4dB4ZKcw?e=XB4FQq" target="_blank">Exchange Online Commands</a>.</p>
<h4>Running a command</h4>
<p>So here's an example command: Set-Mailbox. You can use the set-mailbox command to edit the settings of existing mailboxes. <span >Hypothetically, let's say someone deleted emails in User1's mailbox and you check the audit logs but they are empty. What do you do? You enable auditing for User1's mailbox. How? you </span>run <strong>Set-Mailbox -Identity "User1" -AuditEnabled $true</strong>. Simply replace User1 with the user you want to enable auditing for and you're good to go.</p>
<p>Here's another example: let's say yesterday you created retention labels so users can flag emails with a label to retain the emails permanently but a user needs to use the new label today what do you do? Run <strong>Get-Mailbox -ResultSize unlimited -RecipientTypeDetails UserMailbox | %&#123; Start-ManagedFolderAssistant $_.UserPrincipalName &#125;</strong>.</p>
<h3>Connect to Azure AD using PowerShell</h3>
<p>Excellent, now we are connecting to Microsoft 365 and Exchange Online. But what about Azure AD? It's just as easy.</p>
<p>1. From PowerShell run the following command: <strong>Connect-AzureAD</strong></p>
<p>2. Enter your username and password like you did when connecting to Microsoft 365.</p>
<p>That's it. You're now connected to Azure AD using PowerShell. You can run <strong>Get-Command -Module AzureAD</strong> to get the commands for Azure AD.</p>
<h3>Connect to Security &amp; Compliance center using PowerShell</h3>
<p>1. From PowerShell run the following command: <strong>Connect-IPPSSession</strong></p>
<p>2. Enter your username and password like you did when connecting to Microsoft 365.</p>
<p>That's it. You're now connected to Security &amp; Compliance using PowerShell. You can view the commands by going to <a href="https://gitbit-my.sharepoint.com/:x:/g/personal/john_gruber_gitbit_org/EQwm_H3-5SFOkqV8qvhklBQB225Fdz4GfV1grM-6_Nl41w?e=yOljjN" target="_blank">Security &amp; Compliance Center PowerShell commands</a>.</p>
<p>Here's a more complex example of using PowerShell. From the Security &amp; Compliance admin center, you can download an XML of the rules, update the XML, then upload the XML to modify the rules.</p>
<p>1. Run Connect-IPPSession to connect to the security and compliance PowerShell</p>
<p>2. Export the XML file of the current rules using the following:</p>
<p><code>$ruleCollections = Get-DlpSensitiveInformationTypeRulePackage</code></p>
<p><code>Set-Content -path C:\custompath\exportedRules.xml -Encoding Byte -Value $ruleCollections.SerializedClassificationRuleCollection</code></p>
<p><span >3. Modify the exported XML.</span></p>
<p><span >4. Upload your new rules</span></p>
<p><span ><code>New-DlpSensitiveInformationTypeRulePackage -FileData (Get-Content -Path "C:\custompath\</code></span><span >exportedRules</span><span ><code>.xml" -Encoding Byte)</code></span></p>
<p><span >To confirm, type <strong>Y</strong>, and then press <strong>Enter</strong>.</span></p>
<h3>Connect to SharePoint Online using PowerShell</h3>
<p>Connecting to SharePoint Online using PowerShell takes a couple of extra steps. It isn't difficult, you just need to grab another piece of information.</p>
<p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters" target="_blank">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters</a> and login to your Office 365 tenant using the global admin credentials.</p>
<p>2. Click <strong>SharePoint</strong> in the list.</p>
<div ><img src="https://i.ibb.co/xMS0rB1/sharepoint-admin-center.png" alt="Open SharePoint admin center" style="height: auto;width: auto"/></div>
<p>3. Copy the SharePoint URL. Everything before the _layouts.</p>
<img src="https://i.ibb.co/BKbHN2x/Share-Point-url.png" alt="Copy the SharePoint URL" style="height: auto;width: auto"/>
<p>4. Run the following command <strong>Connect-SPOService -Url &lt;The URL you copied&gt;</strong> replacing the &lt;The URL you copied&gt; with the URL you copied in step 3.</p>
<img src="https://i.ibb.co/pPgzDsj/connect-to-sharepoint-online-using-powershell.png" alt="Connect the SharePoint Online using PowerShell" style="height: auto;width: auto"/>
<p>5. Login with your admin credentials.</p>
<p>That's it. You're now connected to SharePoint Online using PowerShell. To view the commands run <strong>Get-Command -Module Microsoft.Online.SharePoint.PowerShell</strong>.</p>
<p>Let's take another example command. Let's say you're tasked with securing your SharePoint environment. You need to stop users from <span >downloading, printing, and syncing files</span> from SharePoint Online using unmanaged devices. What's a managed device? A managed device is a device that is hybrid Azure AD joined or compliant in Intune. In short, a user has logged in to your SharePoint environment using their device. How do you do it? You run <strong>Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess</strong>. Let's break down the command. The Set-SPOTenant portion is the command. It's run to set properties on the SharePoint Online organization.</p>
<h3>Connect to Microsoft Teams using PowerShell</h3>
<p>Excellent, now we are connecting to Microsoft 365, Exchage Online, Azure AD, SharePoint Online, and Security &amp; Compliance center. But what about Microsoft Teams? It's just as easy.</p>
<p>1. From PowerShell run the following command: <strong>Connect-MicrosoftTeams</strong></p>
<p>2. Enter your username and password like you did when connecting to Microsoft 365.</p>
<p>That's it. You're now connected to Microsoft Teams using PowerShell. You can run <strong>Get-Command -Module MicrosoftTeams</strong> to get the commands for Microsoft Teams.</p>
<h3>To Disconnect from Microsoft 365 using PowerShell</h3>
<p>To disconnect from Microsoft 365 PowerShell simply close the PowerShell window. You can simply close the window to disconnect from all the PowerShell connections.</p>
<p>To disconnect from Exchange Online or Security and Compliance PowerShell run the following command: <strong>Disconnect-ExchangeOnline</strong></p>
<p>To disconnect from Azure AD PowerShell run the following command: <strong>Disconnect-AzureAD</strong></p>
<p>To disconnect from SharePoint Online PowerShell run the following command: <strong>Disconnect-SPOService</strong></p>
<p>To disconnect from Microsoft Teams PowerShell run the following command: <strong>Disconnect-MicrosoftTeams</strong></p>
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