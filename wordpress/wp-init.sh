#!/bin/bash

# Perform WordPress installation
docker exec admin.example.local wp --path=/usr/src/wordpress db reset --yes
docker exec admin.example.local wp --path=/usr/src/wordpress core install --url=http://admin.example.local --title="Example Admin" --admin_user=admin --admin_password=admin --admin_email=example@example.com

# Install plugins and themes
docker exec admin.example.local wp --path=/usr/src/wordpress plugin install gutenberg wp-stateless disable-blogging white-label-cms redis-cache https://github.com/willopez/fancy-admin-ui/archive/master.zip --activate
docker exec admin.example.local wp --path=/usr/src/wordpress theme install twentyseventeen --activate

# Delete unnecessary plugins and themes
docker exec admin.example.local wp --path=/usr/src/wordpress plugin delete hello akismet
docker exec admin.example.local wp --path=/usr/src/wordpress theme delete twentyfifteen twentysixteen

# Set url structure
docker exec admin.example.local wp --path=/usr/src/wordpress rewrite structure '/%postname%/' --hard

# Fix permissions
docker exec admin.example.local chown -R nobody.nobody /var/www/wp-content