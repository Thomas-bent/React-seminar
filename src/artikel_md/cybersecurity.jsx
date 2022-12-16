import React from 'react'
import Style from './cybersecurity.module.css'

export const Cybersecurity = () => {
  return (
    <div className={Style.container}>
<h2>
    1. Gefahren im Netz
</h2>
<p>
    Jeder von uns bewegt sich täglich im Internet. Sei es zur Recherche für die Schule oder Arbeit, zum einfachen Googlen oder zum Zeitvertreib. Doch die meisten von uns tun dies ungeschützt. Leider ist das Internet voll mit vielen Gefahren. Das beginnt bei Downloads von Programmen, bis über zum ahnungslosen Klicken auf Links. Bestimmt hast du schon etwas von den Begriffen Virus, Spyware Trojaner oder Wurm gehört. Sie können sich unbemerkt im Hintergrund einschleichen und am Schluss auf dem eigenen oder auch auf anderen PCs landen. Doch wie funktioniert das und vor allem: Wie können wir es verhindern?
    Der erste Virus, den es auf der Welt gab, wurde 1983 vom Amerikaner Fred Cohen programmiert. Ein Virus ist deshalb so gefährlich, weil er sich ganz von allein ohne Zustimmung des Nutzers weiterverbreitet. Er schleust sich in Computerprogramme ein, verbreitet sich und infiziert weitere Systeme. Das führt dazu, dass Daten gelöscht werden und sogar Schäden am PC entstehen können.
    Noch gefährlicher ist ein Wurm. Er bleibt nicht nur auf dem eigenen PC, sondern verbreitet sich über Netzwerkverbindungen weiter. Meistens werden diese Würmer per E-Mail versendet. Die Kriminellen versuchen, den Wurm zu tarnen, damit alles ungefährlich wirkt und kein Verdacht geschöpft wird. So ist dann beispielsweise ein Angang namens „Rechnung“ vorhanden. Sobald man ahnungslos auf diesen Anhang klickt, wird der Wurm heruntergeladen oder man wird auf eine gefährliche Website geleitet. So kann der Wurm ungehindert eindringen.
</p>
<br />
<h2>
    2. Wie kann ich mich schützen?
</h2>
<p>
    Da auf den verschiedenen Social Media Plattformen wie Instagram, YouTube oder TikTok sehr viele dieser Links verbreitet sind, ist es in erster Linie extrem wichtig, jeden Link genau zu prüfen. Ein bösartiger Link kann beispielsweise statt „https://microsoft.de“ in „https://mircosoft.de“ geändert sein. Es reicht, zwei Buchstaben zu vertauschen und schon wird man auf eine andere Website geleitet als die erwartete. Betrüger machen sich dies zu Nutze.
    Gleiches gilt für E-Mails. Als erstes sollte der Absender, sprich von wem die E-Mail überhaupt kommt, geprüft werden. Kenne ich die Person/ das Unternehmen? Scheint mir der Inhalt der E-Mail logisch?
    ![Bild von Amazon](l)
    Dieser Ausschnitt einer angeblichen E-Mail von Amazon ist eine sog. Phishing-E-Mail. Hier im Beispiel links wird eine Verifizierung innerhalb der nächsten 48 Stunden verlangt. Ein großes gelbes Feld mit der Aufschrift „Weiter zur Verifizierung“ soll auf die Website weiterleiten. Doch hier ist äußerste Vorsicht geboten. Der eigentliche Link ist nur erkennbar, sobald man den Mauszeiger über das Feld bewegt. Falls du eine solche E-Mail bekommst und dir unsicher bist, erkundige dich am besten per Telefon bei dem Absender, ob die E-Mail so gewollt ist.
    Eine weitere betrügerische Methode ist das Erpressen von Geld per Remote Access (ferngesteuerten Zugriff). Vor allem ältere Menschen fallen auf diesen Trick herein. Aber wie funktioniert das alles?
    Auf einer hinterhältigen Website erscheint plötzlich ein Popup (ein plötzlich erscheinendes Feld), über welches man gewarnt wird, dass man einen Virus auf dem PC hätte. Um diesen Virus zu bereinigen, soll man dann eine Telefonnummer anrufen. Die Betrüger am anderen Ende, die sich als offizielle und professionelle Mitarbeiter ausgeben, helfen dann angeblich weiter, indem sie sich mit einem Programm, dass man zuerst installieren soll, Zugriff auf den PC verschaffen. Doch stattdessen verlangen sie für diesen „Service“ Geld und löschen/stehlen die Dateien der Opfer. Falls dich speziell dieses Thema interessiert, sieh dir gerne einmal den englischen YouTube-Kanal „Scammers Payback“ an. Dort werden diese Betrüger überführt und den Betroffenen geholfen.
    Link: https://www.youtube.com/c/ScammerPayback/about
    Die letzte hier genannte Betrugsmasche ist das Erscheinen von irreführenden Werbungen oder Popups auf dubiosen Websites, die einen eigentlichen Download vortäuschen. Manchmal ist man auf der Suche nach einer Internetseite, auf der man ein Programm, das man gerne hätte, herunterladen kann. Dabei tauchen überall Werbungen auf, von denen sich die Seite (mit-)finanziert. Unter diesen Werbungen tauchen häufig auch solche auf, die den eigentlichen Download vortäuschen. In diesem Bild sieht man zwei dieser Werbungen, markiert mit einem roten Kasten.
</p>
<br />
<h2>
    3. Weiter Maßnahmen
</h2>
<p>
    Nachdem wir dir jetzt einige Betrüger Methoden erklärt und Tipps gegeben haben, dich im Internet sicherer zu verhalten, kannst du dir überlegen, noch ein externes Anti-Viren-Programm zu installieren. Zwar ist auf allen Windows Computern schon standardmäßig das Windowseigene Programm „Windows Defender“ installiert, das - kombiniert mit einem entsprechenden Werbeblocker im Browser - für den normalen PC-Gebrauch völlig ausreicht. Wer aber auf Nummer sicher gehen möchte, dem stehen weitere kostenlose Programme zur Verfügung:
    <ul className={Style.liste}>
        <li><a href='https://www.avast.com/de'>Avast Antivirus</a></li>
        <li><a href='https://www.kaspersky.de/free-antivirus'>Kaspersky</a></li>
    </ul>
</p>
</div>
  )
}
