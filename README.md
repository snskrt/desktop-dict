# Sanskrit-English Dictionary

Monier Williams and Apte Sanskrit-English dictionaries desktop app.

Windows and Mac distributions available.

# Running from source

**Install libraries**

```bash
$ npm install
```

**Run tests**

```bash
$ npm test
```

**Build app assets**

```bash
$ npm run build-assets
```

**Start locally**

```bash
$ npm start
```

# Updating the MW database

1. Download latest `mw.xml` from [sanskrit-lexicon.uni-koeln.de](http://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/2014/downloads/mwxml.zip).

2. Run the script:
```bash
$ npm run mw-db path/to/mw.xml
```
3. Commit new database file: `main_process/dict/mw/db/mw.sqlite`

# Updating the Apte database

1. Download latest `ap90.xml` from [sanskrit-lexicon.uni-koeln.de](http://www.sanskrit-lexicon.uni-koeln.de/scans/AP90Scan/2014/web/webtc/download.html).

2. Run the script:
```bash
$ npm run apte-db path/to/ap90.xml
```
3. Commit new database file: `main_process/dict/apte/db/ap90.sqlite`


# Credits

Based on [Cologne Digital Sanskrit Dictionaries](http://www.sanskrit-lexicon.uni-koeln.de).
