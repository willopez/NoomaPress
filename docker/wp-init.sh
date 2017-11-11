#!/bin/bash

# Perform WordPress installation
docker exec admin.example.local wp --path=/usr/src/wordpress db reset --yes
docker exec admin.example.local wp --path=/usr/src/wordpress core install --url=http://admin.example.local --title="Example Admin" --admin_user=admin --admin_password=admin --admin_email=example@example.com

# Install plugins and themes
docker exec admin.example.local wp --path=/usr/src/wordpress plugin install gutenberg --activate
docker exec admin.example.local wp --path=/usr/src/wordpress plugin install disable-blogging --activate
docker exec admin.example.local wp --path=/usr/src/wordpress plugin install https://github.com/willopez/fancy-admin-ui/archive/master.zip --activate --force
docker exec admin.example.local wp --path=/usr/src/wordpress theme install twentyseventeen --activate

# Delete unnecessary plugins and themes
docker exec admin.example.local wp --path=/usr/src/wordpress plugin delete hello
docker exec admin.example.local wp --path=/usr/src/wordpress plugin delete akismet
docker exec admin.example.local wp --path=/usr/src/wordpress theme delete twentyfifteen
docker exec admin.example.local wp --path=/usr/src/wordpress theme delete twentysixteen

# Set url structure
docker exec admin.example.local wp --path=/usr/src/wordpress rewrite structure '/%postname%/' --hard
