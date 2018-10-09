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
import infoBlockConfig from 'data/infoBlock/disser'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disser from 'data/linksBlock/disser';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Заказать диссертацию по юриспруденции – сколько стоит написать диссертацию по юриспруденции в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Заказать диссертацию по юриспруденции. В компании  BeSmarter! Вы сможете заказать помощь в написании диссертации по юриспруденции от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать диссертацию по юриспруденции помощь в написании на заказ в Москве написать в короткие сроки срочно под заказ сколько стоит написать"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная </a>
          </Link>
          <span> / </span>
          <Link href="/dissertaciya-na-zakaz">
            <a>Диссертация</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По юриспруденции</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/kandidat.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Кандидатская диссертация</span>
              <p className="block-service__par">Написание и оформление</p>
              <p className="block-service__par">Публикации</p>
              <p className="block-service__par">Строго конфиденциально</p>
              <p className="block-service__par">Индивидуально</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-4">
            <CardPopInfo
                url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
                title="Аспирантские работы"
                text={[<p>От поступления до защиты</p>]}
            />
          <CardPopInfo
            url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
            title="Статьи"
            text={[<p>Написание и размещение</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
            title="Автореферат"
            text={[<p>Строго по ГОСТу</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
            title="Апробация"
            text={[<p>Реальные эксперименты</p>]}
          />

        </div>
      </section>

      <section className="block-service">
        <Link href="/dissertaciya-na-zakaz/doktorskaya">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/doctorskaya.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Докторская диссертация</span>
              <p className="block-service__par">Актуальность и научная новизна</p>
              <p className="block-service__par">Ваши и наши данные</p>
              <p className="block-service__par">Строго конфиденциально</p>
              <p className="block-service__par">Индивидуально</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Прямая связь с автором"
            text={[<p>Постоянный контроль</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Публикации"
            text={[<p>Журналы ВАК и иностранные</p>]}
          />

          <CardPopInfo
            url="/diplom-mba-na-zakaz"
            title="Обзор литературы"
            text={[<p>Свежие источники</p>]}
          />

        </div>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать диссертацию по юриспруденции
        </h1>
        <ul>
          <li>
            <b>Удобство сотрудничества</b><br/>
            Заказать диссертацию по юриспруденции могут жители не только Москвы, но и других регионов РФ.
          </li>
          <li>
            <b>Все виды диссертационных работ</b><br/>
            В BeSmarter! можно заказать <Link href="/dissertaciya-na-zakaz/magisterskaya"><a>магистерскую</a></Link>, <Link href="/dissertaciya-na-zakaz/kandidatskaya"><a>кандидатскую</a></Link> или <Link href="/dissertaciya-na-zakaz/doktorskaya"><a>докторскую</a></Link> диссертацию по любой тематике, связанной с юриспруденцией.
          </li>
          <li>
            <b>Оригинальность и актуальность</b><br/>
            Все работы пишутся с «нуля» и базируются на исследованиях в сфере современного права. Уникальность текста проверяется в онлайн-сервисах антиплагиата;
          </li>
          <li>
            <b>Комплексный подход</b><br/>
            Мы не только предлагаем помощь в написании диссертации, но и оказываем содействие в подготовке к защите, включая изготовление дополнительных материалов;
          </li>
        </ul>
      </section>

      <FormEstimate/>

      <section className="block-service">
        <Link href="/dissertaciya-na-zakaz/doktorskaya">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/mat-dlya-zash.jpg') + ")",}}>
            <div className="block-service__text gradient-l-black">
              <span className="block-service__title">Материалы для успешной защиты</span>
              <p className="block-service__par">Эффектная презентация</p>
              <p className="block-service__par">Быстро и качественно</p>
              <p className="block-service__par">С нами твоя защита пройдет легко!</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-4">
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Монография"
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Автореферат"
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Оригинальность текста до 98%"
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Получение по главам"
          />

        </div>
        <div className="block-service__list list-5">
          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Ответы к защите"
          />

          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Доклад Слайды"
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Аннотация Отзыв Рецензия"
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Плакаты к защите"
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Распечатка Переплеты"
          />

        </div>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dis-uri.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Почему мы – лучшие?
        </h2>
        <p className="block-text__par">
          Главный козырь BeSmarter! – наши авторы. Мы сотрудничаем с ведущими учеными, преподавателями вузов с научной степенью не ниже кандидатской. Это очень важно, поскольку юриспруденция является одной из наиболее «изменчивых» наук.
        </p>
        <p className="block-text__par">
          Чтобы написать хорошую диссертацию по праву, нужно тонко разбираться в хитросплетениях современного законодательства и умело применять его для решения задач. Кто может сделать это лучше, чем профессиональный юрист?
        </p>
        <p className="block-text__par">
          При этом, даже работая с лучшими кадрами, мы контролируем каждый этап выполнения заказа. Вы получаете личного менеджера, который следит за всеми нюансами и доступен для связи в любой момент.
        </p>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Воспользуйтесь нашими услугами, и сами поймете, почему мы – лучшие!
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость написания диссертации по юриспруденции?
        </h2>
        <p className="block-text__par">
          Конечно же, вас интересует, сколько стоит написать диссертацию по юриспруденции под заказ. Ориентировочные цены указаны в прайс-листе. Точную стоимость услуги мы озвучим после собеседования. Она будет зависеть от объективных факторов:
        </p>
        <ul>
          <li>
            фактического объема работы – чем больше страниц, тем выше стоимость диссертации по юриспруденции;
          </li>
          <li>
            сложности конкретной темы – желаете сэкономить, – проконсультируйтесь с нами при ее выборе;
          </li>
          <li>
            времени – если вам нужна диссертация срочно – за дополнительную плату мы ускорим ее написание, и наоборот, если оформите заказ заранее – мы напишем работу недорого.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как заказать диссертацию по юриспруденции?
        </h2>
        <p className="block-text__par">
          Все просто:
        </p>
        <ol>
          <li>
            Вы оформляете заявку на сайте, по телефону <br/>+7 (495) 772-4090 или при личной встрече в Москве (пер. Большой Кисловский, д. 1, стр. 2, оф. 211).
          </li>
          <li>
            Мы проводим с вами собеседование и составляем официальный договор, в котором прописываются все ваши требования и наши обязательства.
          </li>
          <li>
            Согласованный автор пишет диссертацию и поглавно сдает ее вам на проверку, вносит бесплатные правки и помогает подготовиться к защите.
          </li>
        </ol>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Попробуйте, и вы не пожалеете о сотрудничестве!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disser}/>
    </div>
  </Wrapper>
);


export default page
