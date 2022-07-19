import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

 
class BlogArticle extends Component {
  render() {
    const title = "6 Concepts to Master Codeless Automation"
    const jsonLd = {
      headline: title,
      datePublished: "10-14-2018",
      keywords: [
        "Microsoft",
        "Microsoft Flow",
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
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1000/1*SIb-7xHwfHKsPU2YMxoJUA.png'} canonical={'https://medium.com/gitbit/6-concepts-to-master-codeless-automation-9477e93a0ae3'} title={title} description={"Some days it seems impossible to get everything done. As time goes by hectic days become normal. Racing through tasks and grinding through the daily routines without missing a beat becomes a…"}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>6 Concepts to Master Codeless Automation</Typography>
                  <div>
                     <div>
                        <div>
                           <figure style={{margin: 0, textAlign: 'center'}}>
                              <div role="button" tabIndex="0">
                                 <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Flow" src="https://miro.medium.com/max/1000/1*SIb-7xHwfHKsPU2YMxoJUA.png" width="1000" height="500" role="presentation"/></div>
                              </div>
                           </figure>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div>
                        <Typography variant="body1" gutterBottom>Some days it seems impossible to get everything done. As time goes by hectic days become normal. Racing through tasks and grinding through the daily routines without missing a beat becomes a challenge. When keeping up becomes daily, burn out is right around the corner. After burn out comes the inevitable “dropping the ball”. Missing deadlines, forgetting to CC someone, people depending on you are left wondering. Companies are demanding more productivity but being overworked isn’t the answer.</Typography>
                        <Typography variant="body1" gutterBottom>With the rise of cloud computing <strong>the number of apps in the workplace has exploded</strong>. Performing redundant tasks in multiple places has become common practice. From posting the same link on multiple social media accounts to entering data in a project management tool followed by emailing the same information out. These redundant tasks are time consuming and error prone.</Typography>
                        <Typography variant="body1" gutterBottom>With the <strong>growing demands on the information workforce</strong> it’s become crucial to decrease the amount of time and energy spent on mundane day-to-day tasks. Fortunately, we’re entering a time of codeless automation, creating simple workflows without the need for programmers and complex systems. Millions are finding tools like Microsoft Flow to help them throughout their day. Daunting at first, process automation is built on a few key concepts. Once learned, you can unlock their potential to stop grinding and start adding business value.</Typography>
                        <Typography variant="body1" gutterBottom>For example, with the popular approval workflow you can manage the approval of documents or processes across several services including Salesforce, SharePoint, Dynamics CRM, OneDrive, Zendesk, or WordPress. Or create a workflow that automatically tweets every message you post to your Facebook page. Another option is to configure an automated email summarizing your tasks from Microsoft Planner or Trello. Once you grasp the core concepts, the possibilities are (almost) limitless.</Typography>
                        <Typography variant="h4" component="h2" gutterBottom>1. Workflows</Typography>
                        <Typography variant="body1" gutterBottom>A workflow is a trigger with one or more actions that should perform one task. Think of a workflow as a series of actions that need to be performed together. Many workflows will only perform one action. For example, you can tweet every time you post to a Facebook page. If using a toolset like Microsoft Flow you can add additional actions such as posting to LinkedIn AND tweeting every time you post to a Facebook page.</Typography>
                        <Typography variant="h4" component="h2" gutterBottom>2. Triggers</Typography>
                        <Typography variant="body1" gutterBottom>A trigger is simply an event that starts the workflow. Every workflow starts with a trigger and each workflow can only have one trigger. The workflow can be started manually, scheduled daily, or on any number of events from other apps. For example, a trigger can watch your inbox and start the workflow when you receive an email. Sometimes, the trigger will pull information into the workflow. If you create a trigger that starts when you receive an email the workflow will contain information about the email like the subject, from, and body of the email.</Typography>
                        <Typography variant="h4" component="h2" gutterBottom>3. Actions</Typography>
                        <Typography variant="body1" gutterBottom>Actions are what you want to happen when a trigger is invoked. They can get data or make changes to apps. For example, an action can save an email to OneDrive, add a row to excel, or work with a third party app like Trello or social media. Other examples of actions include sending an email, posting a tweet, and starting an approval. Actions will always come after the trigger in the workflow.</Typography>
                        <Typography variant="h4" component="h2" gutterBottom>4. Connectors</Typography>
                        <Typography variant="body1" gutterBottom>Connectors are less obvious than triggers and actions. A connector is used to connect your workflow with other apps. For example, if you wanted to create a workflow to post tweets on Twitter your workflow would need to know what account your using and you will need to authorize the workflow to post tweets on your behalf. These permissions are stored in a connector. The connectors will typically be based on apps like Twitter, Outlook, or OneDrive.</Typography>
                        <Typography variant="h4" component="h2" gutterBottom>5. Conditions</Typography>
                        <Typography variant="body1" gutterBottom>A condition, also known as, if-then-else statements will execute a series of actions based on an expression. It sounds more complex then it really is so lets take a look at a couple of examples.</Typography>
                        <Typography variant="body1" gutterBottom><strong>If </strong>X+1=3 <strong>then </strong>do Y <strong>else </strong>do Z. In this example, Y will execute if X equals 2. If X is not equal to 2 then the workflow will execute Z.</Typography>
                        <Typography variant="body1" gutterBottom>If you wanted to tweet only when we post a message to Facebook when the Facebook message includes the text #Tweet then we could use a condition. <strong>If </strong>Tweet text contains #Tweet <strong>then</strong> post to Twitter <strong>else</strong> do nothing.</Typography>
                        <Typography variant="h4" component="h2" gutterBottom>6. Loops</Typography>
                        <Typography variant="body1" gutterBottom>Sometimes you want to run an action on each item in a group. For example, you may want to save email attachments to OneDrive. Since emails can have multiple attachments we would need to perform OneDrive’s save action on each attachment on the email. This type of loop is called a For Each loop. The for each loop will perform the action on each item in the group.</Typography>
                     </div>
                  </div>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                     <div>
                        <div>
                           <Typography variant="body1" gutterBottom>Once you grasp the core concepts of codeless automation you can start to automate your day-to-day tasks. If you have any questions don’t hesitate to reach out below or find me on <a href="https://twitter.com/gruberjl" rel="noopener">Twitter @gruberjl</a> or <a href="https://www.linkedin.com/in/gruberjl/" rel="noopener">LinkedIn</a>.</Typography>
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
