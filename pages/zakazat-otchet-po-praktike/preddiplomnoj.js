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
import infoBlockConfig from 'data/infoBlock/otchet-po-prak'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import otchet from 'data/linksBlock/otchet';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';

import ImageBlock from 'components/common/ImageBlock';
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


const page = () => (
  <Wrapper title="Заказать отчет по преддипломной практике – купить отчет по практике в Москве и РФ срочно – цены, сроки написания на заказ" description="Предлагаем заказать отчет по преддипломной практике! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img4">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать отчет по преддипломной практике купить"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/zakazat-otchet-po-praktike">
            <a>Отчёт по практике</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Преддипломной</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/otch-prakrik1.jpg') + ")",}}>
            <div className="block-service__text gradient-l-black">
              <span className="block-service__title">Отчет по практике</span>
              <p className="block-service__par">Не парься сам – доверься нам!</p>
              <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
              <p className="block-service__par">От 3 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-5">
          <CardPopInfo
            url="/kursovaya-rabota-na-zakaz"
            title="Курсовая работа"
            text={[<p>от 4 000 руб.</p>]}
          />

          <CardPopInfo
            url="/referat-na-zakaz"
            title="Реферат"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/zakazat-esse"
            title="Эссе Контрольная"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-k-ekzamenu"
            title="Экзамены Тесты"
            text={[<p>от 200 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovoj-proekt-na-zakaz"
            title="Курсовой проект"
            text={[<p>от 8 000 руб.</p>]}
          />

        </div>
      </section>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Купить преддипломную практику
        </h1>
        <p className="block-text__par">
          Большинству студентов составление отчета по преддипломной практике дается с трудом. Основной причиной затруднения написания отчета является внесение точных данных для квалифицированного выполнения условий по написанию. Самостоятельно практику проходят лишь немногие учащиеся, поэтому не у всех есть реальные данные.
        </p>
        <p className="block-text__par">
          Студенты осознают, что написание отчета занимает немалый срок и требует определенных знаний. В случае если будущий выпускник получит неудовлетворительную оценку или же у него будет отсутствовать отчет по практике, его отправят на ее повторное прохождение. Как избежать таких конфузов?
        </p>
        <p className="block-text__par">
          Достаточно просто заказать отчет по преддипломной практике. Доверившись специалистам своего дела, вы получите уверенность в получении высокого оценочного балла, сохраните нервы и сэкономите драгоценное время, которое сможете направить на подготовку к экзаменам.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/otchet-po-preddiplomnoy-praktike.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества нашей компании
        </h2>
        <ul>
          <li>
            <b>Качество. </b>Писать ваш отчет по преддипломной практике на заказ будут действующие специалисты с кандидатской научной степенью в соответствующей отрасли с соблюдением всех методических требований.
          </li>
          <li>
            <b>Оригинальность. </b>Все работы пишут «с нуля» настоящие профессионалы. Каждая выполненная работа проходит проверки на уникальность с результативностью не менее 98%.
          </li>
          <li>
            <b>Пунктуальность. </b>Сроки сдачи заказа оговариваются на этапе подписания договора. Не задержим работу ни на день. Мы знаем, как вам важно, чтобы помощь в написании была оперативной и эффективной.
            <b></b>
          </li>
          <li>
            <b>Сопровождение до момента успешной сдачи. </b>Мы поможем вам подготовиться к защите и составить тезисные планы, а вы свободное время потратите по своему желанию.
          </li>
          <li>
            <b>Конфиденциальность. </b>Детали сотрудничества никогда не станут достоянием гласности. Обязательства о неразглашении прописываются в договоре.
          </li>
          <li>
            <b>Опыт. </b>Более чем за 10 лет сданы тысячи работ под заказ, из них почти 98% защищены на «хорошо» и «отлично». Без сомнения и Вы отлично защититесь.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что вы получите, заказав преддипломную практику
        </h2>
        <ul>
          <li>
            Уверенность. Решив заказать отчет по преддипломной практике в нашей компании, вы сможете избежать стрессов, страха перед экзаменом и даже минимальной вероятности провалить защиту.
          </li>
          <li>
            Стоимость. Купить преддипломную практику на заказ можно совсем недорого. Цена на такую работу формируется по нескольким показателям. Она зависит от объема, срока выполнения и выбранной тематики отчета.
          </li>
          <li>
            Время. Среднее время выполнения вашего задания до 10 рабочих дней. Мы помогаем даже в написании более срочных (от 1 дня) проектов без вреда для отчета.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как купить преддипломную практику
        </h2>
        <p className="block-text__par">
          Заказать или купить отчет по производственной практике недорого в Москве проще простого. Вам достаточно оставить запрос с данными на сайте BeSmarter!. От вас нужно лишь правильно сформировать список ваших пожеланий, при возможности присоединить методички с требованиями к написанию отчета вашего ВУЗа, если таковые имеются.
        </p>
        <p className="block-text__par">
          Отправляйте заявку прямо сейчас, чтобы узнать стоимость вашей работы.
        </p>
        <p className="block-text__par">
          Свяжитесь с нами по телефону <b>8 (495) 772-40-90</b>.
        </p>
        <p className="block-text__par">
          Закажите подробный отчет по преддипломной практике в нашем офисе по адресу: Москва, пер. Большой Кисловский, дом 1, стр. 2, офис 211.
        </p>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Мы гарантируем, что ваша работа будет выполнена профессионально, с выполнением всех требований и будет отвечать самым высоким стандартам качества.
        </p>
      </section>

      <Video>
        <iframe src="https://drive.google.com/file/d/1pOfa1kQsnKv9gwPUNAkv3pnd29Pxwouq/preview"></iframe>
      </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={otchet}/>
    </div>
  </Wrapper>
);


export default page
