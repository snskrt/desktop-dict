'use strict';

import fs from 'fs';
import sql from 'sql.js';

class MWData
{
    constructor() {
        this.db = new sql.Database(fs.readFileSync(`${__dirname}/db/mw.sqlite`));
    }

    find(key) {
        const stmt = this.db.prepare('SELECT key, lnum, data FROM mw WHERE key=:key ORDER BY lnum');
        stmt.bind({':key': key});

        let results = [];
        while (stmt.step()) {
            results.push(stmt.getAsObject());
        }
        return results;
    }
}

export default MWData;
