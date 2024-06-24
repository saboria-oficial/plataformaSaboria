import React, { useState } from 'react';
import '../../css/blog.css';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer';
import CardBlog from '../../components/CardBlog';
//image
import imgPrato from '../../assets/img2/fotoIndisponivel.jpg'
import blog1 from '../../assets/img2/blog1.png';
import blog2 from '../../assets/img2/blog2.png';
import blog3 from '../../assets/img2/blog3.png';
import blog4 from '../../assets/img2/blog4.png';
import blog5 from '../../assets/img2/blog5.png';
import blog6 from '../../assets/img2/blog6.png';
import blog7 from '../../assets/img2/blog7.png';
import blog8 from '../../assets/img2/blog8.png';
import blog9 from '../../assets/img2/blog9.png';
import blog10 from '../../assets/img2/blog10.png';
import blog11 from '../../assets/img2/blog11.png';
import blog12 from '../../assets/img2/blog12.png';

const Blog = () => {
  const [visibleCard, setVisibleCard] = useState(null);

  const handleShow = (index) => {
    setVisibleCard(index);
  };

  const handleHide = () => {
    setVisibleCard(null);
  };

  const cards = [
    { image: blog1, title: 'Receitas', texto: '' },
    { image: blog2, title: 'Quais as principais restrições alimentares?', texto: 'Texto para Quais as principais restrições alimentares?' },
    { image: blog3, title: 'A importância de ler o rótulo das embalagens', texto: 'Entenda a importância de fazer escolhas conscientes na hora da sua alimentação. Nos dias de hoje, cada vez mais pessoas estão preocupadas em fazer escolhas alimentares saudáveis e conscientes. E para pessoas com alergias alimentares, a leitura dos rótulos é essencial para identificar a presença de alérgenos como glúten, lactose, ovos, nozes e outros. Isso é crucial para prevenir reações alérgicas graves e proteger sua saúde. Além de identificar alérgenos na lista de ingredientes, pessoas com restrição alimentar precisam estar atentas a possíveis contaminações cruzadas. Por isso, é importante procurar por informações sobre práticas de fabricação que possam levar à contaminação do alimento com substâncias alergênicas. Muitas vezes, ingredientes alergênicos estão presentes em alimentos processados de forma inesperada. Ler os rótulos permite identificar esses ingredientes ocultos e evitar produtos que possam representar riscos à saúde. Por que Ler os Rótulos é Importante para Pessoas com Restrição Alimentar: 1. Identificação de Ingredientes Alérgenos: Para pessoas com alergias alimentares, a leitura dos rótulos é essencial para identificar a presença de alérgenos. Isso é crucial para prevenir reações alérgicas graves e proteger sua saúde. 2. Evitar Contaminação Cruzada: Além de identificar alérgenos na lista de ingredientes, pessoas com restrição alimentar precisam estar atentas a possíveis contaminações cruzadas. Por isso, é importante procurar por informações sobre práticas de fabricação que possam levar à contaminação do alimento com substâncias alergênicas. 3. Atenção a Ingredientes Ocultos: Muitas vezes, ingredientes alergênicos estão presentes em alimentos processados de forma inesperada. Ler os rótulos permite identificar esses ingredientes ocultos e evitar produtos que possam representar riscos à saúde.  O Que Procurar nos Rótulos para Pessoas com Restrição Alimentar: 1. Lista de Ingredientes: A lista de ingredientes é o primeiro lugar a se verificar. Pessoas com restrição alimentar devem procurar por alimentos específicos que precisam evitar, além de ingredientes relacionados, como derivados de leite para quem é intolerante à lactose. 2. Informações sobre Contaminação Cruzada:Algumas embalagens fornecem informações sobre possíveiscontaminações cruzadas. Frases como "pode conter traços de..."indicam que o produto pode ter entrado em contato com alérgenosdurante o processo de fabricação.3. Certificações de Segurança Alimentar:Por que é Importante Ler os Rótulos das Embalagens dos Alimentos? 3Certificações como "livre de glúten" ou "certificado livre de alérgenos"podem ajudar pessoas com restrição alimentar a identificar produtos seguros para consumo. Conclusão Ler os rótulos das embalagens dos alimentos é uma prática essencial para pessoas com restrição alimentar, e para todos nós. Ao identificar alimentos prejudiciais a nossa saúde, fazemos escolhas alimentares mais seguras e protegemos a nossa saúde. Assim, evitamos qualquer forma de intoxicação. Portanto, da próxima vez que estiver fazendo compras, lembre-se da importância de ler os rótulos - sua saúde agradecerá!' },
    { image: blog4, title: 'Por que os restaurantes devem se preocupar?', texto: '  Entenda a Importância da Inclusão e Acessibilidade na alimentação Nos últimos anos, temos observado um aumento significativo no número de pessoas com restrições alimentares, sejam elas relacionadas a alergias, intolerâncias ou escolhas dietéticas específicas. Diante desse cenário, os restaurantes têm a oportunidade e a responsabilidade de se adaptarem para atender a essa demanda crescente de forma inclusiva e consciente. A Importância da Inclusão Com o aumento da conscientização sobre saúde e nutrição, a demanda por opções alimentares adaptadas a diferentes restrições tem crescido significativamente. Pessoas com restrição alimentar muitas vezes enfrentam desafios ao encontrar restaurantes que atendam às suas necessidades. Os estabelecimentos que oferecem opções seguras e saborosas para esse público podem conquistar sua fidelidade e aumentar sua base de clientes. Legalidade e Responsabilidade Social Além de ser uma questão ética, fornecer informações precisas sobre os ingredientes e possíveis alérgenos presentes nos pratos é uma obrigação para os restaurantes. Ao garantir a transparência em relação aos alimentos servidos, os estabelecimentos demonstram sua preocupação com a saúde e o bemestar dos clientes. Garantir a segurança alimentar de todos os clientes é uma forma de exercer responsabilidade social corporativa e construir uma reputação positiva no mercado. É fundamental que a equipe do restaurante esteja bem informada sobre as restrições alimentares e saiba como lidar com pedidos especiais dos clientes de forma segura e profissional. Isso inclui o conhecimento sobre ingredientes alergênicos, práticas de preparo seguras e a capacidade de fornecer informações precisas aos clientes sobre os pratos do cardápio. . Transparência e Comunicação: Fornecer informações claras e precisas sobre os ingredientes dos pratos, incluindo possíveis alérgenos e práticas de preparo, ajuda a construirconfiança e tranquiliza os clientes com  restrição alimentar. Os restaurantes podem adotar estratégias de comunicação transparente, como disponibilizar informações detalhadas sobre os ingredientes dos pratos no cardápio, oferecer opções personalizadas para atender às necessidades específicas dos clientes e garantir que a equipe esteja preparada para responder a perguntas e preocupações dos clientes sobre o menu. Por Que os Restaurantes Devem se Preocupar com o Público com Restrição Alimentar? 4 É fundamental que esses estabelecimentos estejam atentos às necessidades de todos os seus clientes e se esforcem para proporcionar uma experiência gastronômica verdadeiramente inclusiva. Conte com a Sabor.ia nesse processo! :)' },
    { image: blog5, title: 'Como os restaurantes devem lidar com este público?', texto: 'Texto para Como os restaurantes devem lidar com este público?' },
    { image: blog6, title: 'Como evitar a contaminação cruzada', texto: 'Contaminação cruzada é a transferência acidental de substâncias indesejadas (como alérgenos, bactérias, vírus, ou outros contaminantes) de um alimento ou superfície para outro, potencialmente causando reações adversas ou doenças. Falar sobre Contaminação cruzada é importante porque sem a conscientização deste assunto, a segurança de muitas pessoas é ameaçada. Como podemos evitar? A contaminação de alimentos pode ocorrer em várias etapas de sua produção, manuseio e transporte. Para manter a segurança alimentar, é necessário: ● Não usar os mesmos utensílios para alimentos crus e cozidos. ● Evitar preparar alimentos de origens diferentes na mesma superfície. ● Usar equipamentos e utensílios limpos para todos os alimentos. ● Lavar bem as mãos após contato com lixo ou dinheiro e durante o preparo dos alimentos. ● Não armazenar alimentos de diferentes origens juntos. ● Na geladeira, separar carnes cruas de outros alimentos. Todos na empresa devem compreender e seguir essas práticas, sendo essencial realizar treinamento de funcionários. Fonte: Caroline Stein | 4 de Dezembro de 2023 https://www.paripassu.com.br/blog/contaminacao-cruzada-de-alimentos' },
    { image: blog7, title: 'Qual a diferença entre alergia e intolerância?', texto: 'Já surgiu a dúvida do que é alergia e o que é intolerância? Se sim, saiba que é muito comum! E hoje, iremos te ajudar a saber a diferença entre os dois. Intolerância: É uma resposta do organismo ao consumir certos alimentos. Como ele não consegue digeri-los, ele reage como dizendo “não suporto essa substância”. E ao invés de incluir o sistema imunológico, ela ocorre relacionalmente ao sistema digestivo. Também é importante que você consulte um médico para melhor avaliação de algum problema relacionado a saúde, mas alguns sintomas que podem ocorrer por uma intolerância alimentar são: ● Gases ● Diarreia ● Náuseas Alergia: A alergia alimentar é uma resposta do seu sistema imunológico devido a exposição a um determinado alimento. Também é importante que você consulte um médico para melhor avaliação de algum problema relacionado à saúde, mas alguns sintomas que podem ocorrer por uma alergia alimentar são graves e podem ocorrer segundos depois de ingerir o alimento. Os sintomas mais comuns são: ● Urticária ● Dor Abdominal ● Dificuldade para respirar' },
    { image: blog8, title: 'O impacto das restrições alimentares no cotidiano', texto: 'Texto para O impacto das restrições alimentares no cotidiano' },
    { image: blog9, title: 'Depoimentos de pessoas que lidam com restrições alimentares', texto: 'Texto para Depoimentos de pessoas que lidam com restrições alimentares' },
    { image: blog10, title: 'A importância da integração do público com restrição alimentar aos restaurantes', texto: 'Texto para A importância da integração do público com restrição alimentar aos restaurantes' },
    { image: blog11, title: 'Opções de alimentos para o público com restrição', texto: 'Texto para Opções de alimentos para o público com restrição' },
    { image: blog12, title: 'Depoimentos de pessoas que lidam com restrições alimentares', texto: 'Texto para Depoimentos de pessoas que lidam com restrições alimentares' },
  ];

  return (
    <>
      <Header />
      <div className="container-blog">
        <div className="banner-blog"></div>
        <div className="content-blog">
          <section className="materias-blog">
            <h2>Para você cliente</h2>
            <div className="line-blog">
              {cards.slice(0, 3).map((card, index) => (
                <CardBlog
                  key={index}
                  image={card.image}
                  title={card.title}
                  texto={card.texto}
                  isVisible={visibleCard === index}
                  onShow={() => handleShow(index)}
                  onHide={handleHide}
                />
              ))}
            </div>
            <h2>Receitas sem leite</h2>
            <div className="line-blog">
              {cards.slice(3, 6).map((card, index) => (
                <CardBlog
                  key={index}
                  image={card.image}
                  title={card.title}
                  texto={card.texto}
                  isVisible={visibleCard === index + 3}
                  onShow={() => handleShow(index + 3)}
                  onHide={handleHide}
                />
              ))}
            </div>
            <div className="line-blog">
              {cards.slice(6, 9).map((card, index) => (
                <CardBlog
                  key={index}
                  image={card.image}
                  title={card.title}
                  texto={card.texto}
                  isVisible={visibleCard === index + 6}
                  onShow={() => handleShow(index + 6)}
                  onHide={handleHide}
                />
              ))}
            </div>
          </section>
          <aside className="aside-blog">
            <h2>Principais matérias</h2>
            {cards.slice(9, 12).map((card, index) => (
              <CardBlog
                key={index}
                image={card.image}
                title={card.title}
                texto={card.texto}
                isVisible={visibleCard === index + 9}
                onShow={() => handleShow(index + 9)}
                onHide={handleHide}
              />
            ))}
          </aside>
        </div>
        <div className="add-prato">
          <h2>Adicionar Matéria ao blog</h2>
          <form action="">
            <input type="text" placeholder='Título'/>
            <input type="text" placeholder='Subtítulo'/>
            <div className="add-input">
              <input type="text"  placeholder='Área'/>
              <input type="text" placeholder='Autor'/>
              <input type="date"/>
            </div>
            <textarea name="" id="" placeholder='Escreva sua matéria' rows={7}></textarea>
            <div className="add-btn">
           <button type='submit'>Enviar</button>
              <button>Deletar</button>
            </div>
          </form>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
