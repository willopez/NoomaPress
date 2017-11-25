-include env_make

NODE_VER ?= 8
TAG ?= latest

REPO = example.com

.PHONY: build push release

default: build

build:
	docker build -t $(REPO):$(TAG) --build-arg NODE_VER=$(NODE_VER) ./

push:
	docker push $(REPO):$(TAG)

release: build push
