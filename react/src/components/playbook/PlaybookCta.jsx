import { profile } from '../../data'

const home = () => import.meta.env.BASE_URL

export default function PlaybookCta() {
  return (
    <section className="section section--dark">
      <div className="shell shell--narrow" style={{ textAlign: 'center' }}>
        <h2 className="h2 reveal">Want the long version?</h2>
        <p className="lede reveal" style={{ margin: '0 auto 34px' }}>
          Happy to walk through the sprint plan, the executive reports, or the efficiency
          dashboards in detail.
        </p>

        <div className="hero__cta reveal">
          <a className="btn btn--primary" href={`mailto:${profile.contact.email}`}>
            Get in touch
          </a>
          <a className="btn btn--ghost" href={home()}>
            Back to portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
