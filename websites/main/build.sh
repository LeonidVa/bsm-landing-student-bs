#!/bin/bash
export NODE_ENV="production"
set -e
set -x
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
sh "${DIR}/pages.sh"
yarn run build
