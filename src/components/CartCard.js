export const CartCard = ({ product }) => {
  return (
    <div>
      <div className="flex align-center justify-between my-3 w-1/2 m-auto border-2 border-gray-200 rounded-lg p-3">
        <div className="text-2xl"> {product.pname} </div>
        <div className="">
          <img src={product.image} width={100} alt="" className="rounded-xl" />
        </div>

        <div className="">
          <button className="bg-red-700 rounded p-2 text-white border-red-900 border-1 hover:text-red-200">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
