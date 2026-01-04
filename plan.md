# Plan: Website Asia's Gift of Hope

## Over de Stichting

**Asia's Gift of Hope** is een stichting opgericht door Alaa Alamirat, geneeskundestudente aan het Erasmus MC. De stichting is vernoemd naar zijn moeder Asia, een vrouw met een gouden hart die als vrijwilliger tolkte bij Vluchtelingenwerk en altijd klaarstond voor anderen.

### Missie
Hoop en menselijkheid bieden aan kwetsbare gezinnen in Syrië door middel van:
- Medische hulp (protheses, medicatieschulden aflossen)
- Babyvoeding en luiers voor gezinnen die het niet kunnen betalen
- Voedselpakketten
- Onderwijs ondersteuning (schoolspullen, laptops)
- Noodhulp (woningverbetering)

---

## Huidige Site

De huidige site is een placeholder "LoremCo" site met:
- Eleventy (11ty) als static site generator
- Tailwind CSS voor styling
- Nunjucks templates
- Pagina's: index.njk, contact.njk

---

## Nieuwe Site Structuur

### Pagina's

#### 1. Home (Long Homepage)
Scrollbare landingspagina met de volgende secties:

**Hero Sectie**
- Titel: "Asia's Gift of Hope"
- Subtitel: "Hoop en menselijkheid voor Syrië"
- Achtergrond: video https://www.youtube.com/embed/LymByDEqWkM?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&origin=https%3A%2F%2Fasiasgiftofhope.nl&widgetid=1&forigin=https%3A%2F%2Fasiasgiftofhope.nl%2F&aoriginsup=1&vf=6
- Call-to-action: "Doneer Nu" button

**Over Ons**
- Korte introductie over de stichting
- Foto van Alaa met kinderen/vrijwilligerswerk
- Link naar meer informatie

**Onze Missie - Prothese Hulp**
- Tekst over de 14+ patiënten die zijn geholpen met protheses
- Before/after foto's (Jana, Bikri, Zakaria)
- "Een prothese herstelt niet alleen iemands waardigheid, maar zorgt ervoor dat mensen weer kunnen werken en studeren"

**Onze Missie - Babyvoeding & Luiers**
- Verhaal over baby die mager was en na 2 maanden voeding gezond werd
- Foto's van babyvoeding actie

**Onze Missie - Voedselpakketten**
- Verhaal over brood kopen van straatverkopers ("twee vliegen in één klap")
- Foto's van voedselpakketten

**Onze Missie - Onderwijs**
- Verhaal over Mustafa (student die laptop ontving)
- Schooltassen en spullen voor kinderen

**Over Asia**
- Verhaal over Asia, de naamgever van de stichting
- Portretfoto van Asia
- Quote: "Achter de tranen van verdriet schuilt de glimlach der herinnering"

**Call-to-Action Sectie**
- "Help ons hoop brengen"
- Grote donatie button
- QR-code

#### 2. Donatie Pagina
- Uitleg over waar donaties naartoe gaan
- Donatieformulier met velden:
  - Naam
  - E-mail
  - Bedrag (preset opties: €10, €25, €50, €100, Anders)
  - Bericht (optioneel)
- QR-code voor directe betaling
- Contactgegevens

---

## Afbeeldingen

De volgende afbeeldingen worden beschikbaar gemaakt in `/src/images/`:

### Achtergrond/Context
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image1.jpeg | oorlogsschade-syrie-verwoeste-straat.jpg | Verwoeste straat in Syrië met gebouwen in puin |
| image8.png | oorlogsschade-syrie-ingestort-gebouw.png | Ingestort gebouw door oorlog |
| image9.png | oorlogsschade-syrie-puin.png | Puin en verwoesting |
| image10.png | oorlogsschade-syrie-mensen-lopen-door-puin.png | Mensen lopen door verwoeste straat |
| image11.png | oorlogsschade-syrie-straat-met-vuilnis.png | Straat met vuilnis bij verwoeste gebouwen |

