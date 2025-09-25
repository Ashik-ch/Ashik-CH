import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { network, project, skill, data, aboutMe, } from '../data';
import { ThemeService } from 'src/app/theme.service';
import { CommonModule, Location } from '@angular/common';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
import { NgxGalaxyComponent } from '@omnedia/ngx-galaxy';
import { NgxParticlesComponent } from '@omnedia/ngx-particles';


@Component({
  selector: 'app-mainpart',
  templateUrl: './mainpart.component.html',
  styleUrls: ['./mainpart.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavComponent,
    NgxGalaxyComponent,
    NgxParticlesComponent
  ]
})
export class MainpartComponent implements OnInit {


  icons = network;
  project = project
  skill = skill
  data = data;
  aboutMe = aboutMe;

  showProgressBar: any;
  openDiv = 'Home';
  currentTheme: 'dark' | 'light';
  newTheme: 'dark' | 'light';

  constructor(private router: Router,
    private themeService: ThemeService,
    private location: Location,
    private route: ActivatedRoute) {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
  }

  ngOnInit(): void {
    this.previousPage()
  }

  /**
   * @description values of .....
   * @param val 
   */
  showDiv(val: string) {
    this.openDiv = val;
    this.router.navigate([], {
      queryParams: { section: val },
      queryParamsHandling: 'merge'
    })
  }

  /**
   * @description for navigation previous page
   */
  previousPage() {
    this.location.subscribe((event) => {
      const sectionParam = new URLSearchParams(event.url).get('section');
      this.openDiv = sectionParam || '';
    });
    this.openDiv = this.route.snapshot.queryParamMap.get('section') || 'Home';
  }

  /**
  * @description for Toggle the light-dark mode
  */
  toggleTheme() {
    this.themeService.setTheme(this.newTheme);
    this.currentTheme = this.newTheme;
    this.newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
  }


  contact(val: string) {
    this.openDiv = val;
    this.router.navigate([], {
      queryParams: { section: val },
      queryParamsHandling: 'merge'
    })
  }

  whatsApp() {
    const phoneNumber = '+919645937117';
    const message = encodeURIComponent('Hello, I would like to get in touch with you!');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  form = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    const serviceID = 'service_a9t2ys5';
    const templateID = 'template_y6g8cri';
    const publicKey = '_kYaHnjxPJr6gwFdT';

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      message: this.form.message,
      to_name: 'Ashik CH'
    };
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message sent!');
        this.form = { name: '', email: '', message: '' };
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message.');
      });
  }

  selectedProject: any = null; // 👈 add this

  openPopup(p: any) {
    this.selectedProject = p;
  }

  closePopup() {
    this.selectedProject = null;
  }

}
