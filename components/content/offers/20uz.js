import FormWithTimer from 'components/common/forms/WithTimer'

const Offer20uz = () => (
    <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
        <span  className="block-form-timer__title__h2" style={{lineHeight: "initial"}}>
            <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
            Успей получить скидку<br/> на пакет «Успешная Защита»
        </span>
        <FormWithTimer
            timerDuration={155555}
            formType="Скидка 20% на материалы"
            targetID="sale_20%"
        >
            <p style={{fontSize: '70%', margin: '15px 0'}}>при одновременном заказе вместе с работой</p>
        </FormWithTimer>
    </section>
);

export default Offer20uz