import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import Cars from "@/components/Cars";
import MainServices from "@/components/MainServices";
import { fuels, yearsOfProduction } from "@/constants";
// import { fetchCars } from "@/utils";

export default async function Home({ searchParams }) {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });
  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <MainServices />
      <div
        className="mt-12 padding-x padding-y mb-6 max-width"
        id="discover bg-black"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        <div className="home__cars"></div>
        <Cars />

        {/* {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div>
            <h2>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )} */}
      </div>
    </main>
  );
}
