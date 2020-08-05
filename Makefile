serve:
	parcel index.html gifs/* favicon* apple* android* browser* mst* safa* site.webmanifest

build:
	rm -rf dist
	parcel build index.html gifs/* favicon* apple* android* browser* mst* safa* site.webmanifest

deploy:
	$(MAKE) build
	firebase deploy

