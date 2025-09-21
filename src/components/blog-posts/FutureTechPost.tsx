'use client';

import { Calendar, ArrowLeft, Zap, CarFront, Bot, Mic, Rocket } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Post } from '@/types/blog';

interface FutureTechPostProps {
  post: Post;
}

export default function FutureTechPost({ post }: FutureTechPostProps) {
  const techSections = [
    {
      icon: <CarFront className="text-green-400" size={24} />,
      title: "🚗 Електромобілі",
      content: "Є думка, що в найближчі десятиліття сучасні електрокари замінять звичні нам автомобілі з двигуном внутрішнього згоряння. Більш ніж половина власників автомобілів у розвинутих країнах віддадуть перевагу електромотора і позбавляться від необхідності платити за дороге пальне.",
      gradient: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "⚡️ Джерела енергії",
      content: "Через 50 років будуть існувати цілі міста, які будуть повністю забезпечені енергією сонячних ферм та вітряних генераторів. Зібрана енергія буде накопичуватися в батареях високої місткості.",
      gradient: "from-yellow-600/20 to-orange-600/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: <Bot className="text-blue-400" size={24} />,
      title: "🤖 Фізична праця",
      content: "Через пів сторіччя люди зможуть значно зменшити рівень фізичної праці у розвинутих країнах. Це буде пов'язане з перекладанням задач на роботів, які до того часу отримають достатній рівень розвитку.",
      gradient: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Mic className="text-purple-400" size={24} />,
      title: "🗣 Голосовий інтерфейс",
      content: "Взаємодія з комп'ютерами та мобільними пристроями перейде на новий рівень. Використання клавіатури для набору тексту і керування додатками буде не так важливо.",
      gradient: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Rocket className="text-red-400" size={24} />,
      title: "🚇 Швидкі подорожі",
      content: "Переміщення між містами, країнами та континентами буде займати від декількох годин до десятків хвилин завдяки орбітальним перельотам та вакуумним трубам.",
      gradient: "from-red-600/20 to-rose-600/20",
      borderColor: "border-red-500/30"
    }
  ];

  const historicalTech = [
    {
      icon: "📡",
      title: "Інтернет",
      year: "1969-1991",
      description: "Перше повідомлення між комп'ютерами у 1969 році. Загальнодоступним став лише у 1991 році!"
    },
    {
      icon: "💻",
      title: "Персональний комп'ютер",
      year: "1976-77",
      description: "Комп'ютер став загальним продуктом у 1976-77 роках. Всього лише 40+ років тому."
    },
    {
      icon: "📱",
      title: "Мобільний телефон",
      year: "2000s",
      description: "Пристрій з доступом до будь-якої інформації людства просто в кишені."
    },
    {
      icon: "👨‍💻",
      title: "Програмування",
      year: "2000s",
      description: "Масової популярності набуло лише в кінці 20-го та на початку 21-го сторіччя."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
          >
            <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
            Назад до блогу
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden mb-12 border border-violet-500/20">
          <div className="p-8 md:p-12 text-center text-white">
            <div className="text-6xl mb-6">🚀</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Привіт із майбутнього!
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Замислимося над недалеким майбутнім нашої цивілізації та уявимо які нові технології можуть з&apos;явитися через 50 років
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-violet-200 mt-8">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Introduction */}
            <div className="bg-zinc-800/50 rounded-2xl p-8 shadow-lg border border-zinc-700/50">
              <p className="text-lg text-zinc-300 leading-relaxed">
                Пропоную замислитися над недалеким майбутнім нашої цивілізації та уявити які нові технології, пристрої та професії можуть з&apos;явитися через 50 років. А також які з теперішніх речей стануть застарілими та вийдуть із використання.
              </p>
            </div>

            {/* Historical Context */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center">
                <span className="text-4xl mr-3">📚</span>
                Погляд у минуле (50 років тому)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {historicalTech.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30 hover:transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                      {tech.title}
                    </h3>
                    <div className="text-violet-400 font-medium mb-3 text-sm">
                      {tech.year}
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Predictions */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center">
                <span className="text-4xl mr-3">🔮</span>
                Технології майбутнього
              </h2>
              <div className="space-y-8">
                {techSections.map((section, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-r ${section.gradient} p-8 rounded-2xl shadow-lg border ${section.borderColor} backdrop-blur-sm`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-zinc-800/50 rounded-full">
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-zinc-100 mb-4">
                          {section.title}
                        </h3>
                        <p className="text-zinc-200 leading-relaxed text-lg">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Predictions */}
            <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 p-8 rounded-2xl border border-zinc-600/30">
              <h3 className="text-2xl font-bold text-zinc-100 mb-4 flex items-center">
                🙅‍♂️ Водійське посвідчення
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Якщо ви будете щасливим власником сучасного авто, то отримання водійського посвідчення не буде таким необхідним, як зараз. Розвиток автопілотів досягне такого рівня, що середньостатистичному власнику автомобіля у великому місті не потрібно буде докладати зусиль для керування авто.
              </p>
              <div className="bg-violet-600/20 p-4 rounded-lg border border-violet-500/30">
                <p className="text-violet-200 text-sm">
                  💡 Звичне керування авто буде необхідне тільки для специфічних професій або для розваги в автоспорті.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Author Note */}
            <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 p-6 rounded-2xl border border-violet-500/30 sticky top-4">
              <h3 className="text-xl font-semibold text-violet-300 mb-4 flex items-center">
                📝 Примітка автора
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Автор передбачає, що всі описані технології будуть буденністю для наступних поколінь через 50 років. Наші сучасники також зможуть застати масове розповсюдження цих технологій.
              </p>
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <p className="text-orange-300 text-sm font-medium mb-2">
                  🙀 Цікавий факт
                </p>
                <p className="text-zinc-300 text-sm">
                  Оригінал цього тексту був написаний у 2015 році. Всі збіги, які сталися з того часу не є випадковими та свідчать про швидкий розвиток технологій.
                </p>
              </div>
            </div>

            {/* Technology Timeline */}
            <div className="bg-zinc-800/50 rounded-2xl p-6 shadow-lg border border-zinc-700/50">
              <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                ⏱️ Часова лінія
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <div>
                    <div className="text-zinc-300 text-sm">2015</div>
                    <div className="text-zinc-400 text-xs">Написання статті</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="text-zinc-300 text-sm">2021</div>
                    <div className="text-zinc-400 text-xs">Публікація у блозі</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-zinc-500 rounded-full border-2 border-zinc-300"></div>
                  <div>
                    <div className="text-zinc-300 text-sm">2065</div>
                    <div className="text-zinc-400 text-xs">Прогнозований рік</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">До зустрічі у майбутньому! 🚀</h3>
          <p className="text-violet-100 mb-6">
            Що з цих передбачень вже здійснилося? Поділіться своїми думками!
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-colors backdrop-blur-sm"
          >
            Читати більше постів
            <ArrowLeft className="ml-2 rotate-180" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}