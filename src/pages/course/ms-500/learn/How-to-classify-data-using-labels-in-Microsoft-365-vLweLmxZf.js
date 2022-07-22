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
      path: '/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf',
      article: {ARTICLE: true},
      nextContentSlug: 'Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f',
      previousContentSlug: 'Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1',
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
                <div><p>Information protection labels are a great way to add a layer of security to certain files, SharePoint sites, and emails. After the document or email is labeled the label can encrypt or apply a watermark. A label can be manually applied to documents or emails or automatically based on a sensitive info type. For example, you can configure a label to be automatically applied if the document contains a credit card number.</p>
                  <p>But let's dig in and start the setup.</p>
                  <h2>Enable labeling for Teams, SharePoint sites, and Microsoft 365 Groups</h2>
                  <p>Before you can apply labels to Teams, SharePoint sites, or Microsoft groups you first need to do some one-time configuration of your Microsoft 365 tenant.</p>
                  <p>1. Open PowerShell on your computer as an administrator.</p>
                  <p>2. Run the following command in PowerShell: "Install-Module <span >ExchangeOnlineManagement</span>". If prompted to install NuGet click <strong>Y </strong>then <strong>enter</strong>. When prompted to Install from the 'PSGallery' click <strong>A</strong> then <strong>enter</strong>.</p>
                  <div ><img src="https://i.ibb.co/1MM4DSX/install-module-Exchange-Online-Management.png" alt="Install-Module ExchangeOnlineManagement" style="height: auto;width: auto" /></div>
                  <p>3. Run the following command in PowerShell: "Install-Module AzureADPreview". When prompted to Install from the 'PSGallery' click <strong>A</strong> then <strong>enter</strong>.</p>
                  <div ><img src="https://i.ibb.co/kDhjC7b/Install-Module-Azure-ADPreview.png" alt="Install-Module AzureADPreview" style="height: auto;width: auto" /></div>
                  <p>4. Run the following command in PowerShell: "Connect-AzureAD". <span >Enter your global admin username and click Next. Enter your password and click Sign in. If MFA is required, complete the MFA.</span></p>
                  <div ><img src="https://i.ibb.co/FwL2qgZ/Connect-Azure-AD.png" alt="Connect-AzureAD" style="height: auto;width: auto" /></div>
                  <p>5. Copy and paste the following PowerShell to configure the settings:</p>
                  <pre>$grpUnifiedSetting = (Get-AzureADDirectorySetting | where -Property DisplayName -Value "Group.Unified" -EQ)<br />$Setting = $grpUnifiedSetting<br />if ($grpUnifiedSetting.Values) &#123;<br />    $Setting["EnableMIPLabels"] = "True"<br />    Set-AzureADDirectorySetting -Id $grpUnifiedSetting.Id -DirectorySetting $Setting<br />&#125; else &#123;<br />    $TemplateId = (Get-AzureADDirectorySettingTemplate | where &#123; $_.DisplayName -eq "Group.Unified" &#125;).Id<br />    $Template = Get-AzureADDirectorySettingTemplate | where -Property Id -Value $TemplateId -EQ<br />    $Setting = $Template.CreateDirectorySetting()<br />    $Setting["EnableMIPLabels"] = "True"<br />    New-AzureADDirectorySetting -DirectorySetting $Setting<br />&#125;</pre>
                  <div ><img src="https://i.ibb.co/XkJ074S/Set-Group-Settings.png" alt="Set Group Settings for labels" style="height: auto;width: auto" /></div>
                  <p>6. Run the following command in PowerShell: "Connect-IPPSSession". Enter your global admin username and click Next. Enter your password and click Sign in. If MFA is required, complete the MFA.</p>
                  <div ><img src="https://i.ibb.co/74sF0Rh/Connect-IPPSSession.png" alt="Connect-IPPSSession" style="height: auto;width: auto" /></div>
                  <p>7. Run the following command in PowerShell: "Execute-AzureAdLabelSync".</p>
                  <div ><img src="https://i.ibb.co/87Sq4rM/Execute-Azure-Ad-Label-Sync.png" alt="Execute-AzureAdLabelSync" style="height: auto;width: auto" /></div>
                  <p>8. Run the following command in PowerShell: "Install-Module Microsoft.Online.SharePoint.PowerShell". When prompted to install the modules from 'PSGallery' type <strong>A</strong> then press <strong>enter</strong>.</p>
                  <div ><img src="https://i.ibb.co/LRFLySV/Install-Module-Microsoft-Online-Share-Point-Power-Shell.png" alt="Install-Module Microsoft.Online.SharePoint.PowerShell" style="height: auto;width: auto" /></div>
                  <p>9. Run the command "Connect-SPOService -Url https://gruber14-admin.sharepoint.com/" but first replace gruber14 with your own tenant name. You can get the proper URL by grabbing the URL from your SharePoint admin center. <span >Enter your global admin username and click Next. Enter your password and click Sign in. If MFA is required, complete the MFA.</span></p>
                  <div ><img src="https://i.ibb.co/bQz9mp3/Connect-SPOService.png" alt="Connect-SPOService" style="height: auto;width: auto" /></div>
                  <p>10. Run the following command "Set-SPOTenant -EnableAIPIntegration $true". When prompted to confirm type <strong>Y</strong> then click <strong>Enter</strong>.</p>
                  <div ><img src="https://i.ibb.co/YQWRtxJ/set-spotenant-enable-AIPIntegration.png" alt="Set-SPOTenant -EnableAIPIntegration $true" style="height: auto;width: auto" /></div>
                  <p>&nbsp;11. Go to the <strong>Microsoft Compliance admin center</strong> in the browser. Then go to <strong>Information protections</strong> &gt; Labels. Click <strong>Turn on</strong>.</p>
                  <div ><img src="https://i.ibb.co/4K1CVCL/Azure-Purview.png" alt="Azure purview" style="height: auto;width: auto" /></div>
                  <p>12. Click <strong>Yes</strong>.</p>
                  <div ><img src="https://i.ibb.co/TRCQ937/Turn-On-Labeling-for-Azure-Purview.png" alt="Turn on labeling for Azure Purview" style="height: auto;width: auto" /></div>
                  <h2>Setting up a label</h2>
                  <p>Before we begin setting up the label you'll need to know 1 more thing. There are two parts to setting up the label. The first is the label configuration. This includes the name, details the users see, and what happens when something is marked with the label. The next part is publishing the label. This includes who can use the label.</p>
                  <h3>How to create a label</h3>
                  <p>1. Go to the <strong>Microsoft Compliance admin center</strong> &gt; <strong>Information protection</strong> &gt; <a href="https://compliance.microsoft.com/informationprotection?viewid=sensitivitylabels" target="_blank" rel="noreferrer"><strong>Labels</strong></a>  &gt; <strong>Create a label</strong>.</p>
                  <div ><img src="https://i.ibb.co/tHD3vzT/create-a-label-microsoft-365.png" alt="Create a label in Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>2. Enter a <strong>name </strong>for the label, the <strong>display name</strong>, <strong>description for users</strong>. Then click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/cXWX61Y/name-the-label.png" alt="Name the label and provide a description" style="height: auto;width: auto" /></div>
                  <p>3. Leave all three scopes checked. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/0mCmD6j/scope-the-labels.png" alt="Scope the labels" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Encrypt files and emails</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/FnxzTpB/encrypt-files-and-emails.png" alt="Encrypt-files-and-emails" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Assign permissions</strong> &gt; <strong>Add all users and groups in your organization</strong> &gt; <strong>Save</strong> &gt; <strong>Next.</strong></p>
                  <div ><img src="https://i.ibb.co/RTKTYrk/assign-permissions-to-all-internal-users.png" alt="Assign permissions to all internal users in Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>6. Click the <strong>auto-labeling for files and emails</strong> switch. Click <strong>Add</strong> &gt; <strong>Sensitive info types</strong>. Scroll down and click the checkbox next to <strong>Credit Card Number</strong>. Click <strong>Add </strong>&gt; <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/P4VzmQz/auto-label.png" alt="Auto label everything with a credit card" style="height: auto;width: auto" /></div>
                  <p>7. Click the Checkbox next to <strong>Privacy and external user access settings</strong>. Click the checkbox next to <strong>External sharing and Conditional Access settings</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/bzrk1B7/protection-settings-for-groups-and-sites.png" alt="protection settings for groups and sites" style="height: auto;width: auto" /></div>
                  <p>8. Click <strong>Private</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/dJ64qhH/Define-privacy-and-external-user-access-settings.png" alt="Define privacy and external user access settings" style="height: auto;width: auto" /></div>
                  <p>9. Click Control external sharing from labeled SharePoint sites checkbox. Click Only people in your organization radio box. Click Next.</p>
                  <div ><img src="https://i.ibb.co/V282Zk9/Define-external-sharing-and-conditional-access-settings.png" alt="Define external sharing and conditional access settings" style="height: auto;width: auto" /></div>
                  <p>10. Click <strong>Create label</strong>. Then click <strong>Done</strong>.</p>
                  <h3>Publish the label</h3>
                  <p>1. Go to the <strong>Compliance admin center</strong> &gt; <strong>Information protection </strong>&gt; <a href="https://compliance.microsoft.com/informationprotection?viewid=sensitivitylabelpolicies" target="_blank" rel="noreferrer"><strong>Label policies</strong></a> &gt; <strong>Publish label</strong>.</p>
                  <div ><img src="https://i.ibb.co/bRmX0R5/publish-labels.png" alt="Publish label" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Choose sensitivity labels to publish </strong>&gt; <strong>Company employees only</strong> &gt; <strong>Add </strong>&gt; <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/Lr9hZJ8/Choose-sensitivity-labels-to-publish.png" alt="Choose sensitivity labels to publish" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Next </strong>until you are on the Name your policy page.</p>
                  <p>4. Enter the name of <strong>Company internal only</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/hCFTQDd/name-your-policy.png" alt="Name your policy" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Submit</strong>.</p>
                  <p>That's it. Wait 24 hours for your label to be published. Or you can skip the wait time...</p>
                  <h2>Skip the 24-hour delay and use your labels immediately</h2>
                  <p>So you just published a label or maybe you made a change to a label and you need to make the label available immediately. What do you do? Have no fear, PowerShell is here!</p>
                  <p>1. Open PowerShell as an admin.</p>
                  <p>2. Run the following command in PowerShell: "Install-Module ExchangeOnlineManagement". If prompted to install NuGet click Y then enter. When prompted to Install from the 'PSGallery' click A then enter.</p>
                  <div ><img src="https://i.ibb.co/1MM4DSX/install-module-Exchange-Online-Management.png" alt="Install the Exchange Online PowerShell Module" style="height: auto;width: auto" /></div>
                  <p>3. Run the following command in PowerShell: "Connect-ExchangeOnline". Enter your global admin username and click Next. Enter your password and click Sign in. If MFA is required, complete the MFA.</p>
                  <div ><img src="https://i.ibb.co/SBHmPwN/Connect-Exchange-Online.png" alt="Connect-ExchangeOnline" style="height: auto;width: auto" /></div>
                  <p>4. Run the following PowerShell Command: "Get-Mailbox -ResultSize unlimited | ?&#123;$_.Name -notlike "DiscoverySearchMailbox*"&#125; | %&#123; Start-ManagedFolderAssistant $_.UserPrincipalName &#125;"</p>
                  <div ><img src="https://i.ibb.co/hfKjqhq/Start-Managed-Folder-Assistant.png" alt="Start-ManagedFolderAssistant" style="height: auto;width: auto" /></div>
                  <p>5. Wait a couple of minutes and close and re-open your Office app.</p>
                  <h2>Manually apply the label</h2>
                  <p>So now we've published the label but how do we manually apply it to a document? Well, it's pretty easy.</p>
                  <p>1. Open Word on a computer that is connected to your Microsoft 365 tenant.</p>
                  <p>2. Click <strong>Sensitivity</strong> &gt; <strong>Company employees only</strong>.</p>
                  <div ><img src="https://i.ibb.co/Mp6qGxb/Apply-sensitivity-label.png" alt="Apply sensitivity label" style="height: auto;width: auto" /></div>
                  <h2>Automatically applied labels</h2>
                  <p>Remember earlier when we created the label we set up the "Auto apply the label" if the content contained a credit card? Let's test it out now.</p>
                  <p>1. Open a new Microsoft Word document.</p>
                  <p>2. Type the following in.</p>
                  <pre>Margie's Travel,<br />I have received updated credit card information for Spencer.<br />Spencer Badillo<br />Visa: 4111 1111 1111 1111<br />Expires: 2/2012<br />Please update his travel profile.</pre>
                  <p>3. Save the document to your OneDrive</p>
                  <p>You should automatically see the following:</p>
                  <div ><img src="https://i.ibb.co/NKqDtvB/your-organization-automatically-applied-the-sensitivity-label.png" alt="your organization automatically applied the sensitivity label" style="height: auto;width: auto" /></div>
                  <h2>Review the settings</h2>
                  <p>Now that we've created our first label let's go back and review some of the settings.</p>
                  <p>1. Go to the <strong>Microsoft 365 Compliance admin center</strong> &gt; <strong>Information protection</strong> &gt; <strong>Labels </strong>&gt; click the label you just created. Click <strong>Edit label</strong>.</p>
                  <div ><img src="https://i.ibb.co/mDmP9cw/edit-the-label.png" alt="Edit the label" style="height: auto;width: auto" /></div>
                  <h3>Name and create a tooltip for your label</h3>
                  <div ><img src="https://i.ibb.co/pv81kDh/Name-and-create-a-tooltip-for-your-label.png" alt="Name and create a tooltip for your label" style="height: auto;width: auto" /></div>
                  <p>The <strong>Display Name</strong> is what appears to users in the Sensitivity drop-down. The <strong>Description for users </strong>is what appears when a user hovers over the label with their mouse. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/VDJH0MB/label-name-and-description.png" alt="Label display name and description" style="height: auto;width: auto" /></div>
                  <h3>Define the scope for this label</h3>
                  <div ><img src="https://i.ibb.co/P5CGWfs/Define-the-scope-for-this-label.png" alt="Define the scope for this label" style="height: auto;width: auto" /></div>
                  <p>On the Define the scope for this label page you can see three options. <strong>Files &amp; emails</strong> being checked make the label available in Word, Excel, PowerPoint, and Outlook. <strong>Groups &amp; sites</strong> make the label available in Groups and sites. Lastly, <strong>Schematized data assets</strong> make the label available in Azure. Click Next.</p>
                  <h3>Define the scope for this label</h3>
                  <div ><img src="https://i.ibb.co/k9nhWS5/Choose-protection-settings-for-files-and-emails.png" alt="Choose protection settings for files and emails" style="height: auto;width: auto" /></div>
                  <p>On the Choose protection settings for files and emails page, you can see two options. These options define what happens when a document or email is marked with the label. You can either <strong>encrypt </strong>the document/email or <strong>mark the content</strong>. By marking the content you can add a watermark, text in the header, or text in the footer. Click Mark the content of files check box and click <strong>Next</strong>.</p>
                  <h3>Encryption</h3>
                  <div ><img src="https://i.ibb.co/jbL527y/encryption.png" alt="Encryption options" style="height: auto;width: auto" /></div>
                  <p>On the encryption page, you have a number of options.</p>
                  <p>First, you can add or remove encryption. If you're removing encryption that's the only option.</p>
                  <p>If you're adding encryption then you have a whole list of options.</p>
                  <ul>
                    <li><strong>Assign permissions now or let users decide</strong>: This setting allows you to choose who specifically can access the content assigned to this label or allow the person assigning the label to decide.</li>
                    <ul>
                      <li><strong>Assign Permissions</strong>: This is where you can set who can access the content. You can set it to <strong>all users and groups</strong> which includes only users inside your organization. You can set it to <strong>authenticated users</strong> which means external users can still access the content but they'll need to authenticate first. The users, emails, and domain options are a bit more obvious.</li>
                    </ul>
                    <li><strong>User access to content expires</strong>: You can decide to automatically remove permissions on a date or a number of days after the label is applied. In short, if you want the label to grant users access to the content for X days or until a specified date set this.</li>
                    <li><strong>Allow offline access</strong>: Do you want to allow users to access the content while they aren't connected to the internet? If you do, you have additional options of how long they can access the content offline until they need to check back into Microsoft 365.</li>
                    <li><strong>Assign permissions</strong>: Here is where you can choose who has access to the content the label is encrypting. You can choose to add All users in your organization, any authenticated users, or specific users/groups. Lastly, you can choose specific email addresses or domains.</li>
                    <li><strong>Use Double Key Encryption</strong>: Double key encryption requires another service to provide the second key. These files aren't even accessible by Microsoft.</li>
                  </ul>
                  <p><em>Note: if an external user receives an email with the following error you'll need to resend the email without a label or update the label to use the authenticated users' assigned permissions.</em></p>
                  <blockquote>The message you tried to open is protected with Information Rights Management. The sender didn't give you the rights necessary to view the message. To open this message on behalf of another user, use Outlook.</blockquote>
                  <p>Click <strong>Next</strong>.</p>
                  <h3>Content marking</h3>
                  <div ><img src="https://i.ibb.co/njRQnc6/Content-Marking.png" alt="Content marking" style="height: auto;width: auto" /></div>
                  <p>On the content marking page, you can choose what types of markings you want on the documents. You can choose a watermark, which will go across every page. A header that will show up at the top of every page. Finally, a footer will appear at the bottom of every page. Click Next.</p>
                  <h3>Auto-labeling for files and emails</h3>
                  <div ><img src="https://i.ibb.co/th84fmd/auto-labeling.png" alt="Auto-labeling for files and emails" style="height: auto;width: auto" /></div>
                  <p>The auto-labeling is exactly how it sounds. It will automatically apply the label based on the sensitive info type. The sensitive info types are the same types that can be used in data loss prevention (DLP) policies. There are several options here so let's dig in.</p>
                  <ul>
                    <li><strong>Detect content that matches these conditions</strong>: In this section, you are deciding what content type to look for. For example, you can choose credit card numbers, passport IDs, banking information, addresses, etc. You can also choose how many <strong>instances </strong>are required to apply the auto-labeling. For example, you may choose to allow users to send 1 credit card number in an email or file but after that, you require the label. Next, you can choose multiple sensitive info types and you may choose if you want one sensitive info type or to find all info types. For example, you may create a label that requires encryption for any credit card number or social security number. Or you may choose to require encryption for any person's name AND any U.S. addresses.</li>
                    <li><strong>When content matches these conditions</strong>: In this section, you have two options. First, you can choose to automatically apply the label or recommend the label be applied. The next box is what message is displayed to the user when the content matches the sensitive info types. You can leave this box blank and have a default message appear if you want.</li>
                  </ul>
                  <p>Click <strong>next</strong>.</p>
                  <h3>Define protection settings for groups and sites</h3>
                  <div ><img src="https://i.ibb.co/3ht1j6t/Define-protection-settings-for-groups-and-sites.png" alt="Define protection settings for groups and sites" style="height: auto;width: auto" /></div>
                  <p>The next part is about how the label applies to Microsoft Teams, Microsoft 365 groups, and SharePoint sites. Don't worry about not seeing many options here. In short, this page is saying "What options do you want to see?" If you check the "Privacy and external user access settings" checkbox you'll see another page about configuring it and the same thing goes for "External sharing and Conditional Access settings". For now, let's leave both checkboxes checked and jump into the settings on the next couple of pages. Click <strong>Next</strong>.</p>
                  <h3>Define privacy and external user access settings</h3>
                  <div ><img src="https://i.ibb.co/FbYvt1p/Define-privacy-and-external-user-access-settings.png" alt="Define privacy and external user access settings" style="height: auto;width: auto" /></div>
                  <p>You'll only see this page if you had "Privacy and external user access settings" checked on the page before. On this page, you have the option of how the Team or group is shared. <em>Note: this page doesn't affect SharePoint sites</em>. In the <strong>privacy </strong>section, you can define whether you can join the team, group, or site. For example, you can let anyone in your organization join the team, group, or site or you can lock it down so team owners have to add the members. In short, should only users that are invited to the group see the content or can anyone in your organization see the content? Finally, you have the <strong>External user access</strong> checkbox. you can set to allow the group owners to add people as guests outside your organization. In short, should teams with this label allow sharing with people that aren't in your organization? Click <strong>Next</strong>.</p>
                  <h3>Define external sharing and conditional access settings</h3>
                  <p>You'll only see this page if you had "External sharing and Conditional Access settings" checked on the "Define protection settings for groups and sites" page. <em>Note: this page only affects SharePoint sites. </em>This page will set the external sharing allowed on SharePoint sites flagged with this label. In short, you can force a SharePoint site to only be allowed to be shared with specific users. <em>Note: these settings won't stop someone from attaching a document to an email and sending it out that way.</em> It works similarly to how the privacy and external user settings worked on the previous page.</p>
                  <p>SharePoint sites have one other option though: you can set them to only be accessible by computers that are hybrid Azure AD joined to your environment. In short, you can make SharePoint sites only accessible by domain-joined computer. By checking the <strong>Use Azure AD Conditional Access to protect labeled SharePoint sites</strong> checkbox you can set up what devices can access the SharePoint site.</p>
                  <h2>Label policies</h2>
                  <p>Next, let's go over all the policy options for a label. Go to <strong>Microsoft Compliance admin center</strong> &gt; <strong>Information protection</strong> &gt; <a href="https://compliance.microsoft.com/informationprotection?viewid=sensitivitylabelpolicies" target="_blank" rel="noreferrer"><strong>label policies</strong></a>. Click the label policy you created earlier and click <strong>Edit policy</strong>.</p>
                  <div ><img src="https://i.ibb.co/vdpnDHY/Label-policy.png" alt="How to edit a label policy" style="height: auto;width: auto" /></div>
                  <h3>Choose sensitivity labels to publish</h3>
                  <div ><img src="https://i.ibb.co/BLdP7Qf/Choose-sensitivity-labels-to-publish.png" alt="Choose sensitivity labels to publish" style="height: auto;width: auto" /></div>
                  <p>On the first page, you'll see one option. <strong>Sensitivity labels to publish</strong>. This is simply asking what labels is this policy applying to? Click <strong>Next</strong>.</p>
                  <h3>Publish to users and groups</h3>
                  <div ><img src="https://i.ibb.co/TmB2nzS/Publish-to-users-and-groups.png" alt="Publish to users and groups" style="height: auto;width: auto" /></div>
                  <p>The Publish to users and groups page is simply asking what users will the label be available to? If you add a user here they will be able to set the label on their sites, documents, and emails.</p>
                  <p><strong>Important</strong>: You can publish labels to users but only to certain groups. Groups that have email addresses (Distribution groups, Microsoft 365 groups, and mail-enabled security groups). You can't publish a label to a security group. They can have dynamic membership.</p>
                  <p>Click <strong>Next</strong>.</p>
                  <h3>Policy settings</h3>
                  <div ><img src="https://i.ibb.co/zFGmdYx/Policy-Settings.png" alt="Information protection label Policy settings" style="height: auto;width: auto" /></div>
                  <p>On the policy settings page, you have several options.</p>
                  <ul>
                    <li><strong>Users must justify removing a label or lowering its classification​</strong>: This setting will require a user to enter some text in a text box every time they remove the label. A user can type anything but typically they'll put things like "Document no longer contains credit card information" or something like that.</li>
                    <li><strong>Require users to apply a label to their emails and documents​</strong>: Here is where you can require a user to label all of their emails and documents. If you use this setting make sure to have a couple of different labels the users can apply.</li>
                    <li><strong>Require users to apply a label to their Power BI content</strong>: Same as above but for Power BI content.</li>
                    <li><strong>Provide users with a link to a custom help page</strong>: This is a great way to help share information about the labels when to use the labels, and why to apply the labels. You can easily create a SharePoint site that's accessible to everyone in your organization and put the URL here.</li>
                  </ul>
                  <p>Click <strong>Next</strong>.</p>
                  <h3>Apply a default label to documents</h3>
                  <div ><img src="https://i.ibb.co/dcdQQgz/Apply-a-default-label-to-documents.png" alt="Apply a default label to documents​" style="height: auto;width: auto" /></div>
                  <p>The only option on this page is the <strong>Apply this default label to documents​</strong>. It's exactly how it sounds. It will automatically apply the label to every Office document saved in your Microsoft 365 environment by the users you selected on the "Publish to users and groups" page. Also, the dropdown will only contain the labels you selected on the "Choose sensitivity labels to publish" page. Click <strong>Next</strong>.</p>
                  <h3>Apply a default label to emails</h3>
                  <div ><img src="https://i.ibb.co/mtkbVC8/Apply-a-default-label-to-emails.png" alt="Apply a default label to emails" style="height: auto;width: auto" /></div>
                  <p>There are two options on this page. The <strong>Apply this default label to emails</strong> option is exactly how it sounds. It allows you to automatically apply a label to any emails sent from your Microsoft 365 environment. Another option for emails is to <strong>Require users to apply a label to their emails</strong> which will require a user to select one of the labels every time they send an email. If you check that box make sure you have a couple of labels available for the users to choose from. Click <strong>Next</strong>.</p>
                  <h3>Policy settings for sites and groups</h3>
                  <div ><img src="https://i.ibb.co/crF68KG/Policy-settings-for-sites-and-groups.png" alt="Policy settings for sites and groups" style="height: auto;width: auto" /></div>
                  <p>I won't waste your time. These settings are the same as the Apply a default label to emails as above except they affect SharePoint sites and Microsoft 365 groups. <span >Click <strong>Next</strong>.</span></p>
                  <h3>Apply a default label to Power BI content (preview)</h3>
                  <div ><img src="https://i.ibb.co/9q8Pvdv/Apply-a-default-label-to-Power-BI-content.png" alt="Apply a default label to Power BI content" style="height: auto;width: auto" /></div>
                  <p>I won't waste your time. These settings are the same as the Apply a default label to documents as above except they affect Power BI content like reports, dashboards, and datasets. Click <strong>Next</strong>.</p>
                  <h3 ><span >Name your policy</span></h3>
                  <div ><img src="https://i.ibb.co/x8F4pgV/Name-your-policy.png" alt="Name your policy" style="height: auto;width: auto" /></div>
                  <p><span >On this page, you'll see the policy name but it's greyed out. In short, you can't change the name of a label policy once it's set up. You can set the description though.</span></p>
                  <h2>Label Priority</h2>
                  <p>The last thing you'll need to know about information protection labels is the label priority. The first thing you need to know is a piece of content can only have one label. In short, it's because the labels will "fight" each other. What if you had one label encrypting a document and another decrypting the document? It would be a nightmare.</p>
                  <p>Second, default labels will always take priority over mandatory labels. In short, setting a label as the default will be applied before the sensitivity info automatically applies a label so the default label will be applied first and won't be automatically removed.</p>
                  <p>Lastly, order matters. If you look at the <a href="https://compliance.microsoft.com/informationprotection?viewid=sensitivitylabels" target="_blank" rel="noreferrer">labels</a> you'll notice they all have an Order. The labels at the bottom of the list have higher priority than those at the top. Let's take an example. Let's say someone uploads a document with a higher priority label to a site that is defined with a lower sensitivity label. What happens? Well, the action isn't prevented but the user that made the move and the owners of the site will both get emails. The users can then work to remediate the issue. In short, put your least restrictive labels at the top and the most restrictive labels at the bottom.</p>
                  <h3>How to change the label priority</h3>
                  <p>1. Go to the <strong>Compliance admin center</strong> &gt; <strong>Information protection</strong> &gt; <a href="https://compliance.microsoft.com/informationprotection?viewid=sensitivitylabels" target="_blank" rel="noreferrer"><strong>Labels</strong></a><strong> </strong>page.</p>
                  <p>2. Click the <strong>ellipsis (...)</strong> next to the label. Click <strong>Move up </strong>or <strong>Move down</strong>.</p>
                  <div ><img src="https://i.ibb.co/bLqBxBQ/Change-the-label-priority.png" alt="How to change the label priority" style="height: auto;width: auto" /></div>
                  <h2>See how labels are applied</h2>
                  <div ><img src="https://i.ibb.co/pJ4s9TL/how-labels-are-applied.png" alt="Reporting on how labels are applied" style="height: auto;width: auto" /></div>
                  <p>Lastly, auditing. Let's take a look at who's applying labels and how many labels are being automatically applied. From the Compliance admin center &gt; <a href="https://compliance.microsoft.com/reports" target="_blank" rel="noreferrer">Reports</a>. From this page, you can see several reports. Typically, the reports will take 24 hours to populate though so you may need to wait a day or so before you see any data. To see if labels are being applied manually or automatically click "How Labels Were Applied".</p>
                  <p>That's it. That's all there is to information protection labels!</p>
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
