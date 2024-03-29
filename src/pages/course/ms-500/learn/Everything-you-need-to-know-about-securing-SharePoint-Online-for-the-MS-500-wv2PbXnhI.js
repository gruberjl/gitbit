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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5s8pf', text: 'So, you\'re set up with SharePoint. Users are accessing SharePoint and everything is going great but now there\'s a security concern. Everything use to sit on file shares inside your network. The network was secured so you didn\'t have to worry about your files too much. But that\'s not the case with SharePoint Online. With SharePoint Online, files can be accessed from anywhere at any time. Files can also be synced to your users\' devices (including personal devices). Those devices can get lost, stolen, or hacked. So now we have a big issue. But have no fear, Microsoft is here! There are a ton of ways to secure your SharePoint files. You can limit what users can do. Who can share files. You can limit where the files can be accessed (including IP addresses or countries). You can even limit SharePoint access based on your managed devices! That\'s right, you can set up SharePoint so only authorized users using authorized devices can access your SharePoint files.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '79ohv', text: 'Restrict external user access to your SharePoint tenant', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3mbko', text: 'The first way you\'ll need to secure your SharePoint tenant is with who users can share files. By default, users can share their SharePoint files with anyone. They can set up a sharing link that doesn\'t require a password. If that link is accidentally shared with someone that it isn\'t supposed to be, that person can access your SharePoint files. So how do we limit sharing?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a6kdf', text: '1. Open the SharePoint admin center > Policies > Sharing', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e36pc', text: '2. Drag the sliders under Content can be shared with to the appropriate level.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 46, style: 'BOLD'}], key: 'c0lte', text: '3. Scroll to the bottom of the page and click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '7d949', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4jhhf', text: 'From this page, you can edit the SharePoint and OneDrive sharing permissions. You can configure it to allow users to only share documents with internal users or keep it so users can share with anyone.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fgvi', text: 'Limit Sharing by domain', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '516nf', text: 'So let\'s say a question on the MS-500 you may see is "How do you limit external sharing with only people in contoso.com?" Well, it\'s pretty easy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 44, offset: 12}], inlineStyleRanges: [], key: 'ecnav', text: '1. Open the SharePoint admin center > Policies > Sharing ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 30, offset: 9, style: 'BOLD'}, {length: 32, offset: 42, style: 'BOLD'}, {length: 11, offset: 77, style: 'BOLD'}], key: '7i26p', text: '2. Click More external sharing settings > Limit external sharing by domain > Add domains.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 27, offset: 9, style: 'BOLD'}], key: '745it', text: '5. Click Allow only specific domains. Then enter the domain you want to be able to access your SharePoint tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}], key: '4nkok', text: '6. Click Save', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '1uc9r', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 51, style: 'BOLD'}], key: 'b0j95', text: '7. Then scroll to the bottom of the page and click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4p3ff', text: 'Restricting downloading, printing, and syncing from unmanaged devices', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e93h6', text: 'Okay, so now sharing is secured and users can only share with specific domains. But users can still access all the files across SharePoint and OneDrive from any device. A user may accidentally go to a shared computer, for example, at a library, and sync your company\'s files to the shared computer. Uh-oh. How do you prevent users from downloading, printing, and syncing files to unmanaged devices? Well, there are two ways to set it up: from the browser or PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 51, offset: 13}], inlineStyleRanges: [], key: '8ebmn', text: '1. Go to the SharePoint admin center > Policies > Access Control', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 30, offset: 9, style: 'BOLD'}, {length: 4, offset: 52, style: 'BOLD'}], key: '8uca7', text: '2. Click Allow limited, web-only access. Then click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '75qur', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6qlu', text: 'We can also make this change from PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '73k81', text: '1. Connect to SharePoint Online using Connect-SPOService.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 57, offset: 30, style: 'BOLD'}], key: 'art49', text: '2. Run the following command: Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'irqg', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 69, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 69, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 69, offset: 0, style: 'fontsize-32'}, {length: 69, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '416jg', text: 'Restricting downloading, printing, and syncing from unmanaged devices per site', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'enqsl', text: 'Okay, maybe you don\'t need to limit downloading, printing, and syncing from all your tenants. Maybe there are a couple of SharePoint sites that do need to be limited though. What do you do? First, you need to enable app-enforced restrictions on your SharePoint tenant. Then configure the site to require a managed device.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '89r3g', text: 'Enable app enforced restrictions on the tenant', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8pntf', text: ' Before we go about enabling it, let\'s talk about what it does. The app-enforced conditional access policy will require Azure AD to pass the device information to the app that you are connecting to. So, in short, SharePoint Online will know if you\'re on a compliant device or not when you connect. Without further ado, let\'s set up the conditional access policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 85, offset: 9}], inlineStyleRanges: [], key: '2s310', text: '1. Go to https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies and log in with your admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 9, style: 'BOLD'}], key: '84ico', text: '2. Click New policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '7beh2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 25, offset: 28, style: 'BOLD'}], key: 'fs971', text: '3. Set a name, for example, app enforced restrictions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 9, style: 'BOLD'}, {length: 9, offset: 30, style: 'BOLD'}], key: 'fv1t4', text: '4. Click 0 users and groups > All users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dgk2r', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 59, offset: 9, style: 'BOLD'}, {length: 11, offset: 71, style: 'BOLD'}, {length: 11, offset: 90, style: 'BOLD'}, {length: 28, offset: 127, style: 'BOLD'}, {length: 6, offset: 158, style: 'BOLD'}], key: '5rft2', text: '5. Click No cloud apps, actions, or authentication contexts selected > Select apps > Type SharePoint in the search box > Click Office 365 SharePoint Online > Select.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '94r6e', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}, {length: 14, offset: 33, style: 'BOLD'}, {length: 3, offset: 69, style: 'BOLD'}, {length: 4, offset: 93, style: 'BOLD'}], key: '1bla6', text: '6. Click 0 conditions selected > Not configured (under Click apps) > Yes (under Configure) > Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '1jtfg', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 9, style: 'BOLD'}, {length: 29, offset: 47, style: 'BOLD'}, {length: 6, offset: 79, style: 'BOLD'}, {length: 3, offset: 88, style: 'BOLD'}, {length: 6, offset: 115, style: 'BOLD'}], key: '8iubm', text: '7. Click 0 controls selected (under session) > Use app enforced restrictions > Select > On (Under Enable policy) > Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ca7pr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8mbam', text: 'That\'s it. Now we can configure the SharePoint Online sites that we want to limit ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'drcvb', text: 'Restricting access from unmanaged devices per site', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f18lh', text: 'Perform the following steps on every SharePoint site you want to limit access to:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9eakb', text: '1. Open PowerShell and run Connect-SPOService -URL <Your SharePoint Admin URL>', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bi02v', text: '2. Run Set-SPOSite -Identity <The SharePoint site URL you want to protect> -ConditionalAccessPolicy AllowLimitedAccess', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ecr2h', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cp6vi', text: 'That\'s it. The site is now protected from downloading, syncing, or printing from unmanaged devices.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'SharePoint sharing permissions set to least permissive', height: 484, src: 'https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png', targetOption: '_blank', url: 'https://admin.microsoft.com/sharepoint?#/sharing', width: 697}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'left', alt: 'SharePoint sharing permissions set to least permissive', height: 'auto', src: 'https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png', targetOption: '_blank', url: 'https://admin.microsoft.com/sharepoint?#/sharing', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 10: {data: {alignment: 'none', alt: 'conditional access policy client apps all', height: 815, src: 'https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 912}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'conditional access policy use app enforced restrictions', height: 823, src: 'https://i.ibb.co/kSxBLz5/conditional-access-policy-use-app-enforced-restrictions.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 612}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Limit access to SharePoint site', height: 47, src: 'https://i.ibb.co/Kh61mvM/limit-access-to-sharepoint-site.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 789}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'left', alt: 'open SharePoint classic settings page', height: 'auto', src: 'https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 14: {data: {alignment: 'left', alt: 'open SharePoint classic settings page', height: 726, src: 'https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png', width: 1078}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'left', alt: 'Enable IRM in SharePoint tenant', height: 101, src: 'https://i.ibb.co/9WDnpFM/enable-irm-in-sharepoint-tenant.png', width: 1300}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Limit external sharing by domains in SharePoint Online', height: 592, src: 'https://i.ibb.co/S6Lbk8G/limit-external-sharing.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 1197}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'left', alt: 'limit SharePoint access from unmanaged devices', height: 'auto', src: 'https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png', targetOption: '_blank', url: 'https://admin.microsoft.com/sharepoint#/accessControl', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {data: {alignment: 'none', alt: 'limit SharePoint access from unmanaged devices', height: 485, src: 'https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 1198}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'C:\\Users\\john.gruber\\Downloads\\Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess.png', height: 69, src: 'https://i.ibb.co/fCGqR18/Set-SPOTenant-Conditional-Access-Policy-Allow-Limited-Access.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 604}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'left', alt: 'open SharePoint classic settings page', height: 'auto', src: 'https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 7: {data: {alignment: 'none', alt: 'New Conditional Access Policy', height: 183, src: 'https://i.ibb.co/FDdCB72/new-conditional-access-policy.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 692}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Set conditional access policy to all users', height: 699, src: 'https://i.ibb.co/QMPJ6W0/Set-conditional-access-policy-to-all-users.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 575}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'C:\\Users\\john.gruber\\Downloads\\conditional access policy cloud app SharePoint online', height: 826, src: 'https://i.ibb.co/582XPDq/conditional-access-policy-cloud-app-sharepoint-online.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/alladmincenters', width: 1036}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'SharePoint is a large part of Microsoft 365. Learn how to secure SharePoint Online to prepare for the MS-500.', featuredImage: 'https://i.ibb.co/Gk9NjSH/Share-Point-Online-Warning.png', id: 'wv2PbXnhI', images: ['https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png', 'https://i.ibb.co/W24gxYh/sharepoint-classic-settings-page.png', 'https://i.ibb.co/9WDnpFM/enable-irm-in-sharepoint-tenant.png', 'https://i.ibb.co/S6Lbk8G/limit-external-sharing.png', 'https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png', 'https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png', 'https://i.ibb.co/fCGqR18/Set-SPOTenant-Conditional-Access-Policy-Allow-Limited-Access.png', 'https://i.ibb.co/FDdCB72/new-conditional-access-policy.png', 'https://i.ibb.co/QMPJ6W0/Set-conditional-access-policy-to-all-users.png', 'https://i.ibb.co/582XPDq/conditional-access-policy-cloud-app-sharepoint-online.png', 'https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png', 'https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png', 'https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png', 'https://i.ibb.co/kSxBLz5/conditional-access-policy-use-app-enforced-restrictions.png', 'https://i.ibb.co/Kh61mvM/limit-access-to-sharepoint-site.png', 'https://i.ibb.co/Gk9NjSH/Share-Point-Online-Warning.png'], publish: true, sectionId: 'YhftdGIRX', slug: 'Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI', title: 'Everything you need to know about securing SharePoint Online for the MS-500', type: 'article'},
      nextContentSlug: 'test/securing-sharepoint-online-vojmqnsev',
      previousContentSlug: 'test/data-loss-prevention-policies-dlp-hwkqi18rz',
      hasCompletedContent: false,
      userAcct: {completedContent: []},
      decideHeight: '1000px'
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
    this.mountAds1()
    this.mountAds2()

    const setDecideHeight = (a) => {
      if (!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))))
        this.setState({decideHeight: '250px'})
    }

    setDecideHeight(navigator.userAgent||navigator.vendor||window.opera)
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
                  <div id="ld-534-9587" style={{height: this.state.decideHeight, overflow: 'hidden'}} >
                    <p style="position: absolute;z-index: -1">Reserved for ads. Please scroll down.</p>
                  </div>
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>So, you're set up with SharePoint. Users are accessing SharePoint and everything is going great but now there's a security concern. Everything use to sit on file shares inside your network. The network was secured so you didn't have to worry about your files too much. But that's not the case with SharePoint Online. With SharePoint Online, files can be accessed from anywhere at any time. Files can also be synced to your users' devices (including personal devices). Those devices can get lost, stolen, or hacked. So now we have a big issue. But have no fear, Microsoft is here! There are a ton of ways to secure your SharePoint files. You can limit what users can do. Who can share files. You can limit where the files can be accessed (including IP addresses or countries). You can even limit SharePoint access based on your managed devices! That's right, you can set up SharePoint so only authorized users using authorized devices can access your SharePoint files.</p>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>Restrict external user access to your SharePoint tenant</h2>
                    <p>The first way you'll need to secure your SharePoint tenant is with who users can share files. By default, users can share their SharePoint files with anyone. They can set up a sharing link that doesn't require a password. If that link is accidentally shared with someone that it isn't supposed to be, that person can access your SharePoint files. So how do we limit sharing?</p>
                    <p>1. Open the SharePoint admin center &gt; Policies &gt; Sharing</p>
                    <p>2. Drag the sliders under Content can be shared with to the appropriate level.</p>
                    <p>3. Scroll to the bottom of the page and click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/ByQTp6G/Share-Point-Sharing-Least-Permissive.png" alt="SharePoint sharing permissions set to least permissive" height="484" width="697" style="aspect-ratio: auto 697 / 484; height: auto;" /></div>
                    <p>From this page, you can edit the SharePoint and OneDrive sharing permissions. You can configure it to allow users to only share documents with internal users or keep it so users can share with anyone.</p>
                    <h3>Limit Sharing by domain</h3>
                    <p>So let's say a question on the MS-500 you may see is "How do you limit external sharing with only people in contoso.com?" Well, it's pretty easy.</p>
                    <p>1. Open the <a href="https://admin.microsoft.com/sharepoint?#/sharing" target="_blank" rel="noreferrer">SharePoint admin center &gt; Policies &gt; Sharing</a>&nbsp;</p>
                    <p>2. Click <strong>More external sharing settings</strong> &gt; <strong>Limit external sharing by domain</strong> &gt; <strong>Add domains</strong>.</p>
                    <p>5. Click <strong>Allow only specific domains</strong>. Then enter the domain you want to be able to access your SharePoint tenant.</p>
                    <p>6. Click <strong>Save</strong></p>
                    <div ><img src="https://i.ibb.co/S6Lbk8G/limit-external-sharing.png" alt="Limit external sharing by domains in SharePoint Online" height="592" width="1197" style="aspect-ratio: auto 1197 / 592; height: auto;" /></div>
                    <p>7. Then scroll to the bottom of the page and click <strong>Save</strong>.</p>
                    <h2>Restricting downloading, printing, and syncing from unmanaged devices</h2>
                    <p>Okay, so now sharing is secured and users can only share with specific domains. But users can still access all the files across SharePoint and OneDrive from any device. A user may accidentally go to a shared computer, for example, at a library, and sync your company's files to the shared computer. Uh-oh. How do you prevent users from downloading, printing, and syncing files to unmanaged devices? Well, there are two ways to set it up: from the browser or PowerShell.</p>
                    <p>1. Go to the <a href="https://admin.microsoft.com/sharepoint#/accessControl" target="_blank" rel="noreferrer">SharePoint admin center &gt; Policies &gt; Access Control</a></p>
                    <p>2. Click <strong>Allow limited, web-only access</strong>. Then click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/zFF9rZ6/limit-sharepoing-access-from-unmanaged-devices.png" alt="limit SharePoint access from unmanaged devices" height="485" width="1198" style="aspect-ratio: auto 1198 / 485; height: auto;" /></div>
                    <p>We can also make this change from PowerShell.</p>
                    <p>1. Connect to SharePoint Online using Connect-SPOService.</p>
                    <p>2. Run the following command: <strong>Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess</strong></p>
                    <div ><img src="https://i.ibb.co/fCGqR18/Set-SPOTenant-Conditional-Access-Policy-Allow-Limited-Access.png" alt="C:\Users\john.gruber\Downloads\Set-SPOTenant -ConditionalAccessPolicy AllowLimitedAccess.png" height="69" width="604" style="aspect-ratio: auto 604 / 69; height: auto;" /></div>
                    <h2><span >Restricting downloading, printing, and syncing from unmanaged devices</span> per site</h2>
                    <p>Okay, maybe you don't need to limit downloading, printing, and syncing from all your tenants. Maybe there are a couple of SharePoint sites that do need to be limited though. What do you do? First, you need to enable app-enforced restrictions on your SharePoint tenant. Then configure the site to require a managed device.</p>
                    <h3>Enable app enforced restrictions on the tenant</h3>
                    <p>&nbsp;Before we go about enabling it, let's talk about what it does. The app-enforced conditional access policy will require Azure AD to pass the device information to the app that you are connecting to. So, in short, SharePoint Online will know if you're on a compliant device or not when you connect. Without further ado, let's set up the conditional access policy.</p>
                    <p>1. Go to <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies" target="_blank" rel="noreferrer">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies</a> and log in with your admin credentials.</p>
                    <p>2. Click <strong>New policy</strong>.</p>
                    <div ><img src="https://i.ibb.co/FDdCB72/new-conditional-access-policy.png" alt="New Conditional Access Policy" height="183" width="692" style="aspect-ratio: auto 692 / 183; height: auto;" /></div>
                    <p>3. Set a name, for example, <strong>app enforced restrictions</strong>.</p>
                    <p>4. Click <strong>0 users and groups</strong> &gt; <strong>All users</strong>.</p>
                    <div ><img src="https://i.ibb.co/QMPJ6W0/Set-conditional-access-policy-to-all-users.png" alt="Set conditional access policy to all users" height="699" width="575" style="aspect-ratio: auto 575 / 699; height: auto;" /></div>
                    <p>5. Click <strong>No cloud apps, actions, or authentication contexts selected</strong> &gt; <strong>Select apps</strong> &gt; Type <strong>SharePoint </strong>in the search box &gt; Click <strong>Office 365 SharePoint Online</strong> &gt; <strong>Select</strong>.</p>
                    <div ><img src="https://i.ibb.co/582XPDq/conditional-access-policy-cloud-app-sharepoint-online.png" alt="C:\Users\john.gruber\Downloads\conditional access policy cloud app SharePoint online" height="826" width="1036" style="aspect-ratio: auto 1036 / 826; height: auto;" /></div>
                    <p>6. Click <strong>0 conditions selected</strong> &gt; <strong>Not configured</strong> (under Click apps) &gt; <strong>Yes</strong> (under Configure) &gt; <strong>Done</strong>.</p>
                    <div ><img src="https://i.ibb.co/1LBgC3q/conditional-access-policy-client-apps-all.png" alt="conditional access policy client apps all" height="815" width="912" style="aspect-ratio: auto 912 / 815; height: auto;" /></div>
                    <p>7. Click <strong>0 controls selected</strong> (under session) &gt; <strong>Use app enforced restrictions</strong> &gt; <strong>Select</strong> &gt; <strong>On </strong>(Under Enable policy) &gt; <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/kSxBLz5/conditional-access-policy-use-app-enforced-restrictions.png" alt="conditional access policy use app enforced restrictions" height="823" width="612" style="aspect-ratio: auto 612 / 823; height: auto;" /></div>
                    <p>That's it. Now we can configure the SharePoint Online sites that we want to limit&nbsp;</p>
                    <h3>Restricting access from unmanaged devices per site</h3>
                    <p>Perform the following steps on every SharePoint site you want to limit access to:</p>
                    <p>1. Open PowerShell and run Connect-SPOService -URL &lt;Your SharePoint Admin URL&gt;</p>
                    <p>2. Run Set-SPOSite -Identity &lt;The SharePoint site URL you want to protect&gt; -ConditionalAccessPolicy AllowLimitedAccess</p>
                    <div ><img src="https://i.ibb.co/Kh61mvM/limit-access-to-sharepoint-site.png" alt="Limit access to SharePoint site" height="47" width="789" style="aspect-ratio: auto 789 / 47; height: auto;" /></div>
                    <p>That's it. The site is now protected from downloading, syncing, or printing from unmanaged devices.</p>
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
