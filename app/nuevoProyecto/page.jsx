"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import Proyecto from "@/components/formularios/Proyecto";
import Tuberias from "@/components/formularios/Tuberias";
import Zanja from "@/components/formularios/Zanja";
import Deflexion from "@/components/formularios/Deflexion";
import Flotabilidad from "@/components/formularios/Flotabilidad";
import Compresion from "@/components/formularios/Compresion";
import Pandeo from "@/components/formularios/Pandeo";

import { motion } from "framer-motion";

const steps = [
  {
    id: "proyecto",
    title: "Nuevo Proyecto",
    component: Proyecto,
    image: "/proyecto.jpg",
  },
  {
    id: "tuberia",
    title: "Seleccionar Tuberia",
    component: Tuberias,
    image: "/image.webp",
  },
  {
    id: "zanja",
    title: "Zanja e Instalacion",
    component: Zanja,
    image: "/tobo2.jpg",
  },
  {
    id: "deflexion",
    title: "Deflexion",
    component: Deflexion,
    image: "/tubus.jpg",
  },
  {
    id: "flotabilidad",
    title: "Flotabilidad",
    component: Flotabilidad,
    image: "/proyecto.jpg",
  },
  {
    id: "compresion",
    title: "Compresion Anular",
    component: Compresion,
    image: "/image.webp",
  },
  { id: "pandeo", title: "Pandeo", component: Pandeo, image: "/tubus.jpg" },
];

function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    proyecto: {
      nombre: "",
      solicitante: "",
      lugar: "",
      encargado: "",
      departamento: "",
      municipio: "",
      fecha: "",
      funcionalidad: "",
    },
    tuberia: {
      tuberia_id: "",
    },
    deflexion: {
      ya: "",
      pm1: "",
      pm2: "",
      pt1: "",
      pt2: "",
      phi: "",
      r: "",
      de: "",
      angulo: "",
      delta_admisible_corto: "",
      delta_admisible_largo: "",
      delta_calculada_corto: "",
      delta_calculada_largo: "",
      delta_dadmisible_corto: "",
      delta_dadmisible_largo: "",
      delta_dcalculada_corto: "",
      delta_dcalculada_largo: "",
    },
    flotabilidad: {
      yw: "",
      ysuelo: "",
      de: "",
      h: "",
      hw: "",
      wp: "",
      wli: "",
      yn: "",
      yliquido: "",
      f_up: "",
      wd: "",
      wf: "",
      f_down: "",
    },
    compresion: {
      pm: "",
      pt: "",
      ra: "",
      sigma_c: "",
      de: "",
      a_secc: "",
      m: "",
      fs: "",
      sigma: "",
      sigma_adm: "",
      a_req: "",
    },
    pandeo: {
      n: "",
      b: "",
      hd: "",
      fs: "",
      i_req: "",
      kf: "",
      qa: "",
    },
  });
  const handleInputChange = (step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [field]: value },
    }));
    console.log(value);
  };

  const isStepValid = (step) => {
    const currentStepId = steps[step].id;
    const stepData = formData[currentStepId];
    return Object.values(stepData).every((value) => value.trim() !== "");
  };

  const handleNext = () => {
    if (isStepValid(currentStep) && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      console.log(formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (isStepValid(currentStep)) {
      console.log("Formulario enviado:", formData);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <Container>
      <Box
        component="section"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch", p: 2 } }}
        noValidate
        autoComplete="off"
      >
        <Stepper activeStep={0} alternativeLabel sx={{ mt: 5, mb: 2 }}>
          {steps.map((step) => (
            <Step key={step.id}>
              <StepLabel
                StepIconProps={{
                  sx: {
                    fontSize: "2rem",
                    "& .MuiStepIcon-text": {
                      fontSize: "1rem",
                    },
                  },
                }}
              >
                {}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              backgroundColor: "#Fefefe",
              border: "1px solid #E0E0E0",
              borderRadius: "4px",
              padding: "20px",
              mt: 5,
              pt: 5,
            }}
          >
            <Box sx={{ flex: 2 }}>
                <CurrentStepComponent
                  data={formData[steps[currentStep].id]}
                  onChange={(field, value) =>
                    handleInputChange(steps[currentStep].id, field, value)
                  }
                />
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="outline"
              >
                Anterior
              </Button>
              {currentStep === steps.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid(currentStep)}
                >
                  Finalizar
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep)}
                >
                  Siguiente
                </Button>
              )}
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
                ml: { md: 3 },
              }}
            >
              <img
                src={steps[currentStep].image}
                alt={`Imagen para ${steps[currentStep].title}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
}

export default Page;
