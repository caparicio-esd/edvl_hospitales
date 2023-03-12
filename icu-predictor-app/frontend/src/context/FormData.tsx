type FormType = "range";
export interface FormRangeData {
  title: string;
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

export const formData: FormRangeData[] = [
  {
    title: "Sexo",
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
