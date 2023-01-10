import Image from "next/image";

type Props = {
  name: string;
  logo: string;
  record: string;
  standing: string;
};

export default function Info({ name, logo, record, standing }: Props) {
  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          priority
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <h1 className="ml-2 text-2xl font-bold">{name}</h1>
      </div>

      <p className="mb-4 text-gray-300">{`${record} • ${standing}`}</p>
    </div>
  );
}
