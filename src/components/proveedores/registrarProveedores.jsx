import React, {  } from "react";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import { createProvider } from "../../services/providers.services";

const schema = yup.object({
  idProvider: yup.string().required('Este campo es requerido').min(2, 'Ingresa minimo dos caracteres'),
  nameProvider: yup.string().required('Este campo es requerido'),
  numberProvider: yup.string().required('Este campo es requerido'),
  addres: yup.string().required('Este campo es requerido')
})

const RegistroProveedores = () => {

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (form) =>{
    await createProvider(form);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "550px"}}>
        <div className="border p-4 rounded-3 shadow-lg">
          <div>
            <h1 className="text-center">Registrar Proveedor</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Codigo
              </label>
              <input {...register('idProvider', {required: true})} type="text" className="form-control" id="userInput" />
            </div>

            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Nombre
              </label>
              <input {...register('nameProvider', {required: true})} type="text" className="form-control" id="userInput" />
            </div>

            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Direccion
              </label>
              <input {...register('addres', {required: true})} type="text" className="form-control" id="userInput" />
            </div>

            <div className="mb-3">
              <label htmlFor="userInput" className="form-label rounded-3">
                Telefono
              </label>
              <input {...register('numberProvider', {required: true})} type="text" className="form-control" id="userInput" />
            </div>

            <button type="submit" class="btn btnP btn-dark d-block mx-auto">
              Registrar
            </button>
          </form>
        </div>
      </div>
      <div className='row my-5'>
            <div className='col-6 text-center'>
                <Link to="/proveedor" className='text-decoration-none btn btnP btn-dark' >Proveedores</Link>
            </div>
            <div className='col-6 text-center'>
                <Link to="/proveedor/registro" className='text-decoration-none btn btnP btn-dark'>Registrar proveedor</Link>
            </div>
        </div>
    </>
  );
};

export default RegistroProveedores;
