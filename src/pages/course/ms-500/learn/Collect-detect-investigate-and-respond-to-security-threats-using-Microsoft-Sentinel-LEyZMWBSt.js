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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ed0a2', text: 'What is Microsoft Sentinel?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9d5vf', text: 'Microsoft Sentinel is a scalable cloud-based security information and event management (SIEM). It\'s also a security orchestration, automation, and response (SOAR) solution. So what does that mean?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '29qeu', text: 'The easiest way to understand Microsoft Sentinel is to break down its capabilities.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7vjtb', text: 'Collect data across all users, applications, devices, and infrastructure hardware for on-premises devices and cloud apps.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4l70n', text: 'Detect previously undetected threats, and reduce false positives. Hunt for suspicious activity and Investigate threats using AI.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7or9u', text: 'Respond to incidents with automation and orchestration.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1lefu', text: 'In short, it collects, detects, investigates, and responds to threats across your organization. I think it\'s probably even easier to understand by setting it up and getting started.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '50o4o', text: 'What licenses are required for Microsoft Sentinel?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 4, offset: 93}, {key: 1, length: 4, offset: 152}], inlineStyleRanges: [], key: 'fvk5q', text: 'Microsoft Sentinel requires a pay-as-you-use license to Microsoft Azure. Pricing can be seen here. You can also sign up for a free $200 credit by going here.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7ragr', text: 'What roles/permissions are available and required?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fkjq4', text: 'First, the global admin has full access to create a Microsoft Sentinel workspace.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 0, style: 'BOLD'}], key: '8vof1', text: 'Owner: Grants full access to manage all resources, including the ability to assign roles in Azure RBAC. This is the role that\'s received when you set up the workspace.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 41, offset: 0, style: 'BOLD'}], key: '39neb', text: 'Microsoft Sentinel Automation Contributor: Allows Microsoft Sentinel to add playbooks to automation rules. It is not meant for user accounts.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 0, style: 'BOLD'}], key: '67nco', text: 'Reader: View all resources but cannot make any changes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 33, offset: 0, style: 'BOLD'}], key: '2s5rp', text: 'Managed Application Operator Role: Lets you manage  the managed application resources', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 0, style: 'BOLD'}], key: '4k6fk', text: 'Contributor: Can perform everything the owner can except they can\'t assign roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 0, style: 'BOLD'}], key: '8fogc', text: 'Logic App contributor: This allows you to manage logic apps including playbooks and incidents.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c69o8', text: 'Enable Microsoft Sentinel', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 18, offset: 108}], inlineStyleRanges: [], key: 'dg16u', text: '1. Open the Azure admin center (note, not the Azure AD admin center) > Search for Microsoft Sentinel. Click Microsoft Sentinel.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 25, offset: 9, style: 'BOLD'}], key: 'qvt2', text: '2. Click Create Microsoft Sentinel.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '764t2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 9, style: 'BOLD'}], key: 'a9bd4', text: '3. Click Create a new workspace.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b010r', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 9, style: 'BOLD'}, {length: 8, offset: 37, style: 'BOLD'}, {length: 2, offset: 53, style: 'BOLD'}], key: '74v4c', text: '4. Click Create new. Set the name to Sentinel. Click OK.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '70ni9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 28, style: 'BOLD'}, {length: 15, offset: 53, style: 'BOLD'}], key: '1bb5a', text: '5. Set the instance name to Sentinel-Instance. Click Review + Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e414s', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}], key: 'a100p', text: '6. Click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 13, style: 'BOLD'}, {length: 3, offset: 38, style: 'BOLD'}], key: '30rjv', text: '7. Click the Sentinel-Instance. Click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fcu8c', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dojjp', text: 'Connect Microsoft Sentinel to data sources', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6tb7j', text: 'Next, we\'ll need to connect Microsoft Sentinel to a data source. In short, this means Microsft Sentinel will ingest the data from the service or app. Sometimes, you\'ll need to install an agent, for example, to monitor computers/servers. In Microsoft 365 case all we need to do is set up the connector.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '292fc', text: 'How to connect Office 365 with Microsoft Sentinal', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 9, style: 'BOLD'}, {length: 18, offset: 35, style: 'BOLD'}, {length: 18, offset: 66, style: 'BOLD'}, {length: 15, offset: 92, style: 'BOLD'}, {length: 10, offset: 120, style: 'BOLD'}, {length: 9, offset: 148, style: 'BOLD'}, {length: 19, offset: 165, style: 'BOLD'}], key: '77p83', text: '1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Data connectors. Search for Office 365 and click on the connector. Click Open connector page.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cp3nt', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 9, style: 'BOLD'}, {length: 10, offset: 19, style: 'BOLD'}, {length: 5, offset: 35, style: 'BOLD'}, {length: 13, offset: 59, style: 'BOLD'}], key: 'acqbe', text: '2. Click Exchange, SharePoint, and Teams checkboxes. Click Apply Changes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: 'lral', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dnq6t', text: 'How to connect Azure Active Directory with Microsoft Sentinal', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 208, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 208, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 208, offset: 0, style: 'fontsize-16'}, {length: 208, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 18, offset: 9, style: 'BOLD'}, {length: 18, offset: 35, style: 'BOLD'}, {length: 18, offset: 66, style: 'BOLD'}, {length: 15, offset: 92, style: 'BOLD'}, {length: 22, offset: 120, style: 'BOLD'}, {length: 9, offset: 160, style: 'BOLD'}, {length: 20, offset: 181, style: 'BOLD'}], key: '28jbv', text: '1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Data connectors. Search for Azure Active Directory and click on the connector. Click the Open connector page button.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'd7otq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 55, style: 'BOLD'}], key: '4ciqc', text: '2. Click all the checkboxes under Configuration. Click Apply Changes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ef40l', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1f7qd', text: 'Enable diagnostic settings', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'auriu', text: 'Next, we\'ll enable the diagnostic settings to send the logs to Microsoft Sentinel.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 28, offset: 9, style: 'BOLD'}, {length: 8, offset: 51, style: 'BOLD'}, {length: 8, offset: 67, style: 'BOLD'}, {length: 10, offset: 77, style: 'BOLD'}, {length: 8, offset: 88, style: 'BOLD'}], key: 'eepio', text: '1. Go to Microsoft Azure admin center > search for monitor > Click Monitor > Diagnostic settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ega1u', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 14, style: 'BOLD'}, {length: 22, offset: 31, style: 'BOLD'}], key: '3upqf', text: '2. Click your workspace. Click Add diagnostic setting.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '8m8pq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 9, style: 'BOLD'}, {length: 7, offset: 17, style: 'BOLD'}, {length: 11, offset: 27, style: 'BOLD'}, {length: 31, offset: 40, style: 'BOLD'}, {length: 19, offset: 89, style: 'BOLD'}, {length: 4, offset: 116, style: 'BOLD'}], key: 'eji9', text: '3. Click audit > allLogs > AllMetrics > Send to Log Analytics workspace. Set the name to Diagnostic settings. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bhq86', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3pc2f', text: 'How to integrate Microsoft Defender for Cloud Apps', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5af44', text: 'So now we have connected a couple of pieces of Microsoft 365 but what about Microsoft Defender for Cloud Apps? To manage incidents based on alerts generated by Microsoft Cloud App Security we\'ll need to create a security extension in Microsoft Defender for Cloud Apps.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 40, offset: 12}], inlineStyleRanges: [{length: 40, offset: 12, style: 'BOLD'}, {length: 9, offset: 64, style: 'BOLD'}, {length: 18, offset: 109, style: 'BOLD'}], key: 'd29mr', text: '1. Open the Microsoft Defender for Cloud Apps portal. Click the settings gear in the top right corner. Click Security Extension.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '23p', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}, {length: 14, offset: 23, style: 'BOLD'}, {length: 14, offset: 40, style: 'BOLD'}], key: 'bos6i', text: '2. Click SIEM agents > Add SIEM agent > Azure Sentinel.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: 'r4po', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}, {length: 5, offset: 16, style: 'BOLD'}], key: 'd42jj', text: '3. Click Next > Close.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2jev1', text: 'How to create a rule', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3p75s', text: 'Rules are created to turn raw data into alerts and incidents. In short, they are used to detect threats and create alerts.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 210, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 210, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 210, offset: 0, style: 'fontsize-16'}, {length: 210, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 18, offset: 9, style: 'BOLD'}, {length: 18, offset: 35, style: 'BOLD'}, {length: 18, offset: 66, style: 'BOLD'}, {length: 10, offset: 92, style: 'BOLD'}, {length: 14, offset: 104, style: 'BOLD'}, {length: 36, offset: 159, style: 'BOLD'}, {length: 11, offset: 198, style: 'BOLD'}], key: 'bcj07', text: '1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Analytics > Rule templates > Search for Advanced Multistage. Click Advanced Multistage Attack Detection > Create rule.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: '21clp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 9, style: 'BOLD'}, {length: 12, offset: 36, style: 'BOLD'}, {length: 6, offset: 51, style: 'BOLD'}], key: 'k1h8', text: '2. Click Next: Automated response > Next: Review > Create', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6tc4o', text: 'How to create a workbook', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '74r7i', text: 'Workbooks are like dashboards. They will show you your data in different graphs and ways. Let\'s create one now.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 114, offset: 3, style: 'color-rgb(33,37,41)'}, {length: 114, offset: 3, style: 'bgcolor-rgb(255,255,255)'}, {length: 114, offset: 3, style: 'fontsize-16'}, {length: 114, offset: 3, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 18, offset: 9, style: 'BOLD'}, {length: 18, offset: 35, style: 'BOLD'}, {length: 18, offset: 66, style: 'BOLD'}, {length: 9, offset: 92, style: 'BOLD'}, {length: 12, offset: 104, style: 'BOLD'}], key: '96t8r', text: '1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Workbooks > Add workbook.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 1, offset: 0}], inlineStyleRanges: [], key: '5hvse', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 92, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 92, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 92, offset: 0, style: 'fontsize-16'}, {length: 92, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 4, offset: 9, style: 'BOLD'}, {length: 23, offset: 56, style: 'BOLD'}, {length: 4, offset: 87, style: 'BOLD'}], key: '586ma', text: '2. Click Save (the floppy disk icon) > Enter a title of Azure Sign in and usage. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 1, offset: 0}], inlineStyleRanges: [], key: '4nu8f', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ckr9o', text: 'How to view a workbook', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '77c76', text: 'Now let\'s open the workbook so you know how to view it when you want to come back to it.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 165, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 165, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 165, offset: 0, style: 'fontsize-16'}, {length: 165, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 18, offset: 9, style: 'BOLD'}, {length: 18, offset: 35, style: 'BOLD'}, {length: 18, offset: 66, style: 'BOLD'}, {length: 9, offset: 92, style: 'BOLD'}, {length: 12, offset: 104, style: 'BOLD'}, {length: 23, offset: 119, style: 'BOLD'}, {length: 19, offset: 145, style: 'BOLD'}], key: 'fce10', text: '1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Click Workbooks > My workbooks > Azure Sign in and usage > View saved workbook.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 1, offset: 0}], inlineStyleRanges: [], key: 'famk6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f2fnn', text: 'There are a number of template workbooks you can use too. Why not try to set up one now?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'avp0a', text: 'How to create a playbook', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eeg0u', text: 'Playbooks are like Power Automate flows. They have a trigger and then a set of actions that happen when the trigger is initiated. Before we can create the playbook let\'s set up for it first.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 170, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 170, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 170, offset: 0, style: 'fontsize-16'}, {length: 170, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 18, offset: 9, style: 'BOLD'}, {length: 18, offset: 35, style: 'BOLD'}, {length: 18, offset: 66, style: 'BOLD'}, {length: 11, offset: 86, style: 'BOLD'}, {length: 28, offset: 98, style: 'BOLD'}, {length: 22, offset: 129, style: 'BOLD'}, {length: 15, offset: 154, style: 'BOLD'}], key: '720an', text: '1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance. Automation >Playbook templates (Preview) > Block AAD user - Alert > Create playbook.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 1, offset: 0}], inlineStyleRanges: [], key: '8k3lu', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 9, style: 'BOLD'}, {length: 23, offset: 29, style: 'BOLD'}, {length: 31, offset: 55, style: 'BOLD'}], key: '4vtnt', text: '2. Click Next: Connections > Next: Review and create > Create and continue to designer.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 16, offset: 49, style: 'BOLD'}, {length: 25, offset: 88, style: 'BOLD'}, {length: 7, offset: 115, style: 'BOLD'}, {length: 22, offset: 154, style: 'BOLD'}], key: 'd4rss', text: '3. Click each action in the playbook looking for yellow triangles. Once found click the exclamation in the circle. Sign in to your Microsoft 365 account. Accept the permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 1, offset: 0}], inlineStyleRanges: [], key: '61so2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}], key: 'elrl0', text: '4. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 16, offset: 30, style: 'BOLD'}, {length: 40, offset: 54, style: 'BOLD'}, {length: 17, offset: 102, style: 'BOLD'}], key: '4im45', text: '2. Enter the playbook name of Email-on-sign-in. Click Enable diagnostics logs in Log Analytics. Click Next: Connections.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 24, length: 1, offset: 0}], inlineStyleRanges: [], key: '2897m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 23, offset: 9, style: 'BOLD'}, {length: 31, offset: 35, style: 'BOLD'}], key: 'oqu4', text: '3. Click Next: Review and create > Create and continue to designer.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '41rt', text: '4. Set a condition', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '91isn', text: '5. Under true click Add an action.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 37, offset: 10, style: 'BOLD'}, {length: 18, offset: 74, style: 'BOLD'}], key: '7saur', text: '6. Enter "Send an email (V2) Office 365 Outlook" in the search box. Click Send an email (V2).', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 25, length: 1, offset: 0}], inlineStyleRanges: [], key: '8e24i', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 9, style: 'BOLD'}], key: 'dp4b8', text: '7. Click Sign in. In the box that opens sign in to your account.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 26, length: 1, offset: 0}], inlineStyleRanges: [], key: '1m6cg', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '890t3', text: 'How to review the logs', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8cqnk', text: 'Microsoft Sentinel gathers logs and then allows you to search through the logs using Kusto Query Language (KQL), Let\'s check out one of the built-in queries.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 139, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 139, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 139, offset: 0, style: 'fontsize-16'}, {length: 139, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 18, offset: 9, style: 'BOLD'}, {length: 18, offset: 35, style: 'BOLD'}, {length: 18, offset: 66, style: 'BOLD'}, {length: 4, offset: 87, style: 'BOLD'}, {length: 20, offset: 104, style: 'BOLD'}, {length: 3, offset: 135, style: 'BOLD'}], key: 'bha63', text: '1. Go to Microsoft Sentinel in the Azure admin center. Click your workspace instance > Logs. Search for All SiginLogs events and click Run.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 27, length: 1, offset: 0}], inlineStyleRanges: [], key: 'efqpc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cqlbi', text: 'Parts of Microsoft Sentinel', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4f9j8', text: 'Workspace', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd80i5', text: 'Workspaces are like tenants. You can use one workspace to store everything or you can break down your Microsoft Sentinel deployment with multiple workspaces.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5h6n8', text: 'Data connectors', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ap4dv', text: 'Data connectors allow you to ingest data into Microsoft sentinel. Some sources simply require enabling it in Microsoft Sentinel, for example, Office 365 and Azure Active Directory. Other sources require a little more setup but it\'s still doable.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7g61n', text: 'Log retention and querying', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '55kve', text: 'After the logs are ingested into Microsoft Sentinel, the data is stored in Log Analytics where you can use Kusto Query Language (KQL) to parse and find the data you need.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cpi2d', text: 'Workbooks', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1is31', text: 'Workbooks are like dashboards. They are built on your log data and the KQL queries to view your data. Microsoft has a number of workbooks built-in to Microsoft Sentinel.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8n7oe', text: 'Playbook', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9p8qs', text: 'Playbooks are a trigger with a set of rules that allow you to automatically respond to threats. A basic playbook would be "When alert X is created then send an email"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'v0if', text: 'Analytic Rules', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6col', text: 'Rules help you get notified when something suspicious happens. They turn the raw data into alerts and incidents', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1iiub', text: 'Alerts', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1i0t4', text: 'Alerts are the basis for incidents. They indicate that someone or something attempted to perform a malicious or suspicious event. One or more alerts will generate incidents', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7hh5m', text: 'Incidents', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '163pt', text: 'Microsoft Sentinel will group related alerts, assets, and other information into incidents that you can assign and work on.', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://azure.microsoft.com/en-us/pricing/details/microsoft-sentinel/'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {targetOption: '_blank', url: 'https://azure.microsoft.com/en-us/free/'}, mutability: 'MUTABLE', type: 'LINK'}, 10: {data: {alignment: 'none', alt: 'Microsoft Sentinel Azure AD Data connector', height: 'auto', src: 'https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Configure Azure AD data connector', height: 'auto', src: 'https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Open diagnostic settings', height: 'auto', src: 'https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png', targetOption: '_blank', url: 'https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.EventHub%2Fnamespaces', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Add diagnostic setting', height: 'auto', src: 'https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Create diagnostic settings', height: 'auto', src: 'https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'left', alt: 'Add workbook to Microsoft Sentinel', height: 'auto', src: 'https://i.ibb.co/qN9XsKj/Add-Workbook.png', targetOption: '_blank', url: 'https://go.microsoft.com/fwlink/?linkid=2058038', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 16: {data: {alignment: 'none', alt: 'Open Security Extensions', height: 'auto', src: 'https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Add SIEM agent Microsoft Sentinel', height: 'auto', src: 'https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'none', alt: 'Create Microsoft Sentinel rule', height: 'auto', src: 'https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alignment: 'none', alt: 'Add workbook to Microsoft Sentinel', height: 'auto', src: 'https://i.ibb.co/qN9XsKj/Add-Workbook.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {targetOption: '_blank', url: 'https://portal.azure.com/?quickstart=true#blade/HubsExtension/BrowseResource/resourceType/microsoft.securityinsightsarg%2Fsentinel'}, mutability: 'MUTABLE', type: 'LINK'}, 20: {data: {alignment: 'none', alt: 'Save your new workbook', height: 'auto', src: 'https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 21: {data: {alignment: 'none', alt: 'View saved workbook', height: 'auto', src: 'https://i.ibb.co/ssNQGdy/View-saved-workbook.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {data: {alignment: 'none', alt: 'Create a playbook', height: 'auto', src: 'https://i.ibb.co/LCT6PrC/Create-a-playbook.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 23: {data: {alignment: 'none', alt: 'Setup the connections', height: 'auto', src: 'https://i.ibb.co/bNDYmjx/Setup-connections.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 24: {data: {alignment: 'none', alt: 'Create a playbook: Basic Settings', height: 'auto', src: 'https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 25: {data: {alignment: 'none', alt: 'Send an email (V2) Office 365 Outlook', height: 'auto', src: 'https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 26: {data: {alignment: 'none', alt: 'Sign in to Office 365 Outlook', height: 'auto', src: 'https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 27: {data: {alignment: 'none', alt: 'View Microsoft Sentinel Logs', height: 'auto', src: 'https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 28: {data: {alignment: 'left', alt: 'Sign in to Office 365 Outlook', height: 'auto', src: 'https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Create Microsoft Sentinel', height: 'auto', src: 'https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Create a new workspace', height: 'auto', src: 'https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Resource group', height: 'auto', src: 'https://i.ibb.co/S6Bz6JQ/resource-group.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Set the instance name and click Create', height: 'auto', src: 'https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Add Microsoft Sentinel to a workspace', height: 'auto', src: 'https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Microsoft Sentinel | Data connectors', height: 'auto', src: 'https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Configure Office 365 data connector', height: 'auto', src: 'https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Microsoft Sentinel is Microsoft\'s cloud-based SIEM. It can be used to collect, detect, investigate, and respond to threats to your environment.', featuredImage: 'https://i.ibb.co/qN9XsKj/Add-Workbook.png', id: 'LEyZMWBSt', images: ['https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png', 'https://i.ibb.co/VHk7YHx/Create-a-new-workspace.png', 'https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png', 'https://i.ibb.co/S6Bz6JQ/resource-group.png', 'https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png', 'https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png', 'https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png', 'https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png', 'https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png', 'https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png', 'https://i.ibb.co/qN9XsKj/Add-Workbook.png', 'https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png', 'https://i.ibb.co/ssNQGdy/View-saved-workbook.png', 'https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png', 'https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png', 'https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png', 'https://i.ibb.co/GcnPkd9/Create-a-named-location.png', 'https://i.ibb.co/pbsXGDq/Create-a-playbook-from-a-template.png', 'https://i.ibb.co/pbsXGDq/Create-a-playbook-from-a-template.png', 'https://i.ibb.co/HG2Ghpd/Create-a-playbook.png', 'https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png', 'https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png', 'https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png', 'https://i.ibb.co/LCT6PrC/Create-a-playbook.png', 'https://i.ibb.co/bNDYmjx/Setup-connections.png', 'https://i.ibb.co/nm1Ldvw/open-event-hubs.png', 'https://i.ibb.co/99YcTZC/create-event-hubs-namespace.png', 'https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png', 'https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png', 'https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png', 'https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png'], publish: true, sectionId: 'QScYfSu74', slug: 'Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt', title: 'Collect, detect, investigate, and respond to security threats using Microsoft Sentinel', type: 'article'},
      nextContentSlug: 'learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1',
      previousContentSlug: 'test/microsoft-defender-1hidrpsrl',
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
                  <div><div id="ld-7740-2760" /><h2>What is Microsoft Sentinel?</h2>
                    <p>Microsoft Sentinel is a scalable cloud-based security information and event management (SIEM). It's also a security orchestration, automation, and response (SOAR) solution. So what does that mean?</p>
                    <p>The easiest way to understand Microsoft Sentinel is to break down its capabilities.</p>
                    <ul>
                      <li>Collect data across all users, applications, devices, and infrastructure hardware for on-premises devices and cloud apps.</li>
                      <li>Detect previously undetected threats, and reduce false positives. Hunt for suspicious activity and Investigate threats using AI.</li>
                      <li>Respond to incidents with automation and orchestration.</li>
                    </ul>
                    <p>In short, it collects, detects, investigates, and responds to threats across your organization. I think it's probably even easier to understand by setting it up and getting started.</p>
                    <h2>What licenses are required for Microsoft Sentinel?</h2>
                    <p>Microsoft Sentinel requires a pay-as-you-use license to Microsoft Azure. Pricing can be seen <a href="https://azure.microsoft.com/en-us/pricing/details/microsoft-sentinel/" target="_blank" rel="noreferrer">here</a>. You can also sign up for a free $200 credit by going <a href="https://azure.microsoft.com/en-us/free/" target="_blank" rel="noreferrer">here</a>.</p>
                    <h2>What roles/permissions are available and required?</h2>
                    <p>First, the global admin has full access to create a Microsoft Sentinel workspace.</p>
                    <p><strong>Owner</strong>: Grants full access to manage all resources, including the ability to assign roles in Azure RBAC. This is the role that's received when you set up the workspace.</p>
                    <p><strong>Microsoft Sentinel Automation Contributor</strong>: Allows Microsoft Sentinel to add playbooks to automation rules. It is not meant for user accounts.</p>
                    <p><strong>Reader</strong>: View all resources but cannot make any changes.</p>
                    <p><strong>Managed Application Operator Role</strong>: Lets you manage  the managed application resources</p>
                    <p><strong>Contributor</strong>: Can perform everything the owner can except they can't assign roles.</p>
                    <p><strong>Logic App contributor</strong>: This allows you to manage logic apps including playbooks and incidents.</p>
                    <h2>Enable Microsoft Sentinel</h2>
                    <p>1. Open the Azure admin center (note, not the Azure AD admin center) &gt; Search for Microsoft Sentinel. Click <a href="https://portal.azure.com/?quickstart=true#blade/HubsExtension/BrowseResource/resourceType/microsoft.securityinsightsarg%2Fsentinel" target="_blank" rel="noreferrer">Microsoft Sentinel</a>.</p>
                    <p>2. Click <strong>Create Microsoft Sentinel</strong>.</p>
                    <div ><img src="https://i.ibb.co/Jpv7RWG/Create-Microsoft-Sentinel.png" alt="Create Microsoft Sentinel" height="auto" width="auto" /></div>
                    <p>3. Click <strong>Create a new workspace</strong>.</p>
                    <div ><img src="https://i.ibb.co/2NQ77Jm/Create-a-new-workspace.png" alt="Create a new workspace" height="auto" width="auto" /></div>
                    <p>4. Click <strong>Create new</strong>. Set the name to <strong>Sentinel</strong>. Click <strong>OK</strong>.</p>
                    <div ><img src="https://i.ibb.co/S6Bz6JQ/resource-group.png" alt="Resource group" height="auto" width="auto" /></div>
                    <p>5. Set the instance name to <strong>Sentinel-Instance</strong>. Click <strong>Review + Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/W57XtNB/Set-the-instance-name-and-click-Create.png" alt="Set the instance name and click Create" height="auto" width="auto" /></div>
                    <p>6. Click <strong>Create</strong>.</p>
                    <p>7. Click the <strong>Sentinel-Instance</strong>. Click <strong>Add</strong>.</p>
                    <div ><img src="https://i.ibb.co/84btgtP/Add-sentinel-to-a-workspace.png" alt="Add Microsoft Sentinel to a workspace" height="auto" width="auto" /></div>
                    <h2>Connect Microsoft Sentinel to data sources</h2>
                    <p>Next, we'll need to connect Microsoft Sentinel to a data source. In short, this means Microsft Sentinel will ingest the data from the service or app. Sometimes, you'll need to install an agent, for example, to monitor computers/servers. In Microsoft 365 case all we need to do is set up the connector.</p>
                    <h3>How to connect Office 365 with Microsoft Sentinal</h3>
                    <p>1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Data connectors</strong>. Search for <strong>Office 365</strong> and click on the <strong>connector</strong>. Click <strong>Open connector page</strong>.</p>
                    <div ><img src="https://i.ibb.co/NmbWCnR/Microsoft-Sentinel-Office-365-Data-connector.png" alt="Microsoft Sentinel | Data connectors" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Exchange</strong>, <strong>SharePoint</strong>, and <strong>Teams</strong> checkboxes. Click <strong>Apply Changes</strong>.</p>
                    <div ><img src="https://i.ibb.co/TcTDchS/Configure-Office-365-data-connector.png" alt="Configure Office 365 data connector" height="auto" width="auto" /></div>
                    <h3>How to connect Azure Active Directory with Microsoft Sentinal</h3>
                    <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Data connectors</strong>. Search for <strong>Azure Active Directory</strong> and click on the <strong>connector</strong>. Click the <strong>Open connector page </strong>button.</span></p>
                    <div ><img src="https://i.ibb.co/7nbczX9/Microsoft-Sentinel-Azure-AD-Data-connector.png" alt="Microsoft Sentinel Azure AD Data connector" height="auto" width="auto" /></div>
                    <p>2. Click all the checkboxes under Configuration. Click <strong>Apply Changes</strong>.</p>
                    <div ><img src="https://i.ibb.co/177NHcx/Configure-Azure-AD-data-connector.png" alt="Configure Azure AD data connector" height="auto" width="auto" /></div>
                    <h2>Enable diagnostic settings</h2>
                    <p>Next, we'll enable the diagnostic settings to send the logs to Microsoft Sentinel.</p>
                    <p>1. Go to <strong>Microsoft Azure admin center</strong> &gt; search for <strong>monitor </strong>&gt; Click <strong>Monitor </strong>&gt; <strong>Diagnostic</strong> <strong>settings</strong>.</p>
                    <div ><img src="https://i.ibb.co/cv0Ld6t/open-diagnostic-settings.png" alt="Open diagnostic settings" height="auto" width="auto" /></div>
                    <p>2. Click your <strong>workspace</strong>. Click <strong>Add diagnostic setting</strong>.</p>
                    <div ><img src="https://i.ibb.co/Qfmk0dH/Add-diagnostic-setting.png" alt="Add diagnostic setting" height="auto" width="auto" /></div>
                    <p>3. Click <strong>audit </strong>&gt; <strong>allLogs</strong> &gt; <strong>AllMetrics </strong>&gt; <strong>Send to Log Analytics workspace</strong>. Set the name to <strong>Diagnostic settings</strong>. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/zZrV7Vj/Create-diagnostic-settings.png" alt="Create diagnostic settings" height="auto" width="auto" /></div>
                    <h2>How to integrate Microsoft Defender for Cloud Apps</h2>
                    <p>So now we have connected a couple of pieces of Microsoft 365 but what about Microsoft Defender for Cloud Apps? To manage incidents based on alerts generated by Microsoft Cloud App Security we'll need to create a security extension in Microsoft Defender for Cloud Apps.</p>
                    <p>1. Open the <a href="https://go.microsoft.com/fwlink/?linkid=2058038" target="_blank" rel="noreferrer"><strong>Microsoft Defender for Cloud Apps portal</strong></a>. Click the <strong>settings </strong>gear in the top right corner. Click <strong>Security Extension</strong>.</p>
                    <div ><img src="https://i.ibb.co/rGhcRPT/Open-Security-Extensions.png" alt="Open Security Extensions" height="auto" width="auto" /></div>
                    <p>2. Click <strong>SIEM agents</strong> &gt; <strong>Add SIEM agent</strong> &gt; <strong>Azure Sentinel</strong>.</p>
                    <div ><img src="https://i.ibb.co/j3GHGvz/Add-SIEM-agent-Microsoft-Sentinel.png" alt="Add SIEM agent Microsoft Sentinel" height="auto" width="auto" /></div>
                    <p>3. Click <strong>Next </strong>&gt; <strong>Close</strong>.</p>
                    <h2>How to create a rule</h2>
                    <p>Rules are created to turn raw data into alerts and incidents. In short, they are used to detect threats and create alerts.</p>
                    <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Analytics </strong>&gt; <strong>Rule templates</strong> &gt; Search for Advanced Multistage. Click <strong>Advanced Multistage Attack Detection</strong> &gt; <strong>Create rule</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/ZdMXtWM/Create-Microsoft-Sentinel-rule.png" alt="Create Microsoft Sentinel rule" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Next: Automated response</strong> &gt; <strong>Next: Review</strong> &gt; <strong>Create</strong></p>
                    <h2>How to create a workbook</h2>
                    <p>Workbooks are like dashboards. They will show you your data in different graphs and ways. Let's create one now.</p>
                    <p>1. <span >Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Workbooks</strong> &gt; <strong>Add workbook</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/qN9XsKj/Add-Workbook.png" alt="Add workbook to Microsoft Sentinel" height="auto" width="auto" /></div>
                    <p><span >2. Click <strong>Save</strong> (the floppy disk icon) &gt; Enter a title of <strong>Azure Sign in and usage</strong>. Click <strong>Save</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/hmwQPVW/Save-your-new-workbook.png" alt="Save your new workbook" height="auto" width="auto" /></div>
                    <h2>How to view a workbook</h2>
                    <p>Now let's open the workbook so you know how to view it when you want to come back to it.</p>
                    <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. Click <strong>Workbooks</strong> &gt; <strong>My workbooks</strong> &gt; <strong>Azure Sign in and usage</strong> &gt; <strong>View saved workbook</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/ssNQGdy/View-saved-workbook.png" alt="View saved workbook" height="auto" width="auto" /></div>
                    <p>There are a number of template workbooks you can use too. Why not try to set up one now?</p>
                    <h2>How to create a playbook</h2>
                    <p>Playbooks are like Power Automate flows. They have a trigger and then a set of actions that happen when the trigger is initiated. Before we can create the playbook let's set up for it first.</p>
                    <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong>. <strong>Automation </strong>&gt;<strong>Playbook templates (Preview)</strong> &gt; <strong>Block AAD user - Alert</strong> &gt; <strong>Create playbook</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/LCT6PrC/Create-a-playbook.png" alt="Create a playbook" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Next: Connections</strong> &gt; <strong>Next: Review and create</strong> &gt; <strong>Create and continue to designer</strong>.</p>
                    <p>3. Click each action in the playbook looking for <strong>yellow triangles</strong>. Once found click the <strong>exclamation in the circle</strong>. <strong>Sign in</strong> to your Microsoft 365 account. <strong>Accept the permissions</strong>.</p>
                    <div ><img src="https://i.ibb.co/bNDYmjx/Setup-connections.png" alt="Setup the connections" height="auto" width="auto" /></div>
                    <p>4. Click <strong>Save</strong>.</p>
                    <p>2. Enter the playbook name of <strong>Email-on-sign-in</strong>. Click <strong>Enable diagnostics logs in Log Analytics</strong>. Click <strong>Next: Connections</strong>.</p>
                    <div ><img src="https://i.ibb.co/xDnBWSx/Create-a-playbook-basic-settings.png" alt="Create a playbook: Basic Settings" height="auto" width="auto" /></div>
                    <p>3. Click <strong>Next: Review and create</strong> &gt; <strong>Create and continue to designer</strong>.</p>
                    <p>4. Set a condition</p>
                    <p>5. Under true click Add an action.</p>
                    <p>6. Enter "<strong>Send an email (V2) Office 365 Outlook</strong>" in the search box. Click <strong>Send an email (V2)</strong>.</p>
                    <div ><img src="https://i.ibb.co/H2dDH2V/Send-an-email-V2-Office-365-Outlook.png" alt="Send an email (V2) Office 365 Outlook" height="auto" width="auto" /></div>
                    <p>7. Click <strong>Sign in</strong>. In the box that opens sign in to your account.</p>
                    <div ><img src="https://i.ibb.co/rFXc9Tf/Sign-in-Office-365-Outlook.png" alt="Sign in to Office 365 Outlook" height="auto" width="auto" /></div>
                    <h2>How to review the logs</h2>
                    <p>Microsoft Sentinel gathers logs and then allows you to search through the logs using Kusto Query Language (KQL), Let's check out one of the built-in queries.</p>
                    <p><span >1. Go to <strong>Microsoft Sentinel</strong> in the <strong>Azure admin center</strong>. Click your <strong>workspace instance</strong> &gt; <strong>Logs</strong>. Search for <strong>All SiginLogs events</strong> and click <strong>Run</strong>.</span></p>
                    <div ><img src="https://i.ibb.co/jfjXBqq/View-Microsoft-Sentinel-Logs.png" alt="View Microsoft Sentinel Logs" height="auto" width="auto" /></div>
                    <h2>Parts of Microsoft Sentinel</h2>
                    <h3>Workspace</h3>
                    <p>Workspaces are like tenants. You can use one workspace to store everything or you can break down your Microsoft Sentinel deployment with multiple workspaces.</p>
                    <h3>Data connectors</h3>
                    <p>Data connectors allow you to ingest data into Microsoft sentinel. Some sources simply require enabling it in Microsoft Sentinel, for example, Office 365 and Azure Active Directory. Other sources require a little more setup but it's still doable.</p>
                    <h3>Log retention and querying</h3>
                    <p>After the logs are ingested into Microsoft Sentinel, the data is stored in Log Analytics where you can use Kusto Query Language (KQL) to parse and find the data you need.</p>
                    <h3>Workbooks</h3>
                    <p>Workbooks are like dashboards. They are built on your log data and the KQL queries to view your data. Microsoft has a number of workbooks built-in to Microsoft Sentinel.</p>
                    <h3>Playbook</h3>
                    <p>Playbooks are a trigger with a set of rules that allow you to automatically respond to threats. A basic playbook would be "When alert X is created then send an email"</p>
                    <h3>Analytic Rules</h3>
                    <p>Rules help you get notified when something suspicious happens. They turn the raw data into alerts and incidents</p>
                    <h3>Alerts</h3>
                    <p>Alerts are the basis for incidents. They indicate that someone or something attempted to perform a malicious or suspicious event. One or more alerts will generate incidents</p>
                    <h3>Incidents</h3>
                    <p>Microsoft Sentinel will group related alerts, assets, and other information into incidents that you can assign and work on.</p>
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
