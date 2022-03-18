export default class PollWidget {
    constructor(element, data, question) {
        this.element = element;
        this.data = data;
        this.isResultVisible = false;

        this.element.innerHTML = `
            <div class="poll">
                <div class="poll__question" id="pollQuestion">${question}</div>
                <hr>
                <div class="poll__options" id="pollOptions"></div>
            </div>
        `;

        this.initOptions();
    }

    initOptions() {
        const optionsContainer = this.element.querySelector('#pollOptions');

        let options = '<ul>';
        this.data.map(item => {
            options += `
                <li class="poll__option-item hover-active" data-id=${item.id}>
                    ${item.option}
                    <div class="poll__option-item-percentage"></div>
                    <div class="poll__option-item-result"></div>
                </li>`
        });
        options += '</ul>';

        optionsContainer.innerHTML = options;

        this.element.querySelectorAll('.poll__option-item').forEach(option => {
            option.addEventListener('click', this.selectOption.bind(this));
        });
    }

    selectOption(e) {
        if (this.isResultVisible) return;

        const selectedOption = e.target.getAttribute('data-id');

        this.data[selectedOption].count++;
        this.showResult();
    }

    showResult(selectedIndex) {
        const totalVote = this.data.reduce((total, option) => total += option.count, 0);
        console.log('totalVote', totalVote);

        for (let i = 0; i < this.data.length; i++) {
            const element = this.element.querySelector(`.poll__option-item[data-id="${this.data[i].id}"]`);
            const percentage = (this.data[i].count / totalVote) * 100;
            element.querySelector(`.poll__option-item-percentage`).style.width = `${percentage}%`;
            element.querySelector(`.poll__option-item-result`).innerText = `${percentage.toFixed(2)}%`;
            element.style.cursor = 'default';
            element.classList.remove('hover-active');

            if (i === selectedIndex) {
                element.classList.add('selected');
            }
        }

        this.isResultVisible = true;



    }

}