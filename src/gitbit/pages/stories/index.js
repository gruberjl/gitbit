const React = require('react')
const {Link} = require('react-router-dom')
const {toast} = require('react-toastify')
const {getStories} = require('./lib')
const {Nav} = require('../../components/nav')

class Stories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    getStories().then(res => this.setState({stories: res.docs}))
      .catch(err => toast.error(err.toString()))
  }

  render() {
    return (
      <div className="page">
        <Nav />
        <main>
          <h1>Stories</h1>
          <div>
            {
            this.state.stories.map(story => (
              <div key={story._id}><Link to={`/edit-story?id=${story._id}`}>{story.title}</Link></div>
            ))
          }
          </div>
        </main>
      </div>
    )
  }
}

module.exports = {Stories}
