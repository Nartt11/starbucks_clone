import { X } from "lucide-react";

interface OrderProps {
  handleAddToCart: () => void;
}

export default function Order({ handleAddToCart }: OrderProps) {
  return (
    <div className="fixed flex flex-col bottom-0 left-0 right-0 w-full text-white justify-between gap-5">
      <div className="flex justify-end mr-10">
        <button
          onClick={handleAddToCart}
          className="flex rounded-full w-fit  bg-[#00754a] font-bold text-xl text-white px-6 py-3 shadow-lg hover:bg-primary-dark-hover transition-colors"
        >
          {" "}
          Add to order
        </button>
      </div>

      <div className="flex w-full max-w-screen-2xl px-7 py-5 mx-auto justify-between items-end bg-HouseGreen">
        {/* Vùng chọn cửa hàng */}
        <div className="flex flex-col ml-auto md:ml-32 lg:ml-64">
          <span className="text-sm font-medium text-gray-300 mb-1">
            Pickup store
          </span>
          <div className="flex items-center gap-6 border-b border-gray-400/70 pb-1">
            <span className="font-semibold text-white tracking-wide hover:underline cursor-pointer">
              Origami Vinhomes Grandpark • 3 mi
            </span>
            <button className="text-gray-300 hover:text-white transition-colors">
              <X size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Biểu tượng túi hàng */}
        <button className="mr-8 md:mr-32 relative group">
          <div className="relative w-10 h-10 bg-[#00a862] rounded flex flex-col items-center justify-center shadow-md group-hover:bg-[#009254] transition-colors">
            {/* Quai túi */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-3 border-2 border-b-0 border-[#00a862] group-hover:border-[#009254] rounded-t-full transition-colors" />

            {/* Số lượng */}
            <span className="text-white font-bold text-xl leading-none mt-1">
              3
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
