import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

/** @description available as a service throughout the entire application  */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private readonly darkModeKey = 'darkMode';      //for storing in localStorage

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null)
  }

  /**
   * @description Setting Theme by removing and adding either dark or light class and storing localStorage
   * @param mode 
   */
  public setTheme(mode: 'dark' | 'light'): void {
    this.renderer.removeClass(document.body, mode === 'dark' ? 'light-mode' : 'dark-mode');
    this.renderer.addClass(document.body, mode === 'dark' ? 'dark-mode' : 'light-mode');
    localStorage.setItem(this.darkModeKey, mode);
  }

  /**
   * @description Getting Theme either dark or light from localStorage
   * @returns 
   */
  public getCurrentTheme(): 'dark' | 'light' {
    const savedMode = localStorage.getItem(this.darkModeKey);
    return savedMode === 'dark' ? 'dark' : 'light';
  }

}
