import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { saveCostumer } from "../../services/costumer.services";
import MenuButtons from "../buttons/menuButtonsClientes";

const schema = yup.object({
  idCostumer: yup
    .string()
    .required("Este campo es requerido")
    .min(2, "ingresa minimo dos caracteres"),
  nameCostumer: yup.string().required("Este campo es requerido"),
  numberCostumer: yup.string(),
  addres: yup.string().required("Este campo es requerido"),
});

const RegisterCostumer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (form) => {
    const { data } = await saveCostumer(form);
    if (data.status) alert("Se ha registrado un nuevo cliente con exito");
  };

  return (
    <>
      <div className="w-100 d-flex  flex-column align-items-center">
        <h1 className="text-center mt-4">Registrar Cliente</h1>
        <div className="w-100">
          <MenuButtons />
        </div>
        <div
          className="d-flex justify-content-center w-50 mb-5"
          style={{ height: "475px" }}
        >
          <div className="border p-4 rounded-3 shadow-lg w-100">
            <form className="h-100" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <div className="mb-3 w-50">
                  <label htmlFor="userInput" className="form-label rounded-3">
                    Codigo
                  </label>
                  <input
                    {...register("idCostumer", { required: true })}
                    type="text"
                    className="form-control"
                    id="userInput"
                  />
                </div>

                <div className="mb-3 w-50">
                  <label htmlFor="userInput" className="form-label rounded-3">
                    Nombre
                  </label>
                  <input
                    {...register("nameCostumer", { required: true })}
                    type="text"
                    className="form-control"
                    id="userInput"
                  />
                </div>

                <div className="mb-3 w-50">
                  <label htmlFor="userInput" className="form-label rounded-3">
                    Direccion
                  </label>
                  <input
                    {...register("addres", { required: true })}
                    type="text"
                    className="form-control"
                    id="userInput"
                  />
                </div>

                <div className="mb-3 w-50">
                  <label htmlFor="userInput" className="form-label rounded-3">
                    Telefono
                  </label>
                  <input
                    {...register("numberCostumer", { required: true })}
                    type="tel"
                    className="form-control"
                    id="userInput"
                  />
                </div>

                <button type="submit" class="btn btnP btn-dark d-block mx-auto">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterCostumer;
