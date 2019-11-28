import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AppService } from './app.service';
import { NavigationEnd, Router } from '@angular/router';

interface Definition {
  title: string;
  description: string;
  donwloadLink?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private contentStream: string[] = [
    'Conversations',
    'FAQs',
    'Lead Generation',
    'Customer Support'
  ];

  title = this.contentStream[0];

  features: Definition[] = [
    {
      title: 'Faster data sharing',
      description: 'Easy location-sharing by simply placing a pin on your current position and file upload media files, docs, excel sheets, CSV files, etc.'
    },
    {
      title: 'Easy deployment',
      description: 'Seamlessly integrate the chatbot with existing systems—websites or apps--requiring zero code to do so.',
    },
    {
      title: 'Highly customized UI',
      description: 'Match the chatbot appearance with the website’s UI by customizing its elements featuring the chatbot as an integral component.'
    },
    {
      title: 'Hybrid (Bot-Human) chat',
      description: 'Switch to autopilot mode and let experts resolve customers’ concerns and get your work done through proper guidance.'
    },
    {
      title: 'Multi-linguality',
      description: 'Overcome the language barrier by getting chatbots empowered with native speakers language enhancing customer engagement.'
    },
    {
      title: 'Integrations',
      description: 'Send data collected in the bot to external apps or servers, or bring in data from outside systems into the bot.'
    },
    {
      title: 'On-cloud on-premise',
      description: 'Achieve flexibility to configure Quickwork Chat on cross platforms through on-cloud and on-premise server availability.'
    },
    {
      title: 'Tech offerings',
      description: 'Get your virtual assistant on board quickly for Android, iOS, and web portals. With a trustable bot building library, empower the chatbot functioning smartly.   '
    }
  ];

  benefits: Definition[] = [
    {
      title: 'Zero maintenance',
      description: 'Feel hassle-free for the maintenance of the bot service as our experts work proactively to ensure the system is in good health.'
    },
    {
      title: 'Always live',
      description: 'Irrespective of leaves, official holidays, office shift timings, etc. Quickwork Chat works for you as a virtual assistant 24x7 for persistent engagement.'
    },
    {
      title: 'Broadcasting',
      description: 'Using a single click, broadcast announcements, news, and product updates to all the users and groups.'
    },
    {
      title: 'Increased conversations',
      description: 'Get visitors the specific information they need without having to read through your whole site and answer all the questions they have.'
    },
    {
      title: 'Understand user needs',
      description: 'Get a 360 view of what your users need and how to improve your content and website. See responses in aggregate and the breakdown of how they responded.'
    },
    {
      title: 'Enhanced engagements',
      description: 'Customer engagement grows exponentially through data gathered via Google Forms, email address, and customer profiles over time. The probability of lead to deal conversation thus gets higher using insightful data. '
    }
  ]

  caseStudies: Definition[] = [
    {
      title: 'Lead generation bot to the rescue',
      description: 'Know the customer journey survival story of TATA AIA as lead generation bot provided a helping hand. See the top 5 benefits they enjoyed. ',
      donwloadLink: '',
    },
    {
      title: 'Understanding Futurist’s platform functionality got easier ',
      description: 'Top start-ups in Asia used Quickwork Chat to explain their innovative platform. Investors grew interest. ',
      donwloadLink: '',
    },
    {
      title: 'Bharati AXA-QC attendance bot relation established',
      description: 'By recording 5000 employee’s check-in/checkout in less than a minute, Bharati AXA took a sigh of relief. Employee onboarding back to stability.',
      donwloadLink: '',
    }
  ]

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    // const changeInterval = interval();
    // changeInterval.subscribe(i => {
    //   let index = i;
    //   if (i > (this.contentStream.length - 1)) {
    //     index = 0;
    //     index++;
    //   }
    //   console.log(index);
    //   this.title = this.contentStream[index];
    // });
  }

  submit() {
    this.appService.redirectToQWChat();
  }

  redirectTQWChat() {
    this.appService.redirectToQWChat();
  }

}
