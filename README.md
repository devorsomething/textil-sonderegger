# Textil Sonderegger — Website

Professionelle Website für Textil Sonderegger, Ihrem Spezialisten für hochwertige Textilien, Vorhänge, Gardinen und Polsterstoffe in Bregenz, Vorarlberg.

## 🏷️ Lead Qualifizierung

| Feld | Wert |
|---|---|
| **Lead Score** | 68/100 (TIER 2) |
| **Website** | KEINE — keine eigene Domain, kein Google-Auftritt |
| **Pain Point** | Textil-Spezialisten leben von Beratung und Reputation — ohne Website werden sie online nicht gefunden |
| **Outreach Winkel** | „Ihr Spezialistenwissen und euer Montage-Service sind unschlagbar — aber wenn mich jemand online sucht, findet er euch nicht" |
| **Umsatzpotenzial** | Hotels und Gastronomie sind B2B-Kunden mit wiederkehrenden Bestellungen |

## ✨ Features

- **Hero-Section** — Vollbild mit elegantem Textildesign
- **Leistungen** — 6 Services: Vorhänge, Sonnenschutz, Polster, Flächenvorhänge, Transformation, Reparatur
- **Stoff-Kollektion** — 6 Kategorien mit hochwertigen Bildern
- **Hotels & Gastronomie** — B2B-Section für Geschäftskunden
- **Beratung** — Betonung der Maßberatung und Montage
- **Kontakt** — Formular + Google Maps + Öffnungszeiten

## 🛠️ Tech Stack

- **Framework:** Next.js 15 + TypeScript
- **Styling:** Tailwind CSS v3
- **Fonts:** Playfair Display (Headings) + DM Sans (Body)
- **Bilder:** Unsplash (Textilien, Interieur, Vorhänge)
- **Hosting:** Coolify / Docker

## 📁 Projektstruktur

```
textil-sonderegger/
├── app/
│   ├── globals.css       # Tailwind + Custom Styles
│   ├── layout.tsx        # Root Layout + SEO Metadata
│   └── page.tsx          # Hauptseite (alle Sektionen)
├── public/
│   └── output.css        # Kompiliertes Tailwind CSS
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🚀 Deployment mit Coolify

### Voraussetzungen
- Coolify Instance mit Docker
- GitHub Repository verbunden

### Schritte

```bash
# 1. Repository klonen / in Coolify einbinden
# Repository URL: https://github.com/[USER]/textil-sonderegger

# 2. In Coolify konfigurieren:
# - Build Pack: Nixpacks (Node.js)
# - Port: 3000
# - Environment Variables:
#   NODE_VERSION=22

# 3. Starten — Coolify baut und deployed automatisch
```

### Alternative: Manueller Build

```bash
cd /root/.openclaw/workspace/projects/textil-sonderegger

# Dependencies installieren
npm install

# Tailwind CSS kompilieren
npx tailwindcss -i ./app/globals.css -o ./public/output.css

# Production Build
npm run build

# Starten
npm start
```

### Docker (Dockerfile)

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx tailwindcss -i ./app/globals.css -o ./public/output.css
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

## 📞 Kontaktdaten

- **Adresse:** Heldendankstraße 44, 6900 Bregenz
- **Telefon:** +43 5574 00000 (Platzhalter — bitte aktualisieren)
- **Öffnungszeiten:** Mo–Fr 9:00–18:00, Sa 9:00–13:00

## 🔄 Nächste Schritte

1. **Telefonnummer verifizieren** — Google Maps / local.at prüfen
2. **Bilder ersetzen** — Eigene Produktfotos hochladen
3. **Google Maps Embed** — Korrekte Koordinaten eintragen
4. **SEO** — Google Search Console, local Business Schema
5. **Kontaktformular** — Backend integrieren (E-Mail Versand)
6. **Domain** — textilsonderegger.at / .com sichern

---

*Erstellt mit Next.js 15, Tailwind CSS & ❤️*
