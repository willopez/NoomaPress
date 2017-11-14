-include env_make

TAG ?= 0.1.0

REPO = admin.example.local

.PHONY: build push release

default: build

build:
	docker build -t $(REPO):$(TAG) -f Dockerfile-wp .

push:
	docker push $(REPO):$(TAG)

release: build push
