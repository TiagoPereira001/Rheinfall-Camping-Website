import { Link } from "react-router";
import { ArrowRight, Camera, Handshake, MapPin, MessageCircle, Wrench } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useStructuredData } from "../hooks/useStructuredData";
import { WHATSAPP_NUMBER, LOCATION, whatsappLink } from "../data/config";

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
  { texto: "Mais de 10 anos na Covilhã", Icone: MapPin },
  { texto: "Preparada como se fosse nossa", Icone: Wrench },
  { texto: "Atendimento direto, sem pressão", Icone: Handshake },
  { texto: "Fotos reais de cada autocaravana", Icone: Camera },
];

const CARTOES = [
  {
    titulo: "Stock",
    texto: "Veja as autocaravanas que estão cá, com foto, ano, quilómetros e preço.",
    para: "/stock",
    etiqueta: "Ver o stock",
    imagem: "/images/dethleffs/foto_3.webp",
  },
  {
    titulo: "Vender a sua",
    texto: "Se tem uma autocaravana para vender, deixe os dados. Nós respondemos.",
    para: "/vender",
    etiqueta: "Quero vender",
    imagem: "/images/ford_laika/ford_laika_2.webp",
  },
  {
    titulo: "Contactos",
    texto: "A visita é na Covilhã, por marcação. Ligue ou escreva.",
    para: "/contactos",
    etiqueta: "Falar connosco",
    imagem: "/images/dethleffs/foto_2.webp",
  },
];

// Foco visível igual em todos os botões e ligações da home
const FOCO = "focus-visible:outline-2 focus-visible:outline-offset-4";
// Botões: mudam de cor no hover e afundam um pouco ao carregar
const PRESSAO = "active:scale-[0.98] transition-[background-color,transform] duration-150 motion-reduce:active:scale-100";

function HomePage() {
  usePageTitle();
  useStructuredData(DADOS_ESTRUTURADOS);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#1c1c1c] h-[min(calc(100svh-4rem),860px)] min-h-[520px] flex items-end">
        <img
          src="/images/foto_padrao_desktop.webp"
          srcSet="/images/foto_padrao_mobile.webp 800w, /images/foto_padrao_desktop.webp 1600w"
          sizes="100vw"
          alt="Autocaravana do stock RheinfallCamping"
          // @ts-expect-error — minúsculas de propósito: React 18 não reconhece
          // "fetchPriority" (camelCase) e o atributo real do DOM é lowercase
          fetchpriority="high"
          className="absolute inset-0 -z-10 w-full h-full object-cover object-[50%_65%]"
        />
        {/* Escurece só a base, onde está o texto; o céu da foto fica limpo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/5"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-28 w-full min-w-0 motion-safe:animate-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:ease-out">
          <h1 className="font-serif text-white text-[2.6rem] sm:text-6xl lg:text-[5.25rem] font-medium leading-[1.02] tracking-[-0.02em] mb-9">
            <span className="block">Autocaravanas</span>
            <span className="block">usadas na Covilhã</span>
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/stock"
              className={`inline-flex items-center gap-2 bg-white text-black text-[0.9375rem] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 ${PRESSAO} focus-visible:outline-white ${FOCO}`}
            >
              Ver autocaravanas
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink("Olá, tenho interesse nas vossas autocaravanas.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 bg-[#25D366] text-black text-[0.9375rem] font-medium px-7 py-3.5 rounded-full hover:bg-[#20bd5a] ${PRESSAO} focus-visible:outline-white ${FOCO}`}
            >
              <MessageCircle size={17} aria-hidden="true" />
              Falar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <img
            src="/images/ford_laika/ford_laika_1.jpg"
            alt="Autocaravana Ford Laika estacionada, com a serra ao fundo"
            width={832}
            height={624}
            loading="lazy"
            className="lg:col-span-7 w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(0,0,0,0.35)]"
          />
          <div className="lg:col-span-5">
            <h2 className="text-black text-3xl md:text-[2.75rem] font-medium leading-[1.08] tracking-[-0.02em] mb-8">
              Não somos um stand grande
            </h2>
            <div className="space-y-5 max-w-[60ch]">
              <p className="text-black/80 text-lg leading-relaxed">
                Isto começou com um gosto pessoal: o de pegar numa autocaravana e partir sem direção. Com o tempo, esse gosto tornou-se num projeto — comprar, preparar e vender autocaravanas há mais de 10 anos na zona da Covilhã.
              </p>
              <p className="text-black/70 text-[0.9375rem] leading-relaxed">
                Antes de vender, cada autocaravana é preparada como se fosse para nós. Por dentro e por fora, o objetivo é sempre o mesmo: que o próximo dono receba algo que nós próprios teríamos orgulho em usar.
              </p>
              <p className="text-black/70 text-[0.9375rem] leading-relaxed">
                Aqui falamos diretamente, sem pressão e sem surpresas. A visita é presencial e por marcação. O site serve para ver e para marcar essa conversa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#C2A07A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <h2 className="text-black text-[2.5rem] sm:text-5xl lg:text-[4.25rem] font-medium leading-[1.02] tracking-[-0.03em] max-w-[15ch] text-balance">
            Venha ver com calma. Decida sem pressa.
          </h2>
          <Link
            to="/contactos"
            className={`self-start md:self-auto shrink-0 inline-flex items-center gap-2 bg-black text-white text-[0.9375rem] font-medium px-7 py-3.5 rounded-full hover:bg-black/85 ${PRESSAO} focus-visible:outline-black ${FOCO}`}
          >
            Marcar visita
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-[#f4f4f2] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARTOES.map((cartao) => (
            <Link
              key={cartao.para}
              to={cartao.para}
              className={`group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-[#1c1c1c] min-h-[300px] md:min-h-0 md:aspect-[4/5] p-6 lg:p-7 shadow-[0_2px_4px_rgba(0,0,0,0.05),0_18px_36px_-18px_rgba(0,0,0,0.4)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_24px_44px_-18px_rgba(0,0,0,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-black ${FOCO}`}
            >
              <img
                src={cartao.imagem}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/5"
              />
              <h2 className="text-white text-2xl font-medium tracking-[-0.01em] mb-2">{cartao.titulo}</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-[34ch]">{cartao.texto}</p>
              <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                {cartao.etiqueta}
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-black/10">
        <ul className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
          {SELOS.map(({ texto, Icone }) => (
            <li key={texto} className="flex items-center gap-4 text-black text-[0.9375rem] font-medium leading-snug">
              <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#f4f4f2] text-black">
                <Icone size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              {texto}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default HomePage;
