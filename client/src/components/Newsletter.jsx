
const Newsletter = () => {
  return (
    <section className=" newsletter justify-around items-center text-center py-10 gap-4 bg-slate-100 pl-2  ">
      <h3 className="font-bold text-center">Sign up for our latest offers</h3>
      <p>You'll be among the first to hear about our latest products and offers, like our amazing Specialbuys.</p>
      <div className="flex justify-between items-center border-2 pl-2  rounded-full  m-auto md:w-2/6 mb-2">
        <input type="email" required placeholder="Enter your email" className="outline-none bg-transparent" />
        <button className="bg-orange text-black hover:scale-105 rounded-full px-4 py-2 ">Subscribe</button>

      </div>
      <p>To find out about how we use your information please visit our <a href="" className="underline">Privacy Notice</a></p>
      
    </section>
  )
}

export default Newsletter