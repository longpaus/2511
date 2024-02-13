#!/bin/bash
for file in lab*/; do
    cd "$file"
    rm -rf .git*
    cd ..
done