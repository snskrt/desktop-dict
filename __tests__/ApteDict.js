'use strict';

import Apte from '../main_process/dicts/apte/Apte';
import Transcoder from '../common/Transcoder';

it('finds a word by key', () => {
    const dict = new Apte();
    const search = dict.search({ query: 'zap', fromEncoding: Transcoder.HK});

    expect(search).toMatchSnapshot();
});

it('finds a word by line number', () => {
    const dict = new Apte();
    const search = dict.findByLnum('717.01');

    expect(search).toMatchSnapshot();
});
