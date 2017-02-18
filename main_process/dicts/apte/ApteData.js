'use strict';

import fs from 'fs';
import sql from 'sql.js';

class ApteData
{
    constructor() {
        this.db = new sql.Database(fs.readFileSync(`${__dirname}/db/ap90.sqlite`));
    }

    find(key) {
        const stmt = this.db.prepare('SELECT key, lnum, data FROM ap90 WHERE key=:key ORDER BY lnum');
        stmt.bind({':key': key});

        let results = [];
        while (stmt.step()) {
            results.push(stmt.getAsObject());
        }
        return results;
    }

    findLnum(lnum) {
        const stmt = this.db.prepare('SELECT key, lnum, data FROM ap90 WHERE lnum=:lnum');
        const result = stmt.getAsObject({':lnum': lnum});
        return result || null;
    }
}

export default ApteData;
