export const InformationLayer = () => {
  return (
    <section className="relative max-w-[720px] top-0 md:-top-16 bg-cc-black border-0 md:border-2 border-cc-dark rounded-xl shadow-xl mx-auto">
      <div className="mx-auto max-w-[260px] h-[196px] -mt-[48px]">
        <img
          src="https://flagcdn.com/co.svg"
          className="w-full h-full object-cover rounded-md"
          alt="flag"
        />
      </div>
      <div className="mt-8 text-cc-light text-center">
        <p className="text-3xl font-medium">India</p>
        <p className="mt-2">Republic of India</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10 text-cc-light">
        <div className="flex bg-cc-dark p-3 rounded-lg">
          <p className="pr-4">Population</p>
          <p>1,380,004,385</p>
        </div>
        <div className="flex bg-cc-dark p-3 rounded-lg">
          <p className="pr-4">Area(km^2)</p>
          <p>2,973,190</p>
        </div>
      </div>
      <div className="flex justify-between px-5 text-cc-light border-t-2 border-cc-dark mt-10 py-5">
        <p className="text-cc-gray">Capital</p>
        <p>New Delhi</p>
      </div>
      <div className="flex justify-between px-5 text-cc-light border-t-2 border-cc-dark py-5">
        <p className="text-cc-gray">Subregion</p>
        <p>Southern Asia</p>
      </div>
      <div className="flex justify-between px-5 text-cc-light border-t-2 border-cc-dark py-5">
        <p className="text-cc-gray">Language</p>
        <p>English, Hindi, Tamil</p>
      </div>
      <div className="flex justify-between px-5 text-cc-light border-t-2 border-cc-dark py-5">
        <p className="text-cc-gray">Currencies</p>
        <p>Indian rupee</p>
      </div>
      <div className="flex justify-between px-5 text-cc-light border-y-2 border-cc-dark py-5">
        <p className="text-cc-gray">Continents</p>
        <p>Asia</p>
      </div>
      <p className="px-5 text-cc-gray mt-5 text-cs-100">
        Neighbouring Countries
      </p>
      <div className="mt-4 mb-10 px-5 flex flex-wrap gap-4">
        <div className="w-20 flex flex-col items-center gap-2">
          <img
            className="w-20 rounded-md"
            src="https://flagcdn.com/co.svg"
            alt="flag"
          />
          <p className="text-cs-50 text-cc-light">Afghanistan</p>
        </div>
        <div className="w-20 flex flex-col items-center gap-2">
          <img
            className="w-20 rounded-md"
            src="https://flagcdn.com/co.svg"
            alt="flag"
          />
          <p className="text-cs-50 text-cc-light">Afghanistan</p>
        </div>
        <div className="w-20 flex flex-col items-center gap-2">
          <img
            className="w-20 rounded-md"
            src="https://flagcdn.com/co.svg"
            alt="flag"
          />
          <p className="text-cs-50 text-cc-light">Afghanistan</p>
        </div>
      </div>
    </section>
  );
};
