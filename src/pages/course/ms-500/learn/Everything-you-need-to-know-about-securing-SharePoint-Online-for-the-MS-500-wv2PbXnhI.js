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
      article: {"sectionId":"YhftdGIRX","title":"Everything you need to know about securing SharePoint Online for the MS-500","images":["https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","https://i.ibb.co/9WDnpFM/enable-irm-in-sharepoint-tenant.png","https://i.ibb.co/S6Lbk8G/limit-external-sharing.png","https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png","https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png","https://i.ibb.co/fCGqR18/Set-SPOTenant-Conditional-Access-Policy-Allow-Limited-Access.png","https://i.ibb.co/FDdCB72/new-conditional-access-policy.png","https://i.ibb.co/QMPJ6W0/Set-conditional-access-policy-to-all-users.png","https://i.ibb.co/582XPDq/conditional-access-policy-cloud-app-sharepoint-online.png","https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png","https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png","https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png","https://i.ibb.co/kSxBLz5/conditional-access-policy-use-app-enforced-restrictions.png","https://i.ibb.co/Kh61mvM/limit-access-to-sharepoint-site.png","https://i.ibb.co/Gk9NjSH/Share-Point-Online-Warning.png"],"article":{"blocks":[{"inlineStyleRanges":[],"key":"5s8pf","depth":0,"data":{},"entityRanges":[],"text":"So, you're set up with SharePoint. Users are accessing SharePoint and everything is going great but now there's a security concern. Everything use to sit on file shares inside your network. The network was secured so you didn't have to worry about your files too much. But that's not the case with SharePoint Online. With SharePoint Online, files can be accessed from anywhere at any time. Files can also be synced to your users' devices (including personal devices). Those devices can get lost, stolen, or hacked. So now we have a big issue. But have no fear, Microsoft is here! There are a ton of ways to secure your SharePoint files. You can limit what users can do. Who can share files. You can limit where the files can be accessed (including IP addresses or countries). You can even limit SharePoint access based on your managed devices! That's right, you can set up SharePoint so only authorized users using authorized devices can access your SharePoint files.","type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"text":"Restrict external user access to your SharePoint tenant","data":{},"key":"79ohv"},{"depth":0,"text":"The first way you'll need to secure your SharePoint tenant is with who users can share files. By default, users can share their SharePoint files with anyone. They can set up a sharing link that doesn't require a password. If that link is accidentally shared with someone that it isn't supposed to be, that person can access your SharePoint files. So how do we limit sharing?","type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[],"key":"3mbko"},{"data":{},"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"a6kdf","text":"1. Open the SharePoint admin center > Policies > Sharing"},{"inlineStyleRanges":[],"key":"e36pc","depth":0,"data":{},"entityRanges":[],"text":"2. Drag the sliders under Content can be shared with to the appropriate level.","type":"unstyled"},{"inlineStyleRanges":[{"style":"BOLD","offset":46,"length":4}],"type":"unstyled","text":"3. Scroll to the bottom of the page and click Save.","key":"c0lte","data":{},"depth":0,"entityRanges":[]},{"entityRanges":[{"key":0,"length":1,"offset":0}],"depth":0,"text":" ","inlineStyleRanges":[],"data":{},"key":"7d949","type":"atomic"},{"type":"unstyled","entityRanges":[],"data":{},"key":"4jhhf","inlineStyleRanges":[],"depth":0,"text":"From this page, you can edit the SharePoint and OneDrive sharing permissions. You can configure it to allow users to only share documents with internal users or keep it so users can share with anyone."},{"text":"Limit Sharing by domain","inlineStyleRanges":[],"data":{},"depth":0,"type":"header-three","entityRanges":[],"key":"fgvi"},{"entityRanges":[],"inlineStyleRanges":[],"data":{},"depth":0,"text":"So let's say a question on the MS-500 you may see is \"How do you limit external sharing with only people in contoso.com?\" Well, it's pretty easy.","type":"unstyled","key":"516nf"},{"data":{},"text":"1. Open the SharePoint admin center > Policies > Sharing ","depth":0,"inlineStyleRanges":[],"type":"unstyled","entityRanges":[{"length":44,"key":1,"offset":12}],"key":"ecnav"},{"entityRanges":[],"data":{},"type":"unstyled","key":"7i26p","text":"2. Click More external sharing settings > Limit external sharing by domain > Add domains.","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":30,"offset":9},{"style":"BOLD","offset":42,"length":32},{"length":11,"offset":77,"style":"BOLD"}]},{"type":"unstyled","data":{},"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":27}],"text":"5. Click Allow only specific domains. Then enter the domain you want to be able to access your SharePoint tenant.","key":"745it","entityRanges":[],"depth":0},{"depth":0,"key":"4nkok","entityRanges":[],"data":{},"text":"6. Click Save","inlineStyleRanges":[{"offset":9,"length":4,"style":"BOLD"}],"type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"key":"1uc9r","entityRanges":[{"length":1,"offset":0,"key":2}],"type":"atomic","data":{},"text":" "},{"text":"7. Then scroll to the bottom of the page and click Save.","depth":0,"inlineStyleRanges":[{"length":4,"style":"BOLD","offset":51}],"key":"b0j95","type":"unstyled","entityRanges":[],"data":{}},{"data":{},"depth":0,"inlineStyleRanges":[],"text":"Restricting downloading, printing, and syncing from unmanaged devices","type":"header-two","entityRanges":[],"key":"4p3ff"},{"data":{},"depth":0,"key":"e93h6","inlineStyleRanges":[],"text":"Okay, so now sharing is secured and users can only share with specific domains. But users can still access all the files across SharePoint and OneDrive from any device. A user may accidentally go to a shared computer, for example, at a library, and sync your company's files to the shared computer. Uh-oh. How do you prevent users from downloading, printing, and syncing files to unmanaged devices? Well, there are two ways to set it up: from the browser or PowerShell.","type":"unstyled","entityRanges":[]},{"entityRanges":[{"key":3,"length":51,"offset":13}],"data":{},"type":"unstyled","depth":0,"text":"1. Go to the SharePoint admin center > Policies > Access Control","inlineStyleRanges":[],"key":"8ebmn"},{"depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":30},{"style":"BOLD","offset":52,"length":4}],"type":"unstyled","text":"2. Click Allow limited, web-only access. Then click Save.","key":"8uca7"},{"type":"atomic","text":" ","entityRanges":[{"length":1,"offset":0,"key":4}],"key":"75qur","data":{},"depth":0,"inlineStyleRanges":[]},{"depth":0,"type":"unstyled","key":"6qlu","text":"We can also make this change from PowerShell.","inlineStyleRanges":[],"data":{},"entityRanges":[]},{"depth":0,"key":"73k81","inlineStyleRanges":[],"data":{},"entityRanges":[],"text":"1. Connect to SharePoint Online using Connect-SPOService.","type":"unstyled"},{"key":"art49","text":"2. Run the following command: Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess","type":"unstyled","inlineStyleRanges":[{"offset":30,"length":57,"style":"BOLD"}],"data":{},"entityRanges":[],"depth":0},{"key":"irqg","data":{},"entityRanges":[{"length":1,"key":5,"offset":0}],"depth":0,"inlineStyleRanges":[],"type":"atomic","text":" "},{"entityRanges":[],"text":"Restricting downloading, printing, and syncing from unmanaged devices per site","data":{},"key":"416jg","depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":69,"offset":0},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":69},{"offset":0,"style":"fontsize-32","length":69},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":69,"offset":0}],"type":"header-two"},{"inlineStyleRanges":[],"entityRanges":[],"key":"enqsl","data":{},"text":"Okay, maybe you don't need to limit downloading, printing, and syncing from all your tenants. Maybe there are a couple of SharePoint sites that do need to be limited though. What do you do? First, you need to enable app-enforced restrictions on your SharePoint tenant. Then configure the site to require a managed device.","type":"unstyled","depth":0},{"entityRanges":[],"key":"89r3g","depth":0,"inlineStyleRanges":[],"text":"Enable app enforced restrictions on the tenant","type":"header-three","data":{}},{"type":"unstyled","depth":0,"data":{},"key":"8pntf","inlineStyleRanges":[],"entityRanges":[],"text":" Before we go enabling it, let's talk about what it does. The app-enforced conditional access policy will require Azure AD to pass the device information to the app that you are connecting to. So, in short, SharePoint Online will know if you're on a compliant device or not when you connect. Without further ado, let's set up the conditional access policy."},{"inlineStyleRanges":[],"key":"2s310","entityRanges":[{"offset":9,"length":85,"key":6}],"type":"unstyled","depth":0,"data":{},"text":"1. Go to https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies and log in with your admin credentials."},{"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":10}],"data":{},"depth":0,"type":"unstyled","entityRanges":[],"text":"2. Click New policy.","key":"84ico"},{"entityRanges":[{"key":7,"offset":0,"length":1}],"text":" ","data":{},"type":"atomic","inlineStyleRanges":[],"key":"7beh2","depth":0},{"entityRanges":[],"inlineStyleRanges":[{"offset":28,"style":"BOLD","length":25}],"type":"unstyled","text":"3. Set a name, for example, app enforced restrictions.","data":{},"key":"fs971","depth":0},{"key":"fv1t4","data":{},"type":"unstyled","entityRanges":[],"depth":0,"text":"4. Click 0 users and groups > All users.","inlineStyleRanges":[{"style":"BOLD","length":18,"offset":9},{"offset":30,"style":"BOLD","length":9}]},{"inlineStyleRanges":[],"text":" ","type":"atomic","key":"dgk2r","depth":0,"entityRanges":[{"key":8,"length":1,"offset":0}],"data":{}},{"entityRanges":[],"key":"5rft2","data":{},"depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":59},{"length":11,"style":"BOLD","offset":71},{"style":"BOLD","length":11,"offset":90},{"offset":127,"style":"BOLD","length":28},{"offset":158,"length":6,"style":"BOLD"}],"type":"unstyled","text":"5. Click No cloud apps, actions, or authentication contexts selected > Select apps > Type SharePoint in the search box > Click Office 365 SharePoint Online > Select."},{"key":"94r6e","text":" ","entityRanges":[{"key":9,"length":1,"offset":0}],"data":{},"depth":0,"type":"atomic","inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[{"offset":9,"length":21,"style":"BOLD"},{"style":"BOLD","offset":33,"length":14},{"style":"BOLD","offset":69,"length":3},{"length":4,"style":"BOLD","offset":93}],"depth":0,"type":"unstyled","text":"6. Click 0 conditions selected > Not configured (under Click apps) > Yes (under Configure) > Done.","key":"1bla6","data":{}},{"key":"1jtfg","data":{},"type":"atomic","entityRanges":[{"offset":0,"key":10,"length":1}],"inlineStyleRanges":[],"depth":0,"text":" "},{"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":19},{"style":"BOLD","offset":47,"length":29},{"style":"BOLD","length":6,"offset":79},{"style":"BOLD","offset":88,"length":3},{"style":"BOLD","length":6,"offset":115}],"key":"8iubm","type":"unstyled","depth":0,"entityRanges":[],"data":{},"text":"7. Click 0 controls selected (under session) > Use app enforced restrictions > Select > On (Under Enable policy) > Create."},{"data":{},"type":"atomic","key":"ca7pr","inlineStyleRanges":[],"text":" ","depth":0,"entityRanges":[{"offset":0,"key":11,"length":1}]},{"depth":0,"text":"That's it. Now we can configure the SharePoint Online sites that we want to limit ","data":{},"inlineStyleRanges":[],"key":"8mbam","entityRanges":[],"type":"unstyled"},{"entityRanges":[],"text":"Restricting access from unmanaged devices per site","inlineStyleRanges":[],"depth":0,"data":{},"key":"drcvb","type":"header-three"},{"type":"unstyled","entityRanges":[],"depth":0,"text":"Perform the following steps on every SharePoint site you want to limit access to:","data":{},"inlineStyleRanges":[],"key":"f18lh"},{"key":"9eakb","text":"1. Open PowerShell and run Connect-SPOService -URL <Your SharePoint Admin URL>","data":{},"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"depth":0},{"text":"2. Run Set-SPOTSite -Identity <The SharePoint site URL you want to protect> -ConditionalAccessPolicy AllowLimitedAccess","data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[],"key":"bi02v","type":"unstyled"},{"data":{},"text":" ","depth":0,"entityRanges":[{"key":12,"offset":0,"length":1}],"inlineStyleRanges":[],"key":"ecr2h","type":"atomic"},{"depth":0,"entityRanges":[],"key":"cp6vi","inlineStyleRanges":[],"data":{},"type":"unstyled","text":"That's it. The site is now protected from downloading, syncing, or printing from unmanaged devices."}],"entityMap":{"0":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png","height":"auto","alignment":"none","width":"auto","alt":"SharePoint sharing permissions set to least permissive","targetOption":"_blank","url":"https://admin.microsoft.com/sharepoint?#/sharing"}},"1":{"data":{"targetOption":"_blank","height":"auto","alt":"SharePoint sharing permissions set to least permissive","url":"https://admin.microsoft.com/sharepoint?#/sharing","width":"auto","alignment":"left","src":"https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png"},"type":"LINK","mutability":"MUTABLE"},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/S6Lbk8G/limit-external-sharing.png","alignment":"none","targetOption":"_blank","width":"auto","alt":"Limit external sharing by domains in SharePoint Online","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters"}},"3":{"type":"LINK","mutability":"MUTABLE","data":{"alt":"limit SharePoint access from unmanaged devices","alignment":"left","src":"https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png","url":"https://admin.microsoft.com/sharepoint#/accessControl","height":"auto","width":"auto","targetOption":"_blank"}},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"limit SharePoint access from unmanaged devices","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","src":"https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png","alignment":"none","height":"auto","width":"auto","targetOption":"_blank"}},"5":{"mutability":"MUTABLE","type":"IMAGE","data":{"targetOption":"_blank","width":"auto","height":"auto","alt":"C:\\Users\\john.gruber\\Downloads\\Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess.png","alignment":"none","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","src":"https://i.ibb.co/fCGqR18/Set-SPOTenant-Conditional-Access-Policy-Allow-Limited-Access.png"}},"6":{"type":"LINK","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","alignment":"left","width":"auto","height":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies","alt":"open SharePoint classic settings page","targetOption":"_blank"}},"7":{"type":"IMAGE","data":{"alt":"New Conditional Access Policy","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","alignment":"none","src":"https://i.ibb.co/FDdCB72/new-conditional-access-policy.png","height":"auto","targetOption":"_blank","width":"auto"},"mutability":"MUTABLE"},"8":{"data":{"src":"https://i.ibb.co/QMPJ6W0/Set-conditional-access-policy-to-all-users.png","height":"auto","targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","alt":"Set conditional access policy to all users","width":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"9":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","alt":"C:\\Users\\john.gruber\\Downloads\\conditional access policy cloud app SharePoint online","src":"https://i.ibb.co/582XPDq/conditional-access-policy-cloud-app-sharepoint-online.png","targetOption":"_blank","alignment":"none","height":"auto"}},"10":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","height":"auto","targetOption":"_blank","src":"https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png","width":"auto","alt":"conditional access policy client apps all","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters"}},"11":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","width":"auto","targetOption":"_blank","alt":"conditional access policy use app enforced restrictions","src":"https://i.ibb.co/kSxBLz5/conditional-access-policy-use-app-enforced-restrictions.png","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","height":"auto"}},"12":{"mutability":"MUTABLE","data":{"height":"auto","alt":"Limit access to SharePoint site","alignment":"none","width":"auto","src":"https://i.ibb.co/Kh61mvM/limit-access-to-sharepoint-site.png","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","targetOption":"_blank"},"type":"IMAGE"},"13":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters","height":"auto","width":"auto","targetOption":"_blank","src":"https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","alt":"open SharePoint classic settings page","alignment":"left"}},"14":{"mutability":"MUTABLE","data":{"alt":"open SharePoint classic settings page","height":"auto","alignment":"left","src":"https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png","width":"auto"},"type":"IMAGE"},"15":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/9WDnpFM/enable-irm-in-sharepoint-tenant.png","alt":"Enable IRM in SharePoint tenant","alignment":"left","width":"auto"}}}},"slug":"Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI","type":"article","datePublished":"2022/5/26","featuredImage":"https://i.ibb.co/Gk9NjSH/Share-Point-Online-Warning.png","publish":true,"description":"How to Secure SharePoint Online to prepare for the MS-500","id":"wv2PbXnhI"},
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
