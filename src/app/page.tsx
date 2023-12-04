import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-white"></div>
      <main className="max-w-600 mx-auto px-4 mt-4">
        <div className="border border-slate-300 p-4 bg-slate-50 rounded-md">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src="https://placehold.co/80/jpg" alt="Profile Picture" width={80} height={80} />
          </div>
        </div>
      </main>
    </>
  );
}
