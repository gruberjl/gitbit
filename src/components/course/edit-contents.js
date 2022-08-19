import {h, Component, createRef} from 'preact'
import Button from '@mui/material/Button'
import getAllDocs from '../firebase/get-all-docs'
import {getDoc} from '../firebase/get-doc'
import saveDoc from '../firebase/save-doc'
import deleteDoc from '../firebase/delete-doc'
import AddSection from './add-section'
import EditSection from './edit-section'
import shortid from 'shortid'
import Snackbar from '@mui/material/Snackbar'
import Sortable from 'sortablejs'

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
  section = createRef()

  constructor(props) {
    super(props)
    this.setContents = this.setContents.bind(this)
    this.setCourse = this.setCourse.bind(this)
    this.addSection = this.addSection.bind(this)
    this.updateSection = this.updateSection.bind(this)
    this.removeSection = this.removeSection.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
    this.onContentSortChange = this.onContentSortChange.bind(this)
    this.onSectionSortChange = this.onSectionSortChange.bind(this)
    this.addContent = this.addContent.bind(this)
    this.updateContent = this.updateContent.bind(this)
    this.removeContent = this.removeContent.bind(this)
    this.closeAlert = this.closeAlert.bind(this)

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

    setTimeout(() => {
      Sortable.create(this.section.current, {
        handle: '.section-handle',
        draggable: '.section',
        onEnd: this.onSectionSortChange
      })
    }, 0)
  }

  setCourse(course) {
    course.sections = resort(course.sections)
    this.setState({course})
    getAllDocs(`courses/${course.id}/contents`).then(this.setContents)
  }

  onContentSortChange(ev) {
    const oldSectionId = ev.from.dataset.section
    const newSectionId = ev.to.dataset.section
    const newIdx = ev.newDraggableIndex

    const content = this.state.contents.find((content) => content.id === ev.item.dataset.contentId)
    if (!content) {
      this.setState({alert: `Could not find content ${ev.item.dataset.contentId}`})
      return
    }

    if (oldSectionId !== newSectionId) {
      content.sectionId = newSectionId
      this.updateContent(content)
    }

    const idxOfFirstContentInSection = this.state.course.contentOrder.findIndex((id) => {
      const c = this.state.contents.find((co) => co.id === id)
      if (c.sectionId === newSectionId)
        return true

      return false
    })

    if (idxOfFirstContentInSection === -1) {
      this.setState({alert: `couldn't find idxOfFirstContentInSection for ${content.id}`})
      return
    }

    const newPosition = idxOfFirstContentInSection + newIdx
    const course = JSON.parse(JSON.stringify(this.state.course))
    course.contentOrder = course.contentOrder.reduce((arr, current, idx) => {
      if (idx === newPosition)
        arr.push(content.id)


      if (current !== content.id)
        arr.push(current)

      return arr
    }, [])

    this.setState({
      course,
      contents: resortContent(this.state.contents, course.contentOrder)
    })

    this.saveCourse(course)
  }

  onSectionSortChange(ev) {
    const sections = JSON.parse(JSON.stringify(this.state.course.sections))
    const oldIdx = ev.oldDraggableIndex
    const newIdx = ev.newDraggableIndex

    const newSections = sections.map((section, idx) => {
      let order = idx

      if (idx == oldIdx)
        order = newIdx

      if (idx > oldIdx && idx <= newIdx)
        order--

      if (idx < oldIdx && idx >= newIdx)
        order++

      section.order = order

      return section
    })

    const course = JSON.parse(JSON.stringify(this.state.course))
    course.sections = resort(newSections)
    const contentOrder = JSON.parse(JSON.stringify(course.contentOrder))
    let failed = false

    contentOrder.sort((a, b) => {
      const contentA = this.state.contents.find((content) => content.id === a)
      const contentB = this.state.contents.find((content) => content.id === b)

      if (!contentA) {
        this.setState({alert: `couldn't find ${a}`})
        failed = true
        return
      }

      if (!contentB) {
        this.setState({alert: `couldn't find ${b}`})
        failed = true
        return
      }

      const sectionA = course.sections.find((section) => section.id === contentA.sectionId)
      const sectionB = course.sections.find((section) => section.id === contentB.sectionId)

      if (!sectionA) {
        this.setState({alert: `couldn't find section ${contentA.sectionId}`})
        failed = true
        return
      }

      if (!sectionB) {
        this.setState({alert: `couldn't find section ${contentB.sectionId}`})
        failed = true
        return
      }

      if (sectionA.order < sectionB.order)
        return -1

      if (sectionA.order > sectionB.order)
        return 1

      return 0
    })

    course.contentOrder = contentOrder

    if (!failed) {
      console.log(course)
      this.setState({course})
      this.saveCourse(course)
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
      saveDoc('courses', course).catch((e) => this.setState({alert: e}))
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
      this.saveCourse(course)
    }
  }

  removeSection(section) {
    return () => {
      const contents = this.state.contents.filter((c) => c.sectionId === section.id)
      if (window.confirm(`Are you sure you want to delete a section and ${contents.length} content items?`)) {
        const sections = this.state.course.sections.filter((filteredSection) => section.id !== filteredSection.id)
        const course = this.state.course
        course.sections = reOrder(sections)
        this.setState({course})
        this.saveCourse(course).then(async () => {
          for (let i = 0; i < contents.length; i++)
            await this.removeContent(contents[i].id, true)()
        })
      }
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

      this.saveCourse(course)
      setTimeout(() => {
        window.location.href = `/course/edit-${content.type}?courseId=${this.state.course.id}&contentId=${content.id}`
      }, 3500)
    }).catch((err) => {
      this.setState({alert: err})
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

    const newContents = this.state.contents.map((oldContent) => {
      if (oldContent.id === content.id)
        return content

      return oldContent
    })

    this.setState({contents: newContents})
  }

  removeContent(contentId, confirmed) {
    return () => {
      if (confirmed || window.confirm(`Are you sure you want to delete the content?`)) {
        return deleteDoc(`courses/${this.state.course.id}/contents`, contentId).then(() => {
          const contents = JSON.parse(JSON.stringify(this.state.contents)).filter((filteredContent) => contentId !== filteredContent.id)

          const course = this.state.course
          course.contentOrder = course.contentOrder.filter((id) => id !== contentId)

          this.setState({
            alert: 'content deleted',
            contents,
            course
          })

          this.saveCourse(course)
        }).catch((err) => {
          this.setState({
            alert: err
          })
        })
      }
    }
  }

  saveCourse(course) {
    if (!course)
      course = this.state.course

    return saveDoc('courses', course).then(() => {
      this.setState({alert: 'course saved'})
    }).catch((err) => {
      this.setState({alert: err})
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
          <Button onClick={() => this.saveCourse()} variant="contained">Save</Button>
        </div>
        <div ref={this.section}>
          { this.state.course.sections.map((section, idx) => (
            <div key={idx} data-section-idx={idx} className="section">
              <AddSection addSection={this.addSection(idx)} hidden={true} />
              <EditSection section={section} updateSection={this.updateSection(section.id)} removeSection={this.removeSection} onContentSortChange={this.onContentSortChange} courseId={this.state.course.id} contents={this.state.contents} addContent={this.addContent} removeContent={this.removeContent} />
            </div>
          ))}

          <AddSection addSection={this.addSection(this.state.course.sections.length)} idx={this.state.course.sections.length} />
        </div>
        <Snackbar open={this.state.alert !== ''} autoHideDuration={3000} onClose={this.closeAlert} message={this.state.alert} />
      </div>
    )
  }
}

export default EditContents
