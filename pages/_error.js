import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper/index.js';
import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock/index.js';
import OrderForm from 'components/common/forms/Big/Order';
import FormWithTimer from 'components/common/forms/WithTimer';
import Title from 'components/common/Title/index.js'
import telega from 'utils/telega';
import styled from 'styled-components'
// Script errors occuring during initial client render can cause the server-rendered
// content to be hidden by an error page. Track router events to determine if the
// error being handled happened during initial render, and throw within
// getInitialProps to allow the server-rendered content to remain visible.

const BlockFormTimer = styled.section`
  font-size: 2em;
  width: 30.94em;
  max-width: 100%;
  margin: 1.56em auto 0;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: right top;
  padding: 3.56em 2.688em 3.25em;
  color: #ffffff;
  @media (max-width: 900px) {
    width: 100%;
    background-position-x: 85%;
  }
  @media (max-width: 660px) {
    font-size: 1.375em;
    padding: 1em 0.75em 1.56em;
    background-position-x: 72%;
  }
`;

const BlockFormTimerTitle = styled.h2`
  font-size: 1em;
  margin-bottom: .56em;
`;

const BlockFormP = styled.p`
  font-size: .688em;
  line-height: normal;
  width: 100%;
`;

const Breadcrumbs = styled.section`
  font-size: 2em;
  position: relative;
  z-index: 1;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 17em;
  @media (max-width: 900px) {
    width: 70%;
    min-width: 273px;
    max-width: none;
  }
  @media (max-width: 660px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const Span = styled.span`
  font-size: .5em;
  color: #333333;
  text-decoration: none;
`;

const A = styled.a`
  font-size: .5em;
  color: #333333;
  text-decoration: none;
`;

const isClient = typeof window !== 'undefined';
let isInitialClientRender = isClient;
if (isClient) {
  if (Router.ready !== undefined
    && Router.ready !== null
    && Router.router !== undefined
    && Router.router !== null
    && Router.router.once !== undefined
    && Router.router.once !== null
  ) {
    Router.ready(() => {
      Router.router.once('routeChangeStart', () => {
        isInitialClientRender = false;
      });
    });
  }
}

function getIP(req) {
  if (typeof req === "undefined"
    || req === null
    || req.connection === undefined
    || req.connection === null
    || req.connection.remoteAddress === undefined
    || req.connection.remoteAddress === null
  ) {
    return false;
  }
  return req.connection.remoteAddress;
}

export default class Error extends React.Component {
  static getInitialProps({err, res, xhr, req}) {

    /*   console.log('req.headers');
       const {headers =[]}=req;
       console.log(headers);*/
    ////////////

    const statusCode = (res && res.statusCode) || (xhr && xhr.status) || null;
    const url = (req && req.url) || null;
    /* check if redirect is required and if yes - do it and exit */

    if (isInitialClientRender) {
      telega('Error rendering on page ' + url + '```' + err.message + '``` and ```' + err.toString() + '```');
      // rethrow to prevent the error view from displaying on initial client render
      throw err;
    }
    const ip = getIP(req);
    if (!isClient) {
      if (ip === "::1"
        || ip === "::ffff:127.0.0.1") {
      } else {
        const {connection = null} = req;
        if (connection !== null) {
          const {remoteAddress = 'unknown'} = connection;
          telega('Error ' + statusCode + ' on page ' + url + ' ip ' + remoteAddress);
        }
      }
    }
    return {statusCode, url};
  }

  render() {
    const {statusCode} = this.props;
    return (
      <Wrapper title="Главная">
        <PageWrapper className="bg bg-c2 bg-img bg-img4">
          <Breadcrumbs className="breadcrumbs">
            <Inner className="inner">
              <Link href="/">
                <A>Главная</A>
              </Link>
              <Span> / </Span>
              <A>Страница не найдена</A>
            </Inner>
          </Breadcrumbs>
          <Title>Не найдена страница? Попробуй другую</Title>
          <BlockNav>
            <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            <NavRow url='/price' title="Услуги и цены" description="Все для твоей учебы"/>
            <NavRow url='/contacts' title="Контакты" description="Узнай, где нас найти"/>
          </BlockNav>
          <MessBlock/>
          <BlockFormTimer className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
            <BlockFormTimerTitle className="block-form-timer__title">
              <span style={{fontSize: "5em", marginTop: "-3em"}}>{statusCode}</span><br/>
              Не работает сайт? Работает телефон!
            </BlockFormTimerTitle>
            <FormWithTimer timerDuration={0}>
              <BlockFormP>Звони нам, мы на связи!<br/><br/><a href="tel:+79257724090">+7 925 772 4090</a></BlockFormP>
            </FormWithTimer>
          </BlockFormTimer>
          <a name="form" id="form"/>
          <OrderForm />
        </PageWrapper>
      </Wrapper>
    )
  }
}