'use strict';

import fs from 'fs';
import sql from 'sql.js';

class GreekData
{
    constructor() {
        this.db = new sql.Database(fs.readFileSync(`${__dirname}/db/mwgreek.sqlite`));
    }

    find(line) {
        const stmt = this.db.prepare('SELECT data FROM mwgreek WHERE lnum=:line');
        return stmt.getAsObject({':line': line}).data || null;
    }
}

export default GreekData;
