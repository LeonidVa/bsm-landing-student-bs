import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import kursovaya from 'components/config/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';


const page = () => (
    <Wrapper title="Заказать курсовую работу по деталям машин в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a>Курсовой проект</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>По деталям машин</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>



            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/i.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Курсовая работа</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 4 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-5">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Материалы для успешной защиты</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">Доступные цены</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Заказать курсовую работу по деталям машин
                </h2>
                <p className="block-text__par">
                    «Детали машин» – это одна из базовых дисциплин для студентов любых машиностроительных вузов. Процесс обучения подразумевает выполнение курсовых проектов как эффективного способа контроля знаний и умений.
                </p>
                <p className="block-text__par">
                    Важной особенностью данной работы является высокая степень индивидуализации. Из-за огромной номенклатуры деталей (в сложных машинах их тысячи) найти даже похожий курсач в Интернете практически невозможно.
                </p>
                <p className="block-text__par">
                    Если у вас не хватает навыков или времени, чтобы самостоятельно написать работу, выполнить расчеты или сделать чертеж, предлагаем воспользоваться услугами опытных экспертов компании BeSmarter! У нас вы сможете срочно и недорого заказать курсовой проект по деталям машин на выгодных условиях.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Наши преимущества
                </h2>
                <ul>
                    <li>
                        <b>Квалификация. </b>Написание курсового проекта будет поручено кандидату технических наук, действующему преподавателю данной дисциплины. Это гарантия правильности всех расчетов и грамотного оформления.
                    </li>
                    <li>
                        <b>Ответственность. </b>Все наши обязательства фиксируются в официальном договоре. Каждому клиенту присваивается индивидуальный куратор, который готов прийти на помощь в любой момент.
                    </li>
                    <li>
                        <b>Прозрачные цены. </b>Стоимость наших услуг определяется объективными критериями – сложность конкретной темы, требования к объему и уникальности текста, срочность и так далее.
                    </li>
                </ul>
                <p className="block-text__par">
                    Курсовые работы по деталям машин от BeSmarter! – это безупречное качество доступное каждому, убедитесь в этом сами!
                </p>
            </section>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
                </h2>
                <CallMeFormWithTimer timerDuration={155555}>
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Основные этапы сотрудничества
                </h2>
                <p className="block-text__par">
                    Чтобы воспользоваться нашими услугами, вам нужно заказать курсовой «Детали машин» одним из перечисленных ниже способов. После рассмотрения заявки мы проводим с вами собеседование, по итогам которого составляется официальный договор.
                </p>
                <p className="block-text__par">
                    Далее вы вносите 50% предоплаты, и согласованный с вами автор приступает к работе. Проект сдается вам на проверку в оговоренный срок. В случае необходимости вносятся бесплатные корректировки. Затем исполнитель помогает вам подготовиться к защите.
                </p>
                <p className="block-text__par">
                    Узнать более подробно о том, как мы работаем, и какие преимущества вы получите при сотрудничестве с нами, можно у менеджеров компании.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как заказать курсовой проект по деталям машин?
                </h2>
                <p className="block-text__par">
                    Доступны три варианта связи:
                </p>
                <ul>
                    <li>
                        на сайте – нужно оформить <b><a href="#form">онлайн заявку</a></b> и дождаться ответа;
                    </li>
                    <li>
                        по телефону – позвоните нам по номеру 8 (495) 772-40-90;
                    </li>
                    <li>
                        в Москве – приходите <Link href="/contacts"><b><a>к нам</a></b></Link> по адресу: пер. Большой Кисловский, дом 1, стр. 2, оф. 211.
                    </li>
                </ul>
                <p className="block-text__par">
                    Сделайте заказ прямо сейчас и избавьте себя от лишних проблем!
                </p>
            </section>

            <Video>
                <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
            </Video>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={kursovaya}/>
        </div>
    </Wrapper>
);


export default page