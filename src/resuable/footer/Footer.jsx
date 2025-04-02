"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-gray-900 flex flex-col items-center gap-3 p-2">
      <div>
        <p className="mb-4 text-base text-gray-300">
          Visit our global site:{" "}
          <a
            href="https://skysecure.ai"
            className="hover:text-blue-500 transition-colors"
          >
            SkySecure.ai
          </a>
        </p>
      </div>

      <div className="flex gap-6">
        <a
          href="https://linkedin.com/company/skysecure"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition-opacity text-white"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </a>

        <a
          href="https://twitter.com/skysecure"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:opacity-80 transition-opacity text-white"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
        </a>
      </div>

      <div>
        <p className="text-white">
          2025 SkySecure Cyber Security LLC. All rights reserved
        </p>
      </div>
    </div>
  );
}
