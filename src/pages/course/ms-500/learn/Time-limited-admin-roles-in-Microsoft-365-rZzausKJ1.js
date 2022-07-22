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
      path: '/course/ms-500/learn/Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1',
      article: {ARTICLE: true},
      nextContentSlug: 'Whats-AD-Connect-ky5W0Lz5P',
      previousContentSlug: 'Creating-and-managing-admins-through-roles-7CpqFkPZU',
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
                <div><p>Instead of granting all your admins admin roles that they have all the time you can grant users just-in-time (JIT) administration. With JIT you can have your admins request the access they need. The access can be time-limited so the admin can request the permissions they require to perform a function and then those permissions will automatically disappear after a short while. Just-in-time administration is part of Privileged Identity Management (PIM). With PIM you can monitor access to important resources in your organization.</p>
                  <p><em>NOTE: PIM requires Azure AD Premium 2 licenses</em></p>
                  <h2>When to use PIM?</h2>
                  <p>You'll want to use PIM when you want to minimize the number of admins in your environment. With PIM users can be granted access when requested, if those accounts are compromised the malicious user won't have admin rights unless granted by another admin.</p>
                  <h2>What does PIM allow you to do?</h2>
                  <p>With PIM you can build several security-based access controls into your environment. Some of which are:</p>
                  <ul>
                    <li>Provide JIT admin access to your Microsoft 365 tenant</li>
                    <li>Assign time-bound access to admin rights using start and end dates so contractors and other time-limited employees can perform their job and automatically be revoked access after x days.</li>
                    <li>Require approval to be granted admin roles so another admin can verify the user is who he says he is before being given admin rights.</li>
                    <li>Enforce MFA to get admin roles</li>
                    <li>Use a justification form so users will need to give a reason why they need admin rights</li>
                    <li>Get notifications when users are given admin rights</li>
                    <li>Perform access review so you can be sure only those that require admin access have admin access.</li>
                    <li>View and export audit history to see who had admin rights and when</li>
                  </ul>
                  <h2>What licenses are required to use PIM?</h2>
                  <p>You'll need to assign an Azure AD Premium P2 license for each employee that will be performing the following tasks:</p>
                  <ul>
                    <li>Users that are assigned as eligible to have roles assigned through PIM.</li>
                    <li>Eligible users or owners of privileged access groups.</li>
                    <li>Users that approve or reject the requests in PIM</li>
                    <li>Users who perform or are assigned access review</li>
                  </ul>
                  <h2>What roles can enable/configure Azure AD Privileged Identity Management</h2>
                  <p>Global admins and Privileged role administrator roles can enable and configure Azure AD Privileged Identity Management.</p>
                  <p>Global Administrators, Security Administrators, Global Readers, and Security Readers can view assignments to Azure AD roles in PIM.</p>
                  <h2>Assign a role to a user</h2>
                  <p>First, we'll need to assign a user to the user administrator role so the user can be eligible to activate the role. What's eligible? An eligible role assignment requires a user to perform one or more actions before using the permissions granted to the role. Those actions can be "request permission" or "automatically approve" but either way the user has to first request the permissions. Once the user is approved to use the permissions assigned by the role the user can then be granted a limited time to use those roles. So, let's jump in and make a user eligible to use the user administrator role.</p>
                  <p>1. Go to the <a href="https://aad.portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ResourceMenuBlade/roles/resourceId//resourceType/tenant/provider/aadroles" target="_blank" rel="noreferrer">PIM Roles page</a> by going to <strong>Azure Ad</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong> &gt; <strong>Azure AD roles</strong> &gt; <strong>Roles</strong>.</p>
                  <p>2. Click <strong>Add assignments</strong></p>
                  <p>3. Click <strong>Search role</strong> &gt; Select the Users administrator role</p>
                  <div ><img src="https://i.ibb.co/BBQgBqk/PIM-user-administrator-role.png" alt="PIM user administrator role" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>No member selected</strong>. Search for the user you want to add then click on them. Click <strong>Select </strong>&gt; <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/nDvjyPD/select-member-to-add-to-PIM-role.png" alt="select member to add to PIM role" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Assign</strong>.</p>
                  <p><em>Before clicking Assign you can click Active to make the permissions active all the time. Simply click the Active radio button and provide justification for requiring the permissions.</em></p>
                  <h2>To set a user as eligible from active</h2>
                  <p>Did you assign someone permanent permissions and then realize they shouldn't have them? It's easy to switch them to eligible.</p>
                  <p>1. Go to the <a href="https://aad.portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ResourceMenuBlade/roles/resourceId//resourceType/tenant/provider/aadroles" target="_blank" rel="noreferrer">PIM roles page</a>  by going to Azure AD &gt; All services &gt; Azure AD Privileged Identity Management &gt; Azure AD roles &gt; roles</p>
                  <p>2. Select the role you want to update a user for.</p>
                  <p>3. Go to active assignments &gt; click the user you want to update</p>
                  <p>4. Click <strong>Update </strong>&gt; Set <strong>assignment type</strong> to <strong>Eligible</strong> &gt; <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/JxR7DVR/update-pim-assignment-type-to-eligible.png" alt="update pim assignment type to eligible" style="height: auto;width: auto" /></div>
                  <p>A role assignment that requires a user to perform one or more actions to use the role. If a user has been made eligible for a role, that means they can activate the role when they need to perform privileged tasks. There's no difference in the access given to someone with a permanent versus an eligible role assignment. The only difference is that some people don't need that access all the time.</p>
                  <h2>How to activate a role</h2>
                  <p>So the user now can activate an admin role but how do they activate it? Well, it's pretty simple:</p>
                  <p>1. Go to <a href="https://aad.portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ActivationMenuBlade/aadmigratedroles" target="_blank" rel="noreferrer">Azure AD Privileged Identity Management &gt; My Roles</a>.</p>
                  <p>2. In the user role you want to activate click <strong>Activate</strong>.</p>
                  <div ><img src="https://i.ibb.co/m6MXrHM/activate-PIM-role.png" alt="Activate PIM role" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Additional verification required. Click to continue</strong>.</p>
                  <div ><img src="https://i.ibb.co/fpPY2xS/activate-PIM-additional-steps.png" alt="activate PIM - additional steps" style="height: auto;width: auto" /></div>
                  <p>4. Walk through the MFA.</p>
                  <p>5. Add a reason you need to activate the role then click <strong>Activate</strong>.</p>
                  <div ><img src="https://i.ibb.co/RYwWx2C/activate-a-pim-role.png" alt="Activate a PIM role" style="height: auto;width: auto" /></div>
                  <h2>Require another user to approve before gaining admin rights</h2>
                  <p>So now a user doesn't have admin rights all the time. They need to request the admin rights but they are automatically approved. Uh-oh. That means a malicious user can gain access to the user account and then gain admin rights without the approval of another admin. Let's set another account as an admin but this time require another admin to approve the rights. <em>By default, Global administrators and Privileged role administrators can approve the requests</em>.</p>
                  <p>1. Go to <a href="https://aad.portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ResourceMenuBlade/roles/resourceId//resourceType/tenant/provider/aadroles" target="_blank" rel="noreferrer">Azure AD &gt; All services &gt; Azure AD Privileged Identity Management &gt; Azure AD Roles &gt; Roles</a>.</p>
                  <p>2. Find and click <strong>Application administrator</strong> in the list.</p>
                  <p>3. Click <strong>Add assignments</strong>.</p>
                  <p>4. Click <strong>No member selected</strong> then select the new admin. Then click <strong>Select</strong> &gt; <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/Yc0QwmF/add-user-to-pim-role.png" alt="Add user to PIM role" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Assign</strong>.</p>
                  <p>6. Click <strong>Settings</strong> &gt; <strong>Edit</strong>.</p>
                  <p>7. Click <strong>Require approval to activate</strong> &gt; <strong>Update</strong>.</p>
                  <div ><img src="https://i.ibb.co/zxRpGCz/Require-approval-to-activate-PIM-role.png" alt="Require approval to activate PIM role" style="height: auto;width: auto" /></div>
                  <p>Now when the user requests permission they'll go threw the following flow:</p>
                  <p>1. Go to <strong>Azure AD</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ActivationMenuBlade/aadmigratedroles" target="_blank" rel="noreferrer"><strong>My roles</strong></a>.</p>
                  <p>2. Click <strong>Activate</strong> next to the role.</p>
                  <p>3. Enter a reason then click <strong>Activate</strong>.</p>
                  <p>At this point global admins and privileged admins will receive the following email:</p>
                  <div ><img src="https://i.ibb.co/94DYNsJ/email-to-approve-PIM-role.png" alt="email to approve PIM role" style="height: auto;width: auto" /></div>
                  <p>1. The admin will need to click Approve or deny request.</p>
                  <p>2. Click the check box next to the request. Then click <strong>Approve</strong>.</p>
                  <div ><img src="https://i.ibb.co/31LQgZp/approve-pim-role.png" alt="approve PIM role" style="height: auto;width: auto" /></div>
                  <h2>Configure users to perform administrative tasks for up to three hours at a time</h2>
                  <p>Let's say you have a handful of admins that require the User Administrator role but you want to only allow them to perform the role for 3 hours at a time. What do you do?</p>
                  <p>1. Navigate to the <a href="https://aad.portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ResourceMenuBlade/RoleSettings/resourceId//resourceType/tenant/provider/aadroles" target="_blank" rel="noreferrer">PIM Settings page</a> by going to <strong>Azure AD</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Privileged Identity Management</strong> &gt; <strong>Azure AD roles</strong> &gt; <strong>Settings</strong>.</p>
                  <p>2. Search for the admin role you want to make the user eligible for. In our example, <strong>User Administrator</strong>.</p>
                  <p>3. Click the role you want to make the user eligible for.</p>
                  <p>4. Click <strong>Edit</strong>.</p>
                  <p>5. Set the <strong>Activation maximum duration</strong> to 3. Click <strong>Assignment</strong>.</p>
                  <h2>Configure admins to get notifications when an admin role is assigned</h2>
                  <p>So now Joe Gruber can assign the user admin role but no one is notified when he activates the role. So let's configure notifications for when our user activates the role</p>
                  <p>1. Go to the <a href="https://aad.portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ResourceMenuBlade/roles/resourceId//resourceType/tenant/provider/aadroles" target="_blank" rel="noreferrer">PIM roles</a> by navigating to Azure AD &gt; All services &gt; Azure AD Privileged Identity Management &gt; Azure AD Roles &gt; Roles.</p>
                  <div ><img src="https://i.ibb.co/QrMW7vS/PIM-Roles-Settings.png" alt="PIM Role Settings" style="height: auto;width: auto" /></div>
                  <p>2. Search for the admin role you want to enable notifications for. In our example, <strong>User Administrator</strong>.</p>
                  <p>3. Click the <strong>User Administrator</strong> role.</p>
                  <p>4. Click <strong>Settings</strong>.</p>
                  <div ><img src="https://i.ibb.co/K7RYYht/user-administrator-pim-role-settings.png" alt="user administrator - pim role - settings" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Edit</strong>.</p>
                  <p>6. Click Notification. Add your email in the <strong>Additional recipients</strong> field next to the <strong>Role assignment alert </strong>type. Click <strong>Update</strong>.</p>
                  <div ><img src="https://i.ibb.co/9pv4PMV/edit-notifications-to-pim-role.png" alt="Edit notifications when assigned PIM role" style="height: auto;width: auto" /></div>
                  <h2>Automatically remove role if the user doesn't sign in</h2>
                  <div ><img src="https://i.ibb.co/jJSRrC4/access-review.png" alt="Create access review to automatically remove access" style="height: auto;width: auto" /></div>
                  <p>So now users are required to use MFA and give a reason to get the admin rights, but what if a user leaves? They may not be terminated but they go on an extended vacation and you forget to remove the permissions. Now you have an admin account floating around out there that's not in use. Fortunately, Microsoft 365 has you covered. You can have the user's rights removed automatically if the user has not logged in for over X days. Let's set it to 30 for our group.</p>
                  <p>1. Go to the <a href="https://aad.portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ResourceMenuBlade/AccessReviews/resourceId//resourceType/tenant/provider/aadroles" target="_blank" rel="noreferrer">Access Review page</a>  by going to Azure AD &gt; All services &gt; Azure AD Privileged Identity Management &gt; Azure AD roles &gt; Access reviews</p>
                  <p>2. Click <strong>New</strong>.</p>
                  <p>3. Set the <strong>name</strong>. Set the <strong>frequency</strong> to Monthly. The <strong>Duration</strong> to 27. Set <strong>End </strong>to Never.</p>
                  <p>4. Click <strong>Select Privileged role(s)</strong>. Search for and find User Administrator. Click the check box next to User Administrator then click <strong>Done</strong>.</p>
                  <p>5. Select <strong>Members (self)</strong> in the <strong>Reviewers</strong> dropdown.</p>
                  <p>6. Expand the <strong>Upon completion settings</strong>.</p>
                  <p>7. Click <strong>Enable</strong> next to <strong>Auto apply results to resource</strong>.</p>
                  <p>8. In the <strong>If reviewers don't respond</strong> drop-down select <strong>Remove access</strong>.</p>
                  <p>9. Click <strong>Start</strong>.</p>
                  <h3>How admins will review the role</h3>
                  <p />
                  <div ><img src="https://i.ibb.co/2FbB27k/start-review-email.png" alt="Start review access" style="height: auto;width: auto" /></div>
                  <p>So now the user will need to review their access every month. They'll receive an email that asks them to "Please review access to the User Administrator role". When received simply click <strong>Start review</strong>. Enter a reason then click <strong>Approve</strong>.</p>
                  <div ><img src="https://i.ibb.co/5jn8nzX/Revoke-permissions-after-30-days-of-no-activity.png" alt="Revoke permissions after 30 days of no activity" style="height: auto;width: auto" /></div>
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
