'use strict';

import fs from 'fs';
import sql from 'sql.js';

class WhitneyData
{
    constructor() {
        this.db = new sql.Database(fs.readFileSync(`${__dirname}/db/whitmwtab.sqlite`));
    }

    find(key) {
        const stmt = this.db.prepare('SELECT key, lnum, data FROM whitmwtab WHERE key=:key order by data');
        stmt.bind({':key': key});

        let results = [];
        while (stmt.step()) {
            results.push(stmt.getAsObject());
        }
        return results;
    }
}

export default WhitneyData;
