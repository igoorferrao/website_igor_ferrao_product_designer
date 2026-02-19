import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const footerColumns = [
  {
    title: 'Product',
    links: ['Features', 'Princing', 'Integrations', 'Updates'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Guides', 'Blog', 'Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Partners'],
  },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-white py-8 px-4 lg:py-16 lg:px-16">
      <div className={`${instrumentSans.variable} mx-auto w-full max-w-360 font-(--font-instrument-sans)`}>
        <div className="mx-auto w-full rounded-[32px] border border-[#e5e5e5] bg-white p-8 shadow-[0_8px_16px_rgba(0,0,0,0.05)] md:p-14">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <div className="max-w-73 space-y-6">
                <h3 className="text-[28px] font-medium leading-8 text-[#262626] md:text-[32px]">Igor Ferrão</h3>
                <p className="text-base leading-6 text-[#525252]">
                  A Product Designer focused on intuitive user experiences.
                </p>
              </div>

              <div className="grid gap-8 text-base leading-6 md:grid-cols-3 md:gap-20">
                {footerColumns.map((column) => (
                  <div key={column.title} className="space-y-4">
                    <p className="font-medium text-[#262626]">{column.title}</p>
                    <div className="space-y-2 text-[#525252]">
                      {column.links.map((link) => (
                        <a key={link} href="#" className="block">
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-[#e5e5e5]" />

            <p className="text-sm leading-5 text-[#525252]">2026 Igor. All rights reserved</p>
          </div>
        </div>

        <p className="mt-8 bg-linear-to-b from-[#525252] to-white bg-clip-text text-center text-[clamp(64px,23vw,64px)] md:text-[clamp(160px,23vw,160px)] lg:text-[clamp(200px,23vw,200px)] xl:text-[clamp(320px,23vw,320px)] leading-[0.95] font-bold text-transparent opacity-20">
          Rm 10:9
        </p>
      </div>
    </footer>
  );
}
