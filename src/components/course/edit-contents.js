import {h, Component} from 'preact'
import Button from '@mui/material/Button'
import getAllDocs from '../firebase/get-all-docs'
import {getDoc} from '../firebase/get-doc'
import saveDoc from '../firebase/save-doc'
import deleteDoc from '../firebase/delete-doc'
import AddSection from './add-section'
import EditSection from './edit-section'
import shortid from 'shortid'
import Snackbar from '@mui/material/Snackbar'
import debounce from 'debounce'

const flexStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const reOrder = (arr) => {
  return arr.map((itm, idx) => {
    itm.order = idx
    return itm
  })
}

const resort = (arr) => {
  return arr.sort((firstEl, secondEl) => {
    if (firstEl.order < secondEl.order)
      return -1
    if (firstEl.order > secondEl.order)
      return 1

    return 0
  })
}

const resortContent = (contents, contentOrder) => {
  return contents.sort((a, b) => {
    return contentOrder.indexOf(a.id) - contentOrder.indexOf(b.id)
  })
}

class EditContents extends Component {
  constructor(props) {
    super(props)
    this.setContents = this.setContents.bind(this)
    this.setCourse = this.setCourse.bind(this)
    this.addSection = this.addSection.bind(this)
    this.updateSection = this.updateSection.bind(this)
    this.removeSection = this.removeSection.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.addContent = this.addContent.bind(this)
    this.updateContent = this.updateContent.bind(this)
    this.removeContent = this.removeContent.bind(this)

    this.debounceSaveCourse = debounce(this.saveCourse, 5000)

    this.state ={
      contents: [],
      course: {
        sections: [],
        contentOrder: []
      },
      alert: ''
    }
  }

  componentDidMount() {
    getDoc(`courses`, this.props.courseId).then(this.setCourse)
  }

  setContents(contents) {
    this.setState({
      contents: resortContent(contents, this.state.course.contentOrder)
    })
  }

  setCourse(course) {
    course.sections = resort(course.sections)
    this.setState({course})
    getAllDocs(`courses/${course.id}/contents`).then(this.setContents)
  }

  allowDrop(ev) {
    ev.preventDefault()
  }

  onDrop(ev) {
    ev.preventDefault()
    const type = ev.dataTransfer.getData('type')
    const sectionId = ev.dataTransfer.getData('sectionId')
    const contentId = ev.dataTransfer.getData('contentId')
    const course = JSON.parse(JSON.stringify(this.state.course))

    if (type === 'section') {
      const sections = course.sections
      const oldPosition = sections.map((section) => section.id).indexOf(sectionId)
      const newPosition = ev.target.getAttribute('data-section-idx')
      sections.splice(newPosition, 0, sections.splice(oldPosition, 1)[0])
      course.sections = reOrder(sections)
      this.setState({course})
    } else {
      const movedContent = this.state.contents.find((content) => content.id === contentId)
      const newSectionId = this.state.course.sections[ev.target.getAttribute('data-section-idx')].id

      if (movedContent.sectionId !== newSectionId) {
        movedContent.sectionId = newSectionId
        this.updateContent(movedContent)
        const newContents = this.state.contents.map((content) => {
          if (content.id === movedContent.id)
            return movedContent

          return content
        })

        this.setState({contents: newContents})
      }

      const contents = JSON.parse(JSON.stringify(this.state.contents))
      const oldPosition = course.contentOrder.indexOf(contentId)
      const newPositionId = ev.target.getAttribute('data-content-id')
      if (newPositionId !== null) {
        const newPosition = course.contentOrder.indexOf(newPositionId)
        course.contentOrder.splice(newPosition, 0, course.contentOrder.splice(oldPosition, 1)[0])

        this.setState({
          course,
          contents: resortContent(contents, course.contentOrder)
        })

        this.saveCourse()
      }
    }
  }

  addSection(idx) {
    return () => {
      const course = JSON.parse(JSON.stringify(this.state.course))

      course.sections.splice(idx, 0, {
        id: shortid.generate(),
        title: '',
        order: course.sections.length
      })

      this.setState({course})
      saveDoc('courses', course).catch((e) => console.log(e))
    }
  }

