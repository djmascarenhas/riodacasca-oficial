import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ContributionForm from "./ContributionForm";

export default function Contribua() {
  return <main>
    <SiteHeader />
    <section className="contribution-hero"><p className="eyebrow">Acervo comunitário · participação</p><h1>Uma lembrança<br/><em>pode abrir caminhos.</em></h1><p>Conte o que você possui e por que esse material importa. Antes de qualquer publicação, confirmaremos autoria, contexto e autorização de uso.</p></section>
    <section className="contribution-main"><div className="contribution-guide"><p className="section-index">O que pode ser enviado</p><h2>Fotografias, documentos, relatos e identificações.</h2><ol><li><span>01</span><p><strong>Descreva o material</strong>Inclua nomes, lugar, data aproximada e como ele chegou até você.</p></li><li><span>02</span><p><strong>Informe a autoria</strong>Se não souber, diga claramente. A dúvida também faz parte da pesquisa.</p></li><li><span>03</span><p><strong>Autorize com consciência</strong>O envio não produz publicação automática; cada caso será confirmado antes.</p></li></ol></div><ContributionForm /></section>
    <section className="contribution-privacy"><strong>Privacidade e direitos</strong><p>Não envie CPF, documentos pessoais, senhas ou informações sensíveis. Para arquivos grandes, informe apenas um link de acesso autorizado. O formulário abre uma mensagem no seu aplicativo de e-mail; o site não armazena os dados preenchidos.</p></section>
    <SiteFooter />
  </main>;
}
