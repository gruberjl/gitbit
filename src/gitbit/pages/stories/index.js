const React = require('react')
const {Link} = require('react-router-dom')
const {toast} = require('react-toastify')
const moment = require('moment')
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
      <div className="pure-g">
        <Nav />
        <main className="pure-u-4-5">
          <h1>Stories</h1>
          <ul className="pure-menu-list">
            {
            this.state.stories.map(story => (
              <li className="pure-menu-item" key={story._id}>
                <Link to={`/edit-story?id=${story._id}`} className="pure-menu-link">
                  <div><strong>{story.title || '(untitled)'}</strong></div>
                  <span>{moment(story.updateTime).format('MMM Do YY')}</span>
                </Link>
              </li>
            ))
          }
          </ul>
        </main>
      </div>
    )
  }
}

module.exports = {Stories}
