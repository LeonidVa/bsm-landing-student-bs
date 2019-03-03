#!/bin/bash
export NODE_ENV="development"
set -e
DIR="$( dirname $( dirname "${0}" ) )"

if [ ! -e "${DIR}/bsm-shared" ]; then
    if [ ! -d ${DIR}/../bsm-common ]; then
        cd ../
        git clone https://github.com/LeonidVa/bsm-common.git
        cd ${DIR}
    fi

    ln -s ../bsm-common/bsm-shared ./bsm-shared
fi

if [ ! -e "${DIR}/node_modules" ]; then
    npm install
fi

npm run dev
