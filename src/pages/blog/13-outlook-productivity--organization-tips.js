import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '13 Outlook Productivity & Organization Tips'
  const jsonLd = {
    headline: title,
    datePublished: '1-23-2019',
    keywords: [
      'Microsoft',
      'Microsoft Outlook',
      'Microsoft 365',
      'Office 365',
      'Productivity'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1000/1*5s_KoLjkCsFe9-eXmTY38g.jpeg'} canonical={'https://betterhumans.pub/13-outlook-productivity-organization-tips-244e9f16efeb'} title={title} description={'Microsoft Outlook is a personal information manager from Microsoft, accessible as a piece of the Microsoft Office suite. Albeit often used as an email application, it likewise incorporates a…'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>13 Outlook Productivity &amp; Organization Tips</Typography>
                <div>
                  <Typography variant="h5" component="h3" gutterBottom>Tips to Save You Time and Stay Better Organized in Microsoft Outlook</Typography>
                </div>
                <div>
                  <div>
                    <div>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook" src="https://miro.medium.com/max/1000/1*5s_KoLjkCsFe9-eXmTY38g.jpeg" width="1000" height="563" role="presentation" /></div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <Typography variant="h4" component="h2" gutterBottom>What’s Outlook</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft Outlook is a personal information manager from Microsoft, accessible as a piece of the Microsoft Office suite. Albeit often used as an email application, it likewise incorporates a calendar, task manager, contact manager, note taking, and journal. It’s been around since MS-DOS and is found in most corporations across the country. The most recent variant of Microsoft’s well-known suite, Office ProPlus, is coming packaged with Outlook 2016.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>1. Dictation: Text to Speech</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft has a hidden gem with an add-in called Dictate. Designed by Microsoft’s Garage team, it has one purpose: <strong>Highly accurate speech to text</strong>.</Typography>
                    <Typography variant="body1" gutterBottom>Pop over<span><span> </span></span>to the home page: <a href="https://www.microsoft.com/en-us/garage/profiles/dictate/" rel="noopener">https://www.microsoft.com/en-us/garage/profiles/dictate/</a> and download to get started.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook dication ribbon" width="612" height="139" role="presentation" src="https://miro.medium.com/max/612/1*BM8dzgkz5EZ1bH08yLYmRA.png" sizes="612px" srcSet="https://miro.medium.com/max/276/1*BM8dzgkz5EZ1bH08yLYmRA.png 276w, https://miro.medium.com/max/552/1*BM8dzgkz5EZ1bH08yLYmRA.png 552w, https://miro.medium.com/max/612/1*BM8dzgkz5EZ1bH08yLYmRA.png 612w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>2. Remember to Follow Up</Typography>
                    <Typography variant="body1" gutterBottom>“By flagging email messages, you can track responses to messages that you send. You can also make sure that you follow up on messages that you receive. In either case, you can include a reminder alert.” — <a href="https://support.office.com/en-us/article/flag-email-messages-for-follow-up-9d0f175f-f3e9-406d-bbf7-9c57e1f781cc" rel="noopener">Microsoft</a></Typography>
                    <Typography variant="body1" gutterBottom>As an alternative, you can flag an email you send to someone else with a ‘<strong>Recipient follow up flag</strong>’. When used, the email will be added to the recipient’s task list. I don’t recommend using recipient follow up flags. They’re not common, and come off a bit rude.</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>Flag an email to remind you to follow up</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook follow-up flags" width="700" height="269" role="presentation" src="https://miro.medium.com/max/700/1*naVhQb0iNxqFghCjDUyiqg.jpeg" sizes="700px" srcSet="https://miro.medium.com/max/276/1*naVhQb0iNxqFghCjDUyiqg.jpeg 276w, https://miro.medium.com/max/552/1*naVhQb0iNxqFghCjDUyiqg.jpeg 552w, https://miro.medium.com/max/640/1*naVhQb0iNxqFghCjDUyiqg.jpeg 640w, https://miro.medium.com/max/700/1*naVhQb0iNxqFghCjDUyiqg.jpeg 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <ol>
                      <li>Before you send an email, find the <strong>Follow Up </strong>button in the <strong>Message </strong>Ribbon.</li>
                      <li>Select a default flag for follow up or set a custom date/time and reminder.</li>
                    </ol>
                    <Typography variant="h5" component="h3" gutterBottom>Show Flags and Tasks from Inbox</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook view ribbon" width="700" height="155" role="presentation" src="https://miro.medium.com/max/700/1*_6p9RKg9uD-CI23XYzjd4Q.jpeg" sizes="700px" srcSet="https://miro.medium.com/max/276/1*_6p9RKg9uD-CI23XYzjd4Q.jpeg 276w, https://miro.medium.com/max/552/1*_6p9RKg9uD-CI23XYzjd4Q.jpeg 552w, https://miro.medium.com/max/640/1*_6p9RKg9uD-CI23XYzjd4Q.jpeg 640w, https://miro.medium.com/max/700/1*_6p9RKg9uD-CI23XYzjd4Q.jpeg 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="body1" gutterBottom>If you haven’t already, you can enable the <strong>To-Do </strong>bar to see all of your flags and tasks directly from your inbox.</Typography>
                    <ol>
                      <li>From the <strong>View </strong>ribbon, click <strong>To-Do Bar</strong> then select <strong>Tasks</strong>.</li>
                    </ol>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook flags" width="700" height="625" role="presentation" src="https://miro.medium.com/max/700/1*yvNbwJpl3gcWx7PiCM1Yhw.jpeg" sizes="700px" srcSet="https://miro.medium.com/max/276/1*yvNbwJpl3gcWx7PiCM1Yhw.jpeg 276w, https://miro.medium.com/max/552/1*yvNbwJpl3gcWx7PiCM1Yhw.jpeg 552w, https://miro.medium.com/max/640/1*yvNbwJpl3gcWx7PiCM1Yhw.jpeg 640w, https://miro.medium.com/max/700/1*yvNbwJpl3gcWx7PiCM1Yhw.jpeg 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>3. Create Tasks from Emails for Quick Note Taking</Typography>
                    <Typography variant="body1" gutterBottom>Flagging an item for follow up is great but it doesn’t leave any room for notes or additional information. Instead of flagging an email for follow up, convert an email to a task. Creating a task is an easy way to add notes and additional information to the email and continue to live in Outlook. You can always add a follow-up flag to the task!</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook Tasks" width="700" height="302" role="presentation" src="https://miro.medium.com/max/700/1*Qy_clxUwdBv5R3jZD90RpA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*Qy_clxUwdBv5R3jZD90RpA.png 276w, https://miro.medium.com/max/552/1*Qy_clxUwdBv5R3jZD90RpA.png 552w, https://miro.medium.com/max/640/1*Qy_clxUwdBv5R3jZD90RpA.png 640w, https://miro.medium.com/max/700/1*Qy_clxUwdBv5R3jZD90RpA.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h5" component="h3" gutterBottom>How to Create a Task from an Email</Typography>
                    <ol>
                      <li>Drag and drop the email into the task icon. That’s it!</li>
                    </ol>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook tasks button" width="528" height="676" role="presentation" src="https://miro.medium.com/max/528/1*nyYDLLKh5Ci2h2qhl8M-cg.png" sizes="528px" srcSet="https://miro.medium.com/max/276/1*nyYDLLKh5Ci2h2qhl8M-cg.png 276w, https://miro.medium.com/max/528/1*nyYDLLKh5Ci2h2qhl8M-cg.png 528w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>4. Organize multiple Email Chains with OneNote Integration</Typography>
                    <Typography variant="body1" gutterBottom><a href="https://medium.com/@gruberjl/10-tips-to-improve-productivity-using-onenote-85dee4a32cf2" rel="noopener follow">OneNote</a> is a free-flowing place to organize your information in one easy place. OneNote’s integration into Outlook is awesome. You can take notes on meetings, save emails in OneNote notebooks, and even create flags from OneNote to show up in your Outlook To-Do Bar.</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>How to Save Emails in OneNote</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook OneNote integration" width="672" height="386" role="presentation" src="https://miro.medium.com/max/672/1*96d97v7ENy1woaM-L-SVog.png" sizes="672px" srcSet="https://miro.medium.com/max/276/1*96d97v7ENy1woaM-L-SVog.png 276w, https://miro.medium.com/max/552/1*96d97v7ENy1woaM-L-SVog.png 552w, https://miro.medium.com/max/640/1*96d97v7ENy1woaM-L-SVog.png 640w, https://miro.medium.com/max/672/1*96d97v7ENy1woaM-L-SVog.png 672w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <ol>
                      <li>From your Inbox, <strong>highlight </strong>the email you want to save.</li>
                      <li>Click the <strong>OneNote </strong>icon in the <strong>Home </strong>ribbon.</li>
                      <li>Select where you want to save the email.</li>
                    </ol>
                    <Typography variant="body1" gutterBottom>Once the email is saved in OneNote, you can add notes, additional information or make a checklist. Then create a flag from your OneNote Page to wrap it back into Outlook!</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>How to Create an Outlook Flag from a OneNote Page</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft OneNote with Outlook Tasks" width="700" height="236" role="presentation" src="https://miro.medium.com/max/700/1*fGzYrMR9e892rk-ePV0Kvg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*fGzYrMR9e892rk-ePV0Kvg.png 276w, https://miro.medium.com/max/552/1*fGzYrMR9e892rk-ePV0Kvg.png 552w, https://miro.medium.com/max/640/1*fGzYrMR9e892rk-ePV0Kvg.png 640w, https://miro.medium.com/max/700/1*fGzYrMR9e892rk-ePV0Kvg.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <ol>
                      <li>From your OneNote page, <strong>click the title</strong>.</li>
                      <li>Open the <strong>Home </strong>ribbon, then click <strong>Outlook Tasks</strong>.</li>
                      <li><strong>Select the flag</strong> you want to use and you’re all set!</li>
                    </ol>
                    <Typography variant="body1" gutterBottom><strong>Pro Tip</strong>: You can flag just about anything in OneNote including paragraphs. I tend to lose these flags so I recommend keeping the flag on the title.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>5. Webinar / Conferencing Integration</Typography>
                    <Typography variant="body1" gutterBottom>If you’re not already using a web conferencing tool like Teams, Webex, or GoToMeeting, you should start right away. These tools integrate directly into Outlook and offer video and audio conference calls, screen sharing, display presentations, and so much more.</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>How to create a Teams Meeting</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook new Teams Meeting Button" width="428" height="360" role="presentation" src="https://miro.medium.com/max/428/1*oX5UuykyEL-Smh-V_PkVYQ.png" sizes="428px" srcSet="https://miro.medium.com/max/276/1*oX5UuykyEL-Smh-V_PkVYQ.png 276w, https://miro.medium.com/max/428/1*oX5UuykyEL-Smh-V_PkVYQ.png 428w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <ol>
                      <li>From your Outlook <strong>calendar</strong>, click <strong>New Teams Meeting</strong> located on the <strong>Home </strong>Ribbon.</li>
                    </ol>
                    <Typography variant="h5" component="h3" gutterBottom>How to create a WebEx Meeting</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook Schedule Meeting WebEx" width="413" height="218" role="presentation" src="https://miro.medium.com/max/413/1*-eB5o3biJUNZri5jELk5hQ.png" sizes="413px" srcSet="https://miro.medium.com/max/276/1*-eB5o3biJUNZri5jELk5hQ.png 276w, https://miro.medium.com/max/413/1*-eB5o3biJUNZri5jELk5hQ.png 413w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <ol>
                      <li>If your organization has WebEx, download and install the Outlook integration package.</li>
                      <li>From your <strong>calendar</strong>, find the <strong>Schedule Meeting</strong> button in the <strong>Home </strong>ribbon</li>
                    </ol>
                    <Typography variant="h4" component="h2" gutterBottom>6. Clear the Clutter and Stay Focused</Typography>
                    <Typography variant="body1" gutterBottom>The Clutter feature learns how you prioritize your mail, and then helps you by putting low priority messages in a separate folder (while still giving you a daily summary so you don’t miss anything). When on the go, you can also take advantage of this capability by using the “Focused Inbox” in the Outlook mobile app (for iOS and Android devices).</Typography>
                    <Typography variant="body1" gutterBottom>You’ll find the clutter folder in your mailbox. You’ll also find the ‘Other’ tab while looking at your Inbox</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook Clutter" width="532" height="649" role="presentation" src="https://miro.medium.com/max/532/1*ijY-2ZakCqereMaRkoXs2w.png" sizes="532px" srcSet="https://miro.medium.com/max/276/1*ijY-2ZakCqereMaRkoXs2w.png 276w, https://miro.medium.com/max/532/1*ijY-2ZakCqereMaRkoXs2w.png 532w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h5" component="h3" gutterBottom>Here’s how it works</Typography>
                    <ul>
                      <li>Clutter analyzes your emails, and based on your past behavior, determines the messages that you’re most likely to ignore.</li>
                      <li>It then automatically moves those messages to a folder called Clutter so that you can review them later.</li>
                    </ul>
                    <Typography variant="h5" component="h3" gutterBottom>Managing the Clutter folder</Typography>
                    <Typography variant="body1" gutterBottom>You can help Clutter learn your preferences faster by manually moving items in or out of the Clutter folder</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>Move from Inbox to Clutter</Typography>
                    <Typography variant="body1" gutterBottom>Drag and drop emails from your inbox to the clutter folder and Outlook will automatically learn to move those messages to the clutter folder in the future. You can also right-click the item, click Move -&gt; Move to Clutter.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook move to clutter" width="285" height="230" role="presentation" src="https://miro.medium.com/max/285/1*WjZiG5aCXzWaS616hocSmQ.png" sizes="285px" srcSet="https://miro.medium.com/max/276/1*WjZiG5aCXzWaS616hocSmQ.png 276w, https://miro.medium.com/max/285/1*WjZiG5aCXzWaS616hocSmQ.png 285w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h5" component="h3" gutterBottom>Move from Clutter to Inbox</Typography>
                    <Typography variant="body1" gutterBottom>Something important land in the clutter folder? No problem, follow the ‘Move from Inbox to Clutter’ steps above and you’re good to go. Outlook will learn where those items belong in the future.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook move to inbox button" width="267" height="240" role="presentation" src="https://miro.medium.com/max/267/1*W71kTmBBNvejSW9evJajlw.png" sizes="267px" srcSet="" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h5" component="h3" gutterBottom>Turning Off/On Clutter Tool</Typography>
                    <ul>
                      <li>You can turn Clutter off/on by signing into your Outlook on the web account, navigate to Settings &gt; Options &gt; Mail &gt; Automatic processing &gt; Clutter.</li>
                      <li>Focused Inbox can be disabled in the Outlook mobile app for iOS and Android in settings.</li>
                    </ul>
                    <Typography variant="h4" component="h2" gutterBottom>7. Automate your Inbox with Mailbox Rules</Typography>
                    <Typography variant="body1" gutterBottom>“A rule is an action that Outlook for Windows runs automatically on incoming or outgoing messages. You choose what triggers the rule as well as the actions the rule takes. For example, you can create a rule to move all messages from your manager to a folder or to delete all messages with “Buy now!” in the subject.</Typography>
                    <Typography variant="body1" gutterBottom>By using rules, you can reduce manual and repetitive actions needed to manage your email messages. When you turn on rules, they run continuously and automatically.</Typography>
                    <Typography variant="body1" gutterBottom>Rules generally fall into one of two categories — organization or notification. You can use the Rules Wizard to help you design rules to manage your messages.</Typography>
                    <Typography variant="body1" gutterBottom>The Rules Wizard includes templates for the most frequently used rules.</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook rules" width="420" height="265" role="presentation" src="https://miro.medium.com/max/420/1*bbMDJ1mUbdPIFcLrYmtmfw.png" sizes="420px" srcSet="https://miro.medium.com/max/276/1*bbMDJ1mUbdPIFcLrYmtmfw.png 276w, https://miro.medium.com/max/420/1*bbMDJ1mUbdPIFcLrYmtmfw.png 420w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h5" component="h3" gutterBottom>How to Create a Rule</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook home ribbon showing rules" width="700" height="194" role="presentation" src="https://miro.medium.com/max/700/1*9Jca8LCQw3EKJbRBIXv9-g.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*9Jca8LCQw3EKJbRBIXv9-g.png 276w, https://miro.medium.com/max/552/1*9Jca8LCQw3EKJbRBIXv9-g.png 552w, https://miro.medium.com/max/640/1*9Jca8LCQw3EKJbRBIXv9-g.png 640w, https://miro.medium.com/max/700/1*9Jca8LCQw3EKJbRBIXv9-g.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <ol>
                      <li>Choose <strong>Rules</strong> &gt; <strong>Manage Rules &amp; Alerts</strong> from the ribbon or choose the <strong>File</strong> tab and then choose <strong>Manage Rules &amp; Alerts</strong>.</li>
                      <li>In the <strong>Rules and Alerts</strong> dialog box, on the <strong>E-mail Rules</strong> tab, choose <strong>New Rule</strong>.</li>
                      <li>In the <strong>Rules Wizard</strong>, under <strong>Step 1: Select a template</strong>, pick one of the default templates under <strong>Stay Organized</strong>, <strong>Stay Up to Date</strong>, or, <strong>Start from a blank rule</strong>.</li>
                    </ol>
                    <Typography variant="h4" component="h2" gutterBottom>8. Shortcuts</Typography>
                    <Typography variant="body1" gutterBottom>Outlook has shortcut keys galore! For a full list check out <a href="https://support.office.com/en-us/article/Keyboard-shortcuts-for-Outlook-3cdeb221-7ae5-4c1d-8c1d-9e63216c1efd?wt.mc_id=otc_tips&amp;ui=en-US&amp;rs=en-US&amp;ad=US" rel="noopener">Microsoft’s support page</a>.</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>Frequently Used Shortcuts</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook hot keys" width="628" height="374" role="presentation" src="https://miro.medium.com/max/628/1*mkATfhCi0CREjokVTwAbPw.png" sizes="628px" srcSet="https://miro.medium.com/max/276/1*mkATfhCi0CREjokVTwAbPw.png 276w, https://miro.medium.com/max/552/1*mkATfhCi0CREjokVTwAbPw.png 552w, https://miro.medium.com/max/628/1*mkATfhCi0CREjokVTwAbPw.png 628w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h5" component="h3" gutterBottom>Quickly Move Between Views</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook hot keys" width="629" height="262" role="presentation" src="https://miro.medium.com/max/629/1*XiM7XQxRXPeEPLIbhuKN8g.png" sizes="629px" srcSet="https://miro.medium.com/max/276/1*XiM7XQxRXPeEPLIbhuKN8g.png 276w, https://miro.medium.com/max/552/1*XiM7XQxRXPeEPLIbhuKN8g.png 552w, https://miro.medium.com/max/629/1*XiM7XQxRXPeEPLIbhuKN8g.png 629w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="h4" component="h2" gutterBottom>9. Email Templates</Typography>
                    <Typography variant="body1" gutterBottom>Use email templates to send messages that include information that infrequently changes from message to message. Compose and save a message as a template, and then reuse it when you want it. New information can be added before the template is sent as an email message.</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>How to Create an Email Template</Typography>
                    <ol>
                      <li>Create a new email and fill in the subject and body to prepare the template.</li>
                      <li>In the message window, click the <strong>File </strong>button in the top left corner.</li>
                      <li>Click <strong>Save As</strong>.</li>
                      <li>In the Save As dialog box, in the Save as type list, click <strong>Outlook Template</strong>.</li>
                      <li>In the File name box,<strong> type a name</strong> for your template, and then click <strong>Save</strong>.</li>
                    </ol>
                    <Typography variant="h4" component="h2" gutterBottom>10. Store Commonly Used Words</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook quick parts" width="700" height="604" role="presentation" src="https://miro.medium.com/max/700/1*bhennyHWUGc1teArfjTVDA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*bhennyHWUGc1teArfjTVDA.png 276w, https://miro.medium.com/max/552/1*bhennyHWUGc1teArfjTVDA.png 552w, https://miro.medium.com/max/640/1*bhennyHWUGc1teArfjTVDA.png 640w, https://miro.medium.com/max/700/1*bhennyHWUGc1teArfjTVDA.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="body1" gutterBottom><strong>AutoText</strong> is reusable content that you can store and access again and again. You can save AutoText to the AutoText gallery by selecting the text you want to reuse, click AutoText, and then click <strong>Save Selection</strong> <strong>to AutoText Gallery</strong>. By filling in the new building block information you store the content you save to use again and again.</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>How to Save &amp; Use content from AutoText</Typography>
                    <ol>
                      <li><strong>Select the content</strong> in your email message that you want to store as reusable.</li>
                      <li>On the <strong>Insert</strong> ribbon in the <strong>Text</strong> group, click <strong>Quick Parts</strong>, and then click <strong>AutoText</strong> to access the AutoText gallery.</li>
                      <li>You can then save your desired text to the gallery by clicking <strong>AutoText</strong>, and then click <strong>Save Selection </strong>to AutoText Gallery.</li>
                      <li>By filling in the new building block information, the content is stored to use again and again.</li>
                    </ol>
                    <Typography variant="h4" component="h2" gutterBottom>11. Keep Project Members Informed with Contact Groups</Typography>
                    <Typography variant="body1" gutterBottom>One of the first things I do when I start a new project is to create a contact group in Outlook. Every time I send an email regarding the project I include the group and everyone is informed. As people are no longer part of the project I remove them from the group. It’s that simple.</Typography>
                    <Typography variant="h5" component="h3" gutterBottom>How to Create a Contact Group</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook new contact group button" width="311" height="227" role="presentation" src="https://miro.medium.com/max/311/1*bvWg6BYK6TTEjU9218k96Q.png" sizes="311px" srcSet="https://miro.medium.com/max/276/1*bvWg6BYK6TTEjU9218k96Q.png 276w, https://miro.medium.com/max/311/1*bvWg6BYK6TTEjU9218k96Q.png 311w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <ol>
                      <li>Go to your <strong>Outlook Contacts</strong>.</li>
                      <li>In the Home ribbon, click <strong>New Contact Group</strong>.</li>
                      <li><strong>Name</strong> the group.</li>
                      <li>Use the <strong>Add Members</strong> button to add members to the group.</li>
                      <li>When finished, click <strong>Save &amp; Close</strong>.</li>
                    </ol>
                    <Typography variant="h4" component="h2" gutterBottom>12. Smart Lookup</Typography>
                    <Typography variant="body1" gutterBottom>Fact-check or explore terms in your emails with Smart Lookup. Simply highlight terms in your document and use this feature to bring in search results from the web right into your reading or authoring environment.</Typography>
                    <Typography variant="body1" gutterBottom>The Insights pane offers more than just definitions. When you select a word or phrase, right-click it, and choose Smart Lookup, the insights pane will open with definitions, Wiki articles, and top related searches from the web. You can also get to Smart Lookup any time by going to Review &gt; Smart Lookup and entering a query there.</Typography>
                    <Typography variant="body1" gutterBottom><em>Note: If you are on a touch device, double-tap the word to select it and then tap Smart Lookup.</em></Typography>
                    <Typography variant="h4" component="h2" gutterBottom>13. Tame your inbox with Clean-up</Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook clean up folder & subfolders" width="528" height="298" role="presentation" src="https://miro.medium.com/max/528/1*_ujoTTi_wp9L2Nlpmj7GeA.png" sizes="528px" srcSet="https://miro.medium.com/max/276/1*_ujoTTi_wp9L2Nlpmj7GeA.png 276w, https://miro.medium.com/max/528/1*_ujoTTi_wp9L2Nlpmj7GeA.png 528w" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="body1" gutterBottom>Overwhelmed trying to achieve Inbox Zero? Folder Clean-up can help.</Typography>
                    <Typography variant="body1" gutterBottom>From your Inbox (or any other email folder), select Home &gt; Clean Up. You can Clean Up Conversation, Clean Up Folder, or Clean Up Folder &amp; Sub-folders. Outlook will automatically move redundant, read messages to the Deleted Items folder. Folder clean-up will never remove unread messages.</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </Page>
  )
}

export default BlogArticle
