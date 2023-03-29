const TeamFeature = () => {
  return (
    <>
      <h3 className="text-center text-5xl text-gray-900 font-semibold">
        {' '}
        <>
          {'Our '}
          <span className="text-rose-600">Team</span>
        </>
      </h3>
      <div className="mt-10 flex flex-wrap items-center px-12">
        <div className="w-full sm:w-1/2 text-center sm:px-6 my-3">
          <img src="/assets/images/avatar1.avif" alt="test" />
          <h3 className="text-3xl text-gray-900 font-semibold pt-2">
            Fajrizky
          </h3>
          <div className="text-xl leading-9">Founder</div>
        </div>

        <div className="w-full sm:w-1/2 text-center sm:px-6 my-3">
          <img src="/assets/images/avatar2.avif" alt="test" />
          <h3 className="text-3xl text-gray-900 font-semibold pt-2">Yuna</h3>
          <div className="text-xl leading-9">Founder</div>
        </div>
      </div>
    </>
  );
};

export { TeamFeature };
