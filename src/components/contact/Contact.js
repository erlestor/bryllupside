import "./contact.css"

export const Contact = () => {
  return (
    <div className="section contact" id="contact">
      <h1>Kontakt oss</h1>
      <div className="contact-list">
        <h3>Ved allergier eller andre spørsmål:</h3>
        <h3 className="contact-list-item">Astrid Marie: 950 82 982</h3>
        <h3 className="contact-list-item">Alexander: 478 45 297</h3>
        <h3 className="contact-header">
          Ved ønske om taler/underholdningsbidrag:
        </h3>
        <h3 className="contact-list-item">Toastmaster: larsivarsi@gmail.com</h3>
      </div>
    </div>
  )
}
