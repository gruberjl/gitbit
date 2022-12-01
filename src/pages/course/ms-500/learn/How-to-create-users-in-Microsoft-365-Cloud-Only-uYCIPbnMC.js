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
let bottomOfArticle

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)
    this.getUid = this.getUid.bind(this)
    this.mountAds1 = this.mountAds1.bind(this)
    this.mountAds2 = this.mountAds2.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5tuqs', text: 'So let\'s talk quickly about creating users in Microsoft 365. Every user in your organization that requires a mailbox or admin role will be required to have a user account. The easiest way to add a user account is by creating a single user account in Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3fuvg', text: 'Add a single user account in Microsoft 365 admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 49, offset: 9}], inlineStyleRanges: [], key: 'asogk', text: '1. Go to Microsoft 365 admin center > Users > active users page. Log in with your admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a8br5', text: '2. Click Add a user', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '5ijjp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 208, style: 'BOLD'}], key: 'a9vvh', text: '3. Enter the user\'s first name, last name, and username. On this page, you can also select if you want to automatically create a password or require the user to change the password at first login. Then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'buifr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 194, style: 'BOLD'}], key: 'c7vt0', text: '4. On the next page, you select the license assignment. Once you check the license you want to assign you can view the apps associated with the license by clicking the apps dropdown. Then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'db2ud', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 233, style: 'BOLD'}], key: 'fi4in', text: '5. On the Optional settings page select the admin roles you want to assign the user. More on the roles in the next lesson. On this page, you can also set profile info: Job title, department, office, phone numbers, and address. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 9, style: 'BOLD'}], key: '5v9p0', text: '6. Click Finish adding.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eru3i', text: 'Add a lot of users at one time', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'escps', text: 'Manually adding users can get tedious especially if you have more than 5. So next we\'ll download a CSV template and update it with a bunch of users then import those users into Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 18, offset: 25}], inlineStyleRanges: [], key: 'e3sr4', text: '1. Go to Microsoft 365 > Add Multiple Users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 46, offset: 9, style: 'BOLD'}], key: '7ctph', text: '2. Click I\'d like to upload a CSV with user information.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 46, offset: 9, style: 'BOLD'}], key: 'ehogc', text: '3. Click Download a blank CSV with the required headers.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '5s5ra', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cshfd', text: '3. Open the file in Excel.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7p0it', text: '4. Add the user information that you want to be uploaded and save the sheet.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '12dsj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 68, style: 'BOLD'}, {length: 14, offset: 79, style: 'BOLD'}, {length: 4, offset: 123, style: 'BOLD'}], key: '962kl', text: '5. Go back to the Microsoft 365 admin center in your browser. Click browse and select the CSV you just updated. Then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '89g6q', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 71, style: 'BOLD'}], key: '117nm', text: '6.  Select the licenses you want to assign to the new users then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '4b82a', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}], key: 'akvl4', text: '7. Click Add users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 16, offset: 9, style: 'BOLD'}], key: 'o5ah', text: '8. Click Download results to download a spreadsheet with the new user\'s usernames and password. Then click Close', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bvvuc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dl35f', text: 'Add a single user to Office 365 using PowerShell', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ap8a', text: 'Alright, now that we know how to create users using the web browser let\'s create a user using PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 7, style: 'BOLD'}], key: '3caa3', text: '1. Run Connect-MsolService and log in with your admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 7, style: 'BOLD'}], key: '5vp5l', text: '2. Run Get-MsolAccountSku. The Get-MsolAccountSku command will return the AccountSkuId which is a way to identify your license ids.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c2iaa', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 173, offset: 30, style: 'BOLD'}], key: '9gjdb', text: '3. Run the following command: New-MsolUser -DisplayName "<DisplayName>" -FirstName <FirstName> -LastName <LastName> -UserPrincipalName <UserSignInName> -UsageLocation US -LicenseAssignment <AccountSkuId> replacing the parts in brackets with your user\'s information.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c2hca', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bl1fg', text: 'That\'s it. You\'ve now created a new user using PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5753m', text: 'How to view and edit Microsoft 365 users', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'rc1c', text: 'Viewing and editing users in Microsoft 365 is as easy as pie.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 70, offset: 15}], inlineStyleRanges: [], key: 'f3itf', text: '1. First go to https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users and sign in with your admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7dujc', text: 'There\'s the list of users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 314, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 314, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 314, offset: 0, style: 'fontsize-16'}, {length: 314, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '1pan7', text: '2. To edit a user click on the user. You\'ll see the user\'s information. There you can use the tabs at the top to navigate around the user or you can click Manage username and email to update the user\'s sign-in name or email address. Finally, click Manage contact information to edit the user\'s contact information.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '1s5ug', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd1d1o', text: '', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Add a user button in Microsoft 365 admin center', height: 'auto', src: 'https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Get-MsolAccountSku', height: 'auto', src: 'https://i.ibb.co/C2WryQD/get-msolaccountsku.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'New-MsolUser', height: 'auto', src: 'https://i.ibb.co/BNtPDq9/New-Msol-User.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users'}, mutability: 'MUTABLE', type: 'LINK'}, 13: {data: {alignment: 'none', alt: 'Microsoft 365 edit user pane', height: 'auto', src: 'https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Microsoft 365 basic user account information', height: 'auto', src: 'https://i.ibb.co/gycTqzd/basic-user-account-information.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Assign licenses in Microsoft 365', height: 'auto', src: 'https://i.ibb.co/0BwW2xG/assign-licenses.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users/:/addmultipleusers'}, mutability: 'MUTABLE', type: 'LINK'}, 5: {data: {alignment: 'none', alt: 'Download a blank CSV file with the required headers', height: 'auto', src: 'https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Microsoft 365 Users to Upload CSV', height: 'auto', src: 'https://i.ibb.co/Jxk3Xnp/users-to-upload.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Microsoft 365 upload users to import', height: 'auto', src: 'https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Microsoft 365 Assign licenses to imported users', height: 'auto', src: 'https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Microsoft 365 Import Users Download results', height: 'auto', src: 'https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'New to managing Microsoft 365? Creating users in Microsoft 365 is easy. Follow our guide to get started.', featuredImage: 'https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png', id: 'uYCIPbnMC', images: ['https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png', 'https://i.ibb.co/gycTqzd/basic-user-account-information.png', 'https://i.ibb.co/0BwW2xG/assign-licenses.png', 'https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png', 'https://i.ibb.co/Jxk3Xnp/users-to-upload.png', 'https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png', 'https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png', 'https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png', 'https://i.ibb.co/C2WryQD/get-msolaccountsku.png', 'https://i.ibb.co/BNtPDq9/New-Msol-User.png', 'https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png', 'https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png', 'https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC', title: 'How to create users in Microsoft 365 Cloud Only', type: 'article'},
      nextContentSlug: 'learn/Creating-and-managing-admins-through-roles-7CpqFkPZU',
      previousContentSlug: 'learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
    this.mountAds1()
    this.mountAds2()
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

  mountAds1() {
    (function(w, d, s, i) {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664931508787046, size: [0, 0], id: 'ld-534-9587'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
  }

  mountAds2() {
    ((w, d, s, i)=> {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664932884518758, size: [0, 0], id: 'ld-7740-2760'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
  }

  addScroll() {
    if (isBrowser()) {
      const el = document.getElementById('bottom-of-article')
      const rect = el.getBoundingClientRect()
      bottomOfArticle = rect.top
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
    if (bottomOfArticle && bottomOfArticle <= window.scrollY+window.innerHeight)
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
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} title={this.state.article.title} description={this.state.article.description}>
        <div>
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
              pre {
                white-space: pre-wrap;
              }
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <main>
                  <div id="ld-534-9587" />
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>So let's talk quickly about creating users in Microsoft 365. Every user in your organization that requires a mailbox or admin role will be required to have a user account. The easiest way to add a user account is by creating a single user account in Microsoft 365.</p>
                    <div id="ld-7740-2760" /><h2>Add a single user account in Microsoft 365 admin center</h2>
                    <p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noreferrer">Microsoft 365 admin center &gt; Users &gt; active users</a> page. Log in with your admin credentials.</p>
                    <p>2. Click Add a user</p>
                    <div ><img src="https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png" alt="Add a user button in Microsoft 365 admin center" style="height: auto;width: auto" /></div>
                    <p>3. Enter the user's first name, last name, and username. On this page, you can also select if you want to automatically create a password or require the user to change the password at first login. Then click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/gycTqzd/basic-user-account-information.png" alt="Microsoft 365 basic user account information" style="height: auto;width: auto" /></div>
                    <p>4. On the next page, you select the license assignment. Once you check the license you want to assign you can view the apps associated with the license by clicking the apps dropdown. Then click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/0BwW2xG/assign-licenses.png" alt="Assign licenses in Microsoft 365" style="height: auto;width: auto" /></div>
                    <p>5. On the Optional settings page select the admin roles you want to assign the user. More on the roles in the next lesson. On this page, you can also set profile info: Job title, department, office, phone numbers, and address. Click <strong>Next</strong>.</p>
                    <p>6. Click <strong>Finish adding</strong>.</p>
                    <h2>Add a lot of users at one time</h2>
                    <p>Manually adding users can get tedious especially if you have more than 5. So next we'll download a CSV template and update it with a bunch of users then import those users into Microsoft 365.</p>
                    <p>1. Go to Microsoft 365 &gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users/:/addmultipleusers" target="_blank" rel="noreferrer">Add Multiple Users</a>.</p>
                    <p>2. Click <strong>I'd like to upload a CSV with user information</strong>.</p>
                    <p>3. Click <strong>Download a blank CSV with the required headers</strong>.</p>
                    <div ><img src="https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png" alt="Download a blank CSV file with the required headers" style="height: auto;width: auto" /></div>
                    <p>3. Open the file in Excel.</p>
                    <p>4. Add the user information that you want to be uploaded and save the sheet.</p>
                    <div ><img src="https://i.ibb.co/Jxk3Xnp/users-to-upload.png" alt="Microsoft 365 Users to Upload CSV" style="height: auto;width: auto" /></div>
                    <p>5. Go back to the Microsoft 365 admin center in your browser. Click <strong>browse </strong>and <strong>select the CSV</strong> you just updated. Then click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png" alt="Microsoft 365 upload users to import" style="height: auto;width: auto" /></div>
                    <p>6.  Select the licenses you want to assign to the new users then click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png" alt="Microsoft 365 Assign licenses to imported users" style="height: auto;width: auto" /></div>
                    <p>7. Click <strong>Add users</strong>.</p>
                    <p>8. Click <strong>Download results</strong> to download a spreadsheet with the new user's usernames and password. Then click Close</p>
                    <div ><img src="https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png" alt="Microsoft 365 Import Users Download results" style="height: auto;width: auto" /></div>
                    <h2>Add a single user to Office 365 using PowerShell</h2>
                    <p>Alright, now that we know how to create users using the web browser let's create a user using PowerShell.</p>
                    <p>1. Run <strong>Connect-MsolService</strong> and log in with your admin credentials.</p>
                    <p>2. Run <strong>Get-MsolAccountSku</strong>. The Get-MsolAccountSku command will return the AccountSkuId which is a way to identify your license ids.</p>
                    <div ><img src="https://i.ibb.co/C2WryQD/get-msolaccountsku.png" alt="Get-MsolAccountSku" style="height: auto;width: auto" /></div>
                    <p>3. Run the following command: <strong>New-MsolUser -DisplayName "&lt;DisplayName&gt;" -FirstName &lt;FirstName&gt; -LastName &lt;LastName&gt; -UserPrincipalName &lt;UserSignInName&gt; -UsageLocation US -LicenseAssignment &lt;AccountSkuId&gt;</strong> replacing the parts in brackets with your user's information.</p>
                    <div ><img src="https://i.ibb.co/BNtPDq9/New-Msol-User.png" alt="New-MsolUser" style="height: auto;width: auto" /></div>
                    <p>That's it. You've now created a new user using PowerShell.</p>
                    <h2>How to view and edit Microsoft 365 users</h2>
                    <p>Viewing and editing users in Microsoft 365 is as easy as pie.</p>
                    <p>1. First go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a> and sign in with your admin credentials.</p>
                    <p>There's the list of users.</p>
                    <p><span >2. To edit a user click on the user. You'll see the user's information. There you can use the tabs at the top to navigate around the user or you can click Manage username and email to update the user's sign-in name or email address. Finally, click Manage contact information to edit the user's contact information.</span></p>
                    <div ><img src="https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png" alt="Microsoft 365 edit user pane" style="height: auto;width: auto" /></div>
                    <p />
                  </div>
                  <div id="bottom-of-article" />
                  <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                    <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                    <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
                  </Box>
                </main>
              </Grid>
              <Grid item lg={3} sx={{mt: 3}}>
                <ContentsRead completedContent={this.state.userAcct.completedContent} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Page>
    )
  }
}

export default ArticlePage
