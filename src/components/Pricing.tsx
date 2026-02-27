import { useScrollReveal } from "@/hooks/useScrollReveal";

const Pricing = () => {
  const ref = useScrollReveal();

  const soloFeatures = ["1 profissional", "Agenda online 24h", "Lembretes WhatsApp/SMS", "Histórico de clientes", "Link público personalizado"];
  const salaoFeatures = ["Até 5 profissionais", "Tudo do plano Solo", "Agenda por profissional", "Painel do gestor", "Relatório de agendamentos"];

  return (
    <section id="precos" className="py-[100px] px-6" style={{ background: "#fff" }} ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center scroll-reveal">
          <h2 style={{ fontFamily: "'CooperBT', serif", fontWeight: 500, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#262626" }}>
            Planos que cabem no seu{" "}
            <span style={{ fontFamily: "'Italiana', serif", fontWeight: 700, color: "#05487F" }}>bolso</span>.
          </h2>
          <p className="font-ui text-[1.05rem] mt-4" style={{ color: "#6B6B6B" }}>
            Comece grátis por 14 dias. Sem cartão de crédito.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-stretch">
          {/* Solo */}
          <div
            className="scroll-reveal flex-1 max-w-[340px] mx-auto md:mx-0 rounded-[20px] p-9"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
            }}
          >
            <span className="font-ui font-semibold text-[0.75rem] uppercase tracking-[0.1em]" style={{ color: "#384145" }}>
              Solo
            </span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display font-semibold text-[3rem] leading-none" style={{ color: "#262626" }}>
                R$ 49
              </span>
              <span className="font-ui text-base" style={{ color: "#6B6B6B" }}>/mês</span>
            </div>
            <p className="font-ui text-[0.95rem] mt-1" style={{ color: "#6B6B6B" }}>
              Para profissionais autônomos
            </p>
            <div className="h-px my-6" style={{ background: "#E8E8E8" }} />
            <ul className="space-y-1">
              {soloFeatures.map((f) => (
                <li key={f} className="font-ui text-[0.95rem] leading-[2]" style={{ color: "#384145" }}>
                  ✓ {f}
                </li>
              ))}
            </ul>
            <button
              className="w-full mt-7 font-ui font-semibold py-[14px] rounded-full transition-all duration-200 cursor-default hover:text-white"
              style={{
                border: "2px solid #05487F",
                color: "#05487F",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#05487F";
                (e.target as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "#05487F";
              }}
            >
              Começar grátis
            </button>
          </div>

          {/* Salão */}
          <div
            className="scroll-reveal flex-1 max-w-[340px] mx-auto md:mx-0 rounded-[20px] p-9"
            style={{
              background: "#05487F",
              boxShadow: "0 12px 40px rgba(5,72,127,0.3)",
            }}
          >
            <span
              className="inline-block font-ui font-semibold text-[0.75rem] px-[14px] py-1 rounded-full mb-4"
              style={{ background: "#00DEDE", color: "#262626" }}
            >
              Mais popular
            </span>
            <span
              className="block font-ui font-semibold text-[0.75rem] uppercase tracking-[0.1em]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Salão
            </span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display font-semibold text-[3rem] leading-none text-white">
                R$ 99
              </span>
              <span className="font-ui text-base" style={{ color: "rgba(255,255,255,0.7)" }}>/mês</span>
            </div>
            <p className="font-ui text-[0.95rem] mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
              Para salões com equipe
            </p>
            <div className="h-px my-6" style={{ background: "rgba(255,255,255,0.15)" }} />
            <ul className="space-y-1">
              {salaoFeatures.map((f) => (
                <li key={f} className="font-ui text-[0.95rem] leading-[2]" style={{ color: "rgba(255,255,255,0.9)" }}>
                  ✓ {f}
                </li>
              ))}
            </ul>
            <button
              className="w-full mt-7 font-ui font-bold py-[14px] rounded-full cursor-default"
              style={{ background: "#fff", color: "#05487F" }}
            >
              Começar grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
