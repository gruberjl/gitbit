import { h, Component } from "preact"
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'

import {getDoc} from '../../components/firebase/get-doc'
import saveDoc from '../../components/firebase/save-doc'

const formStyles = {
  marginBottom: '16px',
}

const emailStyles = {
  marginBottom: '12px'
}

class EditCourseTab extends Component {
  constructor(props) {
    super(props)
    this.setCourse = this.setCourse.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.submit = this.submit.bind(this)

    this.state ={
      title: '',
      description: '',
      audience: '',
      err: '',
      courseId: props.courseId,
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
      <div>
        <h1>Edit Course</h1>
        <Stack spacing={2}>
          <TextField name='title' label="Course title" variant="standard" value={this.state.title} onChange={this.handleFieldChange} />
          <TextField name='description' multiline label="Describe the course" variant="standard" value={this.state.description} onChange={this.handleFieldChange} />
          <TextField name='audience' label="Who's the course for?" variant="standard" value={this.state.audience} onChange={this.handleFieldChange} />

          <Alert severity="error" sx={{ display: (this.state.err === '' ? 'none' : 'flex') }}>
            {this.state.err}
          </Alert>

          <Alert severity='success' sx={{ display: (this.state.success === true ? 'flex' : 'none') }} className={this.state.success === false ? 'd-none' : ''}>
            Saved successully
          </Alert>

          <Button variant="contained" type="button" onClick={this.submit}>
            Submit
          </Button>
        </Stack>
      </div>
    )
  }
}

export default EditCourseTab
