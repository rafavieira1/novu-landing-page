import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: "📋", title: "Cadastre seus serviços e horários", desc: "Leva menos de 10 minutos. Serviços, preços e horários disponíveis." },
  { icon: "🔗", title: "Compartilhe seu link de agendamento", desc: "Mande no Instagram, no WhatsApp, onde quiser. Seus clientes escolhem o horário." },
  { icon: "✅", title: "Clientes agendam, o app confirma e lembra", desc: "Você só aparece e atende. O app cuida do resto — confirmação e lembrete." },
];

const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section id="como-funciona" className="py-[100px] px-6" style={{ background: "#F3EFE7" }} ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center scroll-reveal">
          <h2 className="font-display font-light" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#262626" }}>
            É <span className="text-accent-script">simples</span>. Do jeito que tem que ser.
          </h2>
          <p className="font-ui text-[1.05rem] mt-4" style={{ color: "#6B6B6B" }}>
            Em menos de 10 minutos seu salão já está recebendo agendamentos.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 md:gap-8 mt-16 items-start">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px"
            style={{ background: "#7a9e7e", opacity: 0.4 }}
          />

          {steps.map((step, i) => (
            <div key={i} className="scroll-reveal flex-1 flex flex-col items-center text-center">
              <span className="font-display text-[5rem] leading-none -mb-3" style={{ color: "#05487F", opacity: 0.2 }}>
                {i + 1}
              </span>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl relative z-10"
                style={{ background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                {step.icon}
              </div>
              <h3 className="font-display font-semibold text-[1.25rem] mt-4" style={{ color: "#262626" }}>
                {step.title}
              </h3>
              <p className="font-ui text-[0.95rem] mt-2 leading-[1.65] max-w-[220px]" style={{ color: "#6B6B6B" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
