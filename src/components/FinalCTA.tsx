const FinalCTA = () => (
  <section
    className="py-[120px] px-6 text-center"
    style={{
      background: "linear-gradient(135deg, #7a9e7e 0%, #05487F 100%)",
    }}
  >
    <div className="max-w-[700px] mx-auto">
      <h2
        className="font-display font-light text-white"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
      >
        Seu salão merece uma agenda à altura.
      </h2>
      <p
        className="font-ui text-[1.05rem] mt-5"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        Comece grátis. Sem cartão de crédito. Cancele quando quiser.
      </p>
      <a
        href="#"
        className="inline-block mt-8 font-ui font-bold text-[1.1rem] px-11 py-[18px] rounded-full transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "#fff",
          color: "#262626",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
          (e.target as HTMLElement).style.background = "rgba(255,255,255,0.88)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
          (e.target as HTMLElement).style.background = "#fff";
        }}
      >
        Criar minha agenda agora
      </a>
      <p
        className="font-ui text-[0.875rem] italic mt-4"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        Já mais de 500 salões organizados em todo o Brasil
      </p>
    </div>
  </section>
);

export default FinalCTA;
