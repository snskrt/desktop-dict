'use strict';

import React from 'react';
import Row from './parts/Row';
import Head from './parts/Head';
import Sanskrit from './parts/Sanskrit';
import Text from './parts/Text';
import Links from './parts/Links';

const DictResult = React.createClass({
    render: function () {
        const request = this.props.request;
        return <div className="result-container">
            <h1 className="result-title">
                <Sanskrit
                    transFrom={request.fromEncoding}
                    transTo={request.toEncoding}>
                    <Text txt={request.query}/>
                </Sanskrit>
            </h1>
            {this.renderResult()}
            <Links
                transFrom={this.props.result.encoding}
                transTo={this.props.request.toEncoding}
                links={this.props.result.links}/>
        </div>
    },
    renderResult: function () {
        const result = this.props.result.results;
        const domParser = new DOMParser();

        if (!result.length) {
            return this.noResults()
        }

        return result.map((row, index) => {
            const node = domParser.parseFromString(row.data, 'text/xml');
            const prevNode = result[index - 1] ?
                domParser.parseFromString(result[index - 1].data, 'text/xml') : null;

            return <div>
                <Head
                    node={node}
                    prevNode={prevNode}
                    keyComponent={this.props.keyComponent}
                    transFrom={this.props.result.encoding}
                    transTo={this.props.request.toEncoding}/>

                <Row
                    node={node}
                    row={row}
                    bodyComponent={this.props.bodyComponent}
                    transFrom={this.props.result.encoding}
                    transTo={this.props.request.toEncoding}
                    api={this.props.api}
                />
            </div>;
        });
    },

    noResults: function () {
        return <div>
            <div className="shung">¯\_(ツ)_/¯</div>
            <div>No results, try something different.</div>
        </div>;
    },
});
export default DictResult;
