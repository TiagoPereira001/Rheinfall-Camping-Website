import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Camera, Handshake, MapPin, MessageCircle, Pause, Play, Tag } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useStructuredData } from "../hooks/useStructuredData";
import { WHATSAPP_NUMBER, LOCATION, whatsappLink } from "../data/config";

const DADOS_ESTRUTURADOS = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "RheinfallCamping",
  description:
    "Compra e venda de autocaravanas usadas na zona da Covilhã. Há mais de 10 anos.",
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
  { texto: "Só compra e venda", Icone: Tag },
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
    // Foto de Simeon Stoilov (Pexels, licença livre), creditada no rodapé
    imagem: "/images/autocaravana-por-do-sol.webp",
  },
  {
    titulo: "Contactos",
    texto: "A visita é na Covilhã, por marcação. Ligue ou escreva.",
    para: "/contactos",
    etiqueta: "Falar connosco",
    // Centro da Covilhã, foto de Jose Cruz (Pexels, licença livre), creditada no rodapé
    imagem: "/images/covilha-centro.webp",
  },
];

// Foco visível igual em todos os botões e ligações da home
const FOCO = "focus-visible:outline-2 focus-visible:outline-offset-4";
// Botões: mudam de cor no hover e afundam um pouco ao carregar
const PRESSAO = "active:scale-[0.98] transition-[background-color,transform] duration-150 motion-reduce:active:scale-100";

