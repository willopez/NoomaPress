#!/bin/bash

docker exec admin.example.local wp --path=/usr/src/wordpress db reset --yes
docker exec admin.example.local wp --path=/usr/src/wordpress core install --url=http://admin.example.local --title="Example Admin" --admin_user=admin --admin_password=admin --admin_email=example@example.com
docker exec admin.example.local wp --path=/usr/src/wordpress plugin install gutenberg --activate
docker exec admin.example.local wp --path=/usr/src/wordpress theme install twentyseventeen --activate
docker exec admin.example.local wp --path=/usr/src/wordpress plugin update --all
docker exec admin.example.local wp --path=/usr/src/wordpress rewrite structure '/%postname%/' --hard
docker exec admin.example.local wp --path=/usr/src/wordpress core update
