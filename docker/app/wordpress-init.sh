#!/bin/bash

docker-compose run --rm wp db reset --yes
docker-compose run --rm wp core install --url=http://admin.example.local --title="Example Admin local Site title" --admin_user=admin --admin_password=admin --admin_email=example@example.com
docker-compose run --rm wp plugin install gutenberg --activate
docker-compose run --rm wp plugin update --all
docker-compose run --rm wp rewrite structure '/%postname%/' --hard
docker-compose run --rm wp core update
