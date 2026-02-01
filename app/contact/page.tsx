import { Mail, Smartphone, Github } from "lucide-react";
import Link from "next/link";

const contacts = [
  {
    label: "Email",
    value: "dydtns9815@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:dydtns9815@gmail.com",
  },
  {
    label: "Phone",
    value: "010-3580-1547",
    icon: <Smartphone className="w-5 h-5" />,
    href: "tel:01035801547",
  },
  {
    label: "Github",
    value: "github.com/dydtns9815",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/s00ngle",
  },
];

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-12 py-12">
      {/* 페이지 제목 */}
      <h1 className="text-4xl font-bold">Contact</h1>

      {/* 연락처 섹션 */}
      <div className="flex flex-col gap-6">
        {contacts.map((contact) => (
          <Link
            key={contact.label}
            href={contact.href}
            target="_blank"
            className="flex items-center gap-4 p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <div className="text-primary">{contact.icon}</div>
            <div className="flex flex-col">
              <span className="font-semibold">{contact.label}</span>
              <span className="text-neutral-600 dark:text-neutral-400">
                {contact.value}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
