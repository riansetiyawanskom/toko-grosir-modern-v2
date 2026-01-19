"use client";

import React, { useState } from "react";

/**
 * Footer component for the Cloudflare blocked page.
 * Implements pixel-perfect styling for the Ray ID, IP reveal, and branding.
 */
export default function Footer() {
  const [showIp, setShowIp] = useState(false);

  // Constants from computed styles and high-level design
  const rayId = "9c0722244bf52431";
  const ipAddress = "108.39.65.110";

  return (
    <footer className="cf-error-footer cf-wrapper w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-[#d9d9d9]">
      <div className="max-w-[960px] mx-auto">
        <p className="text-[13px] leading-[1.4] m-0 text-[#404040] font-sans">
          {/* Ray ID Section */}
          <span className="inline-block sm:block sm:mb-1">
            Cloudflare Ray ID:{" "}
            <strong className="font-semibold text-[#404040]">{rayId}</strong>
          </span>

          {/* Separator - Hidden on small screens as per structural data */}
          <span className="inline-block px-[3.25px] sm:hidden text-[#404040]">
            •
          </span>

          {/* IP Reveal Section */}
          <span
            id="cf-footer-item-ip"
            className="inline-block sm:block sm:mb-1"
          >
            Your IP:{" "}
            {!showIp ? (
              <button
                id="cf-footer-ip-reveal"
                onClick={() => setShowIp(true)}
                className="inline-block p-0 bg-transparent border-none text-[#0051c3] cursor-pointer outline-none hover:underline font-sans text-[13px]"
                type="button"
              >
                Click to reveal
              </button>
            ) : (
              <span id="cf-footer-ip" className="text-[#404040]">
                {ipAddress}
              </span>
            )}
          </span>

          {/* Separator - Hidden on small screens */}
          <span className="inline-block px-[3.25px] sm:hidden text-[#404040]">
            •
          </span>

          {/* Branding Section */}
          <span className="inline-block sm:block sm:mb-1">
            <span className="text-[#404040]">Performance & security by </span>
            <a
              href="https://www.cloudflare.com/5xx-error-landing"
              id="brand_link"
              className="text-[#0051c3] no-underline hover:underline font-sans"
            >
              Cloudflare
            </a>
          </span>
        </p>
      </div>

      <style jsx global>{`
        /* Ensuring standard wrapper constraints as per design system */
        .cf-wrapper {
          width: 90%;
          max-width: 960px;
          margin: 0 auto;
        }
        
        @media (max-width: 639px) {
          .cf-error-footer {
            text-align: center;
          }
          .sm\\:block {
            display: block;
          }
          .sm\\:mb-1 {
            margin-bottom: 0.25rem;
          }
          .sm\\:hidden {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}