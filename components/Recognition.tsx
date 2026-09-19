"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { certifications } from "@/data/recognition";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

const certificationId = 1;
const shortLabels: Record<number, string> = {
  1: "Cloud Practitioner",
  2: "Internet of Things",
  3: "Storage",
  4: "Compute",
  5: "Networking",
  6: "Databases",
  7: "Security",
  8: "Serverless",
  9: "Cloud 101",
};
const credentialGroups = [
  { id: "certification", title: "Certification", items: certifications.filter((item) => item.id === certificationId) },
  { id: "learning", title: "Learning badges", items: certifications.filter((item) => item.id !== certificationId) },
];

export default function Recognition() {
  const [selectedId, setSelectedId] = useState(
    certifications.find((item) => item.id === certificationId)?.id ?? certifications[0]?.id,
  );
  const selectedCredential = certifications.find((item) => item.id === selectedId);

  return (
    <SectionShell id="recognition">
      <SectionHeading eyebrow="Credentials" title="Certifications & learning." />
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div id="credential-spotlight" className="relative grid min-w-0 overflow-hidden rounded-2xl border border-white/[0.1] bg-portfolio-surface">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(34,211,238,0.09),transparent_65%),radial-gradient(ellipse_at_100%_80%,rgba(167,139,250,0.08),transparent_60%)]" />
          {certifications.map((credential) => {
            const selected = credential.id === selectedId;
            return (
              <article
                key={credential.id}
                aria-labelledby={`credential-title-${credential.id}`}
                aria-hidden={!selected}
                inert={!selected}
                className={`col-start-1 row-start-1 flex min-w-0 flex-col items-center p-6 text-center motion-safe:transition-opacity motion-safe:duration-200 sm:p-8 ${selected ? "relative z-10 opacity-100" : "pointer-events-none opacity-0"}`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200/80">
                  {credential.id === certificationId ? "Certification" : "Learning badge"}
                </p>
                <Image src={credential.image} alt="" width={208} height={208} sizes="(max-width: 639px) 176px, 208px" className="mt-6 h-44 w-44 object-contain sm:h-52 sm:w-52" />
                <h3 id={`credential-title-${credential.id}`} className="mt-7 max-w-sm text-balance text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">{credential.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">{credential.issuer}</p>
                <p className="mt-2 text-xs text-white/45">Issued {credential.issueDate}</p>
                <div className="mt-auto pt-6">
                  <a
                    href={credential.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${credential.title} on Credly (opens in a new tab)`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-cyan-200 transition-colors hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    View on Credly <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="min-w-0 space-y-7">
          {credentialGroups.filter((group) => group.items.length > 0).map((group) => (
            <div key={group.id}>
              <div className="mb-4 flex items-center gap-4">
                <h3 id={`credential-group-${group.id}`} className="shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-white/55">{group.title}</h3>
                <div aria-hidden="true" className="h-px flex-1 bg-white/[0.08]" />
              </div>
              <ul aria-labelledby={`credential-group-${group.id}`} className="grid grid-cols-3 gap-2 sm:gap-3">
                {group.items.map((credential) => {
                  const selected = credential.id === selectedId;
                  return (
                    <li key={credential.id}>
                      <button
                        type="button"
                        aria-pressed={selected}
                        aria-controls="credential-spotlight"
                        aria-label={`Preview ${credential.title}`}
                        onClick={() => setSelectedId(credential.id)}
                        className={`group flex h-full w-full flex-col items-center gap-3 rounded-xl border px-1.5 py-4 text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:px-3 ${selected ? "border-cyan-200/40 bg-cyan-300/[0.07]" : "border-transparent hover:border-white/10 hover:bg-white/[0.025]"}`}
                      >
                        <Image src={credential.image} alt="" width={88} height={88} sizes="(max-width: 639px) 64px, 88px" className="h-16 w-16 object-contain motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:-translate-y-0.5 sm:h-[88px] sm:w-[88px]" />
                        <span className={`text-xs leading-5 ${selected ? "font-medium text-cyan-100" : "text-white/65 group-hover:text-white"}`}>{shortLabels[credential.id] ?? credential.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {selectedCredential ? `Selected credential: ${selectedCredential.title}, issued ${selectedCredential.issueDate}.` : ""}
      </p>
    </SectionShell>
  );
}
