type ImagemProps = {
  id: string;
  src: string;
  alt: string;
};

export default function ImagemEtapa({ id, src, alt }: ImagemProps) {
  return (
    <>
      <img draggable='false' id={id} className='w-full rounded-3xl border-2 border-[#0077c8] mb-2 p-1 sm:p-3' src={src} alt={alt} />
    </>
  );
}
