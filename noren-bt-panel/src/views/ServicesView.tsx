import { useState } from "react"
import { services, type ServiceId } from "../catalog/services"

const cadenceLabel = {
  gunluk: "Günlük",
  haftalik: "Haftalık",
  aylik: "Aylık",
  olay: "Olay bazlı",
} as const

export function ServicesView() {
  const [openId, setOpenId] = useState<ServiceId | null>("exchange")

  return (
    <div className="view-body">
      <p className="view-intro">
        norenlojistik.com M365 servis kataloğu. Her servisin süreçleri burada; raporlar
        adım adım bağlanacak.
      </p>

      <div className="service-grid">
        {services.map((svc) => {
          const open = openId === svc.id
          return (
            <article key={svc.id} className={`service-card${open ? " open" : ""}`}>
              <button
                type="button"
                className="service-head"
                onClick={() => setOpenId(open ? null : svc.id)}
                aria-expanded={open}
              >
                <span className="service-dot" style={{ background: svc.color }} aria-hidden />
                <div>
                  <h3>{svc.name}</h3>
                  <p>{svc.short}</p>
                </div>
                <span className="badge priority">{svc.processes.length} süreç</span>
              </button>
              {open && (
                <ul className="process-list">
                  {svc.processes.map((p) => (
                    <li key={p.id}>
                      <div className="process-top">
                        <strong>{p.title}</strong>
                        <span className="badge">{cadenceLabel[p.cadence]}</span>
                      </div>
                      <p>{p.description}</p>
                      <p className="process-hint">Kaynak: {p.sourceHint}</p>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}
