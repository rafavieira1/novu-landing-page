import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-[100px] px-6 md:px-10" style={{ background: "#fff" }} ref={ref}>
      <div className="max-w-[1280px] mx-auto">
        <div className="scroll-reveal mb-12">
          <h2
            style={{ fontFamily: "'CooperBT', serif", fontWeight: 500, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#262626" }}
          >
            Você ainda anota tudo{" "}
            <span style={{ fontFamily: "'Italiana', serif", fontWeight: 700, color: "#05487F" }}>
              à mão?
            </span>
          </h2>
          <p
            className="font-ui text-[1.05rem] max-w-[520px] mt-4 leading-[1.75]"
            style={{ color: "#6B6B6B" }}
          >
            Caderninho rasgado, WhatsApp lotado de "que horas tá meu horário?" e cliente que não apareceu sem avisar. A rotina de quem ama o que faz não precisa ser assim.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1 — full width */}
          <div
            className="scroll-reveal md:col-span-2 relative overflow-hidden rounded-[24px] min-h-[320px]"
          >
            {/* Image — right half */}
            <img
              src="/1.jpeg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
            />

            <div className="relative z-10 flex flex-col justify-end h-full p-12 min-h-[320px] max-w-[640px]">
              <h3
                className="font-display font-semibold text-white leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                Sem agendamento online, você perde cliente toda hora
              </h3>
              <p
                className="font-ui text-[1rem] mt-4 leading-[1.75]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Enquanto você está atendendo, tem cliente tentando marcar horário pelo WhatsApp — e desistindo porque demorou pra responder.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="scroll-reveal relative overflow-hidden rounded-[24px] min-h-[280px]"
          >
            <img
              src="/2.jpeg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
            />

            <div className="relative z-10 flex flex-col justify-end h-full p-12 min-h-[280px]">
              <h3
                className="font-display font-semibold text-white leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
              >
                Clientes somem sem avisar
              </h3>
              <p
                className="font-ui text-[0.95rem] mt-4 leading-[1.75]"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                Aquele horário vago na última hora que você não conseguiu preencher? São R$ que ficaram na mesa por falta de lembrete automático.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="scroll-reveal relative overflow-hidden rounded-[24px] min-h-[280px]"
          >
            <img
              src="/3.jpeg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
            />

            <div className="relative z-10 flex flex-col justify-end h-full p-12 min-h-[280px]">
              <h3
                className="font-display font-semibold text-white leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
              >
                A agenda de papel não escala
              </h3>
              <p
                className="font-ui text-[0.95rem] mt-4 leading-[1.75]"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                Quando o salão cresce, o caderninho vira caos. Sem histórico, sem controle, sem como saber quem é sua cliente mais fiel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
