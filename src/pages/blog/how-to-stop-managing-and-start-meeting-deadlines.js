import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'How to Stop Managing and Start Meeting Deadlines'
  const jsonLd = {
    headline: title,
    datePublished: '1-19-2018',
    keywords: [
      'Microsoft',
      'Microsoft Planner',
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
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*85HOtkEcI2oQJxalNeWYAQ.png'} canonical={'https://medium.com/gitbit/how-to-stop-managing-and-start-meeting-deadlines-d404f65404a9'} title={title} description={'Scrum is the leading agile development methodology, used by Fortune 500 companies around the world. Planner is Microsoft Office 365’s task management app designed for agile teams.'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>How to Stop Managing and Start Meeting Deadlines</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Rugby" src="https://miro.medium.com/max/700/1*85HOtkEcI2oQJxalNeWYAQ.png" width="700" height="529" role="presentation" /></div>
                  </div>
                </figure>
                <Typography variant="body1" gutterBottom>On December 1st, 1913 Henry Ford installed the first moving assembly line. It was brilliant. His innovation reduced the time it took to build a car from more than 12 hours to two hours and 30 minutes. Ford increased production and decreased costs. His brilliant plan moved the automobile from one station to the next until it was complete. Today, the world is a lot faster. Unfortunately, most teams and projects still follow this 100-year-old model to a T (get it… Model T).</Typography>
                <Typography variant="h4" component="h2" gutterBottom>Rugby Teamwork &amp; Management</Typography>
                <Typography variant="body1" gutterBottom>In 1986 two rugby fans Hirotaka Takeuchi and Ikujiro Nonaka created a new approach to projects and teamwork. In this <em>new </em>approach the team “tries to go the distance as a unit, passing the ball back and forth”. Today, we call this agile project management framework <strong>Scrum</strong>.</Typography>
                <Typography variant="body1" gutterBottom>Scrum is the leading agile development methodology, used by Fortune 500 companies around the world. It’s a framework or a way of thinking about projects that allow you to be organized and dynamic while not wasting time on project management. There’s no better place to learn about SCRUM then the <a href="https://www.scrumalliance.org/why-scrum" rel="noopener">SCRUM Alliance</a>.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div>
                    <div>
                      <div>
                        <div />
                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Scrum board" width="509" height="679" role="presentation" src="https://miro.medium.com/max/509/1*K9wEBvuOyzaajZxrpjMs7w.png" sizes="509px" srcSet="https://miro.medium.com/max/276/1*K9wEBvuOyzaajZxrpjMs7w.png 276w, https://miro.medium.com/max/509/1*K9wEBvuOyzaajZxrpjMs7w.png 509w" />
                      </div>
                    </div>
                  </div>
                  <figcaption>Relic Scrum task board found inside a cave</figcaption>
                </figure>
                <Typography variant="h5" component="h3" gutterBottom>The Scrum framework in 30 seconds</Typography>
                <ul>
                  <li>A product owner creates a prioritized wish list called a product backlog.</li>
                  <li>During sprint planning, the team pulls a small chunk from the top of that wish list, a sprint backlog, and decides how to implement those pieces.</li>
                  <li>The team has a certain amount of time — a sprint (usually two to four weeks) — to complete its work, but it meets each day to assess its progress (daily Scrum).</li>
                  <li>Along the way, the ScrumMaster keeps the team focused on its goal.</li>
                  <li>At the end of the sprint, the work should be potentially shippable: ready to hand to a customer, put on a store shelf, or show to a stakeholder.</li>
                  <li>The sprint ends with a sprint review and retrospective.</li>
                  <li>As the next sprint begins, the team chooses another chunk of the product backlog and begins working again.</li>
                </ul>
                <Typography variant="h4" component="h2" gutterBottom>Scrum vs Traditional Waterfall Project Management</Typography>
                <Typography variant="body1" gutterBottom>Scrums work a bit differently than your traditional project management, most organizations will use both due to the different needs of projects.</Typography>
                <Typography variant="body1" gutterBottom>I recommend Scrums when a project’s needs change and there are a lot of moving parts that can happen simultaneously. The Scrum framework allows different people to pick up tasks and work them independently. You can hit roadblocks while continuing in another area of the project. This flow is agile and can feel chaotic without the proper tools.</Typography>
                <Typography variant="body1" gutterBottom>The traditional waterfall is great when a project must naturally move in a static linear fashion. For example, at TierPoint I need a private cloud with multiple servers built. First, the networking team must create the private network. Then the virtualization team can create the VMs. Then the Windows team installs the OS. Each team has to wait for the team before them completes there tasks. While we could still use a Scrum framework, the more traditional tools of waterfall project management are helpful.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>Scrum Tools</Typography>
                <Typography variant="body1" gutterBottom>In Rugby, you barely have any equipment. Likewise, agile projects want a small dynamic tool-set that won’t get in the way. Meet <strong>Microsoft Planner</strong>.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner on laptop and phones" width="700" height="430" role="presentation" src="https://miro.medium.com/max/700/1*v--W3EuNcsjYjgbPmLT7-A.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*v--W3EuNcsjYjgbPmLT7-A.png 276w, https://miro.medium.com/max/552/1*v--W3EuNcsjYjgbPmLT7-A.png 552w, https://miro.medium.com/max/640/1*v--W3EuNcsjYjgbPmLT7-A.png 640w, https://miro.medium.com/max/700/1*v--W3EuNcsjYjgbPmLT7-A.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Planner is available on smartphones and on the web</figcaption>
                </figure>
                <Typography variant="body1" gutterBottom>Planner comes directly with your Office 365 and it’s fantastic.</Typography>
                <Typography variant="body1" gutterBottom>Planner is Microsoft Office 365’s task management app for teams. The app’s design is based on the Scrum framework. At the top level, you have <strong>plans</strong>. Each team or project can have its own plan. Within a plan you have <strong>buckets</strong>. A bucket is a way to organize <strong>tasks</strong>. A task is a piece of work that must be completed. Tasks can move around the different buckets, be assigned to different people, have comments, etc. It will make more sense as we move through it.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner screenshot" width="700" height="321" role="presentation" src="https://miro.medium.com/max/700/1*J0dgCmpWrqIwulQE7LDvrA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*J0dgCmpWrqIwulQE7LDvrA.png 276w, https://miro.medium.com/max/552/1*J0dgCmpWrqIwulQE7LDvrA.png 552w, https://miro.medium.com/max/640/1*J0dgCmpWrqIwulQE7LDvrA.png 640w, https://miro.medium.com/max/700/1*J0dgCmpWrqIwulQE7LDvrA.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Microsoft Planner: Plans Overview Page</figcaption>
                </figure>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Empty Microsoft Planner screenshot" width="700" height="225" role="presentation" src="https://miro.medium.com/max/700/1*6tpas1lrgv6iQv26UPrnDA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*6tpas1lrgv6iQv26UPrnDA.png 276w, https://miro.medium.com/max/552/1*6tpas1lrgv6iQv26UPrnDA.png 552w, https://miro.medium.com/max/640/1*6tpas1lrgv6iQv26UPrnDA.png 640w, https://miro.medium.com/max/700/1*6tpas1lrgv6iQv26UPrnDA.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Microsoft Planner Board (the overview screen of a plan)</figcaption>
                </figure>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div>
                    <div>
                      <div>
                        <div />
                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner to do" width="320" height="571" role="presentation" src="https://miro.medium.com/max/320/1*XgXZSsfBL39-YaCkgd-abg.png" sizes="320px" srcSet="https://miro.medium.com/max/276/1*XgXZSsfBL39-YaCkgd-abg.png 276w, https://miro.medium.com/max/320/1*XgXZSsfBL39-YaCkgd-abg.png 320w" />
                      </div>
                    </div>
                  </div>
                  <figcaption>Microsoft Planner Bucket</figcaption>
                </figure>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner task" width="700" height="650" role="presentation" src="https://miro.medium.com/max/700/1*pnUDGeXfmwxht7DSzJdlrw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*pnUDGeXfmwxht7DSzJdlrw.png 276w, https://miro.medium.com/max/552/1*pnUDGeXfmwxht7DSzJdlrw.png 552w, https://miro.medium.com/max/640/1*pnUDGeXfmwxht7DSzJdlrw.png 640w, https://miro.medium.com/max/700/1*pnUDGeXfmwxht7DSzJdlrw.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Microsoft Planner Task</figcaption>
                </figure>
                <Typography variant="h4" component="h2" gutterBottom>How to get Started with a Simple Plan</Typography>
                <Typography variant="body1" gutterBottom>Next, we’re going through a simple way to use the Scrum framework and Planner. The most basic plan is a team to-do list. Open the Planner app and create a plan. It will automatically have a to-do bucket. From there you can add members and create tasks.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner screenshot with left pane" width="700" height="514" role="presentation" src="https://miro.medium.com/max/700/1*N6BZt4v9x-Obx98lvajyzA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*N6BZt4v9x-Obx98lvajyzA.png 276w, https://miro.medium.com/max/552/1*N6BZt4v9x-Obx98lvajyzA.png 552w, https://miro.medium.com/max/640/1*N6BZt4v9x-Obx98lvajyzA.png 640w, https://miro.medium.com/max/700/1*N6BZt4v9x-Obx98lvajyzA.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Basic Plan with two tasks</figcaption>
                </figure>
                <Typography variant="body1" gutterBottom>Team members will know what tasks are available to work because the task won’t have an assignee. When a team member starts working a task, they should mark the task ‘in progress’ and assign the task.</Typography>
                <Typography variant="body1" gutterBottom>When the work is completed, they can mark the task completed and move on to the next task.</Typography>
                <Typography variant="h5" component="h3" gutterBottom>How to add Team Meetings</Typography>
                <Typography variant="body1" gutterBottom>So you’ve created your plan and added your members. Everyone’s working tasks and things are going well. Things are moving quickly, and the team is growing, we’ll need to start to discuss tasks in a daily or weekly meeting. During the meeting, you can open the ‘Show Completed’ section and talk about completed tasks.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner screenshot with left pane and tasks completed" width="700" height="595" role="presentation" src="https://miro.medium.com/max/700/1*4j3bKeqZz5wl3CJZlUD5NQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*4j3bKeqZz5wl3CJZlUD5NQ.png 276w, https://miro.medium.com/max/552/1*4j3bKeqZz5wl3CJZlUD5NQ.png 552w, https://miro.medium.com/max/640/1*4j3bKeqZz5wl3CJZlUD5NQ.png 640w, https://miro.medium.com/max/700/1*4j3bKeqZz5wl3CJZlUD5NQ.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Basic Plan showing Completed Tasks</figcaption>
                </figure>
                <Typography variant="h5" component="h3" gutterBottom>Quality Assurance</Typography>
                <Typography variant="body1" gutterBottom>Now we need tasks to go through quality testing before being closed. Create a new bucket called ‘QA’. When a team member completes a task that needs a second person to review, they’ll move the task to the QA bucket. Someone from QA can pick up the task and perform there testing prior to closing the ticket. If QA fails, they can add a comment and move the task back to the To do bucket.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner with QA" width="700" height="450" role="presentation" src="https://miro.medium.com/max/700/1*WJfAC6jS7ehaT9myMZwzZQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*WJfAC6jS7ehaT9myMZwzZQ.png 276w, https://miro.medium.com/max/552/1*WJfAC6jS7ehaT9myMZwzZQ.png 552w, https://miro.medium.com/max/640/1*WJfAC6jS7ehaT9myMZwzZQ.png 640w, https://miro.medium.com/max/700/1*WJfAC6jS7ehaT9myMZwzZQ.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Microsoft Planner with two buckets and one open task</figcaption>
                </figure>
                <Typography variant="h5" component="h3" gutterBottom>Tier 2 Support Required!</Typography>
                <Typography variant="body1" gutterBottom>Now our team has grown. We have new interns that can handle most things but every once in a while they need assistance. Now that we have two tiers we create another bucket called Tier 2. When an intern cannot complete a task they can add their notes to the task then move it over to the Tier 2 bucket. Voila!</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner board" width="700" height="248" role="presentation" src="https://miro.medium.com/max/700/1*_KMk9-PdWT5N_0Mr18jE1w.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*_KMk9-PdWT5N_0Mr18jE1w.png 276w, https://miro.medium.com/max/552/1*_KMk9-PdWT5N_0Mr18jE1w.png 552w, https://miro.medium.com/max/640/1*_KMk9-PdWT5N_0Mr18jE1w.png 640w, https://miro.medium.com/max/700/1*_KMk9-PdWT5N_0Mr18jE1w.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Plan with 3 buckets</figcaption>
                </figure>
                <Typography variant="h5" component="h3" gutterBottom>Waiting on Parts</Typography>
                <Typography variant="body1" gutterBottom>Now, we need to add hardware to the project. After the parts are ordered a task can be created to keep the team updated on the order status. We don’t want to clog up the To do bucket with tasks that cannot be worked. We’ll need to create a new bucket called ‘On Hold’. Then the task can be placed in the On Hold bucket. Once the parts arrive and the task can be worked we’ll add a comment to the task and move the task to the proper bucket.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Planner Support board" width="700" height="168" role="presentation" src="https://miro.medium.com/max/700/1*4vJt8gdjStuHpuZPPNbJNw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*4vJt8gdjStuHpuZPPNbJNw.png 276w, https://miro.medium.com/max/552/1*4vJt8gdjStuHpuZPPNbJNw.png 552w, https://miro.medium.com/max/640/1*4vJt8gdjStuHpuZPPNbJNw.png 640w, https://miro.medium.com/max/700/1*4vJt8gdjStuHpuZPPNbJNw.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption>Planner with 4 buckets: On Hold, To do, Tier 2, &amp; QA</figcaption>
                </figure>
                <Typography variant="h4" component="h2" gutterBottom>Summary</Typography>
                <Typography variant="body1" gutterBottom>Planner is built right into Office 365. If you’re subscribed to Office 365 you can get started right away. The Planner app is lightweight and dynamic. You can make it fit your team and goals, not the other way around.</Typography>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="body1" gutterBottom>Thank you for taking the time to read my article. I hope you found it beneficial. If you have any questions or feedback, please don’t hesitate to reach out.</Typography>
                      <Typography variant="body1" gutterBottom>— <a href="https://www.linkedin.com/in/johnlgruber/" rel="noopener">John Gruber</a> — <a href="https://www.tierpoint.com/managed-services/office365/" rel="noopener">TierPoint Collaboration Engineer</a></Typography>
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
