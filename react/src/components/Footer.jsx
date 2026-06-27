export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <span className="f-logo">VS</span>
      <span>© {year} Vani Sharma · Boston, MA</span>
      <span>sharma.vani1@northeastern.edu · +1 (857) 396-8591</span>
    </footer>
  )
}
