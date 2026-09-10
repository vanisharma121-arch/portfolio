import { profile } from '../data'

const asset = (file) => `${import.meta.env.BASE_URL}${file}`

export default function PhotoFrame() {
  return (
    <img
      className="photo"
      src={asset(profile.photo)}
      alt={`${profile.name}, portrait`}
      loading="lazy"
      width="420"
      height="520"
    />
  )
}
