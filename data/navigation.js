/* =====================================================================
 * NAVIGATION
 * ===================================================================*/

export default [
  {
    'text': 'Home',
    'route': '/',
  },
  {
    'text': 'About',
    'route': 'about',
  },
  {
    'text': 'Services',
    'route': '#',
    'children': [
      {
        'text': 'Lorem Ipsum',
        'route': '#',
      },
      {
        'text': 'Dolor Sit Amet',
        'route': '#',
        'children': [
          {
            'text': 'Lorem Ipsum',
            'route': '#',
          },
          {
            'text': 'Dolor Sit Amet',
            'route': '#',
          },
        ]
      },
    ]
  },
  {
    'text': 'Blog',
    'route': '#',
  },
  {
    'text': 'Contact',
    'route': '#',
  },
]
