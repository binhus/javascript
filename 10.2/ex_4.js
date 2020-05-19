const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
    const temperature = getMarsTemperature();
    console.log(temperature);
    return `"Mars temperature is: ${temperature} degree Celsius"`
}
// crie a função sendMarsTemperature abaixo


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
