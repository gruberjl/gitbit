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
      path: '/course/ms-500/learn/How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC',
      article: {"slug":"How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC","featuredImage":"https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png","title":"How to create users in Microsoft 365 Cloud Only","article":{"blocks":[{"entityRanges":[],"key":"5tuqs","depth":0,"data":{},"inlineStyleRanges":[],"text":"So let's talk quickly about creating users in Microsoft 365. Every user in your organization that requires a mailbox or admin role will be required to have a user account. The easiest way to add a user account is by creating a single user account in Microsoft 365.","type":"unstyled"},{"key":"3fuvg","entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"Add a single user account in Microsoft 365 admin center","depth":0,"type":"header-two"},{"key":"asogk","data":{},"depth":0,"entityRanges":[{"key":0,"length":41,"offset":9}],"inlineStyleRanges":[],"text":"1. Go to Microsoft 365 admin center > active users page. Log in with your admin credentials.","type":"unstyled"},{"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"depth":0,"data":{},"text":"2. Click Add a user","key":"a8br5"},{"type":"atomic","depth":0,"key":"5ijjp","data":{},"inlineStyleRanges":[],"entityRanges":[{"key":1,"length":1,"offset":0}],"text":" "},{"inlineStyleRanges":[{"offset":208,"style":"BOLD","length":4}],"text":"3. Enter the user's first name, last name, and username. On this page, you can also select if you want to automatically create a password or require the user to change the password at first login. Then click Next.","key":"a9vvh","depth":0,"entityRanges":[],"data":{},"type":"unstyled"},{"entityRanges":[{"offset":0,"length":1,"key":2}],"type":"atomic","text":" ","inlineStyleRanges":[],"depth":0,"key":"buifr","data":{}},{"depth":0,"entityRanges":[],"key":"c7vt0","data":{},"inlineStyleRanges":[{"style":"BOLD","offset":194,"length":4}],"type":"unstyled","text":"4. On the next page, you select the license assignment. Once you check the license you want to assign you can view the apps associated with the license by clicking the apps dropdown. Then click Next."},{"data":{},"key":"db2ud","text":" ","inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":3}],"type":"atomic","depth":0},{"key":"fi4in","type":"unstyled","data":{},"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":232}],"text":"5. On the Optional settings page select the admin roles you want to assign the user. More on the roles in the next lesson. On this page you can also set profile info: Job title, department, office, phone numbers, and address. Click Next.","depth":0,"entityRanges":[]},{"entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":13}],"text":"6. Click Finish adding.","key":"5v9p0","depth":0},{"depth":0,"text":"Add a lot of users at one time","type":"header-two","key":"eru3i","inlineStyleRanges":[],"data":{},"entityRanges":[]},{"data":{},"type":"unstyled","depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"escps","text":"Manually adding users can get tedious especially if you have more than 5. So next we'll download a CSV template and update it with a bunch of users then import those users in Microsoft 365."},{"data":{},"entityRanges":[{"key":4,"offset":25,"length":18}],"text":"1. Go to Microsoft 365 > Add Multiple Users.","inlineStyleRanges":[],"key":"e3sr4","depth":0,"type":"unstyled"},{"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":46}],"entityRanges":[],"type":"unstyled","data":{},"depth":0,"key":"ehogc","text":"2. Click Download a blank CSV with the required headers."},{"type":"atomic","data":{},"depth":0,"text":" ","key":"5s5ra","entityRanges":[{"length":1,"key":5,"offset":0}],"inlineStyleRanges":[]},{"text":"3. Open the file in Excel.","depth":0,"inlineStyleRanges":[],"data":{},"type":"unstyled","key":"cshfd","entityRanges":[]},{"key":"7p0it","depth":0,"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"data":{},"text":"4. Add the user information that you want uploaded and save the sheet."},{"depth":0,"data":{},"type":"atomic","text":" ","entityRanges":[{"key":6,"length":1,"offset":0}],"key":"12dsj","inlineStyleRanges":[]},{"inlineStyleRanges":[],"type":"unstyled","data":{},"key":"962kl","depth":0,"text":"5. Click browse and select the CSV you just updated. Then click Next.","entityRanges":[]},{"depth":0,"key":"89g6q","entityRanges":[{"key":7,"length":1,"offset":0}],"data":{},"text":" ","inlineStyleRanges":[],"type":"atomic"},{"entityRanges":[],"type":"unstyled","data":{},"inlineStyleRanges":[{"offset":71,"style":"BOLD","length":4}],"depth":0,"text":"6.  Select the licenses you want to assign to the new users then click Next.","key":"117nm"},{"text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"data":{},"entityRanges":[{"key":8,"length":1,"offset":0}],"key":"4b82a"},{"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":9}],"text":"7. Click Add users.","type":"unstyled","data":{},"depth":0,"entityRanges":[],"key":"akvl4"},{"type":"unstyled","entityRanges":[],"key":"o5ah","text":"8. Click Download results to download a spreadsheet with the new user's usernames and password. Then click Close","depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","length":16,"offset":9}]},{"inlineStyleRanges":[],"data":{},"depth":0,"text":" ","entityRanges":[{"length":1,"offset":0,"key":9}],"key":"bvvuc","type":"atomic"},{"key":"dl35f","text":"Add a single user to Office 365 using PowerShell","depth":0,"data":{},"inlineStyleRanges":[],"type":"header-two","entityRanges":[]},{"depth":0,"inlineStyleRanges":[],"text":"Alright, now that we know how to create users using the web browser let's create a user using PowerShell.","type":"unstyled","entityRanges":[],"key":"6ap8a","data":{}},{"inlineStyleRanges":[],"text":"1. Run Connect-MsolService and login with your admin credentials.","depth":0,"key":"3caa3","entityRanges":[],"type":"unstyled","data":{}},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[{"length":18,"offset":7,"style":"BOLD"}],"text":"2. Run Get-MsolAccountSku. The Get-MsolAccountSku command will return the AccountSkuId which is a way to identify your license ids.","key":"5vp5l","type":"unstyled"},{"key":"c2iaa","text":" ","depth":0,"data":{},"entityRanges":[{"length":1,"offset":0,"key":10}],"type":"atomic","inlineStyleRanges":[]},{"depth":0,"data":{},"entityRanges":[],"type":"unstyled","text":"3. Run the following command: New-MsolUser -DisplayName \"<DisplayName>\" -FirstName <FirstName> -LastName <LastName> -UserPrincipalName <UserSignInName> -UsageLocation US -LicenseAssignment <AccountSkuId> replacing the parts in brackets with your user's information.","inlineStyleRanges":[{"length":173,"offset":30,"style":"BOLD"}],"key":"9gjdb"},{"inlineStyleRanges":[],"type":"atomic","key":"c2hca","entityRanges":[{"offset":0,"key":11,"length":1}],"data":{},"text":" ","depth":0},{"type":"unstyled","key":"bl1fg","entityRanges":[],"data":{},"inlineStyleRanges":[],"depth":0,"text":"That's it. You've now created a new user using PowerShell."},{"key":"5753m","text":"How to view and edit Microsoft 365 users","entityRanges":[],"inlineStyleRanges":[],"type":"header-two","data":{},"depth":0},{"depth":0,"data":{},"text":"Viewing and editing users in Microsoft 365 is as easy as pie.","inlineStyleRanges":[],"entityRanges":[],"key":"rc1c","type":"unstyled"},{"type":"unstyled","entityRanges":[{"length":70,"offset":15,"key":12}],"key":"f3itf","depth":0,"data":{},"inlineStyleRanges":[],"text":"1. First go to https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users and sign in with your admin credentials."},{"entityRanges":[],"text":"There's the list of users.","data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"7dujc"},{"depth":0,"data":{},"type":"unstyled","key":"1pan7","text":"2. To edit a user click on the user. You'll see the user's information. There you can use the tabs at the top to navigate around the user or you can click Manage username and email to update the user's sign in name or email address. Finally, click Manage contact information to edit the user's contact information.","inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":314},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":314},{"offset":0,"style":"fontsize-16","length":314},{"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":314}],"entityRanges":[]},{"type":"atomic","data":{},"entityRanges":[{"offset":0,"key":13,"length":1}],"depth":0,"text":" ","key":"1s5ug","inlineStyleRanges":[]},{"type":"unstyled","data":{},"inlineStyleRanges":[],"text":"","entityRanges":[],"key":"d1d1o","depth":0}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users"}},"1":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png","height":"auto","width":"auto","alt":"Add a user button in Microsoft 365 admin center","alignment":"none"}},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Microsoft 365 basic user account information","alignment":"none","src":"https://i.ibb.co/gycTqzd/basic-user-account-information.png","height":"auto","width":"auto"}},"3":{"type":"IMAGE","data":{"alignment":"none","width":"auto","height":"auto","alt":"Assign licenses in Microsoft 365","src":"https://i.ibb.co/0BwW2xG/assign-licenses.png"},"mutability":"MUTABLE"},"4":{"data":{"url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users/:/addmultipleusers","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"5":{"mutability":"MUTABLE","data":{"alt":"Download a blank CSV file with the required headers","src":"https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png","width":"auto","alignment":"none","height":"auto"},"type":"IMAGE"},"6":{"data":{"width":"auto","alignment":"none","src":"https://i.ibb.co/Jxk3Xnp/users-to-upload.png","height":"auto","alt":"Microsoft 365 Users to Upload CSV"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","width":"auto","src":"https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png","height":"auto","alt":"Microsoft 365 upload users to import"}},"8":{"type":"IMAGE","data":{"alignment":"none","height":"auto","width":"auto","alt":"Microsoft 365 Assign licenses to imported users","src":"https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png"},"mutability":"MUTABLE"},"9":{"type":"IMAGE","data":{"width":"auto","src":"https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png","height":"auto","alignment":"none","alt":"Microsoft 365 Import Users Download results"},"mutability":"MUTABLE"},"10":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","alignment":"none","height":"auto","alt":"Get-MsolAccountSku","src":"https://i.ibb.co/C2WryQD/get-msolaccountsku.png"}},"11":{"data":{"src":"https://i.ibb.co/BNtPDq9/New-Msol-User.png","width":"auto","alt":"New-MsolUser","height":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"12":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users"},"type":"LINK"},"13":{"data":{"width":"auto","src":"https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png","alignment":"none","height":"auto","alt":"Microsoft 365 edit user pane"},"type":"IMAGE","mutability":"MUTABLE"}}},"datePublished":"2022/5/26","description":"Creating users in Microsoft 365 is easy. Follow our guide to get started.","images":["https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png","https://i.ibb.co/gycTqzd/basic-user-account-information.png","https://i.ibb.co/0BwW2xG/assign-licenses.png","https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png","https://i.ibb.co/Jxk3Xnp/users-to-upload.png","https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png","https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png","https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png","https://i.ibb.co/C2WryQD/get-msolaccountsku.png","https://i.ibb.co/BNtPDq9/New-Msol-User.png","https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png","https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png","https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png"],"publish":true,"sectionId":"AFV_acckJ","id":"uYCIPbnMC","type":"article"},
      nextContentSlug: 'Creating-and-managing-admins-through-roles-7CpqFkPZU',
      previousContentSlug: 'Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
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
                <div><p>So let's talk quickly about creating users in Microsoft 365. Every user in your organization that requires a mailbox or admin role will be required to have a user account. The easiest way to add a user account is by creating a single user account in Microsoft 365.</p>
<h2>Add a single user account in Microsoft 365 admin center</h2>
<p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank">Microsoft 365 admin center &gt; active users</a> page. Log in with your admin credentials.</p>
<p>2. Click Add a user</p>
<div ><img src="https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png" alt="Add a user button in Microsoft 365 admin center" style="height: auto;width: auto"/></div>
<p>3. Enter the user's first name, last name, and username. On this page, you can also select if you want to automatically create a password or require the user to change the password at first login. Then click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/gycTqzd/basic-user-account-information.png" alt="Microsoft 365 basic user account information" style="height: auto;width: auto"/></div>
<p>4. On the next page, you select the license assignment. Once you check the license you want to assign you can view the apps associated with the license by clicking the apps dropdown. Then click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/0BwW2xG/assign-licenses.png" alt="Assign licenses in Microsoft 365" style="height: auto;width: auto"/></div>
<p>5. On the Optional settings page select the admin roles you want to assign the user. More on the roles in the next lesson. On this page you can also set profile info: Job title, department, office, phone numbers, and address. Click <strong>Next</strong>.</p>
<p>6. Click <strong>Finish adding</strong>.</p>
<h2>Add a lot of users at one time</h2>
<p>Manually adding users can get tedious especially if you have more than 5. So next we'll download a CSV template and update it with a bunch of users then import those users in Microsoft 365.</p>
<p>1. Go to Microsoft 365 &gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users/:/addmultipleusers" target="_blank">Add Multiple Users</a>.</p>
<p>2. Click <strong>Download a blank CSV with the required headers</strong>.</p>
<div ><img src="https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png" alt="Download a blank CSV file with the required headers" style="height: auto;width: auto"/></div>
<p>3. Open the file in Excel.</p>
<p>4. Add the user information that you want uploaded and save the sheet.</p>
<div ><img src="https://i.ibb.co/Jxk3Xnp/users-to-upload.png" alt="Microsoft 365 Users to Upload CSV" style="height: auto;width: auto"/></div>
<p>5. Click browse and select the CSV you just updated. Then click Next.</p>
<div ><img src="https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png" alt="Microsoft 365 upload users to import" style="height: auto;width: auto"/></div>
<p>6.  Select the licenses you want to assign to the new users then click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png" alt="Microsoft 365 Assign licenses to imported users" style="height: auto;width: auto"/></div>
<p>7. Click <strong>Add users</strong>.</p>
<p>8. Click <strong>Download results</strong> to download a spreadsheet with the new user's usernames and password. Then click Close</p>
<div ><img src="https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png" alt="Microsoft 365 Import Users Download results" style="height: auto;width: auto"/></div>
<h2>Add a single user to Office 365 using PowerShell</h2>
<p>Alright, now that we know how to create users using the web browser let's create a user using PowerShell.</p>
<p>1. Run Connect-MsolService and login with your admin credentials.</p>
<p>2. Run <strong>Get-MsolAccountSku</strong>. The Get-MsolAccountSku command will return the AccountSkuId which is a way to identify your license ids.</p>
<div ><img src="https://i.ibb.co/C2WryQD/get-msolaccountsku.png" alt="Get-MsolAccountSku" style="height: auto;width: auto"/></div>
<p>3. Run the following command: <strong>New-MsolUser -DisplayName "&lt;DisplayName&gt;" -FirstName &lt;FirstName&gt; -LastName &lt;LastName&gt; -UserPrincipalName &lt;UserSignInName&gt; -UsageLocation US -LicenseAssignment &lt;AccountSkuId&gt;</strong> replacing the parts in brackets with your user's information.</p>
<div ><img src="https://i.ibb.co/BNtPDq9/New-Msol-User.png" alt="New-MsolUser" style="height: auto;width: auto"/></div>
<p>That's it. You've now created a new user using PowerShell.</p>
<h2>How to view and edit Microsoft 365 users</h2>
<p>Viewing and editing users in Microsoft 365 is as easy as pie.</p>
<p>1. First go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a> and sign in with your admin credentials.</p>
<p>There's the list of users.</p>
<p><span >2. To edit a user click on the user. You'll see the user's information. There you can use the tabs at the top to navigate around the user or you can click Manage username and email to update the user's sign in name or email address. Finally, click Manage contact information to edit the user's contact information.</span></p>
<div ><img src="https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png" alt="Microsoft 365 edit user pane" style="height: auto;width: auto"/></div>
<p></p>
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
