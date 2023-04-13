#!/bin/bash
# Run this to check if migration have been done.

if [[ $(npx prisma migrate status | grep "Following migration have not yet been applied")  ]]; then 
    yarn db:reset -f
fi

yarn dev