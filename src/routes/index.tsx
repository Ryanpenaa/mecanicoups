import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Especialista em Câmbio Automático" },
      {
        name: "description",
        content:
          "Oferta exclusiva para alunos: curso Especialista em Câmbio Automático.",
      },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "#";
const DECLINE_URL = "#";

const benefits = [
  "Funcionamento do câmbio automático",
  "Principais componentes internos",
  "Identificação de falhas e sintomas",
  "Diagnóstico de problemas",
  "Troca e cuidados com o fluido",
  "Manutenção preventiva",
  "Erros que podem causar prejuízos",
  "Procedimentos básicos de reparação",
];

function Index() {
  return (
    <main className="min-h-screen bg-[#090d12] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-5 w-full rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-red-400 sm:text-sm">
            Atenção: oferta exclusiva para alunos
          </p>
          <p className="mt-1 text-sm font-semibold text-white/90">
            Antes de acessar seu treinamento, veja esta condição especial.
          </p>
        </div>

        <div className="grid w-full items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
              Especialização complementar
            </span>

            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Torne-se um especialista em{" "}
              <span className="text-orange-500">Câmbio Automático</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Você já deu o primeiro passo na mecânica automotiva. Agora avance
              para uma área técnica com um treinamento direto ao ponto sobre
              diagnóstico, manutenção e reparos.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5"
                >
                  <span className="mt-0.5 text-sm font-black text-green-400">✓</span>
                  <span className="text-sm text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <img
              src="/especialista.png"
              alt="Curso Especialista em Câmbio Automático"
              className="w-full max-w-[460px] rounded-2xl object-contain drop-shadow-[0_20px_55px_rgba(249,115,22,0.18)]"
            />
          </div>
        </div>

        <div className="mt-8 w-full max-w-2xl rounded-2xl border border-orange-500/25 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-5 text-center shadow-2xl sm:p-7">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-400">
            Condição especial para alunos
          </p>

          <p className="mt-3 text-sm text-white/60">De <span className="line-through">R$ 97,90</span> por apenas</p>

          <div className="mt-1 flex items-end justify-center gap-2">
            <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">
              R$ 37,90
            </span>
          </div>

          <p className="mt-2 text-sm font-semibold text-green-400">
            Pagamento único • acesso vitalício
          </p>

          <a
            href={CHECKOUT_URL}
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-green-500 px-5 py-4 text-center text-base font-black uppercase tracking-wide text-white shadow-[0_12px_35px_rgba(34,197,94,0.28)] transition hover:bg-green-400 sm:text-lg"
          >
            Sim! Quero adicionar Câmbio Automático →
          </a>

          <p className="mt-3 text-xs leading-relaxed text-white/45">
            Ao clicar no botão acima, você será direcionado para o checkout
            seguro da oferta.
          </p>

          <a
            href={DECLINE_URL}
            className="mt-5 inline-block text-xs text-white/40 underline decoration-white/20 underline-offset-4 transition hover:text-white/65"
          >
            Não, obrigado. Quero continuar sem esta especialização.
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-white/35">
          <span>Curso online</span>
          <span>•</span>
          <span>Acesso vitalício</span>
          <span>•</span>
          <span>Pagamento único</span>
        </div>
      </section>
    </main>
  );
}
