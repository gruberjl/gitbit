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
      path: '/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV',
      article: {"id":"S1hQgFOMV","images":["https://i.ibb.co/ySVxbWK/new-microsoft-365-group.png","https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png","https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png","https://i.ibb.co/104HV6d/create-a-distribution-group.png","https://i.ibb.co/104HV6d/create-a-distribution-group.png","https://i.ibb.co/bbX5gBD/create-a-security-group.png","https://i.ibb.co/zQJ9x1M/name-your-new-group.png","https://i.ibb.co/zQJ9x1M/name-your-new-group.png","https://i.ibb.co/nLrY8x6/new-group-email-address.png","https://i.ibb.co/xM6DN61/create-distribution-group.png","https://i.ibb.co/TTf23Bz/create-security-group.png","https://i.ibb.co/4frD0dC/manage-distribution-group.png","https://i.ibb.co/YhY7R2R/manage-members-of-distribution-group.png","https://i.ibb.co/5n13V6V/add-members-to-group.png","https://i.ibb.co/FmHL7tG/add-members-to-the-group.png","https://i.ibb.co/wR07Y6n/create-group-in-outlook.png","https://i.ibb.co/TkpzRv9/add-members-to-outlook-group.png","https://i.ibb.co/xMzW2hd/azure-ad-groups.png","https://i.ibb.co/LzXYCTW/azure-ad-new-group.png","https://i.ibb.co/Kq64m2j/New-dynamic-group.png","https://i.ibb.co/JBzmGBQ/dyanmic-membership-rules.png","https://i.ibb.co/3RtXhW7/access-review-settings.png","https://i.ibb.co/3RtXhW7/access-review-settings.png","https://i.ibb.co/DMZz1sY/Access-review-reviews2.png","https://i.ibb.co/ggzVL3L/access-review-review-type2.png","https://i.ibb.co/vP17HPH/Azure-AD-Identity-Governance.png","https://i.ibb.co/bXKkwKH/new-access-review.png","https://i.ibb.co/ZSKQgj7/naming-policy-navigation.png","https://i.ibb.co/FD4vJbd/configure-group-naming-policy.png","https://i.ibb.co/cxPHf87/set-group-expiration.png"],"type":"article","description":"Everything you need to know about groups in Microsoft 365 to pass the MS-500","article":{"entityMap":{"0":{"type":"LINK","data":{"url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard","targetOption":"_blank"},"mutability":"MUTABLE"},"1":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Add a group to Microsoft 365","src":"https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png","height":"auto","targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups","width":"auto","alignment":"none"}},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","alignment":"none","src":"https://i.ibb.co/104HV6d/create-a-distribution-group.png","alt":"create a distribution group","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups","targetOption":"_blank"}},"3":{"mutability":"MUTABLE","data":{"alignment":"none","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups","height":"auto","alt":"Name your new Microsoft 365 group","width":"auto","src":"https://i.ibb.co/zQJ9x1M/name-your-new-group.png","targetOption":"_blank"},"type":"IMAGE"},"4":{"mutability":"MUTABLE","data":{"alt":"New group email address","targetOption":"_blank","alignment":"none","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups","src":"https://i.ibb.co/nLrY8x6/new-group-email-address.png","width":"auto","height":"auto"},"type":"IMAGE"},"5":{"data":{"height":"auto","width":"auto","src":"https://i.ibb.co/xM6DN61/create-distribution-group.png","alt":"create distribution group","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups","targetOption":"_blank","alignment":"none"},"mutability":"MUTABLE","type":"IMAGE"},"6":{"type":"LINK","data":{"height":"auto","src":"https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png","alt":"Add a group to Microsoft 365","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups","targetOption":"_blank","alignment":"left","width":"auto"},"mutability":"MUTABLE"},"7":{"type":"IMAGE","mutability":"MUTABLE","data":{"url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard","alt":"manage distribution group","src":"https://i.ibb.co/4frD0dC/manage-distribution-group.png","width":"auto","alignment":"none","height":"auto","targetOption":"_blank"}},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","height":"auto","targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard","alt":"manage members of distribution group","alignment":"none","src":"https://i.ibb.co/YhY7R2R/manage-members-of-distribution-group.png"}},"9":{"data":{"alignment":"none","width":"auto","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard","height":"auto","alt":"add members to group","src":"https://i.ibb.co/5n13V6V/add-members-to-group.png","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"10":{"type":"IMAGE","data":{"alignment":"none","height":"auto","alt":"Add members to the group","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard","width":"auto","targetOption":"_blank","src":"https://i.ibb.co/FmHL7tG/add-members-to-the-group.png"},"mutability":"MUTABLE"},"11":{"mutability":"MUTABLE","type":"LINK","data":{"src":"https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png","alignment":"left","height":"auto","alt":"Add a group to Microsoft 365","targetOption":"_blank","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard","width":"auto"}},"12":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png","url":"https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93","width":"auto","alt":"Add a group to Microsoft 365","alignment":"none","targetOption":"_blank","height":"auto"},"type":"IMAGE"},"13":{"type":"IMAGE","data":{"height":"auto","alt":"Create a security group","targetOption":"_blank","alignment":"none","url":"https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93","src":"https://i.ibb.co/bbX5gBD/create-a-security-group.png","width":"auto"},"mutability":"MUTABLE"},"14":{"data":{"alt":"Name your new Microsoft 365 group","targetOption":"_blank","alignment":"none","url":"https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93","height":"auto","src":"https://i.ibb.co/zQJ9x1M/name-your-new-group.png","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"15":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/TTf23Bz/create-security-group.png","width":"auto","height":"auto","url":"https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93","alt":"Create security group","targetOption":"_blank","alignment":"none"},"type":"IMAGE"},"16":{"data":{"url":"https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93","alt":"Create a new Microsoft 365 group in Outlook","alignment":"none","height":"auto","width":"auto","src":"https://i.ibb.co/ySVxbWK/new-microsoft-365-group.png","targetOption":"_blank"},"mutability":"MUTABLE","type":"IMAGE"},"17":{"data":{"width":"auto","src":"https://i.ibb.co/wR07Y6n/create-group-in-outlook.png","alt":"Create Microsoft 365 group in Outlook","alignment":"none","height":"auto","targetOption":"_blank","url":"https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93"},"mutability":"MUTABLE","type":"IMAGE"},"18":{"mutability":"MUTABLE","type":"IMAGE","data":{"src":"https://i.ibb.co/TkpzRv9/add-members-to-outlook-group.png","url":"https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93","targetOption":"_blank","width":"auto","height":"auto","alignment":"none","alt":"Add members to outlook group"}},"19":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93"}},"20":{"data":{"targetOption":"_blank","url":"https://support.office.com/en-us/article/create-a-group-in-outlook-04d0c9cf-6864-423c-a380-4fa858f27102"},"mutability":"MUTABLE","type":"LINK"},"21":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://support.office.com/en-us/article/create-a-team-site-in-sharepoint-online-ef10c1e7-15f3-42a3-98aa-b5972711777d","targetOption":"_blank"}},"22":{"data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/dynamics365/customer-engagement/admin/deploy-office-365-groups"},"type":"LINK","mutability":"MUTABLE"},"23":{"data":{"url":"https://docs.microsoft.com/en-us/microsoftteams/office-365-groups","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"24":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://support.office.com/en-us/article/create-a-group-in-yammer-b407af4f-9a58-4b12-b43e-afbb1b07c889","targetOption":"_blank"}},"25":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","alignment":"none","width":"auto","alt":"Azure AD Groups","src":"https://i.ibb.co/xMzW2hd/azure-ad-groups.png"}},"26":{"type":"IMAGE","data":{"alt":"Azure AD New Group","src":"https://i.ibb.co/LzXYCTW/azure-ad-new-group.png","height":"auto","width":"auto","alignment":"none"},"mutability":"MUTABLE"},"27":{"mutability":"MUTABLE","data":{"alignment":"none","height":"auto","width":"auto","src":"https://i.ibb.co/Kq64m2j/New-dynamic-group.png","alt":"Create a new dynamic group"},"type":"IMAGE"},"28":{"data":{"alignment":"none","alt":"Dynamic membership rules","src":"https://i.ibb.co/JBzmGBQ/dyanmic-membership-rules.png","height":"auto","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"29":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"Azure AD Identity Governance","width":"auto","height":"auto","src":"https://i.ibb.co/vP17HPH/Azure-AD-Identity-Governance.png"}},"30":{"data":{"alt":"new access review","height":"auto","width":"auto","src":"https://i.ibb.co/bXKkwKH/new-access-review.png","alignment":"none"},"mutability":"MUTABLE","type":"IMAGE"},"31":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","alt":"Create new access review Review Type page","alignment":"none","height":"auto","src":"https://i.ibb.co/ggzVL3L/access-review-review-type2.png"}},"32":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/DMZz1sY/Access-review-reviews2.png","alignment":"none","height":"auto","width":"auto","alt":"New access review reviews page"}},"33":{"data":{"src":"https://i.ibb.co/3RtXhW7/access-review-settings.png","alignment":"none","height":"auto","width":"auto","alt":"Set the access review settings"},"type":"IMAGE","mutability":"MUTABLE"},"34":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","src":"https://i.ibb.co/ZSKQgj7/naming-policy-navigation.png","alignment":"none","width":"auto","alt":"Azure AD Groups Navigation"}},"35":{"data":{"src":"https://i.ibb.co/FD4vJbd/configure-group-naming-policy.png","alt":"Configure group naming policy","height":"auto","width":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"36":{"data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/Lifecycle"},"type":"LINK","mutability":"MUTABLE"},"37":{"data":{"height":"auto","src":"https://i.ibb.co/cxPHf87/set-group-expiration.png","width":"auto","alignment":"none","alt":"set group expiration"},"type":"IMAGE","mutability":"MUTABLE"}},"blocks":[{"inlineStyleRanges":[],"data":{},"text":"re are four types of groups in Microsoft 365: distribution, security groups, mail-enabled security, and Microsoft 365. Let’s dive right into the types of groups.","entityRanges":[],"key":"c5n98","depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"type":"header-two","key":"aumor","text":"Distribution groups","entityRanges":[],"depth":0,"data":{}},{"depth":0,"type":"unstyled","data":{},"entityRanges":[],"text":"Distribution groups also known as distribution lists will create an email address and distribute the emails to all the members of the group. Distribution groups do not have separate mailboxes. The emails land in the members of the distribution lists mailboxes. You can add anyone with a mailbox inside your organization and you can add mail contacts to distribution groups.","key":"1kejj","inlineStyleRanges":[]},{"key":"58njk","inlineStyleRanges":[],"data":{},"type":"header-three","entityRanges":[],"depth":0,"text":"Create a distribution group in Microsoft 365"},{"entityRanges":[{"length":11,"offset":93,"key":0}],"depth":0,"key":"f6298","data":{},"inlineStyleRanges":[{"style":"BOLD","length":26,"offset":13},{"offset":42,"length":14,"style":"BOLD"},{"style":"BOLD","offset":59,"length":21},{"offset":93,"style":"BOLD","length":11}],"text":"1. Go to the Microsoft 365 admin center > Teams & groups > Active teams & groups. Then click Add a group.","type":"unstyled"},{"depth":0,"type":"atomic","key":"51c8t","entityRanges":[{"offset":0,"length":1,"key":1}],"data":{},"text":" ","inlineStyleRanges":[]},{"type":"unstyled","text":"2. Click Distribution > Next.","data":{},"entityRanges":[],"inlineStyleRanges":[{"length":13,"style":"BOLD","offset":9},{"offset":24,"style":"BOLD","length":4}],"key":"esc8l","depth":0},{"entityRanges":[{"key":2,"length":1,"offset":0}],"type":"atomic","inlineStyleRanges":[],"data":{},"key":"d6iis","text":" ","depth":0},{"data":{},"text":"3. Name the group. Optionally add a description. Click Next.","inlineStyleRanges":[{"offset":55,"style":"BOLD","length":4}],"depth":0,"type":"unstyled","entityRanges":[],"key":"b10d5"},{"entityRanges":[{"length":1,"offset":0,"key":3}],"depth":0,"key":"5i5d5","text":" ","data":{},"type":"atomic","inlineStyleRanges":[]},{"entityRanges":[],"depth":0,"text":"4. Set the group email address. Optionally click Allow people outside of my organization to send email to this Distribution group. Click Next.","inlineStyleRanges":[{"length":80,"offset":49,"style":"BOLD"},{"offset":137,"style":"BOLD","length":4}],"data":{},"type":"unstyled","key":"rvlu"},{"entityRanges":[{"key":4,"length":1,"offset":0}],"text":" ","inlineStyleRanges":[],"type":"atomic","data":{},"key":"34ttb","depth":0},{"inlineStyleRanges":[{"style":"BOLD","length":12,"offset":9}],"text":"5. Click Create group.","data":{},"entityRanges":[],"type":"unstyled","key":"aolgn","depth":0},{"text":" ","entityRanges":[{"key":5,"length":1,"offset":0}],"key":"do4ob","inlineStyleRanges":[],"data":{},"depth":0,"type":"atomic"},{"text":"Add members to the distribution group","type":"header-three","depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"d6k6a","data":{}},{"key":"bif90","type":"unstyled","data":{},"inlineStyleRanges":[],"depth":0,"text":"You’ll notice you can’t add members to the group while creating the group. To add members, you’ll need to go to the group and manage the members.","entityRanges":[]},{"depth":0,"entityRanges":[{"length":21,"offset":59,"key":6}],"type":"unstyled","key":"8es99","inlineStyleRanges":[{"offset":13,"length":26,"style":"BOLD"},{"length":14,"offset":42,"style":"BOLD"},{"style":"BOLD","length":21,"offset":59},{"style":"BOLD","offset":83,"length":17}],"data":{},"text":"1. Go to the Microsoft 365 admin center > Teams & groups > Active teams & groups > Distribution List.  Then click the group you want to manage."},{"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":7,"offset":0}],"text":" ","data":{},"type":"atomic","key":"47djl","depth":0},{"text":"2. Click Members > View all and manage members.","key":"cipo0","entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"offset":9,"length":7,"style":"BOLD"},{"length":27,"offset":19,"style":"BOLD"}],"depth":0,"data":{}},{"key":"3h8ih","depth":0,"entityRanges":[{"key":8,"offset":0,"length":1}],"data":{},"inlineStyleRanges":[],"type":"atomic","text":" "},{"entityRanges":[],"text":"3. Click Add members.","key":"4eb4q","inlineStyleRanges":[{"style":"BOLD","length":11,"offset":9}],"type":"unstyled","data":{},"depth":0},{"key":"8p6sk","depth":0,"type":"atomic","data":{},"inlineStyleRanges":[],"entityRanges":[{"key":9,"offset":0,"length":1}],"text":" "},{"key":"9mcv2","type":"unstyled","data":{},"text":"4. Select the users you want to add to the group. Then click Add.","entityRanges":[],"depth":0,"inlineStyleRanges":[{"length":3,"style":"BOLD","offset":61}]},{"depth":0,"key":"ab8uo","data":{},"entityRanges":[{"length":1,"offset":0,"key":10}],"inlineStyleRanges":[],"text":" ","type":"atomic"},{"data":{},"key":"9ljfq","inlineStyleRanges":[],"type":"header-two","depth":0,"entityRanges":[],"text":"Security groups"},{"entityRanges":[],"type":"unstyled","text":"Microsoft 365 security groups, formerly known as Office 365 security groups, allow admins to manage access to resources, for example, SharePoint, Intune, or apply conditional access policies.","data":{},"key":"e02bs","inlineStyleRanges":[],"depth":0},{"key":"81rrj","depth":0,"type":"header-three","data":{},"inlineStyleRanges":[],"text":"Create a security group in Microsoft 365","entityRanges":[]},{"depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":13,"length":26},{"style":"BOLD","offset":42,"length":14},{"length":21,"offset":59,"style":"BOLD"},{"style":"BOLD","offset":93,"length":11}],"entityRanges":[{"offset":93,"length":11,"key":11}],"text":"1. Go to the Microsoft 365 admin center > Teams & groups > Active teams & groups. Then click Add a group","type":"unstyled","key":"415kk","data":{}},{"inlineStyleRanges":[],"key":"14bdm","depth":0,"data":{},"entityRanges":[{"offset":0,"length":1,"key":12}],"text":" ","type":"atomic"},{"text":"2. Click Security > Next.","type":"unstyled","inlineStyleRanges":[{"length":8,"offset":9,"style":"BOLD"},{"style":"BOLD","length":4,"offset":20}],"key":"4shsn","depth":0,"entityRanges":[],"data":{}},{"text":" ","type":"atomic","inlineStyleRanges":[],"data":{},"key":"503dp","depth":0,"entityRanges":[{"key":13,"length":1,"offset":0}]},{"entityRanges":[],"key":"dipgs","type":"unstyled","text":"3. Name the group. Optionally add a description. Click Next.","depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","offset":55,"length":4}]},{"depth":0,"type":"atomic","data":{},"text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":14}],"key":"607r2"},{"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":12}],"entityRanges":[],"type":"unstyled","depth":0,"data":{},"key":"20v1u","text":"4. Click Create group."},{"entityRanges":[{"offset":0,"length":1,"key":15}],"depth":0,"key":"ecge4","inlineStyleRanges":[],"text":" ","data":{},"type":"atomic"},{"entityRanges":[],"text":"Add members to the security group","type":"header-three","depth":0,"inlineStyleRanges":[],"data":{},"key":"27a05"},{"inlineStyleRanges":[],"depth":0,"text":"To add members, you’ll need to go to the group and manage the members.","key":"954ck","type":"unstyled","data":{},"entityRanges":[]},{"entityRanges":[],"type":"unstyled","text":"1. Go to the Microsoft 365 admin center > Teams & groups > Active teams & groups > Security. Then click the group you want to manage","data":{},"depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":13,"length":26},{"style":"BOLD","length":14,"offset":42},{"length":21,"style":"BOLD","offset":59},{"length":8,"offset":83,"style":"BOLD"}],"key":"2aele"},{"entityRanges":[],"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":7},{"style":"BOLD","offset":19,"length":27}],"data":{},"type":"unstyled","text":"2. Click Members > View all and manage members.","depth":0,"key":"9cd2t"},{"type":"unstyled","depth":0,"entityRanges":[],"data":{},"text":"3. Click Add members.","inlineStyleRanges":[{"length":11,"offset":9,"style":"BOLD"}],"key":"4mfbu"},{"text":"4. Select the users you want to add to the group. Then click Add.","inlineStyleRanges":[{"length":3,"offset":61,"style":"BOLD"}],"depth":0,"data":{},"key":"2o8s2","entityRanges":[],"type":"unstyled"},{"entityRanges":[],"key":"1vmfm","data":{},"text":"Mail-enabled security groups","type":"header-two","depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"depth":0,"text":"Mail-enabled security groups are the best of both worlds. Use mail-enabled security groups to distribute messages and grant access permissions to resources in Microsoft 365.","entityRanges":[],"key":"3pesb","data":{},"type":"unstyled"},{"text":"You create mail-enabled security groups the same way you create security/distribution groups.","entityRanges":[],"data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"elqtj"},{"text":"Microsoft 365 groups","entityRanges":[],"depth":0,"key":"8n14s","inlineStyleRanges":[],"data":{},"type":"header-two"},{"type":"unstyled","entityRanges":[],"key":"90n3u","inlineStyleRanges":[],"depth":0,"text":"Microsoft 365 groups allow users to create and manage their own teams. Microsoft 365 groups can create Microsoft Teams, shared mailboxes, or open discussion forums in Yammer. They can also be used in SharePoint sites, Planner, OneDrive shared libraries, Power BI and more. Note, I said can because depending on where you create the team it will change what is created along with it.","data":{}},{"type":"header-three","key":"15cag","data":{},"inlineStyleRanges":[],"text":"How to create a Microsoft 365 group with a shared mailbox","depth":0,"entityRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","data":{},"key":"ftvnh","text":"1. Open Outlook.","depth":0},{"text":"2. Right-click Groups in the left pane and click New Group.","entityRanges":[],"inlineStyleRanges":[],"depth":0,"data":{},"type":"unstyled","key":"5se0k"},{"key":"3pt88","data":{},"entityRanges":[{"key":16,"offset":0,"length":1}],"text":" ","type":"atomic","depth":0,"inlineStyleRanges":[]},{"depth":0,"entityRanges":[],"key":"e0ob","data":{},"inlineStyleRanges":[{"length":6,"style":"BOLD","offset":130}],"type":"unstyled","text":"3. Set the name, email address, description, privacy, and decide if you want the emails to go to everyone’s mailboxes. Then click Create."},{"key":"a6i7d","depth":0,"type":"atomic","data":{},"entityRanges":[{"offset":0,"length":1,"key":17}],"inlineStyleRanges":[],"text":" "},{"key":"2njm8","depth":0,"text":"4. Enter the other members' names. Click the member to add them. Click Add Members.","type":"unstyled","data":{},"entityRanges":[],"inlineStyleRanges":[{"length":11,"style":"BOLD","offset":71}]},{"entityRanges":[{"key":18,"offset":0,"length":1}],"inlineStyleRanges":[],"type":"atomic","depth":0,"data":{},"text":" ","key":"h1d2"},{"inlineStyleRanges":[],"data":{},"depth":0,"text":"How to create a Microsoft 365 group in other apps","type":"header-three","key":"5nhvc","entityRanges":[]},{"entityRanges":[],"text":"Since knowing all the ways to create a Microsoft 365 group is outside the scope of MS-500 I’ll simply link the instructions below:","inlineStyleRanges":[],"depth":0,"type":"unstyled","data":{},"key":"1fffi"},{"key":"2p9g7","type":"unordered-list-item","entityRanges":[{"key":19,"offset":0,"length":34}],"depth":0,"data":{},"inlineStyleRanges":[],"text":"Create a plan in Microsoft Planner"},{"depth":0,"text":"Create a group in Microsoft Outlook","entityRanges":[{"key":20,"length":35,"offset":0}],"key":"cqmft","type":"unordered-list-item","data":{},"inlineStyleRanges":[]},{"type":"unordered-list-item","inlineStyleRanges":[],"key":"e60gi","data":{},"text":"Create a team site in SharePoint","entityRanges":[{"offset":0,"key":21,"length":32}],"depth":0},{"depth":0,"data":{},"key":"3qv6d","inlineStyleRanges":[],"entityRanges":[{"length":45,"key":22,"offset":0}],"type":"unordered-list-item","text":"Deploy Microsoft 365 groups to power platform "},{"depth":0,"entityRanges":[{"offset":0,"length":33,"key":23}],"inlineStyleRanges":[],"type":"unordered-list-item","key":"2fkjq","data":{},"text":"Create a group in Microsoft Teams "},{"inlineStyleRanges":[],"entityRanges":[{"key":24,"offset":0,"length":24}],"type":"unordered-list-item","text":"Create a group in Yammer ","depth":0,"data":{},"key":"dfvo"},{"inlineStyleRanges":[],"depth":0,"key":"7n81i","data":{},"text":"Membership type","entityRanges":[],"type":"header-two"},{"type":"unstyled","text":"Up until now, we’ve only discussed “assigned” groups. Assigned Groups are where you have assigned the user to the group. Another group type in Microsoft 365 is Dynamic. Dynamic groups are where the members are automatically added/removed depending on the attributes of the user. For example, you may want to create a security group based on departments. Then every user that has the same department will be automatically added to the group. For example, if the test says, “Users must be added automatically to the security group of their department.” Then a dynamic security group would be required.","inlineStyleRanges":[],"data":{},"key":"88a5k","depth":0,"entityRanges":[]},{"entityRanges":[],"depth":0,"data":{},"key":"d2v1l","inlineStyleRanges":[],"type":"header-three","text":"How to create a dynamic security group"},{"entityRanges":[],"key":"6ok0u","data":{},"type":"unstyled","inlineStyleRanges":[{"length":21,"style":"BOLD","offset":8},{"style":"BOLD","offset":32,"length":22},{"style":"BOLD","length":6,"offset":57}],"text":"1. Open Azure AD admin center > Azure Active Directory > Groups","depth":0},{"type":"atomic","entityRanges":[{"offset":0,"length":1,"key":25}],"text":" ","data":{},"inlineStyleRanges":[],"key":"2hudb","depth":0},{"depth":0,"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":9}],"text":"2. Click New Group","entityRanges":[],"key":"fbktg","data":{}},{"entityRanges":[{"offset":0,"length":1,"key":26}],"depth":0,"key":"9eblr","data":{},"text":" ","inlineStyleRanges":[],"type":"atomic"},{"data":{},"key":"54er3","inlineStyleRanges":[{"style":"BOLD","length":12,"offset":64},{"style":"BOLD","length":17,"offset":112}],"text":"3. Enter the Group name > optionally group description > Select Dynamic User under Membership type > Then click Add dynamic query","depth":0,"entityRanges":[],"type":"unstyled"},{"entityRanges":[{"key":27,"length":1,"offset":0}],"type":"atomic","depth":0,"inlineStyleRanges":[],"data":{},"text":" ","key":"84v8b"},{"key":"9u19n","entityRanges":[],"depth":0,"inlineStyleRanges":[{"length":10,"offset":23,"style":"BOLD"},{"offset":55,"style":"BOLD","length":6},{"style":"BOLD","length":2,"offset":85},{"style":"BOLD","length":4,"offset":100}],"type":"unstyled","data":{},"text":"4. Set the property to department. Set the Operator to Equals. Then set the Value to HR. Then click Save."},{"depth":0,"key":"dd22m","inlineStyleRanges":[],"data":{},"type":"atomic","text":" ","entityRanges":[{"key":28,"length":1,"offset":0}]},{"inlineStyleRanges":[],"text":"Dynamic membership rules","data":{},"type":"header-two","entityRanges":[],"depth":0,"key":"fmvq4"},{"type":"unstyled","data":{},"text":"There are several ways to filter / automatically add users to dynamic groups. Let’s review the rules.","inlineStyleRanges":[],"entityRanges":[],"key":"53coh","depth":0},{"type":"header-four","key":"5hv4k","data":{},"inlineStyleRanges":[],"depth":0,"text":"Property","entityRanges":[]},{"key":"46i97","type":"unstyled","text":"The property attribute is the property the rule will be checking. In our example above we used the department property which says, “check the department property on each user”.","inlineStyleRanges":[],"entityRanges":[],"data":{},"depth":0},{"type":"header-four","text":"Operator","entityRanges":[],"inlineStyleRanges":[],"depth":0,"data":{},"key":"nt10"},{"text":"The operator attribute is how to check the property field against the value. We used Equals in the example above. There are a few more operators that should be discussed.","depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"key":"98cs9","data":{}},{"text":"Equals: The equals operator does an exact match (not case sensitive) of the property to the value.","entityRanges":[],"data":{},"inlineStyleRanges":[{"length":6,"style":"BOLD","offset":0}],"type":"unstyled","key":"8ki8u","depth":0},{"key":"383ia","depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":8,"offset":0}],"text":"Contains: The contains operator does partial-string matches but not ","entityRanges":[]},{"depth":0,"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":5,"offset":0}],"data":{},"entityRanges":[],"key":"f8rts","text":"Match: The match operator does a regular expression matching."},{"text":"Dynamic group limits","key":"fof22","inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{},"type":"header-three"},{"data":{},"text":"You can create a dynamic group that contains devices or users, but you can't create a group that contains both users and devices.","key":"fd9k7","inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"key":"4eri4","depth":0,"type":"unstyled","text":"You can't build a dynamic device group based on the owners' attributes. Device dynamic group rules can only reference the device attributes.","data":{},"entityRanges":[]},{"type":"header-two","data":{},"key":"a4mlf","inlineStyleRanges":[],"entityRanges":[],"depth":0,"text":"Access Review"},{"entityRanges":[],"type":"unstyled","depth":0,"text":"One of the issues with groups is users come and go and they may even switch job roles or departments. Without reviewing the groups to verify membership the user list may get stale and users may keep access to data that they shouldn’t. With Microsoft 365 you can configure access review.","key":"71pfo","inlineStyleRanges":[],"data":{}},{"entityRanges":[],"data":{},"text":"With access review, you can set all groups or some of your groups to be reviewed. The reviewer can be the group owners, selected users, or groups, users can review their own access or managers of users. Lastly, you can set how often the reviewers need to perform the review. Let’s take a look.","inlineStyleRanges":[],"key":"a18v0","depth":0,"type":"unstyled"},{"key":"83jbj","inlineStyleRanges":[],"type":"header-three","text":"How to setup access review","entityRanges":[],"depth":0,"data":{}},{"depth":0,"text":"1. Go to Azure AD admin center > Azure Active Directory > Identity Governance.","key":"3li4u","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":21},{"length":22,"offset":33,"style":"BOLD"},{"style":"BOLD","offset":58,"length":19}],"type":"unstyled","data":{},"entityRanges":[]},{"inlineStyleRanges":[],"entityRanges":[{"key":29,"length":1,"offset":0}],"key":"44h4d","depth":0,"type":"atomic","data":{},"text":" "},{"text":"2. Access reviews > New access review.","data":{},"inlineStyleRanges":[{"style":"BOLD","offset":3,"length":14},{"length":17,"offset":20,"style":"BOLD"}],"entityRanges":[],"type":"unstyled","depth":0,"key":"3sjfm"},{"depth":0,"text":" ","entityRanges":[{"key":30,"length":1,"offset":0}],"type":"atomic","data":{},"key":"5tfl6","inlineStyleRanges":[]},{"text":"3. In the Select what to review dropdown click Teams + Groups. Click Select Teams + groups. Click select group(s). Click the group you want to perform an access review. Click Select. Click All users. Click Next: Reviews.","entityRanges":[],"depth":0,"key":"b415l","data":{},"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":14,"offset":47},{"style":"BOLD","offset":69,"length":21},{"style":"BOLD","offset":98,"length":15},{"length":6,"offset":175,"style":"BOLD"},{"length":9,"style":"BOLD","offset":189},{"length":13,"style":"BOLD","offset":206}]},{"type":"atomic","data":{},"inlineStyleRanges":[],"text":" ","depth":0,"key":"2bah6","entityRanges":[{"key":31,"length":1,"offset":0}]},{"depth":0,"type":"unstyled","data":{},"text":"4. Click the Select reviewers drop down and click Group owner(s). In duration (in days) set the number of days you want the review to be open for. For review recurrence set the amount of time before the next review. Click Next: Settings.","key":"9bj9q","entityRanges":[],"inlineStyleRanges":[{"length":14,"style":"BOLD","offset":50},{"length":14,"style":"BOLD","offset":222}]},{"text":" ","inlineStyleRanges":[],"entityRanges":[{"key":32,"length":1,"offset":0}],"key":"c3uq3","data":{},"type":"atomic","depth":0},{"inlineStyleRanges":[{"offset":7,"style":"BOLD","length":30},{"style":"BOLD","length":47,"offset":45},{"length":21,"style":"BOLD","offset":105}],"data":{},"entityRanges":[],"key":"37c3","depth":0,"text":"5. Set Auto apply results to resource. Click Approve access under If reviewers don’t respond. Then click Next: Review + Create.","type":"unstyled"},{"type":"atomic","text":" ","entityRanges":[{"key":33,"offset":0,"length":1}],"depth":0,"data":{},"inlineStyleRanges":[],"key":"auoi5"},{"inlineStyleRanges":[{"style":"BOLD","offset":30,"length":6}],"key":"6of9v","entityRanges":[],"type":"unstyled","depth":0,"data":{},"text":"6. Set the review name. Click Create."},{"data":{},"inlineStyleRanges":[],"key":"5hcia","depth":0,"entityRanges":[],"text":"Group Naming policies","type":"header-two"},{"key":"coqv5","depth":0,"data":{},"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"text":"The next thing I’d like to mention is group naming policies. Since users can create groups, you may want to use some sort of naming policy. For example, an organization Contoso may want a prefix in front of all the groups “Contoso-“"},{"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"text":"By setting a group naming policy all users will be required to use your specific naming policy with one exception. Global Admins & User admins can still create groups without using the naming policy.","depth":0,"key":"3v460","data":{}},{"entityRanges":[],"data":{},"depth":0,"key":"dit6s","inlineStyleRanges":[],"type":"header-three","text":"How to set up a naming policy"},{"key":"1dfs2","data":{},"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":21,"offset":9},{"length":22,"offset":33,"style":"BOLD"},{"length":6,"style":"BOLD","offset":58}],"type":"unstyled","text":"1. Go to Azure AD admin center > Azure Active Directory > Groups.","entityRanges":[]},{"data":{},"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":34}],"inlineStyleRanges":[],"key":"667s3","depth":0,"text":" "},{"text":"2. Click Naming policy > Group naming policy. Click Add prefix. Set the prefix to a string. Then set the prefix value. Click Save.","entityRanges":[],"key":"amra","type":"unstyled","depth":0,"inlineStyleRanges":[{"length":13,"offset":9,"style":"BOLD"},{"style":"BOLD","length":19,"offset":25},{"length":10,"offset":52,"style":"BOLD"},{"style":"BOLD","offset":84,"length":7},{"offset":125,"style":"BOLD","length":4}],"data":{}},{"type":"atomic","entityRanges":[{"length":1,"key":35,"offset":0}],"key":"82u6k","data":{},"depth":0,"inlineStyleRanges":[],"text":" "},{"entityRanges":[],"type":"header-two","key":"271ba","text":"Auto-expiration of groups","data":{},"depth":0,"inlineStyleRanges":[]},{"entityRanges":[],"key":"b8ng9","text":"So now your Microsoft 365 groups are growing. Sometimes the groups can grow out of control. How do you manage all of them? You put the burden on the group owners. In short, you set the groups to auto-expire. Then the group owners will receive an email where they will need to renew the groups to keep them around. Let's jump in and take a look.","depth":0,"inlineStyleRanges":[],"type":"unstyled","data":{}},{"key":"fc0t3","entityRanges":[{"offset":81,"length":10,"key":36}],"text":"1. Go to Azure Active Directory admin center > Azure Active Directory > Groups > Expiration.","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":35,"offset":9},{"length":22,"offset":47,"style":"BOLD"},{"style":"BOLD","length":7,"offset":72},{"style":"BOLD","offset":81,"length":10}],"depth":0,"data":{}},{"type":"unstyled","key":"1bjn0","depth":0,"data":{},"text":"2. Set the Group lifetime (in days). Set your email in the Email contact for groups with no owners. Set the enable expiration for these Microsoft 365 groups to All. Click Save.","entityRanges":[],"inlineStyleRanges":[{"length":24,"offset":11,"style":"BOLD"},{"style":"BOLD","length":39,"offset":59},{"offset":108,"style":"BOLD","length":48},{"style":"BOLD","offset":160,"length":3},{"style":"BOLD","offset":171,"length":4}]},{"entityRanges":[{"length":1,"key":37,"offset":0}],"inlineStyleRanges":[],"data":{},"depth":0,"type":"atomic","key":"ddtob","text":" "},{"key":"1g1cq","type":"unstyled","entityRanges":[],"text":"","depth":0,"data":{},"inlineStyleRanges":[]}]},"slug":"Creating-and-managing-users-through-groups-S1hQgFOMV","sectionId":"AFV_acckJ","featuredImage":"https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png","publish":true,"datePublished":"2022/5/26","title":"Creating and managing users through groups"},
      nextContentSlug: 'Securing-and-implementing-enterprise-applications-2QfoI2HxY',
      previousContentSlug: 'Protecting-Passwords-in-Microsoft-365-i9pJIjTNH',
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
                <div><p>re are four types of groups in Microsoft 365: distribution, security groups, mail-enabled security, and Microsoft 365. Let’s dive right into the types of groups.</p>
<h2>Distribution groups</h2>
<p>Distribution groups also known as distribution lists will create an email address and distribute the emails to all the members of the group. Distribution groups do not have separate mailboxes. The emails land in the members of the distribution lists mailboxes. You can add anyone with a mailbox inside your organization and you can add mail contacts to distribution groups.</p>
<h3>Create a distribution group in Microsoft 365</h3>
<p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <strong>Active teams &amp; groups</strong>. Then click <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard" target="_blank"><strong>Add a group</strong></a>.</p>
<div ><img src="https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png" alt="Add a group to Microsoft 365" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Distribution </strong>&gt; <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/104HV6d/create-a-distribution-group.png" alt="create a distribution group" style="height: auto;width: auto"/></div>
<p>3. Name the group. Optionally add a description. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/zQJ9x1M/name-your-new-group.png" alt="Name your new Microsoft 365 group" style="height: auto;width: auto"/></div>
<p>4. Set the group email address. Optionally click <strong>Allow people outside of my organization to send email to this Distribution group</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/nLrY8x6/new-group-email-address.png" alt="New group email address" style="height: auto;width: auto"/></div>
<p>5. Click <strong>Create group</strong>.</p>
<div ><img src="https://i.ibb.co/xM6DN61/create-distribution-group.png" alt="create distribution group" style="height: auto;width: auto"/></div>
<h3>Add members to the distribution group</h3>
<p>You’ll notice you can’t add members to the group while creating the group. To add members, you’ll need to go to the group and manage the members.</p>
<p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups" target="_blank"><strong>Active teams &amp; groups</strong></a> &gt; <strong>Distribution List</strong>.  Then click the group you want to manage.</p>
<div ><img src="https://i.ibb.co/4frD0dC/manage-distribution-group.png" alt="manage distribution group" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Members</strong> &gt; <strong>View all and manage members</strong>.</p>
<div ><img src="https://i.ibb.co/YhY7R2R/manage-members-of-distribution-group.png" alt="manage members of distribution group" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Add members</strong>.</p>
<div ><img src="https://i.ibb.co/5n13V6V/add-members-to-group.png" alt="add members to group" style="height: auto;width: auto"/></div>
<p>4. Select the users you want to add to the group. Then click <strong>Add</strong>.</p>
<div ><img src="https://i.ibb.co/FmHL7tG/add-members-to-the-group.png" alt="Add members to the group" style="height: auto;width: auto"/></div>
<h2>Security groups</h2>
<p>Microsoft 365 security groups, formerly known as Office 365 security groups, allow admins to manage access to resources, for example, SharePoint, Intune, or apply conditional access policies.</p>
<h3>Create a security group in Microsoft 365</h3>
<p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <strong>Active teams &amp; groups</strong>. Then click <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard" target="_blank"><strong>Add a group</strong></a></p>
<div ><img src="https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png" alt="Add a group to Microsoft 365" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Security</strong> &gt; <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/bbX5gBD/create-a-security-group.png" alt="Create a security group" style="height: auto;width: auto"/></div>
<p>3. Name the group. Optionally add a description. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/zQJ9x1M/name-your-new-group.png" alt="Name your new Microsoft 365 group" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Create group</strong>.</p>
<div ><img src="https://i.ibb.co/TTf23Bz/create-security-group.png" alt="Create security group" style="height: auto;width: auto"/></div>
<h3>Add members to the security group</h3>
<p>To add members, you’ll need to go to the group and manage the members.</p>
<p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <strong>Active teams &amp; groups</strong> &gt; <strong>Security</strong>. Then click the group you want to manage</p>
<p>2. Click <strong>Members</strong> &gt; <strong>View all and manage members</strong>.</p>
<p>3. Click <strong>Add members</strong>.</p>
<p>4. Select the users you want to add to the group. Then click <strong>Add</strong>.</p>
<h2>Mail-enabled security groups</h2>
<p>Mail-enabled security groups are the best of both worlds. Use mail-enabled security groups to distribute messages and grant access permissions to resources in Microsoft 365.</p>
<p>You create mail-enabled security groups the same way you create security/distribution groups.</p>
<h2>Microsoft 365 groups</h2>
<p>Microsoft 365 groups allow users to create and manage their own teams. Microsoft 365 groups can create Microsoft Teams, shared mailboxes, or open discussion forums in Yammer. They can also be used in SharePoint sites, Planner, OneDrive shared libraries, Power BI and more. Note, I said can because depending on where you create the team it will change what is created along with it.</p>
<h3>How to create a Microsoft 365 group with a shared mailbox</h3>
<p>1. Open Outlook.</p>
<p>2. Right-click Groups in the left pane and click New Group.</p>
<div ><img src="https://i.ibb.co/ySVxbWK/new-microsoft-365-group.png" alt="Create a new Microsoft 365 group in Outlook" style="height: auto;width: auto"/></div>
<p>3. Set the name, email address, description, privacy, and decide if you want the emails to go to everyone’s mailboxes. Then click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/wR07Y6n/create-group-in-outlook.png" alt="Create Microsoft 365 group in Outlook" style="height: auto;width: auto"/></div>
<p>4. Enter the other members' names. Click the member to add them. Click <strong>Add Members</strong>.</p>
<div ><img src="https://i.ibb.co/TkpzRv9/add-members-to-outlook-group.png" alt="Add members to outlook group" style="height: auto;width: auto"/></div>
<h3>How to create a Microsoft 365 group in other apps</h3>
<p>Since knowing all the ways to create a Microsoft 365 group is outside the scope of MS-500 I’ll simply link the instructions below:</p>
<ul>
<li><a href="https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93" target="_blank">Create a plan in Microsoft Planner</a></li>
<li><a href="https://support.office.com/en-us/article/create-a-group-in-outlook-04d0c9cf-6864-423c-a380-4fa858f27102" target="_blank">Create a group in Microsoft Outlook</a></li>
<li><a href="https://support.office.com/en-us/article/create-a-team-site-in-sharepoint-online-ef10c1e7-15f3-42a3-98aa-b5972711777d" target="_blank">Create a team site in SharePoint</a></li>
<li><a href="https://docs.microsoft.com/en-us/dynamics365/customer-engagement/admin/deploy-office-365-groups" target="_blank">Deploy Microsoft 365 groups to power platform</a>&nbsp;</li>
<li><a href="https://docs.microsoft.com/en-us/microsoftteams/office-365-groups" target="_blank">Create a group in Microsoft Teams</a>&nbsp;</li>
<li><a href="https://support.office.com/en-us/article/create-a-group-in-yammer-b407af4f-9a58-4b12-b43e-afbb1b07c889" target="_blank">Create a group in Yammer</a>&nbsp;</li>
</ul>
<h2>Membership type</h2>
<p>Up until now, we’ve only discussed “assigned” groups. Assigned Groups are where you have assigned the user to the group. Another group type in Microsoft 365 is Dynamic. Dynamic groups are where the members are automatically added/removed depending on the attributes of the user. For example, you may want to create a security group based on departments. Then every user that has the same department will be automatically added to the group. For example, if the test says, “Users must be added automatically to the security group of their department.” Then a dynamic security group would be required.</p>
<h3>How to create a dynamic security group</h3>
<p>1. Open <strong>Azure AD admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups</strong></p>
<div ><img src="https://i.ibb.co/xMzW2hd/azure-ad-groups.png" alt="Azure AD Groups" style="height: auto;width: auto"/></div>
<p>2. Click <strong>New Group</strong></p>
<div ><img src="https://i.ibb.co/LzXYCTW/azure-ad-new-group.png" alt="Azure AD New Group" style="height: auto;width: auto"/></div>
<p>3. Enter the Group name &gt; optionally group description &gt; Select <strong>Dynamic User</strong> under Membership type &gt; Then click <strong>Add dynamic query</strong></p>
<div ><img src="https://i.ibb.co/Kq64m2j/New-dynamic-group.png" alt="Create a new dynamic group" style="height: auto;width: auto"/></div>
<p>4. Set the property to <strong>department</strong>. Set the Operator to <strong>Equals</strong>. Then set the Value to <strong>HR</strong>. Then click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/JBzmGBQ/dyanmic-membership-rules.png" alt="Dynamic membership rules" style="height: auto;width: auto"/></div>
<h2>Dynamic membership rules</h2>
<p>There are several ways to filter / automatically add users to dynamic groups. Let’s review the rules.</p>
<h4>Property</h4>
<p>The property attribute is the property the rule will be checking. In our example above we used the department property which says, “check the department property on each user”.</p>
<h4>Operator</h4>
<p>The operator attribute is how to check the property field against the value. We used Equals in the example above. There are a few more operators that should be discussed.</p>
<p><strong>Equals</strong>: The equals operator does an exact match (not case sensitive) of the property to the value.</p>
<p><strong>Contains</strong>: The contains operator does partial-string matches but not&nbsp;</p>
<p><strong>Match</strong>: The match operator does a regular expression matching.</p>
<h3>Dynamic group limits</h3>
<p>You can create a dynamic group that contains devices or users, but you can't create a group that contains both users and devices.</p>
<p>You can't build a dynamic device group based on the owners' attributes. Device dynamic group rules can only reference the device attributes.</p>
<h2>Access Review</h2>
<p>One of the issues with groups is users come and go and they may even switch job roles or departments. Without reviewing the groups to verify membership the user list may get stale and users may keep access to data that they shouldn’t. With Microsoft 365 you can configure access review.</p>
<p>With access review, you can set all groups or some of your groups to be reviewed. The reviewer can be the group owners, selected users, or groups, users can review their own access or managers of users. Lastly, you can set how often the reviewers need to perform the review. Let’s take a look.</p>
<h3>How to setup access review</h3>
<p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Identity Governance</strong>.</p>
<div ><img src="https://i.ibb.co/vP17HPH/Azure-AD-Identity-Governance.png" alt="Azure AD Identity Governance" style="height: auto;width: auto"/></div>
<p>2. <strong>Access reviews</strong> &gt; <strong>New access review</strong>.</p>
<div ><img src="https://i.ibb.co/bXKkwKH/new-access-review.png" alt="new access review" style="height: auto;width: auto"/></div>
<p>3. In the Select what to review dropdown click <strong>Teams + Groups</strong>. Click <strong>Select Teams + groups</strong>. Click <strong>select group(s)</strong>. Click the group you want to perform an access review. Click <strong>Select</strong>. Click <strong>All users</strong>. Click <strong>Next: Reviews</strong>.</p>
<div ><img src="https://i.ibb.co/ggzVL3L/access-review-review-type2.png" alt="Create new access review Review Type page" style="height: auto;width: auto"/></div>
<p>4. Click the Select reviewers drop down and click <strong>Group owner(s)</strong>. In duration (in days) set the number of days you want the review to be open for. For review recurrence set the amount of time before the next review. Click <strong>Next: Settings</strong>.</p>
<div ><img src="https://i.ibb.co/DMZz1sY/Access-review-reviews2.png" alt="New access review reviews page" style="height: auto;width: auto"/></div>
<p>5. Set <strong>Auto apply results to resource</strong>. Click <strong>Approve access under If reviewers don’t respond</strong>. Then click <strong>Next: Review + Create</strong>.</p>
<div ><img src="https://i.ibb.co/3RtXhW7/access-review-settings.png" alt="Set the access review settings" style="height: auto;width: auto"/></div>
<p>6. Set the review name. Click <strong>Create</strong>.</p>
<h2>Group Naming policies</h2>
<p>The next thing I’d like to mention is group naming policies. Since users can create groups, you may want to use some sort of naming policy. For example, an organization Contoso may want a prefix in front of all the groups “Contoso-“</p>
<p>By setting a group naming policy all users will be required to use your specific naming policy with one exception. Global Admins &amp; User admins can still create groups without using the naming policy.</p>
<h3>How to set up a naming policy</h3>
<p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups</strong>.</p>
<div ><img src="https://i.ibb.co/ZSKQgj7/naming-policy-navigation.png" alt="Azure AD Groups Navigation" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Naming policy</strong> &gt; <strong>Group naming policy</strong>. Click <strong>Add prefix</strong>. Set the prefix to a <strong>string.</strong> Then set the prefix value. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/FD4vJbd/configure-group-naming-policy.png" alt="Configure group naming policy" style="height: auto;width: auto"/></div>
<h2>Auto-expiration of groups</h2>
<p>So now your Microsoft 365 groups are growing. Sometimes the groups can grow out of control. How do you manage all of them? You put the burden on the group owners. In short, you set the groups to auto-expire. Then the group owners will receive an email where they will need to renew the groups to keep them around. Let's jump in and take a look.</p>
<p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups </strong>&gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/Lifecycle" target="_blank"><strong>Expiration</strong></a>.</p>
<p>2. Set the <strong>Group lifetime (in days)</strong>. Set your email in the <strong>Email contact for groups with no owners</strong>. Set the <strong>enable expiration for these Microsoft 365 groups</strong> to <strong>All</strong>. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/cxPHf87/set-group-expiration.png" alt="set group expiration" style="height: auto;width: auto"/></div>
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
