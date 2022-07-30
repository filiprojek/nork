/* spell-checker: disable */

# Todo:
- [ ] auth jwt refresh token based system
  - https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/
- [ ] version of nork control
- [ ] upgrade to newer version system
- [ ] updatnout make files (obzvlast modely a rozlisovat modely podle norkconfigu)
- [ ] vyzadovat aktualni verzi 3.#.# pro make commandy (pouzivaly se jiny predtim soubory)
- [ ] moznost vytvorit projekt bez db


### 11-24-2021
- zacal jsem predelavat nork do OOP
- co jsem udelal:
  - [x] --help
  - [x] --version
  - [x] setup
  - [x] make
  - [x] create
    - delam na tom
    - je treba dopsat par types a fixnout zbytek erroru
    - zatim netestovana funkcnost

### 1-10-2022
- dodelal jsem create a otestoval ho
- [x] create

### 7-30-2022
 - norkconfig se generuje lepe a actually ho pouzivam
 - pri vytvareni projektu je mozne vybrat si orm (mongoose & sequlize)
 - default modely pro db se kopiruji na zaklade parametru db z norkconfigu
 - updatnutej ts skeleton
 - dropnul jsem support pro js

 - version update: 3.0.5
