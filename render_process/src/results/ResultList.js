'use strict';

import React from 'react';
import Result from './DictResult';
import Prompt from './Prompt';
import {Tabs, Tab} from 'material-ui/Tabs';
import {cyan600} from 'material-ui/styles/colors';

import MWKey from './mw/HeadKey';
import MWBody from './mw/RowBody';
import ApteKey from './apte/HeadKey';
import ApteBody from './apte/RowBody';

const ResultList = React.createClass({
    render: function () {
        this.trackView();
        return <div>
            {this.getSwitcher()}
        </div>;
    },

    getContent: function(request, result) {
        switch (result.dict.code) {
            case 'mw':
                return <Result
                    request={request}
                    result={result.data}
                    key={result.dict.code}
                    api={this.props.api}
                    keyComponent={MWKey}
                    bodyComponent={MWBody}
                />;

            case 'ap':
                return <Result
                    request={request}
                    result={result.data}
                    key={result.dict.code}
                    api={this.props.api}
                    keyComponent={ApteKey}
                    bodyComponent={ApteBody}
                />;
        }
    },

    getSwitcher: function() {
        if (!this.props.request.query) {
            return <Prompt/>
        }

        const results = this.props.results;
        const tabs = results.map(result =>
            <Tab label={result.dict.label}>
                {this.getContent(this.props.request, result)}
            </Tab>
        );

        const styles = {
            'background-color': cyan600
        };
        return <Tabs tabItemContainerStyle={styles}>{tabs}</Tabs>;
    },

    trackView: function () {
        const screen = this.props.request.query ? 'Result List' : 'Prompt';
        this.props.analytics.screen(screen);
    }
});
export default ResultList;
