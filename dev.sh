#!/bin/bash
export NODE_ENV="development"
set -e
DIR="$( dirname $( realpath "${0}" ) )"

if [ ! -e "${DIR}/bsm-shared" ]; then
    if [ ! -d ${DIR}/../bsm-common ]; then
        cd ../
        git clone git@gitlab.com:besmarter/bsm-common.git
        cd ${DIR}
    fi

    ln -s ../bsm-common/bsm-shared ./bsm-shared
fi

if [ ! -e "${DIR}/node_modules" ]; then
    yarn install
fi

yarn run dev
