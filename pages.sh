#!/bin/bash
set -x
CURRENTDIR="$( pwd )"
DIR="$( dirname $( realpath "${0}" ) )"
BASENAME=`basename "${DIR}"`
cd "${DIR}"
cd ../..
pwd
rm -rf ./pages
rm -rf ./.next
ln -s "./websites/${BASENAME}/pages" "./pages"
cd "${CURRENTDIR}"
pwd
echo Switched to ${BASENAME}