import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  searchCostumer,
  updateCostumer,
} from "../../services/costumer.services";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MenuButtons from "../buttons/menuButtonsClientes";

const Update = (item) => {
  const [datas, setDatas] = useState({
    idCostumer: "",
    nameCostumer: "",
    numberCostumer: "",
    addres: "",
    state: "",
  });

  const { handleSubmit } = useForm();

  useEffect(() => {
    if (item.data != undefined) {
      setDatas({
        ...datas,
        idCostumer: item.data.idCostumer,
        nameCostumer: item.data.nameCostumer,
        numberCostumer: item.data.numberCostumer,
        addres: item.data.addres,
        state: item.data.state,
      });
    }
  }, [item.data]);

  const handleChange = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    const { data } = await updateCostumer({
      idCostumer: `'${datas.idCostumer}'`,
      nameCostumer: `'${datas.nameCostumer}'`,
      numberCostumer: `'${datas.numberCostumer}'`,
      addres: `'${datas.addres}'`,
      state: `'${datas.state}'`,
    });
    console.log(data);

    if (data.status) {
      alert("Empleado actualizado con exito");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-center">
          <div>
            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Nombre
              </label>
              <input
                disabled
                value={datas.nameCostumer}
                type="email"
                className="form-control"
                id="userInput"
                name="nameCostumer"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Direccion
              </label>
              <input
                value={datas.addres}
                type="text"
                className="form-control"
                id="userInput"
                name="addres"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Telefono
              </label>
              <input
                value={datas.numberCostumer}
                type="texto"
                className="form-control"
                id="userInput"
                name="numberCostumer"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex w-100 justify-content-center pb-3">
          <div className="w-100">
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btnP btn-dark"
                style={{ width: "100px" }}
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const codeSchema = yup.object({
  idCostumer: yup
    .string()
    .required("Este campo es requerido")
    .min(2, "ingresa minimo dos caracteres"),
});

const SearchCostumer = () => {
  const [costumers, setCostumers] = useState();

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(codeSchema),
  });

  const onSubmit = async (form) => {
    await searchCostumer(form).then((response) => {
      console.log(response.data[0]);
      setCostumers(response.data[0]);
    });
  };

  return (
    <>

      <h1 className="text-center mt-4">Gestion de clientes</h1>
      <div className="w-100">
        <MenuButtons/>
      </div>
      <div
        className="d-flex justify-content-center w-50 mb-5"
        style={{ height: "475px" }}
      >
        <div className="border p-1 w-75 rounded-3 shadow-lg">
          <div className="h-25">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="row w-100 m-0 border-bottom py-3">
                <div className="col-md-2 col-4 d-flex">
                  <label htmlFor="" className="mx-auto my-auto">
                    Codigo
                  </label>
                </div>
                <div className="col-md-4 col-8">
                  <input
                    {...register("idCostumer", { required: true })}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div id="searchC" className="col-md-6 col-12 d-flex menuBtn">
                  <button className="btn btnP btn-dark">Buscar</button>
                </div>
              </div>
            </form>
          </div>

          <div className="h-75">
            <Update data={costumers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCostumer;
