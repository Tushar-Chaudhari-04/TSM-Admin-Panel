import { useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

// declare all characters
const charactersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numericalString = "0123456789";
const symbolString = "@#$&%!~";

const Coupon = () => {
  const [coupon, setCoupon] = useState<string>("");
  let [name, setName] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [character, setCharacter] = useState<boolean>(false);
  const [numerical, setNumerical] = useState<boolean>(false);
  const [symbol, setSymbol] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const generateCoupon = (e: any) => {
    e.preventDefault();
    // if (!name) {
    //   return alert("Please enter a name to generate a coupon");

    // }

    if (!length) {
      return alert("Please enter a max length to generate a coupon");
    }

    if (!character && !numerical && !symbol) {
      return alert("Please select at least one type of character");
    }

    let res = name || "";

    if (character) {
      res += charactersString;
    }

    if (numerical) {
      res += numericalString;
    }

    if (symbol) {
      res += symbolString;
    }

    let randomLength = Number(length) - name.length;
    let randomName = "" || name;
    for (let i = 0; i < randomLength; i++) {
      randomName += res[Math.floor(Math.random() * res.length)];
    }

    setCoupon(randomName);
  };
  console.log("randomString", coupon ? coupon : "");

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form className="coupon-form" onSubmit={generateCoupon}>
            <div className="coupon-input">
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="number"
                placeholder="Coupon Length"
                onChange={(e) => setLength(e.target.value)}
                min={8}
                max={15}
                value={length}
              />
            </div>
            <fieldset className="coupon-include">
              <legend>Must Include</legend>

              <input
                type="checkbox"
                name="numerical"
                id="numerical"
                checked={numerical}
                onChange={() => setNumerical((prev) => !prev)}
              />
              <span>Numerical</span>

              <input
                type="checkbox"
                name="character"
                id="character"
                checked={character}
                onChange={() => setCharacter((prev) => !prev)}
              />
              <span>Characters</span>

              <input
                type="checkbox"
                name="symbol"
                id="symbol"
                checked={symbol}
                onChange={() => setSymbol((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit" className="coupon-btn">
              Generate Coupon
            </button>
          </form>

          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;

// if (character) {
//   if(!randomString.match(alphaRegex)){
//     let temp=[...randomString,charactersString]
//     setRandomString(temp.toString());
//   }
// }

// if (numerical) {
//   if(!randomString.match(numericalRegex)){
//     let temp=[...randomString,numericalString]
//     setRandomString(temp.toString());
//   }
// }

// if (symbol) {
//   let temp=[...randomString,symbolString]
//   setRandomString(temp.toString());
// }
