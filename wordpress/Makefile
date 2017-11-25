-include env_make

TAG ?= latest

REPO = admin.example.com

.PHONY: build push release

default: build

build:
	docker build -t $(REPO):$(TAG) -f Dockerfile-wp .

push:
	docker push $(REPO):$(TAG)

release: build push
