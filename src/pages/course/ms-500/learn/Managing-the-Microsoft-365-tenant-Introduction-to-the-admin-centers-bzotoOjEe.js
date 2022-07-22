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
      path: '/course/ms-500/learn/Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe',
      article: {article: {entityMap: {0: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Microsoft 365 admin centers', height: 'auto', width: 'auto', targetOption: '_blank', url: 'https://portal.office.com', src: 'https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png'}}, 1: {data: {url: 'https://portal.office.com', targetOption: '_blank', alignment: 'none', alt: 'Microsoft 365 admin center button', height: 'auto', src: 'https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {height: 'auto', alt: 'Microsoft 365 admin center button', width: 'auto', targetOption: '_blank', alignment: 'none', url: 'https://admin.microsoft.com/', src: 'https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 3: {data: {alignment: 'none', _map: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', url: 'https://go.microsoft.com/fwlink/?linkid=848894'}}, targetOption: '_blank', width: 'auto', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', height: 'auto', url: 'https://admin.microsoft.com/', src: 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', alt: 'Azure ATP Icon'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {mutability: 'MUTABLE', data: {targetOption: '_blank', height: 'auto', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', width: 'auto', alignment: 'none', alt: 'Azure ATP Icon', url: 'https://go.microsoft.com/fwlink/?linkid=848894', _map: {data: {url: 'https://go.microsoft.com/fwlink/?linkid=848894', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, src: 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png'}, type: 'IMAGE'}, 5: {mutability: 'MUTABLE', type: 'LINK', data: {title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>', alt: 'Azure ATP icon', width: 'auto', _map: {data: {url: 'https://go.microsoft.com/fwlink/?linkid=848894', targetOption: '_blank', title: '<span data-offset-key="fbuo1-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">https://go.microsoft.com/fwlink/?linkid=848894</span></span>'}, mutability: 'MUTABLE', type: 'LINK'}, alignment: 'left', src: 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', height: 'auto', targetOption: '_blank', url: 'https://go.microsoft.com/fwlink/?linkid=848894'}}, 6: {data: {width: 'auto', alt: 'Azure AD Icon', targetOption: '_blank', height: 'auto', url: 'https://aad.portal.azure.com/', src: 'https://i.ibb.co/HK83H6d/Azure-ad-icon.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 7: {data: {targetOption: '_blank', src: 'https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png', width: 'auto', url: 'https://aad.portal.azure.com/', alt: 'Cloud App Security Icon', height: 'auto'}, type: 'LINK', mutability: 'MUTABLE'}, 8: {type: 'IMAGE', data: {height: 'auto', width: 'auto', url: 'https://portal.cloudappsecurity.com', alt: 'Cloud App Security Icon', targetOption: '_blank', src: 'https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png'}, mutability: 'MUTABLE'}, 9: {data: {src: 'https://i.ibb.co/Jk3LPPL/compliance-icon.png', alt: 'Compliance admin center icon', height: 'auto', width: 'auto', url: 'https://portal.cloudappsecurity.com', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, 10: {type: 'IMAGE', mutability: 'MUTABLE', data: {width: 'auto', url: 'https://compliance.microsoft.com/homepage', height: 'auto', targetOption: '_blank', alt: 'Compliance admin center icon', src: 'https://i.ibb.co/Jk3LPPL/compliance-icon.png'}}, 11: {type: 'LINK', data: {src: 'https://i.ibb.co/89kQWVH/endpoint-icon.png', alt: 'Endpoint manager compliance admin center icon', targetOption: '_blank', height: 'auto', width: 'auto', url: 'https://compliance.microsoft.com/homepage'}, mutability: 'MUTABLE'}, 12: {mutability: 'MUTABLE', data: {width: 'auto', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#home', src: 'https://i.ibb.co/89kQWVH/endpoint-icon.png', alt: 'Endpoint manager compliance admin center icon', targetOption: '_blank', height: 'auto'}, type: 'IMAGE'}, 13: {mutability: 'MUTABLE', type: 'LINK', data: {height: 'auto', width: 'auto', targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#home', src: 'https://i.ibb.co/9VWVrqp/exchange-icon.png', alt: 'Exchange admin center icon'}}, 14: {data: {height: 'auto', targetOption: '_blank', width: 'auto', url: 'https://admin.exchange.microsoft.com/', src: 'https://i.ibb.co/9VWVrqp/exchange-icon.png', alt: 'Exchange admin center icon'}, type: 'IMAGE', mutability: 'MUTABLE'}, 15: {type: 'LINK', mutability: 'MUTABLE', data: {alt: 'Power Automate admin center icon', targetOption: '_blank', url: 'https://admin.exchange.microsoft.com/', height: 'auto', src: 'https://i.ibb.co/LnWj2Yb/power-automate-icon.png', width: 'auto'}}, 16: {mutability: 'MUTABLE', type: 'IMAGE', data: {width: 'auto', src: 'https://i.ibb.co/LnWj2Yb/power-automate-icon.png', alt: 'Power Automate admin center icon', url: 'https://admin.powerplatform.microsoft.com/', height: 'auto', targetOption: '_blank'}}, 17: {type: 'LINK', data: {src: 'https://i.ibb.co/MpGbXrz/Office-install-icon.png', alt: 'Microsoft 365 Apps Office configuration icon', width: 'auto', height: 'auto', targetOption: '_blank', url: 'https://admin.powerplatform.microsoft.com/'}, mutability: 'MUTABLE'}, 18: {data: {height: 'auto', alt: 'Microsoft 365 Apps Office configuration icon', width: 'auto', src: 'https://i.ibb.co/MpGbXrz/Office-install-icon.png', url: 'https://config.office.com/officeSettings', targetOption: '_blank'}, type: 'IMAGE', mutability: 'MUTABLE'}, 19: {mutability: 'MUTABLE', data: {targetOption: '_blank', alt: 'Power BI admin center icon', src: 'https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png', width: 'auto', url: 'https://config.office.com/officeSettings', height: 'auto'}, type: 'LINK'}, 20: {mutability: 'MUTABLE', type: 'LINK', data: {url: 'https://web.microsoftstream.com/admin', targetOption: '_blank', height: 'auto', width: 'auto', src: 'https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png', alt: 'Power BI admin center icon'}}, 21: {data: {width: 'auto', alt: 'Power BI admin center icon', height: 'auto', url: 'https://app.powerbi.com/admin-portal', targetOption: '_blank', src: 'https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {mutability: 'MUTABLE', type: 'LINK', data: {src: 'https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png', height: 'auto', width: 'auto', url: 'https://app.powerbi.com/admin-portal', alt: 'Security center admin center', targetOption: '_blank'}}, 23: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', alt: 'Security center admin center', targetOption: '_blank', src: 'https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png', width: 'auto', url: 'https://protection.office.com/'}}, 24: {data: {width: 'auto', height: 'auto', url: 'https://protection.office.com/', alt: 'SharePoint admin center', src: 'https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, 25: {type: 'IMAGE', mutability: 'MUTABLE', data: {src: 'https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png', alt: 'SharePoint admin center', width: 'auto', height: 'auto', targetOption: '_blank', url: 'https://admin.teams.microsoft.com/'}}, 26: {type: 'IMAGE', mutability: 'MUTABLE', data: {alt: 'Microsoft Teams admin center icon', width: 'auto', src: 'https://i.ibb.co/dGJJV84/Teams-admin-center.png', height: 'auto', targetOption: '_blank', url: 'https://admin.teams.microsoft.com/'}}, 27: {data: {height: 'auto', url: 'https://admin.teams.microsoft.com/', src: 'https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png', targetOption: '_blank', alt: 'Yammer admin center icon', width: 'auto'}, type: 'LINK', mutability: 'MUTABLE'}, 28: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Yammer admin center icon', height: 'auto', width: 'auto', src: 'https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png'}}}, blocks: [{inlineStyleRanges: [], key: '2l8pu', depth: 0, text: '', entityRanges: [], data: {}, type: 'unstyled'}, {data: {}, entityRanges: [{length: 1, key: 0, offset: 0}], type: 'atomic', key: 'ca697', inlineStyleRanges: [], text: ' ', depth: 0}, {inlineStyleRanges: [], depth: 0, entityRanges: [], data: {}, key: 'cq0tv', type: 'unstyled', text: 'Microsoft 365 management is broken down into multiple admin centers. An admin center is a website used to manage part of the tenant. For example, there\'s an Exchange Online admin center that can help you manage the email portion of your Microsoft 365 tenant. Another SharePoint Online admin center to help manage the SharePoint Online part of your tenant.'}, {inlineStyleRanges: [], type: 'unstyled', key: '5odlf', depth: 0, text: 'Here\'s a list of all the Microsoft 365 admin centers you may need.', data: {}, entityRanges: []}, {data: {}, entityRanges: [], type: 'header-two', inlineStyleRanges: [], text: 'Microsoft 365 admin center', key: '43tlt', depth: 0}, {depth: 0, type: 'unstyled', entityRanges: [{key: 1, offset: 86, length: 17}], key: '3oork', text: 'This is the primary admin center. You can access it by clicking the admin button from portal.office.com in the left pane.', data: {}, inlineStyleRanges: []}, {entityRanges: [{key: 2, offset: 0, length: 1}], key: '3mrqa', data: {}, type: 'atomic', text: ' ', inlineStyleRanges: [], depth: 0}, {data: {}, inlineStyleRanges: [], text: 'You can access the admin center directly by going to https://admin.microsoft.com/. From the Microsoft 365 admin center, you can create users, and groups, assign licenses, contact Microsoft support, update domain names, view the service health, or access the other admin centers.', depth: 0, entityRanges: [{length: 28, offset: 53, key: 3}], type: 'unstyled', key: 'a0hke'}, {data: {}, type: 'unstyled', key: 'e92hf', inlineStyleRanges: [], entityRanges: [], text: 'From the Microsoft 365 admin center, you can access the other admin centers. To access the other admin centers, perform the following:', depth: 0}, {key: 'd87jh', inlineStyleRanges: [], text: 'Click Show all in the left pane.', data: {}, depth: 0, type: 'ordered-list-item', entityRanges: []}, {key: '53g3o', inlineStyleRanges: [], data: {}, depth: 0, type: 'ordered-list-item', entityRanges: [], text: 'Click All admin centers'}, {entityRanges: [], text: 'Azure Advanced Threat Protection (ATP) admin center', key: '4n8ms', depth: 0, data: {}, type: 'header-two', inlineStyleRanges: []}, {inlineStyleRanges: [], depth: 0, type: 'atomic', key: '7o6oc', data: {}, entityRanges: [{key: 4, length: 1, offset: 0}], text: ' '}, {key: '8q416', data: {}, entityRanges: [{offset: 55, length: 46, key: 5}], type: 'unstyled', text: 'The Azure ATP admin center can be accessed by going to https://go.microsoft.com/fwlink/?linkid=848894 and logging in with your admin credentials.', depth: 0, inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 145}, {offset: 0, style: 'bgcolor-rgb(255,255,255)', length: 145}, {style: 'fontsize-16', offset: 0, length: 145}, {offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 145}, {length: 46, style: 'color-rgb(13,110,253)', offset: 55}, {offset: 55, length: 46, style: 'UNDERLINE'}]}, {type: 'unstyled', entityRanges: [], data: {}, depth: 0, key: 'b7rb5', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 497}, {length: 497, style: 'bgcolor-rgb(255,255,255)', offset: 0}, {offset: 0, style: 'fontsize-16', length: 497}, {offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 497}], text: 'The Cloud App Security admin center is replacing the Azure ATP admin center, but it\'s still listed so we\'ll review it. The Azure ATP admin center is designed for hybrid environments where part of your organization is hosted in on-premises servers and part of your environment is hosted in Microsoft 365. Azure ATP collects, analyzes, detects, and alerts you to suspicious activity in your on-premises Active Directory environment. The Azure ATP admin center is where you can perform the following:'}, {depth: 0, inlineStyleRanges: [], key: '5bo7b', data: {'text-align': 'start'}, entityRanges: [], type: 'unordered-list-item', text: 'View all suspicious activity'}, {key: 'do7ei', depth: 0, data: {}, inlineStyleRanges: [], type: 'unordered-list-item', text: 'Protect user credentials stored in Active Directory (AD)', entityRanges: []}, {depth: 0, data: {}, entityRanges: [], inlineStyleRanges: [], type: 'unordered-list-item', text: 'Supply a timeline for clear incident information\n ', key: '6lfuf'}, {data: {}, entityRanges: [], type: 'header-two', depth: 0, text: 'Azure Active Directory (AD) admin center', inlineStyleRanges: [], key: 'bg0l1'}, {key: '1dabt', text: ' ', type: 'atomic', data: {}, inlineStyleRanges: [], entityRanges: [{key: 6, length: 1, offset: 0}], depth: 0}, {depth: 0, type: 'unstyled', data: {}, text: 'The Azure Active Directory (AD) admin center can be accessed by going to https://aad.portal.azure.com/. Azure AD is the cloud version of your on-premise AD. It\'s like on-premise AD on steroids. It\'s where you can perform the following:', entityRanges: [{offset: 73, length: 29, key: 7}], inlineStyleRanges: [], key: '733t3'}, {type: 'unordered-list-item', depth: 0, inlineStyleRanges: [], key: '7e9f', data: {}, text: 'Manage identity including users and groups.', entityRanges: []}, {depth: 0, key: 'an3bm', data: {}, text: 'Enable multi-factor authentication (MFA)', inlineStyleRanges: [], entityRanges: [], type: 'unordered-list-item'}, {key: '42bf5', inlineStyleRanges: [], depth: 0, text: 'Configure self-service password reset', type: 'unordered-list-item', entityRanges: [], data: {}}, {entityRanges: [], data: {}, text: 'Edit company branding', type: 'unordered-list-item', key: '8va8u', inlineStyleRanges: [], depth: 0}, {data: {}, key: '1csbh', text: 'View user sign-ins', type: 'unordered-list-item', depth: 0, inlineStyleRanges: [], entityRanges: []}, {type: 'unordered-list-item', depth: 0, key: '60la5', inlineStyleRanges: [], text: 'Configure conditional access policies', entityRanges: [], data: {}}, {inlineStyleRanges: [], depth: 0, text: 'Cloud App Security admin center', entityRanges: [], key: '6gk5v', data: {}, type: 'header-two'}, {entityRanges: [{key: 8, length: 1, offset: 0}], key: '9jk1e', data: {}, depth: 0, text: ' ', type: 'atomic', inlineStyleRanges: []}, {data: {}, depth: 0, type: 'unstyled', key: '8kipa', inlineStyleRanges: [], entityRanges: [{key: 9, offset: 64, length: 35}], text: 'The cloud app security admin center can be accessed by going to https://portal.cloudappsecurity.com. From the cloud app security admin center, you can manage unsanctioned cloud applications. From the Cloud App security admin center you can perform the following:'}, {inlineStyleRanges: [], data: {}, entityRanges: [], type: 'unordered-list-item', depth: 0, text: 'Discover unauthorized cloud applications being used within your organization', key: 'dhpsi'}, {entityRanges: [], depth: 0, text: 'Connect and manage authorized apps', inlineStyleRanges: [], key: '9f0se', type: 'unordered-list-item', data: {}}, {depth: 0, key: '997pr', inlineStyleRanges: [], type: 'unordered-list-item', entityRanges: [], text: 'Configure policies to manage risk', data: {}}, {entityRanges: [], text: 'View and manage alerts', inlineStyleRanges: [], type: 'unordered-list-item', depth: 0, key: 'd35pl', data: {}}, {inlineStyleRanges: [], entityRanges: [], key: '37mv9', data: {}, text: 'Compliance admin center', depth: 0, type: 'header-two'}, {type: 'atomic', entityRanges: [{offset: 0, key: 10, length: 1}], key: '6l8so', inlineStyleRanges: [], depth: 0, data: {}, text: ' '}, {depth: 0, key: 'd2k92', entityRanges: [{length: 41, key: 11, offset: 56}], inlineStyleRanges: [], data: {}, text: 'The compliance admin center can be accessed by going to https://compliance.microsoft.com/homepage. The compliance admin center is where you can manage the compliance of your tenant. You can classify data, set retention policies, and recover data. From the compliance admin center you can perform the following:', type: 'unstyled'}, {inlineStyleRanges: [], depth: 0, type: 'unordered-list-item', key: 'cvaog', data: {}, text: 'Create sensitivity and retention labels to retain data for as long as needed.', entityRanges: []}, {key: 'brc39', data: {}, entityRanges: [], inlineStyleRanges: [], depth: 0, type: 'unordered-list-item', text: 'Review intelligent reports to view where labels are being used.'}, {data: {}, entityRanges: [], inlineStyleRanges: [], key: '9q2ar', text: 'Review a detailed view of the classification trends across your tenant.', type: 'unordered-list-item', depth: 0}, {key: 'cthvk', text: 'Endpoint Manager admin center', inlineStyleRanges: [], type: 'header-two', data: {}, depth: 0, entityRanges: []}, {text: ' ', inlineStyleRanges: [], entityRanges: [{length: 1, key: 12, offset: 0}], depth: 0, data: {}, key: 'fkujl', type: 'atomic'}, {inlineStyleRanges: [], text: 'The Endpoint manager admin center can be accessed by going to https://endpoint.microsoft.com/?ref=AdminCenter#home. The Endpoint manager admin center is where you can manage the end-user devices. It\'s where you can perform the following:', entityRanges: [{offset: 62, key: 13, length: 52}], data: {}, key: 'ber6o', depth: 0, type: 'unstyled'}, {type: 'unordered-list-item', inlineStyleRanges: [], depth: 0, data: {}, key: 'ddlnr', text: 'Enroll and configure devices', entityRanges: []}, {inlineStyleRanges: [], entityRanges: [], data: {}, text: 'Distribute apps to your devices', type: 'unordered-list-item', key: '3b8ok', depth: 0}, {depth: 0, data: {}, text: 'Monitor and set compliance requirements on devices', type: 'unordered-list-item', entityRanges: [], key: 'bue80', inlineStyleRanges: []}, {data: {}, type: 'header-two', inlineStyleRanges: [], text: 'Exchange admin center', entityRanges: [], key: '9hooe', depth: 0}, {data: {}, inlineStyleRanges: [], text: ' ', depth: 0, key: '43fvm', entityRanges: [{key: 14, offset: 0, length: 1}], type: 'atomic'}, {data: {}, text: 'The Exchange admin center can be accessed by going to https://admin.exchange.microsoft.com/. The Exchange admin center is where you manage email and everything about email. It\'s where you can perform the following:', inlineStyleRanges: [], type: 'unstyled', entityRanges: [{length: 37, key: 15, offset: 54}], key: '4laal', depth: 0}, {type: 'unordered-list-item', key: '6a45u', depth: 0, data: {}, inlineStyleRanges: [], text: 'Manage user mailboxes', entityRanges: []}, {inlineStyleRanges: [], entityRanges: [], text: 'Create and manage shared/resource mailboxes', data: {}, key: '8tib9', depth: 0, type: 'unordered-list-item'}, {key: 'bf9eu', depth: 0, type: 'unordered-list-item', inlineStyleRanges: [], text: 'Create mail flow rules', data: {}, entityRanges: []}, {entityRanges: [], key: 'affn1', text: 'Perform message traces', type: 'unordered-list-item', data: {}, inlineStyleRanges: [], depth: 0}, {entityRanges: [], text: 'Power Platform admin center', data: {}, type: 'header-two', inlineStyleRanges: [], depth: 0, key: '8j0na'}, {entityRanges: [{length: 1, key: 16, offset: 0}], depth: 0, type: 'atomic', key: '2srot', inlineStyleRanges: [], data: {}, text: ' '}, {key: 'de7hv', depth: 0, inlineStyleRanges: [], text: 'The Power Platform admin center can be accessed by going to https://admin.powerplatform.microsoft.com/. The Power Platform admin center is where you can manage the automation of repetitive tasks. From the Power Platform admin center you can perform the following:', entityRanges: [{key: 17, offset: 60, length: 42}], data: {}, type: 'unstyled'}, {text: 'Review Power Automate analytics', data: {}, depth: 0, inlineStyleRanges: [], type: 'unordered-list-item', entityRanges: [], key: 'eko58'}, {depth: 0, key: 'bhu1t', type: 'unordered-list-item', entityRanges: [], data: {}, inlineStyleRanges: [], text: 'Review Power Apps analytics'}, {entityRanges: [], type: 'unordered-list-item', text: 'Create integrations between on-premise, Power BI, Microsoft Flow, and PowerApps.', depth: 0, inlineStyleRanges: [], data: {}, key: '6j3ol'}, {text: 'Manage Dynamics 365 apps', entityRanges: [], type: 'unordered-list-item', data: {}, key: '39st2', depth: 0, inlineStyleRanges: []}, {inlineStyleRanges: [], text: 'Microsoft 365 Apps admin center', entityRanges: [], data: {}, key: '2ib2o', type: 'header-two', depth: 0}, {data: {}, text: ' ', key: '6fdpj', depth: 0, type: 'atomic', entityRanges: [{length: 1, key: 18, offset: 0}], inlineStyleRanges: []}, {entityRanges: [{offset: 64, key: 19, length: 40}], text: 'The Microsoft 365 Apps admin center can be accessed by going to https://config.office.com/officeSettings. The Microsoft 365 Apps admin center can be used to deploy settings and configurations to users that install the Office suite on their computers. Traditionally, the configuration found in the Microsoft 365 Apps admin center would have been performed via group policy', type: 'unstyled', depth: 0, data: {}, key: 'fen7v', inlineStyleRanges: []}, {inlineStyleRanges: [], key: '9ur51', entityRanges: [], depth: 0, text: 'Deploy Office customization policies', data: {}, type: 'unordered-list-item'}, {key: 'fi7pf', entityRanges: [], depth: 0, inlineStyleRanges: [], data: {}, text: 'Receive and implement security policy recommendations', type: 'unordered-list-item'}, {key: '5uah2', text: 'Create an Office Customization to deploy Office with specific configurations', data: {}, entityRanges: [], depth: 0, inlineStyleRanges: [], type: 'unordered-list-item'}, {entityRanges: [], key: 'e4or', data: {}, inlineStyleRanges: [], depth: 0, text: 'Microsoft Stream admin center', type: 'header-two'}, {entityRanges: [{key: 20, offset: 62, length: 37}], data: {}, text: 'The Microsoft Stream admin center can be accessed by going to https://web.microsoftstream.com/admin. From the Stream admin center, you can configure options for Microsoft Stream. For example, you can limit who can host live events. There are a ton of options in the admin center. Some of which are:', key: '44rac', depth: 0, inlineStyleRanges: [], type: 'unstyled'}, {depth: 0, type: 'unordered-list-item', inlineStyleRanges: [], data: {}, text: 'Set Stream admins', key: 'bqvam', entityRanges: []}, {key: '6na0q', inlineStyleRanges: [], depth: 0, text: 'Manage content on behalf of users', entityRanges: [], data: {}, type: 'unordered-list-item'}, {type: 'unordered-list-item', text: 'Configure live events, comments, and restrict organization-wide channel creation', key: 'dlfeg', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {}}, {key: '7i08p', entityRanges: [], data: {}, inlineStyleRanges: [], depth: 0, type: 'header-two', text: 'Power BI admin center'}, {key: '8m6k7', data: {}, depth: 0, inlineStyleRanges: [], type: 'atomic', entityRanges: [{length: 1, offset: 0, key: 21}], text: ' '}, {text: 'The Power BI admin center can be accessed by going to https://app.powerbi.com/admin-portal. The Power BI admin center is used to manage Power BI. From it, you can view usage metrics, and control how users interact with Power BI. From the Power BI admin center you can perform the following:', data: {}, entityRanges: [{key: 22, length: 36, offset: 54}], key: '2ifee', inlineStyleRanges: [], type: 'unstyled', depth: 0}, {key: '9dovk', depth: 0, type: 'unordered-list-item', entityRanges: [], inlineStyleRanges: [], text: 'Configure tenant settings', data: {}}, {inlineStyleRanges: [], key: '3acdp', entityRanges: [], depth: 0, data: {}, type: 'unordered-list-item', text: 'Review usage metrics'}, {entityRanges: [], text: 'Configure sensitivity labels', key: '5qmjj', depth: 0, inlineStyleRanges: [], type: 'unordered-list-item', data: {}}, {depth: 0, text: 'Enable Cloud App Security integration', key: 'cs71h', data: {}, type: 'unordered-list-item', inlineStyleRanges: [], entityRanges: []}, {text: 'Security admin center', data: {}, inlineStyleRanges: [], depth: 0, entityRanges: [], key: 'bh6lu', type: 'header-two'}, {text: ' ', depth: 0, data: {}, entityRanges: [{offset: 0, key: 23, length: 1}], type: 'atomic', key: '2ffkg', inlineStyleRanges: []}, {type: 'unstyled', inlineStyleRanges: [], entityRanges: [{offset: 54, length: 30, key: 24}], key: 'b3u6f', data: {}, text: 'The Security admin center can be accessed by going to https://protection.office.com/. The Security admin center is used to get visibility, investigate, and manage the security of your Microsoft 365 tenant. From it you can perform the following:', depth: 0}, {inlineStyleRanges: [], data: {}, text: 'Manage and view alerts', depth: 0, entityRanges: [], key: 'b96n9', type: 'unordered-list-item'}, {entityRanges: [], text: 'Launch simulation attacks', type: 'unordered-list-item', key: 'c7u41', inlineStyleRanges: [], data: {}, depth: 0}, {entityRanges: [], inlineStyleRanges: [], key: '63r9a', depth: 0, text: 'Investigate threats', data: {}, type: 'unordered-list-item'}, {inlineStyleRanges: [], data: {}, depth: 0, key: '20j8t', text: 'Configure anti-phishing, anti-spam, attachment, and link policies', entityRanges: [], type: 'unordered-list-item'}, {depth: 0, key: '54l9u', entityRanges: [], text: 'SharePoint admin center', type: 'header-two', data: {}, inlineStyleRanges: []}, {depth: 0, inlineStyleRanges: [], type: 'atomic', entityRanges: [{length: 1, key: 25, offset: 0}], key: 'ee12c', text: ' ', data: {}}, {key: 'e0k8e', type: 'unstyled', inlineStyleRanges: [], data: {}, depth: 0, text: 'The SharePoint admin center can be accessed by going to the Microsoft 365 admin center > Show all > All admin centers > SharePoint. From the SharePoint admin center, you can manage SharePoint sites and OneDrive sites. You can perform the following:', entityRanges: []}, {inlineStyleRanges: [], entityRanges: [], key: 'cdmmb', data: {}, depth: 0, type: 'unordered-list-item', text: 'Create and manage SharePoint sites'}, {entityRanges: [], text: 'Configure sharing and access control', inlineStyleRanges: [], type: 'unordered-list-item', key: '4hgru', depth: 0, data: {}}, {data: {}, type: 'unordered-list-item', entityRanges: [], text: 'Manage tenant-wide settings', inlineStyleRanges: [], depth: 0, key: '79k6f'}, {inlineStyleRanges: [], entityRanges: [], key: '6jf3c', data: {}, text: 'Migrate data to SharePoint', depth: 0, type: 'unordered-list-item'}, {type: 'header-two', text: 'Microsoft Teams admin center', inlineStyleRanges: [], data: {}, entityRanges: [], key: '1ueoc', depth: 0}, {entityRanges: [{key: 26, length: 1, offset: 0}], text: ' ', inlineStyleRanges: [], depth: 0, data: {}, key: '5ifnr', type: 'atomic'}, {text: 'The Teams admin center can be accessed by going to https://admin.teams.microsoft.com/. From the Microsoft Teams admin center, you can manage Microsoft Teams. From it, you can configure messaging, conferencing, and external communication options. You can perform the following:', depth: 0, key: '6pfao', data: {}, inlineStyleRanges: [], type: 'unstyled', entityRanges: [{length: 34, offset: 51, key: 27}]}, {inlineStyleRanges: [], text: ' Review relevant information about your Teams deployment', depth: 0, data: {}, type: 'unordered-list-item', entityRanges: [], key: 'evq1k'}, {entityRanges: [], data: {}, type: 'unordered-list-item', text: 'View and manage Teams users', inlineStyleRanges: [], key: 'hihu', depth: 0}, {inlineStyleRanges: [], entityRanges: [], text: 'Manage your Teams', depth: 0, data: {}, type: 'unordered-list-item', key: '9hdmg'}, {depth: 0, data: {}, entityRanges: [], inlineStyleRanges: [], key: '92h8a', type: 'unordered-list-item', text: 'Configure organization-wide settings'}, {type: 'header-two', depth: 0, entityRanges: [], text: 'Yammer admin center', inlineStyleRanges: [], key: '5hpmt', data: {}}, {entityRanges: [{key: 28, length: 1, offset: 0}], data: {}, key: 'fvf0j', text: ' ', type: 'atomic', depth: 0, inlineStyleRanges: []}, {text: 'The Yammer admin center can be accessed by going to the Microsoft 365 admin center > Show all > All admin centers > Yammer. From the Yammer admin center, you can manage your Yammer network, for example, you can set usage policies and control external network settings. You can also perform the following:', entityRanges: [], key: '6er9g', type: 'unstyled', depth: 0, inlineStyleRanges: [], data: {}}, {inlineStyleRanges: [], entityRanges: [], key: 'd7lg2', text: 'Configure Yammer tenant-wide settings', type: 'unordered-list-item', depth: 0, data: {}}, {key: 'dlsbi', depth: 0, text: 'Manage Yammer admins', data: {}, entityRanges: [], inlineStyleRanges: [], type: 'unordered-list-item'}, {text: 'Configure usage policy', type: 'unordered-list-item', inlineStyleRanges: [], data: {}, key: '2serg', depth: 0, entityRanges: []}, {entityRanges: [], depth: 0, data: {}, key: '8etrc', text: 'Manage external network access', type: 'unordered-list-item', inlineStyleRanges: []}, {inlineStyleRanges: [], type: 'unordered-list-item', key: 'f9jtu', text: 'Monitor keywords', depth: 0, entityRanges: [], data: {}}, {depth: 0, data: {}, key: '8gi2h', text: 'Configure security settings', type: 'unordered-list-item', entityRanges: [], inlineStyleRanges: []}, {key: '3ihus', type: 'unordered-list-item', text: 'Export data', data: {}, depth: 0, entityRanges: [], inlineStyleRanges: []}]}, slug: 'Managing-the-Microsoft-365-tenant-Introduction-to-the-admin-centers-bzotoOjEe', publish: true, pushlish: true, type: 'article', featuredImage: 'https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png', datePublished: '2022/5/26', sectionId: 'qwJW5VrBW', images: ['https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png', 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', 'https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png', 'https://i.ibb.co/HK83H6d/Azure-ad-icon.png', 'https://i.ibb.co/Jk3LPPL/compliance-icon.png', 'https://i.ibb.co/89kQWVH/endpoint-icon.png', 'https://i.ibb.co/9VWVrqp/exchange-icon.png', 'https://i.ibb.co/LnWj2Yb/power-automate-icon.png', 'https://i.ibb.co/MpGbXrz/Office-install-icon.png', 'https://i.ibb.co/r6J58w1/Power-Bi-Admin-Center.png', 'https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png', 'https://i.ibb.co/M2C4Jmh/sharepoint-admin-center-icon.png', 'https://i.ibb.co/dGJJV84/Teams-admin-center.png', 'https://i.ibb.co/zsz8HC5/Yammer-admin-center-icon.png', 'https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png', 'https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png'], id: 'bzotoOjEe', title: 'Managing the Microsoft 365 tenant - Introduction to the admin centers', description: 'Everything you need to know about the portal office admin centers'},
      nextContentSlug: 'Managing-Microsoft-365-through-PowerShell-cg_vxOX9L',
      previousContentSlug: 'Creating-a-free-Microsoft-365-tenant-for-practice-KKkBOVuS4',
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
                <div><p />
                  <img src="https://i.ibb.co/f1cr4zt/Microsoft-365-admin-centers.png" alt="Microsoft 365 admin centers" style="height: auto;width: auto" />
                  <p>Microsoft 365 management is broken down into multiple admin centers. An admin center is a website used to manage part of the tenant. For example, there's an Exchange Online admin center that can help you manage the email portion of your Microsoft 365 tenant. Another SharePoint Online admin center to help manage the SharePoint Online part of your tenant.</p>
                  <p>Here's a list of all the Microsoft 365 admin centers you may need.</p>
                  <h2>Microsoft 365 admin center</h2>
                  <p>This is the primary admin center. You can access it by clicking the admin button from <a href="https://portal.office.com" target="_blank" rel="noreferrer">portal.office.com</a> in the left pane.</p>
                  <div ><img src="https://i.ibb.co/9W1SvwJ/microsoft-365-admin-center.png" alt="Microsoft 365 admin center button" style="height: auto;width: auto" /></div>
                  <p>You can access the admin center directly by going to <a href="https://admin.microsoft.com/" target="_blank" rel="noreferrer">https://admin.microsoft.com/</a>. From the Microsoft 365 admin center, you can create users, and groups, assign licenses, contact Microsoft support, update domain names, view the service health, or access the other admin centers.</p>
                  <p>From the Microsoft 365 admin center, you can access the other admin centers. To access the other admin centers, perform the following:</p>
                  <ol>
                    <li>Click Show all in the left pane.</li>
                    <li>Click All admin centers</li>
                  </ol>
                  <h2>Azure Advanced Threat Protection (ATP) admin center</h2>
                  <div ><img src="https://i.ibb.co/6sMqT1z/Azure-ATP-Icon.png" alt="Azure ATP Icon" style="height: auto;width: auto" /></div>
                  <p><span >The Azure ATP admin center can be accessed by going to </span><a href="https://go.microsoft.com/fwlink/?linkid=848894" target="_blank" rel="noreferrer"><span ><ins>https://go.microsoft.com/fwlink/?linkid=848894</ins></span></a><span > and logging in with your admin credentials.</span></p>
                  <p><span >The Cloud App Security admin center is replacing the Azure ATP admin center, but it's still listed so we'll review it. The Azure ATP admin center is designed for hybrid environments where part of your organization is hosted in on-premises servers and part of your environment is hosted in Microsoft 365. Azure ATP collects, analyzes, detects, and alerts you to suspicious activity in your on-premises Active Directory environment. The Azure ATP admin center is where you can perform the following:</span></p>
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
                  <h2>Cloud App Security admin center</h2>
                  <img src="https://i.ibb.co/hDbLPmR/Cloud-App-Security-admin-center-icon.png" alt="Cloud App Security Icon" style="height: auto;width: auto" />
                  <p>The cloud app security admin center can be accessed by going to <a href="https://portal.cloudappsecurity.com" target="_blank" rel="noreferrer">https://portal.cloudappsecurity.com</a>. From the cloud app security admin center, you can manage unsanctioned cloud applications. From the Cloud App security admin center you can perform the following:</p>
                  <ul>
                    <li>Discover unauthorized cloud applications being used within your organization</li>
                    <li>Connect and manage authorized apps</li>
                    <li>Configure policies to manage risk</li>
                    <li>View and manage alerts</li>
                  </ul>
                  <h2>Compliance admin center</h2>
                  <img src="https://i.ibb.co/Jk3LPPL/compliance-icon.png" alt="Compliance admin center icon" style="height: auto;width: auto" />
                  <p>The compliance admin center can be accessed by going to <a href="https://compliance.microsoft.com/homepage" target="_blank" rel="noreferrer">https://compliance.microsoft.com/homepage</a>. The compliance admin center is where you can manage the compliance of your tenant. You can classify data, set retention policies, and recover data. From the compliance admin center you can perform the following:</p>
                  <ul>
                    <li>Create sensitivity and retention labels to retain data for as long as needed.</li>
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
                  <h2>Security admin center</h2>
                  <img src="https://i.ibb.co/sHYV6Mz/security-admin-center-icon.png" alt="Security center admin center" style="height: auto;width: auto" />
                  <p>The Security admin center can be accessed by going to <a href="https://protection.office.com/" target="_blank" rel="noreferrer">https://protection.office.com/</a>. The Security admin center is used to get visibility, investigate, and manage the security of your Microsoft 365 tenant. From it you can perform the following:</p>
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
