# Homelab

```sh
bash ./init.sh
cp .env.sample .env
cp ./code/code.env.sample ./code/code.env
cp ./pihole/pihole.env.sample ./pihole/pihole.env
bash ./pihole/init.sh
EDIT ./.env ./code/code.env ./pihole/pihole.env
docker-compose up -d
```
