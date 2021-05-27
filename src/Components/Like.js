import React, { Component } from 'react';

class Like extends Component
{
    constructor(props)
    {
    super(props);
        this.state =
        {
        clicks: 0,
        show: true
        };
    }

    IncrementItem = () =>
    {
    this.setState({ clicks: this.state.clicks + 1 });

    }
    DecreaseItem = () =>
    {
    this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () =>
    {
    this.setState({ show: !this.state.show });
    }

    render()
    {
    return (
    <div>
        <button onClick={this.IncrementItem}>Dislike</button>
        <button onClick={this.ToggleClick}>
        { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
    </div>
    );
    }
}

export default Like;