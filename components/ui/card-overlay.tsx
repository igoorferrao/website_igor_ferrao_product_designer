import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';

const profileImage = assetPath('/d64a1b54febb0531bbb407786294d0ffac43e298.png');

export function CardOverlay() {
  return (
    <div
      className="relative rounded-4xl"
      style={{ '--img': `url('${profileImage}')` } as React.CSSProperties}
    >
      <div className="relative aspect-512/640 w-full overflow-hidden rounded-4xl">
        <Image
          src={profileImage}
          alt="Igor Ferrao de Souza"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 512px"
          priority
        />

        <div
          className="
                    pointer-events-none absolute -inset-7.5
                    bg-(image:--img) bg-cover bg-center
                    filter-[blur(10px)]
                    [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_80%)]
                    mask-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_80%)]
                  "
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden rounded-b-4xl bg-linear-to-t from-overlay-scrim to-transparent px-5 pb-5 pt-10 text-surface-inverse-foreground backdrop-blur-[10px]">
        <div className="space-y-2">
          <h2 className="text-[28px] font-medium leading-9">Igor Ferrao de Souza</h2>
          <p className="text-[18px] leading-7">
            A Product Designer focused on intuitive
            <br />
            user experiences.
          </p>
        </div>
      </div>
      <div className="absolute left-5 top-[57%] z-10 flex max-h-11 translate-x-0 items-center justify-center gap-1 rounded-lg bg-secondary p-4 text-base leading-6 text-secondary-foreground shadow-[0px_16px_23px_rgba(192,192,192,0.10)] lg:left-[calc(50%-264.5px)] lg:top-[37%] lg:-translate-x-1/2">
        <span className="h-2 w-2 rounded-full bg-status-available" />
        Available for new projects
      </div>
    </div>
  );
}
