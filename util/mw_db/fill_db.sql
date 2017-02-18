CREATE TABLE mw (
 key VARCHAR(100)  NOT NULL,
 lnum DECIMAL(10,2) UNIQUE,
 data TEXT NOT NULL
);
.separator "\t"
.import input.txt mw
create index datum on mw(key);
pragma table_info (mw);
select count(*) from mw;
.exit
