export const darkMode = () => ({
  type: "darkMode",
});

export const lightMode = () => ({
  type: "lightMode",
});


export const hasHerror = (error) => ({
  type: 'error',
  payload : error
})