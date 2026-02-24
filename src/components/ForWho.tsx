import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = ["Cabelo", "Cílios", "Sobrancelha", "Unhas", "Limpeza de pele", "Maquiagem", "Depilação"];
const cardServices = ["Corte", "Coloração", "Cílios", "Sobrancelha"];
const timeSlots = ["09:00", "10:30", "14:00", "15:30", "16:00", "17:30"];

const ForWho = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-[100px] px-6" style={{ background: "linear-gradient(135deg, #05487F 0%, #063d6a 100%)" }} ref={ref}>
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left */}
        <div className="scroll-reveal">
          <span
            className="font-ui font-semibold text-[0.75rem] uppercase tracking-[0.12em]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            PARA QUEM É
          </span>
          <h2
            className="font-display font-light mt-3 text-white"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Feito para salões como o <span className="text-accent-script">seu</span>.
          </h2>
          <p
            className="font-ui text-[1.05rem] mt-5 leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Se você faz cabelo, cílios, sobrancelha, unhas, limpeza de pele ou qualquer serviço de beleza — e ainda organiza sua agenda no papel ou pelo WhatsApp — esse app foi feito pra você.
          </p>
          <div className="flex flex-wrap gap-[10px] mt-7">
            {services.map((s) => (
              <span
                key={s}
                className="font-ui text-[0.875rem] text-white px-[18px] py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Floating card */}
        <div className="scroll-reveal">
          <div
            className="rounded-[20px] p-8"
            style={{
              background: "#fff",
              boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            }}
          >
            <h4 className="font-ui font-semibold text-base" style={{ color: "#262626" }}>
              Escolha seu horário
            </h4>
            <p className="font-ui text-[0.85rem] mt-1" style={{ color: "#6B6B6B" }}>
              Studio Bella ✓
            </p>

            {/* Service selector */}
            <div className="mt-4">
              <label className="font-ui font-semibold text-[0.8rem]" style={{ color: "#384145" }}>
                Serviço
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {cardServices.map((s) => (
                  <span
                    key={s}
                    className="font-ui text-[0.8rem] px-[14px] py-[6px] rounded-full cursor-default"
                    style={{
                      background: s === "Cílios" ? "#05487F" : "#F3EFE7",
                      color: s === "Cílios" ? "#fff" : "#384145",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Time slots */}
            <div className="mt-4">
              <label className="font-ui font-semibold text-[0.8rem]" style={{ color: "#384145" }}>
                Horários disponíveis
              </label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {timeSlots.map((t) => (
                  <span
                    key={t}
                    className="font-ui text-[0.85rem] py-2 rounded-lg text-center cursor-default"
                    style={{
                      background: t === "14:00" ? "#05487F" : "#F7F7F7",
                      color: t === "14:00" ? "#fff" : "#384145",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              className="w-full mt-5 font-ui font-semibold text-white py-[14px] rounded-full cursor-default"
              style={{ background: "#05487F" }}
            >
              Confirmar agendamento
            </button>

            {/* Badge */}
            <div
              className="text-center mt-3 font-ui text-[0.8rem] py-[6px] px-[14px] rounded-full"
              style={{ background: "#E8FFF0", color: "#1A6B3C" }}
            >
              ✓ Lembrete via WhatsApp ativado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
