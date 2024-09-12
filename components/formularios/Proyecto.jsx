"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid2 } from "@mui/material";
import Input from "../ui/Input";
import Title from "../ui/Title";
import SelectMenu from "../ui/SelectMenu";
import Calendar from "../ui/Calendar";

const departamentos = [
  "Chuquisaca",
  "La Paz",
  "Cochabamba",
  "Oruro",
  "Potosí",
  "Tarija",
  "Santa Cruz",
  "Beni",
  "Pando",
];

const Proyecto = ({ data, onChange }) => {
  const initialValues = data;

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Requerido"),
    solicitante: Yup.string().required("Requerido"),
    lugar: Yup.string().required("Requerido"),
    autor: Yup.string().required("Requerido"),
    departamento: Yup.string().required("Requerido"),
    municipio: Yup.string().required("Requerido"),
    fecha: Yup.date().required("Requerido"),
    funcionalidad: Yup.string().required("Requerido"),
  });
  const Text = "Datos de Proyecto";

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ setFieldValue }) => (
        <Form>
          <Title text={Text} />
          <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* Nombre */}
            <Input
              name="nombre"
              label="Nombre"
              type="text"
              setFieldValue={setFieldValue}
              onChange={(e) => {
                setFieldValue("nombre", e.target.value);
                onChange("nombre", e.target.value);
              }}
            />
            {/* Solicitante */}
            <Input
              name="solicitante"
              label="Nombre del Solicitante"
              type="text"
              setFieldValue={setFieldValue}
              onChange={(e) => {
                setFieldValue("solicitante", e.target.value);
                onChange("solicitante", e.target.value);
              }}
            />

            {/* Lugar */}
            <Input
              name="lugar"
              label="Lugar"
              type="text"
              setFieldValue={setFieldValue}
              onChange={(e) => {
                setFieldValue("lugar", e.target.value);
                onChange("lugar", e.target.value);
              }}
            />
            {/* Encargado */}
            <Input
              name="encargado"
              label="Nombre del Encargado"
              type="text"
              setFieldValue={setFieldValue}
              onChange={(e) => {
                setFieldValue("encargado", e.target.value);
                onChange("encargado", e.target.value);
              }}
            />
            {/* Departamento */}
            <SelectMenu
              name="departamento"
              value={data.departamento || ""}
              label="Departamento"
              options={departamentos}
              onChange={(e) => {
                setFieldValue("departamento", e.target.value);
                onChange("departamento", e.target.value);
              }}
            />
            {/* Municipio */}
            <Input
              name="municipio"
              label="Municipio"
              type="text"
              setFieldValue={setFieldValue}
              onChange={(e) => {
                setFieldValue("municipio", e.target.value);
                onChange("municipio", e.target.value);
              }}
            />
            {/* Fecha */}
            <Calendar
              name="fecha"
              label="Fecha"
              onChange={(e) => {
                const fechaFormateada = e ? e.format('YYYY-MM-DD') : '';
                setFieldValue("fecha", fechaFormateada);
                onChange("fecha", fechaFormateada);
              }}
            />
            {/* Funcionalidad */}
            <Input
              name="funcionalidad"
              label="Funcionalidad"
              type="text"
              setFieldValue={setFieldValue}
              onChange={(e) => {
                setFieldValue("funcionalidad", e.target.value);
                onChange("funcionalidad", e.target.value);
              }}
            />
           
          </Grid2>
        </Form>
      )}
    </Formik>
  );
};

export default Proyecto;
