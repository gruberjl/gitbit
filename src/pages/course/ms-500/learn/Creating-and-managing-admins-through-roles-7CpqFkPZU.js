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
      path: '/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU',
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7730l', text: 'Now let\'s take a look at assigning admin roles. There are a lot of different models and strategies to manage administrative rights but the one Microsoft chose to implement in Microsoft 365 is Role-Based Access Control (RBAC). The way RBAC works is the administrative rights or permissions you\'re given in the organization are based on your role. In short, Microsoft has implemented several roles that can be assigned to users that will grant user-specific rights.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'efpcq', text: 'One of the best things about roles is roles will allow us to see exactly what rights a user has. It isn\'t so obvious with groups. You probably work with groups in your on-premise environment. Where you create a group, assign members to the group, and then assign permissions to the group. But here\'s the problem, there\'s nothing that documents what rights those groups had. With roles, you can see exactly what admin rights the roles have. In Microsoft 365 there are built-in roles that are assigned several permissions across your tenant but you can also create a custom role and assign it rights. Then you or another admin can review the rights that are assigned to that role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eh4sc', text: 'What\'s the principle of least privilege?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9ottd', text: 'In short, it\'s a concept in cybersecurity to give out the least amount of permissions that is possible. In short, you don\'t want everyone being global admins because then someone that\'s upset with your organization or accidentally may screw up your Microsoft 365 tenant. For example, someone that manages your email environment doesn\'t need to be a SharePoint admin. Microsoft will always recommend the principle of least privilege. So if you see a question regarding what role does user X need to do Y? Always select the role that gives the least amount of permissions', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e2igu', text: 'How to assign roles to users', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 70, offset: 9}], inlineStyleRanges: [], key: '8krko', text: '1. Go to https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 58, style: 'BOLD'}], key: '4bae5', text: '2. Click the user you want to assign a role to then click Manage roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '7gn96', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 9, style: 'BOLD'}], key: '38v22', text: '3. Click Admin center access then select the roles you want to assign.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fphpb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 20, offset: 52, style: 'BOLD'}], key: 'd48gp', text: 'If you want to give more specific permissions click Show all by category.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'af3ne', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ui8u', text: 'How to view the rights of admin roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 1, offset: 67, style: 'BOLD'}], key: '5go99', text: 'A quick overview of the admin role can be seen by highlighting the I next to the role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '43k3p', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ascj1', text: 'But to see the actual role permissions assigned you\'ll need to use Azure Active Directory', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 101, offset: 9}], inlineStyleRanges: [], key: 'f9tbg', text: '1. Go to https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2h08', text: '2. Click the administrative role you want to view the permissions for.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5vcj3', text: 'From this page, you can view all the roles in your tenant. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'drtd9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}], key: '4gm99', text: '3. Click Description. From there you can view the role permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '5gf7m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'emkn9', text: 'A few key Microsoft 365 roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cqsgo', text: 'In the next section, I\'ll review a few key roles and what they have access to do. It\'s important to remember what roles can perform what permissions as part of the MS-500 test.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7punv', text: 'Global administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dl96a', text: 'The global administrator has full access to everything. They can assign roles, reset passwords of other admins. Take ownership of mailboxes and OneDrive containers. You\'ll want to be careful to who you assign the global administrator role. They have the keys to the kingdom.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fg68s', text: 'Password administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1dppo', text: 'The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8gv6i', text: 'Directory readers', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'puu6', text: 'Guest inviter', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '59fde', text: 'Password administrator', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'afu5t', text: 'Let\'s take an example, Let\'s say you have a user John Gruber that\'s a password administrator. And you have a global admin named Kendra Smith and a regular user Daniel James. Who\'s password can John Gruber reset? Daniel\'s. John can\'t reset Kendra\'s password because she\'s a global administrator.', type: 'unstyled'}, {data: {'text-align': 'start'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 15, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 15, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 15, offset: 0, style: 'fontsize-1.75rem'}, {length: 15, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '6v962', text: 'Security Reader', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 164, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 164, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 164, offset: 0, style: 'fontsize-16'}, {length: 164, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'dvmb7', text: 'Users with the security reader role have global read-only access to view the security configuration. The users with the security reader role can view the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 43, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 43, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 43, offset: 0, style: 'fontsize-16'}, {length: 43, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '7tj61', text: 'View Azure Active Directory sign-in reports', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 38, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 38, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 38, offset: 0, style: 'fontsize-16'}, {length: 38, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '2r5qf', text: 'View Azure Active Directory audit logs', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 51, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 51, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 51, offset: 0, style: 'fontsize-16'}, {length: 51, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '7qoke', text: 'View ATP reports in the Threat management dashboard', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 52, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 52, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 52, offset: 0, style: 'fontsize-16'}, {length: 52, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'f87db', text: 'Read-only access to the Security & Compliance Center', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 55, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 55, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 55, offset: 0, style: 'fontsize-16'}, {length: 55, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '2775m', text: 'Read-only access to the Microsoft 365 compliance center', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 85, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 85, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 85, offset: 0, style: 'fontsize-16'}, {length: 85, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '8e48d', text: 'Read the Microsoft Defender for Office 365 reports in the Threat management dashboard', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9q4p1', text: 'Security administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b435i', text: 'The security administrator role is assigned to users that manage the security of your Microsoft 365 tenant. The security administrator users will have all the permissions that the security reader has plus the ability to edit the security settings. It gives the users the permissions to perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dvvim', text: 'View ATP reports in the Threat management dashboard', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3n7hd', text: 'Create and modify data loss protection policies', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2ou6h', text: 'Create and manage labels', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dlkjc', text: 'Manage email protection (anti-phishing, safe links, and anti-malware)', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd0kbu', text: 'Privileged role administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bmb6r', text: 'Users with the privileged role administrator role can manage role assignments in Azure Active Directory. They can also enable, configure, and manage the Azure AD Privileged Identity Management. The privileged role administrators can assign other users with different admin roles. They cannot manage their own role permissions. For example, if John Gruber is assigned the privileged role administrator role then John Gruber can assign User1 with the reports reader role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '857u2', text: 'Service support administrator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b39ca', text: 'The service support administrator role is used to open support requests with Microsoft. They can also view the service dashboard and message center in the admin portals.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b3p82', text: 'Guest inviter', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e01vh', text: 'Members of the guest inviter role can invite guests even when the "members can invite" property is set to no. The guest inviter admin role isn\'t even really an admin because that\'s all they can do.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cma25', text: 'Security operator', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ar8td', text: 'Users with the security operator role can review the audit log but can\'t disable auditing. The security operator role users will also have global read-only access to the security-related features, including all information in Microsoft 365 security center, Azure Active Directory, and Privileged Identity Management. The security operator can also manage features in the identity protection center.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a8gca', text: 'Exchange Online Roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '73vt1', text: 'Microsoft 365 is so vast that not all the roles are displayed in the Microsoft 365 roles. The Exchange/email-specific roles are stored in the Exchange admin center. That way you can give admins specific rights to just Exchange Online. For example, you can give someone complete admin access to Exchange Online by assigning them the Microsoft 365 Exchange administrator role or you can assign them the Organization Management Exchange Online role. One thing to note, if you\'re a global administrator you\'re already assigned the organization management role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '14i54', text: 'How to assign Exchange Online admin roles', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 49, offset: 9}], inlineStyleRanges: [], key: 'epdkd', text: '1. Go to https://admin.exchange.microsoft.com/#/adminRoles and sign in with your admin credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 63, style: 'BOLD'}, {length: 3, offset: 92, style: 'BOLD'}], key: '3a60n', text: '2. Click the role you want to assign to a user. Then click the Assigned tab. Finally, click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '1n4hc', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7dr4j', text: '3. Type the name of the user you want to add as an admin. Click the user in the drop-down.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '59fmm', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}], key: 'blm19', text: '4. Click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fhnei', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 53, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 53, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 53, offset: 0, style: 'fontsize-32'}, {length: 53, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '5jcng', text: 'How to view the rights of Exchange Online admin roles ', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3cjni', text: 'Just like the Microsoft 365 admin roles, you can view the description and see the permissions assigned to each role.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 49, offset: 33}], inlineStyleRanges: [], key: 'erhap', text: '1. To view the description go to https://admin.exchange.microsoft.com/#/adminRoles and click the role you want to view.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '3j29k', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 46, style: 'BOLD'}, {length: 1, offset: 125, style: 'BOLD'}], key: 'bkq1i', text: '2. To view the permissions assigned click the Permissions tab. You can review the permissions by hovering the mouse over the I.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '8ledi', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd7jj2', text: 'A few key Exchange Online roles', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dil97', text: 'Organization Management', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6nnk2', text: 'Organization Management members can manage virtually everything in Exchange Online. It\'s like the global admin but for Exchange Online.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7uuu7', text: 'Discovery Management', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9vrvl', text: 'Discovery management members can perform searches of mailboxes and manage legal holds / preserve all the mailbox content.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '15eq5', text: 'Recipient Management', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fjntk', text: 'Recipient Management members can create, manage, and remove recipients in Exchange Online.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '27gk7', text: 'Security & Compliance Roles', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1vrjt', text: 'Microsoft 365 and Exchange Online aren\'t the only places roles are set up. There are also roles in the security and compliance admin center. These roles work virtually the same as the Microsoft 365 and Exchange Online roles. Each role has a name, description, permissions assigned, and members of the role but there is a small difference. Half the security & compliance roles are stored in Azure AD. The other half are compliance center roles. So let\'s take a look at assigning compliance center roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '489t7', text: 'How to assign roles to users', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 44, offset: 9}], inlineStyleRanges: [], key: '7rbmp', text: '1. Go to https://compliance.microsoft.com/permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}], key: 'aql7o', text: '2. Click Roles under Compliance center.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: 'baf18', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2mmlk', text: '3. Click the role you want to assign', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: '575f3', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}], key: 'fhg8h', text: '4. Click Choose members', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: '9t889', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}], key: 'dkk9j', text: '5. Click Add', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 1, offset: 0}], inlineStyleRanges: [], key: '4qrlo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 137, style: 'BOLD'}], key: 'a6id6', text: '6. Click the checkmark next to the users you want to add to the role. Verify the number of users you select appears next to Added. Click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c5cf8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}, {length: 4, offset: 25, style: 'BOLD'}], key: '68rrr', text: '7. Click Done then click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 1, offset: 0}], inlineStyleRanges: [], key: '3h3lv', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'mcqv', text: 'How to view the rights of compliance center admin roles', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eu46', text: 'It\'s easy to view the assigned roles to the role groups.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 60, offset: 9}], inlineStyleRanges: [], key: 'qqto', text: '1. Go to https://compliance.microsoft.com/compliancecenterpermissions and sign in with your admin permissions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '30uhu', text: '2. Click the role you want to view the permissions for.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'i3jg', text: '3. View the Assigned roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 1, offset: 0}], inlineStyleRanges: [], key: 'auenq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd7u69', text: 'A few key compliance center admin roles', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '47oq7', text: 'In the next section, I\'ll review a few key roles and what they have access to do. It\'s important to remember what roles can perform what permissions as part of the MS-500 test.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'g5r2', text: 'Global admin', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c04du', text: 'The global admin in the Microsoft 365 tenant have access to the entire compliance center. They can add and remove roles and members from roles. They can even add themselves to compliance center roles.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'flq1o', text: 'eDiscovery managers', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 92, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 92, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 92, offset: 0, style: 'fontsize-16'}, {length: 92, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '31oe9', text: 'An eDiscovery manager can perform searches, including exporting and previewing the results.  They can create, as well as, manage eDiscovery cases including adding members to the cases. They can\'t access or manage cases created by other eDiscovery Managers.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3d1jb', text: 'eDiscovery administrators', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b8jd1', text: 'eDiscovery administrators can perform all the functions as an eDiscovery manager + manage other people\'s cases.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'left', alt: 'Microsoft 365 assign a role to a user', height: 'auto', src: 'https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Microsoft 365 assign a role to a user', height: 'auto', src: 'https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Exchange Online add admin', height: 'auto', src: 'https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Add user to Exchange admin role', height: 'auto', src: 'https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'left', alt: 'View the Exchange Online admin role descrptions', height: 'auto', src: 'https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png', targetOption: '_blank', url: 'https://admin.exchange.microsoft.com/#/adminRoles', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 13: {data: {alignment: 'none', alt: 'View the Exchange Online admin role descrptions', height: 'auto', src: 'https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Exchange Online admin role permissions', height: 'auto', src: 'https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {targetOption: '_blank', url: 'https://compliance.microsoft.com/permissions'}, mutability: 'MUTABLE', type: 'LINK'}, 16: {data: {alignment: 'none', alt: 'Microsoft 365 compliance center open roles button', height: 'auto', src: 'https://i.ibb.co/N2mM2rk/compliance-center-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Compliance role edit members', height: 'auto', src: 'https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'left', alt: 'C:\\Users\\john.gruber\\Downloads\\compliance center roles - choose members', height: 'auto', src: 'https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alignment: 'none', alt: 'compliance center roles - add members', height: 'auto', src: 'https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Microsoft 365 assign admin role to user', height: 'auto', src: 'https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 20: {data: {alignment: 'none', alt: 'C:\\Users\\john.gruber\\Downloads\\compliance center roles - select members to add', height: 'auto', src: 'https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 21: {data: {alignment: 'none', alt: 'C:\\Users\\john.gruber\\Downloads\\compliance center roles - Save member change', height: 'auto', src: 'https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {data: {targetOption: '_blank', url: 'https://compliance.microsoft.com/compliancecenterpermissions'}, mutability: 'MUTABLE', type: 'LINK'}, 23: {data: {alignment: 'none', alt: 'Compliance center roles - view assigned roles', height: 'auto', src: 'https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Microsoft 365 admin role categories', height: 'auto', src: 'https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Microsoft 365 admin roles view description', height: 'auto', src: 'https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators'}, mutability: 'MUTABLE', type: 'LINK'}, 6: {data: {alignment: 'none', alt: 'Azure AD Roles', height: 'auto', src: 'https://i.ibb.co/gVnhfmz/azure-ad-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'C:\\Users\\john.gruber\\Downloads\\azure ad role permissions descriptions', height: 'auto', src: 'https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {targetOption: '_blank', url: 'https://admin.exchange.microsoft.com/#/adminRoles'}, mutability: 'MUTABLE', type: 'LINK'}, 9: {data: {alignment: 'none', alt: 'Assign Exchange Online admin roles', height: 'auto', src: 'https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'All the places you can assign admin roles in Microsoft 365', featuredImage: 'https://i.ibb.co/kySL4HQ/Roles-and-administrators.png', id: '7CpqFkPZU', images: ['https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png', 'https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png', 'https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png', 'https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png', 'https://i.ibb.co/gVnhfmz/azure-ad-roles.png', 'https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png', 'https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png', 'https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png', 'https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png', 'https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png', 'https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png', 'https://i.ibb.co/N2mM2rk/compliance-center-roles.png', 'https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png', 'https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png', 'https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png', 'https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png', 'https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png', 'https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png', 'https://i.ibb.co/kySL4HQ/Roles-and-administrators.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Creating-and-managing-admins-through-roles-7CpqFkPZU', title: 'Creating and managing admins through roles', type: 'article'},
      nextContentSlug: 'Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1',
      previousContentSlug: 'How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC',
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
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>Now let's take a look at assigning admin roles. There are a lot of different models and strategies to manage administrative rights but the one Microsoft chose to implement in Microsoft 365 is Role-Based Access Control (RBAC). The way RBAC works is the administrative rights or permissions you're given in the organization are based on your role. In short, Microsoft has implemented several roles that can be assigned to users that will grant user-specific rights.</p>
                    <p>One of the best things about roles is roles will allow us to see exactly what rights a user has. It isn't so obvious with groups. You probably work with groups in your on-premise environment. Where you create a group, assign members to the group, and then assign permissions to the group. But here's the problem, there's nothing that documents what rights those groups had. With roles, you can see exactly what admin rights the roles have. In Microsoft 365 there are built-in roles that are assigned several permissions across your tenant but you can also create a custom role and assign it rights. Then you or another admin can review the rights that are assigned to that role.</p>
                    <h2>What's the principle of least privilege?</h2>
                    <p>In short, it's a concept in cybersecurity to give out the least amount of permissions that is possible. In short, you don't want everyone being global admins because then someone that's upset with your organization or accidentally may screw up your Microsoft 365 tenant. For example, someone that manages your email environment doesn't need to be a SharePoint admin. Microsoft will always recommend the principle of least privilege. So if you see a question regarding what role does user X need to do Y? Always select the role that gives the least amount of permissions</p>
                    <h2>How to assign roles to users</h2>
                    <p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a>.</p>
                    <p>2. Click the user you want to assign a role to then click <strong>Manage roles</strong>.</p>
                    <div ><img src="https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png" alt="Microsoft 365 assign a role to a user" style="height: auto;width: auto" /></div>
                    <p>3. Click <strong>Admin center access</strong> then select the roles you want to assign.</p>
                    <div ><img src="https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png" alt="Microsoft 365 assign admin role to user" style="height: auto;width: auto" /></div>
                    <p>If you want to give more specific permissions click <strong>Show all by category</strong>.</p>
                    <div ><img src="https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png" alt="Microsoft 365 admin role categories" style="height: auto;width: auto" /></div>
                    <h2>How to view the rights of admin roles</h2>
                    <p>A quick overview of the admin role can be seen by highlighting the <strong>I</strong> next to the role.</p>
                    <div ><img src="https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png" alt="Microsoft 365 admin roles view description" style="height: auto;width: auto" /></div>
                    <p>But to see the actual role permissions assigned you'll need to use Azure Active Directory</p>
                    <p>1. Go to <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators" target="_blank" rel="noreferrer">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators</a></p>
                    <p>2. Click the administrative role you want to view the permissions for.</p>
                    <p>From this page, you can view all the roles in your tenant.&nbsp;</p>
                    <div ><img src="https://i.ibb.co/gVnhfmz/azure-ad-roles.png" alt="Azure AD Roles" style="height: auto;width: auto" /></div>
                    <p>3. Click <strong>Description</strong>. From there you can view the role permissions.</p>
                    <div ><img src="https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png" alt="C:\Users\john.gruber\Downloads\azure ad role permissions descriptions" style="height: auto;width: auto" /></div>
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
                    <div ><img src="https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png" alt="Assign Exchange Online admin roles" style="height: auto;width: auto" /></div>
                    <p>3. Type the name of the user you want to add as an admin. Click the user in the drop-down.</p>
                    <div ><img src="https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png" alt="Exchange Online add admin" style="height: auto;width: auto" /></div>
                    <p>4. Click <strong>Add</strong>.</p>
                    <div ><img src="https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png" alt="Add user to Exchange admin role" style="height: auto;width: auto" /></div>
                    <h3><span >How to view the rights of Exchange Online admin roles</span>&nbsp;</h3>
                    <p>Just like the Microsoft 365 admin roles, you can view the description and see the permissions assigned to each role.</p>
                    <p>1. To view the description go to <a href="https://admin.exchange.microsoft.com/#/adminRoles" target="_blank" rel="noreferrer">https://admin.exchange.microsoft.com/#/adminRoles</a> and click the role you want to view.</p>
                    <div ><img src="https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png" alt="View the Exchange Online admin role descrptions" style="height: auto;width: auto" /></div>
                    <p>2. To view the permissions assigned click the <strong>Permissions </strong>tab. You can review the permissions by hovering the mouse over the <strong>I</strong>.</p>
                    <div ><img src="https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png" alt="Exchange Online admin role permissions" style="height: auto;width: auto" /></div>
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
                    <div ><img src="https://i.ibb.co/N2mM2rk/compliance-center-roles.png" alt="Microsoft 365 compliance center open roles button" style="height: auto;width: auto" /></div>
                    <p>3. Click the role you want to assign</p>
                    <div ><img src="https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png" alt="Compliance role edit members" style="height: auto;width: auto" /></div>
                    <p>4. Click <strong>Choose members</strong></p>
                    <div ><img src="https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - choose members" style="height: auto;width: auto" /></div>
                    <p>5. Click <strong>Add</strong></p>
                    <div ><img src="https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png" alt="compliance center roles - add members" style="height: auto;width: auto" /></div>
                    <p>6. Click the checkmark next to the users you want to add to the role. Verify the number of users you select appears next to Added. Click <strong>Add</strong>.</p>
                    <div ><img src="https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - select members to add" style="height: auto;width: auto" /></div>
                    <p>7. Click <strong>Done</strong> then click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - Save member change" style="height: auto;width: auto" /></div>
                    <h3>How to view the rights of compliance center admin roles</h3>
                    <p>It's easy to view the assigned roles to the role groups.</p>
                    <p>1. Go to <a href="https://compliance.microsoft.com/compliancecenterpermissions" target="_blank" rel="noreferrer">https://compliance.microsoft.com/compliancecenterpermissions</a> and sign in with your admin permissions.</p>
                    <p>2. Click the role you want to view the permissions for.</p>
                    <p>3. View the Assigned roles.</p>
                    <div ><img src="https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png" alt="Compliance center roles - view assigned roles" style="height: auto;width: auto" /></div>
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
                    <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                    <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
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
