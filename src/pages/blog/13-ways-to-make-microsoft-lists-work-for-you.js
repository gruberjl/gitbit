import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '13 Ways to Make Microsoft Lists Work for You'
  const jsonLd = {
    headline: title,
    datePublished: '11-24-2020',
    keywords: [
      'Microsoft',
      'Microsoft Lists',
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
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1400/1*DsNJyGjMb37x7GMWGNgnQw.png'} canonical={'https://betterhumans.pub/13-ways-to-make-microsoft-lists-work-for-you-71b831e81abf'} title={title} description={'Microsoft Lists is a new app that is available with Microsoft 365. With Microsoft Lists, you can create a list to organize information. Store, share and collaborate with others in a clean list…'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>13 Ways to Make Microsoft Lists Work for You</Typography>
                <div>
                  <Typography variant="h5" component="h3" gutterBottom>How I created a content scheduler to track my publishing and writing directly in Microsoft Lists</Typography>
                </div>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists" src="https://miro.medium.com/max/1400/1*DsNJyGjMb37x7GMWGNgnQw.png" width="700" height="377" /></div>
                  </div>
                  <figcaption>Microsoft Lists. <a href="https://spoprod-a.akamaihd.net/files/odsp-next-prod-webpack_2020-08-21-sts_20200909.001/odsp-media/images/firstrunexperience/listshome1.mp4" rel="noopener">Image source</a></figcaption>
                </figure>
                <Typography variant="body1" gutterBottom><span><span><span /></span></span></Typography>
                <div />
                <a href="https://www.youtube.com/watch?v=U5E7N4l5FzA" rel="noopener">Microsoft Lists</a> is a new app that is available with Microsoft 365. With Microsoft Lists, you can create a list to organize information. Store, share and collaborate with others in a clean list format.
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>What makes Microsoft Lists unique?</Typography>
                      <Typography variant="body1" gutterBottom>Now you may be wondering “What makes Microsoft Lists unique? It sounds like a spreadsheet.” There are a few things that make Microsoft Lists unique.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>Visualize the data</Typography>
                      <Typography variant="body1" gutterBottom>First, you can visualize data in multiple ways. For example, you can view the list in a standard grid, also known as, a list format that does indeed look much like Excel.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft List in list format" width="700" height="161" src="https://miro.medium.com/max/700/1*pdJsRZ0k2qqgNI4U4rGV5Q.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*pdJsRZ0k2qqgNI4U4rGV5Q.png 276w, https://miro.medium.com/max/552/1*pdJsRZ0k2qqgNI4U4rGV5Q.png 552w, https://miro.medium.com/max/640/1*pdJsRZ0k2qqgNI4U4rGV5Q.png 640w, https://miro.medium.com/max/700/1*pdJsRZ0k2qqgNI4U4rGV5Q.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft List in list format. All screenshots by the author.</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>You can a<span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>l</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>so view the data in cards or gallery view:</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft List in Gallery format" width="546" height="569" src="https://miro.medium.com/max/546/1*HPaHG4tHvwbcCxwnHDjadA.png" sizes="546px" srcSet="https://miro.medium.com/max/276/1*HPaHG4tHvwbcCxwnHDjadA.png 276w, https://miro.medium.com/max/546/1*HPaHG4tHvwbcCxwnHDjadA.png 546w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft List in Gallery format</figcaption>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>Custom alerts</Typography>
                      <Typography variant="body1" gutterBottom>Another great feature of Microsoft Lists is the ability to customize the alerting when something changes. For example, you can set up a rule to receive an email every time something on the list changes. Don’t worry, we’ll get into how to set up alerts later on in the article.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Alerts" width="700" height="528" src="https://miro.medium.com/max/700/1*gyjNilKQDfflQNt0IS7q5w.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*gyjNilKQDfflQNt0IS7q5w.png 276w, https://miro.medium.com/max/552/1*gyjNilKQDfflQNt0IS7q5w.png 552w, https://miro.medium.com/max/640/1*gyjNilKQDfflQNt0IS7q5w.png 640w, https://miro.medium.com/max/700/1*gyjNilKQDfflQNt0IS7q5w.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft Lists Alerts</figcaption>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>Validate data before saving</Typography>
                      <Typography variant="body1" gutterBottom>Another feature of Microsoft Lists different from spreadsheets is the ability to validate data before being saved. Is a column required? Is it a date? With Microsoft Lists, you can verify data before it’s saved.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Adding a column to Microsoft Lists" width="303" height="865" src="https://miro.medium.com/max/303/1*t8yRzgUp6c7agCCQ1wJz7w.png" sizes="303px" srcSet="https://miro.medium.com/max/276/1*t8yRzgUp6c7agCCQ1wJz7w.png 276w, https://miro.medium.com/max/303/1*t8yRzgUp6c7agCCQ1wJz7w.png 303w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Adding a column to Microsoft Lists</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>Lists vs Planner &amp; To Do</Typography>
                      <Typography variant="body1" gutterBottom>You may be wondering, what’s the difference between Lists, Planner, and To-Do. Planner and To-Do are designed specifically for task lists. Microsoft Planner is a team-based task management solution while To-Do is for personal tasks. Microsoft Lists is more robust. It allows you to track inventory, recruitment, or patient tracking. Microsoft Lists is a lot more robust than Planner or To-Do so be sure to use the right app for the right task.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>The evolution of SharePoint Lists</Typography>
                      <Typography variant="body1" gutterBottom>Microsoft Lists is really the next evolution of SharePoint Lists. On the backend, they live in the same place. The difference is Microsoft Lists has a new front end interface.</Typography>
                      <Typography variant="body1" gutterBottom>Without further ado let’s jump into creating our List.</Typography>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>An Example Use Case for Lists</Typography>
                      <Typography variant="body1" gutterBottom>In this article, we’re going to build a content scheduler directly into Microsoft Lists. We’ll create a list, add columns with validation, and set up automated Teams messages when an item is created. Finally, we’ll trigger an automated email to ourselves every time a new item is created.</Typography>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>1. How to Access Microsoft Lists</Typography>
                      <ol>
                        <li>Go to <a href="https://portal.office.com" rel="noopener">https://portal.office.com</a></li>
                        <li>Log in using your Microsoft 365 credentials.</li>
                        <li>Click the <strong>waffle icon</strong> in the top left corner.</li>
                        <li>Select <strong>Lists</strong>.</li>
                      </ol>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div><img style={{maxWidth: '100%', height: 'auto'}} alt="How to Access Lists from Microsoft 365" src="https://miro.medium.com/max/620/1*W1950L0e6oBLu11Mi7GUGQ.png" width="310" height="547" /></div>
                        <figcaption>How to Access Lists from Microsoft 365</figcaption>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>Lists home page</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Home Page" width="700" height="438" src="https://miro.medium.com/max/700/1*3y4ax3tDSE2c0wlr1o2jbg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*3y4ax3tDSE2c0wlr1o2jbg.png 276w, https://miro.medium.com/max/552/1*3y4ax3tDSE2c0wlr1o2jbg.png 552w, https://miro.medium.com/max/640/1*3y4ax3tDSE2c0wlr1o2jbg.png 640w, https://miro.medium.com/max/700/1*3y4ax3tDSE2c0wlr1o2jbg.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft Lists Home Page</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>From the lists homepage, you can access a few things very quickly. You can:</Typography>
                      <ul>
                        <li>Click the <strong>New list</strong> button to create a new list.</li>
                        <li>Click the <strong>star </strong>in the top right corner of one of your lists to flag it as a favorite or not.</li>
                        <li>View recent lists or My Lists (which will show all your lists).</li>
                      </ul>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="How to customize and share a list" width="199" height="209" src="https://miro.medium.com/max/199/1*XVFRSSLKt8Y5Q_gh-Riiyw.png" sizes="199px" srcSet="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>How to customize and share a list</figcaption>
                      </figure>
                      <ul>
                        <li>Quickly share a list with someone else by hovering over the list &gt; clicking the <strong>ellipsis (…) </strong>and clicking <strong>Share</strong>.</li>
                        <li>Customize the name, color, and icon of the list by hovering over the list &gt; clicking the <strong>ellipsis (…)</strong> and clicking <strong>Customize</strong>.</li>
                      </ul>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="How to delete a list" width="206" height="243" src="https://miro.medium.com/max/206/1*MvCIowv0SvBMf5qjAdD-2w.png" sizes="206px" srcSet="" />
                            </div>
                          </div>
                        </div>
                        <figcaption>How to delete a list</figcaption>
                      </figure>
                      <ul>
                        <li>To delete a list go to the <strong>My lists</strong> view &gt; hover over the list you want to delete &gt; click the <strong>ellipsis (…)</strong> and click <strong>Delete</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>2. Create a New List</Typography>
                      <Typography variant="body1" gutterBottom>1. Click New list</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div><img style={{maxWidth: '100%', height: 'auto'}} alt="New List button" src="https://miro.medium.com/max/982/1*3kk1PZjzBDd9hkvAIb9zMQ.png" width="491" height="142" /></div>
                        <figcaption>New List button</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>2. Click <strong>Content scheduler</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Templates" width="700" height="455" src="https://miro.medium.com/max/700/1*rLckzTf4WFZvYT6-CAVq3w.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*rLckzTf4WFZvYT6-CAVq3w.png 276w, https://miro.medium.com/max/552/1*rLckzTf4WFZvYT6-CAVq3w.png 552w, https://miro.medium.com/max/640/1*rLckzTf4WFZvYT6-CAVq3w.png 640w, https://miro.medium.com/max/700/1*rLckzTf4WFZvYT6-CAVq3w.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft Lists Templates</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>3. Click <strong>Use template</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft List Content scheduler template" width="700" height="467" src="https://miro.medium.com/max/700/1*KrPMZL3QP0YUPVx-xSHXQQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*KrPMZL3QP0YUPVx-xSHXQQ.png 276w, https://miro.medium.com/max/552/1*KrPMZL3QP0YUPVx-xSHXQQ.png 552w, https://miro.medium.com/max/640/1*KrPMZL3QP0YUPVx-xSHXQQ.png 640w, https://miro.medium.com/max/700/1*KrPMZL3QP0YUPVx-xSHXQQ.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft List Content scheduler template</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>4. Enter a <strong>Name</strong>, <strong>description</strong>, choose a <strong>color</strong>, an <strong>icon</strong>, and select where you want to <strong>save </strong>the list. Then click <strong>Create</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists create a list" width="573" height="579" src="https://miro.medium.com/max/573/1*cznl8t6YzMF4_3jRRah0Nw.png" sizes="573px" srcSet="https://miro.medium.com/max/276/1*cznl8t6YzMF4_3jRRah0Nw.png 276w, https://miro.medium.com/max/552/1*cznl8t6YzMF4_3jRRah0Nw.png 552w, https://miro.medium.com/max/573/1*cznl8t6YzMF4_3jRRah0Nw.png 573w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft Lists create a list</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>3. How to Hide Columns</Typography>
                      <Typography variant="body1" gutterBottom>The default template has a couple of columns that aren’t important to me. So let’s hide them. Hiding a column will remove the column from any views and forms, so it’s a great way to remove the default columns.</Typography>
                      <Typography variant="body1" gutterBottom>1. Click the <strong>Content files</strong> column &gt; <strong>Column settings</strong> &gt; <strong>Hide this column</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Hide a column" src="https://miro.medium.com/max/758/1*Zjb6C7E0P1LVxpZUDuNGOw.png" width="379" height="389" /></div>
                        <figcaption>Microsoft Lists Hide a column</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>I recommend performing the same steps for the <strong>Author </strong>column.</Typography>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>4. How to Add Columns</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists choice column" src="https://miro.medium.com/max/1168/1*mh06UMqcn-igD1VU-nFsAA.png" width="584" height="205" /></div>
                        <figcaption>Microsoft Lists choice column</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Adding columns is just as simple. Since all of my publishing is done on Medium let’s add a column called Publication that has a preset list of publications where the editor of our list can select one from the list.</Typography>
                      <Typography variant="body1" gutterBottom>1. Click the <strong>Add column</strong> dropdown which appears as a header to a column in the list all the way to the right. Click <strong>Choice</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists add a choice column" width="180" height="508" src="https://miro.medium.com/max/180/1*hVDDoi8_vLehFBXOhRqqAA.png" sizes="180px" srcSet="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft Lists add a choice column</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>2. Enter a <strong>Name</strong>, <strong>Description</strong>, enter the publication options that you are a writer. Then click <strong>Save</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Add a column" width="307" height="908" src="https://miro.medium.com/max/307/1*rHoMIIg7wWIlkl6opVHiMA.png" sizes="307px" srcSet="https://miro.medium.com/max/276/1*rHoMIIg7wWIlkl6opVHiMA.png 276w, https://miro.medium.com/max/307/1*rHoMIIg7wWIlkl6opVHiMA.png 307w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Add a column</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Now add two more <strong>Yes/No</strong> columns named: “<strong>Alt Text on Images</strong>” &amp; “<strong>Plagiarism Checker.</strong>” These columns will be checked off to verify you have added alt text on images and performed a plagiarism checker before submitting it to a publisher.</Typography>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>5. How to Add Data</Typography>
                      <Typography variant="body1" gutterBottom>There’s a couple of ways to begin adding data to the list. First, let’s look at how to open the form and create one list entry.</Typography>
                      <Typography variant="body1" gutterBottom>1. Click <strong>New </strong>in the top left corner of the browser.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Add a new item to the list" src="https://miro.medium.com/max/1400/1*zAwRKU27a5nj58rNHGBjgw.png" width="700" height="290" /></div>
                        </div>
                        <figcaption>Add a new item to the list</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>2. Fill out the form with your article details then click <strong>Save</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists New item form" width="605" height="881" src="https://miro.medium.com/max/605/1*IsjxRFxpDzJRyPv-R8qhwQ.png" sizes="605px" srcSet="https://miro.medium.com/max/276/1*IsjxRFxpDzJRyPv-R8qhwQ.png 276w, https://miro.medium.com/max/552/1*IsjxRFxpDzJRyPv-R8qhwQ.png 552w, https://miro.medium.com/max/605/1*IsjxRFxpDzJRyPv-R8qhwQ.png 605w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>New item form</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>6. How to Mass Edit Via Grid View</Typography>
                      <Typography variant="body1" gutterBottom>Mass editing is a quick way to update multiple items in the list.</Typography>
                      <ol>
                        <li>Click the <strong>Edit in grid view</strong> button.</li>
                      </ol>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Edit in grid view button circled" width="364" height="312" src="https://miro.medium.com/max/364/1*owHS0fPTZhEUFXMTyKc3KA.png" sizes="364px" srcSet="https://miro.medium.com/max/276/1*owHS0fPTZhEUFXMTyKc3KA.png 276w, https://miro.medium.com/max/364/1*owHS0fPTZhEUFXMTyKc3KA.png 364w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft Lists Edit in grid view</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>2. Double click the field you want to edit.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Edit in grid view" width="659" height="385" src="https://miro.medium.com/max/659/1*bEy71cm2qeS5qebSXwKT_Q.png" sizes="659px" srcSet="https://miro.medium.com/max/276/1*bEy71cm2qeS5qebSXwKT_Q.png 276w, https://miro.medium.com/max/552/1*bEy71cm2qeS5qebSXwKT_Q.png 552w, https://miro.medium.com/max/640/1*bEy71cm2qeS5qebSXwKT_Q.png 640w, https://miro.medium.com/max/659/1*bEy71cm2qeS5qebSXwKT_Q.png 659w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Edit in grid view</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>7. Share a List With Coworkers (and Remove Permissions)</Typography>
                      <Typography variant="body1" gutterBottom>One of the great things about Microsoft 365 is everything is built around working together. Microsoft Lists is no different. We can easily share a list with a coworker to begin collaborating.</Typography>
                      <Typography variant="body1" gutterBottom>1. Click <strong>Share</strong></Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Share a list" src="https://miro.medium.com/max/952/1*2MBRlscjJY8BDzQIFdMCOw.png" width="476" height="349" /></div>
                        <figcaption>Share a list</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>2. Fill out the form entering the <strong>person’s name</strong>, the <strong>permissions level</strong>, and <strong>write a message</strong> to send to the people you’re inviting to collaborate. Then click <strong>Grant access</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Share a list" width="330" height="370" src="https://miro.medium.com/max/330/1*R9cmDkQAXQ_VHkvl1WYKEg.png" sizes="330px" srcSet="https://miro.medium.com/max/276/1*R9cmDkQAXQ_VHkvl1WYKEg.png 276w, https://miro.medium.com/max/330/1*R9cmDkQAXQ_VHkvl1WYKEg.png 330w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Grant access to a list</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>The user will then have permission to open your lists and will receive an email informing them of their new access!</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists sharing email" width="654" height="574" src="https://miro.medium.com/max/654/1*NyheFo68TVPDxBMhdpVT4A.png" sizes="654px" srcSet="https://miro.medium.com/max/276/1*NyheFo68TVPDxBMhdpVT4A.png 276w, https://miro.medium.com/max/552/1*NyheFo68TVPDxBMhdpVT4A.png 552w, https://miro.medium.com/max/640/1*NyheFo68TVPDxBMhdpVT4A.png 640w, https://miro.medium.com/max/654/1*NyheFo68TVPDxBMhdpVT4A.png 654w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>List email</figcaption>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>Removing permissions is just as simple</Typography>
                      <Typography variant="body1" gutterBottom>1. Click the <strong>I</strong> in the top right corner.</Typography>
                      <Typography variant="body1" gutterBottom>2. Click <strong>Manage access</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Manage access" width="256" height="180" src="https://miro.medium.com/max/256/1*2m66qe6aimFI6nnmPUnj1w.png" sizes="256px" srcSet="" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Manage access</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>3. Click the <strong>down arrow</strong> next to the user you want to stop sharing with.</Typography>
                      <Typography variant="body1" gutterBottom>4. Click <strong>Stop sharing</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists How to stop sharing a list" width="270" height="303" src="https://miro.medium.com/max/270/1*o-ytseYkRC7BZF9geyN-6w.png" sizes="270px" srcSet="" />
                            </div>
                          </div>
                        </div>
                        <figcaption>How to stop sharing a list</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>8. How to Set Up Conditional Formatting</Typography>
                      <Typography variant="body1" gutterBottom>Now we may want to format a column to show when an article is about to be due as well as when an article is passed due. Let’s set up conditional access on the Content Title column.</Typography>
                      <Typography variant="body1" gutterBottom>1. Click <strong>Content title</strong> &gt; <strong>Column settings</strong> &gt; <strong>Format this column</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Format a column with conditional access" src="https://miro.medium.com/max/810/1*1atFPK-wl4k5H0NxAe4V2Q.png" width="405" height="450" /></div>
                        <figcaption>Format a column with conditional access</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>2. Click <strong>Conditional formatting</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Conditional Access formatting" width="307" height="313" src="https://miro.medium.com/max/307/1*EsDwiwpzFVnmZMqWKMtU6Q.png" sizes="307px" srcSet="https://miro.medium.com/max/276/1*EsDwiwpzFVnmZMqWKMtU6Q.png 276w, https://miro.medium.com/max/307/1*EsDwiwpzFVnmZMqWKMtU6Q.png 307w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Conditional Access formatting</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>3. Click <strong>Add rule</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Conditional formatting add a rule" width="302" height="206" src="https://miro.medium.com/max/302/1*-MOEK8ZmjfqzV-sBEg0KSQ.png" sizes="302px" srcSet="https://miro.medium.com/max/276/1*-MOEK8ZmjfqzV-sBEg0KSQ.png 276w, https://miro.medium.com/max/302/1*-MOEK8ZmjfqzV-sBEg0KSQ.png 302w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Conditional formatting add a rule</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>4. Click <strong>Choose a column</strong> and select <strong>Draft due by</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>5. Click <strong>Choose a comparison</strong> and select <strong>is on or before</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>6. Click <strong>Choose or type a value</strong> and select <strong>Today</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>7. Click <strong>Add condition</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>8. Click <strong>Choose a column</strong> and select <strong>Status</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>9. Click <strong>Choose a comparison</strong> and select <strong>is not equal to</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>10. Click <strong>Choose or type a value</strong> and select <strong>Draft needs approval</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>11. Repeat steps 7 through 10 and add <strong>status is not equal to Ready to publish</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>12. Repeat steps 7 through 10 and add <strong>status is not equal to Published</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>13. Click the <strong>A with a pencil</strong> under <strong>Show list item as</strong> and click a <strong>red </strong>color.</Typography>
                      <Typography variant="body1" gutterBottom>14. Click <strong>Save</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Conditional Formatting add a rule" width="257" height="849" src="https://miro.medium.com/max/257/1*cXKoushoW9bWC_FrrZvRLA.png" sizes="257px" srcSet="" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Conditional Formatting add a rule</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>9. How to Add Column Totals</Typography>
                      <Typography variant="body1" gutterBottom>We don’t really need a column total in our content scheduler but let’s total the number of items in our list.</Typography>
                      <ol>
                        <li>Click the <strong>Content title</strong> column &gt; <strong>Totals </strong>&gt; <strong>Count</strong>.</li>
                      </ol>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists How to count items in the list" width="329" height="277" src="https://miro.medium.com/max/329/1*zl1Jck6Wv_P3YAKTcuU_dg.png" sizes="329px" srcSet="https://miro.medium.com/max/276/1*zl1Jck6Wv_P3YAKTcuU_dg.png 276w, https://miro.medium.com/max/329/1*zl1Jck6Wv_P3YAKTcuU_dg.png 329w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Count items in the list</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>10. Visualizing Data in Card Views and Excel</Typography>
                      <Typography variant="body1" gutterBottom>Let’s face it, grids are boring. Cards can be a lot easier on the eyes especially if your items have images. Let’s convert the list view to the grid view.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists card view" src="https://miro.medium.com/max/1400/1*pEoyPYIfU8X6b2OuaKeMjQ.png" width="700" height="499" /></div>
                        </div>
                        <figcaption>Card view</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>1. Click <strong>All Items</strong> in the top right corner.</Typography>
                      <Typography variant="body1" gutterBottom>2. Click <strong>Gallery</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists How to enable card view" width="177" height="365" src="https://miro.medium.com/max/177/1*b_xB4_9UG2PAedf5GkpTYw.png" sizes="177px" srcSet="" />
                            </div>
                          </div>
                        </div>
                        <figcaption>How to enable card view</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Or you may want to export the data to view it in Excel. It’s no problem for Microsoft Lists!</Typography>
                      <Typography variant="body1" gutterBottom>1. Click <strong>Export to Excel</strong> in the top bar.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Export to Excel" width="622" height="143" src="https://miro.medium.com/max/622/1*tPEuRaeMvGmNfKkQCKxROA.png" sizes="622px" srcSet="https://miro.medium.com/max/276/1*tPEuRaeMvGmNfKkQCKxROA.png 276w, https://miro.medium.com/max/552/1*tPEuRaeMvGmNfKkQCKxROA.png 552w, https://miro.medium.com/max/622/1*tPEuRaeMvGmNfKkQCKxROA.png 622w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Export to Excel</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>2. Save the IQY file to your Downloads folder.</Typography>
                      <Typography variant="body1" gutterBottom>3. Open the IQY file you previously downloaded by double-clicking it.</Typography>
                      <Typography variant="body1" gutterBottom>4. In the Security Notice, click <strong>Enable</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Excel Bypass security" width="377" height="204" src="https://miro.medium.com/max/377/1*mcVCxVIXngqojpUk5KPM_A.png" sizes="377px" srcSet="https://miro.medium.com/max/276/1*mcVCxVIXngqojpUk5KPM_A.png 276w, https://miro.medium.com/max/377/1*mcVCxVIXngqojpUk5KPM_A.png 377w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Bypass security</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>5. In the Import Data window click <strong>OK</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Excel Import data from Microsoft Lists" width="310" height="286" src="https://miro.medium.com/max/310/1*beb5C4bQFeQzYlDqS1rUBg.png" sizes="310px" srcSet="https://miro.medium.com/max/276/1*beb5C4bQFeQzYlDqS1rUBg.png 276w, https://miro.medium.com/max/310/1*beb5C4bQFeQzYlDqS1rUBg.png 310w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Import data</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Now you can view your data in Excel. Quick note, it isn’t syncing back to your lists. Any changes you make in Excel won’t be saved back to your list.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft List in Excel" width="700" height="60" src="https://miro.medium.com/max/700/1*pvRVpZZA27dUa860h_w9Zw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*pvRVpZZA27dUa860h_w9Zw.png 276w, https://miro.medium.com/max/552/1*pvRVpZZA27dUa860h_w9Zw.png 552w, https://miro.medium.com/max/640/1*pvRVpZZA27dUa860h_w9Zw.png 640w, https://miro.medium.com/max/700/1*pvRVpZZA27dUa860h_w9Zw.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft List in Excel</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>11. Adding Filters and Permissions</Typography>
                      <Typography variant="body1" gutterBottom>Once you start using Microsoft Lists they can grow pretty large. One of the great things about Lists is the ability to filter and find exactly what you’re looking for.</Typography>
                      <Typography variant="body1" gutterBottom>1. Click <strong>All Items</strong> in the top right corner.</Typography>
                      <Typography variant="body1" gutterBottom>2. Click one of the built-in filters, for example, <strong>Grouped by content status</strong> or <strong>Unpublished content</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Grouping Microsoft Lists" src="https://miro.medium.com/max/340/1*e24pN-hxnmjpeaDq4R52Ww.png" width="170" height="324" /></div>
                        <figcaption>Grouping Microsoft Lists</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>But wait there’s more! You can customize the lists further using filters.</Typography>
                      <Typography variant="body1" gutterBottom>1. Click the funnel button in the top right corner.</Typography>
                      <Typography variant="body1" gutterBottom>2. Select one or more of the filters.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Filter Microsoft Lists" width="261" height="580" src="https://miro.medium.com/max/261/1*fgrKxNPggf5NaxdIXYf9CQ.png" sizes="261px" srcSet="" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Filter Microsoft Lists</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>12. Adding &amp; Removing Alerts</Typography>
                      <Typography variant="body1" gutterBottom>Alerting is a great way to stay up-to-date when your list or list items change.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>To receive an email when an item is added to the list</Typography>
                      <Typography variant="body1" gutterBottom>1. Click the <strong>ellipsis (…)</strong> in the toolbar at the top of the list.</Typography>
                      <Typography variant="body1" gutterBottom>2. Click <strong>Alert me</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Enable alerts in Microsoft Lists" width="700" height="371" src="https://miro.medium.com/max/700/1*UiqU2hYEluxVntZtjbnrlg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*UiqU2hYEluxVntZtjbnrlg.png 276w, https://miro.medium.com/max/552/1*UiqU2hYEluxVntZtjbnrlg.png 552w, https://miro.medium.com/max/640/1*UiqU2hYEluxVntZtjbnrlg.png 640w, https://miro.medium.com/max/700/1*UiqU2hYEluxVntZtjbnrlg.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Enable alerts in Microsoft Lists</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>3. Select <strong>New items are added</strong> under the Change Type section. Then click <strong>OK</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Alert me when items change in Microsoft Lists" width="700" height="640" src="https://miro.medium.com/max/700/1*SYfPc7aClpH13-eaYX5QUw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*SYfPc7aClpH13-eaYX5QUw.png 276w, https://miro.medium.com/max/552/1*SYfPc7aClpH13-eaYX5QUw.png 552w, https://miro.medium.com/max/640/1*SYfPc7aClpH13-eaYX5QUw.png 640w, https://miro.medium.com/max/700/1*SYfPc7aClpH13-eaYX5QUw.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Alert me when items change</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>To test your alert add an item to the list and check your email.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Alert email" width="700" height="638" src="https://miro.medium.com/max/700/1*-wCrNHySplp4OK4gkie9EA.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*-wCrNHySplp4OK4gkie9EA.png 276w, https://miro.medium.com/max/552/1*-wCrNHySplp4OK4gkie9EA.png 552w, https://miro.medium.com/max/640/1*-wCrNHySplp4OK4gkie9EA.png 640w, https://miro.medium.com/max/700/1*-wCrNHySplp4OK4gkie9EA.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Alert email</figcaption>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>To receive an alert on a particular item change</Typography>
                      <Typography variant="body1" gutterBottom>1. Right-click the item you want to be alert on.</Typography>
                      <Typography variant="body1" gutterBottom>2. Click <strong>Alert me</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Enable alert for a single item" width="351" height="410" src="https://miro.medium.com/max/351/1*oT0D66DED5lcZ0VMiqwabg.png" sizes="351px" srcSet="https://miro.medium.com/max/276/1*oT0D66DED5lcZ0VMiqwabg.png 276w, https://miro.medium.com/max/351/1*oT0D66DED5lcZ0VMiqwabg.png 351w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Enable alert for a single item</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>3. Update the alerting then click <strong>OK</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Alert me when an item changes" width="700" height="543" src="https://miro.medium.com/max/700/1*4cPh0Vn19liPFT3RTYxIrg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*4cPh0Vn19liPFT3RTYxIrg.png 276w, https://miro.medium.com/max/552/1*4cPh0Vn19liPFT3RTYxIrg.png 552w, https://miro.medium.com/max/640/1*4cPh0Vn19liPFT3RTYxIrg.png 640w, https://miro.medium.com/max/700/1*4cPh0Vn19liPFT3RTYxIrg.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Alert me when an item changes</figcaption>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>Remove alerts</Typography>
                      <Typography variant="body1" gutterBottom>1. Click the <strong>ellipsis (…)</strong> in the toolbar at the top of the list.</Typography>
                      <Typography variant="body1" gutterBottom>2. Click <strong>Manage my alerts</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Disable Alerts" width="625" height="174" src="https://miro.medium.com/max/625/1*uhsLC1uIg1ZvSan_GCrDWw.png" sizes="625px" srcSet="https://miro.medium.com/max/276/1*uhsLC1uIg1ZvSan_GCrDWw.png 276w, https://miro.medium.com/max/552/1*uhsLC1uIg1ZvSan_GCrDWw.png 552w, https://miro.medium.com/max/625/1*uhsLC1uIg1ZvSan_GCrDWw.png 625w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Disable Alerts</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>3. Click the alert you want to delete.</Typography>
                      <Typography variant="body1" gutterBottom>4. Click <strong>Delete Selected Alerts</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists delete an alert" width="322" height="278" src="https://miro.medium.com/max/322/1*fyBht2SZuVfgnBbz6INaQg.png" sizes="322px" srcSet="https://miro.medium.com/max/276/1*fyBht2SZuVfgnBbz6INaQg.png 276w, https://miro.medium.com/max/322/1*fyBht2SZuVfgnBbz6INaQg.png 322w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Delete an alert</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="h4" component="h2" gutterBottom>13. Adding Alerts to Teams</Typography>
                      <Typography variant="body1" gutterBottom>Now we want to receive a Teams message whenever a new item is added to the list.</Typography>
                      <Typography variant="body1" gutterBottom>1. Click <strong>Automate </strong>in the top bar.</Typography>
                      <Typography variant="body1" gutterBottom>2. Click <strong>Power Automate</strong>.</Typography>
                      <Typography variant="body1" gutterBottom>3. Click <strong>See your flows</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Lists Power Automate Create a flow" src="https://miro.medium.com/max/1350/1*c0CyR9frWElkgX7V1i1ZBw.png" width="675" height="136" /></div>
                        <figcaption>Create a flow</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>4. Click <strong>New </strong>in the top command bar. Then click <strong>Automated— from blank</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Power Automate new Automated from blank" width="242" height="296" src="https://miro.medium.com/max/242/1*aAO8pynNzLgZYeUu9k-XNA.png" sizes="242px" srcSet="" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Power Automate new Automated from blank</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>5. Name the flow “Send a Teams message when an item is created.” Then click <strong>When an item is created</strong> &gt; <strong>Create</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Power Automate When an item is created in Microsoft Lists" width="700" height="447" src="https://miro.medium.com/max/700/1*MEOS6ht-zc6nyWpk9hA1Ww.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*MEOS6ht-zc6nyWpk9hA1Ww.png 276w, https://miro.medium.com/max/552/1*MEOS6ht-zc6nyWpk9hA1Ww.png 552w, https://miro.medium.com/max/640/1*MEOS6ht-zc6nyWpk9hA1Ww.png 640w, https://miro.medium.com/max/700/1*MEOS6ht-zc6nyWpk9hA1Ww.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Power Automate When an item is created</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>6. Get your OneDrive URL by clicking the <strong>waffle </strong>in the top left corner. Then click the <strong>ellipsis (…)</strong> next to OneDrive. Finally, click <strong>Open in new tab</strong>. From the OneDrive tab copy the URL.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Open OneDrive in new tab" width="455" height="346" src="https://miro.medium.com/max/455/1*ImqfAUHf6B2GHWsuLSB2HQ.png" sizes="455px" srcSet="https://miro.medium.com/max/276/1*ImqfAUHf6B2GHWsuLSB2HQ.png 276w, https://miro.medium.com/max/455/1*ImqfAUHf6B2GHWsuLSB2HQ.png 455w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Open OneDrive in a new tab</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>7. Paste the OneDrive URL into the <strong>Site Address field</strong>. Select your list in the <strong>List Name</strong> field. Then click the <strong>New step</strong> button.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Power Automate filled out when an item is created" width="610" height="314" src="https://miro.medium.com/max/610/1*YNhlcKeLCeuen9LS2x0SJA.png" sizes="610px" srcSet="https://miro.medium.com/max/276/1*YNhlcKeLCeuen9LS2x0SJA.png 276w, https://miro.medium.com/max/552/1*YNhlcKeLCeuen9LS2x0SJA.png 552w, https://miro.medium.com/max/610/1*YNhlcKeLCeuen9LS2x0SJA.png 610w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Power Automate filled out when an item is created</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>8. In the choose an action window click <strong>Microsoft Teams</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Power Automate Choose an action — Microsoft Teams" width="606" height="275" src="https://miro.medium.com/max/606/1*quSsRp5vadj_vDQ8pHPxaw.png" sizes="606px" srcSet="https://miro.medium.com/max/276/1*quSsRp5vadj_vDQ8pHPxaw.png 276w, https://miro.medium.com/max/552/1*quSsRp5vadj_vDQ8pHPxaw.png 552w, https://miro.medium.com/max/606/1*quSsRp5vadj_vDQ8pHPxaw.png 606w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Power Automate Choose an action — Microsoft Teams</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>9. In the Microsoft Teams window click <strong>Post a message (V3) (preview)</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Power Automate Action Post a message" width="608" height="673" src="https://miro.medium.com/max/608/1*Wso322IY5GW1guiQ2LqTBA.png" sizes="608px" srcSet="https://miro.medium.com/max/276/1*Wso322IY5GW1guiQ2LqTBA.png 276w, https://miro.medium.com/max/552/1*Wso322IY5GW1guiQ2LqTBA.png 552w, https://miro.medium.com/max/608/1*Wso322IY5GW1guiQ2LqTBA.png 608w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Power Automate Action Post a message</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>10. In the Post a message (V3) (Preview) select the team, channel then enter your message.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Power Automate Post a message" width="610" height="350" src="https://miro.medium.com/max/610/1*5INHnS161fU5msT-6gdAog.png" sizes="610px" srcSet="https://miro.medium.com/max/276/1*5INHnS161fU5msT-6gdAog.png 276w, https://miro.medium.com/max/552/1*5INHnS161fU5msT-6gdAog.png 552w, https://miro.medium.com/max/610/1*5INHnS161fU5msT-6gdAog.png 610w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Power Automate Post a message</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>11. Click <strong>Save</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div>
                          <div>
                            <div>
                              <div />
                              <img style={{maxWidth: '100%', height: 'auto'}} alt="Power Automate Save circled" width="612" height="544" src="https://miro.medium.com/max/612/1*-93JAtYLrdPBjvazr3imQA.png" sizes="612px" srcSet="https://miro.medium.com/max/276/1*-93JAtYLrdPBjvazr3imQA.png 276w, https://miro.medium.com/max/552/1*-93JAtYLrdPBjvazr3imQA.png 552w, https://miro.medium.com/max/612/1*-93JAtYLrdPBjvazr3imQA.png 612w" />
                            </div>
                          </div>
                        </div>
                        <figcaption>Power Automate Save circled</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Test your new automated message by creating a new item in your list.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div>
                            <div>
                              <div>
                                <div />
                                <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams automated chat message from Microsoft Lists" width="700" height="190" src="https://miro.medium.com/max/700/1*Dv3D1DjxhWlS9zmaEjlBag.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*Dv3D1DjxhWlS9zmaEjlBag.png 276w, https://miro.medium.com/max/552/1*Dv3D1DjxhWlS9zmaEjlBag.png 552w, https://miro.medium.com/max/640/1*Dv3D1DjxhWlS9zmaEjlBag.png 640w, https://miro.medium.com/max/700/1*Dv3D1DjxhWlS9zmaEjlBag.png 700w" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption>Microsoft Teams automated chat message</figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="body1" gutterBottom>That should give you an idea of what you can do with Microsoft Lists!</Typography>
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
