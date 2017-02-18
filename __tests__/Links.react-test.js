'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Links from '../render_process/src/results/parts/Links';
import Transcoder from '../common/Transcoder';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

it('renders whitney roots links', () => {
    const links = {
        whitney: [
            { data: 'aYj 1' },
            { data: 'kf1 21' },
        ]
    };
    const tree = renderer.create(
        <Links
            transFrom={Transcoder.SLP1}
            transTo={Transcoder.IAST}
            links={links}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders westergaard links', () => {
    const links = {
        westergaard: [
            { data: '28.65' },
            { data: '29.20' },
        ]
    };
    const tree = renderer.create(
        <Links
            transFrom={Transcoder.SLP1}
            transTo={Transcoder.IAST}
            links={links}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
