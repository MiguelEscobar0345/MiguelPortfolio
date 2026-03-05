export default function Footer() {
    return (
      <footer className="py-16 border-t border-zinc-100 text-center text-sm text-zinc-500 space-y-4">
        <p>© {new Date().getFullYear()} Miguel E. Escobar P.</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/miguel-escobar-p?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" className="hover:text-white transition">LinkedIn</a>
          <a href="https://github.com/MiguelEscobar0345/" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="https://www.instagram.com/escomiguep?igsh=Njl4bWpnOXB3NTJ1&utm_source=qr" target="_blank" className="hover:text-white transition">Instagram</a>
          <a href="mailto:miguelescobarp03@gmail.com" className="hover:text-white transition">Email</a>
        </div>
      </footer>
    );
  }
  