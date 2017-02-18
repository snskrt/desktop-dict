#!/usr/bin/env bash

MY_PATH="$( cd "$( dirname $0 )" && pwd )"
cd ${MY_PATH}

echo "Making input.txt"
node ${MY_PATH}/make_input.js ${1} "${MY_PATH}/input.txt"

echo "Making sqlite database"
DB_PATH="${MY_PATH}/../../main_process/dicts/mw/db/mw.sqlite"
rm ${DB_PATH}
sqlite3 ${DB_PATH} < ${MY_PATH}/fill_db.sql

echo "Removing input.txt"
rm ${MY_PATH}/input.txt

echo "Done"
