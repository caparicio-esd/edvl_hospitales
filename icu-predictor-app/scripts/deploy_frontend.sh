#!/bin/sh

cd ./server 
rm -rf ./web
mkdir -p ./web/static
cd ..
cd frontend
npm run build
mv ./dist ./../server/web/static/dist
cd ..