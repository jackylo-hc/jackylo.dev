import Image from 'next/image';
import { GithubCircle, Linkedin, Instagram, MapPin } from 'iconoir-react';

export default function Home() {
  return (
    <>
      <div className="w-full h-1 bg-gradient-to-r from-themeBlue via-themeLightBlue to-themeWhite"></div>
      <main className="max-w-600 mx-auto px-4 py-6 mt-4">
        {/** Profile  */}
        <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
          <div className="flex flex-col items-center gap-y-1 p-4 border-b border-b-themeLightBlue">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image src="https://placehold.co/80/jpg" alt="Profile Picture" width={80} height={80} />
            </div>
            <div className="text-sm">Front End Engineer</div>
            <div className="text-xl font-bold">Jacky Lo</div>
            <div className="flex font-extrabold items-center">
              <MapPin strokeWidth={2} width={16} height={16} className="mr-1" /> Hong Kong
            </div>
            <div className="flex gap-x-2">
              <a href="">
                <GithubCircle className="text-themeOrange" />
              </a>
              <a href="">
                <Linkedin className="text-themeOrange" />
              </a>
              <a href="">
                <Instagram className="text-themeOrange" />
              </a>
            </div>
          </div>
          <div className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum corrupti et vel, eveniet maiores possimus
            molestiae dolores obcaecati mollitia incidunt reiciendis exercitationem animi cupiditate nam facere
            voluptatibus quia, quis modi.
          </div>
          <div className="p-4 flex gap-2 flex-wrap">
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              HTML5
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              CSS
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              SCSS
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              React.js
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              Next.js
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              Typescript
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              Redux.js
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              TailwindCSS
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              Git
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold">
              Git
            </div>
          </div>
        </div>
        {/** Projects */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-themeBlue mb-4">Projects</h2>
          <div className="grid col-span-1">
            <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
              <div className="p-4 flex flex-col">
                <Image src="https://placehold.co/500/jpg" alt="Project 1 Image" width={500} height={500} />
                <div className="mt-2 text-themeBlue font-bold text-xl">title</div>
                <div className="mt-2 text-themeOrange">tech stack</div>
                <div className="mt-2">desc</div>
              </div>
            </div>
          </div>
        </div>
        {/** Experiences */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-themeBlue mb-4">Experience</h2>
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
        {/** Education */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-themeBlue mb-4">Education</h2>
          <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
            <div className="p-4 border-b border-b-themeLightBlue">
              <div className="text-xl font-bold">hong kong polyu</div>
              <div>interactive media</div>
            </div>
            <div className="p-4 border-b border-b-themeLightBlue">
              <div className="text-xl font-bold">cccu</div>
              <div>cimp</div>
            </div>
            <div className="p-4">
              <div className="text-xl font-bold">sjc</div>
              <div>hkdse</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
