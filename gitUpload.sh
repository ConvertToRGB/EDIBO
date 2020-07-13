#!/bin/bash
if [ $# == 1 ]
then
git config --global user.email converttorgb@gmail.com
git add .
git commit -m $1
git push origin master
fi
