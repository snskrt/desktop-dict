'use strict';

import React from 'react';

const PageColumn = React.createClass({
    render: function() {
        return <a href={this.getHref()} target="_blank" className="pcol">
            p. {this.extract().page}, col. {this.extract().column}
        </a>
    },

    extract: function() {
        const matches = String(this.props.link).match(/p\..([0-9]+).,.col\..([0-9]+)/);
        return {
            page: matches[1],
            column: matches[2]
        }
    },

    getHref: function() {
        return 'http://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/index.php?sfx=jpg';
    }
});
export default PageColumn;
