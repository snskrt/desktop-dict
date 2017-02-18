'use strict';

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Container = React.createClass({
    getInitialState: function() {
        return { expanded: false };
    },

    render: function () {
        return <span>
            <a className="abbr" onClick={this.expand}>
                {this.props.children}
            </a>
            <Dialog open={this.state.expanded}
                    title={this.props.title}
                    modal={false}
                    onRequestClose={this.close}
                    actions={<FlatButton label="Close" onClick={this.close} />}
            >
                <strong>{this.props.abbr}</strong>&nbsp;—&nbsp;{this.state.definition}
            </Dialog>
        </span>
    },

    expand: function() {
        const definition = this.state.definition || this.props.definitionCallback();
        this.setState({
            expanded: true,
            definition: definition || 'No definition :('
        });
    },

    close: function() {
        this.setState({ expanded: false });
    },
});
export default Container;
