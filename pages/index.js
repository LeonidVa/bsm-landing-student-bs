import React, {Component} from 'react'
import Link from "next/link";
import Wrapper from 'components/Wrapper';
import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from "components/common/MessBlock/index.js";
import ProfitsBlockSlider from "components/common/ProfitsBlockSlider";
import Form from "components/common/forms/Big";
import ServiceBlock from "components/common/ServiceBlock";
import MapBlock from 'components/common/MapBlock';
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"
import schemaSrc from 'static/images/contacts/how-to-go.jpg';
import Address from 'components/contacts/Address'
import FormsData from 'data/form/main';
import  {
  HeaderLi,
  HeaderUl,
  HeaderNavA,
  } from '/components/Header/style.js';
import PageWrapper from 'components/common/PageWrapper/index.js';
import TextBlock from 'components/common/TextBlock/index.js';
import InfoBlock from "components/common/InfoBlock/index.js";


/**/
class page extends Component {
  render() {
    return (
      <Wrapper
        title="BeSmarter!"
        description="Написание диплома на заказ! Быстрая, недорогая и профессиональная помощь в подготовке дипломной работы – компания BeSmarter. Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40."
        showHamburger={false}
        headerNavButtons={
          <HeaderUl>
            <HeaderLi>
              <Link href="#about">
                <HeaderNavA>О нас</HeaderNavA>
              </Link>
            </HeaderLi>
            <HeaderLi>
              <Link href="#contacts">
                <HeaderNavA>Контакты</HeaderNavA>
              </Link>
            </HeaderLi>
          </HeaderUl>
        }
        footerNavButtons=""
      >
        <PageWrapper className="bg bg-c2 bg-img bg-img3">

          <BlockNav>
            <NavRow
              url="#form"
              scroll={true}
              title="Оформить заявку"
              description="Получить консультацию"
            />
            <NavRow
              url="#contacts"
              scroll={true}
              title="Контакты"
              description="Адрес, телефон и время работы"
            />
          </BlockNav>
 <MessBlock/>

          <ServiceBlock
            color="#333333"
            url="#pricing"
            image={require('static/images/block/j.jpg')}
            gradient="rgba(199, 212, 229, 0.95), rgba(199, 212, 229, 0.7)"
            title="BeSmarter!"
            text={<div>
              <p>Профессиональный сервис<br/>для студентов</p>
              <p>Быстро и качественно!</p>
              <p>С нами твоя учеба <br/>пройдет легко!</p>
                <p>Срочно от 2 часов</p>
            </div>}
            cards={[
              [
                {
                  title: "Уникальность",
                  text: [<p>в разных системах</p>],
                  description: "Прежде, чем сдать текст на оценку твоему научному руководителю, проведи проверку на уникальность в различных системах. Будь уверен в уникальности твоей работы!"
                },
                {
                  title: "Найди нужного преподавателя",
                  text: [],
                  description: "Нужно переписать текст и не потерять смысл? Задача не из простых! Мы научим тебя, как честно сделать твой текст уникальным. Используем для проверки различные сервисы."
                },
                {
                  title: "Подготовка к публикации",
                  text: [<p>и выбор издательства</p>],
                  description: "Статья написана. Пора в издательство. Но как? Куда? Мы знаем, как и куда. Ответим на все твои вопросы и поможем выбрать издательство."
                },
                {
                  title: "Выбор материала",
                  text: [<p>и обоснование</p>],
                  description: "Сейчас имеется легкий доступ к любым материалам. На чем остановить свой выбор? Чему отдать предпочтение? Мы научим тебя, как сделать верный выбор нужного материала."
                },
              ], [
                {
                  title: "Информационное сопровождение",
                  text: [<p>соблюдение требований</p>],
                  description: "Научим тебя добавлять и правильно оформлять рисунки, графики, таблицы и диаграммы для наглядности материала."
                },
                {
                  title: "Онлайн-консультации",
                  text: [<p>по учебе, сдаче и защите</p>],
                  description: "Когда возникли вопросы по учебе и не знаешь кому их задать, задай их нам! Наш консультант подробно и понятно ответит тебе."
                },
                {
                  title: "Подготовка к защите",
                  text: [<p>с репетицией</p>],
                  description: "Мы подготовили для тебя развернутую консультацию: расскажем, как вести себя перед комиссией, как отвечать на их вопросы. Уделим внимание проработке твоих материалов для защиты."
                },
                {
                  title: "Переплет",
                  text: [<p>широкий выбор</p>],
                  description: "Итоговая работа нуждается в красивом оформлении, которое придаст ей аккуратный вид. Мы посоветуем тебе лучшую обложку."
                },
                {
                  title: "Договор по практике",
                  text: [<p>важные детали</p>],
                  description: "Часто заполнение договора по практике составляет сложность для студента. Наш консультант окажет помощь при заполнении договора на практику и ответит на все вопросы по прохождению и оформлению."
                },
              ],
            ]}
          />

          <Form
            formType="Получить доступ к услугам"
            targetID="order"
            title="Узнай стоимость прямо сейчас"
            redForm={true}
            buttonLabel="Отправить"
            fields={[
              {label: 'Имя', name: "name", type: 'text', placeholder: 'Ваше имя', required: true},
              {label: 'Телефон', name: "phone", type: 'text', placeholder: 'Ваш телефон', required: true},
              {label: 'Почта', name: "email", type: 'email', placeholder: 'email', required: true},
              {label: 'Предмет', name: "discipline", type: 'text', placeholder: 'Предмет или дисциплина', required: false},
              {label: 'Комментарии', name: "comment", type: 'textarea', placeholder: 'Ваши комментарии', required: false},
            ]}
          />

          <TextBlock>
            <h1 className="title">
                Помощь студентам
            </h1>
            <p className="par">
                Наш сервис направлен на качественное консультирование студентов по вопросам учебы и защиты.
            </p>

            <p className="par">
                Мы начинаем оказывать помощь с первых минут твоего обращения.
            </p>

              <p className="par">
                  Как только  мы получаем твою заявку, наш менеджер-консультант просчитывает оптимальные варианты решения поставленных задач.
              </p>

              <p className="par">
                  После согласования задания мы заключаем договор и наш эксперт-преподаватель приступает к работе.
              </p>
          </TextBlock>

            <TextBlock>
                <h1 className="title">
                    Какие мы даем гарантии
                </h1>
                <ul>
                    <li>
                        <b>Качество.</b> Итогом твоего обращения к нам станет качественно предоставленная подробная  и понятная консультация по твоим учебным вопросам.
                    </li>

                    <li>
                        <b>Уникальность.</b> Каждый  ответ на вопрос разрабатывается и предоставляется индивидуально для тебя.
                    </li>

                    <li>
                        <b>Оперативность.</b> Мы понимаем, как ты спешишь, поэтому наш менеджер-консультант всегда на связи с тобой по телефону, в офисе и по другим сервисам связи.
                    </li>

                    <li>
                        <b>Конфиденциальность.</b> Мы никому не раскрываем твои контактные и персональные данные, сохраняя столь важную в современном мире анонимность.
                    </li>
                </ul>
            </TextBlock>

            <InfoBlock infoBlockConfig={[
                {icon: require("static/images/info/1.svg"), title: 'Стоимость консультации', desc: 'Индивидуально по запросу' },
                {icon: require("static/images/info/2.svg"), title: 'Срок выполнения', desc: 'От 2 часов' },
                {icon: require("static/images/info/3.svg"), title: 'Гарантии', desc: 'Сделаем все, о чем договорились'},
                {icon: require("static/images/info/4.svg"), title: 'Договор', desc: 'Внесение дополнений и пожеланий'},
                {icon: require("static/images/info/5.svg"), title: 'Материалы для защиты', desc: 'Полный комплект для успешной защиты'},
                {icon: require("static/images/info/6.svg"), title: 'Эксперт-преподаватель', desc: 'Проверенный специалист с опытом' },
                {icon: require("static/images/info/7.svg"), title: 'Уникальность', desc: 'Проверка в разных системах' },
                {icon: require("static/images/info/8.svg"), title: 'Язык', desc: 'Русский, английский, французский, немецкий, и др.' },
            ]}/>

          <a name="about" style={{position: "absolute", marginTop: "-2em"}}/>
          <ProfitsBlockSlider profitBlockConfig={[
            {
              imageSrc: require('static/images/slide-profits/1.svg'),
              title: "Наша команда",
              description: "Опытные менеджеры помогут разобраться с твоим вопросом",
            },
            {
              imageSrc: require('static/images/slide-profits/2.svg'),
              title: "Конфиденциальность",
              description: "Мы никому не раскрываем твои контактные данные, сохраняя анонимность",
            },
            {
              imageSrc: require('static/images/slide-profits/3.svg'),
              title: "Опыт работы",
              description: "Мы успешно помогаем в вопросах учебы студентам уже более десяти лет",
            },
            {
              imageSrc: require('static/images/slide-profits/4.svg'),
              title: "Личный консультант",
              description: "Максимально быстро и точно ответит на твои вопросы. Работа станет понятной и красивой",
            },
            {
              imageSrc: require('static/images/slide-profits/5.svg'),
              title: "Сервисы",
              description: "Мы постоянно обновляем нашу базу используемых сервисов, следя за развитием и изменением технологий",
            },
            {
              imageSrc: require('static/images/slide-profits/6.svg'),
              title: "Профессионализм",
              description: "Те, кому мы помогли, становятся нашими постоянными клиентами",
            },
          ]}/>

          <ServiceBlock
            color="#333333"
            url="#contacts"
            image={require('static/images/block/7.jpg')}
            gradient="rgba(199, 212, 229, 0.95), rgba(199, 212, 229, 0.7)"
            title="Консультации"
            text={<div>
                <p>по любым типам работ!</p>
              <p>От поступления до защиты</p>
              <p>От 3 000 рублей</p>
              <p>Срочно от 2 часов</p>

            </div>}
          />

          <Form
            isFull
            formType="Получить доступ к услугам"
            targetID="order"
            title="Заказать помощь"
            redForm={true}
            buttonLabel="Отправить"
            fields={FormsData}
          />

            <TextBlock>
                <h2 className="title">
                    5 причин для заказа в BeSmarter!
                </h2>
                <ul>
                    <li>
                        <b>Компетентность.</b> В BeSmarter! ты  получишь подготовку  работы любой сложности
                        с преподавателем московского или другого российского ВУЗа.
                    </li>
                    <li>
                        <b>Оперативность.</b> Возможна срочная консультация от 2-х часов. Такая оперативность
                        достигается благодаря использованию фирменного подхода, созданного в нашей компании.
                        Вы можете не тратить время на сбор материалов, разработку плана и так далее, а сделать заказ и спокойно заниматься своими делами.
                    </li>
                    <li>
                        <b>Универсальность.</b> Мы на одинаково высоком уровне консультируем по проектам
                        любых специальностей – экономических, технических, юридических и т. д. Сложность вопроса не играет роли – проблематика будет выявлена, глубоко раскрыта и проработана.
                    </li>
                    <li>
                        <b>Доступная цена.</b> Команда BeSmarter! понимает сложность жизненных ситуаций клиентов, поэтому стоимость услуг у нас невысока.
                    </li>
                    <li>
                        <b>Удобный офис.</b> Для твоего удобства наш офис расположен в Центре Москвы, в пешей доступности от 4-х линий метро.
                        Мы работаем без выходных и праздников. Приходи в любое удобное для тебя время с  вопросом любой сложности.
                    </li>
                </ul>
            </TextBlock>

            <TextBlock>
                <h2 className="title">
                    Этапы сотрудничества
                </h2>
                <ul className="fitted">
                    <li>
                        Согласование задания. Прием всех необходимых материалов.
                    </li>
                    <li>
                        Подписание договора в офисе или онлайн.
                    </li>
                    <li>
                        Процесс работы начинается после утверждения тобой плана.
                    </li>
                    <li>
                        Точно в указанный срок ты получаешь полную консультацию.
                    </li>
                    <li>
                        Все правки и дополнения вносятся до успешной сдачи.
                    </li>

                </ul>
                <p className="par">
                    Оформите заказ на нашем сайте прямо сейчас и будьте спокойны за свою учебу!
                </p>
            </TextBlock>

            <ServiceBlock
                color="#333333"
                url="#contacts"
                image={require('static/images/block/g.jpg')}
                gradient="rgba(199, 212, 229, 0.95), rgba(199, 212, 229, 0.7)"
                title="Удобный офис в центре"
                text={<div>
                    <p>Всегда на связи 9:00 - 22:00</p>
                    <p>Работаем в выходные и праздники</p>
                    <p>4 линии метро</p>
                    <p>Всего 5 минут пешком от метро</p>
                </div>}
            />

          <a name="contacts" style={{position: "absolute", marginTop: "-2em"}}/>
          <div itemScope itemType="http://schema.org/Organization">
            <TextBlock>
              <h2 itemProp="name" className="title">Офис</h2>
              <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <p className="subtitle subtitle-orange__micro">
                  <span itemProp="addressLocality">Москва, </span>
                  <span itemProp="streetAddress">Большой Кисловский переулок {"\n"}д. 1, стр. 2, офис 211</span>
                </p>
              </div>
              <p className="par">
                Понедельник - пятница <span className="bold">с 09:00 до 19:30</span><br/>
                Суббота - Воскресенье <span className="bold">с 10:00 до 18:30</span><br/>
              </p>
              <p className="par finish-text">
                Приходите – мы ждём Вас!
              </p>

              <h2 className="title">
                Телефон
              </h2>
              <p className="subtitle subtitle-orange">
                <span itemProp="telephone" className="phone">+7 (495) 772-40-90</span><br/>
                <span itemProp="telephone" className="phone">+7 (495) 772-90-40</span>
              </p>
              <p className="par">
                Понедельник - пятница <span className="bold">с 09:00 до 23:00</span><br/>
                Суббота - воскресенье <span className="bold">с 09:00 до 22:00</span>
              </p>
              <p className="par finish-text">
                Звоните – будем рады поговорить!
              </p>
              <h2 className="title">
                Почта
              </h2>
              <p itemProp="email" className="subtitle subtitle-orange">
                <a href="mailto:zakaz@besmarter.ru?subject=Новая заявка" onClick={() => {
                  stat.triggerTarget.emailClicked();
                  return true;
                }} style={{color: "#f4511e"}}>zakaz@besmarter.ru</a>
              </p>
              <p className="par">
                Возникли вопросы?
              </p>
              <p className="par finish-text">
                Пишите – ответим!
              </p>
              <div className="block-callask__buttons">
                <ToggleQuestionPopup targetID="question_contacts"><a className="block-callask__button">Задать вопрос</a></ToggleQuestionPopup>
                <ToggleCallPopup targetID="call_me_contacts"><a className="block-callask__button">Заказать звонок</a></ToggleCallPopup>
              </div>
            </TextBlock>
          </div>



          <MapBlock/>
          <TextBlock>
            <h2 className="title">
              Как пройти
            </h2>
            <Address
              handleMaps={this.handleMaps}
              metro="м. Арбатская"
              schema={schemaSrc}
              time="5 минут"
              distance="420 метров"
            >
              <p className="par">
                Выход к кинотеатру «Художественный».
              </p>
              <p className="par">
                Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
              </p>
              <p className="par">
                На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
              </p>
              <p className="par">
                Мимо охраны на второй этаж направо.
                Комната 211 с лисенком - это уже мы.
              </p>
              <p className="par">Рады видеть Вас!</p>

            </Address>
            <Address
              handleMaps={this.handleMaps}
              metro="м. Александровский сад"
              schema={schemaSrc}
              time="5 минут"
              distance="420 метров"
            >

              <p className="par">Выход на ул. Воздвиженка.
              </p>
              <p className="par">Из метро налево по ул. Воздвиженка в подземный переход напротив «Детского мира».
                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
              </p>
              <p className="par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
              </p>
              <p className="par">Мимо охраны на второй этаж направо.
                Комната 211 с лисенком - это уже мы.
              </p>
              <p className="par">Рады видеть Вас!
              </p>
            </Address>
            <Address
              handleMaps={this.handleMaps}
              metro="м. Библиотека им. Ленина"
              schema={schemaSrc}
              time="5 минут"
              distance="420 метров"
            >

              <p className="par">Идём по указателям «Выход в город на ул. Воздвиженка».

              </p>
              <p className="par">Из стеклянных дверей метро по подземному переходу вперед до упора и наверх.
                Вы на Воздвиженке: сзади Кремль, слева Библиотека, впереди «Детский мир».
                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
              </p>
              <p className="par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
              </p>
              <p className="par">Мимо охраны на второй этаж направо.
                Комната 211 с лисенком - это уже мы.
              </p>
              <p className="par">Рады видеть Вас!
              </p>
            </Address>
            <Address
              handleMaps={this.handleMaps}
              metro="м. Боровицкая"
              schema={schemaSrc}
              time="8 минут"
              distance="690 метров"
            >

              <p className="par">В метро переходим на станцию Арбатская.
                Выход к кинотеатру «Художественный»
              </p>
              <p className="par">Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
              </p>
              <p className="par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
              </p>
              <p className="par">Мимо охраны на второй этаж направо.
                Комната 211 с лисенком - это уже мы.
              </p>
              <p className="par">Рады видеть Вас!
              </p>
            </Address>
          </TextBlock>

        </PageWrapper>
      </Wrapper>
    )
  }
}

export default page;
