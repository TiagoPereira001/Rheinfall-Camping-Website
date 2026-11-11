import { useEffect } from "react";

const BASE = "RheinfallCamping";
// Igual à do index.html. Repõe-se nas páginas que não passam descrição, para a home
// não ficar com a descrição da última autocaravana vista (o _worker.js reescreve a
// do index.html nas páginas /stock/<id>, por isso não se pode ler de lá).
const DESCRICAO_BASE =
  "Projeto familiar de compra e venda de autocaravanas usadas na Covilhã. Veículos inspecionados, atendimento direto e honesto, visitas por marcação.";

/**
 * Define o título da página e a meta description.
 * Usar em cada página: usePageTitle("O nosso stock", "descrição...")
 */
export function usePageTitle(titulo?: string, descricao?: string) {
  useEffect(() => {
    document.title = titulo ? `${titulo} — ${BASE}` : `${BASE} — Autocaravanas usadas na Covilhã`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", descricao ?? DESCRICAO_BASE);
  }, [titulo, descricao]);
}