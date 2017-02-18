'use strict';

import fs from 'fs';
import sql from 'sql.js';

class AuthoritiesData
{
    constructor() {
        this.linkDb = new sql.Database(fs.readFileSync(`${__dirname}/db/linkmwauthorities.sqlite`));
        this.dataDb = new sql.Database(fs.readFileSync(`${__dirname}/db/mwauthorities.sqlite`));
    }

    find(link) {
        const linkStmt = this.linkDb.prepare('SELECT data FROM linkmwauthorities WHERE key=:key');
        const dataKey = linkStmt.getAsObject({':key': link}).data;

        if (!dataKey) {
            return null;
        }

        const dataStmt = this.dataDb.prepare('SELECT data FROM mwauthorities WHERE key=:key');
        return dataStmt.getAsObject({':key': dataKey}).data;
    }
}

export default AuthoritiesData;
