AlternativeTitles has grown a little larger then originally intended. 
*Link fixer
**CleanInput: Removes spaces from a string and generates a hyperlink from the text (adds http:// if not included)
**ProxyInput: Adds our university proxy to the start of a string (allowing offsite access once staff/students log in)

*SoResponsibility
**Cleans an inserted statement of responsibility to remove all non-alpha characters, add/remove commars as required.

*Transliteration
**Makes extensive use of fold-to-ascii (github.com/mplatt/fold-to-ascii-js) to transliterate non-ascii characters into ascii characters.
This process is backed up by dictionary.txt for specific translations not covered by fold-to-ascii or where a simple character replacement would not be appropriate.

*Space Remover
**Simply removes newlines and multiple spaces from a string.


External files:

*Fold to Ascii:
** Fold to Ascii is not authored by myself, and I have not made any alterations to the code. 
** The latest script may be accessed at: https://github.com/mplatt/fold-to-ascii-js
** Author: MPlatt, see his work at: https://github.com/mplatt
