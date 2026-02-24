import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-[100px] px-6 md:px-6" style={{ background: "#F3EFE7" }} ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="scroll-reveal">
          <h2
            className="font-display font-light"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#262626" }}
          >
            Você ainda anota tudo à mão?
          </h2>
          <p
            className="font-ui text-[1.05rem] max-w-[520px] mt-4 leading-[1.75]"
            style={{ color: "#6B6B6B" }}
          >
            Caderninho rasgado, WhatsApp lotado de "que horas tá meu horário?" e cliente que não apareceu sem avisar. A rotina de quem ama o que faz não precisa ser assim.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {/* Card 1 — full width */}
          <div
            className="scroll-reveal md:col-span-2 relative overflow-hidden rounded-[20px] p-11 min-h-[280px]"
            style={{
              background: "linear-gradient(135deg, #05487F 0%, #7a9e7e 100%)",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                top: "-50px",
                right: "-50px",
                width: "220px",
                height: "220px",
                background: "rgba(255,255,255,0.06)",
              }}
            />
            <div className="absolute bottom-10 left-11 max-w-[440px]">
              <h3 className="font-display font-semibold text-[1.8rem] text-white leading-tight">
                Sem agendamento online, você perde cliente toda hora
              </h3>
              <p
                className="font-ui text-[0.95rem] mt-[10px] leading-[1.65] max-w-[420px]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Enquanto você está atendendo, tem cliente tentando marcar horário pelo WhatsApp — e desistindo porque demorou pra responder.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="scroll-reveal relative overflow-hidden rounded-[20px] p-9 min-h-[260px]"
            style={{
              background: "linear-gradient(135deg, #05487F 0%, #063d6a 100%)",
            }}
          >
            <h3 className="font-display font-semibold text-[1.5rem] text-white">
              Clientes somem sem avisar
            </h3>
            <p
              className="font-ui text-[0.9rem] mt-3 leading-[1.65]"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              Aquele horário vago na última hora que você não conseguiu preencher? São R$ que ficaram na mesa por falta de lembrete automático.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="scroll-reveal relative overflow-hidden rounded-[20px] p-9 min-h-[260px]"
            style={{
              background: "linear-gradient(135deg, #7a9e7e 0%, #5a8060 100%)",
            }}
          >
            <h3 className="font-display font-semibold text-[1.5rem] text-white">
              A agenda de papel não escala
            </h3>
            <p
              className="font-ui text-[0.9rem] mt-3 leading-[1.65]"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              Quando o salão cresce, o caderninho vira caos. Sem histórico, sem controle, sem como saber quem é sua cliente mais fiel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
