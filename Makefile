YARN=yarn

.PHONY: test

install:
	$(YARN) install

test:
	$(YARN) run ava
