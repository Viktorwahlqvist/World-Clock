### 3 ställen där TypeScript ger fördelar jämfört med JavaScript i din kod

    * TypeScript säkerställer att datatyperna som ska användas i t.ex. en funktion eller variabel har rätt datatyp. Så t.ex om min hook för att sätta en backgrund så säkerställer TypeScript att om background som kommer in inte är en sträng eller undefined så blir det kompileringsfel samma sak gäller med defaultpic som ska vara en boolean eller undefined.

    * Här har jag definierat hur ett timezone-objekt ska vara strukturerat. Jag kallar det Cities, så här kan jag ange att city i objektet ska vara en sträng.
     När jag sedan hämtar data från min JSON-fil med fetch och skriver as Cities[], säkerställer jag att formatet som kommer från JSON-filen kommer se ut så.
    ```ts
    export default interface Cities {
    city: string,
    country: string,
    countryCode: string,
    timeZone: string,
    hour12: boolean,
    defaultpic?: boolean
    }
    ```
    * På min DigitalClock-komponent så definierar jag att objektet selected ska vara av typen Cities. Detta gör att när jag sedan ska använda mig av selected som t.ex. selected.timeZone eller selected.city. När jag skriver selected får jag förslag via autocompletion av editorn och även felvarningar om man skriver fel, vilket minskar risken för misstag.

### Beskriva hur TypeScript transpileras till JavaScript i ditt projekt

    * I mitt Vite + React-projekt traspileras TypeScript-koden automatiskt till JavaScript.
    * TypeScript-koden kontrolleras först av kompilatorn för att hitta typfel och ger sånnafall transpilationsfel. Om inga fel hittas transpileras koden till vanlig JavaScript-kod.
