"use client";

import { useState } from "react";

type Member = {
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
};

const members: Member[] = [
  {
    name: "Mr. Jean-Pierre Roth",
    title: "Chairman",
    role: "Non-Executive Chairman",
    image: "/images/governance1.png",
    bio: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat...",
  },
  {
    name: "Mr. Marwan Shakarchi",
    title: "CEO",
    role: "Executive Member",
    image: "/images/governance1.png",
    bio: "Marwan's extensive experience in the field of precious metals positions him as a key figure...",
  },
  {
    name: "Mr. Venkata Gopalakrishnan",
    title: "Chairman",
    role: "Executive Member",
    image: "/images/governance1.png",
    bio: "Venkata leads strategic operations and contributes to growth in emerging markets...",
  },
  {
    name: "Mr. Graeme Lamb",
    title: "Chairman",
    role: "Non-Executive Chairman",
    image: "/images/governance1.png",
    bio: "Graeme provides governance and risk management insight at the board level...",
  },
  {
    name: "Mr. Richard Cole",
    title: "Chairman",
    role: "Non-Executive Chairman",
    image: "/images/governance1.png",
    bio: "Richard brings deep regulatory and compliance expertise in global markets...",
  },
];

export default function Governance() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <section className="bg-[#FAF7F4] px-6 py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Section header as grid item */}
          <div>
            <h2 className="text-2xl uppercase tracking-wide text-[#1A1A1E] mb-2">Governance</h2>
            <div className="w-16 h-[1px] bg-[#CFA04F] mb-4" />
            <p className="text-sm text-[#1A1A1E] leading-snug max-w-sm">
              Governance is a critical component in family businesses, and this is also true at MKS PAMP GROUP. Our unique ownership structure and operating model make our governance practices essential to safeguard the long-term success and continuity of our business.
            </p>
          </div>

          {members.map((member, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img src={member.image} alt={member.name} className="w-[225px] h-[225px] rounded-full object-cover border-4 border-white shadow" />
              <div>
                <p className="text-sm text-[#CFA04F] font-semibold leading-tight">{member.name}<br />{member.title}</p>
                <p className="text-sm text-[#171717]">{member.role}</p>
                <button
                  className="text-sm text-[#1A1A1E] font-medium mt-4 group inline-flex items-center"
                  onClick={() => setSelectedMember(member)}
                >
                  View Bio
                  <span className="text-[#CFA04F] ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-md max-w-3xl w-full p-6 relative flex items-start gap-6">
              <button
                className="absolute top-4 right-4 text-xl text-[#1A1A1E]"
                onClick={() => setSelectedMember(null)}
              >
                &times;
              </button>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
              <div>
                <p className="text-[#CFA04F] font-semibold">{selectedMember.name}<br />{selectedMember.title}</p>
                <p className="text-sm text-[#171717] mb-4">{selectedMember.role}</p>
                <p className="text-sm text-[#1A1A1E] leading-snug">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
