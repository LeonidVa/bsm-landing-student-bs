#!/bin/bash
export NODE_ENV="production"
set -e
rm -rf ./.next/
npm run build
BDIR=$(cat ./.next/BUILD_ID)
mkdir ./.next/${BDIR}/
#PAGESDIR=$(realpath ./.next/bundles/pages)
PDIR=$(realpath ./.next/${BDIR}/page)
ln -s ./../bundles/pages ${PDIR}
