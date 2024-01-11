
const Newsletter = () => {
  return (
    <section className="newsletter justify-around items-center text-center py-10 gap-4 bg-slate-100 pl-2  ">
      
      <h3 className="font-bold text-center">Subscribe to our newsletter</h3>
      <p>You'll be among the first to hear about our latest products and offers.</p>

      <div className="flex justify-between items-center border-2 pl-2  rounded-full  m-auto md:w-2/6 mb-2">
        <input type="email" required placeholder="Enter your email" className="outline-none bg-transparent" />
        <button className="bg-orange text-black hover:scale-105 rounded-full px-4 py-2 font-semibold">Subscribe</button>
      </div>
      
    </section>
  )
}

export default Newsletter