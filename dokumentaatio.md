# Kassan palaute- ja inventaario laskusovellus

## sovelluksen tämänketkiset ominaisuudet ja idea tähän sovellukseen
Sovellus otta vastaan ostojen kokonaissumma, käteisrahamäärän minkä asiakas sen maksamiseen antaa ja kassan inventaarion, eriteltynä kaikkiin seteleihin ja kolikoihin.
Näillä tiedoilla sovellus laskee minkän rahamäärän minkälaisilla seteleillä pitää palauttaa asiakaalle, niin että palautus tapahtuu mahdollisimman isoilla
saatavilla olevilla rahayksiköillä. Se näyttää myös tarkan kolikko- tai setelimäärän kukin rahayksikön kohdalla, minkä asiakaalle pitäisi palauttaa.
Se palauttaa myös uuden kassan inventarion palautuksen jälkeen. Lisäksi sovellus kertoo kassan statuksen 'OPEN' jos rahaa palautukseen riittää, ja ylimääräistä rahaa jää,
'CLOSED' jos palautus on juuri saman suuruinen kuin kassan varat tai 'INSUFFICIENT FUNDS', jos kassan varat ei riitä palautukseen.

Idean tähän sovellukseen sain Freecodecampin JavaScript kurssin loppuharjoituksesta. Siinä vaadittiin vain että sovellus palautta kassan statuksen ja rahamsumman joka yksiköstä
palautettavaksi. Siihen olen kähittänyt oman ratkaisun minkä palautin Freecodecampin ja sain kurssin sertifikaatin.
Sen jälkeen jatkokehitin sovelluksen niin että se näyttää myös setelien määrän minkä pitää palauttaa joka yksikön kohdalla ja uuden kassan inventaarion.

## Käytetyt kielet ja kirjastot
- Sovelluksen koodi toimii JavaScriptillä
- Sovelluksen funktiot on automaattitestattu Jest testauskirjaston kanssa. Myös Jestin liäosa on käytetty Visual Studio Codessa.

## Jatkokehityssuunnitelmat
