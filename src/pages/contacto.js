import React from "react"
import Cabeçalho from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <Cabeçalho headerText="Contacto" />
      <p>Envia-me a mensagem!</p>
    </Layout>
  )
}
