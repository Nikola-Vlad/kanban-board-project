const tasks = [
    {
        id: 1,
        column: 'backlog',
        priority: 'Undefined',
        title: 'Feed Research',
        description: 'Feed design is required...',
        dueDate: '2026-10-09'
    },

    {
        id: 2,
        column: 'todo',
        priority: 'high',
        title: 'Create Dashboard Component',
        description: 'Create of calendar...',
        dueDate: '2026-10-23'
    },

    {
        id: 3,
        column: 'inprogress',
        priority: 'low',
        title: 'Add Kanban Design to Your Portfolio',
        description: 'Do not forget to design it nicely...',
        dueDate: '2026-10-04'
    },

    {
        id: 4,
        column: 'done',
        priority: 'medium',
        title: 'Create Wireframe for Kanban',
        description: 'Kanban design is required for...',
        dueDate: '2026-10-09'
    },

     {
        id: 5,
        column: 'backlog',
        priority: 'high',
        title: 'Design System',
        description: 'Design decisions need to be taken for our new project.',
        dueDate: '2026-10-25'
    },

    {
        id: 6,
        column: 'backlog',
        priority: 'medium',
        title: 'Update Last Design Folder',
        description: 'Old design files need to be organized and archived.',
        dueDate: '2026-10-09'
    },

    {
        id: 7,
        column: 'backlog',
        priority: 'low',
        title: 'Prepare to Meeting',
        description: 'Gather notes and slides before the upcoming meeting.',
        dueDate: '2026-10-04'
    },

    {
        id: 8,
        column: 'todo',
        priority: 'medium',
        title: 'Calendar Research',
        description: "Researching for calendar design. Don't forget the timezone.",
        dueDate: '2026-10-09'
    },

    {
        id: 9,
        column: 'inprogress',
        priority: 'medium',
        title: 'Create Wireframe for Mobile',
        description: 'Sketch out the mobile layout before moving to design.',
        dueDate: '2026-10-09'
    },

    {
        id: 10,
        column: 'inprogress',
        priority: 'high',
        title: 'Design System Research',
        description: 'Design decisions need to be taken for our new project.',
        dueDate: '2026-10-25'
    },

    {
        id: 11,
        column: 'done',
        priority: 'high',
        title: 'Navigation Prototype',
        description: 'Interactive prototype for the main navigation flow.',
        dueDate: '2026-10-25'
    },

    {
        id: 12,
        column: 'done',
        priority: 'high',
        title: 'Prepare to Presentation',
        description: 'Slides and talking points ready for the client presentation.',
        dueDate: '2026-10-25'
    }
]

const card = document.createElement('div');
const cardDue = document.createElement('div');
const cardTimeInfo = document.createElement('span');
const clockIcon = document.createElement('i');
const tag = document.createElement('span');
const title = document.createElement('h3');
const paragraph = document.createElement('p');

const backlog = document.getElementById('backlog');

const task = tasks[0];
tag.textContent = task.priority;
tag.classList.add('tag', `tag-${task.priority.toLowerCase()}`)
title.textContent = task.title;
paragraph.textContent = task.description;
clockIcon.classList.add('fa-regular', 'fa-clock');
cardTimeInfo.classList.add('card-time-info')
cardDue.classList.add('card-due')

cardTimeInfo.appendChild(clockIcon)
const daysText = document.createTextNode('12 days')
cardTimeInfo.appendChild(daysText)

cardDue.appendChild(tag);
cardDue.appendChild(cardTimeInfo);
card.appendChild(cardDue)
card.appendChild(title)
card.appendChild(paragraph)

card.classList.add('card')

backlog.appendChild(card);
