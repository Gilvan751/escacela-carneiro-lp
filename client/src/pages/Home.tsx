import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, Dumbbell, Heart, Zap, Target, Users, TrendingUp, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Intersection Observer hook for scroll-reveal (replaces CSS animations that run on load)
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/113901084/Mc7aaJrh7nxE4abZxVwqTG/hero-personal-trainer-8eBT8ZYTKwrZQ42WYcJ4ZD.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/113901084/Mc7aaJrh7nxE4abZxVwqTG/client-training-session-XKY2HsyxrqSqFZaadFhcgb.webp";
const TRANSFORM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/113901084/Mc7aaJrh7nxE4abZxVwqTG/transformation-success-nzL2NXmMSzwVx9Qt72wNyE.webp";

const SERVICES = [
  { title: "Treinamento Presencial", description: "Planos individualizados para quem busca acompanhamento direto em academia ou local combinado.", icon: Dumbbell, color: "from-purple-600 to-purple-500" },
  { title: "Treinamento Online", description: "Planos e acompanhamento remoto via app/plataforma, ideal para quem tem rotina corrida.", icon: Zap, color: "from-orange-600 to-orange-500" },
  { title: "Consultoria Fitness", description: "Avaliação física, orientação nutricional básica e plano de treino para direcionamento.", icon: Target, color: "from-purple-600 to-orange-500" },
];

const BENEFITS = [
  "Alcance seus objetivos mais rápido",
  "Receba um plano 100% personalizado",
  "Aumente sua motivação e consistência",
  "Previna lesões com exercícios corretos",
  "Melhore sua saúde e bem-estar geral",
  "Ganhe mais confiança em si mesmo",
];

const TESTIMONIALS = [
  { name: "Ana", quote: "Perdi 10kg em 3 meses! Escacela é incrível!", rating: 5 },
  { name: "Carlos", quote: "Nunca me senti tão forte e motivado. Recomendo!", rating: 5 },
  { name: "Juliana", quote: "Escacela me ajudou a voltar a treinar com prazer.", rating: 5 },
];

