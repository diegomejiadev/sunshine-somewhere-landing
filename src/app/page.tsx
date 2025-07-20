import { SearchBar } from "./_components/SearchBar/SearchBar";
import { WhoWeAre } from "./_components/WhoWeAre/WhoWeAre";
import { Activities } from "./_components/Activities/Activities";
import { ListProperty } from "@/components/ListProperty/ListProperty";
import { Properties } from "./_components/Properties/Properties";
import { Banner } from "./_components/Banner/Banner";

export default function MainPage() {
  return (
    <main>
      <Banner />

      <div className="relative z-40 -mt-[7rem] w-full">
        <SearchBar className="max-container mx-auto" />
      </div>

      <WhoWeAre className="mt-12 bg-primary-50 bg-opacity-30 py-8 sm:py-16 md:mt-16 lg:mt-24 lg:bg-opacity-20" />
      <Properties className="mt-12 md:mt-16" />
      <Activities className="mt-12 md:mt-16 xl:mt-32 2xl:mt-36" />
      <ListProperty className="mt-12 lg:mt-16 xl:mt-20" />
      {/* <div className="mb-12 md:mb-20"></div> */}
    </main>
  );
}
