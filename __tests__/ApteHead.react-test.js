'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Head from '../render_process/src/results/parts/Head';
import Transcoder from '../common/Transcoder';
import ApteKey from '../render_process/src/results/apte/HeadKey';

const parseXML = require('xml-parse-from-string');

it('renders sanskrit key text', () => {
    matchHeadXml('<H1><h><key2>aMzIkR</key2></h></H1>');
});

it('does not render if key not changed', () => {
    matchHeadXml(
        '<H1><h><key2>foo</key2></h></H1>',
        '<H1><h><key2>foo</key2></h></H1>'
    );

    matchHeadXml(
        '<H1><h><hom>1</hom><key2>foo</key2></h></H1>',
        '<H1><h><hom>2</hom><key2>foo</key2></h></H1>'
    );
});

it('processes key text', () => {
    matchHeadXml('<H1><h><key2>akalkana --ka</key2></h></H1>');
});

function matchHeadXml(xml, prevNodeXml) {
    const node = parseXML(xml, 'text/xml');
    const prevNode = prevNodeXml ? parseXML(prevNodeXml, 'text/xml') : null;

    const tree = renderer.create(
        <Head
            node={node}
            keyComponent={ApteKey}
            prevNode={prevNode}
            transFrom={Transcoder.SLP1}
            transTo={Transcoder.IAST}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
}
