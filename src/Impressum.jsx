import Style from "./Impressum.module.css"

export const Impressum = () => {

    return (
            <div className={ Style.main_container }>
                <h1>Impressum</h1>
                <ul>
                    <li>Projekt: ATypicalmind</li>
                    <li>Julia Döring</li>
                    <li>Kerschensteinerstraße 6</li>
                    <li>84130 Dingolfing</li>
                    <li>Telefon: 08731/ 3196-0</li>
                </ul>
            </div>
            )
}