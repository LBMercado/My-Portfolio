const baseImgUrl = 'assets/project-imgs/';

export const mockProjects = [
  {
    name: 'Queueing System',
    imgs: [
      {
        imgUrl: baseImgUrl + 'queueing-system/login.bmp',
        imgDesc: 'Login Page of the application'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/admin-add-lane.bmp',
        imgDesc: 'Admin page for adding queue lanes'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/admin-add-user.bmp',
        imgDesc: 'Admin page for adding new users'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/admin-edit-lane.bmp',
        imgDesc: 'Admin page for editing queue lanes'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/admin-main-page.bmp',
        imgDesc: "Admin\'s main page"
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/attendant-main-page.bmp',
        imgDesc: 'Attendant\'s main page'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/attendant-view.bmp',
        imgDesc: 'Attendant\'s view queues page'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/customer-main-page.bmp',
        imgDesc: 'Customer\'s main page'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/customer-view.bmp',
        imgDesc: 'Customer\'s view queues page'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/generic-user-edit.bmp',
        imgDesc: 'General page for editing user info'
      },
      {
        imgUrl: baseImgUrl + 'queueing-system/generic-user-reset-password.bmp',
        imgDesc: 'General page for reseting user password'
      }
    ],
    description: 'A generic queueing system.',
    technologies: ['C#', 'Apache Cordova', 'WCF', 'MSSQL', 'AngularJS', 'HTML', 'CSS']
  },
  {
    name: 'APC Monitor',
    imgs: [
      {
        imgUrl: baseImgUrl + 'apc-monitor/WebApp-GUI-v1.png',
        imgDesc: 'The web application with graphs showing the measured and predicted values for the air pollutant concentrations.'
      }
    ],
    description: ' Front end application for viewing an IoT APC(Air Pollution Contaminant) monitoring network.',
    technologies: ['Angular', 'HTML', 'CSS']
  },
  {
    name: 'Contiki Firmware for IoT APC monitoring network.',
    imgs: [
      {
        imgUrl: baseImgUrl + 'contiki-firmware/Revised_Block_Diagram.png',
        imgDesc: 'Block diagram of the system composed of IoT motes'
      },
      {
        imgUrl: baseImgUrl + 'contiki-firmware/SystemFlowchartV1.1.png',
        imgDesc: 'System flowchart for the motes'
      },
      {
        imgUrl: baseImgUrl + 'contiki-firmware/zolertia-mote-with-sensors.jpg',
        imgDesc: 'The Zolertia motes with sensors'
      },
      {
        imgUrl: baseImgUrl + 'contiki-firmware/zolertia-mote.jpg',
        imgDesc: 'The Zolertia mote itself'
      }
    ],
    description: 'Embedded program/firmware for the microcontrollers composing an IoT APC(Air Pollution Contaminant) monitoring network.',
    technologies: ['C']
  }
];
