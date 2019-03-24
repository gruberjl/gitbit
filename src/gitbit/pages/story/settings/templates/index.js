const React = require('react')
const {getTemplates} = require('./lib')

class Templates extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    getTemplates().then(templates => this.setState({templates}))
  }

  render() {
    if (this.state.templates)
      return (
        <div>
          <label htmlFor="templateSelect">
            <span>Template:</span>
            <select value={this.props.template} onChange={this.props.onChange} id="templateSelect" className="pure-input-1">
              {
                this.state.templates.map(template => (
                  <option key={template._id} value={template.id}>{template.name}</option>
                ))
              }
            </select>
          </label>
        </div>
      )

    return (<p>Loading Templates...</p>)
  }
}

module.exports = {Templates}
