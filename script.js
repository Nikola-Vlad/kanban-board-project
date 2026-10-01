let tasks = [
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
        priority: 'High',
        title: 'Create Dashboard Component',
        description: 'Create of calendar...',
        dueDate: '2026-10-23'
    },

    {
        id: 3,
        column: 'inprogress',
        priority: 'Low',
        title: 'Add Kanban Design to Your Portfolio',
        description: 'Do not forget to design it nicely...',
        dueDate: '2026-10-04'
    },

    {
        id: 4,
        column: 'done',
        priority: 'Medium',
        title: 'Create Wireframe for Kanban',
        description: 'Kanban design is required for...',
        dueDate: '2026-10-09'
    },

    {
        id: 5,
        column: 'backlog',
        priority: 'High',
        title: 'Design System',
        description: 'Design decisions need to be taken for our new project.',
        dueDate: '2026-10-25'
    },

    {
        id: 6,
        column: 'backlog',
        priority: 'Medium',
        title: 'Update Last Design Folder',
        description: 'Old design files need to be organized and archived.',
        dueDate: '2026-10-09'
    },

    {
        id: 7,
        column: 'backlog',
        priority: 'Low',
        title: 'Prepare for Meeting',
        description: 'Gather notes and slides before the upcoming meeting.',
        dueDate: '2026-10-04'
    },

    {
        id: 8,
        column: 'todo',
        priority: 'Medium',
        title: 'Calendar Research',
        description: "Researching for calendar design. Don't forget the timezone.",
        dueDate: '2026-10-09'
    },

    {
        id: 9,
        column: 'inprogress',
        priority: 'Medium',
        title: 'Create Wireframe for Mobile',
        description: 'Sketch out the mobile layout before moving to design.',
        dueDate: '2026-10-09'
    },

    {
        id: 10,
        column: 'inprogress',
        priority: 'High',
        title: 'Design System Research',
        description: 'Design decisions need to be taken for our new project.',
        dueDate: '2026-10-25'
    },

    {
        id: 11,
        column: 'done',
        priority: 'High',
        title: 'Navigation Prototype',
        description: 'Interactive prototype for the main navigation flow.',
        dueDate: '2026-10-25'
    },

    {
        id: 12,
        column: 'done',
        priority: 'High',
        title: 'Prepare for Presentation',
        description: 'Slides and talking points ready for the client presentation.',
        dueDate: '2026-10-08'
    }
]

function createCard(task) {
    const card = document.createElement('div');
    const cardDue = document.createElement('div');
    const cardTimeInfo = document.createElement('span');
    const clockIcon = document.createElement('i');
    const tag = document.createElement('span');
    const title = document.createElement('h3');
    const paragraph = document.createElement('p');
    const columnType = document.getElementById(task.column);
    const deleteButton = document.createElement('button');
    const deleteBtnIcon = document.createElement('i');

    tag.textContent = task.priority;
    tag.classList.add('tag', `tag-${task.priority.toLowerCase()}`);
    title.textContent = task.title;
    paragraph.textContent = task.description;
    clockIcon.classList.add('fa-regular', 'fa-clock');
    cardTimeInfo.classList.add('card-time-info');
    cardDue.classList.add('card-due');
    cardTimeInfo.appendChild(clockIcon);
    const addButton = columnType.querySelector('.add-card');
    deleteButton.classList.add('delete-btn')
    deleteBtnIcon.classList.add('fa-solid', 'fa-trash')
    
    // DATE RELATED CODE!
    const currentDate = new Date();
    const taskDate = new Date(task.dueDate);
    const expectedDueDate = taskDate - currentDate;
    const dailyMilisec = 1000 * 60 * 60 * 24;
    const finalDueDate = Math.ceil(expectedDueDate / dailyMilisec);
    let daysLabel;
    
    if(finalDueDate < 0) {
        daysLabel = 'Overdue';
    } else if (finalDueDate === 0) {
        daysLabel = `Due today`;
    } else if (finalDueDate === 1) {
        daysLabel = 'Due in 1 day';
    } else {
        daysLabel = `${finalDueDate} days`;
    }
    const daysText = document.createTextNode(daysLabel);
    cardTimeInfo.appendChild(daysText);
    // DATE RELATED CODE!
    
    cardDue.appendChild(tag);
    cardDue.appendChild(cardTimeInfo);
    card.appendChild(cardDue);
    card.appendChild(title);
    card.appendChild(paragraph);
    card.classList.add('card');
    columnType.appendChild(card);
    columnType.appendChild(addButton);
    card.appendChild(deleteButton);
    deleteButton.appendChild(deleteBtnIcon);

    deleteButton.addEventListener('click', () => {
        tasks = tasks.filter(t => t.id !== task.id)
        card.remove();
        updateCounts();
    })
}
tasks.forEach(createCard);

const taskCount = document.querySelector('.count');

function updateCounts () {
    const columns = document.querySelectorAll('.column');

    columns.forEach(c => {
        const cardCount = c.querySelectorAll('.card').length;
        const span = c.querySelector('.count');
        span.textContent = cardCount;
    })
}

updateCounts();

const addCardButtons = document.querySelectorAll('.add-card');
const form = document.querySelector('form');
let selectedColumn;

addCardButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedColumn = button.closest('.column').id;
        form.classList.remove('hidden');
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const title = formData.get('title');
    const description = formData.get('description');
    const priority = formData.get('priority');
    const dueDate = formData.get('dueDate');

    if(!dueDate) {
        window.alert('Date field is required!')
        return;
    }
    
    const taskIds = tasks.map(task => task.id);
    let newId = Math.max(...taskIds) + 1;

    const newTask = {
        id: newId,
        title,
        description,
        priority,
        dueDate,
        column: selectedColumn
    }

    tasks.push(newTask);
    createCard(newTask);
    form.reset();
    form.classList.add('hidden');
    updateCounts();
})



