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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c5n98', text: 'There are four types of groups in Microsoft 365: distribution, security groups, mail-enabled security, and Microsoft 365. Let’s dive right into the types of groups.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aumor', text: 'Distribution groups', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1kejj', text: 'Distribution groups also known as distribution lists will create an email address and distribute the emails to all the members of the group. Distribution groups do not have separate mailboxes. The emails land in the members of the distribution lists mailboxes. You can add anyone with a mailbox inside your organization and you can add mail contacts to distribution groups.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '58njk', text: 'Create a distribution group in Microsoft 365', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 11, offset: 93}], inlineStyleRanges: [{length: 26, offset: 13, style: 'BOLD'}, {length: 14, offset: 42, style: 'BOLD'}, {length: 21, offset: 59, style: 'BOLD'}, {length: 11, offset: 93, style: 'BOLD'}], key: 'f6298', text: '1. Go to the Microsoft 365 admin center > Teams & groups > Active teams & groups. Then click Add a group.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '51c8t', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 9, style: 'BOLD'}, {length: 4, offset: 24, style: 'BOLD'}], key: 'esc8l', text: '2. Click Distribution > Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'd6iis', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 55, style: 'BOLD'}], key: 'b10d5', text: '3. Name the group. Optionally add a description. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '5i5d5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 80, offset: 49, style: 'BOLD'}, {length: 4, offset: 137, style: 'BOLD'}], key: 'rvlu', text: '4. Set the group email address. Optionally click Allow people outside of my organization to send email to this Distribution group. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '34ttb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 9, style: 'BOLD'}], key: 'aolgn', text: '5. Click Create group.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'do4ob', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd6k6a', text: 'Add members to the distribution group', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bif90', text: 'You’ll notice you can’t add members to the group while creating the group. To add members, you’ll need to go to the group and manage the members.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 21, offset: 59}], inlineStyleRanges: [{length: 26, offset: 13, style: 'BOLD'}, {length: 14, offset: 42, style: 'BOLD'}, {length: 21, offset: 59, style: 'BOLD'}, {length: 17, offset: 83, style: 'BOLD'}], key: '8es99', text: '1. Go to the Microsoft 365 admin center > Teams & groups > Active teams & groups > Distribution List.  Then click the group you want to manage.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '47djl', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 9, style: 'BOLD'}, {length: 27, offset: 19, style: 'BOLD'}], key: 'cipo0', text: '2. Click Members > View all and manage members.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '3h8ih', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}], key: '4eb4q', text: '3. Click Add members.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '8p6sk', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 61, style: 'BOLD'}], key: '9mcv2', text: '4. Select the users you want to add to the group. Then click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ab8uo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9ljfq', text: 'Security groups', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e02bs', text: 'Microsoft 365 security groups, formerly known as Office 365 security groups, allow admins to manage access to resources, for example, SharePoint, Intune, or apply conditional access policies.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '81rrj', text: 'Create a security group in Microsoft 365', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 11, offset: 93}], inlineStyleRanges: [{length: 26, offset: 13, style: 'BOLD'}, {length: 14, offset: 42, style: 'BOLD'}, {length: 21, offset: 59, style: 'BOLD'}, {length: 11, offset: 93, style: 'BOLD'}], key: '415kk', text: '1. Go to the Microsoft 365 admin center > Teams & groups > Active teams & groups. Then click Add a group', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '14bdm', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 9, style: 'BOLD'}, {length: 4, offset: 20, style: 'BOLD'}], key: '4shsn', text: '2. Click Security > Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '503dp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 55, style: 'BOLD'}], key: 'dipgs', text: '3. Name the group. Optionally add a description. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '607r2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 9, style: 'BOLD'}], key: '20v1u', text: '4. Click Create group.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ecge4', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '27a05', text: 'Add members to the security group', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '954ck', text: 'To add members, you’ll need to go to the group and manage the members.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 26, offset: 13, style: 'BOLD'}, {length: 14, offset: 42, style: 'BOLD'}, {length: 21, offset: 59, style: 'BOLD'}, {length: 8, offset: 83, style: 'BOLD'}], key: '2aele', text: '1. Go to the Microsoft 365 admin center > Teams & groups > Active teams & groups > Security. Then click the group you want to manage', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 9, style: 'BOLD'}, {length: 27, offset: 19, style: 'BOLD'}], key: '9cd2t', text: '2. Click Members > View all and manage members.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}], key: '4mfbu', text: '3. Click Add members.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 61, style: 'BOLD'}], key: '2o8s2', text: '4. Select the users you want to add to the group. Then click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1vmfm', text: 'Mail-enabled security groups', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3pesb', text: 'Mail-enabled security groups are the best of both worlds. Use mail-enabled security groups to distribute messages and grant access permissions to resources in Microsoft 365.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'elqtj', text: 'You create mail-enabled security groups the same way you create security/distribution groups.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8n14s', text: 'Microsoft 365 groups', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '90n3u', text: 'Microsoft 365 groups allow users to create and manage their own teams. Microsoft 365 groups can create Microsoft Teams, shared mailboxes, or open discussion forums in Yammer. They can also be used in SharePoint sites, Planner, OneDrive shared libraries, Power BI and more. Note, I said can because depending on where you create the team it will change what is created along with it.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '15cag', text: 'How to create a Microsoft 365 group with a shared mailbox', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ftvnh', text: '1. Open Outlook.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5se0k', text: '2. Right-click Groups in the left pane and click New Group.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '3pt88', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 130, style: 'BOLD'}], key: 'e0ob', text: '3. Set the name, email address, description, privacy, and decide if you want the emails to go to everyone’s mailboxes. Then click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a6i7d', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 71, style: 'BOLD'}], key: '2njm8', text: '4. Enter the other members\' names. Click the member to add them. Click Add Members.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: 'h1d2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5nhvc', text: 'How to create a Microsoft 365 group in other apps', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1fffi', text: 'Since knowing all the ways to create a Microsoft 365 group is outside the scope of MS-500 I’ll simply link the instructions below:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 34, offset: 0}], inlineStyleRanges: [], key: '2p9g7', text: 'Create a plan in Microsoft Planner', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 35, offset: 0}], inlineStyleRanges: [], key: 'cqmft', text: 'Create a group in Microsoft Outlook', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 32, offset: 0}], inlineStyleRanges: [], key: 'e60gi', text: 'Create a team site in SharePoint', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 45, offset: 0}], inlineStyleRanges: [], key: '3qv6d', text: 'Deploy Microsoft 365 groups to power platform ', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 33, offset: 0}], inlineStyleRanges: [], key: '2fkjq', text: 'Create a group in Microsoft Teams ', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 24, length: 24, offset: 0}], inlineStyleRanges: [], key: 'dfvo', text: 'Create a group in Yammer ', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7n81i', text: 'Membership type', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '88a5k', text: 'Up until now, we’ve only discussed “assigned” groups. Assigned Groups are where you have assigned the user to the group. Another group type in Microsoft 365 is Dynamic. Dynamic groups are where the members are automatically added/removed depending on the attributes of the user. For example, you may want to create a security group based on departments. Then every user that has the same department will be automatically added to the group. For example, if the test says, “Users must be added automatically to the security group of their department.” Then a dynamic security group would be required.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd2v1l', text: 'How to create a dynamic security group', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 8, style: 'BOLD'}, {length: 22, offset: 32, style: 'BOLD'}, {length: 6, offset: 57, style: 'BOLD'}], key: '6ok0u', text: '1. Open Azure AD admin center > Azure Active Directory > Groups', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 25, length: 1, offset: 0}], inlineStyleRanges: [], key: '2hudb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}], key: 'fbktg', text: '2. Click New Group', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 26, length: 1, offset: 0}], inlineStyleRanges: [], key: '9eblr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 64, style: 'BOLD'}, {length: 17, offset: 112, style: 'BOLD'}], key: '54er3', text: '3. Enter the Group name > optionally group description > Select Dynamic User under Membership type > Then click Add dynamic query', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 27, length: 1, offset: 0}], inlineStyleRanges: [], key: '84v8b', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 23, style: 'BOLD'}, {length: 6, offset: 55, style: 'BOLD'}, {length: 2, offset: 85, style: 'BOLD'}, {length: 4, offset: 100, style: 'BOLD'}], key: '9u19n', text: '4. Set the property to department. Set the Operator to Equals. Then set the Value to HR. Then click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 28, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dd22m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fmvq4', text: 'Dynamic membership rules', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '53coh', text: 'There are several ways to filter / automatically add users to dynamic groups. Let’s review the rules.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5hv4k', text: 'Property', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '46i97', text: 'The property attribute is the property the rule will be checking. In our example above we used the department property which says, “check the department property on each user”.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'nt10', text: 'Operator', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '98cs9', text: 'The operator attribute is how to check the property field against the value. We used Equals in the example above. There are a few more operators that should be discussed.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 0, style: 'BOLD'}], key: '8ki8u', text: 'Equals: The equals operator does an exact match (not case sensitive) of the property to the value.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 0, style: 'BOLD'}], key: '383ia', text: 'Contains: The contains operator does partial-string matches but not ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 0, style: 'BOLD'}], key: 'f8rts', text: 'Match: The match operator does a regular expression matching.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fof22', text: 'Dynamic group limits', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fd9k7', text: 'You can create a dynamic group that contains devices or users, but you can\'t create a group that contains both users and devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4eri4', text: 'You can\'t build a dynamic device group based on the owners\' attributes. Device dynamic group rules can only reference the device attributes.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a4mlf', text: 'Access Review', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '71pfo', text: 'One of the issues with groups is users come and go and they may even switch job roles or departments. Without reviewing the groups to verify membership the user list may get stale and users may keep access to data that they shouldn’t. With Microsoft 365 you can configure access review.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a18v0', text: 'With access review, you can set all groups or some of your groups to be reviewed. The reviewer can be the group owners, selected users, or groups, users can review their own access or managers of users. Lastly, you can set how often the reviewers need to perform the review. Let’s take a look.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '83jbj', text: 'How to setup access review', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}, {length: 22, offset: 33, style: 'BOLD'}, {length: 19, offset: 58, style: 'BOLD'}], key: '3li4u', text: '1. Go to Azure AD admin center > Azure Active Directory > Identity Governance.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 29, length: 1, offset: 0}], inlineStyleRanges: [], key: '44h4d', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 3, style: 'BOLD'}, {length: 17, offset: 20, style: 'BOLD'}], key: '3sjfm', text: '2. Access reviews > New access review.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 30, length: 1, offset: 0}], inlineStyleRanges: [], key: '5tfl6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 47, style: 'BOLD'}, {length: 21, offset: 69, style: 'BOLD'}, {length: 15, offset: 98, style: 'BOLD'}, {length: 6, offset: 175, style: 'BOLD'}, {length: 9, offset: 189, style: 'BOLD'}, {length: 13, offset: 206, style: 'BOLD'}], key: 'b415l', text: '3. In the Select what to review dropdown click Teams + Groups. Click Select Teams + groups. Click select group(s). Click the group you want to perform an access review. Click Select. Click All users. Click Next: Reviews.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 31, length: 1, offset: 0}], inlineStyleRanges: [], key: '2bah6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 50, style: 'BOLD'}, {length: 14, offset: 222, style: 'BOLD'}], key: '9bj9q', text: '4. Click the Select reviewers drop down and click Group owner(s). In duration (in days) set the number of days you want the review to be open for. For review recurrence set the amount of time before the next review. Click Next: Settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 32, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c3uq3', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 30, offset: 7, style: 'BOLD'}, {length: 47, offset: 45, style: 'BOLD'}, {length: 21, offset: 105, style: 'BOLD'}], key: '37c3', text: '5. Set Auto apply results to resource. Click Approve access under If reviewers don’t respond. Then click Next: Review + Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 33, length: 1, offset: 0}], inlineStyleRanges: [], key: 'auoi5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 30, style: 'BOLD'}], key: '6of9v', text: '6. Set the review name. Click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5hcia', text: 'Group Naming policies', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'coqv5', text: 'The next thing I’d like to mention is group naming policies. Since users can create groups, you may want to use some sort of naming policy. For example, an organization Contoso may want a prefix in front of all the groups “Contoso-“', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3v460', text: 'By setting a group naming policy all users will be required to use your specific naming policy with one exception. Global Admins & User admins can still create groups without using the naming policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dit6s', text: 'How to set up a naming policy', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}, {length: 22, offset: 33, style: 'BOLD'}, {length: 6, offset: 58, style: 'BOLD'}], key: '1dfs2', text: '1. Go to Azure AD admin center > Azure Active Directory > Groups.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 34, length: 1, offset: 0}], inlineStyleRanges: [], key: '667s3', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 9, style: 'BOLD'}, {length: 19, offset: 25, style: 'BOLD'}, {length: 10, offset: 52, style: 'BOLD'}, {length: 7, offset: 84, style: 'BOLD'}, {length: 4, offset: 125, style: 'BOLD'}], key: 'amra', text: '2. Click Naming policy > Group naming policy. Click Add prefix. Set the prefix to a string. Then set the prefix value. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 35, length: 1, offset: 0}], inlineStyleRanges: [], key: '82u6k', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '271ba', text: 'Auto-expiration of groups', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b8ng9', text: 'So now your Microsoft 365 groups are growing. Sometimes the groups can grow out of control. How do you manage all of them? You put the burden on the group owners. In short, you set the groups to auto-expire. Then the group owners will receive an email where they will need to renew the groups to keep them around. Let\'s jump in and take a look.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 36, length: 10, offset: 81}], inlineStyleRanges: [{length: 35, offset: 9, style: 'BOLD'}, {length: 22, offset: 47, style: 'BOLD'}, {length: 7, offset: 72, style: 'BOLD'}, {length: 10, offset: 81, style: 'BOLD'}], key: 'fc0t3', text: '1. Go to Azure Active Directory admin center > Azure Active Directory > Groups > Expiration.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 11, style: 'BOLD'}, {length: 39, offset: 59, style: 'BOLD'}, {length: 48, offset: 108, style: 'BOLD'}, {length: 3, offset: 160, style: 'BOLD'}, {length: 4, offset: 171, style: 'BOLD'}], key: '1bjn0', text: '2. Set the Group lifetime (in days). Set your email in the Email contact for groups with no owners. Set the enable expiration for these Microsoft 365 groups to All. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 37, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ddtob', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1g1cq', text: '', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Add a group to Microsoft 365', height: 'auto', src: 'https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Add members to the group', height: 'auto', src: 'https://i.ibb.co/FmHL7tG/add-members-to-the-group.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'left', alt: 'Add a group to Microsoft 365', height: 'auto', src: 'https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 12: {data: {alignment: 'none', alt: 'Add a group to Microsoft 365', height: 'auto', src: 'https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png', targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Create a security group', height: 'auto', src: 'https://i.ibb.co/bbX5gBD/create-a-security-group.png', targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Name your new Microsoft 365 group', height: 'auto', src: 'https://i.ibb.co/zQJ9x1M/name-your-new-group.png', targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'Create security group', height: 'auto', src: 'https://i.ibb.co/TTf23Bz/create-security-group.png', targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {alignment: 'none', alt: 'Create a new Microsoft 365 group in Outlook', height: 'auto', src: 'https://i.ibb.co/ySVxbWK/new-microsoft-365-group.png', targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Create Microsoft 365 group in Outlook', height: 'auto', src: 'https://i.ibb.co/wR07Y6n/create-group-in-outlook.png', targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'none', alt: 'Add members to outlook group', height: 'auto', src: 'https://i.ibb.co/TkpzRv9/add-members-to-outlook-group.png', targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {alignment: 'none', alt: 'create a distribution group', height: 'auto', src: 'https://i.ibb.co/104HV6d/create-a-distribution-group.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 20: {data: {targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-group-in-outlook-04d0c9cf-6864-423c-a380-4fa858f27102'}, mutability: 'MUTABLE', type: 'LINK'}, 21: {data: {targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-team-site-in-sharepoint-online-ef10c1e7-15f3-42a3-98aa-b5972711777d'}, mutability: 'MUTABLE', type: 'LINK'}, 22: {data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/dynamics365/customer-engagement/admin/deploy-office-365-groups'}, mutability: 'MUTABLE', type: 'LINK'}, 23: {data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/microsoftteams/office-365-groups'}, mutability: 'MUTABLE', type: 'LINK'}, 24: {data: {targetOption: '_blank', url: 'https://support.office.com/en-us/article/create-a-group-in-yammer-b407af4f-9a58-4b12-b43e-afbb1b07c889'}, mutability: 'MUTABLE', type: 'LINK'}, 25: {data: {alignment: 'none', alt: 'Azure AD Groups', height: 'auto', src: 'https://i.ibb.co/xMzW2hd/azure-ad-groups.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 26: {data: {alignment: 'none', alt: 'Azure AD New Group', height: 'auto', src: 'https://i.ibb.co/LzXYCTW/azure-ad-new-group.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 27: {data: {alignment: 'none', alt: 'Create a new dynamic group', height: 'auto', src: 'https://i.ibb.co/Kq64m2j/New-dynamic-group.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 28: {data: {alignment: 'none', alt: 'Dynamic membership rules', height: 'auto', src: 'https://i.ibb.co/JBzmGBQ/dyanmic-membership-rules.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 29: {data: {alignment: 'none', alt: 'Azure AD Identity Governance', height: 'auto', src: 'https://i.ibb.co/vP17HPH/Azure-AD-Identity-Governance.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Name your new Microsoft 365 group', height: 'auto', src: 'https://i.ibb.co/zQJ9x1M/name-your-new-group.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 30: {data: {alignment: 'none', alt: 'new access review', height: 'auto', src: 'https://i.ibb.co/bXKkwKH/new-access-review.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 31: {data: {alignment: 'none', alt: 'Create new access review Review Type page', height: 'auto', src: 'https://i.ibb.co/ggzVL3L/access-review-review-type2.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 32: {data: {alignment: 'none', alt: 'New access review reviews page', height: 'auto', src: 'https://i.ibb.co/DMZz1sY/Access-review-reviews2.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 33: {data: {alignment: 'none', alt: 'Set the access review settings', height: 'auto', src: 'https://i.ibb.co/3RtXhW7/access-review-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 34: {data: {alignment: 'none', alt: 'Azure AD Groups Navigation', height: 'auto', src: 'https://i.ibb.co/ZSKQgj7/naming-policy-navigation.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 35: {data: {alignment: 'none', alt: 'Configure group naming policy', height: 'auto', src: 'https://i.ibb.co/FD4vJbd/configure-group-naming-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 36: {data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/Lifecycle'}, mutability: 'MUTABLE', type: 'LINK'}, 37: {data: {alignment: 'none', alt: 'set group expiration', height: 'auto', src: 'https://i.ibb.co/cxPHf87/set-group-expiration.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'New group email address', height: 'auto', src: 'https://i.ibb.co/nLrY8x6/new-group-email-address.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'create distribution group', height: 'auto', src: 'https://i.ibb.co/xM6DN61/create-distribution-group.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'left', alt: 'Add a group to Microsoft 365', height: 'auto', src: 'https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups', width: 'auto'}, mutability: 'MUTABLE', type: 'LINK'}, 7: {data: {alignment: 'none', alt: 'manage distribution group', height: 'auto', src: 'https://i.ibb.co/4frD0dC/manage-distribution-group.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'manage members of distribution group', height: 'auto', src: 'https://i.ibb.co/YhY7R2R/manage-members-of-distribution-group.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'add members to group', height: 'auto', src: 'https://i.ibb.co/5n13V6V/add-members-to-group.png', targetOption: '_blank', url: 'https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Managing users isn\'t a simple task in Microsoft 365. Learn everything you need to know about groups in Microsoft 365 to pass the MS-500.', featuredImage: 'https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png', id: 'S1hQgFOMV', images: ['https://i.ibb.co/ySVxbWK/new-microsoft-365-group.png', 'https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png', 'https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png', 'https://i.ibb.co/104HV6d/create-a-distribution-group.png', 'https://i.ibb.co/104HV6d/create-a-distribution-group.png', 'https://i.ibb.co/bbX5gBD/create-a-security-group.png', 'https://i.ibb.co/zQJ9x1M/name-your-new-group.png', 'https://i.ibb.co/zQJ9x1M/name-your-new-group.png', 'https://i.ibb.co/nLrY8x6/new-group-email-address.png', 'https://i.ibb.co/xM6DN61/create-distribution-group.png', 'https://i.ibb.co/TTf23Bz/create-security-group.png', 'https://i.ibb.co/4frD0dC/manage-distribution-group.png', 'https://i.ibb.co/YhY7R2R/manage-members-of-distribution-group.png', 'https://i.ibb.co/5n13V6V/add-members-to-group.png', 'https://i.ibb.co/FmHL7tG/add-members-to-the-group.png', 'https://i.ibb.co/wR07Y6n/create-group-in-outlook.png', 'https://i.ibb.co/TkpzRv9/add-members-to-outlook-group.png', 'https://i.ibb.co/xMzW2hd/azure-ad-groups.png', 'https://i.ibb.co/LzXYCTW/azure-ad-new-group.png', 'https://i.ibb.co/Kq64m2j/New-dynamic-group.png', 'https://i.ibb.co/JBzmGBQ/dyanmic-membership-rules.png', 'https://i.ibb.co/3RtXhW7/access-review-settings.png', 'https://i.ibb.co/3RtXhW7/access-review-settings.png', 'https://i.ibb.co/DMZz1sY/Access-review-reviews2.png', 'https://i.ibb.co/ggzVL3L/access-review-review-type2.png', 'https://i.ibb.co/vP17HPH/Azure-AD-Identity-Governance.png', 'https://i.ibb.co/bXKkwKH/new-access-review.png', 'https://i.ibb.co/ZSKQgj7/naming-policy-navigation.png', 'https://i.ibb.co/FD4vJbd/configure-group-naming-policy.png', 'https://i.ibb.co/cxPHf87/set-group-expiration.png'], publish: true, sectionId: 'AFV_acckJ', slug: 'Creating-and-managing-users-through-groups-S1hQgFOMV', title: 'Creating and managing users through groups', type: 'article'},
      nextContentSlug: 'test/time-limited-admins-protecting-passwords-and-managing-users-groups-zhv828aiu',
      previousContentSlug: 'learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH',
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
                  <div id="ld-534-9587" style={{height: this.state.decideHeight, overflow: 'hidden'}} />
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>There are four types of groups in Microsoft 365: distribution, security groups, mail-enabled security, and Microsoft 365. Let’s dive right into the types of groups.</p>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>Distribution groups</h2>
                    <p>Distribution groups also known as distribution lists will create an email address and distribute the emails to all the members of the group. Distribution groups do not have separate mailboxes. The emails land in the members of the distribution lists mailboxes. You can add anyone with a mailbox inside your organization and you can add mail contacts to distribution groups.</p>
                    <h3>Create a distribution group in Microsoft 365</h3>
                    <p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <strong>Active teams &amp; groups</strong>. Then click <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard" target="_blank" rel="noreferrer"><strong>Add a group</strong></a>.</p>
                    <div ><img src="https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png" alt="Add a group to Microsoft 365" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Distribution </strong>&gt; <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/104HV6d/create-a-distribution-group.png" alt="create a distribution group" height="auto" width="auto" /></div>
                    <p>3. Name the group. Optionally add a description. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/zQJ9x1M/name-your-new-group.png" alt="Name your new Microsoft 365 group" height="auto" width="auto" /></div>
                    <p>4. Set the group email address. Optionally click <strong>Allow people outside of my organization to send email to this Distribution group</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/nLrY8x6/new-group-email-address.png" alt="New group email address" height="auto" width="auto" /></div>
                    <p>5. Click <strong>Create group</strong>.</p>
                    <div ><img src="https://i.ibb.co/xM6DN61/create-distribution-group.png" alt="create distribution group" height="auto" width="auto" /></div>
                    <h3>Add members to the distribution group</h3>
                    <p>You’ll notice you can’t add members to the group while creating the group. To add members, you’ll need to go to the group and manage the members.</p>
                    <p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/groups" target="_blank" rel="noreferrer"><strong>Active teams &amp; groups</strong></a> &gt; <strong>Distribution List</strong>.  Then click the group you want to manage.</p>
                    <div ><img src="https://i.ibb.co/4frD0dC/manage-distribution-group.png" alt="manage distribution group" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Members</strong> &gt; <strong>View all and manage members</strong>.</p>
                    <div ><img src="https://i.ibb.co/YhY7R2R/manage-members-of-distribution-group.png" alt="manage members of distribution group" height="auto" width="auto" /></div>
                    <p>3. Click <strong>Add members</strong>.</p>
                    <div ><img src="https://i.ibb.co/5n13V6V/add-members-to-group.png" alt="add members to group" height="auto" width="auto" /></div>
                    <p>4. Select the users you want to add to the group. Then click <strong>Add</strong>.</p>
                    <div ><img src="https://i.ibb.co/FmHL7tG/add-members-to-the-group.png" alt="Add members to the group" height="auto" width="auto" /></div>
                    <h2>Security groups</h2>
                    <p>Microsoft 365 security groups, formerly known as Office 365 security groups, allow admins to manage access to resources, for example, SharePoint, Intune, or apply conditional access policies.</p>
                    <h3>Create a security group in Microsoft 365</h3>
                    <p>1. Go to the <strong>Microsoft 365 admin center</strong> &gt; <strong>Teams &amp; groups</strong> &gt; <strong>Active teams &amp; groups</strong>. Then click <a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/addgroupwizard" target="_blank" rel="noreferrer"><strong>Add a group</strong></a></p>
                    <div ><img src="https://i.ibb.co/nmmC28M/add-a-group-microsoft-365.png" alt="Add a group to Microsoft 365" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Security</strong> &gt; <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/bbX5gBD/create-a-security-group.png" alt="Create a security group" height="auto" width="auto" /></div>
                    <p>3. Name the group. Optionally add a description. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/zQJ9x1M/name-your-new-group.png" alt="Name your new Microsoft 365 group" height="auto" width="auto" /></div>
                    <p>4. Click <strong>Create group</strong>.</p>
                    <div ><img src="https://i.ibb.co/TTf23Bz/create-security-group.png" alt="Create security group" height="auto" width="auto" /></div>
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
                    <div ><img src="https://i.ibb.co/ySVxbWK/new-microsoft-365-group.png" alt="Create a new Microsoft 365 group in Outlook" height="auto" width="auto" /></div>
                    <p>3. Set the name, email address, description, privacy, and decide if you want the emails to go to everyone’s mailboxes. Then click <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/wR07Y6n/create-group-in-outlook.png" alt="Create Microsoft 365 group in Outlook" height="auto" width="auto" /></div>
                    <p>4. Enter the other members' names. Click the member to add them. Click <strong>Add Members</strong>.</p>
                    <div ><img src="https://i.ibb.co/TkpzRv9/add-members-to-outlook-group.png" alt="Add members to outlook group" height="auto" width="auto" /></div>
                    <h3>How to create a Microsoft 365 group in other apps</h3>
                    <p>Since knowing all the ways to create a Microsoft 365 group is outside the scope of MS-500 I’ll simply link the instructions below:</p>
                    <ul>
                      <li><a href="https://support.office.com/en-us/article/create-a-plan-in-microsoft-planner-93e65b03-6fac-4661-a502-e3161475ab93" target="_blank" rel="noreferrer">Create a plan in Microsoft Planner</a></li>
                      <li><a href="https://support.office.com/en-us/article/create-a-group-in-outlook-04d0c9cf-6864-423c-a380-4fa858f27102" target="_blank" rel="noreferrer">Create a group in Microsoft Outlook</a></li>
                      <li><a href="https://support.office.com/en-us/article/create-a-team-site-in-sharepoint-online-ef10c1e7-15f3-42a3-98aa-b5972711777d" target="_blank" rel="noreferrer">Create a team site in SharePoint</a></li>
                      <li><a href="https://docs.microsoft.com/en-us/dynamics365/customer-engagement/admin/deploy-office-365-groups" target="_blank" rel="noreferrer">Deploy Microsoft 365 groups to power platform</a>&nbsp;</li>
                      <li><a href="https://docs.microsoft.com/en-us/microsoftteams/office-365-groups" target="_blank" rel="noreferrer">Create a group in Microsoft Teams</a>&nbsp;</li>
                      <li><a href="https://support.office.com/en-us/article/create-a-group-in-yammer-b407af4f-9a58-4b12-b43e-afbb1b07c889" target="_blank" rel="noreferrer">Create a group in Yammer</a>&nbsp;</li>
                    </ul>
                    <h2>Membership type</h2>
                    <p>Up until now, we’ve only discussed “assigned” groups. Assigned Groups are where you have assigned the user to the group. Another group type in Microsoft 365 is Dynamic. Dynamic groups are where the members are automatically added/removed depending on the attributes of the user. For example, you may want to create a security group based on departments. Then every user that has the same department will be automatically added to the group. For example, if the test says, “Users must be added automatically to the security group of their department.” Then a dynamic security group would be required.</p>
                    <h3>How to create a dynamic security group</h3>
                    <p>1. Open <strong>Azure AD admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups</strong></p>
                    <div ><img src="https://i.ibb.co/xMzW2hd/azure-ad-groups.png" alt="Azure AD Groups" height="auto" width="auto" /></div>
                    <p>2. Click <strong>New Group</strong></p>
                    <div ><img src="https://i.ibb.co/LzXYCTW/azure-ad-new-group.png" alt="Azure AD New Group" height="auto" width="auto" /></div>
                    <p>3. Enter the Group name &gt; optionally group description &gt; Select <strong>Dynamic User</strong> under Membership type &gt; Then click <strong>Add dynamic query</strong></p>
                    <div ><img src="https://i.ibb.co/Kq64m2j/New-dynamic-group.png" alt="Create a new dynamic group" height="auto" width="auto" /></div>
                    <p>4. Set the property to <strong>department</strong>. Set the Operator to <strong>Equals</strong>. Then set the Value to <strong>HR</strong>. Then click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/JBzmGBQ/dyanmic-membership-rules.png" alt="Dynamic membership rules" height="auto" width="auto" /></div>
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
                    <div ><img src="https://i.ibb.co/vP17HPH/Azure-AD-Identity-Governance.png" alt="Azure AD Identity Governance" height="auto" width="auto" /></div>
                    <p>2. <strong>Access reviews</strong> &gt; <strong>New access review</strong>.</p>
                    <div ><img src="https://i.ibb.co/bXKkwKH/new-access-review.png" alt="new access review" height="auto" width="auto" /></div>
                    <p>3. In the Select what to review dropdown click <strong>Teams + Groups</strong>. Click <strong>Select Teams + groups</strong>. Click <strong>select group(s)</strong>. Click the group you want to perform an access review. Click <strong>Select</strong>. Click <strong>All users</strong>. Click <strong>Next: Reviews</strong>.</p>
                    <div ><img src="https://i.ibb.co/ggzVL3L/access-review-review-type2.png" alt="Create new access review Review Type page" height="auto" width="auto" /></div>
                    <p>4. Click the Select reviewers drop down and click <strong>Group owner(s)</strong>. In duration (in days) set the number of days you want the review to be open for. For review recurrence set the amount of time before the next review. Click <strong>Next: Settings</strong>.</p>
                    <div ><img src="https://i.ibb.co/DMZz1sY/Access-review-reviews2.png" alt="New access review reviews page" height="auto" width="auto" /></div>
                    <p>5. Set <strong>Auto apply results to resource</strong>. Click <strong>Approve access under If reviewers don’t respond</strong>. Then click <strong>Next: Review + Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/3RtXhW7/access-review-settings.png" alt="Set the access review settings" height="auto" width="auto" /></div>
                    <p>6. Set the review name. Click <strong>Create</strong>.</p>
                    <h2>Group Naming policies</h2>
                    <p>The next thing I’d like to mention is group naming policies. Since users can create groups, you may want to use some sort of naming policy. For example, an organization Contoso may want a prefix in front of all the groups “Contoso-“</p>
                    <p>By setting a group naming policy all users will be required to use your specific naming policy with one exception. Global Admins &amp; User admins can still create groups without using the naming policy.</p>
                    <h3>How to set up a naming policy</h3>
                    <p>1. Go to <strong>Azure AD admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups</strong>.</p>
                    <div ><img src="https://i.ibb.co/ZSKQgj7/naming-policy-navigation.png" alt="Azure AD Groups Navigation" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Naming policy</strong> &gt; <strong>Group naming policy</strong>. Click <strong>Add prefix</strong>. Set the prefix to a <strong>string.</strong> Then set the prefix value. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/FD4vJbd/configure-group-naming-policy.png" alt="Configure group naming policy" height="auto" width="auto" /></div>
                    <h2>Auto-expiration of groups</h2>
                    <p>So now your Microsoft 365 groups are growing. Sometimes the groups can grow out of control. How do you manage all of them? You put the burden on the group owners. In short, you set the groups to auto-expire. Then the group owners will receive an email where they will need to renew the groups to keep them around. Let's jump in and take a look.</p>
                    <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Groups </strong>&gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/Lifecycle" target="_blank" rel="noreferrer"><strong>Expiration</strong></a>.</p>
                    <p>2. Set the <strong>Group lifetime (in days)</strong>. Set your email in the <strong>Email contact for groups with no owners</strong>. Set the <strong>enable expiration for these Microsoft 365 groups</strong> to <strong>All</strong>. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/cxPHf87/set-group-expiration.png" alt="set group expiration" height="auto" width="auto" /></div>
                    <p />
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
