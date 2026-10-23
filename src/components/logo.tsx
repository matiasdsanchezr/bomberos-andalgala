import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Escudo Oficial Bomberos Voluntarios Andalgalá"
      height={256}
      width={256}
      sizes="256px"
      className="object-contain p-0.5 transition-transform group-hover:scale-105"
      priority
    />
  );
};
