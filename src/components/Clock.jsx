import React from "react";
import moment from "moment";
import 'moment-timezone';

export default class Clock extends React.Component {
    state = {
        timeToShow: '00:00:00',
        intervalId: null
    }

    updateTime = () => {
        this.setState({timeToShow: moment().tz(this.props.timeZone).format('hh:mm:ss')})
    }

    componentDidMount() {
        const intervalId = setInterval(this.updateTime, 1000);
        this.setState({intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        const { timeZone, onDelete } = this.props;

        return <div>
            <div>{timeZone}</div><pre>{this.state.timeToShow}</pre><button onClick={() => onDelete(timeZone)}>X</button>
        </div>;
    }
}
