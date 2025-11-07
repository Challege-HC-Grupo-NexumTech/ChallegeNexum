const onSubmit = async (data: FormData) => {
  try {
    localStorage.setItem("contato", JSON.stringify(data));
    alert("Mensagem salva localmente (simulação de envio)!");
    reset();
  } catch (err) {
    console.error("Erro ao enviar:", err);
  }
};
