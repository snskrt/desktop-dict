'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Head from '../render_process/src/results/parts/Head';
import Transcoder from '../common/Transcoder';
import MWKey from '../render_process/src/results/mw/HeadKey';

const parseXML = require('xml-parse-from-string');

it('renders sanskrit key text', () => {
    matchHeadXml('<H1><h><key2>aMzIkR</key2></h></H1>');
});

it('renders root element', () => {
    matchHeadXml('<H1><h><key2>aMSI-<root>kf</root></key2></h></H1>');
});

it('processes key text', () => {
    matchHeadXml('<H1><h><key2>aMz_IkR</key2></h></H1>');
    matchHeadXml('<H1><h><key2>a--kAra</key2></h></H1>');
    matchHeadXml('<H1><h><key2>a/Msa--tra---koSa</key2></h></H1>');
    matchHeadXml('<H1><h><key2>ato-\'nya</key2></h></H1>');
});

it('renders single replacement sandhi', () => {
    matchHeadXml('<H1><h><key2>aMSA<srs/>MSa</key2></h></H1>');
    matchHeadXml('<H1><h><key2>agO<srs1/>kas</key2></h></H1>');
});

it('renders hom number', () => {
    matchHeadXml('<H1><h><key2>a</key2><hom>1</hom></h></H1>');
});

it('renders chandra bindu', () => {
    matchHeadXml('<H1><h><key2>sArisTA-KA~</key2></h></H1>');
});

it('renders partial word mark', () => {
    matchHeadXml('<H1><h><key2>gANga<sr/>waka</key2></h></H1>');
    matchHeadXml('<H1><h><key2>gANga<sr1/>waka</key2></h></H1>');
});

it('removes accents', () => {
    matchHeadXml('<H1><h><key2> a/ b^ c\\ </key2></h></H1>');
});

it('does not render if key not changed', () => {
    matchHeadXml(
        '<H1><h><key2>foo</key2></h></H1>',
        '<H1><h><key2>foo</key2></h></H1>'
    );

    matchHeadXml(
        '<H1><h><key2>foo <root>bar</root></key2></h></H1>',
        '<H1><h><key2>foo <root>bar</root></key2></h></H1>'
    );

    matchHeadXml(
        '<H1><h><hom>1</hom><key2>foo</key2></h></H1>',
        '<H1><h><hom>2</hom><key2>foo</key2></h></H1>'
    );
});

function matchHeadXml(xml, prevNodeXml) {
    const node = parseXML(xml, 'text/xml');
    const prevNode = prevNodeXml ? parseXML(prevNodeXml, 'text/xml') : null;

    const tree = renderer.create(
        <Head
            node={node}
            keyComponent={MWKey}
            prevNode={prevNode}
            transFrom={Transcoder.SLP1}
            transTo={Transcoder.IAST}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
}
