'use strict';

import ApteData from './ApteData';
import Transcoder from '../../../common/Transcoder';

class Apte
{
    constructor() {
        this.data = new ApteData();
    }

    search(request) {
        const key = Transcoder.process(
            request.query.trim(),
            request.fromEncoding, Transcoder.SLP1
        );

        return {
            results: this.data.find(key),
            encoding: Transcoder.SLP1,
        };
    }

    findByLnum(lnum) {
        return this.data.findLnum(lnum);
    }
}

export default Apte;
