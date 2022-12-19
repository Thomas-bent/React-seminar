import Style from './intelligenz.module.css'

export const Intelligenz = () => {
    return(
            <div className={ Style.main_text }>
                Künstliche Intelligenzen (KI) sind computergestützte Systeme, die menschenähnliche Fähigkeiten aufweisen und Aufgaben automatisieren
                oder lösen können. Sie werden in vielen Bereichen eingesetzt, von der Sprachverarbeitung bis hin zur medizinischen Diagnose.
                KI ist ein breites und schnell wachsendes Gebiet, das unterschiedliche Technologien und Ansätze umfasst. Eine der bekanntesten
                KI-Technologien ist das maschinelle Lernen, bei dem computergestützte Algorithmen auf Basis von Daten und Beispielen lernen,
                ohne explizit programmiert zu werden. So können Maschinen etwa Muster in großen Datenmengen erkennen und Vorhersagen treffen,
                indem sie die Erfahrungen von Menschen oder anderen Systemen nutzen.
                KI hat das Potential, in vielen Bereichen einen Mehrwert zu schaffen und Prozesse zu optimieren. Sie kann zum Beispiel dazu
                beitragen, menschliche Fehler zu minimieren, indem sie Aufgaben automatisiert oder übernimmt, die für Menschen monoton oder
                anstrengend sind. In der Medizin kann KI bei der Diagnose von Krankheiten und der Entwicklung neuer Behandlungen helfen.
                In der Industrie kann sie zur Steigerung der Effizienz und Qualität beitragen, indem sie zum Beispiel Maschinenüberwachung
                oder Qualitätskontrolle automatisiert.<br />
                Insgesamt bietet KI viele Möglichkeiten, um Prozesse zu optimieren und Mehrwert zu schaffen. Allerdings ist es wichtig,
                dass sie verantwortungsbewusst entwickelt und eingesetzt wird, um mögliche negative Auswirkungen zu vermeiden. Durch eine
                transparente und ethische Entwicklung von KI-Systemen und eine enge Zusammenarbeit mit Menschen können die Vorteile von KI voll ausgeschöpft werden.<br />
                Selbst dieser Artikel ist bis hier von einer künstlichen Intelligenz namens „ChatGPT“ verfasst worden.
                Du kannst sie über diesen Link einfach selbst ausprobieren: https://chat.openai.com/. <br />
                Probiere sie doch gerne ebenfalls aus und überzeuge dich:
                <ul className={ Style.liste }>
                    <li>Midjourney: https://www.midjourney.com/home (Herunterladen einer App nötig)</li>
                    <li>Dall-e-2: https://openai.com/dall-e-2/ (Im Browser möglich)</li>
                </ul>
            </div>
    )
}