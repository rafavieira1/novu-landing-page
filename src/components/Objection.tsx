import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = ["Sem treinamento longo", "Suporte via WhatsApp", "Cancele quando quiser"];

const Objection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-[100px] px-6" style={{ background: "#fff" }} ref={ref}>
      <div className="max-w-[640px] mx-auto text-center">
        <div className="scroll-reveal">
          <h2 className="font-display font-light" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "#262626" }}>
            "Mas será que é complicado?"
          </h2>
          <p className="font-ui text-[1.05rem] mt-5 leading-[1.75]" style={{ color: "#6B6B6B" }}>
            Não. Se você usa WhatsApp, você usa Novu. A configuração é rápida, o suporte é humano, e você começa a receber agendamentos no mesmo dia.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center">
          {items.map((text) => (
            <div key={text} className="scroll-reveal flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-ui font-semibold text-base text-white"
                style={{ background: "#7a9e7e" }}
              >
                ✓
              </div>
              <span className="font-ui font-semibold text-[0.95rem] mt-[10px]" style={{ color: "#262626" }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objection;
