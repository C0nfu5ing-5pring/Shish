const ReceiptContent = ({
  product,
  category,
  world,
  mainThing,
  timeCost,
  refundPolicy,
  barCode,
  qrCode,
  banner,
}) => {
  return (
    <>
      <div className="flex flex-col w-full lg:gap-2 text-[var(--text)] bg-[var(--bg)]">
        <div className="flex justify-between">
          <h1 className="font-black text-base lg:text-xl">Product</h1>
          <h1 className="triangle text-end">{product}</h1>
        </div>

        <div className="flex justify-between">
          <h1 className="font-black text-base lg:text-xl">Category</h1>
          <h1 className="triangle text-end">{category}</h1>
        </div>

        <div className="flex justify-between">
          <h1 className="font-black text-base lg:text-xl">World</h1>
          <h1 className="triangle text-end">{world}</h1>
        </div>

        <div className="flex justify-between">
          <h1 className="font-black text-base lg:text-xl mr-15">Why?</h1>
          <h1 className="triangle text-end">{mainThing}</h1>
        </div>

        <div className="flex justify-between">
          <h1 className="font-black text-base lg:text-xl">Time cost</h1>
          <h1 className="triangle text-end">{timeCost}</h1>
        </div>

        <div className="flex justify-between">
          <h1 className="font-black text-base lg:text-xl">Refund policy</h1>
          <h1 className="triangle">{refundPolicy}</h1>
        </div>

        <div>
          <img className="w-full h-10" src={barCode} />
        </div>

        <div className="flex gap-5">
          <img className="w-20 h-20" src={qrCode} />

          <div className="flex text-xs lg:text-base items-center text-end">
            <h1>THANK YOU FOR SHOPPING WITH US</h1>
          </div>
        </div>

        <div>
          <img src={banner} className="h-19 w-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default ReceiptContent;
