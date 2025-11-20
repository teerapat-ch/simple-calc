const Home = () => {
  return (
    <div>
      <h1 className="flex justify-center text-5xl my-8 underline">Simple Calculator</h1>
      <div className="grid grid-cols-4 mx-100 bg-base-300 p-5 rounded-2xl gap-1">
        <div className="col-span-4 flex justify-end items-center bg-base-100 h-20 p-5">
          <h1 className="text-2xl">0</h1>
        </div>
        <button className="btn btn-primary h-20 text-2xl">1</button>
        <button className="btn btn-primary h-20 text-2xl">2</button>
        <button className="btn btn-primary h-20 text-2xl">3</button>
        <button className="btn btn-primary h-20 text-2xl">+</button>
        <button className="btn btn-primary h-20 text-2xl">4</button>
        <button className="btn btn-primary h-20 text-2xl">5</button>
        <button className="btn btn-primary h-20 text-2xl">6</button>
        <button className="btn btn-primary h-20 text-2xl">-</button>
        <button className="btn btn-primary h-20 text-2xl">7</button>
        <button className="btn btn-primary h-20 text-2xl">8</button>
        <button className="btn btn-primary h-20 text-2xl">9</button>
        <button className="btn btn-primary h-20 text-xl">X</button>
        <button className="btn btn-primary h-20 text-xl">CLR</button>
        <button className="btn btn-primary h-20 text-2xl">0</button>
        <button className="btn btn-primary h-20 text-xl">ENTER</button>
        <button className="btn btn-primary h-20 text-2xl">/</button>
      </div>
    </div>
  )
}
export default Home