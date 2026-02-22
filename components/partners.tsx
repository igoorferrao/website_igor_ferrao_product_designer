'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
  'Santander S.A.',
  'Xgrow',
  'Learning Area',
  'Event X',
  'VTV SBT',
  'Novilha de Ouro',
  'Work 4 Me',
  'Level UP',
];

const TICKER_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS];

const Partners: React.FC = () => {
  return (
    <section className="flex flex-col py-12 gap-4 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <div className="flex items-center justify-center gap-4"></div>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30,
          }}
        >
          {TICKER_ITEMS.map((partner, index) => (
            <div
              key={index}
              className="flex items-center mx-12 opacity-50 hover:opacity-100 transition-opacity hover:cursor-default "
            >
              <span className="text-2xl font-bold font-serif text-muted-foreground uppercase">{partner}</span>
              <div className="w-2 h-2 rounded-full bg-gray-300 ml-24"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
