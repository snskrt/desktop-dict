'use strict';

import MWData from './MWData';
import AuthoritiesData from './AuthoritiesData';
import AbbreviationsData from './AbbreviationsData';
import GreekData from './GreekData';
import WhitneyData from './WhitneyData';
import WestergaardData from './WestergaardData';
import Transcoder from '../../../common/Transcoder';

class MonierWilliams
{
    constructor() {
        this.data = new MWData();
        this.authorities = new AuthoritiesData();
        this.abbreviations = new AbbreviationsData();
        this.greekData = new GreekData();
        this.whitneyData = new WhitneyData();
        this.westergaardData = new WestergaardData();
    }

    search(request) {
        const key = Transcoder.process(
            request.query.trim(),
            request.fromEncoding, Transcoder.SLP1
        );
        const lines = this.data.find(key);

        const _this = this;
        const results = lines.map(function(line) {
            line.greek = _this.greekData.find(line.lnum);
            return line;
        });

        return {
            results: results,
            links: {
                whitney: _this.whitneyData.find(key),
                westergaard: _this.westergaardData.find(key)
            },
            encoding: Transcoder.SLP1,
        };
    }

    findAuthority(link) {
        return this.authorities.find(link);
    }

    findAbbreviation(link) {
        return this.abbreviations.find(link);
    }
}

export default MonierWilliams;
