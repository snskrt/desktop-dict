'use strict';

import React from 'react';

const Greek = React.createClass({
    render: function () {
        const greekText = this.getGreekData()[2] || '';
        return <a className="greek-link" target="_blank" href={this.getHref()}>{greekText}</a>
    },

    getGreekData: function() {
        const greekWords = this.getGreekWords();
        const wordIndex = this.props.greek;

        // Returns array with 3 elements:
        // 0 — beta
        // 1 — word web URL
        // 2 — UTF greek text
        return (greekWords[wordIndex - 1] || '').split('<e>');
    },

    getGreekWords: function() {
         const rowGreek = this.props.row.greek;
         if (!rowGreek) {
             return [];
         }

         return rowGreek.split('<gk>');
    },

    getHref: function() {
        const url = this.getGreekData()[1] || '';
        return `http://www.perseus.tufts.edu/hopper/morph?la=greek&l=${url}`;
    }
});

export default Greek;
