'use strict';

import fs from 'fs';
import sql from 'sql.js';

class AbbreviationsData
{
    constructor() {
        this.db = new sql.Database(fs.readFileSync(`${__dirname}/db/mwab.sqlite`));
    }

    find(id) {
        const stmt = this.db.prepare('SELECT data FROM mwab WHERE id=:id');
        const result = stmt.getAsObject({':id': id});

        return result.data || null;
    }
}

export default AbbreviationsData;
