import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  // 👉 Adicionamos o "reset" aqui
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Simula o envio do formulário e salva localmente
    localStorage.setItem("contato", JSON.stringify(data));
    alert("Mensagem salva localmente (simulação de envio)!");
    reset(); // 👉 limpa os campos
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-primary mb-6">Contato</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-white p-6 shadow-md rounded-lg"
      >
        <div>
          <label className="block mb-1 font-semibold">Nome</label>
          <input
            {...register("nome", { required: true })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Mensagem</label>
          <textarea
            {...register("mensagem", { required: true })}
            rows={5}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Digite sua mensagem"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
