import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: "📅", iconBg: "rgba(5,72,127,0.1)", title: "Agenda online 24h", desc: "Cliente agenda a qualquer hora, mesmo quando você está atendendo. Sem precisar responder mensagem." },
  { icon: "💬", iconBg: "rgba(122,158,126,0.15)", title: "Lembretes automáticos", desc: "Avisos automáticos por WhatsApp ou SMS antes do horário. Adeus, cliente que 'esqueceu'." },
  { icon: "👤", iconBg: "rgba(5,72,127,0.1)", title: "Histórico de clientes", desc: "Saiba o que cada cliente faz, quando foi a última vez, e fidelize com facilidade." },
];

const Features = () => {
  const ref = useScrollReveal();

  return (
    <section id="funcionalidades" className="py-[100px] px-6" style={{ background: "#fff" }} ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="scroll-reveal">
          <h2 style={{ fontFamily: "'CooperBT', serif", fontWeight: 500, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#262626" }}>
            Tudo que seu salão{" "}
            <span style={{ fontFamily: "'Italiana', serif", fontWeight: 700, color: "#05487F" }}>precisa</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="scroll-reveal rounded-[20px] p-9 transition-all duration-[0.25s] hover:-translate-y-1.5"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)";
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-[1.4rem]"
                style={{ background: f.iconBg }}
              >
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-[1.25rem] mt-5" style={{ color: "#262626" }}>
                {f.title}
              </h3>
              <p className="font-ui text-[0.95rem] mt-[10px] leading-[1.65]" style={{ color: "#6B6B6B" }}>
                {f.desc}
              </p>
              <div className="w-8 h-0.5 mt-6 rounded-full" style={{ background: "#7a9e7e" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
