import Image from 'next/image';
import { GithubCircle, Linkedin, Instagram, MapPin } from 'iconoir-react';
import profile from '@/data/profile.json';

export default function Home() {
  return (
    <>
      <div className="w-full h-1 bg-gradient-to-r from-themeBlue via-themeLightBlue to-themeWhite"></div>
      <main className="max-w-2xl mx-auto px-4 py-6 mt-4">
        {/** Profile  */}
        <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
          <div className="flex flex-col items-center gap-y-2 p-4 border-b border-b-themeLightBlue">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image src={profile.profilePic.src} alt={profile.profilePic.alt} width={80} height={80} />
            </div>
            <div className="text-sm">{profile.title}</div>
            <div className="text-xl font-bold">{profile.name}</div>
            <div className="flex font-extrabold items-center">
              <MapPin strokeWidth={2} width={16} height={16} className="mr-1" /> {profile.location}
            </div>
            <div className="flex gap-x-4">
              {profile.socialMedia.map((item) => (
                <a href={item.url} key={item.icon} target="_blank">
                  {item.icon === 'github' && <GithubCircle className="text-themeOrange" />}
                  {item.icon === 'linkedin' && <Linkedin className="text-themeOrange" />}
                  {item.icon === 'instagram' && <Instagram className="text-themeOrange" />}
                </a>
              ))}
            </div>
          </div>
          <div className="p-4">{profile.intro}</div>
          <div className="p-4 flex gap-2 flex-wrap">
            {profile.skills.map((item) => (
              <div className="inline-flex px-2 py-0.5 text-xs border ring-1 bg-themeLightBlue/20 ring-inset ring-themeLightBlue/50 rounded-md text-themeBlue font-bold" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {/** Projects */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-themeBlue mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
              <div className="p-4 flex flex-col">
                <Image
                  src="https://placehold.co/500/jpg"
                  alt="Project 1 Image"
                  width={500}
                  height={500}
                  className="w-full"
                />
                <div className="mt-2 text-themeBlue font-bold text-xl">title</div>
                <div className="mt-2 text-themeOrange">tech stack</div>
                <div className="mt-2">desc</div>
              </div>
            </div>
            <div className="border border-themeLightBlue bg-slate-50 rounded-3xl">
              <div className="p-4 flex flex-col">
                <Image
                  src="https://placehold.co/500/jpg"
                  alt="Project 1 Image"
                  width={500}
                  height={500}
                  className="w-full"
                />
                <div className="mt-2 text-themeBlue font-bold text-xl">title</div>
                <div className="mt-2 text-themeOrange">tech stack</div>
                <div className="mt-2">desc</div>
              </div>
            </div>
          </div>
        </div>
        {/** Experiences */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-themeBlue mb-4">Experience</h2>
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
          <h2 className="text-2xl font-bold text-themeBlue mb-4">Education</h2>
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
