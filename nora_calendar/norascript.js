const calendarElement = document.getElementById('calendar');
const monthYearElement = document.getElementById('month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const calendarImage = document.getElementById('calendar-image')

const monthImages = ['nora-pics/January.png', 'nora-pics/February.png',
    'nora-pics/March.png', 'nora-pics/April.png', 'nora-pics/May.png', 'nora-pics/June.png',
    'nora-pics/July.png', 'nora-pics/August.png', 'nora-pics/September.png', 'nora-pics/October.png',
    'nora-pics/November.png', 'nora-pics/December.png'
];
function updateCalendarImage(month) {
    calendarImage.src = monthImages[month];
}

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Set calendar Image
    updateCalendarImage(month);
    // Set month and year header
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    monthYearElement.textContent = `${monthNames[month]} ${year}`;

    // Clear previous calendar days
    calendarElement.innerHTML = '';

    // Render day headers (Sun, Mon, etc.)
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('day', 'day-header');
        calendarElement.appendChild(dayElement);
    });

    // Calculate padding for the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const paddingDay = document.createElement('div');
        paddingDay.classList.add('day');
        calendarElement.appendChild(paddingDay);
    }

    // Render days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('day');
        calendarElement.appendChild(dayElement);
    }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);