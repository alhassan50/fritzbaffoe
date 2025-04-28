import { WhatsApp, Call, Facebook, Tiktok, Pinterest } from "./Icons";
import Section from "./Section";

const contacts = [
  { Icon: Call, title: "Phone Call", label: "+233 12 345 6789" },
  { Icon: WhatsApp, title: "WhatsApp", label: "+233 12 345 6789" },
  { Icon: Facebook, title: "Facebook", label: "Fritz Baffoe" },
  { Icon: Tiktok, title: "TikTok", label: "@fritz_b" },
  { Icon: Pinterest, title: "Pinterest", label: "@fritz_b" },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      className="py-16 text-center bg-[url('/assets/grid.svg')] bg-cover bg-center"
    >
      <div className="w-full max-w-[1054px] mx-auto">
        <div>
          {/* Section Title */}
          <h2 className="inline-block text-left text-4xl bg-white py-2 px-8 font-semibold text-gray-700 mb-10">
            Contact Or Follow Me
          </h2>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4  gap-3 md:gap-6 ">
            {contacts.map(({ Icon, title, label }, index) => (
              <div
                key={index}
                className="outline-10 outline-white flex flex-col items-center justify-center p-6 border border-gray-300 rounded-2xl  bg-white w-full min-h-[180px] hover:shadow-md transition gap-2"
              >
                <div className="w-20 h-20 flex justify-center items-center border border-gray-300 rounded-full">
                  <Icon className="w-10 h-10 text-blue-500" />
                </div>
                <h4 className="text-lg font-medium text-gray-700">{title}</h4>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
