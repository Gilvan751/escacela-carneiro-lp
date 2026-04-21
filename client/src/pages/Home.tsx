import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, Dumbbell, Heart, Zap, Target, Users, TrendingUp, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Energia Fitness Vibrante
 * - Bold typography with Montserrat
 * - Purple (#8A4DFF) + Orange (#FF6B35) gradient energy
 * - Large hero images as protagonists
 * - Dramatic animations and movement
 * - Community and transformation narrative
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">Escacela Carneiro</h1>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#sobre" className="text-slate-700 hover:text-purple-600 transition">Sobre</a>
            <a href="#servicos" className="text-slate-700 hover:text-purple-600 transition">Serviços</a>
            <a href="#depoimentos" className="text-slate-700 hover:text-purple-600 transition">Depoimentos</a>
            <a href="#faq" className="text-slate-700 hover:text-purple-600 transition">FAQ</a>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:shadow-lg hover:scale-105 transition-all">
              Agendar Consulta
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/113901084/Mc7aaJrh7nxE4abZxVwqTG/hero-personal-trainer-8eBT8ZYTKwrZQ42WYcJ4ZD.webp')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
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
            <Button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-6 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow">
              Descubra Nossos Planos
            </Button>
            <Button variant="outline" className="border-white text-white px-8 py-6 text-lg hover:bg-white/10">
              Saiba Mais
            </Button>
          </div>
          <p className="text-lg mt-8 text-gray-200 font-semibold">
            Resultados Reais. Acompanhamento Dedicado.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/113901084/Mc7aaJrh7nxE4abZxVwqTG/client-training-session-XKY2HsyxrqSqFZaadFhcgb.webp"
                alt="Escacela Carneiro treinando cliente"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow"
              />
            </div>

            <div className="animate-slide-in-right">
              <div className="section-divider mb-4"></div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Conheça Seu <span className="gradient-text">Personal Trainer</span>
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Sou Escacela Carneiro, personal trainer apaixonado por transformar vidas através do fitness. Com anos de experiência, dedico-me a criar planos de treinamento personalizados que combinam eficiência, segurança e resultados reais.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Minha filosofia é simples: não existe treino genérico. Cada corpo é único, cada objetivo é diferente, e cada pessoa merece um acompanhamento dedicado que respeite suas limitações e potencialize seus resultados.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <Zap className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-bold text-slate-900">Personalização</h3>
                  <p className="text-sm text-slate-700">Planos 100% adaptados</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                  <h3 className="font-bold text-slate-900">Resultados</h3>
                  <p className="text-sm text-slate-700">Comprovados e reais</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <Heart className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-bold text-slate-900">Motivação</h3>
                  <p className="text-sm text-slate-700">Constante e genuína</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <Users className="w-8 h-8 text-orange-600 mb-2" />
                  <h3 className="font-bold text-slate-900">Saúde Integral</h3>
                  <p className="text-sm text-slate-700">Abordagem holística</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Meus Serviços</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Planos de treinamento pensados para suas metas e estilo de vida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Treinamento Presencial",
                description: "Planos individualizados para quem busca acompanhamento direto em academia ou local combinado.",
                icon: Dumbbell,
                color: "from-purple-600 to-purple-500",
              },
              {
                title: "Treinamento Online",
                description: "Planos e acompanhamento remoto via app/plataforma, ideal para quem tem rotina corrida.",
                icon: Zap,
                color: "from-orange-600 to-orange-500",
              },
              {
                title: "Consultoria Fitness",
                description: "Avaliação física, orientação nutricional básica e plano de treino para direcionamento.",
                icon: Target,
                color: "from-purple-600 to-orange-500",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-scale border-0 bg-white"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                  <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:shadow-lg">
                    Saiba Mais
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Por Que Treinar Comigo?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Os resultados que você busca, com a orientação que você merece
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Alcance seus objetivos mais rápido",
              "Receba um plano 100% personalizado",
              "Aumente sua motivação e consistência",
              "Previna lesões com exercícios corretos",
              "Melhore sua saúde e bem-estar geral",
              "Ganhe mais confiança em si mesmo",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-lg font-semibold text-slate-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformação Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Veja Resultados Reais</h2>
            <p className="text-xl text-gray-300">Transformações que inspiram</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/113901084/Mc7aaJrh7nxE4abZxVwqTG/transformation-success-nzL2NXmMSzwVx9Qt72wNyE.webp"
              alt="Transformação antes e depois"
              className="rounded-2xl shadow-2xl animate-zoom-in"
            />
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold mb-6">Histórias de Sucesso</h3>
              <div className="space-y-6">
                {[
                  { name: "João Silva", result: "Perdeu 15kg em 4 meses" },
                  { name: "Maria Santos", result: "Ganhou força e confiança" },
                  { name: "Pedro Costa", result: "Melhorou performance esportiva" },
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-300">{testimonial.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Quem Treina Comigo Aprova</h2>
            <p className="text-xl text-slate-600">Veja os resultados reais dos meus alunos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ana", quote: "Perdi 10kg em 3 meses! Escacela é incrível!", rating: 5 },
              { name: "Carlos", quote: "Nunca me senti tão forte e motivado. Recomendo!", rating: 5 },
              { name: "Juliana", quote: "Escacela me ajudou a voltar a treinar com prazer.", rating: 5 },
            ].map((testimonial, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-xl transition-all animate-fade-in-scale border-0"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-orange-500">★</span>
                    ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Dúvidas Comuns</h2>
            <p className="text-xl text-slate-600">Respostas para suas principais perguntas</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Quanto tempo dura uma sessão de treino?",
                answer: "As sessões presenciais duram em média 60 minutos, incluindo aquecimento, treino principal e alongamento. Para treinamento online, você tem flexibilidade de 30 a 60 minutos conforme sua disponibilidade.",
              },
              {
                question: "Qual o investimento?",
                answer: "Os valores variam conforme o serviço escolhido. Oferecemos pacotes mensais, trimestrais e anuais com descontos progressivos. Entre em contato para uma consulta gratuita e orçamento personalizado.",
              },
              {
                question: "Vocês atendem iniciantes?",
                answer: "Com certeza! Atendo pessoas em todos os níveis, desde iniciantes até atletas avançados. O importante é que você tenha disposição para começar sua jornada de transformação.",
              },
              {
                question: "O que está incluído no treinamento online?",
                answer: "Plano de treino personalizado, acompanhamento via app, correção de exercícios por vídeo, orientações nutricionais básicas e suporte motivacional constante.",
              },
              {
                question: "Como funciona a primeira consulta?",
                answer: "A primeira consulta é gratuita! Conversamos sobre seus objetivos, histórico de saúde, rotina e expectativas. Depois, elaboro um plano personalizado e você decide se deseja prosseguir.",
              },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-purple-600">
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

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto Para Começar Sua Transformação?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Agende sua consulta inicial gratuita e descubra como posso te ajudar a alcançar seus objetivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
              Agendar Consulta Gratuita
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
            >
              Fale Comigo no WhatsApp
            </Button>
          </div>

          <p className="text-gray-200">
            Ou envie uma mensagem: <span className="font-bold">contato@escacelacarneiro.com</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg"></div>
                <h3 className="font-bold text-white">Escacela Carneiro</h3>
              </div>
              <p className="text-sm">Personal Trainer | Saúde e Performance</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="hover:text-purple-400">Sobre Mim</a></li>
                <li><a href="#servicos" className="hover:text-purple-400">Serviços</a></li>
                <li><a href="#depoimentos" className="hover:text-purple-400">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-purple-400">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
                <li><a href="#" className="hover:text-purple-400">Facebook</a></li>
                <li><a href="#" className="hover:text-purple-400">TikTok</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <p className="text-sm mb-2">Email: contato@escacelacarneiro.com</p>
              <p className="text-sm">WhatsApp: (11) 99999-9999</p>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>© 2026 Escacela Carneiro. Todos os direitos reservados.</p>
            <p className="mt-2"><a href="#" className="hover:text-purple-400">Política de Privacidade</a></p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá%20Escacela,%20tenho%20interesse%20em%20seus%20serviços%20de%20personal%20trainer"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
