import React from 'react';
import {DelayInput} from '../src';


export class Controllable extends React.Component {
  state = {
    value: '',
    delayedValue: ''
  };

  render() {
    const {value, delayedValue} = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            Contollable input:
            <input
              className="input"
              type="text"
              value={value}
              onChange={e => this.setState({value: e.target.value})} />
            {value}
          </label>
        </div>

        <div className="config">
          <label className="label">
            Delayed input:
            <DelayInput
              className="input"
              value={value}
              minLength={2}
              delayTimeout={500}
              onChange={e =>
                this.setState({value: e.target.value, delayedValue: e.target.value})} />
            {delayedValue}
          </label>
        </div>
      </div>
    );
  }
}
