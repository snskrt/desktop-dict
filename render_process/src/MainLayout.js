'use strict';

import React from 'react';
import SearchPanel from './search/SearchPanel';
import ResultList from './results/ResultList';
import SearchRequest from '../../common/SearchRequest';
import Settings from '../../common/Settings';

const MainLayout = React.createClass({
    getInitialState: function() {
        return {
            results: [],
            settings: new Settings(),
            request: new SearchRequest('', new Settings())
        };
    },

    getVersion: function() {
        return this.props.api.call('version');
    },

    handleQuery: function(query) {
        const searchRequest = new SearchRequest(query, this.state.settings);
        const searchResults = this.props.api.call('search', searchRequest);

        this.setState({
            request: searchRequest,
            results: searchResults,
            settings: this.state.settings
        });
    },

    handleSettingsChange: function(settings) {
        const searchRequest = this.state.request;
        searchRequest.settings = settings;
        const searchResults = this.props.api.call('search', searchRequest);

        this.setState({
            request: searchRequest,
            results: searchResults,
            settings: settings
        });
    },

    render: function() {
        return <div>
            <SearchPanel
                onQuery={this.handleQuery}
                onSettingsChange={this.handleSettingsChange}
                settings={this.state.settings}
                version={this.getVersion()}
                request={this.state.request}
            />
            <ResultList
                request={this.state.request}
                results={this.state.results}
                api={this.props.api}
            />
        </div>
    }
});

export default MainLayout;
