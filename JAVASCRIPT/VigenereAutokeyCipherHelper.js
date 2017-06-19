The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). In this kata, we're implementing Vigenère's autokey cipher.

The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

From Wikipedia:

The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.
(...)

In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.
The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

With the basic Vigenère Cipher, we assume the key is repeated for the length of the text, character by character. In this kata, the key is only used once, and then replaced by the decoded text. Every encoding and decoding is independent (still using the same key to begin with). Unlike the Vigenère Cipher Helper kata, the key index is only incremented if the current letter is in the provided alphabet.

Visual representation (suggested by OverZealous):

message: my secret code i want to secure
key:     pa ssword myse c retc od eiwant
Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

E.g.

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj'); // returns 'waffles'

// returns 'pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib'
c.encode('amazingly few discotheques provide jukeboxes')

// returns 'amazingly few discotheques provide jukeboxes'
c.decode('pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib')