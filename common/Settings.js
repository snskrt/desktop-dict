'use strict';

import Transcoder from './Transcoder'

class Settings
{
    constructor() {
        // Default values
        this.inputEncoding = Transcoder.HK;
        this.outputEncoding = Transcoder.IAST;
    }
}

export default Settings;
