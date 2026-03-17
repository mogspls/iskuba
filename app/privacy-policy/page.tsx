"use client";

import Header from "@/components/layout/Header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-black">
        <section className="max-w-screen-xl mx-auto px-6 py-12 md:px-8 md:py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Privacy Policy
            </h1>

            <div className="mt-10 space-y-8 text-base leading-8">
              <div>
                <p>Effective Date: July 3, 2025</p>
                <p className="mt-4">
                  Welcome to iskuba.com (“we,” “our,” “us”). Your privacy is
                  important to us. This Privacy Policy explains how we collect,
                  use, and protect your personal information when you visit or
                  interact with our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  What We Collect
                </h2>
                <p className="mt-4">
                  We may collect the following personal information when you use
                  our site or communicate with us:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-6">
                  <li>
                    Your name and email address (when you submit an inquiry or
                    sign up for updates)
                  </li>
                  <li>Any additional contact information you voluntarily provide</li>
                  <li>
                    Non-personal data such as browser type, IP address, pages
                    visited, and referral source, collected automatically via
                    cookies or analytics tools
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  How We Use Your Information
                </h2>
                <p className="mt-4">We use your data to:</p>
                <ul className="mt-4 space-y-3 list-disc pl-6">
                  <li>Respond to inquiries or booking requests</li>
                  <li>
                    Send updates or information about our diving programs (only
                    if you opt in)
                  </li>
                  <li>Improve our website, services, and communication</li>
                  <li>Ensure site security and prevent misuse</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Sharing Your Data
                </h2>
                <p className="mt-4">We do not sell your personal information. We may share it only with:</p>
                <ul className="mt-4 space-y-3 list-disc pl-6">
                  <li>
                    Trusted service providers (e.g., email hosting, website
                    analytics, or form plugins)
                  </li>
                  <li>
                    Government authorities or regulatory bodies, if required by
                    law or for safety compliance
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Cookies and Analytics
                </h2>
                <p className="mt-4">
                  We use cookies to track anonymous site usage, improve
                  performance, and understand how visitors engage with our
                  content. You can manage your cookie preferences through your
                  browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Social Media
                </h2>
                <p className="mt-4">
                  Our website includes links to our official social media
                  accounts (e.g., Facebook, Instagram). Clicking these links may
                  take you to third-party sites with their own privacy policies.
                  We are not responsible for their content or practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Data Protection
                </h2>
                <p className="mt-4">
                  We implement reasonable safeguards to protect your personal
                  information. However, no method of transmission over the
                  internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Your Rights
                </h2>
                <p className="mt-4">You may contact us to:</p>
                <ul className="mt-4 space-y-3 list-disc pl-6">
                  <li>
                    Request access to the personal data we hold about you
                  </li>
                  <li>Request corrections or deletion of your data</li>
                  <li>Withdraw consent for future communication</li>
                </ul>
                <p className="mt-4">
                  To do so, please email:{" "}
                  <a
                    href="mailto:privacy@iskuba.com"
                    className="underline underline-offset-4"
                  >
                    privacy@iskuba.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Changes to This Policy
                </h2>
                <p className="mt-4">
                  We may update this Privacy Policy occasionally. The latest
                  version will always be posted here with the effective date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Contact
                </h2>
                <p className="mt-4">
                  If you have any questions about this Privacy Policy or how
                  your data is handled, contact us at:
                </p>
                <p className="mt-4">
                  <a
                    href="mailto:privacy@iskuba.com"
                    className="underline underline-offset-4"
                  >
                    privacy@iskuba.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}