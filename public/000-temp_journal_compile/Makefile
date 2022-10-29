SHELL=/usr/bin/env bash

pdf: book.adoc
	asciidoctor-pdf -r rouge.rb book.adoc
	$(info working on PDF)

book.pdf:
html: book.adoc
	asciidoctor -r rouge.rb book.adoc
	$(info working on HTML)

book.html:
.PHONY: clean

clean:
	rm -f *.pdf *.html

