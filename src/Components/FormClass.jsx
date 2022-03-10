import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection,addDoc } from "firebase/firestore";
import { CartConsumer } from "../Context/CartProvider";
import db from "../service"
import Swal from "sweetalert2";

const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => onBlur(e)}
        className={inputClassName} //{`form-control ${error.nombre && "is-invalid"}`}
        placeholder={placeholder}
      />
      {error.nombre && (
        <h6 className="text-danger my-2 text-uppercase">{error.nombre}</h6>
      )}
    </div>
  );
};

const FormClass = ({ total, purchase }) => {
    const { clearCart } = CartConsumer();
    
    const [form, setForm] = useState({
        buyer: {
            email:"",
            name:"",
            lastname:"",
            number:"",
        },
        total: total,
        items: purchase,
    });

  const genTicket =  async ({data}) => {
      try {
          const col = collection(db,"ordenes")
          const order =  await addDoc(col,data)
          console.log(order.id)
      } catch (error) {
          console.log(error)
      }
    };

const comfirmText = (texts) => {
    return texts.some((text) => text === "")
  }

const [error, setError] = useState({});

const {
    buyer: { email, name, lastname, number },
  } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    if (comfirmText([email, name, lastname, number])) {
      Swal.fire({
        title: "Oops!",
        text: "Please complete form to proceed",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Greatl!",
      text: "Your ticket is reserved!",
      icon: "success",
    });
    genTicket({ data: form });
    clearCart();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [name]: value,
      },
    });
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
      setError({ ...error, [name]: "Complete to advance" });
      return;
    }
    setError({});
  };




  return (
    <form onSubmit={onSubmit} className="container border">
      <h3 className="text-uppercase text-white text-center my-4">Please complete to purchase</h3>
      {Object.keys(form.buyer).map((key,index) => (
        <Input
        key={index}
        className="mb-3"
        type="text"
        name={`${key}`}
        value={key.value}
        onChange={handleChange}
        onBlur={handleBlur}
        inputClassName={`form-control ${error[key] && "is-invalid"}`}
        placeholder={`${key}`}
        error={error}
        />
      ))}
      <div className="border row d-flex px-2">
        <div className="col-12 col-lg-9">
          <p className="fs-4 text-uppercase text-white">total</p>
        </div>
        <div className="col-12 col-lg-3">
          <p className="fs-4 text-white">${total}</p>
        </div>
        <button
          type="submit"
          className="btn btn-primary text-uppercase w-100 my-4"
        >
          end purchase
        </button>
      </div>

      <Link to="/" className="btn btn-secondary text-uppercase my-2 w-100">
        back to shop
      </Link>
    </form>
  );
};


  export default FormClass