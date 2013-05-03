Top Word Frequency
==============

I converted the 1000 most frequent Spanish words to JSON. The count.js file sums the occurences of the top X words from the total list and prints out the percent those words are of the total list.

For example the top 122 words make up 70% of all the top 1000 word occurences. Potentially useful if you are trying to learn a language and want to focus your efforts.

This would work with any input data but it would have to be the same format as spanishWords.json.

The data is from Wiktionary and sourced from movies and TV show subtitles:
http://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Spanish1000

To run
-----

- Clone the repo and make sure you have Node.js installed
- in the directory run 'node count.js'
