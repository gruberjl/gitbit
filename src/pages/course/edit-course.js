import {h, Component} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import {getDoc} from '../../components/firebase/get-doc'
import saveDoc from '../../components/firebase/save-doc'
import ViewPeople from '../../components/course/view-people'
import EditCourseTab from '../../components/course/edit-course'
import EditContents from '../../components/course/edit-contents'

const isBrowser = () => typeof window !== 'undefined'

class EditCourse extends Component {
  constructor(props) {
    super(props)
    this.setCourse = this.setCourse.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.submit = this.submit.bind(this)
    this.setTab = this.setTab.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state ={
      title: '',
      description: '',
      audience: '',
      err: '',
      courseId: params.get('courseId'),
      success: false,
      tab: 0
    }
  }

  setTab(e, tab) {
    this.setState({tab})
  }

  setCourse(course) {
    this.setState({
      title: course.title,
      description: course.description,
      audience: course.audience
    })
  }

  handleFieldChange(event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  submit() {
    const data = {
      title: this.state.title,
      description: this.state.description,
      audience: this.state.audience,
      id: this.state.courseId
    }

    saveDoc('courses', data).then(() => {
      this.setState({success: true})
    }).catch((err) => {
      this.setState({err})
    })
  }

  componentDidMount() {
    getDoc('courses', this.state.courseId).then(this.setCourse)
  }

  render() {
    return (
      <Page title={'Edit Course'}>
        <main>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Box sx={{width: '100%'}}>
                  <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={this.state.tab} onChange={this.setTab} aria-label="navigation">
                      <Tab label="Edit Course" />
                      <Tab label="View People" />
                      <Tab label="Edit Contents" />
                    </Tabs>
                  </Box>
                  <div role="tabpanel" hidden={this.state.tab !== 0}>
                    <EditCourseTab courseId={this.state.courseId} />
                  </div>
                  <div role="tabpanel" hidden={this.state.tab !== 1}>
                    <ViewPeople courseId={this.state.courseId} />
                  </div>
                  <div role="tabpanel" hidden={this.state.tab !== 2}>
                    <EditContents courseId={this.state.courseId} />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

export default EditCourse
