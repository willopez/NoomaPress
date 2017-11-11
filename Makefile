-include env_make

NODE_ALPINE_VER ?= 8.7-alpine
TAG ?= node-$(NODE_ALPINE_VER)

REPO = example.local

.PHONY: build push release

default: build

build:
	docker build -t $(REPO):$(TAG) --build-arg NODE_ALPINE_VER=$(NODE_ALPINE_VER) ./

push:
	docker push $(REPO):$(TAG)

release: build push
