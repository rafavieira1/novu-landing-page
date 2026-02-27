import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Card mockup visuals ─────────────────────────────────────────── */

const Card1Visual = () => (
  <div className="p-6 space-y-3">
    {[
      { icon: "✂️", label: "Corte feminino", meta: "60 min · R$ 80", bg: "#05487F" },
      { icon: "💅", label: "Manicure",        meta: "45 min · R$ 45", bg: "#7a9e7e" },
    ].map(({ icon, label, meta, bg }) => (
      <div
        key={label}
        className="flex items-center gap-3 px-4 py-3 rounded-xl"
        style={{ background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-[1rem] shrink-0"
          style={{ background: bg }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-ui font-semibold text-[0.78rem]" style={{ color: "#262626" }}>{label}</div>
          <div className="font-ui text-[0.71rem]" style={{ color: "#9B9B9B" }}>{meta}</div>
        </div>
      </div>
    ))}
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl"
      style={{ background: "#fff", opacity: 0.4, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
    >
      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0" style={{ background: "#ECECEC" }}>
        +
      </div>
      <div className="font-ui text-[0.75rem]" style={{ color: "#AFAFAF" }}>Adicionar serviço…</div>
    </div>
  </div>
);

const Card2Visual = () => (
  <div className="p-6 space-y-2.5">
    {[
      { icon: "💬", label: "Link enviado no WhatsApp",   iconBg: "#25D366" },
      { icon: "📸", label: "Bio do Instagram atualizada", iconBg: "#E1306C" },
      { icon: "🔗", label: "novu.app/seu-salao",          iconBg: "#05487F", dim: true },
    ].map(({ icon, label, iconBg, dim }) => (
      <div
        key={label}
        className="flex items-center gap-3 px-4 py-3 rounded-xl"
        style={{ background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.07)", opacity: dim ? 0.42 : 1 }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-[1rem] shrink-0"
          style={{ background: iconBg }}
        >
          {icon}
        </div>
        <div className="font-ui font-semibold text-[0.78rem]" style={{ color: "#262626" }}>{label}</div>
      </div>
    ))}
  </div>
);

const Card3Visual = () => (
  <div className="p-6 space-y-3">
    <div className="font-ui text-[0.68rem] font-semibold tracking-widest uppercase" style={{ color: "#05487F", opacity: 0.55 }}>
      Confirmações
    </div>
    <div
      className="px-4 py-3 rounded-xl font-ui text-[0.75rem] leading-relaxed"
      style={{ background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.07)", color: "#384145" }}
    >
      <span style={{ color: "#05487F", fontWeight: 700 }}>✓ Agendado:</span>{" "}
      Camila — Corte, sáb 10h.<br />
      <span style={{ color: "#9B9B9B", fontSize: "0.7rem" }}>Lembrete automático enviado 1h antes.</span>
    </div>
    <div
      className="px-4 py-3 rounded-xl font-ui text-[0.75rem] font-semibold"
      style={{ background: "rgba(84,230,31,0.12)", color: "#2d7a06" }}
    >
      +3 novos agendamentos essa semana, sem nenhuma ligação.
    </div>
  </div>
);

/* ── Section ─────────────────────────────────────────────────────── */

const steps = [
  { Visual: Card1Visual, title: "Cadastre seus serviços e horários",       desc: "Leva menos de 10 minutos. Serviços, preços e horários disponíveis." },
  { Visual: Card2Visual, title: "Compartilhe seu link de agendamento",     desc: "Mande no Instagram, no WhatsApp, onde quiser. Seus clientes escolhem o horário." },
  { Visual: Card3Visual, title: "Clientes agendam, o app confirma e lembra", desc: "Você só aparece e atende. O app cuida do resto — confirmação e lembrete." },
];

const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section id="como-funciona" className="py-[100px] px-6" style={{ background: "#fff" }} ref={ref}>
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center scroll-reveal mb-14">
          <h2 style={{ fontFamily: "'CooperBT', serif", fontWeight: 500, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#262626" }}>
            É{" "}
            <span style={{ fontFamily: "'Italiana', serif", fontWeight: 700, color: "#05487F" }}>
              simples
            </span>
            . Do jeito que tem que ser.
          </h2>
          <p className="font-ui text-[1.05rem] mt-4" style={{ color: "#6B6B6B" }}>
            Em menos de 10 minutos seu salão já está recebendo agendamentos.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {steps.map(({ Visual, title, desc }, i) => (
            <div
              key={i}
              className="scroll-reveal flex-1 rounded-2xl overflow-hidden flex flex-col"
              style={{ background: "#fff", boxShadow: "0 2px 20px rgba(0,0,0,0.07)" }}
            >
              {/* Mockup area */}
              <div
                className="flex flex-col justify-center"
                style={{ background: "#F9F8F5", borderBottom: "1px solid rgba(0,0,0,0.05)", minHeight: "220px" }}
              >
                <Visual />
              </div>

              {/* Text area */}
              <div className="p-7">
                <h3 className="font-display font-semibold text-[1.15rem] leading-snug" style={{ color: "#262626" }}>
                  {title}
                </h3>
                <p className="font-ui text-[0.9rem] mt-2 leading-[1.7]" style={{ color: "#6B6B6B" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
