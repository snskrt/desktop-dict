CREATE TABLE ap90 (
 key VARCHAR(100)  NOT NULL,
 lnum DECIMAL(10,2) UNIQUE,
 data TEXT NOT NULL
);
.separator "\t"
.import input.txt ap90
create index datum on ap90(key);
pragma table_info (ap90);
select count(*) from ap90;
.exit
