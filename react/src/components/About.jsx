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

        <p className="lede reveal" style={{ transitionDelay: '.14s', marginTop: '2.5rem' }}>
          {profile.bio}
        </p>
      </div>

      <div className="photo-stack">
        <img src={asset(profile.photo)} alt="" style={{ objectPosition: 'center 20%' }} />
        <img src={asset(profile.photo)} alt="" style={{ objectPosition: 'center 60%' }} />
      </div>
    </section>
  )
}
