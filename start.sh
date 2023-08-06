#!/bin/bash

if [ ! -d "/app/dist" ]
then

    echo "Delete node_modules folder";

    rm -rf node_modules

    echo "START COPY";

    cp -rf  /app/dist/. /usr/share/nginx/html/

    echo "END COPY";

    cd /usr/share/nginx/html/;
    echo "html dictionary files:"
    echo $(ls)
fi

