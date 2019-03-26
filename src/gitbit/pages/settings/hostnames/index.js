const React = require('react')
const {getHostnames} = require('./lib')

class Hostnames extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    getHostnames().then(hostnames => this.setState({hostnames}))
  }

  render() {
    if (this.state.hostnames)
      return (
        <div>
          <label htmlFor="hostnameSelect">
            <span>Primary Hostname:</span>
            <select name={this.props.name} value={this.props.hostname} onChange={this.props.onChange} id="hostnameSelect" className="pure-input-1">
              {
                this.state.hostnames.map(hostname => (
                  <option key={hostname._id} value={hostname._id}>{hostname._id}</option>
                ))
              }
            </select>
          </label>
        </div>
      )

    return (<p>Loading Hostnames...</p>)
  }
}

module.exports = {Hostnames}
