import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { searchProduct, updateProduct } from "../../services/products.services";
import { yupResolver } from "@hookform/resolvers/yup";
import MenuButtons from "../buttons/menuButtonsProducts";
import * as yup from "yup";

const codeSchema = yup.object({
  idProduct: yup
    .string()
    .required("Este campo es requerido")
    .min(2, "ingresa minimo dos caracteres"),
});

const Update = (item) => {
  const [datas, setDatas] = useState({
    idProduct: "",
    description: "",
    fullAmount: "",
    voidAmount: "",
    amount: "",
    state: "",
  });

  const { handleSubmit } = useForm();

  useEffect(() => {
    if (item.data != undefined) {
      setDatas({
        ...datas,
        idProduct: item.data.idProduct,
        description: item.data.description,
        fullAmount: item.data.fullAmount,
        voidAmount: item.data.voidAmount,
        amount: item.data.fullAmount + item.data.voidAmount,
        state: item.data.state,
      });
    }
  }, [item.data]);

  const handleChange = (event) => {
    console.log(event.target);
    setDatas({
      ...datas,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const onSubmit = async () => {
    const x = datas.fullAmount;
    const y = datas.voidAmount;
    const z = x + y;

    console.log(datas);
    console.log(z);
    const { data } = await updateProduct({
      idProduct: datas.idProduct,
      description: `'${datas.description}'`,
      fullAmount: datas.fullAmount,
      voidAmount: datas.voidAmount,
      amount: z,
      state: datas.state,
    });
    if (data.status) {
      alert("Se ha actualizado con exito");
    }
  };

  return (
    <>
      <form className="h-100" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div>
            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Nombre
              </label>
              <input
                type="text"
                disabled
                className="form-control"
                id="userInput"
                name="description"
                value={datas.description}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Cantidad llena
              </label>
              <input
                type="number"
                className="form-control"
                id="userInput"
                name="fullAmount"
                value={datas.fullAmount}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userInput" className="form-label">
                Cantidad vacia
              </label>
              <input
                type="number"
                className="form-control"
                id="userInput"
                name="voidAmount"
                value={datas.voidAmount}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex w-100 justify-content-center">
              <div className="pb-1">
                <button type="submit" className="btn btnP btn-dark">
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const Search = () => {
  const [product, setProduct] = useState();

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(codeSchema),
  });

  const onSubmit = async (form) => {
    await searchProduct(form.idProduct).then((item) => {
      if (item.data[0] == undefined) {
        alert("Producto no encontrado");
      } else {
        setProduct(item.data[0]);
      }
    });
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center w-100">
        <h1 className="text-center mt-4">Gestion de productos</h1>
        <div className="w-100">
          <MenuButtons />
        </div>
        <div className="d-flex flex-column shadow-lg rounded-3 p-1 w-50 mb-5">
          <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="ps-4 d-flex align-items-center w-100 m-0 border-bottom pb-2">
                <div className="w-25">
                  <label htmlFor="idProduct" className="form-label">
                    Codigo
                  </label>
                  <input
                    {...register("idProduct", { required: true })}
                    type="text"
                    className="form-control w-100 mb-2"
                  />
                </div>
                <div className="w-75">
                  <button className="btn btnP btn-dark mt-4 ms-4" type="submit">
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="h-100">
            <Update data={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
