import { howCards } from '../data'

export default function HowIWork() {
  return (
    <section id="how">
      <div className="section-head-center">
        <div className="section-eyebrow reveal">My Approach</div>
        <h2 className="section-title reveal">How I Work</h2>
        <p className="section-sub reveal">
          Three ways I create measurable impact across science and marketing.
        </p>
      </div>

      <div className="how-grid">
        {howCards.map((card) => (
          <div className={`how-card ${card.color} reveal`} key={card.num}>
            <div className="how-top">
              <div className="how-icon-circle">{card.icon}</div>
              <div className="how-num">{card.num}</div>
            </div>
            <div className="how-body">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <a className="how-link" href={card.link}>
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
