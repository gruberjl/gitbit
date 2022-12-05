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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'du25o', text: 'Your organization will surely have data you don\'t want to be sent outside the environment. It may be HIPPA data, credit cards, social security numbers, or maybe all three. No matter what your organization does it will have data that needs to stay inside the environment. So how do you make sure users don\'t maliciously or accidentally send data to the world that they shouldn\'t? Data Loss Prevention (DLP) policies.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'p2iu', text: 'DLP policies are a way to scan data that is being saved or sent from your Microsoft 365 environment and then you can block it, warn the user, or warn someone else that the data is being sent. But enough chit-chat, let\'s jump in.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'efa0h', text: '3 parts of a DLP policy', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ejqrb', text: 'There are 3 important parts of a DLP policy. First is the DLP policy itself. The second is the rules. Lastly, is the sensitive info types. We are going to take these backward.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 4, style: 'BOLD'}], key: 'c7r54', text: 'The Sensitive info type is the content that is being looked for. It can be a keyword, for example: "credit card number" or "cc", or it can be a regular expression, for example, "\\d{3}-\\d{5}-\\d{5}", which tells Microsoft to look for 3 digits, a dash (-), 5 digits, a dash (-), and then 5 digits. There are also built-in functions that Microsoft has provided. Microsoft has provided several sensitive info types to help you get started.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 13, style: 'BOLD'}], key: '9umig', text: 'Next, is the Rule. Rules combine the sensitive info types and what happens when you find it. For example, you can create a rule that searches for the sensitive info type or credit card information, and when it\'s found, it blocks it from being sent outside the organization. Or you can create a rule that searches for passport ID numbers and notifies the sender and admins that the content is being sent. A Rule can contain multiple sensitive info types but the actions that are applied when the content is found must be the same.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 15, style: 'BOLD'}], key: 'frlh2', text: 'Finally is the DLP policy. The DLP policy says "where to search for" and what rules to apply to that location. For example, I can create a DLP policy that searches all Exchange emails for a rule that searches for credit card information and blocks it from going outside the organization. Or I can create a DLP policy that has multiple rules in it. For example, I can create a DLP policy that searches all of OneDrive. Then have 1 rule that looks for and blocks any social security numbers from being sent outside the company. And another rule that searches for credit card numbers and allows the content to be sent but notifies admins that it\'s being sent.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cbkqi', text: 'In short, a sensitive info type is "what to search for". Rules say "When content contains these sensitive info types apply these actions". DLP policies define what rules are applied to what locations.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8g1i3', text: 'How to set up a DLP Policy', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 8, offset: 61}], inlineStyleRanges: [{length: 23, offset: 12, style: 'BOLD'}, {length: 20, offset: 38, style: 'BOLD'}, {length: 9, offset: 61, style: 'BOLD'}, {length: 13, offset: 72, style: 'BOLD'}], key: '97vr', text: '1. Open the Compliance admin center > Data loss prevention > Policies > Create policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'degt0', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 9, style: 'BOLD'}, {length: 19, offset: 21, style: 'BOLD'}, {length: 4, offset: 43, style: 'BOLD'}], key: 'clte2', text: '2. Click Financial > U.S. Financial Data > Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '252t7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 44, style: 'BOLD'}], key: '73eog', text: '3. On the "name your DLP policy" page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 201, style: 'BOLD'}], key: '5j4ur', text: '4. On the "Choose locations to apply the policy" page notice the settings you have. You can include or exclude exchange mailboxes, SharePoint sites, OneDrive accounts, Teams locations, and more. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '44vid', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 46, style: 'BOLD'}], key: '64ob3', text: '5. On the "Define policy settings" page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 191, style: 'BOLD'}], key: 'eekit', text: '6. On the "Info to protect" page take notice of the settings. You can set the alert to go off if you are sharing the U.S. Financial data with users inside or outside your organization. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '6rknk', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e9ned', text: '7. On the "Protection actions" page take note of the settings. Here\'s where things get interesting.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '72kss', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fptlo', text: 'You can define who\'s notified when content breaches the DLP policy.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8eeak', text: 'You can set the minimum number of entries that will trigger the DLP policy. For example, "At least 10 or more instances of the same sensitive info type" in the U.S. Financial Data will mean the document or email that is being sent will require 10 credit card numbers before the alert is triggered. That means a user in your organization can send one to nine credit card numbers outside the environment before triggering the alert.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ecq7', text: 'Next are the "Send incident reports in email" and "Send alerts if any of the DLP rules match" settings. This setting will send any global admin an email when content matches the DLP policy. You can also add anyone you want here.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5s0i5', text: 'Finally, is the "Restrict access or encrypt the content". This checkbox will allow you to automatically encrypt the information or set permissions on the content.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 6, style: 'BOLD'}], key: '5tve4', text: 'Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 293, style: 'BOLD'}], key: 'bj55n', text: '8. On the "Customize access and override settings" page you have some more options. If you check "Restrict access or encrypt the content in Microsoft 365 locations even more options will appear! I believe all the options on this page are pretty well explained so I won\'t waste our time. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 10, style: 'BOLD'}, {length: 4, offset: 54, style: 'BOLD'}, {length: 6, offset: 66, style: 'BOLD'}, {length: 4, offset: 80, style: 'BOLD'}], key: '9rnd3', text: '9. Verify Turn it on right away is selected and click Next. Click Submit. Click Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8eoke', text: 'How to edit a DLP policy', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3cdce', text: 'Now we\'ll break down how the DLP policy is applied. Let\'s open a DLP policy to edit the settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 23, offset: 9, style: 'BOLD'}, {length: 20, offset: 35, style: 'BOLD'}, {length: 8, offset: 58, style: 'BOLD'}, {length: 8, offset: 78, style: 'BOLD'}, {length: 11, offset: 116, style: 'BOLD'}], key: '3t6uj', text: '1. Go to Compliance admin center > Data loss prevention > Policies. Click the checkbox next to the policy and click Edit policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '5e6st', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}], key: '2vqld', text: '2. Click Next until you are on the "Customize advanced DLP rules" page.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '30qdi', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 238, style: 'BOLD'}], key: '9g5is', text: 'Notice there are two different rules: 1 for low volume of content detected and one for the high volume of content detected. If you click the arrows next to the names you\'ll see a quick breakdown of how the rules work. Now let\'s click the Edit button next to "Low volume of content detected U.S. Financial Data".', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dmm4m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3a8uq', text: 'Conditions', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '50r57', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5pqvn', text: 'The conditions section is asking "what are you looking for". To put it another way, when the content matches the conditions, apply the policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 30, style: 'BOLD'}, {length: 36, offset: 52, style: 'BOLD'}], key: '2ibn4', text: 'Notice there are two sections: Content contains and Content is shared from Microsoft 365. The AND in the middle of the two sections means to trigger this DLP policy they both need to be flagged as true. So if one of your users shares credit card information internally then the policy won\'t be triggered.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd37m0', text: 'Now see the sensitive info types? Those are OR statements. That means only one of those has to be found to trigger the DLP policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b2h50', text: 'So the DLP policy will trigger if a credit card number is found OR a U.S. Bank account number OR an ABA Routing Number AND shared outside the organization. Now let\'s talk about the sensitive info types.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 20, offset: 4, style: 'BOLD'}, {length: 1, offset: 151, style: 'BOLD'}, {length: 1, offset: 189, style: 'BOLD'}, {length: 16, offset: 276, style: 'BOLD'}], key: '1gsd', text: 'The Sensitive info types are special rules mostly created by Microsoft to find certain information. You can see some information by hovering over the "I" next to the confidence level. The "I" will tell you what it\'s looking for and how the confidence level plays in. A higher confidence level will require more matching elements. For example, with the credit card number, a high or medium confidence will require it to find a credit card number AND a keyword. A low confidence level will just look for the credit card number.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b5ov', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 4, style: 'BOLD'}], key: 'fkh39', text: 'The instance count is how many instances need to match to trigger the sensitive info type. Since we are currently looking at the "Low volume" rule it wants to find 1 - 9 numbers to match. If the DLP policy finds more than 9 then the rule won\'t be triggered. In this DLP policy instance, any more than 9 will trigger other "High volume"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: '2e5a6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '40pej', text: 'Exceptions', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8i1oi', text: 'The exceptions are pretty straightforward, it\'s a rule that, if matched, won\'t apply the policy to the content. For example, our current policy says "If the content contains Credit Card Numbers AND is shared with people outside the organization". We could recreate the rule to say "If the content contains Credit Card Numbers EXCEPT if it\'s shared inside the organization"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cdd8a', text: 'Actions', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 13, offset: 143, style: 'BOLD'}, {length: 65, offset: 159, style: 'BOLD'}], key: '6ukrd', text: 'The actions section is what happens when the content is matched. For example, we can encrypt the content and allow the email to be sent. Let\'s Add an action > Restrict access or encrypt the content in Microsoft 365 locations.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '4uv9k', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 65, offset: 19, style: 'BOLD'}], key: '8gkpr', text: 'Click the Checkbox Restrict access or encrypt the content in Microsoft 365 locations. Take note of the additional settings. In short, you can block people outside your organization or everyone from accessing the content.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: 'acuuf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5b46b', text: 'User notifications', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '36gre', text: 'In the next section, user notifications, you can determine who\'s notified and how they are notified. You can notify the person that breached the DLP policy, the owner of the site, or OneDrive account, or the owner of the content. Additionally, you can add other users to always be notified. For example, you can set yourself to always receive a notification when the DLP policy is matched. Next, you can customize the text on the email or the policy tip. The policy tip is the bar that will appear at the top of the Office app that you are using when you matched the DLP policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '9iaqa', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aihcm', text: 'User overrides', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '191su', text: 'The user overrides section allows users to override the policy. For example, if the DLP policy blocked the email from being sent then checking the below box would allow the user sending the email to override and send the email anyway.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: '6pl0e', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 44, offset: 49, style: 'BOLD'}, {length: 70, offset: 168, style: 'BOLD'}], key: '6g0bm', text: 'You have two options when allowing the override. Require a business justification to override allows the user to override the policy but they have to provide a reason. Override the rule automatically if they report it as a false positive will allow the user to send the content if they mark it as a false positive. For example, if the user sends the content that looks like a bank account and routing number but it isn\'t a bank account and routing number then the user can send the email.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7c6bt', text: 'Incident reports', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 6, offset: 149}], inlineStyleRanges: [{length: 23, offset: 100, style: 'BOLD'}, {length: 20, offset: 126, style: 'BOLD'}, {length: 6, offset: 149, style: 'BOLD'}], key: '76h3l', text: 'In this section is the backend/admin reporting when the match occurs. The alerts will appear in the Compliance admin center > Data loss prevention > Alerts. You can also send an alert or report email to anyone in your organization. Finally, you have the information that is sent in the incident report.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fde7l', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4jkpa', text: 'Additional options', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2hm7b', text: 'Finally, there are additional options. that are designed for when multiple DLP rules match the content. The first option is the ability to stop processing more rules. This is a good option if you have multiple DLP policies that may match the same content but you only want to apply this DLP policy. Next is the priority. The lowest priority is executed first. So a priority of 0 is executed first.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: '2isgk', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '579jk', text: 'How to create a sensitive info type', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4vokn', text: 'Finally, we\'re on to the sensitive info types. Remember when we used the credit card numbers, bank accounts, and routing numbers? We\'ll Microsoft allows us to create personalized sensitive info types. Let\'s pretend the company we work for has assigned every customer a 13-digit Company ID. They typically look like this "111-12345-12345". Let\'s create a sensitive info type to detect that type.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 20, offset: 57}], inlineStyleRanges: [{length: 23, offset: 9, style: 'BOLD'}, {length: 19, offset: 35, style: 'BOLD'}, {length: 20, offset: 57, style: 'BOLD'}, {length: 26, offset: 85, style: 'BOLD'}], key: '8teun', text: '1. Go to Compliance admin center > Data classification > Sensitive info types. Click Create sensitive info type.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 20, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fmupr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 34, style: 'BOLD'}, {length: 19, offset: 71, style: 'BOLD'}, {length: 4, offset: 98, style: 'BOLD'}], key: '5h98g', text: '2. Name your sensitive info type "Company ID". Set the description to "Internal Company ID" Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 9, style: 'BOLD'}, {length: 19, offset: 26, style: 'BOLD'}, {length: 18, offset: 48, style: 'BOLD'}], key: '38b7a', text: '3. Click Create pattern > Add primary element > Regular expression.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 21, length: 1, offset: 0}], inlineStyleRanges: [], key: '8s2e3', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 18, style: 'BOLD'}, {length: 17, offset: 79, style: 'BOLD'}, {length: 4, offset: 105, style: 'BOLD'}], key: '628p7', text: '4. Enter an ID of "Company ID". Enter the following in the regular expression "\\d{3}-\\d{5}-\\d{5}". Click Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 22, length: 1, offset: 0}], inlineStyleRanges: [], key: '2a72p', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 13, style: 'BOLD'}, {length: 6, offset: 59, style: 'BOLD'}], key: '6crc4', text: '5. Click the Anywhere in the document checkbox. Then click Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 23, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a92s5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 9, style: 'BOLD'}, {length: 5, offset: 16, style: 'BOLD'}, {length: 6, offset: 23, style: 'BOLD'}], key: '6aiet', text: '6. Click Next > Next > Create.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '37ums', text: 'Now you can use your new sensitive info type in a DLP policy. So remember, if someone (or a question on the MS-500) asks you to verify a company ID doesn\'t leave the organization you\'ll first need to create a sensitive info type and then create a DLP policy. Lastly, for SharePoint files to be found with the new sensitive info type you may need to reindex your sites.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2lp4j', text: 'How to create a sensitive info type using PowerShell', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6jhob', text: 'I\'ve never had to create a sensitive info type using PowerShell but you may see it on the test. Just know the steps are as follows:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5uc12', text: '1. Connect to the Security & Compliance admin center using PowerShell. The command is "Connect-IPPSSession"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'agh5i', text: '2. Export the current rules as an XML file. The command is "Get-DlpSensitiveInformationTypeRulePackage | Export-Clixml .\\rules.xml"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a6dtp', text: '3. Modify the file making the changes you desire', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'p0ol', text: '4. Upload the file. The command is "New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes(\'PathToXml.xml\'))"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eomgn', text: 'How to reindex a site', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 55, style: 'BOLD'}, {length: 16, offset: 66, style: 'BOLD'}], key: 'fjaqb', text: '1. Open the SharePoint site you want to reindex. Click Settings > Site information.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 24, length: 1, offset: 0}], inlineStyleRanges: [], key: '8svnq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 9, style: 'BOLD'}, {length: 31, offset: 39, style: 'BOLD'}], key: 'a0sla', text: '2. Click View all site settings. Click Search and offline availability.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 25, length: 1, offset: 0}], inlineStyleRanges: [], key: '7bqjs', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 12, offset: 9, style: 'BOLD'}, {length: 12, offset: 24, style: 'BOLD'}], key: '1nupl', text: '3. Click Reindex site > Reindex site', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 26, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ecqhr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c8vhr', text: 'Priority in which rules are applied', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ce1cc', text: 'If content matches multiple rules, the rule that is the most restrictive action is enforced. Let\'s take an example of two rules:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '55kj9', text: 'Rule 1: notify users', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fmjl4', text: 'Rule 2: notify the user and restrict access', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ep8l5', text: 'Rule 2 will be applied.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ejrks', text: 'Next, is the priority level. If two rules have the same restrictive action then the rule with the highest priority is run.', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://compliance.microsoft.com/datalossprevention?viewid=policies'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Create a DLP policy', height: 'auto', src: 'https://i.ibb.co/n8WcqKM/Create-a-DLP-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Sensitive info types', height: 'auto', src: 'https://i.ibb.co/F53G4wv/Sensitive-info-types.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Sensitive info types', height: 'auto', src: 'https://i.ibb.co/F53G4wv/Sensitive-info-types.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'DLP Policy: Add an action > Restrict access or encrypt', height: 'auto', src: 'https://i.ibb.co/9cb1P3N/DLP-policy-actions-encrypt.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Restrict access or encrypt the content in Microsoft 365 locations', height: 'auto', src: 'https://i.ibb.co/Pcxtf1N/Restrict-access-or-encrypt-the-content-in-Microsoft-365-locations.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'User notifications', height: 'auto', src: 'https://i.ibb.co/jhpsb4c/User-notifications.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'DLP Policy user overrides', height: 'auto', src: 'https://i.ibb.co/RcRHV5F/DLP-Policy-User-Overrides.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {targetOption: '_blank', url: 'https://compliance.microsoft.com/datalossprevention?viewid=dlpalerts'}, mutability: 'MUTABLE', type: 'LINK'}, 17: {data: {alignment: 'none', alt: 'Incident reports', height: 'auto', src: 'https://i.ibb.co/nCMY8qn/Incident-reports.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'none', alt: 'Additional options', height: 'auto', src: 'https://i.ibb.co/8djBScJ/Additional-options.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {targetOption: '_blank', url: 'https://compliance.microsoft.com/dataclassification?viewid=sensitiveinfotypes'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {alignment: 'none', alt: 'Setup DLP policy for U.S. Financial data', height: 'auto', src: 'https://i.ibb.co/R7cd13n/Setup-DLP-policy-for-U-S-Financial-data.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 20: {data: {alignment: 'none', alt: 'Create sensitive info type', height: 'auto', src: 'https://i.ibb.co/FmRDQ4j/Create-sensitive-info-type.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 21: {data: {alignment: 'none', alt: 'Microsoft 365 DLP info type New pattern', height: 'auto', src: 'https://i.ibb.co/dKgDMPw/New-Pattern.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 22: {data: {alignment: 'none', alt: 'Add a regular expression​', height: 'auto', src: 'https://i.ibb.co/ftHCQMv/Add-a-regular-expression.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 23: {data: {alignment: 'none', alt: 'Create new pattern', height: 'auto', src: 'https://i.ibb.co/GpkgjwJ/New-Pattern.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 24: {data: {alignment: 'none', alt: 'Open SharePoint site information', height: 'auto', src: 'https://i.ibb.co/BsyLQR0/open-site-information.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 25: {data: {alignment: 'none', alt: 'Search and offline availability', height: 'auto', src: 'https://i.ibb.co/B3xy841/search-and-offline-availability.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 26: {data: {alignment: 'none', alt: 'Reindex site', height: 'auto', src: 'https://i.ibb.co/yfH32BX/reindex-site.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Choose locations to apply the policy', height: 'auto', src: 'https://i.ibb.co/jTt0Ztp/Choose-locations-to-apply-the-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Info to protect', height: 'auto', src: 'https://i.ibb.co/fGDXMxV/Info-to-protect.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Protection actions', height: 'auto', src: 'https://i.ibb.co/7jq4dFH/Protection-actions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Edit data loss prevention policy', height: 'auto', src: 'https://i.ibb.co/4V38fcH/edit-data-loss-prevention-policy.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'DLP Policy rules showing high volume and low volume', height: 'auto', src: 'https://i.ibb.co/6FDybGz/DLP-Policy-Low-Volume-and-High-Volume.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'left', alt: 'Edit Low volume of content detected U.S. Financial Data', height: 'auto', src: 'https://i.ibb.co/y4p1fhQ/Edit-Low-volume-of-content-detected-U-S-Financial-Data.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Microsoft DLP Policy conditions', height: 'auto', src: 'https://i.ibb.co/TRxj8hz/DLP-Conditions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'DLP policies are made up of conditions, and actions that prevent certain information from leaving your organization or notifying you when the content is leaving your organization.', featuredImage: 'https://i.ibb.co/n8WcqKM/Create-a-DLP-policy.png', id: 'IsPGsme8w', images: ['https://i.ibb.co/n8WcqKM/Create-a-DLP-policy.png', 'https://i.ibb.co/R7cd13n/Setup-DLP-policy-for-U-S-Financial-data.png', 'https://i.ibb.co/jTt0Ztp/Choose-locations-to-apply-the-policy.png', 'https://i.ibb.co/fGDXMxV/Info-to-protect.png', 'https://i.ibb.co/fGDXMxV/Info-to-protect.png', 'https://i.ibb.co/7jq4dFH/Protection-actions.png', 'https://i.ibb.co/4V38fcH/edit-data-loss-prevention-policy.png', 'https://i.ibb.co/6FDybGz/DLP-Policy-Low-Volume-and-High-Volume.png', 'https://i.ibb.co/y4p1fhQ/Edit-Low-volume-of-content-detected-U-S-Financial-Data.png', 'https://i.ibb.co/TRxj8hz/DLP-Conditions.png', 'https://i.ibb.co/F53G4wv/Sensitive-info-types.png', 'https://i.ibb.co/F53G4wv/Sensitive-info-types.png', 'https://i.ibb.co/9cb1P3N/DLP-policy-actions-encrypt.png', 'https://i.ibb.co/Pcxtf1N/Restrict-access-or-encrypt-the-content-in-Microsoft-365-locations.png', 'https://i.ibb.co/jhpsb4c/User-notifications.png', 'https://i.ibb.co/RcRHV5F/DLP-Policy-User-Overrides.png', 'https://i.ibb.co/2k5f8dc/Incident-reports.png', 'https://i.ibb.co/2k5f8dc/Incident-reports.png', 'https://i.ibb.co/nCMY8qn/Incident-reports.png', 'https://i.ibb.co/8djBScJ/Additional-options.png', 'https://i.ibb.co/8djBScJ/Additional-options.png', 'https://i.ibb.co/FmRDQ4j/Create-sensitive-info-type.png', 'https://i.ibb.co/dKgDMPw/New-Pattern.png', 'https://i.ibb.co/ftHCQMv/Add-a-regular-expression.png', 'https://i.ibb.co/GpkgjwJ/New-Pattern.png', 'https://i.ibb.co/BsyLQR0/open-site-information.png', 'https://i.ibb.co/B3xy841/search-and-offline-availability.png', 'https://i.ibb.co/yfH32BX/reindex-site.png'], publish: true, sectionId: 'YhftdGIRX', slug: 'Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w', title: 'Preventing accidental and malicious data loss with DLP policies', type: 'article'},
      nextContentSlug: 'test/data-loss-prevention-policies-dlp-hwkqi18rz',
      previousContentSlug: 'test/configuring-and-managing-retention-wuxs_obk8',
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
                  <div><p>Your organization will surely have data you don't want to be sent outside the environment. It may be HIPPA data, credit cards, social security numbers, or maybe all three. No matter what your organization does it will have data that needs to stay inside the environment. So how do you make sure users don't maliciously or accidentally send data to the world that they shouldn't? Data Loss Prevention (DLP) policies.</p>
                    <p>DLP policies are a way to scan data that is being saved or sent from your Microsoft 365 environment and then you can block it, warn the user, or warn someone else that the data is being sent. But enough chit-chat, let's jump in.</p>
                    <div id="ld-7740-2760" /><h2>3 parts of a DLP policy</h2>
                    <p>There are 3 important parts of a DLP policy. First is the DLP policy itself. The second is the rules. Lastly, is the sensitive info types. We are going to take these backward.</p>
                    <p>The <strong>Sensitive info type</strong> is the content that is being looked for. It can be a keyword, for example: "credit card number" or "cc", or it can be a regular expression, for example, "\d&#123;3&#125;-\d&#123;5&#125;-\d&#123;5&#125;", which tells Microsoft to look for 3 digits, a dash (-), 5 digits, a dash (-), and then 5 digits. There are also built-in functions that Microsoft has provided. Microsoft has provided several sensitive info types to help you get started.</p>
                    <p>Next, is the <strong>Rule. </strong>Rules combine the sensitive info types and what happens when you find it. For example, you can create a rule that searches for the sensitive info type or credit card information, and when it's found, it blocks it from being sent outside the organization. Or you can create a rule that searches for passport ID numbers and notifies the sender and admins that the content is being sent. A Rule can contain multiple sensitive info types but the actions that are applied when the content is found must be the same.</p>
                    <p>Finally is the <strong>DLP policy</strong>. The DLP policy says "where to search for" and what rules to apply to that location. For example, I can create a DLP policy that searches all Exchange emails for a rule that searches for credit card information and blocks it from going outside the organization. Or I can create a DLP policy that has multiple rules in it. For example, I can create a DLP policy that searches all of OneDrive. Then have 1 rule that looks for and blocks any social security numbers from being sent outside the company. And another rule that searches for credit card numbers and allows the content to be sent but notifies admins that it's being sent.</p>
                    <p>In short, a sensitive info type is "what to search for". Rules say "When content contains these sensitive info types apply these actions". DLP policies define what rules are applied to what locations.</p>
                    <h2>How to set up a DLP Policy</h2>
                    <p>1. Open the <strong>Compliance admin center</strong> &gt; <strong>Data loss prevention</strong> &gt; <a href="https://compliance.microsoft.com/datalossprevention?viewid=policies" target="_blank" rel="noreferrer"><strong>Policies</strong></a><strong> </strong>&gt; <strong>Create policy</strong>.</p>
                    <div ><img src="https://i.ibb.co/n8WcqKM/Create-a-DLP-policy.png" alt="Create a DLP policy" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Financial </strong>&gt; <strong>U.S. Financial Data</strong> &gt; <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/R7cd13n/Setup-DLP-policy-for-U-S-Financial-data.png" alt="Setup DLP policy for U.S. Financial data" height="auto" width="auto" /></div>
                    <p>3. On the "name your DLP policy" page click <strong>Next</strong>.</p>
                    <p>4. On the "Choose locations to apply the policy" page notice the settings you have. You can include or exclude exchange mailboxes, SharePoint sites, OneDrive accounts, Teams locations, and more. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/jTt0Ztp/Choose-locations-to-apply-the-policy.png" alt="Choose locations to apply the policy" height="auto" width="auto" /></div>
                    <p>5. On the "Define policy settings" page click <strong>Next</strong>.</p>
                    <p>6. On the "Info to protect" page take notice of the settings. You can set the alert to go off if you are sharing the U.S. Financial data with users inside or outside your organization. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/fGDXMxV/Info-to-protect.png" alt="Info to protect" height="auto" width="auto" /></div>
                    <p>7. On the "Protection actions" page take note of the settings. Here's where things get interesting.</p>
                    <div ><img src="https://i.ibb.co/7jq4dFH/Protection-actions.png" alt="Protection actions" height="auto" width="auto" /></div>
                    <ul>
                      <li>You can define who's notified when content breaches the DLP policy.</li>
                      <li>You can set the minimum number of entries that will trigger the DLP policy. For example, "At least 10 or more instances of the same sensitive info type" in the U.S. Financial Data will mean the document or email that is being sent will require 10 credit card numbers before the alert is triggered. That means a user in your organization can send one to nine credit card numbers outside the environment before triggering the alert.</li>
                      <li>Next are the "Send incident reports in email" and "Send alerts if any of the DLP rules match" settings. This setting will send any global admin an email when content matches the DLP policy. You can also add anyone you want here.</li>
                      <li>Finally, is the "Restrict access or encrypt the content". This checkbox will allow you to automatically encrypt the information or set permissions on the content.</li>
                    </ul>
                    <p>Click <strong>Next</strong>.</p>
                    <p>8. On the "Customize access and override settings" page you have some more options. If you check "Restrict access or encrypt the content in Microsoft 365 locations even more options will appear! I believe all the options on this page are pretty well explained so I won't waste our time. Click <strong>Next</strong>.</p>
                    <p>9. Verify <strong>Turn it on right away </strong>is selected and click <strong>Next</strong>. Click <strong>Submit</strong>. Click <strong>Done</strong>.</p>
                    <h2>How to edit a DLP policy</h2>
                    <p>Now we'll break down how the DLP policy is applied. Let's open a DLP policy to edit the settings.</p>
                    <p>1. Go to <strong>Compliance admin center</strong> &gt; <strong>Data loss prevention</strong> &gt; <strong>Policies</strong>. Click the <strong>checkbox</strong> next to the policy and click <strong>Edit policy</strong>.</p>
                    <div ><img src="https://i.ibb.co/4V38fcH/edit-data-loss-prevention-policy.png" alt="Edit data loss prevention policy" height="auto" width="auto" /></div>
                    <p>2. Click <strong>Next </strong>until you are on the "Customize advanced DLP rules" page.</p>
                    <div ><img src="https://i.ibb.co/6FDybGz/DLP-Policy-Low-Volume-and-High-Volume.png" alt="DLP Policy rules showing high volume and low volume" height="auto" width="auto" /></div>
                    <p>Notice there are two different rules: 1 for low volume of content detected and one for the high volume of content detected. If you click the arrows next to the names you'll see a quick breakdown of how the rules work. Now let's click the <strong>Edit </strong>button next to "Low volume of content detected U.S. Financial Data".</p>
                    <div ><img src="https://i.ibb.co/y4p1fhQ/Edit-Low-volume-of-content-detected-U-S-Financial-Data.png" alt="Edit Low volume of content detected U.S. Financial Data" height="auto" width="auto" /></div>
                    <h3>Conditions</h3>
                    <div ><img src="https://i.ibb.co/TRxj8hz/DLP-Conditions.png" alt="Microsoft DLP Policy conditions" height="auto" width="auto" /></div>
                    <p>The conditions section is asking "what are you looking for". To put it another way, when the content matches the conditions, apply the policy.</p>
                    <p>Notice there are two sections:<strong> Content contains</strong> and <strong>Content is shared from Microsoft 365</strong>. The AND in the middle of the two sections means to trigger this DLP policy they both need to be flagged as true. So if one of your users shares credit card information internally then the policy won't be triggered.</p>
                    <p>Now see the sensitive info types? Those are OR statements. That means only one of those has to be found to trigger the DLP policy.</p>
                    <p>So the DLP policy will trigger if a credit card number is found OR a U.S. Bank account number OR an ABA Routing Number AND shared outside the organization. Now let's talk about the sensitive info types.</p>
                    <p>The <strong>Sensitive info types</strong> are special rules mostly created by Microsoft to find certain information. You can see some information by hovering over the "<strong>I</strong>" next to the confidence level. The "<strong>I</strong>" will tell you what it's looking for and how the confidence level plays in. A higher <strong>confidence level</strong> will require more matching elements. For example, with the credit card number, a high or medium confidence will require it to find a credit card number AND a keyword. A low confidence level will just look for the credit card number.</p>
                    <div ><img src="https://i.ibb.co/F53G4wv/Sensitive-info-types.png" alt="Sensitive info types" height="auto" width="auto" /></div>
                    <p>The <strong>instance count</strong> is how many instances need to match to trigger the sensitive info type. Since we are currently looking at the "Low volume" rule it wants to find 1 - 9 numbers to match. If the DLP policy finds more than 9 then the rule won't be triggered. In this DLP policy instance, any more than 9 will trigger other "High volume"</p>
                    <div ><img src="https://i.ibb.co/F53G4wv/Sensitive-info-types.png" alt="Sensitive info types" height="auto" width="auto" /></div>
                    <h3>Exceptions</h3>
                    <p>The exceptions are pretty straightforward, it's a rule that, if matched, won't apply the policy to the content. For example, our current policy says "If the content contains Credit Card Numbers AND is shared with people outside the organization". We could recreate the rule to say "If the content contains Credit Card Numbers EXCEPT if it's shared inside the organization"</p>
                    <h3>Actions</h3>
                    <p>The actions section is what happens when the content is matched. For example, we can encrypt the content and allow the email to be sent. Let's <strong>Add an action</strong> &gt; <strong>Restrict access or encrypt the content in Microsoft 365 locations</strong>.</p>
                    <div ><img src="https://i.ibb.co/9cb1P3N/DLP-policy-actions-encrypt.png" alt="DLP Policy: Add an action > Restrict access or encrypt" height="auto" width="auto" /></div>
                    <p>Click the Checkbox <strong>Restrict access or encrypt the content in Microsoft 365 locations</strong>. Take note of the additional settings. In short, you can block people outside your organization or everyone from accessing the content.</p>
                    <div ><img src="https://i.ibb.co/Pcxtf1N/Restrict-access-or-encrypt-the-content-in-Microsoft-365-locations.png" alt="Restrict access or encrypt the content in Microsoft 365 locations" height="auto" width="auto" /></div>
                    <h3>User notifications</h3>
                    <p>In the next section, user notifications, you can determine who's notified and how they are notified. You can notify the person that breached the DLP policy, the owner of the site, or OneDrive account, or the owner of the content. Additionally, you can add other users to always be notified. For example, you can set yourself to always receive a notification when the DLP policy is matched. Next, you can customize the text on the email or the policy tip. The policy tip is the bar that will appear at the top of the Office app that you are using when you matched the DLP policy.</p>
                    <div ><img src="https://i.ibb.co/jhpsb4c/User-notifications.png" alt="User notifications" height="auto" width="auto" /></div>
                    <h3>User overrides</h3>
                    <p>The user overrides section allows users to override the policy. For example, if the DLP policy blocked the email from being sent then checking the below box would allow the user sending the email to override and send the email anyway.</p>
                    <div ><img src="https://i.ibb.co/RcRHV5F/DLP-Policy-User-Overrides.png" alt="DLP Policy user overrides" height="auto" width="auto" /></div>
                    <p>You have two options when allowing the override. <strong>Require a business justification to override</strong> allows the user to override the policy but they have to provide a reason. <strong>Override the rule automatically if they report it as a false positive </strong>will allow the user to send the content if they mark it as a false positive. For example, if the user sends the content that looks like a bank account and routing number but it isn't a bank account and routing number then the user can send the email.</p>
                    <h3>Incident reports</h3>
                    <p>In this section is the backend/admin reporting when the match occurs. The alerts will appear in the <strong>Compliance admin center</strong> &gt; <strong>Data loss prevention</strong> &gt; <a href="https://compliance.microsoft.com/datalossprevention?viewid=dlpalerts" target="_blank" rel="noreferrer"><strong>Alerts</strong></a>. You can also send an alert or report email to anyone in your organization. Finally, you have the information that is sent in the incident report.</p>
                    <div ><img src="https://i.ibb.co/nCMY8qn/Incident-reports.png" alt="Incident reports" height="auto" width="auto" /></div>
                    <h3>Additional options</h3>
                    <p>Finally, there are additional options. that are designed for when multiple DLP rules match the content. The first option is the ability to stop processing more rules. This is a good option if you have multiple DLP policies that may match the same content but you only want to apply this DLP policy. Next is the priority. The lowest priority is executed first. So a priority of 0 is executed first.</p>
                    <div ><img src="https://i.ibb.co/8djBScJ/Additional-options.png" alt="Additional options" height="auto" width="auto" /></div>
                    <h2>How to create a sensitive info type</h2>
                    <p>Finally, we're on to the sensitive info types. Remember when we used the credit card numbers, bank accounts, and routing numbers? We'll Microsoft allows us to create personalized sensitive info types. Let's pretend the company we work for has assigned every customer a 13-digit Company ID. They typically look like this "111-12345-12345". Let's create a sensitive info type to detect that type.</p>
                    <p>1. Go to <strong>Compliance admin center</strong> &gt; <strong>Data classification</strong> &gt; <a href="https://compliance.microsoft.com/dataclassification?viewid=sensitiveinfotypes" target="_blank" rel="noreferrer"><strong>Sensitive info types</strong></a>. Click <strong>Create sensitive info type</strong>.</p>
                    <div ><img src="https://i.ibb.co/FmRDQ4j/Create-sensitive-info-type.png" alt="Create sensitive info type" height="auto" width="auto" /></div>
                    <p>2. Name your sensitive info type "<strong>Company ID</strong>". Set the description to "<strong>Internal Company ID</strong>" Click <strong>Next</strong>.</p>
                    <p>3. Click <strong>Create pattern</strong> &gt; <strong>Add primary element</strong> &gt; <strong>Regular expression</strong>.</p>
                    <div ><img src="https://i.ibb.co/dKgDMPw/New-Pattern.png" alt="Microsoft 365 DLP info type New pattern" height="auto" width="auto" /></div>
                    <p>4. Enter an ID of <strong>"Company ID</strong>". Enter the following in the regular expression "<strong>\d&#123;3&#125;-\d&#123;5&#125;-\d&#123;5&#125;</strong>". Click <strong>Done</strong>.</p>
                    <div ><img src="https://i.ibb.co/ftHCQMv/Add-a-regular-expression.png" alt="Add a regular expression​" height="auto" width="auto" /></div>
                    <p>5. Click the <strong>Anywhere in the document</strong> checkbox. Then click <strong>Create</strong>.</p>
                    <div ><img src="https://i.ibb.co/GpkgjwJ/New-Pattern.png" alt="Create new pattern" height="auto" width="auto" /></div>
                    <p>6. Click <strong>Next</strong> &gt; <strong>Next </strong>&gt; <strong>Create</strong>.</p>
                    <p>Now you can use your new sensitive info type in a DLP policy. So remember, if someone (or a question on the MS-500) asks you to verify a company ID doesn't leave the organization you'll first need to create a sensitive info type and then create a DLP policy. Lastly, for SharePoint files to be found with the new sensitive info type you may need to reindex your sites.</p>
                    <h3>How to create a sensitive info type using PowerShell</h3>
                    <p>I've never had to create a sensitive info type using PowerShell but you may see it on the test. Just know the steps are as follows:</p>
                    <p>1. Connect to the Security &amp; Compliance admin center using PowerShell. The command is "Connect-IPPSSession"</p>
                    <p>2. Export the current rules as an XML file. The command is "Get-DlpSensitiveInformationTypeRulePackage | Export-Clixml .\rules.xml"</p>
                    <p>3. Modify the file making the changes you desire</p>
                    <p>4. Upload the file. The command is "New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('PathToXml.xml'))"</p>
                    <h3>How to reindex a site</h3>
                    <p>1. Open the SharePoint site you want to reindex. Click <strong>Settings </strong>&gt; <strong>Site information</strong>.</p>
                    <div ><img src="https://i.ibb.co/BsyLQR0/open-site-information.png" alt="Open SharePoint site information" height="auto" width="auto" /></div>
                    <p>2. Click <strong>View all site settings</strong>. Click <strong>Search and offline availability</strong>.</p>
                    <div ><img src="https://i.ibb.co/B3xy841/search-and-offline-availability.png" alt="Search and offline availability" height="auto" width="auto" /></div>
                    <p>3. Click <strong>Reindex site</strong> &gt; <strong>Reindex site</strong></p>
                    <div ><img src="https://i.ibb.co/yfH32BX/reindex-site.png" alt="Reindex site" height="auto" width="auto" /></div>
                    <h2>Priority in which rules are applied</h2>
                    <p>If content matches multiple rules, the rule that is the most restrictive action is enforced. Let's take an example of two rules:</p>
                    <p>Rule 1: notify users</p>
                    <p>Rule 2: notify the user and restrict access</p>
                    <p>Rule 2 will be applied.</p>
                    <p>Next, is the priority level. If two rules have the same restrictive action then the rule with the highest priority is run.</p>
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
