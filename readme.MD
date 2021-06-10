# oe-zoo-manager-opl
We maken een webpagina die toont welke personen verantwoordelijk zijn voor bepaalde dieren in een dierentuin.

## Voor je begint ...
Voor deze opdracht maken we een bevraging naar een echte (eigen) online bron.
Hiervoor maken we gebruik van Github pages. **deze moet nog door jou ingesteld worden**.

Wanneer je je eigen repository voor deze oefening gemaakt hebt doe je het volgende:
* Ga via de browser naar jouw online repository
* Klik op 'Settings'
* Zoek naar in de settings naar 'Github pages'
* Selecteer in de twee dropdowns dat je de `master` branch als build source voor je Github page wil gebruiken in combinatie met de `/docs` folders.
* **Klik op save**

Wanneer je opgeslaan hebt, verschijnt er bovenaan een link naar waar je repository gepubliceerd werd. Beschouw deze als de rootfolder. Vervolgens kun je de json-file online raadplegen via: `https://url-naar-jouw-github-pages/api/animals.json`.

> Belangrijk!
>
> Indien het niet lukt om de online bron te raadplegen, kan je gebruikmaken van de jsonfile als variabele (string). Deze vind je onder `js/animaldata.js`.

## Opzet van de oefening
Je hebt nu een online (of offline) bron die jouw gegevens over de dieren en hun verantwoordelijke persoon. Schrijf nu JavaScript code die de online (of offline)bron  aanspreekt om deze info weer te geven op de webpagina.

Met andere woorden: bevraag eerst je online bron via een `fetch()` en/of een `XMLHttpRequest`, lees de ontvangen json-data uit en geef ze weer in het HTML-element met id `animals`.

Er is reeds een css-klasse, `.card`, beschikbaar om te helpen bij de layout. De `main#animals` is namelijk een flexbox.