// Vídeo do topo: Serra da Estrela ao amanhecer, por Afonso Oliveira (Pexels, licença
// livre), creditado no rodapé. A imagem fixa é o primeiro ecrã; o vídeo entra por cima
// só se o visitante não pediu menos movimento nem poupança de dados.
function VideoTopo() {
  const video = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [aCorrer, setACorrer] = useState(false);

  useEffect(() => {
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const poupar = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (reduzido || poupar) return;
    const estreito = window.matchMedia("(max-width: 767px)").matches;
    setSrc(`/videos/serra-estrela-amanhecer-${estreito ? "540p" : "720p"}.mp4`);
  }, []);

  const alternar = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <>
      <img
        src="/images/serra-estrela-amanhecer.webp"
        srcSet="/images/serra-estrela-amanhecer-mobile.webp 800w, /images/serra-estrela-amanhecer.webp 1600w"
        sizes="100vw"
        alt="Estrada de montanha na Serra da Estrela ao amanhecer, vista de cima"
        // @ts-expect-error — minúsculas de propósito: React 18 não reconhece
        // "fetchPriority" (camelCase) e o atributo real do DOM é lowercase
        fetchpriority="high"
        className="absolute inset-0 -z-10 w-full h-full object-cover object-[62%_50%]"
      />
      {src && (
        <video
          ref={video}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          onPlaying={() => setACorrer(true)}
          onPause={() => setACorrer(false)}
          className={`absolute inset-0 -z-10 w-full h-full object-cover object-[62%_50%] transition-opacity duration-700 ease-out ${aCorrer ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {src && (
        // Um vídeo que corre mais de 5 s tem de se poder parar (WCAG 2.2.2)
        <button
          type="button"
          onClick={alternar}
          aria-label={aCorrer ? "Pausar o vídeo" : "Continuar o vídeo"}
          className={`absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/45 text-white border border-white/25 hover:bg-black/65 ${PRESSAO} focus-visible:outline-white ${FOCO}`}
        >
          {aCorrer ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        </button>
      )}
    </>
  );
}

// Loader dos momentos do taste-skill, copiado do kit para public/assets/moments.
// Fica fora do bundle do Vite de propósito: é servido tal como está.
const LOADER_MOMENTOS = "/assets/moments/moments.js";

type Momentos = {
  mount: (el: HTMLElement) => Promise<unknown>;
  unmountAll: (root: ParentNode) => void;
};

function HomePage() {
  usePageTitle();
  useStructuredData(DADOS_ESTRUTURADOS);
  const fotoVisita = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = fotoVisita.current;
    if (!el) return;
    // Sem isto o loader montaria tudo sozinho; aqui montamos só esta foto, ao abrir a home
    (window as unknown as { __momentsManual: boolean }).__momentsManual = true;
    let momentos: Momentos | null = null;
    let ativo = true;
    import(/* @vite-ignore */ LOADER_MOMENTOS)
      .then((m: Momentos) => {
        momentos = m;
        if (ativo) return m.mount(el);
      })
      .catch(() => {
        // Sem o momento, a foto fica simplesmente como está
      });
    return () => {
      ativo = false;
      if (el.parentElement) momentos?.unmountAll(el.parentElement);
    };
  }, []);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#1c1c1c] h-[min(calc(100svh-4rem),860px)] min-h-[560px] flex items-end">
        <VideoTopo />
        {/* Escurece só a base, onde está o texto; o céu fica limpo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-black/0"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-14 md:pb-28 w-full min-w-0 motion-safe:animate-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:ease-out">
          <h1 className="font-serif text-white text-[2.6rem] sm:text-6xl lg:text-[5.25rem] font-medium leading-[1.02] tracking-[-0.02em] mb-9">
            <span className="block">Autocaravanas</span>
            <span className="block">usadas na Covilhã</span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
            <Link
              to="/stock"
              className={`inline-flex items-center justify-center gap-2 bg-white text-black text-[0.9375rem] font-medium px-7 py-3.5 rounded-full hover:bg-white/90 ${PRESSAO} focus-visible:outline-white ${FOCO}`}
            >
              Ver autocaravanas
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink("Olá, tenho interesse nas vossas autocaravanas.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 bg-[#25D366] text-black text-[0.9375rem] font-medium px-7 py-3.5 rounded-full hover:bg-[#20bd5a] ${PRESSAO} focus-visible:outline-white ${FOCO}`}
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
                Isto começou com um gosto pessoal: o de pegar numa autocaravana e partir sem direção. Com o tempo, esse gosto tornou-se num projeto — comprar e vender autocaravanas há mais de 10 anos na zona da Covilhã.
              </p>
              <p className="text-black/70 text-[0.9375rem] leading-relaxed">
                O que está no site é o que está à venda. A visita, na Covilhã, serve para ver o veículo como ele é.
              </p>
              <p className="text-black/70 text-[0.9375rem] leading-relaxed">
                Aqui falamos diretamente, sem pressão e sem surpresas. A visita é presencial e por marcação. O site serve para ver e para marcar essa conversa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f2] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-[2.5rem] sm:text-5xl lg:text-[3.75rem] font-medium leading-[1.04] tracking-[-0.03em] text-balance">
              <span className="block text-black">Venha ver com calma.</span>
              <span className="block text-black/60">Decida sem pressa.</span>
            </h2>
            <Link
              to="/contactos"
              className={`mt-10 inline-flex items-center gap-2 bg-black text-white text-[0.9375rem] font-medium px-7 py-3.5 rounded-full hover:bg-black/85 ${PRESSAO} focus-visible:outline-black ${FOCO}`}
            >
              Marcar visita
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          {/* Momento "picture-develops" (taste-skill): a foto revela-se uma vez ao entrar no ecrã */}
          <figure
            ref={fotoVisita}
            data-moment="picture-develops"
            data-moment-opts='{"look": "film"}'
            className="lg:col-span-7 aspect-[4/3] rounded-2xl overflow-hidden bg-[#1c1c1c] shadow-[0_2px_4px_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(0,0,0,0.35)]"
          >
            <img
              src="/images/ford_laika/ford_laika_3.webp"
              alt="Traseira da Ford Laika, num largo com a serra ao fundo"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
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

      <section className="bg-[#f4f4f2] border-t border-black/10">
        <ul className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
          {SELOS.map(({ texto, Icone }) => (
            <li key={texto} className="flex items-center gap-4 text-black text-[0.9375rem] font-medium leading-snug">
              <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#C2A07A]/30 text-black">
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
