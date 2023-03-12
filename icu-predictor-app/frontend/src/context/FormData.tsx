type FormType = "range";

/**
 * 
 */
export interface FormRangeData {
  title: string;
  name: string;
  tagline?: string;
  type: FormType;
  formConfig: {
    min: number;
    max: number;
    step: number;
    value: number;
  };
  layout?: {
    justifyContent: boolean;
    fillRangeSize: boolean;
  };
  toString: (value: number) => string;
  colorizeFunction: (value: number) => string;
}

/**
 * 
 * @param value 
 * @returns 
 */
const defaultFormatter = (value) => {
  let out: string = "";
  switch (value) {
    case -1:
      out = "Null";
      break;
    case 0:
      out = "False";
      break;
    case 1:
      out = "True";
      break;
  }
  return out;
};

/**
 * 
 * @param value 
 * @returns 
 */
const defaultColorizer = (value) => {
  let out: string = "";
  switch (value) {
    case -1:
      out = "range-muted";
      break;
    case 0:
      out = "range-success";
      break;
    case 1:
      out = "range-error";
      break;
  }
  return out;
};

/**
 * 
 */
export const formData: FormRangeData[] = [
  {
    title: "Sexo",
    name: "SEX_CODED",
    type: "range",
    formConfig: {
      min: 0,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: (value) => (value == 0 ? "Masculino" : "Femenino"),
    layout: {
      justifyContent: false,
      fillRangeSize: false,
    },
    colorizeFunction: (value: number) => ""
  },
  {
    title: "Edad",
    name: "AGE_DECADE",
    tagline: "Década",
    type: "range",
    formConfig: {
      min: 0,
      max: 90,
      step: 10,
      value: 0,
    },
    toString: (value) => value.toString(),
    layout: {
      justifyContent: false,
      fillRangeSize: true,
    },
    colorizeFunction: (value: number) => ""
  },
  {
    title: "Gravedad clínica",
    name: "ID_GRAVEDAD",
    type: "range",
    formConfig: {
      min: 0,
      max: 9,
      step: 1,
      value: 0,
    },
    toString: (value) => value.toString(),
    layout: {
      justifyContent: false,
      fillRangeSize: true,
    },
    colorizeFunction: (value: number) => ""
  },
  {
    title: "Basófilos",
    name: "Basófilos_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Basófilos %",
    name: "Basófilos_percentage_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "CHCM",
    name: "CHCM_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Eosinófilos",
    name: "Eosinófilos_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Eosinófilos %",
    name: "Eosinófilos_percentage_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "HCM",
    name: "HCM_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Hematocrito",
    name: "Hematocrito_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Hematíes",
    name: "Hematíes_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Hemoglobina",
    name: "Hemoglobina_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Leucocitos",
    name: "Leucocitos_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Linfocitos",
    name: "Linfocitos_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Linfocitos %",
    name: "Linfocitos_percentage_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Monocitos",
    name: "Monocitos_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Monocitos %",
    name: "Monocitos_percentage_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Neutrófilos",
    name: "Neutrófilos_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Neutrófilos %",
    name: "Neutrófilos_percentage_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "PWD",
    name: "PWD_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Plaquetas",
    name: "Plaquetas_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Plaquetocrito",
    name: "Plaquetocrito_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "RDWCV",
    name: "RDWCV_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "VCM",
    name: "VCM_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
  {
    title: "Vol. Plaquetario M.",
    name: "Volumen_plaquetario_medio_ANORMALITY",
    tagline: "Gravedad",
    type: "range",
    formConfig: {
      min: -1,
      max: 1,
      step: 1,
      value: 0,
    },
    toString: defaultFormatter,
    layout: {
      justifyContent: true,
      fillRangeSize: false,
    },
    colorizeFunction: defaultColorizer,
  },
];

export const dataToBackendAdapter = (formData: FormRangeData[]) => {
  return formData.reduce((acc, fd) => {
    const newField = {}
    newField[fd.name] = fd.formConfig.value
    return {
      ...acc,
      ...newField
    }
  }, {})
}