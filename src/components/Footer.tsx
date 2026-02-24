import NovuLogo from "./NovuLogo";

const footerCols = [
  { heading: "Produto", links: ["Funcionalidades", "Preços", "Como funciona"] },
  { heading: "Suporte", links: ["Central de ajuda", "WhatsApp", "Status"] },
  { heading: "Legal", links: ["Privacidade", "Termos de uso"] },
];

const Footer = () => (
  <footer className="px-6" style={{ background: "#1A1A1A", padding: "60px 24px 30px" }}>
    <div className="max-w-[1100px] mx-auto">
      <div className="flex flex-col md:flex-row gap-10 md:gap-8">
        {/* Col 1 */}
        <div className="flex-[2]">
          <NovuLogo color="#fff" size="1.4rem" />
          <p className="font-ui text-[0.9rem] mt-2" style={{ color: "#6B6B6B" }}>
            Sua agenda. Seus clientes. Seu crescimento.
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.heading} className="flex-1">
            <h4
              className="font-ui font-semibold text-[0.8rem] uppercase tracking-[0.08em]"
              style={{ color: "#999" }}
            >
              {col.heading}
            </h4>
            <ul className="mt-3 space-y-0">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-ui text-[0.9rem] leading-[2.2]" style={{ color: "#AAAAAA" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="h-px mt-10" style={{ background: "#2A2A2A" }} />

      <div className="flex flex-col md:flex-row md:justify-between items-center mt-5 gap-4">
        <p className="font-ui text-[0.8rem]" style={{ color: "#555" }}>
          © 2025 Novu. Feito com ♥ para profissionais de beleza do Brasil.
        </p>
        <div className="flex gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full"
              style={{ background: "#2A2A2A" }}
            />
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
