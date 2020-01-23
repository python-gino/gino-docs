install:
	yarn

build:
	yarn generate
	cd .. && rm -rf favicon.ico _nuxt robots.txt sw.js index.html credits
	cd .. && cp -r src/dist/* .
