import React, { useState } from 'react';

const Maintanance = () => {
  const [upgrade, setupgrade] = useState(true);

  // 1. Downtime design (Tailwind gradient version)
  const DowntimeMaintanance = (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-slate-200">
        <div className="w-24 h-24 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-8">
          <span className="text-5xl">🚧</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Scheduled Maintenance
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-medium mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
          Maintenance In Progress
        </div>
        <p className="text-lg text-slate-600 leading-8">
          We are currently performing scheduled maintenance and improvements to enhance the platform experience.
        </p>
      </div>
    </div>
  );
  
  // 2. Upgrade design (Your original custom CSS/HTML version)
  const UpgradeMaintanance = (
    <>
      <style jsx global>{`
        :root {
          --paper: #EEF1F4; --card: #FFFFFF; --ink: #101C26; --muted: #4F5D69; --line: #CFD7DE;
          --teal: #0B6770; --teal-soft: #D9EEEF; --amber: #E8B73F; --amber-soft: #FAF0D2;
          --head: "Bricolage Grotesque", "Trebuchet MS", system-ui, sans-serif;
          --body: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --paper: #0E1820; --card: #15242E; --ink: #E8EEF2; --muted: #9DAEBB; --line: #294050;
            --teal: #6FCAD2; --teal-soft: #15353A; --amber: #E9B949; --amber-soft: #2D2712;
          }
        }
        .shopease-wrapper {
          margin: 0;
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font: 400 1.0625rem/1.65 var(--body);
          display: grid;
          place-items: center;
          padding: env(safe-area-inset-top) 0 env(safe-area-inset-bottom);
        }
        .shopease-main {
          width: 100%;
          max-width: 40rem;
          padding: 2rem 1.25rem;
        }
        .shopease-wrapper a {
          color: var(--teal);
          text-underline-offset: 3px;
        }
        .shopease-wrapper a:focus-visible {
          outline: 3px solid var(--teal);
          outline-offset: 3px;
          border-radius: 4px;
        }
        .shopease-tag {
          display: inline-block;
          background: var(--amber-soft);
          border: 1px solid var(--amber);
          padding: .2rem .8rem;
          border-radius: 999px;
          font-size: .92rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .shopease-main h1 {
          font: 800 clamp(2rem, 6vw, 3rem)/1.08 var(--head);
          letter-spacing: -.03em;
          margin: 0 0 1rem;
        }
        .shopease-main h2 {
          font: 700 1.2rem/1.2 var(--head);
          margin: 2rem 0 .5rem;
        }
        .shopease-main p {
          margin: 0 0 1rem;
        }
        .shopease-card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 1rem 1.25rem;
        }
        .shopease-card ul {
          margin: .25rem 0 0;
          padding-left: 1.2rem;
        }
        .shopease-links {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          margin-top: 1.25rem;
        }
        .shopease-btn {
          display: inline-block;
          padding: .7rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid var(--teal);
          color: var(--teal);
        }
        .shopease-btn.main {
          background: var(--teal);
          color: var(--card);
        }
        .shopease-btn:hover {
          filter: brightness(1.1);
        }
        .shopease-small {
          color: var(--muted);
          font-size: .95rem;
          margin-top: 2rem;
        }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Instrument+Sans:wght@400;500;600&display=swap" 
        rel="stylesheet" 
      />

      <div className="shopease-wrapper">
        <main className="shopease-main">
          <span className="shopease-tag" role="status">Back in a day or two</span>
          <h1>ShopEase is being upgraded</h1>
          <p>
            I&apos;m moving the backend from a regular server to a serverless architecture on Vercel. 
            App is offline while I make the switch, and it will be back as soon as it&apos;s done. 
            Thanks for your patience.
          </p>

          <div className="shopease-card">
            <strong>What&apos;s changing</strong>
            <ul>
              <li>Express API moving to serverless functions</li>
              <li>Login sessions moving from server memory to MongoDB</li>
              <li>Same app: authentication, products, cart and Solana payments</li>
            </ul>
          </div>

          <h2>In the meantime</h2>
          <p>The full source is public, so you can read the code now.</p>
          <div className="shopease-links">
            <a className="shopease-btn main" href="https://github.com/MRSE435/ecomfrontend" target="_blank" rel="noopener noreferrer">
              Frontend on GitHub
            </a>
            <a className="shopease-btn" href="https://github.com/MRSE435/ecombackend" target="_blank" rel="noopener noreferrer">
              Backend on GitHub
            </a>
          </div>

          <p className="shopease-small">
            Last updated 3 October 2026 &middot; Mohammed Owais &middot; <a href="mailto:mohammedowais1135@gmail.com">mohammedowais1135@gmail.com</a>
          </p>
        </main>
      </div>
    </>
  );

  return upgrade ? UpgradeMaintanance : DowntimeMaintanance;
};

export default Maintanance;