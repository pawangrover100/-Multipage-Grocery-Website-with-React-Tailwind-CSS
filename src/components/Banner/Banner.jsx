function Banner({ title, bgimage }) {
  return (
    <div
      className=" h-[50vh] mt-25 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <h5 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold">
        {title}
      </h5>
    </div>
  );
}

export default Banner;
