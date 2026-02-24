'use client';

const PARTNERS = [
  'Xgrow',
  'Learning Area',
  'Event X',
  'Santander S.A.',
  'VTV SBT',
  'Work 4 Me',
  'Novilha de Ouro',
  'Level UP',
];

const Partners: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 py-12 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="partners-track flex w-max">
          {[0, 1].map((groupIndex) => (
            <div key={groupIndex} className="flex shrink-0">
              {PARTNERS.map((partner, index) => (
                <div
                  key={`${partner}-${groupIndex}-${index}`}
                  className="flex items-center opacity-50 transition-opacity hover:cursor-default hover:opacity-100"
                >
                  <span className="px-8 text-2xl font-bold font-serif uppercase text-muted-foreground">{partner}</span>
                  <span className="mx-8 inline-block h-2 w-2 rounded-full bg-muted-foreground/40" />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent sm:w-28 md:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent sm:w-28 md:w-36" />
      </div>
    </section>
  );
};

export default Partners;
