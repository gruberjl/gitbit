import * as React from "react"
import Page from '../../components/page'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import {getDoc, saveDoc} from '../../components/firebase'
import ViewPeople from '../../components/course/view-people'
import EditCourseTab from '../../components/course/edit-course'
import EditContents from '../../components/course/edit-contents'

class EditCourse extends React.Component {
  constructor(props) {
    super(props)
    this.setCourse = this.setCourse.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.submit = this.submit.bind(this)

    const params = new URLSearchParams(props.location.search)

    this.state ={
      title: '',
      description: '',
      audience: '',
      err: '',
      courseId: params.get('courseId'),
      success: false
    }
  }

  setCourse(course) {
    this.setState({
      title: course.title,
      description: course.description,
      audience: course.audience
    })
  }

  handleFieldChange(event) {
    const value = event.target.value;
    const name = event.target.name
    this.setState({
      [name]:value
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
    }).catch(err => {
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
            <Row>
              <Col>
                <Tabs defaultActiveKey="edit" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="edit" title="Edit Course">
                    <EditCourseTab courseId={this.state.courseId} />
                  </Tab>
                  <Tab eventKey="people" title="View People">
                    <ViewPeople courseId={this.state.courseId} />
                  </Tab>
                  <Tab eventKey="contents" title="Edit Contents">
                    <EditContents courseId={this.state.courseId} />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </main>
      </Page>
    )
  }
}

export default EditCourse
