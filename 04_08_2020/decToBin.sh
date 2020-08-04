#!/bin/bash

if [ -e ./a.dat ]
then
rm a.dat
fi

x=10

echo $x >> a.dat
cat a.dat
