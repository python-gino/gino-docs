install:
	yarn

build:
	yarn generate
	cd .. && rm -rf css favicon.ico _nuxt img *.html js manifest.json precache-manifest* robots.txt service-worker.js
	cd .. && cp -r src/dist/* .
