import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ChatbubbleEllipsesOutline } from "react-ionicons";
import { saveProduct } from "../../services/products.services";
import { yupResolver } from "@hookform/resolvers/yup";
import MenuButtons from "../buttons/menuButtonsProducts";
import * as yup from "yup";

const schema = yup.object({
  idProduct: yup
    .string()
    .required("Este es un campo requerido")
    .min(2, "ingresa como minimo dos caracteres"),
  description: yup.string().required("Este es un campo requerido"),
});

const Registro = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (form) => {
    const { data } = await saveProduct(form);

    if (data.status === "OK") {
      alert("Se registro correctamente");
    } else if (data.status === 1062) {
      alert("El producto ya existe");
    }
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center mb-1 px-3 w-100">
        <h1 className="text-center">Registro de producto</h1>
        <div className="w-100 d-flex">
          <div
            className="d-flex justify-content-center align-items-center flex-column border rounded-3 shadow-md w-75"
            style={{ height: "475px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="border p-5 rounded">
              <div className="mb-3">
                <label htmlFor="userInput" className="form-label rounded-3">
                  Codigo
                </label>
                <input
                  {...register("idProduct", { required: true })}
                  type="number"
                  className="form-control"
                  id="userInput"
                />
                <p className="text-danger">{errors.codigo?.message}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="userInput" className="form-label rounded-3">
                  Nombre
                </label>
                <input
                  type="text"
                  {...register("description", { required: true })}
                  className="form-control"
                  id="userInput"
                />
                <p className="text-danger">{errors.desc?.message}</p>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Inventario inicial
                  <ChatbubbleEllipsesOutline
                    color={"#00000"}
                    height="24px"
                    width="24px"
                    className="align-bottom ms-2"
                  />
                </label>
                <input type="number" className="form-control" />
              </div>

              <div className="h-25 mt-4 d-flex">
                <button
                  type="submit"
                  class="my-auto btn btn-dark d-block mx-auto"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
          <div className="w-25">
            <MenuButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
