import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/referat'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/referatNew';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";


import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Referat from "components/common/ServiceBlock/ready-made/Referat";



const page = () => (
  <Wrapper title="Заказать реферат онлайн недорого – написать рефераты на заказ в Москве и РФ, цена под ключ" description="Написание рефератов недорого на заказ! Быстро и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img5">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Реферат</a>
          </Link>
        </div>
      </section>

        <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/referat-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Реферат</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>


      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <Referat/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать реферат недорого
        </h1>
        <p className="block-text__par">
          Неприятная особенность рефератов заключается в том, что о них (в отличие от экзаменов или курсовой) легко забыть. И внезапно выясняется, что сдавать работу нужно завтра-послезавтра, а у вас совсем ничего не готово.
        </p>
        <p className="block-text__par">
            Можно, конечно, судорожно броситься в библиотеку или попытаться на скорую руку переделать чей-то старый реферат. Но уверяем вас, вся эта спешка в лучшем случае закончится удовлетворительной оценкой, а в худшем – «неудом» и недопуском к сессии.
        </p>
        <p className="block-text__par">
          Мы предлагаем вам более надежный вариант – срочно написать реферат на заказ силами компании BeSmarter! Мы выполним работу максимально быстро, качественно и по доступной цене.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/referat-na-zak.jpg')} altText="Заказать реферат"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что вы получите?
        </h2>
        <ul>
          <li>
            <b>Гарантию пунктуальности. </b>У нас можно заказать реферат срочно – от 24 часов. Точное время сдачи прописывается в официальном договоре, так что волноваться не придется.
          </li>
          <li>
            <b>Гарантию оригинальности. </b>Написание рефератов на заказ в компании BeSmarter! осуществляется «с нуля». Уникальность текста проверяется на нескольких онлайн-сервисах.
          </li>
          <li>
            <b>Гарантию конфиденциальности. </b>Факт нашего сотрудничества останется строго между нами. Обязательства о неразглашении также фиксируются в договоре.
          </li>
        </ul>
        <p className="block-text__par">
            В BeSmarter! вы сможете заказать срочное написание реферата, не опасаясь мошенничества, плагиата и недобросовестного отношения.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          А как насчет качества?
        </h2>
        <p className="block-text__par">
            Компания BeSmarter! – единственное место, где можно заказать реферат у действующего преподавателя ВУЗа с кандидатской ученой степенью. Мы не пользуемся услугами фрилансеров-копирайтеров – только квалифицированные научные кадры с огромным опытом написания подобных работ.
        </p>
        <p className="block-text__par">
          Каждый реферат проходит фирменную многоступенчатую систему контроля для проверки его уникальности, грамотности оформления и соответствия вашим требованиям. Но даже после получения готовой работы вы имеете право потребовать бесплатные правки. Наша главная цель – ваша хорошая оценка!
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Сколько стоит реферат на заказ
        </h2>
        <p className="block-text__par">
          Как и для любого другого товара или услуги, если вы желаете купить работу, цена будет определяться ее индивидуальными особенностями:
        </p>
        <ul>
          <li>
            <b>Специальность. </b>По гуманитарным дисциплинам рефераты на заказ обычно стоят недорого, в то время как для технических предметов цены в среднем выше (до 2 раз).
          </li>
          <li>
            <b>Требования. </b>В первую очередь, это фактический объем текста – чем его больше, тем пропорционально выше стоимость. Также влияет высокая уникальность (выше 80%) – написать реферат на заказ со 100%-м показателем на всех сервисах будет дороже.
          </li>
          <li>
            <b>Срочность. </b>Если вы хотите получить работу недорого, постарайтесь оформить заявку как можно раньше.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/ref-na-zakaz.jpg')} altText="Заказать реферат в Москве"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как сделать заказ?
        </h2>
        <p className="block-text__par">
          Самый простой вариант – заказать реферат онлайн (недорого, быстро и удобно), заполнив форму на сайте. Такой вариант подойдет для жителей не только Москвы, но и других регионов России.
        </p>
        <p className="block-text__par">
            Также можно оформить заявку по телефону <br/> +7 495 772-4090.
        </p>
        <p className="block-text__par">
          Если же вы живете в Москве, ждем вас по <Link href="/contacts"><b><a>адресу</a></b></Link>: переулок Большой Кисловский, дом 1, строение 2, офис 211.
        </p>
        <p className="block-text__par">
            Какой бы вы ни выбрали способ заказать реферат – онлайн, звонок или визит, будьте уверены, менеджеры компании BeSmarter! окажут вам квалифицированную помощь в написании работы.
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
