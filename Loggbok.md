# Hur tänkte du när du skissade gränssnitt? Gärna länk till skisser.

- Jag tänkte direkt att jag ville ha en bild på staden som hör till tiden man tittar på, och eftersom jag ville ha det, valde jag också att inte bara ha en färg på "homePage". Jag valde istället att ha en bild på en klocka.
  Jag har valt att inte ha för mycket på sidan, jag vill att den ska vara tydlig och att det inte ska hända för mycket som kan skapa förvirring hos användaren.
  Jag började med att skriva ner på min trello vad som skulle göras och några user stories, sedan fixade jag en bild som jag ville ha som bakgrund på homepage och där användaren har lagt till en egen tidszon.

länkar till trello och figma är: -[Trello](https://trello.com/b/Zp7DxCui/world-clock) -[Figma](https://www.figma.com/design/bkUJNVipQdHoVAu5mqhksR/World-clock?node-id=0-1&t=fn5OddQHLKIM27de-1)

# Hur har valt att dela upp din applikation:

## Vilka komponenter?

- Jag har skapat flera olika mappar med components och pages är komponenter som returnerar jsx. Mappen pages innehåller varje sida som består av Homepage, Clockpage samt AddTimeZonePage. I min components mapp så har jag AnalogClock, Button, DigitalClock samt Input.

## Vilka funktioner/logik ligger utanför komponenter? Varför?

- Jag har valt att ha flera funktioner utanför komponenterna för flera olika andledningar, en stor anledning är för att separera lite på koden så det gör den mer lätt läst och återanvändbar. Ett exempel är att jag har en funktionen för klockan i en egen hook för att sidan inte ska renderas om varje gång klockan updateras dvs varje sekund och sedan använder jag denna i 2 styckna komponenter.

## Vilka typer och interfaces har du valt att lägga i egna filer för återanvändning

- Jag har 3 styckna filer med typer och interfaces, jag har valt att lägga dom i egna filer för att lättare kunna hitta dom och dom som jag har lagt i egna filer är dom som jag använder mest i applikationen. Första filen heter AnalogSettings där jag definierar hur en färg ska se ut, Har även en DigitalSettings som är väldigt lik enda skillnaden är att deras interface är olika eftersom att de är olika saker man kan ändra på klockan. Sedan har jag Cities där jag definierar hur ett tidszons objekt ska se ut och används väldigt flitigt i applikationen.

## Förklara och motivera din val av struktur (enligt ovanstående punkter).

- Mitt val av struktur är att jag har försökt ha det så som jag uppfattat från föregående år hur man ska strukturera. Pages är sidorna som ska renderas, components kan vara återanvändbar kod men har även använd components för att lägga sånt som jag vill ha i en literals dvs visa antingen analog eller digital osv, det gör även att filerna blir inte så överflödiga. Funktioner som inte returnerar jsx och som kan vara återanvändbar blir en egen hook för att lätt kunna återanvända.

## Hur gick tillväga när du använde Git, samt när du testade att programmet faktiskt fungerar som det ska.

- Jag gjorde minst en push varje dag, när jag kände att det var mycket ändrat så pushade jag.
  Hade nog kunnat göra mer pushes för att vara säker på att ingen kod blir förlorad samt lättare att gå tillbaka.
  Jag körde bara på samma branch. Hade kunnat göra flera för att få till dom kontinuerliga pushes, Jag har haft code-reviews med vänner från klassen för att få tips och ideér. Jag har inte kört med något test program för att testa applikationen. Har testat själv via localhost.
