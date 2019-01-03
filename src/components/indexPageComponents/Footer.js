import React from 'react'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import france from '../../assets/france.svg'
import algeria from '../../assets/algeria.svg'

import './footer.sass'

export class Footer extends React.Component {
  state = {
    isFooterOpen: false,
  }
  showFooter = () => {
    this.setState(
      state => ({ isFooterOpen: !state.isFooterOpen }),
      () => {
        window.scrollTo(0, document.body.scrollHeight)
      }
    )
  }
  render() {
    const { isFooterOpen } = this.state
    return (
      <div className="footer">
        <div
          className={
            isFooterOpen
              ? 'footer__haveAQuestion is-open'
              : 'footer__haveAQuestion is-closed'
          }
        >
          Vous avez une question ? Visitez notre FAQ
        </div>
        <div className="footer__toggle">
          <div
            className={
              isFooterOpen
                ? 'footer__toggle__moreInfos is-open'
                : 'footer__toggle__moreInfos is-closed'
            }
            onClick={this.showFooter}
          >
            Plus d'infos
          </div>
          <div
            className="footer__toggle__virLayOverAfter"
            onClick={this.showFooter}
          />
        </div>
        <div
          className={
            isFooterOpen ? 'footer__wrapper' : 'footer__wrapper is-closed'
          }
        >
          <div className="footer__logoAndFrenchFlag">
            <div className="footer__logoAndFrenchFlag__logo">
              Le Souk De Maissa
            </div>
            <div className="footer__logoAndFrenchFlag__flags">
              <img src={algeria} alt="Drapeau d'Algerie" />
              <img src={france} alt="Drapeau de France" />
            </div>
          </div>

          <div className="footer__theService">
            <h5>The Service</h5>
            <ul>
              <li>Gift Cards</li>
              <li>iPhone App</li>
              <li>Plus Sizes</li>
              <li>Maternity</li>
              <li>Petite</li>
              <li>Kids</li>
              <li>Premium Brands</li>
              <li>Style Guide</li>
            </ul>
          </div>
          <div className="footer__theCompany">
            <h5>The Company</h5>
            <ul>
              <li>About Us</li>
              <li>Press</li>
              <li>Investor Relation</li>
              <li>Influencer Program</li>
              <li>Careers</li>
              <li>Tech Blog</li>
            </ul>
          </div>
          <div className="footer__haveAQuestion">
            <h5>Have A Question</h5>
            <ul>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer__followUs">
            <h5>Follow Us</h5>
            <ul>
              <li className="footer__followUs__facebook">
                <img src={facebook} alt="suivez nous sur facebook" />
              </li>
              <li>
                <img src={instagram} alt="suivez nous sur instagram" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
