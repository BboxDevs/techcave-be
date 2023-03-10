#! /bin/zsh

echo "Testing docker build and run"

docker container rm -f pg
docker volume prune -f

docker build -f Dockerfile-pg -t pg:1.0 .
docker run -d --name pg pg:1.0