import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="w-full h-1 bg-gradient-to-r from-themeBlue via-themeLightBlue to-themeWhite"></div>
      <main className="max-w-600 mx-auto px-4 mt-4">
        <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
          <div className="flex flex-col items-center gap-y-1 p-4 border-b border-b-themeLightBlue">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image src="https://placehold.co/80/jpg" alt="Profile Picture" width={80} height={80} />
            </div>
            <div className="text-sm">Front End Engineer</div>
            <div className="text-xl font-bold">Jacky Lo</div>
          </div>
          <div className="p-4 flex flex-col">
            <div>
              <div>Location</div>
              <div>Hong Kong</div>
            </div>
            <div>
              <div>Email</div>
              <div>xxx@xxxx.com</div>
            </div>
            <div>
              <div>Github</div>
              <div>xxx@xxxx.com</div>
            </div>
            <div>
              <div>LinkedIn</div>
              <div>xxx@xxxx.com</div>
            </div>
            <div>
              <div>About</div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum corrupti et vel, eveniet maiores
                possimus molestiae dolores obcaecati mollitia incidunt reiciendis exercitationem animi cupiditate nam
                facere voluptatibus quia, quis modi.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-themeBlue">Experience</h2>
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="https://placehold.co/40/jpg" alt="Company Logo" width={40} height={40} />
              </div>
              <div className="w-0.5 grow bg-slate-200 my-2"></div>
            </div>
            <div className="ml-4 mt-2">
              <div>Title</div>
              <div>Company name</div>
              <div>start year to end year</div>
              <div>location</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="https://placehold.co/40/jpg" alt="Company Logo" width={40} height={40} />
              </div>
              <div className="w-0.5 grow bg-slate-200 my-2"></div>
            </div>
            <div className="ml-4 mt-2">
              <div>Title</div>
              <div>Company name</div>
              <div>start year to end year</div>
              <div>location</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
