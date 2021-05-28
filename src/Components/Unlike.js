import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Dislike extends Component
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

    render()
    {
    return (
    <div>
            <Button
                onClick={this.IncrementItem}
                variant="contained"
                color="secondary"
                size="small"
            >Disike</Button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
    </div>
    );
    }
}

export default Dislike;
