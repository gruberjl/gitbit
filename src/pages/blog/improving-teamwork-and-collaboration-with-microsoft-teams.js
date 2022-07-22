import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Improving Teamwork and Collaboration with Microsoft Teams'
  const jsonLd = {
    headline: title,
    datePublished: '9-17-2018',
    keywords: [
      'Microsoft',
      'Microsoft Teams',
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
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1000/1*lu07WwPtQxi3E-JM6mupAA.jpeg'} canonical={'https://medium.com/gitbit/improving-teamwork-and-collaboration-with-microsoft-teams-4a550c7029c6'} title={title} description={'Microsoft Teams is a collaboration hub built around group chat with a fast growing list of connections to all the apps your team needs. Microsoft has developed apps for every device. Use the…'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>Improving Teamwork and Collaboration with Microsoft Teams</Typography>
                <Typography variant="body1" gutterBottom>Microsoft Teams is a collaboration hub built around group chat with a fast growing list of  to all the apps your team needs.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>Top Features</Typography>
                <ul>
                  <li><strong>Group Chat</strong>: One-to-many messaging to collaborate with coworkers and external users. Keep projects, departments, and everyone up-to-date and organized all in one place.</li>
                  <li><strong>Private Messaging</strong>: One-to-one messaging to collaborate with coworkers or external users. Collaborate using text, voice, or video. Quickly share documents, images, and more.</li>
                  <li><strong>Workspace</strong>: Every team can customize their workspace with Tabs, Connectors and Bots. With over 150 integrations, file uploads, and chat every team can build a custom space for their team.</li>
                </ul>
                <div>
                  <div>
                    <div>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams communicare through chat" src="https://miro.medium.com/max/1000/1*lu07WwPtQxi3E-JM6mupAA.jpeg" width="1000" height="563" role="presentation" /></div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <Typography variant="h4" component="h2" gutterBottom>Accessing Teams</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft has developed apps for every device. Use the following links to access or download Microsoft Teams for your device.</Typography>
                    <ul>
                      <li><a href="https://teams.microsoft.com/" rel="noopener">Web</a></li>
                      <li><a href="https://teams.microsoft.com/downloads" rel="noopener">Windows</a></li>
                      <li><a href="https://play.google.com/store/apps/details?id=com.microsoft.teams" rel="noopener">Android</a></li>
                      <li><a href="https://itunes.apple.com/app/id1113153706" rel="noopener">iPhone</a></li>
                      <li><a href="https://teams.microsoft.com/downloads" rel="noopener">Mac</a></li>
                    </ul>
                    <Typography variant="h4" component="h2" gutterBottom>What’s a Team?</Typography>
                    <Typography variant="body1" gutterBottom>A team is the foundation of the Microsoft Teams app. A team has members, channels, and apps.</Typography>
                    <Typography variant="body1" gutterBottom>A <strong>member</strong> is a person that has access to the team. If the team privacy settings are <em>Public</em> anyone within your organization can join the team. If the privacy settings are <em>Private</em> only invited members can join the team. A member can be an Owner, member, or guest. <strong>Owners </strong>manage the team by inviting new members, setting up permissions, and editing settings. <strong>Guests</strong> are members of the team that are external to your organization. Guests cannot perform all the tasks members can for example add apps or join public teams that they are not explicitly invited to.</Typography>
                    <Typography variant="body1" gutterBottom>“<strong>Channels </strong>are dedicated sections within a team to keep conversations organized by specific topics, projects, disciplines — -whatever works for your team!” By default, a new team will have a general channel. Your team can chose to create a channel for each project, product, or any other logical organization your team may decide. A channel contains group chat, tabs, and connectors. <strong>Tabs</strong> are a way to add rich content directly to your teams channel. Tabs can be OneNote, wikis, documents, or one of many 3rd party apps to integrate into your team. They are a fantastic way to connect all your teams apps in one place for fast easy access. <strong>Connectors</strong> allow you to connect different apps into your team chat. You can connect Bing News and get daily updates on your industry, connect to your Trello boards and receive activity updates directly in your channel chat window, and more.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>Navigating Microsoft Teams</Typography>
                    <Typography variant="body1" gutterBottom>A bit daunting at first look, Teams truly is a simple app with an intuitive flow based on improving productivity of your day-to-day tasks. The Teams window is separated into 4 primary panes: app header, primary navigation, secondary navigation, and the main messages pane.</Typography>
                    <Typography variant="body1" gutterBottom><strong>App Header Bar</strong></Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams App Bar" width="700" height="51" role="presentation" src="https://miro.medium.com/max/700/1*iS3rhKXegNvrMo60gAP--A.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*iS3rhKXegNvrMo60gAP--A.png 276w, https://miro.medium.com/max/552/1*iS3rhKXegNvrMo60gAP--A.png 552w, https://miro.medium.com/max/640/1*iS3rhKXegNvrMo60gAP--A.png 640w, https://miro.medium.com/max/700/1*iS3rhKXegNvrMo60gAP--A.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="body1" gutterBottom>The app header bar is located at the very top of Microsoft Teams. The bar will never move or be hidden. The <strong>Waffle</strong> menu will help navigate across other  apps. The <strong>Compose </strong>button can be clicked at any time to immediately be navigated to your one-on-one chat to quickly instant message anyone within your organization. The <strong>Command Bar</strong> is used to search and perform other quick commands. The search function will search the open chat or channel messages that you’re currently viewing. Like most applications, the <strong>Profile</strong> button is located in the top right. A quick click will show your profile options, help, as well as, keyboard shortcuts.</Typography>
                    <Typography variant="body1" gutterBottom><strong>Primary Navigation Menu</strong></Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams primary navigation" width="67" height="575" role="presentation" src="https://miro.medium.com/max/67/1*pbnXAVh6vHkqG4BlVcgOyw.png" sizes="67px" srcSet="" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="body1" gutterBottom>The primary navigation will be located on the far left of the window. Similar to the app header bar, the primary navigation menu will never move.</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft Teams has a LOT of powerful features built in and can be extended to include more apps. The primary navigation bar is designed to help you quickly navigate between the different features.</Typography>
                    <Typography variant="body1" gutterBottom>The <strong>Activity </strong>button will navigate to a feed of all activity across your teams. The activity feed is a great place to track multiple chats or get caught up on any action you missed while you were away.</Typography>
                    <Typography variant="body1" gutterBottom><strong>Chat</strong> will navigate Teams to your private chat where you can see your private messages or start a new private discussion. The <strong>Teams</strong> button will display your team workspaces where you can have conversations and access the resources that have been connected to one of your teams. The <strong>Meetings</strong> button will show your scheduled team meetings where you can quickly schedule a meeting with one of your teams. Clicking the <strong>Ellipsis</strong> will display a drop down of additional apps including your files. The bottom of the primary navigation menu may change slightly but the most important button is the <strong>Store</strong>. By clicking the store button you’ll see a list of different apps, many free, which can be connected to your Microsoft Teams workspace.</Typography>
                    <Typography variant="body1" gutterBottom><strong>Secondary Navigation Bar</strong></Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div>
                        <div>
                          <div>
                            <div />
                            <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams favorites" width="272" height="240" role="presentation" src="https://miro.medium.com/max/272/1*PRIJnVXe_WJBxHlYPuOLLw.png" sizes="272px" srcSet="" />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="body1" gutterBottom>Located directly next to the primary navigation bar, the secondary navigation bar is used as additional navigation throughout Teams. Unlike the app bar and primary navigation bar, the secondary navigation bar is dynamic and will change depending on your selection in the primary navigation bar. For example, when selecting chat you will see a list of your most recent private chats. When selecting Teams in the primary navigation bar, you’ll see a list of your teams. Lastly, at the very bottom of the bar you will find the <strong>Join or create a team</strong> button used to create a new team or find a public team to join.</Typography>
                    <Typography variant="body1" gutterBottom><strong>Messages Pane</strong></Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams General channel" width="700" height="493" role="presentation" src="https://miro.medium.com/max/700/1*K8XEE3SAtE-FoyetIZE5JA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*K8XEE3SAtE-FoyetIZE5JA.png 276w, https://miro.medium.com/max/552/1*K8XEE3SAtE-FoyetIZE5JA.png 552w, https://miro.medium.com/max/640/1*K8XEE3SAtE-FoyetIZE5JA.png 640w, https://miro.medium.com/max/700/1*K8XEE3SAtE-FoyetIZE5JA.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="body1" gutterBottom>The primary pane will contain the content of your current view. At the very top of the messages pane is a header section. The header section will contain meta information about your current view like the title of the channel, and privacy settings. Directly next to the title is an ellipsis, when clicked a drop down menu will display management options like adding connectors, getting the channels emails address etc. Directly below the title will be the channel tabs. Tabs can be added or removed to quickly connect your team to different apps and information. Adding tabs for the most common information your teams needs is one of the best ways to improve productivity. Add a wiki with information that will needs to be referenced a lot, add Planner to quickly manage projects, etc.</Typography>
                    <Typography variant="body1" gutterBottom><strong>Chat</strong></Typography>
                    <figure style={{margin: 0, textAlign: 'center'}}>
                      <div role="button" tabIndex="0">
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams chat" width="700" height="161" role="presentation" src="https://miro.medium.com/max/700/1*E18uxD6ZrU33HXEkMc0I9A.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*E18uxD6ZrU33HXEkMc0I9A.png 276w, https://miro.medium.com/max/552/1*E18uxD6ZrU33HXEkMc0I9A.png 552w, https://miro.medium.com/max/640/1*E18uxD6ZrU33HXEkMc0I9A.png 640w, https://miro.medium.com/max/700/1*E18uxD6ZrU33HXEkMc0I9A.png 700w" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Typography variant="body1" gutterBottom>Chat in a team channel is separated into <strong>Conversations</strong>. An image of the person, bot or app that starts the conversation will be displayed to the left of the topic. a <strong>reply</strong> button will be located at the bottom of the conversation. When clicked a text box will be displayed.</Typography>
                    <Typography variant="body1" gutterBottom>A text box to start a new conversation is located at the bottom of the messages pane. Most users will accidentally start a new conversation when they mean to reply. It’s a common pattern that you’ll learn quickly! Keep your communication organized in conversations to help find conversations later and allow multiple conversations to take place at the same time.</Typography>
                  </div>
                </div>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="body1" gutterBottom>Thank you for taking the time to read my article. I hope you found it beneficial. Feel free to contact me on <a href="https://twitter.com/@gruberjl" rel="noopener">Twitter</a> or <a href="http://www.linkedin.com/in/gruberjl" rel="noopener">LinkedIn</a> with any questions.</Typography>
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

export default BlogArticle
