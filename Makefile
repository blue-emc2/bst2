.PHONY: setup up upd down
setup:
	docker-compose build
	docker-compose run --rm backend bin/setup

up:
	docker-compose up

upd:
	docker-compose up -d

down:
	docker-compose down
