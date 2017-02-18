'use strict';

import React from 'react';
import Iterator from '../parts/Iterator';
import BodyText from './BodyText';
import Sanskrit from '../parts/Sanskrit';
import LexicalInfo from '../parts/LexicalInfo';
import Root from '../parts/Root';
import Parenthesis from '../parts/Parenthesis';
import Bracket from '../parts/Bracket';
import Equality from '../parts/Equality';
import LitSource from '../parts/LitSource';
import Etc from '../parts/Etc';
import Quote from '../parts/Quote';
import Abbreviation from '../parts/Abbreviation';
import SingleReplacementSandhi from '../parts/SingleReplacementSandhi';
import See from '../parts/See';
import Greek from '../parts/Greek';
import Amp from '../parts/Amp';
import PartialWord from '../parts/PartialWord';
import SenseSeparator from '../parts/SenseSeparator';
import BodyHom from '../parts/BodyHom';
import AlternativesSeparator from '../parts/AlternativesSeparator';
import SuperscriptCircle from '../parts/SuperscriptCircle';
import ShortLong from '../parts/ShortLong';
import Auml from '../parts/Auml';
import Euml from '../parts/Euml';
import Ouml from '../parts/Ouml';
import Uuml from '../parts/Uuml';
import PageColumn from '../parts/PageColumn';
import TextSplitter from '../parts/TextSplitter';
import HalfVisarga from '../parts/HalfVisarga';

const RowBody = React.createClass({
    render: function() {
        const _this = this;
        const iterator = new Iterator({
            'body': function (node, children) {
                return <BodyText>{children()}</BodyText>;
            },
            'c': function (node, children) {
                return children();
            },
            'c1': function (node, children) {
                return children();
            },
            'c2': function (node, children) {
                return children();
            },
            'c3': function (node, children) {
                return children();
            },
            'lex': function (node, children, index) {
                return <LexicalInfo key={'lex_' + index}>{children()}</LexicalInfo>;
            },
            'vlex': function (node, children, index) {
                return this['lex'](node, children, index)
            },
            's': function(node, children, index) {
                return <Sanskrit
                    key={'snskrt_' + index}
                    transFrom={_this.props.transFrom}
                    transTo={_this.props.transTo}>
                    {children()}
                </Sanskrit>;
            },
            'p': function(node, children, index) {
                return <Parenthesis key={'p_' + index}>{children()}</Parenthesis>;
            },
            'p1': function(node, children, index) {
                return this['p'](node, children, index);
            },
            'b': function(node, children, index) {
                return <Bracket key={'b_' + index}>{children()}</Bracket>;
            },
            'b1': function(node, children, index) {
                return this['b'](node, children, index);
            },
            'eq': function(node, children, index) {
                return <Equality key={'eq_' + index} />
            },
            'ls': function(node, children, index) {
                return <LitSource key={'ls_' + index}
                                  abbr={node.textContent}
                                  api={_this.props.api}>
                    {children()}
                </LitSource>
            },
            'etc': function(node, children, index) {
                return <Etc key={'etc_' + index} />
            },
            'etc1': function(node, children, index) {
                return this['etc'](node, children, index);
            },
            'etcetc': function(node, children, index) {
                return this['etc'](node, children, index);
            },
            'ab': function(node, children, index) {
                return <Abbreviation key={'ab_' + index}
                                  abbr={node.textContent}
                                  api={_this.props.api}>
                    {children()}
                </Abbreviation>
            },
            'cf': function(node, children, index) {
                return <Abbreviation key={'cf_' + index}
                                     abbr="cf."
                                     api={_this.props.api}>cf.</Abbreviation>
            },
            'qv': function(node, children, index) {
                return <Abbreviation key={'qv_' + index}
                                     abbr="q.v."
                                     api={_this.props.api}>q.v.</Abbreviation>
            },
            'srs': function(node, children, index) {
                return <SingleReplacementSandhi key={'srs_' + index}>{children()}</SingleReplacementSandhi>;
            },
            'srs1': function(node, children, index) {
                return this['srs'](node, children, index);
            },
            'root': function(node, children, index) {
                return <Root key={'root_' + index}>{children()}</Root>;
            },
            'quote': function(node, children, index) {
                return <Quote key={'quote_' + index}>{children()}</Quote>;
            },
            'bot': function(node, children) {
                return children();
            },
            'bio': function(node, children) {
                return children();
            },
            'as1': function(node, children) {
                return children();
            },
            'ns': function(node, children) {
                return children();
            },
            'see': function(node, children, index) {
                return <See key={'see_' + index}>{children()}</See>
            },
            'etym': function(node, children) {
                return children();
            },
            'gk': function(node, children, index) {
                return <Greek
                    row={_this.props.row}
                    key={'gk_' + index}
                    greek={node.textContent}
                />
            },
            'usage': function(node, children) {
                return children();
            },
            'idiom': function(node, children) {
                return children();
            },
            'sense': function(node, children) {
                return children();
            },
            'ellipsis': function(node, children) {
                return children();
            },
            'phw': function(node, children) {
                return children();
            },
            'amp': function(node, children, index) {
                return <Amp key={'amp_' + index}/>
            },
            'sr': function(node, children, index) {
                return <PartialWord key={'sr_' + index}>{children()}</PartialWord>;
            },
            'sr1': function(node, children, index) {
                return this['sr'](node, children, index);
            },
            'msc': function(node, children, index) {
                return <SenseSeparator key={'msc_' + index}/>
            },
            'hom': function(node, children, index) {
                return <BodyHom key={'hom_' + index}>
                    {children()}
                </BodyHom>
            },
            'fs': function(node, children, index) {
                return <AlternativesSeparator key={'fs_' + index} />
            },
            'fcom': function(node, children, index) {
                return <SuperscriptCircle key={'fcom_' + index} />
            },
            'shortlong': function(node, children, index) {
                return <ShortLong key={'sl_' + index} />
            },
            'shc': function(node, children, index) {
                return this['shortlong'](node, children, index);
            },
            'auml': function(node, children, index) {
                return <Auml key={'auml_' + index} />
            },
            'euml': function(node, children, index) {
                return <Euml key={'euml_' + index} />
            },
            'ouml': function(node, children, index) {
                return <Ouml key={'ouml_' + index} />
            },
            'uuml': function(node, children, index) {
                return <Uuml key={'uuml_' + index} />
            },
            'pcol': function(node, children, index) {
                return <PageColumn key={'pcol_' + index} link={node.textContent} />
            },
            '#text': function(node, children, index) {
                const splitters = [];
                if (node.parentNode.nodeName != 'ls') {
                    splitters.push({
                        expr: new RegExp('(?:[^a-zA-Z0-9]|^)N\.'),
                        elm: <Abbreviation key={'ab_' + index} abbr='N.' api={_this.props.api}>N.</Abbreviation>
                    });
                }

                splitters.push({
                    expr: '\u{1cf2}',
                    elm: <HalfVisarga key={'hv_' + index} />
                });

                return <TextSplitter
                    key={'ts_' + index}
                    reactKey={'ts_' + index}
                    txt={node.textContent}
                    splitters={splitters}
                />
            }
        });
        return <span>{iterator.render(this.props.node)}</span>;
    }
});
export default RowBody;
