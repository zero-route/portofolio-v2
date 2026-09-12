"use client"

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030305] px-5 py-8 text-white sm:px-7 lg:px-10 xl:px-14">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center">
        <p className="text-center text-[10px] tracking-wide text-white/40 sm:text-xs">
          © 2026 Dimas Aksa Oktapian
          <span className="mx-2 text-white/20">•</span>
          Built with Next.Js
        </p>
      </div>
    </footer>
  )
}