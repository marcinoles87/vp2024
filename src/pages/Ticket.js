import React from 'react'

import ticket from '../img/ticket.jpg'

function Ticket() {
  return (
    <div className='ticket-container'>
        <div className='ticket-header'>
            <div className='ticket-img'>
                <img src={ticket} alt='ticket'></img>
            </div>
            <div className='ticket-info'>
                <h1>MUSEUM , MOVIE , ATRACTION ?</h1>
                <h2>ALL FOR YOU</h2>
                Oto cztery punkty dotyczące sprzedaży biletów do muzeum, atrakcji, kina i zabaw:

<p>1. **Różnorodność ofert**: Bilety do muzeów, parków rozrywki i kin często są dostępne w różnych wariantach, takich jak bilety standardowe, rodzinne czy grupowe. To pozwala klientom na wybór najbardziej odpowiedniej opcji, dostosowanej do ich potrzeb i liczby osób.</p>

<p>2. **Zakupy online**: Coraz więcej instytucji kultury i rozrywki oferuje możliwość zakupu biletów online, co znacznie ułatwia proces rezerwacji. Klienci mogą uniknąć kolejek, a dzięki dostępnym zniżkom i promocjom często zaoszczędzić na zakupach.</p>

<p>3. **Promocje i rabaty**: Wielu operatorów atrakcji organizuje różnorodne promocje, takie jak dni tematyczne, zniżki dla studentów, seniorów oraz oferty specjalne w określonych dniach tygodnia. Dzięki temu zwiedzanie muzeów, kino czy korzystanie z atrakcji staje się bardziej dostępne dla szerokiego grona odbiorców.</p>

<p>4. **Wydarzenia specjalne**: Bilety na wydarzenia specjalne, takie jak wystawy czasowe w muzeach, premiery filmowe czy organizowane festyny, przyciągają dodatkowych gości. Przedsiębiorstwa często promują te wydarzenia poprzez kampanie marketingowe, co zwiększa zainteresowanie i uczestnictwo w danej atrakcji.</p>

            </div>
        </div>

    </div>
  )
}

export default Ticket