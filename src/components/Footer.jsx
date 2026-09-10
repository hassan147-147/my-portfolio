export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate">
        <p>&copy; {new Date().getFullYear()} Hassan Naveed. Built with React &amp; Tailwind.</p>
        <a href="#top" className="hover:text-paper transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  )
}
