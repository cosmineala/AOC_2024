import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center">
    <div className='p-5 grid grid-cols-4 sm:grid-cols-7 gap-4 text-xl max-w-fit' >

      {/* empty spaces */}
      {Array.from({ length: 6 }, (_, i) => i + 1).map(i =>
        <div key={i} className='' ></div>
      )}

      {Array.from({ length: 25 }, (_, i) => i + 1).map(day =>
        <Link key={day} href={`./day/${day}`} className='text-2xl text-primary hover:text-primaryHover' >[{day < 10 && 0}{day}]</Link>
      )}

    </div>
  </main>
  );
}
