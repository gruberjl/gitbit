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
      path: '/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU',
      article: {ARTICLE: true},
      nextContentSlug: 'Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1',
      previousContentSlug: 'How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC',
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
                <div><p>Now let's take a look at assigning admin roles. There are a lot of different models and strategies to manage administrative rights but the one Microsoft chose to implement in Microsoft 365 is Role-Based Access Control (RBAC). The way RBAC works is the administrative rights or permissions you're given in the organization are based on your role. In short, Microsoft has implemented several roles that can be assigned to users that will grant user-specific rights.</p>
                  <p>One of the best things about roles is roles will allow us to see exactly what rights a user has. It isn't so obvious with groups. You probably work with groups in your on-premise environment. Where you create a group, assign members to the group, and then assign permissions to the group. But here's the problem, there's nothing that documents what rights those groups had. With roles, you can see exactly what admin rights the roles have. In Microsoft 365 there are built-in roles that are assigned several permissions across your tenant but you can also create a custom role and assign it rights. Then you or another admin can review the rights that are assigned to that role.</p>
                  <h2>What's the principle of least privilege?</h2>
                  <p>In short, it's a concept in cybersecurity to give out the least amount of permissions that is possible. In short, you don't want everyone being global admins because then someone that's upset with your organization or accidentally may screw up your Microsoft 365 tenant. For example, someone that manages your email environment doesn't need to be a SharePoint admin. Microsoft will always recommend the principle of least privilege. So if you see a question regarding what role does user X need to do Y? Always select the role that gives the least amount of permissions</p>
                  <h2>How to assign roles to users</h2>
                  <p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a>.</p>
                  <p>2. Click the user you want to assign a role to then click <strong>Manage roles</strong>.</p>
                  <div ><img src="https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png" alt="Microsoft 365 assign a role to a user" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Admin center access</strong> then select the roles you want to assign.</p>
                  <div ><img src="https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png" alt="Microsoft 365 assign admin role to user" style="height: auto;width: auto" /></div>
                  <p>If you want to give more specific permissions click <strong>Show all by category</strong>.</p>
                  <div ><img src="https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png" alt="Microsoft 365 admin role categories" style="height: auto;width: auto" /></div>
                  <h2>How to view the rights of admin roles</h2>
                  <p>A quick overview of the admin role can be seen by highlighting the <strong>I</strong> next to the role.</p>
                  <div ><img src="https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png" alt="Microsoft 365 admin roles view description" style="height: auto;width: auto" /></div>
                  <p>But to see the actual role permissions assigned you'll need to use Azure Active Directory</p>
                  <p>1. Go to <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators" target="_blank" rel="noreferrer">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators</a></p>
                  <p>2. Click the administrative role you want to view the permissions for.</p>
                  <p>From this page, you can view all the roles in your tenant.&nbsp;</p>
                  <div ><img src="https://i.ibb.co/gVnhfmz/azure-ad-roles.png" alt="Azure AD Roles" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Description</strong>. From there you can view the role permissions.</p>
                  <div ><img src="https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png" alt="C:\Users\john.gruber\Downloads\azure ad role permissions descriptions" style="height: auto;width: auto" /></div>
                  <h2>A few key Microsoft 365 roles</h2>
                  <p>In the next section, I'll review a few key roles and what they have access to do. It's important to remember what roles can perform what permissions as part of the MS-500 test.</p>
                  <h3>Global administrator</h3>
                  <p>The global administrator has full access to everything. They can assign roles, reset passwords of other admins. Take ownership of mailboxes and OneDrive containers. You'll want to be careful to who you assign the global administrator role. They have the keys to the kingdom.</p>
                  <h3>Password administrator</h3>
                  <p>The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles:</p>
                  <ul>
                    <li>Directory readers</li>
                    <li>Guest inviter</li>
                    <li>Password administrator</li>
                  </ul>
                  <p>Let's take an example, Let's say you have a user John Gruber that's a password administrator. And you have a global admin named Kendra Smith and a regular user Daniel James. Who's password can John Gruber reset? Daniel's. John can't reset Kendra's password because she's a global administrator.</p>
                  <h3 ><span >Security Reader</span></h3>
                  <p><span >Users with the security reader role have global read-only access to view the security configuration. The users with the security reader role can view the following:</span></p>
                  <ul>
                    <li><span >View Azure Active Directory sign-in reports</span></li>
                    <li><span >View Azure Active Directory audit logs</span></li>
                    <li><span >View ATP reports in the Threat management dashboard</span></li>
                    <li><span >Read-only access to the Security &amp; Compliance Center</span></li>
                    <li><span >Read-only access to the Microsoft 365 compliance center</span></li>
                    <li><span >Read the Microsoft Defender for Office 365 reports in the Threat management dashboard</span></li>
                  </ul>
                  <h3>Security administrator</h3>
                  <p>The security administrator role is assigned to users that manage the security of your Microsoft 365 tenant. The security administrator users will have all the permissions that the security reader has plus the ability to edit the security settings. It gives the users the permissions to perform the following:</p>
                  <ul>
                    <li>View ATP reports in the Threat management dashboard</li>
                    <li>Create and modify data loss protection policies</li>
                    <li>Create and manage labels</li>
                    <li>Manage email protection (anti-phishing, safe links, and anti-malware)</li>
                  </ul>
                  <h3>Privileged role administrator</h3>
                  <p>Users with the privileged role administrator role can manage role assignments in Azure Active Directory. They can also enable, configure, and manage the Azure AD Privileged Identity Management. The privileged role administrators can assign other users with different admin roles. They cannot manage their own role permissions. For example, if John Gruber is assigned the privileged role administrator role then John Gruber can assign User1 with the reports reader role.</p>
                  <h3>Service support administrator</h3>
                  <p>The service support administrator role is used to open support requests with Microsoft. They can also view the service dashboard and message center in the admin portals.</p>
                  <h3>Guest inviter</h3>
                  <p>Members of the guest inviter role can invite guests even when the "members can invite" property is set to no. The guest inviter admin role isn't even really an admin because that's all they can do.</p>
                  <h3>Security operator</h3>
                  <p>Users with the security operator role can review the audit log but can't disable auditing. The security operator role users will also have global read-only access to the security-related features, including all information in Microsoft 365 security center, Azure Active Directory, and Privileged Identity Management. The security operator can also manage features in the identity protection center.</p>
                  <h2>Exchange Online Roles</h2>
                  <p>Microsoft 365 is so vast that not all the roles are displayed in the Microsoft 365 roles. The Exchange/email-specific roles are stored in the Exchange admin center. That way you can give admins specific rights to just Exchange Online. For example, you can give someone complete admin access to Exchange Online by assigning them the Microsoft 365 Exchange administrator role or you can assign them the Organization Management Exchange Online role. One thing to note, if you're a global administrator you're already assigned the organization management role.</p>
                  <h3>How to assign Exchange Online admin roles</h3>
                  <p>1. Go to <a href="https://admin.exchange.microsoft.com/#/adminRoles" target="_blank" rel="noreferrer">https://admin.exchange.microsoft.com/#/adminRoles</a> and sign in with your admin credentials.</p>
                  <p>2. Click the role you want to assign to a user. Then click the <strong>Assigned</strong> tab. Finally, click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png" alt="Assign Exchange Online admin roles" style="height: auto;width: auto" /></div>
                  <p>3. Type the name of the user you want to add as an admin. Click the user in the drop-down.</p>
                  <div ><img src="https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png" alt="Exchange Online add admin" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png" alt="Add user to Exchange admin role" style="height: auto;width: auto" /></div>
                  <h3><span >How to view the rights of Exchange Online admin roles</span>&nbsp;</h3>
                  <p>Just like the Microsoft 365 admin roles, you can view the description and see the permissions assigned to each role.</p>
                  <p>1. To view the description go to <a href="https://admin.exchange.microsoft.com/#/adminRoles" target="_blank" rel="noreferrer">https://admin.exchange.microsoft.com/#/adminRoles</a> and click the role you want to view.</p>
                  <div ><img src="https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png" alt="View the Exchange Online admin role descrptions" style="height: auto;width: auto" /></div>
                  <p>2. To view the permissions assigned click the <strong>Permissions </strong>tab. You can review the permissions by hovering the mouse over the <strong>I</strong>.</p>
                  <div ><img src="https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png" alt="Exchange Online admin role permissions" style="height: auto;width: auto" /></div>
                  <h3>A few key Exchange Online roles</h3>
                  <h4>Organization Management</h4>
                  <p>Organization Management members can manage virtually everything in Exchange Online. It's like the global admin but for Exchange Online.</p>
                  <h4>Discovery Management</h4>
                  <p>Discovery management members can perform searches of mailboxes and manage legal holds / preserve all the mailbox content.</p>
                  <h4>Recipient Management</h4>
                  <p>Recipient Management members can create, manage, and remove recipients in Exchange Online.</p>
                  <h2>Security &amp; Compliance Roles</h2>
                  <p>Microsoft 365 and Exchange Online aren't the only places roles are set up. There are also roles in the security and compliance admin center. These roles work virtually the same as the Microsoft 365 and Exchange Online roles. Each role has a name, description, permissions assigned, and members of the role but there is a small difference. Half the security &amp; compliance roles are stored in Azure AD. The other half are compliance center roles. So let's take a look at assigning compliance center roles.</p>
                  <h3>How to assign roles to users</h3>
                  <p>1. Go to <a href="https://compliance.microsoft.com/permissions" target="_blank" rel="noreferrer">https://compliance.microsoft.com/permissions</a>.</p>
                  <p>2. Click <strong>Roles</strong> under Compliance center.</p>
                  <div ><img src="https://i.ibb.co/N2mM2rk/compliance-center-roles.png" alt="Microsoft 365 compliance center open roles button" style="height: auto;width: auto" /></div>
                  <p>3. Click the role you want to assign</p>
                  <div ><img src="https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png" alt="Compliance role edit members" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Choose members</strong></p>
                  <div ><img src="https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - choose members" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Add</strong></p>
                  <div ><img src="https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png" alt="compliance center roles - add members" style="height: auto;width: auto" /></div>
                  <p>6. Click the checkmark next to the users you want to add to the role. Verify the number of users you select appears next to Added. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - select members to add" style="height: auto;width: auto" /></div>
                  <p>7. Click <strong>Done</strong> then click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - Save member change" style="height: auto;width: auto" /></div>
                  <h3>How to view the rights of compliance center admin roles</h3>
                  <p>It's easy to view the assigned roles to the role groups.</p>
                  <p>1. Go to <a href="https://compliance.microsoft.com/compliancecenterpermissions" target="_blank" rel="noreferrer">https://compliance.microsoft.com/compliancecenterpermissions</a> and sign in with your admin permissions.</p>
                  <p>2. Click the role you want to view the permissions for.</p>
                  <p>3. View the Assigned roles.</p>
                  <div ><img src="https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png" alt="Compliance center roles - view assigned roles" style="height: auto;width: auto" /></div>
                  <h3>A few key compliance center admin roles</h3>
                  <p>In the next section, I'll review a few key roles and what they have access to do. It's important to remember what roles can perform what permissions as part of the MS-500 test.</p>
                  <h4>Global admin</h4>
                  <p>The global admin in the Microsoft 365 tenant have access to the entire compliance center. They can add and remove roles and members from roles. They can even add themselves to compliance center roles.</p>
                  <h4>eDiscovery managers</h4>
                  <p><span >An eDiscovery manager can perform searches, including exporting and previewing the results. </span> They can create, as well as, manage eDiscovery cases including adding members to the cases. They can't access or manage cases created by other eDiscovery Managers.</p>
                  <h4>eDiscovery administrators</h4>
                  <p>eDiscovery administrators can perform all the functions as an eDiscovery manager + manage other people's cases.</p>
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
