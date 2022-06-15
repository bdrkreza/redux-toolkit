/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

export default function ViewProduct({ setIsOpen }) {
  const [showLess, setShowLess] = useState(true);
  const { state } = useLocation();
  const length = 150;
  if (state.description.length < length) {
    return <p>{state.description}</p>;
  }
  return (
    <div>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <div className="content">
              <div class="images">
                <img src={state?.image} alt="imag" />
              </div>
              <div class="product">
                <p>{state?.category}</p>
                <h1>{state?.title}</h1>
                <h2>${state?.price}</h2>

                <p class="desc">
                  {showLess
                    ? `${state.description.slice(0, length)}...`
                    : state.description}
                </p>
                <a
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginBottom: "50px",
                  }}
                  onClick={() => setShowLess(!showLess)}
                >
                  &nbsp;View {showLess ? "More" : "Less"}
                </a>
                <div class="buttons">
                  <button class="add">Add to Cart</button>
                  <button class="like">
                    <span>♥</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
