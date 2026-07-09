import SectionLayout from "../layout/section-layout";
import Image from "next/image";

export function About() {
  return (
    <SectionLayout
      id="a-propos"
      ariaLabelledby="a-propos-heading"
      className="flex scroll-mt-16 px-4"
    >
      <div
        className="
          flex w-full flex-col gap-10 py-20 md:gap-40
        "
      >
        <h2
          className="
            m-0 mx-auto p-0 text-center font-title text-[50px] leading-none
            tracking-[-0.05em] text-foreground md:text-[100px] lg:text-[150px]
          "
        >
          Le studio
        </h2>
        <div
          className="
            relative md:min-h-[480px]
          "
        >
          <Image
            src="/assets/demo1.jpeg"
            alt=""
            width={550}
            height={550}
            aria-hidden
            sizes="(max-width: 768px) 100vw, 550px"
            className="
              pointer-events-none absolute inset-x-0 z-0 mx-auto aspect-square
              h-auto w-full object-cover opacity-40 blur-xs md:inset-x-auto
              md:top-[-120px] md:right-0 md:h-[600px] md:w-[600px]
              md:opacity-100
            "
          />

          <p
            className="
              relative z-10 mx-auto w-full max-w-[1200px] text-justify text-base
              font-bold md:text-2xl
            "
          >
            DTRN STUDIO Sera noste, me intis mus castifecres res venterc
            estrumus vit dienata etion Etratus pon- duciem senim inem medet que
            iampere straetis maxim sentem per quam crum essenin diestra cercerei
            et, sentem sendem octum es inam sa mor aderum opotiaequa nove, eo,
            certius aciemorae non in viuscie- ni imus ompermactus aucit perore
            ret fatus fursuppl. Edo, que caet, urore nos, nonsimihilii sentrurei
            sin tem, C. Fue ma, quastas bondum quid mentum cone perei ineque
            moenarium senare nox ste patum es- tratis. Vivid con vius peredo,
            dium cum egericipse quis horio es reortem menimus auraessoltum
            hoculere- mo et vivignos latu quam eri prae consuliae, nos, quam
            oculis es vit nonsum unis; C. Sp. Sermiliam hos- tem inam uro ina,
            mus iamdica volici sentem, quemuss imprit. Senatquit perit, vit in
            sedi publiam ericave riumularet? Em sent? Bem halistiquit ad facta,
            Ti. Fuitus larte, unum iamdii prendic ulerimm ordium quod cae pra
            nost vehebentemus casdace rferra? Atus An rei publica; nost prati,
            seri sil horumendam, nontere stripte vis duci cont? Pere peride
            fatieri tilicae demusse rfecum impliaestil host orenihi liciortilis.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
