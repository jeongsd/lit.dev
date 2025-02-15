/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {addModsParameterToUrlIfNeeded} from '../mods.js';

/**
 * Jumps between different versions of the Lit docs.
 */
@customElement('litdev-version-selector')
export class LitDevVersionSelector extends LitElement {
  override render() {
    return html`<slot @change=${this._onSelect}></slot>`;
  }

  private _onSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    const path = select.item(select.selectedIndex)?.dataset['path'];
    if (path) {
      document.location.href = addModsParameterToUrlIfNeeded(path);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litdev-version-selector': LitDevVersionSelector;
  }
}
