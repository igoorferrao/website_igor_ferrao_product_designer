import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';

const logos = [
  {
    src: assetPath('/8040ebad0882a0e95fc66b98857711af4b0753d2.png'),
    alt: 'Logoipsum logo 1',
    width: 167,
  },
  {
    src: assetPath('/dc537083b4d9f4ac905920a923ed084d67cb8087.png'),
    alt: 'Logoipsum logo 2',
    width: 167,
  },
  {
    src: assetPath('/5b0a5f3c330aaa9237bf15248316994b68cf190c.png'),
    alt: 'Logoipsum logo 3',
    width: 167,
  },
  {
    src: assetPath('/6dfeeece993a6a1ec84e0ca6311de69ec3150701.png'),
    alt: 'Logoipsum logo 4',
    width: 167,
  },
  {
    src: assetPath('/9daa0bdc429c8e20b2fc36e10203111db386365a.png'),
    alt: 'Logoipsum logo 5',
    width: 167,
  },
];

export function PatternsCarousel() {
  const duplicated = [...logos, ...logos];

  return (
    <section className="py-8 px-0 lg:py-16">
      <div className="mx-auto max-w-360 overflow-hidden">
        <div className="patterns-track flex w-max items-center gap-32">
          {duplicated.map((logo, index) => (
            <div key={`${logo.src}-${index}`} className="flex h-8.75 min-h-8.75 items-center opacity-70">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={35}
                className="h-8.75 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
