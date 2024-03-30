import { ChangeEvent, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

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
          setPhoto(reader?.result);
          // console.log("reader.result",reader.result)
        }
      };
    }
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="product-management-container">
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                value={price}
                name="price"
                required
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                }}
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stock}
                name="stock"
                required
                onChange={(e) => {
                  setStock(Number(e.target.value));
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
            {photo && <img src={photo} alt="New Image" />}

            <button>Create Product</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
