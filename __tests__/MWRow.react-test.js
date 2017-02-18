'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../render_process/src/results/parts/Row';
import MWBody from '../render_process/src/results/mw/RowBody';
import Transcoder from '../common/Transcoder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const parseXML = require('xml-parse-from-string');

injectTapEventPlugin();

it('renders text blocks', () => {
    matchBodyXml('<H1><body>  <c>the_<c1>first<c2>_letter<c3>~of~the</c3></c2></c1><c1>_alphabet</c1></c>  </body></H1>');
});

it('removes extra comma spaces', () => {
    matchBodyXml('<H1><body><c>foo_bar__,___baz_,__xxx</c></body></H1>');
});

it('renders sanskrit text', () => {
    matchBodyXml('<H1><body><s>tasyAkaraRir evAstu</s></body></H1>');
});

it('renders lexical info', () => {
    matchBodyXml('<H1><body> <lex>m.</lex> <c>the_letter_or_sound</c></body></H1>');
    matchBodyXml('<H1><body> <vlex>m.</vlex> <c>the_letter_or_sound</c></body></H1>');
    matchBodyXml('<H1><body><lex></lex></body></H1>');
    matchBodyXml('<H1><body><vlex></vlex></body></H1>');
});

it('renders parenthesis', () => {
    matchBodyXml('<H1><body><p><s>pragfhya</s></p></body></H1>');
    matchBodyXml('<H2><body><lex>mf<p1><s>A</s></p1>n.</lex></body></H2>');
});

it('renders brackets', () => {
    matchBodyXml('<H1><body><b><c>see</c></b></body></H1>');
    matchBodyXml('<H1><body><b1><c>see</c></b1></body></H1>');
});

it('renders equality symbol', () => {
    matchBodyXml('<H1><body><eq/> <s>padmaka</s></body></H1>');
});

it('renders lit source', () => {
    matchBodyXml('<H1><body><ls>Sus3r. 1-2, 3</ls></body></H1>');
});

it('renders etc symbol', () => {
    matchBodyXml('<H1><body><etc/><etc1/><etcetc/></body></H1>');
});

it('renders abbreviations', () => {
    matchBodyXml('<H1><body><ab>foo.</ab></body></H1>');
});

it('renders cf. abbreviation', () => {
    matchBodyXml('<H1><body><cf/></body></H1>');
});

it('renders q.v. abbreviation', () => {
    matchBodyXml('<H1><body><qv/></body></H1>');
});

it('renders single replacement sandhi', () => {
    matchBodyXml('<H1><body><s>BastrA<srs/>di</s></body></H1>');
    matchBodyXml('<H1><body><s>-pary-E<srs1/>ti</s></body></H1>');
});

it('renders root element', () => {
    matchBodyXml('<H1><body><s>-A-<root>i</root></s></body></H1>');
});

it('renders quote element', () => {
    matchBodyXml('<H1><body><quote>_coloured_or_modified_by_nasalization_</quote></body></H1>');
});

it('renders botanics elements', () => {
    matchBodyXml('<H1><body><c><bot>Barringtonia</bot></c></body></H1>');
    matchBodyXml('<H1><body><c><bio>Canopus</bio></c></body></H1>');
});

it('renders indological words', () => {
    matchBodyXml('<H1><body><c><as1><s>Siva</s></as1></c></body></H1>');
    matchBodyXml('<H1><body><c><ns><s>Sruti</s></ns></c></body></H1>');
});

it('renders see element', () => {
    matchBodyXml('<H1><body><c><see />_next_col</c></body></H1>');
});

it('renders etymology element', () => {
    matchBodyXml('<H1><body>Goth <etym>amsa</etym></body></H1>');
});

it('renders greek text', () => {
    matchBodyXml(
        '<H1><body><gk>1</gk>, <gk>2</gk></body></H1>',
        {
            greek: 'f<e>f_url<e>foo<gk>b<e>b_url<e>bar'
        }
    );
});

it('renders experimental elements', () => {
    matchBodyXml('<H1><body><usage>foo</usage></body></H1>');
    matchBodyXml('<H1><body><idiom>foo</idiom></body></H1>');
    matchBodyXml('<H1><body><sense>foo</sense></body></H1>');
    matchBodyXml('<H1><body><ellipsis>foo</ellipsis></body></H1>');
});

it('renders parenthetical headword', () => {
    matchBodyXml('<H1><body><phw>foo</phw></body></H1>');
});

it('renders amp element', () => {
    matchBodyXml('<H1><body><amp/></body></H1>');
});

it('renders partial word mark', () => {
    matchBodyXml('<H1><body>gANga<sr/>waka</body></H1>');
    matchBodyXml('<H1><body>gANga<sr1/>waka</body></H1>');
});

it('renders sense separator', () => {
    matchBodyXml('<H1><body>foo<msc/>bar</body></H1>');
});

it('renders hom element', () => {
    matchBodyXml('<H1><body><hom>1</hom></body></H1>');
});

it('renders alternatives separator', () => {
    matchBodyXml('<H1><body>foo<fs/>bar</body></H1>');
});

it('renders superscript circle', () => {
    matchBodyXml('<H1><body>foo<fcom/></body></H1>');
});

it('renders short/long symbol', () => {
    matchBodyXml('<H1><body>foo<shortlong/></body></H1>');
    matchBodyXml('<H1><body>foo<shc/></body></H1>');
});

it('renders umlaut symbols', () => {
    matchBodyXml('<H1><body><auml/></body></H1>');
    matchBodyXml('<H1><body><ouml/></body></H1>');
    matchBodyXml('<H1><body><euml/></body></H1>');
    matchBodyXml('<H1><body><uuml/></body></H1>');
});

it('renders page column link', () => {
    matchBodyXml('<H1><body><pcol>p._14_,_col._2</pcol></body></H1>');
});

it('renders page column link', () => {
    matchBodyXml('<H1><body><pcol>p._14_,_col._2</pcol></body></H1>');
});

it('removes accents', () => {
    matchBodyXml('<H1><body> a/ b^ c\\ </body></H1>');
    matchBodyXml('<H1><body> <s>a/ b^ c\\</s> </body></H1>');
    matchBodyXml('<H1><body> <as1>a/ b^ c\\</as1> </body></H1>');
});

it('converts N. to abbreviation', () => {
    matchBodyXml('<H1><body>some N. of the men</body></H1>');
    matchBodyXml('<H1><body>lit source <ls>N.</ls> not replaced</body></H1>');
    matchBodyXml('<H1><body>part of the wordN. is not preplaced</body></H1>');
    matchBodyXml('<H1><body>number 19N. is not replaced</body></H1>');
    matchBodyXml('<H1><body><c>N. inside tag</c></body></H1>');
});

it('renders half-visarga sign', () => {
    matchBodyXml('<H1><body>&#x1cf2;</body></H1>');
});

it('converts atmanepada A1 sign', () => {
    matchBodyXml('<H1><body><lex>A1.</lex></body></H1>');
    matchBodyXml('<H1><body><vlex>A1.</vlex></body></H1>');
    matchBodyXml('<H1><body><vlex>A1. etc</vlex></body></H1>');
    matchBodyXml('<H1><body>A1</body></H1>');
});


function matchBodyXml(xml, row) {
    const node = parseXML(xml, 'text/xml');
    const tree = renderer.create(
        <MuiThemeProvider>
            <Row
                node={node}
                bodyComponent={MWBody}
                row={row || {}}
                transFrom={Transcoder.SLP1}
                transTo={Transcoder.IAST}/>
        </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
}
