#!/bin/bash
export NODE_ENV="development"
set -e
DIR="$( dirname $( realpath "${0}" ) )"
${DIR}/pages.sh
yarn run dev
