import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

 
class BlogArticle extends Component {
  render() {
    const title = "30 Advanced Tips for Becoming a Microsoft Teams Power User"
    const jsonLd = {
      headline: title,
      datePublished: '10-14-2020',
      keywords: [
        "Microsoft",
        "Microsoft Teams",
        "Microsoft 365",
        "Office 365",
        "Productivity"
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*qRhUy_LCV-zZDIc1z8DL5w.png'} canonical={'https://betterhumans.pub/30-advanced-tips-for-becoming-a-microsoft-teams-power-user-d1e544444656'} title={title} description={"Microsoft Teams is a communication platform much like Slack that combines one on one & team chat, video meetings, and file storage. Teams also has a number of application integrations that can be…"}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>30 Advanced Tips for Becoming a Microsoft Teams Power User</Typography>
                  <div>
                   <Typography variant="h5" component="h3" gutterBottom>A complete guide to Microsoft’s competitor to Slack</Typography>
                  </div>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div role="button" tabIndex="0">
                      <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams GUI with Labels" src="https://miro.medium.com/max/700/1*qRhUy_LCV-zZDIc1z8DL5w.png" width="700" height="364"/></div>
                   </div>
                   <figcaption>Illustration by the author.</figcaption>
                  </figure>
                  <Typography variant="body1" gutterBottom><span><span><span></span></span></span></Typography>
                  <div></div>
                  Microsoft Teams is a communication platform much like Slack that combines one on one &amp; team chat, video meetings, and file storage. Teams also has a number of application integrations that can be used to expand your Teams experience. The service integrates with the Microsoft 365 subscription office suite and can integrate with non-Microsoft products. Microsoft Teams is a competitor to Slack and is the upgrade path from Skype.
                  <Typography variant="body1" gutterBottom>Teams allows you to communicate and share just about anything in one specified location. Chat with your team, share documents, link Planner boards, and host meetings all from one place.</Typography>
                  <Typography variant="body1" gutterBottom>Y<span><span>o</span></span>u can quickly ask a question to an entire team and get a fast response from the first available colleague, share a file with your team and keep it in a secure location where new team members can access the file, the possibilities are endless.</Typography>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>Teams and Channels</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams structure showing organization at the top followed by teams followed by channels" src="https://miro.medium.com/max/700/0*8aVm_Ku1wGelSqNl.png" width="700" height="410"/></div>
                            </div>
                            <figcaption>Microsoft Teams Structure</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>A “team” is a group of people that will communicate, share content, and access apps based on different projects within your organization. Teams can be private so only invited users can see the team. Public teams are those that anyone in your organization can join.</Typography>
                         <Typography variant="body1" gutterBottom>A team can be created for project-based work or based on the departments in your organization. Another option is to create a team based on office locations. Once a team is formed conversations, files, and other apps shared with the team are only accessible to the team members.</Typography>
                         <Typography variant="body1" gutterBottom>Every team is broken into “channels.” Channels are where you can chat, share files with the team, and more. When you create a team, a General channel will automatically be created.</Typography>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>1. Use Teams in Your Browser, Windows, Mac, and Mobile Phone App</Typography>
                         <Typography variant="body1" gutterBottom>How often does this happen: You’re collaborating with someone chatting it up then, boom, it’s time for you to go somewhere else. Teams is perfect because you can move from your desktop app to the smartphone app seamlessly, allowing you to keep the conversation going while you’re on the go.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>Access Teams via a web browser</Typography>
                         <Typography variant="body1" gutterBottom>The web app is available online. Simply go to the website and <a href="https://teams.microsoft.com/" rel="noopener">login with your Office 365 account</a>.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>Access Teams via Windows desktop app</Typography>
                         <Typography variant="body1" gutterBottom>Teams desktop app can be downloaded by going to the website and clicking “<a href="https://teams.microsoft.com/downloads" rel="noopener">Download for desktop</a>.”</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>Access Teams via Android or iPhone</Typography>
                         <Typography variant="body1" gutterBottom>The Microsoft Teams app can also be found from the <a href="https://play.google.com/store/apps/details?id=com.microsoft.teams" rel="noopener">Google Play Store</a> or <a href="https://apps.apple.com/us/app/microsoft-teams/id1113153706" rel="noopener">Apple App Store</a>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams Google Play App" width="527" height="937" src="https://miro.medium.com/max/527/0*e3mgi_u9noce4lgW" sizes="527px" srcSet="https://miro.medium.com/max/276/0*e3mgi_u9noce4lgW 276w, https://miro.medium.com/max/527/0*e3mgi_u9noce4lgW 527w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams app in Google Play Store</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Access Teams via Mac</Typography>
                         <ol>
                            <li>From the <a href="https://teams.microsoft.com/downloads" rel="noopener">Teams download page</a>, click <strong>Download </strong>located under <strong>Mac</strong>.</li>
                            <li>Double click the PKG file to begin the installation.</li>
                            <li>Follow the wizard to complete the installation.</li>
                            <li>Teams will be installed in the /Applications folder as a machine-wide installation.</li>
                         </ol>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>2. Search Across All Your Conversations</Typography>
                         <Typography variant="body1" gutterBottom>The more you use Teams the more content you’ll store. It will become your go-to place for everything. The structure of Teams has unlimited options. If you’re human, you’ll forget where you read that important conversation! Fortunately, Microsoft has built in a fantastic search.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams withe search bar circled" src="https://miro.medium.com/max/700/1*2wWytX60oKA0UudsrbWNPg.png" width="700" height="482"/></div>
                            </div>
                            <figcaption>Microsoft Teams Search</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>Type your search in the search box in the top and press Enter. The search results will appear in the left pane. Jump to <strong>People </strong>or <strong>Files </strong>by using the tabs at the top.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams search results" width="350" height="551" src="https://miro.medium.com/max/350/1*U6SyIrZDKetpks_5jmHEPw.png" sizes="350px" srcSet="https://miro.medium.com/max/276/1*U6SyIrZDKetpks_5jmHEPw.png 276w, https://miro.medium.com/max/350/1*U6SyIrZDKetpks_5jmHEPw.png 350w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Search Results with Tabs Circled</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>For more advanced searches in messages, you can use the built-in Keyword Query Language (KQL). Below are the keywords that Teams supports. <em>Note: there’s no space between the colon and the search terms.</em></Typography>
                         <ul>
                            <li>“From:Then” enter the person’s name</li>
                            <li>“In:Then” enter the channel or group chat name</li>
                            <li>“Subject:The” keyword from a message or a subject line</li>
                            <li>“Sent:The” date the message was sent</li>
                         </ul>
                         <Typography variant="body1" gutterBottom>The search feature isn’t just a simple find in Teams. It’s been overloaded with commands. To view the list of available commands type “/” into the search bar.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams search commands" width="317" height="762" src="https://miro.medium.com/max/317/1*i1tjqEkR4C1hFyHVr-3c6g.png" sizes="317px" srcSet="https://miro.medium.com/max/276/1*i1tjqEkR4C1hFyHVr-3c6g.png 276w, https://miro.medium.com/max/317/1*i1tjqEkR4C1hFyHVr-3c6g.png 317w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Search Commands</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>3. Reach People or Groups with @mentions</Typography>
                         <Typography variant="body1" gutterBottom>Typically, work involves waiting for approvals or for someone else to complete a part of the project before you can move forward. When you want to notify a person or group, tags let you quickly @mention a person or specific group of people. When a person or group is tagged in Teams, they’ll receive a notification.</Typography>
                         <Typography variant="body1" gutterBottom>Everyone in your organization will automatically have a tag. Simply type “@” then start typing the person or group’s name and select the person from the drop-down that appears. They will then get a notification.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams @mentions" src="https://miro.medium.com/max/545/1*KuTYp4o6YlZVUg_A-Ug6cA.png" width="545" height="173"/></div>
                            <figcaption>Suggestions appear when you begin typing a name after the @ symbol</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Create a tag within a team</Typography>
                         <Typography variant="body1" gutterBottom>1. Right-click a team name, then select <strong>Manage tags</strong> to create your first tag.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams Manage tags button" width="411" height="400" src="https://miro.medium.com/max/411/1*Ne5j0xB9ymcPMVVvQv33Ag.png" sizes="411px" srcSet="https://miro.medium.com/max/276/1*Ne5j0xB9ymcPMVVvQv33Ag.png 276w, https://miro.medium.com/max/411/1*Ne5j0xB9ymcPMVVvQv33Ag.png 411w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Manage tags from right-clicking on a team</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>2. Click <strong>Create tag</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams Create tag button" width="542" height="368" src="https://miro.medium.com/max/542/1*jclHOR6B3-p5_YFUt1pgqw.png" sizes="542px" srcSet="https://miro.medium.com/max/276/1*jclHOR6B3-p5_YFUt1pgqw.png 276w, https://miro.medium.com/max/542/1*jclHOR6B3-p5_YFUt1pgqw.png 542w"/>
                                  </div>
                               </div>
                            </div>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Enter your tag name, select the people that will be notified when the tag is used then click <strong>Create</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams create a new tag form" width="551" height="553" src="https://miro.medium.com/max/551/1*nIbiElpyI_JhCEnR_TvCpw.png" sizes="551px" srcSet="https://miro.medium.com/max/276/1*nIbiElpyI_JhCEnR_TvCpw.png 276w, https://miro.medium.com/max/551/1*nIbiElpyI_JhCEnR_TvCpw.png 551w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams create a new tag</figcaption>
                         </figure>
                         <Typography variant="h4" component="h2" gutterBottom>4. Say More With Less Using Emojis and Gifs</Typography>
                         <Typography variant="body1" gutterBottom>Emojis and Gifs are a fun and easy way to communicate with Teams conversations. They’re fun and serious at the same time. You can respond to a message using an emoji or gif by hovering over the message then click one of the emojis.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams emojies" width="700" height="109" src="https://miro.medium.com/max/700/1*MhOSTRlXS5nlTyZdU-xR-g.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*MhOSTRlXS5nlTyZdU-xR-g.png 276w, https://miro.medium.com/max/552/1*MhOSTRlXS5nlTyZdU-xR-g.png 552w, https://miro.medium.com/max/640/1*MhOSTRlXS5nlTyZdU-xR-g.png 640w, https://miro.medium.com/max/700/1*MhOSTRlXS5nlTyZdU-xR-g.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Response emojis within Microsoft Teams</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom><span><span><span></span></span></span></Typography>
                         <div></div>
                         You can also respond with emojis by starting a reply then clicking the smiley face under the textbox.
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams emojis button circled" width="700" height="108" src="https://miro.medium.com/max/700/1*Yp7J9LXBnUHTuogSOclvtA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*Yp7J9LXBnUHTuogSOclvtA.png 276w, https://miro.medium.com/max/552/1*Yp7J9LXBnUHTuogSOclvtA.png 552w, https://miro.medium.com/max/640/1*Yp7J9LXBnUHTuogSOclvtA.png 640w, https://miro.medium.com/max/700/1*Yp7J9LXBnUHTuogSOclvtA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Add emoji to a response in Microsoft Teams</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>You can also use Gifs by clicking the GIF button next to the emoji button in replies and new conversations.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams Gif button circled" width="405" height="486" src="https://miro.medium.com/max/405/1*LfBxpc1odwpx37DUBDxJlA.png" sizes="405px" srcSet="https://miro.medium.com/max/276/1*LfBxpc1odwpx37DUBDxJlA.png 276w, https://miro.medium.com/max/405/1*LfBxpc1odwpx37DUBDxJlA.png 405w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Add Gif to a conversation or reply</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>5. Disable Notifications</Typography>
                         <Typography variant="body1" gutterBottom>Keep notifications to a minimum to avoid distractions. Only get notified on the channels and messages you want to get notified.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>To update Channel notifications</Typography>
                         <ol>
                            <li>Hover over the channel you want to update.</li>
                            <li>Click the <strong>ellipsis (…)</strong> next to the channel.</li>
                            <li>Click <strong>Channel notifications</strong>.</li>
                            <li>Click the <strong>All activity, Off, or Custom</strong> option to update your notification settings.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams change channel notifications button" width="700" height="262" src="https://miro.medium.com/max/700/1*Kw0PApQLYF0iqvDec_AZag.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*Kw0PApQLYF0iqvDec_AZag.png 276w, https://miro.medium.com/max/552/1*Kw0PApQLYF0iqvDec_AZag.png 552w, https://miro.medium.com/max/640/1*Kw0PApQLYF0iqvDec_AZag.png 640w, https://miro.medium.com/max/700/1*Kw0PApQLYF0iqvDec_AZag.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Channel Notification Options</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Settings</Typography>
                         <Typography variant="body1" gutterBottom>Keep notifications in the app by selecting <strong>Only show in feed</strong>. All notifications will be sent to your activity feed. The activity feed can be found in the top left corner of Teams. The app will still show notifications inside your desktop taskbar, but won’t show the pop-up.</Typography>
                         <Typography variant="body1" gutterBottom>By selecting <strong>Banner and feed</strong> you’ll receive notifications as an alert in your activity feed, as well as, a desktop notification. On Windows, the notifications will show in the bottom right corner of your screen. On macOS, they will show up in the top right corner.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>To update your global notifications</Typography>
                         <Typography variant="body1" gutterBottom>Microsoft has also made you global notifications configurable.</Typography>
                         <Typography variant="body1" gutterBottom>1. Click your <strong>profile image</strong> in the top right corner.</Typography>
                         <Typography variant="body1" gutterBottom>2. Click <strong>Settings</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams user settings button" width="367" height="505" src="https://miro.medium.com/max/367/1*jzudo12TfzUnE595fHA1eQ.png" sizes="367px" srcSet="https://miro.medium.com/max/276/1*jzudo12TfzUnE595fHA1eQ.png 276w, https://miro.medium.com/max/367/1*jzudo12TfzUnE595fHA1eQ.png 367w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams Profile Settings</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Click <strong>Notifications</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams user notifications" width="700" height="698" src="https://miro.medium.com/max/700/1*6FW8Z6AOtUZLdTy5MisXoA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*6FW8Z6AOtUZLdTy5MisXoA.png 276w, https://miro.medium.com/max/552/1*6FW8Z6AOtUZLdTy5MisXoA.png 552w, https://miro.medium.com/max/640/1*6FW8Z6AOtUZLdTy5MisXoA.png 640w, https://miro.medium.com/max/700/1*6FW8Z6AOtUZLdTy5MisXoA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams Settings Notifications</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>6. Remember to Follow Up by Saving the Message</Typography>
                         <Typography variant="body1" gutterBottom>With instant communication sometimes you get bogged down. You need to save things and come back to them later. Meet “<strong>Save this message.</strong>” Saved messages will show up in your saved list.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to save a message for later</Typography>
                         <ol>
                            <li>Hover the message and then click the <strong>ellipsis (…)</strong>.</li>
                            <li>Click <strong>Save this message</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams save this message" width="700" height="210" src="https://miro.medium.com/max/700/1*V7w8TO4tULlc5j_zThWprA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*V7w8TO4tULlc5j_zThWprA.png 276w, https://miro.medium.com/max/552/1*V7w8TO4tULlc5j_zThWprA.png 552w, https://miro.medium.com/max/640/1*V7w8TO4tULlc5j_zThWprA.png 640w, https://miro.medium.com/max/700/1*V7w8TO4tULlc5j_zThWprA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>How to save a message for later in Microsoft Teams</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to view saved messages</Typography>
                         <ol>
                            <li>Type <strong>/Saved </strong>in the search box at the top of Teams and press <strong>Ente</strong><strong>r</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams /saved command" width="700" height="52" src="https://miro.medium.com/max/700/1*FBzA6jFsMHrS4RsWkGUn_Q.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*FBzA6jFsMHrS4RsWkGUn_Q.png 276w, https://miro.medium.com/max/552/1*FBzA6jFsMHrS4RsWkGUn_Q.png 552w, https://miro.medium.com/max/640/1*FBzA6jFsMHrS4RsWkGUn_Q.png 640w, https://miro.medium.com/max/700/1*FBzA6jFsMHrS4RsWkGUn_Q.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </figure>
                         <Typography variant="body1" gutterBottom>You’ll be able to see your saved searches in the left pane.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams saved messages" width="420" height="506" src="https://miro.medium.com/max/420/1*TpINMfN48RrSpx2G3RZN2Q.png" sizes="420px" srcSet="https://miro.medium.com/max/276/1*TpINMfN48RrSpx2G3RZN2Q.png 276w, https://miro.medium.com/max/420/1*TpINMfN48RrSpx2G3RZN2Q.png 420w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Saved Messages</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to remove a message from the saved messages</Typography>
                         <ol>
                            <li>In the Saved column in the left pane click the banner in the top right of the message you want to remove from the saved messages.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams unsave message button" width="457" height="90" src="https://miro.medium.com/max/457/1*jdglclom2sQbDWoHQOdaBA.png" sizes="457px" srcSet="https://miro.medium.com/max/276/1*jdglclom2sQbDWoHQOdaBA.png 276w, https://miro.medium.com/max/457/1*jdglclom2sQbDWoHQOdaBA.png 457w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Remove Message from Saved Messages</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>7. Keyboard Shortcuts</Typography>
                         <Typography variant="body1" gutterBottom>When you start to live in an app like Microsoft Teams keyboard shortcuts become a priority. Below is the list of keyboard shortcuts for Microsoft Teams on your Windows computer.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams keyboard shortcuts" src="https://miro.medium.com/max/700/1*Wo3Jgcy0PJWi7razwdxiqQ.png" width="700" height="1209"/></div>
                            </div>
                            <figcaption>Microsoft Teams keyboard shortcut keys</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>8. Create an Organization-Wide Team</Typography>
                         <Typography variant="body1" gutterBottom>Sometimes you need to communicate with the entire organization. Teams is a great place to have an organization-wide communication channel. With an organization-wide team, the team will automatically be updated when you add or remove users to your Office 365 tenant.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to create an organization-wide team</Typography>
                         <Typography variant="body1" gutterBottom>1. Go to your Teams list.</Typography>
                         <Typography variant="body1" gutterBottom>2. Click <strong>Join or create a team</strong> in the bottom left corner of Microsoft Teams.</Typography>
                         <Typography variant="body1" gutterBottom>3. Click <strong>Create a team</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams create a new team" width="700" height="659" src="https://miro.medium.com/max/700/1*x4ysws86C2GelGPvao9c-g.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*x4ysws86C2GelGPvao9c-g.png 276w, https://miro.medium.com/max/552/1*x4ysws86C2GelGPvao9c-g.png 552w, https://miro.medium.com/max/640/1*x4ysws86C2GelGPvao9c-g.png 640w, https://miro.medium.com/max/700/1*x4ysws86C2GelGPvao9c-g.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams create a team button</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>4. Click <strong>Build a team from scratch</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams create a team form" width="597" height="596" src="https://miro.medium.com/max/597/1*lt3EOyMgJ_D2-kiiCmRaEw.png" sizes="597px" srcSet="https://miro.medium.com/max/276/1*lt3EOyMgJ_D2-kiiCmRaEw.png 276w, https://miro.medium.com/max/552/1*lt3EOyMgJ_D2-kiiCmRaEw.png 552w, https://miro.medium.com/max/597/1*lt3EOyMgJ_D2-kiiCmRaEw.png 597w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Build a team from scratch button</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>5. Click <strong>Org-wide</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams create an org-wide team" width="592" height="591" src="https://miro.medium.com/max/592/1*zJTU7-CjCdfa5hMB0Tm6IQ.png" sizes="592px" srcSet="https://miro.medium.com/max/276/1*zJTU7-CjCdfa5hMB0Tm6IQ.png 276w, https://miro.medium.com/max/552/1*zJTU7-CjCdfa5hMB0Tm6IQ.png 552w, https://miro.medium.com/max/592/1*zJTU7-CjCdfa5hMB0Tm6IQ.png 592w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Build an org-wide team</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>6. Enter your team name then click <strong>Create</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams create a team form" width="597" height="597" src="https://miro.medium.com/max/597/1*Hzfkkh7TvyqFLyhBoxNkdA.png" sizes="597px" srcSet="https://miro.medium.com/max/276/1*Hzfkkh7TvyqFLyhBoxNkdA.png 276w, https://miro.medium.com/max/552/1*Hzfkkh7TvyqFLyhBoxNkdA.png 552w, https://miro.medium.com/max/597/1*Hzfkkh7TvyqFLyhBoxNkdA.png 597w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Name your org-wide team</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>You now have a team that includes all your users (except guest users)!</Typography>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>9. Email to a Team Channel</Typography>
                         <Typography variant="body1" gutterBottom>Have you ever wanted to email a team? Now you can! By getting the email address of the team you can add it to the To, CC, or BCC line of an email and email the team directly from Outlook.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to get the email address of a channel</Typography>
                         <ol>
                            <li>Hover the channel then click the <strong>ellipsis (…) </strong>next to the channel. Click <strong>Get email address</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams channel get email address" width="510" height="283" src="https://miro.medium.com/max/510/1*6GPlFjoxDl73aAJGP2agZw.png" sizes="510px" srcSet="https://miro.medium.com/max/276/1*6GPlFjoxDl73aAJGP2agZw.png 276w, https://miro.medium.com/max/510/1*6GPlFjoxDl73aAJGP2agZw.png 510w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Get the email address of a Microsoft Teams channel</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>2. Click the <strong>Copy </strong>button. Open Outlook and paste the email address.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams channel copy email address" width="552" height="207" src="https://miro.medium.com/max/552/1*0YhkdOZpf2x6rjRR9nLyPA.png" sizes="552px" srcSet="https://miro.medium.com/max/276/1*0YhkdOZpf2x6rjRR9nLyPA.png 276w, https://miro.medium.com/max/552/1*0YhkdOZpf2x6rjRR9nLyPA.png 552w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Textbox showing the email address of a Microsoft Teams channel</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>From the advanced setting, you can limit who can email the Teams channel.</Typography>
                         <Typography variant="body1" gutterBottom>3. Click <strong>advanced settings</strong>. Select who you want to be able to email the channel. Click <strong>Save</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams email address security" width="555" height="385" src="https://miro.medium.com/max/555/1*XGRp_M-IjNV9IdCJ6KFDrg.png" sizes="555px" srcSet="https://miro.medium.com/max/276/1*XGRp_M-IjNV9IdCJ6KFDrg.png 276w, https://miro.medium.com/max/552/1*XGRp_M-IjNV9IdCJ6KFDrg.png 552w, https://miro.medium.com/max/555/1*XGRp_M-IjNV9IdCJ6KFDrg.png 555w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams email a channel advanced settings</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>10. Share and Sync Files to Your Desktop</Typography>
                         <Typography variant="body1" gutterBottom>Files can be shared directly with your team in the channel. Once shared everyone with current access or future access to the channel will be able to access the files.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to upload files to a channel</Typography>
                         <Typography variant="body1" gutterBottom>To upload a file to a channel simply drag and drop the file to the conversation. As an alternate, you can click the attachment icon under the textbox and then click <strong>Upload from my computer</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams upload from my computer" width="250" height="141" src="https://miro.medium.com/max/250/1*X4FESJC6pNbYqDnCoaKv5A.png" sizes="250px" srcSet=""/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Upload from my computer</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to access files</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams files in convsation" width="700" height="124" src="https://miro.medium.com/max/700/1*U27udW5vMRpaQMliVy42lQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*U27udW5vMRpaQMliVy42lQ.png 276w, https://miro.medium.com/max/552/1*U27udW5vMRpaQMliVy42lQ.png 552w, https://miro.medium.com/max/640/1*U27udW5vMRpaQMliVy42lQ.png 640w, https://miro.medium.com/max/700/1*U27udW5vMRpaQMliVy42lQ.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams Files in Chat</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>You can access the files directly in the conversation. If you need to access the files in the future you can go to the <strong>Files </strong>tab.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams files tab" width="700" height="215" src="https://miro.medium.com/max/700/1*irvF0XgDXnl87W1tiSn60g.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*irvF0XgDXnl87W1tiSn60g.png 276w, https://miro.medium.com/max/552/1*irvF0XgDXnl87W1tiSn60g.png 552w, https://miro.medium.com/max/640/1*irvF0XgDXnl87W1tiSn60g.png 640w, https://miro.medium.com/max/700/1*irvF0XgDXnl87W1tiSn60g.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams Access Files</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>Once you have files being shared with your team you can sync them using OneDrive!</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to sync the files from a Microsoft Teams Teams to your computer</Typography>
                         <ol>
                            <li>From the channel click <strong>Files</strong> at the top then click <strong>Sync</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams sync files" width="416" height="96" src="https://miro.medium.com/max/416/1*dbf76xROCyAUxp4rfBzsjw.png" sizes="416px" srcSet="https://miro.medium.com/max/276/1*dbf76xROCyAUxp4rfBzsjw.png 276w, https://miro.medium.com/max/416/1*dbf76xROCyAUxp4rfBzsjw.png 416w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams sync button</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>2. When prompted click <strong>Start sync</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams sync files form" width="585" height="554" src="https://miro.medium.com/max/585/1*HO9NqCvEtd6KKXt4hrJtHw.png" sizes="585px" srcSet="https://miro.medium.com/max/276/1*HO9NqCvEtd6KKXt4hrJtHw.png 276w, https://miro.medium.com/max/552/1*HO9NqCvEtd6KKXt4hrJtHw.png 552w, https://miro.medium.com/max/585/1*HO9NqCvEtd6KKXt4hrJtHw.png 585w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Files Sync</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>11. Host a Teams Meeting</Typography>
                         <Typography variant="body1" gutterBottom>Sometimes text messaging back and forth isn’t enough. Sometimes we simply need a voice and video call. But wait, there’s more! You can also share your screen, an application, or a free-hand drawing whiteboard.</Typography>
                         <Typography variant="body1" gutterBottom>Scheduling a meeting can be done in Teams or Outlook.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>To schedule a meeting through Outlook</Typography>
                         <ol>
                            <li>Open a calendar appointment</li>
                            <li>Click <strong>Teams Meeting</strong> in the Meeting ribbon.</li>
                            <li>View the details that were added to the meeting.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams create a teams meeting appointment in Outlook" width="700" height="513" src="https://miro.medium.com/max/700/1*bk7jxNonx8Is2YohoU2CUg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*bk7jxNonx8Is2YohoU2CUg.png 276w, https://miro.medium.com/max/552/1*bk7jxNonx8Is2YohoU2CUg.png 552w, https://miro.medium.com/max/640/1*bk7jxNonx8Is2YohoU2CUg.png 640w, https://miro.medium.com/max/700/1*bk7jxNonx8Is2YohoU2CUg.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Outlook Meeting</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Schedule a meeting from Teams</Typography>
                         <Typography variant="body1" gutterBottom>1. From Teams click <strong>Calendar</strong>.</Typography>
                         <Typography variant="body1" gutterBottom>2. Click <strong>New meeting</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams create a new meeting" width="700" height="438" src="https://miro.medium.com/max/700/1*gA8c8b_IrVDvKuBs_4nRKA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*gA8c8b_IrVDvKuBs_4nRKA.png 276w, https://miro.medium.com/max/552/1*gA8c8b_IrVDvKuBs_4nRKA.png 552w, https://miro.medium.com/max/640/1*gA8c8b_IrVDvKuBs_4nRKA.png 640w, https://miro.medium.com/max/700/1*gA8c8b_IrVDvKuBs_4nRKA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Create New Meeting</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Fill out the form.</Typography>
                         <Typography variant="body1" gutterBottom>4. Click <strong>Send</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams meeting form" width="700" height="605" src="https://miro.medium.com/max/700/1*GXqKUDduCunO4ukkPMCskA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*GXqKUDduCunO4ukkPMCskA.png 276w, https://miro.medium.com/max/552/1*GXqKUDduCunO4ukkPMCskA.png 552w, https://miro.medium.com/max/640/1*GXqKUDduCunO4ukkPMCskA.png 640w, https://miro.medium.com/max/700/1*GXqKUDduCunO4ukkPMCskA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Meeting Form</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Join Meeting</Typography>
                         <Typography variant="body1" gutterBottom>When the time comes to meet you can join the meeting right from Outlook!</Typography>
                         <ol>
                            <li>In the appointment reminder, click <strong>Join Online</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams Outlook appointment reminder join online button circled" width="468" height="340" src="https://miro.medium.com/max/468/1*E-b7pCLKaERQAfWo1I4czw.png" sizes="468px" srcSet="https://miro.medium.com/max/276/1*E-b7pCLKaERQAfWo1I4czw.png 276w, https://miro.medium.com/max/468/1*E-b7pCLKaERQAfWo1I4czw.png 468w"/>
                                  </div>
                               </div>
                            </div>
                         </figure>
                         <Typography variant="body1" gutterBottom>When joining the meeting you can enable video, background effects, and mute your mic. Then click Join now and you’ll be in the meeting.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams joining meeting controls" width="700" height="448" src="https://miro.medium.com/max/700/1*G29tHDAl9Ms7WFDOliLwhg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*G29tHDAl9Ms7WFDOliLwhg.png 276w, https://miro.medium.com/max/552/1*G29tHDAl9Ms7WFDOliLwhg.png 552w, https://miro.medium.com/max/640/1*G29tHDAl9Ms7WFDOliLwhg.png 640w, https://miro.medium.com/max/700/1*G29tHDAl9Ms7WFDOliLwhg.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams Meeting Options</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Controls inside a meeting</Typography>
                         <Typography variant="body1" gutterBottom>Once inside the meeting, you can manage your sharing and options from the meetings toolbar.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams meeting interface" width="480" height="390" src="https://miro.medium.com/max/480/1*ZOzf1AvDwAb-drhixarWVg.png" sizes="480px" srcSet="https://miro.medium.com/max/276/1*ZOzf1AvDwAb-drhixarWVg.png 276w, https://miro.medium.com/max/480/1*ZOzf1AvDwAb-drhixarWVg.png 480w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams meeting interface</figcaption>
                         </figure>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams meeting buttons" width="700" height="75" src="https://miro.medium.com/max/700/1*eO-WEhofSWHLOfKB9wu6sA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*eO-WEhofSWHLOfKB9wu6sA.png 276w, https://miro.medium.com/max/552/1*eO-WEhofSWHLOfKB9wu6sA.png 552w, https://miro.medium.com/max/640/1*eO-WEhofSWHLOfKB9wu6sA.png 640w, https://miro.medium.com/max/700/1*eO-WEhofSWHLOfKB9wu6sA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Sharing</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams meeting sharing button" width="47" height="47" src="https://miro.medium.com/max/47/1*4qjrkd-PoqtfyKgBT1J51Q.png" sizes="47px" srcSet=""/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Toggle Sharing Bar</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>By clicking the toggle sharing bar button you’ll open the sharing bar. From the sharing bar, you can share your screen, an application, or a free drawing whiteboard.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams meeting sharing bar" width="700" height="112" src="https://miro.medium.com/max/700/1*2_SQS0moNTZX2NHE-XPRtQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*2_SQS0moNTZX2NHE-XPRtQ.png 276w, https://miro.medium.com/max/552/1*2_SQS0moNTZX2NHE-XPRtQ.png 552w, https://miro.medium.com/max/640/1*2_SQS0moNTZX2NHE-XPRtQ.png 640w, https://miro.medium.com/max/700/1*2_SQS0moNTZX2NHE-XPRtQ.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Whiteboard</Typography>
                         <Typography variant="body1" gutterBottom>By sharing a whiteboard you can take notes, draw or create sticky notes all during the meeting while sharing your whiteboard with everyone in the meeting. The whiteboard is a great way to run productive, engaging remote meetings with your team.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams whiteboard" width="700" height="391" src="https://miro.medium.com/max/700/1*DI-_-dFHxVguxiOwkQ8zcQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*DI-_-dFHxVguxiOwkQ8zcQ.png 276w, https://miro.medium.com/max/552/1*DI-_-dFHxVguxiOwkQ8zcQ.png 552w, https://miro.medium.com/max/640/1*DI-_-dFHxVguxiOwkQ8zcQ.png 640w, https://miro.medium.com/max/700/1*DI-_-dFHxVguxiOwkQ8zcQ.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams whiteboard</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>Simply use the controls at the top left to draw on the whiteboard or use the textbox / sticky notes buttons to write text or create a sticky note where you can write text.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>Raise Hand</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams raise hand button" width="102" height="84" src="https://miro.medium.com/max/102/1*mZASARCEF2I50z_G6a13jw.png" sizes="102px" srcSet=""/>
                                  </div>
                               </div>
                            </div>
                         </figure>
                         <Typography variant="body1" gutterBottom>During a Microsoft Teams meeting, you or someone else in the meeting can use the Raise hand button to get the speaker’s attention. That way a participant can get the presenter’s attention without interrupting the meeting. Once participants have been acknowledged, they can use the raise hand button to lower their hand or the meeting host can lower a participant’s hand on their behalf.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams meeting with raised hand" width="700" height="572" src="https://miro.medium.com/max/700/1*LVZltpJPbcYRU-sryHBO_w.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*LVZltpJPbcYRU-sryHBO_w.png 276w, https://miro.medium.com/max/552/1*LVZltpJPbcYRU-sryHBO_w.png 552w, https://miro.medium.com/max/640/1*LVZltpJPbcYRU-sryHBO_w.png 640w, https://miro.medium.com/max/700/1*LVZltpJPbcYRU-sryHBO_w.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Meeting Showing User with Hand Raised</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>12. Rich Text Conversations</Typography>
                         <Typography variant="body1" gutterBottom>By default, starting conversations and replying to conversations appears to only handle plain text. But it doesn’t have to be. The button to the furthest left below the textbox is the format button.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams rich text button" src="https://miro.medium.com/max/421/1*lzRBKE--dumHsQX9OkSiGw.png" width="421" height="87"/></div>
                            <figcaption>Format Button Located under the textbox.</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>By clicking the format button, you can expand the textbox to be the rich text editor.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams rich text dialog" width="700" height="373" src="https://miro.medium.com/max/700/1*oqA9VfFqL8r455qTV2D9CQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*oqA9VfFqL8r455qTV2D9CQ.png 276w, https://miro.medium.com/max/552/1*oqA9VfFqL8r455qTV2D9CQ.png 552w, https://miro.medium.com/max/640/1*oqA9VfFqL8r455qTV2D9CQ.png 640w, https://miro.medium.com/max/700/1*oqA9VfFqL8r455qTV2D9CQ.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Rich Text Editor</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>From there you can use the formatting buttons to format your text, add a subject line, or edit who can reply to the conversation and more.</Typography>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>13. Add Tabs to Channels</Typography>
                         <Typography variant="body1" gutterBottom>Tabs are a great way to add quick links to important information and connect your team to it easily. You can add a SharePoint library, Excel or Word document, OneNote, Planner, and many third-party applications.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams add a tab" src="https://miro.medium.com/max/657/1*mITF02diGgzHDyrYeGL1vw.png" width="657" height="886"/></div>
                            <figcaption>Microsoft Teams Tab Apps</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to add a tab to a channel</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams add a tab" width="677" height="102" src="https://miro.medium.com/max/677/1*2_0pg6xxmATTptFUCzUo0A.png" sizes="677px" srcSet="https://miro.medium.com/max/276/1*2_0pg6xxmATTptFUCzUo0A.png 276w, https://miro.medium.com/max/552/1*2_0pg6xxmATTptFUCzUo0A.png 552w, https://miro.medium.com/max/640/1*2_0pg6xxmATTptFUCzUo0A.png 640w, https://miro.medium.com/max/677/1*2_0pg6xxmATTptFUCzUo0A.png 677w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Add Tab to Channel</figcaption>
                         </figure>
                         <ol>
                            <li>Select “<strong>+”</strong> at the top of the channel.</li>
                            <li>Choose a tab and follow the steps to add it.</li>
                         </ol>
                         <Typography variant="body1" gutterBottom>Once added the tab will show at the top of the channel.</Typography>
                         <Typography variant="body1" gutterBottom><strong>Note</strong>: To turn an office file into a tab, you must upload it to the team's <strong>Files </strong>tab or you can attach it to a message in the chat which will upload the file automatically. Once you pick your app (for example, Excel) you’ll be shown files for you to select.</Typography>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>14. Add an App to Your Teams App</Typography>
                         <Typography variant="body1" gutterBottom>Apps are a bit different than tabs. Tabs are shared with your team/channel. While apps are only for you individually.</Typography>
                         <Typography variant="body1" gutterBottom>You can view your apps in the left-most pane. To see additional apps, click the ellipsis.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams view hidden apps" src="https://miro.medium.com/max/394/1*0S6fNGz-hnMTt9ziKGfjXQ.png" width="394" height="592"/></div>
                            <figcaption>View Hidden apps in Microsoft Teams</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>To see what other apps are available to download click <strong>More apps &gt;</strong> in the bottom right corner of the more apps window.</Typography>
                         <Typography variant="body1" gutterBottom>In the Apps menu, click <strong>Personal apps</strong> in the left pane.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams personal apps" width="700" height="410" src="https://miro.medium.com/max/700/1*twvfUxQaJeCFtUt6LJeXzQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*twvfUxQaJeCFtUt6LJeXzQ.png 276w, https://miro.medium.com/max/552/1*twvfUxQaJeCFtUt6LJeXzQ.png 552w, https://miro.medium.com/max/640/1*twvfUxQaJeCFtUt6LJeXzQ.png 640w, https://miro.medium.com/max/700/1*twvfUxQaJeCFtUt6LJeXzQ.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Personal Apps from Microsoft Teams Store</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>15. Add Connectors for Channel Notifications</Typography>
                         <Typography variant="body1" gutterBottom>Get automatic updates from your favorite services like Bing News, RSS feeds, Twitter, and more, sent directly to the channel of your choice by using Connectors.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams Connector" src="https://miro.medium.com/max/700/1*lPEmFbN4r26MYQ98GXrh1Q.png" width="700" height="645"/></div>
                            </div>
                            <figcaption>Microsoft Teams Connectors</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>Add Connector to a Channel</Typography>
                         <ol>
                            <li>Click the ellipsis next to the channel.</li>
                            <li>Click <strong>Connectors</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams add a connector button" width="512" height="249" src="https://miro.medium.com/max/512/1*0KfQlAmVq-b7kj2IMkW9_w.png" sizes="512px" srcSet="https://miro.medium.com/max/276/1*0KfQlAmVq-b7kj2IMkW9_w.png 276w, https://miro.medium.com/max/512/1*0KfQlAmVq-b7kj2IMkW9_w.png 512w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>How to Add Connectors to a Channel</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Click the Add button next to the connector you want to add.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams add connector button" width="700" height="468" src="https://miro.medium.com/max/700/1*IWs3X6ehhHXcenIvPe1I1Q.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*IWs3X6ehhHXcenIvPe1I1Q.png 276w, https://miro.medium.com/max/552/1*IWs3X6ehhHXcenIvPe1I1Q.png 552w, https://miro.medium.com/max/640/1*IWs3X6ehhHXcenIvPe1I1Q.png 640w, https://miro.medium.com/max/700/1*IWs3X6ehhHXcenIvPe1I1Q.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams add a connector to channel</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>4. Review the description highlighted yellow below. Once you’re sure this is the connector you want, click <strong>Add</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams RSS Connector with Description highlighted and Add button circled" width="700" height="552" src="https://miro.medium.com/max/700/1*6CwotRg3vRofsnvF8KYkRQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*6CwotRg3vRofsnvF8KYkRQ.png 276w, https://miro.medium.com/max/552/1*6CwotRg3vRofsnvF8KYkRQ.png 552w, https://miro.medium.com/max/640/1*6CwotRg3vRofsnvF8KYkRQ.png 640w, https://miro.medium.com/max/700/1*6CwotRg3vRofsnvF8KYkRQ.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams RSS Connector with Description highlighted and Add button circled</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>16. Name a Group Chat</Typography>
                         <Typography variant="body1" gutterBottom>Your recent chats can get overwhelmed quickly especially if your team uses them to chat with multiple people at a time. When you’re in a chat with multiple people you can name the chat to make it more easily found in the chat list.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to name a chat</Typography>
                         <ol>
                            <li>Click the group chat to view the messages.</li>
                            <li>Click the pencil in the top of the group chat</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams name a group chat" width="700" height="139" src="https://miro.medium.com/max/700/1*UmaRZyN_8PaIJjf590f0OQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*UmaRZyN_8PaIJjf590f0OQ.png 276w, https://miro.medium.com/max/552/1*UmaRZyN_8PaIJjf590f0OQ.png 552w, https://miro.medium.com/max/640/1*UmaRZyN_8PaIJjf590f0OQ.png 640w, https://miro.medium.com/max/700/1*UmaRZyN_8PaIJjf590f0OQ.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Name a group chat in Teams</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Type the name of the chat and click save.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams name a group chat form" width="402" height="133" src="https://miro.medium.com/max/402/1*TaUpt7a_nWn8rdfzg-gnYw.png" sizes="402px" srcSet="https://miro.medium.com/max/276/1*TaUpt7a_nWn8rdfzg-gnYw.png 276w, https://miro.medium.com/max/402/1*TaUpt7a_nWn8rdfzg-gnYw.png 402w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Name a group chat in Teams page 2</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>17. Turn Chats into Calls</Typography>
                         <Typography variant="body1" gutterBottom>When text isn’t doing it, you can easily turn your chats into audio/video calls. Once you start a call everyone in the chat will have an audio notification until they join the call.</Typography>
                         <ol>
                            <li>Click the chat to view the messages</li>
                            <li>Click the video or call button in the top right of the chat.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams call buttons" width="700" height="47" src="https://miro.medium.com/max/700/1*1UjLL7K9MHNZtyt05u5Aow.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*1UjLL7K9MHNZtyt05u5Aow.png 276w, https://miro.medium.com/max/552/1*1UjLL7K9MHNZtyt05u5Aow.png 552w, https://miro.medium.com/max/640/1*1UjLL7K9MHNZtyt05u5Aow.png 640w, https://miro.medium.com/max/700/1*1UjLL7K9MHNZtyt05u5Aow.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams chat into calls buttons</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>The people you are calling will receive the ring, as well as, a pop-up notification informing them you are calling.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams call notification" width="295" height="216" src="https://miro.medium.com/max/295/1*z5GR3H6BYxm1JXIaoEB8DA.png" sizes="295px" srcSet="https://miro.medium.com/max/276/1*z5GR3H6BYxm1JXIaoEB8DA.png 276w, https://miro.medium.com/max/295/1*z5GR3H6BYxm1JXIaoEB8DA.png 295w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams call notification</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>18. View Team and Channel Analytics</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams channel analytics" src="https://miro.medium.com/max/700/1*Sc8Xetr-x_3OHUIYmXo0vA.png" width="700" height="343"/></div>
                            </div>
                            <figcaption>Microsoft Teams Channel Analytics over 90 Days</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>Team &amp; channel metrics are now available. Now users can see metrics like the total number of posts and replies for each team and channel for the last 90 days</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to access team analytics</Typography>
                         <ol>
                            <li>From your teams’ list, click the <strong>ellipsis (…)</strong> then select <strong>Manage team</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams manage team button" width="500" height="271" src="https://miro.medium.com/max/500/1*yEtr1_giwWQ6OObUgRX7fw.png" sizes="500px" srcSet="https://miro.medium.com/max/276/1*yEtr1_giwWQ6OObUgRX7fw.png 276w, https://miro.medium.com/max/500/1*yEtr1_giwWQ6OObUgRX7fw.png 500w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Manage team menu in Microsoft Teams</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>2. Click the Analytics tab at the top of the management window.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams analytics tab" width="427" height="102" src="https://miro.medium.com/max/427/1*8BdDt--RiOEyN6HxfLDvbQ.png" sizes="427px" srcSet="https://miro.medium.com/max/276/1*8BdDt--RiOEyN6HxfLDvbQ.png 276w, https://miro.medium.com/max/427/1*8BdDt--RiOEyN6HxfLDvbQ.png 427w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams analytics filters</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to access channel analytics</Typography>
                         <ol>
                            <li>From your teams’ list, click the <strong>ellipsis (…)</strong> next to a channel then select <strong>Manage channel</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams with Manage channel button circled" width="512" height="282" src="https://miro.medium.com/max/512/1*5LTlcHY3ZHz_1xaiCZI25A.png" sizes="512px" srcSet="https://miro.medium.com/max/276/1*5LTlcHY3ZHz_1xaiCZI25A.png 276w, https://miro.medium.com/max/512/1*5LTlcHY3ZHz_1xaiCZI25A.png 512w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Manage channel menu in Microsoft Teams</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>2. Click the Analytics tab at the top of the management window.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams screenshot showing analytics tab clicked" width="311" height="135" src="https://miro.medium.com/max/311/1*cSCAlCSGTKBE3VugMrB4kQ.png" sizes="311px" srcSet="https://miro.medium.com/max/276/1*cSCAlCSGTKBE3VugMrB4kQ.png 276w, https://miro.medium.com/max/311/1*cSCAlCSGTKBE3VugMrB4kQ.png 311w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams analytics tabs</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>19. Update the Team Icon</Typography>
                         <Typography variant="body1" gutterBottom>The colored background with a letter isn’t very descriptive. Fortunately, we can give our teams a unique icon. It helps users identify the team easier while navigating their countless teams.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to add an image to a team icon</Typography>
                         <ol>
                            <li>Click the <strong>ellipsis (…)</strong> next to the team you want to update and click <strong>Manage team</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams manage team button" width="513" height="382" src="https://miro.medium.com/max/513/1*zt52kwi7DiT9QvAhv10PpQ.png" sizes="513px" srcSet="https://miro.medium.com/max/276/1*zt52kwi7DiT9QvAhv10PpQ.png 276w, https://miro.medium.com/max/513/1*zt52kwi7DiT9QvAhv10PpQ.png 513w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Open team settings</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>2. Go to the <strong>Settings </strong>tab. Expand <strong>Team picture</strong>. Click <strong>Change Picture</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams change team" width="700" height="633" src="https://miro.medium.com/max/700/1*GpeI-bka8Mzyx4sGZMv-jA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*GpeI-bka8Mzyx4sGZMv-jA.png 276w, https://miro.medium.com/max/552/1*GpeI-bka8Mzyx4sGZMv-jA.png 552w, https://miro.medium.com/max/640/1*GpeI-bka8Mzyx4sGZMv-jA.png 640w, https://miro.medium.com/max/700/1*GpeI-bka8Mzyx4sGZMv-jA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Change team picture</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Click <strong>Upload picture</strong>. Select the image on your computer that you want to use for the team. Select <strong>Save </strong>and close the menu.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams upload form" width="365" height="289" src="https://miro.medium.com/max/365/1*k_-uFRn0KoiLoQGvZ1b2rQ.png" sizes="365px" srcSet="https://miro.medium.com/max/276/1*k_-uFRn0KoiLoQGvZ1b2rQ.png 276w, https://miro.medium.com/max/365/1*k_-uFRn0KoiLoQGvZ1b2rQ.png 365w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Upload team picture</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>20. Filter the Activity Feed to Get What’s Most Important</Typography>
                         <Typography variant="body1" gutterBottom>The activity feed is specific for you and keeps you up to date on the latest communication. Filtering by unread, @mentions, or seven other options lets you separate your @mentions from the group mass messages and focus on the key conversations.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to Filter the activity feed</Typography>
                         <ol>
                            <li>Click <strong>activity </strong>in the top left corner.</li>
                            <li>Click the <strong>filter </strong>button at the top of the navigation pane.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams activity feed filter" width="424" height="108" src="https://miro.medium.com/max/424/1*p6__O6IzcukiZhajkoW1gg.png" sizes="424px" srcSet="https://miro.medium.com/max/276/1*p6__O6IzcukiZhajkoW1gg.png 276w, https://miro.medium.com/max/424/1*p6__O6IzcukiZhajkoW1gg.png 424w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams Activity Filter Button</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Click the <strong>ellipsis (…)</strong> next to the filter textbox.</Typography>
                         <Typography variant="body1" gutterBottom>4. Click the type of filter you want to use, for example, <strong>@mentions</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams filter activity by mentions" width="506" height="343" src="https://miro.medium.com/max/506/1*d6Yqbl2xoOEMfyQnkisS8A.png" sizes="506px" srcSet="https://miro.medium.com/max/276/1*d6Yqbl2xoOEMfyQnkisS8A.png 276w, https://miro.medium.com/max/506/1*d6Yqbl2xoOEMfyQnkisS8A.png 506w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams filter by @mentions</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>21. Mark Messages as Unread to Come Back \Later</Typography>
                         <Typography variant="body1" gutterBottom>Sometimes you read a message, then want the message to be marked unread to remind you to come back later. In Microsoft Teams It’s easy.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to mark a message as unread</Typography>
                         <ol>
                            <li>With the mouse, hover over the message you want to mark as unread.</li>
                            <li>Click the <strong>ellipsis </strong>(…) in the top right corner.</li>
                            <li>Click <strong>Mark as unread</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams mark message as unread" width="700" height="222" src="https://miro.medium.com/max/700/1*X8eLL3EmGq9PAfe4QRoQLg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*X8eLL3EmGq9PAfe4QRoQLg.png 276w, https://miro.medium.com/max/552/1*X8eLL3EmGq9PAfe4QRoQLg.png 552w, https://miro.medium.com/max/640/1*X8eLL3EmGq9PAfe4QRoQLg.png 640w, https://miro.medium.com/max/700/1*X8eLL3EmGq9PAfe4QRoQLg.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams mark message as unread</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>22. Hide Messages by Setting Yourself to Do Not Disturb</Typography>
                         <Typography variant="body1" gutterBottom>Need to stop the noise and stay focused? Just set your status to <strong>Do not disturb</strong> and prevent distractions so you can get work done.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to set do not disturb</Typography>
                         <ol>
                            <li>Click your icon in the top right corner.</li>
                            <li>Click <strong>Available</strong> in the dropdown.</li>
                            <li>Click <strong>Do not disturb</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams set status to do not disturb" width="607" height="506" src="https://miro.medium.com/max/607/1*dpbno43WVMa4QOKEfCmM8g.png" sizes="607px" srcSet="https://miro.medium.com/max/276/1*dpbno43WVMa4QOKEfCmM8g.png 276w, https://miro.medium.com/max/552/1*dpbno43WVMa4QOKEfCmM8g.png 552w, https://miro.medium.com/max/607/1*dpbno43WVMa4QOKEfCmM8g.png 607w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams enable do not disturb</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>23. Work Across Languages by Translating a Message</Typography>
                         <Typography variant="body1" gutterBottom>Working with a team that speaks a different language? It isn’t a problem when you’re using Teams. You can easily translate a message in Microsoft Teams.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to translate a message in Teams</Typography>
                         <ol>
                            <li>Hover the mouse over the message you want to translate.</li>
                            <li>Click the <strong>ellipsis (…)</strong></li>
                            <li>Click <strong>Translate</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams translate chat" width="700" height="251" src="https://miro.medium.com/max/700/1*wRaUP2kDY31QMRl8O3VFDg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*wRaUP2kDY31QMRl8O3VFDg.png 276w, https://miro.medium.com/max/552/1*wRaUP2kDY31QMRl8O3VFDg.png 552w, https://miro.medium.com/max/640/1*wRaUP2kDY31QMRl8O3VFDg.png 640w, https://miro.medium.com/max/700/1*wRaUP2kDY31QMRl8O3VFDg.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Translate a message in Microsoft Teams</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>24. Follow up on a Message</Typography>
                         <Typography variant="body1" gutterBottom>Sometimes someone may ask you to do something but you’re in the middle of something else. You’ll need a reminder for the message.</Typography>
                         <Typography variant="body1" gutterBottom>That’s where Microsoft Power Automate comes into play. With a specialized flow, you can set and receive reminders for a message.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to set up the follow-up flow</Typography>
                         <ol>
                            <li>Go to the <a href="https://preview.flow.microsoft.com/en-us/galleries/public/templates/491ee4d7bdd14783b3114e4fcdaeee4d/follow-up-on-a-message/" rel="noopener">website</a>.</li>
                            <li>Login to Office 365 if required.</li>
                            <li>Click <strong>Continue</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams follow up on a message" width="700" height="551" src="https://miro.medium.com/max/700/1*3_hHG53AbwNLfhwe-XkgGg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*3_hHG53AbwNLfhwe-XkgGg.png 276w, https://miro.medium.com/max/552/1*3_hHG53AbwNLfhwe-XkgGg.png 552w, https://miro.medium.com/max/640/1*3_hHG53AbwNLfhwe-XkgGg.png 640w, https://miro.medium.com/max/700/1*3_hHG53AbwNLfhwe-XkgGg.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Set up follow up Flow</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>4. Scroll to the bottom of the page and click <strong>Save</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams follow up on a message flow" width="700" height="549" src="https://miro.medium.com/max/700/1*GsO8gjgy8-CvpS4WD-JUkA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*GsO8gjgy8-CvpS4WD-JUkA.png 276w, https://miro.medium.com/max/552/1*GsO8gjgy8-CvpS4WD-JUkA.png 552w, https://miro.medium.com/max/640/1*GsO8gjgy8-CvpS4WD-JUkA.png 640w, https://miro.medium.com/max/700/1*GsO8gjgy8-CvpS4WD-JUkA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Save the follow-up flow</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to use flow</Typography>
                         <ol>
                            <li>Hover your mouse over the message you want to be reminded of.</li>
                            <li>Click the <strong>ellipsis (…)</strong> in the top right corner.</li>
                            <li>Click <strong>More actions</strong>.</li>
                            <li>Click <strong>Follow up on a message</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams follow up on a message button" width="471" height="375" src="https://miro.medium.com/max/471/1*FfPQdFJxQ6a9csfz0OkqnA.png" sizes="471px" srcSet="https://miro.medium.com/max/276/1*FfPQdFJxQ6a9csfz0OkqnA.png 276w, https://miro.medium.com/max/471/1*FfPQdFJxQ6a9csfz0OkqnA.png 471w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Use Follow up Flow</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>5. Select a time you want to be reminded in.</Typography>
                         <Typography variant="body1" gutterBottom>6. Click <strong>Submit</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams follow up on a message form" width="561" height="317" src="https://miro.medium.com/max/561/1*L1AjAPfspDUUjqOXCSiViw.png" sizes="561px" srcSet="https://miro.medium.com/max/276/1*L1AjAPfspDUUjqOXCSiViw.png 276w, https://miro.medium.com/max/552/1*L1AjAPfspDUUjqOXCSiViw.png 552w, https://miro.medium.com/max/561/1*L1AjAPfspDUUjqOXCSiViw.png 561w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Set time duration to follow-up time</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>When the reminder goes off, you’ll receive a chat message from the flow with a link to the message.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams follow up on a message reminder" width="700" height="218" src="https://miro.medium.com/max/700/1*x5j4XLHoqYaPVP1JRLbBHA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*x5j4XLHoqYaPVP1JRLbBHA.png 276w, https://miro.medium.com/max/552/1*x5j4XLHoqYaPVP1JRLbBHA.png 552w, https://miro.medium.com/max/640/1*x5j4XLHoqYaPVP1JRLbBHA.png 640w, https://miro.medium.com/max/700/1*x5j4XLHoqYaPVP1JRLbBHA.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Follow up Flow reminder</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>25. Organize Your Teams and Channels</Typography>
                         <Typography variant="body1" gutterBottom>All your teams and channels aren’t equal. Some of them will become your go-to almost every time you open Teams. To make it easier to find the teams you want you can simply drag and drop the teams to the order you want them in. Once complete, every time you open Teams, they’ll be in the order you set them in.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams sort teams" src="https://miro.medium.com/max/429/1*JwWewCgNOz3kDoFzVTGf4A.png" width="429" height="468"/></div>
                            <figcaption>Sorting teams with drag and drop</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>To give you more control of your teams’ list, channels can be pinned to the top of the list.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to pin a channel to the top of the teams’ list</Typography>
                         <ol>
                            <li>Hover your mouse over the channel you want to pin.</li>
                            <li>Click the <strong>ellipsis (…)</strong> next to the channel.</li>
                            <li>Click <strong>Pin</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams pin channel" width="503" height="284" src="https://miro.medium.com/max/503/1*s2r5h7OqNTsVV_Hh4CfOTA.png" sizes="503px" srcSet="https://miro.medium.com/max/276/1*s2r5h7OqNTsVV_Hh4CfOTA.png 276w, https://miro.medium.com/max/503/1*s2r5h7OqNTsVV_Hh4CfOTA.png 503w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>How to pin a channel in Microsoft Teams</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>26. Get Noticed Immediately with Urgent Chat Messages</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams urgent message" src="https://miro.medium.com/max/457/1*zFnD2EoJunFQsm7M6PyxEA.png" width="457" height="135"/></div>
                            <figcaption>Microsoft Teams Urgent Message</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>Sometimes, you need to send an urgent message to someone. The type of message that gets someone’s attention. The type of message that continues to alert someone until they acknowledge the message. Introducing urgent messages. An urgent message will notify the recipient every two minutes for 20 minutes. It’s a great (albeit annoying) way to send a critical message to someone so use it sparingly.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to send an urgent message</Typography>
                         <ol>
                            <li>Open the chat with the person you want to send an urgent message.</li>
                            <li>Click the <strong>exclamation mark</strong> under the chat.</li>
                            <li>Click <strong>Urgent</strong>.</li>
                            <li>Type your message and click send.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams mark message as urgent" width="339" height="217" src="https://miro.medium.com/max/339/1*yCUKNujex70goCTH6I0vBQ.png" sizes="339px" srcSet="https://miro.medium.com/max/276/1*yCUKNujex70goCTH6I0vBQ.png 276w, https://miro.medium.com/max/339/1*yCUKNujex70goCTH6I0vBQ.png 339w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Teams mark a message as urgent</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>27. Record and Transcribe a Meeting</Typography>
                         <Typography variant="body1" gutterBottom>While in a meeting it’s easy to record but did you know Microsoft Stream can also transcribe the meeting for you? It’s simple.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to record a meeting</Typography>
                         <ol>
                            <li>Once in the meeting click the <strong>ellipsis (…)</strong> in the bottom navigation pane.</li>
                            <li>Click <strong>Start recording</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams record meeting button" width="435" height="352" src="https://miro.medium.com/max/435/1*r40048G_A-UNwLSHmfp4MA.png" sizes="435px" srcSet="https://miro.medium.com/max/276/1*r40048G_A-UNwLSHmfp4MA.png 276w, https://miro.medium.com/max/435/1*r40048G_A-UNwLSHmfp4MA.png 435w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Start Teams meeting recording</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to transcribe the meeting recording</Typography>
                         <ol>
                            <li>Once the meeting is over the recording will automatically upload to Microsoft Stream. (it may take a few minutes)</li>
                            <li>Click the <strong>ellipsis (…)</strong> next to the meeting.</li>
                            <li>Click <strong>Open in Microsoft Stream</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams open recording in Stream" width="479" height="312" src="https://miro.medium.com/max/479/1*XcMR1e0AJRtceodk8HY_LQ.png" sizes="479px" srcSet="https://miro.medium.com/max/276/1*XcMR1e0AJRtceodk8HY_LQ.png 276w, https://miro.medium.com/max/479/1*XcMR1e0AJRtceodk8HY_LQ.png 479w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Open Teams meeting recording in Microsoft Stream</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>4. Click the <strong>ellipsis (…)</strong> in the details section.</Typography>
                         <Typography variant="body1" gutterBottom>5. Click <strong>Update video details</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams Microsoft Stream Update video details" width="207" height="354" src="https://miro.medium.com/max/207/1*cNVUQwlLMA0yv3XKD82bzw.png" sizes="207px" srcSet=""/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Stream update video details</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>6. Under Video Language click <strong>Select a language</strong>.</Typography>
                         <Typography variant="body1" gutterBottom>7. Select your language.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams set video language" width="355" height="131" src="https://miro.medium.com/max/355/1*mzPuo2pWmYXChJLaKyFlgQ.png" sizes="355px" srcSet="https://miro.medium.com/max/276/1*mzPuo2pWmYXChJLaKyFlgQ.png 276w, https://miro.medium.com/max/355/1*mzPuo2pWmYXChJLaKyFlgQ.png 355w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Steam set video language</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>8. Verify <strong>autogenerate captions</strong> is checked.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams autogenerate captions button" width="348" height="330" src="https://miro.medium.com/max/348/1*S44EH1cJgbZUpqDxNf6nJw.png" sizes="348px" srcSet="https://miro.medium.com/max/276/1*S44EH1cJgbZUpqDxNf6nJw.png 276w, https://miro.medium.com/max/348/1*S44EH1cJgbZUpqDxNf6nJw.png 348w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Stream autogenerate captions checkbox</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>9. Click <strong>Apply</strong>.</Typography>
                         <Typography variant="body1" gutterBottom>10. Wait for the transcripts to complete.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams Meeting transcript" width="385" height="440" src="https://miro.medium.com/max/385/1*q-LW7BvYaQnMBxOSWXoo-Q.png" sizes="385px" srcSet="https://miro.medium.com/max/276/1*q-LW7BvYaQnMBxOSWXoo-Q.png 276w, https://miro.medium.com/max/385/1*q-LW7BvYaQnMBxOSWXoo-Q.png 385w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Stream waiting for transcripts</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>28. Access Teams Help</Typography>
                         <Typography variant="body1" gutterBottom>Teams has a great built-in help system. Designed to keep you up to date on changes and teach you how to get the most of Teams. It’s simple to access too.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to access Microsoft Teams built-in help</Typography>
                         <ol>
                            <li>Click <strong>Help </strong>in the bottom left corner of Microsoft Teams.</li>
                            <li>Click <strong>Training</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams help training" width="262" height="203" src="https://miro.medium.com/max/262/1*8-aMyoAMw8mVQGvkskAA6w.png" sizes="262px" srcSet=""/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Teams built-in help</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>29. Set Out of Office for Coworkers to See in Teams</Typography>
                         <Typography variant="body1" gutterBottom>Unable to respond during normal business hours? Your out of office status will show up in Microsoft Teams. Your teammates will also get a reminder that you’re out of office when they send you a private chat or @mention you.</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to view someone’s out of office message in Teams</Typography>
                         <ol>
                            <li>In chat, hover over their name or image.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams out of office" width="700" height="561" src="https://miro.medium.com/max/700/1*_rdujBO7FZFuri1Vr3-OAQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*_rdujBO7FZFuri1Vr3-OAQ.png 276w, https://miro.medium.com/max/552/1*_rdujBO7FZFuri1Vr3-OAQ.png 552w, https://miro.medium.com/max/640/1*_rdujBO7FZFuri1Vr3-OAQ.png 640w, https://miro.medium.com/max/700/1*_rdujBO7FZFuri1Vr3-OAQ.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Viewing out of office in Teams</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="h4" component="h2" gutterBottom>30. Poll Your Team</Typography>
                         <Typography variant="body1" gutterBottom>Creating a form is quick and easy in Teams. It’s a simple way to get everyone to answer a question and get the information in a pretty little form. To create a form and share it with a team is easy!</Typography>
                         <Typography variant="h5" component="h3" gutterBottom>How to create and share a form in Microsoft Teams</Typography>
                         <ol>
                            <li>Within the team click the <strong>ellipsis (…)</strong> in the new conversation. Click <strong>Forms</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams add a form" width="432" height="515" src="https://miro.medium.com/max/432/1*a5KU7AkaAA-D4IrL6a3WCA.png" sizes="432px" srcSet="https://miro.medium.com/max/276/1*a5KU7AkaAA-D4IrL6a3WCA.png 276w, https://miro.medium.com/max/432/1*a5KU7AkaAA-D4IrL6a3WCA.png 432w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>How to add Microsoft Form to Microsoft Team</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>2. Enter your question, the optional answers, and click <strong>Next</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams setup a form" width="611" height="685" src="https://miro.medium.com/max/611/1*U79MeMFZJLfFgPl6QBnCVg.png" sizes="611px" srcSet="https://miro.medium.com/max/276/1*U79MeMFZJLfFgPl6QBnCVg.png 276w, https://miro.medium.com/max/552/1*U79MeMFZJLfFgPl6QBnCVg.png 552w, https://miro.medium.com/max/611/1*U79MeMFZJLfFgPl6QBnCVg.png 611w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Form creation page</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Review your form and click <strong>Send</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams review form and submit" width="611" height="675" src="https://miro.medium.com/max/611/1*6BX4evZGwPSreKmGc9ctig.png" sizes="611px" srcSet="https://miro.medium.com/max/276/1*6BX4evZGwPSreKmGc9ctig.png 276w, https://miro.medium.com/max/552/1*6BX4evZGwPSreKmGc9ctig.png 552w, https://miro.medium.com/max/611/1*6BX4evZGwPSreKmGc9ctig.png 611w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Form review page</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to respond to a form in Teams</Typography>
                         <ol>
                            <li>Once published the form will automatically create two new conversations. One with the form; the second with the results.</li>
                            <li>In the first conversation posted by the published form click the answer you want. Click <strong>Submit Vote</strong>.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Form question in Microsoft Teams" width="540" height="340" src="https://miro.medium.com/max/540/1*8ng1Ujo4-9cGEBBCjrBZHw.png" sizes="540px" srcSet="https://miro.medium.com/max/276/1*8ng1Ujo4-9cGEBBCjrBZHw.png 276w, https://miro.medium.com/max/540/1*8ng1Ujo4-9cGEBBCjrBZHw.png 540w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Form question in Microsoft Teams</figcaption>
                         </figure>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Form summary in Microsoft Teams" width="540" height="302" src="https://miro.medium.com/max/540/1*-v7QneYU8O1neUk1hAdZrA.png" sizes="540px" srcSet="https://miro.medium.com/max/276/1*-v7QneYU8O1neUk1hAdZrA.png 276w, https://miro.medium.com/max/540/1*-v7QneYU8O1neUk1hAdZrA.png 540w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Form summary in Microsoft Teams</figcaption>
                         </figure>
                         <Typography variant="h5" component="h3" gutterBottom>How to view additional information in the form</Typography>
                         <ol>
                            <li>Go to <a href="https://forms.office.com" rel="noopener">Microsoft Forms</a> and login with your Teams’ credentials.</li>
                            <li>Click the form you created in Microsoft Teams.</li>
                         </ol>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft form selection page" width="551" height="397" src="https://miro.medium.com/max/551/1*TqcA5Oo6OYYQV0D-2JAKhg.png" sizes="551px" srcSet="https://miro.medium.com/max/276/1*TqcA5Oo6OYYQV0D-2JAKhg.png 276w, https://miro.medium.com/max/551/1*TqcA5Oo6OYYQV0D-2JAKhg.png 551w"/>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft form selection page</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>3. Click the <strong>Responses </strong>tab. Click <strong>More Details</strong>.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft forms a summary of responses" width="700" height="561" src="https://miro.medium.com/max/700/1*sWhdtNflU-tgTWBHctKizg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*sWhdtNflU-tgTWBHctKizg.png 276w, https://miro.medium.com/max/552/1*sWhdtNflU-tgTWBHctKizg.png 552w, https://miro.medium.com/max/640/1*sWhdtNflU-tgTWBHctKizg.png 640w, https://miro.medium.com/max/700/1*sWhdtNflU-tgTWBHctKizg.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft forms a summary of responses</figcaption>
                         </figure>
                         <Typography variant="body1" gutterBottom>4. View the responses by each individual.</Typography>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div>
                                  <div>
                                     <div>
                                        <div></div>
                                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Form results" width="700" height="185" src="https://miro.medium.com/max/700/1*Q7-1DOrQUQI6-H8cRqCTmw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*Q7-1DOrQUQI6-H8cRqCTmw.png 276w, https://miro.medium.com/max/552/1*Q7-1DOrQUQI6-H8cRqCTmw.png 552w, https://miro.medium.com/max/640/1*Q7-1DOrQUQI6-H8cRqCTmw.png 640w, https://miro.medium.com/max/700/1*Q7-1DOrQUQI6-H8cRqCTmw.png 700w"/>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <figcaption>Microsoft Form results</figcaption>
                         </figure>
                      </div>
                   </div>
                  </section>
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>
      </Page>
    )
  }
}

export default BlogArticle
