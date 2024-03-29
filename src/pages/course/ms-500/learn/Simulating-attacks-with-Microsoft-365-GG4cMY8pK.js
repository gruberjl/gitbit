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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bjqbc', text: 'Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4bn4f', text: 'What’s a phishing attack?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7l5ug', text: 'Phishing attacks are a type of social engineering attack used to steal data, typically credit card or login credentials. In short, the malicious person would send an email pretending to be from someone else and ask the victim to either go to a website enter their credentials or send them a credit card or a money transfer. For the victim, either your organization or the user the attack can be devastating. You can lose financially, or the attacker may use the credentials to send malicious emails to your partners, as well as the world discrediting you and your business.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5q6hb', text: 'Phishing attack techniques', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fq7d5', text: 'There are several techniques used in a phishing attack and the number continues to grow but for now, we’ll focus on 5 different phishing attack techniques.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '307vu', text: 'Credential harvest', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd9u3g', text: 'In credential harvesting attacks the malicious person is attempting to get your user’s credentials. The malicious user will typically send an email with a URL to a bogus site to trick your users into entering their credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dknie', text: 'Malware attachment', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'jd58', text: 'In malware attachment attacks a malicious person will send an email to your users with a malicious attachment. A lot of times the attachment will look like a simple Word or Excel document but the attachment will have malicious code baked into it.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '12vnj', text: 'Link in attachment', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'pdiu', text: 'With Link in attachment attacks, the malicious user will be attacking your users using the credential harvest technique. The only difference being the malicious user will put the link inside an attachment.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '57bvf', text: 'Link to malware', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '44usg', text: 'Link to malware attacks will send an email to your users with a link where the user needs to go to a website and download the malicious file. Like the malware attachment attack technique, the file will contain code that is run on your user\'s computer. Often the malicious person will host the malicious code on common sites like Dropbox, SharePoint, or Google Drive.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eulsv', text: 'Drive-by URL', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3g8d7', text: 'Drive-by URL also known as the watering hole technique is an attack sequence where the malicious user sends an email with a URL inside. The URL will point to a website with malicious code running it to get information from your users. Typically the website will be a good site that has been hacked or a clone of a good site so the user doesn’t even realize it’s happening.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e99f6', text: 'How to stop phishing attacks?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fgcdv', text: 'One of the best ways to prevent phishing attacks is user training. Training your users to detect malicious emails can prevent your organization from losing financially or credibility. In short, we’ll set up a simulated phishing email and send it to your users. Then we’ll track who opened the links and you can work with those specific users to help them learn to avoid getting tricked again.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fm5le', text: 'What’s an attack simulation?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f2cet', text: 'An attack simulation is a way for you to send an email to your users that is a fake phishing attack. In short, Microsoft has created several sample emails that you can use to send to your users. The sample emails will direct the user to go to a fake malicious site or download a fake malicious attachment. When the user opens the site or attachment they are informed that this was a simulation. Microsoft’s attack simulation will also report on who opened the malicious URLs or attachments so you can provide them with more training.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7bq9p', text: 'What licenses are required?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dabt4', text: 'To use the attack simulation training built into Microsoft 365 you’ll need Microsoft 365 E5 or Microsoft Defender for Office 365 Plan 2 licenses.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '52l44', text: 'What roles are required?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c3akv', text: 'You need to be a member of one of the following roles to set up the attack simulation training:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'colng', text: 'Organization Management', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5srjs', text: 'Security Administrator', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9lnp7', text: 'Attack Simulation Administrators can create and manage all aspects of attack simulation campaigns.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'pm7p', text: 'Attack Payload Author can create attack payloads that an admin can initiate later.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'al20s', text: 'How to configure an attack simulation', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 11, offset: 70}], inlineStyleRanges: [{length: 25, offset: 13, style: 'BOLD'}, {length: 26, offset: 41, style: 'BOLD'}, {length: 11, offset: 70, style: 'BOLD'}, {length: 19, offset: 89, style: 'BOLD'}], key: 'eoj72', text: '1. Go to the Microsoft Defender portal > Attack simulation training > Simulations. Click Launch a simulation.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fj9f5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 71, style: 'BOLD'}, {length: 4, offset: 108, style: 'BOLD'}], key: 'cj0hk', text: '2. Select the technique you want to use. In this scenario, we’ll leave Credential Harvest checked and click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '38am9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 15, offset: 32, style: 'BOLD'}, {length: 4, offset: 77, style: 'BOLD'}], key: '594ak', text: '3. Enter the simulation name of Test Simulation in the space provided. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '6qlpe', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 14, style: 'BOLD'}, {length: 4, offset: 47, style: 'BOLD'}], key: '7p6pm', text: '4. Select the 2 Failed Messages payload. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a4d00', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 37, offset: 105, style: 'BOLD'}, {length: 4, offset: 222, style: 'BOLD'}], key: 'fpckk', text: '5. On the Target Users page you can either select the users you want to test the deployment with or click Include all users in my organization. Set up the users you want to send the attack simulation training to and click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a57dh', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1sama', text: '6. On the Assign Training page leave the defaults and click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dosge', text: '7. On the landing page window leave the defaults and click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 44, offset: 50, style: 'BOLD'}, {length: 20, offset: 107, style: 'BOLD'}, {length: 23, offset: 130, style: 'BOLD'}, {length: 4, offset: 161, style: 'BOLD'}], key: '961n4', text: '8. On the select end-user notification page click Microsoft default notification (recommended). Then click Delivery preferences > Deliver during campaign. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '56mvv', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 36, style: 'BOLD'}], key: 'cp136', text: '9. On the Launch details page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 10, style: 'BOLD'}, {length: 4, offset: 24, style: 'BOLD'}], key: '1i5ce', text: '10. Click Submit. Click Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fl4ag', text: 'What will users experience?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4fgar', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '7e7p2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '573te', text: 'Each user you selected to receive the phishing simulation will receive the same email. The email will contain a link to a website that appears to be from Microsoft. When the user enters their credentials they’ll receive a page informing them that they were duped. Once on the page, Microsoft will explain a couple of things that they review to know if the email is a phishing scam or not. Under the quick guide will be a link to training that the user can attend to learn more.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fvsoj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'epoav', text: 'How to view the report on who clicked the link?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3d4k2', text: 'So now, we have some data. We’ve sent the email to some users in our organization but how do we check on who clicked the link / completed the training? It’s easy!', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 11, offset: 70}], inlineStyleRanges: [{length: 26, offset: 41, style: 'BOLD'}, {length: 11, offset: 70, style: 'BOLD'}, {length: 15, offset: 89, style: 'BOLD'}], key: '9t9rv', text: '1. Go to the Microsoft Defender portal > Attack simulation training > Simulations. Click Test Simulation.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: '8dia0', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'kdn3', text: 'From this page, you have a quick overview of the simulation. You can see how many users reported the email as phishing, clicked the link, and who entered their credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 9, style: 'BOLD'}], key: '94s5f', text: '2. Click View users to see where your users landed in the simulation.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e0mf5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '57jbj', text: 'From this page, you can see which users were compromised and which users completed the training.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '96pkp', text: 'How do we automatically schedule simulations?', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '16u9q', text: 'So now you’ve evaluated the simulation and maybe even sent the simulation to some of your end-users. The next question is, how do we make the simulations reoccur? Let’s take a look.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 22, offset: 70}], inlineStyleRanges: [{length: 26, offset: 41, style: 'BOLD'}, {length: 22, offset: 70, style: 'BOLD'}, {length: 17, offset: 100, style: 'BOLD'}], key: 'c2lam', text: '1. Go to Microsoft 365 Defender Portal > Attack simulation training > Simulation automations. Click Create automation.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dnqbm', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 19, style: 'BOLD'}, {length: 4, offset: 48, style: 'BOLD'}], key: 'cltvc', text: '2. Set the name to Simulation Automation. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '3ue11', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 18, offset: 9, style: 'BOLD'}, {length: 4, offset: 35, style: 'BOLD'}], key: 'bj8ei', text: '3. Click Credential Harvest. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bsrr8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}, {length: 4, offset: 26, style: 'BOLD'}], key: 'bs0vq', text: '4. Click Randomize. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '2kv91', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 36, offset: 144, style: 'BOLD'}, {length: 4, offset: 188, style: 'BOLD'}], key: '3f0af', text: '5. Select the users you want to be tested. As a start, you may want to select a couple of users. Then later you may want to come back and click Include all users in my organization. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: 'e066k', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 38, style: 'BOLD'}], key: 'ffuni', text: '6. On the assign training page, click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 37, style: 'BOLD'}], key: 'bl0la', text: '7. On the Landing page window, click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 44, offset: 50, style: 'BOLD'}, {length: 20, offset: 100, style: 'BOLD'}, {length: 23, offset: 124, style: 'BOLD'}, {length: 4, offset: 155, style: 'BOLD'}], key: '9dddn', text: '8. On the Select end user notification page click Microsoft default notification (recommended). Set Delivery preferences to Deliver during campaign. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 18, length: 1, offset: 0}], inlineStyleRanges: [], key: '4194b', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 41, style: 'BOLD'}], key: '8ekcm', text: '9. On the Simulation schedule page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 12, style: 'BOLD'}, {length: 4, offset: 46, style: 'BOLD'}], key: '17h4m', text: '10. Set the simulation recurrence. Then click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 19, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a7aau', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 37, style: 'BOLD'}], key: 'a4ojt', text: '11. On the launch details page click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 10, style: 'BOLD'}, {length: 4, offset: 24, style: 'BOLD'}], key: '2bcct', text: '12. Click Submit. Click Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4tn71', text: '', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Launch a phishing attack simulation', height: 800, src: 'https://i.ibb.co/HxvgcYk/launch-a-simulation.png', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', width: 814}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'View phishing simulation', height: 736, src: 'https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png', width: 1890}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Simulation overview view users circled', height: 875, src: 'https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png', width: 1897}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulationautomation'}, mutability: 'MUTABLE', type: 'LINK'}, 13: {data: {alignment: 'none', alt: 'Create phishing simulation automation', height: 735, src: 'https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png', width: 817}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'Name your automation. Click next', height: 444, src: 'https://i.ibb.co/X3ztyC5/name-your-automation.png', width: 567}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'Select social engineering technique', height: 401, src: 'https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png', width: 588}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {alignment: 'none', alt: 'Set payloads to randomize. Click Next', height: 396, src: 'https://i.ibb.co/4N4906n/select-payloads.png', width: 663}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Select the target users.', height: 583, src: 'https://i.ibb.co/RywpK18/select-the-target-users.png', width: 505}, mutability: 'MUTABLE', type: 'IMAGE'}, 18: {data: {alignment: 'none', alt: 'Select end user notifications', height: 596, src: 'https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png', width: 727}, mutability: 'MUTABLE', type: 'IMAGE'}, 19: {data: {alignment: 'none', alt: 'Schedule details', height: 826, src: 'https://i.ibb.co/2yBQcj2/schedule-details.png', width: 966}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Select a Technique', height: 387, src: 'https://i.ibb.co/YTvnDry/select-a-technique.png', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', width: 1002}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Name your simulation then click Next', height: 394, src: 'https://i.ibb.co/JtdZw5W/name-your-simulation.png', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', width: 655}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Select the 2 failed messages payload. Then click Next', height: 591, src: 'https://i.ibb.co/6BPbMjC/select-a-payload.png', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', width: 777}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Select the users to target. Then click Next', height: 586, src: 'https://i.ibb.co/hdj5mcc/target-users.png', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', width: 546}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Select end user notifications', height: 599, src: 'https://i.ibb.co/SQTjGBD/select-end-user-notification.png', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', width: 718}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Fake phishing email', height: 581, src: 'https://i.ibb.co/nkq9MsK/fake-phishing-email.png', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', width: 654}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Fake phishing landing page', height: 842, src: 'https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', width: 1863}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations'}, mutability: 'MUTABLE', type: 'LINK'}}}, datePublished: '2022/5/26', description: 'Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?', featuredImage: 'https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png', id: 'GG4cMY8pK', images: ['https://i.ibb.co/HxvgcYk/launch-a-simulation.png', 'https://i.ibb.co/b6c9c4W/select-a-technique.png', 'https://i.ibb.co/YTvnDry/select-a-technique.png', 'https://i.ibb.co/JtdZw5W/name-your-simulation.png', 'https://i.ibb.co/6BPbMjC/select-a-payload.png', 'https://i.ibb.co/hdj5mcc/target-users.png', 'https://i.ibb.co/SQTjGBD/select-end-user-notification.png', 'https://i.ibb.co/nkq9MsK/fake-phishing-email.png', 'https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png', 'https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png', 'https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png', 'https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png', 'https://i.ibb.co/X3ztyC5/name-your-automation.png', 'https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png', 'https://i.ibb.co/4N4906n/select-payloads.png', 'https://i.ibb.co/RywpK18/select-the-target-users.png', 'https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png', 'https://i.ibb.co/2yBQcj2/schedule-details.png'], publish: true, sectionId: 'QScYfSu74', slug: 'Simulating-attacks-with-Microsoft-365-GG4cMY8pK', title: 'Simulating attacks with Microsoft 365', type: 'article'},
      nextContentSlug: 'test/defending-exchange-online-avdet1sxv',
      previousContentSlug: 'learn/Protecting-email-against-phishing-attacks-GCOOUsSBT',
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
                  <div><p>Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?</p>
                    <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>What’s a phishing attack?</h2>
                    <p>Phishing attacks are a type of social engineering attack used to steal data, typically credit card or login credentials. In short, the malicious person would send an email pretending to be from someone else and ask the victim to either go to a website enter their credentials or send them a credit card or a money transfer. For the victim, either your organization or the user the attack can be devastating. You can lose financially, or the attacker may use the credentials to send malicious emails to your partners, as well as the world discrediting you and your business.</p>
                    <h3>Phishing attack techniques</h3>
                    <p>There are several techniques used in a phishing attack and the number continues to grow but for now, we’ll focus on 5 different phishing attack techniques.</p>
                    <h4>Credential harvest</h4>
                    <p>In credential harvesting attacks the malicious person is attempting to get your user’s credentials. The malicious user will typically send an email with a URL to a bogus site to trick your users into entering their credentials.</p>
                    <h4>Malware attachment</h4>
                    <p>In malware attachment attacks a malicious person will send an email to your users with a malicious attachment. A lot of times the attachment will look like a simple Word or Excel document but the attachment will have malicious code baked into it.</p>
                    <h4>Link in attachment</h4>
                    <p>With Link in attachment attacks, the malicious user will be attacking your users using the credential harvest technique. The only difference being the malicious user will put the link inside an attachment.</p>
                    <h4>Link to malware</h4>
                    <p>Link to malware attacks will send an email to your users with a link where the user needs to go to a website and download the malicious file. Like the malware attachment attack technique, the file will contain code that is run on your user's computer. Often the malicious person will host the malicious code on common sites like Dropbox, SharePoint, or Google Drive.</p>
                    <h4>Drive-by URL</h4>
                    <p>Drive-by URL also known as the watering hole technique is an attack sequence where the malicious user sends an email with a URL inside. The URL will point to a website with malicious code running it to get information from your users. Typically the website will be a good site that has been hacked or a clone of a good site so the user doesn’t even realize it’s happening.</p>
                    <h2>How to stop phishing attacks?</h2>
                    <p>One of the best ways to prevent phishing attacks is user training. Training your users to detect malicious emails can prevent your organization from losing financially or credibility. In short, we’ll set up a simulated phishing email and send it to your users. Then we’ll track who opened the links and you can work with those specific users to help them learn to avoid getting tricked again.</p>
                    <h2>What’s an attack simulation?</h2>
                    <p>An attack simulation is a way for you to send an email to your users that is a fake phishing attack. In short, Microsoft has created several sample emails that you can use to send to your users. The sample emails will direct the user to go to a fake malicious site or download a fake malicious attachment. When the user opens the site or attachment they are informed that this was a simulation. Microsoft’s attack simulation will also report on who opened the malicious URLs or attachments so you can provide them with more training.</p>
                    <h2>What licenses are required?</h2>
                    <p>To use the attack simulation training built into Microsoft 365 you’ll need Microsoft 365 E5 or Microsoft Defender for Office 365 Plan 2 licenses.</p>
                    <h2>What roles are required?</h2>
                    <p>You need to be a member of one of the following roles to set up the attack simulation training:</p>
                    <ul>
                      <li>Organization Management</li>
                      <li>Security Administrator</li>
                      <li>Attack Simulation Administrators can create and manage all aspects of attack simulation campaigns.</li>
                      <li>Attack Payload Author can create attack payloads that an admin can initiate later.</li>
                    </ul>
                    <h2>How to configure an attack simulation</h2>
                    <p>1. Go to the <strong>Microsoft Defender portal</strong> &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulations" target="_blank" rel="noreferrer"><strong>Simulations</strong></a>. Click <strong>Launch a simulation</strong>.</p>
                    <div ><img src="https://i.ibb.co/HxvgcYk/launch-a-simulation.png" alt="Launch a phishing attack simulation" height="800" width="814" style="aspect-ratio: auto 814 / 800; height: auto;" /></div>
                    <p>2. Select the technique you want to use. In this scenario, we’ll leave <strong>Credential Harvest</strong> checked and click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/YTvnDry/select-a-technique.png" alt="Select a Technique" height="387" width="1002" style="aspect-ratio: auto 1002 / 387; height: auto;" /></div>
                    <p>3. Enter the simulation name of <strong>Test Simulation</strong> in the space provided. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/JtdZw5W/name-your-simulation.png" alt="Name your simulation then click Next" height="394" width="655" style="aspect-ratio: auto 655 / 394; height: auto;" /></div>
                    <p>4. Select the <strong>2 Failed Messages</strong> payload. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/6BPbMjC/select-a-payload.png" alt="Select the 2 failed messages payload. Then click Next" height="591" width="777" style="aspect-ratio: auto 777 / 591; height: auto;" /></div>
                    <p>5. On the Target Users page you can either select the users you want to test the deployment with or click<strong> Include all users in my organization</strong>. Set up the users you want to send the attack simulation training to and click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/hdj5mcc/target-users.png" alt="Select the users to target. Then click Next" height="586" width="546" style="aspect-ratio: auto 546 / 586; height: auto;" /></div>
                    <p>6. On the Assign Training page leave the defaults and click Next.</p>
                    <p>7. On the landing page window leave the defaults and click Next.</p>
                    <p>8. On the select end-user notification page click <strong>Microsoft default notification (recommended)</strong>. Then click <strong>Delivery preferences</strong> &gt; <strong>Deliver during campaign</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/SQTjGBD/select-end-user-notification.png" alt="Select end user notifications" height="599" width="718" style="aspect-ratio: auto 718 / 599; height: auto;" /></div>
                    <p>9. On the Launch details page click <strong>Next</strong>.</p>
                    <p>10. Click <strong>Submit</strong>. Click <strong>Done</strong>.</p>
                    <h2>What will users experience?</h2>
                    <p />
                    <div ><img src="https://i.ibb.co/nkq9MsK/fake-phishing-email.png" alt="Fake phishing email" height="581" width="654" style="aspect-ratio: auto 654 / 581; height: auto;" /></div>
                    <p>Each user you selected to receive the phishing simulation will receive the same email. The email will contain a link to a website that appears to be from Microsoft. When the user enters their credentials they’ll receive a page informing them that they were duped. Once on the page, Microsoft will explain a couple of things that they review to know if the email is a phishing scam or not. Under the quick guide will be a link to training that the user can attend to learn more.</p>
                    <div ><img src="https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png" alt="Fake phishing landing page" height="842" width="1863" style="aspect-ratio: auto 1863 / 842; height: auto;" /></div>
                    <h2>How to view the report on who clicked the link?</h2>
                    <p>So now, we have some data. We’ve sent the email to some users in our organization but how do we check on who clicked the link / completed the training? It’s easy!</p>
                    <p>1. Go to the Microsoft Defender portal &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulations" target="_blank" rel="noreferrer"><strong>Simulations</strong></a>. Click <strong>Test Simulation</strong>.</p>
                    <div ><img src="https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png" alt="View phishing simulation" height="736" width="1890" style="aspect-ratio: auto 1890 / 736; height: auto;" /></div>
                    <p>From this page, you have a quick overview of the simulation. You can see how many users reported the email as phishing, clicked the link, and who entered their credentials.</p>
                    <p>2. Click <strong>View users</strong> to see where your users landed in the simulation.</p>
                    <div ><img src="https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png" alt="Simulation overview view users circled" height="875" width="1897" style="aspect-ratio: auto 1897 / 875; height: auto;" /></div>
                    <p>From this page, you can see which users were compromised and which users completed the training.</p>
                    <h2>How do we automatically schedule simulations?</h2>
                    <p>So now you’ve evaluated the simulation and maybe even sent the simulation to some of your end-users. The next question is, how do we make the simulations reoccur? Let’s take a look.</p>
                    <p>1. Go to Microsoft 365 Defender Portal &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulationautomation" target="_blank" rel="noreferrer"><strong>Simulation automations</strong></a>. Click <strong>Create automation</strong>.</p>
                    <div ><img src="https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png" alt="Create phishing simulation automation" height="735" width="817" style="aspect-ratio: auto 817 / 735; height: auto;" /></div>
                    <p>2. Set the name to <strong>Simulation Automation</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/X3ztyC5/name-your-automation.png" alt="Name your automation. Click next" height="444" width="567" style="aspect-ratio: auto 567 / 444; height: auto;" /></div>
                    <p>3. Click <strong>Credential Harvest</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png" alt="Select social engineering technique" height="401" width="588" style="aspect-ratio: auto 588 / 401; height: auto;" /></div>
                    <p>4. Click <strong>Randomize</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/4N4906n/select-payloads.png" alt="Set payloads to randomize. Click Next" height="396" width="663" style="aspect-ratio: auto 663 / 396; height: auto;" /></div>
                    <p>5. Select the users you want to be tested. As a start, you may want to select a couple of users. Then later you may want to come back and click <strong>Include all users in my organization</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/RywpK18/select-the-target-users.png" alt="Select the target users." height="583" width="505" style="aspect-ratio: auto 505 / 583; height: auto;" /></div>
                    <p>6. On the assign training page, click <strong>Next</strong>.</p>
                    <p>7. On the Landing page window, click <strong>Next</strong>.</p>
                    <p>8. On the Select end user notification page click <strong>Microsoft default notification (recommended)</strong>. Set <strong>Delivery preferences</strong> to <strong>Deliver during campaign</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png" alt="Select end user notifications" height="596" width="727" style="aspect-ratio: auto 727 / 596; height: auto;" /></div>
                    <p>9. On the Simulation schedule page click <strong>Next</strong>.</p>
                    <p>10. Set the <strong>simulation recurrence</strong>. Then click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/2yBQcj2/schedule-details.png" alt="Schedule details" height="826" width="966" style="aspect-ratio: auto 966 / 826; height: auto;" /></div>
                    <p>11. On the launch details page click <strong>Next</strong>.</p>
                    <p>12. Click <strong>Submit</strong>. Click <strong>Done</strong>.</p>
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
