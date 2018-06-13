import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/disser'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'


const page = () => (
    <Wrapper title="Диссертация по философии на заказ в Москве и РФ – цены, сроки написания под ключ">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

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
                        <a>По философии</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Статьи</span>
                            <p>Написание и размещение</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                            <p>Строго по ГОСТу</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Апробация</span>
                            <p>Реальные эксперименты</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Прямая связь с автором</span>
                            <p>Постоянный контроль</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Публикации</span>
                            <p>Журналы ВАК и иностранные</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Обзор литературы</span>
                            <p>Свежие источники</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Материалы для успешной защиты</span>
                            <p className="block-service__par">Эффектная презентация</p>
                            <p className="block-service__par">Быстро и качественно</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Монография</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста до 98%</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                        </a>
                    </Link>
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад Слайды</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Плакаты к защите</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Диссертация по философии
                </h2>
                <p className="block-text__par">
                    В каких случаях обращаются к нам за помощью с написанием работы? Вы можете заказать диссертацию по философии в компании BeSmarter!, если не успеваете со сроками. Обычно приходится жертвовать либо учебой, либо работой, а распределить время между двумя этими занятиями не получается. В этом случае мы поможем собрать и структурировать материал так, что клиент успешно пройдет защиту. Чаще всего заказывают диссертацию, если:
                </p>
                <ul>
                    <li>
                        работа сделана, но не оформлена;
                    </li>
                    <li>
                        написана только вводная часть;
                    </li>
                    <li>
                        готовы к защите только отдельные части диссертации.
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    В чем преимущества написания на заказ?
                </h2>
                <p className="block-text__par">
                    Итак, вы можете заказать диссертацию по философии абсолютно анонимно, что гарантирует сохранность репутации. Есть и другие выгоды и преимущества:
                </p>
                <ul>
                    <li>
                        каждая работа пишется под ключ, а потому исключены инциденты с копированием чужой интеллектуальной собственности;
                    </li>
                    <li>
                        есть возможность написать как сразу всю работу целиком, так и работать по главам;
                    </li>
                    <li>
                        вы гарантированно получаете работу в срок и не переживаете из-за времени! Написание под заказ всегда сопровождается консультацией личного менеджера.
                    </li>
                </ul>
                <p className="block-text__par">
                    Почему лучше не покупать готовую работу? Если вы делаете заказ в BeSmarter!, то исследование пишется под ключ. Вы можете заказать диссертацию, дипломную, курсовую по философии без опасения, что вам продадут частично или полностью скопированный материал.
                </p>
                <p className="block-text__par">
                    Также заказ под ключ позволяет учитывать рекомендации, правки и требования научного руководителя. Естественно, полной степени соответствия его пожеланиям невозможно добиться, если покупать готовый материал.
                </p>
            </section>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на материалы для защиты
                </h2>
                <CallMeFormWithTimer timerDuration={155555}>
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит цена услуги
                </h2>
                <p className="block-text__par">
                    Стоимость зависит от сложности работы, а также объемов и сроков исполнения:
                </p>
                <ul>
                    <li>
                        Кандидатская работа обычно должна иметь 150 страниц. Цена услуги в этом случае – от 180 до 450 тыс. рублей.
                    </li>
                    <li>
                        Докторская диссертация стоит от 450 до 950 тыс. рублей (средний объем – 250 страниц).
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как можно сэкономить?
                </h2>
                <p className="block-text__par">
                    Воспользуйтесь этими советами, если вам критически важно не переплачивать:
                </p><ul>
                    <li>
                        можете написать часть сами, а часть поручить профессионалам;
                    </li>
                    <li>
                        заказ обойдется дешевле, если у вас уже есть план диссертации;
                    </li>
                    <li>
                        если вы обращаетесь в компанию BeSmarter! заранее, то не переплачиваете за срочность;
                    </li>
                    <li>
                        цена также определяется сложностью исследуемой тематики и предмета;
                    </li>
                    <li>
                        наличие обязательной практической части делает заказ дороже.
                    </li>
                </ul>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества с BeSmarter!
                </h2>
                <p className="block-text__par">
                    Вы заполняете форму заявки на сайте, указывая исходные данные. Все детали обсуждаются лично с менеджером компании, после чего подписывается договор на оказание услуг. Вы также можете просто позвонить по телефону +7 (495) 772-40-90 или +7 (495) 772-90-40, чтобы сэкономить время на заполнение онлайн-анкеты.
                </p>
                <p className="block-text__par">
                    Можно договориться как о выполнении всего заказа полностью, так и о написании частями.
                </p>
                <p className="block-text__par">
                    Лучше всего, конечно, сразу иметь на руках полностью готовый и оформленный по ГОСТ материал, ведь так вы всегда сможете ответить на вопросы научного руководителя.
                </p>
                <p className="block-text__par">
                    Если вас интересует заказ диссертации по философии, обращайтесь к нам – мы гарантированно поможем с выполнением всех заданий, а также сэкономим вам массу времени. Агентство BeSmarter! тщательно отбирает авторов, чтобы вы остались довольны.
                </p>
            </section>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
