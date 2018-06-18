import Link from 'next/link';

import React, {Component} from 'react';

import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';

import ImageBlock from 'components/common/ImageBlock'
import Accordion from 'components/common/Accordion'
import OrderForm from 'components/common/OrderForm'
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider'

import formConfig from 'components/config/formConfig';
import reviewBlockConfig from 'components/config/reviewBlockConfig';
import links from 'components/config/linksBlockConfig';


import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'


const page = () => (
    <Wrapper title="Гарантия качества в компании BeSmarter!. Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/price">
                        <a>Гарантии</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Гарантии
                </h2>
                <p className="block-text__par">
                    Мы знаем, насколько важной для вашей карьеры может оказаться заказанная работа, и понимаем, что вам нужны гарантии нашей добросовестности и ответственности. Ведь «переделать» все в последний момент не получится! Поэтому мы хотим успокоить вас, перечислив 7 причин, благодаря которым можно чувствовать себя абсолютно уверенно.
                </p>
                <ul>
                    <li>
                        <b>Качество</b><br/>
                        Вашу работу будут писать действующие преподаватели вузов, кандидаты наук в соответствующей отрасли науки, имеющие огромный опыт в решении подобных задач. Кроме того, наш отдел контроля мониторит качество выполнения работы на каждом этапе.
                    </li>
                    <li>
                        <b>Оригинальность</b><br/>
                        Мы не берем за основу имеющиеся в Интернете научные труды. Каждый заказ выполняется с «нуля», включая при необходимости настоящие научные исследования. Уникальность текста проверяется во всех популярных онлайн-сервисах.
                    </li>
                    <li>
                        <b>Пунктуальность</b><br/>
                        Своевременность сдачи готовой работы, а также отдельных ее глав (в случае с диссертациями) гарантирует официальный договор, подписываемый на стадии предварительного собеседования. Даже сверхсрочный заказ будет сдан вовремя!
                    </li>
                    <li>
                        <b>Интерактивность</b><br/>
                        Мы на связи каждый день, без праздников и выходных. В любой момент мы выслушаем ваши пожелания, бесплатно внесем срочные правки и ответим на вопросы. Нам важно, чтобы результат в точности соответствовал вашим ожиданиям.
                    </li>
                    <li>
                        <b>Сопровождение</b><br/>
                        Наше сотрудничество не заканчивается днем сдачи готовой работы. Мы продолжим оказывать вам всестороннюю поддержку вплоть до момента успешной защиты. Сюда входит помощь в подготовке презентации, доклада, тренировка ответов и пр.
                    </li>
                    <li>
                        <b>Конфиденциальность</b><br/>
                        Мы осознаем, насколько важно для вашей будущей научной карьеры сохранить безукоризненную репутацию, поэтому детали нашего сотрудничества останутся строго между нами. Этот момент прописывается в официальном договоре.
                    </li>
                    <li>
                        <b>Опыт</b><br/>
                        Наконец, самая главная гарантия успешного сотрудничества с нашей компанией – это, конечно же, реальные результаты. За 10 лет работы мы написали тысячи научных трудов, и 97,65% из них были успешно защищены. Статистика говорит сама за себя!
                    </li>
                </ul>
                <p className="block-text__par">
                    Если вас удовлетворили наши гарантии, предлагаем воспользоваться услугами компании BeSmarter! прямо сейчас.
                </p>
                <p className="block-text__par">
                    Для этого свяжитесь с нами любым удобным для себя способом – заполнив <a href="#form">онлайн форму</a> на сайте, позвонив по телефону +7(495)772-4090 или +7(495)772-9040, или посетив <Link href="/contacts"><a>офис</a></Link> (Большой Кисловский переулок, д. 1 стр. 2, офис 211).
                </p>
            </section>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">От эссе до настоящей диссертации</span>
                            <p className="block-service__par">Уникальные авторские работы</p>
                            <p className="block-service__par">Сложные и срочные</p>
                            <p className="block-service__par">Технические и креативные</p>
                            <p className="block-service__par">На иностранных языках</p>
                        </div>
                    </a>
                </Link>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <ImageBlock imageSrc={require('static/images/block/g.jpg')}/>
            <OrderForm title="Заказать работу" formConfig={formConfig}/>
            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <LinksBlock links={links}/>

        </div>
    </Wrapper>
);

export default page