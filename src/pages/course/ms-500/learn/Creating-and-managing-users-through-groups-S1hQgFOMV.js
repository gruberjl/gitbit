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
      path: '/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV',
      article: {ARTICLE: true},
      nextContentSlug: 'Securing-and-implementing-enterprise-applications-2QfoI2HxY',
      previousContentSlug: 'Protecting-Passwords-in-Microsoft-365-i9pJIjTNH',
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
                <div><p>re are four types of groups in Microsoft 365: distribution, security groups, mail-enabled security, and Microsoft 365. Let’s dive right into the types of groups.</p>
                  <h2>Distribution groups</h2>
                  <p>Distribution groups also known as distribution lists will create an email address and distribute the emails to all the members of the group. Distribution groups do not have separate mailboxes. The emails land in the members of the distribution lists mailboxes. You can add anyone with a mailbox inside your organization and you can add mail contacts to distribution groups.</p>
                  <h3>Create a distribution group in Microsoft 365</h3>
                  <p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <strong>Active teams &amp; groups</strong>. Then click <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard" target="_blank" rel="noreferrer"><strong>Add a group</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png" alt="Add a group to Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Distribution </strong>&gt; <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/104HV6d/create-a-distribution-group.png" alt="create a distribution group" style="height: auto;width: auto" /></div>
                  <p>3. Name the group. Optionally add a description. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/zQJ9x1M/name-your-new-group.png" alt="Name your new Microsoft 365 group" style="height: auto;width: auto" /></div>
                  <p>4. Set the group email address. Optionally click <strong>Allow people outside of my organization to send email to this Distribution group</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/nLrY8x6/new-group-email-address.png" alt="New group email address" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Create group</strong>.</p>
                  <div ><img src="https://i.ibb.co/xM6DN61/create-distribution-group.png" alt="create distribution group" style="height: auto;width: auto" /></div>
                  <h3>Add members to the distribution group</h3>
                  <p>You’ll notice you can’t add members to the group while creating the group. To add members, you’ll need to go to the group and manage the members.</p>
                  <p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups" target="_blank" rel="noreferrer"><strong>Active teams &amp; groups</strong></a> &gt; <strong>Distribution List</strong>.  Then click the group you want to manage.</p>
                  <div ><img src="https://i.ibb.co/4frD0dC/manage-distribution-group.png" alt="manage distribution group" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Members</strong> &gt; <strong>View all and manage members</strong>.</p>
                  <div ><img src="https://i.ibb.co/YhY7R2R/manage-members-of-distribution-group.png" alt="manage members of distribution group" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Add members</strong>.</p>
                  <div ><img src="https://i.ibb.co/5n13V6V/add-members-to-group.png" alt="add members to group" style="height: auto;width: auto" /></div>
                  <p>4. Select the users you want to add to the group. Then click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/FmHL7tG/add-members-to-the-group.png" alt="Add members to the group" style="height: auto;width: auto" /></div>
                  <h2>Security groups</h2>
                  <p>Microsoft 365 security groups, formerly known as Office 365 security groups, allow admins to manage access to resources, for example, SharePoint, Intune, or apply conditional access policies.</p>
                  <h3>Create a security group in Microsoft 365</h3>
                  <p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <strong>Active teams &amp; groups</strong>. Then click <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard" target="_blank" rel="noreferrer"><strong>Add a group</strong></a></p>
                  <div ><img src="https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png" alt="Add a group to Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Security</strong> &gt; <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/bbX5gBD/create-a-security-group.png" alt="Create a security group" style="height: auto;width: auto" /></div>
                  <p>3. Name the group. Optionally add a description. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/zQJ9x1M/name-your-new-group.png" alt="Name your new Microsoft 365 group" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Create group</strong>.</p>
                  <div ><img src="https://i.ibb.co/TTf23Bz/create-security-group.png" alt="Create security group" style="height: auto;width: auto" /></div>
                  <h3>Add members to the security group</h3>
                  <p>To add members, you’ll need to go to the group and manage the members.</p>
                  <p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <strong>Active teams &amp; groups</strong> &gt; <strong>Security</strong>. Then click the group you want to manage</p>
                  <p>2. Click <strong>Members</strong> &gt; <strong>View all and manage members</strong>.</p>
                  <p>3. Click <strong>Add members</strong>.</p>
                  <p>4. Select the users you want to add to the group. Then click <strong>Add</strong>.</p>
                  <h2>Mail-enabled security groups</h2>
                  <p>Mail-enabled security groups are the best of both worlds. Use mail-enabled security groups to distribute messages and grant access permissions to resources in Microsoft 365.</p>
                  <p>You create mail-enabled security groups the same way you create security/distribution groups.</p>
                  <h2>Microsoft 365 groups</h2>
                  <p>Microsoft 365 groups allow users to create and manage their own teams. Microsoft 365 groups can create Microsoft Teams, shared mailboxes, or open discussion forums in Yammer. They can also be used in SharePoint sites, Planner, OneDrive shared libraries, Power BI and more. Note, I said can because depending on where you create the team it will change what is created along with it.</p>
                  <h3>How to create a Microsoft 365 group with a shared mailbox</h3>
                  <p>1. Open Outlook.</p>
                  <p>2. Right-click Groups in the left pane and click New Group.</p>
                  <div ><img src="https://i.ibb.co/ySVxbWK/new-microsoft-365-group.png" alt="Create a new Microsoft 365 group in Outlook" style="height: auto;width: auto" /></div>
                  <p>3. Set the name, email address, description, privacy, and decide if you want the emails to go to everyone’s mailboxes. Then click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/wR07Y6n/create-group-in-outlook.png" alt="Create Microsoft 365 group in Outlook" style="height: auto;width: auto" /></div>
                  <p>4. Enter the other members' names. Click the member to add them. Click <strong>Add Members</strong>.</p>
                  <div ><img src="https://i.ibb.co/TkpzRv9/add-members-to-outlook-group.png" alt="Add members to outlook group" style="height: auto;width: auto" /></div>
                  <h3>How to create a Microsoft 365 group in other apps</h3>
                  <p>Since knowing all the ways to create a Microsoft 365 group is outside the scope of MS-500 I’ll simply link the instructions below:</p>
                  <ul>
                    <li><a href="https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93" target="_blank" rel="noreferrer">Create a plan in Microsoft Planner</a></li>
                    <li><a href="https://support.office.com/en-us/article/create-a-group-in-outlook-04d0c9cf-6864-423c-a380-4fa858f27102" target="_blank" rel="noreferrer">Create a group in Microsoft Outlook</a></li>
                    <li><a href="https://support.office.com/en-us/article/create-a-team-site-in-sharepoint-online-ef10c1e7-15f3-42a3-98aa-b5972711777d" target="_blank" rel="noreferrer">Create a team site in SharePoint</a></li>
                    <li><a href="https://docs.microsoft.com/en-us/dynamics365/customer-engagement/admin/deploy-office-365-groups" target="_blank" rel="noreferrer">Deploy Microsoft 365 groups to power platform</a>&nbsp;</li>
                    <li><a href="https://docs.microsoft.com/en-us/microsoftteams/office-365-groups" target="_blank" rel="noreferrer">Create a group in Microsoft Teams</a>&nbsp;</li>
                    <li><a href="https://support.office.com/en-us/article/create-a-group-in-yammer-b407af4f-9a58-4b12-b43e-afbb1b07c889" target="_blank" rel="noreferrer">Create a group in Yammer</a>&nbsp;</li>
                  </ul>
                  <h2>Membership type</h2>
                  <p>Up until now, we’ve only discussed “assigned” groups. Assigned Groups are where you have assigned the user to the group. Another group type in Microsoft 365 is Dynamic. Dynamic groups are where the members are automatically added/removed depending on the attributes of the user. For example, you may want to create a security group based on departments. Then every user that has the same department will be automatically added to the group. For example, if the test says, “Users must be added automatically to the security group of their department.” Then a dynamic security group would be required.</p>
                  <h3>How to create a dynamic security group</h3>
                  <p>1. Open <strong>Azure AD admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups</strong></p>
                  <div ><img src="https://i.ibb.co/xMzW2hd/azure-ad-groups.png" alt="Azure AD Groups" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>New Group</strong></p>
                  <div ><img src="https://i.ibb.co/LzXYCTW/azure-ad-new-group.png" alt="Azure AD New Group" style="height: auto;width: auto" /></div>
                  <p>3. Enter the Group name &gt; optionally group description &gt; Select <strong>Dynamic User</strong> under Membership type &gt; Then click <strong>Add dynamic query</strong></p>
                  <div ><img src="https://i.ibb.co/Kq64m2j/New-dynamic-group.png" alt="Create a new dynamic group" style="height: auto;width: auto" /></div>
                  <p>4. Set the property to <strong>department</strong>. Set the Operator to <strong>Equals</strong>. Then set the Value to <strong>HR</strong>. Then click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/JBzmGBQ/dyanmic-membership-rules.png" alt="Dynamic membership rules" style="height: auto;width: auto" /></div>
                  <h2>Dynamic membership rules</h2>
                  <p>There are several ways to filter / automatically add users to dynamic groups. Let’s review the rules.</p>
                  <h4>Property</h4>
                  <p>The property attribute is the property the rule will be checking. In our example above we used the department property which says, “check the department property on each user”.</p>
                  <h4>Operator</h4>
                  <p>The operator attribute is how to check the property field against the value. We used Equals in the example above. There are a few more operators that should be discussed.</p>
                  <p><strong>Equals</strong>: The equals operator does an exact match (not case sensitive) of the property to the value.</p>
                  <p><strong>Contains</strong>: The contains operator does partial-string matches but not&nbsp;</p>
                  <p><strong>Match</strong>: The match operator does a regular expression matching.</p>
                  <h3>Dynamic group limits</h3>
                  <p>You can create a dynamic group that contains devices or users, but you can't create a group that contains both users and devices.</p>
                  <p>You can't build a dynamic device group based on the owners' attributes. Device dynamic group rules can only reference the device attributes.</p>
                  <h2>Access Review</h2>
                  <p>One of the issues with groups is users come and go and they may even switch job roles or departments. Without reviewing the groups to verify membership the user list may get stale and users may keep access to data that they shouldn’t. With Microsoft 365 you can configure access review.</p>
                  <p>With access review, you can set all groups or some of your groups to be reviewed. The reviewer can be the group owners, selected users, or groups, users can review their own access or managers of users. Lastly, you can set how often the reviewers need to perform the review. Let’s take a look.</p>
                  <h3>How to setup access review</h3>
                  <p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Identity Governance</strong>.</p>
                  <div ><img src="https://i.ibb.co/vP17HPH/Azure-AD-Identity-Governance.png" alt="Azure AD Identity Governance" style="height: auto;width: auto" /></div>
                  <p>2. <strong>Access reviews</strong> &gt; <strong>New access review</strong>.</p>
                  <div ><img src="https://i.ibb.co/bXKkwKH/new-access-review.png" alt="new access review" style="height: auto;width: auto" /></div>
                  <p>3. In the Select what to review dropdown click <strong>Teams + Groups</strong>. Click <strong>Select Teams + groups</strong>. Click <strong>select group(s)</strong>. Click the group you want to perform an access review. Click <strong>Select</strong>. Click <strong>All users</strong>. Click <strong>Next: Reviews</strong>.</p>
                  <div ><img src="https://i.ibb.co/ggzVL3L/access-review-review-type2.png" alt="Create new access review Review Type page" style="height: auto;width: auto" /></div>
                  <p>4. Click the Select reviewers drop down and click <strong>Group owner(s)</strong>. In duration (in days) set the number of days you want the review to be open for. For review recurrence set the amount of time before the next review. Click <strong>Next: Settings</strong>.</p>
                  <div ><img src="https://i.ibb.co/DMZz1sY/Access-review-reviews2.png" alt="New access review reviews page" style="height: auto;width: auto" /></div>
                  <p>5. Set <strong>Auto apply results to resource</strong>. Click <strong>Approve access under If reviewers don’t respond</strong>. Then click <strong>Next: Review + Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/3RtXhW7/access-review-settings.png" alt="Set the access review settings" style="height: auto;width: auto" /></div>
                  <p>6. Set the review name. Click <strong>Create</strong>.</p>
                  <h2>Group Naming policies</h2>
                  <p>The next thing I’d like to mention is group naming policies. Since users can create groups, you may want to use some sort of naming policy. For example, an organization Contoso may want a prefix in front of all the groups “Contoso-“</p>
                  <p>By setting a group naming policy all users will be required to use your specific naming policy with one exception. Global Admins &amp; User admins can still create groups without using the naming policy.</p>
                  <h3>How to set up a naming policy</h3>
                  <p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups</strong>.</p>
                  <div ><img src="https://i.ibb.co/ZSKQgj7/naming-policy-navigation.png" alt="Azure AD Groups Navigation" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Naming policy</strong> &gt; <strong>Group naming policy</strong>. Click <strong>Add prefix</strong>. Set the prefix to a <strong>string.</strong> Then set the prefix value. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/FD4vJbd/configure-group-naming-policy.png" alt="Configure group naming policy" style="height: auto;width: auto" /></div>
                  <h2>Auto-expiration of groups</h2>
                  <p>So now your Microsoft 365 groups are growing. Sometimes the groups can grow out of control. How do you manage all of them? You put the burden on the group owners. In short, you set the groups to auto-expire. Then the group owners will receive an email where they will need to renew the groups to keep them around. Let's jump in and take a look.</p>
                  <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups </strong>&gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/Lifecycle" target="_blank" rel="noreferrer"><strong>Expiration</strong></a>.</p>
                  <p>2. Set the <strong>Group lifetime (in days)</strong>. Set your email in the <strong>Email contact for groups with no owners</strong>. Set the <strong>enable expiration for these Microsoft 365 groups</strong> to <strong>All</strong>. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/cxPHf87/set-group-expiration.png" alt="set group expiration" style="height: auto;width: auto" /></div>
                  <p />
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
