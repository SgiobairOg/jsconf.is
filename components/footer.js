import React from 'react'
import classNames from 'classnames'
import { companies, sponsors } from '../data/sponsors'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const SponsorBox = ({ website, name, image }) => {
  const logoSrc = require(`../images/sponsors/${image}`)

  return (
    <a
      href={website}
      className="Sponsors-box"
      target="_blank"
      title={name}
      style={{ backgroundImage: `url(${logoSrc})` }}
    />
  )
}

SponsorBox.propTypes = {
  website: React.PropTypes.string,
  name: React.PropTypes.string,
  image: React.PropTypes.string,
  imagePadding: React.PropTypes.bool,
}

export default () => (
  <div>
    <section className="SponsorFooter">
      <div className="row align-center text-center">
        <div className="column medium-10 small-12">
          <h1>Sponsors</h1>
          {sponsors.map(level => (
            <div className={classNames('Sponsors', `Sponsors--${level.slug}`)} key={level.name}>
              <h2 className="Sponsors-heading">{level.name}</h2>
              {level.ids.map(id => companies[id]).map(sponsor =>
                <SponsorBox key={sponsor.name} {...sponsor} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <footer className="Footer">
      <p>JSConf Iceland welcomes everyone and defends you from harassment.{' '}</p>
      <div className="FooterLinks">
      <Link className="FooterLinks-link" to={prefixLink('/code-of-conduct/')}>Code of Conduct</Link>
        {' | '}
        <a href="http://eepurl.com/bO8F8X" className="FooterLinks-link">Mailing list</a>
        {' | '}
        <a href="https://jsconfis.typeform.com/to/FN7Bla" className="FooterLinks-link">Sponsor interest</a>
        {' | '}
        <a href="mailto:team@jsconf.is" className="FooterLinks-link">team@jsconf.is</a>
      </div>
      <div className="SocialLinks">
        <a href="https://github.com/jsis/jsconf.is" className="SocialLinks-link SocialLinks-github">Github</a>
        <a href="https://twitter.com/jsconfis" className="SocialLinks-link SocialLinks-twitter">Twitter</a>
      </div>
    </footer>
  </div>
)
