'use strict';

import React from 'react';
import WhitneyRoots from './WhitneyRoots';
import Westergaard from './Westergaard';

const Links = React.createClass({
    render: function() {
        const result = [];
        const links = this.props.links || {};

        if (links.whitney && links.whitney.length) {
            result.push(<WhitneyRoots
                key="whitney"
                transFrom={this.props.transFrom}
                transTo={this.props.transTo}
                links={this.props.links.whitney}/>);
        }

        if (links.westergaard && links.westergaard.length) {
            result.push(<Westergaard key="whestergaard" links={this.props.links.westergaard}/>);
        }

        if (result.length) {
            return <div className="links">{result}</div>;
        }
        return null;
    }
});

export default Links;
