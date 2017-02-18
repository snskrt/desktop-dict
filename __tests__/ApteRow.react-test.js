'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../render_process/src/results/parts/Row';
import ApteBody from '../render_process/src/results/apte/RowBody';
import Transcoder from '../common/Transcoder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const parseXML = require('xml-parse-from-string');

injectTapEventPlugin();

it('renders text blocks', () => {
    matchBodyXml('<H1><body>foo bar baz</body></H1>');
});

it('processes body text', () => {
    matchBodyXml('<H1><h><body>akalkana --ka</body></h></H1>');
    matchBodyXml('<H1><h><body>foo- <br/>bar</body></h></H1>');
    matchBodyXml('<H1><h><body>foo-<br/>bar</body></h></H1>');
    matchBodyXml('<H1><h><body>foo [Page0856-a+ 56] Bar [Baz] [Page1066-1b+ 12]</body></h></H1>');
});

it('renders sanskrit text', () => {
    matchBodyXml('<H1><body><s>tasyAkaraRir evAstu</s></body></H1>');
});

it('renders bold text', () => {
    matchBodyXml('<H1><body><b>bold</b></body></H1>');
    matchBodyXml('<H1><body><b><s>tasyAkaraRir evAstu</s></b></body></H1>');
    matchBodyXml('<H1><body><s><b>tasyAkaraRir evAstu</b></s></body></H1>');
});

it('renders italic text', () => {
    matchBodyXml('<H1><body><i>italic</i></body></H1>');
});

it('renders alternative body', () => {
    const api = {
        call: () => {
            return { data: '<H1><body>alternative body</body></H1>' }
        }
    };

    matchBodyXml('<H1><body ref="42"></body></H1>', api);
});

function matchBodyXml(xml, api) {
    const node = parseXML(xml, 'text/xml');
    const tree = renderer.create(
        <MuiThemeProvider>
            <Row
                node={node}
                bodyComponent={ApteBody}
                api={api}
                transFrom={Transcoder.SLP1}
                transTo={Transcoder.IAST}/>
        </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
}
