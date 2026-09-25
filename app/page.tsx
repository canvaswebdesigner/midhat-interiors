const whatsappUrl =
  "https://wa.me/923009046269?text=Hi%20Midhat%20Interiors%2C%20I%27d%20like%20to%20book%20a%20free%20design%20consultation.";

const InstagramIcon = () => (
  <span aria-hidden="true" className="instagram-icon">
    ◎
  </span>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Midhat Interiors home">
          <span className="brand-mark">MI</span>
          <span>
            <strong>Midhat</strong>
            <small>Interiors · Karachi</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#studio">Studio</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Free consultation <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88"
            alt=""
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow light">Interior design studio · Karachi</p>
          <h1>
            Space, made
            <em>personal.</em>
          </h1>
          <p className="hero-lead">
            Warm, minimalist interiors shaped around the way you live, work and feel.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Book a free consultation <Arrow />
            </a>
            <a className="text-link light-link" href="#studio">
              Explore the studio <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-note">
          <span>01</span>
          <p>Thoughtful design.<br />Calm, useful spaces.</p>
        </div>

        <a className="hero-social" href="https://www.instagram.com/midhat_interior/" target="_blank" rel="noreferrer">
          <InstagramIcon /> Follow the journey
        </a>
      </section>

      <section className="intro shell" id="studio">
        <div className="section-index">
          <span>01</span>
          <p>The studio</p>
        </div>
        <div className="intro-statement">
          <p className="eyebrow">Warm minimalism, made livable</p>
          <h2>
            We create interiors that feel <em>quietly complete</em> — never crowded, never cold.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Midhat Interiors is a Karachi-based design studio creating warm, purposeful residential and commercial spaces. Every detail begins with your routine, your priorities and the feeling you want the room to hold.
          </p>
          <p>
            The result is a space with clarity: considered layouts, layered light, natural textures and a palette that belongs together.
          </p>
          <a className="text-link" href="#approach">See how we work <Arrow /></a>
        </div>
      </section>

      <section className="feature-grid" aria-label="Design focus">
        <article className="feature feature-tall">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=88"
            alt="Warm neutral living room with natural textures"
            loading="lazy"
          />
          <div className="image-caption">
            <span>Residential</span>
            <p>Homes with ease, warmth and rhythm.</p>
          </div>
        </article>
        <article className="feature-copy-card">
          <p className="eyebrow">Our point of view</p>
          <blockquote>“Luxury is not excess. It is when every choice feels intentional.”</blockquote>
          <span className="scribble" aria-hidden="true">m.</span>
        </article>
        <article className="feature feature-wide">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88"
            alt="Refined contemporary interior with soft light"
            loading="lazy"
          />
          <div className="image-caption dark-caption">
            <span>Commercial</span>
            <p>Spaces that work beautifully.</p>
          </div>
        </article>
      </section>

      <section className="services shell" id="services">
        <div className="section-index">
          <span>02</span>
          <p>What we design</p>
        </div>

        <div className="services-heading">
          <p className="eyebrow">From first idea to a cohesive space</p>
          <h2>Design that solves the room — and elevates the everyday.</h2>
        </div>

        <div className="service-list">
          <article>
            <span className="service-number">01</span>
            <div>
              <h3>Residential interiors</h3>
              <p>Thoughtful homes shaped around the people who live in them — from one room to a complete interior direction.</p>
            </div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
          <article>
            <span className="service-number">02</span>
            <div>
              <h3>Commercial spaces</h3>
              <p>Purposeful offices and customer-facing environments that use space well and express a clear identity.</p>
            </div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
          <article>
            <span className="service-number">03</span>
            <div>
              <h3>Design consultation</h3>
              <p>Focused guidance on layout, lighting, palette and materials — a practical starting point for your next space.</p>
            </div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-photo">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1900&q=88"
            alt="Modern home interior with warm wood and natural light"
            loading="lazy"
          />
        </div>
        <div className="manifesto-copy">
          <span className="large-number">03</span>
          <p className="eyebrow light">The Midhat balance</p>
          <h2>Beautiful enough to remember. Practical enough to live in.</h2>
          <p>
            Good design is not a collection of trends. It is a careful balance of function, proportion, light, texture and the character of the person using the space.
          </p>
          <a className="text-link light-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Start a conversation <Arrow />
          </a>
        </div>
      </section>

      <section className="process shell" id="approach">
        <div className="section-index">
          <span>04</span>
          <p>Our approach</p>
        </div>
        <div className="process-heading">
          <p className="eyebrow">A clear path from vision to space</p>
          <h2>Considered at every step.</h2>
        </div>
        <ol className="process-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Listen</h3>
              <p>We begin with your space, routines, taste, priorities and budget.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Shape</h3>
              <p>Layout, palette, lighting and material choices become one clear direction.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Refine</h3>
              <p>We review the details together and resolve the design with care.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Realise</h3>
              <p>Your concept becomes a cohesive, useful and distinctly personal space.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <p className="eyebrow light">Have a space in mind?</p>
        <h2>Let’s make it feel like <em>yours.</em></h2>
        <p className="contact-copy">
          Tell us about your home, office or idea. Your first design conversation is free.
        </p>
        <a className="button button-light button-large" href={whatsappUrl} target="_blank" rel="noreferrer">
          Book your free consultation <Arrow />
        </a>
        <p className="contact-fine">Karachi, Pakistan · Residential &amp; commercial interiors</p>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">MI</span>
          <span><strong>Midhat</strong><small>Interiors</small></span>
        </a>
        <p>Warm minimalist spaces, one home at a time.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/midhat_interior/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linktr.ee/smfatima1999" target="_blank" rel="noreferrer">Explore links</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <span className="footer-note">© 2026 Midhat Interiors</span>
      </footer>
    </main>
  );
}
