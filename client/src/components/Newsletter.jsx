
const Newsletter = () => {
  return (
    <section className="flex flex-col justify-around items-center text-center py-10 gap-4 bg-slate-100">
      <h3 className="font-bold text-lg  text-center">Subcribe to get Weekly Coupons</h3>
      <div className="flex justify-between items-center border-2 pl-2  rounded-full md:w-2/5">
        <input type="email" required placeholder="Enter your email" className="outline-none  bg-slate-100" />
        <button className="bg-black text-gray-200 px-6 hover:opacity-80 hover:font-bold rounded-full py-2 ">Subscribe</button>

      </div>
      
    </section>
  )
}

export default Newsletter