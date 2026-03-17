import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, Video, Users, BookOpen, Award, 
  UserCheck, Layout, CheckCircle2, ArrowRight, X, ChevronRight, CalendarDays, GraduationCap, Star, Briefcase, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isSpeakersOpen, setIsSpeakersOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);

  const closeAllModals = () => {
    setIsSpeakersOpen(false);
    setIsPlanOpen(false);
    setIsDatesOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeAllModals();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const features = [
    { icon: <Calendar className="w-5 h-5" />, text: "1 місяць навчання" },
    { icon: <Users className="w-5 h-5" />, text: "3 топ-спікери" },
    { icon: <BookOpen className="w-5 h-5" />, text: "8 лекцій" },
    { icon: <Clock className="w-5 h-5" />, text: "16 годин навчання о 19:00" },
    { icon: <Video className="w-5 h-5" />, text: "Необмежений доступ до записів" },
    { icon: <Award className="w-5 h-5" />, text: "Сертифікат (електронний та друкований)" },
    { icon: <UserCheck className="w-5 h-5" />, text: "Підтримка куратора" },
    { icon: <Layout className="w-5 h-5" />, text: "Особистий кабінет" },
  ];

  const speakers = [
    {
      name: "Олексій Кравченко",
      status: "Засновник Академії Консалтингового Бізнесу",
      spec: "Юрист, серійний підприємець у сфері онлайн-бізнесу, маркетолог",
      exp: "11 років у сфері юридичних послуг та консалтингу",
      lectures: ["Лекція 1 (20.05)", "Лекція 6 (08.06)", "Лекція 8 (15.06)"],
      img: "/speaker1.png"
    },
    {
      name: "Оксана Духовна",
      status: "Власниця брендів DUKHOVNA та «ВАШ ПРАВОВИЙ ЗАХИСТ З ДУШЕЮ», адвокат",
      spec: "IP, медіа-право, сімейне, спадкове, трудове право та персональні дані",
      exp: "Фіналістка «Адвокат року 2020», Ukrainian Women in Law 2021",
      lectures: ["Лекція 2 (25.05)", "Лекція 3 (27.05)", "Лекція 4 (01.06)", "Лекція 5 (03.06)"],
      img: "/speaker2.png"
    },
    {
      name: "Артем Середа",
      status: "Провідний експерт з податкового права компанії «allTax»",
      spec: "Оподаткування онлайн-бізнесу, міжнародні платежі",
      exp: "Спеціаліст із структурування транзакцій через PayPal та Stripe",
      lectures: ["Лекція 7 (10.06)"],
      img: "/speaker3.png"
    }
  ];

  const coursePlan = [
    { title: "Лекція 1. Онлайн-бізнес: структура та правові моделі", topics: ["Види онлайн-бізнесу", "Юридичні моделі", "Ризики"], practice: "Аналіз реальних моделей", teacher: "Олексій Кравченко" },
    { title: "Лекція 2. Юридичні документи для сайту", topics: ["Terms of Use, Privacy Policy", "Cookies Policy"], practice: "Структура Terms of Use", teacher: "Оксана Духовна" },
    { title: "Лекція 3. Договори в онлайн-бізнесі", topics: ["Публічна оферта", "Договори з підрядниками"], practice: "Розбір договору для онлайн-школи", teacher: "Оксана Духовна" },
    { title: "Лекція 4. Інтелектуальна власність", topics: ["Авторське право на контент", "Передача прав"], practice: "Оформлення договору передачі прав", teacher: "Оксана Духовна" },
    { title: "Лекція 5. GDPR та персональні дані", topics: ["Обробка даних", "Вимоги GDPR"], practice: "Створення Privacy Policy", teacher: "Оксана Духовна" },
    { title: "Лекція 6. Реклама та маркетинг", topics: ["Реклама в соцмережах", "Співпраця з блогерами"], practice: "Договір бренд – блогер", teacher: "Олексій Кравченко" },
    { title: "Лекція 7. Податки в онлайн-бізнесі", topics: ["Вибір ФОП", "PayPal / Stripe"], practice: "Податкова модель онлайн-школи", teacher: "Артем Середа" },
    { title: "Лекція 8. Юрист як консультант", topics: ["Digital-клієнти", "Побудова практики"], practice: "Створення юридичного пакету", teacher: "Олексій Кравченко" }
  ];

  const schedule = [
    "20.05.2026 о 19:00", "25.05.2026 о 19:00", "27.05.2026 о 19:00", 
    "01.06.2026 о 19:00", "03.06.2026 о 19:00", "08.06.2026 о 19:00", 
    "10.06.2026 о 19:00", "15.06.2026 о 19:00"
  ];

  return (
    <div className="min-h-screen bg-[#001B4D] text-white font-sans selection:bg-yellow-400 selection:text-blue-900">
      
      <header className="pt-20 pb-12 px-6 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-400 text-blue-900 font-black text-[10px] uppercase tracking-[0.2em] mb-8">
            Academy of Consulting Business
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[1.05]">ЮРИСТ В <br /><span className="text-yellow-400 italic">ONLINE-БІЗНЕСІ</span></h1>
          <p className="text-xl md:text-2xl text-blue-100/90 max-w-2xl mx-auto font-light leading-relaxed">Практичний курс для юристів digital-проєктів.</p>
        </motion.div>
      </header>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[3rem] p-10 md:p-16 text-blue-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6 uppercase">Бронювати участь</h2>
            <div className="flex items-center gap-8">
              <span className="text-7xl font-black tracking-tighter">2000 грн</span>
              <div className="flex flex-col"><span className="text-3xl line-through opacity-40 font-bold tracking-tighter">3500 грн</span></div>
            </div>
          </div>
          <button className="relative z-10 w-full md:w-auto bg-blue-900 text-white px-14 py-7 rounded-[2rem] font-black text-2xl hover:bg-blue-800 transition-all flex items-center justify-center gap-4 group/btn">
            ЗАПИСАТИСЯ <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      <section className="px-6 py-20 bg-blue-950/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => {
            const isClickable = i === 1 || i === 2 || i === 3;
            return (
              <motion.div
                key={i}
                onClick={() => {
                  if (i === 1) setIsSpeakersOpen(true);
                  if (i === 2) setIsPlanOpen(true);
                  if (i === 3) setIsDatesOpen(true);
                }}
                whileHover={isClickable ? { y: -10 } : {}}
                className={`p-10 rounded-[2.5rem] border border-white/10 bg-blue-900/30 backdrop-blur-md relative overflow-hidden group ${isClickable ? 'cursor-pointer hover:border-yellow-400' : ''}`}
              >
                <div className="text-yellow-400 mb-8">{f.icon}</div>
                <p className="font-bold text-xl leading-tight mb-6">{f.text}</p>
                {isClickable && <div className="text-yellow-400 font-black text-[10px] uppercase tracking-widest pt-5 border-t border-white/5 flex items-center gap-2">Детальніше <ArrowRight className="w-3 h-3" /></div>}
              </motion.div>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {isSpeakersOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeAllModals} className="absolute inset-0 bg-blue-950/98 backdrop-blur-2xl" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-[#001B4D] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[3.5rem] border border-white/10 p-8 md:p-14 shadow-2xl scrollbar-hide">
              <button onClick={closeAllModals} className="absolute top-10 right-10 p-3 bg-white/5 rounded-full hover:bg-red-500 transition-colors"><X className="w-6 h-6 text-white" /></button>
              <div className="text-center mb-16"><Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" /><h2 className="text-4xl font-black uppercase">Наші Спікери</h2></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {speakers.map((s, idx) => (
                  <div key={idx} className="bg-white/5 p-10 rounded-[3rem] border border-white/5 flex flex-col items-center text-center">
                    <img src={s.img} className="w-44 h-44 rounded-full mb-8 object-cover border-4 border-yellow-400 shadow-2xl" alt={s.name} />
                    <h3 className="text-2xl font-black text-yellow-400 mb-2">{s.name}</h3>
                    <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-8">{s.status}</p>
                    <div className="space-y-5 text-left w-full border-t border-white/10 pt-8 mb-8">
                      <div className="flex gap-4"><Zap className="w-5 h-5 text-yellow-400 shrink-0" /><p className="text-sm text-blue-50 font-medium">{s.spec}</p></div>
                      <div className="flex gap-4"><Briefcase className="w-5 h-5 text-yellow-400 shrink-0" /><p className="text-sm text-blue-100/80 italic">{s.exp}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {isPlanOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeAllModals} className="absolute inset-0 bg-blue-950/98 backdrop-blur-2xl" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-[#001B4D] w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[3.5rem] border border-white/10 p-10 md:p-16 shadow-2xl scrollbar-hide">
              <button onClick={closeAllModals} className="absolute top-10 right-10 p-3 bg-white/5 rounded-full hover:bg-red-500 transition-colors"><X className="w-6 h-6" /></button>
              <div className="flex items-center gap-6 mb-16"><div className="bg-yellow-400 p-5 rounded-3xl"><GraduationCap className="w-8 h-8 text-blue-900" /></div><h2 className="text-4xl font-black uppercase">Програма</h2></div>
              <div className="space-y-8">
                {coursePlan.map((l, i) => (
                  <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-yellow-400/20 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                      <h3 className="text-2xl font-black text-white leading-tight"><span className="text-yellow-400/30 mr-2">0{i+1}</span> {l.title}</h3>
                      <span className="text-[10px] bg-yellow-400/10 text-yellow-400 px-4 py-1.5 rounded-full font-black uppercase">{l.teacher}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {l.topics.map((t, j) => <li key={j} className="text-base text-blue-200 flex gap-4"><ChevronRight className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />{t}</li>)}
                    </ul>
                    <div className="bg-yellow-400 p-6 rounded-2xl flex items-start gap-4"><CheckCircle2 className="w-6 h-6 text-blue-900 shrink-0" /><div><p className="text-[10px] font-black text-blue-950 uppercase mb-1">Практика:</p><p className="text-blue-900 font-bold italic">{l.practice}</p></div></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {isDatesOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeAllModals} className="absolute inset-0 bg-blue-950/98 backdrop-blur-2xl" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative bg-[#001B4D] w-full max-w-md rounded-[3.5rem] border border-white/10 p-12 shadow-2xl text-center scrollbar-hide overflow-y-auto max-h-[90vh]">
              <CalendarDays className="w-20 h-20 text-yellow-400 mx-auto mb-8" /><h2 className="text-3xl font-black uppercase mb-12">Графік занять</h2>
              <div className="space-y-3 mb-12">
                {schedule.map((d, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 p-6 rounded-[1.5rem] border border-white/5 group hover:border-yellow-400/40 transition-all"><span className="text-yellow-400/20 font-black text-2xl group-hover:text-yellow-400 transition-colors">0{i+1}</span><span className="font-bold text-lg tracking-tight">{d}</span></div>
                ))}
              </div>
              <button onClick={closeAllModals} className="w-full py-6 bg-yellow-400 text-blue-900 font-black rounded-2xl uppercase tracking-[0.2em] hover:bg-yellow-300">ЗАКРИТИ</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 text-center border-t border-white/5 opacity-40"><p className="text-[10px] font-black uppercase tracking-[0.6em]">Legal Digital Academy • 2026</p></footer>
    </div>
  );
}