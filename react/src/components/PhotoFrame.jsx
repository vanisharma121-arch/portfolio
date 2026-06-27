import { useState } from 'react'

/**
 * Portrait inside the green arched frame, with a placeholder fallback if the
 * image is missing.
 */
export default function PhotoFrame() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="hero-photo-frame">
      {!failed ? (
        <img src="/photo.jpg" alt="Vani Sharma" onError={() => setFailed(true)} />
      ) : (
        <div className="ph">
          <div className="ph-icon">🪴</div>
          <div className="ph-txt">
            Save your photo as
            <br />
            <strong>public/photo.jpg</strong>
          </div>
        </div>
      )}
    </div>
  )
}
