function Banner({ title, bgimage }) {
  return (
    <div
      className=" h-[50vh] mt-25 flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <h5 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10">
        {title}
      </h5>
      <div className="bg-black/50 absolute inset-0"></div>
    </div>
  );
}

export default Banner;
