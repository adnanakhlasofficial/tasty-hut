import search from '../assets/search.svg';

const Banner = () => {
  return (
    <div className="bg-banner flex min-h-[40rem] items-center justify-center">
      <div className="max-w-[50rem] space-y-8">
        <div className="space-y-6 text-center text-white">
          <h1 className="text-[4rem] font-bold leading-[5rem]">
            Taste Our Delicious Best Foods
          </h1>
          <p className="text-lg leading-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humou.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
          <label className="w-8/12 relative">
            <input
              className="w-full rounded-lg border-none pl-14 px-5 py-4 outline-none"
              type="text"
              placeholder="Search and food"
            />
            <img className='absolute left-5 top-1/2 -translate-y-1/2' src={search} alt="search-icon" />
          </label>
          <button className="btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
