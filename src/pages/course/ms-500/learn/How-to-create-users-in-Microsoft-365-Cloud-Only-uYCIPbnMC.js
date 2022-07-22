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
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC',
      article: {type: 'article', datePublished: '2022/5/26', sectionId: 'AFV_acckJ', featuredImage: 'https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png', publish: true, slug: 'How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC', article: {blocks: [{entityRanges: [], depth: 0, key: '5tuqs', type: 'unstyled', text: 'So let\'s talk quickly about creating users in Microsoft 365. Every user in your organization that requires a mailbox or admin role will be required to have a user account. The easiest way to add a user account is by creating a single user account in Microsoft 365.', data: {}, inlineStyleRanges: []}, {inlineStyleRanges: [], text: 'Add a single user account in Microsoft 365 admin center', key: '3fuvg', depth: 0, data: {}, type: 'header-two', entityRanges: []}, {type: 'unstyled', entityRanges: [{offset: 9, key: 0, length: 41}], depth: 0, data: {}, inlineStyleRanges: [], key: 'asogk', text: '1. Go to Microsoft 365 admin center > active users page. Log in with your admin credentials.'}, {data: {}, key: 'a8br5', depth: 0, inlineStyleRanges: [], type: 'unstyled', entityRanges: [], text: '2. Click Add a user'}, {type: 'atomic', entityRanges: [{key: 1, length: 1, offset: 0}], depth: 0, text: ' ', key: '5ijjp', data: {}, inlineStyleRanges: []}, {inlineStyleRanges: [{style: 'BOLD', length: 4, offset: 208}], key: 'a9vvh', data: {}, text: '3. Enter the user\'s first name, last name, and username. On this page, you can also select if you want to automatically create a password or require the user to change the password at first login. Then click Next.', depth: 0, type: 'unstyled', entityRanges: []}, {data: {}, key: 'buifr', inlineStyleRanges: [], text: ' ', entityRanges: [{offset: 0, length: 1, key: 2}], depth: 0, type: 'atomic'}, {type: 'unstyled', entityRanges: [], data: {}, depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 4, offset: 194}], key: 'c7vt0', text: '4. On the next page, you select the license assignment. Once you check the license you want to assign you can view the apps associated with the license by clicking the apps dropdown. Then click Next.'}, {text: ' ', key: 'db2ud', type: 'atomic', inlineStyleRanges: [], depth: 0, data: {}, entityRanges: [{offset: 0, length: 1, key: 3}]}, {depth: 0, type: 'unstyled', inlineStyleRanges: [{offset: 232, style: 'BOLD', length: 4}], key: 'fi4in', entityRanges: [], text: '5. On the Optional settings page select the admin roles you want to assign the user. More on the roles in the next lesson. On this page you can also set profile info: Job title, department, office, phone numbers, and address. Click Next.', data: {}}, {inlineStyleRanges: [{style: 'BOLD', length: 13, offset: 9}], text: '6. Click Finish adding.', entityRanges: [], data: {}, key: '5v9p0', depth: 0, type: 'unstyled'}, {data: {}, type: 'header-two', text: 'Add a lot of users at one time', entityRanges: [], key: 'eru3i', depth: 0, inlineStyleRanges: []}, {inlineStyleRanges: [], key: 'escps', entityRanges: [], text: 'Manually adding users can get tedious especially if you have more than 5. So next we\'ll download a CSV template and update it with a bunch of users then import those users in Microsoft 365.', depth: 0, data: {}, type: 'unstyled'}, {data: {}, inlineStyleRanges: [], text: '1. Go to Microsoft 365 > Add Multiple Users.', depth: 0, key: 'e3sr4', entityRanges: [{key: 4, offset: 25, length: 18}], type: 'unstyled'}, {depth: 0, entityRanges: [], text: '2. Click Download a blank CSV with the required headers.', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', length: 46, offset: 9}], data: {}, key: 'ehogc'}, {data: {}, entityRanges: [{length: 1, offset: 0, key: 5}], inlineStyleRanges: [], text: ' ', key: '5s5ra', type: 'atomic', depth: 0}, {entityRanges: [], text: '3. Open the file in Excel.', type: 'unstyled', depth: 0, data: {}, key: 'cshfd', inlineStyleRanges: []}, {key: '7p0it', text: '4. Add the user information that you want uploaded and save the sheet.', data: {}, inlineStyleRanges: [], depth: 0, entityRanges: [], type: 'unstyled'}, {data: {}, inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 6}], key: '12dsj', type: 'atomic', depth: 0, text: ' '}, {entityRanges: [], data: {}, key: '962kl', depth: 0, inlineStyleRanges: [], text: '5. Click browse and select the CSV you just updated. Then click Next.', type: 'unstyled'}, {depth: 0, inlineStyleRanges: [], type: 'atomic', entityRanges: [{key: 7, length: 1, offset: 0}], text: ' ', data: {}, key: '89g6q'}, {key: '117nm', text: '6.  Select the licenses you want to assign to the new users then click Next.', entityRanges: [], inlineStyleRanges: [{offset: 71, length: 4, style: 'BOLD'}], type: 'unstyled', data: {}, depth: 0}, {type: 'atomic', text: ' ', data: {}, inlineStyleRanges: [], depth: 0, key: '4b82a', entityRanges: [{offset: 0, length: 1, key: 8}]}, {type: 'unstyled', text: '7. Click Add users.', key: 'akvl4', depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 9, offset: 9}], data: {}, entityRanges: []}, {entityRanges: [], key: 'o5ah', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 16}], data: {}, depth: 0, text: '8. Click Download results to download a spreadsheet with the new user\'s usernames and password. Then click Close'}, {text: ' ', type: 'atomic', data: {}, inlineStyleRanges: [], entityRanges: [{offset: 0, key: 9, length: 1}], depth: 0, key: 'bvvuc'}, {type: 'header-two', data: {}, inlineStyleRanges: [], text: 'Add a single user to Office 365 using PowerShell', entityRanges: [], key: 'dl35f', depth: 0}, {entityRanges: [], type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [], key: '6ap8a', text: 'Alright, now that we know how to create users using the web browser let\'s create a user using PowerShell.'}, {entityRanges: [], inlineStyleRanges: [], depth: 0, type: 'unstyled', key: '3caa3', text: '1. Run Connect-MsolService and login with your admin credentials.', data: {}}, {data: {}, text: '2. Run Get-MsolAccountSku. The Get-MsolAccountSku command will return the AccountSkuId which is a way to identify your license ids.', entityRanges: [], depth: 0, type: 'unstyled', key: '5vp5l', inlineStyleRanges: [{length: 18, offset: 7, style: 'BOLD'}]}, {depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], text: ' ', key: 'c2iaa', data: {}, type: 'atomic', inlineStyleRanges: []}, {text: '3. Run the following command: New-MsolUser -DisplayName "<DisplayName>" -FirstName <FirstName> -LastName <LastName> -UserPrincipalName <UserSignInName> -UsageLocation US -LicenseAssignment <AccountSkuId> replacing the parts in brackets with your user\'s information.', inlineStyleRanges: [{style: 'BOLD', offset: 30, length: 173}], depth: 0, type: 'unstyled', key: '9gjdb', entityRanges: [], data: {}}, {data: {}, text: ' ', depth: 0, inlineStyleRanges: [], entityRanges: [{length: 1, offset: 0, key: 11}], key: 'c2hca', type: 'atomic'}, {depth: 0, text: 'That\'s it. You\'ve now created a new user using PowerShell.', inlineStyleRanges: [], type: 'unstyled', key: 'bl1fg', entityRanges: [], data: {}}, {inlineStyleRanges: [], entityRanges: [], key: '5753m', depth: 0, type: 'header-two', data: {}, text: 'How to view and edit Microsoft 365 users'}, {text: 'Viewing and editing users in Microsoft 365 is as easy as pie.', entityRanges: [], key: 'rc1c', data: {}, inlineStyleRanges: [], type: 'unstyled', depth: 0}, {text: '1. First go to https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users and sign in with your admin credentials.', type: 'unstyled', data: {}, depth: 0, inlineStyleRanges: [], entityRanges: [{length: 70, offset: 15, key: 12}], key: 'f3itf'}, {text: 'There\'s the list of users.', inlineStyleRanges: [], key: '7dujc', type: 'unstyled', entityRanges: [], depth: 0, data: {}}, {type: 'unstyled', entityRanges: [], key: '1pan7', text: '2. To edit a user click on the user. You\'ll see the user\'s information. There you can use the tabs at the top to navigate around the user or you can click Manage username and email to update the user\'s sign in name or email address. Finally, click Manage contact information to edit the user\'s contact information.', depth: 0, data: {}, inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 314}, {offset: 0, length: 314, style: 'bgcolor-rgb(255,255,255)'}, {style: 'fontsize-16', offset: 0, length: 314}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 314, offset: 0}]}, {inlineStyleRanges: [], entityRanges: [{key: 13, length: 1, offset: 0}], type: 'atomic', key: '1s5ug', text: ' ', data: {}, depth: 0}, {type: 'unstyled', text: '', inlineStyleRanges: [], entityRanges: [], depth: 0, key: 'd1d1o', data: {}}], entityMap: {0: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users'}}, 1: {type: 'IMAGE', data: {height: 'auto', alignment: 'none', src: 'https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png', width: 'auto', alt: 'Add a user button in Microsoft 365 admin center'}, mutability: 'MUTABLE'}, 2: {mutability: 'MUTABLE', data: {alignment: 'none', src: 'https://i.ibb.co/gycTqzd/basic-user-account-information.png', height: 'auto', width: 'auto', alt: 'Microsoft 365 basic user account information'}, type: 'IMAGE'}, 3: {type: 'IMAGE', data: {src: 'https://i.ibb.co/0BwW2xG/assign-licenses.png', height: 'auto', alt: 'Assign licenses in Microsoft 365', alignment: 'none', width: 'auto'}, mutability: 'MUTABLE'}, 4: {data: {targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users/:/addmultipleusers'}, mutability: 'MUTABLE', type: 'LINK'}, 5: {data: {src: 'https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png', alignment: 'none', height: 'auto', alt: 'Download a blank CSV file with the required headers', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'none', src: 'https://i.ibb.co/Jxk3Xnp/users-to-upload.png', alt: 'Microsoft 365 Users to Upload CSV', height: 'auto', width: 'auto'}}, 7: {data: {height: 'auto', src: 'https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png', alignment: 'none', width: 'auto', alt: 'Microsoft 365 upload users to import'}, type: 'IMAGE', mutability: 'MUTABLE'}, 8: {data: {height: 'auto', alt: 'Microsoft 365 Assign licenses to imported users', width: 'auto', src: 'https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png', alignment: 'none'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Microsoft 365 Import Users Download results', height: 'auto', src: 'https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 10: {data: {src: 'https://i.ibb.co/C2WryQD/get-msolaccountsku.png', alignment: 'none', alt: 'Get-MsolAccountSku', width: 'auto', height: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 11: {type: 'IMAGE', data: {height: 'auto', width: 'auto', alignment: 'none', alt: 'New-MsolUser', src: 'https://i.ibb.co/BNtPDq9/New-Msol-User.png'}, mutability: 'MUTABLE'}, 12: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users'}}, 13: {type: 'IMAGE', data: {height: 'auto', width: 'auto', alt: 'Microsoft 365 edit user pane', alignment: 'none', src: 'https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png'}, mutability: 'MUTABLE'}}}, title: 'How to create users in Microsoft 365 Cloud Only', id: 'uYCIPbnMC', description: 'Creating users in Microsoft 365 is easy. Follow our guide to get started.', images: ['https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png', 'https://i.ibb.co/gycTqzd/basic-user-account-information.png', 'https://i.ibb.co/0BwW2xG/assign-licenses.png', 'https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png', 'https://i.ibb.co/Jxk3Xnp/users-to-upload.png', 'https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png', 'https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png', 'https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png', 'https://i.ibb.co/C2WryQD/get-msolaccountsku.png', 'https://i.ibb.co/BNtPDq9/New-Msol-User.png', 'https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png', 'https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png', 'https://i.ibb.co/Wnt5Q43/View-Microsoft-365-Users.png']},
      nextContentSlug: 'Creating-and-managing-admins-through-roles-7CpqFkPZU',
      previousContentSlug: 'Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
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
                  <p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noreferrer">Microsoft 365 admin center &gt; active users</a> page. Log in with your admin credentials.</p>
                  <p>2. Click Add a user</p>
                  <div ><img src="https://i.ibb.co/9ZJ0d61/Add-User-in-Microsoft-365.png" alt="Add a user button in Microsoft 365 admin center" style="height: auto;width: auto" /></div>
                  <p>3. Enter the user's first name, last name, and username. On this page, you can also select if you want to automatically create a password or require the user to change the password at first login. Then click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/gycTqzd/basic-user-account-information.png" alt="Microsoft 365 basic user account information" style="height: auto;width: auto" /></div>
                  <p>4. On the next page, you select the license assignment. Once you check the license you want to assign you can view the apps associated with the license by clicking the apps dropdown. Then click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/0BwW2xG/assign-licenses.png" alt="Assign licenses in Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>5. On the Optional settings page select the admin roles you want to assign the user. More on the roles in the next lesson. On this page you can also set profile info: Job title, department, office, phone numbers, and address. Click <strong>Next</strong>.</p>
                  <p>6. Click <strong>Finish adding</strong>.</p>
                  <h2>Add a lot of users at one time</h2>
                  <p>Manually adding users can get tedious especially if you have more than 5. So next we'll download a CSV template and update it with a bunch of users then import those users in Microsoft 365.</p>
                  <p>1. Go to Microsoft 365 &gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users/:/addmultipleusers" target="_blank" rel="noreferrer">Add Multiple Users</a>.</p>
                  <p>2. Click <strong>Download a blank CSV with the required headers</strong>.</p>
                  <div ><img src="https://i.ibb.co/QPwjHtj/download-blank-csv-to-import-users.png" alt="Download a blank CSV file with the required headers" style="height: auto;width: auto" /></div>
                  <p>3. Open the file in Excel.</p>
                  <p>4. Add the user information that you want uploaded and save the sheet.</p>
                  <div ><img src="https://i.ibb.co/Jxk3Xnp/users-to-upload.png" alt="Microsoft 365 Users to Upload CSV" style="height: auto;width: auto" /></div>
                  <p>5. Click browse and select the CSV you just updated. Then click Next.</p>
                  <div ><img src="https://i.ibb.co/LJgyy10/microsoft-365-upload-csv-for-user-import.png" alt="Microsoft 365 upload users to import" style="height: auto;width: auto" /></div>
                  <p>6.  Select the licenses you want to assign to the new users then click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/DGCxsp0/microsoft-365-select-licenses.png" alt="Microsoft 365 Assign licenses to imported users" style="height: auto;width: auto" /></div>
                  <p>7. Click <strong>Add users</strong>.</p>
                  <p>8. Click <strong>Download results</strong> to download a spreadsheet with the new user's usernames and password. Then click Close</p>
                  <div ><img src="https://i.ibb.co/wwK3m1N/microsoft-365-import-users-download-results.png" alt="Microsoft 365 Import Users Download results" style="height: auto;width: auto" /></div>
                  <h2>Add a single user to Office 365 using PowerShell</h2>
                  <p>Alright, now that we know how to create users using the web browser let's create a user using PowerShell.</p>
                  <p>1. Run Connect-MsolService and login with your admin credentials.</p>
                  <p>2. Run <strong>Get-MsolAccountSku</strong>. The Get-MsolAccountSku command will return the AccountSkuId which is a way to identify your license ids.</p>
                  <div ><img src="https://i.ibb.co/C2WryQD/get-msolaccountsku.png" alt="Get-MsolAccountSku" style="height: auto;width: auto" /></div>
                  <p>3. Run the following command: <strong>New-MsolUser -DisplayName "&lt;DisplayName&gt;" -FirstName &lt;FirstName&gt; -LastName &lt;LastName&gt; -UserPrincipalName &lt;UserSignInName&gt; -UsageLocation US -LicenseAssignment &lt;AccountSkuId&gt;</strong> replacing the parts in brackets with your user's information.</p>
                  <div ><img src="https://i.ibb.co/BNtPDq9/New-Msol-User.png" alt="New-MsolUser" style="height: auto;width: auto" /></div>
                  <p>That's it. You've now created a new user using PowerShell.</p>
                  <h2>How to view and edit Microsoft 365 users</h2>
                  <p>Viewing and editing users in Microsoft 365 is as easy as pie.</p>
                  <p>1. First go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a> and sign in with your admin credentials.</p>
                  <p>There's the list of users.</p>
                  <p><span >2. To edit a user click on the user. You'll see the user's information. There you can use the tabs at the top to navigate around the user or you can click Manage username and email to update the user's sign in name or email address. Finally, click Manage contact information to edit the user's contact information.</span></p>
                  <div ><img src="https://i.ibb.co/YBTcWND/Microsoft-365-edit-user.png" alt="Microsoft 365 edit user pane" style="height: auto;width: auto" /></div>
                  <p />
                </div>
                <div id="bottom-of-article" />
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
