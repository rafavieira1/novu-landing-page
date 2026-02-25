const HeroSection = () => {
  return (
    <section className="novu-hero">
      <div className="novu-hero__bg-image" />

      <div className="novu-hero__content">
        <h1 className="novu-hero__h1">
          Sua agenda <span className="novu-hero__h1-script">trabalha.</span><br />Você <span className="novu-hero__h1-script">atende.</span>
        </h1>
        <p className="novu-hero__sub">
          Seus clientes agendam pelo link, recebem lembrete automático e
          aparecem no horário. Você foca no que realmente importa&nbsp;—
          o atendimento.
        </p>
        <a href="#" className="novu-hero__cta">
          Experimentar Grátis
        </a>
      </div>
    </section>
  );
};

export default HeroSection;