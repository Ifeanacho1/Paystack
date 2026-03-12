import "./Header.css";
import { dataType } from "./dummy.jsx";
import { listType } from "./dummy.jsx";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="Header">
        <article className="HeaderLeft">
          <img
            src="https://www.techinafrica.com/wp-content/uploads/2019/08/icon.png"
            alt="Logo"
          />
          <ul>
            {dataType.map((list) => (
              <li key={list.id}>{list.name}</li>
            ))}
          </ul>
        </article>
        <aside className="HeaderRight">
          {listType.map((list) => (
              <li key={list.id}>{list.name}</li>
            ))}
            <Button name="Create free account" className="Headerbtn"/>
            <img src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
        </aside>
      </header>
      <main>
        <div className="MainLeft">
          <h1>Modern online and offline
            <br/>paymants for Africa</h1>
          <h2>Paystack helps businesses in Africa get paid by anyone,
            <br/>anywhere in the world</h2>
              <div className="Btndiv">
                <Button name="Create a free account" className="MainLbtn"/>
                <h3 className="MainRbtn">or Contact Sales</h3>
              </div>
        </div>
        <div className="MainRight"></div>
      </main>
      <section className="ThirdSection">
        <div className="TSDL">
           <h1 className="TSDLh1">Trusted by over 200,000 businesses</h1> 
            <img src="https://assets.paystack.com/assets/img/logos/merchants/Dominos-Plain.svg" alt="" />
            <img src="https://assets.paystack.com/assets/img/logos/merchants/mtn-group-grayscale.svg" alt="" />
            <img src="https://assets.paystack.com/assets/img/logos/merchants/Bolt-Stack-Blue_200304_153027.svg" alt="" />
            <img src="https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg" alt="" />
        </div>
        <div className="TSDR">
            <h1 className="TSDRh1">Watch MTN Chief Transformation Officer, Olubayo </h1>
            <h2 className="TSDRh2">Adekanmbi, discuss working with Paystack</h2>
        </div>
      </section>
    </>
  );
};

export default Header;
