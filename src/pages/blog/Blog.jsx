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
  //função pra limpar os forms
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [area, setArea] = useState('');
  const [autor, setAutor] = useState('');
  const [data, setData] = useState('');
  const [textoMateria, setTextoMateria] = useState('');

  const handleClear = () => {
    setTitulo('');
    setSubtitulo('');
    setArea('');
    setAutor('');
    setData('');
    setTextoMateria('');
  };
  const [visibleCard, setVisibleCard] = useState(null);

  const handleShow = (index) => {
    setVisibleCard(index);
  };

  const handleHide = () => {
    setVisibleCard(null);
  };
//vetorização
  const cards = [
    { image: blog1, title: 'Receitas', texto: 'Receita para Substituir ovos Seja por motivos de saúde, preferências dietéticas ou alergias, muitas pessoas procuram alternativas para substituir os ovos em suas receitas. Felizmente, existem diversas opções que podem ser usadas para manter a textura e a estrutura das suas preparações culinárias. A seguir, apresentamos três substitutos populares e fáceis de preparar: sementes de linhaça ou chia, aquafaba e amido de milho ou batata. Sementes de Linhaça ou Chia Preparo: Misture 1 colher de sopa de sementes de linhaça (ou chia) trituradas com 3 colheres de sopa de água. Deixe repousar em uma taça durante 5 minutos até que adquira uma consistência gelatinosa. Aquafaba Preparo: Cozinhe o grão de bico até que esteja macio. Retire a água que sobra do cozimento do grão de bico, conhecida como aquafaba. Utilize 3 colheres de sopa de aquafaba para cada ovo que a receita pedir. Amido de Milho ou Batata Preparo: Misture 2 colheres de sopa de amido de milho (ou batata) com 3 colheres de sopa de água morna. Misture bem até que o amido esteja completamente dissolvido e a mistura homogênea. Utilize esta mistura para substituir 1 ovo na sua receita. Com essas alternativas, você pode adaptar suas receitas favoritas sem comprometer o sabor ou a textura. Experimente e descubra qual substituto funciona melhor para você!' },
    { image: blog2, title: 'Quais as principais restrições alimentares?', texto: 'As restrições alimentares são cada vez mais comuns na sociedade moderna, seja por questões de saúde, escolhas pessoais, ou necessidades culturais e religiosas. As alergias alimentares são respostas imunológicas adversas a proteínas presentes em certos alimentos. Elas podem variar de leves a graves, com reações que incluem urticária, inchaço, dificuldades respiratórias, e até anafilaxia, que pode ser fatal. Principais Alérgenos: Amendoim e nozes, Leite e derivados, Ovos, Soja, Trigo, Peixes e frutos do mar Cuidados: Evitar contaminação cruzada ao preparar e servir alimentos. Informar claramente no menu sobre a presença de alérgenos. Treinar a equipe para lidar com emergências alérgicas' },
    { image: blog3, title: 'A importância de ler o rótulo das embalagens', texto: 'Entenda a importância de fazer escolhas conscientes na hora da sua alimentação. Nos dias de hoje, cada vez mais pessoas estão preocupadas em fazer escolhas alimentares saudáveis e conscientes. E para pessoas com alergias alimentares, a leitura dos rótulos é essencial para identificar a presença de alérgenos como glúten, lactose, ovos, nozes e outros. Isso é crucial para prevenir reações alérgicas graves e proteger sua saúde. Além de identificar alérgenos na lista de ingredientes, pessoas com restrição alimentar precisam estar atentas a possíveis contaminações cruzadas. Por isso, é importante procurar por informações sobre práticas de fabricação que possam levar à contaminação do alimento com substâncias alergênicas. Muitas vezes, ingredientes alergênicos estão presentes em alimentos processados de forma inesperada. Ler os rótulos permite identificar esses ingredientes ocultos e evitar produtos que possam representar riscos à saúde. Por que Ler os Rótulos é Importante para Pessoas com Restrição Alimentar: 1. Identificação de Ingredientes Alérgenos: Para pessoas com alergias alimentares, a leitura dos rótulos é essencial para identificar a presença de alérgenos. Isso é crucial para prevenir reações alérgicas graves e proteger sua saúde. 2. Evitar Contaminação Cruzada: Além de identificar alérgenos na lista de ingredientes, pessoas com restrição alimentar precisam estar atentas a possíveis contaminações cruzadas. Por isso, é importante procurar por informações sobre práticas de fabricação que possam levar à contaminação do alimento com substâncias alergênicas. 3. Atenção a Ingredientes Ocultos: Muitas vezes, ingredientes alergênicos estão presentes em alimentos processados de forma inesperada. Ler os rótulos permite identificar esses ingredientes ocultos e evitar produtos que possam representar riscos à saúde.  O Que Procurar nos Rótulos para Pessoas com Restrição Alimentar: 1. Lista de Ingredientes: A lista de ingredientes é o primeiro lugar a se verificar. Pessoas com restrição alimentar devem procurar por alimentos específicos que precisam evitar, além de ingredientes relacionados, como derivados de leite para quem é intolerante à lactose. 2. Informações sobre Contaminação Cruzada:Algumas embalagens fornecem informações sobre possíveiscontaminações cruzadas. Frases como "pode conter traços de..."indicam que o produto pode ter entrado em contato com alérgenosdurante o processo de fabricação.3. Certificações de Segurança Alimentar:Por que é Importante Ler os Rótulos das Embalagens dos Alimentos? 3Certificações como "livre de glúten" ou "certificado livre de alérgenos"podem ajudar pessoas com restrição alimentar a identificar produtos seguros para consumo. Conclusão Ler os rótulos das embalagens dos alimentos é uma prática essencial para pessoas com restrição alimentar, e para todos nós. Ao identificar alimentos prejudiciais a nossa saúde, fazemos escolhas alimentares mais seguras e protegemos a nossa saúde. Assim, evitamos qualquer forma de intoxicação. Portanto, da próxima vez que estiver fazendo compras, lembre-se da importância de ler os rótulos - sua saúde agradecerá!' },
    { image: blog4, title: 'Por que os restaurantes devem se preocupar?', texto: '  Entenda a Importância da Inclusão e Acessibilidade na alimentação Nos últimos anos, temos observado um aumento significativo no número de pessoas com restrições alimentares, sejam elas relacionadas a alergias, intolerâncias ou escolhas dietéticas específicas. Diante desse cenário, os restaurantes têm a oportunidade e a responsabilidade de se adaptarem para atender a essa demanda crescente de forma inclusiva e consciente. A Importância da Inclusão Com o aumento da conscientização sobre saúde e nutrição, a demanda por opções alimentares adaptadas a diferentes restrições tem crescido significativamente. Pessoas com restrição alimentar muitas vezes enfrentam desafios ao encontrar restaurantes que atendam às suas necessidades. Os estabelecimentos que oferecem opções seguras e saborosas para esse público podem conquistar sua fidelidade e aumentar sua base de clientes. Legalidade e Responsabilidade Social Além de ser uma questão ética, fornecer informações precisas sobre os ingredientes e possíveis alérgenos presentes nos pratos é uma obrigação para os restaurantes. Ao garantir a transparência em relação aos alimentos servidos, os estabelecimentos demonstram sua preocupação com a saúde e o bemestar dos clientes. Garantir a segurança alimentar de todos os clientes é uma forma de exercer responsabilidade social corporativa e construir uma reputação positiva no mercado. É fundamental que a equipe do restaurante esteja bem informada sobre as restrições alimentares e saiba como lidar com pedidos especiais dos clientes de forma segura e profissional. Isso inclui o conhecimento sobre ingredientes alergênicos, práticas de preparo seguras e a capacidade de fornecer informações precisas aos clientes sobre os pratos do cardápio. . Transparência e Comunicação: Fornecer informações claras e precisas sobre os ingredientes dos pratos, incluindo possíveis alérgenos e práticas de preparo, ajuda a construirconfiança e tranquiliza os clientes com  restrição alimentar. Os restaurantes podem adotar estratégias de comunicação transparente, como disponibilizar informações detalhadas sobre os ingredientes dos pratos no cardápio, oferecer opções personalizadas para atender às necessidades específicas dos clientes e garantir que a equipe esteja preparada para responder a perguntas e preocupações dos clientes sobre o menu. Por Que os Restaurantes Devem se Preocupar com o Público com Restrição Alimentar? 4 É fundamental que esses estabelecimentos estejam atentos às necessidades de todos os seus clientes e se esforcem para proporcionar uma experiência gastronômica verdadeiramente inclusiva. Conte com a Sabor.ia nesse processo! :)' },
    { image: blog5, title: 'Como os restaurantes devem lidar com este público?', texto: 'À medida que aumenta a conscientização sobre restrições alimentares, é essencial que os restaurantes estejam preparados para atender a esse público de forma adequada e segura. Adaptar-se às necessidades de clientes com alergias, intolerâncias, dietas específicas e restrições culturais ou religiosas não só promove inclusão, mas também pode aumentar a fidelização e atrair novos clientes. Aqui estão algumas estratégias eficazes para os restaurantes lidarem com esse público. Treinamento da Equipe Conhecimento e Sensibilidade: Eduque a equipe sobre diferentes tipos de restrições alimentares, incluindo alergias, intolerâncias e dietas específicas. Promova a sensibilidade em relação às necessidades dos clientes, destacando a importância de evitar contaminação cruzada e de fornecer informações precisas. Capacitação em Emergências: Treine a equipe para lidar com situações de emergência, como reações alérgicas, e mantenha um kit de primeiros socorros acessível. Conheça os procedimentos de primeiros socorros para anafilaxia e tenha um plano de ação claro. Comunicação Clara e Transparente Menus Detalhados: Crie menus detalhados que indiquem claramente a presença de alérgenos e ingredientes comuns que possam causar intolerâncias. Use símbolos ou legendas para identificar opções veganas, vegetarianas, sem glúten, sem lactose, entre outras.' },
    { image: blog6, title: 'Como evitar a contaminação cruzada', texto: '' },
    { image: blog7, title: 'Qual a diferença entre alergia e intolerância?', texto: '' },
    { image: blog8, title: 'O impacto das restrições alimentares no cotidiano', texto: 'As restrições alimentares, sejam por questões de saúde, escolhas pessoais ou necessidades culturais e religiosas, têm um impacto significativo no cotidiano das pessoas. Essas limitações afetam não só a alimentação, mas também aspectos sociais, emocionais e práticos da vida diária.A seguir, exploramos como essas restrições influenciam diferentes áreas do cotidiano e como as pessoas lidam com esses desafios. Saúde e Bem-Estar Gerenciamento de Saúde: Condições Médicas: Pessoas com alergias alimentares, intolerâncias ou doenças como a celíaca precisam gerenciar sua dieta rigorosamente para evitar reações adversas e complicações de saúde. Nutrição Balanceada: Manter uma dieta equilibrada pode ser desafiador para aqueles que precisam evitar certos alimentos, exigindo planejamento cuidadoso e, às vezes, suplementação. Desafios Sociais: Refeições em Grupo: Participar de eventos sociais que envolvem comida pode ser complicado. Pessoas com restrições alimentares muitas vezes precisam levar suas próprias refeições ou fazer pedidos especiais, o que pode causar constrangimento ou sensação de isolamento. Custo: Alimentos Especiais: Produtos sem glúten, sem lactose ou orgânicos geralmente são mais caros, aumentando os custos de alimentação para aqueles com restrições específicas. Conclusão. As restrições alimentares têm um impacto profundo e multifacetado no cotidiano das pessoas. Embora apresentem desafios significativos, tanto práticos quanto emocionais, elas também incentivam uma maior conscientização sobre saúde e nutrição. Com um planejamento cuidadoso, suporte social e um ambiente inclusivo, é possível lidar eficazmente com as restrições alimentares e manter uma vida saudável e satisfatória.' },
    { image: blog9, title: 'Depoimentos de pessoas que lidam com restrições alimentares', texto: 'Texto para Depoimentos de pessoas que lidam com restrições alimentares' },
    { image: blog10, title: 'A importância da integração do público com restrição alimentar aos restaurantes', texto: 'Saúde e Bem-Estar Muitas pessoas dependem de dietas específicas para manter sua saúde e bem-estar. Alergias alimentares, intolerâncias e condições médicas, como a doença celíaca, exigem cuidado rigoroso com a alimentação. Diversidade Culinária. Oferecer opções para diferentes restrições alimentares também enriquece a oferta culinária de um restaurante. Ingredientes alternativos e receitas inovadoras podem trazer novos sabores e texturas, atraindo um público mais amplo e curioso. Saúde e Bem-Estar. Muitas pessoas dependem de dietas específicas para manter sua saúde e bem-estar. Alergias alimentares, intolerâncias e condições médicas, como a doença celíaca, exigem cuidado rigoroso com a alimentação. Restaurantes que oferecem opções seguras e saudáveis contribuem significativamente para a qualidade de vida desses indivíduos, permitindo que eles possam comer fora de casa sem risco à saúde. Inclusão e Acessibilidade.A inclusão de opções para pessoas com restrições alimentares - como alergias, intolerâncias, dietas veganas ou vegetarianas, e restrições religiosas - é um sinal de respeito e acolhimento.' },
    { image: blog11, title: 'Opções de alimentos para o público com restrição', texto: 'Oferecer opções de alimentos para pessoas com restrições alimentares é essencial para criar um ambiente inclusivo e acolhedor. A seguir, apresentamos uma variedade de alternativas para diferentes tipos de restrições alimentares, que podem ser incorporadas aos menus dos restaurantes. Opções para Alérgicos Sem Amendoim e Nozes: Lanches: Frutas frescas, barras de cereais sem nozes, bolachas de arroz. Sem Laticínios: Lanches: Homus com vegetais, frutas secas, pipoca sem manteiga. Pratos Principais: Tofu mexido, hambúrgueres de feijão, massas com molho pesto sem queijo. Sem Glúten: Lanches: Barras de cereais sem glúten, pipoca, frutas frescas. Opções para Dietas Específicas Vegetarianas: Lanches: Palitos de cenoura e aipo com homus, frutas secas, chips de vegetais.' },
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
          <form action="https://formspree.io/f/xkgwwlrd" method="POST">
      <input
        type="text"
        required
        placeholder="Título"
        name="titulo:"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        
        placeholder="Subtítulo"
        name="Subtítulo:"
        value={subtitulo}
        onChange={(e) => setSubtitulo(e.target.value)}
      />
      <div className="add-input">
        <input
          type="text"
          required
          placeholder="Área"
          name="Área:"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor"
          required
          name="Autor:"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <input
          type="date"
          required
          name="data:"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <textarea
        name="texto máteria:"
        placeholder="Escreva sua matéria"
        required
        rows={7}
        value={textoMateria}
        onChange={(e) => setTextoMateria(e.target.value)}
      ></textarea>
      <div className="add-btn">
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleClear}>Limpar</button>
      </div>
    </form>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
