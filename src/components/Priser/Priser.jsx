import { PriserWrapper, PriserContainer } from "./Priser.style";
import { forwardRef } from "react";

export const Priser = forwardRef((props, ref) => {
    return (
        <PriserWrapper ref={ref}>
            <PriserContainer>
                <h2>Priser</h2> 
                <h3>Interiørveiledning / rådgivningstime</h3>
                <p>
                  Da kommer en stylist hjem til deg på befaring og går igjennom boligen rom for rom. 
                </p>  

                <p> 
                  Etter befaringen vil du motta en rapport på epost om tiltak du kan gjøre før fotografering og visning. <br />
                  I rapporten vil det også stå hva vi kan bidra med til boligstylingen og priser på stylingspakker vi kan tilby deg.   
                </p>
                 
                <p>
                  <strong>Pris kr 2000</strong>  
                </p>
                
                <h3>Ministyling</h3>
                <p>
                  Her kommer en stylist hjem til deg og gjør jobben for deg ved bruk av dine egne møbler og ditt interiør. 
                <br /> 
                  Her er fokuset å klargjøre din bolig ved bruk av det du har hjemme. 
                </p>

                <p> 
                  Ministyling forutsetter befaring på forhånd.  
                </p>

                <p>
                  <strong>Pris fra kr 2990</strong>   
                </p>

                <h3>Delstyling</h3>
                <p> 
                  Dette er den mest populære typen for styling. Her bruker vi dine store møbler og supplerer med tekstiler, planter og øvrig dekor fra vårt lager.
                  Vi tilpasser alltid stylingen etter stil og farge på de møblene som er i boligen fra før.
                </p>

                <p>
                  Stylingen blir stående til både fotografering og visning om ikke annet er avtalt på forhånd.
                  <br />
                  Delstyling forutsetter interiørkonsultasjon i forveien.
                </p>
          
                <p>
                  <strong>Pris fra kr 9990</strong>   
                </p>

                <p className="subparagraf">
                  *Ved delstyling gjelder alltid egne priser. 
                  <br /> 
                  Noen boliger mangler kun planter og det lille ekstra mens andre mangler stort sett alt. 
                  <br />
                  Prisen øker ut ifra hvor mye styling som behøves for å gjøre boligen klar til foto. Tilbud kommer i rapporten.
                </p>
                   
                <h3>Helstyling</h3>
                <p>
                Vi bruker våre stormøbler og annen interiør og dekor. 
                <br />
                Her speiler vi boligens materialer og skaper en rød tråd med moderne farger og dekor.  
                <br />
                Fokuset vil være på et helhetlig design og gi boligen best

                </p>

                <p>
                  <strong>Pris fra kr 15 000</strong>   
                </p>
                
                <p className="subparagraf">  
                *Ved helstyling gjelder alltid egne priser. 
                Noen boliger mangler kun helstyling på enkelte rom mens andre mangler møbler i alle rom. 
                Prisen øker ut ifra hvor mye styling som behøves for å gjøre boligen klar til foto. 
                <br />
                Tilbud kommer i rapporten.
                Hos oss er det viktigste at du som kunde blir fornøyd. 
                <br />
                Vår jobb er å sørge for at boligen har et riktig utrykk slik at fotografen har best mulig utgangspunkt 
                til å lykkes med å skape en bildeserie som fanger boligdrømmen til flest mulig. 
                Vi har drevet med boligstyling i Trondheim i flere år og er entusiastiske i jobben.
                </p>
            </PriserContainer>
        </PriserWrapper> 
    )
})