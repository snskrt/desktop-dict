'use strict';

import MW from '../main_process/dicts/mw/MonierWilliams';
import Transcoder from '../common/Transcoder';

it('finds a word by key', () => {
    const dict = new MW();
    const search = dict.search({ query: 'aMsa', fromEncoding: Transcoder.HK});

    expect(search).toMatchSnapshot();
});

it('finds authority by link key', () => {
    const dict = new MW();
    const search = dict.findAuthority('A1ca1ranirn2.');

    expect(search).toMatchSnapshot();
});

it('finds abbreviation by key', () => {
    const dict = new MW();
    const search = dict.findAbbreviation('Bret.');

    expect(search).toMatchSnapshot();
});

it('returns Whitney roots links', () => {
    const dict = new MW();
    const search = dict.search({ query: 'as', fromEncoding: Transcoder.HK});

    expect(search).toMatchSnapshot();
});

it('returns Westergaard links', () => {
    const dict = new MW();
    const search = dict.search({ query: 'Azad', fromEncoding: Transcoder.HK});

    expect(search).toMatchSnapshot();
});
