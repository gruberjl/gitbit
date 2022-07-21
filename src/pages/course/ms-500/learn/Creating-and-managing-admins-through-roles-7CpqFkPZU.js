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
      path: '/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU',
      article: {"images":["https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png","https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png","https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png","https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png","https://i.ibb.co/gVnhfmz/azure-ad-roles.png","https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png","https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png","https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png","https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png","https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png","https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png","https://i.ibb.co/N2mM2rk/compliance-center-roles.png","https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png","https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png","https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png","https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png","https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png","https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png","https://i.ibb.co/kySL4HQ/Roles-and-administrators.png"],"sectionId":"AFV_acckJ","id":"7CpqFkPZU","description":"All the places you can assign admin roles in Microsoft 365","title":"Creating and managing admins through roles","featuredImage":"https://i.ibb.co/kySL4HQ/Roles-and-administrators.png","slug":"Creating-and-managing-admins-through-roles-7CpqFkPZU","datePublished":"2022/5/26","article":{"blocks":[{"depth":0,"inlineStyleRanges":[],"key":"7730l","text":"Now let's take a look at assigning admin roles. There are a lot of different models and strategies to manage administrative rights but the one Microsoft chose to implement in Microsoft 365 is Role-Based Access Control (RBAC). The way RBAC works is the administrative rights or permissions you're given in the organization are based on your role. In short, Microsoft has implemented several roles that can be assigned to users that will grant user-specific rights.","entityRanges":[],"data":{},"type":"unstyled"},{"depth":0,"entityRanges":[],"data":{},"text":"One of the best things about roles is roles will allow us to see exactly what rights a user has. It isn't so obvious with groups. You probably work with groups in your on-premise environment. Where you create a group, assign members to the group, and then assign permissions to the group. But here's the problem, there's nothing that documents what rights those groups had. With roles, you can see exactly what admin rights the roles have. In Microsoft 365 there are built-in roles that are assigned several permissions across your tenant but you can also create a custom role and assign it rights. Then you or another admin can review the rights that are assigned to that role.","key":"efpcq","type":"unstyled","inlineStyleRanges":[]},{"key":"eh4sc","data":{},"text":"What's the principle of least privilege?","type":"header-two","entityRanges":[],"inlineStyleRanges":[],"depth":0},{"type":"unstyled","entityRanges":[],"data":{},"key":"9ottd","depth":0,"text":"In short, it's a concept in cybersecurity to give out the least amount of permissions that is possible. In short, you don't want everyone being global admins because then someone that's upset with your organization or accidentally may screw up your Microsoft 365 tenant. For example, someone that manages your email environment doesn't need to be a SharePoint admin. Microsoft will always recommend the principle of least privilege. So if you see a question regarding what role does user X need to do Y? Always select the role that gives the least amount of permissions","inlineStyleRanges":[]},{"key":"e2igu","entityRanges":[],"data":{},"type":"header-two","depth":0,"inlineStyleRanges":[],"text":"How to assign roles to users"},{"depth":0,"data":{},"key":"8krko","text":"1. Go to https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users.","entityRanges":[{"offset":9,"key":0,"length":70}],"inlineStyleRanges":[],"type":"unstyled"},{"entityRanges":[],"inlineStyleRanges":[{"length":12,"offset":58,"style":"BOLD"}],"data":{},"depth":0,"type":"unstyled","key":"4bae5","text":"2. Click the user you want to assign a role to then click Manage roles."},{"inlineStyleRanges":[],"key":"7gn96","type":"atomic","data":{},"text":" ","entityRanges":[{"offset":0,"key":1,"length":1}],"depth":0},{"data":{},"entityRanges":[],"depth":0,"key":"38v22","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":19}],"text":"3. Click Admin center access then select the roles you want to assign.","type":"unstyled"},{"inlineStyleRanges":[],"key":"fphpb","depth":0,"data":{},"text":" ","type":"atomic","entityRanges":[{"offset":0,"key":2,"length":1}]},{"inlineStyleRanges":[{"style":"BOLD","length":20,"offset":52}],"text":"If you want to give more specific permissions click Show all by category.","entityRanges":[],"depth":0,"data":{},"key":"d48gp","type":"unstyled"},{"key":"af3ne","text":" ","entityRanges":[{"offset":0,"key":3,"length":1}],"depth":0,"inlineStyleRanges":[],"data":{},"type":"atomic"},{"type":"header-two","data":{},"text":"How to view the rights of admin roles","key":"6ui8u","depth":0,"inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[],"text":"A quick overview of the admin role can be seen by highlighting the I next to the role.","inlineStyleRanges":[{"style":"BOLD","offset":67,"length":1}],"depth":0,"data":{},"type":"unstyled","key":"5go99"},{"key":"43k3p","depth":0,"inlineStyleRanges":[],"data":{},"type":"atomic","entityRanges":[{"offset":0,"length":1,"key":4}],"text":" "},{"key":"ascj1","data":{},"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"text":"But to see the actual role permissions assigned you'll need to use Azure Active Directory","depth":0},{"data":{},"inlineStyleRanges":[],"type":"unstyled","depth":0,"key":"f9tbg","entityRanges":[{"offset":9,"key":5,"length":101}],"text":"1. Go to https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators"},{"data":{},"type":"unstyled","text":"2. Click the administrative role you want to view the permissions for.","entityRanges":[],"key":"2h08","inlineStyleRanges":[],"depth":0},{"data":{},"type":"unstyled","entityRanges":[],"key":"5vcj3","depth":0,"text":"From this page, you can view all the roles in your tenant. ","inlineStyleRanges":[]},{"depth":0,"entityRanges":[{"offset":0,"key":6,"length":1}],"inlineStyleRanges":[],"text":" ","key":"drtd9","type":"atomic","data":{}},{"depth":0,"data":{},"text":"3. Click Description. From there you can view the role permissions.","type":"unstyled","key":"4gm99","entityRanges":[],"inlineStyleRanges":[{"length":11,"offset":9,"style":"BOLD"}]},{"depth":0,"type":"atomic","text":" ","entityRanges":[{"key":7,"length":1,"offset":0}],"inlineStyleRanges":[],"key":"5gf7m","data":{}},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"header-two","key":"emkn9","data":{},"text":"A few key Microsoft 365 roles"},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"data":{},"text":"In the next section, I'll review a few key roles and what they have access to do. It's important to remember what roles can perform what permissions as part of the MS-500 test.","key":"cqsgo","type":"unstyled"},{"entityRanges":[],"key":"7punv","data":{},"type":"header-three","depth":0,"inlineStyleRanges":[],"text":"Global administrator"},{"inlineStyleRanges":[],"key":"dl96a","text":"The global administrator has full access to everything. They can assign roles, reset passwords of other admins. Take ownership of mailboxes and OneDrive containers. You'll want to be careful to who you assign the global administrator role. They have the keys to the kingdom.","data":{},"depth":0,"type":"unstyled","entityRanges":[]},{"key":"fg68s","depth":0,"inlineStyleRanges":[],"text":"Password administrator","entityRanges":[],"data":{},"type":"header-three"},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unstyled","key":"1dppo","data":{},"text":"The password administrator can reset passwords for non-administrator users. The password administrators can also reset the passwords for the following roles:"},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"8gv6i","depth":0,"text":"Directory readers","type":"unordered-list-item"},{"type":"unordered-list-item","text":"Guest inviter","entityRanges":[],"key":"puu6","depth":0,"inlineStyleRanges":[],"data":{}},{"data":{},"entityRanges":[],"inlineStyleRanges":[],"depth":0,"text":"Password administrator","type":"unordered-list-item","key":"59fde"},{"key":"afu5t","data":{},"inlineStyleRanges":[],"entityRanges":[],"text":"Let's take an example, Let's say you have a user John Gruber that's a password administrator. And you have a global admin named Kendra Smith and a regular user Daniel James. Who's password can John Gruber reset? Daniel's. John can't reset Kendra's password because she's a global administrator.","type":"unstyled","depth":0},{"entityRanges":[],"type":"header-three","text":"Security Reader","data":{"text-align":"start"},"inlineStyleRanges":[{"length":15,"offset":0,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":15,"offset":0},{"length":15,"offset":0,"style":"fontsize-1.75rem"},{"offset":0,"length":15,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"depth":0,"key":"6v962"},{"text":"Users with the security reader role have global read-only access to view the security configuration. The users with the security reader role can view the following:","key":"dvmb7","depth":0,"data":{},"entityRanges":[],"inlineStyleRanges":[{"length":164,"style":"color-rgb(33,37,41)","offset":0},{"length":164,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"length":164,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":164,"offset":0}],"type":"unstyled"},{"inlineStyleRanges":[{"offset":0,"length":43,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":43},{"style":"fontsize-16","offset":0,"length":43},{"length":43,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"entityRanges":[],"type":"unordered-list-item","text":"View Azure Active Directory sign-in reports","data":{},"key":"7tj61","depth":0},{"depth":0,"entityRanges":[],"key":"2r5qf","inlineStyleRanges":[{"length":38,"style":"color-rgb(33,37,41)","offset":0},{"length":38,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"style":"fontsize-16","length":38},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":38,"offset":0}],"text":"View Azure Active Directory audit logs","data":{},"type":"unordered-list-item"},{"text":"View ATP reports in the Threat management dashboard","key":"7qoke","entityRanges":[],"data":{},"depth":0,"type":"unordered-list-item","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":51,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":51,"offset":0},{"length":51,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":51,"offset":0}]},{"entityRanges":[],"type":"unordered-list-item","text":"Read-only access to the Security & Compliance Center","inlineStyleRanges":[{"length":52,"offset":0,"style":"color-rgb(33,37,41)"},{"length":52,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","offset":0,"length":52},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":52,"offset":0}],"depth":0,"key":"f87db","data":{}},{"inlineStyleRanges":[{"length":55,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"length":55,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":55,"offset":0},{"length":55,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"type":"unordered-list-item","depth":0,"text":"Read-only access to the Microsoft 365 compliance center","entityRanges":[],"data":{},"key":"2775m"},{"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":85},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":85},{"style":"fontsize-16","length":85,"offset":0},{"length":85,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"entityRanges":[],"depth":0,"key":"8e48d","data":{},"text":"Read the Microsoft Defender for Office 365 reports in the Threat management dashboard","type":"unordered-list-item"},{"key":"9q4p1","inlineStyleRanges":[],"text":"Security administrator","entityRanges":[],"type":"header-three","data":{},"depth":0},{"key":"b435i","depth":0,"data":{},"type":"unstyled","entityRanges":[],"text":"The security administrator role is assigned to users that manage the security of your Microsoft 365 tenant. The security administrator users will have all the permissions that the security reader has plus the ability to edit the security settings. It gives the users the permissions to perform the following:","inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[],"text":"View ATP reports in the Threat management dashboard","key":"dvvim","data":{},"entityRanges":[],"type":"unordered-list-item"},{"inlineStyleRanges":[],"text":"Create and modify data loss protection policies","depth":0,"key":"3n7hd","data":{},"entityRanges":[],"type":"unordered-list-item"},{"data":{},"entityRanges":[],"key":"2ou6h","inlineStyleRanges":[],"text":"Create and manage labels","depth":0,"type":"unordered-list-item"},{"text":"Manage email protection (anti-phishing, safe links, and anti-malware)","type":"unordered-list-item","inlineStyleRanges":[],"depth":0,"key":"dlkjc","data":{},"entityRanges":[]},{"data":{},"inlineStyleRanges":[],"type":"header-three","text":"Privileged role administrator","key":"d0kbu","entityRanges":[],"depth":0},{"text":"Users with the privileged role administrator role can manage role assignments in Azure Active Directory. They can also enable, configure, and manage the Azure AD Privileged Identity Management. The privileged role administrators can assign other users with different admin roles. They cannot manage their own role permissions. For example, if John Gruber is assigned the privileged role administrator role then John Gruber can assign User1 with the reports reader role.","type":"unstyled","depth":0,"key":"bmb6r","data":{},"inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"text":"Service support administrator","data":{},"depth":0,"key":"857u2","type":"header-three"},{"inlineStyleRanges":[],"key":"b39ca","depth":0,"type":"unstyled","data":{},"entityRanges":[],"text":"The service support administrator role is used to open support requests with Microsoft. They can also view the service dashboard and message center in the admin portals."},{"inlineStyleRanges":[],"key":"b3p82","text":"Guest inviter","depth":0,"data":{},"entityRanges":[],"type":"header-three"},{"entityRanges":[],"key":"e01vh","inlineStyleRanges":[],"text":"Members of the guest inviter role can invite guests even when the \"members can invite\" property is set to no. The guest inviter admin role isn't even really an admin because that's all they can do.","type":"unstyled","depth":0,"data":{}},{"key":"cma25","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[],"text":"Security operator","type":"header-three"},{"type":"unstyled","inlineStyleRanges":[],"key":"ar8td","entityRanges":[],"data":{},"text":"Users with the security operator role can review the audit log but can't disable auditing. The security operator role users will also have global read-only access to the security-related features, including all information in Microsoft 365 security center, Azure Active Directory, and Privileged Identity Management. The security operator can also manage features in the identity protection center.","depth":0},{"key":"a8gca","entityRanges":[],"type":"header-two","depth":0,"inlineStyleRanges":[],"text":"Exchange Online Roles","data":{}},{"inlineStyleRanges":[],"data":{},"text":"Microsoft 365 is so vast that not all the roles are displayed in the Microsoft 365 roles. The Exchange/email-specific roles are stored in the Exchange admin center. That way you can give admins specific rights to just Exchange Online. For example, you can give someone complete admin access to Exchange Online by assigning them the Microsoft 365 Exchange administrator role or you can assign them the Organization Management Exchange Online role. One thing to note, if you're a global administrator you're already assigned the organization management role.","entityRanges":[],"key":"73vt1","depth":0,"type":"unstyled"},{"depth":0,"key":"14i54","data":{},"text":"How to assign Exchange Online admin roles","type":"header-three","entityRanges":[],"inlineStyleRanges":[]},{"key":"epdkd","depth":0,"inlineStyleRanges":[],"type":"unstyled","text":"1. Go to https://admin.exchange.microsoft.com/#/adminRoles and sign in with your admin credentials.","entityRanges":[{"length":49,"offset":9,"key":8}],"data":{}},{"key":"3a60n","inlineStyleRanges":[{"style":"BOLD","offset":63,"length":8},{"length":3,"style":"BOLD","offset":92}],"entityRanges":[],"depth":0,"text":"2. Click the role you want to assign to a user. Then click the Assigned tab. Finally, click Add.","type":"unstyled","data":{}},{"inlineStyleRanges":[],"data":{},"entityRanges":[{"offset":0,"key":9,"length":1}],"type":"atomic","key":"1n4hc","depth":0,"text":" "},{"data":{},"key":"7dr4j","inlineStyleRanges":[],"text":"3. Type the name of the user you want to add as an admin. Click the user in the drop-down.","depth":0,"type":"unstyled","entityRanges":[]},{"data":{},"text":" ","entityRanges":[{"offset":0,"key":10,"length":1}],"key":"59fmm","depth":0,"type":"atomic","inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":3,"offset":9}],"data":{},"type":"unstyled","depth":0,"key":"blm19","text":"4. Click Add."},{"text":" ","entityRanges":[{"offset":0,"key":11,"length":1}],"inlineStyleRanges":[],"type":"atomic","data":{},"depth":0,"key":"fhnei"},{"text":"How to view the rights of Exchange Online admin roles ","type":"header-three","data":{},"entityRanges":[],"depth":0,"key":"5jcng","inlineStyleRanges":[{"length":53,"style":"color-rgb(33,37,41)","offset":0},{"style":"bgcolor-rgb(255,255,255)","length":53,"offset":0},{"offset":0,"length":53,"style":"fontsize-32"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":53}]},{"inlineStyleRanges":[],"key":"3cjni","entityRanges":[],"type":"unstyled","depth":0,"text":"Just like the Microsoft 365 admin roles, you can view the description and see the permissions assigned to each role.","data":{}},{"entityRanges":[{"length":49,"key":12,"offset":33}],"inlineStyleRanges":[],"text":"1. To view the description go to https://admin.exchange.microsoft.com/#/adminRoles and click the role you want to view.","key":"erhap","type":"unstyled","depth":0,"data":{}},{"data":{},"inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":13,"length":1}],"depth":0,"text":" ","type":"atomic","key":"3j29k"},{"text":"2. To view the permissions assigned click the Permissions tab. You can review the permissions by hovering the mouse over the I.","key":"bkq1i","inlineStyleRanges":[{"offset":46,"style":"BOLD","length":12},{"offset":125,"style":"BOLD","length":1}],"depth":0,"entityRanges":[],"data":{},"type":"unstyled"},{"entityRanges":[{"key":14,"length":1,"offset":0}],"type":"atomic","text":" ","inlineStyleRanges":[],"key":"8ledi","data":{},"depth":0},{"entityRanges":[],"text":"A few key Exchange Online roles","key":"d7jj2","data":{},"type":"header-three","depth":0,"inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"text":"Organization Management","depth":0,"key":"dil97","entityRanges":[],"type":"header-four"},{"key":"6nnk2","inlineStyleRanges":[],"data":{},"depth":0,"text":"Organization Management members can manage virtually everything in Exchange Online. It's like the global admin but for Exchange Online.","entityRanges":[],"type":"unstyled"},{"type":"header-four","key":"7uuu7","data":{},"inlineStyleRanges":[],"text":"Discovery Management","depth":0,"entityRanges":[]},{"entityRanges":[],"depth":0,"key":"9vrvl","text":"Discovery management members can perform searches of mailboxes and manage legal holds / preserve all the mailbox content.","type":"unstyled","data":{},"inlineStyleRanges":[]},{"depth":0,"type":"header-four","entityRanges":[],"key":"15eq5","data":{},"text":"Recipient Management","inlineStyleRanges":[]},{"entityRanges":[],"data":{},"depth":0,"text":"Recipient Management members can create, manage, and remove recipients in Exchange Online.","inlineStyleRanges":[],"key":"fjntk","type":"unstyled"},{"data":{},"entityRanges":[],"type":"header-two","depth":0,"key":"27gk7","inlineStyleRanges":[],"text":"Security & Compliance Roles"},{"entityRanges":[],"data":{},"inlineStyleRanges":[],"type":"unstyled","text":"Microsoft 365 and Exchange Online aren't the only places roles are set up. There are also roles in the security and compliance admin center. These roles work virtually the same as the Microsoft 365 and Exchange Online roles. Each role has a name, description, permissions assigned, and members of the role but there is a small difference. Half the security & compliance roles are stored in Azure AD. The other half are compliance center roles. So let's take a look at assigning compliance center roles.","key":"1vrjt","depth":0},{"entityRanges":[],"key":"489t7","data":{},"text":"How to assign roles to users","inlineStyleRanges":[],"depth":0,"type":"header-three"},{"key":"7rbmp","inlineStyleRanges":[],"depth":0,"data":{},"type":"unstyled","text":"1. Go to https://compliance.microsoft.com/permissions.","entityRanges":[{"offset":9,"length":44,"key":15}]},{"depth":0,"text":"2. Click Roles under Compliance center.","entityRanges":[],"inlineStyleRanges":[{"length":5,"offset":9,"style":"BOLD"}],"type":"unstyled","key":"aql7o","data":{}},{"depth":0,"type":"atomic","key":"baf18","text":" ","data":{},"entityRanges":[{"offset":0,"key":16,"length":1}],"inlineStyleRanges":[]},{"depth":0,"key":"2mmlk","data":{},"text":"3. Click the role you want to assign","entityRanges":[],"type":"unstyled","inlineStyleRanges":[]},{"type":"atomic","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":17}],"text":" ","key":"575f3"},{"entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":14}],"key":"fhg8h","text":"4. Click Choose members","depth":0,"data":{}},{"data":{},"entityRanges":[{"key":18,"length":1,"offset":0}],"inlineStyleRanges":[],"type":"atomic","key":"9t889","text":" ","depth":0},{"text":"5. Click Add","entityRanges":[],"key":"dkk9j","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":3}],"data":{},"type":"unstyled","depth":0},{"entityRanges":[{"offset":0,"length":1,"key":19}],"depth":0,"inlineStyleRanges":[],"data":{},"type":"atomic","key":"4qrlo","text":" "},{"key":"a6id6","entityRanges":[],"data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":3,"offset":137}],"text":"6. Click the checkmark next to the users you want to add to the role. Verify the number of users you select appears next to Added. Click Add."},{"depth":0,"entityRanges":[{"offset":0,"length":1,"key":20}],"data":{},"inlineStyleRanges":[],"type":"atomic","text":" ","key":"c5cf8"},{"data":{},"key":"68rrr","type":"unstyled","depth":0,"text":"7. Click Done then click Save.","inlineStyleRanges":[{"length":4,"style":"BOLD","offset":9},{"offset":25,"length":4,"style":"BOLD"}],"entityRanges":[]},{"entityRanges":[{"key":21,"offset":0,"length":1}],"text":" ","depth":0,"data":{},"type":"atomic","key":"3h3lv","inlineStyleRanges":[]},{"inlineStyleRanges":[],"type":"header-three","entityRanges":[],"depth":0,"key":"mcqv","data":{},"text":"How to view the rights of compliance center admin roles"},{"text":"It's easy to view the assigned roles to the role groups.","inlineStyleRanges":[],"data":{},"depth":0,"key":"eu46","entityRanges":[],"type":"unstyled"},{"text":"1. Go to https://compliance.microsoft.com/compliancecenterpermissions and sign in with your admin permissions.","type":"unstyled","inlineStyleRanges":[],"entityRanges":[{"key":22,"offset":9,"length":60}],"data":{},"depth":0,"key":"qqto"},{"entityRanges":[],"key":"30uhu","text":"2. Click the role you want to view the permissions for.","depth":0,"inlineStyleRanges":[],"data":{},"type":"unstyled"},{"type":"unstyled","inlineStyleRanges":[],"depth":0,"data":{},"key":"i3jg","text":"3. View the Assigned roles.","entityRanges":[]},{"key":"auenq","inlineStyleRanges":[],"data":{},"entityRanges":[{"length":1,"offset":0,"key":23}],"type":"atomic","depth":0,"text":" "},{"entityRanges":[],"text":"A few key compliance center admin roles","data":{},"key":"d7u69","type":"header-three","depth":0,"inlineStyleRanges":[]},{"key":"47oq7","data":{},"entityRanges":[],"text":"In the next section, I'll review a few key roles and what they have access to do. It's important to remember what roles can perform what permissions as part of the MS-500 test.","type":"unstyled","depth":0,"inlineStyleRanges":[]},{"key":"g5r2","type":"header-four","data":{},"entityRanges":[],"text":"Global admin","inlineStyleRanges":[],"depth":0},{"data":{},"inlineStyleRanges":[],"type":"unstyled","text":"The global admin in the Microsoft 365 tenant have access to the entire compliance center. They can add and remove roles and members from roles. They can even add themselves to compliance center roles.","key":"c04du","entityRanges":[],"depth":0},{"inlineStyleRanges":[],"text":"eDiscovery managers","key":"flq1o","data":{},"type":"header-four","entityRanges":[],"depth":0},{"key":"31oe9","entityRanges":[],"depth":0,"inlineStyleRanges":[{"length":92,"offset":0,"style":"color-rgb(33,37,41)"},{"offset":0,"length":92,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":92,"offset":0},{"length":92,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"type":"unstyled","data":{},"text":"An eDiscovery manager can perform searches, including exporting and previewing the results.  They can create, as well as, manage eDiscovery cases including adding members to the cases. They can't access or manage cases created by other eDiscovery Managers."},{"key":"3d1jb","data":{},"depth":0,"entityRanges":[],"text":"eDiscovery administrators","inlineStyleRanges":[],"type":"header-four"},{"data":{},"text":"eDiscovery administrators can perform all the functions as an eDiscovery manager + manage other people's cases.","key":"b8jd1","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[]}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","src":"https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png","width":"auto","height":"auto","alignment":"left","url":"https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users","alt":"Microsoft 365 assign a role to a user"}},"1":{"data":{"alt":"Microsoft 365 assign a role to a user","height":"auto","src":"https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png","width":"auto","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"2":{"type":"IMAGE","data":{"alignment":"none","src":"https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png","width":"auto","alt":"Microsoft 365 assign admin role to user","height":"auto"},"mutability":"MUTABLE"},"3":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png","alt":"Microsoft 365 admin role categories","height":"auto","alignment":"none"}},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png","alignment":"none","height":"auto","width":"auto","alt":"Microsoft 365 admin roles view description"}},"5":{"data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"6":{"type":"IMAGE","data":{"width":"auto","height":"auto","src":"https://i.ibb.co/gVnhfmz/azure-ad-roles.png","alt":"Azure AD Roles","alignment":"none"},"mutability":"MUTABLE"},"7":{"type":"IMAGE","data":{"alignment":"none","height":"auto","width":"auto","alt":"C:\\Users\\john.gruber\\Downloads\\azure ad role permissions descriptions","src":"https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png"},"mutability":"MUTABLE"},"8":{"mutability":"MUTABLE","data":{"url":"https://admin.exchange.microsoft.com/#/adminRoles","targetOption":"_blank"},"type":"LINK"},"9":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","width":"auto","height":"auto","alt":"Assign Exchange Online admin roles","src":"https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png"}},"10":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png","width":"auto","height":"auto","alignment":"none","alt":"Exchange Online add admin"}},"11":{"type":"IMAGE","data":{"alignment":"none","height":"auto","alt":"Add user to Exchange admin role","src":"https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png","width":"auto"},"mutability":"MUTABLE"},"12":{"data":{"width":"auto","src":"https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png","alignment":"left","height":"auto","alt":"View the Exchange Online admin role descrptions","targetOption":"_blank","url":"https://admin.exchange.microsoft.com/#/adminRoles"},"mutability":"MUTABLE","type":"LINK"},"13":{"data":{"src":"https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png","alignment":"none","width":"auto","height":"auto","alt":"View the Exchange Online admin role descrptions"},"type":"IMAGE","mutability":"MUTABLE"},"14":{"type":"IMAGE","data":{"alignment":"none","height":"auto","src":"https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png","width":"auto","alt":"Exchange Online admin role permissions"},"mutability":"MUTABLE"},"15":{"type":"LINK","data":{"url":"https://compliance.microsoft.com/permissions","targetOption":"_blank"},"mutability":"MUTABLE"},"16":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Microsoft 365 compliance center open roles button","src":"https://i.ibb.co/N2mM2rk/compliance-center-roles.png","alignment":"none","height":"auto","width":"auto"}},"17":{"type":"IMAGE","data":{"height":"auto","alignment":"none","width":"auto","alt":"Compliance role edit members","src":"https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png"},"mutability":"MUTABLE"},"18":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","src":"https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png","height":"auto","alignment":"left","alt":"C:\\Users\\john.gruber\\Downloads\\compliance center roles - choose members"}},"19":{"data":{"width":"auto","alignment":"none","alt":"compliance center roles - add members","height":"auto","src":"https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png"},"type":"IMAGE","mutability":"MUTABLE"},"20":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png","alignment":"none","height":"auto","alt":"C:\\Users\\john.gruber\\Downloads\\compliance center roles - select members to add","width":"auto"}},"21":{"data":{"alignment":"none","width":"auto","alt":"C:\\Users\\john.gruber\\Downloads\\compliance center roles - Save member change","src":"https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"22":{"type":"LINK","data":{"targetOption":"_blank","url":"https://compliance.microsoft.com/compliancecenterpermissions"},"mutability":"MUTABLE"},"23":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Compliance center roles - view assigned roles","height":"auto","src":"https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png","alignment":"none","width":"auto"}}}},"type":"article","publish":true},
      nextContentSlug: 'Time-limited-admin-roles-in-Microsoft-365-rZzausKJ1',
      previousContentSlug: 'How-to-create-users-in-Microsoft-365-Cloud-Only-uYCIPbnMC',
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
                <div><p>Now let's take a look at assigning admin roles. There are a lot of different models and strategies to manage administrative rights but the one Microsoft chose to implement in Microsoft 365 is Role-Based Access Control (RBAC). The way RBAC works is the administrative rights or permissions you're given in the organization are based on your role. In short, Microsoft has implemented several roles that can be assigned to users that will grant user-specific rights.</p>
<p>One of the best things about roles is roles will allow us to see exactly what rights a user has. It isn't so obvious with groups. You probably work with groups in your on-premise environment. Where you create a group, assign members to the group, and then assign permissions to the group. But here's the problem, there's nothing that documents what rights those groups had. With roles, you can see exactly what admin rights the roles have. In Microsoft 365 there are built-in roles that are assigned several permissions across your tenant but you can also create a custom role and assign it rights. Then you or another admin can review the rights that are assigned to that role.</p>
<h2>What's the principle of least privilege?</h2>
<p>In short, it's a concept in cybersecurity to give out the least amount of permissions that is possible. In short, you don't want everyone being global admins because then someone that's upset with your organization or accidentally may screw up your Microsoft 365 tenant. For example, someone that manages your email environment doesn't need to be a SharePoint admin. Microsoft will always recommend the principle of least privilege. So if you see a question regarding what role does user X need to do Y? Always select the role that gives the least amount of permissions</p>
<h2>How to assign roles to users</h2>
<p>1. Go to <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a>.</p>
<p>2. Click the user you want to assign a role to then click <strong>Manage roles</strong>.</p>
<div ><img src="https://i.ibb.co/2g9zNSh/microsoft-365-manage-roles.png" alt="Microsoft 365 assign a role to a user" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Admin center access</strong> then select the roles you want to assign.</p>
<div ><img src="https://i.ibb.co/h1hqMDC/microsoft-365-manage-admin-roles.png" alt="Microsoft 365 assign admin role to user" style="height: auto;width: auto"/></div>
<p>If you want to give more specific permissions click <strong>Show all by category</strong>.</p>
<div ><img src="https://i.ibb.co/37PBpQf/microsoft-365-admin-role-categories.png" alt="Microsoft 365 admin role categories" style="height: auto;width: auto"/></div>
<h2>How to view the rights of admin roles</h2>
<p>A quick overview of the admin role can be seen by highlighting the <strong>I</strong> next to the role.</p>
<div ><img src="https://i.ibb.co/984JZn2/microsoft-365-quick-view-of-admin-rights.png" alt="Microsoft 365 admin roles view description" style="height: auto;width: auto"/></div>
<p>But to see the actual role permissions assigned you'll need to use Azure Active Directory</p>
<p>1. Go to <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators" target="_blank">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RolesAndAdministrators</a></p>
<p>2. Click the administrative role you want to view the permissions for.</p>
<p>From this page, you can view all the roles in your tenant.&nbsp;</p>
<div ><img src="https://i.ibb.co/gVnhfmz/azure-ad-roles.png" alt="Azure AD Roles" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Description</strong>. From there you can view the role permissions.</p>
<div ><img src="https://i.ibb.co/g6MbsX9/azure-ad-role-permissions-descriptions.png" alt="C:\Users\john.gruber\Downloads\azure ad role permissions descriptions" style="height: auto;width: auto"/></div>
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
<p>1. Go to <a href="https://admin.exchange.microsoft.com/#/adminRoles" target="_blank">https://admin.exchange.microsoft.com/#/adminRoles</a> and sign in with your admin credentials.</p>
<p>2. Click the role you want to assign to a user. Then click the <strong>Assigned</strong> tab. Finally, click <strong>Add</strong>.</p>
<div ><img src="https://i.ibb.co/WyfXXJQ/assign-exchange-online-admin-roles.png" alt="Assign Exchange Online admin roles" style="height: auto;width: auto"/></div>
<p>3. Type the name of the user you want to add as an admin. Click the user in the drop-down.</p>
<div ><img src="https://i.ibb.co/GP6CfSM/exchange-online-add-admins.png" alt="Exchange Online add admin" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Add</strong>.</p>
<div ><img src="https://i.ibb.co/LzbxPpt/add-user-to-exchange-admin-role.png" alt="Add user to Exchange admin role" style="height: auto;width: auto"/></div>
<h3><span >How to view the rights of Exchange Online admin roles</span>&nbsp;</h3>
<p>Just like the Microsoft 365 admin roles, you can view the description and see the permissions assigned to each role.</p>
<p>1. To view the description go to <a href="https://admin.exchange.microsoft.com/#/adminRoles" target="_blank">https://admin.exchange.microsoft.com/#/adminRoles</a> and click the role you want to view.</p>
<div ><img src="https://i.ibb.co/wgMcNZd/exchange-online-admin-roles-description.png" alt="View the Exchange Online admin role descrptions" style="height: auto;width: auto"/></div>
<p>2. To view the permissions assigned click the <strong>Permissions </strong>tab. You can review the permissions by hovering the mouse over the <strong>I</strong>.</p>
<div ><img src="https://i.ibb.co/7CtNXBz/Exchange-Online-admin-role-permissions.png" alt="Exchange Online admin role permissions" style="height: auto;width: auto"/></div>
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
<p>1. Go to <a href="https://compliance.microsoft.com/permissions" target="_blank">https://compliance.microsoft.com/permissions</a>.</p>
<p>2. Click <strong>Roles</strong> under Compliance center.</p>
<div ><img src="https://i.ibb.co/N2mM2rk/compliance-center-roles.png" alt="Microsoft 365 compliance center open roles button" style="height: auto;width: auto"/></div>
<p>3. Click the role you want to assign</p>
<div ><img src="https://i.ibb.co/wsFKJXB/assign-compliance-role-edit-members.png" alt="Compliance role edit members" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Choose members</strong></p>
<div ><img src="https://i.ibb.co/jb73wrC/compliance-center-roles-choose-members.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - choose members" style="height: auto;width: auto"/></div>
<p>5. Click <strong>Add</strong></p>
<div ><img src="https://i.ibb.co/Jjvg1QG/compliance-center-roles-add-members.png" alt="compliance center roles - add members" style="height: auto;width: auto"/></div>
<p>6. Click the checkmark next to the users you want to add to the role. Verify the number of users you select appears next to Added. Click <strong>Add</strong>.</p>
<div ><img src="https://i.ibb.co/TRFcysW/compliance-center-roles-select-members-to-add.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - select members to add" style="height: auto;width: auto"/></div>
<p>7. Click <strong>Done</strong> then click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/ByVRjSV/compliance-center-roles-Save-member-change.png" alt="C:\Users\john.gruber\Downloads\compliance center roles - Save member change" style="height: auto;width: auto"/></div>
<h3>How to view the rights of compliance center admin roles</h3>
<p>It's easy to view the assigned roles to the role groups.</p>
<p>1. Go to <a href="https://compliance.microsoft.com/compliancecenterpermissions" target="_blank">https://compliance.microsoft.com/compliancecenterpermissions</a> and sign in with your admin permissions.</p>
<p>2. Click the role you want to view the permissions for.</p>
<p>3. View the Assigned roles.</p>
<div ><img src="https://i.ibb.co/Tv9X1NY/compliance-center-roles-view-assigned-roles.png" alt="Compliance center roles - view assigned roles" style="height: auto;width: auto"/></div>
<h3>A few key compliance center admin roles</h3>
<p>In the next section, I'll review a few key roles and what they have access to do. It's important to remember what roles can perform what permissions as part of the MS-500 test.</p>
<h4>Global admin</h4>
<p>The global admin in the Microsoft 365 tenant have access to the entire compliance center. They can add and remove roles and members from roles. They can even add themselves to compliance center roles.</p>
<h4>eDiscovery managers</h4>
<p><span >An eDiscovery manager can perform searches, including exporting and previewing the results. </span> They can create, as well as, manage eDiscovery cases including adding members to the cases. They can't access or manage cases created by other eDiscovery Managers.</p>
<h4>eDiscovery administrators</h4>
<p>eDiscovery administrators can perform all the functions as an eDiscovery manager + manage other people's cases.</p>
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
