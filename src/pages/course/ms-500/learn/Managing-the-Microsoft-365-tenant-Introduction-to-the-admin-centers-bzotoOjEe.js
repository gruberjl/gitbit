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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2l8pu', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ca697', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cq0tv', text: 'Microsoft 365 management is broken down into multiple admin centers. An admin center is a website used to manage part of the tenant. For example, there\'s an Exchange Online admin center that can help you manage the email portion of your Microsoft 365 tenant. Another SharePoint Online admin center to help manage the SharePoint Online part of your tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5odlf', text: 'Here\'s a list of all the Microsoft 365 admin centers you may need.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '43tlt', text: 'Microsoft 365 admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 17, offset: 86}], inlineStyleRanges: [], key: '3oork', text: 'This is the primary admin center. You can access it by clicking the admin button from portal.office.com in the left pane.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '3mrqa', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 28, offset: 53}], inlineStyleRanges: [], key: 'a0hke', text: 'You can access the admin center directly by going to https://admin.microsoft.com/. From the Microsoft 365 admin center, you can create users, and groups, assign licenses, contact Microsoft support, update domain names, view the service health, or access the other admin centers.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e92hf', text: 'From the Microsoft 365 admin center, you can access the other admin centers. To access the other admin centers, perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd87jh', text: 'Click Show all in the left pane.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '53g3o', text: 'Click All admin centers', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4n8ms', text: 'Microsoft Defender for Identity admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '7o6oc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 29, offset: 77}], inlineStyleRanges: [{length: 150, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 150, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 150, offset: 0, style: 'fontsize-16'}, {length: 150, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '8q416', text: 'The Microsoft Defender for Identity admin center can be accessed by going to https://portal.atp.azure.com/ and logging in with your admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 411, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 411, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 411, offset: 0, style: 'fontsize-16'}, {length: 411, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'b7rb5', text: 'The Defender for Identity admin center is designed for hybrid environments where part of your organization is hosted in on-premises servers and part of your environment is hosted in Microsoft 365. Microsoft Defender collects, analyzes, detects, and alerts you to suspicious activity in your on-premises Active Directory environment. The Defender for Identity admin center is where you can perform the following:', type: 'unstyled'}, {data: {'text-align': 'start'}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5bo7b', text: 'View all suspicious activity', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'do7ei', text: 'Protect user credentials stored in Active Directory (AD)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6lfuf', text: 'Supply a timeline for clear incident information\n ', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bg0l1', text: 'Azure Active Directory (AD) admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '1dabt', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 29, offset: 73}], inlineStyleRanges: [], key: '733t3', text: 'The Azure Active Directory (AD) admin center can be accessed by going to https://aad.portal.azure.com/. Azure AD is the cloud version of your on-premise AD. It\'s like on-premise AD on steroids. It\'s where you can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7e9f', text: 'Manage identity including users and groups.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'an3bm', text: 'Enable multi-factor authentication (MFA)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '42bf5', text: 'Configure self-service password reset', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8va8u', text: 'Edit company branding', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1csbh', text: 'View user sign-ins', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '60la5', text: 'Configure conditional access policies', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6gk5v', text: 'Defender for Cloud Apps admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '9jk1e', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 35, offset: 69}], inlineStyleRanges: [], key: '8kipa', text: 'The Defender for Cloud Apps admin center can be accessed by going to https://portal.cloudappsecurity.com. From the Defender for Cloud Apps admin center, you can manage unsanctioned cloud applications. From the Defender for Cloud Apps admin center you can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dhpsi', text: 'Discover unauthorized cloud applications being used within your organization', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9f0se', text: 'Connect and manage authorized apps', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '997pr', text: 'Configure policies to manage risk', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd35pl', text: 'View and manage alerts', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '37mv9', text: 'Microsoft Purview Compliance admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '6l8so', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 41, offset: 152}], inlineStyleRanges: [], key: 'd2k92', text: 'The Microsoft Purview Compliance admin center, also known as, Puview admin center or Microsoft 365 Compliance admin center, can be accessed by going to https://compliance.microsoft.com/homepage. The Purview admin center is where you can manage the compliance of your tenant. You can classify data, set retention policies, and recover data. From the Purview admin center you can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cvaog', text: 'and Create sensitivity and retention labels to retain data for as long as needed.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'brc39', text: 'Review intelligent reports to view where labels are being used.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9q2ar', text: 'Review a detailed view of the classification trends across your tenant.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cthvk', text: 'Endpoint Manager admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fkujl', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 52, offset: 62}], inlineStyleRanges: [], key: 'ber6o', text: 'The Endpoint manager admin center can be accessed by going to https://endpoint.microsoft.com/?ref=AdminCenter#home. The Endpoint manager admin center is where you can manage the end-user devices. It\'s where you can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ddlnr', text: 'Enroll and configure devices', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3b8ok', text: 'Distribute apps to your devices', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bue80', text: 'Monitor and set compliance requirements on devices', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9hooe', text: 'Exchange admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '43fvm', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 37, offset: 54}], inlineStyleRanges: [], key: '4laal', text: 'The Exchange admin center can be accessed by going to https://admin.exchange.microsoft.com/. The Exchange admin center is where you manage email and everything about email. It\'s where you can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6a45u', text: 'Manage user mailboxes', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8tib9', text: 'Create and manage shared/resource mailboxes', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bf9eu', text: 'Create mail flow rules', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'affn1', text: 'Perform message traces', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8j0na', text: 'Power Platform admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '2srot', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 42, offset: 60}], inlineStyleRanges: [], key: 'de7hv', text: 'The Power Platform admin center can be accessed by going to https://admin.powerplatform.microsoft.com/. The Power Platform admin center is where you can manage the automation of repetitive tasks. From the Power Platform admin center you can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eko58', text: 'Review Power Automate analytics', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bhu1t', text: 'Review Power Apps analytics', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6j3ol', text: 'Create integrations between on-premise, Power BI, Microsoft Flow, and PowerApps.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '39st2', text: 'Manage Dynamics 365 apps', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2ib2o', text: 'Microsoft 365 Apps admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: '6fdpj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 40, offset: 64}], inlineStyleRanges: [], key: 'fen7v', text: 'The Microsoft 365 Apps admin center can be accessed by going to https://config.office.com/officeSettings. The Microsoft 365 Apps admin center can be used to deploy settings and configurations to users that install the Office suite on their computers. Traditionally, the configuration found in the Microsoft 365 Apps admin center would have been performed via group policy', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9ur51', text: 'Deploy Office customization policies', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fi7pf', text: 'Receive and implement security policy recommendations', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5uah2', text: 'Create an Office Customization to deploy Office with specific configurations', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e4or', text: 'Microsoft Stream admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 37, offset: 62}], inlineStyleRanges: [], key: '44rac', text: 'The Microsoft Stream admin center can be accessed by going to https://web.microsoftstream.com/admin. From the Stream admin center, you can configure options for Microsoft Stream. For example, you can limit who can host live events. There are a ton of options in the admin center. Some of which are:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bqvam', text: 'Set Stream admins', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6na0q', text: 'Manage content on behalf of users', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dlfeg', text: 'Configure live events, comments, and restrict organization-wide channel creation', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7i08p', text: 'Power BI admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 1, offset: 0}], inlineStyleRanges: [], key: '8m6k7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 36, offset: 54}], inlineStyleRanges: [], key: '2ifee', text: 'The Power BI admin center can be accessed by going to https://app.powerbi.com/admin-portal. The Power BI admin center is used to manage Power BI. From it, you can view usage metrics, and control how users interact with Power BI. From the Power BI admin center you can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9dovk', text: 'Configure tenant settings', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3acdp', text: 'Review usage metrics', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5qmjj', text: 'Configure sensitivity labels', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cs71h', text: 'Enable Cloud App Security integration', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bh6lu', text: 'Microsoft 365 Defender admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 1, offset: 0}], inlineStyleRanges: [], key: '2ffkg', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 24, length: 31, offset: 68}], inlineStyleRanges: [], key: 'b3u6f', text: 'The Microsoft 365 Defender admin center can be accessed by going to https://security.microsoft.com/. The Defender admin center is used to get visibility, investigate, and manage the security of your Microsoft 365 tenant. From it you can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b96n9', text: 'Manage and view alerts', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c7u41', text: 'Launch simulation attacks', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '63r9a', text: 'Investigate threats', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '20j8t', text: 'Configure anti-phishing, anti-spam, attachment, and link policies', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '54l9u', text: 'SharePoint admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 25, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ee12c', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e0k8e', text: 'The SharePoint admin center can be accessed by going to the Microsoft 365 admin center > Show all > All admin centers > SharePoint. From the SharePoint admin center, you can manage SharePoint sites and OneDrive sites. You can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cdmmb', text: 'Create and manage SharePoint sites', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4hgru', text: 'Configure sharing and access control', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '79k6f', text: 'Manage tenant-wide settings', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6jf3c', text: 'Migrate data to SharePoint', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ueoc', text: 'Microsoft Teams admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 26, length: 1, offset: 0}], inlineStyleRanges: [], key: '5ifnr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 27, length: 34, offset: 51}], inlineStyleRanges: [], key: '6pfao', text: 'The Teams admin center can be accessed by going to https://admin.teams.microsoft.com/. From the Microsoft Teams admin center, you can manage Microsoft Teams. From it, you can configure messaging, conferencing, and external communication options. You can perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'evq1k', text: ' Review relevant information about your Teams deployment', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'hihu', text: 'View and manage Teams users', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9hdmg', text: 'Manage your Teams', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '92h8a', text: 'Configure organization-wide settings', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5hpmt', text: 'Yammer admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 28, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fvf0j', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6er9g', text: 'The Yammer admin center can be accessed by going to the Microsoft 365 admin center > Show all > All admin centers > Yammer. From the Yammer admin center, you can manage your Yammer network, for example, you can set usage policies and control external network settings. You can also perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd7lg2', text: 'Configure Yammer tenant-wide settings', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dlsbi', text: 'Manage Yammer admins', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2serg', text: 'Configure usage policy', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8etrc', text: 'Manage external network access', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f9jtu', text: 'Monitor keywords', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8gi2h', text: 'Configure security settings', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3ihus', text: 'Export data', type: 'unordered-list-item'}], entityMap: {0: {data: {alt: 'Microsoft 365 admin centers', height: 'auto', src: 'https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'none', alt: 'Microsoft 365 admin center button', height: 'auto', src: 'https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 10: {data: {alt: 'Compliance admin center icon', height: 'auto', src: 'https://i.ibb.co/Jk3LPPL/compliance-icon.png', targetOption: '_blank', url: 'https://compliance.microsoft.com/homepage', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alt: 'Endpoint manager compliance admin center icon', height: 'auto', src: 'https://i.ibb.co/89kQWVH/endpoint-icon.png', targetOption: '_blank', url: 'https://compliance.microsoft.com/homepage', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 12: {data: {alt: 'Endpoint manager compliance admin center icon', height: 'auto', src: 'https://i.ibb.co/89kQWVH/endpoint-icon.png', targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#home', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alt: 'Exchange admin center icon', height: 'auto', src: 'https://i.ibb.co/9VWVrqp/exchange-icon.png', targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#home', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 14: {data: {alt: 'Exchange admin center icon', height: 'auto', src: 'https://i.ibb.co/9VWVrqp/exchange-icon.png', targetOption: '_blank', url: 'https://admin.exchange.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alt: 'Power Automate admin center icon', height: 'auto', src: 'https://i.ibb.co/LnWj2Yb/power-automate-icon.png', targetOption: '_blank', url: 'https://admin.exchange.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 16: {data: {alt: 'Power Automate admin center icon', height: 'auto', src: 'https://i.ibb.co/LnWj2Yb/power-automate-icon.png', targetOption: '_blank', url: 'https://admin.powerplatform.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alt: 'Microsoft 365 Apps Office configuration icon', height: 'auto', src: 'https://i.ibb.co/MpGbXrz/Office-install-icon.png', targetOption: '_blank', url: 'https://admin.powerplatform.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 18: {data: {alt: 'Microsoft 365 Apps Office configuration icon', height: 'auto', src: 'https://i.ibb.co/MpGbXrz/Office-install-icon.png', targetOption: '_blank', url: 'https://config.office.com/officeSettings', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alt: 'Power BI admin center icon', height: 'auto', src: 'https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png', targetOption: '_blank', url: 'https://config.office.com/officeSettings', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {alignment: 'none', alt: 'Microsoft 365 admin center button', height: 'auto', src: 'https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png', targetOption: '_blank', url: 'https://admin.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 20: {data: {alt: 'Power BI admin center icon', height: 'auto', src: 'https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png', targetOption: '_blank', url: 'https://web.microsoftstream.com/admin', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 21: {data: {alt: 'Power BI admin center icon', height: 'auto', src: 'https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png', targetOption: '_blank', url: 'https://app.powerbi.com/admin-portal', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {data: {alt: 'Security center admin center', height: 'auto', src: 'https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png', targetOption: '_blank', url: 'https://app.powerbi.com/admin-portal', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 23: {data: {alt: 'Security center admin center', height: 'auto', src: 'https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png', targetOption: '_blank', url: 'https://protection.office.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 24: {data: {alt: 'SharePoint admin center', height: 'auto', src: 'https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png', targetOption: '_blank', url: 'https://security.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 25: {data: {alt: 'SharePoint admin center', height: 'auto', src: 'https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png', targetOption: '_blank', url: 'https://admin.teams.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 26: {data: {alt: 'Microsoft Teams admin center icon', height: 'auto', src: 'https://i.ibb.co/dGJJV84/Teams-admin-center.png', targetOption: '_blank', url: 'https://admin.teams.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 27: {data: {alt: 'Yammer admin center icon', height: 'auto', src: 'https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png', targetOption: '_blank', url: 'https://admin.teams.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 28: {data: {alt: 'Yammer admin center icon', height: 'auto', src: 'https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {_map: {data: {targetOption: '_blank', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', url: 'https://go.microsoft.com/fwlink/?linkid=848894'}, mutability: 'MUTABLE', type: 'LINK'}, alignment: 'none', alt: 'Azure ATP Icon', height: 'auto', src: 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', targetOption: '_blank', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', url: 'https://admin.microsoft.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {data: {_map: {data: {targetOption: '_blank', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', url: 'https://go.microsoft.com/fwlink/?linkid=848894'}, mutability: 'MUTABLE', type: 'LINK'}, alignment: 'none', alt: 'Azure ATP Icon', height: 'auto', src: 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', targetOption: '_blank', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', url: 'https://go.microsoft.com/fwlink/?linkid=848894', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {_map: {data: {targetOption: '_blank', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', url: 'https://go.microsoft.com/fwlink/?linkid=848894'}, mutability: 'MUTABLE', type: 'LINK'}, alignment: 'left', alt: 'Azure ATP icon', height: 'auto', src: 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', targetOption: '_blank', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', url: 'https://portal.atp.azure.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 6: {data: {alt: 'Azure AD Icon', height: 'auto', src: 'https://i.ibb.co/HK83H6d/Azure-ad-icon.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alt: 'Cloud App Security Icon', height: 'auto', src: 'https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 8: {data: {alt: 'Cloud App Security Icon', height: 'auto', src: 'https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png', targetOption: '_blank', url: 'https://portal.cloudappsecurity.com', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alt: 'Compliance admin center icon', height: 'auto', src: 'https://i.ibb.co/Jk3LPPL/compliance-icon.png', targetOption: '_blank', url: 'https://portal.cloudappsecurity.com', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}}}, datePublished: '2022/5/26', description: 'There\'s a lot of parts to Microsoft 365. From Office, to SharePoint, to compliance. Learn everything you need to know about the Microsoft 365 admin centers.', featuredImage: 'https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png', id: 'bzotoOjEe', images: ['https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png', 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', 'https://i.ibb.co/HK83H6d/Azure-ad-icon.png', 'https://i.ibb.co/Jk3LPPL/compliance-icon.png', 'https://i.ibb.co/89kQWVH/endpoint-icon.png', 'https://i.ibb.co/9VWVrqp/exchange-icon.png', 'https://i.ibb.co/LnWj2Yb/power-automate-icon.png', 'https://i.ibb.co/MpGbXrz/Office-install-icon.png', 'https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png', 'https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png', 'https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png', 'https://i.ibb.co/dGJJV84/Teams-admin-center.png', 'https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png', 'https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png', 'https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png'], publish: true, pushlish: true, sectionId: 'qwJW5VrBW', slug: 'Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe', title: 'Managing the Microsoft 365 tenant - Introduction to the admin centers', type: 'article'},
      nextContentSlug: 'learn/Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
      previousContentSlug: 'learn/Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4',
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
                  <div><p />
                    <img src="https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png" alt="Microsoft 365 admin centers" style="height: auto;width: auto" />
                    <p>Microsoft 365 management is broken down into multiple admin centers. An admin center is a website used to manage part of the tenant. For example, there's an Exchange Online admin center that can help you manage the email portion of your Microsoft 365 tenant. Another SharePoint Online admin center to help manage the SharePoint Online part of your tenant.</p>
                    <p>Here's a list of all the Microsoft 365 admin centers you may need.</p>
                    <div id="ld-7740-2760" /><h2>Microsoft 365 admin center</h2>
                    <p>This is the primary admin center. You can access it by clicking the admin button from <a href="https://portal.office.com" target="_blank" rel="noreferrer">portal.office.com</a> in the left pane.</p>
                    <div ><img src="https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png" alt="Microsoft 365 admin center button" style="height: auto;width: auto" /></div>
                    <p>You can access the admin center directly by going to <a href="https://admin.microsoft.com/" target="_blank" rel="noreferrer">https://admin.microsoft.com/</a>. From the Microsoft 365 admin center, you can create users, and groups, assign licenses, contact Microsoft support, update domain names, view the service health, or access the other admin centers.</p>
                    <p>From the Microsoft 365 admin center, you can access the other admin centers. To access the other admin centers, perform the following:</p>
                    <ol>
                      <li>Click Show all in the left pane.</li>
                      <li>Click All admin centers</li>
                    </ol>
                    <h2>Microsoft Defender for Identity admin center</h2>
                    <div ><img src="https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png" alt="Azure ATP Icon" style="height: auto;width: auto" /></div>
                    <p><span >The Microsoft Defender for Identity admin center can be accessed by going to </span><a href="https://portal.atp.azure.com/" target="_blank" rel="noreferrer"><span >https://portal.atp.azure.com/</span></a><span > and logging in with your admin credentials.</span></p>
                    <p><span >The Defender for Identity admin center is designed for hybrid environments where part of your organization is hosted in on-premises servers and part of your environment is hosted in Microsoft 365. Microsoft Defender collects, analyzes, detects, and alerts you to suspicious activity in your on-premises Active Directory environment. The Defender for Identity admin center is where you can perform the following:</span></p>
                    <ul>
                      <li >View all suspicious activity</li>
                      <li>Protect user credentials stored in Active Directory (AD)</li>
                      <li>Supply a timeline for clear incident information<br />&nbsp;</li>
                    </ul>
                    <h2>Azure Active Directory (AD) admin center</h2>
                    <img src="https://i.ibb.co/HK83H6d/Azure-ad-icon.png" alt="Azure AD Icon" style="height: auto;width: auto" />
                    <p>The Azure Active Directory (AD) admin center can be accessed by going to <a href="https://aad.portal.azure.com/" target="_blank" rel="noreferrer">https://aad.portal.azure.com/</a>. Azure AD is the cloud version of your on-premise AD. It's like on-premise AD on steroids. It's where you can perform the following:</p>
                    <ul>
                      <li>Manage identity including users and groups.</li>
                      <li>Enable multi-factor authentication (MFA)</li>
                      <li>Configure self-service password reset</li>
                      <li>Edit company branding</li>
                      <li>View user sign-ins</li>
                      <li>Configure conditional access policies</li>
                    </ul>
                    <h2>Defender for Cloud Apps admin center</h2>
                    <img src="https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png" alt="Cloud App Security Icon" style="height: auto;width: auto" />
                    <p>The Defender for Cloud Apps admin center can be accessed by going to <a href="https://portal.cloudappsecurity.com" target="_blank" rel="noreferrer">https://portal.cloudappsecurity.com</a>. From the Defender for Cloud Apps admin center, you can manage unsanctioned cloud applications. From the Defender for Cloud Apps admin center you can perform the following:</p>
                    <ul>
                      <li>Discover unauthorized cloud applications being used within your organization</li>
                      <li>Connect and manage authorized apps</li>
                      <li>Configure policies to manage risk</li>
                      <li>View and manage alerts</li>
                    </ul>
                    <h2>Microsoft Purview Compliance admin center</h2>
                    <img src="https://i.ibb.co/Jk3LPPL/compliance-icon.png" alt="Compliance admin center icon" style="height: auto;width: auto" />
                    <p>The Microsoft Purview Compliance admin center, also known as, Puview admin center or Microsoft 365 Compliance admin center, can be accessed by going to <a href="https://compliance.microsoft.com/homepage" target="_blank" rel="noreferrer">https://compliance.microsoft.com/homepage</a>. The Purview admin center is where you can manage the compliance of your tenant. You can classify data, set retention policies, and recover data. From the Purview admin center you can perform the following:</p>
                    <ul>
                      <li>and Create sensitivity and retention labels to retain data for as long as needed.</li>
                      <li>Review intelligent reports to view where labels are being used.</li>
                      <li>Review a detailed view of the classification trends across your tenant.</li>
                    </ul>
                    <h2>Endpoint Manager admin center</h2>
                    <img src="https://i.ibb.co/89kQWVH/endpoint-icon.png" alt="Endpoint manager compliance admin center icon" style="height: auto;width: auto" />
                    <p>The Endpoint manager admin center can be accessed by going to <a href="https://endpoint.microsoft.com/?ref=AdminCenter#home" target="_blank" rel="noreferrer">https://endpoint.microsoft.com/?ref=AdminCenter#home</a>. The Endpoint manager admin center is where you can manage the end-user devices. It's where you can perform the following:</p>
                    <ul>
                      <li>Enroll and configure devices</li>
                      <li>Distribute apps to your devices</li>
                      <li>Monitor and set compliance requirements on devices</li>
                    </ul>
                    <h2>Exchange admin center</h2>
                    <img src="https://i.ibb.co/9VWVrqp/exchange-icon.png" alt="Exchange admin center icon" style="height: auto;width: auto" />
                    <p>The Exchange admin center can be accessed by going to <a href="https://admin.exchange.microsoft.com/" target="_blank" rel="noreferrer">https://admin.exchange.microsoft.com/</a>. The Exchange admin center is where you manage email and everything about email. It's where you can perform the following:</p>
                    <ul>
                      <li>Manage user mailboxes</li>
                      <li>Create and manage shared/resource mailboxes</li>
                      <li>Create mail flow rules</li>
                      <li>Perform message traces</li>
                    </ul>
                    <h2>Power Platform admin center</h2>
                    <img src="https://i.ibb.co/LnWj2Yb/power-automate-icon.png" alt="Power Automate admin center icon" style="height: auto;width: auto" />
                    <p>The Power Platform admin center can be accessed by going to <a href="https://admin.powerplatform.microsoft.com/" target="_blank" rel="noreferrer">https://admin.powerplatform.microsoft.com/</a>. The Power Platform admin center is where you can manage the automation of repetitive tasks. From the Power Platform admin center you can perform the following:</p>
                    <ul>
                      <li>Review Power Automate analytics</li>
                      <li>Review Power Apps analytics</li>
                      <li>Create integrations between on-premise, Power BI, Microsoft Flow, and PowerApps.</li>
                      <li>Manage Dynamics 365 apps</li>
                    </ul>
                    <h2>Microsoft 365 Apps admin center</h2>
                    <img src="https://i.ibb.co/MpGbXrz/Office-install-icon.png" alt="Microsoft 365 Apps Office configuration icon" style="height: auto;width: auto" />
                    <p>The Microsoft 365 Apps admin center can be accessed by going to <a href="https://config.office.com/officeSettings" target="_blank" rel="noreferrer">https://config.office.com/officeSettings</a>. The Microsoft 365 Apps admin center can be used to deploy settings and configurations to users that install the Office suite on their computers. Traditionally, the configuration found in the Microsoft 365 Apps admin center would have been performed via group policy</p>
                    <ul>
                      <li>Deploy Office customization policies</li>
                      <li>Receive and implement security policy recommendations</li>
                      <li>Create an Office Customization to deploy Office with specific configurations</li>
                    </ul>
                    <h2>Microsoft Stream admin center</h2>
                    <p>The Microsoft Stream admin center can be accessed by going to <a href="https://web.microsoftstream.com/admin" target="_blank" rel="noreferrer">https://web.microsoftstream.com/admin</a>. From the Stream admin center, you can configure options for Microsoft Stream. For example, you can limit who can host live events. There are a ton of options in the admin center. Some of which are:</p>
                    <ul>
                      <li>Set Stream admins</li>
                      <li>Manage content on behalf of users</li>
                      <li>Configure live events, comments, and restrict organization-wide channel creation</li>
                    </ul>
                    <h2>Power BI admin center</h2>
                    <img src="https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png" alt="Power BI admin center icon" style="height: auto;width: auto" />
                    <p>The Power BI admin center can be accessed by going to <a href="https://app.powerbi.com/admin-portal" target="_blank" rel="noreferrer">https://app.powerbi.com/admin-portal</a>. The Power BI admin center is used to manage Power BI. From it, you can view usage metrics, and control how users interact with Power BI. From the Power BI admin center you can perform the following:</p>
                    <ul>
                      <li>Configure tenant settings</li>
                      <li>Review usage metrics</li>
                      <li>Configure sensitivity labels</li>
                      <li>Enable Cloud App Security integration</li>
                    </ul>
                    <h2>Microsoft 365 Defender admin center</h2>
                    <img src="https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png" alt="Security center admin center" style="height: auto;width: auto" />
                    <p>The Microsoft 365 Defender admin center can be accessed by going to <a href="https://security.microsoft.com/" target="_blank" rel="noreferrer">https://security.microsoft.com/</a>. The Defender admin center is used to get visibility, investigate, and manage the security of your Microsoft 365 tenant. From it you can perform the following:</p>
                    <ul>
                      <li>Manage and view alerts</li>
                      <li>Launch simulation attacks</li>
                      <li>Investigate threats</li>
                      <li>Configure anti-phishing, anti-spam, attachment, and link policies</li>
                    </ul>
                    <h2>SharePoint admin center</h2>
                    <img src="https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png" alt="SharePoint admin center" style="height: auto;width: auto" />
                    <p>The SharePoint admin center can be accessed by going to the Microsoft 365 admin center &gt; Show all &gt; All admin centers &gt; SharePoint. From the SharePoint admin center, you can manage SharePoint sites and OneDrive sites. You can perform the following:</p>
                    <ul>
                      <li>Create and manage SharePoint sites</li>
                      <li>Configure sharing and access control</li>
                      <li>Manage tenant-wide settings</li>
                      <li>Migrate data to SharePoint</li>
                    </ul>
                    <h2>Microsoft Teams admin center</h2>
                    <img src="https://i.ibb.co/dGJJV84/Teams-admin-center.png" alt="Microsoft Teams admin center icon" style="height: auto;width: auto" />
                    <p>The Teams admin center can be accessed by going to <a href="https://admin.teams.microsoft.com/" target="_blank" rel="noreferrer">https://admin.teams.microsoft.com/</a>. From the Microsoft Teams admin center, you can manage Microsoft Teams. From it, you can configure messaging, conferencing, and external communication options. You can perform the following:</p>
                    <ul>
                      <li>&nbsp;Review relevant information about your Teams deployment</li>
                      <li>View and manage Teams users</li>
                      <li>Manage your Teams</li>
                      <li>Configure organization-wide settings</li>
                    </ul>
                    <h2>Yammer admin center</h2>
                    <img src="https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png" alt="Yammer admin center icon" style="height: auto;width: auto" />
                    <p>The Yammer admin center can be accessed by going to the Microsoft 365 admin center &gt; Show all &gt; All admin centers &gt; Yammer. From the Yammer admin center, you can manage your Yammer network, for example, you can set usage policies and control external network settings. You can also perform the following:</p>
                    <ul>
                      <li>Configure Yammer tenant-wide settings</li>
                      <li>Manage Yammer admins</li>
                      <li>Configure usage policy</li>
                      <li>Manage external network access</li>
                      <li>Monitor keywords</li>
                      <li>Configure security settings</li>
                      <li>Export data</li>
                    </ul>
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
