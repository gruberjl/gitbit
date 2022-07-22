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

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)
    this.getUid = this.getUid.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
      article: {ARTICLE: true},
      nextContentSlug: 'How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC',
      previousContentSlug: 'Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe',
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
    if (document.body.scrollHeight * .8 < window.innerHeight + window.scrollY)
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
                <div><h2>What's PowerShell?</h2>
                  <p>The best way to explain PowerShell is directly from Microsoft:</p>
                  <blockquote>PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. PowerShell runs on Windows, Linux, and macOS.</blockquote>
                  <p>To put it another way, PowerShell is a command-line + a scripting language combined. It's a powerful tool that can be used to automate actions on your computer as well as actions in Microsoft 365. But it doesn't manage Microsoft 365 out of the box. You first have to extend it which can be done using modules.</p>
                  <h2>Why PowerShell?</h2>
                  <p>From PowerShell, you can make changes in bulk. For example, you can connect to Microsoft 365 using PowerShell, get a list of unlicensed users and license them all. All from a single script. You can also export data. Need a list of all the users or all the mailboxes? It's no problem with PowerShell. Get the data and export it to CSV. Or maybe you need to give a lot of users access to a SharePoint site. That's no problem with PowerShell.</p>
                  <h2>How do you access PowerShell?</h2>
                  <p>PowerShell is automatically installed on all the latest versions of Windows. To access PowerShell on your computer click in the search box then type PowerShell. Finally, click PowerShell in the start menu.</p>
                  <p />
                  <div ><img src="https://i.ibb.co/31fXgzV/Power-Shell.png" alt="Access PowerShell" style="height: auto;width: auto" /></div>
                  <h2>How to connect to Microsoft 365 using PowerShell</h2>
                  <h3>One time setup</h3>
                  <p><em>The following instructions need to be performed once per user on the machine.</em></p>
                  <p>1. If you're not running Windows 10, install <a href="https://download.microsoft.com/download/7/1/E/71EF1D05-A42C-4A1F-8162-96494B5E615C/msoidcli_32bit.msi" target="_blank" rel="noreferrer">Microsoft Online Services Sign-in Assistant</a>.&nbsp;</p>
                  <p>2. Run Windows PowerShell as an administrator by searching for <strong>PowerShell</strong> in the start menu. Right-click <strong>Windows PowerShell</strong> then click <strong>Run as administrator</strong>.</p>
                  <img src="https://i.ibb.co/4WfH7pW/powershell-as-admin.png" alt="Open PowerShell as an admin" style="height: auto;width: auto" />
                  <p>3. When prompted click <strong>Yes</strong>.</p>
                  <img src="https://i.ibb.co/tYJ6H9X/Power-Shell-Allow-this-app.png" alt="PowerShell Allow open as admin" style="height: auto;width: auto" />
                  <p>4. Run the following command: <strong>Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted</strong></p>
                  <p ><span >5. If prompted with the following click <strong>Y</strong> then press <strong>Enter</strong>.</span></p>
                  <p ><span >NuGet provider is required to continue<br />PowerShellGet requires NuGet provider version '2.8.5.201' or newer to interact with NuGet-based repositories. The NuGet provider must be available in 'C:\Program Files\PackageManagement\ProviderAssemblies' or 'C:\Users\BasicUser\AppData\Local\PackageManagement\ProviderAssemblies'. You can also install the NuGet provider by running 'Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force'. Do you want PowerShellGet to install and import the NuGet provider now?</span></p>
                  <img src="https://i.ibb.co/qyMttBg/install-nuget.png" alt="Install NuGet" style="height: auto;width: auto" />
                  <p>6. Run the following command: <strong>Install-Module MSOnline</strong></p>
                  <p>7. <span >Run the following command: </span><strong>Install-Module -Name AzureAD</strong></p>
                  <p>8. <span >Run the following command:</span> <strong>Install-Module -Name ExchangeOnlineManagement</strong></p>
                  <p>9. <span >Run the following command:</span> <strong>Install-Module -Name Microsoft.Online.SharePoint.PowerShell</strong></p>
                  <p>10. Run the following command: <strong>Install-Module -Name MicrosoftTeams -Force -AllowClobber</strong></p>
                  <img src="https://i.ibb.co/HV13YF6/install-microsoft-365-powershell-modules.png" alt="Install Microsoft 365 PowerShell Modules" style="height: auto;width: auto" />
                  <p>11. <span >Run the following command: <strong>Set-ExecutionPolicy RemoteSigned</strong></span></p>
                  <p><span >12. When prompted with the following type <strong>Y</strong> then press <strong>Enter</strong>.<br />Execution Policy Change</span></p>
                  <p><span ><code>The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose you to the security risks described in the about_Execution_Policies help topic at https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?</code></span></p>
                  <p><span ><code>[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"):</code></span></p>
                  <p />
                  <img src="https://i.ibb.co/1mnGG2H/set-executionpolicy.png" alt="Set-ExecutionPolicy RemoteSigned" style="height: auto;width: auto" />
                  <p>That's it. Your computer is set up to connect to Microsoft 365 using PowerShell. Now we need to connect to Microsoft 365 using PowerShell.</p>
                  <h3>Connect to Microsoft 365 using PowerShell</h3>
                  <p>You may have noticed that we installed modules for MSOnline, Azure AD, Exchange Online, SharePoint, and Microsoft Teams. Just like the Microsoft 365 admin centers, PowerShell is separated into different modules. Depending on the task you want to perform you'll need to connect using the correct module/command. The first connection we'll make is to Office 365. The MSOnline module is used to manage users, groups, licenses, and the tenant as a whole. It's directly related to the Microsoft 365 admin center from the last lesson.</p>
                  <p>The following commands will need to be run every time you want to connect to Microsoft 365 using PowerShell.</p>
                  <p>1. Run the following command: <strong>Connect-MsolService</strong></p>
                  <p>2. When prompted enter your username then click <strong>Next</strong>.</p>
                  <img src="https://i.ibb.co/hdMWybz/connect-to-microsoft-365.png" alt="Connect to Microsoft 365 PowerShell - Enter Username" style="height: auto;width: auto" />
                  <p>3. Then enter your password and click Sign in.</p>
                  <img src="https://i.ibb.co/0VgpjZ3/connect-to-microsoft-365-enter-password.png" alt="Microsoft 365 PowerShell Sign in Enter Password" style="height: auto;width: auto" />
                  <p>4. If prompted for MFA, enter your MFA information then finish the connection.</p>
                  <h3>How to learn more</h3>
                  <p>That's all it takes to connect to Microsoft 365 using PowerShell but the question is what now? How do you get a list of the users? Or the groups? Well, you can view all of the commands available to you via the command <strong>Get-Command -Module MSOnline</strong>. You can get help on each of the commands by running "<strong>get-help &lt;the-command&gt;</strong>".</p>
                  <p>For example, there's a command available called "Get-MsolUser". To see the help for it you can run <strong>Get-Help Get-MsolUser</strong>.</p>
                  <img src="https://i.ibb.co/4Rs6bkV/get-help-get-msoluser.png" alt="P&#123;owerShell command Get-Help Get-MsolUser" style="height: auto;width: auto" />
                  <p>To see an example of running the commands you can run "<strong>Get-Help &lt;the-command&gt; -Examples</strong>"</p>
                  <img src="https://i.ibb.co/HdW0MVN/get-help-get-msoluser-examples.png" alt="PowerShell running Get-Help Get-MsolUser -Example" style="height: auto;width: auto" />
                  <p>If you need further help simply Google it.</p>
                  <h3>Connect to Exchange Online using PowerShell</h3>
                  <p>So now you've connected to Office 365, but you can't manage email from the Microsoft 365 PowerShell. To manage the email you need to connect to Exchange Online.</p>
                  <p>1. From PowerShell run the following command: <strong>Connect-ExchangeOnline</strong></p>
                  <p>2. Enter your username and password like you did when connecting to Microsoft 365.</p>
                  <p>That's it. You're now connected to Exchange Online using PowerShell. Just like Microsoft 365, you can run <strong>Get-Command -Module ExchangeOnlineManagement</strong> to get the primary commands but there are a lot more not listed. You can view all the commands by going to <a href="https://gitbit-my.sharepoint.com/:x:/g/personal/john_gruber_gitbit_org/EQ0d0msWFOtGjxpFbMfgqd8Bk8BUclseahXPgO4dB4ZKcw?e=XB4FQq" target="_blank" rel="noreferrer">Exchange Online Commands</a>.</p>
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
                  <p>That's it. You're now connected to Security &amp; Compliance using PowerShell. You can view the commands by going to <a href="https://gitbit-my.sharepoint.com/:x:/g/personal/john_gruber_gitbit_org/EQwm_H3-5SFOkqV8qvhklBQB225Fdz4GfV1grM-6_Nl41w?e=yOljjN" target="_blank" rel="noreferrer">Security &amp; Compliance Center PowerShell commands</a>.</p>
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
                  <p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters" target="_blank" rel="noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters</a> and login to your Office 365 tenant using the global admin credentials.</p>
                  <p>2. Click <strong>SharePoint</strong> in the list.</p>
                  <div ><img src="https://i.ibb.co/xMS0rB1/sharepoint-admin-center.png" alt="Open SharePoint admin center" style="height: auto;width: auto" /></div>
                  <p>3. Copy the SharePoint URL. Everything before the _layouts.</p>
                  <img src="https://i.ibb.co/BKbHN2x/Share-Point-url.png" alt="Copy the SharePoint URL" style="height: auto;width: auto" />
                  <p>4. Run the following command <strong>Connect-SPOService -Url &lt;The URL you copied&gt;</strong> replacing the &lt;The URL you copied&gt; with the URL you copied in step 3.</p>
                  <img src="https://i.ibb.co/pPgzDsj/connect-to-sharepoint-online-using-powershell.png" alt="Connect the SharePoint Online using PowerShell" style="height: auto;width: auto" />
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