const FAQ = [
  { question: "Quanto tempo dura uma sessão de treino?", answer: "As sessões presenciais duram em média 60 minutos, incluindo aquecimento, treino principal e alongamento. Para treinamento online, você tem flexibilidade de 30 a 60 minutos conforme sua disponibilidade." },
  { question: "Qual o investimento?", answer: "Os valores variam conforme o serviço escolhido. Oferecemos pacotes mensais, trimestrais e anuais com descontos progressivos. Entre em contato para uma consulta gratuita e orçamento personalizado." },
  { question: "Vocês atendem iniciantes?", answer: "Com certeza! Atendo pessoas em todos os níveis, desde iniciantes até atletas avançados. O importante é que você tenha disposição para começar sua jornada de transformação." },
  { question: "O que está incluído no treinamento online?", answer: "Plano de treino personalizado, acompanhamento via app, correção de exercícios por vídeo, orientações nutricionais básicas e suporte motivacional constante." },
  { question: "Como funciona a primeira consulta?", answer: "A primeira consulta é gratuita! Conversamos sobre seus objetivos, histórico de saúde, rotina e expectativas. Depois, elaboro um plano personalizado e você decide se deseja prosseguir." },
];

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md" role="banner">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center" aria-label="Navegação principal">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-slate-900">Escacela Carneiro</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#sobre" className="text-slate-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">Sobre</a>
            <a href="#servicos" className="text-slate-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">Serviços</a>
            <a href="#depoimentos" className="text-slate-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">Depoimentos</a>
            <a href="#faq" className="text-slate-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">FAQ</a>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:shadow-lg hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
              Agendar Consulta
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero — sem parallax JS, usa CSS background-attachment para evitar layout thrashing */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Seção principal">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
          role="img"
          aria-label="Personal trainer em ambiente de academia moderna"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Transforme Seu Corpo <br />
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              e Sua Vida
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Alcance seus objetivos de saúde e fitness com um plano feito sob medida para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-6 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
              Descubra Nossos Planos
            </Button>
            <Button variant="outline" className="border-white text-white px-8 py-6 text-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
              Saiba Mais
            </Button>
          </div>
          <p className="text-lg mt-8 text-gray-200 font-semibold">Resultados Reais. Acompanhamento Dedicado.</p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-white" aria-labelledby="sobre-title">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <img
                src={ABOUT_IMG}
                alt="Escacela Carneiro treinando cliente em sessão de musculação personalizada"
                className="rounded-2xl shadow-2xl w-full h-auto"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </RevealSection>
            <RevealSection>
              <div className="section-divider mb-4"></div>
              <h2 id="sobre-title" className="text-4xl font-bold mb-6 text-slate-900">
                Conheça Seu <span className="gradient-text">Personal Trainer</span>
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Sou Escacela Carneiro, personal trainer apaixonado por transformar vidas através do fitness. Com anos de experiência, dedico-me a criar planos de treinamento personalizados que combinam eficiência, segurança e resultados reais.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Minha filosofia é simples: não existe treino genérico. Cada corpo é único, cada objetivo é diferente, e cada pessoa merece um acompanhamento dedicado que respeite suas limitações e potencialize seus resultados.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, color: "purple", label: "Personalização", sub: "Planos 100% adaptados" },
                  { icon: TrendingUp, color: "orange", label: "Resultados", sub: "Comprovados e reais" },
                  { icon: Heart, color: "purple", label: "Motivação", sub: "Constante e genuína" },
                  { icon: Users, color: "orange", label: "Saúde Integral", sub: "Abordagem holística" },
                ].map(({ icon: Icon, color, label, sub }) => (
                  <div key={label} className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-4 rounded-lg`}>
                    <Icon className={`w-8 h-8 text-${color}-600 mb-2`} aria-hidden="true" />
                    <h3 className="font-bold text-slate-900">{label}</h3>
                    <p className="text-sm text-slate-700">{sub}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="servicos-title">
        <div className="container mx-auto px-4">
          <RevealSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 id="servicos-title" className="text-4xl font-bold mb-4 text-slate-900">Meus Serviços</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Planos de treinamento pensados para suas metas e estilo de vida</p>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <RevealSection key={idx}>
                  <Card className="p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 bg-white h-full focus-within:ring-2 focus-within:ring-purple-600">
                    <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                    <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                      Saiba Mais
                    </Button>
                  </Card>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white" aria-labelledby="beneficios-title">
        <div className="container mx-auto px-4">
          <RevealSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 id="beneficios-title" className="text-4xl font-bold mb-4 text-slate-900">Por Que Treinar Comigo?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Os resultados que você busca, com a orientação que você merece</p>
          </RevealSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <RevealSection key={idx}>
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg hover:shadow-lg transition-all">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="text-lg font-semibold text-slate-900">{benefit}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transformação */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white" aria-labelledby="transformacao-title">
        <div className="container mx-auto px-4">
          <RevealSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Veja Resultados Reais</h2>
            <p className="text-xl text-gray-300">Transformações que inspiram</p>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <RevealSection>
              <img
                src={TRANSFORM_IMG}
                alt="Transformação corporal antes e depois de treinamento personalizado"
                className="rounded-2xl shadow-2xl w-full h-auto"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </RevealSection>
            <RevealSection>
              <h3 id="transformacao-title" className="text-3xl font-bold mb-6">Histórias de Sucesso</h3>
              <div className="space-y-6">
                {[
                  { name: "João Silva", result: "Perdeu 15kg em 4 meses" },
                  { name: "Maria Santos", result: "Ganhou força e confiança" },
                  { name: "Pedro Costa", result: "Melhorou performance esportiva" },
                ].map((t, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20">
                    <p className="font-bold text-lg">{t.name}</p>
                    <p className="text-gray-300">{t.result}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white" aria-labelledby="depoimentos-title">
        <div className="container mx-auto px-4">
          <RevealSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 id="depoimentos-title" className="text-4xl font-bold mb-4 text-slate-900">Quem Treina Comigo Aprova</h2>
            <p className="text-xl text-slate-600">Veja os resultados reais dos meus alunos</p>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <RevealSection key={idx}>
                <Card className="p-8 hover:shadow-xl transition-all border-0 h-full focus-within:ring-2 focus-within:ring-purple-600">
                  <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${t.rating} de 5 estrelas`}>
                    {Array(t.rating).fill(0).map((_, i) => (
                      <span key={i} className="text-orange-500" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic">"{t.quote}"</p>
                  <p className="font-bold text-slate-900">{t.name}</p>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="faq-title">
        <div className="container mx-auto px-4 max-w-3xl">
          <RevealSection className="text-center mb-16">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 id="faq-title" className="text-4xl font-bold mb-4 text-slate-900">Dúvidas Comuns</h2>
            <p className="text-xl text-slate-600">Respostas para suas principais perguntas</p>
          </RevealSection>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500 text-white" aria-labelledby="cta-title">
        <RevealSection className="container mx-auto px-4 text-center">
          <h2 id="cta-title" className="text-4xl md:text-5xl font-bold mb-6">
            Pronto Para Começar Sua Transformação?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Agende sua consulta inicial gratuita e descubra como posso te ajudar a alcançar seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Agendar Consulta Gratuita
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-white">
              Fale Comigo no WhatsApp
            </Button>
          </div>
          <p className="text-gray-200">
            Ou envie uma mensagem: <span className="font-bold">contato@escacelacarneiro.com</span>
          </p>
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg" aria-hidden="true"></div>
                <span className="font-bold text-white">Escacela Carneiro</span>
              </div>
              <p className="text-sm">Personal Trainer | Saúde e Performance</p>
            </div>
            <div>
              <h2 className="font-bold text-white mb-4 text-base">Navegação</h2>
              <ul className="space-y-2 text-sm">
                {["sobre", "servicos", "depoimentos", "faq"].map((id) => (
                  <li key={id}><a href={`#${id}`} className="hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-1 capitalize">{id === "servicos" ? "Serviços" : id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-white mb-4 text-base">Redes Sociais</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-1">Instagram</a></li>
                <li><a href="#" className="hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-1">Facebook</a></li>
                <li><a href="#" className="hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-1">TikTok</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-white mb-4 text-base">Contato</h2>
              <p className="text-sm mb-2">Email: <a href="mailto:contato@escacelacarneiro.com" className="hover:text-purple-400">contato@escacelacarneiro.com</a></p>
              <p className="text-sm">WhatsApp: <a href="tel:+5511999999999" className="hover:text-purple-400">(11) 99999-9999</a></p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>© 2026 Escacela Carneiro. Todos os direitos reservados.</p>
            <p className="mt-2"><a href="#" className="hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-1">Política de Privacidade</a></p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá%20Escacela,%20tenho%20interesse%20em%20seus%20serviços%20de%20personal%20trainer"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </a>
    </div>
  );
}
