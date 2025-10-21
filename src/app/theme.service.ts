import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

/** @description available as a service throughout the entire application  */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private readonly themeKey = 'theme';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public setTheme(mode: 'dark' | 'light'): void {
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.removeClass(document.body, 'light-mode');
    this.renderer.addClass(document.body, mode === 'dark' ? 'dark-mode' : 'light-mode');
    localStorage.setItem(this.themeKey, mode);
  }

  /**
   * @description Getting Theme either dark or light from localStorage
   * @returns 
   */
  public getCurrentTheme(): 'dark' | 'light' {
    const savedMode = localStorage.getItem(this.themeKey);
    return savedMode ? (savedMode as 'dark' | 'light') : 'dark';
  }
}
