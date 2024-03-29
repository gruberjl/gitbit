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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7730l', text: 'Now let\'s take a look at assigning admin roles. There are a lot of different models and strategies to manage administrative rights but the one Microsoft chose to implement in Microsoft 365 is Role-Based Access Control (RBAC). The way RBAC works is the administrative rights or permissions you\'re given in the organization are based on your role. In short, Microsoft has implemented several roles that can be assigned to users that will grant user-specific rights.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'efpcq', text: 'One of the best things about roles is roles will allow us to see exactly what rights a user has. It isn\'t so obvious with groups. You probably work with groups in your on-premise environment. Where you create a group, assign members to the group, and then assign permissions to the group. But here\'s the problem, there\'s nothing that documents what rights those groups had. With roles, you can see exactly what admin rights the roles have. In Microsoft 365 there are built-in roles that are assigned several permissions across your tenant but you can also create a custom role and assign it rights. Then you or another admin can review the rights that are assigned to that role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eh4sc', text: 'What\'s the principle of least privilege?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9ottd', text: 'In short, it\'s a concept in cybersecurity to give out the least amount of permissions that is possible. In short, you don\'t want everyone being global admins because then someone that\'s upset with your organization or accidentally may screw up your Microsoft 365 tenant. For example, someone that manages your email environment doesn\'t need to be a SharePoint admin. Microsoft will always recommend the principle of least privilege. So if you see a question regarding what role does user X need to do Y? Always select the role that gives the least amount of permissions', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e2igu', text: 'How to assign roles to users', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 70, offset: 9}], inlineStyleRanges: [], key: '8krko', text: '1. Go to https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 58, style: 'BOLD'}], key: '4bae5', text: '2. Click the user you want to assign a role to then click Manage roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '7gn96', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 9, style: 'BOLD'}], key: '38v22', text: '3. Click Admin center access then select the roles you want to assign.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fphpb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 20, offset: 52, style: 'BOLD'}], key: 'd48gp', text: 'If you want to give more specific permissions click Show all by category.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'af3ne', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ui8u', text: 'How to view the rights of admin roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 1, offset: 67, style: 'BOLD'}], key: '5go99', text: 'A quick overview of the admin role can be seen by highlighting the I next to the role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '43k3p', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ascj1', text: 'But to see the actual role permissions assigned you\'ll need to use Azure Active Directory', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 101, offset: 9}], inlineStyleRanges: [], key: 'f9tbg', text: '1. Go to https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2h08', text: '2. Click the administrative role you want to view the permissions for.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5vcj3', text: 'From this page, you can view all the roles in your tenant. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'drtd9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}], key: '4gm99', text: '3. Click Description. From there you can view the role permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '5gf7m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'emkn9', text: 'A few key Microsoft 365 roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cqsgo', text: 'In the next section, I\'ll review a few key roles and what they have access to do. It\'s important to remember what roles can perform what permissions as part of the MS-500 test.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7punv', text: 'Global administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dl96a', text: 'The global administrator has full access to everything. They can assign roles, reset passwords of other admins. Take ownership of mailboxes and OneDrive containers. You\'ll want to be careful to who you assign the global administrator role. They have the keys to the kingdom.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fg68s', text: 'Password administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1dppo', text: 'The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8gv6i', text: 'Directory readers', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'puu6', text: 'Guest inviter', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '59fde', text: 'Password administrator', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'afu5t', text: 'Let\'s take an example, Let\'s say you have a user John Gruber that\'s a password administrator. And you have a global admin named Kendra Smith and a regular user Daniel James. Who\'s password can John Gruber reset? Daniel\'s. John can\'t reset Kendra\'s password because she\'s a global administrator.', type: 'unstyled'}, {data: {'text-align': 'start'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 15, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 15, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 15, offset: 0, style: 'fontsize-1.75rem'}, {length: 15, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '6v962', text: 'Security Reader', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 164, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 164, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 164, offset: 0, style: 'fontsize-16'}, {length: 164, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'dvmb7', text: 'Users with the security reader role have global read-only access to view the security configuration. The users with the security reader role can view the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 43, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 43, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 43, offset: 0, style: 'fontsize-16'}, {length: 43, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '7tj61', text: 'View Azure Active Directory sign-in reports', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 38, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 38, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 38, offset: 0, style: 'fontsize-16'}, {length: 38, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '2r5qf', text: 'View Azure Active Directory audit logs', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 51, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 51, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 51, offset: 0, style: 'fontsize-16'}, {length: 51, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '7qoke', text: 'View ATP reports in the Threat management dashboard', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 52, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 52, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 52, offset: 0, style: 'fontsize-16'}, {length: 52, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'f87db', text: 'Read-only access to the Security & Compliance Center', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 55, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 55, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 55, offset: 0, style: 'fontsize-16'}, {length: 55, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '2775m', text: 'Read-only access to the Microsoft 365 compliance center', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 85, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 85, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 85, offset: 0, style: 'fontsize-16'}, {length: 85, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '8e48d', text: 'Read the Microsoft Defender for Office 365 reports in the Threat management dashboard', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9q4p1', text: 'Security administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b435i', text: 'The security administrator role is assigned to users that manage the security of your Microsoft 365 tenant. The security administrator users will have all the permissions that the security reader has plus the ability to edit the security settings. It gives the users the permissions to perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dvvim', text: 'View ATP reports in the Threat management dashboard', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3n7hd', text: 'Create and modify data loss protection policies', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2ou6h', text: 'Create and manage labels', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dlkjc', text: 'Manage email protection (anti-phishing, safe links, and anti-malware)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd0kbu', text: 'Privileged role administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bmb6r', text: 'Users with the privileged role administrator role can manage role assignments in Azure Active Directory. They can also enable, configure, and manage the Azure AD Privileged Identity Management. The privileged role administrators can assign other users with different admin roles. They cannot manage their own role permissions. For example, if John Gruber is assigned the privileged role administrator role then John Gruber can assign User1 with the reports reader role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '857u2', text: 'Service support administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b39ca', text: 'The service support administrator role is used to open support requests with Microsoft. They can also view the service dashboard and message center in the admin portals.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b3p82', text: 'Guest inviter', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e01vh', text: 'Members of the guest inviter role can invite guests even when the "members can invite" property is set to no. The guest inviter admin role isn\'t even really an admin because that\'s all they can do.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cma25', text: 'Security operator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ar8td', text: 'Users with the security operator role can review the audit log but can\'t disable auditing. The security operator role users will also have global read-only access to the security-related features, including all information in Microsoft 365 security center, Azure Active Directory, and Privileged Identity Management. The security operator can also manage features in the identity protection center.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a8gca', text: 'Exchange Online Roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '73vt1', text: 'Microsoft 365 is so vast that not all the roles are displayed in the Microsoft 365 roles. The Exchange/email-specific roles are stored in the Exchange admin center. That way you can give admins specific rights to just Exchange Online. For example, you can give someone complete admin access to Exchange Online by assigning them the Microsoft 365 Exchange administrator role or you can assign them the Organization Management Exchange Online role. One thing to note, if you\'re a global administrator you\'re already assigned the organization management role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '14i54', text: 'How to assign Exchange Online admin roles', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 49, offset: 9}], inlineStyleRanges: [], key: 'epdkd', text: '1. Go to https://admin.exchange.microsoft.com/#/adminRoles and sign in with your admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 63, style: 'BOLD'}, {length: 3, offset: 92, style: 'BOLD'}], key: '3a60n', text: '2. Click the role you want to assign to a user. Then click the Assigned tab. Finally, click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '1n4hc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7dr4j', text: '3. Type the name of the user you want to add as an admin. Click the user in the drop-down.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '59fmm', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}], key: 'blm19', text: '4. Click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fhnei', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 53, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 53, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 53, offset: 0, style: 'fontsize-32'}, {length: 53, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '5jcng', text: 'How to view the rights of Exchange Online admin roles ', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3cjni', text: 'Just like the Microsoft 365 admin roles, you can view the description and see the permissions assigned to each role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 49, offset: 33}], inlineStyleRanges: [], key: 'erhap', text: '1. To view the description go to https://admin.exchange.microsoft.com/#/adminRoles and click the role you want to view.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '3j29k', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 46, style: 'BOLD'}, {length: 1, offset: 125, style: 'BOLD'}], key: 'bkq1i', text: '2. To view the permissions assigned click the Permissions tab. You can review the permissions by hovering the mouse over the I.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '8ledi', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd7jj2', text: 'A few key Exchange Online roles', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dil97', text: 'Organization Management', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6nnk2', text: 'Organization Management members can manage virtually everything in Exchange Online. It\'s like the global admin but for Exchange Online.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7uuu7', text: 'Discovery Management', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9vrvl', text: 'Discovery management members can perform searches of mailboxes and manage legal holds / preserve all the mailbox content.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '15eq5', text: 'Recipient Management', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fjntk', text: 'Recipient Management members can create, manage, and remove recipients in Exchange Online.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '27gk7', text: 'Security & Compliance Roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1vrjt', text: 'Microsoft 365 and Exchange Online aren\'t the only places roles are set up. There are also roles in the security and compliance admin center. These roles work virtually the same as the Microsoft 365 and Exchange Online roles. Each role has a name, description, permissions assigned, and members of the role but there is a small difference. Half the security & compliance roles are stored in Azure AD. The other half are compliance center roles. So let\'s take a look at assigning compliance center roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '489t7', text: 'How to assign roles to users', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 44, offset: 9}], inlineStyleRanges: [], key: '7rbmp', text: '1. Go to https://compliance.microsoft.com/permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}], key: 'aql7o', text: '2. Click Roles under Compliance center.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: 'baf18', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2mmlk', text: '3. Click the role you want to assign', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: '575f3', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}], key: 'fhg8h', text: '4. Click Choose members', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: '9t889', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}], key: 'dkk9j', text: '5. Click Add', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 1, offset: 0}], inlineStyleRanges: [], key: '4qrlo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 137, style: 'BOLD'}], key: 'a6id6', text: '6. Click the checkmark next to the users you want to add to the role. Verify the number of users you select appears next to Added. Click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c5cf8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}, {length: 4, offset: 25, style: 'BOLD'}], key: '68rrr', text: '7. Click Done then click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 1, offset: 0}], inlineStyleRanges: [], key: '3h3lv', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'mcqv', text: 'How to view the rights of compliance center admin roles', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eu46', text: 'It\'s easy to view the assigned roles to the role groups.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 60, offset: 9}], inlineStyleRanges: [], key: 'qqto', text: '1. Go to https://compliance.microsoft.com/compliancecenterpermissions and sign in with your admin permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '30uhu', text: '2. Click the role you want to view the permissions for.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'i3jg', text: '3. View the Assigned roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 1, offset: 0}], inlineStyleRanges: [], key: 'auenq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd7u69', text: 'A few key compliance center admin roles', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '47oq7', text: 'In the next section, I\'ll review a few key roles and what they have access to do. It\'s important to remember what roles can perform what permissions as part of the MS-500 test.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'g5r2', text: 'Global admin', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c04du', text: 'The global admin in the Microsoft 365 tenant have access to the entire compliance center. They can add and remove roles and members from roles. They can even add themselves to compliance center roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'flq1o', text: 'eDiscovery managers', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 92, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 92, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 92, offset: 0, style: 'fontsize-16'}, {length: 92, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '31oe9', text: 'An eDiscovery manager can perform searches, including exporting and previewing the results.  They can create, as well as, manage eDiscovery cases including adding members to the cases. They can\'t access or manage cases created by other eDiscovery Managers.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3d1jb', text: 'eDiscovery administrators', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b8jd1', text: 'eDiscovery administrators can perform all the functions as an eDiscovery manager + manage other people\'s cases.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'left', alt: 'Microsoft 365 assign a role to a user', height: 'auto', src: 'https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Microsoft 365 assign a role to a user', height: 503, src: 'https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png', width: 704}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Exchange Online add admin', height: 260, src: 'https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png', width: 586}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Add user to Exchange admin role', height: 411, src: 'https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png', width: 537}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'left', alt: 'View the Exchange Online admin role descrptions', height: 'auto', src: 'https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png', targetOption: '_blank', url: 'https://admin.exchange.microsoft.com/#/adminRoles', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 13: {data: {alignment: 'none', alt: 'View the Exchange Online admin role descrptions', height: 720, src: 'https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png', width: 1560}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Exchange Online admin role permissions', height: 368, src: 'https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png', width: 533}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {targetOption: '_blank', url: 'https://compliance.microsoft.com/permissions'}, mutability: 'MUTABLE', type: 'LINK'}, 16: {data: {alignment: 'none', alt: 'Microsoft 365 compliance center open roles button', height: 385, src: 'https://i.ibb.co/N2mM2rk/compliance-center-roles.png', width: 1344}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Compliance role edit members', height: 690, src: 'https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png', width: 924}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'left', alt: 'C:\\Users\\john.gruber\\Downloads\\compliance center roles - choose members', height: 242, src: 'https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png', width: 410}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alignment: 'none', alt: 'compliance center roles - add members', height: 244, src: 'https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png', width: 274}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Microsoft 365 assign admin role to user', height: 663, src: 'https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png', width: 450}, mutability: 'MUTABLE', type: 'IMAGE'}, 20: {data: {alignment: 'none', alt: 'C:\\Users\\john.gruber\\Downloads\\compliance center roles - select members to add', height: 852, src: 'https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png', width: 963}, mutability: 'MUTABLE', type: 'IMAGE'}, 21: {data: {alignment: 'none', alt: 'C:\\Users\\john.gruber\\Downloads\\compliance center roles - Save member change', height: 266, src: 'https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png', width: 395}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {data: {targetOption: '_blank', url: 'https://compliance.microsoft.com/compliancecenterpermissions'}, mutability: 'MUTABLE', type: 'LINK'}, 23: {data: {alignment: 'none', alt: 'Compliance center roles - view assigned roles', height: 809, src: 'https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png', width: 819}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Microsoft 365 admin role categories', height: 760, src: 'https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png', width: 268}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Microsoft 365 admin roles view description', height: 117, src: 'https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png', width: 431}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators'}, mutability: 'MUTABLE', type: 'LINK'}, 6: {data: {alignment: 'none', alt: 'Azure AD Roles', height: 425, src: 'https://i.ibb.co/gVnhfmz/azure-ad-roles.png', width: 1311}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'C:\\Users\\john.gruber\\Downloads\\azure ad role permissions descriptions', height: 782, src: 'https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png', width: 1306}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {targetOption: '_blank', url: 'https://admin.exchange.microsoft.com/#/adminRoles'}, mutability: 'MUTABLE', type: 'LINK'}, 9: {data: {alignment: 'none', alt: 'Assign Exchange Online admin roles', height: 709, src: 'https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png', width: 1610}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Administrator management is a complex topic in Microsoft 365. Learn all the places you can assign admin roles in Microsoft 365.', featuredImage: 'https://i.ibb.co/kySL4HQ/Roles-and-administrators.png', id: '7CpqFkPZU', images: ['https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png', 'https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png', 'https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png', 'https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png', 'https://i.ibb.co/gVnhfmz/azure-ad-roles.png', 'https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png', 'https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png', 'https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png', 'https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png', 'https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png', 'https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png', 'https://i.ibb.co/N2mM2rk/compliance-center-roles.png', 'https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png', 'https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png', 'https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png', 'https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png', 'https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png', 'https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png', 'https://i.ibb.co/kySL4HQ/Roles-and-administrators.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Creating-and-managing-admins-through-roles-7CpqFkPZU', title: 'Creating and managing admins through roles', type: 'article'},
      nextContentSlug: 'test/control-permissions-and-access-through-admin-roles-j9ggabtua',
      previousContentSlug: 'learn/How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC',
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
                  <div><p>Now let's take a look at assigning admin roles. There are a lot of different models and strategies to manage administrative rights but the one Microsoft chose to implement in Microsoft 365 is Role-Based Access Control (RBAC). The way RBAC works is the administrative rights or permissions you're given in the organization are based on your role. In short, Microsoft has implemented several roles that can be assigned to users that will grant user-specific rights.</p>
                    <p>One of the best things about roles is roles will allow us to see exactly what rights a user has. It isn't so obvious with groups. You probably work with groups in your on-premise environment. Where you create a group, assign members to the group, and then assign permissions to the group. But here's the problem, there's nothing that documents what rights those groups had. With roles, you can see exactly what admin rights the roles have. In Microsoft 365 there are built-in roles that are assigned several permissions across your tenant but you can also create a custom role and assign it rights. Then you or another admin can review the rights that are assigned to that role.</p>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>What's the principle of least privilege?</h2>
                    <p>In short, it's a concept in cybersecurity to give out the least amount of permissions that is possible. In short, you don't want everyone being global admins because then someone that's upset with your organization or accidentally may screw up your Microsoft 365 tenant. For example, someone that manages your email environment doesn't need to be a SharePoint admin. Microsoft will always recommend the principle of least privilege. So if you see a question regarding what role does user X need to do Y? Always select the role that gives the least amount of permissions</p>
                    <h2>How to assign roles to users</h2>
                    <p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a>.</p>
                    <p>2. Click the user you want to assign a role to then click <strong>Manage roles</strong>.</p>
                    <div ><img src="https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png" alt="Microsoft 365 assign a role to a user" height="503" width="704" style="aspect-ratio: auto 704 / 503; height: auto;" /></div>
                    <p>3. Click <strong>Admin center access</strong> then select the roles you want to assign.</p>
                    <div ><img src="https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png" alt="Microsoft 365 assign admin role to user" height="663" width="450" style="aspect-ratio: auto 450 / 663; height: auto;" /></div>
                    <p>If you want to give more specific permissions click <strong>Show all by category</strong>.</p>
                    <div ><img src="https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png" alt="Microsoft 365 admin role categories" height="760" width="268" style="aspect-ratio: auto 268 / 760; height: auto;" /></div>
                    <h2>How to view the rights of admin roles</h2>
                    <p>A quick overview of the admin role can be seen by highlighting the <strong>I</strong> next to the role.</p>
                    <div ><img src="https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png" alt="Microsoft 365 admin roles view description" height="117" width="431" style="aspect-ratio: auto 431 / 117; height: auto;" /></div>
                    <p>But to see the actual role permissions assigned you'll need to use Azure Active Directory</p>
                    <p>1. Go to <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators" target="_blank" rel="noreferrer">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators</a></p>
                    <p>2. Click the administrative role you want to view the permissions for.</p>
                    <p>From this page, you can view all the roles in your tenant.&nbsp;</p>
                    <div ><img src="https://i.ibb.co/gVnhfmz/azure-ad-roles.png" alt="Azure AD Roles" height="425" width="1311" style="aspect-ratio: auto 1311 / 425; height: auto;" /></div>
                    <p>3. Click <strong>Description</strong>. From there you can view the role permissions.</p>
                    <div ><img src="https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png" alt="C:\Users\john.gruber\Downloads\azure ad role permissions descriptions" height="782" width="1306" style="aspect-ratio: auto 1306 / 782; height: auto;" /></div>
                    <h2>A few key Microsoft 365 roles</h2>
                    <p>In the next section, I'll review a few key roles and what they have access to do. It's important to remember what roles can perform what permissions as part of the MS-500 test.</p>
                    <h3>Global administrator</h3>
                    <p>The global administrator has full access to everything. They can assign roles, reset passwords of other admins. Take ownership of mailboxes and OneDrive containers. You'll want to be careful to who you assign the global administrator role. They have the keys to the kingdom.</p>
                    <h3>Password administrator</h3>
                    <p>The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles:</p>
                    <ul>
                      <li>Directory readers</li>
                      <li>Guest inviter</li>
                      <li>Password administrator</li>
                    </ul>
                    <p>Let's take an example, Let's say you have a user John Gruber that's a password administrator. And you have a global admin named Kendra Smith and a regular user Daniel James. Who's password can John Gruber reset? Daniel's. John can't reset Kendra's password because she's a global administrator.</p>
                    <h3 ><span >Security Reader</span></h3>
                    <p><span >Users with the security reader role have global read-only access to view the security configuration. The users with the security reader role can view the following:</span></p>
                    <ul>
                      <li><span >View Azure Active Directory sign-in reports</span></li>
                      <li><span >View Azure Active Directory audit logs</span></li>
                      <li><span >View ATP reports in the Threat management dashboard</span></li>
                      <li><span >Read-only access to the Security &amp; Compliance Center</span></li>
                      <li><span >Read-only access to the Microsoft 365 compliance center</span></li>
                      <li><span >Read the Microsoft Defender for Office 365 reports in the Threat management dashboard</span></li>
                    </ul>
                    <h3>Security administrator</h3>
                    <p>The security administrator role is assigned to users that manage the security of your Microsoft 365 tenant. The security administrator users will have all the permissions that the security reader has plus the ability to edit the security settings. It gives the users the permissions to perform the following:</p>
                    <ul>
                      <li>View ATP reports in the Threat management dashboard</li>
                      <li>Create and modify data loss protection policies</li>
                      <li>Create and manage labels</li>
                      <li>Manage email protection (anti-phishing, safe links, and anti-malware)</li>
                    </ul>
                    <h3>Privileged role administrator</h3>
                    <p>Users with the privileged role administrator role can manage role assignments in Azure Active Directory. They can also enable, configure, and manage the Azure AD Privileged Identity Management. The privileged role administrators can assign other users with different admin roles. They cannot manage their own role permissions. For example, if John Gruber is assigned the privileged role administrator role then John Gruber can assign User1 with the reports reader role.</p>
                    <h3>Service support administrator</h3>
                    <p>The service support administrator role is used to open support requests with Microsoft. They can also view the service dashboard and message center in the admin portals.</p>
                    <h3>Guest inviter</h3>
                    <p>Members of the guest inviter role can invite guests even when the "members can invite" property is set to no. The guest inviter admin role isn't even really an admin because that's all they can do.</p>
                    <h3>Security operator</h3>
                    <p>Users with the security operator role can review the audit log but can't disable auditing. The security operator role users will also have global read-only access to the security-related features, including all information in Microsoft 365 security center, Azure Active Directory, and Privileged Identity Management. The security operator can also manage features in the identity protection center.</p>
                    <h2>Exchange Online Roles</h2>
                    <p>Microsoft 365 is so vast that not all the roles are displayed in the Microsoft 365 roles. The Exchange/email-specific roles are stored in the Exchange admin center. That way you can give admins specific rights to just Exchange Online. For example, you can give someone complete admin access to Exchange Online by assigning them the Microsoft 365 Exchange administrator role or you can assign them the Organization Management Exchange Online role. One thing to note, if you're a global administrator you're already assigned the organization management role.</p>
                    <h3>How to assign Exchange Online admin roles</h3>
                    <p>1. Go to <a href="https://admin.exchange.microsoft.com/#/adminRoles" target="_blank" rel="noreferrer">https://admin.exchange.microsoft.com/#/adminRoles</a> and sign in with your admin credentials.</p>
                    <p>2. Click the role you want to assign to a user. Then click the <strong>Assigned</strong> tab. Finally, click <strong>Add</strong>.</p>
                    <div ><img src="https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png" alt="Assign Exchange Online admin roles" height="709" width="1610" style="aspect-ratio: auto 1610 / 709; height: auto;" /></div>
                    <p>3. Type the name of the user you want to add as an admin. Click the user in the drop-down.</p>
                    <div ><img src="https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png" alt="Exchange Online add admin" height="260" width="586" style="aspect-ratio: auto 586 / 260; height: auto;" /></div>
                    <p>4. Click <strong>Add</strong>.</p>
                    <div ><img src="https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png" alt="Add user to Exchange admin role" height="411" width="537" style="aspect-ratio: auto 537 / 411; height: auto;" /></div>
                    <h3><span >How to view the rights of Exchange Online admin roles</span>&nbsp;</h3>
                    <p>Just like the Microsoft 365 admin roles, you can view the description and see the permissions assigned to each role.</p>
                    <p>1. To view the description go to <a href="https://admin.exchange.microsoft.com/#/adminRoles" target="_blank" rel="noreferrer">https://admin.exchange.microsoft.com/#/adminRoles</a> and click the role you want to view.</p>
                    <div ><img src="https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png" alt="View the Exchange Online admin role descrptions" height="720" width="1560" style="aspect-ratio: auto 1560 / 720; height: auto;" /></div>
                    <p>2. To view the permissions assigned click the <strong>Permissions </strong>tab. You can review the permissions by hovering the mouse over the <strong>I</strong>.</p>
                    <div ><img src="https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png" alt="Exchange Online admin role permissions" height="368" width="533" style="aspect-ratio: auto 533 / 368; height: auto;" /></div>
                    <h3>A few key Exchange Online roles</h3>
                    <h4>Organization Management</h4>
                    <p>Organization Management members can manage virtually everything in Exchange Online. It's like the global admin but for Exchange Online.</p>
                    <h4>Discovery Management</h4>
                    <p>Discovery management members can perform searches of mailboxes and manage legal holds / preserve all the mailbox content.</p>
                    <h4>Recipient Management</h4>
                    <p>Recipient Management members can create, manage, and remove recipients in Exchange Online.</p>
                    <h2>Security &amp; Compliance Roles</h2>
                    <p>Microsoft 365 and Exchange Online aren't the only places roles are set up. There are also roles in the security and compliance admin center. These roles work virtually the same as the Microsoft 365 and Exchange Online roles. Each role has a name, description, permissions assigned, and members of the role but there is a small difference. Half the security &amp; compliance roles are stored in Azure AD. The other half are compliance center roles. So let's take a look at assigning compliance center roles.</p>
                    <h3>How to assign roles to users</h3>
                    <p>1. Go to <a href="https://compliance.microsoft.com/permissions" target="_blank" rel="noreferrer">https://compliance.microsoft.com/permissions</a>.</p>
                    <p>2. Click <strong>Roles</strong> under Compliance center.</p>
                    <div ><img src="https://i.ibb.co/N2mM2rk/compliance-center-roles.png" alt="Microsoft 365 compliance center open roles button" height="385" width="1344" style="aspect-ratio: auto 1344 / 385; height: auto;" /></div>
                    <p>3. Click the role you want to assign</p>
                    <div ><img src="https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png" alt="Compliance role edit members" height="690" width="924" style="aspect-ratio: auto 924 / 690; height: auto;" /></div>
                    <p>4. Click <strong>Choose members</strong></p>
                    <div ><img src="https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - choose members" height="242" width="410" style="aspect-ratio: auto 410 / 242; height: auto;" /></div>
                    <p>5. Click <strong>Add</strong></p>
                    <div ><img src="https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png" alt="compliance center roles - add members" height="244" width="274" style="aspect-ratio: auto 274 / 244; height: auto;" /></div>
                    <p>6. Click the checkmark next to the users you want to add to the role. Verify the number of users you select appears next to Added. Click <strong>Add</strong>.</p>
                    <div ><img src="https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - select members to add" height="852" width="963" style="aspect-ratio: auto 963 / 852; height: auto;" /></div>
                    <p>7. Click <strong>Done</strong> then click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - Save member change" height="266" width="395" style="aspect-ratio: auto 395 / 266; height: auto;" /></div>
                    <h3>How to view the rights of compliance center admin roles</h3>
                    <p>It's easy to view the assigned roles to the role groups.</p>
                    <p>1. Go to <a href="https://compliance.microsoft.com/compliancecenterpermissions" target="_blank" rel="noreferrer">https://compliance.microsoft.com/compliancecenterpermissions</a> and sign in with your admin permissions.</p>
                    <p>2. Click the role you want to view the permissions for.</p>
                    <p>3. View the Assigned roles.</p>
                    <div ><img src="https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png" alt="Compliance center roles - view assigned roles" height="809" width="819" style="aspect-ratio: auto 819 / 809; height: auto;" /></div>
                    <h3>A few key compliance center admin roles</h3>
                    <p>In the next section, I'll review a few key roles and what they have access to do. It's important to remember what roles can perform what permissions as part of the MS-500 test.</p>
                    <h4>Global admin</h4>
                    <p>The global admin in the Microsoft 365 tenant have access to the entire compliance center. They can add and remove roles and members from roles. They can even add themselves to compliance center roles.</p>
                    <h4>eDiscovery managers</h4>
                    <p><span >An eDiscovery manager can perform searches, including exporting and previewing the results. </span> They can create, as well as, manage eDiscovery cases including adding members to the cases. They can't access or manage cases created by other eDiscovery Managers.</p>
                    <h4>eDiscovery administrators</h4>
                    <p>eDiscovery administrators can perform all the functions as an eDiscovery manager + manage other people's cases.</p>
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
