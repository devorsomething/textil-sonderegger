"use client";

import { useState } from "react";
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-warm-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-soft-gray">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold-accent rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">S</span>
            </div>
            <span className="font-serif text-xl text-charcoal">
              Textil Sonderegger
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal">
            <a href="#leistungen" className="hover:text-gold-accent transition-colors">
              Leistungen
            </a>
            <a href="#kollektion" className="hover:text-gold-accent transition-colors">
              Kollektion
            </a>
            <a href="#hotels" className="hover:text-gold-accent transition-colors">
              Hotels & Gastro
            </a>
            <a href="#kontakt" className="hover:text-gold-accent transition-colors">
              Kontakt
            </a>
          </div>
          <a
            href="tel:+43557400000"
            className="bg-gold-accent hover:bg-gold-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg"
          >
            Anrufen
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-gold-accent font-medium tracking-widest text-sm mb-4 uppercase">
            Bregenz · Vorarlberg
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Textil Sonderegger
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-10 tracking-wide">
            Stoffe · Vorhänge · Polster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="bg-gold-accent hover:bg-gold-dark text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Beratung anfragen
            </a>
            <a
              href="tel:+43557400000"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-full font-medium transition-all"
            >
              +43 5574 00000
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-soft-gray py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-charcoal">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gold-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Heldendankstraße 44, 6900 Bregenz</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gold-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+43557400000" className="hover:text-gold-accent transition-colors">
                +43 5574 00000
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gold-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Mo–Fr: 9:00–18:00 · Sa: 9:00–13:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Willkommen Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Hochwertige Stoffe und Textilien"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-accent/10 rounded-2xl -z-10" />
            </div>
            <div>
              <p className="text-gold-accent font-medium tracking-widest text-sm mb-4 uppercase">
                Willkommen
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Textil Sonderegger
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                Ihr Spezialist für hochwertige Textilien in Bregenz. Seit Jahren
                beraten wir Privatkunden und Hotels bei der Wahl der perfekten
                Vorhänge, Gardinen und Polster.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                Unser Anspruch: Qualität, die man fühlt. Von der Auswahl des
                perfekten Stoffes bis zur fachgerechten Montage — wir begleiten
                Sie auf dem gesamten Weg zu Ihrem Wohlfühlraum.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-charcoal">
                  <svg
                    className="w-5 h-5 text-gold-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Maßberatung vor Ort</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal">
                  <svg
                    className="w-5 h-5 text-gold-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Professionelle Montage</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal">
                  <svg
                    className="w-5 h-5 text-gold-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Hotels & Gastro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen / Services */}
      <section id="leistungen" className="py-24 px-6 bg-soft-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-accent font-medium tracking-widest text-sm mb-4 uppercase">
              Unsere Leistungen
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Was wir für Sie tun
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vorhänge & Gardinen",
                description:
                  "Maßanfertigung, klassisch und modern. Von luftigen Stores bis zu blickdichten Scheibengardinen.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                ),
              },
              {
                title: "Sonnenschutz",
                description:
                  "Rollo, Plissee, Jalousien — maßgefertigt für jeden Fenster typ. Optimaler Blend- und Hitzeschutz.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ),
              },
              {
                title: "Polsterstoffe",
                description:
                  "Für Möbel, Stühle, Bänke. Wir führen eine große Auswahl an Qualitätsstoffen für jede Anwendung.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                ),
              },
              {
                title: "Flächenvorhänge",
                description:
                  "Moderne Lösung für große Fenster und Glasfronten. Elegant, flexibel und pflegeleicht.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                  />
                ),
              },
              {
                title: "Transformationsservice",
                description:
                  "Vermessung, Lieferung und Montage. Von der Beratung bis zur fertigen Installation — alles aus einer Hand.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: "Reparatur & Änderung",
                description:
                  "Wir ändern und reparieren bestehende Textilien. Kürzen, erweitern, neu bespannen — kein Projekt ist zu klein.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-gold-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-accent/20 transition-colors">
                  <svg
                    className="w-7 h-7 text-gold-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stoff-Kollektion */}
      <section id="kollektion" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-accent font-medium tracking-widest text-sm mb-4 uppercase">
              Unsere Kollektion
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Stoffe für jeden Stil
            </h2>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
              Von edlem Samt bis praktischem Blackout — entdecken Sie unsere
              handverlesene Auswahl an Qualitätsstoffen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Samt & Seide",
                description: "Premium-Stoffe für besondere Anlässe",
                image:
                  "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&q=80",
              },
              {
                title: "Leinen & Baumwolle",
                description: "Natürlich, atmungsaktiv, zeitlos",
                image:
                  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
              },
              {
                title: "Blackout & Verdunklung",
                description: "Für Schlafzimmer und Medienräume",
                image:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
              },
              {
                title: "Outdoor-Stoffe",
                description: "UV-beständig, wetterfest",
                image:
                  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
              },
              {
                title: "Muster & Designs",
                description: "Klassische und moderne Drucke",
                image:
                  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80",
              },
              {
                title: "Qualitäts-Jersey",
                description: "Weich, dehnbar, vielseitig einsetzbar",
                image:
                  "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für Hotels & Gastronomie */}
      <section
        id="hotels"
        className="py-24 px-6 bg-charcoal relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-accent font-medium tracking-widest text-sm mb-4 uppercase">
                Business Solutions
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                Für Hotels & Gastronomie
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Wir beliefern auch Hotels, Restaurants und Büros mit
                maßgefertigten Textilien. Ob 10 oder 100 Fenster — wir
                liefern, montieren und warten zuverlässig.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-gold-accent flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/90">
                    Maßanfertigung für alle Raumtypen
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-gold-accent flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/90">
                    Projektbetreuung von A bis Z
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-gold-accent flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/90">
                    Regelmäßige Wartung und Ersatz
                  </span>
                </div>
              </div>
              <a
                href="#kontakt"
                className="inline-block mt-10 bg-gold-accent hover:bg-gold-dark text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl"
              >
                Projekt anfragen
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt="Hotel Interieur mit Textilien"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Beratung Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                  alt="Maßberatung für Vorhänge"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold-accent font-medium tracking-widest text-sm mb-4 uppercase">
                Persönliche Beratung
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Maßberatung direkt bei Ihnen
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                Gute Vorhänge machen den Raum — aber nur, wenn sie perfekt
                passen. Deshalb kommen wir zu Ihnen: Wir messen vor Ort, zeigen
                Ihnen Stoffmuster und beraten Sie ganz persönlich.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                Unser Service umfasst die komplette Betreuung: Von der ersten
                Beratung über die Vermessung bis zur fachgerechten Montage.
                So stellen wir sicher, dass das Ergebnis genau Ihren Vorstellungen
                entspricht.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-serif text-lg text-charcoal mb-4">
                  Das erwartet Sie:
                </h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold-accent rounded-full" />
                    Kostenlose Vor-Ort-Beratung
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold-accent rounded-full" />
                    Stoffmuster direkt im Raum testen
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold-accent rounded-full" />
                    Exaktes Aufmaß durch Profis
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold-accent rounded-full" />
                    Montage durch erfahrene Handwerker
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt & Lage */}
      <section id="kontakt" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-accent font-medium tracking-widest text-sm mb-4 uppercase">
              Kontakt
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Sprechen Sie mit uns
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-soft-gray rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Beratung anfragen
              </h3>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl text-charcoal mb-2">
                    Vielen Dank!
                  </h4>
                  <p className="text-charcoal/70">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-soft-gray bg-white focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-all"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-soft-gray bg-white focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-all"
                      placeholder="ihre@email.at"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-soft-gray bg-white focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-all"
                      placeholder="+43 5574 00000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nachricht"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      required
                      rows={4}
                      value={formData.nachricht}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-soft-gray bg-white focus:outline-none focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-all resize-none"
                      placeholder="Ich interessiere mich für Vorhänge für mein Wohnzimmer..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold-accent hover:bg-gold-dark text-white py-4 rounded-xl font-medium transition-all hover:shadow-lg"
                  >
                    Anfrage senden
                  </button>
                </form>
              )}
            </div>

            {/* Info & Map */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="font-serif text-2xl text-charcoal mb-6">
                  Textil Sonderegger
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Adresse</p>
                      <p className="text-charcoal/70">
                        Heldendankstraße 44
                        <br />
                        6900 Bregenz, Österreich
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Telefon</p>
                      <a
                        href="tel:+43557400000"
                        className="text-gold-accent hover:text-gold-dark transition-colors"
                      >
                        +43 5574 00000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Öffnungszeiten</p>
                      <p className="text-charcoal/70">
                        Mo – Fr: 9:00 – 18:00 Uhr
                        <br />
                        Sa: 9:00 – 13:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.4!2d9.75!3d47.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMxJzAwLjAiTiA5wrA0NScwMC4wIkE!5e0!3m2!1sde!2sat!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Textil Sonderegger Standort"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-lg">
                    S
                  </span>
                </div>
                <span className="font-serif text-xl text-white">
                  Textil Sonderegger
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Ihr Spezialist für textile Raumgestaltung in Bregenz. Qualität,
                die man fühlt — seit Jahren.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Leistungen</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Vorhänge & Gardinen</li>
                <li>Sonnenschutz</li>
                <li>Polsterstoffe</li>
                <li>Flächenvorhänge</li>
                <li>Beratung & Montage</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Kontakt</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Heldendankstraße 44</li>
                <li>6900 Bregenz</li>
                <li className="pt-2">
                  <a
                    href="tel:+43557400000"
                    className="hover:text-gold-accent transition-colors"
                  >
                    +43 5574 00000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Textil Sonderegger. Alle Rechte
              vorbehalten.
            </p>
            <p className="text-white/50 text-sm">
              Heldendankstraße 44, 6900 Bregenz
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppButton phone="+43 664 678 9012" />
    </main>
  );
}
