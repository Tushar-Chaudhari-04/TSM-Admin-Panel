import { ChangeEvent, FormEvent, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const ProductManagement = () => {
  const img1 =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [name, setName] = useState<string>("Nike Shoes");
  const [price, setPrice] = useState<number>(2999);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img1);

  const [updateName, setUpdateName] = useState<string>(name);
  const [updatePrice, setUpdatePrice] = useState<number>(price);
  const [updateStock, setUpdateStock] = useState<number>(stock);
  const [updatePhoto, setUpdatePhoto] = useState<string>(photo);

  const Imagehandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e", e);
    const file: File | undefined = e.target.files?.[0];

    console.log("file", file);

    const reader: FileReader = new FileReader();

    if (file) {
      console.log("first");
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader?.result === "string") {
          setUpdatePhoto(reader?.result);
          // console.log("reader.result",reader.result)
        }
      };
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(updateName);
    setPrice(updatePrice);
    setStock(updateStock);
    setPhoto(updatePhoto);
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="product-management-container">
        <section className="">
          <strong>ID-{"qwertyuioa12"}</strong>
          <img src={photo} alt="Update Photo" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">
              <strong>{stock} Available</strong>
            </span>
          ) : (
            <span className="red">
              <strong>Out Of Stock</strong>
            </span>
          )}
          <h3>₹ {price}</h3>
        </section>
        <article>
          <form onSubmit={handleSubmit}>
            <h2>Update Product</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={updateName}
                name="name"
                required
                onChange={(e) => {
                  setUpdateName(e.target.value);
                }}
              />
            </div>

            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                value={updatePrice}
                name="price"
                required
                onChange={(e) => {
                  setUpdatePrice(Number(e.target.value));
                }}
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={updateStock}
                name="stock"
                required
                onChange={(e) => {
                  setUpdateStock(Number(e.target.value));
                }}
              />
            </div>

            <div>
              <label>Photo</label>
              <input
                type="file"
                placeholder="Photo"
                name="photo"
                onChange={Imagehandler}
              />
            </div>
            {updatePhoto && <img src={updatePhoto} alt="New Image" />}

            <button>Update Product</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
