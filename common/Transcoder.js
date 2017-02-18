'use strict';

import Sanscript from 'sanscript.js';
import AsEncoding from './Transcoder/As';

class Transcoder
{
    static process(text, from, to) {
        return Sanscript.t(text, from, to);
    }

    static setupSchemes() {
        Transcoder.HK = 'hk';
        Transcoder.SLP1 = 'slp1';
        Transcoder.IAST = 'iast';
        Transcoder.ITRANS = 'itrans';
        Transcoder.DEVANAGARI = 'devanagari';
        Transcoder.AS = 'as';
        Transcoder.AS_ROMAN = 'as_roman';

        if (!Sanscript.isRomanScheme(Transcoder.AS)) {
            Sanscript.addRomanScheme(Transcoder.AS, AsEncoding.as);
        }
        if (!Sanscript.isRomanScheme(Transcoder.AS_ROMAN)) {
            Sanscript.addRomanScheme(Transcoder.AS_ROMAN, AsEncoding.as_roman);
        }
    }
}

Transcoder.setupSchemes();

export default Transcoder;