### Vrijwilligerswerk & Team
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image2.png | alaa-met-groep-kinderen-syrie.png | Alaa met groep lachende kinderen |
| image3.png | alaa-met-twee-kinderen.png | Alaa met twee kinderen |
| image5.png | alaa-met-klein-meisje.png | Alaa met klein meisje |
| image6.png | alaa-met-kinderen-groepsfoto.png | Groepsfoto met kinderen |
| image52.png | alaa-als-medisch-vrijwilliger.png | Alaa in medische setting |
| image53.png | alaa-en-moeder-asia-met-bloemen.png | Alaa met moeder Asia |
| image54.png | portret-asia-moeder-stichting.png | Portretfoto van Asia |

### Medicatieschulden
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image12.png | schuldenboekje-apotheek-pagina-1.png | Schuldenboekje van apotheek |
| image13.png | schuldenboekje-apotheek-pagina-2.png | Schuldenboekje van apotheek |
| image14.png | bonnetje-medicatie-schulden.png | Bonnetje met bedragen |
| image15.png | bonnetje-babyformula-alaa-alamirat.png | Bonnetje babyformula |

### Prothese Missie
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image16.jpeg | bikri-voor-prothese-beide-benen-geamputeerd.jpg | Bikri voor zijn protheses |
| image31.png | bikri-met-nieuwe-beenprotheses.png | Bikri met zijn nieuwe protheses |
| image32.png | bikri-toont-beenprotheses.png | Bikri toont zijn protheses |
| image18.png | jana-in-prothesecentrum.png | Jana in het prothesecentrum |
| image19.png | jana-opent-koekje-met-handprothese.png | Jana gebruikt haar handprothese |
| image20.png | jana-blij-met-handprothese.png | Jana blij met haar prothese |
| image21.png | jana-loopt-met-handprothese.png | Jana loopt trots met haar prothese |
| image22.png | firas-vrolijke-jongen-met-familie.png | Firas met vrijwilliger |
| image23.png | firas-hand-mist-vingers.png | Firas' hand zonder vingers |
| image24.png | zakaria-student-met-beenprothese.png | Zakaria met beenprothese |
| image25.png | zakaria-portret.png | Zakaria portret |
| image26.png | man-met-handprothese-bezorger.png | Oudere man met handprothese |
| image27.png | man-drinkt-met-handprothese.png | Man gebruikt handprothese |
| image28.png | patient-wacht-op-beenprothese.png | Patiënt in prothesecentrum |
| image29.png | meisje-met-rontgenfoto.png | Meisje toont röntgenfoto |
| image30.png | maken-gipsafdruk-voor-prothese.png | Gipsafdruk maken |
| image33.png | man-voor-beenprothese.png | Man voor zijn prothese |
| image34.png | man-na-beenprothese.png | Man na zijn prothese |
| image35.png | meisje-met-mickey-mouse-beenprothese.png | Meisje met decoratieve prothese |
| image36.png | patient-leert-lopen-met-protheses.png | Patiënt leert lopen met rollator |

### Babyvoeding & Gezondheid
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image37.jpeg | baby-ondervoeding-voor-hulp.jpg | Baby voor voedingshulp (mager) |
| image38.png | baby-gezond-na-voedingshulp.png | Baby na 2 maanden voeding (gezond) |
| image39.png | vrijwilliger-met-babyvoeding-in-auto.png | Babyvoeding transport |
| image40.jpeg | vrijwilliger-met-luiers-en-babyspullen.jpg | Luiers en babyspullen |
| image41.png | baby-lea-medische-zorg.png | Baby Lea |
| image42.png | baby-lea-closeup.png | Baby Lea close-up |

### Voedselpakketten
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image43.png | brood-kopen-van-straatverkoper-1.png | Brood kopen van oudere man |
| image44.png | brood-kopen-van-straatverkoper-2.png | Brood kopen van straatverkoper |
| image45.png | voedselpakketten-samenstellen.png | Voedselpakketten samenstellen |

