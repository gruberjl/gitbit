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
      path: '/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK',
      article: {"description":"Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?","type":"article","publish":true,"datePublished":"2022/5/26","sectionId":"QScYfSu74","slug":"Simulating-attacks-with-Microsoft-365-GG4cMY8pK","images":["https://i.ibb.co/HxvgcYk/launch-a-simulation.png","https://i.ibb.co/b6c9c4W/select-a-technique.png","https://i.ibb.co/YTvnDry/select-a-technique.png","https://i.ibb.co/JtdZw5W/name-your-simulation.png","https://i.ibb.co/6BPbMjC/select-a-payload.png","https://i.ibb.co/hdj5mcc/target-users.png","https://i.ibb.co/SQTjGBD/select-end-user-notification.png","https://i.ibb.co/nkq9MsK/fake-phishing-email.png","https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png","https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png","https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png","https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png","https://i.ibb.co/X3ztyC5/name-your-automation.png","https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png","https://i.ibb.co/4N4906n/select-payloads.png","https://i.ibb.co/RywpK18/select-the-target-users.png","https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png","https://i.ibb.co/2yBQcj2/schedule-details.png"],"title":"Simulating attacks with Microsoft 365","featuredImage":"https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png","id":"GG4cMY8pK","article":{"blocks":[{"depth":0,"key":"bjqbc","inlineStyleRanges":[],"entityRanges":[],"type":"unstyled","text":"Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?","data":{}},{"key":"4bn4f","entityRanges":[],"depth":0,"data":{},"type":"header-two","inlineStyleRanges":[],"text":"What’s a phishing attack?"},{"key":"7l5ug","depth":0,"type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"Phishing attacks are a type of social engineering attack used to steal data, typically credit card or login credentials. In short, the malicious person would send an email pretending to be from someone else and ask the victim to either go to a website enter their credentials or send them a credit card or a money transfer. For the victim, either your organization or the user the attack can be devastating. You can lose financially, or the attacker may use the credentials to send malicious emails to your partners, as well as the world discrediting you and your business."},{"depth":0,"data":{},"inlineStyleRanges":[],"type":"header-three","key":"5q6hb","text":"Phishing attack techniques","entityRanges":[]},{"entityRanges":[],"depth":0,"type":"unstyled","text":"There are several techniques used in a phishing attack and the number continues to grow but for now, we’ll focus on 5 different phishing attack techniques.","inlineStyleRanges":[],"key":"fq7d5","data":{}},{"inlineStyleRanges":[],"entityRanges":[],"data":{},"depth":0,"key":"307vu","text":"Credential harvest","type":"header-four"},{"key":"d9u3g","data":{},"text":"In credential harvesting attacks the malicious person is attempting to get your user’s credentials. The malicious user will typically send an email with a URL to a bogus site to trick your users into entering their credentials.","entityRanges":[],"inlineStyleRanges":[],"depth":0,"type":"unstyled"},{"key":"dknie","entityRanges":[],"type":"header-four","text":"Malware attachment","data":{},"inlineStyleRanges":[],"depth":0},{"data":{},"entityRanges":[],"type":"unstyled","depth":0,"text":"In malware attachment attacks a malicious person will send an email to your users with a malicious attachment. A lot of times the attachment will look like a simple Word or Excel document but the attachment will have malicious code baked into it.","inlineStyleRanges":[],"key":"jd58"},{"entityRanges":[],"depth":0,"type":"header-four","key":"12vnj","data":{},"text":"Link in attachment","inlineStyleRanges":[]},{"key":"pdiu","inlineStyleRanges":[],"entityRanges":[],"data":{},"depth":0,"text":"With Link in attachment attacks, the malicious user will be attacking your users using the credential harvest technique. The only difference being the malicious user will put the link inside an attachment.","type":"unstyled"},{"entityRanges":[],"inlineStyleRanges":[],"type":"header-four","key":"57bvf","data":{},"depth":0,"text":"Link to malware"},{"key":"44usg","inlineStyleRanges":[],"depth":0,"entityRanges":[],"data":{},"text":"Link to malware attacks will send an email to your users with a link where the user needs to go to a website and download the malicious file. Like the malware attachment attack technique, the file will contain code that is run on your user's computer. Often the malicious person will host the malicious code on common sites like Dropbox, SharePoint, or Google Drive.","type":"unstyled"},{"data":{},"type":"header-four","text":"Drive-by URL","key":"eulsv","inlineStyleRanges":[],"depth":0,"entityRanges":[]},{"inlineStyleRanges":[],"depth":0,"text":"Drive-by URL also known as the watering hole technique is an attack sequence where the malicious user sends an email with a URL inside. The URL will point to a website with malicious code running it to get information from your users. Typically the website will be a good site that has been hacked or a clone of a good site so the user doesn’t even realize it’s happening.","key":"3g8d7","entityRanges":[],"data":{},"type":"unstyled"},{"inlineStyleRanges":[],"data":{},"entityRanges":[],"depth":0,"key":"e99f6","type":"header-two","text":"How to stop phishing attacks?"},{"type":"unstyled","text":"One of the best ways to prevent phishing attacks is user training. Training your users to detect malicious emails can prevent your organization from losing financially or credibility. In short, we’ll set up a simulated phishing email and send it to your users. Then we’ll track who opened the links and you can work with those specific users to help them learn to avoid getting tricked again.","depth":0,"key":"fgcdv","data":{},"inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"header-two","text":"What’s an attack simulation?","data":{},"key":"fm5le"},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"type":"unstyled","data":{},"text":"An attack simulation is a way for you to send an email to your users that is a fake phishing attack. In short, Microsoft has created several sample emails that you can use to send to your users. The sample emails will direct the user to go to a fake malicious site or download a fake malicious attachment. When the user opens the site or attachment they are informed that this was a simulation. Microsoft’s attack simulation will also report on who opened the malicious URLs or attachments so you can provide them with more training.","key":"f2cet"},{"key":"7bq9p","inlineStyleRanges":[],"type":"header-two","data":{},"depth":0,"text":"What licenses are required?","entityRanges":[]},{"data":{},"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"depth":0,"key":"dabt4","text":"To use the attack simulation training built into Microsoft 365 you’ll need Microsoft 365 E5 or Microsoft Defender for Office 365 Plan 2 licenses."},{"key":"52l44","depth":0,"inlineStyleRanges":[],"type":"header-two","entityRanges":[],"text":"What roles are required?","data":{}},{"depth":0,"data":{},"text":"You need to be a member of one of the following roles to set up the attack simulation training:","inlineStyleRanges":[],"key":"c3akv","type":"unstyled","entityRanges":[]},{"entityRanges":[],"type":"unordered-list-item","inlineStyleRanges":[],"text":"Organization Management","key":"colng","depth":0,"data":{}},{"text":"Security Administrator","data":{},"inlineStyleRanges":[],"depth":0,"key":"5srjs","entityRanges":[],"type":"unordered-list-item"},{"data":{},"key":"9lnp7","type":"unordered-list-item","inlineStyleRanges":[],"text":"Attack Simulation Administrators can create and manage all aspects of attack simulation campaigns.","depth":0,"entityRanges":[]},{"data":{},"text":"Attack Payload Author can create attack payloads that an admin can initiate later.","key":"pm7p","inlineStyleRanges":[],"type":"unordered-list-item","depth":0,"entityRanges":[]},{"key":"al20s","text":"How to configure an attack simulation","depth":0,"data":{},"entityRanges":[],"type":"header-two","inlineStyleRanges":[]},{"key":"eoj72","text":"1. Go to the Microsoft Defender portal > Attack simulation training > Simulations. Click Launch a simulation.","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":25,"offset":13},{"offset":41,"style":"BOLD","length":26},{"length":11,"offset":70,"style":"BOLD"},{"offset":89,"style":"BOLD","length":19}],"entityRanges":[{"length":11,"offset":70,"key":0}],"depth":0,"data":{}},{"depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic","data":{},"entityRanges":[{"key":1,"offset":0,"length":1}],"key":"fj9f5"},{"key":"cj0hk","data":{},"text":"2. Select the technique you want to use. In this scenario, we’ll leave Credential Harvest checked and click Next.","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[{"offset":71,"style":"BOLD","length":18},{"length":4,"style":"BOLD","offset":108}]},{"key":"38am9","text":" ","entityRanges":[{"key":2,"length":1,"offset":0}],"data":{},"inlineStyleRanges":[],"depth":0,"type":"atomic"},{"text":"3. Enter the simulation name of Test Simulation in the space provided. Click Next.","entityRanges":[],"data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":32,"length":15,"style":"BOLD"},{"offset":77,"style":"BOLD","length":4}],"key":"594ak"},{"key":"6qlpe","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":3,"length":1}],"text":" ","data":{},"depth":0,"type":"atomic"},{"data":{},"entityRanges":[],"text":"4. Select the 2 Failed Messages payload. Click Next.","type":"unstyled","key":"7p6pm","depth":0,"inlineStyleRanges":[{"offset":14,"length":17,"style":"BOLD"},{"offset":47,"style":"BOLD","length":4}]},{"entityRanges":[{"key":4,"offset":0,"length":1}],"depth":0,"type":"atomic","inlineStyleRanges":[],"key":"a4d00","data":{},"text":" "},{"type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","offset":105,"length":37},{"style":"BOLD","length":4,"offset":222}],"text":"5. On the Target Users page you can either select the users you want to test the deployment with or click Include all users in my organization. Set up the users you want to send the attack simulation training to and click Next.","key":"fpckk","depth":0},{"key":"a57dh","text":" ","data":{},"depth":0,"type":"atomic","entityRanges":[{"offset":0,"key":5,"length":1}],"inlineStyleRanges":[]},{"key":"1sama","type":"unstyled","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"6. On the Assign Training page leave the defaults and click Next."},{"key":"dosge","inlineStyleRanges":[],"data":{},"type":"unstyled","entityRanges":[],"depth":0,"text":"7. On the landing page window leave the defaults and click Next."},{"entityRanges":[],"text":"8. On the select end-user notification page click Microsoft default notification (recommended). Then click Delivery preferences > Deliver during campaign. Click Next.","key":"961n4","inlineStyleRanges":[{"style":"BOLD","length":44,"offset":50},{"offset":107,"style":"BOLD","length":20},{"style":"BOLD","offset":130,"length":23},{"style":"BOLD","length":4,"offset":161}],"type":"unstyled","data":{},"depth":0},{"key":"56mvv","text":" ","entityRanges":[{"offset":0,"key":6,"length":1}],"data":{},"depth":0,"inlineStyleRanges":[],"type":"atomic"},{"inlineStyleRanges":[{"style":"BOLD","length":4,"offset":36}],"key":"cp136","type":"unstyled","entityRanges":[],"data":{},"depth":0,"text":"9. On the Launch details page click Next."},{"entityRanges":[],"text":"10. Click Submit. Click Done.","data":{},"key":"1i5ce","depth":0,"inlineStyleRanges":[{"offset":10,"length":6,"style":"BOLD"},{"style":"BOLD","length":4,"offset":24}],"type":"unstyled"},{"inlineStyleRanges":[],"depth":0,"text":"What will users experience?","entityRanges":[],"type":"header-two","data":{},"key":"fl4ag"},{"inlineStyleRanges":[],"depth":0,"text":"","data":{},"type":"unstyled","entityRanges":[],"key":"4fgar"},{"inlineStyleRanges":[],"key":"7e7p2","data":{},"entityRanges":[{"key":7,"length":1,"offset":0}],"text":" ","type":"atomic","depth":0},{"entityRanges":[],"key":"573te","type":"unstyled","data":{},"inlineStyleRanges":[],"text":"Each user you selected to receive the phishing simulation will receive the same email. The email will contain a link to a website that appears to be from Microsoft. When the user enters their credentials they’ll receive a page informing them that they were duped. Once on the page, Microsoft will explain a couple of things that they review to know if the email is a phishing scam or not. Under the quick guide will be a link to training that the user can attend to learn more.","depth":0},{"entityRanges":[{"offset":0,"key":8,"length":1}],"type":"atomic","data":{},"inlineStyleRanges":[],"depth":0,"text":" ","key":"fvsoj"},{"key":"epoav","data":{},"text":"How to view the report on who clicked the link?","depth":0,"inlineStyleRanges":[],"entityRanges":[],"type":"header-two"},{"data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[],"key":"3d4k2","text":"So now, we have some data. We’ve sent the email to some users in our organization but how do we check on who clicked the link / completed the training? It’s easy!","type":"unstyled"},{"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":26,"offset":41},{"style":"BOLD","offset":70,"length":11},{"length":15,"offset":89,"style":"BOLD"}],"entityRanges":[{"key":9,"offset":70,"length":11}],"data":{},"text":"1. Go to the Microsoft Defender portal > Attack simulation training > Simulations. Click Test Simulation.","depth":0,"key":"9t9rv"},{"key":"8dia0","entityRanges":[{"length":1,"offset":0,"key":10}],"inlineStyleRanges":[],"text":" ","data":{},"depth":0,"type":"atomic"},{"depth":0,"data":{},"entityRanges":[],"type":"unstyled","text":"From this page, you have a quick overview of the simulation. You can see how many users reported the email as phishing, clicked the link, and who entered their credentials.","key":"kdn3","inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[{"length":10,"style":"BOLD","offset":9}],"key":"94s5f","text":"2. Click View users to see where your users landed in the simulation.","depth":0,"type":"unstyled","entityRanges":[]},{"depth":0,"entityRanges":[{"offset":0,"length":1,"key":11}],"key":"e0mf5","text":" ","inlineStyleRanges":[],"type":"atomic","data":{}},{"key":"57jbj","data":{},"depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"text":"From this page, you can see which users were compromised and which users completed the training."},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"data":{},"text":"How do we automatically schedule simulations?","type":"header-two","key":"96pkp"},{"key":"16u9q","type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"text":"So now you’ve evaluated the simulation and maybe even sent the simulation to some of your end-users. The next question is, how do we make the simulations reoccur? Let’s take a look.","depth":0,"data":{}},{"inlineStyleRanges":[{"offset":41,"length":26,"style":"BOLD"},{"length":22,"style":"BOLD","offset":70},{"style":"BOLD","offset":100,"length":17}],"data":{},"key":"c2lam","text":"1. Go to Microsoft 365 Defender Portal > Attack simulation training > Simulation automations. Click Create automation.","type":"unstyled","depth":0,"entityRanges":[{"offset":70,"key":12,"length":22}]},{"entityRanges":[{"key":13,"length":1,"offset":0}],"inlineStyleRanges":[],"type":"atomic","data":{},"key":"dnqbm","depth":0,"text":" "},{"inlineStyleRanges":[{"style":"BOLD","length":21,"offset":19},{"length":4,"style":"BOLD","offset":48}],"text":"2. Set the name to Simulation Automation. Click Next.","depth":0,"entityRanges":[],"data":{},"key":"cltvc","type":"unstyled"},{"entityRanges":[{"offset":0,"length":1,"key":14}],"type":"atomic","text":" ","inlineStyleRanges":[],"key":"3ue11","depth":0,"data":{}},{"type":"unstyled","text":"3. Click Credential Harvest. Click Next.","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":18,"offset":9},{"offset":35,"style":"BOLD","length":4}],"key":"bj8ei","data":{},"entityRanges":[]},{"data":{},"text":" ","entityRanges":[{"length":1,"key":15,"offset":0}],"inlineStyleRanges":[],"depth":0,"type":"atomic","key":"bsrr8"},{"entityRanges":[],"depth":0,"data":{},"text":"4. Click Randomize. Click Next.","key":"bs0vq","inlineStyleRanges":[{"style":"BOLD","length":9,"offset":9},{"style":"BOLD","length":4,"offset":26}],"type":"unstyled"},{"inlineStyleRanges":[],"entityRanges":[{"length":1,"key":16,"offset":0}],"depth":0,"data":{},"text":" ","key":"2kv91","type":"atomic"},{"depth":0,"type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"length":36,"offset":144,"style":"BOLD"},{"length":4,"offset":188,"style":"BOLD"}],"key":"3f0af","data":{},"text":"5. Select the users you want to be tested. As a start, you may want to select a couple of users. Then later you may want to come back and click Include all users in my organization. Click Next."},{"key":"e066k","entityRanges":[{"key":17,"offset":0,"length":1}],"inlineStyleRanges":[],"depth":0,"data":{},"text":" ","type":"atomic"},{"depth":0,"inlineStyleRanges":[{"length":4,"style":"BOLD","offset":38}],"entityRanges":[],"type":"unstyled","text":"6. On the assign training page, click Next.","data":{},"key":"ffuni"},{"entityRanges":[],"key":"bl0la","type":"unstyled","inlineStyleRanges":[{"length":4,"offset":37,"style":"BOLD"}],"data":{},"depth":0,"text":"7. On the Landing page window, click Next."},{"inlineStyleRanges":[{"style":"BOLD","length":44,"offset":50},{"length":20,"offset":100,"style":"BOLD"},{"length":23,"style":"BOLD","offset":124},{"length":4,"style":"BOLD","offset":155}],"key":"9dddn","text":"8. On the Select end user notification page click Microsoft default notification (recommended). Set Delivery preferences to Deliver during campaign. Click Next.","entityRanges":[],"depth":0,"data":{},"type":"unstyled"},{"inlineStyleRanges":[],"type":"atomic","key":"4194b","depth":0,"entityRanges":[{"offset":0,"key":18,"length":1}],"text":" ","data":{}},{"key":"8ekcm","type":"unstyled","entityRanges":[],"data":{},"text":"9. On the Simulation schedule page click Next.","depth":0,"inlineStyleRanges":[{"offset":41,"style":"BOLD","length":4}]},{"data":{},"entityRanges":[],"inlineStyleRanges":[{"offset":12,"style":"BOLD","length":21},{"style":"BOLD","length":4,"offset":46}],"depth":0,"text":"10. Set the simulation recurrence. Then click Next.","key":"17h4m","type":"unstyled"},{"data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":19}],"key":"a7aau","text":" ","type":"atomic","depth":0},{"key":"a4ojt","inlineStyleRanges":[{"style":"BOLD","offset":37,"length":4}],"text":"11. On the launch details page click Next.","type":"unstyled","entityRanges":[],"data":{},"depth":0},{"inlineStyleRanges":[{"offset":10,"style":"BOLD","length":6},{"length":4,"style":"BOLD","offset":24}],"entityRanges":[],"type":"unstyled","text":"12. Click Submit. Click Done.","key":"2bcct","data":{},"depth":0},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","text":"","data":{},"key":"4tn71","entityRanges":[]}],"entityMap":{"0":{"data":{"url":"https://security.microsoft.com/attacksimulator?viewid=simulations","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"1":{"data":{"height":"auto","alt":"Launch a phishing attack simulation","url":"https://security.microsoft.com/attacksimulator?viewid=simulations","width":"auto","src":"https://i.ibb.co/HxvgcYk/launch-a-simulation.png","targetOption":"_blank","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"2":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","url":"https://security.microsoft.com/attacksimulator?viewid=simulations","src":"https://i.ibb.co/YTvnDry/select-a-technique.png","alt":"Select a Technique","height":"auto","alignment":"none","targetOption":"_blank"}},"3":{"data":{"width":"auto","src":"https://i.ibb.co/JtdZw5W/name-your-simulation.png","alt":"Name your simulation then click Next","targetOption":"_blank","height":"auto","alignment":"none","url":"https://security.microsoft.com/attacksimulator?viewid=simulations"},"mutability":"MUTABLE","type":"IMAGE"},"4":{"data":{"height":"auto","alignment":"none","width":"auto","url":"https://security.microsoft.com/attacksimulator?viewid=simulations","alt":"Select the 2 failed messages payload. Then click Next","src":"https://i.ibb.co/6BPbMjC/select-a-payload.png","targetOption":"_blank"},"type":"IMAGE","mutability":"MUTABLE"},"5":{"type":"IMAGE","data":{"targetOption":"_blank","alignment":"none","alt":"Select the users to target. Then click Next","src":"https://i.ibb.co/hdj5mcc/target-users.png","url":"https://security.microsoft.com/attacksimulator?viewid=simulations","height":"auto","width":"auto"},"mutability":"MUTABLE"},"6":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Select end user notifications","alignment":"none","url":"https://security.microsoft.com/attacksimulator?viewid=simulations","width":"auto","src":"https://i.ibb.co/SQTjGBD/select-end-user-notification.png","height":"auto","targetOption":"_blank"}},"7":{"data":{"alignment":"none","url":"https://security.microsoft.com/attacksimulator?viewid=simulations","targetOption":"_blank","src":"https://i.ibb.co/nkq9MsK/fake-phishing-email.png","alt":"Fake phishing email","height":"auto","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"8":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","url":"https://security.microsoft.com/attacksimulator?viewid=simulations","targetOption":"_blank","height":"auto","width":"auto","alt":"Fake phishing landing page","src":"https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png"}},"9":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://security.microsoft.com/attacksimulator?viewid=simulations"}},"10":{"data":{"alignment":"none","src":"https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png","height":"auto","alt":"View phishing simulation","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"11":{"mutability":"MUTABLE","data":{"alignment":"none","height":"auto","src":"https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png","alt":"Simulation overview view users circled","width":"auto"},"type":"IMAGE"},"12":{"type":"LINK","data":{"url":"https://security.microsoft.com/attacksimulator?viewid=simulationautomation","targetOption":"_blank"},"mutability":"MUTABLE"},"13":{"mutability":"MUTABLE","data":{"width":"auto","alignment":"none","alt":"Create phishing simulation automation","height":"auto","src":"https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png"},"type":"IMAGE"},"14":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/X3ztyC5/name-your-automation.png","alt":"Name your automation. Click next","alignment":"none","height":"auto","width":"auto"},"type":"IMAGE"},"15":{"type":"IMAGE","data":{"width":"auto","alignment":"none","height":"auto","src":"https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png","alt":"Select social engineering technique"},"mutability":"MUTABLE"},"16":{"data":{"height":"auto","src":"https://i.ibb.co/4N4906n/select-payloads.png","alignment":"none","width":"auto","alt":"Set payloads to randomize. Click Next"},"type":"IMAGE","mutability":"MUTABLE"},"17":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","height":"auto","alt":"Select the target users.","alignment":"none","src":"https://i.ibb.co/RywpK18/select-the-target-users.png"}},"18":{"data":{"width":"auto","alignment":"none","alt":"Select end user notifications","height":"auto","src":"https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png"},"type":"IMAGE","mutability":"MUTABLE"},"19":{"data":{"src":"https://i.ibb.co/2yBQcj2/schedule-details.png","height":"auto","width":"auto","alignment":"none","alt":"Schedule details"},"mutability":"MUTABLE","type":"IMAGE"}}}},
      nextContentSlug: 'Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T',
      previousContentSlug: 'Protecting-email-against-phishing-attacks-GCOOUsSBT',
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
                <div><p>Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?</p>
<h2>What’s a phishing attack?</h2>
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
<p>1. Go to the <strong>Microsoft Defender portal</strong> &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulations" target="_blank"><strong>Simulations</strong></a>. Click <strong>Launch a simulation</strong>.</p>
<div ><img src="https://i.ibb.co/HxvgcYk/launch-a-simulation.png" alt="Launch a phishing attack simulation" style="height: auto;width: auto"/></div>
<p>2. Select the technique you want to use. In this scenario, we’ll leave <strong>Credential Harvest</strong> checked and click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/YTvnDry/select-a-technique.png" alt="Select a Technique" style="height: auto;width: auto"/></div>
<p>3. Enter the simulation name of <strong>Test Simulation</strong> in the space provided. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/JtdZw5W/name-your-simulation.png" alt="Name your simulation then click Next" style="height: auto;width: auto"/></div>
<p>4. Select the <strong>2 Failed Messages</strong> payload. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/6BPbMjC/select-a-payload.png" alt="Select the 2 failed messages payload. Then click Next" style="height: auto;width: auto"/></div>
<p>5. On the Target Users page you can either select the users you want to test the deployment with or click<strong> Include all users in my organization</strong>. Set up the users you want to send the attack simulation training to and click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/hdj5mcc/target-users.png" alt="Select the users to target. Then click Next" style="height: auto;width: auto"/></div>
<p>6. On the Assign Training page leave the defaults and click Next.</p>
<p>7. On the landing page window leave the defaults and click Next.</p>
<p>8. On the select end-user notification page click <strong>Microsoft default notification (recommended)</strong>. Then click <strong>Delivery preferences</strong> &gt; <strong>Deliver during campaign</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/SQTjGBD/select-end-user-notification.png" alt="Select end user notifications" style="height: auto;width: auto"/></div>
<p>9. On the Launch details page click <strong>Next</strong>.</p>
<p>10. Click <strong>Submit</strong>. Click <strong>Done</strong>.</p>
<h2>What will users experience?</h2>
<p></p>
<div ><img src="https://i.ibb.co/nkq9MsK/fake-phishing-email.png" alt="Fake phishing email" style="height: auto;width: auto"/></div>
<p>Each user you selected to receive the phishing simulation will receive the same email. The email will contain a link to a website that appears to be from Microsoft. When the user enters their credentials they’ll receive a page informing them that they were duped. Once on the page, Microsoft will explain a couple of things that they review to know if the email is a phishing scam or not. Under the quick guide will be a link to training that the user can attend to learn more.</p>
<div ><img src="https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png" alt="Fake phishing landing page" style="height: auto;width: auto"/></div>
<h2>How to view the report on who clicked the link?</h2>
<p>So now, we have some data. We’ve sent the email to some users in our organization but how do we check on who clicked the link / completed the training? It’s easy!</p>
<p>1. Go to the Microsoft Defender portal &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulations" target="_blank"><strong>Simulations</strong></a>. Click <strong>Test Simulation</strong>.</p>
<div ><img src="https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png" alt="View phishing simulation" style="height: auto;width: auto"/></div>
<p>From this page, you have a quick overview of the simulation. You can see how many users reported the email as phishing, clicked the link, and who entered their credentials.</p>
<p>2. Click <strong>View users</strong> to see where your users landed in the simulation.</p>
<div ><img src="https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png" alt="Simulation overview view users circled" style="height: auto;width: auto"/></div>
<p>From this page, you can see which users were compromised and which users completed the training.</p>
<h2>How do we automatically schedule simulations?</h2>
<p>So now you’ve evaluated the simulation and maybe even sent the simulation to some of your end-users. The next question is, how do we make the simulations reoccur? Let’s take a look.</p>
<p>1. Go to Microsoft 365 Defender Portal &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulationautomation" target="_blank"><strong>Simulation automations</strong></a>. Click <strong>Create automation</strong>.</p>
<div ><img src="https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png" alt="Create phishing simulation automation" style="height: auto;width: auto"/></div>
<p>2. Set the name to <strong>Simulation Automation</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/X3ztyC5/name-your-automation.png" alt="Name your automation. Click next" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Credential Harvest</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png" alt="Select social engineering technique" style="height: auto;width: auto"/></div>
<p>4. Click <strong>Randomize</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/4N4906n/select-payloads.png" alt="Set payloads to randomize. Click Next" style="height: auto;width: auto"/></div>
<p>5. Select the users you want to be tested. As a start, you may want to select a couple of users. Then later you may want to come back and click <strong>Include all users in my organization</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/RywpK18/select-the-target-users.png" alt="Select the target users." style="height: auto;width: auto"/></div>
<p>6. On the assign training page, click <strong>Next</strong>.</p>
<p>7. On the Landing page window, click <strong>Next</strong>.</p>
<p>8. On the Select end user notification page click <strong>Microsoft default notification (recommended)</strong>. Set <strong>Delivery preferences</strong> to <strong>Deliver during campaign</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png" alt="Select end user notifications" style="height: auto;width: auto"/></div>
<p>9. On the Simulation schedule page click <strong>Next</strong>.</p>
<p>10. Set the <strong>simulation recurrence</strong>. Then click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/2yBQcj2/schedule-details.png" alt="Schedule details" style="height: auto;width: auto"/></div>
<p>11. On the launch details page click <strong>Next</strong>.</p>
<p>12. Click <strong>Submit</strong>. Click <strong>Done</strong>.</p>
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
