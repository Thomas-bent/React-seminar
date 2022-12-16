import React from 'react'
import Style from './entlastungspaket.module.css'

export const Entlastungspaket = () => {
  return (
    <div className={Style.container}>
        Das Ziel dieses nun schon dritten Pakets, das am 4. September von den Koalitionsparteien vorgestellt wurde, ist eine Entlastung der Bevölkerung durch 65 Milliarden Euro. Laut dem Bundeskanzler Olaf Scholz geht es darum, „das Land gut durch diese Zeit zu führen“. Dies soll laut der Bundesregierung vor allem durch kurzfristige Hilfen, strukturelle Veränderungen, um den Anstieg der Energiepreise zu dämpfen, und die Abschöpfung von Zufallsgewinnen am Strommarkt erreicht werden. Im Gegensatz zu den ersten beiden Entlastungspakten soll nicht mehr nur Bedürftigen, Familien, Geringverdiener und Pendlern geholfen werden, sondern auch Rentnern und Studierenden. Besonders die hohen Energiepreise bringen einige Menschen an ihr Existenzminimum. Die wichtigsten Elemente im Überblick:
        <ul className={Style.liste}>
            <li>
                Nachfolgerticket des 9€-Tickets: Bundesweites Nahverkehrsangebot für 49-69 €. Allerdings wird hier noch zwischen der Bundesregierung und den Bundesländern  beraten. Bayern beispielsweise will unter keinen Umständen dieses Ticket mitfinanzieren müssen, weshalb diese Gespräche wohl noch länger andauern werden.
            </li>
            <li>
                Verlängerung des Kurzarbeitergeldes: Die Sonderregelungen werden hierfür über den 30. September 2022 verlängert, wodurch Sicherheit für Unternehmen und Beschäftigte geschaffen werden soll.
            </li>
            <li>
                Strompreisbremse: Bis zu einem sogenannten „Basisverbrauch“ wird der Strom vergünstigt angeboten, damit das Nötigste abgedeckt ist. Trotzdem soll ein Anreiz zum Stromsparen erhalten bleiben, da eben nicht alle Strommengen billiger sind.
            </li>
            <li>
                Zuschüsse für Familien: Hier gibt es unteranderem eine Erhöhung des Kindergelds um 18 € für die beiden kommenden Jahre. Dies soll zudem nicht nur für die ersten beiden Kinder gelten, sondern auch bei weiteren Kindern Geld einbringen.
            </li>
            <li>
                Spätere Erhöhung des CO₂-Preises: Die eigentlich für den 1. Januar 2023 angesetzte Erhöhung der CO₂-Steuer wird auf das nächste Jahr verschoben, sodass zum Beispiel Tankpreise nicht noch stärker ansteigen.
            </li>
            <li>
                Auch den Unternehmen muss geholfen werden: Die bisher festgelegten Maßnahmen werden bis zum Jahresende durchgeführt und sogar erweitert und die aufgrund der Energiepreise geschwächten Firmen sollen durch ein besonderes Programm unterstützt werden.
            </li>
            <li>
                Einführung eines Bürgergeldes: Das Arbeitslosengeld II und das Sozialgeld werden ab 2023 durch ein modernes Bürgergeld abgelöst. Hier kommt es zu einer Änderung des Anpassungszeitraums der jährlichen Erhöhung, wodurch die Inflation künftige besser behandelt werden kann.
            </li>
            <li>
                Einmalzahlungen:
                <ul className={Style.unterliste}>
                    <li>
                        Studenten erhalten einmalig 200 €, nachdem schon in den Monaten bevor in Form des BAföG ein Heizkostenzuschuss erfolgte
                    </li>
                    <li>
                        Rentner dagegen erhalten zum 1.12.2023 einmalig 300 € in Form einer Energiepauschale der Rentenversicherung
                    </li>
                </ul>
            </li>
        </ul>
        Ob dieses Maßnahmenpaket die Bevölkerung genauso gut wie die Vorgängerpakete unter die Arme greifen kann, wird sich in den kommenden Monaten zeigen. Besonders im Winter werden die Deutschen mit den hohen Gaspreisen an ihre Grenzen kommen. Auch der Ukrainekrieg hat einen enormen Einfluss auf die aktuelle Situation in Deutschland und muss dementsprechend zugunsten aller Europäer so schnell wie möglich beendet werden.
    </div>
  )
}
