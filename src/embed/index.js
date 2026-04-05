import { Elena, html } from "@elenajs/core";
import styles from "./styles.css" with { type: "css" };
import meta from "../data/meta.json" with { type: "json" };
import members from "../data/members.json" with { type: "json" };

/**
 * Design Systems Webring
 *
 * @displayName Design Systems Webring
 * @status stable
 */
export default class DesignSystemsWebring extends Elena(HTMLElement) {
  static tagName = "design-systems-webring";
  static shadow = "open";
  static styles = styles;
  static props = ["url", "ringtitle", "image", "membercount"];

  /**
   * Base URL of the webring.
   *
   * @property
   * @type {string}
   */
  url = meta.url;

  /**
   * Title of the webring.
   *
   * @property
   * @type {string}
   */
  ringtitle = meta.title;

  /**
   * Filename of the webring image.
   *
   * @property
   * @type {string}
   */
  image = meta.image;

  /**
   * Member count of the webring.
   *
   * @property
   * @type {string}
   */
  membercount = String(members.length);

  /**
   * Renders the template.
   *
   * @internal
   */
  render() {
    return html`
      <div class="webring-banner">
        <div class="webring-banner__header">
          <img class="webring-banner__image" src="${this.url}/assets/images/${this.image}" alt="" />
          <div class="webring-banner__description">
            <span>This site is part of</span>
            <h3 class="webring-banner__title">
              <a href="${this.url}">${this.ringtitle}</a>
            </h3>
            <span>A webring with ${this.membercount} Members</span>
          </div>
          <a class="webring-banner__info" href="https://en.wikipedia.org/wiki/Webring" title="What's this?">?</a>
        </div>
        <p class="webring-banner__links">
          <a href="${this.url}/prev" rel="external" referrerpolicy="strict-origin" class="webring-banner__link webring-banner__link--prev" aria-label="Go to previous site">⬅️ Previous</a>
          <a href="${this.url}/random" rel="external" referrerpolicy="strict-origin" class="webring-banner__link webring-banner__link--random" aria-label="Go to a random site">😎 Random</a>
          <a href="${this.url}/next" rel="external" referrerpolicy="strict-origin" class="webring-banner__link webring-banner__link--next" aria-label="Go to next site">Next ➡️</a>
        </p>
      </div>
    `;
  }
}

/**
 * Register the web component
 */
DesignSystemsWebring.define();
