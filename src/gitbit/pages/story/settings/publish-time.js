const React = require('react')
const moment = require('moment')

class PublishTime extends React.Component {
  setPublishTime(event) {
    const {value} = event.target
    if (moment(value).isValid()) {
      const isoString = moment(value).toISOString()
      this.props.onChange(isoString)
    } else
      this.props.onChange('')
  }

  render() {
    const {publishTime} = this.props
    const localTime = moment(publishTime).isValid() ? moment(publishTime).format(moment.HTML5_FMT.DATETIME_LOCAL) : ''

    return (
      <div>
        <h4>When do you want to publish?</h4>
        <input type="datetime-local" value={localTime} onChange={this.setPublishTime.bind(this)} />
      </div>
    )
  }
}

module.exports = {PublishTime}
