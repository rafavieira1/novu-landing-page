const FinalCTA = () => (
  <section
    className="py-[120px] px-6 text-center"
    style={{
      background: "#fff",
    }}
  >
    <div className="max-w-[700px] mx-auto">
      <h2
        style={{ fontFamily: "'CooperBT', serif", fontWeight: 500, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#262626" }}
      >
        Seu salão merece uma agenda{" "}
        <span style={{ fontFamily: "'Italiana', serif", fontWeight: 700, color: "#05487F" }}>à altura</span>.
      </h2>
      <p
        className="font-ui text-[1.05rem] mt-5"
        style={{ color: "#6B6B6B" }}
      >
        Comece grátis. Sem cartão de crédito. Cancele quando quiser.
      </p>
      <a
        href="#"
        className="inline-block mt-8 font-ui font-bold text-[1.1rem] px-11 py-[18px] rounded-full transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "#05487F",
          color: "#fff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
          (e.target as HTMLElement).style.background = "#063d6a";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
          (e.target as HTMLElement).style.background = "#05487F";
        }}
      >
        Criar minha agenda agora
      </a>
      <p
        className="font-ui text-[0.875rem] italic mt-4"
        style={{ color: "#999999" }}
      >
        Já mais de 500 salões organizados em todo o Brasil
      </p>
    </div>
  </section>
);

export default FinalCTA;
