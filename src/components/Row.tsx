import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  name: string;
  teamId: string;
  logo: string;
  winner: boolean;
  index: number;
  date: string;
  homeScore: number;
  awayScore: number;
  isLast: boolean;
};

export default function Row({
  name,
  teamId,
  logo,
  winner,
  index,
  date,
  homeScore,
  awayScore,
  isLast,
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col min-[450px]:flex-row min-[450px]:items-center justify-between px-0 py-2",
        { "border-b border-gray-700": !isLast }
      )}
    >
      <div className="flex items-center">
        <Image
          src={logo}
          alt={name}
          priority={index < 10}
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <Link
          href={`/${teamId}`}
          className="ml-4 text-sm font-semibold md:text-base"
        >
          {name}
        </Link>
      </div>
      <div className="text-sm md:text-base flex flex-row-reverse justify-end min-[450px]:flex-row">
        {homeScore ? (
          <p className="mr-2 text-gray-300 tabular-nums">{`${homeScore}-${awayScore}`}</p>
        ) : null}
        {homeScore ? (
          winner ? (
            <p className="font-semibold text-emerald-500 ml-0 min-[450px]:ml-2 w-5 mr-4 min-[450px]:mr-0 text-center">
              W
            </p>
          ) : (
            <p className="font-semibold text-rose-500 ml-0 min-[450px]:ml-2 w-5 mr-4 min-[450px]:mr-0 text-center">
              L
            </p>
          )
        ) : homeScore === 0 ? (
          <p className="font-semibold text-gray-300 ml-0 min-[450px]:ml-2 w-5 mr-4 min-[450px]:mr-0 text-center">
            -
          </p>
        ) : (
          <p className="text-gray-300">{date}</p>
        )}
      </div>
    </div>
  );
}