  updateSection(sectionId) {
    return (event) => {
      const value = event.target.value
      const sections = this.state.course.sections.map((section) => {
        if (section.id === sectionId)
          section.title = value

        return section
      })

      const course = this.state.course
      course.sections = sections
      this.setState({course})
      this.debounceSaveCourse()
    }
  }

  removeSection(section) {
    return () => {
      const sections = this.state.course.sections.filter((filteredSection) => section.id !== filteredSection.id)
      const course = this.state.course
      course.sections = reOrder(sections)
      this.setState({course})
    }
  }

  addContent(content, afterContentId) {
    saveDoc(`courses/${this.state.course.id}/contents`, content).then(() => {
      const contents = JSON.parse(JSON.stringify(this.state.contents))
      contents.push(content)

      const course = JSON.parse(JSON.stringify(this.state.course))
      if (afterContentId) {
        const position = course.contentOrder.indexOf(afterContentId)+1
        course.contentOrder.splice(position, 0, content.id)
      } else
        course.contentOrder.push(content.id)


      this.setState({
        alert: 'content saved',
        contents,
        course
      })

      this.saveCourse()
      setTimeout(() => {
        this.setState({alert: ''})
      }, 3000)

      window.location.href = `/course/edit-content?courseId=${this.state.course.id}&contentId=${content.id}`
    }).catch((err) => {
      this.setState({alert: err})
      setTimeout(() => {
        this.setState({alert: ''})
      }, 3000)
    })
  }

  updateContent(content) {
    saveDoc(`courses/${this.state.course.id}/contents`, content).then(() => {
      this.setState({
        alert: 'content saved'
      })
    }).catch((err) => {
      this.setState({alert: err})
    })

    setTimeout(() => {
      this.setState({alert: ''})
    }, 3000)
  }

  removeContent(contentId) {
    return () => {
      deleteDoc(`courses/${this.state.course.id}/contents`, contentId).then(() => {
        const contents = JSON.parse(JSON.stringify(this.state.contents)).filter((filteredContent) => contentId !== filteredContent.id)

        const course = this.state.course
        course.contentOrder = course.contentOrder.filter((id) => id !== contentId)

        this.setState({
          alert: 'content deleted',
          contents,
          course
        })

        this.saveCourse()

        setTimeout(() => {
          this.setState({alert: ''})
        }, 3000)
      }).catch((err) => {
        this.setState({
          alert: err
        })
        setTimeout(() => {
          this.setState({alert: ''})
        }, 3000)
      })
    }
  }

  saveCourse() {
    const course = this.state.course

    saveDoc('courses', course).then(() => {
      this.setState({alert: 'course saved'})
      setTimeout(() => {
        this.setState({alert: ''})
      }, 3000)
    }).catch((err) => {
      this.setState({alert: err})
      setTimeout(() => {
        this.setState({alert: ''})
      }, 3000)
    })
  }

  closeAlert() {
    this.setState({alert: ''})
  }

  render() {
    return (
      <div>
        <div style={flexStyle}>
          <h1>Edit Contents</h1>
          <Button onClick={this.saveCourse} variant="contained">Save</Button>
        </div>
        { this.state.course.sections.map((section, idx) => (
          <div key={idx} data-section-idx={idx}>
            <AddSection addSection={this.addSection(idx)} hidden={true} allowDrop={this.allowDrop} onDrop={this.onDrop} idx={idx} />
            <EditSection section={section} updateSection={this.updateSection(section.id)} removeSection={this.removeSection} allowDrop={this.allowDrop} onDrop={this.onDrop} idx={idx} courseId={this.state.course.id} contents={this.state.contents} addContent={this.addContent} removeContent={this.removeContent} />
          </div>
        ))}

        <AddSection addSection={this.addSection(this.state.course.sections.length)} allowDrop={this.allowDrop} onDrop={this.onDrop} idx={this.state.course.sections.length} />
        <Snackbar open={this.state.alert !== ''} autoHideDuration={3000} onClose={this.closeAlert} message={this.state.alert} />
      </div>
    )
  }
}

export default EditContents
