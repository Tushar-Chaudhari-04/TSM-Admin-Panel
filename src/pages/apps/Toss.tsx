import AdminSideBar from "../../components/AdminSideBar";
import { useState } from "react";

const Toss = () => {
  const [angle, setAngle] = useState<number>(0);

  const doToss = () => {
    if (Math.random() > 0.5) {
      setAngle((prev) => prev + 180);
    } else {
      setAngle((prev) => prev + 360);
    }
    console.log("angle", angle);
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="dashboard-app-container">
        <h1>Toss</h1>
        <section>
          <article
            className="toss"
            onClick={doToss}
            style={{
              transform: `rotateY(${angle}deg)`,
            }}
          >
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;

/*

const randomNum = Math.floor(Math.random() * 10);
    if (randomNum % 2 == 0){
      setAngle(prev=>prev+180);
      setHead(true);
    } 
    else{
      setAngle(prev=>prev+360);
      setHead(false);
    } 
    
            {head ? (
              <img
                style={{
                  transform: `rotate:${angle}`,
                }}
                src={heads}
                alt="Head"
              />
            ) : (
              <img 
              style={{
                transform: `rotate:${angle}`,
              }}
              src={tails} alt="Tail" />
            )}

            <button className="btn" onClick={doToss}>
              Do Toss
            </button>

*/
