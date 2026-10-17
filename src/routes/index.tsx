import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, BookOpen, PlayCircle, ShieldCheck } from "lucide-react";

const PLATFORM_URL = "https://plataformamec.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Compra realizada! | Formação Mecânico Automotivo" },
      { name: "description", content: "Obrigado pela compra! Acesse sua plataforma de aulas de mecânica automotiva." },
      { property: "og:title", content: "Bem-vindo à Formação Mecânico Automotivo" },
      { property: "og:description", content: "Seu próximo passo é acessar a plataforma e começar seus estudos." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#090d12] text-white">
      <section className="relative isolate mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pt-16">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[650px] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/[0.08] blur-[100px]" />

        <div className="flex size-16 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-500/10 shadow-[0_0_50px_rgba(16,185,129,0.12)] sm:size-20">
          <CheckCircle2 className="size-9 text-emerald-400 sm:size-11" strokeWidth={1.8} />
        </div>
        <span className="mt-5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
          Bem-vindo ao treinamento!
        </span>
        <h1 className="mt-5 max-w-3xl text-center text-3xl font-black leading-tight tracking-tight sm:text-5xl">
          Obrigado pela sua <span className="text-emerald-400">compra!</span>
        </h1>
        <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-slate-300 sm:text-lg">
          Você deu o primeiro passo para desenvolver seus conhecimentos em mecânica automotiva.
          Sua jornada começa agora: acesse a plataforma e explore suas aulas e materiais.
        </p>

        <div className="mt-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-[0_24px_75px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:p-3">
          <img
            src="/mk2.png"
            alt="Prévia da plataforma de Mecânica Automotiva exibida em computador e celular"
            className="block aspect-[4/3] w-full rounded-xl object-contain sm:rounded-2xl"
            loading="eager"
            onError={(event) => {
              const image = event.currentTarget;
              if (image.src.endsWith("/mk2.png")) image.src = "/mk2.PNG";
              else if (image.src.endsWith("/mk2.PNG")) image.src = "/mk2.jpg";
              else if (image.src.endsWith("/mk2.jpg")) image.src = "/mk2.jpeg";
              else image.style.display = "none";
            }}
          />
        </div>

        <div className="mt-8 w-full max-w-2xl rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-white/[0.08] to-white/[0.025] p-5 text-center shadow-2xl sm:p-8">
          <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
            <PlayCircle className="size-6" />
          </div>
          <h2 className="mt-4 text-xl font-extrabold sm:text-2xl">Sua plataforma está a um clique</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            Clique no botão abaixo para acessar suas videoaulas e começar a estudar no seu ritmo.
          </p>
          <a
            href={PLATFORM_URL}
            className="mt-6 flex min-h-16 w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-4 text-center text-base font-black uppercase tracking-wide text-[#062a1c] shadow-[0_12px_35px_rgba(16,185,129,0.25)] transition hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 sm:text-lg"
          >
            Acessar minhas aulas <ArrowRight className="size-5 shrink-0" />
          </a>
          <p className="mt-3 text-xs text-slate-400">Você será direcionado à plataforma de estudos.</p>
        </div>

        <div className="mt-8 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-center">
            <BookOpen className="mx-auto mb-2 size-6 text-amber-400" />
            <h3 className="text-sm font-bold">Aulas organizadas</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">Aprenda com conteúdos separados por módulos.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-center">
            <PlayCircle className="mx-auto mb-2 size-6 text-amber-400" />
            <h3 className="text-sm font-bold">No seu ritmo</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">Estude pelo celular ou computador.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-center">
            <ShieldCheck className="mx-auto mb-2 size-6 text-amber-400" />
            <h3 className="text-sm font-bold">Área de estudos</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">Tenha suas aulas e materiais em um só lugar.</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">
          Formação Mecânico Automotivo • Bons estudos!
        </p>
      </section>
    </main>
  );
}
