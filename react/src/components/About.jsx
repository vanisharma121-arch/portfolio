import { profile } from '../data'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

/**
 * Split section: copy on the left, a stacked pair of portrait crops on the
 * right — the reference design's "about" arrangement.
 */
export default function About() {
  return (
    <section className="split split--r36" id="about">
      <div className="panel panel--divide">
        <div className="big reveal">About me</div>
        <div className="script reveal" style={{ transitionDelay: '.08s' }}>{profile.name}</div>

        <div className="grid grid--2 reveal" style={{ gap: '2.5rem', marginTop: '2.5rem' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--gry)', marginBottom: '.7rem' }}>About me</div>
            <p className="card__body">{profile.bio}</p>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'var(--gry)', marginBottom: '.7rem' }}>About my work</div>
            <p className="card__body">{profile.subhead}</p>
          </div>
        </div>
      </div>

      <div className="photo-stack">
        <img src={asset(profile.photo)} alt="" style={{ objectPosition: 'center 20%' }} />
        <img src={asset(profile.photo)} alt="" style={{ objectPosition: 'center 60%' }} />
      </div>
    </section>
  )
}
