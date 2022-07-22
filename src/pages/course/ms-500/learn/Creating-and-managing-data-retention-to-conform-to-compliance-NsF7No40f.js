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
      path: '/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f',
      article: {ARTICLE: true},
      nextContentSlug: 'Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w',
      previousContentSlug: 'How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf',
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
                <div><p>Retention policies and retention labels are ways to keep data even after it has been deleted by the user. In short, it will keep the data for as long as the retention policy says to keep the data. It replaces backing up your file server and journaling your emails from an on-premises environment. Don't worry users can still delete documents and emails and even clear their recycle bins / empty their deleted items folder. But users will be able to restore the items still and admins can still perform content searches and retrieve the information. It will probably make more sense to simply jump in and review the settings as we see them.</p>
                  <h2>What's a retention policy?</h2>
                  <p>A retention policy is used to keep all the emails or documents in a particular location. That location can be virtually anything in Microsoft 365. For example, you can create a retention policy to keep all the emails in your entire environment or all the emails in a particular mailbox. No user interaction is required. A retention policy can be used to protect virtually every piece of data stored in Microsoft 365.</p>
                  <h2>What locations can a retention policy protect?</h2>
                  <p>Retention policies can be used to capture all the content in a certain location. For example, you can use retention policies</p>
                  <ul>
                    <li><strong>Exchange mailboxes</strong>: Retention policies can be used to protect exchange mailboxes. It can be used to retain the emails in all the mailboxes.</li>
                  </ul>
                  <h2>How to create a retention policy</h2>
                  <p>1. Go to the <strong>Compliance admin center</strong> &gt; <strong>Data lifecycle management</strong> &gt; <a href="https://compliance.microsoft.com/informationgovernance?viewid=retention" target="_blank" rel="noreferrer"><strong>Retention policies</strong></a>. Click <strong>New retention policy</strong>.</p>
                  <div ><img src="https://i.ibb.co/yqC0ZdY/New-Retention-Policy.png" alt="New retention policy" style="height: auto;width: auto" /></div>
                  <p>2. Give your retention policy and name. For example, <strong>All files and emails</strong>. Optionally give it a description. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/7n2J3GY/Name-your-retention-policy.png" alt="Name your retention policy" style="height: auto;width: auto" /></div>
                  <p>3. On the <strong>Choose the type of retention policy to create​</strong> page, click <strong>Static</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/hdqYJyX/Choose-the-type-of-retention-policy-to-create.png" alt="Choose the type of retention policy to create​" style="height: auto;width: auto" /></div>
                  <p>4. On the next page click on the following locations: <strong>Exchange email</strong>, <strong>SharePoint sites</strong>, <strong>OneDrive accounts</strong>, <strong>Microsoft 365 Groups</strong>, <strong>Skype for Business</strong>, and <strong>Exchange public folder</strong>. Click <strong>Edit</strong> next to Skype for Business. Choose <strong>all your users</strong>. Click <strong>Done</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/DVNJTys/Choose-locations-to-apply-the-policy.png" alt="Choose locations to apply the policy" style="height: auto;width: auto" /></div>
                  <p>5. On the <strong>Decide if you want to retain content, delete it, or both </strong>page, click <strong>Do nothing</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/rkQ3VKM/Decide-if-you-want-to-retain-content-delete-it-or-both.png" alt="Decide if you want to retain content, delete it, or both" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Submit</strong>.</p>
                  <h2>A few notes</h2>
                  <p>First, did you notice we didn't select Teams or Yammer? That's because a retention policy that covers Yammer or Teams can't cover anything else. Go back and try to make a policy for Teams and then for Yammer.</p>
                  <p>Next, did you notice we had to manually add the users for Skype for Business? That's because there's no "cover all" for Skyper for Business. What happens if you add a new user to your tenant? You guessed it, you'll need to update the retention policy. Since Skype for Business is essentially dead anyway you may just want to simply ignore it too. It's up to you.</p>
                  <p>Did you also notice the include / exclude Edit buttons for each location where we applied the policy? By default, most locations will include all locations. But what if you need a retention policy to include only certain users? Or to exclude certain sites. Well, the include / exclude is exactly where you do it.</p>
                  <p>Another thing, take note of the time the item is retained. That means even if a user deletes the content before that time expires an admin can restore the content. But after the time expires the content will either be deleted automatically (if that's what you selected) or can be deleted and not restored.</p>
                  <p><em>Finally, when two conflicting policies are applied to the same content you'll need to know which one wins. Retention always takes precedence over deletion. If you have two policies one with a retain for 3 years and another for delete after 1 year the files will be retained for 3 years. Next, the longest retention policy wins. So if you have two policies one that retains for 1 year and another that remains for 3 years the policy with retains for 3 years wins.</em></p>
                  <div ><img src="https://i.ibb.co/gvKtNSh/Choose-locations-to-apply-the-policy.png" alt="Choose locations to apply the policy" style="height: auto;width: auto" /></div>
                  <h2>Retention labels</h2>
                  <p>Just like Information governance labels, retention labels are a powerful way to protect certain emails and documents. Just like information governance labels, there are two parts to retention labels. The labels and the policies. Let's jump in and start creating one.</p>
                  <p>1. Go to <strong>Compliance admin center</strong> &gt; <strong>Data lifecycle management</strong> &gt; <a href="https://compliance.microsoft.com/informationgovernance?viewid=labels" target="_blank" rel="noreferrer"><strong>Labels</strong></a> &gt; <strong>Create a label</strong>.</p>
                  <div ><img src="https://i.ibb.co/c2pcrnf/Create-a-retention-label.png" alt="Create a retention label" style="height: auto;width: auto" /></div>
                  <p>2. Name the label "<strong>Delete after 7 years</strong>". Set the description to "<strong>Automatically delete the content after 7 years</strong>". Click&nbsp;</p>
                  <div ><img src="https://i.ibb.co/x8TK7pZ/Name-your-retention-label.png" alt="Name your retention label" style="height: auto;width: auto" /></div>
                  <p>3. Verify the retention period is set to <strong>7 years</strong>. Set Start the retention period based on <strong>When items were last modified</strong>. Verify <strong>Delete items automatically</strong> is set. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/wBvF5Jk/Define-retention-settings.png" alt="Define retention settings" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Create label</strong>. Then click <strong>Done</strong>.</p>
                  <p>5. Click <strong>Next</strong> &gt; <strong>Next</strong> &gt; <strong>Next</strong>.</p>
                  <p>6. Set the Name to <strong>Delete after 7 years policy</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/Ksd5R4W/Name-your-policy.png" alt="Name your policy" style="height: auto;width: auto" /></div>
                  <p>7. Click <strong>Submit</strong>.</p>
                  <h2>Skip the 24-hour delay and use your labels immediately</h2>
                  <p>So you just published a retention label or maybe you made a change to a label and you need to make the label available immediately. What do you do? Have no fear, PowerShell is here!</p>
                  <p>1. Open PowerShell as an admin.</p>
                  <p>2. If you haven't connected to Exchange Online via PowerShell on this computer before perform the following: Run the following command in PowerShell: "Install-Module ExchangeOnlineManagement". If prompted to install NuGet click Y then enter. When prompted to Install from the 'PSGallery' click A then enter.</p>
                  <div ><img src="https://i.ibb.co/RySht8B/install-module-Exchange-Online-Management.png" alt="Install-Module ExchangeOnlineManagement" style="height: auto;width: auto" /></div>
                  <p>3. Run the following command in PowerShell: "Connect-ExchangeOnline". Enter your global admin username and click Next. Enter your password and click Sign in. If MFA is required, complete the MFA.</p>
                  <div ><img src="https://i.ibb.co/zSZFr8Z/Connect-Exchange-Online.png" alt="Connect-ExchangeOnline" style="height: auto;width: auto" /></div>
                  <p>4. Run the following PowerShell Command: "Get-Mailbox -ResultSize unlimited | ?&#123;$_.Name -notlike "DiscoverySearchMailbox*"&#125; | %&#123; Start-ManagedFolderAssistant $_.UserPrincipalName &#125;"</p>
                  <p><em>Note: If you only need to publish the labels to one user  immediately you can use "Start-</em><span ><em>ManagedFolderAssistant</em></span><em> UPN" and replace UPN with the user's sign-in name</em></p>
                  <div ><img src="https://i.ibb.co/vZKF4qS/Start-Managed-Folder-Assistant.png" alt="Start-ManagedFolderAssistant" style="height: auto;width: auto" /></div>
                  <p>5. Wait a couple of minutes and close and re-open your Office app.</p>
                  <h2>How to apply a retention label to a document</h2>
                  <p>As far as I know, you need to use the web browser. If you know how to apply a retention label to a document using the installed version of the Office suite let me know!</p>
                  <p>1. Open <strong>OneDrive</strong> in the browser. Click the <strong>checkbox next to the file name</strong>. Click the<strong> I</strong> in the top right corner. Scroll down until you see <strong>Apply label</strong> and click the dropdown. Click <strong>Delete after 7 years</strong>.</p>
                  <div ><img src="https://i.ibb.co/gWr3cK7/apply-a-retention-label-to-a-document.png" alt="Apply a retention label to a document" style="height: auto;width: auto" /></div>
                  <h2>How to apply a retention label to an email</h2>
                  <p>You can apply retention labels to emails in Outlook! Let's take a look.</p>
                  <p>1. Right-click the email you want to protect. Click <strong>Assign Policy</strong> &gt; <strong>Delete after 7 years</strong>.</p>
                  <div ><img src="https://i.ibb.co/4T3qn70/apply-retention-label-to-email.png" alt="Apply retention label to email" style="height: auto;width: auto" /></div>
                  <h2>Litigation Hold for mailboxes</h2>
                  <p>Another way to retain email in a mailbox is using a litigation hold. The litigation hold will retain everything in the mailbox (including items deleted and modified). The litigation hold also retains the archive mailbox.</p>
                  <h3>What licenses are required for litigation hold?</h3>
                  <p>Exchange Online Plan 2 license is required to put a mailbox on litigation hold (or any license that contains the Exchange Online Plan 2 feature). You can also use an Exchange Online Archiving license to place a mailbox on litigation hold. Finally, Office 365 A1 licenses also contain the litigation hold license requirements.</p>
                  <h3>How to place a mailbox on litigation hold</h3>
                  <p>1. Open <a href="https://admin.exchange.microsoft.com/#/mailboxes" target="_blank" rel="noreferrer">Exchange Online admin center</a>. Click the display name of the user you want to enable litigation hold for. Go to <strong>Others </strong>&gt; <strong>Manage litigation hold</strong>.</p>
                  <div ><img src="https://i.ibb.co/8sq94QX/manage-litigation-hold.png" alt="Manage litigation hold" style="height: auto;width: auto" /></div>
                  <p>2. Click the <strong>switch to On</strong>. Set the <strong>hold duration</strong> (if required) and click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/VMT7N5F/setup-litigation-hold.png" alt="Setup litigation hold settings" style="height: auto;width: auto" /></div>
                  <h2>How to find data across your entire Microsoft 365 tenant</h2>
                  <p>So now that we are retaining everything, how do we find it? What if legal tells us they need all the emails with the word test in the body, how do we find it? There are two locations: content search and eDiscovery. Content search is for quick searches across your tenant. For example, if someone says they can't find an email and need it. Then you can use a content search. eDiscovery searches give you a bit more control. For example, you can set retention on eDiscovery results. Maybe you have a lawsuit with Contoso and need to retain any emails that talk about Contoso. We can do that with an eDiscovery case. Or maybe you need to give someone explicit access to the emails that discuss Contoso. We can do that with an eDiscovery case.</p>
                  <h3>How to create an eDiscovery case</h3>
                  <p>Go to <strong>Microsoft Purview admin center</strong> &gt; <strong>eDiscovery</strong> &gt; <a href="https://compliance.microsoft.com/classicediscovery" target="_blank" rel="noreferrer"><strong>Standard</strong></a>. Click <strong>Create a case</strong>. Give the <strong>case a name</strong> and click <strong>Save</strong>. Then click on the Name of your new case.</p>
                  <div ><img src="https://i.ibb.co/ZJbQcFp/Create-an-e-Discovery-case.png" alt="Create an eDiscovery case" style="height: auto;width: auto" /></div>
                  <h3>How to set up a hold</h3>
                  <p>A hold is like a retention policy but it only keeps the data that matches certain criteria. In the example below we will create a hold for all emails that contain the word <strong>Test</strong>.</p>
                  <p>2. Click <strong>Hold</strong> &gt; <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/ZfZ9bv6/create-an-e-Discovery-Hold.png" alt="Create an eDiscovery hold" style="height: auto;width: auto" /></div>
                  <p>3. Name the hold <strong>New Hold</strong>. Click <strong>Next</strong>. Click the Exchange mailboxes to <strong>On</strong>. Click <strong>Choose users, groups, or teams</strong>. Click the <strong>checkbox </strong>next to <strong>Name</strong>. Click <strong>Done</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/WsH6cGQ/select-the-locations.png" alt="Select the locations" style="height: auto;width: auto" /></div>
                  <p><div ><img src="https://i.ibb.co/WD43DxB/select-the-locations.png" alt="Select the locations" style="height: auto;width: auto" /></div>4. Put the word <strong>Test</strong> in the keywords textbox. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/GV87pwJ/keywords.png" alt="Keywords" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Submit</strong> &gt; <strong>Done</strong>.</p>
                  <h3>Create a search</h3>
                  <p>Now that we've created a hold that will keep all the emails that contain the word Test in them we can now move along to create a search. A <strong>search </strong>allows you to view and export content from Microsoft 365.</p>
                  <p>1. Click <strong>Searches </strong>&gt; <strong>New search</strong>. Name the search <strong>New Search</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/sV5G7r1/new-search.png" alt="New search" style="height: auto;width: auto" /></div>
                  <p>2. Click the <strong>Locations on hold</strong> radio box. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/xYjj5Lg/set-location-to-locations-on-hold.png" alt="Set the location to Locations on hold" style="height: auto;width: auto" /></div>
                  <p>3. Set the <strong>Keywords</strong> to <strong>Test</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/DVQStQ7/Set-search-criteria.png" alt="Set the search criteria" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Submit</strong> &gt; <strong>Done</strong>.</p>
                  <h3>How to review the eDiscovery search</h3>
                  <p>Now that we've created a hold and a search let's take a look at our results. Before we can preview the results we need to grant ourselves the preview permission.</p>
                  <h4>How to grant yourself preview permissions</h4>
                  <p>1. Go to <strong>Microsoft Purview admin center</strong> &gt; <strong>Permissions </strong>&gt; <a href="https://compliance.microsoft.com/compliancecenterpermissions" target="_blank" rel="noreferrer"><strong>Microsoft Purview solutions roles</strong></a>. Click <strong>Create</strong>. Set the <strong>name</strong> to <strong>Preview results</strong>. Click <strong>Next</strong>. Click <strong>Choose roles</strong> &gt; <strong>Add</strong>. Click the Preview checkbox. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/fd219dx/choose-roles.png" alt="Choose roles" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Done</strong> &gt; <strong>Next</strong> &gt; <strong>Choose members</strong> &gt; <strong>Add</strong>. Select yourself from the list. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/ScKRp1s/Add-members-to-new-role.png" alt="Add members to new role" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Done </strong>&gt; <strong>Next </strong>&gt; <strong>Create role group</strong>.</p>
                  <p>You may need to log out of the browser &gt; close the browser &gt; re-open the browser &gt; Re-login to the admin center.</p>
                  <h4>How to preview the results</h4>
                  <p>1. Go to <strong>eDiscovery </strong>&gt; <strong>Standard</strong>. Click the <strong>case </strong>you created earlier. Click <strong>Searches</strong> then click the <strong>search </strong>you created earlier. Click <strong>Review sample</strong>.</p>
                  <div ><img src="https://i.ibb.co/dWrFgQB/preview-search-results.png" alt="Preview the search results" style="height: auto;width: auto" /></div>
                  <h3>Grant someone permission to the eDiscovery search</h3>
                  <p>Now that we've created the eDiscovery hold and search let's grant someone access to the eDiscovery case. Once the other person has the access they'll be able to view and manage the eDiscovery case themselves. First, we need to assign the user the eDiscovery Manager role. Then we need to grant the user the permissions in the case.</p>
                  <p>1. Go to <strong>Microsoft Purview admin center</strong> &gt; <strong>Permissions </strong>&gt; <a href="https://compliance.microsoft.com/compliancecenterpermissions" target="_blank" rel="noreferrer"><strong>Microsoft Purview solutions roles</strong></a>  &gt; <strong>eDiscovery Manager</strong>. Click <strong>Edit </strong>next to <strong>eDiscovery Manager</strong>.</p>
                  <div ><img src="https://i.ibb.co/XSM6ZLb/Add-members-to-e-Discovery-Manager-role.png" alt="Add members to eDiscovery Manager role" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Choose eDisvoery Manager</strong> &gt; <strong>Add</strong>. Click the <strong>member you want to grant permissions</strong> to. Click <strong>Add</strong>. Click <strong>Done </strong>&gt; <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/FYfXNDX/Select-members-to-e-Discovery-Manager-role.png" alt="Select members to eDiscovery Manager role" style="height: auto;width: auto" /></div>
                  <p>3. Go to <strong>eDiscovery </strong>&gt; <strong>Standard </strong>&gt; <strong>Settings</strong>. Click <strong>Select </strong>(under Access &amp; permissions). Click <strong>Add </strong>(under manage members). Click the <strong>person you want to add</strong>. Click <strong>Add</strong> &gt; <strong>Exit</strong>.</p>
                  <div ><img src="https://i.ibb.co/tCX3nsz/Add-permissions.png" alt="Add permissions to the eDiscovery case" style="height: auto;width: auto" /></div>
                  <h2>Alerting to compliance searches</h2>
                  <p>Lastly, we are on to alerting. Since a search gives your admins the ability to view any emails or content in your organization you may want to set up alerts. That way you'll receive an email every time a search is started.</p>
                  <p>1. Go to <strong>Microsoft Purview admin center</strong> &gt; <strong>Policies </strong>&gt; <a href="https://compliance.microsoft.com/alertpolicies" target="_blank" rel="noreferrer"><strong>Alert policies</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/QN2Npcp/Open-alert-policies.png" alt="Open alert policies" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>New alert policy</strong>. Set the <strong>name</strong> to <strong>eDiscovery search started</strong>. Set the <strong>severity </strong>to <strong>Medium</strong>. Set the <strong>Category </strong>to <strong>Information governance</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/y0LsZgg/create-a-new-alert.png" alt="Create a new alert" style="height: auto;width: auto" /></div>
                  <p>3. Click the Activity is drop-down and enter <strong>eDiscovery search</strong>. Click <strong>An eDiscovery search was started or exported</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/Mn8wG48/Set-the-alert-activity.png" alt="Set the alert activity" style="height: auto;width: auto" /></div>
                  <p>4. on the "Decide if you want to notify people when this alert is triggered" page click <strong>Next</strong>. Click <strong>Finish</strong>.</p>
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
