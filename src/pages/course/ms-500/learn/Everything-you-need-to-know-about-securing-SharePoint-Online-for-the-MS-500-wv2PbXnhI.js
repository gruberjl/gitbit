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
      path: '/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI',
      article: {"type":"article","id":"wv2PbXnhI","images":["https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","https://i.ibb.co/9WDnpFM/enable-irm-in-sharepoint-tenant.png","https://i.ibb.co/S6Lbk8G/limit-external-sharing.png","https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png","https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png","https://i.ibb.co/fCGqR18/Set-SPOTenant-Conditional-Access-Policy-Allow-Limited-Access.png","https://i.ibb.co/FDdCB72/new-conditional-access-policy.png","https://i.ibb.co/QMPJ6W0/Set-conditional-access-policy-to-all-users.png","https://i.ibb.co/582XPDq/conditional-access-policy-cloud-app-sharepoint-online.png","https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png","https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png","https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png","https://i.ibb.co/kSxBLz5/conditional-access-policy-use-app-enforced-restrictions.png","https://i.ibb.co/Kh61mvM/limit-access-to-sharepoint-site.png","https://i.ibb.co/Gk9NjSH/Share-Point-Online-Warning.png"],"description":"How to Secure SharePoint Online to prepare for the MS-500","article":{"blocks":[{"entityRanges":[],"text":"So, you're set up with SharePoint. Users are accessing SharePoint and everything is going great but now there's a security concern. Everything use to sit on file shares inside your network. The network was secured so you didn't have to worry about your files too much. But that's not the case with SharePoint Online. With SharePoint Online, files can be accessed from anywhere at any time. Files can also be synced to your users' devices (including personal devices). Those devices can get lost, stolen, or hacked. So now we have a big issue. But have no fear, Microsoft is here! There are a ton of ways to secure your SharePoint files. You can limit what users can do. Who can share files. You can limit where the files can be accessed (including IP addresses or countries). You can even limit SharePoint access based on your managed devices! That's right, you can set up SharePoint so only authorized users using authorized devices can access your SharePoint files.","type":"unstyled","key":"5s8pf","data":{},"inlineStyleRanges":[],"depth":0},{"depth":0,"data":{},"text":"Restrict external user access to your SharePoint tenant","key":"79ohv","type":"header-two","entityRanges":[],"inlineStyleRanges":[]},{"text":"The first way you'll need to secure your SharePoint tenant is with who users can share files. By default, users can share their SharePoint files with anyone. They can set up a sharing link that doesn't require a password. If that link is accidentally shared with someone that it isn't supposed to be, that person can access your SharePoint files. So how do we limit sharing?","data":{},"key":"3mbko","depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[]},{"key":"a6kdf","inlineStyleRanges":[],"data":{},"type":"unstyled","text":"1. Open the SharePoint admin center > Policies > Sharing","entityRanges":[],"depth":0},{"key":"e36pc","type":"unstyled","data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"2. Drag the sliders under Content can be shared with to the appropriate level."},{"entityRanges":[],"depth":0,"key":"c0lte","type":"unstyled","text":"3. Scroll to the bottom of the page and click Save.","data":{},"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":46}]},{"depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"type":"atomic","text":" ","key":"7d949"},{"data":{},"type":"unstyled","entityRanges":[],"key":"4jhhf","depth":0,"inlineStyleRanges":[],"text":"From this page, you can edit the SharePoint and OneDrive sharing permissions. You can configure it to allow users to only share documents with internal users or keep it so users can share with anyone."},{"key":"fgvi","type":"header-three","inlineStyleRanges":[],"text":"Limit Sharing by domain","entityRanges":[],"depth":0,"data":{}},{"type":"unstyled","data":{},"key":"516nf","inlineStyleRanges":[],"depth":0,"text":"So let's say a question on the MS-500 you may see is \"How do you limit external sharing with only people in contoso.com?\" Well, it's pretty easy.","entityRanges":[]},{"text":"1. Open the SharePoint admin center > Policies > Sharing ","depth":0,"data":{},"type":"unstyled","entityRanges":[{"length":44,"key":1,"offset":12}],"key":"ecnav","inlineStyleRanges":[]},{"text":"2. Click More external sharing settings > Limit external sharing by domain > Add domains.","inlineStyleRanges":[{"style":"BOLD","length":30,"offset":9},{"style":"BOLD","length":32,"offset":42},{"offset":77,"style":"BOLD","length":11}],"entityRanges":[],"depth":0,"key":"7i26p","type":"unstyled","data":{}},{"inlineStyleRanges":[{"length":27,"style":"BOLD","offset":9}],"data":{},"key":"745it","entityRanges":[],"type":"unstyled","depth":0,"text":"5. Click Allow only specific domains. Then enter the domain you want to be able to access your SharePoint tenant."},{"key":"4nkok","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":4}],"text":"6. Click Save","type":"unstyled","data":{},"entityRanges":[],"depth":0},{"text":" ","key":"1uc9r","inlineStyleRanges":[],"type":"atomic","depth":0,"data":{},"entityRanges":[{"length":1,"offset":0,"key":2}]},{"inlineStyleRanges":[{"style":"BOLD","offset":51,"length":4}],"key":"b0j95","type":"unstyled","depth":0,"entityRanges":[],"data":{},"text":"7. Then scroll to the bottom of the page and click Save."},{"depth":0,"text":"Restricting downloading, printing, and syncing from unmanaged devices","inlineStyleRanges":[],"data":{},"type":"header-two","entityRanges":[],"key":"4p3ff"},{"data":{},"key":"e93h6","entityRanges":[],"inlineStyleRanges":[],"text":"Okay, so now sharing is secured and users can only share with specific domains. But users can still access all the files across SharePoint and OneDrive from any device. A user may accidentally go to a shared computer, for example, at a library, and sync your company's files to the shared computer. Uh-oh. How do you prevent users from downloading, printing, and syncing files to unmanaged devices? Well, there are two ways to set it up: from the browser or PowerShell.","depth":0,"type":"unstyled"},{"depth":0,"text":"1. Go to the SharePoint admin center > Policies > Access Control","type":"unstyled","data":{},"entityRanges":[{"length":51,"offset":13,"key":3}],"key":"8ebmn","inlineStyleRanges":[]},{"key":"8uca7","data":{},"entityRanges":[],"text":"2. Click Allow limited, web-only access. Then click Save.","depth":0,"inlineStyleRanges":[{"length":30,"style":"BOLD","offset":9},{"length":4,"style":"BOLD","offset":52}],"type":"unstyled"},{"entityRanges":[{"key":4,"offset":0,"length":1}],"depth":0,"type":"atomic","text":" ","inlineStyleRanges":[],"key":"75qur","data":{}},{"inlineStyleRanges":[],"entityRanges":[],"key":"6qlu","type":"unstyled","data":{},"depth":0,"text":"We can also make this change from PowerShell."},{"key":"73k81","data":{},"entityRanges":[],"inlineStyleRanges":[],"text":"1. Connect to SharePoint Online using Connect-SPOService.","depth":0,"type":"unstyled"},{"entityRanges":[],"depth":0,"text":"2. Run the following command: Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess","key":"art49","data":{},"inlineStyleRanges":[{"offset":30,"length":57,"style":"BOLD"}],"type":"unstyled"},{"entityRanges":[{"offset":0,"key":5,"length":1}],"type":"atomic","depth":0,"inlineStyleRanges":[],"key":"irqg","data":{},"text":" "},{"entityRanges":[],"key":"416jg","data":{},"depth":0,"type":"header-two","text":"Restricting downloading, printing, and syncing from unmanaged devices per site","inlineStyleRanges":[{"length":69,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":69},{"offset":0,"style":"fontsize-32","length":69},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":69}]},{"depth":0,"entityRanges":[],"key":"enqsl","inlineStyleRanges":[],"text":"Okay, maybe you don't need to limit downloading, printing, and syncing from all your tenants. Maybe there are a couple of SharePoint sites that do need to be limited though. What do you do? First, you need to enable app-enforced restrictions on your SharePoint tenant. Then configure the site to require a managed device.","type":"unstyled","data":{}},{"inlineStyleRanges":[],"key":"89r3g","depth":0,"data":{},"text":"Enable app enforced restrictions on the tenant","entityRanges":[],"type":"header-three"},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"key":"8pntf","type":"unstyled","text":" Before we go enabling it, let's talk about what it does. The app-enforced conditional access policy will require Azure AD to pass the device information to the app that you are connecting to. So, in short, SharePoint Online will know if you're on a compliant device or not when you connect. Without further ado, let's set up the conditional access policy.","data":{}},{"depth":0,"data":{},"key":"2s310","inlineStyleRanges":[],"type":"unstyled","entityRanges":[{"length":85,"offset":9,"key":6}],"text":"1. Go to https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies and log in with your admin credentials."},{"inlineStyleRanges":[{"length":10,"offset":9,"style":"BOLD"}],"data":{},"text":"2. Click New policy.","type":"unstyled","depth":0,"entityRanges":[],"key":"84ico"},{"entityRanges":[{"length":1,"offset":0,"key":7}],"depth":0,"data":{},"key":"7beh2","inlineStyleRanges":[],"text":" ","type":"atomic"},{"depth":0,"entityRanges":[],"data":{},"key":"fs971","inlineStyleRanges":[{"offset":28,"style":"BOLD","length":25}],"type":"unstyled","text":"3. Set a name, for example, app enforced restrictions."},{"key":"fv1t4","text":"4. Click 0 users and groups > All users.","data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":18,"offset":9},{"length":9,"style":"BOLD","offset":30}],"entityRanges":[]},{"data":{},"text":" ","type":"atomic","entityRanges":[{"offset":0,"key":8,"length":1}],"depth":0,"key":"dgk2r","inlineStyleRanges":[]},{"key":"5rft2","type":"unstyled","inlineStyleRanges":[{"length":59,"offset":9,"style":"BOLD"},{"style":"BOLD","length":11,"offset":71},{"style":"BOLD","length":11,"offset":90},{"style":"BOLD","length":28,"offset":127},{"style":"BOLD","offset":158,"length":6}],"text":"5. Click No cloud apps, actions, or authentication contexts selected > Select apps > Type SharePoint in the search box > Click Office 365 SharePoint Online > Select.","data":{},"entityRanges":[],"depth":0},{"key":"94r6e","inlineStyleRanges":[],"depth":0,"entityRanges":[{"offset":0,"key":9,"length":1}],"type":"atomic","text":" ","data":{}},{"key":"1bla6","data":{},"text":"6. Click 0 conditions selected > Not configured (under Click apps) > Yes (under Configure) > Done.","depth":0,"inlineStyleRanges":[{"offset":9,"length":21,"style":"BOLD"},{"style":"BOLD","length":14,"offset":33},{"style":"BOLD","offset":69,"length":3},{"offset":93,"style":"BOLD","length":4}],"type":"unstyled","entityRanges":[]},{"type":"atomic","entityRanges":[{"key":10,"length":1,"offset":0}],"inlineStyleRanges":[],"data":{},"text":" ","depth":0,"key":"1jtfg"},{"key":"8iubm","entityRanges":[],"depth":0,"data":{},"text":"7. Click 0 controls selected (under session) > Use app enforced restrictions > Select > On (Under Enable policy) > Create.","inlineStyleRanges":[{"offset":9,"length":19,"style":"BOLD"},{"length":29,"style":"BOLD","offset":47},{"offset":79,"length":6,"style":"BOLD"},{"offset":88,"style":"BOLD","length":3},{"length":6,"style":"BOLD","offset":115}],"type":"unstyled"},{"depth":0,"type":"atomic","text":" ","entityRanges":[{"key":11,"length":1,"offset":0}],"key":"ca7pr","data":{},"inlineStyleRanges":[]},{"key":"8mbam","depth":0,"entityRanges":[],"text":"That's it. Now we can configure the SharePoint Online sites that we want to limit ","inlineStyleRanges":[],"type":"unstyled","data":{}},{"entityRanges":[],"depth":0,"data":{},"type":"header-three","text":"Restricting access from unmanaged devices per site","inlineStyleRanges":[],"key":"drcvb"},{"key":"f18lh","inlineStyleRanges":[],"type":"unstyled","depth":0,"data":{},"entityRanges":[],"text":"Perform the following steps on every SharePoint site you want to limit access to:"},{"entityRanges":[],"data":{},"type":"unstyled","depth":0,"key":"9eakb","text":"1. Open PowerShell and run Connect-SPOService -URL <Your SharePoint Admin URL>","inlineStyleRanges":[]},{"text":"2. Run Set-SPOTSite -Identity <The SharePoint site URL you want to protect> -ConditionalAccessPolicy AllowLimitedAccess","inlineStyleRanges":[],"data":{},"key":"bi02v","entityRanges":[],"depth":0,"type":"unstyled"},{"depth":0,"text":" ","data":{},"entityRanges":[{"length":1,"offset":0,"key":12}],"type":"atomic","inlineStyleRanges":[],"key":"ecr2h"},{"depth":0,"key":"cp6vi","text":"That's it. The site is now protected from downloading, syncing, or printing from unmanaged devices.","type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[]}],"entityMap":{"0":{"data":{"url":"https://admin.microsoft.com/sharepoint?#/sharing","alignment":"none","height":"auto","alt":"SharePoint sharing permissions set to least permissive","width":"auto","targetOption":"_blank","src":"https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","height":"auto","alt":"SharePoint sharing permissions set to least permissive","width":"auto","src":"https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png","alignment":"left","url":"https://admin.microsoft.com/sharepoint?#/sharing"}},"2":{"data":{"url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","width":"auto","height":"auto","src":"https://i.ibb.co/S6Lbk8G/limit-external-sharing.png","alt":"Limit external sharing by domains in SharePoint Online","alignment":"none","targetOption":"_blank"},"mutability":"MUTABLE","type":"IMAGE"},"3":{"type":"LINK","mutability":"MUTABLE","data":{"alignment":"left","src":"https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png","height":"auto","width":"auto","alt":"limit SharePoint access from unmanaged devices","targetOption":"_blank","url":"https://admin.microsoft.com/sharepoint#/accessControl"}},"4":{"type":"IMAGE","data":{"targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","alignment":"none","alt":"limit SharePoint access from unmanaged devices","height":"auto","width":"auto","src":"https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png"},"mutability":"MUTABLE"},"5":{"data":{"height":"auto","alignment":"none","src":"https://i.ibb.co/fCGqR18/Set-SPOTenant-Conditional-Access-Policy-Allow-Limited-Access.png","width":"auto","alt":"C:\\Users\\john.gruber\\Downloads\\Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess.png","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"6":{"mutability":"MUTABLE","type":"LINK","data":{"height":"auto","src":"https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","alt":"open SharePoint classic settings page","targetOption":"_blank","alignment":"left","width":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies"}},"7":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alt":"New Conditional Access Policy","alignment":"none","src":"https://i.ibb.co/FDdCB72/new-conditional-access-policy.png","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","targetOption":"_blank","height":"auto"}},"8":{"type":"IMAGE","data":{"url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","targetOption":"_blank","alignment":"none","src":"https://i.ibb.co/QMPJ6W0/Set-conditional-access-policy-to-all-users.png","alt":"Set conditional access policy to all users","height":"auto","width":"auto"},"mutability":"MUTABLE"},"9":{"data":{"alt":"C:\\Users\\john.gruber\\Downloads\\conditional access policy cloud app SharePoint online","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","height":"auto","targetOption":"_blank","src":"https://i.ibb.co/582XPDq/conditional-access-policy-cloud-app-sharepoint-online.png","width":"auto","alignment":"none"},"mutability":"MUTABLE","type":"IMAGE"},"10":{"data":{"width":"auto","height":"auto","alt":"conditional access policy client apps all","alignment":"none","src":"https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png","targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters"},"type":"IMAGE","mutability":"MUTABLE"},"11":{"mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/kSxBLz5/conditional-access-policy-use-app-enforced-restrictions.png","targetOption":"_blank","alignment":"none","alt":"conditional access policy use app enforced restrictions","width":"auto","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters"},"type":"IMAGE"},"12":{"data":{"alt":"Limit access to SharePoint site","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","height":"auto","alignment":"none","width":"auto","src":"https://i.ibb.co/Kh61mvM/limit-access-to-sharepoint-site.png","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"13":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","src":"https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","height":"auto","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","alignment":"left","alt":"open SharePoint classic settings page","width":"auto"}},"14":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","alt":"open SharePoint classic settings page","width":"auto","height":"auto","alignment":"left"},"type":"IMAGE"},"15":{"mutability":"MUTABLE","data":{"width":"auto","alt":"Enable IRM in SharePoint tenant","alignment":"left","height":"auto","src":"https://i.ibb.co/9WDnpFM/enable-irm-in-sharepoint-tenant.png"},"type":"IMAGE"}}},"datePublished":"2022/5/26","publish":true,"featuredImage":"https://i.ibb.co/Gk9NjSH/Share-Point-Online-Warning.png","slug":"Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI","sectionId":"YhftdGIRX","title":"Everything you need to know about securing SharePoint Online for the MS-500"},
      nextContentSlug: 'Introduction-to-Intune-7gR3L122b',
      previousContentSlug: 'Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w',
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
                <div><p>So, you're set up with SharePoint. Users are accessing SharePoint and everything is going great but now there's a security concern. Everything use to sit on file shares inside your network. The network was secured so you didn't have to worry about your files too much. But that's not the case with SharePoint Online. With SharePoint Online, files can be accessed from anywhere at any time. Files can also be synced to your users' devices (including personal devices). Those devices can get lost, stolen, or hacked. So now we have a big issue. But have no fear, Microsoft is here! There are a ton of ways to secure your SharePoint files. You can limit what users can do. Who can share files. You can limit where the files can be accessed (including IP addresses or countries). You can even limit SharePoint access based on your managed devices! That's right, you can set up SharePoint so only authorized users using authorized devices can access your SharePoint files.</p>
<h2>Restrict external user access to your SharePoint tenant</h2>
<p>The first way you'll need to secure your SharePoint tenant is with who users can share files. By default, users can share their SharePoint files with anyone. They can set up a sharing link that doesn't require a password. If that link is accidentally shared with someone that it isn't supposed to be, that person can access your SharePoint files. So how do we limit sharing?</p>
<p>1. Open the SharePoint admin center &gt; Policies &gt; Sharing</p>
<p>2. Drag the sliders under Content can be shared with to the appropriate level.</p>
<p>3. Scroll to the bottom of the page and click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png" alt="SharePoint sharing permissions set to least permissive" style="height: auto;width: auto"/></div>
<p>From this page, you can edit the SharePoint and OneDrive sharing permissions. You can configure it to allow users to only share documents with internal users or keep it so users can share with anyone.</p>
<h3>Limit Sharing by domain</h3>
<p>So let's say a question on the MS-500 you may see is "How do you limit external sharing with only people in contoso.com?" Well, it's pretty easy.</p>
<p>1. Open the <a href="https://admin.microsoft.com/sharepoint?#/sharing" target="_blank">SharePoint admin center &gt; Policies &gt; Sharing</a>&nbsp;</p>
<p>2. Click <strong>More external sharing settings</strong> &gt; <strong>Limit external sharing by domain</strong> &gt; <strong>Add domains</strong>.</p>
<p>5. Click <strong>Allow only specific domains</strong>. Then enter the domain you want to be able to access your SharePoint tenant.</p>
<p>6. Click <strong>Save</strong></p>
<div ><img src="https://i.ibb.co/S6Lbk8G/limit-external-sharing.png" alt="Limit external sharing by domains in SharePoint Online" style="height: auto;width: auto"/></div>
<p>7. Then scroll to the bottom of the page and click <strong>Save</strong>.</p>
<h2>Restricting downloading, printing, and syncing from unmanaged devices</h2>
<p>Okay, so now sharing is secured and users can only share with specific domains. But users can still access all the files across SharePoint and OneDrive from any device. A user may accidentally go to a shared computer, for example, at a library, and sync your company's files to the shared computer. Uh-oh. How do you prevent users from downloading, printing, and syncing files to unmanaged devices? Well, there are two ways to set it up: from the browser or PowerShell.</p>
<p>1. Go to the <a href="https://admin.microsoft.com/sharepoint#/accessControl" target="_blank">SharePoint admin center &gt; Policies &gt; Access Control</a></p>
<p>2. Click <strong>Allow limited, web-only access</strong>. Then click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png" alt="limit SharePoint access from unmanaged devices" style="height: auto;width: auto"/></div>
<p>We can also make this change from PowerShell.</p>
<p>1. Connect to SharePoint Online using Connect-SPOService.</p>
<p>2. Run the following command: <strong>Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess</strong></p>
<div ><img src="https://i.ibb.co/fCGqR18/Set-SPOTenant-Conditional-Access-Policy-Allow-Limited-Access.png" alt="C:\Users\john.gruber\Downloads\Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess.png" style="height: auto;width: auto"/></div>
<h2><span >Restricting downloading, printing, and syncing from unmanaged devices</span> per site</h2>
<p>Okay, maybe you don't need to limit downloading, printing, and syncing from all your tenants. Maybe there are a couple of SharePoint sites that do need to be limited though. What do you do? First, you need to enable app-enforced restrictions on your SharePoint tenant. Then configure the site to require a managed device.</p>
<h3>Enable app enforced restrictions on the tenant</h3>
<p>&nbsp;Before we go enabling it, let's talk about what it does. The app-enforced conditional access policy will require Azure AD to pass the device information to the app that you are connecting to. So, in short, SharePoint Online will know if you're on a compliant device or not when you connect. Without further ado, let's set up the conditional access policy.</p>
<p>1. Go to <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies" target="_blank">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies</a> and log in with your admin credentials.</p>
<p>2. Click <strong>New policy</strong>.</p>
<div ><img src="https://i.ibb.co/FDdCB72/new-conditional-access-policy.png" alt="New Conditional Access Policy" style="height: auto;width: auto"/></div>
<p>3. Set a name, for example, <strong>app enforced restrictions</strong>.</p>
<p>4. Click <strong>0 users and groups</strong> &gt; <strong>All users</strong>.</p>
<div ><img src="https://i.ibb.co/QMPJ6W0/Set-conditional-access-policy-to-all-users.png" alt="Set conditional access policy to all users" style="height: auto;width: auto"/></div>
<p>5. Click <strong>No cloud apps, actions, or authentication contexts selected</strong> &gt; <strong>Select apps</strong> &gt; Type <strong>SharePoint </strong>in the search box &gt; Click <strong>Office 365 SharePoint Online</strong> &gt; <strong>Select</strong>.</p>
<div ><img src="https://i.ibb.co/582XPDq/conditional-access-policy-cloud-app-sharepoint-online.png" alt="C:\Users\john.gruber\Downloads\conditional access policy cloud app SharePoint online" style="height: auto;width: auto"/></div>
<p>6. Click <strong>0 conditions selected</strong> &gt; <strong>Not configured</strong> (under Click apps) &gt; <strong>Yes</strong> (under Configure) &gt; <strong>Done</strong>.</p>
<div ><img src="https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png" alt="conditional access policy client apps all" style="height: auto;width: auto"/></div>
<p>7. Click <strong>0 controls selected</strong> (under session) &gt; <strong>Use app enforced restrictions</strong> &gt; <strong>Select</strong> &gt; <strong>On </strong>(Under Enable policy) &gt; <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/kSxBLz5/conditional-access-policy-use-app-enforced-restrictions.png" alt="conditional access policy use app enforced restrictions" style="height: auto;width: auto"/></div>
<p>That's it. Now we can configure the SharePoint Online sites that we want to limit&nbsp;</p>
<h3>Restricting access from unmanaged devices per site</h3>
<p>Perform the following steps on every SharePoint site you want to limit access to:</p>
<p>1. Open PowerShell and run Connect-SPOService -URL &lt;Your SharePoint Admin URL&gt;</p>
<p>2. Run Set-SPOTSite -Identity &lt;The SharePoint site URL you want to protect&gt; -ConditionalAccessPolicy AllowLimitedAccess</p>
<div ><img src="https://i.ibb.co/Kh61mvM/limit-access-to-sharepoint-site.png" alt="Limit access to SharePoint site" style="height: auto;width: auto"/></div>
<p>That's it. The site is now protected from downloading, syncing, or printing from unmanaged devices.</p>
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
