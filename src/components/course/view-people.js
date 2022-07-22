import {h, Component} from 'preact'
import Grid from '@mui/material/Grid'
import getAllDocs from '../../components/firebase/get-all-docs'

class ViewPeople extends Component {
  constructor(props) {
    super(props)
    this.setPeople = this.setPeople.bind(this)

    this.state ={
      students: [],
      teachers: []
    }
  }

  setPeople(people) {
    const students = people.filter((person) => person.role === 'student')
    const teachers = people.filter((person) => person.role === 'admin')

    this.setState({
      students,
      teachers
    })
  }

  componentDidMount() {
    getAllDocs(`courses/${this.props.courseId}/users`).then(this.setPeople)
  }

  render() {
    return (
      <div>
        <h1>Teachers</h1>
        { this.state.teachers.map((teacher, idx) => (
          <Grid item key={idx}>
            <p>{teacher.id}</p>
          </Grid>
        ))}
        <h1>Students</h1>
        { this.state.students.map((student, idx) => (
          <Grid item key={idx}>
            <p>{student.id}</p>
          </Grid>
        ))}
      </div>
    )
  }
}

export default ViewPeople
