import Image from "next/image";
import styles from "./page.module.css"; // We might not need this if we use global utilities, but let's clear it or ignore it.
// Actually, let's just use inline styles or global classes for simplicity and standard CSS.

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="glass" style={{ position: "fixed", width: "100%", top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>NextDocker</h1>
          <nav style={{ display: "flex", gap: "2rem" }}>
            <a href="#features" style={{ opacity: 0.8 }}>Features</a>
            <a href="#about" style={{ opacity: 0.8 }}>About</a>
            <a href="#contact" className="btn btn-glass" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>Get Started</a>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "80px" }}>
        <section className="container" style={{ textAlign: "center", padding: "4rem 0" }}>
          <div className="animate-fade-in-up">
            <span style={{
              display: "inline-block",
              padding: "0.5em 1em",
              background: "rgba(99, 102, 241, 0.2)",
              color: "#818cf8",
              borderRadius: "999px",
              fontSize: "0.1rem",
              marginBottom: "1.5rem",
              border: "1px solid rgba(99, 102, 241, 0.3)"
            }}>
              Dockerized Next.js Template
            </span>
            <h1 style={{ fontSize: "5rem", fontWeight: "800", lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
              Build faster with <br />
              <span className="text-gradient">Next.js & Docker</span>
            </h1>
            <p style={{ fontSize: "1.25rem", color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 3rem" }} className="animate-fade-in-up delay-100">
              A premium, production-ready template configured with multi-stage Docker builds,
              standalone output, and modern styling defaults.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }} className="animate-fade-in-up delay-200">
              <a href="#" className="btn">Deploy Now</a>
              <a href="https://github.com/vercel/next.js" target="_blank" className="btn btn-glass">Documentation</a>
            </div>
          </div>

          <div style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", textAlign: "left" }} className="animate-fade-in-up delay-300">
            {[
              { title: "Docker Ready", desc: "Multi-stage Dockerfile optimized for production with standalone output tracing." },
              { title: "Next.js 15", desc: "Latest features including App Router, Server Components, and more." },
              { title: "Modern Design", desc: "Glassmorphism, gradients, and a clean dark aesthetic out of the box." }
            ].map((feature, i) => (
              <div key={i} className="glass" style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{feature.title}</h3>
                <p style={{ color: "#a1a1aa" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "2rem 0", marginTop: "auto" }}>
        <div className="container" style={{ textAlign: "center", color: "#52525b", fontSize: "0.875rem" }}>
          <p>&copy; {new Date().getFullYear()} NextDocker Template. Built for performance.</p>
        </div>
      </footer>
    </div>
  );
}
