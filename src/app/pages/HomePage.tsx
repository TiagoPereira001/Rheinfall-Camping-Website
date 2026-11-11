import { Link } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import { useStructuredData } from "../hooks/useStructuredData";
import { WHATSAPP_NUMBER, LOCATION } from "../data/config";

const DADOS_ESTRUTURADOS = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "RheinfallCamping",
  description:
    "Compra e venda de autocaravanas usadas na zona da Covilhã. Mais de 10 anos a preparar cada veículo antes de vender.",
  url: "https://rheinfallcamping.pt",
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: LOCATION,
    addressCountry: "PT",
  },
  areaServed: "Portugal",
};

const SELOS = [
  "Mais de 10 anos na Covilhã",
  "Preparada como se fosse nossa",
  "Atendimento direto, sem pressão",
  "Fotos reais de cada autocaravana",
];

const CARTOES = [
  {
    titulo: "Stock",
    texto: "Veja as autocaravanas que estão cá, com foto, ano, quilómetros e preço.",
    para: "/stock",
    etiqueta: "Ver o stock",
    imagem: "/images/dethleffs/foto_1.webp",
    alt: "Autocaravana Dethleffs no stock",
  },
  {
    titulo: "Vender a sua",
    texto: "Se tem uma autocaravana para vender, deixe os dados. Nós respondemos.",
    para: "/vender",
    etiqueta: "Quero vender",
    imagem: "/images/ford_laika/ford_laika_1.jpg",
    alt: "Autocaravana Ford Laika",
  },
  {
    titulo: "Contactos",
    texto: "A visita é na Covilhã, por marcação. Ligue ou escreva.",
    para: "/contactos",
    etiqueta: "Falar connosco",
    imagem: "/images/citroen_rapido.webp",
    alt: "Autocaravana Citroën Rapido",
  },
];

function HomePage() {
  usePageTitle();
  useStructuredData(DADOS_ESTRUTURADOS);

  return (
    <>
      <section className="relative bg-black min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="/images/foto_padrao_desktop.webp"
          srcSet="/images/foto_padrao_mobile.webp 800w, /images/foto_padrao_desktop.webp 1600w"
          sizes="100vw"
          alt="Autocaravana do stock RheinfallCamping"
          // @ts-expect-error — minúsculas de propósito: React 18 não reconhece
          // "fetchPriority" (camelCase) e o atributo real do DOM é lowercase
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 w-full min-w-0">
          <p className="text-[#C2A07A] text-xs font-medium uppercase tracking-[0.18em] mb-4">
            Venda de
          </p>
          <h1 className="font-serif text-white text-[2.15rem] sm:text-5xl md:text-6xl font-medium leading-[1.08] max-w-3xl mb-8">
            <span className="block">Autocaravanas</span>
            <span className="block">usadas na Covilhã</span>
          </h1>
          <Link
            to="/stock"
            className="inline-flex items-center bg-white text-black text-sm font-medium px-7 py-3.5 rounded-xl hover:bg-white/90 transition-colors"
          >
            Ver autocaravanas
          </Link>
        </div>
      </section>

      <section className="bg-[#f4f4f2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <img
            src="/images/dethleffs/foto_5.webp"
            alt="Interior da autocaravana Dethleffs, com os bancos da frente"
            className="w-full h-[320px] md:h-[460px] object-cover rounded-2xl"
          />
          <div>
            <h2 className="text-black text-2xl md:text-3xl font-medium leading-snug mb-6">
              Não somos um stand grande
            </h2>
            <p className="text-black/70 text-[0.9375rem] leading-relaxed mb-5">
              Isto começou com um gosto pessoal: o de pegar numa autocaravana e partir sem direção. Com o tempo, esse gosto tornou-se num projeto — comprar, preparar e vender autocaravanas há mais de 10 anos na zona da Covilhã.
            </p>
            <p className="text-black/70 text-[0.9375rem] leading-relaxed mb-5">
              Antes de vender, cada autocaravana é preparada como se fosse para nós. Por dentro e por fora, o objetivo é sempre o mesmo: que o próximo dono receba algo que nós próprios teríamos orgulho em usar.
            </p>
            <p className="text-black/70 text-[0.9375rem] leading-relaxed">
              Aqui falamos diretamente, sem pressão e sem surpresas. A visita é presencial e por marcação. O site serve para ver e para marcar essa conversa.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-20 md:py-28 overflow-hidden">
        <img
          src="/images/dethleffs/foto_2.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <p className="relative max-w-4xl mx-auto px-6 text-center text-white text-3xl md:text-5xl font-medium leading-tight">
          Venha ver com calma. Decida sem pressa.
        </p>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARTOES.map((cartao) => (
            <Link
              key={cartao.para}
              to={cartao.para}
              className="group block rounded-2xl overflow-hidden border border-black/10 bg-[#f4f4f2]"
            >
              <img
                src={cartao.imagem}
                alt={cartao.alt}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h2 className="text-black text-xl font-medium mb-2">{cartao.titulo}</h2>
                <p className="text-black/70 text-sm leading-relaxed mb-4">{cartao.texto}</p>
                <span className="text-black text-sm font-medium underline underline-offset-4">
                  {cartao.etiqueta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f4f2] border-t border-black/10">
        <ul className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SELOS.map((selo) => (
            <li key={selo} className="flex items-start gap-3 text-black text-sm font-medium">
              <span className="mt-0.5 text-[#2f7d4f]" aria-hidden="true">
                ✓
              </span>
              {selo}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default HomePage;