### Onderwijs
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image46.png | schooltassen-en-spullen-voor-kinderen.png | Schooltassen en materiaal |
| image47.png | laptop-voor-mustafa-student.png | Laptop voor student Mustafa |

### Woningverbetering
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image48.png | nieuwe-deur-geplaatst-alleenstaande-moeder.png | Nieuwe deur geplaatst |
| image49.png | nieuw-raam-geplaatst-alleenstaande-moeder.png | Nieuw raam geplaatst |
| image50.jpeg | huis-zonder-deur-voor-renovatie.jpg | Huis voor renovatie (geen deur) |
| image51.jpeg | huis-zonder-raam-voor-renovatie.jpg | Huis voor renovatie (geen raam) |

### Overig
| Origineel | Nieuwe naam | Beschrijving |
|-----------|-------------|--------------|
| image4.png | lachend-kind-in-kar.png | Vrolijk kind |
| image57.png | qr-code-donatie.png | QR-code voor donaties |
| image58.png | quote-boek-herinnering.png | Quote over herinnering |

---

## Technische Implementatie

### Stap 1: Voorbereiding
1. Maak `/src/images/` directory aan
2. Kopieer en hernoem alle afbeeldingen met beschrijvende namen
3. Optimaliseer afbeeldingen voor web (compressie, formaat)

### Stap 2: Update Metadata
1. Update `metadata.json`:
   - url: nieuwe domein
   - title: "Asia's Gift of Hope"
   - description: "Stichting voor humanitaire hulp in Syrië"

### Stap 3: Styling
1. Update kleuren in CSS naar warmere, hoopvolle tinten
2. Behoud Tailwind CSS framework
3. Voeg hero gradient aan met nieuwe kleuren

### Stap 4: Templates
1. Update `header.njk` met nieuw logo/naam en navigatie
2. Update `footer.njk` met contactgegevens en social links
3. Update `base.njk` indien nodig

### Stap 5: Home Pagina
1. Vervang inhoud van `index.njk` met nieuwe secties
2. Implementeer lange scrollbare homepage met:
   - Hero met achtergrondafbeelding
   - Over ons sectie
   - Missie secties (prothese, babyvoeding, voedselpakketten, onderwijs)
   - Over Asia sectie
   - Call-to-action

### Stap 6: Donatie Pagina
1. Vervang `contact.njk` met `doneer.njk`
2. Implementeer donatieformulier
3. Voeg QR-code toe
4. Voeg betaalinformatie toe

### Stap 7: Testen
1. Test alle pagina's op responsiviteit
2. Controleer alle afbeeldingen
3. Test formulier functionaliteit
4. Valideer HTML/CSS

---

## Kleurenpalet (voorstel)

- **Primair**: Warm oranje/goud (#E8A54B) - Hoop en warmte
- **Secundair**: Diepblauw (#1E3A5F) - Betrouwbaarheid
- **Accent**: Zacht groen (#6B9E78) - Groei en herstel
- **Achtergrond**: Warm wit (#FDF8F3)
- **Tekst**: Donkergrijs (#2D3748)

---

## Openstaande Vragen

1. Is er een bestaand logo voor Asia's Gift of Hope? Nee, maak en lotus bloem in SVG
2. Welk domein wordt gebruikt? https://asiasgiftofhope.nl/
3. Is er een betalingsprovider/bankrekening voor donaties? Nog niet, zet nu een tekst "donaties binnenkort mogelijk"
4. Zijn er social media accounts om te linken? nog niet
5. Moet er een KvK-nummer of ANBI-status vermeld worden? nog niet
---

## Opmerking over Foto's

Sommige foto's tonen kwetsbare personen en medische situaties. Overweeg:
- Toestemming van gefotografeerde personen
- Gezichten blurren indien nodig
- Gevoelige beelden alleen gebruiken waar nodig voor context

De before/after foto's van baby met ondervoeding (image37/38) zijn krachtig maar gevoelig - gebruik met zorg.

--> Gebruik liever alternatieve foto's
