import React from "react";
import Design from "./Animation/Design";
import Navbar1 from "./navbars/Navbar1";
import Footer from "./homelements/Footer";
import FirstDiv from "./dashboardelements/FirstDiv";
import styles from "./dashboard.module.css";
import Carousel2 from "./dashboardelements/Carousel2";
import ThirdDivDash from "./dashboardelements/ThirdDivDash";

function Dashboard() {
  return (
    <div>
      <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
        <Navbar1 />
      </div>

      <div className={`${styles.dashboardContent}`}>
        <Design>
          <div>
            <FirstDiv />
            <Carousel2 />
          </div>
        </Design>
      </div>

      <div className={`${styles.footerPartition}`}>
        <ThirdDivDash />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
