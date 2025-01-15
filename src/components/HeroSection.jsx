function HeroSection() {
  return (
    <div>
      <div className="md:mt-12 mt-28 h-full">
        <h1 className="text-white text-xl md:text-3xl font-bold">
          WELCOME TO <br />{" "}
          <span className="text-blue-500"> VIRTUAL ASSISTANT </span> LLC
        </h1>
      </div>
      <div>
        <h1 className="text-white mt-3 text-xl">
          A Team from Big 4 Accounting Firms Providing Effective and Affordable
          On-site and Off-site Services in Accounting, Bookkeeping, VAT, Internal
          Audit, External Audits, and Financial Advisory with Special Focus on
          Small and Medium Size Businesses and Start-ups
        </h1>
      </div>
      <button className="font-bold mt-5 text-xl text-white border p-3 bg-blue-500 hover:bg-blue-600 hover:text-white transition rounded-md">
        Contact Now
      </button>
    </div>
  );
}

export default HeroSection;
