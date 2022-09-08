export const resultDefaultValue = {
  text: "",
  error: false,
  submited: false,
};

export const stuffType = {
  corretas: { id: 1, color: "#4daf50" },
  erradas: { id: 2, color: "#f04532" },
  expiradas: { id: 3, color: "#ff9700" },
  canceladas: { id: 4, color: "#9e9e9e" },
};

export const percentagePerfomace = (percentage) => {
  if (percentage >= 80) {
    return {
      text: "Desempenho Ótimo",
      color: "#4daf50",
    };
  } else if (percentage >= 60) {
    return {
      text: "Desempenho Bom",
      color: "#4daf50",
    };
  } else if (percentage >= 40) {
    return {
      text: "Desempenho mediano",
      color: "#ff9700",
    };
  } else if (percentage >= 20) {
    return {
      text: "Desempenho Ruim",
      color: "#f04532",
    };
  } else {
    return {
      text: "Desempenho Péssimo",
      color: "#f04532",
    };
  }
};

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const truncate = (str) => {
  return str.replace(new RegExp(`(.{${80 - 1}})..+`), "$1...");
};

export const randomQuestion = (items) =>
  items[Math.floor(Math.random() * items.length)];

export const expiryTimeQuestion = (newDate) =>
  new Date(new Date(newDate).getTime() + 200 * 600);

export const formatTypeString = (type) => {
  const newString = type.substr(type.indexOf(" ") + 1);
  const firstLetterUpperCase =
    newString.charAt(0).toUpperCase() + newString.slice(1);

  return `${
    firstLetterUpperCase === "Expirado" ? "Expirada" : firstLetterUpperCase
  }s`;
};

export const sortById = (data) => data.sort((a, b) => a.id - b.id);

export const separeteByType = (data, key) => {
  const reduceData = data.reduce((elem, obj) => {
    (elem[obj[key]] = elem[obj[key]] || []).push({
      ...obj,
    });
    return elem;
  }, {});

  const cleanData = Object.keys(reduceData).map((op) => {
    const { color, id } = stuffType[op.toLocaleLowerCase()];
    return {
      id,
      name: op,
      amount: reduceData[op].length,
      color,
    };
  });

  return sortById(cleanData);
};
