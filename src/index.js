import './style.css';
import kebabMenu from '../img/kebab-menu.svg';
import enterIcon from '../img/enter-icon.svg';
import refreshIcon from '../img/Refresh_icon.svg';

const toDoLists = [
  {
    description: 'Read my Bible',
    completed: false,
    index: 1,
  },
  {
    description: 'Meet My coding partners',
    completed: false,
    index: 2,
  },
  {
    description: 'Attend standup call',
    completed: false,
    index: 3,
  },
];

const listItems = document.querySelector('.list-items');

const refreshImg = document.querySelector('.refresh-icon');
refreshImg.src = refreshIcon;

const enterImg = document.querySelector('.enter-icon');
enterImg.src = enterIcon;

const populateLists = () => {
  toDoLists.forEach((list) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = ` <div>
        <input type="checkbox"></input>
        <p>${list.description}</p>
      </div>
      <img src="${kebabMenu}" alt="Kebab-menu" class="kebab-icon">
    `;

    listItems.appendChild(listItem);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  populateLists();
});
